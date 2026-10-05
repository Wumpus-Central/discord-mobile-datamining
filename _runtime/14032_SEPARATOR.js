// _runtime/14032_SEPARATOR.js
import _mod1172 from "metro/01172__.js";

function parseUnicodeLanguageId(locale) {
  let parts = locale;
  if (typeof locale === "string") {
    parts = locale.split(exports.SEPARATOR);
  }
  const arr = parts.shift();
  if (arr) {
    if ("root" === arr) {
      return { lang: "root", variants: [] };
    } else if (re12.test(arr)) {
      let arr5;
      const length = parts.length && re8.test(parts[0]);
      if (length) {
        arr5 = parts.shift();
      }
      let arr6;
      const length2 = parts.length && re10.test(parts[0]);
      if (length2) {
        arr6 = parts.shift();
      }
      const obj = {};
      if (parts.length) {
        if (re11.test(parts[0])) {
          const arr7 = parts.shift();
          while (!(arr7 in obj)) {
            obj[arr7] = 1;
          }
          const _RangeError3 = RangeError;
          const concat = 'Duplicate variant "'.concat;
          const self5 = this;
          const self6 = this;
          const rangeError = new RangeError('Duplicate variant "'.concat(arr7, '"'));
          throw rangeError;
        }
      }
      const _Object = Object;
      const obj3 = { lang: arr, script: arr5, region: arr6, variants: Object.keys(obj) };
      return obj3;
    } else {
      const _RangeError2 = RangeError;
      const self3 = this;
      const self4 = this;
      const rangeError1 = new RangeError("Malformed unicode_language_subtag");
      throw rangeError1;
    }
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError2 = new RangeError("Missing unicode_language_subtag");
    throw rangeError2;
  }
}
function parseTransformedExtension(parts) {
  let arr;
  let tmp;
  try {
    tmp = parseUnicodeLanguageId(parts);
  } catch (err) {}
  const items = [];
  if (parts.length) {
    if (re13.test(parts[0])) {
      while (true) {
        arr = parts.shift();
        let items1 = [];
        if (parts.length) {
          if (re5.test(parts[0])) {
            let arr2 = items1.push(parts.shift());
            while (parts.length) {
              if (!re5.test(parts[0])) {
                break;
              }
            }
          }
        }
        if (!items1.length) {
          break;
        } else {
          let items2 = [arr];
          let push = items.push;
          items2[1] = items1.join(exports.SEPARATOR);
          let arr3 = push(items2);
        }
      }
      const _RangeError = RangeError;
      const concat = 'Missing tvalue for tkey "'.concat;
      const self = this;
      const self2 = this;
      const rangeError = new RangeError('Missing tvalue for tkey "'.concat(arr, '"'));
      throw rangeError;
    }
  }
  if (items.length) {
    return { type: "t", fields: items, lang: tmp };
  } else {
    const _RangeError2 = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError1 = new RangeError("Malformed transformed_extension");
    throw rangeError1;
  }
}
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

