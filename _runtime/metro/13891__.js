// === Module 13891: ? ===

// Module 13891
import _mod13863 from "module_13863" /* 13863 */;
import _mod13877 from "module_13877" /* 13877 */;
import _mod13878 from "module_13878" /* 13878 */;
import _mod13880 from "module_13880" /* 13880 */;

let set;

let tmp = new _mod13877(">=0.0.0-0");
const items = [tmp];
let tmp2 = new _mod13877(">=0.0.0");
const items1 = [tmp2];
function simpleSubset(arg0, item10015, includePrerelease) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  if (arg0 === item10015) {
    return true;
  } else {
    let tmp9 = arg0;
    if (1 === arg0.length) {
      tmp9 = arg0;
      if (arg0[0].semver === _mod13877.ANY) {
        if (1 === item10015.length) {
          if (item10015[0].semver === _mod13877.ANY) {
            return true;
          }
        }
        tmp9 = includePrerelease.includePrerelease ? items : items1;
      }
    }
    let tmp12 = item10015;
    if (1 === item10015.length) {
      tmp12 = item10015;
      if (item10015[0].semver === _mod13877.ANY) {
        if (includePrerelease.includePrerelease) {
          return true;
        } else {
          tmp12 = items1;
        }
      }
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const iter = tmp9[Symbol.iterator]();
    const nextResult = iter.next();
    const tmp18 = set;
    while (iter !== undefined) {
      let tmp23 = nextResult;
      if (">" !== nextResult.operator) {
        if (">=" !== tmp23.operator) {
          if ("<" !== tmp23.operator) {
            if ("<=" !== tmp23.operator) {
              let addResult = set.add(tmp23.semver);
            }
          }
          tmp2 = lowerLT(tmp2, tmp23, includePrerelease);
        }
        continue;
      }
      tmp = higherGT(tmp, tmp23, includePrerelease);
    }
    if (set.size > 1) {
      return null;
    } else {
      let tmp36;
      if (tmp) {
        if (tmp2) {
          const tmp43 = _mod13863(tmp.semver, tmp2.semver, includePrerelease);
          if (tmp43 > 0) {
            return null;
          } else {
            tmp36 = tmp43;
            if (0 === tmp43) {
              if (">=" === tmp.operator) {
                tmp36 = tmp43;
              }
              return null;
            }
          }
        }
      }
      const iter2 = tmp18[Symbol.iterator]();
      const nextResult1 = iter2.next();
      if (iter2 === undefined) {
        includePrerelease = !tmp2;
        if (tmp2) {
          includePrerelease = includePrerelease.includePrerelease;
        }
        if (!includePrerelease) {
          includePrerelease = !tmp2.semver.prerelease.length;
        }
        const semver = !includePrerelease && tmp2.semver;
        let flag3 = semver;
        let includePrerelease2 = !tmp;
        if (tmp) {
          includePrerelease2 = includePrerelease.includePrerelease;
        }
        if (!includePrerelease2) {
          includePrerelease2 = !tmp.semver.prerelease.length;
        }
        const semver2 = !includePrerelease2 && tmp.semver;
        let flag4 = semver2;
        const tmp86 = flag3 && 1 === flag3.prerelease.length && "<" === tmp2.operator && 0 === flag3.prerelease[0];
        if (tmp86) {
          flag3 = false;
        }
        const iter3 = tmp12[Symbol.iterator]();
        const nextResult2 = iter3.next();
        while (iter3 !== undefined) {
          let tmp94 = nextResult2;
          let tmp95 = tmp4;
          if (!tmp95) {
            tmp95 = ">" === tmp94.operator;
          }
          if (!tmp95) {
            tmp95 = ">=" === tmp94.operator;
          }
          tmp4 = tmp95;
          let tmp98 = tmp3;
          if (!tmp98) {
            tmp98 = "<" === tmp94.operator;
          }
          if (!tmp98) {
            tmp98 = "<=" === tmp94.operator;
          }
          tmp3 = tmp98;
          let tmp101 = tmp;
          if (tmp101) {
            let length = flag4;
            if (length) {
              length = tmp94.semver.prerelease;
            }
            if (length) {
              length = tmp94.semver.prerelease.length;
            }
            if (length) {
              length = tmp94.semver.major === flag4.major;
            }
            if (length) {
              length = tmp94.semver.minor === flag4.minor;
            }
            if (length) {
              length = tmp94.semver.patch === flag4.patch;
            }
            if (length) {
              flag4 = false;
            }
            if (">" !== tmp94.operator) {
              if (">=" !== tmp94.operator) {
                if (">=" === tmp.operator) {
                  let _String4 = String;
                  let tmp117 = _mod13880;
                  if (!tmp117(tmp.semver, String(tmp94), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            let tmp124 = higherGT(tmp, tmp94, includePrerelease);
            if (tmp124 === tmp94) {
              if (tmp125 !== tmp) {
                iter3.return();
                return false;
              }
            }
          }
          let tmp128 = tmp2;
          if (tmp128) {
            let length2 = flag3;
            if (length2) {
              length2 = tmp94.semver.prerelease;
            }
            if (length2) {
              length2 = tmp94.semver.prerelease.length;
            }
            if (length2) {
              length2 = tmp94.semver.major === flag3.major;
            }
            if (length2) {
              length2 = tmp94.semver.minor === flag3.minor;
            }
            if (length2) {
              length2 = tmp94.semver.patch === flag3.patch;
            }
            if (length2) {
              flag3 = false;
            }
            if ("<" !== tmp94.operator) {
              if ("<=" !== tmp94.operator) {
                if ("<=" === tmp2.operator) {
                  let _String5 = String;
                  let tmp144 = _mod13880;
                  if (!tmp144(tmp2.semver, String(tmp94), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            let tmp151 = lowerLT(tmp2, tmp94, includePrerelease);
            if (tmp151 === tmp94) {
              if (tmp152 !== tmp2) {
                iter3.return();
                return false;
              }
            }
          }
          if (!tmp94.operator) {
            let tmp156 = tmp2;
            if (tmp156) {
              if (0 !== tmp36) {
                iter3.return();
                return false;
              }
            }
          }
          continue;
        }
        let tmp163 = !(tmp && tmp3 && !tmp2 && 0 !== tmp36);
        const tmp161 = tmp && tmp3 && !tmp2 && 0 !== tmp36;
        if (tmp163) {
          if (tmp2) {
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp2 = !tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== tmp36;
          }
          let tmp164 = !tmp2;
          if (tmp164) {
            tmp164 = !flag4 && !flag3;
          }
          tmp163 = tmp164;
        }
        return tmp163;
      } else {
        const tmp49 = tmp;
        if (tmp49) {
          const _String = String;
          const tmp54 = _mod13880;
          if (!tmp54(nextResult1, String(tmp), includePrerelease)) {
            iter2.return();
            return null;
          }
        }
        const tmp59 = tmp2;
        if (tmp59) {
          const _String2 = String;
          const tmp64 = _mod13880;
          if (!tmp64(nextResult1, String(tmp2), includePrerelease)) {
            iter2.return();
            return null;
          }
        }
        for (const item10133 of tmp12) {
          let _String3 = String;
          let tmp75 = _mod13880;
          if (tmp75(tmp48, String(item10133), includePrerelease)) {
            continue;
          } else {
            obj2.return();
            iter2.return();
            let flag = false;
            return false;
          }
        }
        iter2.return();
        return true;
      }
    }
  }
}
function higherGT(semver, semver2, includePrerelease) {
  if (semver) {
    const tmp4 = _mod13863(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 <= 0) {
      let tmp6;
      if (tmp4 < 0) {
        tmp6 = semver2;
      } else {
        tmp6 = semver;
        if (">" === semver2.operator) {
          tmp6 = semver;
        }
      }
      tmp5 = tmp6;
    }
    return tmp5;
  } else {
    return semver2;
  }
}
function lowerLT(semver, semver2, includePrerelease) {
  if (semver) {
    const tmp4 = _mod13863(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 >= 0) {
      let tmp6;
      if (tmp4 > 0) {
        tmp6 = semver2;
      } else {
        tmp6 = semver;
        if ("<" === semver2.operator) {
          tmp6 = semver;
        }
      }
      tmp5 = tmp6;
    }
    return tmp5;
  } else {
    return semver2;
  }
}

export default function(arg0, arg1) {
  let obj = includePrerelease;
  if (includePrerelease === undefined) {
    obj = {};
  }
  if (arg0 === arg1) {
    return true;
  } else {
    const self = this;
    const self2 = this;
    const self3 = this;
    const self4 = this;
    const tmp20 = new _mod13878(arg0, obj);
    let flag = false;
    const tmp23 = new _mod13878(arg1, obj);
    const iter = tmp20.set[Symbol.iterator]();
    const nextResult = iter.next();
    label0:
    while (iter !== undefined) {
      set = tmp23.set;
      for (const item10015 of set) {
        let tmp9 = simpleSubset(tmp4, item10015, obj);
        let tmp10 = flag;
        if (!tmp10) {
          tmp10 = null !== tmp9;
        }
        flag = tmp10;
        let tmp12 = tmp9;
        if (tmp12) {
          obj2.return();
          continue label0;
        }
        continue;
      }
      let tmp14 = flag;
      if (tmp14) {
        iter.return();
        return false;
      }
    }
    return true;
  }
};