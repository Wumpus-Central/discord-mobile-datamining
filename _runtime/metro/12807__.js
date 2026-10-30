// === Module 12807: ? ===

// Module 12807
const exports = arg5;
function normalize(str) {
  const match = str.match(re1);
  let tmp2 = null;
  if (match) {
    const url = { scheme: match[1], auth: match[2], host: match[3], port: match[4], path: match[5] };
    tmp2 = url;
  }
  if (tmp2) {
    if (tmp2.path) {
      str = tmp2.path;
    } else {
      return str;
    }
  }
  const parts = str.split(/\/+/);
  let diff = parts.length - 1;
  let str2 = "";
  let str3 = ".";
  let num = 0;
  if (0 <= diff) {
    do {
      let tmp5 = parts[diff];
      if (`.` === tmp5) {
        let spliceResult = parts.splice(diff, 1);
        let sum = num;
      } else if (".." === tmp5) {
        sum = num + 1;
      } else {
        sum = num;
        if (0 < num) {
          if (`` === tmp5) {
            let spliceResult1 = parts.splice(diff + 1, num);
            let num2 = 0;
          } else {
            let spliceResult2 = parts.splice(diff, 2);
            num2 = num - 1;
          }
          sum = num2;
        }
      }
      diff = diff - 1;
      num = sum;
    } while (0 <= diff);
  }
  let joined = parts.join("/");
  if (str2 === joined) {
    if (isAbsoluteResult) {
      str3 = "/";
    }
    joined = str3;
  }
  let tmp13 = joined;
  if (tmp2) {
    tmp2.path = joined;
    if (tmp2.scheme) {
      str2 = `${tmp2.scheme}:`;
    }
    const text = `${str2}//`;
    let text1 = text;
    if (tmp2.auth) {
      text1 = `${str2}//${tmp2.auth + "@"}`;
    }
    let sum1 = text1;
    if (tmp2.host) {
      sum1 = text1 + tmp2.host;
    }
    let text2 = sum1;
    if (tmp2.port) {
      text2 = `${tmp16}:${tmp2.port}`;
    }
    let sum2 = text2;
    if (tmp2.path) {
      sum2 = text2 + tmp2.path;
    }
    tmp13 = sum2;
  }
  return tmp13;
}
function join(arg0, arg1) {
  let str = arg0;
  let str2 = "";
  if ("" === arg0) {
    str = ".";
  }
  let str3 = arg1;
  if (str2 === arg1) {
    str3 = ".";
  }
  const match = str3.match(re1);
  let tmp3 = null;
  if (match) {
    const url = { scheme: match[1], auth: match[2], host: match[3], port: match[4], path: match[5] };
    tmp3 = url;
  }
  const match1 = str.match(re1);
  let tmp5 = null;
  if (match1) {
    const url1 = { scheme: match1[1], auth: match1[2], host: match1[3], port: match1[4], path: match1[5] };
    tmp5 = url1;
  }
  let str4 = str;
  if (tmp5) {
    str4 = tmp5.path || "/";
    const tmp6 = tmp5.path || "/";
  }
  if (tmp3) {
    if (!tmp3.scheme) {
      if (tmp5) {
        tmp3.scheme = tmp5.scheme;
      }
      let text = str2;
      if (tmp3.scheme) {
        text = `${tmp3.scheme}:`;
      }
      const text1 = `${tmp7}//`;
      let text2 = text1;
      if (tmp3.auth) {
        text2 = `${tmp7}//${tmp3.auth + "@"}`;
      }
      let sum = text2;
      if (tmp3.host) {
        sum = text2 + tmp3.host;
      }
      let text3 = sum;
      if (tmp3.port) {
        text3 = `${tmp10}:${tmp3.port}`;
      }
      let sum1 = text3;
      if (tmp3.path) {
        sum1 = text3 + tmp3.path;
      }
      return sum1;
    }
  }
  if (!tmp3) {
    if (!str3.match(re2)) {
      if (tmp5) {
        if (!tmp5.host) {
          if (!tmp5.path) {
            tmp5.host = str3;
            let text4 = str2;
            if (tmp5.scheme) {
              text4 = `${tmp5.scheme}:`;
            }
            const text5 = `${tmp14}//`;
            let text6 = text5;
            if (tmp5.auth) {
              text6 = `${tmp14}//${tmp5.auth + "@"}`;
            }
            let sum2 = text6;
            if (tmp5.host) {
              sum2 = text6 + tmp5.host;
            }
            let text7 = sum2;
            if (tmp5.port) {
              text7 = `${tmp17}:${tmp5.port}`;
            }
            let sum3 = text7;
            if (tmp5.path) {
              sum3 = text7 + tmp5.path;
            }
            return sum3;
          }
        }
      }
      let tmp20 = str3;
      if ("/" !== str3.charAt(0)) {
        tmp20 = normalize(`${str4.replace(/\/+$/, str2)}/${str3}`);
      }
      let tmp22 = tmp20;
      if (tmp5) {
        tmp5.path = tmp20;
        if (tmp5.scheme) {
          str2 = `${tmp5.scheme}:`;
        }
        const text8 = `${str2}//`;
        let text9 = text8;
        if (tmp5.auth) {
          text9 = `${str2}//${tmp5.auth + "@"}`;
        }
        let sum4 = text9;
        if (tmp5.host) {
          sum4 = text9 + tmp5.host;
        }
        let text10 = sum4;
        if (tmp5.port) {
          text10 = `${tmp25}:${tmp5.port}`;
        }
        let sum5 = text10;
        if (tmp5.path) {
          sum5 = text10 + tmp5.path;
        }
        tmp22 = sum5;
      }
      return tmp22;
    }
  }
  return str3;
}
let fromSetString = function identity(relativeResult) {
  return relativeResult;
};
function isProtoString(arr) {
  if (arr) {
    if (arr.length < 9) {
      return false;
    } else {
      if (95 === arr.charCodeAt(length - 1)) {
        if (95 === arr.charCodeAt(length - 2)) {
          if (111 === arr.charCodeAt(length - 3)) {
            if (116 === arr.charCodeAt(length - 4)) {
              if (111 === arr.charCodeAt(length - 5)) {
                if (114 === arr.charCodeAt(length - 6)) {
                  if (112 === arr.charCodeAt(length - 7)) {
                    if (95 === arr.charCodeAt(length - 8)) {
                      if (95 === arr.charCodeAt(length - 9)) {
                        let diff = length - 10;
                        if (0 <= diff) {
                          while (36 === arr.charCodeAt(diff)) {
                            diff = diff - 1;
                          }
                          return false;
                        }
                        return true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return false;
    }
  } else {
    return false;
  }
}
const re1 = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
const re2 = /^data:.+\,.+$/;
const tmp = !("__proto__" in Object.create(null));
let toSetString = fromSetString;
if (!tmp) {
  toSetString = function toSetString(arr) {
    let text = arr;
    if (isProtoString(arr)) {
      text = `$${arr}`;
    }
    return text;
  };
}
if (!tmp) {
  fromSetString = function fromSetString(arr) {
    let substr = arr;
    if (isProtoString(arr)) {
      substr = arr.slice(1);
    }
    return substr;
  };
}

export function getArg(arg0, file, arg2) {
  if (file in arg0) {
    return arg0[file];
  } else if (3 === arguments.length) {
    return arg2;
  } else {
    const _Error = Error;
    const error = new Error("\"" + file + "\" is a required argument.");
    throw error;
  }
}
export function urlParse(str) {
  const match = str.match(re1);
  let tmp2 = null;
  if (match) {
    const url = { scheme: match[1], auth: match[2], host: match[3], port: match[4], path: match[5] };
    tmp2 = url;
  }
  return tmp2;
}
export function urlGenerate(scheme) {
  let str = "";
  if (scheme.scheme) {
    str = `${scheme.scheme}:`;
  }
  const text = `${str}//`;
  let text1 = text;
  if (scheme.auth) {
    text1 = `${str}//${scheme.auth + "@"}`;
  }
  let sum = text1;
  if (scheme.host) {
    sum = text1 + scheme.host;
  }
  let text2 = sum;
  if (scheme.port) {
    text2 = `${tmp3}:${scheme.port}`;
  }
  let sum1 = text2;
  if (scheme.path) {
    sum1 = text2 + scheme.path;
  }
  return sum1;
}
export { normalize };
export { join };
export (str) => {
  let isMatch = "/" === str.charAt(0);
  if (!isMatch) {
    isMatch = re1.test(str);
  }
  return isMatch;
}
export function relative(_sourceRoot, arr) {
  let str = _sourceRoot;
  if ("" === _sourceRoot) {
    str = ".";
  }
  const replaced = str.replace(/\/$/, "");
  let num = 0;
  arr = replaced;
  let arr2 = replaced;
  let num2 = 0;
  if (0 !== arr.indexOf(replaced + "/")) {
    const lastIndexOfResult = arr.lastIndexOf("/");
    while (lastIndexOfResult >= 0) {
      let str2 = arr.slice(0, lastIndexOfResult);
      if (str2.match(/^([^\/]+:\/)?\/*$/)) {
        return arr;
      } else {
        num = num + 1;
        arr = str2;
        num2 = num;
        arr2 = str2;
      }
    }
    return arr;
  }
  const joined = Array(num2 + 1).join("../");
  return joined + arr.substr(arr2.length + 1);
}
export { toSetString };
export { fromSetString };
export function compareByOriginalPositions(source, source2, arg2) {
  source = source.source;
  source2 = source2.source;
  let num = 0;
  if (source !== source2) {
    let num3 = 1;
    if (null !== source) {
      let num4 = -1;
      let num5 = -1;
      if (null !== source2) {
        if (source > source2) {
          num4 = 1;
        }
        num5 = num4;
      }
      num3 = num5;
    }
    num = num3;
  }
  if (0 === num) {
    num = source.originalLine - source2.originalLine;
    if (0 === num) {
      const diff = source.originalColumn - source2.originalColumn;
      num = diff;
      if (0 === diff) {
        num = diff;
        if (!arg2) {
          num = source.generatedColumn - source2.generatedColumn;
          if (0 === num) {
            num = source.generatedLine - source2.generatedLine;
            if (0 === num) {
              const name = source.name;
              const name2 = source2.name;
              let num6 = 0;
              if (name !== name2) {
                let num8 = 1;
                if (null !== name) {
                  let num9 = -1;
                  let num10 = -1;
                  if (null !== name2) {
                    if (name > name2) {
                      num9 = 1;
                    }
                    num10 = num9;
                  }
                  num8 = num10;
                }
                num6 = num8;
              }
            }
            return num6;
          }
        }
      }
    }
  }
  num6 = num;
}
export function compareByGeneratedPositionsDeflated(generatedLine, generatedLine2, arg2) {
  let diff = generatedLine.generatedLine - generatedLine2.generatedLine;
  if (0 === diff) {
    const diff1 = generatedLine.generatedColumn - generatedLine2.generatedColumn;
    diff = diff1;
    if (0 === diff1) {
      diff = diff1;
      if (!arg2) {
        const source = generatedLine.source;
        const source2 = generatedLine2.source;
        let num = 0;
        if (source !== source2) {
          let num3 = 1;
          if (null !== source) {
            let num4 = -1;
            let num5 = -1;
            if (null !== source2) {
              if (source > source2) {
                num4 = 1;
              }
              num5 = num4;
            }
            num3 = num5;
          }
          num = num3;
        }
        diff = num;
        if (0 === num) {
          diff = generatedLine.originalLine - generatedLine2.originalLine;
          if (0 === diff) {
            diff = generatedLine.originalColumn - generatedLine2.originalColumn;
            if (0 === diff) {
              const name = generatedLine.name;
              const name2 = generatedLine2.name;
              let num6 = 0;
              if (name !== name2) {
                let num8 = 1;
                if (null !== name) {
                  let num9 = -1;
                  let num10 = -1;
                  if (null !== name2) {
                    if (name > name2) {
                      num9 = 1;
                    }
                    num10 = num9;
                  }
                  num8 = num10;
                }
                num6 = num8;
              }
            }
            return num6;
          }
        }
      }
    }
  }
  num6 = diff;
}
export function compareByGeneratedPositionsInflated(_last, toArrayResult) {
  let diff = _last.generatedLine - toArrayResult.generatedLine;
  if (0 === diff) {
    diff = _last.generatedColumn - toArrayResult.generatedColumn;
    if (0 === diff) {
      const source = _last.source;
      const source2 = toArrayResult.source;
      let num5 = 0;
      if (source !== source2) {
        let num2 = 1;
        if (null !== source) {
          let num3 = -1;
          let num4 = -1;
          if (null !== source2) {
            if (source > source2) {
              num3 = 1;
            }
            num4 = num3;
          }
          num2 = num4;
        }
        num5 = num2;
      }
      diff = num5;
      if (0 === num5) {
        diff = _last.originalLine - toArrayResult.originalLine;
        if (0 === diff) {
          diff = _last.originalColumn - toArrayResult.originalColumn;
          if (0 === diff) {
            const name = _last.name;
            const name2 = toArrayResult.name;
            let num6 = 0;
            if (name !== name2) {
              let num8 = 1;
              if (null !== name) {
                let num9 = -1;
                let num10 = -1;
                if (null !== name2) {
                  if (name > name2) {
                    num9 = 1;
                  }
                  num10 = num9;
                }
                num8 = num10;
              }
              num6 = num8;
            }
          }
          return num6;
        }
      }
    }
  }
  num6 = diff;
}
export function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
}
export function computeSourceURL(arg0, arg1, str) {
  str = arg1;
  if (!arg1) {
    str = "";
  }
  let sum = str;
  if (arg0) {
    let text = arg0;
    if (tmp2) {
      text = `${arg0}/`;
    }
    sum = text + str;
    tmp2 = "/" !== arg0[arg0.length - 1] && "/" !== str[0];
  }
  let tmp14Result = sum;
  if (str) {
    const match = str.match(re1);
    let tmp7 = null;
    if (match) {
      const url = { scheme: match[1], auth: match[2], host: match[3], port: match[4], path: match[5] };
      tmp7 = url;
    }
    if (tmp7) {
      if (tmp7.path) {
        const path = tmp7.path;
        const lastIndexOfResult = path.lastIndexOf("/");
        if (lastIndexOfResult >= 0) {
          tmp7.path = tmp7.path.substring(0, lastIndexOfResult + 1);
        }
      }
      let str6 = "";
      if (tmp7.scheme) {
        str6 = `${tmp7.scheme}:`;
      }
      const text1 = `${str6}//`;
      let text2 = text1;
      if (tmp7.auth) {
        text2 = `${str6}//${tmp7.auth + "@"}`;
      }
      let sum1 = text2;
      if (tmp7.host) {
        sum1 = text2 + tmp7.host;
      }
      let text3 = sum1;
      if (tmp7.port) {
        text3 = `${tmp17}:${tmp7.port}`;
      }
      let sum2 = text3;
      if (tmp7.path) {
        sum2 = text3 + tmp7.path;
      }
      tmp14Result = join(sum2, sum);
    } else {
      const _Error = Error;
      const error = new Error("sourceMapURL could not be parsed");
      throw error;
    }
  }
  return normalize(tmp14Result);
}