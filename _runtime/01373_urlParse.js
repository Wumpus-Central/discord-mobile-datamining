// === Module 1373: urlParse ===

// Module 1373 (urlParse)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1374 from "module_1374" /* 1374 */;

let length, length2;

class Url {
  constructor() {

  }
  parse(str, arg1, arg2) {
    let arr2;
    let arr4;
    let str19;
    let tmp11;
    if (typeof str !== "string") {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Parameter 'url' must be a string, not " + typeof str);
      throw typeError;
    } else {
      let substr7;
      const index = str.indexOf("?");
      str = "#";
      if (-1 !== index) {
        str = "#";
        if (index < str.indexOf("#")) {
          str = "?";
        }
      }
      const self = this;
      const parts = str.split(str);
      const str2 = parts[0];
      parts[0] = str2.replace(/\\/g, "/");
      const str4 = parts.join(str);
      const str5 = str4.trim();
      if (!arg2) {
        if (1 === str4.split("#").length) {
          const match = re5.exec(str5);
          if (match) {
            self.path = str5;
            self.href = str5;
            self.pathname = match[1];
            if (match[2]) {
              let parsed;
              self.search = match[2];
              if (arg1) {
                const obj2 = _mod1285;
                const str8 = self.search;
                parsed = obj2.parse(str8.substr(1));
              } else {
                const str7 = self.search;
                parsed = str7.substr(1);
              }
              self.query = parsed;
            } else if (arg1) {
              self.search = "";
              self.query = {};
            }
            return self;
          }
        }
      }
      const match1 = re3.exec(str5);
      let str9 = str5;
      let tmp9 = match1;
      if (tmp9) {
        const formatted = str10.toLowerCase();
        self.protocol = formatted;
        str9 = str5.substr(str10.length);
        tmp9 = str10;
      }
      if (!arg2) {
        let substr6;
        if (!tmp9) {
          substr7 = str9;
        }
        let tmp17 = substr7;
        if (!closure_12[tmp9]) {
          if (tmp11) {
            let lastIndexOfResult;
            let num5 = 0;
            let num6 = -1;
            let num7 = -1;
            if (0 < length2.length) {
              do {
                arr2 = length2;
                let index1 = substr7.indexOf(length2[num5]);
                let tmp21 = -1 !== index1;
                let tmp23 = num6;
                if (tmp21) {
                  let tmp24 = -1 === tmp23 || index1 < tmp23;
                  tmp21 = tmp24;
                }
                if (tmp21) {
                  tmp23 = index1;
                }
                num5 = num5 + 1;
                num6 = tmp23;
                num7 = tmp23;
              } while (num5 < arr2.length);
            }
            if (-1 === num7) {
              lastIndexOfResult = substr7.lastIndexOf("@");
            } else {
              lastIndexOfResult = substr7.lastIndexOf("@", num7);
            }
            let substr1 = substr7;
            if (-1 !== lastIndexOfResult) {
              const substr = substr7.slice(0, lastIndexOfResult);
              substr1 = substr7.slice(lastIndexOfResult + 1);
              const _decodeURIComponent = decodeURIComponent;
              self.auth = decodeURIComponent(substr);
            }
            let num8 = 0;
            let num9 = -1;
            let num10 = -1;
            if (0 < length.length) {
              do {
                arr4 = length;
                let index2 = substr1.indexOf(length[num8]);
                let tmp30 = -1 !== index2;
                let tmp32 = num9;
                if (tmp30) {
                  let tmp33 = -1 === tmp32 || index2 < tmp32;
                  tmp30 = tmp33;
                }
                if (tmp30) {
                  tmp32 = index2;
                }
                num8 = num8 + 1;
                num9 = tmp32;
                num10 = tmp32;
              } while (num8 < arr4.length);
            }
            if (-1 === num10) {
              num10 = substr1.length;
            }
            self.host = substr1.slice(0, num10);
            const substr2 = substr1.slice(num10);
            self.parseHost();
            self.hostname = self.hostname || "";
            const tmp36 = "[" === self.hostname[0] && "]" === self.hostname[self.hostname.length - 1];
            let tmp37 = substr2;
            if (!tmp36) {
              const str16 = self.hostname;
              const parts1 = str16.split(/\./);
              let num12 = 0;
              tmp37 = substr2;
              if (0 < parts1.length) {
                while (true) {
                  str19 = parts1[num12];
                  if (str19) {
                    if (!str19.match(re9)) {
                      length2 = str19.length;
                      let num13 = 0;
                      let str20 = "";
                      let str21 = "";
                      if (0 < length2) {
                        do {
                          let text;
                          if (str19.charCodeAt(num13) > 127) {
                            text = `x`;
                          } else {
                            text = `${str19[num13]}`;
                          }
                          num13 = num13 + 1;
                          str21 = text;
                        } while (num13 < length2);
                      }
                      if (!str21.match(re9)) {
                        break;
                      }
                    }
                  }
                  num12 = num12 + 1;
                  tmp37 = substr2;
                }
                const substr3 = parts1.slice(0, num12);
                const substr4 = parts1.slice(num12 + 1);
                const match2 = str19.match(re10);
                if (match2) {
                  substr3.push(match2[1]);
                  substr4.unshift(match2[2]);
                }
                let text1 = substr2;
                if (substr4.length) {
                  text1 = `/${arr7.join(".")}${tmp34}`;
                }
                self.hostname = substr3.join(".");
                tmp37 = text1;
              }
            }
            if (self.hostname.length > 255) {
              self.hostname = "";
            } else {
              const str24 = self.hostname;
              self.hostname = str24.toLowerCase();
            }
            if (!tmp36) {
              const obj3 = _mod1374;
              self.hostname = obj3.toASCII(self.hostname);
            }
            let str27 = "";
            if (self.port) {
              str27 = `:${self.port}`;
            }
            const tmp51 = self.hostname || "";
            self.host = tmp51 + str27;
            self.href = self.href + self.host;
            tmp17 = tmp37;
            if (tmp36) {
              const str29 = self.hostname;
              self.hostname = str29.substr(1, self.hostname.length - 2);
              let text2 = tmp37;
              if ("/" !== tmp37[0]) {
                text2 = `/${tmp37}`;
              }
              tmp17 = text2;
            }
          } else {
            tmp17 = substr7;
            if (tmp9) {
              tmp17 = substr7;
            }
          }
        }
        let arr8 = tmp17;
        if (!closure_11[tmp8]) {
          let num17 = 0;
          let arr9 = tmp17;
          arr8 = tmp17;
          if (0 < combined.length) {
            do {
              let tmp57 = combined[num17];
              let joined = arr9;
              if (-1 !== arr9.indexOf(tmp57)) {
                let _encodeURIComponent = encodeURIComponent;
                let encodeURIComponentResult = encodeURIComponent(tmp57);
                if (encodeURIComponentResult === tmp57) {
                  let _escape = escape;
                  encodeURIComponentResult = escape(tmp57);
                }
                let parts2 = arr9.split(tmp57);
                joined = parts2.join(encodeURIComponentResult);
              }
              num17 = num17 + 1;
              arr9 = joined;
              arr8 = joined;
            } while (num17 < combined.length);
          }
        }
        const index3 = arr8.indexOf("#");
        let substr5 = arr8;
        if (-1 !== index3) {
          self.hash = arr8.substr(index3);
          substr5 = arr8.slice(0, index3);
        }
        const index4 = substr5.indexOf("?");
        if (-1 !== index4) {
          self.search = substr5.substr(index4);
          self.query = substr5.substr(index4 + 1);
          if (arg1) {
            const obj5 = _mod1285;
            self.query = obj5.parse(self.query);
          }
          substr6 = substr5.slice(0, index4);
        } else {
          substr6 = substr5;
          if (arg1) {
            self.search = "";
            self.query = {};
            substr6 = substr5;
          }
        }
        if (substr6) {
          self.pathname = substr6;
        }
        const tmp70 = closure_13[tmp8] && self.hostname && !self.pathname;
        if (tmp70) {
          self.pathname = "/";
        }
        if (self.pathname) {
          const tmp71 = self.pathname || "";
          const tmp72 = self.search || "";
          self.path = tmp71 + tmp72;
        }
        self.href = self.format();
        return self;
      }
      const tmp12 = "//" === str9.substr(0, 2);
      let tmp13 = !tmp12;
      if (tmp12) {
        tmp13 = tmp9 && closure_12[tmp9];
        const tmp14 = tmp9 && closure_12[tmp9];
      }
      tmp11 = tmp12;
      substr7 = str9;
      if (!tmp13) {
        substr7 = str9.substr(2);
        self.slashes = true;
        tmp11 = tmp12;
      }
    }
  }
  format() {
    let flag;
    let str15;
    let str16;
    const self = this;
    let text = tmp;
    if (text) {
      const _encodeURIComponent = encodeURIComponent;
      const str = encodeURIComponent(this.auth || "");
      text = `${str.replace(/%3A/i, ":")}@`;
    }
    if (self.host) {
      flag = text + self.host;
    } else {
      flag = false;
      if (self.hostname) {
        let hostname;
        const hostname1 = self.hostname;
        if (-1 === hostname1.indexOf(":")) {
          hostname = self.hostname;
        } else {
          hostname = `${"[" + self.hostname}]`;
        }
        const sum = text + hostname;
        let text1 = sum;
        if (self.port) {
          text1 = `${tmp4}:${self.port}`;
        }
        flag = text1;
      }
    }
    length = self.query && typeof self.query === "object";
    if (length) {
      const _Object = Object;
      length = Object.keys(self.query).length;
    }
    let str10 = "";
    if (length) {
      const obj = _mod1285;
      str10 = obj.stringify(self.query, { arrayFormat: "repeat", addQueryPrefix: false });
    }
    let str11 = self.search;
    if (!str11) {
      const text2 = str10 && `?${str10}`;
      str11 = text2;
    }
    if (!str11) {
      str11 = "";
    }
    let text3 = str4;
    const tmp10 = str4 && ":" !== str4.substr(-1);
    if (tmp10) {
      text3 = `${str4}:`;
    }
    if (!self.slashes) {
      if (!text3) {
        let text4 = str6;
        const tmp16 = str6 && "#" !== str6.charAt(0);
        if (tmp16) {
          text4 = `#${str6}`;
        }
        let str22 = str11;
        const tmp18 = str11 && "?" !== str11.charAt(0);
        if (tmp18) {
          str22 = `?${str11}`;
        }
        const sum1 = text3 + str16;
        const sum2 = sum1 + str15.replace(/[?#]/g, (arg0) => encodeURIComponent(arg0));
        return sum2 + str22.replace("#", "%23") + text4;
      }
      str15 = str5;
      str16 = flag;
      if (!str16) {
        str16 = "";
        str15 = str5;
      }
    }
    let tmp14 = str5;
    const tmp13 = flag || "";
    if (tmp14) {
      tmp14 = "/" !== str5.charAt(0);
    }
    const text5 = `//${tmp13}`;
    str16 = text5;
    str15 = str5;
    if (tmp14) {
      str15 = `/${str5}`;
      str16 = text5;
    }
  }
  resolve(obj) {
    const tmp2 = obj;
    if (tmp2) {
      let tmp6;
      if (typeof obj === "object") {
        tmp6 = obj;
      }
      const tmp3Result = tmp3(tmp6);
      return tmp3Result.format();
    }
    obj = Object.create(Url.prototype);
    const url = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    const parsed = url.parse(obj, false, true);
    tmp6 = url;
  }
  resolveObject(str) {
    let host2;
    let host4;
    let length3;
    let tmp29;
    let url = str;
    if (typeof str === "string") {
      Object.create(Url.prototype);
      const obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
      const parsed = obj.parse(str, false, true);
      url = obj;
    }
    Object.create(Url.prototype);
    const url2 = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: url.hash, search: null, query: null, pathname: null, path: null, href: null };
    const keys = Object.keys(this);
    let num = 0;
    if (0 < keys.length) {
      do {
        let tmp2 = keys[num];
        url2[tmp2] = this[tmp2];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    if ("" === url.href) {
      url2.href = url2.format();
      return url2;
    } else {
      if (url.slashes) {
        if (!url.protocol) {
          let num2;
          const _Object = Object;
          const keys1 = Object.keys(url);
          for (let num2 = 0; num2 < keys1.length; num2 = num2 + 1) {
            let tmp3 = keys1[num2];
            if ("protocol" !== tmp3) {
              url2[tmp3] = url[tmp3];
            }
          }
          const tmp6 = closure_13[url2.protocol] && url2.hostname && !url2.pathname;
          if (tmp6) {
            url2.pathname = "/";
            url2.path = url2.pathname;
          }
          url2.href = url2.format();
          return url2;
        }
      }
      if (url.protocol) {
        if (url.protocol !== url2.protocol) {
          if (closure_13[url.protocol]) {
            url2.protocol = url.protocol;
            if (!url.host) {
              if (!closure_12[url.protocol]) {
                const str35 = url.pathname || "";
                const parts = str35.split("/");
                if (parts.length) {
                  const arr = parts.shift();
                  url.host = arr;
                  if (!arr) {
                    while (parts.length) {
                      let arr2 = parts.shift();
                      url.host = arr2;
                      if (arr2) {
                        break;
                      }
                    }
                  }
                }
                if (!url.host) {
                  url.host = "";
                }
                if (!url.hostname) {
                  url.hostname = "";
                }
                if ("" !== parts[0]) {
                  parts.unshift("");
                }
                if (parts.length < 2) {
                  parts.unshift("");
                }
                url2.pathname = parts.join("/");
              }
              ({ search: url2.search, query: url2.query } = url);
              url2.host = url.host || "";
              url2.auth = url.auth;
              url2.hostname = url.hostname || url.host;
              url2.port = url.port;
              if (url2.pathname) {
                const tmp46 = url2.pathname || "";
                const tmp47 = url2.search || "";
                url2.path = tmp46 + tmp47;
              }
              url2.slashes = url2.slashes || url.slashes;
              url2.href = url2.format();
              return url2;
            }
            url2.pathname = url.pathname;
          } else {
            const _Object2 = Object;
            const keys2 = Object.keys(url);
            let num6 = 0;
            if (0 < keys2.length) {
              do {
                let tmp40 = keys2[num6];
                url2[tmp40] = url[tmp40];
                num6 = num6 + 1;
                length3 = keys2.length;
              } while (num6 < length3);
            }
            url2.href = url2.format();
            return url2;
          }
        }
      }
      let pathname = url2.pathname;
      if (pathname) {
        const str3 = url2.pathname;
        pathname = "/" === str3.charAt(0);
      }
      let host = url.host;
      if (!host) {
        let pathname2 = url.pathname;
        if (pathname2) {
          const str5 = url.pathname;
          pathname2 = "/" === str5.charAt(0);
        }
        host = pathname2;
      }
      let tmp7 = host || pathname;
      if (!tmp7) {
        tmp7 = url2.host && url.pathname;
      }
      let pathname1 = url2.pathname;
      if (pathname1) {
        const str7 = url2.pathname;
        pathname1 = str7.split("/");
      }
      if (!pathname1) {
        pathname1 = [];
      }
      let pathname3 = url.pathname;
      if (pathname3) {
        const str9 = url.pathname;
        pathname3 = str9.split("/");
      }
      if (!pathname3) {
        pathname3 = [];
      }
      const protocol = url2.protocol && !closure_13[url2.protocol];
      let tmp10 = tmp7;
      if (protocol) {
        url2.hostname = "";
        url2.port = null;
        if (url2.host) {
          if ("" === pathname1[0]) {
            pathname1[0] = url2.host;
          } else {
            pathname1.unshift(url2.host);
          }
        }
        url2.host = "";
        if (url.protocol) {
          url.hostname = null;
          url.port = null;
          if (url.host) {
            if ("" === pathname3[0]) {
              pathname3[0] = url.host;
            } else {
              pathname3.unshift(url.host);
            }
          }
          url.host = null;
        }
        let tmp13 = tmp7;
        if (tmp13) {
          tmp13 = "" === pathname3[0] || "" === pathname1[0];
        }
        tmp10 = tmp13;
      }
      if (host) {
        if (!url.host) {
          let host3;
          if ("" !== url.host) {
            host3 = url2.host;
          }
          url2.host = host3;
          if (!url.hostname) {
            let hostname;
            if ("" !== url.hostname) {
              hostname = url2.hostname;
            }
            url2.hostname = hostname;
            ({ search: url2.search, query: url2.query } = url);
            combined = pathname3;
          }
          hostname = url.hostname;
        }
        host3 = url.host;
      } else if (pathname3.length) {
        const arr8 = pathname1 || [];
        arr8.pop();
        combined = arr8.concat(pathname3);
        ({ search: url2.search, query: url2.query } = url);
      } else {
        combined = pathname1;
        if (null != url.search) {
          if (protocol) {
            url2.host = pathname1.shift();
            ({ host: url2.hostname, host: host2 } = url2);
            if (host2) {
              const host1 = url2.host;
              host2 = host1.indexOf("@") > 0;
            }
            let parts1 = host2;
            if (parts1) {
              const str12 = url2.host;
              parts1 = str12.split("@");
            }
            if (parts1) {
              url2.auth = parts1.shift();
              url2.hostname = parts1.shift();
              url2.host = url2.hostname;
            }
          }
          ({ search: url2.search, query: url2.query } = url);
          const tmp15 = null === url2.pathname && null === url2.search;
          if (!tmp15) {
            let str14 = "";
            if (url2.pathname) {
              str14 = url2.pathname;
            }
            let str15 = "";
            if (url2.search) {
              str15 = url2.search;
            }
            url2.path = str14 + str15;
          }
          url2.href = url2.format();
          return url2;
        }
      }
      if (combined.length) {
        const first = combined.slice(-1)[0];
        let tmp18 = url2.host || url.host || combined.length > 1;
        if (tmp18) {
          tmp18 = "." === first || ".." === first;
          const tmp19 = "." === first || ".." === first;
        }
        if (!tmp18) {
          tmp18 = "" === first;
        }
        length2 = combined.length;
        let num4 = 0;
        let num5 = 0;
        while (length2 >= 0) {
          let sum;
          let tmp20 = combined[length2];
          if ("." === tmp20) {
            let spliceResult = combined.splice(length2, 1);
            sum = num4;
          } else if (".." === tmp20) {
            let spliceResult1 = combined.splice(length2, 1);
            sum = num4 + 1;
          } else {
            sum = num4;
            if (sum) {
              let spliceResult2 = combined.splice(length2, 1);
              sum = num4 - 1;
            }
          }
          length2 = length2 - 1;
          num4 = sum;
          num5 = sum;
        }
        if (!tmp10) {
          if (!tmp7) {
            let diff = num5 - 1;
            if (num5) {
              do {
                let arr9 = combined.unshift("..");
                tmp29 = diff;
                diff = diff - 1;
              } while (tmp29);
            }
          }
        }
        let tmp30 = !tmp10;
        if (tmp10) {
          tmp30 = "" === combined[0];
        }
        if (!tmp30) {
          let first1 = combined[0];
          if (first1) {
            const str21 = combined[0];
            first1 = "/" === str21.charAt(0);
          }
          tmp30 = first1;
        }
        if (!tmp30) {
          combined.unshift("");
        }
        if (tmp18) {
          const str24 = combined.join("/");
          tmp18 = "/" !== str24.substr(-1);
        }
        if (tmp18) {
          combined.push("");
        }
        let tmp34 = "" === combined[0];
        if (!tmp34) {
          let first2 = combined[0];
          if (first2) {
            const str25 = combined[0];
            first2 = "/" === str25.charAt(0);
          }
          tmp34 = first2;
        }
        if (protocol) {
          let str27 = "";
          if (!tmp34) {
            let str28 = "";
            if (combined.length) {
              str28 = combined.shift();
            }
            str27 = str28;
          }
          url2.hostname = str27;
          ({ hostname: url2.host, host: host4 } = url2);
          if (host4) {
            const host5 = url2.host;
            host4 = host5.indexOf("@") > 0;
          }
          let parts2 = host4;
          if (parts2) {
            const str30 = url2.host;
            parts2 = str30.split("@");
          }
          if (parts2) {
            url2.auth = parts2.shift();
            url2.hostname = parts2.shift();
            url2.host = url2.hostname;
          }
        }
        if (!tmp10) {
          tmp10 = url2.host && combined.length;
        }
        if (tmp10) {
          tmp10 = !tmp34;
        }
        if (tmp10) {
          combined.unshift("");
        }
        if (combined.length > 0) {
          url2.pathname = combined.join("/");
        } else {
          url2.pathname = null;
          url2.path = null;
        }
        const tmp38 = null === url2.pathname && null === url2.search;
        if (!tmp38) {
          let str33 = "";
          if (url2.pathname) {
            str33 = url2.pathname;
          }
          let str34 = "";
          if (url2.search) {
            str34 = url2.search;
          }
          url2.path = str33 + str34;
        }
        url2.auth = url.auth || url2.auth;
        url2.slashes = url2.slashes || url.slashes;
        url2.href = url2.format();
        return url2;
      } else {
        url2.pathname = null;
        if (url2.search) {
          url2.path = `/${url2.search}`;
        } else {
          url2.path = null;
        }
        url2.href = url2.format();
        return url2;
      }
    }
  }
  parseHost() {
    const self = this;
    const match = re4.exec(str);
    let substr = str;
    if (match) {
      if (":" !== match[0]) {
        self.port = match[0].substr(1);
      }
      substr = str.substr(0, str.length - str2.length);
    }
    if (substr) {
      self.hostname = substr;
    }
  }
}
const re3 = /^([a-z0-9.+-]+:)/i;
const re4 = /:[0-9]*$/;
const re5 = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
const items = ["{", "}", "|", "\\", "^", "`"];
const items1 = ["'"];
let combined = items1.concat(items.concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]));
const items2 = ["%", "/", "?", ";", "#"];
const metroImportDefault = items2.concat(combined);
const metroImportAll = ["/", "?", "#"];
const re9 = /^[+a-z0-9A-Z_-]{0,63}$/;
const re10 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const unpackModuleId = { javascript: true, "javascript:": true };
let closure_12 = { javascript: true, "javascript:": true };

export const parse = function urlParse(GUILD_TEMPLATE_HOST, arg1, arg2) {
  const tmp = GUILD_TEMPLATE_HOST;
  if (tmp) {
    if (typeof GUILD_TEMPLATE_HOST === "object") {
      if (GUILD_TEMPLATE_HOST instanceof Url) {
        return GUILD_TEMPLATE_HOST;
      }
    }
  }
  Object.create(Url.prototype);
  const url = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
  const parsed = url.parse(GUILD_TEMPLATE_HOST, arg1, arg2);
  return url;
};
export const resolve = function urlResolve(obj, arg1) {
  const tmp = obj;
  if (tmp) {
    let obj2;
    if (typeof obj === "object") {
      obj2 = obj;
    }
    return obj2.resolve(arg1);
  }
  obj = Object.create(Url.prototype);
  const url = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
  const parsed = url.parse(obj, false, true);
  obj2 = url;
};
export const resolveObject = function urlResolveObject(obj, arg1) {
  let object = arg1;
  if (obj) {
    if (obj) {
      let obj2;
      if (typeof obj === "object") {
        obj2 = obj;
      }
      object = obj2.resolveObject(arg1);
    }
    Object.create(Url.prototype);
    obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    const parsed = obj.parse(obj, false, true);
    obj2 = obj;
  }
  return object;
};
export const format = function urlFormat(safeParseWithQueryResult) {
  let formatResult;
  let obj = safeParseWithQueryResult;
  if (typeof safeParseWithQueryResult === "string") {
    if (safeParseWithQueryResult) {
      let tmp5;
      if (typeof safeParseWithQueryResult === "object") {
        tmp5 = safeParseWithQueryResult;
      }
      obj = tmp5;
    }
    Object.create(Url.prototype);
    const obj4 = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    const parsed = obj4.parse(safeParseWithQueryResult, undefined, undefined);
    tmp5 = obj4;
  }
  if (obj instanceof Url) {
    formatResult = obj.format();
  } else {
    const format = tmp6.prototype.format;
    formatResult = format.call(obj);
  }
  return formatResult;
};
export { Url };