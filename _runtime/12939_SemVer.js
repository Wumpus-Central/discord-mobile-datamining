// _runtime/12939_SemVer.js

export default (arg0, arg1, arg2) => {
  const obj = new require(12925) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12925) /* SemVer */(arg1, arg2));
};