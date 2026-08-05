// _runtime/13057_Range.js

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13050) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};