export const isUnicodeLanguageSubtag = function isUnicodeLanguageSubtag(GetOptionResult) {
  return re12.test(GetOptionResult);
};
export const isStructurallyValidLanguageTag = function isStructurallyValidLanguageTag(locale) {
  try {
    parseUnicodeLanguageId(locale.split(exports.SEPARATOR));
    return true;
  } catch (err) {
    return false;
  }
};
export const isUnicodeRegionSubtag = function isUnicodeRegionSubtag(GetOptionResult2) {
  return re10.test(GetOptionResult2);
};
export const isUnicodeScriptSubtag = function isUnicodeScriptSubtag(GetOptionResult1) {
  return re8.test(GetOptionResult1);
};
export const isUnicodeVariantSubtag = function isUnicodeVariantSubtag(arg0) {
  return re11.test(arg0);
};
export { parseUnicodeLanguageId };
export const parseUnicodeLocaleId = function parseUnicodeLocaleId(locale) {
  let arr;
  let obj;
  let str9;
  let tmp3;
  let tmp4;
  let tmp5;
  const parts = locale.split(exports.SEPARATOR);
  const lang = parseUnicodeLanguageId(parts);
  const items = [];
  const __assign = _mod1172.__assign;
  _mod1172;
  if (parts.length) {
    const obj2 = {};
    while (true) {
      let tmp20;
      let tmp18;
      let tmp19;
      arr = parts.shift();
      if ("u" !== arr) {
        if ("U" !== arr) {
          if ("t" !== arr) {
            if ("T" !== arr) {
              if ("x" !== arr) {
                if ("X" !== arr) {
                  if (re9.test(arr)) {
                    if (arr in obj2) {
                      break;
                    } else {
                      let obj3 = { type: arr, value: str9 };
                      let items1 = [];
                      if (parts.length) {
                        if (re4.test(parts[0])) {
                          let arr2 = items1.push(parts.shift());
                          while (parts.length) {
                            if (!re4.test(parts[0])) {
                              break;
                            }
                          }
                        }
                      }
                      str9 = "";
                      if (items1.length) {
                        str9 = items1.join(exports.SEPARATOR);
                      }
                      obj2[obj3.type] = obj3;
                      let arr3 = items.push(obj3);
                      tmp18 = tmp3;
                      tmp19 = tmp4;
                      tmp20 = tmp5;
                    }
                  } else {
                    let tmp10 = globalThis;
                    let _RangeError = RangeError;
                    let self = this;
                    let str8 = "Malformed extension type";
                    let self2 = this;
                    let rangeError = new RangeError("Malformed extension type");
                    throw rangeError;
                  }
                }
              }
              if (tmp3) {
                let tmp32 = globalThis;
                let _RangeError4 = RangeError;
                let self7 = this;
                let str13 = "There can only be 1 -x- extension";
                let self8 = this;
                let rangeError1 = new RangeError("There can only be 1 -x- extension");
                throw rangeError1;
              } else {
                let items2 = [];
                if (parts.length) {
                  if (re3.test(parts[0])) {
                    let arr4 = items2.push(parts.shift());
                    while (parts.length) {
                      if (!re3.test(parts[0])) {
                        break;
                      }
                    }
                  }
                }
                if (items2.length) {
                  let obj4 = { type: "x", value: items2.join(exports.SEPARATOR) };
                  let arr5 = items.push(obj4);
                  tmp18 = obj4;
                  tmp19 = tmp4;
                  tmp20 = tmp5;
                } else {
                  let tmp27 = globalThis;
                  let _RangeError3 = RangeError;
                  let self5 = this;
                  let str12 = "Malformed private_use_extension";
                  let self6 = this;
                  let rangeError2 = new RangeError("Malformed private_use_extension");
                  throw rangeError2;
                }
              }
            }
          }
          if (tmp4) {
            let tmp38 = globalThis;
            let _RangeError5 = RangeError;
            let self9 = this;
            let str14 = "There can only be 1 -t- extension";
            let self10 = this;
            let rangeError3 = new RangeError("There can only be 1 -t- extension");
            throw rangeError3;
          } else {
            let tmp36 = parseTransformedExtension(parts);
            let arr6 = items.push(tmp36);
            tmp18 = tmp3;
            tmp19 = tmp36;
            tmp20 = tmp5;
          }
        }
        tmp3 = tmp18;
        tmp4 = tmp19;
        tmp5 = tmp20;
        if (parts.length) {
          continue;
        } else {
          let obj5 = { extensions: items };
          obj = obj5;
        }
      }
      if (tmp5) {
        let tmp78 = globalThis;
        let _RangeError7 = RangeError;
        let self13 = this;
        let str20 = "There can only be 1 -u- extension";
        let self14 = this;
        let rangeError4 = new RangeError("There can only be 1 -u- extension");
        throw rangeError4;
      } else {
        let obj7;
        let items3 = [];
        if (parts.length) {
          let tmp42;
          if (re6.test(parts[0])) {
            let items4 = [];
            let arr7 = parts.shift();
            if (parts.length) {
              if (re7.test(parts[0])) {
                let arr8 = items4.push(parts.shift());
                while (parts.length) {
                  if (!re7.test(parts[0])) {
                    break;
                  }
                }
              }
            }
            let str15 = "";
            if (items4.length) {
              str15 = items4.join(exports.SEPARATOR);
            }
            let items5 = [arr7, str15];
            tmp42 = items5;
          }
          if (tmp42) {
            let arr9 = items3.push(tmp42);
            while (parts.length) {
              let tmp50;
              if (re6.test(parts[0])) {
                let items6 = [];
                let arr10 = parts.shift();
                if (parts.length) {
                  if (re7.test(parts[0])) {
                    let arr11 = items6.push(parts.shift());
                    while (parts.length) {
                      if (!re7.test(parts[0])) {
                        break;
                      }
                    }
                  }
                }
                let str16 = "";
                if (items6.length) {
                  str16 = items6.join(exports.SEPARATOR);
                }
                let items7 = [arr10, str16];
                tmp50 = items7;
              }
              tmp42 = tmp50;
              if (!tmp42) {
                break;
              }
            }
          }
        }
        let items8 = [];
        if (items3.length) {
          let obj6 = { type: "u", keywords: items3, attributes: items8 };
          obj7 = obj6;
        } else {
          if (parts.length) {
            if (re5.test(parts[0])) {
              let arr12 = items8.push(parts.shift());
              while (parts.length) {
                if (!re5.test(parts[0])) {
                  break;
                }
              }
            }
          }
          if (parts.length) {
            let tmp60;
            if (re6.test(parts[0])) {
              let items9 = [];
              let arr13 = parts.shift();
              if (parts.length) {
                if (re7.test(parts[0])) {
                  let arr14 = items9.push(parts.shift());
                  while (parts.length) {
                    if (!re7.test(parts[0])) {
                      break;
                    }
                  }
                }
              }
              let str17 = "";
              if (items9.length) {
                str17 = items9.join(exports.SEPARATOR);
              }
              let items10 = [arr13, str17];
              tmp60 = items10;
            }
            if (tmp60) {
              let arr32 = items3.push(tmp60);
              while (parts.length) {
                let tmp68;
                if (re6.test(parts[0])) {
                  let items11 = [];
                  let arr33 = parts.shift();
                  if (parts.length) {
                    if (re7.test(parts[0])) {
                      let arr34 = items11.push(parts.shift());
                      while (parts.length) {
                        if (!re7.test(parts[0])) {
                          break;
                        }
                      }
                    }
                  }
                  let str18 = "";
                  if (items11.length) {
                    str18 = items11.join(exports.SEPARATOR);
                  }
                  let items12 = [arr33, str18];
                  tmp68 = items12;
                }
                tmp60 = tmp68;
                if (!tmp60) {
                  break;
                }
              }
            }
          }
          if (!items3.length) {
            if (!items8.length) {
              let tmp74 = globalThis;
              let _RangeError6 = RangeError;
              let self11 = this;
              let str19 = "Malformed unicode_extension";
              let self12 = this;
              let rangeError5 = new RangeError("Malformed unicode_extension");
              throw rangeError5;
            }
          }
          obj7 = { type: "u", attributes: items8, keywords: items3 };
        }
        let arr35 = items.push(obj7);
        tmp20 = obj7;
        tmp18 = tmp3;
        tmp19 = tmp4;
      }
    }
    const _RangeError2 = RangeError;
    const concat = "There can only be 1 -".concat;
    const self3 = this;
    const self4 = this;
    const rangeError6 = new RangeError("There can only be 1 -".concat(arr, "- extension"));
    throw rangeError6;
  } else {
    obj = { extensions: items };
  }
  return __assign({ lang }, obj);
};
export const SEPARATOR = "-";
