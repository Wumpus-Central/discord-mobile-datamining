if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13386)(arg0);
    const tmp4 = require(13393) /* text */(arg1);
    if (!require(13416)) {
      if (tmp(13404)(tmp3, tmp4)) {
        let tmpResult = tmp(13418);
        tmpResult = tmp(13414);
        return tmpResult(!tmpResult(tmp(13419).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;