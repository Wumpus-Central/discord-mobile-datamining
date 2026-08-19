// _runtime/13750_parseIPv4Number.js
import Buffer from "00511_Buffer.js";
import error from "13751_error.js";
import _mod13752 from "metro/13752__.js";
import replaceByteInByteSequence from "13753_replaceByteInByteSequence.js";

require = arg1;
const module = exports;
const dependencyMap = arg6;
function parseIPv4Number(match) {
  if (match.length >= 2) {
    if ("0" === match.charAt(0)) {
      if ("x" === str2.toLowerCase()) {
        let substr = match.substring(2);
        let num4 = 16;
      }
      if ("" === substr) {
        return 0;
      } else {
        let obj = /[^0-7]/;
        if (10 === num4) {
          obj = /[^0-9]/;
        }
        if (16 === num4) {
          obj = /[^0-9A-Fa-f]/;
        }
        if (obj.test(substr)) {
          let parsed = closure_4;
        } else {
          const _parseInt = parseInt;
          parsed = parseInt(substr, num4);
        }
        return parsed;
      }
      str2 = match.charAt(1);
    }
  }
  let tmp = match.length >= 2;
  if (tmp) {
    tmp = "0" === match.charAt(0);
  }
  num4 = 10;
  substr = match;
  if (tmp) {
    substr = match.substring(1);
    num4 = 8;
  }
}
function parseHost(buffer, arg1) {
  if ("[" === buffer[0]) {
    if ("]" !== buffer[buffer.length - 1]) {
      let tmp27 = closure_4;
    } else {
      const substr = buffer.substring(1, buffer.length - 1);
      const ucs22 = error.ucs2;
      const decodeResult = ucs22.decode(substr);
      let num7 = 0;
      let num8 = null;
      let num9 = 0;
      if (58 === decodeResult[0]) {
        num7 = 2;
        num8 = 1;
        num9 = 1;
        if (58 !== decodeResult[1]) {
          tmp27 = closure_4;
        }
      }
      let items = [0, 0, 0, 0, 0, 0, 0, 0];
      let tmp17 = num8;
      let tmp18 = num9;
      let tmp19 = num8;
      let tmp20 = num9;
      if (num7 >= decodeResult.length) {
        if (null !== tmp19) {
          let diff = tmp20 - tmp19;
          let num20 = 7;
          tmp27 = items;
          if (0 < diff) {
            const diff1 = tmp19 + diff - 1;
            items[diff1] = items[num20];
            items[num20] = items[diff1];
            const diff2 = num20 - 1;
            tmp27 = items;
            while (0 !== diff2) {
              diff = diff - 1;
              num20 = diff2;
              tmp27 = items;
              if (0 < diff) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        } else {
          tmp27 = items;
          if (null === tmp19) {
            tmp27 = items;
            if (8 !== tmp20) {
              tmp27 = closure_4;
            }
          }
        }
      } else {
        while (8 !== tmp18) {
          if (58 !== decodeResult[num7]) {
            let obj4 = _mod13752;
            let num14 = 0;
            let num15 = 0;
            let tmp30 = num7;
            let num16 = 0;
            let num17 = 0;
            let tmp31 = num7;
            if (obj4.isASCIIHex(decodeResult[num7])) {
              while (true) {
                let tmp32 = decodeResult[tmp30];
                let _isNaN = isNaN;
                let fromCodePointResult;
                if (!isNaN(tmp32)) {
                  let _String2 = String;
                  fromCodePointResult = String.fromCodePoint(tmp32);
                }
                let result = 16 * num15;
                let sum = result + parseInt(fromCodePointResult, 16);
                let sum1 = tmp30 + 1;
                let sum2 = num14 + 1;
                num16 = sum2;
                num17 = sum;
                tmp31 = sum1;
                if (sum2 >= 4) {
                  break;
                } else {
                  let obj5 = _mod13752;
                  num14 = sum2;
                  num15 = sum;
                  tmp30 = sum1;
                  num16 = sum2;
                  num17 = sum;
                  tmp31 = sum1;
                  if (!obj5.isASCIIHex(decodeResult[sum1])) {
                    break;
                  }
                }
              }
            }
            if (46 === decodeResult[tmp31]) {
              if (0 === num16) {
                tmp27 = closure_4;
              } else if (6 < tmp18) {
                tmp27 = closure_4;
              } else {
                let diff3 = tmp31 - num16;
                let num18 = 0;
                let tmp64 = tmp18;
                let num19 = 0;
                let tmp66 = tmp18;
                if (undefined === decodeResult[diff3]) {
                  tmp20 = tmp66;
                  tmp19 = tmp17;
                  if (4 !== num19) {
                    tmp27 = closure_4;
                  }
                } else {
                  while (true) {
                    let sum7 = diff3;
                    if (0 >= num18) {
                      let obj6 = _mod13752;
                      if (obj6.isASCIIDigit(decodeResult[sum7])) {
                        let tmp49Result = _mod13752;
                        let tmp51 = null;
                        let tmp52 = sum7;
                        let tmp53 = null;
                        let tmp54 = sum7;
                        if (!tmp49Result.isASCIIDigit(decodeResult[sum7])) {
                          items[tmp64] = 256 * items[tmp64] + tmp53;
                          let sum3 = num18 + 1;
                          let tmp62 = 2 !== sum3;
                          if (2 !== sum3) {
                            tmp62 = 4 !== sum3;
                          }
                          let sum4 = tmp64;
                          if (!tmp62) {
                            sum4 = tmp64 + 1;
                          }
                          tmp64 = sum4;
                          num18 = sum3;
                          diff3 = tmp54;
                          num19 = sum3;
                          tmp66 = sum4;
                        } else {
                          while (true) {
                            let tmp55 = decodeResult[tmp52];
                            let _isNaN2 = isNaN;
                            let fromCodePointResult1;
                            if (!isNaN(tmp55)) {
                              let _String3 = String;
                              fromCodePointResult1 = String.fromCodePoint(tmp55);
                            }
                            let parsed = parseInt(fromCodePointResult1);
                            let sum6 = parsed;
                            if (null === tmp51) {
                              if (sum6 > 255) {
                                tmp27 = closure_4;
                              } else {
                                let sum5 = tmp52 + 1;
                                tmp51 = sum6;
                                tmp52 = sum5;
                                tmp53 = sum6;
                                tmp54 = sum5;
                              }
                            } else if (0 === tmp51) {
                              break;
                            } else {
                              sum6 = 10 * tmp51 + parsed;
                            }
                          }
                          tmp27 = closure_4;
                        }
                      } else {
                        tmp27 = closure_4;
                      }
                    } else if (46 !== decodeResult[diff3]) {
                      break;
                    } else if (num18 >= 4) {
                      break;
                    } else {
                      sum7 = diff3 + 1;
                    }
                  }
                  tmp27 = closure_4;
                }
              }
            } else {
              if (58 === decodeResult[tmp31]) {
                let sum8 = tmp31 + 1;
                let tmp43 = sum8;
                if (undefined === decodeResult[sum8]) {
                  tmp27 = closure_4;
                }
              } else {
                tmp43 = tmp31;
                if (undefined !== decodeResult[tmp31]) {
                  tmp27 = closure_4;
                }
              }
              items[tmp18] = num17;
              let sum9 = tmp18 + 1;
              let sum10 = tmp43;
              let sum11 = tmp17;
              num7 = sum10;
              tmp17 = sum11;
              tmp18 = sum9;
              tmp19 = sum11;
              tmp20 = sum9;
            }
          } else if (null !== tmp17) {
            tmp27 = closure_4;
          } else {
            sum10 = num7 + 1;
            sum11 = tmp18 + 1;
            sum9 = sum11;
          }
        }
        tmp27 = closure_4;
      }
    }
    return tmp27;
  } else if (arg1) {
    if (-1 !== buffer.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) {
      let str5 = closure_4;
    } else {
      const ucs2 = error.ucs2;
      const decodeResult1 = ucs2.decode(buffer);
      let num5 = 0;
      let str4 = "";
      str5 = "";
      if (0 < decodeResult1.length) {
        do {
          let tmp6 = decodeResult1[num5];
          let _String = String;
          let fromCodePointResult2 = String.fromCodePoint(tmp6);
          let tmp8 = tmp6 <= 31;
          if (!tmp8) {
            tmp8 = tmp6 > 126;
          }
          let tmp11 = fromCodePointResult2;
          if (tmp8) {
            let _Buffer2 = Buffer.Buffer;
            let fromResult = _Buffer2.from(fromCodePointResult2);
            let num4 = 0;
            let str2 = "";
            let str3 = "";
            if (0 < fromResult.length) {
              do {
                let obj3 = replaceByteInByteSequence;
                str2 = `${obj3.percentEncode(arr[num4])}`;
                num4 = num4 + 1;
                str3 = str2;
                length = fromResult.length;
              } while (num4 < length);
            }
            tmp11 = str3;
          }
          str4 = str4 + tmp11;
          num5 = num5 + 1;
          str5 = str4;
        } while (num5 < decodeResult1.length);
      }
    }
    return str5;
  } else {
    const _Buffer = Buffer.Buffer;
    let str = replaceByteInByteSequence.percentDecode(_Buffer.from(buffer));
    str = str.toString();
    if (null === str) {
      str = closure_4;
    }
    if (str === closure_4) {
      return closure_4;
    } else if (-1 !== str.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) {
      return closure_4;
    } else {
      const tmp5 = (function parseIPv4(str) {
        const parts = str.split(".");
        if (tmp) {
          parts.pop();
        }
        if (parts.length > 4) {
          return str;
        } else {
          const items = [];
          const iter = parts[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            if ("" === nextResult) {
              iter.return();
              return str;
            } else {
              let tmp9 = callback(tmp6);
              if (tmp9 === closure_4) {
                iter.return();
                return str;
              } else {
                let arr = items.push(tmp10);
                continue;
              }
            }
          }
          let num2 = 0;
          if (0 < items.length - 1) {
            while (items[num2] <= 255) {
              num2 = num2 + 1;
            }
            return closure_4;
          }
          const _Math = Math;
          if (items[items.length - 1] >= Math.pow(256, 5 - items.length)) {
            return closure_4;
          } else {
            let arr1 = items.pop();
            let num5 = 0;
            const tmp20 = items[Symbol.iterator]();
            while (tmp20 !== undefined) {
              let _Math2 = Math;
              arr1 = arr1 + tmp22 * Math.pow(256, 3 - num5);
              num5 = num5 + 1;
              continue;
            }
            return arr1;
          }
        }
        tmp = "" === parts[parts.length - 1] && parts.length > 1;
      })(str);
      if (typeof tmp5 === "number") {
        str = tmp5;
      }
      return str;
    }
  }
}
function serializeHost(host) {
  let str = "";
  let num = 1;
  let rounded = host;
  if (typeof host === "number") {
    do {
      let _String = String;
      let text = `${String(tmp2 % 256)}${``}`;
      let text1 = text;
      if (4 !== num) {
        text1 = `.${`${String(tmp2 % 256)}${``}`}`;
      }
      let _Math = Math;
      rounded = Math.floor(rounded / 256);
      num = num + 1;
      let combined = text1;
    } while (num <= 4);
  } else {
    const _Array = Array;
    combined = host;
    if (host instanceof Array) {
      let num3 = 0;
      let num4 = 0;
      let tmp4 = null;
      let num5 = 1;
      let tmp5 = null;
      let num6 = 0;
      let tmp6 = null;
      let num7 = 1;
      let tmp7 = null;
      if (0 < host.length) {
        do {
          let tmp12 = tmp5;
          if (0 !== host[num3]) {
            let tmp16 = num5;
            if (num5 < num4) {
              tmp16 = num4;
              tmp12 = tmp4;
            }
            let tmp14 = tmp16;
            let tmp15 = tmp12;
            let num8 = 0;
            let tmp13 = null;
          } else {
            tmp13 = tmp4;
            if (null === tmp4) {
              tmp13 = num3;
            }
            num8 = num4 + 1;
            tmp14 = num5;
            tmp15 = tmp12;
          }
          num3 = num3 + 1;
          num4 = num8;
          tmp4 = tmp13;
          num5 = tmp14;
          tmp5 = tmp15;
          num6 = num8;
          tmp6 = tmp13;
          num7 = tmp14;
          tmp7 = tmp15;
        } while (num3 < host.length);
      }
      if (num7 < num6) {
        tmp7 = tmp6;
      }
      let num11 = 0;
      let flag = false;
      while (true) {
        let sum = str;
        let tmp20 = flag;
        let tmp18 = flag;
        if (flag) {
          tmp20 = 0 === host[num11];
        }
        if (!tmp20) {
          break;
        } else {
          num11 = num11 + 1;
          flag = tmp18;
          str = sum;
          if (num11 <= 7) {
            continue;
          } else {
            let _HermesInternal = HermesInternal;
            combined = "[" + sum + "]";
          }
        }
      }
      let flag2 = flag;
      if (flag) {
        flag2 = false;
      }
      if (tmp7 !== num11) {
        sum = sum + host[num11].toString(16);
        let text2 = sum;
        if (7 !== num11) {
          text2 = `${tmp19}:`;
        }
        let sum1 = text2;
        let flag3 = flag2;
      } else {
        let str4 = ":";
        if (0 === num11) {
          str4 = "::";
        }
        sum1 = sum + str4;
        flag3 = true;
      }
    }
  }
  return combined;
}
class URLStateMachine {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    obj = { pointer: 0, input: arg0 };
    tmp = arg1;
    if (!arg1) {
      tmp = null;
    }
    str = arg2;
    obj.base = tmp;
    if (!arg2) {
      str = "utf-8";
    }
    str2 = exports;
    obj.encodingOverride = str;
    obj.stateOverride = exports;
    obj.url = arg3;
    obj.failure = false;
    obj.parseError = false;
    if (!obj.url) {
      obj = { scheme: "", username: "", password: "", host: null, port: null, path: null, query: null, fragment: null, cannotBeABaseURL: false };
      obj[5] = [];
      obj.url = obj;
      str3 = obj.input;
      str4 = "";
      replaced = str3.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
      if (replaced !== obj.input) {
        flag = true;
        obj.parseError = true;
      }
      obj.input = replaced;
    }
    str5 = obj.input;
    replaced1 = str5.replace(/\u0009|\u000A|\u000D/g, "");
    if (replaced1 !== obj.input) {
      flag2 = true;
      obj.parseError = true;
    }
    obj.input = replaced1;
    if (!str2) {
      str2 = "scheme start";
    }
    obj.state = str2;
    obj.buffer = "";
    obj.atFlag = false;
    obj.arrFlag = false;
    obj.passwordTokenSeenFlag = false;
    ucs2 = require("error").ucs2;
    obj.input = ucs2.decode(obj.input);
    if (obj.pointer <= obj.input.length) {
      while (true) {
        tmp4 = obj.input[obj.pointer];
        _isNaN = isNaN;
        fromCodePointResult = undefined;
        if (!isNaN(tmp4)) {
          _String = String;
          fromCodePointResult = String.fromCodePoint(tmp4);
        }
        tmp6 = obj["parse " + obj.state](tmp4, fromCodePointResult);
        if (!tmp6) {
          break;
        } else {
          tmp7 = closure_4;
          if (tmp6 === closure_4) {
            flag3 = true;
            obj.failure = true;
            break;
          } else {
            obj.pointer = obj.pointer + 1;
            if (obj.pointer <= obj.input.length) {
              continue;
            } else {
              break;
            }
            break;
          }
          break;
        }
      }
    }
    return;
  }
  parse scheme start(arg0, arg1) {
    self = this;
    obj = require("metro/13752__.js");
    if (obj.isASCIIAlpha(arg0)) {
      tmp2 = arg1;
      self.buffer = self.buffer + arg1.toLowerCase();
      str2 = "scheme";
      self.state = "scheme";
    } else if (self.stateOverride) {
      flag = true;
      self.parseError = true;
      tmp = closure_4;
      return closure_4;
    } else {
      str = "no scheme";
      self.state = "no scheme";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  parse scheme(arg0, arg1) {
    self = this;
    obj = require("metro/13752__.js");
    if (!obj.isASCIIAlphanumeric(arg0)) {
      num = 43;
      if (43 !== arg0) {
        num8 = 45;
        if (45 !== arg0) {
          num9 = 46;
          if (46 !== arg0) {
            num10 = 58;
            if (58 === arg0) {
              if (self.stateOverride) {
                tmp2 = closure_3;
                if (undefined !== closure_3[self.url.scheme]) {
                  if (undefined === tmp2[self.buffer]) {
                    flag2 = false;
                    return false;
                  }
                }
                if (undefined === tmp2[self.url.scheme]) {
                  if (undefined !== tmp2[self.buffer]) {
                    flag3 = false;
                    return false;
                  }
                }
                url = self.url;
                str3 = "";
                tmp3 = "" !== url.username || "" !== url.password;
                if (tmp3) {
                  str4 = "file";
                  if ("file" === self.buffer) {
                    flag8 = false;
                    return false;
                  }
                } else {
                  tmp4 = null;
                }
                str5 = "file";
                if ("file" === self.url.scheme) {
                  if ("" !== self.url.host) {
                    tmp10 = null;
                  }
                  flag7 = false;
                  return false;
                }
              }
              self.url.scheme = self.buffer;
              if (self.stateOverride) {
                tmp8 = closure_3;
                if (self.url.port === closure_3[self.url.scheme]) {
                  tmp9 = null;
                  self.url.port = null;
                }
                flag6 = false;
                return false;
              } else {
                str6 = "";
                self.buffer = "";
                str7 = "file";
                if ("file" === self.url.scheme) {
                  num5 = 1;
                  num6 = 47;
                  tmp7 = 47 === self.input[self.pointer + 1];
                  if (tmp7) {
                    num7 = 2;
                    tmp7 = 47 === self.input[self.pointer + 2];
                  }
                  if (!tmp7) {
                    flag5 = true;
                    self.parseError = true;
                  }
                  self.state = "file";
                } else {
                  tmp11 = closure_3;
                  if (undefined !== closure_3[self.url.scheme]) {
                    tmp5 = null;
                    if (null !== self.base) {
                      if (self.base.scheme === self.url.scheme) {
                        str11 = "special relative or authority";
                        self.state = "special relative or authority";
                      }
                    }
                  }
                  if (undefined !== tmp11[self.url.scheme]) {
                    str10 = "special authority slashes";
                    self.state = "special authority slashes";
                  } else {
                    num3 = 1;
                    num4 = 47;
                    if (47 === self.input[self.pointer + 1]) {
                      str9 = "path or authority";
                      self.state = "path or authority";
                      self.pointer = self.pointer + 1;
                    } else {
                      flag4 = true;
                      self.url.cannotBeABaseURL = true;
                      path = self.url.path;
                      arr = path.push("");
                      str8 = "cannot-be-a-base-URL path";
                      self.state = "cannot-be-a-base-URL path";
                    }
                  }
                }
              }
            } else if (self.stateOverride) {
              flag = true;
              self.parseError = true;
              tmp = closure_4;
              return closure_4;
            } else {
              str = "";
              self.buffer = "";
              str2 = "no scheme";
              self.state = "no scheme";
              num2 = -1;
              self.pointer = -1;
            }
          }
          flag9 = true;
          return true;
        }
      }
    }
    self.buffer = self.buffer + arg1.toLowerCase();
    return;
  }
  parse no scheme(arg0) {
    self = this;
    if (null !== this.base) {
      tmp = arg0;
      if (self.base.cannotBeABaseURL) {
        num = 35;
        return flag;
      }
      if (self.base.cannotBeABaseURL) {
        num2 = 35;
        if (35 === arg0) {
          self.url.scheme = self.base.scheme;
          path = self.base.path;
          self.url.path = path.slice();
          self.url.query = self.base.query;
          str3 = "";
          self.url.fragment = "";
          flag2 = true;
          self.url.cannotBeABaseURL = true;
          str4 = "fragment";
          self.state = "fragment";
          flag = true;
        }
      }
      str = "file";
      if ("file" === self.base.scheme) {
        self.state = "file";
        self.pointer = self.pointer - 1;
        flag = true;
      } else {
        str2 = "relative";
        self.state = "relative";
        self.pointer = self.pointer - 1;
        flag = true;
      }
    }
    flag = closure_4;
    return;
  }
  parse special relative or authority(arg0) {
    self = this;
    if (47 === arg0) {
      num = 1;
      if (47 === self.input[self.pointer + 1]) {
        str = "special authority ignore slashes";
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    self.state = "relative";
    self.pointer = self.pointer - 1;
    return;
  }
  parse path or authority(arg0) {
    self = this;
    if (47 === arg0) {
      str2 = "authority";
      self.state = "authority";
    } else {
      str = "path";
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  parse relative(arg0) {
    self = this;
    this.url.scheme = this.base.scheme;
    if (isNaN(arg0)) {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      path = self.base.path;
      self.url.path = path.slice();
      self.url.query = self.base.query;
    } else {
      num = 47;
      if (47 === arg0) {
        str7 = "relative slash";
        self.state = "relative slash";
      } else {
        num5 = 63;
        if (63 === arg0) {
          self.url.username = self.base.username;
          self.url.password = self.base.password;
          self.url.host = self.base.host;
          self.url.port = self.base.port;
          path1 = self.base.path;
          self.url.path = path1.slice();
          str5 = "";
          self.url.query = "";
          str6 = "query";
          self.state = "query";
        } else {
          num6 = 35;
          if (35 === arg0) {
            self.url.username = self.base.username;
            self.url.password = self.base.password;
            self.url.host = self.base.host;
            self.url.port = self.base.port;
            path2 = self.base.path;
            self.url.path = path2.slice();
            self.url.query = self.base.query;
            str3 = "";
            self.url.fragment = "";
            str4 = "fragment";
            self.state = "fragment";
          } else {
            tmp = closure_3;
            if (undefined !== closure_3[self.url.scheme]) {
              num2 = 92;
              if (92 === arg0) {
                flag = true;
                self.parseError = true;
                str2 = "relative slash";
                self.state = "relative slash";
              }
            }
            self.url.username = self.base.username;
            self.url.password = self.base.password;
            self.url.host = self.base.host;
            self.url.port = self.base.port;
            path3 = self.base.path;
            num3 = 1;
            num4 = 0;
            self.url.path = require("../discord_app/index.native.tsx");
            str = "path";
            self.state = "path";
            self.pointer = self.pointer - 1;
          }
        }
      }
    }
    return true;
  }
  parse relative slash(arg0) {
    self = this;
    if (undefined !== closure_3[this.url.scheme]) {
      num = 47;
      if (47 !== arg0) {
        num2 = 92;
        flag2 = true;
        return true;
      }
      num3 = 92;
      if (92 === arg0) {
        flag = true;
        self.parseError = true;
      }
      str = "special authority ignore slashes";
      self.state = "special authority ignore slashes";
    }
    if (47 === arg0) {
      str3 = "authority";
      self.state = "authority";
    } else {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      str2 = "path";
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return;
  }
  parse special authority slashes(arg0) {
    self = this;
    if (47 === arg0) {
      num = 1;
      if (47 === self.input[self.pointer + 1]) {
        str = "special authority ignore slashes";
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    self.state = "special authority ignore slashes";
    self.pointer = self.pointer - 1;
    return;
  }
  parse special authority ignore slashes(arg0) {
    self = this;
    if (47 !== arg0) {
      num = 92;
      if (92 !== arg0) {
        str = "authority";
        self.state = "authority";
        self.pointer = self.pointer - 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    return;
  }
  parse authority(arg0, arg1) {
    self = this;
    if (64 === arg0) {
      flag2 = true;
      self.parseError = true;
      if (self.atFlag) {
        str4 = "%40";
        self.buffer = `%40${self.buffer}`;
      }
      self.atFlag = true;
      tmp6 = closure_0;
      tmp7 = closure_2;
      ucs22 = require("error").ucs2;
      length = ucs22.decode(self.buffer).length;
      num6 = 0;
      num7 = 1;
      str5 = "";
      num8 = 126;
      tmp8 = globalThis;
      num9 = 31;
      num10 = 58;
      num11 = 0;
      if (0 < length) {
        while (true) {
          buffer2 = self.buffer;
          codePointAtResult = buffer2.codePointAt(num11);
          tmp10 = num11;
          if (58 === codePointAtResult) {
            if (!self.passwordTokenSeenFlag) {
              self.passwordTokenSeenFlag = true;
            }
            num11 = num11 + 1;
            if (num11 >= length) {
              break;
            }
          }
          _String = String;
          fromCodePointResult = String.fromCodePoint(codePointAtResult);
          hasItem = codePointAtResult <= 31 || codePointAtResult > 126;
          if (!hasItem) {
            tmp13 = closure_6;
            hasItem = closure_6.has(codePointAtResult);
          }
          if (!hasItem) {
            tmp14 = closure_7;
            hasItem = closure_7.has(codePointAtResult);
          }
          if (!hasItem) {
            tmp15 = closure_5;
            hasItem = closure_5.has(codePointAtResult);
          }
          tmp16 = fromCodePointResult;
          if (hasItem) {
            tmp17 = closure_0;
            tmp18 = closure_2;
            _Buffer = require("Buffer").Buffer;
            fromResult = _Buffer.from(fromCodePointResult);
            num12 = 0;
            str6 = "";
            str7 = "";
            if (0 < fromResult.length) {
              do {
                tmp19 = closure_0;
                tmp20 = closure_2;
                obj = require("replaceByteInByteSequence");
                str6 = `${obj.percentEncode(arr[num12])}`;
                num12 = num12 + 1;
                str7 = str6;
                length2 = fromResult.length;
              } while (num12 < length2);
            }
            tmp16 = str7;
          }
          url = self.url;
          if (self.passwordTokenSeenFlag) {
            url.password = url.password + tmp16;
          } else {
            url.username = url.username + tmp16;
          }
        }
      }
      self.buffer = "";
    } else {
      tmp21 = globalThis;
      _isNaN = isNaN;
      if (!isNaN(arg0)) {
        num = 47;
        if (47 !== arg0) {
          num2 = 63;
          if (63 !== arg0) {
            num3 = 35;
            if (35 !== arg0) {
              tmp = closure_3;
              if (undefined !== closure_3[self.url.scheme]) {
                num4 = 92;
              }
              tmp2 = arg1;
              self.buffer = self.buffer + arg1;
            }
          }
        }
      }
      if (self.atFlag) {
        str = "";
        if ("" === self.buffer) {
          flag = true;
          self.parseError = true;
          tmp5 = closure_4;
          return closure_4;
        }
      }
      tmp3 = closure_0;
      tmp4 = closure_2;
      ({ pointer, buffer } = self);
      ucs2 = require("error").ucs2;
      num5 = 1;
      self.pointer = pointer - (ucs2.decode(buffer).length + 1);
      str2 = "";
      self.buffer = "";
      str3 = "host";
      self.state = "host";
    }
    return true;
  }
  parse port(arg0, arg1) {
    self = this;
    obj = require("metro/13752__.js");
    if (obj.isASCIIDigit(arg0)) {
      tmp8 = arg1;
      self.buffer = self.buffer + arg1;
    } else {
      tmp = globalThis;
      _isNaN = isNaN;
      if (!isNaN(arg0)) {
        num = 47;
        if (47 !== arg0) {
          num2 = 63;
          if (63 !== arg0) {
            num3 = 35;
            if (35 !== arg0) {
              tmp2 = closure_3;
              if (undefined === closure_3[self.url.scheme]) {
                if (!self.stateOverride) {
                  flag = true;
                  self.parseError = true;
                  tmp3 = closure_4;
                  return closure_4;
                }
              } else {
                num4 = 92;
              }
            }
          }
        }
      }
      str = "";
      if ("" !== self.buffer) {
        _parseInt = parseInt;
        parsed = parseInt(self.buffer);
        _Math = Math;
        num5 = 16;
        num6 = 2;
        num7 = 1;
        if (parsed > require("00002_obj132.js") - 1) {
          flag3 = true;
          self.parseError = true;
          tmp7 = closure_4;
          return closure_4;
        } else {
          tmp5 = closure_3;
          tmp6 = null;
          if (parsed !== closure_3[self.url.scheme]) {
            tmp6 = parsed;
          }
          self.url.port = tmp6;
          self.buffer = "";
        }
      }
      if (self.stateOverride) {
        flag2 = false;
        return false;
      } else {
        str2 = "path start";
        self.state = "path start";
        self.pointer = self.pointer - 1;
      }
    }
    return true;
  }
  parse file(arg0) {
    self = this;
    this.url.scheme = "file";
    if (47 !== arg0) {
      num7 = 92;
      if (92 !== arg0) {
        tmp12 = null;
        if (null !== self.base) {
          if ("file" === self.base.scheme) {
            tmp = globalThis;
            _isNaN = isNaN;
            if (isNaN(arg0)) {
              self.url.host = self.base.host;
              path = self.base.path;
              self.url.path = path.slice();
              self.url.query = self.base.query;
            } else {
              num = 63;
              if (63 === arg0) {
                self.url.host = self.base.host;
                path1 = self.base.path;
                self.url.path = path1.slice();
                str5 = "";
                self.url.query = "";
                str6 = "query";
                self.state = "query";
              } else {
                num8 = 35;
                if (35 === arg0) {
                  self.url.host = self.base.host;
                  path2 = self.base.path;
                  self.url.path = path2.slice();
                  self.url.query = self.base.query;
                  str3 = "";
                  self.url.fragment = "";
                  str4 = "fragment";
                  self.state = "fragment";
                } else {
                  ({ input, pointer } = self);
                  diff = input.length - pointer;
                  num9 = 2;
                  tmp7 = diff >= 2;
                  if (tmp7) {
                    num2 = 1;
                    tmp2 = input[pointer + 1];
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = require("metro/13752__.js");
                    isASCIIAlphaResult = obj.isASCIIAlpha(input[pointer]);
                    if (isASCIIAlphaResult) {
                      num3 = 58;
                      tmp6 = 58 === tmp2;
                      if (!tmp6) {
                        num4 = 124;
                        tmp6 = 124 === tmp2;
                      }
                      isASCIIAlphaResult = tmp6;
                    }
                    tmp7 = isASCIIAlphaResult;
                  }
                  if (tmp7) {
                    hasItem = 2 === diff;
                    if (!hasItem) {
                      tmp9 = closure_12;
                      hasItem = closure_12.has(input[pointer + 2]);
                    }
                    tmp7 = hasItem;
                  }
                  if (tmp7) {
                    flag = true;
                    self.parseError = true;
                  } else {
                    self.url.host = self.base.host;
                    path3 = self.base.path;
                    self.url.path = path3.slice();
                    url = self.url;
                    path4 = url.path;
                    num5 = 0;
                    if (0 !== path4.length) {
                      isMatch = "file" === url.scheme;
                      if (isMatch) {
                        num6 = 1;
                        isMatch = 1 === path4.length;
                      }
                      if (isMatch) {
                        obj2 = /^[A-Za-z]:$/;
                        isMatch = require("error");
                      }
                      if (!isMatch) {
                        arr = path4.pop();
                      }
                    }
                  }
                  str2 = "path";
                  self.state = "path";
                  self.pointer = self.pointer - 1;
                }
              }
            }
          }
        }
        str = "path";
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      flag3 = true;
      return true;
    }
    if (92 === arg0) {
      flag2 = true;
      self.parseError = true;
    }
    self.state = "file slash";
    return;
  }
  parse file slash(arg0) {
    self = this;
    if (47 !== arg0) {
      num7 = 92;
      if (92 !== arg0) {
        tmp15 = null;
        tmp = null === self.base;
        if (!tmp) {
          str = "file";
          tmp = "file" !== self.base.scheme;
        }
        if (!tmp) {
          ({ input, pointer } = self);
          diff = input.length - pointer;
          num = 2;
          tmp3 = diff >= 2;
          if (tmp3) {
            num2 = 1;
            tmp4 = input[pointer + 1];
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = require("metro/13752__.js");
            isASCIIAlphaResult = obj.isASCIIAlpha(input[pointer]);
            if (isASCIIAlphaResult) {
              num3 = 58;
              tmp8 = 58 === tmp4;
              if (!tmp8) {
                num4 = 124;
                tmp8 = 124 === tmp4;
              }
              isASCIIAlphaResult = tmp8;
            }
            tmp3 = isASCIIAlphaResult;
          }
          if (tmp3) {
            hasItem = 2 === diff;
            if (!hasItem) {
              tmp10 = closure_12;
              hasItem = closure_12.has(input[pointer + 2]);
            }
            tmp3 = hasItem;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          first = self.base.path[0];
          num5 = 2;
          isASCIIAlphaResult1 = 2 === first.length;
          if (isASCIIAlphaResult1) {
            tmp12 = closure_0;
            tmp13 = closure_2;
            obj2 = require("metro/13752__.js");
            num6 = 0;
            isASCIIAlphaResult1 = obj2.isASCIIAlpha(require("../discord_app/index.native.tsx"));
          }
          if (isASCIIAlphaResult1) {
            str2 = ":";
            isASCIIAlphaResult1 = ":" === first[1];
          }
          url = self.url;
          if (isASCIIAlphaResult1) {
            path = url.path;
            arr = require("error");
          } else {
            url.host = self.base.host;
          }
        }
        str3 = "path";
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      flag2 = true;
      return true;
    }
    if (92 === arg0) {
      flag = true;
      self.parseError = true;
    }
    self.state = "file host";
    return;
  }
  parse file host(arg0, arg1) {
    self = this;
    if (!isNaN(arg0)) {
      num = 47;
      if (47 !== arg0) {
        num2 = 92;
        if (92 !== arg0) {
          num3 = 63;
          if (63 !== arg0) {
            num4 = 35;
            if (35 !== arg0) {
              tmp = arg1;
              self.buffer = self.buffer + arg1;
            }
            flag3 = true;
            return true;
          }
        }
      }
    }
    self.pointer = self.pointer - 1;
    if (!self.stateOverride) {
      buffer = self.buffer;
      num5 = 2;
      isASCIIAlphaResult = 2 === buffer.length;
      if (isASCIIAlphaResult) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = require("metro/13752__.js");
        num6 = 0;
        isASCIIAlphaResult = obj.isASCIIAlpha(require("../discord_app/index.native.tsx"));
      }
      if (isASCIIAlphaResult) {
        str = ":";
        tmp5 = ":" === buffer[1];
        if (!tmp5) {
          str2 = "|";
          tmp5 = "|" === buffer[1];
        }
        isASCIIAlphaResult = tmp5;
      }
      if (isASCIIAlphaResult) {
        flag = true;
        self.parseError = true;
        str3 = "path";
        self.state = "path";
      }
    }
    if ("" === self.buffer) {
      self.url.host = "";
      if (self.stateOverride) {
        flag4 = false;
        return false;
      } else {
        str7 = "path start";
        self.state = "path start";
      }
    } else {
      tmp6 = parseHost;
      tmp7 = closure_3;
      num7 = 0;
      str4 = parseHost(self.buffer, undefined === closure_3[self.url.scheme]);
      if (str4 === closure_4) {
        return closure_4;
      } else {
        str5 = "localhost";
        if ("localhost" === str4) {
          str4 = "";
        }
        self.url.host = str4;
        if (self.stateOverride) {
          flag2 = false;
          return false;
        } else {
          self.buffer = "";
          str6 = "path start";
          self.state = "path start";
        }
      }
    }
    return;
  }
  parse path start(arg0) {
    self = this;
    if (undefined !== closure_3[this.url.scheme]) {
      num4 = 92;
      if (92 === arg0) {
        flag = true;
        self.parseError = true;
      }
      str6 = "path";
      self.state = "path";
      num5 = 47;
      tmp = 47 !== arg0 && 92 !== arg0;
      if (tmp) {
        self.pointer = self.pointer - 1;
      }
    } else {
      if (!self.stateOverride) {
        num = 63;
        if (63 === arg0) {
          str = "";
          self.url.query = "";
          str2 = "query";
          self.state = "query";
        }
      }
      if (!self.stateOverride) {
        num2 = 35;
        if (35 === arg0) {
          str3 = "";
          self.url.fragment = "";
          str4 = "fragment";
          self.state = "fragment";
        }
      }
      if (undefined !== arg0) {
        str5 = "path";
        self.state = "path";
        num3 = 47;
        if (47 !== arg0) {
          self.pointer = self.pointer - 1;
        }
      }
    }
    return true;
  }
  parse path(arg0) {
    self = this;
    if (!isNaN(arg0)) {
      num = 47;
      if (47 !== arg0) {
        tmp35 = closure_3;
        if (undefined === closure_3[self.url.scheme]) {
          if (!self.stateOverride) {
            num3 = 63;
            if (63 !== arg0) {
              num24 = 35;
              flag5 = true;
              return true;
            }
          }
          num4 = 37;
          tmp = 37 !== arg0;
          if (!tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = require("metro/13752__.js");
            num5 = 1;
            isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
            if (isASCIIHexResult) {
              tmp2Result = require("metro/13752__.js");
              num6 = 2;
              isASCIIHexResult = tmp2Result.isASCIIHex(self.input[self.pointer + 2]);
            }
            tmp = isASCIIHexResult;
          }
          if (!tmp) {
            flag = true;
            self.parseError = true;
          }
          _String = String;
          fromCodePointResult = String.fromCodePoint(arg0);
          num7 = 31;
          hasItem = arg0 <= 31;
          if (!hasItem) {
            num8 = 126;
            hasItem = arg0 > 126;
          }
          if (!hasItem) {
            tmp7 = closure_6;
            hasItem = closure_6.has(arg0);
          }
          if (!hasItem) {
            tmp8 = closure_7;
            hasItem = closure_7.has(arg0);
          }
          tmp9 = fromCodePointResult;
          if (hasItem) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            _Buffer = require("Buffer").Buffer;
            fromResult = _Buffer.from(fromCodePointResult);
            num9 = 0;
            str = "";
            num10 = 1;
            str2 = "";
            if (0 < fromResult.length) {
              do {
                tmp12 = closure_0;
                tmp13 = closure_2;
                obj3 = require("replaceByteInByteSequence");
                str = `${obj3.percentEncode(arr[num9])}`;
                num9 = num9 + 1;
                str2 = str;
                length = fromResult.length;
              } while (num9 < length);
            }
            tmp9 = str2;
          }
          self.buffer = self.buffer + tmp9;
        } else {
          num2 = 92;
        }
      }
    }
    tmp14 = closure_3;
    tmp15 = undefined !== closure_3[self.url.scheme];
    if (tmp15) {
      num11 = 92;
      tmp15 = 92 === arg0;
    }
    if (tmp15) {
      flag2 = true;
      self.parseError = true;
    }
    str3 = self.buffer;
    formatted = str3.toLowerCase();
    tmp17 = ".." === formatted;
    if (!tmp17) {
      str4 = "%2e.";
      tmp17 = "%2e." === formatted;
    }
    if (!tmp17) {
      str5 = ".%2e";
      tmp17 = ".%2e" === formatted;
    }
    if (!tmp17) {
      str6 = "%2e%2e";
      tmp17 = "%2e%2e" === formatted;
    }
    if (tmp17) {
      url = self.url;
      path = url.path;
      num17 = 0;
      if (0 !== path.length) {
        str18 = "file";
        isMatch = "file" === url.scheme;
        if (isMatch) {
          num18 = 1;
          isMatch = 1 === path.length;
        }
        if (isMatch) {
          obj5 = /^[A-Za-z]:$/;
          isMatch = require("error");
        }
        if (!isMatch) {
          arr = path.pop();
        }
      }
      num19 = 47;
      tmp31 = 47 === arg0;
      if (!tmp31) {
        tmp32 = undefined !== tmp14[self.url.scheme];
        if (tmp32) {
          num20 = 92;
          tmp32 = 92 === arg0;
        }
        tmp31 = tmp32;
      }
      if (!tmp31) {
        path1 = self.url.path;
        str19 = "";
        arr1 = path1.push("");
      }
    } else {
      str7 = self.buffer;
      str8 = ".";
      tmp18 = "." === str7;
      if (!tmp18) {
        str9 = "%2e";
        tmp18 = "%2e" === str7.toLowerCase();
      }
      if (tmp18) {
        num12 = 47;
        if (47 !== arg0) {
          if (undefined !== tmp14[self.url.scheme]) {
            num13 = 92;
          }
          path2 = self.url.path;
          str10 = "";
          arr2 = path2.push("");
        }
      }
      str11 = self.buffer;
      tmp20 = "." === str11;
      if (!tmp20) {
        str12 = "%2e";
        tmp20 = "%2e" === str11.toLowerCase();
      }
      if (!tmp20) {
        str13 = "file";
        tmp21 = "file" === self.url.scheme;
        if (tmp21) {
          num14 = 0;
          tmp21 = 0 === self.url.path.length;
        }
        if (tmp21) {
          buffer = self.buffer;
          num15 = 2;
          isASCIIAlphaResult = 2 === buffer.length;
          if (isASCIIAlphaResult) {
            tmp23 = closure_0;
            tmp24 = closure_2;
            obj4 = require("metro/13752__.js");
            num16 = 0;
            isASCIIAlphaResult = obj4.isASCIIAlpha(require("../discord_app/index.native.tsx"));
          }
          if (isASCIIAlphaResult) {
            str14 = ":";
            tmp25 = ":" === buffer[1];
            if (!tmp25) {
              str15 = "|";
              tmp25 = "|" === buffer[1];
            }
            isASCIIAlphaResult = tmp25;
          }
          tmp21 = isASCIIAlphaResult;
        }
        if (tmp21) {
          str16 = "";
          tmp26 = "" !== self.url.host;
          if (tmp26) {
            tmp27 = null;
            tmp26 = null !== self.url.host;
          }
          if (tmp26) {
            flag3 = true;
            self.parseError = true;
            self.url.host = "";
          }
          str17 = ":";
          self.buffer = `${self.buffer[0]}:`;
        }
        path3 = self.url.path;
        arr3 = path3.push(self.buffer);
      }
    }
    self.buffer = "";
    if ("file" === self.url.scheme) {
      if (undefined !== arg0) {
        num21 = 63;
        if (63 !== arg0) {
          num22 = 35;
        }
      }
      num23 = 1;
      if (self.url.path.length > 1) {
        flag4 = true;
        if ("" === self.url.path[0]) {
          self.parseError = true;
          path4 = self.url.path;
          arr4 = path4.shift();
          while (self.url.path.length > 1) {
            if ("" !== self.url.path[0]) {
              break;
            }
          }
        }
      }
    }
    if (63 === arg0) {
      self.url.query = "";
      str20 = "query";
      self.state = "query";
    }
    if (35 === arg0) {
      self.url.fragment = "";
      str21 = "fragment";
      self.state = "fragment";
    }
    return;
  }
  parse cannot-be-a-base-URL path(arg0) {
    self = this;
    if (63 === arg0) {
      str5 = "";
      self.url.query = "";
      str6 = "query";
      self.state = "query";
    } else {
      num10 = 35;
      if (35 === arg0) {
        str3 = "";
        self.url.fragment = "";
        str4 = "fragment";
        self.state = "fragment";
      } else {
        tmp13 = globalThis;
        _isNaN2 = isNaN;
        isNaNResult = isNaN(arg0);
        if (!isNaNResult) {
          num = 37;
          isNaNResult = 37 === arg0;
        }
        if (!isNaNResult) {
          flag = true;
          self.parseError = true;
        }
        num2 = 37;
        tmp2 = 37 !== arg0;
        if (!tmp2) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = require("metro/13752__.js");
          num3 = 1;
          isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
          if (isASCIIHexResult) {
            tmp3Result = require("metro/13752__.js");
            num4 = 2;
            isASCIIHexResult = tmp3Result.isASCIIHex(self.input[self.pointer + 2]);
          }
          tmp2 = isASCIIHexResult;
        }
        if (!tmp2) {
          flag2 = true;
          self.parseError = true;
        }
        _isNaN = isNaN;
        if (!isNaN(arg0)) {
          path = self.url.path;
          _String = String;
          fromCodePointResult = String.fromCodePoint(arg0);
          num5 = 31;
          tmp7 = arg0 <= 31;
          if (!tmp7) {
            num6 = 126;
            tmp7 = arg0 > 126;
          }
          tmp8 = fromCodePointResult;
          if (tmp7) {
            tmp9 = closure_0;
            tmp10 = closure_2;
            _Buffer = require("Buffer").Buffer;
            fromResult = _Buffer.from(fromCodePointResult);
            num7 = 0;
            str = "";
            num8 = 1;
            str2 = "";
            if (0 < fromResult.length) {
              do {
                tmp11 = closure_0;
                tmp12 = closure_2;
                obj3 = require("replaceByteInByteSequence");
                str = `${obj3.percentEncode(arr[num7])}`;
                num7 = num7 + 1;
                str2 = str;
                length = fromResult.length;
              } while (num7 < length);
            }
            tmp8 = str2;
          }
          num9 = 0;
          path[0] = path[0] + tmp8;
        }
      }
    }
    return true;
  }
  parse query(arg0, arg1) {
    self = this;
    if (!isNaN(arg0)) {
      if (!self.stateOverride) {
        num = 35;
        flag2 = true;
        return true;
      }
      num2 = 37;
      tmp = 37 !== arg0;
      if (!tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = require("metro/13752__.js");
        num3 = 1;
        isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
        if (isASCIIHexResult) {
          tmp2Result = require("metro/13752__.js");
          num4 = 2;
          isASCIIHexResult = tmp2Result.isASCIIHex(self.input[self.pointer + 2]);
        }
        tmp = isASCIIHexResult;
      }
      if (!tmp) {
        flag = true;
        self.parseError = true;
      }
      tmp5 = arg1;
      self.buffer = self.buffer + arg1;
    }
    tmp6 = undefined !== closure_3[self.url.scheme];
    if (tmp6) {
      str = "ws";
      tmp6 = "ws" !== self.url.scheme;
    }
    if (tmp6) {
      str2 = "wss";
      tmp6 = "wss" !== self.url.scheme;
    }
    if (!tmp6) {
      str3 = "utf-8";
      self.encodingOverride = "utf-8";
    }
    _Buffer = require("Buffer").Buffer;
    fromResult = _Buffer.from(self.buffer);
    num5 = 0;
    if (0 < fromResult.length) {
      while (true) {
        tmp7 = num5;
        if (fromResult[num5] >= 33) {
          if (fromResult[num5] <= 126) {
            if (34 !== fromResult[num5]) {
              if (35 !== fromResult[num5]) {
                if (60 !== fromResult[num5]) {
                  if (62 !== fromResult[num5]) {
                    if (39 !== fromResult[num5]) {
                      url = self.url;
                      _String = String;
                      url.query = url.query + String.fromCodePoint(fromResult[num5]);
                    } else {
                      tmp8 = closure_3;
                    }
                  }
                  num5 = num5 + 1;
                  if (num5 >= fromResult.length) {
                    break;
                  }
                }
              }
            }
          }
        }
        url2 = self.url;
        tmp9 = closure_0;
        tmp10 = closure_2;
        obj3 = require("replaceByteInByteSequence");
        url2.query = url2.query + obj3.percentEncode(fromResult[num5]);
      }
    }
    self.buffer = "";
    if (35 === arg0) {
      self.url.fragment = "";
      str4 = "fragment";
      self.state = "fragment";
    }
    return;
  }
  parse fragment(arg0) {
    if (!isNaN(arg0)) {
      self = this;
      num = 0;
      if (0 === arg0) {
        flag2 = true;
        self.parseError = true;
      } else {
        num8 = 37;
        tmp4 = 37 !== arg0;
        if (!tmp4) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = require("metro/13752__.js");
          num2 = 1;
          isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
          if (isASCIIHexResult) {
            tmpResult = require("metro/13752__.js");
            num3 = 2;
            isASCIIHexResult = tmpResult.isASCIIHex(self.input[self.pointer + 2]);
          }
          tmp4 = isASCIIHexResult;
        }
        if (!tmp4) {
          flag = true;
          self.parseError = true;
        }
        url = self.url;
        _String = String;
        fromCodePointResult = String.fromCodePoint(arg0);
        num4 = 31;
        hasItem = arg0 <= 31;
        if (!hasItem) {
          num5 = 126;
          hasItem = arg0 > 126;
        }
        if (!hasItem) {
          tmp7 = closure_6;
          hasItem = closure_6.has(arg0);
        }
        tmp8 = fromCodePointResult;
        if (hasItem) {
          tmp9 = closure_0;
          tmp10 = closure_2;
          _Buffer = require("Buffer").Buffer;
          fromResult = _Buffer.from(fromCodePointResult);
          str = "";
          num6 = 1;
          num7 = 0;
          str2 = "";
          if (0 < fromResult.length) {
            do {
              tmp11 = closure_0;
              tmp12 = closure_2;
              obj3 = require("replaceByteInByteSequence");
              str = `${obj3.percentEncode(arr[num7])}`;
              num7 = num7 + 1;
              str2 = str;
              length = fromResult.length;
            } while (num7 < length);
          }
          tmp8 = str2;
        }
        url.fragment = url.fragment + tmp8;
      }
    }
    return true;
  }
}
let closure_3 = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 };
let closure_4 = Symbol("failure");
const set = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
const set1 = new Set([32, 34, 60, 62, 96]);
const set2 = new Set([35, 63, 123, 125]);
function parseHostName(arg0, arg1) {
  const self = this;
  if (this.stateOverride) {
    if ("file" === self.url.scheme) {
      self.pointer = self.pointer - 1;
      self.state = "file host";
    }
    return true;
  }
  if (58 === arg0) {
    if (!self.arrFlag) {
      if ("" === self.buffer) {
        self.parseError = true;
        return closure_4;
      } else {
        const tmp3 = parseHost(self.buffer, undefined === dependencyMap[self.url.scheme]);
        if (tmp3 === closure_4) {
          return closure_4;
        } else {
          self.url.host = tmp3;
          self.buffer = "";
          self.state = "port";
          if ("hostname" === self.stateOverride) {
            return false;
          }
        }
      }
    }
  }
  if (!isNaN(arg0)) {
    if (47 !== arg0) {
      if (63 !== arg0) {
        if (35 !== arg0) {
          if (91 === arg0) {
            self.arrFlag = true;
          } else if (93 === arg0) {
            self.arrFlag = false;
          }
          self.buffer = self.buffer + arg1;
        }
      }
    }
  }
  self.pointer = self.pointer - 1;
  if (undefined !== dependencyMap[self.url.scheme]) {
    if ("" === self.buffer) {
      self.parseError = true;
      return closure_4;
    }
  }
  if (self.stateOverride) {
    if ("" === self.buffer) {
      const url = self.url;
      self.parseError = true;
      return false;
    }
  }
  const tmp10 = parseHost(self.buffer, undefined === dependencyMap[self.url.scheme]);
  if (tmp10 === closure_4) {
    return closure_4;
  } else {
    self.url.host = tmp10;
    self.buffer = "";
    self.state = "path start";
    if (self.stateOverride) {
      return false;
    }
  }
}
URLStateMachine.prototype["parse host"] = parseHostName;
URLStateMachine.prototype["parse hostname"] = parseHostName;
const set3 = new Set([47, 92, 63, 35]);
exports.exports.serializeURL = function serializeURL(_url) {
  let text = `${_url.scheme}:`;
  if (null !== _url.host) {
    let text1 = `${_url.scheme}://`;
    if (!tmp6) {
      let sum = text1 + _url.username;
      if ("" !== _url.password) {
        sum = `${tmp8}:${_url.password}`;
      }
      text1 = `${tmp8}@`;
    }
    text = text1 + serializeHost(_url.host);
    if (null !== _url.port) {
      text = `${tmp}:${_url.port}`;
    }
    tmp6 = "" === _url.username && "" === _url.password;
  } else {
    let tmp2 = null === _url.host;
    if (tmp2) {
      tmp2 = "file" === _url.scheme;
    }
    if (tmp2) {
      text = `${tmp}//`;
    }
  }
  if (_url.cannotBeABaseURL) {
    text = text + _url.path[0];
  } else {
    const path = _url.path;
    const tmp15 = path[Symbol.iterator]();
    while (tmp15 !== undefined) {
      text = `${tmp}/${tmp17}`;
      continue;
    }
  }
  if (null !== _url.query) {
    text = `${tmp}?${_url.query}`;
  }
  let tmp22 = arg1;
  if (!arg1) {
    tmp22 = null === _url.fragment;
  }
  if (!tmp22) {
    text = `${tmp}#${_url.fragment}`;
  }
  return text;
};
exports.exports.serializeURLOrigin = (scheme) => {
  scheme = scheme.scheme;
  if ("blob" === scheme) {
    try {
      ({ exports: _exports, exports: _exports2 } = module);
      return _exports.serializeURLOrigin(_exports2.parseURL(scheme.path[0]));
    } catch (err) {
      return "null";
    }
  } else {
    if ("ftp" !== scheme) {
      if ("http" !== scheme) {
        if ("https" !== scheme) {
          if ("ws" !== scheme) {
            if ("wss" !== scheme) {
              return "null";
            }
          }
        }
      }
    }
    const obj = { scheme: null, host: null, port: null };
    ({ scheme: obj[0], host: obj[1], port: obj[2] } = scheme);
    return (function serializeOrigin(port) {
      const text = `${port.scheme}://${closure_10(port.host)}`;
      let text1 = text;
      if (null !== port.port) {
        text1 = `${port.scheme}://${closure_10(port.host)}${":" + port.port}`;
      }
      return text1;
    })(obj);
  }
};
exports.exports.basicURLParse = (input) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  ({ baseURL, encodingOverride, url, stateOverride } = obj);
  obj = Object.create(URLStateMachine.prototype);
  new URLStateMachine(input, baseURL, encodingOverride, url, stateOverride);
  url = null;
  if (!obj.failure) {
    url = obj.url;
  }
  return url;
};
exports.exports.setTheUsername = (username) => {
  username.username = "";
  const ucs2 = error.ucs2;
  const decodeResult = ucs2.decode(arg1);
  for (let num = 0; num < decodeResult.length; num = num + 1) {
    let tmp = decodeResult[num];
    let _String = String;
    let fromCodePointResult = String.fromCodePoint(tmp);
    let hasItem = tmp <= 31;
    if (!hasItem) {
      hasItem = tmp > 126;
    }
    if (!hasItem) {
      hasItem = set1.has(tmp);
    }
    if (!hasItem) {
      hasItem = set2.has(tmp);
    }
    if (!hasItem) {
      hasItem = set.has(tmp);
    }
    let tmp8 = fromCodePointResult;
    if (hasItem) {
      let _Buffer = Buffer.Buffer;
      let fromResult = _Buffer.from(fromCodePointResult);
      let num2 = 0;
      let str = "";
      let str2 = "";
      if (0 < fromResult.length) {
        do {
          let obj = replaceByteInByteSequence;
          str = `${obj.percentEncode(arr2[num2])}`;
          num2 = num2 + 1;
          str2 = str;
          length = fromResult.length;
        } while (num2 < length);
      }
      tmp8 = str2;
    }
    username.username = username.username + tmp8;
  }
};
exports.exports.setThePassword = (password) => {
  password.password = "";
  const ucs2 = error.ucs2;
  const decodeResult = ucs2.decode(arg1);
  for (let num = 0; num < decodeResult.length; num = num + 1) {
    let tmp = decodeResult[num];
    let _String = String;
    let fromCodePointResult = String.fromCodePoint(tmp);
    let hasItem = tmp <= 31;
    if (!hasItem) {
      hasItem = tmp > 126;
    }
    if (!hasItem) {
      hasItem = set1.has(tmp);
    }
    if (!hasItem) {
      hasItem = set2.has(tmp);
    }
    if (!hasItem) {
      hasItem = set.has(tmp);
    }
    let tmp8 = fromCodePointResult;
    if (hasItem) {
      let _Buffer = Buffer.Buffer;
      let fromResult = _Buffer.from(fromCodePointResult);
      let num2 = 0;
      let str = "";
      let str2 = "";
      if (0 < fromResult.length) {
        do {
          let obj = replaceByteInByteSequence;
          str = `${obj.percentEncode(arr2[num2])}`;
          num2 = num2 + 1;
          str2 = str;
          length = fromResult.length;
        } while (num2 < length);
      }
      tmp8 = str2;
    }
    password.password = password.password + tmp8;
  }
};
exports.exports.serializeHost = serializeHost;
exports.exports.cannotHaveAUsernamePasswordPort = function cannotHaveAUsernamePasswordPort(_url) {
  let cannotBeABaseURL = null === _url.host;
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = "" === _url.host;
  }
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = _url.cannotBeABaseURL;
  }
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = "file" === _url.scheme;
  }
  return cannotBeABaseURL;
};
exports.exports.serializeInteger = (arg0) => String(arg0);
exports.exports.parseURL = (arg0, arg1) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const _exports = module.exports;
  obj = { baseURL: obj.baseURL, encodingOverride: obj.encodingOverride };
  return _exports.basicURLParse(arg0, obj);
};