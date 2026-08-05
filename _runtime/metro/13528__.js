// _runtime/metro/13528__.js

export default (arg0, arg1) => {
  const tmp = require("13526__.js")(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};