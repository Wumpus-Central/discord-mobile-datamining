// === Module 12961: Range ===

// Module 12961 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(12954) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};