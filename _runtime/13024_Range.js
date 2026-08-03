
export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13017) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};