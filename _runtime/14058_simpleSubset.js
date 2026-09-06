// === Module 14058: simpleSubset ===

// Module 14058 (simpleSubset)
import _mod14030 from "module_14030" /* 14030 */;
import Comparator from "Comparator" /* 14044 */;
import _mod14045 from "module_14045" /* 14045 */;
import _mod14047 from "module_14047" /* 14047 */;

const items = [new Comparator(">=0.0.0-0")];
let tmp = new Comparator(">=0.0.0-0");
const items1 = [new Comparator(">=0.0.0")];
function simpleSubset(arg0, item10015, includePrerelease) {
  let tmp;
  let tmp3;
  let tmp4;
  if (arg0 === item10015) {
    return true;
  } else {
    let tmp9 = arg0;
    if (1 === arg0.length) {
      tmp9 = arg0;
      if (arg0[0].semver === Comparator.ANY) {
        if (1 === item10015.length) {
          if (item10015[0].semver === Comparator.ANY) {
            return true;
          }
        }
      }
    }
    let tmp13 = item10015;
    if (1 === item10015.length) {
      tmp13 = item10015;
      if (item10015[0].semver === Comparator.ANY) {
        if (includePrerelease.includePrerelease) {
          return true;
        } else {
          tmp13 = items1;
        }
      }
    }
    const _Set = Set;
    const set = new Set();
    const iter = tmp9[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp26 = nextResult;
      if (">" !== nextResult.operator) {
        if (">=" !== tmp26.operator) {
          if ("<" !== tmp26.operator) {
            if ("<=" !== tmp26.operator) {
              let addResult = set.add(tmp26.semver);
            }
          }
          tmp2 = lowerLT(tmp2, tmp26, includePrerelease);
        }
        continue;
      }
      tmp = higherGT(tmp, tmp26, includePrerelease);
    }
    if (set.size > 1) {
      return null;
    } else {
      if (tmp) {
        if (tmp2) {
          const tmp46 = _mod14030(tmp.semver, tmp2.semver, includePrerelease);
          if (tmp46 > 0) {
            return null;
          } else {
            let tmp39 = tmp46;
            if (0 === tmp46) {
              if (">=" === tmp.operator) {
                tmp39 = tmp46;
              }
              return null;
            }
          }
        }
      }
      const iter2 = tmp21[Symbol.iterator]();
      const nextResult1 = iter2.next();
      if (iter2 === undefined) {
        includePrerelease = !tmp2;
        if (tmp2) {
          includePrerelease = includePrerelease.includePrerelease;
        }
        if (!includePrerelease) {
          includePrerelease = !tmp2.semver.prerelease.length;
        }
        let semver = !includePrerelease;
        if (!includePrerelease) {
          semver = tmp2.semver;
        }
        let flag3 = semver;
        let includePrerelease2 = !tmp;
        if (tmp) {
          includePrerelease2 = includePrerelease.includePrerelease;
        }
        if (!includePrerelease2) {
          includePrerelease2 = !tmp.semver.prerelease.length;
        }
        let semver2 = !includePrerelease2;
        if (!includePrerelease2) {
          semver2 = tmp.semver;
        }
        let flag4 = semver2;
        let tmp89 = flag3;
        if (flag3) {
          tmp89 = 1 === flag3.prerelease.length;
        }
        if (tmp89) {
          tmp89 = "<" === tmp2.operator;
        }
        if (tmp89) {
          tmp89 = 0 === flag3.prerelease[0];
        }
        if (tmp89) {
          flag3 = false;
        }
        const iter3 = tmp13[Symbol.iterator]();
        const nextResult2 = iter3.next();
        while (iter3 !== undefined) {
          let tmp97 = nextResult2;
          let tmp98 = tmp4;
          if (!tmp4) {
            tmp98 = ">" === tmp97.operator;
          }
          if (!tmp98) {
            tmp98 = ">=" === tmp97.operator;
          }
          tmp4 = tmp98;
          let tmp101 = tmp3;
          if (!tmp3) {
            tmp101 = "<" === tmp97.operator;
          }
          if (!tmp101) {
            tmp101 = "<=" === tmp97.operator;
          }
          tmp3 = tmp101;
          if (tmp) {
            let length = flag4;
            if (flag4) {
              length = tmp97.semver.prerelease;
            }
            if (length) {
              length = tmp97.semver.prerelease.length;
            }
            if (length) {
              length = tmp97.semver.major === flag4.major;
            }
            if (length) {
              length = tmp97.semver.minor === flag4.minor;
            }
            if (length) {
              length = tmp97.semver.patch === flag4.patch;
            }
            if (length) {
              flag4 = false;
            }
            if (">" !== tmp97.operator) {
              if (">=" !== tmp97.operator) {
                if (">=" === tmp.operator) {
                  let _String4 = String;
                  let tmp120 = _mod14047;
                  if (!tmp120(tmp.semver, String(tmp97), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            let tmp127 = higherGT(tmp, tmp97, includePrerelease);
            if (tmp127 === tmp97) {
              if (tmp128 !== tmp) {
                iter3.return();
                return false;
              }
            }
          }
          if (tmp2) {
            let length2 = flag3;
            if (flag3) {
              length2 = tmp97.semver.prerelease;
            }
            if (length2) {
              length2 = tmp97.semver.prerelease.length;
            }
            if (length2) {
              length2 = tmp97.semver.major === flag3.major;
            }
            if (length2) {
              length2 = tmp97.semver.minor === flag3.minor;
            }
            if (length2) {
              length2 = tmp97.semver.patch === flag3.patch;
            }
            if (length2) {
              flag3 = false;
            }
            if ("<" !== tmp97.operator) {
              if ("<=" !== tmp97.operator) {
                if ("<=" === tmp2.operator) {
                  let _String5 = String;
                  let tmp147 = _mod14047;
                  if (!tmp147(tmp2.semver, String(tmp97), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            let tmp154 = lowerLT(tmp2, tmp97, includePrerelease);
            if (tmp154 === tmp97) {
              if (tmp155 !== tmp2) {
                iter3.return();
                return false;
              }
            }
          }
          if (!tmp97.operator) {
            if (tmp2) {
              if (0 !== tmp39) {
                iter3.return();
                return false;
              }
            }
          }
          continue;
        }
        let tmp164 = tmp;
        if (tmp) {
          tmp164 = tmp3;
        }
        if (tmp164) {
          tmp164 = !tmp2;
        }
        if (tmp164) {
          tmp164 = 0 !== tmp39;
        }
        let tmp166 = !tmp164;
        if (!tmp164) {
          if (tmp2) {
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp2 = !tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== tmp39;
          }
          let tmp167 = !tmp2;
          if (!tmp2) {
            let tmp169 = !flag4;
            if (!flag4) {
              tmp169 = !flag3;
            }
            tmp167 = tmp169;
          }
          tmp166 = tmp167;
        }
        return tmp166;
      } else {
        if (tmp) {
          const _String = String;
          if (!tmp57(tmp51, String(tmp), includePrerelease)) {
            iter2.return();
            return null;
          }
          tmp57 = _mod14047;
        }
        if (tmp2) {
          const _String2 = String;
          if (!tmp67(tmp51, String(tmp2), includePrerelease)) {
            iter2.return();
            return null;
          }
          tmp67 = _mod14047;
        }
        for (const item10134 of tmp13) {
          let _String3 = String;
          let tmp78 = _mod14047;
          if (tmp78(tmp51, String(item10134), arg2)) {
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
    tmp21 = set;
  }
}
function higherGT(semver, semver2, includePrerelease) {
  if (semver) {
    const tmp4 = _mod14030(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 <= 0) {
      if (tmp4 < 0) {
        let tmp6 = semver2;
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
    const tmp4 = _mod14030(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 >= 0) {
      if (tmp4 > 0) {
        let tmp6 = semver2;
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

export default (arg0, arg1) => {
  let obj = includePrerelease;
  if (includePrerelease === undefined) {
    obj = {};
  }
  if (arg0 === arg1) {
    return true;
  } else {
    const tmp22 = new _mod14045(arg0, obj);
    const tmp27 = new _mod14045(arg1, obj);
    let flag = false;
    const iter = tmp22.set[Symbol.iterator]();
    while (iter !== undefined) {
      let set = tmp27.set;
      for (const item10015 of set) {
        let tmp9 = simpleSubset(tmp4, item10015, obj);
        let tmp10 = flag;
        if (!flag) {
          tmp10 = null !== tmp9;
        }
        flag = tmp10;
        if (tmp9) {
          obj2.return();
          continue label0;
        }
        continue;
      }
      if (flag) {
        iter.return();
        return false;
      }
    }
    return true;
  }
};