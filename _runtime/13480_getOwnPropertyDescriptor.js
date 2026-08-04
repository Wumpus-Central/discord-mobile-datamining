if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13483)(arg0);
    const tmp4 = require(13490) /* text */(arg1);
    if (!require(13513)) {
      if (tmp(13501)(tmp3, tmp4)) {
        let tmpResult = tmp(13515);
        tmpResult = tmp(13511);
        return tmpResult(!tmpResult(tmp(13516).f, tmp3, tmp4), tmp3[tmp4]);
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