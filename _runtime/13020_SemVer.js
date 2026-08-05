// _runtime/13020_SemVer.js

export default (arg0, arg1) => {
  if (arg0 instanceof require("13021_SemVer.js") /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require("13021_SemVer.js") /* SemVer */(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};