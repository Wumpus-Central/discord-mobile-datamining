// _runtime/13608_parseUnicodeLanguageId.js
import { e } from "01281_e.js";
const require = arg1;
const exports = arg5;
const dependencyMap = arg6;
function parseUnicodeLanguageId(locale) {
  let parts = locale;
  if (typeof locale === "string") {
    parts = locale.split(exports.SEPARATOR);
  }
  let arr = parts.shift();
  if (arr) {
    if ("root" === arr) {
      let obj = { lang: "root", variants: null };
      obj[1] = [];
      return obj;
    } else if (regex10.test(arr)) {
      let length = parts.length;
      if (length) {
        length = regex6.test(parts[0]);
      }
      arr = undefined;
      if (length) {
        arr = parts.shift();
      }
      let length2 = parts.length;
      if (length2) {
        length2 = regex8.test(parts[0]);
      }
      let arr1;
      if (length2) {
        arr1 = parts.shift();
      }
      obj = {};
      if (parts.length) {
        if (regex9.test(parts[0])) {
          const arr2 = parts.shift();
          while (!(arr2 in obj)) {
            obj[arr2] = 1;
            if (parts.length) {
              let tmp18 = regex9;
            }
          }
          const _RangeError3 = RangeError;
          const concat = "Duplicate variant \"".concat;
          const rangeError = new RangeError("Duplicate variant \"".concat(arr2, "\""));
          throw rangeError;
        }
      }
      obj = { lang: null, script: null, region: null, variants: null };
      obj[0] = arr;
      obj[1] = arr;
      obj[2] = arr1;
      const _Object = Object;
      obj[3] = Object.keys(obj);
      return obj;
    } else {
      const _RangeError2 = RangeError;
      const rangeError1 = new RangeError("Malformed unicode_language_subtag");
      throw rangeError1;
    }
  } else {
    const _RangeError = RangeError;
    const rangeError2 = new RangeError("Missing unicode_language_subtag");
    throw rangeError2;
  }
}
function parseTransformedExtension(parts) {
  let arr;
  try {
    const items = [];
    if (parts.length) {
      if (regex11.test(parts[0])) {
        while (true) {
          arr = parts.shift();
          let items1 = [];
          if (parts.length) {
            let tmp5 = regex3;
            if (regex3.test(parts[0])) {
              arr = items1.push(parts.shift());
              while (parts.length) {
                let tmp7 = regex3;
                if (!regex3.test(parts[0])) {
                  break;
                }
              }
            }
          }
          if (!items1.length) {
            break;
          } else {
            let items2 = [arr, ];
            let tmp13 = exports;
            items2[1] = items1.join(exports.SEPARATOR);
            let arr1 = items.push(items2);
            if (parts.length) {
              let tmp15 = regex11;
            }
          }
        }
        const _RangeError = RangeError;
        const concat = "Missing tvalue for tkey \"".concat;
        const rangeError = new RangeError("Missing tvalue for tkey \"".concat(arr, "\""));
        throw rangeError;
      }
    }
    if (items.length) {
      const obj = { type: "t", fields: null, lang: null };
      obj[1] = items;
      obj[2] = tmp2;
      return obj;
    } else {
      const _RangeError2 = RangeError;
      const rangeError1 = new RangeError("Malformed transformed_extension");
      throw rangeError1;
    }
    tmp2 = parseUnicodeLanguageId(parts);
  } catch (err) {
  }
}
arg5.SEPARATOR = undefined;
arg5.isUnicodeLanguageSubtag = function isUnicodeLanguageSubtag(GetOptionResult) {
  return regex10.test(GetOptionResult);
};
arg5.isStructurallyValidLanguageTag = function isStructurallyValidLanguageTag(locale) {
  try {
    parseUnicodeLanguageId(locale.split(exports.SEPARATOR));
    return true;
  } catch (err) {
    return false;
  }
};
arg5.isUnicodeRegionSubtag = function isUnicodeRegionSubtag(GetOptionResult2) {
  return regex8.test(GetOptionResult2);
};
arg5.isUnicodeScriptSubtag = function isUnicodeScriptSubtag(GetOptionResult1) {
  return regex6.test(GetOptionResult1);
};
arg5.isUnicodeVariantSubtag = function isUnicodeVariantSubtag(arg0) {
  return regex9.test(arg0);
};
arg5.parseUnicodeLanguageId = parseUnicodeLanguageId;
arg5.parseUnicodeLocaleId = function parseUnicodeLocaleId(locale) {
  const parts = locale.split(exports.SEPARATOR);
  const lang = parseUnicodeLanguageId(parts);
  let obj = e;
  const items = [];
  if (parts.length) {
    obj = {};
    let tmp2;
    let tmp3;
    let tmp4;
    let arr = parts.shift();
    while ("u" !== arr) {
      if ("U" === arr) {
        break;
      } else {
        if ("t" !== arr) {
          if ("T" !== arr) {
            if ("x" !== arr) {
              if ("X" !== arr) {
                let tmp97 = regex7;
                if (regex7.test(arr)) {
                  if (arr in obj) {
                    let tmp22 = globalThis;
                    let _RangeError2 = RangeError;
                    let str10 = "There can only be 1 -";
                    let concat = "There can only be 1 -".concat;
                    let str11 = "- extension";
                    let tmp23 = new.target;
                    let tmp24 = new.target;
                    let rangeError = new RangeError("There can only be 1 -".concat(arr, "- extension"));
                    let tmp26 = rangeError;
                    throw rangeError;
                  } else {
                    obj = { type: null, value: null };
                    obj[0] = arr;
                    let items1 = [];
                    if (parts.length) {
                      let tmp14 = regex2;
                      if (regex2.test(parts[0])) {
                        arr = items1.push(parts.shift());
                        while (parts.length) {
                          let tmp16 = regex2;
                          if (!regex2.test(parts[0])) {
                            break;
                          }
                        }
                      }
                    }
                    let str9 = "";
                    if (items1.length) {
                      let tmp17 = exports;
                      str9 = items1.join(exports.SEPARATOR);
                    }
                    obj[1] = str9;
                    obj[obj.type] = obj;
                    let arr1 = items.push(obj);
                    let tmp19 = tmp2;
                    let tmp20 = tmp3;
                    let tmp21 = tmp4;
                  }
                } else {
                  let tmp9 = globalThis;
                  let _RangeError = RangeError;
                  let tmp10 = new.target;
                  let str8 = "Malformed extension type";
                  let tmp11 = new.target;
                  let rangeError1 = new RangeError("Malformed extension type");
                  let tmp13 = rangeError1;
                  throw rangeError1;
                }
              }
            }
            if (tmp2) {
              let tmp37 = globalThis;
              let _RangeError4 = RangeError;
              let tmp38 = new.target;
              let str13 = "There can only be 1 -x- extension";
              let tmp39 = new.target;
              let rangeError2 = new RangeError("There can only be 1 -x- extension");
              let tmp41 = rangeError2;
              throw rangeError2;
            } else {
              let items2 = [];
              if (parts.length) {
                let tmp27 = regex;
                if (regex.test(parts[0])) {
                  let arr2 = items2.push(parts.shift());
                  while (parts.length) {
                    let tmp29 = regex;
                    if (!regex.test(parts[0])) {
                      break;
                    }
                  }
                }
              }
              if (items2.length) {
                let obj1 = { type: "x", value: null };
                let tmp35 = exports;
                obj1[1] = items2.join(exports.SEPARATOR);
                let arr3 = items.push(obj1);
                tmp19 = obj1;
                tmp20 = tmp3;
                tmp21 = tmp4;
              } else {
                let tmp30 = globalThis;
                let _RangeError3 = RangeError;
                let tmp31 = new.target;
                let str12 = "Malformed private_use_extension";
                let tmp32 = new.target;
                let rangeError3 = new RangeError("Malformed private_use_extension");
                let tmp34 = rangeError3;
                throw rangeError3;
              }
            }
          }
          tmp2 = tmp19;
          tmp3 = tmp20;
          tmp4 = tmp21;
          if (parts.length) {
            continue;
          } else {
            let obj2 = { extensions: null };
            obj2[0] = items;
            let obj5 = obj2;
          }
        }
        if (tmp3) {
          let tmp45 = globalThis;
          let _RangeError5 = RangeError;
          let tmp46 = new.target;
          let str14 = "There can only be 1 -t- extension";
          let tmp47 = new.target;
          let rangeError4 = new RangeError("There can only be 1 -t- extension");
          let tmp49 = rangeError4;
          throw rangeError4;
        } else {
          let tmp42 = parseTransformedExtension;
          let tmp43 = parseTransformedExtension(parts);
          let arr4 = items.push(tmp43);
          tmp19 = tmp2;
          tmp20 = tmp43;
          tmp21 = tmp4;
        }
      }
    }
    if (tmp4) {
      const _RangeError7 = RangeError;
      const rangeError5 = new RangeError("There can only be 1 -u- extension");
      throw rangeError5;
    } else {
      const items3 = [];
      if (parts.length) {
        let tmp51;
        if (regex4.test(parts[0])) {
          const items4 = [];
          if (parts.length) {
            if (regex5.test(parts[0])) {
              items4.push(parts.shift());
              while (parts.length) {
                let tmp55 = regex5;
                if (!regex5.test(parts[0])) {
                  break;
                }
              }
            }
          }
          let str15 = "";
          if (items4.length) {
            str15 = items4.join(exports.SEPARATOR);
          }
          const items5 = [parts.shift(), str15];
          tmp51 = items5;
          const arr5 = parts.shift();
        }
        if (tmp51) {
          items3.push(tmp51);
          while (parts.length) {
            let tmp58 = regex4;
            let tmp59;
            if (regex4.test(parts[0])) {
              let items6 = [];
              let arr8 = parts.shift();
              if (parts.length) {
                let tmp61 = regex5;
                if (regex5.test(parts[0])) {
                  let arr9 = items6.push(parts.shift());
                  while (parts.length) {
                    let tmp63 = regex5;
                    if (!regex5.test(parts[0])) {
                      break;
                    }
                  }
                }
              }
              let str16 = "";
              if (items6.length) {
                let tmp64 = exports;
                str16 = items6.join(exports.SEPARATOR);
              }
              let items7 = [arr8, str16];
              tmp59 = items7;
            }
            tmp51 = tmp59;
            if (!tmp59) {
              break;
            }
          }
        }
      }
      const items8 = [];
      if (items3.length) {
        const obj3 = { type: "u", keywords: null, attributes: null };
        obj3[1] = items3;
        obj3[2] = items8;
        let obj4 = obj3;
      } else {
        if (parts.length) {
          if (regex3.test(parts[0])) {
            items8.push(parts.shift());
            while (parts.length) {
              let tmp67 = regex3;
              if (!regex3.test(parts[0])) {
                break;
              }
            }
          }
        }
        if (parts.length) {
          let tmp69;
          if (regex4.test(parts[0])) {
            const items9 = [];
            if (parts.length) {
              if (regex5.test(parts[0])) {
                items9.push(parts.shift());
                while (parts.length) {
                  let tmp73 = regex5;
                  if (!regex5.test(parts[0])) {
                    break;
                  }
                }
              }
            }
            let str17 = "";
            if (items9.length) {
              str17 = items9.join(exports.SEPARATOR);
            }
            const items10 = [parts.shift(), str17];
            tmp69 = items10;
            const arr11 = parts.shift();
          }
          if (tmp69) {
            items3.push(tmp69);
            while (parts.length) {
              let tmp76 = regex4;
              let tmp77;
              if (regex4.test(parts[0])) {
                let items11 = [];
                let arr14 = parts.shift();
                if (parts.length) {
                  let tmp79 = regex5;
                  if (regex5.test(parts[0])) {
                    let arr15 = items11.push(parts.shift());
                    while (parts.length) {
                      let tmp81 = regex5;
                      if (!regex5.test(parts[0])) {
                        break;
                      }
                    }
                  }
                }
                let str18 = "";
                if (items11.length) {
                  let tmp82 = exports;
                  str18 = items11.join(exports.SEPARATOR);
                }
                let items12 = [arr14, str18];
                tmp77 = items12;
              }
              tmp69 = tmp77;
              if (!tmp77) {
                break;
              }
            }
          }
        }
        if (!items3.length) {
          if (!items8.length) {
            const _RangeError6 = RangeError;
            const rangeError6 = new RangeError("Malformed unicode_extension");
            throw rangeError6;
          }
        }
        obj4 = { type: "u", attributes: null, keywords: null };
        obj4[1] = items8;
        obj4[2] = items3;
      }
      items.push(obj4);
    }
  } else {
    obj5 = { extensions: null };
    obj5[0] = items;
  }
  return obj.__assign({ lang }, obj5);
};
const re3 = /^[a-z0-9]{1,8}$/i;
const re4 = /^[a-z0-9]{2,8}$/i;
const re5 = /^[a-z0-9]{3,8}$/i;
const re6 = /^[a-z0-9][a-z]$/i;
const re7 = /^[a-z0-9]{3,8}$/i;
const re8 = /^[a-z]{4}$/i;
const re9 = /^[0-9a-svwyz]$/i;
const re10 = /^([a-z]{2}|[0-9]{3})$/i;
const re11 = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i;
const re12 = /^([a-z]{2,3}|[a-z]{5,8})$/i;
const re13 = /^[a-z][0-9]$/i;
arg5.SEPARATOR = "-";