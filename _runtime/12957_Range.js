// === Module 12957: Range ===

// Module 12957 (Range)

export default (arg0, arg1) => {
  const tmp = new require(12954) /* Range */(arg0, arg1);
  return new require(12954) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};