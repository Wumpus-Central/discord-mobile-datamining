// === Module 8664: default_1 ===

// Module 8664 (default_1)
import captureStackTrace2 from "captureStackTrace" /* 8642 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    closure_0 = __esModule;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const captureStackTrace = tmp5(captureStackTrace2);
function error() {

}

export default function default_1() {
  let typeLabel;
  if (typeof typeLabel === "function") {
    let obj2 = { string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" }, number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" }, boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" }, bigint: { label: "BigInt", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" }, array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" }, object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" }, null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" }, undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" }, symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" }, function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" }, map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" }, set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" }, file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" }, promise: { label: "Promise", gender: "m" }, NaN: { label: "NaN", gender: "m" }, unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" }, value: { label: "\u05E2\u05E8\u05DA", gender: "m" } };
    const obj3 = { string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" }, file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" } };
    function typeEntry(arg0) {

    }
    typeLabel = function typeLabel(arg0) {

    };
    function withDefinite(arg0) {

    }
    function verbFor(arg0) {

    }
    function getSizing(arg0) {

    }
    const obj4 = { regex: { label: "\u05E7\u05DC\u05D8", gender: "m" }, email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" }, url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" }, emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" }, uuid: { label: "UUID", gender: "m" }, nanoid: { label: "nanoid", gender: "m" }, guid: { label: "GUID", gender: "m" }, cuid: { label: "cuid", gender: "m" }, cuid2: { label: "cuid2", gender: "m" }, ulid: { label: "ULID", gender: "m" }, xid: { label: "XID", gender: "m" }, ksuid: { label: "KSUID", gender: "m" }, datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" }, time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" }, duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" }, ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" }, ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" }, cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" }, cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" }, base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" }, base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" }, json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" }, e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" }, jwt: { label: "JWT", gender: "m" }, ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, includes: { label: "\u05E7\u05DC\u05D8", gender: "m" }, lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }, starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" } };
    let closure_8 = { nan: "NaN" };
    return {
      localeError: (code) => {
          switch (code.code) {
            case "invalid_type":
            {
              let combined;
              let label = code.expected;
              let str135 = label;
              if (label == null) {
                str135 = "";
              }
              let tmp111 = closure_8[str135];
              if (tmp111 == null) {
                if (typeof typeLabel === "function") {
                  if (typeof typeEntry === "function") {
                    let tmp114;
                    if (label) {
                      tmp114 = obj2[label];
                    }
                    if (tmp114) {
                      label = tmp114.label;
                    } else if (label == null) {
                      label = obj2.unknown.label;
                    }
                    tmp111 = label;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const parsedTypeResult = captureStackTrace.parsedType(code.input);
              let tmp119 = closure_8[parsedTypeResult];
              if (tmp119 == null) {
                let label1;
                if (obj2[parsedTypeResult] != null) {
                  label1 = tmp121.label;
                }
                tmp119 = label1;
              }
              if (tmp119 == null) {
                tmp119 = parsedTypeResult;
              }
              obj2 = /^[A-Z]/;
              if (obj2.test(code.expected)) {
                const _HermesInternal33 = HermesInternal;
                combined = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof " + code.expected + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + tmp119;
              } else {
                const _HermesInternal32 = HermesInternal;
                combined = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + tmp111 + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + tmp119;
              }
              return combined;
            }
            case "invalid_value":
            {
              if (1 === code.values.length) {
                const _HermesInternal31 = HermesInternal;
                return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA " + captureStackTrace.stringifyPrimitive(code.values[0]);
              } else {
                const values = code.values;
                const mapped = values.map((item) => typeEntry.stringifyPrimitive(item));
                if (2 === code.values.length) {
                  const _HermesInternal30 = HermesInternal;
                  return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + mapped[0] + " \u05D0\u05D5 " + mapped[1];
                } else {
                  const tmp104 = mapped[mapped.length - 1];
                  const substr = mapped.slice(0, -1);
                  const _HermesInternal29 = HermesInternal;
                  return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + substr.join(", ") + " \u05D0\u05D5 " + tmp104;
                }
              }
              break;
            }
            case "too_big":
            {
              const origin3 = code.origin;
              if (typeof getSizing === "function") {
                let tmp67 = null;
                if (origin3) {
                  tmp67 = obj3[origin3] ?? null;
                  const tmp69 = obj3[origin3] ?? null;
                }
                let str79 = code.origin ?? "value";
                if (typeof withDefinite === "function") {
                  if (typeof typeLabel === "function") {
                    if (typeof typeEntry === "function") {
                      let tmp73;
                      if (str79) {
                        tmp73 = obj2[str79];
                      }
                      if (tmp73) {
                        str79 = tmp73.label;
                      } else if (str79 == null) {
                        str79 = obj2.unknown.label;
                      }
                      const _HermesInternal20 = HermesInternal;
                      const combined1 = "\u05D4" + str79;
                      if ("string" === code.origin) {
                        let str118;
                        if (tmp67 != null) {
                          str118 = tmp67.longLabel;
                        }
                        if (str118 == null) {
                          str118 = "\u05D0\u05E8\u05D5\u05DA";
                        }
                        const str119 = code.maximum;
                        let str120;
                        const str1 = str119.toString();
                        if (tmp67 != null) {
                          str120 = tmp67.unit;
                        }
                        if (str120 == null) {
                          str120 = "";
                        }
                        let str121 = "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8";
                        if (code.inclusive) {
                          str121 = "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                        }
                        const _HermesInternal28 = HermesInternal;
                        const str128 = "" + str118 + " \u05DE\u05D3\u05D9: " + combined1 + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str1 + " " + str120 + " " + str121;
                        return str128.trim();
                      } else if ("number" === code.origin) {
                        let concat2Result;
                        const maximum2 = code.maximum;
                        const _HermesInternal26 = HermesInternal;
                        const concat2 = HermesInternal.concat;
                        if (code.inclusive) {
                          concat2Result = concat2(maximum2);
                        } else {
                          concat2Result = concat2(maximum2);
                        }
                        const _HermesInternal27 = HermesInternal;
                        return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + combined1 + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + concat2Result;
                      } else {
                        let combined3;
                        if ("array" !== code.origin) {
                          if ("set" !== code.origin) {
                            let str82 = "<";
                            if (code.inclusive) {
                              str82 = "<=";
                            }
                            if (typeof verbFor === "function") {
                              if (typeof tmp72 === "function") {
                                let combined2;
                                let tmp79;
                                if (code.origin ?? "value") {
                                  tmp79 = obj2[str83];
                                }
                                let str84;
                                if (tmp79 != null) {
                                  str84 = tmp79.gender;
                                }
                                if (str84 == null) {
                                  str84 = "m";
                                }
                                let str85 = "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
                                if ("f" === str84) {
                                  str85 = "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA";
                                }
                                let unit;
                                if (tmp67 != null) {
                                  unit = tmp67.unit;
                                }
                                if (unit) {
                                  const _HermesInternal22 = HermesInternal;
                                  const str94 = code.maximum;
                                  combined2 = "" + tmp67.longLabel + " \u05DE\u05D3\u05D9: " + combined1 + " " + str85 + " " + str82 + str94.toString() + " " + tmp67.unit;
                                } else {
                                  let str87;
                                  if (tmp67 != null) {
                                    str87 = tmp67.longLabel;
                                  }
                                  if (str87 == null) {
                                    str87 = "\u05D2\u05D3\u05D5\u05DC";
                                  }
                                  const _HermesInternal21 = HermesInternal;
                                  const str88 = code.maximum;
                                  combined2 = "" + str87 + " \u05DE\u05D3\u05D9: " + combined1 + " " + str85 + " " + str82 + str88.toString();
                                }
                                return combined2;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        let str101 = "\u05E6\u05E8\u05D9\u05DA";
                        if ("set" === code.origin) {
                          str101 = "\u05E6\u05E8\u05D9\u05DB\u05D4";
                        }
                        const maximum = code.maximum;
                        if (code.inclusive) {
                          let str106;
                          if (tmp67 != null) {
                            str106 = tmp67.unit;
                          }
                          if (str106 == null) {
                            str106 = "";
                          }
                          const _HermesInternal24 = HermesInternal;
                          combined3 = "" + maximum + " " + str106 + " \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                        } else {
                          let str103;
                          if (tmp67 != null) {
                            str103 = tmp67.unit;
                          }
                          if (str103 == null) {
                            str103 = "";
                          }
                          const _HermesInternal23 = HermesInternal;
                          combined3 = "\u05E4\u05D7\u05D5\u05EA \u05DE-" + maximum + " " + str103;
                        }
                        const _HermesInternal25 = HermesInternal;
                        const str113 = "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + combined1 + " " + str101 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined3;
                        return str113.trim();
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              break;
            }
            case "too_small":
            {
              const origin = code.origin;
              if (typeof getSizing === "function") {
                let tmp25 = null;
                if (origin) {
                  tmp25 = obj3[origin] ?? null;
                  const tmp27 = obj3[origin] ?? null;
                }
                let str25 = code.origin ?? "value";
                if (typeof withDefinite === "function") {
                  if (typeof typeLabel === "function") {
                    if (typeof typeEntry === "function") {
                      let tmp31;
                      if (str25) {
                        tmp31 = obj2[str25];
                      }
                      if (tmp31) {
                        str25 = tmp31.label;
                      } else if (str25 == null) {
                        str25 = obj2.unknown.label;
                      }
                      const _HermesInternal10 = HermesInternal;
                      const combined4 = "\u05D4" + str25;
                      if ("string" === code.origin) {
                        let str68;
                        if (tmp25 != null) {
                          str68 = tmp25.shortLabel;
                        }
                        if (str68 == null) {
                          str68 = "\u05E7\u05E6\u05E8";
                        }
                        const str69 = code.minimum;
                        let str70;
                        const str167 = str69.toString();
                        if (tmp25 != null) {
                          str70 = tmp25.unit;
                        }
                        if (str70 == null) {
                          str70 = "";
                        }
                        let str71 = "\u05DC\u05E4\u05D7\u05D5\u05EA";
                        if (code.inclusive) {
                          str71 = "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8";
                        }
                        const _HermesInternal19 = HermesInternal;
                        const str78 = "" + str68 + " \u05DE\u05D3\u05D9: " + combined4 + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str167 + " " + str70 + " " + str71;
                        return str78.trim();
                      } else if ("number" === code.origin) {
                        let combined5;
                        const minimum2 = code.minimum;
                        const _HermesInternal17 = HermesInternal;
                        if (code.inclusive) {
                          combined5 = concat(minimum2);
                        } else {
                          combined5 = concat(minimum2);
                        }
                        const _HermesInternal18 = HermesInternal;
                        return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + combined5;
                      } else {
                        let combined8;
                        if ("array" !== code.origin) {
                          if ("set" !== code.origin) {
                            let str28 = ">";
                            if (code.inclusive) {
                              str28 = ">=";
                            }
                            if (typeof verbFor === "function") {
                              if (typeof tmp30 === "function") {
                                let combined6;
                                let tmp37;
                                if (code.origin ?? "value") {
                                  tmp37 = obj2[str29];
                                }
                                let str30;
                                if (tmp37 != null) {
                                  str30 = tmp37.gender;
                                }
                                if (str30 == null) {
                                  str30 = "m";
                                }
                                let str31 = "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
                                if ("f" === str30) {
                                  str31 = "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA";
                                }
                                let unit1;
                                if (tmp25 != null) {
                                  unit1 = tmp25.unit;
                                }
                                if (unit1) {
                                  const _HermesInternal12 = HermesInternal;
                                  const str40 = code.minimum;
                                  combined6 = "" + tmp25.shortLabel + " \u05DE\u05D3\u05D9: " + combined4 + " " + str31 + " " + str28 + str40.toString() + " " + tmp25.unit;
                                } else {
                                  let str33;
                                  if (tmp25 != null) {
                                    str33 = tmp25.shortLabel;
                                  }
                                  if (str33 == null) {
                                    str33 = "\u05E7\u05D8\u05DF";
                                  }
                                  const _HermesInternal11 = HermesInternal;
                                  const str34 = code.minimum;
                                  combined6 = "" + str33 + " \u05DE\u05D3\u05D9: " + combined4 + " " + str31 + " " + str28 + str34.toString();
                                }
                                return combined6;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        let str47 = "\u05E6\u05E8\u05D9\u05DA";
                        if ("set" === code.origin) {
                          str47 = "\u05E6\u05E8\u05D9\u05DB\u05D4";
                        }
                        if (1 === code.minimum) {
                          let combined7;
                          if (code.inclusive) {
                            const origin2 = code.origin;
                            const _HermesInternal16 = HermesInternal;
                            combined7 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " " + str47 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
                          }
                          return combined7;
                        }
                        const minimum = code.minimum;
                        if (code.inclusive) {
                          let str52;
                          if (tmp25 != null) {
                            str52 = tmp25.unit;
                          }
                          if (str52 == null) {
                            str52 = "";
                          }
                          const _HermesInternal14 = HermesInternal;
                          combined8 = "" + minimum + " " + str52 + " \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8";
                        } else {
                          let str49;
                          if (tmp25 != null) {
                            str49 = tmp25.unit;
                          }
                          if (str49 == null) {
                            str49 = "";
                          }
                          const _HermesInternal13 = HermesInternal;
                          combined8 = "\u05D9\u05D5\u05EA\u05E8 \u05DE-" + minimum + " " + str49;
                        }
                        const _HermesInternal15 = HermesInternal;
                        const str59 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " " + str47 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined8;
                        combined7 = str59.trim();
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              break;
            }
            case "invalid_format":
            {
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA " + code.pattern;
              } else {
                let label2;
                if (obj4[code.format] != null) {
                  label2 = tmp15.label;
                }
                if (label2 == null) {
                  label2 = code.format;
                }
                let str13;
                if (obj4[code.format] != null) {
                  str13 = tmp15.gender;
                }
                if (str13 == null) {
                  str13 = "m";
                }
                let str14 = "\u05EA\u05E7\u05D9\u05DF";
                if ("f" === str13) {
                  str14 = "\u05EA\u05E7\u05D9\u05E0\u05D4";
                }
                const _HermesInternal5 = HermesInternal;
                return "" + label2 + " \u05DC\u05D0 " + str14;
              }
              break;
            }
            case "not_multiple_of":
            {
              const _HermesInternal4 = HermesInternal;
              return "\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC " + code.divisor;
            }
            case "unrecognized_keys":
            {
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u05D5\u05EA";
              }
              let str6 = "\u05D4";
              if (code.keys.length > 1) {
                str6 = "\u05D9\u05DD";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u05DE\u05E4\u05EA\u05D7" + str5 + " \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4" + str6 + ": " + captureStackTrace.joinValues(code.keys, ", ");
            }
            case "invalid_key":
            {
              return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
            }
            case "invalid_union":
            {
              return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            }
            case "invalid_element":
            {
              let str = code.origin ?? "array";
              if (typeof withDefinite === "function") {
                if (typeof typeLabel === "function") {
                  if (typeof typeEntry === "function") {
                    let tmp5;
                    if (str) {
                      tmp5 = obj2[str];
                    }
                    if (tmp5) {
                      str = tmp5.label;
                    } else if (str == null) {
                      str = obj2.unknown.label;
                    }
                    const _HermesInternal = HermesInternal;
                    const _HermesInternal2 = HermesInternal;
                    return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1" + "\u05D4" + str;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              break;
            }
            default:
            {
              return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            }
          }
        }
    };
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};