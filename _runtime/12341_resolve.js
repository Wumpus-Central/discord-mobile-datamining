// _runtime/12341_resolve.js
function resolve() {
  let tmp17;
  const items = [...arguments];
  let diff = items.length - 1;
  let flag = false;
  let str = "";
  let flag2 = false;
  let str2 = "";
  if (-1 <= diff) {
    while (true) {
      let tmp2 = diff;
      let tmp3 = flag;
      let tmp4 = str;
      let str3 = "/";
      if (0 <= diff) {
        str3 = items[diff];
      }
      let combined = str;
      if (str3) {
        let _HermesInternal = HermesInternal;
        combined = "" + str3 + "/" + str;
        tmp3 = "/" === str3.charAt(0);
      }
      let diff1 = diff - 1;
      flag2 = tmp3;
      str2 = combined;
      if (-1 > diff1) {
        break;
      } else {
        diff = diff1;
        flag = tmp3;
        str = combined;
        str2 = combined;
        flag2 = tmp3;
        if (tmp3) {
          break;
        }
      }
    }
  }
  let str4 = "";
  if (flag2) {
    str4 = "/";
  }
  const parts = str2.split("/");
  const found = parts.filter((arg0) => arg0);
  let diff2 = found.length - 1;
  let num = 0;
  let num2 = 0;
  if (0 <= diff2) {
    do {
      let tmp8 = found[diff2];
      let tmp9 = diff2;
      let tmp10 = num;
      if ("." === tmp8) {
        let spliceResult = found.splice(diff2, 1);
        let sum = num;
      } else if (".." === tmp8) {
        let spliceResult1 = found.splice(diff2, 1);
        sum = num + 1;
      } else {
        sum = num;
        if (num) {
          let spliceResult2 = found.splice(diff2, 1);
          sum = num - 1;
        }
      }
      diff2 = diff2 - 1;
      num = sum;
      num2 = sum;
    } while (0 <= diff2);
  }
  if (!flag2) {
    let diff3 = num2 - 1;
    if (num2) {
      do {
        let arr = found.unshift("..");
        tmp17 = diff3;
        diff3 = diff3 - 1;
      } while (tmp17);
    }
  }
  return str4 + found.join("/") || ".";
}
function normalizePath(str) {
  let tmp14;
  const substr = str.slice(-1);
  const parts = str.split("/");
  const found = parts.filter((arg0) => arg0);
  let diff = found.length - 1;
  let num = 0;
  let num2 = 0;
  if (0 <= diff) {
    do {
      let tmp4 = found[diff];
      let tmp5 = diff;
      let tmp6 = num;
      if ("." === tmp4) {
        let spliceResult = found.splice(diff, 1);
        let sum = num;
      } else if (".." === tmp4) {
        let spliceResult1 = found.splice(diff, 1);
        sum = num + 1;
      } else {
        sum = num;
        if (num) {
          let spliceResult2 = found.splice(diff, 1);
          sum = num - 1;
        }
      }
      diff = diff - 1;
      num = sum;
      num2 = sum;
    } while (0 <= diff);
  }
  const tmp11 = "/" === str.charAt(0);
  if (!tmp11) {
    let diff1 = num2 - 1;
    if (num2) {
      do {
        let arr = found.unshift("..");
        tmp14 = diff1;
        diff1 = diff1 - 1;
      } while (tmp14);
    }
  }
  str = found.join("/");
  let tmp15 = str;
  if (!str) {
    tmp15 = tmp11;
  }
  if (!tmp15) {
    str = ".";
  }
  let tmp16 = str;
  if (str) {
    tmp16 = "/" === substr;
  }
  let text = str;
  if (tmp16) {
    text = `${str}/`;
  }
  let str2 = "";
  if (tmp11) {
    str2 = "/";
  }
  return str2 + text;
}
const re0 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
arg5.basename = function basename(arr) {
  let combined = arr;
  if (arr.length > 1024) {
    const _HermesInternal = HermesInternal;
    combined = "<truncated>" + arr.slice(-1024);
  }
  const match = regex.exec(combined);
  if (match) {
    let substr = match.slice(1);
  } else {
    substr = [];
  }
  let tmp3 = arg1;
  if (arg1) {
    tmp3 = arr3.slice(-1 * arg1.length) === arg1;
  }
  let substr1 = arr3;
  if (tmp3) {
    substr1 = arr3.slice(0, arr3.length - arg1.length);
  }
  return substr1;
};
arg5.dirname = function dirname(arr) {
  let combined = arr;
  if (arr.length > 1024) {
    const _HermesInternal = HermesInternal;
    combined = "<truncated>" + arr.slice(-1024);
  }
  const match = regex.exec(combined);
  if (match) {
    let substr = match.slice(1);
  } else {
    substr = [];
  }
  if (substr[0] || "") {
    let substr1 = arr3;
    if (arr3) {
      substr1 = arr3.slice(0, arr3.length - 1);
    }
    let str2 = tmp3 + substr1;
  } else {
    str2 = ".";
  }
  return str2;
};
arg5.isAbsolute = function isAbsolute(str) {
  return "/" === str.charAt(0);
};
arg5.join = function join() {
  const items = [...arguments];
  return normalizePath(items.join("/"));
};
arg5.normalizePath = normalizePath;
arg5.relative = function relative(arg0, arg1) {
  let length;
  let arr = resolve(arg0);
  const str = arr.slice(1);
  const arr2 = resolve(arg1);
  const parts = str.split("/");
  let num = 0;
  if (0 < parts.length) {
    let num2 = 0;
    num = 0;
    if ("" === parts[0]) {
      const sum = num2 + 1;
      num = sum;
      while (sum < parts.length) {
        num2 = sum;
        num = sum;
        if ("" !== parts[sum]) {
          break;
        }
      }
    }
  }
  const diff = parts.length - 1;
  let tmp3 = diff;
  if (0 <= diff) {
    let tmp4 = diff;
    tmp3 = diff;
    if ("" === parts[diff]) {
      const diff1 = tmp4 - 1;
      tmp3 = diff1;
      while (0 <= diff1) {
        tmp4 = diff1;
        tmp3 = diff1;
        if ("" !== parts[diff1]) {
          break;
        }
      }
    }
  }
  if (tmp3 < num) {
    let items = [];
  } else {
    items = parts.slice(num, tmp3 - num + 1);
  }
  const parts1 = resolve(arg1).slice(1).split("/");
  let num3 = 0;
  if (0 < parts1.length) {
    let num4 = 0;
    num3 = 0;
    if ("" === parts1[0]) {
      const sum1 = num4 + 1;
      num3 = sum1;
      while (sum1 < parts1.length) {
        num4 = sum1;
        num3 = sum1;
        if ("" !== parts1[sum1]) {
          break;
        }
      }
    }
  }
  const diff2 = parts1.length - 1;
  let tmp8 = diff2;
  if (0 <= diff2) {
    let tmp9 = diff2;
    tmp8 = diff2;
    if ("" === parts1[diff2]) {
      const diff3 = tmp9 - 1;
      tmp8 = diff3;
      while (0 <= diff3) {
        tmp9 = diff3;
        tmp8 = diff3;
        if ("" !== parts1[diff3]) {
          break;
        }
      }
    }
  }
  if (tmp8 < num3) {
    let items1 = [];
  } else {
    items1 = parts1.slice(num3, tmp8 - num3 + 1);
  }
  const bound = Math.min(items.length, items1.length);
  let num5 = 0;
  let tmp12 = bound;
  if (0 < bound) {
    tmp12 = num5;
    while (items[num5] === items1[num5]) {
      num5 = num5 + 1;
      tmp12 = bound;
      if (num5 >= bound) {
        break;
      }
    }
  }
  const items2 = [];
  let sum2 = tmp12;
  if (tmp12 < items.length) {
    do {
      arr = items2.push("..");
      sum2 = sum2 + 1;
      length = items.length;
    } while (sum2 < length);
  }
  const combined = items2.concat(items1.slice(tmp12));
  return combined.join("/");
};
arg5.resolve = resolve;