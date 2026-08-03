// === Module 13020: Range ===

// Module 13020 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13017) /* Range */(arg0, arg1);
  return new require(13017) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};