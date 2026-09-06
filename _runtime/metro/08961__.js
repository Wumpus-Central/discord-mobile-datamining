// === Module 8961: ? ===

// Module 8961
import _mod8939 from "module_8939" /* 8939 */;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof typeLabel === "function") {
        let obj = { localeError: null };
        obj = { string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" }, number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" }, boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" }, bigint: { label: "BigInt", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" }, array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" }, object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" }, null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" }, undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" }, symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" }, function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" }, map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" }, set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" }, file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" }, promise: { label: "Promise", gender: "m" }, NaN: { label: "NaN", gender: "m" }, unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" }, value: { label: "\u05E2\u05E8\u05DA", gender: "m" } };
        obj = { string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" }, file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" } };
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
        const obj1 = { regex: { label: "\u05E7\u05DC\u05D8", gender: "m" }, email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" }, url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" }, emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" }, uuid: { label: "UUID", gender: "m" }, nanoid: { label: "nanoid", gender: "m" }, guid: { label: "GUID", gender: "m" }, cuid: { label: "cuid", gender: "m" }, cuid2: { label: "cuid2", gender: "m" }, ulid: { label: "ULID", gender: "m" }, xid: { label: "XID", gender: "m" }, ksuid: { label: "KSUID", gender: "m" }, datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" }, time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" }, duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" }, ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" }, ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" }, cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" }, cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" }, base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" }, base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" }, json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" }, e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" }, jwt: { label: "JWT", gender: "m" }, ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, includes: { label: "\u05E7\u05DC\u05D8", gender: "m" }, lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }, starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" } };
        dependencyMap = { nan: "NaN" };
        obj.localeError = (code) => {
          switch (code.code) {
            case "invalid_type":
              let label = code.expected;
              let str135 = label;
              if (label == null) {
                str135 = "";
              }
              if (dependencyMap[str135] != null) {
                const parsedTypeResult = typeEntry.parsedType(code.input);
                let tmp119 = dependencyMap[parsedTypeResult];
                if (tmp119 == null) {
                  label = undefined;
                  if (obj[parsedTypeResult] != null) {
                    label = tmp121.label;
                  }
                  tmp119 = label;
                }
                if (tmp119 == null) {
                  tmp119 = parsedTypeResult;
                }
                if (obj2.test(code.expected)) {
                  const _HermesInternal33 = HermesInternal;
                  let combined = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof " + code.expected + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + tmp119;
                } else {
                  const _HermesInternal32 = HermesInternal;
                  combined = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + tmp110 + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + tmp119;
                }
                return combined;
              } else if (typeof typeLabel === "function") {
                if (typeof typeEntry === "function") {
                  let tmp113;
                  if (label) {
                    tmp113 = obj[label];
                  }
                  if (tmp113) {
                    label = tmp113.label;
                  } else if (label == null) {
                    label = obj.unknown.label;
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            break;
            case "invalid_value":
              if (1 === code.values.length) {
                const _HermesInternal31 = HermesInternal;
                return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA " + typeEntry.stringifyPrimitive(code.values[0]);
              } else {
                const values = code.values;
                const mapped = values.map((item) => typeEntry.stringifyPrimitive(item));
                if (2 === code.values.length) {
                  const _HermesInternal30 = HermesInternal;
                  return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + mapped[0] + " \u05D0\u05D5 " + mapped[1];
                } else {
                  const substr = mapped.slice(0, -1);
                  const _HermesInternal29 = HermesInternal;
                  return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + substr.join(", ") + " \u05D0\u05D5 " + mapped[mapped.length - 1];
                }
              }
            break;
            case "too_big":
              const origin3 = code.origin;
              if (typeof getSizing === "function") {
                let tmp67 = null;
                if (origin3) {
                  let tmp69 = obj[origin3];
                  if (tmp69 == null) {
                    tmp69 = null;
                  }
                  tmp67 = tmp69;
                }
                let str79 = code.origin;
                if (str79 == null) {
                  str79 = "value";
                }
                if (typeof withDefinite === "function") {
                  if (typeof typeLabel === "function") {
                    if (typeof typeEntry === "function") {
                      let tmp73;
                      if (str79) {
                        tmp73 = obj[str79];
                      }
                      if (tmp73) {
                        str79 = tmp73.label;
                      } else if (str79 == null) {
                        str79 = obj.unknown.label;
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
                        let str = code.maximum.toString();
                        let str120;
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
                        return "" + str118 + " \u05DE\u05D3\u05D9: " + combined1 + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str + " " + str120 + " " + str121.trim();
                      } else if ("number" === code.origin) {
                        const maximum2 = code.maximum;
                        const _HermesInternal26 = HermesInternal;
                        if (code.inclusive) {
                          let concat2Result = concat2(maximum2);
                        } else {
                          concat2Result = concat2(maximum2);
                        }
                        const _HermesInternal27 = HermesInternal;
                        return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + combined1 + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + concat2Result;
                      } else {
                        if ("array" !== code.origin) {
                          if ("set" !== code.origin) {
                            let str82 = "<";
                            if (code.inclusive) {
                              str82 = "<=";
                            }
                            let str83 = code.origin;
                            if (str83 == null) {
                              str83 = "value";
                            }
                            if (typeof verbFor === "function") {
                              if (typeof tmp72 === "function") {
                                let tmp79;
                                if (str83) {
                                  tmp79 = obj[str83];
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
                                  let combined2 = "" + tmp67.longLabel + " \u05DE\u05D3\u05D9: " + combined1 + " " + str85 + " " + str82 + code.maximum.toString() + " " + tmp67.unit;
                                } else {
                                  let str87;
                                  if (tmp67 != null) {
                                    str87 = tmp67.longLabel;
                                  }
                                  if (str87 == null) {
                                    str87 = "\u05D2\u05D3\u05D5\u05DC";
                                  }
                                  const _HermesInternal21 = HermesInternal;
                                  combined2 = "" + str87 + " \u05DE\u05D3\u05D9: " + combined1 + " " + str85 + " " + str82 + code.maximum.toString();
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
                          if (!tmp90) {
                            str106 = tmp67.unit;
                          }
                          if (str106 == null) {
                            str106 = "";
                          }
                          const _HermesInternal24 = HermesInternal;
                          let combined3 = "" + maximum + " " + str106 + " \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                        } else {
                          let str103;
                          if (!tmp90) {
                            str103 = tmp67.unit;
                          }
                          if (str103 == null) {
                            str103 = "";
                          }
                          const _HermesInternal23 = HermesInternal;
                          combined3 = "\u05E4\u05D7\u05D5\u05EA \u05DE-" + maximum + " " + str103;
                        }
                        const _HermesInternal25 = HermesInternal;
                        return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + combined1 + " " + str101 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined3.trim();
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
            case "too_small":
              const origin = code.origin;
              if (typeof getSizing === "function") {
                let tmp25 = null;
                if (origin) {
                  let tmp27 = obj[origin];
                  if (tmp27 == null) {
                    tmp27 = null;
                  }
                  tmp25 = tmp27;
                }
                let str25 = code.origin;
                if (str25 == null) {
                  str25 = "value";
                }
                if (typeof withDefinite === "function") {
                  if (typeof typeLabel === "function") {
                    if (typeof typeEntry === "function") {
                      let tmp31;
                      if (str25) {
                        tmp31 = obj[str25];
                      }
                      if (tmp31) {
                        str25 = tmp31.label;
                      } else if (str25 == null) {
                        str25 = obj.unknown.label;
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
                        const str1 = code.minimum.toString();
                        let str70;
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
                        return "" + str68 + " \u05DE\u05D3\u05D9: " + combined4 + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str1 + " " + str70 + " " + str71.trim();
                      } else if ("number" === code.origin) {
                        const minimum2 = code.minimum;
                        const _HermesInternal17 = HermesInternal;
                        if (code.inclusive) {
                          let combined5 = concat(minimum2);
                        } else {
                          combined5 = concat(minimum2);
                        }
                        const _HermesInternal18 = HermesInternal;
                        return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + combined5;
                      } else {
                        if ("array" !== code.origin) {
                          if ("set" !== code.origin) {
                            let str28 = ">";
                            if (code.inclusive) {
                              str28 = ">=";
                            }
                            let str29 = code.origin;
                            if (str29 == null) {
                              str29 = "value";
                            }
                            if (typeof verbFor === "function") {
                              if (typeof tmp30 === "function") {
                                let tmp37;
                                if (str29) {
                                  tmp37 = obj[str29];
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
                                  let combined6 = "" + tmp25.shortLabel + " \u05DE\u05D3\u05D9: " + combined4 + " " + str31 + " " + str28 + code.minimum.toString() + " " + tmp25.unit;
                                } else {
                                  let str33;
                                  if (tmp25 != null) {
                                    str33 = tmp25.shortLabel;
                                  }
                                  if (str33 == null) {
                                    str33 = "\u05E7\u05D8\u05DF";
                                  }
                                  const _HermesInternal11 = HermesInternal;
                                  combined6 = "" + str33 + " \u05DE\u05D3\u05D9: " + combined4 + " " + str31 + " " + str28 + code.minimum.toString();
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
                          if (code.inclusive) {
                            const origin2 = code.origin;
                            const _HermesInternal16 = HermesInternal;
                            let combined7 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " " + str47 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
                          }
                          return combined7;
                        }
                        const minimum = code.minimum;
                        if (code.inclusive) {
                          let str52;
                          if (!tmp48) {
                            str52 = tmp25.unit;
                          }
                          if (str52 == null) {
                            str52 = "";
                          }
                          const _HermesInternal14 = HermesInternal;
                          let combined8 = "" + minimum + " " + str52 + " \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8";
                        } else {
                          let str49;
                          if (!tmp48) {
                            str49 = tmp25.unit;
                          }
                          if (str49 == null) {
                            str49 = "";
                          }
                          const _HermesInternal13 = HermesInternal;
                          combined8 = "\u05D9\u05D5\u05EA\u05E8 \u05DE-" + minimum + " " + str49;
                        }
                        const _HermesInternal15 = HermesInternal;
                        combined7 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " " + str47 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined8.trim();
                        const str59 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + combined4 + " " + str47 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined8;
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
            case "invalid_format":
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
                let label1;
                if (obj1[code.format] != null) {
                  label1 = tmp15.label;
                }
                if (label1 == null) {
                  label1 = code.format;
                }
                let str13;
                if (obj1[code.format] != null) {
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
                return "" + label1 + " \u05DC\u05D0 " + str14;
              }
            break;
            case "not_multiple_of":
              const _HermesInternal4 = HermesInternal;
              return "\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC " + code.divisor;
            case "unrecognized_keys":
              let str5 = "";
              if (code.keys.length > 1) {
                str5 = "\u05D5\u05EA";
              }
              let str6 = "\u05D4";
              if (code.keys.length > 1) {
                str6 = "\u05D9\u05DD";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u05DE\u05E4\u05EA\u05D7" + str5 + " \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4" + str6 + ": " + typeEntry.joinValues(code.keys, ", ");
            case "invalid_key":
              return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
            case "invalid_union":
              return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            case "invalid_element":
              str = code.origin;
              if (str == null) {
                str = "array";
              }
              if (typeof withDefinite === "function") {
                if (typeof typeLabel === "function") {
                  if (typeof typeEntry === "function") {
                    let tmp5;
                    if (str) {
                      tmp5 = obj[str];
                    }
                    if (tmp5) {
                      str = tmp5.label;
                    } else if (str == null) {
                      str = obj.unknown.label;
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
            default:
              return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
          }
        };
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let closure_2 = fn(_mod8939);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}