import { 13526__ } from "13526__.js";
// _runtime/metro/13528__.js

export default (arg0, arg1) => {
  const tmp = 13526__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};