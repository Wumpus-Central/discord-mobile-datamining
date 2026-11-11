// _runtime/16060_errorUtil.js
let obj = {};
obj.errToObj = (message) => {
  if (typeof message === "string") {
    const obj2 = { message };
    let obj = obj2;
  } else {
    obj = message;
    if (!message) {
      obj = {};
    }
  }
  return obj;
};
obj.toString = (message) => {
  let tmp = message;
  if (typeof message !== "string") {
    message = undefined;
    if (null != message) {
      message = message.message;
    }
    tmp = message;
  }
  return tmp;
};

export const errorUtil = obj;
