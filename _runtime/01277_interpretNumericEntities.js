// _runtime/01277_interpretNumericEntities.js
import items3 from "01278_items.js";

let obj = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: items3.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictDepth: false,
  strictNullHandling: false,
  throwOnLimitExceeded: false,
};
function interpretNumericEntities(arg0) {}
function parseArrayValue(arg0, arg1, arg2) {}
function parseQueryStringKeys(arg0, arg1, arg2, arg3) {}

export default (str, allowEmptyArrays) => {
  if (allowEmptyArrays) {
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if (typeof allowEmptyArrays.allowEmptyArrays !== "boolean") {
        let typeError = globalThis;
        const _TypeError6 = TypeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.decodeDotInKeys) {
      if (typeof allowEmptyArrays.decodeDotInKeys !== "boolean") {
        typeError = globalThis;
        const _TypeError5 = TypeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    typeError = null;
    if (null !== allowEmptyArrays.decoder) {
      if (undefined !== allowEmptyArrays.decoder) {
        if (typeof allowEmptyArrays.decoder !== "function") {
          typeError = globalThis;
          const _TypeError4 = TypeError;
          typeError = new.target;
          typeError = new.target;
          typeError = new TypeError("Decoder has to be a function.");
          throw typeError;
        }
      }
    }
    if (undefined !== allowEmptyArrays.charset) {
      if ("utf-8" !== allowEmptyArrays.charset) {
        if ("iso-8859-1" !== allowEmptyArrays.charset) {
          typeError = globalThis;
          const _TypeError3 = TypeError;
          typeError = new.target;
          typeError = new.target;
          typeError = new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          throw typeError;
        }
      }
    }
    if (undefined !== allowEmptyArrays.throwOnLimitExceeded) {
      if (typeof allowEmptyArrays.throwOnLimitExceeded !== "boolean") {
        typeError = globalThis;
        const _TypeError2 = TypeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new TypeError("`throwOnLimitExceeded` option must be a boolean");
        throw typeError;
      }
    }
    if (undefined === allowEmptyArrays.charset) {
      let charset = obj.charset;
    } else {
      charset = allowEmptyArrays.charset;
    }
    if (undefined === allowEmptyArrays.duplicates) {
      let duplicates = obj.duplicates;
    } else {
      duplicates = allowEmptyArrays.duplicates;
    }
    if ("combine" !== duplicates) {
      if ("first" !== duplicates) {
        if ("last" !== duplicates) {
          typeError = globalThis;
          const _TypeError = TypeError;
          typeError = new.target;
          typeError = new.target;
          typeError = new TypeError("The duplicates option must be either combine, first, or last");
          throw typeError;
        }
      }
    }
    if (undefined === allowEmptyArrays.allowDots) {
      let allowDots = true === allowEmptyArrays.decodeDotInKeys;
      if (!allowDots) {
        allowDots = obj.allowDots;
      }
    } else {
      allowDots = allowEmptyArrays.allowDots;
    }
    obj = {
      allowDots: null,
      allowEmptyArrays: null,
      allowPrototypes: null,
      allowSparse: null,
      arrayLimit: null,
      charset: null,
      charsetSentinel: null,
      comma: null,
      decodeDotInKeys: null,
      decoder: null,
      delimiter: null,
      depth: null,
      duplicates: null,
      ignoreQueryPrefix: null,
      interpretNumericEntities: null,
      parameterLimit: null,
      parseArrays: null,
      plainObjects: null,
      strictDepth: null,
      strictNullHandling: null,
      throwOnLimitExceeded: null,
    };
    obj[0] = allowDots;
    if (typeof allowEmptyArrays.allowEmptyArrays === "boolean") {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      typeError = obj;
      allowEmptyArrays = obj.allowEmptyArrays;
    }
    obj[1] = allowEmptyArrays;
    if (typeof allowEmptyArrays.allowPrototypes === "boolean") {
      let allowPrototypes = allowEmptyArrays.allowPrototypes;
    } else {
      typeError = obj;
      allowPrototypes = obj.allowPrototypes;
    }
    obj[2] = allowPrototypes;
    if (typeof allowEmptyArrays.allowSparse === "boolean") {
      let allowSparse = allowEmptyArrays.allowSparse;
    } else {
      typeError = obj;
      allowSparse = obj.allowSparse;
    }
    obj[3] = allowSparse;
    if (typeof allowEmptyArrays.arrayLimit === "number") {
      let arrayLimit = allowEmptyArrays.arrayLimit;
    } else {
      typeError = obj;
      arrayLimit = obj.arrayLimit;
    }
    obj[4] = arrayLimit;
    obj[5] = charset;
    if (typeof allowEmptyArrays.charsetSentinel === "boolean") {
      let charsetSentinel = allowEmptyArrays.charsetSentinel;
    } else {
      typeError = obj;
      charsetSentinel = obj.charsetSentinel;
    }
    obj[6] = charsetSentinel;
    if (typeof allowEmptyArrays.comma === "boolean") {
      let comma = allowEmptyArrays.comma;
    } else {
      typeError = obj;
      comma = obj.comma;
    }
    obj[7] = comma;
    if (typeof allowEmptyArrays.decodeDotInKeys === "boolean") {
      let decodeDotInKeys = allowEmptyArrays.decodeDotInKeys;
    } else {
      typeError = obj;
      decodeDotInKeys = obj.decodeDotInKeys;
    }
    obj[8] = decodeDotInKeys;
    if (typeof allowEmptyArrays.decoder === "function") {
      let decoder = allowEmptyArrays.decoder;
    } else {
      typeError = obj;
      decoder = obj.decoder;
    }
    obj[9] = decoder;
    if (typeof allowEmptyArrays.delimiter !== "string") {
      typeError = obj;
      typeError = dependencyMap;
      if (!obj11.isRegExp(allowEmptyArrays.delimiter)) {
        let delimiter = obj.delimiter;
      }
      obj[10] = delimiter;
      if (typeof allowEmptyArrays.depth !== "number") {
        if (false !== allowEmptyArrays.depth) {
          let depth = obj.depth;
        }
        obj[11] = depth;
        obj[12] = duplicates;
        obj[13] = true === allowEmptyArrays.ignoreQueryPrefix;
        if (typeof allowEmptyArrays.interpretNumericEntities === "boolean") {
          interpretNumericEntities = allowEmptyArrays.interpretNumericEntities;
        } else {
          typeError = obj;
          interpretNumericEntities = obj.interpretNumericEntities;
        }
        obj[14] = interpretNumericEntities;
        if (typeof allowEmptyArrays.parameterLimit === "number") {
          let parameterLimit = allowEmptyArrays.parameterLimit;
        } else {
          typeError = obj;
          parameterLimit = obj.parameterLimit;
        }
        obj[15] = parameterLimit;
        obj[16] = false !== allowEmptyArrays.parseArrays;
        if (typeof allowEmptyArrays.plainObjects === "boolean") {
          let plainObjects = allowEmptyArrays.plainObjects;
        } else {
          typeError = obj;
          plainObjects = obj.plainObjects;
        }
        obj[17] = plainObjects;
        if (typeof allowEmptyArrays.strictDepth === "boolean") {
          let strictDepth = allowEmptyArrays.strictDepth;
        } else {
          typeError = obj;
          strictDepth = obj.strictDepth;
        }
        obj[18] = strictDepth;
        if (typeof allowEmptyArrays.strictNullHandling === "boolean") {
          let strictNullHandling = allowEmptyArrays.strictNullHandling;
        } else {
          typeError = obj;
          strictNullHandling = obj.strictNullHandling;
        }
        obj[19] = strictNullHandling;
        const throwOnLimitExceeded = allowEmptyArrays.throwOnLimitExceeded;
        let throwOnLimitExceeded2 = typeof throwOnLimitExceeded === "boolean";
        if (typeof throwOnLimitExceeded === "boolean") {
          throwOnLimitExceeded2 = allowEmptyArrays.throwOnLimitExceeded;
        }
        obj[20] = throwOnLimitExceeded2;
      }
      depth = +allowEmptyArrays.depth;
      obj11 = obj(1278);
    }
    delimiter = allowEmptyArrays.delimiter;
  }
  if ("" !== str) {
    typeError = null;
    if (null != str) {
      let tmp20 = str;
      if (typeof str === "string") {
        let str6 = str;
        if (obj.ignoreQueryPrefix) {
          str6 = str.replace(/^\?/, "");
        }
        const str8 = str6.replace(/%5B/gi, "[");
        parameterLimit = undefined;
        if (obj.parameterLimit !== Infinity) {
          parameterLimit = obj.parameterLimit;
        }
        let sum = parameterLimit;
        if (obj.throwOnLimitExceeded) {
          sum = parameterLimit + 1;
        }
        const parts = str6.replace(/%5B/gi, "[").replace(/%5D/gi, "]").split(obj.delimiter, sum);
        if (obj.throwOnLimitExceeded) {
          if (parts.length > parameterLimit) {
            let str48 = "s";
            const text = `Parameter limit exceeded. Only ${tmp8}`;
            if (1 === parameterLimit) {
              str48 = "";
            }
            const _HermesInternal3 = HermesInternal;
            const rangeError = new RangeError(text + " parameter" + str48 + " allowed.");
            throw rangeError;
          }
        }
        const charset2 = obj.charset;
        dependencyMap = charset2;
        let tmp10 = charset2;
        let num4 = -1;
        if (obj.charsetSentinel) {
          let tmp11 = charset2;
          let num7 = 0;
          tmp10 = charset2;
          num4 = -1;
          if (0 < parts.length) {
            let str16 = tmp11;
            while (0 !== arr2.indexOf("utf8=")) {
              num7 = num7 + 1;
              tmp11 = str16;
              tmp10 = str16;
              num4 = num6;
            }
            if ("utf8=%E2%9C%93" === parts[num7]) {
              dependencyMap = "utf-8";
              str16 = "utf-8";
            } else if ("utf8=%26%2310003%3B" === parts[num7]) {
              dependencyMap = "iso-8859-1";
              str16 = "iso-8859-1";
            }
            arr2 = parts[num7];
          }
        }
        obj = Object.create(null);
        let num10 = 0;
        tmp20 = obj;
        if (0 < parts.length) {
          while (true) {
            let tmp21 = num10;
            if (num10 !== num4) {
              let arr11 = parts[num10];
              typeError = arr11.indexOf("]=");
              if (-1 === typeError) {
                let index = arr11.indexOf("=");
              } else {
                index = typeError + 1;
              }
              if (-1 === index) {
                let tmp31 = obj;
                let tmp32 = obj;
                let tmp33 = arr11;
                let tmp34 = tmp10;
                let str29 = "key";
                let tmp36 = "";
                let decoderResult = obj.decoder(arr11, obj.decoder, tmp10, "key");
                if (obj.strictNullHandling) {
                  tmp36 = null;
                }
                let maybeMapResult = tmp36;
                let tmp30 = decoderResult;
              } else {
                typeError = obj;
                typeError = obj;
                typeError = tmp10;
                let str57 = "key";
                typeError = obj.decoder(arr11.slice(0, index), obj.decoder, tmp10, "key");
                typeError = obj;
                typeError = dependencyMap;
                let obj12 = obj(1278);
                typeError = parseArrayValue;
                let substr = arr11.slice(index + 1);
                typeError = isArray;
                let num11 = 0;
                if (isArray(obj[typeError])) {
                  num11 = obj[typeError].length;
                }
                if (typeof typeError !== "function") {
                  let str58 = "Trying to call a non-function";
                  typeError = HermesBuiltin.throwTypeError();
                }
                if (substr) {
                  if (typeof substr === "string") {
                    if (obj.comma) {
                      if (substr.indexOf(",") > -1) {
                        let parts1 = substr.split(",");
                        maybeMapResult = obj12.maybeMap(parts1, (arg0) =>
                          obj.decoder(arg0, closure_1_4.decoder, c1, "value"),
                        );
                        tmp30 = typeError;
                      }
                    }
                  }
                }
                parts1 = substr;
                if (obj.throwOnLimitExceeded) {
                  parts1 = substr;
                  if (num11 >= obj.arrayLimit) {
                    break;
                  }
                }
              }
              let interpretNumericEntities2 = maybeMapResult;
              if (maybeMapResult) {
                interpretNumericEntities2 = obj.interpretNumericEntities;
              }
              if (interpretNumericEntities2) {
                interpretNumericEntities2 = tmp19;
              }
              let replaced = maybeMapResult;
              if (interpretNumericEntities2) {
                let tmp38 = interpretNumericEntities;
                let _String = String;
                let str30 = String(maybeMapResult);
                if (typeof interpretNumericEntities !== "function") {
                  let str59 = "Trying to call a non-function";
                  typeError = HermesBuiltin.throwTypeError();
                }
                replaced = str30.replace(/&#(\d+);/g, (arg0, joined) => String.fromCharCode(parseInt(joined, 10)));
              }
              let tmp39 = replaced;
              if (arr11.indexOf("[]=") > -1) {
                let tmp40 = isArray;
                let tmp41 = replaced;
                if (isArray(replaced)) {
                  let items = [replaced];
                  tmp41 = items;
                }
                tmp39 = tmp41;
              }
              let tmp42 = hasOwnProperty;
              let call = hasOwnProperty.call;
              let tmp43 = typeof call === "unknown" ? tmp42(tmp30) : call(obj, tmp30);
              if (tmp43) {
                if ("combine" === obj.duplicates) {
                  let tmp44 = obj;
                  let tmp45 = dependencyMap;
                  let obj2 = obj(1278);
                  obj[tmp30] = obj2.combine(obj[tmp30], tmp39);
                }
              }
              if (tmp43) {
                tmp43 = "last" !== obj.duplicates;
              }
              if (!tmp43) {
                obj[tmp30] = tmp39;
              }
            }
            num10 = num10 + 1;
            tmp20 = obj;
          }
          let str26 = "s";
          const text1 = `Array limit exceeded. Only ${obj.arrayLimit}`;
          if (1 === obj.arrayLimit) {
            str26 = "";
          }
          const _HermesInternal = HermesInternal;
          const rangeError1 = new RangeError(text1 + " element" + str26 + " allowed in an array.");
          throw rangeError1;
        }
        const str10 = str6.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      const tmp46 = obj.plainObjects ? Object.create(null) : {};
      const _Object = Object;
      const keys = Object.keys(tmp20);
      let mergeResult = tmp46;
      let num16 = 0;
      let tmp49 = tmp46;
      if (0 < keys.length) {
        while (true) {
          let str38 = keys[num16];
          let tmp50 = parseQueryStringKeys;
          let arr5 = tmp20[str38];
          let tmp51 = num16;
          let tmp52 = mergeResult;
          if (typeof parseQueryStringKeys !== "function") {
            let str60 = "Trying to call a non-function";
            typeError = HermesBuiltin.throwTypeError();
          }
          let tmp53;
          if (str38) {
            let replaced1 = str38;
            if (obj.allowDots) {
              replaced1 = str38.replace(/\.([^.[]+)/g, "[$1]");
            }
            let match = obj.depth > 0;
            if (match) {
              let obj4 = /(\[[^[\]]*])/;
              match = obj4.exec(replaced1);
            }
            let substr1 = replaced1;
            if (match) {
              substr1 = replaced1.slice(0, match.index);
            }
            let items1 = [];
            if (substr1) {
              if (!obj.plainObjects) {
                let tmp56 = hasOwnProperty;
                let call2 = hasOwnProperty.call;
                let _Object2 = Object;
              }
              let arr = items1.push(substr1);
            }
            if (obj.depth > 0) {
              let obj13 = /(\[[^[\]]*])/g;
              typeError = obj13.exec(replaced1);
              match = typeError;
              if (null !== typeError) {
                let num17 = 0;
                let tmp64 = typeError;
                match = typeError;
                if (0 < obj.depth) {
                  while (true) {
                    let tmp58 = num17;
                    let tmp59 = tmp64;
                    if (!obj.plainObjects) {
                      let tmp60 = hasOwnProperty;
                      let call3 = hasOwnProperty.call;
                      let _Object3 = Object;
                      let arr8 = tmp64[1];
                      let substr2 = arr8.slice(1, -1);
                      if (typeof call3 === "unknown" ? tmp60(substr2) : call3(prototype2, substr2)) {
                        if (!obj.allowPrototypes) {
                          break;
                        }
                      }
                      break;
                    }
                    arr = items1.push(tmp64[1]);
                    match = tmp64;
                    if (obj.depth > 0) {
                      let match1 = obj13.exec(replaced1);
                      match = match1;
                      if (null !== match1) {
                        num17 = num17 + 1;
                        tmp64 = match1;
                        match = match1;
                      }
                      continue;
                    }
                  }
                }
              }
            }
            if (match) {
              if (true === obj.strictDepth) {
                break;
              } else {
                typeError = items1.push(`[${arr6.slice(tmp54.index)}]`);
              }
            }
            let num18 = 0;
            if (items1.length > 0) {
              num18 = 0;
              if ("[]" === items1[items1.length - 1]) {
                let substr3 = items1.slice(0, -1);
                let joined = substr3.join("");
                let _Array = Array;
                let num19 = 0;
                if (Array.isArray(arr5)) {
                  num19 = 0;
                  if (arr5[joined]) {
                    num19 = arr5[joined].length;
                  }
                }
                num18 = num19;
              }
            }
            let tmp66 = arr5;
            if (typeof str !== "string") {
              typeError = parseArrayValue;
              if (typeof parseArrayValue !== "function") {
                let str61 = "Trying to call a non-function";
                typeError = HermesBuiltin.throwTypeError();
              }
              if (arr5) {
                if (typeof arr5 === "string") {
                  if (obj.comma) {
                    if (arr5.indexOf(",") > -1) {
                      let parts2 = arr5.split(",");
                      tmp66 = parts2;
                    }
                  }
                }
              }
              parts2 = arr5;
              if (obj.throwOnLimitExceeded) {
                parts2 = arr5;
                if (num18 >= obj.arrayLimit) {
                  let str39 = "Array limit exceeded. Only ";
                  let str40 = "s";
                  let text2 = `Array limit exceeded. Only ${obj.arrayLimit}`;
                  if (1 === obj.arrayLimit) {
                    str40 = "";
                  }
                  let _HermesInternal2 = HermesInternal;
                  let str41 = " allowed in an array.";
                  let str42 = " element";
                  let tmp69 = new.target;
                  let tmp70 = new.target;
                  let rangeError2 = new RangeError(text2 + " element" + str40 + " allowed in an array.");
                  let tmp72 = rangeError2;
                  throw rangeError2;
                }
              }
            }
            let diff = items1.length - 1;
            let tmp74 = tmp66;
            let tmp75 = tmp66;
            if (0 <= diff) {
              while (true) {
                let str43 = items1[diff];
                let tmp76 = diff;
                let tmp77 = tmp74;
                if ("[]" === str43) {
                  if (obj.parseArrays) {
                    break;
                  }
                }
                let tmp78 = obj.plainObjects ? Object.create(null) : {};
                let str44 = str43;
                if ("[" === str43.charAt(0)) {
                  str44 = str43;
                  if ("]" === str43.charAt(str43.length - 1)) {
                    str44 = str43.slice(1, -1);
                  }
                }
                let replaced2 = str44;
                if (obj.decodeDotInKeys) {
                  replaced2 = str44.replace(/%2E/g, ".");
                }
                let _parseInt = parseInt;
                let parsed = parseInt(replaced2, 10);
                if (!obj.parseArrays) {
                  if ("" === replaced2) {
                    obj1 = { 0: null };
                    obj1[0] = tmp74;
                  }
                  diff = diff - 1;
                  tmp74 = obj1;
                  tmp75 = obj1;
                  continue;
                }
                let _isNaN = isNaN;
                if (!isNaN(parsed)) {
                  if (str43 !== replaced2) {
                    let _String2 = String;
                    if (String(parsed) === replaced2) {
                      if (parsed >= 0) {
                        if (obj.parseArrays) {
                          if (parsed <= obj.arrayLimit) {
                            let items2 = [];
                            items2[parsed] = tmp74;
                            obj1 = items2;
                          }
                        }
                      }
                    }
                  }
                }
                obj1 = tmp78;
                if ("__proto__" !== replaced2) {
                  tmp78[replaced2] = tmp74;
                  obj1 = tmp78;
                }
              }
              if (!obj.allowEmptyArrays) {
                let tmp81 = obj;
                let tmp82 = dependencyMap;
                let obj7 = obj(1278);
                let combineResult = obj7.combine([], tmp74);
                let tmp83 = combineResult;
              }
              combineResult = [];
            }
            tmp53 = tmp75;
          }
          let tmp84 = obj;
          let tmp85 = dependencyMap;
          let obj8 = obj(1278);
          mergeResult = obj8.merge(mergeResult, tmp53, obj);
          num16 = num16 + 1;
          tmp49 = mergeResult;
        }
        const _RangeError = RangeError;
        const rangeError3 = new RangeError(
          "Input depth exceeded depth option of " + obj.depth + " and strictDepth is true",
        );
        throw rangeError3;
      }
      let compactResult = tmp49;
      if (true !== obj.allowSparse) {
        compactResult = obj(1278).compact(tmp49);
        const obj9 = obj(1278);
      }
      return compactResult;
    }
  }
  if (obj.plainObjects) {
    obj2 = Object.create(null);
  } else {
    obj2 = {};
  }
  return obj2;
};
