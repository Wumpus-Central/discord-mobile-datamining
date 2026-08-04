// _runtime/13433_all.js

export default (arg0) => {
  if (require(13406) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};