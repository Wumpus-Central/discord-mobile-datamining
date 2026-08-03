
export default (arg0, arg1, arg2) => {
  const obj = new require(12925) /* SemVer */(arg0, arg2);
  const tmp = new require(12925) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};