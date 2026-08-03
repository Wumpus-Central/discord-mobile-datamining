const items = [new require("Comparator")(">=0.0.0-0")];
let tmp = new require("Comparator")(">=0.0.0-0");
const items1 = [new require("Comparator")(">=0.0.0")];
function simpleSubset(arg0, item10015, includePrerelease) {
  let tmp3;
  let tmp4;
  if (arg0 === item10015) {
    return true;
  } else {
    let tmp = includePrerelease;
    let tmp9 = arg0;
    if (1 === arg0.length) {
      tmp9 = arg0;
      if (arg0[0].semver === require(13016) /* Comparator */.ANY) {
        if (1 === item10015.length) {
          if (item10015[0].semver === tmp6(13016).ANY) {
            return true;
          }
        }
      }
      const tmp5 = require;
      tmp6 = require;
      const tmp7 = dependencyMap;
    }
    let tmp13 = item10015;
    if (1 === item10015.length) {
      tmp13 = item10015;
      if (item10015[0].semver === require(13016) /* Comparator */.ANY) {
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
        let tmp27 = nextResult;
        if (">=" !== tmp26.operator) {
          let tmp28 = nextResult;
          if ("<" !== tmp26.operator) {
            let tmp29 = nextResult;
            if ("<=" !== tmp26.operator) {
              let tmp30 = nextResult;
              let addResult = set.add(tmp26.semver);
            }
          }
          let tmp32 = lowerLT;
          let tmp33 = tmp2;
          let tmp34 = nextResult;
          tmp2 = lowerLT(tmp2, tmp26, includePrerelease);
        }
        continue;
      }
      let tmp35 = higherGT;
      let tmp36 = tmp;
      let tmp37 = nextResult;
      tmp = higherGT(tmp, tmp26, includePrerelease);
    }
    if (set.size > 1) {
      tmp = null;
      return null;
    } else {
      if (tmp) {
        if (tmp2) {
          const tmp46 = require(13002) /* SemVer */(tmp.semver, tmp2.semver, includePrerelease);
          if (tmp46 > 0) {
            tmp = null;
            return null;
          } else {
            let tmp39 = tmp46;
            if (0 === tmp46) {
              if (">=" === tmp.operator) {
                tmp = tmp2;
                tmp39 = tmp46;
              }
              tmp = null;
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
            let tmp99 = nextResult2;
            tmp98 = ">" === tmp97.operator;
          }
          if (!tmp98) {
            tmp = nextResult2;
            tmp98 = ">=" === tmp97.operator;
          }
          tmp4 = tmp98;
          tmp = tmp3;
          if (!tmp3) {
            tmp = nextResult2;
            tmp = "<" === tmp97.operator;
          }
          if (!tmp) {
            tmp = nextResult2;
            tmp = "<=" === tmp97.operator;
          }
          tmp3 = tmp;
          if (tmp) {
            let length = flag4;
            if (flag4) {
              tmp = nextResult2;
              length = tmp97.semver.prerelease;
            }
            if (length) {
              tmp = nextResult2;
              length = tmp97.semver.prerelease.length;
            }
            if (length) {
              tmp = nextResult2;
              tmp = flag4;
              length = tmp97.semver.major === flag4.major;
            }
            if (length) {
              tmp = nextResult2;
              tmp = flag4;
              length = tmp97.semver.minor === flag4.minor;
            }
            if (length) {
              tmp = nextResult2;
              tmp = flag4;
              length = tmp97.semver.patch === flag4.patch;
            }
            if (length) {
              flag4 = false;
            }
            tmp = nextResult2;
            if (">" !== tmp97.operator) {
              tmp = nextResult2;
              if (">=" !== tmp97.operator) {
                if (">=" === tmp.operator) {
                  tmp = require;
                  tmp = require;
                  tmp = dependencyMap;
                  tmp = dependencyMap;
                  let _String4 = String;
                  tmp = nextResult2;
                  tmp = require(13019) /* Range */;
                  if (!tmp(tmp.semver, String(tmp97), includePrerelease)) {
                    tmp = iter3;
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            tmp = higherGT;
            tmp = nextResult2;
            tmp = higherGT(tmp, tmp97, includePrerelease);
            if (tmp === tmp97) {
              if (tmp !== tmp) {
                tmp = iter3;
                iter3.return();
                return false;
              }
            }
          }
          tmp = tmp2;
          if (tmp2) {
            let length2 = flag3;
            if (flag3) {
              tmp = nextResult2;
              length2 = tmp97.semver.prerelease;
            }
            if (length2) {
              tmp = nextResult2;
              length2 = tmp97.semver.prerelease.length;
            }
            if (length2) {
              tmp = nextResult2;
              tmp = flag3;
              length2 = tmp97.semver.major === flag3.major;
            }
            if (length2) {
              tmp = nextResult2;
              tmp = flag3;
              length2 = tmp97.semver.minor === flag3.minor;
            }
            if (length2) {
              tmp = nextResult2;
              tmp = flag3;
              length2 = tmp97.semver.patch === flag3.patch;
            }
            if (length2) {
              flag3 = false;
            }
            tmp = nextResult2;
            if ("<" !== tmp97.operator) {
              tmp = nextResult2;
              if ("<=" !== tmp97.operator) {
                tmp = tmp2;
                if ("<=" === tmp2.operator) {
                  tmp = require;
                  tmp = require;
                  tmp = dependencyMap;
                  tmp = dependencyMap;
                  tmp = tmp2;
                  let _String5 = String;
                  tmp = nextResult2;
                  tmp = require(13019) /* Range */;
                  if (!tmp(tmp2.semver, String(tmp97), includePrerelease)) {
                    tmp = iter3;
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            tmp = lowerLT;
            tmp = tmp2;
            tmp = nextResult2;
            tmp = lowerLT(tmp2, tmp97, includePrerelease);
            if (tmp === tmp97) {
              tmp = tmp2;
              if (tmp !== tmp2) {
                tmp = iter3;
                iter3.return();
                return false;
              }
            }
          }
          tmp = nextResult2;
          if (!tmp97.operator) {
            tmp = tmp2;
            if (tmp2) {
              if (0 !== tmp39) {
                tmp = iter3;
                iter3.return();
                return false;
              }
            }
          }
          continue;
        }
        if (tmp) {
          tmp = tmp3;
        }
        if (tmp) {
          tmp = tmp2;
          tmp = !tmp2;
        }
        if (tmp) {
          tmp = 0 !== tmp39;
        }
        tmp = !tmp;
        if (!tmp) {
          if (tmp2) {
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp2 = !tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== tmp39;
          }
          tmp = !tmp2;
          if (!tmp2) {
            tmp = flag4;
            tmp = !flag4;
            if (!flag4) {
              tmp = !flag3;
            }
          }
        }
        return tmp;
      } else {
        if (tmp) {
          const _String = String;
          if (!tmp57(tmp51, String(tmp), includePrerelease)) {
            iter2.return();
            return null;
          }
          tmp57 = require(13019) /* Range */;
        }
        if (tmp2) {
          const _String2 = String;
          if (!tmp67(tmp51, String(tmp2), includePrerelease)) {
            iter2.return();
            return null;
          }
          tmp67 = require(13019) /* Range */;
        }
        for (const item10134 of tmp13) {
          let tmp74 = require;
          let tmp75 = require;
          let tmp76 = dependencyMap;
          let tmp77 = dependencyMap;
          let tmp79 = nextResult1;
          let _String3 = String;
          let tmp78 = require(13019) /* Range */;
          if (tmp78(tmp51, String(item10134), arg2)) {
            continue;
          } else {
            let tmp80 = obj2;
            obj2.return();
            let tmp81 = iter2;
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
    const tmp4 = require(13002) /* SemVer */(semver.semver, semver2.semver, includePrerelease);
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
    const tmp4 = require(13002) /* SemVer */(semver.semver, semver2.semver, includePrerelease);
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

export default (arg0, arg1, includePrerelease) => {
  let obj = includePrerelease;
  if (includePrerelease === undefined) {
    obj = {};
  }
  if (arg0 === arg1) {
    return true;
  } else {
    const tmp22 = new require(13017) /* Range */(arg0, obj);
    const tmp27 = new require(13017) /* Range */(arg1, obj);
    let flag = false;
    const iter = tmp22.set[Symbol.iterator]();
    while (iter !== undefined) {
      let set = tmp27.set;
      let tmp5 = set;
      let tmp6 = set;
      for (const item10015 of set) {
        let tmp7 = simpleSubset;
        let tmp8 = nextResult;
        let tmp9 = simpleSubset(tmp4, item10015, obj);
        let tmp10 = flag;
        if (!flag) {
          let tmp11 = tmp9;
          tmp10 = null !== tmp9;
        }
        flag = tmp10;
        let tmp12 = tmp9;
        if (tmp9) {
          let tmp13 = obj2;
          obj2.return();
          continue label0;
        }
        continue;
      }
      let tmp14 = flag;
      if (flag) {
        let tmp15 = iter;
        iter.return();
        return false;
      }
    }
    return true;
  }
};