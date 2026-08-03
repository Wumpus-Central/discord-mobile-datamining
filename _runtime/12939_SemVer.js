// === Module 12939: SemVer ===

// Module 12939 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12925) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12925) /* SemVer */(arg1, arg2));
};