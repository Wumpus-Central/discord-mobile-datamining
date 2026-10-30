// _runtime/metro/12827__.js
const dependencyMap = Object.create(null);
const dependencyMap2 = Object.create(null);

export default {
  keyword: function getKeywordDescriptor(str) {
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(str) : call(dependencyMap, str)) {
      return dependencyMap[str];
    } else {
      const formatted = str.toLowerCase();
      const call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown" ? hasOwnProperty(formatted) : call2(dependencyMap, formatted)) {
        dependencyMap[str] = dependencyMap[formatted];
        return dependencyMap[formatted];
      } else {
        let tmp3 = length >= 2;
        if (2 <= formatted.length) {
          tmp3 = 45 === formatted.charCodeAt(0);
        }
        if (tmp3) {
          tmp3 = 45 === formatted.charCodeAt(1);
        }
        let str2 = "";
        if (!tmp3) {
          let str3 = "";
          if (3 <= formatted.length) {
            str3 = "";
            if (45 === formatted.charCodeAt(0)) {
              str3 = "";
              if (45 !== formatted.charCodeAt(1)) {
                const index = formatted.indexOf("-", 2);
                str3 = "";
                if (-1 !== index) {
                  str3 = formatted.substring(0, index + 1);
                }
              }
            }
          }
          str2 = str3;
        }
        const _Object = Object;
        const obj = {
          basename: formatted.substr(str2.length),
          name: formatted,
          vendor: str2,
          prefix: str2,
          custom: tmp3,
        };
        const frozen = Object.freeze(obj);
        dependencyMap[""] = frozen;
        return frozen;
      }
    }
  },
  property: function getPropertyDescriptor(str) {
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(str) : call(dependencyMap2, str)) {
      return dependencyMap2[str];
    } else {
      str = str[0];
      let str2 = "/";
      if ("/" === str) {
        if (`/` === str[1]) {
          str2 = "//";
        }
        str = str2;
      } else {
        let tmp3 = "_" !== str;
        if (tmp3) {
          tmp3 = "*" !== str;
        }
        if (tmp3) {
          tmp3 = "$" !== str;
        }
        if (tmp3) {
          tmp3 = "#" !== str;
        }
        if (tmp3) {
          tmp3 = "+" !== str;
        }
        if (tmp3) {
          tmp3 = "&" !== str;
        }
        if (tmp3) {
          str = "";
        }
      }
      let tmp5 = str.length - tmp4 >= 2;
      if (tmp5) {
        tmp5 = 45 === str.charCodeAt(tmp4);
      }
      if (tmp5) {
        tmp5 = 45 === str.charCodeAt(tmp4 + 1);
      }
      let arr = str;
      if (!tmp5) {
        const formatted = str.toLowerCase();
        const call2 = hasOwnProperty.call;
        arr = formatted;
        if (typeof call2 === "unknown" ? hasOwnProperty(formatted) : call2(dependencyMap2, formatted)) {
          dependencyMap2[str] = dependencyMap2[formatted];
          return dependencyMap2[formatted];
        }
      }
      let str10 = "";
      if (!tmp5) {
        let str11 = "";
        if (arr.length - (str.length || 0) >= 3) {
          str11 = "";
          if (45 === arr.charCodeAt(tmp8)) {
            str11 = "";
            if (45 !== arr.charCodeAt(tmp8 + 1)) {
              const index = arr.indexOf("-", tmp8 + 2);
              str11 = "";
              if (-1 !== index) {
                str11 = arr.substring(tmp8, index + 1);
              }
            }
          }
        }
        str10 = str11;
      }
      const substr = arr.substr(0, str.length + str10.length);
      const _Object = Object;
      const obj = {
        basename: arr.substr(substr.length),
        name: arr.substr(str.length),
        hack: str,
        vendor: str10,
        prefix: substr,
        custom: tmp5,
      };
      const frozen = Object.freeze(obj);
      dependencyMap2[str] = frozen;
      return frozen;
    }
  },
  isCustomProperty(callResult, sum) {
    let num = sum;
    if (!sum) {
      num = 0;
    }
    let tmp = callResult.length - num >= 2;
    if (tmp) {
      tmp = 45 === callResult.charCodeAt(num);
    }
    if (tmp) {
      tmp = 45 === callResult.charCodeAt(num + 1);
    }
    return tmp;
  },
  vendorPrefix: function getVendorPrefix(str, sum) {
    let num = sum;
    if (!sum) {
      num = 0;
    }
    if (str.length - num >= 3) {
      if (45 === str.charCodeAt(num)) {
        if (45 !== str.charCodeAt(num + 1)) {
          const index = str.indexOf("-", num + 2);
          if (-1 !== index) {
            return str.substring(num, index + 1);
          }
        }
      }
    }
    return "";
  },
};
