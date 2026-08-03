
export default (arg0) => {
  try {
    return arg0();
  } catch (err) {
    return true;
  }
};