import React from "react";
import PropTypes from "prop-types";
import UpdateItem from "../components/UpdateItem";

const Update = ({ query: { id } }) => {
  return (
    <div>
      <UpdateItem id={id} />
    </div>
  );
};
Update.propTypes = {
  query: PropTypes.object.isRequired
};

export default Update;
