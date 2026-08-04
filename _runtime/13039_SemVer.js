
export default (arg0, arg1, arg2) => {
  const obj = new require(13022) /* SemVer */(arg0, arg2);
  const tmp = new require(13022) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};