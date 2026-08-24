// === Module 1489: Url ===

// Module 1489 (Url)
import _mod533 from "module_533" /* 533 */;
import decode from "decode" /* 1490 */;

require = arg1;
const dependencyMap = arg6;
class Url {
  constructor() {
    return;
  }
  parse(arg0, arg1, arg2) {
    if (typeof arg0 !== "string") {
      tmp73 = globalThis;
      _TypeError = TypeError;
      tmp74 = new.target;
      str31 = "Parameter 'url' must be a string, not ";
      tmp75 = new.target;
      typeError = new TypeError("Parameter 'url' must be a string, not " + typeof arg0);
      tmp77 = typeError;
      throw typeError;
    } else {
      str32 = "?";
      index = arg0.indexOf("?");
      str33 = "#";
      num19 = -1;
      str = "#";
      if (-1 !== index) {
        str = "#";
        if (index < arg0.indexOf("#")) {
          str = "?";
        }
      }
      self = this;
      tmp = arg1;
      tmp2 = arg2;
      parts = arg0.split(str);
      str2 = parts[0];
      str3 = "/";
      num = 0;
      parts[0] = str2.replace(/\\/g, "/");
      str4 = parts.join(str);
      str5 = str4.trim();
      if (!arg2) {
        num2 = 1;
        if (1 === str4.split("#").length) {
          tmp79 = closure_5;
          match = closure_5.exec(str5);
          if (match) {
            self.path = str5;
            self.href = str5;
            self.pathname = match[1];
            if (match[2]) {
              self.search = match[2];
              if (arg1) {
                tmp4 = closure_0;
                tmp5 = closure_1;
                obj2 = require("module_533");
                str8 = self.search;
                parsed = obj2.parse(require("module_1"));
              } else {
                str7 = self.search;
                parsed = require("module_1");
              }
              self.query = parsed;
            } else {
              if (arg1) {
                str6 = "";
                self.search = "";
                self.query = {};
              }
              return self;
            }
          }
        }
      }
      tmp6 = closure_3;
      match1 = closure_3.exec(str5);
      str9 = str5;
      tmp9 = match1;
      if (match1) {
        str10 = match1[0];
        formatted = str10.toLowerCase();
        self.protocol = formatted;
        str9 = str5.substr(str10.length);
        tmp8 = formatted;
        tmp9 = str10;
      }
      if (!arg2) {
        if (!tmp9) {
          substr7 = str9;
        }
        tmp16 = closure_12;
        tmp17 = substr7;
        if (!closure_12[tmp9]) {
          if (tmp11) {
            tmp19 = closure_8;
            num4 = 1;
            num5 = 0;
            num6 = -1;
            num7 = -1;
            if (0 < closure_8.length) {
              do {
                arr2 = closure_8;
                index1 = substr7.indexOf(closure_8[num5]);
                tmp21 = -1 !== index1;
                tmp22 = num5;
                tmp23 = num6;
                if (tmp21) {
                  tmp24 = -1 === tmp23 || index1 < tmp23;
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
              str13 = "@";
              lastIndexOfResult = substr7.lastIndexOf("@");
            } else {
              str12 = "@";
              lastIndexOfResult = substr7.lastIndexOf("@", num7);
            }
            substr1 = substr7;
            if (-1 !== lastIndexOfResult) {
              substr = require("module_0");
              substr1 = substr7.slice(lastIndexOfResult + 1);
              tmp27 = globalThis;
              _decodeURIComponent = decodeURIComponent;
              self.auth = decodeURIComponent(substr);
            }
            tmp28 = closure_7;
            num8 = 0;
            num9 = -1;
            num10 = -1;
            if (0 < closure_7.length) {
              do {
                arr4 = closure_7;
                index2 = substr1.indexOf(closure_7[num8]);
                tmp30 = -1 !== index2;
                tmp31 = num8;
                tmp32 = num9;
                if (tmp30) {
                  tmp33 = -1 === tmp32 || index2 < tmp32;
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
            self.host = require("module_0");
            substr2 = substr1.slice(num10);
            parseHostResult = self.parseHost();
            self.hostname = self.hostname || "";
            str14 = "[";
            tmp36 = "[" === self.hostname[0];
            if (tmp36) {
              str15 = "]";
              tmp36 = "]" === self.hostname[self.hostname.length - 1];
            }
            tmp37 = substr2;
            if (!tmp36) {
              str16 = self.hostname;
              parts1 = str16.split(/\./);
              length = parts1.length;
              str17 = "";
              str18 = "x";
              num11 = 127;
              num12 = 0;
              tmp37 = substr2;
              if (0 < length) {
                while (true) {
                  str19 = parts1[num12];
                  tmp38 = num12;
                  if (str19) {
                    tmp39 = closure_9;
                    if (!str19.match(closure_9)) {
                      length2 = str19.length;
                      num13 = 0;
                      str20 = "";
                      str21 = "";
                      if (0 < length2) {
                        do {
                          tmp40 = num13;
                          tmp41 = str20;
                          if (str19.charCodeAt(num13) > 127) {
                            text = `x`;
                          } else {
                            text = `${str19[num13]}`;
                          }
                          num13 = num13 + 1;
                          str20 = text;
                          str21 = text;
                        } while (num13 < length2);
                      }
                      tmp43 = closure_9;
                      if (!str21.match(closure_9)) {
                        break;
                      }
                    }
                  }
                  num12 = num12 + 1;
                  tmp37 = substr2;
                }
                substr3 = require("module_0");
                substr4 = parts1.slice(num12 + 1);
                tmp44 = closure_10;
                match2 = str19.match(closure_10);
                if (match2) {
                  arr = require("decode");
                  arr1 = substr4.unshift(match2[2]);
                }
                text1 = substr2;
                if (substr4.length) {
                  str22 = ".";
                  text1 = `/${arr7.join(".")}${tmp34}`;
                }
                str23 = ".";
                self.hostname = substr3.join(".");
                tmp37 = text1;
              }
            }
            num14 = 255;
            if (self.hostname.length > 255) {
              str25 = "";
              self.hostname = "";
            } else {
              str24 = self.hostname;
              self.hostname = str24.toLowerCase();
            }
            if (!tmp36) {
              tmp49 = closure_0;
              tmp50 = closure_1;
              obj3 = require("decode");
              self.hostname = obj3.toASCII(self.hostname);
            }
            str26 = "";
            str27 = "";
            if (self.port) {
              str28 = ":";
              str27 = `:${self.port}`;
            }
            tmp51 = self.hostname || "";
            self.host = tmp51 + str27;
            self.href = self.href + self.host;
            tmp17 = tmp37;
            if (tmp36) {
              str29 = self.hostname;
              num15 = 2;
              self.hostname = require("module_1");
              text2 = tmp37;
              if ("/" !== tmp37[0]) {
                text2 = `/${tmp37}`;
              }
              tmp17 = text2;
            }
          } else {
            tmp17 = substr7;
            if (tmp9) {
              tmp18 = closure_13;
              tmp17 = substr7;
            }
          }
        }
        tmp53 = closure_11;
        arr8 = tmp17;
        if (!closure_11[tmp8]) {
          tmp54 = closure_6;
          length3 = closure_6.length;
          num16 = 1;
          tmp55 = globalThis;
          num17 = 0;
          arr9 = tmp17;
          arr8 = tmp17;
          if (0 < length3) {
            do {
              tmp56 = closure_6;
              tmp57 = closure_6[num17];
              tmp58 = num17;
              tmp59 = arr9;
              joined = arr9;
              if (-1 !== arr9.indexOf(tmp57)) {
                _encodeURIComponent = encodeURIComponent;
                encodeURIComponentResult = encodeURIComponent(tmp57);
                if (encodeURIComponentResult === tmp57) {
                  _escape = escape;
                  encodeURIComponentResult = escape(tmp57);
                }
                parts2 = arr9.split(tmp57);
                joined = parts2.join(encodeURIComponentResult);
              }
              num17 = num17 + 1;
              arr9 = joined;
              arr8 = joined;
            } while (num17 < length3);
          }
        }
        index3 = arr8.indexOf("#");
        tmp63 = arr8;
        substr5 = arr8;
        if (-1 !== index3) {
          self.hash = arr8.substr(index3);
          substr5 = require("module_0");
        }
        index4 = substr5.indexOf("?");
        tmp65 = substr5;
        if (-1 !== index4) {
          self.search = substr5.substr(index4);
          num18 = 1;
          self.query = substr5.substr(index4 + 1);
          if (arg1) {
            tmp67 = closure_0;
            tmp68 = closure_1;
            obj5 = require("module_533");
            self.query = obj5.parse(self.query);
          }
          substr6 = require("module_0");
        } else {
          substr6 = substr5;
          if (arg1) {
            str30 = "";
            self.search = "";
            self.query = {};
            substr6 = substr5;
          }
        }
        if (substr6) {
          self.pathname = substr6;
        }
        tmp69 = closure_13;
        tmp70 = closure_13[tmp8] && self.hostname && !self.pathname;
        if (tmp70) {
          self.pathname = "/";
        }
        if (self.pathname) {
          tmp71 = self.pathname || "";
          tmp72 = self.search || "";
          self.path = tmp71 + tmp72;
        }
        self.href = self.format();
        return self;
      }
      num3 = 2;
      str11 = "//";
      tmp12 = "//" === require("module_0");
      tmp13 = !tmp12;
      if (tmp12) {
        tmp14 = tmp9;
        if (tmp9) {
          tmp15 = closure_12;
          tmp14 = closure_12[tmp9];
        }
        tmp13 = tmp14;
      }
      tmp11 = tmp12;
      substr7 = str9;
      if (!tmp13) {
        substr7 = require("module_2");
        flag = true;
        self.slashes = true;
        tmp11 = tmp12;
      }
    }
    return;
  }
  format() {
    self = this;
    tmp = this.auth || "";
    text = tmp;
    if (tmp) {
      tmp3 = globalThis;
      _encodeURIComponent = encodeURIComponent;
      str = encodeURIComponent(tmp);
      str2 = ":";
      str3 = "@";
      text = `${str.replace(/%3A/i, ":")}@`;
    }
    str4 = self.protocol || "";
    str5 = self.pathname || "";
    str6 = self.hash || "";
    if (self.host) {
      flag = text + self.host;
    } else {
      flag = false;
      if (self.hostname) {
        hostname = self.hostname;
        str7 = ":";
        num = -1;
        if (-1 === hostname.indexOf(":")) {
          hostname = self.hostname;
        } else {
          str8 = "[";
          str9 = "]";
          hostname = `${"[" + self.hostname}]`;
        }
        sum = text + hostname;
        text1 = sum;
        if (self.port) {
          text1 = `${tmp4}:${self.port}`;
        }
        flag = text1;
      }
    }
    length = self.query && typeof self.query === "object";
    if (length) {
      tmp6 = globalThis;
      _Object = Object;
      length = Object.keys(self.query).length;
    }
    str10 = "";
    if (length) {
      tmp7 = closure_0;
      tmp8 = closure_1;
      obj = require("module_533");
      str10 = obj.stringify(self.query, { arrayFormat: "repeat", addQueryPrefix: false });
    }
    str11 = self.search;
    if (!str11) {
      text2 = str10;
      if (str10) {
        str12 = "?";
        text2 = `?${str10}`;
      }
      str11 = text2;
    }
    if (!str11) {
      str11 = "";
    }
    tmp10 = str4;
    if (str4) {
      num2 = -1;
      str13 = ":";
      tmp10 = ":" !== require("module_4294967295");
    }
    text3 = str4;
    if (tmp10) {
      str14 = ":";
      text3 = `${str4}:`;
    }
    if (!self.slashes) {
      if (!text3) {
        flag2 = false;
        tmp15 = str6;
        if (str6) {
          num4 = 0;
          str20 = "#";
          tmp15 = "#" !== require("module_0");
        }
        text4 = str6;
        if (tmp15) {
          str21 = "#";
          text4 = `#${str6}`;
        }
        tmp17 = str11;
        if (str11) {
          num5 = 0;
          str22 = "?";
          tmp17 = "?" !== require("module_0");
        }
        str23 = str11;
        if (tmp17) {
          str24 = "?";
          str23 = `?${str11}`;
        }
        sum1 = text3 + str16;
        str25 = "%23";
        str26 = "#";
        sum2 = sum1 + str15.replace(/[?#]/g, (arg0) => encodeURIComponent(arg0));
        return sum2 + str23.replace("#", "%23") + text4;
      } else {
        tmp12 = closure_13;
      }
      str15 = str5;
      str16 = flag;
      if (!flag) {
        str16 = "";
        str15 = str5;
      }
    }
    str17 = flag;
    if (!flag) {
      str17 = "";
    }
    tmp13 = str5;
    if (str5) {
      num3 = 0;
      str18 = "/";
      tmp13 = "/" !== require("module_0");
    }
    text5 = `//${str17}`;
    str16 = text5;
    str15 = str5;
    if (tmp13) {
      str19 = "/";
      str15 = `/${str5}`;
      str16 = text5;
    }
    return;
  }
  resolve(arg0) {
    if (arg0) {
      if (typeof arg0 === "object") {
        tmp6 = Url;
        tmp5 = arg0;
      }
      tmp2Result = tmp2(tmp5);
      return tmp2Result.format();
    }
    obj = Object.create(Url.prototype);
    obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    parsed = obj.parse(arg0, false, true);
    tmp5 = obj;
    return;
  }
  resolveObject(arg0) {
    url = arg0;
    if (typeof arg0 === "string") {
      tmp49 = Url;
      obj = Object.create(Url.prototype);
      obj = {};
      tmp51 = null;
      obj.protocol = null;
      obj.slashes = null;
      obj.auth = null;
      obj.host = null;
      obj.port = null;
      obj.hostname = null;
      obj.hash = null;
      obj.search = null;
      obj.query = null;
      obj.pathname = null;
      obj.path = null;
      obj.href = null;
      flag = true;
      flag2 = false;
      parsed = obj.parse(arg0, false, true);
      url = obj;
    }
    obj1 = Object.create(Url.prototype);
    url2 = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    keys = Object.keys(this);
    num = 0;
    if (0 < keys.length) {
      do {
        tmp2 = keys[num];
        url2[tmp2] = this[tmp2];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    url2.hash = url.hash;
    if ("" === url.href) {
      url2.href = url2.format();
      return url2;
    } else {
      if (url.slashes) {
        if (!url.protocol) {
          _Object = Object;
          keys1 = Object.keys(url);
          str = "protocol";
          for (let num2 = 0; num2 < keys1.length; num2 = num2 + 1) {
            tmp3 = keys1[num2];
            tmp4 = num2;
            if ("protocol" !== tmp3) {
              url2[tmp3] = url[tmp3];
            }
          }
          tmp5 = closure_13;
          tmp6 = closure_13[url2.protocol] && url2.hostname && !url2.pathname;
          if (tmp6) {
            str2 = "/";
            url2.pathname = "/";
            url2.path = url2.pathname;
          }
          url2.href = url2.format();
          return url2;
        }
      }
      if (url.protocol) {
        if (url.protocol !== url2.protocol) {
          tmp40 = closure_13;
          if (closure_13[url.protocol]) {
            url2.protocol = url.protocol;
            if (!url.host) {
              tmp42 = closure_12;
              if (!closure_12[url.protocol]) {
                str35 = url.pathname || "";
                str36 = "/";
                parts = str35.split("/");
                if (parts.length) {
                  arr = parts.shift();
                  url.host = arr;
                  if (!arr) {
                    while (parts.length) {
                      arr1 = parts.shift();
                      url.host = arr1;
                      if (arr1) {
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
                  arr2 = parts.unshift("");
                }
                num7 = 2;
                if (parts.length < 2) {
                  arr3 = parts.unshift("");
                }
                url2.pathname = parts.join("/");
              }
              ({ search: url2.search, query: url2.query } = url);
              url2.host = url.host || "";
              url2.auth = url.auth;
              url2.hostname = url.hostname || url.host;
              url2.port = url.port;
              if (url2.pathname) {
                tmp47 = url2.pathname || "";
                tmp48 = url2.search || "";
                url2.path = tmp47 + tmp48;
              }
              url2.slashes = url2.slashes || url.slashes;
              url2.href = url2.format();
              return url2;
            }
            url2.pathname = url.pathname;
          } else {
            _Object2 = Object;
            keys2 = Object.keys(url);
            num6 = 0;
            if (0 < keys2.length) {
              do {
                tmp41 = keys2[num6];
                url2[tmp41] = url[tmp41];
                num6 = num6 + 1;
                length3 = keys2.length;
              } while (num6 < length3);
            }
            url2.href = url2.format();
            return url2;
          }
        }
      }
      pathname = url2.pathname;
      if (pathname) {
        str3 = url2.pathname;
        str4 = "/";
        pathname = "/" === require("module_0");
      }
      host = url.host;
      if (!host) {
        pathname2 = url.pathname;
        if (pathname2) {
          str5 = url.pathname;
          str6 = "/";
          pathname2 = "/" === require("module_0");
        }
        host = pathname2;
      }
      tmp7 = host;
      if (!host) {
        tmp7 = pathname;
      }
      if (!tmp7) {
        tmp8 = url2.host && url.pathname;
        tmp7 = tmp8;
      }
      pathname = url2.pathname;
      if (pathname) {
        str7 = url2.pathname;
        str8 = "/";
        pathname = str7.split("/");
      }
      if (!pathname) {
        pathname = [];
      }
      pathname1 = url.pathname;
      if (pathname1) {
        str9 = url.pathname;
        str10 = "/";
        pathname1 = str9.split("/");
      }
      if (!pathname1) {
        pathname1 = [];
      }
      protocol = url2.protocol;
      if (protocol) {
        tmp9 = closure_13;
        protocol = !closure_13[url2.protocol];
      }
      tmp10 = tmp7;
      if (protocol) {
        url2.hostname = "";
        url2.port = null;
        if (url2.host) {
          if ("" === pathname[0]) {
            pathname[0] = url2.host;
          } else {
            arr4 = pathname.unshift(url2.host);
          }
        }
        url2.host = "";
        if (!url.protocol) {
          tmp13 = tmp7;
          if (tmp7) {
            tmp14 = "" === pathname1[0] || "" === pathname[0];
            tmp13 = tmp14;
          }
          tmp10 = tmp13;
        } else {
          url.hostname = null;
          url.port = null;
          if (!url.host) {
            url.host = null;
          } else if ("" !== pathname1[0]) {
            arr5 = pathname1.unshift(url.host);
          }
          pathname1[0] = url.host;
        }
      }
      if (host) {
        if (!url.host) {
          if ("" !== url.host) {
            host3 = url2.host;
          }
          url2.host = host3;
          if (!url.hostname) {
            if ("" !== url.hostname) {
              hostname = url2.hostname;
            }
            url2.hostname = hostname;
            ({ search: url2.search, query: url2.query } = url);
            tmp17 = pathname1;
          }
          hostname = url.hostname;
        }
        host3 = url.host;
      } else {
        if (pathname1.length) {
          items = pathname;
          if (!pathname) {
            items = [];
          }
          arr6 = items.pop();
          combined = items.concat(pathname1);
          ({ search: url2.search, query: url2.query } = url);
        } else {
          combined = pathname;
          if (null != url.search) {
            if (protocol) {
              url2.host = pathname.shift();
              ({ host: url2.hostname, host: host2 } = url2);
              if (host2) {
                host = url2.host;
                str11 = "@";
                host2 = host.indexOf("@") > 0;
              }
              parts1 = host2;
              if (parts1) {
                str12 = url2.host;
                str13 = "@";
                parts1 = str12.split("@");
              }
              if (parts1) {
                url2.auth = parts1.shift();
                url2.hostname = parts1.shift();
                url2.host = url2.hostname;
              }
            }
            ({ search: url2.search, query: url2.query } = url);
            tmp15 = null === url2.pathname && null === url2.search;
            if (!tmp15) {
              str14 = "";
              if (url2.pathname) {
                str14 = url2.pathname;
              }
              str15 = "";
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
          num3 = -1;
          first = require("module_4294967295")[0];
          tmp19 = url2.host || url.host || combined.length > 1;
          if (tmp19) {
            str17 = ".";
            tmp20 = "." === first;
            if (!tmp20) {
              str18 = "..";
              tmp20 = ".." === first;
            }
            tmp19 = tmp20;
          }
          if (!tmp19) {
            tmp19 = "" === first;
          }
          length2 = combined.length;
          str19 = "..";
          str20 = ".";
          num4 = 0;
          num5 = 0;
          while (length2 >= 0) {
            tmp21 = combined[length2];
            tmp22 = length2;
            tmp23 = num4;
            if ("." === tmp21) {
              spliceResult = combined.splice(length2, 1);
              sum = num4;
            } else if (".." === tmp21) {
              spliceResult1 = combined.splice(length2, 1);
              sum = num4 + 1;
            } else {
              sum = num4;
              if (num4) {
                spliceResult2 = combined.splice(length2, 1);
                sum = num4 - 1;
              }
            }
            length2 = length2 - 1;
            num4 = sum;
            num5 = sum;
          }
          if (!tmp10) {
            if (!tmp7) {
              diff = num5 - 1;
              if (num5) {
                do {
                  arr7 = combined.unshift("..");
                  tmp30 = diff;
                  diff = diff - 1;
                } while (tmp30);
              }
            }
          }
          tmp31 = !tmp10;
          if (tmp10) {
            tmp31 = "" === combined[0];
          }
          if (!tmp31) {
            first1 = combined[0];
            if (first1) {
              str21 = combined[0];
              str22 = "/";
              first1 = "/" === require("module_0");
            }
            tmp31 = first1;
          }
          if (!tmp31) {
            arr8 = combined.unshift("");
          }
          if (tmp19) {
            str23 = "/";
            str24 = combined.join("/");
            tmp19 = "/" !== require("module_4294967295");
          }
          if (tmp19) {
            arr9 = combined.push("");
          }
          tmp35 = "" === combined[0];
          if (!tmp35) {
            first2 = combined[0];
            if (first2) {
              str25 = combined[0];
              str26 = "/";
              first2 = "/" === require("module_0");
            }
            tmp35 = first2;
          }
          if (protocol) {
            str27 = "";
            if (!tmp35) {
              str28 = "";
              if (combined.length) {
                str28 = combined.shift();
              }
              str27 = str28;
            }
            url2.hostname = str27;
            ({ hostname: url2.host, host: host4 } = url2);
            if (host4) {
              host1 = url2.host;
              str29 = "@";
              host4 = host1.indexOf("@") > 0;
            }
            parts2 = host4;
            if (parts2) {
              str30 = url2.host;
              str31 = "@";
              parts2 = str30.split("@");
            }
            if (parts2) {
              url2.auth = parts2.shift();
              url2.hostname = parts2.shift();
              url2.host = url2.hostname;
            }
          }
          if (!tmp10) {
            tmp37 = url2.host && combined.length;
            tmp10 = tmp37;
          }
          if (tmp10) {
            tmp10 = !tmp35;
          }
          if (tmp10) {
            arr10 = combined.unshift("");
          }
          if (combined.length > 0) {
            str32 = "/";
            url2.pathname = combined.join("/");
          } else {
            url2.pathname = null;
            url2.path = null;
          }
          tmp39 = null === url2.pathname && null === url2.search;
          if (!tmp39) {
            str33 = "";
            if (url2.pathname) {
              str33 = url2.pathname;
            }
            str34 = "";
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
            str16 = "/";
            url2.path = `/${url2.search}`;
          } else {
            url2.path = null;
          }
          url2.href = url2.format();
          return url2;
        }
      }
    }
    return;
  }
  parseHost() {
    self = this;
    str = this.host;
    match = closure_4.exec(str);
    substr = str;
    if (match) {
      str2 = match[0];
      str3 = ":";
      if (":" !== str2) {
        num = 1;
        self.port = require("module_1");
      }
      num2 = 0;
      substr = require("module_0");
    }
    if (substr) {
      self.hostname = substr;
    }
    return;
  }
}
const re3 = /^([a-z0-9.+-]+:)/i;
const re4 = /:[0-9]*$/;
const re5 = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
let items = ["{", "}", "|", "\\", "^", "`"];
const items1 = ["'"];
let combined = items1.concat(items.concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]));
const items2 = ["%", "/", "?", ";", "#"];
let closure_7 = items2.concat(combined);
let closure_8 = ["/", "?", "#"];
const re9 = /^[+a-z0-9A-Z_-]{0,63}$/;
const re10 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
let closure_11 = { javascript: true, "javascript:": true };
let closure_12 = { javascript: true, "javascript:": true };
let closure_13 = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
arg5.parse = function urlParse(obj) {
  if (obj) {
    if (typeof obj === "object") {
      if (obj instanceof Url) {
        return obj;
      }
    }
  }
  obj = Object.create(Url.prototype);
  obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
  const parsed = obj.parse(obj, arg1, arg2);
  return obj;
};
arg5.resolve = function urlResolve(obj) {
  if (obj) {
    if (typeof obj === "object") {
      let obj2 = obj;
    }
    return obj2.resolve(arg1);
  }
  obj = Object.create(Url.prototype);
  obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
  const parsed = obj.parse(obj, false, true);
  obj2 = obj;
};
arg5.resolveObject = function urlResolveObject(obj) {
  let object = arg1;
  if (obj) {
    if (obj) {
      if (typeof obj === "object") {
        let obj2 = obj;
      }
      object = obj2.resolveObject(arg1);
    }
    obj = Object.create(Url.prototype);
    obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    const parsed = obj.parse(obj, false, true);
    obj2 = obj;
  }
  return object;
};
arg5.format = function urlFormat(str) {
  let obj = str;
  if (typeof str === "string") {
    if (str) {
      if (typeof str === "object") {
        let tmp5 = str;
      }
      obj = tmp5;
    }
    obj = Object.create(Url.prototype);
    obj = { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, search: null, query: null, pathname: null, path: null, href: null };
    const parsed = obj.parse(str, undefined, undefined);
    tmp5 = obj;
  }
  if (obj instanceof Url) {
    let formatResult = obj.format();
  } else {
    const format = tmp6.prototype.format;
    const call = format.call;
    formatResult = typeof call === "unknown" ? format() : call(obj);
  }
  return formatResult;
};
arg5.Url = Url;