import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../redux-toolkit/notificationSlice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const { notification } = useSelector((store) => store.notification);
  const handleClose = () => {
    dispatch(
      showNotification({
        open: false,
      })
    );
  };

  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
