// _runtime/metro/14138__.js
import Buffer from "../01263_Buffer.js";
import _mod14139 from "14139__.js";
import _mod14140 from "14140__.js";
import _mod14141 from "14141__.js";

function parseIPv4Number(match) {
  let num4;
  let substr;
  if (match.length >= 2) {
    if ("0" === match.charAt(0)) {
      const str2 = match.charAt(1);
      if ("x" === str2.toLowerCase()) {
        substr = match.substring(2);
        num4 = 16;
      }
      if ("" === substr) {
        return 0;
      } else {
        let parsed;
        let obj = /[^0-7]/;
        if (10 === num4) {
          obj = /[^0-9]/;
        }
        if (16 === num4) {
          obj = /[^0-9A-Fa-f]/;
        }
        if (obj.test(substr)) {
          parsed = closure_4;
        } else {
          const _parseInt = parseInt;
          parsed = parseInt(substr, num4);
        }
        return parsed;
      }
    }
  }
  num4 = 10;
  substr = match;
  const tmp = match.length >= 2 && "0" === match.charAt(0);
  if (tmp) {
    substr = match.substring(1);
    num4 = 8;
  }
}
function parseHost(buffer, arg1) {
  let length;
  function parseIPv4(str) {
    const parts = str.split(".");
    const tmp = "" === parts[parts.length - 1] && parts.length > 1;
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
          let tmp9 = parseIPv4Number(tmp6);
          if (tmp9 === closure_1_4) {
            iter.return();
            return str;
          } else {
            let arr2 = items.push(tmp10);
            continue;
          }
        }
      }
      let num2 = 0;
      if (0 < items.length - 1) {
        while (items[num2] <= 255) {
          num2 = num2 + 1;
        }
        return closure_1_4;
      }
      const _Math = Math;
      if (items[items.length - 1] >= Math.pow(256, 5 - items.length)) {
        return closure_1_4;
      } else {
        let arr5 = items.pop();
        let num5 = 0;
        const tmp20 = items[Symbol.iterator]();
        while (tmp20 !== undefined) {
          let _Math2 = Math;
          arr5 = arr5 + tmp22 * Math.pow(256, 3 - num5);
          num5 = num5 + 1;
          continue;
        }
        return arr5;
      }
    }
  }
  if ("[" === buffer[0]) {
    let tmp28;
    if ("]" !== buffer[buffer.length - 1]) {
      tmp28 = closure_4;
    } else {
      const substr = buffer.substring(1, buffer.length - 1);
      const ucs22 = _mod14139.ucs2;
      const decodeResult = ucs22.decode(substr);
      let num7 = 0;
      let num8 = null;
      let num9 = 0;
      if (58 === decodeResult[0]) {
        num7 = 2;
        num8 = 1;
        num9 = 1;
        if (58 !== decodeResult[1]) {
          tmp28 = closure_4;
        }
      }
      let items = [0, 0, 0, 0, 0, 0, 0, 0];
      let tmp18 = num8;
      let tmp19 = num9;
      let tmp20 = num8;
      let tmp21 = num9;
      if (num7 >= decodeResult.length) {
        if (null !== tmp20) {
          let diff = tmp21 - tmp20;
          let num20 = 7;
          tmp28 = items;
          if (0 < diff) {
            const diff1 = tmp20 + diff - 1;
            items[diff1] = items[num20];
            items[num20] = items[diff1];
            const diff2 = num20 - 1;
            tmp28 = items;
            while (0 !== diff2) {
              diff = diff - 1;
              num20 = diff2;
              tmp28 = items;
              if (0 < diff) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        } else {
          tmp28 = items;
          if (null === tmp20) {
            tmp28 = items;
            if (8 !== tmp21) {
              tmp28 = closure_4;
            }
          }
        }
      } else {
        const tmp22 = num7;
        let tmp24 = tmp19;
        while (8 !== tmp19) {
          let sum11;
          let sum10;
          let sum9;
          if (58 !== decodeResult[num7]) {
            let obj3 = _mod14140;
            let num14 = 0;
            let num15 = 0;
            let tmp31 = num7;
            let num16 = 0;
            let num17 = 0;
            let tmp32 = num7;
            if (obj3.isASCIIHex(decodeResult[num7])) {
              while (true) {
                let tmp33 = decodeResult[tmp31];
                let _isNaN = isNaN;
                let _parseInt = parseInt;
                let fromCodePointResult;
                if (!isNaN(tmp33)) {
                  let _String2 = String;
                  fromCodePointResult = String.fromCodePoint(tmp33);
                }
                let result = 16 * num15;
                let sum = result + _parseInt(fromCodePointResult, 16);
                let sum1 = tmp31 + 1;
                let sum2 = num14 + 1;
                num16 = sum2;
                num17 = sum;
                tmp32 = sum1;
                if (sum2 >= 4) {
                  break;
                } else {
                  let obj4 = _mod14140;
                  num14 = sum2;
                  num15 = sum;
                  tmp31 = sum1;
                  num16 = sum2;
                  num17 = sum;
                  tmp32 = sum1;
                  if (!obj4.isASCIIHex(decodeResult[sum1])) {
                    break;
                  }
                }
              }
            }
            if (46 === decodeResult[tmp32]) {
              if (0 === num16) {
                tmp28 = closure_4;
              } else if (6 < tmp19) {
                tmp28 = closure_4;
              } else {
                let diff3 = tmp32 - num16;
                let num18 = 0;
                let tmp65 = tmp19;
                let num19 = 0;
                let tmp67 = tmp19;
                if (undefined === decodeResult[diff3]) {
                  tmp21 = tmp67;
                  tmp20 = tmp18;
                  if (4 !== num19) {
                    tmp28 = closure_4;
                  }
                } else {
                  while (true) {
                    let sum7 = diff3;
                    if (0 >= num18) {
                      let obj5 = _mod14140;
                      if (obj5.isASCIIDigit(decodeResult[sum7])) {
                        let tmp50Result = _mod14140;
                        let tmp52 = null;
                        let tmp53 = sum7;
                        let tmp54 = null;
                        let tmp55 = sum7;
                        if (!tmp50Result.isASCIIDigit(decodeResult[sum7])) {
                          items[tmp65] = 256 * items[tmp65] + tmp54;
                          let sum3 = num18 + 1;
                          let tmp63 = 2 !== sum3;
                          if (2 !== sum3) {
                            tmp63 = 4 !== sum3;
                          }
                          let sum4 = tmp65;
                          if (!tmp63) {
                            sum4 = tmp65 + 1;
                          }
                          tmp65 = sum4;
                          num18 = sum3;
                          diff3 = tmp55;
                          num19 = sum3;
                          tmp67 = sum4;
                        } else {
                          while (true) {
                            let tmp56 = decodeResult[tmp53];
                            let _isNaN2 = isNaN;
                            let _parseInt2 = parseInt;
                            let fromCodePointResult1;
                            if (!isNaN(tmp56)) {
                              let _String3 = String;
                              fromCodePointResult1 = String.fromCodePoint(tmp56);
                            }
                            let _parseInt2Result = _parseInt2(fromCodePointResult1);
                            let sum6 = _parseInt2Result;
                            if (null === tmp52) {
                              if (sum6 > 255) {
                                tmp28 = closure_4;
                              } else {
                                let sum5 = tmp53 + 1;
                                tmp52 = sum6;
                                tmp53 = sum5;
                                tmp54 = sum6;
                                tmp55 = sum5;
                              }
                            } else if (0 === tmp52) {
                              break;
                            } else {
                              sum6 = 10 * tmp52 + _parseInt2Result;
                            }
                          }
                          tmp28 = closure_4;
                        }
                      } else {
                        tmp28 = closure_4;
                      }
                    } else if (46 !== decodeResult[diff3]) {
                      break;
                    } else if (num18 >= 4) {
                      break;
                    } else {
                      sum7 = diff3 + 1;
                    }
                  }
                  tmp28 = closure_4;
                }
              }
            } else {
              let tmp44;
              if (58 === decodeResult[tmp32]) {
                let sum8 = tmp32 + 1;
                tmp44 = sum8;
                if (undefined === decodeResult[sum8]) {
                  tmp28 = closure_4;
                }
              } else {
                tmp44 = tmp32;
                if (undefined !== decodeResult[tmp32]) {
                  tmp28 = closure_4;
                }
              }
              items[tmp19] = num17;
              sum9 = tmp19 + 1;
              sum10 = tmp44;
              sum11 = tmp18;
              num7 = sum10;
              tmp18 = sum11;
              tmp19 = sum9;
              tmp20 = sum11;
              tmp21 = sum9;
            }
          } else if (null !== tmp18) {
            tmp28 = closure_4;
          } else {
            sum10 = num7 + 1;
            sum11 = tmp19 + 1;
            sum9 = sum11;
          }
        }
        tmp28 = closure_4;
      }
    }
    return tmp28;
  } else {
    const tmp72 = arg1;
    if (tmp72) {
      let str5;
      if (-1 !== buffer.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) {
        str5 = closure_4;
      } else {
        const ucs2 = _mod14139.ucs2;
        const decodeResult1 = ucs2.decode(buffer);
        let num5 = 0;
        let str4 = "";
        str5 = "";
        if (0 < decodeResult1.length) {
          do {
            let tmp7 = decodeResult1[num5];
            let _String = String;
            let fromCodePointResult2 = String.fromCodePoint(tmp7);
            let tmp9 = tmp7 <= 31;
            let tmp10 = num5;
            if (!tmp9) {
              tmp9 = tmp7 > 126;
            }
            let tmp12 = fromCodePointResult2;
            if (tmp9) {
              let _Buffer2 = Buffer.Buffer;
              let fromResult = _Buffer2.from(fromCodePointResult2);
              let num4 = 0;
              let str2 = "";
              let str3 = "";
              if (0 < fromResult.length) {
                do {
                  let obj2 = _mod14141;
                  str2 = `${obj2.percentEncode(arr[num4])}`;
                  num4 = num4 + 1;
                  str3 = str2;
                  length = fromResult.length;
                } while (num4 < length);
              }
              tmp12 = str3;
            }
            str4 = str4 + tmp12;
            num5 = num5 + 1;
            str5 = str4;
          } while (num5 < decodeResult1.length);
        }
      }
      return str5;
    } else {
      const percentDecode = _mod14141.percentDecode;
      const _Buffer = Buffer.Buffer;
      const str = percentDecode(_Buffer.from(buffer));
      let str1 = str.toString();
      if (null === str1) {
        str1 = closure_4;
      }
      if (str1 === closure_4) {
        return closure_4;
      } else if (-1 !== str1.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) {
        return closure_4;
      } else {
        let num2 = 0;
        const tmp6 = parseIPv4(str1);
        if (typeof tmp6 === "number") {
          str1 = tmp6;
        }
        return str1;
      }
    }
  }
}
function serializeHost(host) {
  let combined;
  let tmp22;
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
      combined = text1;
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
          let tmp14;
          let tmp15;
          let num8;
          let tmp13;
          let tmp12 = tmp5;
          if (0 !== host[num3]) {
            let tmp16 = num5;
            if (num5 < num4) {
              tmp16 = num4;
              tmp12 = tmp4;
            }
            tmp14 = tmp16;
            tmp15 = tmp12;
            num8 = 0;
            tmp13 = null;
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
      do {
        let tmp20 = flag && 0 === host[num11];
        let tmp21 = flag;
        tmp22 = str;
        if (!tmp20) {
          let sum1;
          let flag2;
          let tmp23 = flag && false;
          if (tmp7 !== num11) {
            let str5 = host[num11];
            let sum = str + str5.toString(16);
            let text2 = sum;
            if (7 !== num11) {
              text2 = `${tmp25}:`;
            }
            sum1 = text2;
            flag2 = tmp23;
          } else {
            let str4 = ":";
            if (0 === num11) {
              str4 = "::";
            }
            sum1 = str + str4;
            flag2 = true;
          }
          tmp21 = flag2;
          tmp22 = sum1;
        }
        num11 = num11 + 1;
        flag = tmp21;
        str = tmp22;
      } while (num11 <= 7);
      const _HermesInternal = HermesInternal;
      combined = "[" + tmp22 + "]";
    }
  }
  return combined;
}
class URLStateMachine {
  constructor(input, baseURL, encodingOverride, url, stateOverride) {
    let obj;
    let str;
    let str2;
    let tmp;
    let ucs2;
    obj = {
      pointer: 0,
      input: ucs2.decode(obj.input),
      base: tmp,
      encodingOverride: str,
      stateOverride,
      url,
      failure: false,
      parseError: false,
      state: str2,
      buffer: "",
      atFlag: false,
      arrFlag: false,
      passwordTokenSeenFlag: false,
    };
    str2 = stateOverride;
    str = encodingOverride || "utf-8";
    tmp = baseURL || null;
    if (!obj.url) {
      const user = {
        scheme: "",
        username: "",
        password: "",
        host: null,
        port: null,
        path: [],
        query: null,
        fragment: null,
        cannotBeABaseURL: false,
      };
      obj.url = user;
      const str3 = obj.input;
      const replaced = str3.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
      if (replaced !== obj.input) {
        obj.parseError = true;
      }
      obj.input = replaced;
    }
    const str5 = obj.input;
    const replaced1 = str5.replace(/\u0009|\u000A|\u000D/g, "");
    if (replaced1 !== obj.input) {
      obj.parseError = true;
    }
    if (!str2) {
      str2 = "scheme start";
    }
    ucs2 = _mod14139.ucs2;
    if (obj.pointer <= obj.input.length) {
      while (true) {
        let tmp4 = obj.input[obj.pointer];
        let _isNaN = isNaN;
        let fromCodePointResult;
        if (!isNaN(tmp4)) {
          let _String = String;
          fromCodePointResult = String.fromCodePoint(tmp4);
        }
        let tmp6 = obj["parse " + obj.state](tmp4, fromCodePointResult);
        if (!tmp6) {
          break;
        } else {
          if (tmp6 === closure_4) {
            let flag3 = true;
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
  }
  "parse scheme start"(input, str) {
    const self = this;
    const obj = _mod14140;
    if (obj.isASCIIAlpha(input)) {
      self.buffer = self.buffer + str.toLowerCase();
      self.state = "scheme";
    } else if (self.stateOverride) {
      self.parseError = true;
      return closure_4;
    } else {
      self.state = "no scheme";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  "parse scheme"(arg0, str) {
    const self = this;
    const obj = _mod14140;
    if (!obj.isASCIIAlphanumeric(arg0)) {
      if (43 !== arg0) {
        if (45 !== arg0) {
          if (46 !== arg0) {
            if (58 === arg0) {
              if (self.stateOverride) {
                if (undefined !== closure_3[self.url.scheme]) {
                  if (undefined === closure_3[self.buffer]) {
                    return false;
                  }
                }
                if (undefined === closure_3[self.url.scheme]) {
                  if (undefined !== closure_3[self.buffer]) {
                    return false;
                  }
                }
                const url = self.url;
                const tmp3 = "" !== url.username || "" !== url.password;
                if (tmp3) {
                  if ("file" === self.buffer) {
                    return false;
                  }
                }
                if ("file" === self.url.scheme) {
                  return false;
                }
              }
              self.url.scheme = self.buffer;
              if (self.stateOverride) {
                if (self.url.port === closure_3[self.url.scheme]) {
                  self.url.port = null;
                }
                return false;
              } else {
                self.buffer = "";
                if ("file" === self.url.scheme) {
                  const tmp7 = 47 === self.input[self.pointer + 1] && 47 === self.input[self.pointer + 2];
                  if (!tmp7) {
                    self.parseError = true;
                  }
                  self.state = "file";
                } else {
                  if (undefined !== closure_3[self.url.scheme]) {
                    if (null !== self.base) {
                      if (self.base.scheme === self.url.scheme) {
                        self.state = "special relative or authority";
                      }
                    }
                  }
                  if (undefined !== closure_3[self.url.scheme]) {
                    self.state = "special authority slashes";
                  } else if (47 === self.input[self.pointer + 1]) {
                    self.state = "path or authority";
                    self.pointer = self.pointer + 1;
                  } else {
                    self.url.cannotBeABaseURL = true;
                    const path = self.url.path;
                    path.push("");
                    self.state = "cannot-be-a-base-URL path";
                  }
                }
              }
            } else if (self.stateOverride) {
              self.parseError = true;
              return closure_4;
            } else {
              self.buffer = "";
              self.state = "no scheme";
              self.pointer = -1;
            }
          }
          return true;
        }
      }
    }
    self.buffer = self.buffer + str.toLowerCase();
  }
  "parse no scheme"(arg0) {
    let flag;
    const self = this;
    if (null !== this.base) {
      if (self.base.cannotBeABaseURL) {
        return flag;
      }
      if (self.base.cannotBeABaseURL) {
        if (35 === arg0) {
          self.url.scheme = self.base.scheme;
          const path = self.base.path;
          self.url.path = path.slice();
          self.url.query = self.base.query;
          self.url.fragment = "";
          self.url.cannotBeABaseURL = true;
          self.state = "fragment";
          flag = true;
        }
      }
      if ("file" === self.base.scheme) {
        self.state = "file";
        self.pointer = self.pointer - 1;
        flag = true;
      } else {
        self.state = "relative";
        self.pointer = self.pointer - 1;
        flag = true;
      }
    }
    flag = closure_4;
  }
  "parse special relative or authority"(arg0) {
    const self = this;
    if (47 === arg0) {
      if (47 === self.input[self.pointer + 1]) {
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      return true;
    }
    self.parseError = true;
    self.state = "relative";
    self.pointer = self.pointer - 1;
  }
  "parse path or authority"(arg0) {
    const self = this;
    if (47 === arg0) {
      self.state = "authority";
    } else {
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  "parse relative"(arg0) {
    const self = this;
    this.url.scheme = this.base.scheme;
    if (isNaN(arg0)) {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      const path = self.base.path;
      self.url.path = path.slice();
      self.url.query = self.base.query;
    } else if (47 === arg0) {
      self.state = "relative slash";
    } else if (63 === arg0) {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      const path1 = self.base.path;
      self.url.path = path1.slice();
      self.url.query = "";
      self.state = "query";
    } else if (35 === arg0) {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      const path2 = self.base.path;
      self.url.path = path2.slice();
      self.url.query = self.base.query;
      self.url.fragment = "";
      self.state = "fragment";
    } else {
      if (undefined !== closure_3[self.url.scheme]) {
        if (92 === arg0) {
          self.parseError = true;
          self.state = "relative slash";
        }
      }
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      const path3 = self.base.path;
      self.url.path = path3.slice(0, self.base.path.length - 1);
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  "parse relative slash"(arg0) {
    const self = this;
    if (undefined !== closure_3[this.url.scheme]) {
      if (47 !== arg0) {
        return true;
      }
      if (92 === arg0) {
        self.parseError = true;
      }
      self.state = "special authority ignore slashes";
    }
    if (47 === arg0) {
      self.state = "authority";
    } else {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
  }
  "parse special authority slashes"(arg0) {
    const self = this;
    if (47 === arg0) {
      if (47 === self.input[self.pointer + 1]) {
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      return true;
    }
    self.parseError = true;
    self.state = "special authority ignore slashes";
    self.pointer = self.pointer - 1;
  }
  "parse special authority ignore slashes"(arg0) {
    const self = this;
    if (47 !== arg0) {
      if (92 !== arg0) {
        self.state = "authority";
        self.pointer = self.pointer - 1;
      }
      return true;
    }
    self.parseError = true;
  }
  "parse authority"(arg0, arg1) {
    let buffer;
    let length2;
    let pointer;
    const self = this;
    if (64 === arg0) {
      self.parseError = true;
      if (self.atFlag) {
        self.buffer = `%40${self.buffer}`;
      }
      self.atFlag = true;
      const buffer2 = self.buffer;
      const ucs22 = _mod14139.ucs2;
      const length = ucs22.decode(buffer2).length;
      let num11 = 0;
      if (0 < length) {
        while (true) {
          let buffer3 = self.buffer;
          let codePointAtResult = buffer3.codePointAt(num11);
          if (58 === codePointAtResult) {
            if (!self.passwordTokenSeenFlag) {
              self.passwordTokenSeenFlag = true;
            }
            num11 = num11 + 1;
            if (num11 >= length) {
              break;
            }
          }
          let _String = String;
          let fromCodePointResult = String.fromCodePoint(codePointAtResult);
          let hasItem =
            codePointAtResult <= 31 ||
            codePointAtResult > 126 ||
            set1.has(codePointAtResult) ||
            set2.has(codePointAtResult) ||
            set.has(codePointAtResult);
          let tmp16 = fromCodePointResult;
          if (hasItem) {
            let _Buffer = Buffer.Buffer;
            let fromResult = _Buffer.from(fromCodePointResult);
            let num12 = 0;
            let str6 = "";
            let str7 = "";
            if (0 < fromResult.length) {
              do {
                let obj = _mod14141;
                str6 = `${obj.percentEncode(arr[num12])}`;
                num12 = num12 + 1;
                str7 = str6;
                length2 = fromResult.length;
              } while (num12 < length2);
            }
            tmp16 = str7;
          }
          let url = self.url;
          if (self.passwordTokenSeenFlag) {
            url.password = url.password + tmp16;
          } else {
            url.username = url.username + tmp16;
          }
        }
      }
      self.buffer = "";
    } else {
      const _isNaN = isNaN;
      if (!isNaN(arg0)) {
        if (47 !== arg0) {
          if (63 !== arg0) {
            if (35 !== arg0) {
              self.buffer = self.buffer + arg1;
            }
          }
        }
      }
      if (self.atFlag) {
        if ("" === self.buffer) {
          self.parseError = true;
          return closure_4;
        }
      }
      ({ pointer, buffer } = self);
      const ucs2 = _mod14139.ucs2;
      self.pointer = pointer - (ucs2.decode(buffer).length + 1);
      self.buffer = "";
      self.state = "host";
    }
    return true;
  }
  "parse port"(decodeResult, arg1) {
    const self = this;
    const obj = _mod14140;
    if (obj.isASCIIDigit(decodeResult)) {
      self.buffer = self.buffer + arg1;
    } else {
      const _isNaN = isNaN;
      if (!isNaN(decodeResult)) {
        if (47 !== decodeResult) {
          if (63 !== decodeResult) {
            if (35 !== decodeResult) {
              if (undefined === closure_3[self.url.scheme]) {
                if (!self.stateOverride) {
                  self.parseError = true;
                  return closure_4;
                }
              }
            }
          }
        }
      }
      if ("" !== self.buffer) {
        const _parseInt = parseInt;
        const parsed = parseInt(self.buffer);
        const _Math = Math;
        if (parsed > Math.pow(2, 16) - 1) {
          self.parseError = true;
          return closure_4;
        } else {
          let tmp6 = null;
          const url = self.url;
          if (parsed !== closure_3[self.url.scheme]) {
            tmp6 = parsed;
          }
          url.port = tmp6;
          self.buffer = "";
        }
      }
      if (self.stateOverride) {
        return false;
      } else {
        self.state = "path start";
        self.pointer = self.pointer - 1;
      }
    }
    return true;
  }
  "parse file"(arg0) {
    let input;
    let pointer;
    const self = this;
    this.url.scheme = "file";
    if (47 !== arg0) {
      if (92 !== arg0) {
        if (null !== self.base) {
          if ("file" === self.base.scheme) {
            const _isNaN = isNaN;
            if (isNaN(arg0)) {
              self.url.host = self.base.host;
              const path = self.base.path;
              self.url.path = path.slice();
              self.url.query = self.base.query;
            } else if (63 === arg0) {
              self.url.host = self.base.host;
              const path1 = self.base.path;
              self.url.path = path1.slice();
              self.url.query = "";
              self.state = "query";
            } else if (35 === arg0) {
              self.url.host = self.base.host;
              const path2 = self.base.path;
              self.url.path = path2.slice();
              self.url.query = self.base.query;
              self.url.fragment = "";
              self.state = "fragment";
            } else {
              ({ input, pointer } = self);
              const diff = input.length - pointer;
              let tmp8 = diff >= 2;
              if (tmp8) {
                const tmp2 = input[pointer];
                const obj = _mod14140;
                let isASCIIAlphaResult = obj.isASCIIAlpha(tmp2);
                if (isASCIIAlphaResult) {
                  isASCIIAlphaResult = 58 === tmp3 || 124 === tmp3;
                  const tmp7 = 58 === tmp3 || 124 === tmp3;
                }
                tmp8 = isASCIIAlphaResult;
              }
              if (tmp8) {
                const hasItem = 2 === diff || set3.has(input[pointer + 2]);
                tmp8 = hasItem;
              }
              if (tmp8) {
                self.parseError = true;
              } else {
                self.url.host = self.base.host;
                const path3 = self.base.path;
                self.url.path = path3.slice();
                const url = self.url;
                const path4 = url.path;
                if (0 !== path4.length) {
                  let isMatch = "file" === url.scheme && 1 === path4.length;
                  if (isMatch) {
                    const obj2 = /^[A-Za-z]:$/;
                    isMatch = obj2.test(path4[0]);
                  }
                  if (!isMatch) {
                    path4.pop();
                  }
                }
              }
              self.state = "path";
              self.pointer = self.pointer - 1;
            }
          }
        }
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      return true;
    }
    if (92 === arg0) {
      self.parseError = true;
    }
    self.state = "file slash";
  }
  "parse file slash"(arg0) {
    let input;
    let pointer;
    const self = this;
    if (47 !== arg0) {
      if (92 !== arg0) {
        let tmp = null === self.base || "file" !== self.base.scheme;
        if (!tmp) {
          ({ input, pointer } = self);
          const diff = input.length - pointer;
          let tmp3 = diff >= 2;
          if (tmp3) {
            const tmp4 = input[pointer];
            const obj = _mod14140;
            let isASCIIAlphaResult = obj.isASCIIAlpha(tmp4);
            if (isASCIIAlphaResult) {
              isASCIIAlphaResult = 58 === tmp5 || 124 === tmp5;
              const tmp9 = 58 === tmp5 || 124 === tmp5;
            }
            tmp3 = isASCIIAlphaResult;
          }
          if (tmp3) {
            const hasItem = 2 === diff || set3.has(input[pointer + 2]);
            tmp3 = hasItem;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          const first = self.base.path[0];
          let isASCIIAlphaResult1 = 2 === first.length;
          if (isASCIIAlphaResult1) {
            const obj2 = _mod14140;
            isASCIIAlphaResult1 = obj2.isASCIIAlpha(first.codePointAt(0));
          }
          if (isASCIIAlphaResult1) {
            isASCIIAlphaResult1 = ":" === first[1];
          }
          const url = self.url;
          if (isASCIIAlphaResult1) {
            const path = url.path;
            path.push(self.base.path[0]);
          } else {
            url.host = self.base.host;
          }
        }
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      return true;
    }
    if (92 === arg0) {
      self.parseError = true;
    }
    self.state = "file host";
  }
  "parse file host"(arg0, arg1) {
    const self = this;
    if (!isNaN(arg0)) {
      if (47 !== arg0) {
        if (92 !== arg0) {
          if (63 !== arg0) {
            if (35 !== arg0) {
              self.buffer = self.buffer + arg1;
            }
            return true;
          }
        }
      }
    }
    self.pointer = self.pointer - 1;
    if (!self.stateOverride) {
      const buffer = self.buffer;
      let isASCIIAlphaResult = 2 === buffer.length;
      if (isASCIIAlphaResult) {
        const obj = _mod14140;
        isASCIIAlphaResult = obj.isASCIIAlpha(buffer.codePointAt(0));
      }
      if (isASCIIAlphaResult) {
        isASCIIAlphaResult = ":" === buffer[1] || "|" === buffer[1];
        const tmp5 = ":" === buffer[1] || "|" === buffer[1];
      }
      if (isASCIIAlphaResult) {
        self.parseError = true;
        self.state = "path";
      }
    }
    if ("" === self.buffer) {
      self.url.host = "";
      if (self.stateOverride) {
        return false;
      } else {
        self.state = "path start";
      }
    } else {
      let str4 = parseHost(self.buffer, undefined === closure_3[self.url.scheme]);
      if (str4 === closure_4) {
        return closure_4;
      } else {
        if ("localhost" === str4) {
          str4 = "";
        }
        self.url.host = str4;
        if (self.stateOverride) {
          return false;
        } else {
          self.buffer = "";
          self.state = "path start";
        }
      }
    }
  }
  "parse path start"(arg0) {
    const self = this;
    if (undefined !== closure_3[this.url.scheme]) {
      if (92 === arg0) {
        self.parseError = true;
      }
      self.state = "path";
      const tmp = 47 !== arg0 && 92 !== arg0;
      if (tmp) {
        self.pointer = self.pointer - 1;
      }
    } else {
      if (!self.stateOverride) {
        if (63 === arg0) {
          self.url.query = "";
          self.state = "query";
        }
      }
      if (!self.stateOverride) {
        if (35 === arg0) {
          self.url.fragment = "";
          self.state = "fragment";
        }
      }
      if (undefined !== arg0) {
        self.state = "path";
        if (47 !== arg0) {
          self.pointer = self.pointer - 1;
        }
      }
    }
    return true;
  }
  "parse path"(codePointAtResult) {
    let length;
    const self = this;
    if (!isNaN(codePointAtResult)) {
      if (47 !== codePointAtResult) {
        if (undefined === closure_3[self.url.scheme]) {
          if (!self.stateOverride) {
            if (63 !== codePointAtResult) {
              return true;
            }
          }
          let tmp = 37 !== codePointAtResult;
          if (!tmp) {
            const obj = _mod14140;
            let isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
            if (isASCIIHexResult) {
              const tmp2Result = _mod14140;
              isASCIIHexResult = tmp2Result.isASCIIHex(self.input[self.pointer + 2]);
            }
            tmp = isASCIIHexResult;
          }
          if (!tmp) {
            self.parseError = true;
          }
          const _String = String;
          const buffer = self.buffer;
          const fromCodePointResult = String.fromCodePoint(codePointAtResult);
          const hasItem =
            codePointAtResult <= 31 ||
            codePointAtResult > 126 ||
            set1.has(codePointAtResult) ||
            set2.has(codePointAtResult);
          let tmp9 = fromCodePointResult;
          if (hasItem) {
            const _Buffer = Buffer.Buffer;
            const fromResult = _Buffer.from(fromCodePointResult);
            let num9 = 0;
            let str = "";
            let str2 = "";
            if (0 < fromResult.length) {
              do {
                let obj3 = _mod14141;
                str = `${obj3.percentEncode(arr[num9])}`;
                num9 = num9 + 1;
                str2 = str;
                length = fromResult.length;
              } while (num9 < length);
            }
            tmp9 = str2;
          }
          self.buffer = buffer + tmp9;
        }
      }
    }
    const tmp15 = undefined !== closure_3[self.url.scheme] && 92 === codePointAtResult;
    if (tmp15) {
      self.parseError = true;
    }
    const str3 = self.buffer;
    const formatted = str3.toLowerCase();
    const tmp17 = ".." === formatted || "%2e." === formatted || ".%2e" === formatted || "%2e%2e" === formatted;
    if (tmp17) {
      const url = self.url;
      const path = url.path;
      if (0 !== path.length) {
        let isMatch = "file" === url.scheme && 1 === path.length;
        if (isMatch) {
          const obj5 = /^[A-Za-z]:$/;
          isMatch = obj5.test(path[0]);
        }
        if (!isMatch) {
          path.pop();
        }
      }
      let tmp31 = 47 === codePointAtResult;
      if (!tmp31) {
        tmp31 = undefined !== closure_3[self.url.scheme] && 92 === codePointAtResult;
        const tmp32 = undefined !== closure_3[self.url.scheme] && 92 === codePointAtResult;
      }
      if (!tmp31) {
        const path1 = self.url.path;
        path1.push("");
      }
    } else {
      const tmp18 = "." === str7 || "%2e" === str7.toLowerCase();
      if (tmp18) {
        if (47 !== codePointAtResult) {
          const path2 = self.url.path;
          path2.push("");
        }
      }
      const tmp20 = "." === str11 || "%2e" === str11.toLowerCase();
      if (!tmp20) {
        let tmp21 = "file" === self.url.scheme && 0 === self.url.path.length;
        if (tmp21) {
          const buffer1 = self.buffer;
          let isASCIIAlphaResult = 2 === buffer1.length;
          if (isASCIIAlphaResult) {
            const obj4 = _mod14140;
            isASCIIAlphaResult = obj4.isASCIIAlpha(buffer1.codePointAt(0));
          }
          if (isASCIIAlphaResult) {
            isASCIIAlphaResult = ":" === buffer1[1] || "|" === buffer1[1];
            const tmp25 = ":" === buffer1[1] || "|" === buffer1[1];
          }
          tmp21 = isASCIIAlphaResult;
        }
        if (tmp21) {
          const tmp26 = "" !== self.url.host && null !== self.url.host;
          if (tmp26) {
            self.parseError = true;
            self.url.host = "";
          }
          self.buffer = `${self.buffer[0]}:`;
        }
        const path3 = self.url.path;
        path3.push(self.buffer);
      }
    }
    self.buffer = "";
    if ("file" === self.url.scheme) {
      if (self.url.path.length > 1) {
        if ("" === self.url.path[0]) {
          self.parseError = true;
          const path4 = self.url.path;
          path4.shift();
          while (self.url.path.length > 1) {
            if ("" !== self.url.path[0]) {
              break;
            }
          }
        }
      }
    }
    if (63 === codePointAtResult) {
      self.url.query = "";
      self.state = "query";
    }
    if (35 === codePointAtResult) {
      self.url.fragment = "";
      self.state = "fragment";
    }
  }
  "parse cannot-be-a-base-URL path"(codePointAtResult) {
    let length;
    const self = this;
    if (63 === codePointAtResult) {
      self.url.query = "";
      self.state = "query";
    } else if (35 === codePointAtResult) {
      self.url.fragment = "";
      self.state = "fragment";
    } else {
      const _isNaN2 = isNaN;
      const isNaNResult = isNaN(codePointAtResult) || 37 === codePointAtResult;
      if (!isNaNResult) {
        self.parseError = true;
      }
      let tmp2 = 37 !== codePointAtResult;
      if (!tmp2) {
        const obj = _mod14140;
        let isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
        if (isASCIIHexResult) {
          const tmp3Result = _mod14140;
          isASCIIHexResult = tmp3Result.isASCIIHex(self.input[self.pointer + 2]);
        }
        tmp2 = isASCIIHexResult;
      }
      if (!tmp2) {
        self.parseError = true;
      }
      const _isNaN = isNaN;
      if (!isNaN(codePointAtResult)) {
        const path = self.url.path;
        const _String = String;
        const first = path[0];
        const fromCodePointResult = String.fromCodePoint(codePointAtResult);
        let tmp9 = fromCodePointResult;
        const tmp8 = codePointAtResult <= 31 || codePointAtResult > 126;
        if (tmp8) {
          const _Buffer = Buffer.Buffer;
          const fromResult = _Buffer.from(fromCodePointResult);
          let num7 = 0;
          let str = "";
          let str2 = "";
          if (0 < fromResult.length) {
            do {
              let obj3 = _mod14141;
              str = `${obj3.percentEncode(arr[num7])}`;
              num7 = num7 + 1;
              str2 = str;
              length = fromResult.length;
            } while (num7 < length);
          }
          tmp9 = str2;
        }
        path[0] = first + tmp9;
      }
    }
    return true;
  }
  "parse query"(arg0, arg1) {
    const self = this;
    if (!isNaN(arg0)) {
      if (!self.stateOverride) {
        return true;
      }
      let tmp = 37 !== arg0;
      if (!tmp) {
        const obj = _mod14140;
        let isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
        if (isASCIIHexResult) {
          const tmp2Result = _mod14140;
          isASCIIHexResult = tmp2Result.isASCIIHex(self.input[self.pointer + 2]);
        }
        tmp = isASCIIHexResult;
      }
      if (!tmp) {
        self.parseError = true;
      }
      self.buffer = self.buffer + arg1;
    }
    const tmp6 = undefined !== closure_3[self.url.scheme] && "ws" !== self.url.scheme && "wss" !== self.url.scheme;
    if (!tmp6) {
      self.encodingOverride = "utf-8";
    }
    const _Buffer = Buffer.Buffer;
    const fromResult = _Buffer.from(self.buffer);
    let num5 = 0;
    if (0 < fromResult.length) {
      while (true) {
        if (fromResult[num5] >= 33) {
          if (fromResult[num5] <= 126) {
            if (34 !== fromResult[num5]) {
              if (35 !== fromResult[num5]) {
                if (60 !== fromResult[num5]) {
                  if (62 !== fromResult[num5]) {
                    if (39 !== fromResult[num5]) {
                      let url = self.url;
                      let _String = String;
                      url.query = url.query + String.fromCodePoint(fromResult[num5]);
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
        let url2 = self.url;
        let query = url2.query;
        let obj3 = _mod14141;
        url2.query = query + obj3.percentEncode(fromResult[num5]);
      }
    }
    self.buffer = "";
    if (35 === arg0) {
      self.url.fragment = "";
      self.state = "fragment";
    }
  }
  "parse fragment"(codePointAtResult) {
    let length;
    if (!isNaN(codePointAtResult)) {
      const self = this;
      if (0 === codePointAtResult) {
        self.parseError = true;
      } else {
        let tmp4 = 37 !== codePointAtResult;
        if (!tmp4) {
          const obj = _mod14140;
          let isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
          if (isASCIIHexResult) {
            const tmpResult = _mod14140;
            isASCIIHexResult = tmpResult.isASCIIHex(self.input[self.pointer + 2]);
          }
          tmp4 = isASCIIHexResult;
        }
        if (!tmp4) {
          self.parseError = true;
        }
        const url = self.url;
        const _String = String;
        const fragment = url.fragment;
        const fromCodePointResult = String.fromCodePoint(codePointAtResult);
        const hasItem = codePointAtResult <= 31 || codePointAtResult > 126 || set1.has(codePointAtResult);
        let tmp8 = fromCodePointResult;
        if (hasItem) {
          const _Buffer = Buffer.Buffer;
          const fromResult = _Buffer.from(fromCodePointResult);
          let str = "";
          let num7 = 0;
          let str2 = "";
          if (0 < fromResult.length) {
            do {
              let obj3 = _mod14141;
              str = `${obj3.percentEncode(arr[num7])}`;
              num7 = num7 + 1;
              str2 = str;
              length = fromResult.length;
            } while (num7 < length);
          }
          tmp8 = str2;
        }
        url.fragment = fragment + tmp8;
      }
    }
    return true;
  }
}
const _false = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 };
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
        const tmp3 = parseHost(self.buffer, undefined === closure_3[self.url.scheme]);
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
  if (undefined !== closure_3[self.url.scheme]) {
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
  const tmp10 = parseHost(self.buffer, undefined === closure_3[self.url.scheme]);
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
module.exports.serializeURL = function serializeURL(_url, arg1) {
  let text = `${_url.scheme}:`;
  if (null !== _url.host) {
    let text1 = `${_url.scheme}://`;
    const tmp6 = "" === _url.username && "" === _url.password;
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
  } else {
    const tmp2 = null === _url.host && "file" === _url.scheme;
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
  const tmp22 = arg1 || null === _url.fragment;
  if (!tmp22) {
    text = `${tmp}#${_url.fragment}`;
  }
  return text;
};
module.exports.serializeURLOrigin = (scheme) => {
  let _exports;
  let _exports2;
  function serializeOrigin(url) {
    const text = `${url.scheme}://${closure_1_10(url.host)}`;
    let text1 = text;
    if (null !== url.port) {
      text1 = `${url.scheme}://${closure_1_10(url.host)}${":" + url.port}`;
    }
    return text1;
  }
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
    const url = { scheme: null, host: null, port: null };
    ({ scheme: obj.scheme, host: obj.host, port: obj.port } = scheme);
    return serializeOrigin(url);
  }
};
module.exports.basicURLParse = (input, arg1) => {
  let baseURL;
  let encodingOverride;
  let stateOverride;
  let url;
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  ({ baseURL, encodingOverride, url, stateOverride } = obj);
  const obj2 = Object.create(URLStateMachine.prototype);
  new URLStateMachine(input, baseURL, encodingOverride, url, stateOverride);
  let url1 = null;
  if (!obj2.failure) {
    url1 = obj2.url;
  }
  return url1;
};
module.exports.setTheUsername = (username, arg1) => {
  let length;
  let num;
  username.username = "";
  const ucs2 = _mod14139.ucs2;
  const decodeResult = ucs2.decode(arg1);
  for (let num = 0; num < decodeResult.length; num = num + 1) {
    let tmp = decodeResult[num];
    let _String = String;
    username = username.username;
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
          let obj = _mod14141;
          str = `${obj.percentEncode(arr2[num2])}`;
          num2 = num2 + 1;
          str2 = str;
          length = fromResult.length;
        } while (num2 < length);
      }
      tmp8 = str2;
    }
    username.username = username + tmp8;
  }
};
module.exports.setThePassword = (password, arg1) => {
  let length;
  let num;
  password.password = "";
  const ucs2 = _mod14139.ucs2;
  const decodeResult = ucs2.decode(arg1);
  for (let num = 0; num < decodeResult.length; num = num + 1) {
    let tmp = decodeResult[num];
    let _String = String;
    password = password.password;
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
          let obj = _mod14141;
          str = `${obj.percentEncode(arr2[num2])}`;
          num2 = num2 + 1;
          str2 = str;
          length = fromResult.length;
        } while (num2 < length);
      }
      tmp8 = str2;
    }
    password.password = password + tmp8;
  }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = function cannotHaveAUsernamePasswordPort(_url) {
  const cannotBeABaseURL = null === _url.host || "" === _url.host || _url.cannotBeABaseURL || "file" === _url.scheme;
  return cannotBeABaseURL;
};
module.exports.serializeInteger = (arg0) => String(arg0);
module.exports.parseURL = (arg0, arg1) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const _exports = module.exports;
  const obj2 = { baseURL: obj.baseURL, encodingOverride: obj.encodingOverride };
  return _exports.basicURLParse(arg0, obj2);
};
