import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import BucketListItem from "./BucketListItem";
import useHttpClient from "../../shared/hooks/http-hook";
import "./BucketList.css";
import LoadingSpinner from "../../shared/component/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/component/UIElements/ErrorModal";

const BucketList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();
  const [places, setPlaces] = useState();
  const { userId } = useParams();
  const auth = useContext(AuthContext);
  const deleteFromBucketList = id => {
    setPlaces(prevPlaces => prevPlaces.filter(place => place.id._id !== id));
    history.push(`/`);
  };
  useEffect(() => {
    const getBucketList = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/user/bucketlist?q=${userId}`
        );
        setPlaces(data.userWithBucketList);
      } catch (err) {}
    };
    getBucketList();
  }, [sendRequest, userId]);
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/`
        );
        setUser(data);
      } catch (err) {}
    };
    getUser();
  }, [sendRequest, userId]);

  const goHome = () => {
    clearError();
    history.push("/");
  };

  if (error) {
    return <ErrorModal error={error} onClear={clearError} header={`Hey!`} />;
  }
  if (isLoading)
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  else {
    return (
      <div>
        {userId === auth.userId && (
          <div className="share-box">
            <div className="share-button">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `${process.env.REACT_APP_PUBLIC_URL}/${userId}/bucketlist`
                )}&text=My+Travel+Bucket+List%2C+Connect+and+Explore.&hashtags=travelling,wanderlust,yourplacesapp`}
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                  `${process.env.REACT_APP_PUBLIC_URL}/${userId}/bucketlist`
                )}`}
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
            <p>SHARE</p>
          </div>
        )}
        <React.Fragment>
          <h2 className="center yellow-text">
            Bucket List of{" "}
            <span className="pink-text"> {user && user.user.name}</span>{" "}
          </h2>
          {places && places.length === 0 && auth.userId === userId && (
            <h2
              className="center yellow-text fade-in"
              style={{ flexDirection: "column" }}
            >
              You don't have any places in your bucket list. Maybe check some
              places?
              <Link to="/"> Go to home</Link>
            </h2>
          )}
          {auth.userId !== userId && places && places.length === 0 && (
            <h2 className="center yellow-text fade-in">
              This user does not have any places in their bucket list
            </h2>
          )}

          <div className="bucket-list-content">
            {places &&
              places.map((bucket, index) => {
                return (
                  <BucketListItem
                    bucket={bucket}
                    key={index}
                    index={index}
                    deleteBucket={deleteFromBucketList}
                  />
                );
              })}
          </div>
        </React.Fragment>
      </div>
    );
  }
};

export default BucketList;
