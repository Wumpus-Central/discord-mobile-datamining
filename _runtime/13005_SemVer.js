// === Module 13005: SemVer ===

// Module 13005 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12988) /* SemVer */(arg0, arg2);
  const tmp = new require(12988) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};