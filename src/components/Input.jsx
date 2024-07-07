import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { children, type = "text", classname = "", label, ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full ">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id} {...props}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default Input;
