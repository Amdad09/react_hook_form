import React from "react";

const Field = ({ label, children, error, htmlForm }) => {
    const id = htmlForm || getChildId(children);
  return (
    <div className="flex flex-col items-start justify-start mt-2 mr-2 w-full p-0 ">
          {label && <label className="mb-1" htmlFor={id}>{label}</label>}
          {children}
          {!!error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
    const child = React.Children.only(children);
    if ('id' in child.props) {
        return child.props.id;
    }
}
export default Field;