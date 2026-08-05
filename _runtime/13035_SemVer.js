// _runtime/13035_SemVer.js

export default (arg0, arg1, arg2) => {
  const obj = new require("13021_SemVer.js") /* SemVer */(arg0, arg2);
  return obj.compare(new require("13021_SemVer.js") /* SemVer */(arg1, arg2));
};