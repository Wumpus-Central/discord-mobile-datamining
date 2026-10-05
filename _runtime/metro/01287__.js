// === Module 1287: ? ===

// Module 1287
import _mod1288 from "module_1288" /* 1288 */;

let dependencyMap;

let obj = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: _mod1288.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1000, parseArrays: true, plainObjects: false, strictDepth: false, strictNullHandling: false, throwOnLimitExceeded: false };
function interpretNumericEntities(arg0) {

}
function parseArrayValue(arg0, arg1, arg2) {

}
function parseQueryStringKeys(arg0, arg1, arg2, arg3) {

}

export default function(str, allowEmptyArrays) {
  let allowPrototypes;
  let allowSparse;
  let arrayLimit;
  let c1;
  let charsetSentinel;
  let comma;
  let decodeDotInKeys;
  let decoder;
  let obj10;
  const tmp = allowEmptyArrays;
  if (tmp) {
    let charset;
    let duplicates;
    let allowDots1;
    if (undefined !== allowEmptyArrays.allowEmptyArrays) {
      if (typeof allowEmptyArrays.allowEmptyArrays !== "boolean") {
        const _TypeError6 = TypeError;
        const self19 = this;
        const self20 = this;
        const typeError = new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        throw typeError;
      }
    }
    if (undefined !== allowEmptyArrays.decodeDotInKeys) {
      if (typeof allowEmptyArrays.decodeDotInKeys !== "boolean") {
        const _TypeError5 = TypeError;
        const self17 = this;
        const self18 = this;
        const typeError1 = new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        throw typeError1;
      }
    }
    if (null !== allowEmptyArrays.decoder) {
      if (undefined !== allowEmptyArrays.decoder) {
        if (typeof allowEmptyArrays.decoder !== "function") {
          const _TypeError4 = TypeError;
          const self15 = this;
          const self16 = this;
          const typeError2 = new TypeError("Decoder has to be a function.");
          throw typeError2;
        }
      }
    }
    if (undefined !== allowEmptyArrays.charset) {
      if ("utf-8" !== allowEmptyArrays.charset) {
        if ("iso-8859-1" !== allowEmptyArrays.charset) {
          const _TypeError3 = TypeError;
          const self13 = this;
          const self14 = this;
          const typeError3 = new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          throw typeError3;
        }
      }
    }
    if (undefined !== allowEmptyArrays.throwOnLimitExceeded) {
      if (typeof allowEmptyArrays.throwOnLimitExceeded !== "boolean") {
        const _TypeError2 = TypeError;
        const self11 = this;
        const self12 = this;
        const typeError4 = new TypeError("`throwOnLimitExceeded` option must be a boolean");
        throw typeError4;
      }
    }
    if (undefined === allowEmptyArrays.charset) {
      charset = obj.charset;
    } else {
      charset = allowEmptyArrays.charset;
    }
    if (undefined === allowEmptyArrays.duplicates) {
      duplicates = obj.duplicates;
    } else {
      duplicates = allowEmptyArrays.duplicates;
    }
    if ("combine" !== duplicates) {
      if ("first" !== duplicates) {
        if ("last" !== duplicates) {
          const _TypeError = TypeError;
          const self9 = this;
          const self10 = this;
          const typeError5 = new TypeError("The duplicates option must be either combine, first, or last");
          throw typeError5;
        }
      }
    }
    if (undefined === allowEmptyArrays.allowDots) {
      const allowDots = true === allowEmptyArrays.decodeDotInKeys || obj.allowDots;
      allowDots1 = allowDots;
    } else {
      allowDots1 = allowEmptyArrays.allowDots;
    }
    const obj2 = { allowDots: allowDots1, allowEmptyArrays, allowPrototypes, allowSparse, arrayLimit, charset, charsetSentinel, comma, decodeDotInKeys, decoder, delimiter: null, depth: null, duplicates: null, ignoreQueryPrefix: null, interpretNumericEntities: null, parameterLimit: null, parseArrays: null, plainObjects: null, strictDepth: null, strictNullHandling: null, throwOnLimitExceeded: null };
    if (typeof allowEmptyArrays.allowEmptyArrays === "boolean") {
      allowEmptyArrays = allowEmptyArrays.allowEmptyArrays;
    } else {
      allowEmptyArrays = obj.allowEmptyArrays;
    }
    if (typeof allowEmptyArrays.allowPrototypes === "boolean") {
      allowPrototypes = allowEmptyArrays.allowPrototypes;
    } else {
      allowPrototypes = obj.allowPrototypes;
    }
    if (typeof allowEmptyArrays.allowSparse === "boolean") {
      allowSparse = allowEmptyArrays.allowSparse;
    } else {
      allowSparse = obj.allowSparse;
    }
    if (typeof allowEmptyArrays.arrayLimit === "number") {
      arrayLimit = allowEmptyArrays.arrayLimit;
    } else {
      arrayLimit = obj.arrayLimit;
    }
    if (typeof allowEmptyArrays.charsetSentinel === "boolean") {
      charsetSentinel = allowEmptyArrays.charsetSentinel;
    } else {
      charsetSentinel = obj.charsetSentinel;
    }
    if (typeof allowEmptyArrays.comma === "boolean") {
      comma = allowEmptyArrays.comma;
    } else {
      comma = obj.comma;
    }
    if (typeof allowEmptyArrays.decodeDotInKeys === "boolean") {
      decodeDotInKeys = allowEmptyArrays.decodeDotInKeys;
    } else {
      decodeDotInKeys = obj.decodeDotInKeys;
    }
    if (typeof allowEmptyArrays.decoder === "function") {
      decoder = allowEmptyArrays.decoder;
    } else {
      decoder = obj.decoder;
    }
    if (typeof allowEmptyArrays.delimiter !== "string") {
      let delimiter;
      const obj11 = obj(1288);
      if (!obj11.isRegExp(allowEmptyArrays.delimiter)) {
        delimiter = obj.delimiter;
      }
      obj2.delimiter = delimiter;
      if (typeof allowEmptyArrays.depth !== "number") {
        let depth;
        let parameterLimit;
        let plainObjects;
        let strictDepth;
        let strictNullHandling;
        if (false !== allowEmptyArrays.depth) {
          depth = obj.depth;
        }
        obj2.depth = depth;
        obj2.duplicates = duplicates;
        obj2.ignoreQueryPrefix = true === allowEmptyArrays.ignoreQueryPrefix;
        if (typeof allowEmptyArrays.interpretNumericEntities === "boolean") {
          interpretNumericEntities = allowEmptyArrays.interpretNumericEntities;
        } else {
          interpretNumericEntities = obj.interpretNumericEntities;
        }
        obj2.interpretNumericEntities = interpretNumericEntities;
        if (typeof allowEmptyArrays.parameterLimit === "number") {
          parameterLimit = allowEmptyArrays.parameterLimit;
        } else {
          parameterLimit = obj.parameterLimit;
        }
        obj2.parameterLimit = parameterLimit;
        obj2.parseArrays = false !== allowEmptyArrays.parseArrays;
        if (typeof allowEmptyArrays.plainObjects === "boolean") {
          plainObjects = allowEmptyArrays.plainObjects;
        } else {
          plainObjects = obj.plainObjects;
        }
        obj2.plainObjects = plainObjects;
        if (typeof allowEmptyArrays.strictDepth === "boolean") {
          strictDepth = allowEmptyArrays.strictDepth;
        } else {
          strictDepth = obj.strictDepth;
        }
        obj2.strictDepth = strictDepth;
        if (typeof allowEmptyArrays.strictNullHandling === "boolean") {
          strictNullHandling = allowEmptyArrays.strictNullHandling;
        } else {
          strictNullHandling = obj.strictNullHandling;
        }
        obj2.strictNullHandling = strictNullHandling;
        const throwOnLimitExceeded = allowEmptyArrays.throwOnLimitExceeded;
        let throwOnLimitExceeded2 = typeof throwOnLimitExceeded === "boolean";
        if (typeof throwOnLimitExceeded === "boolean") {
          throwOnLimitExceeded2 = allowEmptyArrays.throwOnLimitExceeded;
        }
        obj2.throwOnLimitExceeded = throwOnLimitExceeded2;
        obj = obj2;
      }
      depth = +allowEmptyArrays.depth;
    }
    delimiter = allowEmptyArrays.delimiter;
  }
  if ("" !== str) {
    if (null != str) {
      let tmp19 = str;
      if (typeof str === "string") {
        let str6 = str;
        if (obj.ignoreQueryPrefix) {
          str6 = str.replace(/^\?/, "");
        }
        let parameterLimit1;
        const str8 = str6.replace(/%5B/gi, "[");
        const str10 = str8.replace(/%5D/gi, "]");
        if (obj.parameterLimit !== Infinity) {
          parameterLimit1 = obj.parameterLimit;
        }
        let sum = parameterLimit1;
        const split = str10.split;
        const delimiter2 = obj.delimiter;
        if (obj.throwOnLimitExceeded) {
          sum = parameterLimit1 + 1;
        }
        const parts = split(delimiter2, sum);
        if (obj.throwOnLimitExceeded) {
          if (parts.length > parameterLimit1) {
            let str48 = "s";
            const _RangeError4 = RangeError;
            const text = `Parameter limit exceeded. Only ${tmp9}`;
            if (1 === parameterLimit1) {
              str48 = "";
            }
            const _HermesInternal3 = HermesInternal;
            const self7 = this;
            const self8 = this;
            const _RangeError41 = new _RangeError4(text + " parameter" + str48 + " allowed.");
            throw _RangeError41;
          }
        }
        const charset2 = obj.charset;
        dependencyMap = charset2;
        let tmp11 = charset2;
        let num4 = -1;
        if (obj.charsetSentinel) {
          let tmp12 = charset2;
          let num6 = -1;
          let num7 = 0;
          tmp11 = charset2;
          num4 = -1;
          if (0 < parts.length) {
            do {
              let arr2 = parts[num7];
              let str16 = tmp12;
              let tmp13 = num6;
              let tmp15 = tmp12;
              let length = num7;
              if (0 === arr2.indexOf("utf8=")) {
                if ("utf8=%E2%9C%93" === parts[num7]) {
                  dependencyMap = "utf-8";
                  str16 = "utf-8";
                } else if ("utf8=%26%2310003%3B" === parts[num7]) {
                  dependencyMap = "iso-8859-1";
                  str16 = "iso-8859-1";
                }
                length = parts.length;
                tmp15 = str16;
                tmp13 = num7;
              }
              num7 = length + 1;
              tmp12 = tmp15;
              num6 = tmp13;
              tmp11 = tmp15;
              num4 = tmp13;
            } while (num7 < parts.length);
          }
        }
        const obj5 = Object.create(null);
        let num10 = 0;
        tmp19 = obj5;
        if (0 < parts.length) {
          while (true) {
            if (num10 !== num4) {
              let index1;
              let maybeMapResult;
              let tmp27;
              let arr11 = parts[num10];
              let index = arr11.indexOf("]=");
              if (-1 === index) {
                index1 = arr11.indexOf("=");
              } else {
                index1 = index + 1;
              }
              if (-1 === index1) {
                let str29 = "key";
                let tmp33 = "";
                let decoderResult = obj.decoder(arr11, obj.decoder, tmp11, "key");
                if (obj.strictNullHandling) {
                  tmp33 = null;
                }
                maybeMapResult = tmp33;
                tmp27 = decoderResult;
              } else {
                let str57 = "key";
                let decoderResult1 = obj.decoder(arr11.slice(0, index1), obj.decoder, tmp11, "key");
                let tmp129 = obj(1288);
                let maybeMap = tmp129.maybeMap;
                let substr = arr11.slice(index1 + 1);
                let num11 = 0;
                if (isArray(obj5[decoderResult1])) {
                  num11 = obj5[decoderResult1].length;
                }
                if (typeof parseArrayValue !== "function") {
                  break;
                } else {
                  let parts1;
                  if (substr) {
                    if (typeof substr === "string") {
                      if (obj.comma) {
                        if (substr.indexOf(",") > -1) {
                          parts1 = substr.split(",");
                          maybeMapResult = maybeMap(parts1, (arg0) => obj.decoder(arg0, obj.decoder, c1, "value"));
                          tmp27 = decoderResult1;
                        }
                      }
                    }
                  }
                  parts1 = substr;
                  if (obj.throwOnLimitExceeded) {
                    parts1 = substr;
                    if (num11 >= obj.arrayLimit) {
                      let str25 = "Array limit exceeded. Only ";
                      let str26 = "s";
                      let _RangeError = RangeError;
                      let text1 = `Array limit exceeded. Only ${obj.arrayLimit}`;
                      if (1 === obj.arrayLimit) {
                        str26 = "";
                      }
                      let _HermesInternal = HermesInternal;
                      let str27 = " allowed in an array.";
                      let str28 = " element";
                      let self = this;
                      let self2 = this;
                      let _RangeError1 = new _RangeError(text1 + " element" + str26 + " allowed in an array.");
                      throw _RangeError1;
                    }
                  }
                }
              }
              let tmp34 = maybeMapResult && obj.interpretNumericEntities && tmp18;
              let replaced = maybeMapResult;
              if (tmp34) {
                let _String = String;
                let str30 = String(maybeMapResult);
                if (typeof interpretNumericEntities === "function") {
                  replaced = str30.replace(/&#(\d+);/g, (arg0, match) => String.fromCharCode(parseInt(match, 10)));
                } else {
                  let str59 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              let tmp37 = replaced;
              if (arr11.indexOf("[]=") > -1) {
                let tmp39 = replaced;
                if (isArray(replaced)) {
                  let items = [replaced];
                  tmp39 = items;
                }
                tmp37 = tmp39;
              }
              let callResult = hasOwnProperty.call(obj5, tmp27);
              if (callResult) {
                if ("combine" === obj.duplicates) {
                  let obj3 = obj(1288);
                  obj5[tmp27] = obj3.combine(obj5[tmp27], tmp37);
                }
              }
              if (callResult) {
                callResult = "last" !== obj.duplicates;
              }
              if (!callResult) {
                obj5[tmp27] = tmp37;
              }
            }
            num10 = num10 + 1;
            tmp19 = obj5;
          }
          throw new TypeError("Trying to call a non-function");
        }
      }
      const tmp43 = obj.plainObjects ? Object.create(null) : {};
      const _Object = Object;
      const keys = Object.keys(tmp19);
      let mergeResult = tmp43;
      let num16 = 0;
      let tmp46 = tmp43;
      if (0 < keys.length) {
        while (typeof parseQueryStringKeys === "function") {
          let tmp50;
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
                let _Object2 = Object;
              }
              let arr = items1.push(substr1);
            }
            if (obj.depth > 0) {
              let obj12 = /(\[[^[\]]*])/g;
              let match1 = obj12.exec(replaced1);
              match = match1;
              if (null !== match1) {
                let num17 = 0;
                let tmp59 = match1;
                match = match1;
                if (0 < obj.depth) {
                  while (true) {
                    if (!obj.plainObjects) {
                      let _Object3 = Object;
                      let arr8 = tmp59[1];
                      if (hasOwnProperty.call(Object.prototype, arr8.slice(1, -1))) {
                        if (!obj.allowPrototypes) {
                          break;
                        }
                      }
                      break;
                    }
                    let arr3 = items1.push(tmp59[1]);
                    match = tmp59;
                    if (obj.depth > 0) {
                      let match2 = obj12.exec(replaced1);
                      match = match2;
                      if (null !== match2) {
                        num17 = num17 + 1;
                        tmp59 = match2;
                        match = match2;
                      }
                      continue;
                    }
                  }
                }
              }
            }
            if (match) {
              if (true === obj.strictDepth) {
                let _RangeError3 = RangeError;
                let str45 = "Input depth exceeded depth option of ";
                let self5 = this;
                let str46 = " and strictDepth is true";
                let self6 = this;
                let rangeError = new RangeError("Input depth exceeded depth option of " + obj.depth + " and strictDepth is true");
                throw rangeError;
              } else {
                let arr4 = items1.push(`[${arr6.slice(tmp51.index)}]`);
              }
            }
            let num18 = 0;
            if (items1.length > 0) {
              num18 = 0;
              if ("[]" === items1[items1.length - 1]) {
                let substr2 = items1.slice(0, -1);
                let joined = substr2.join("");
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
            let tmp61 = arr5;
            if (typeof str !== "string") {
              if (typeof parseArrayValue === "function") {
                let parts2;
                if (arr5) {
                  if (typeof arr5 === "string") {
                    if (obj.comma) {
                      if (arr5.indexOf(",") > -1) {
                        parts2 = arr5.split(",");
                        tmp61 = parts2;
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
                    let _RangeError2 = RangeError;
                    let text2 = `Array limit exceeded. Only ${obj.arrayLimit}`;
                    if (1 === obj.arrayLimit) {
                      str40 = "";
                    }
                    let _HermesInternal2 = HermesInternal;
                    let str41 = " allowed in an array.";
                    let str42 = " element";
                    let self3 = this;
                    let self4 = this;
                    let _RangeError21 = new _RangeError2(text2 + " element" + str40 + " allowed in an array.");
                    throw _RangeError21;
                  }
                }
              } else {
                let str61 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            let diff = items1.length - 1;
            let tmp67 = tmp61;
            let tmp68 = tmp61;
            if (0 <= diff) {
              while (true) {
                let obj6;
                let str43 = items1[diff];
                if ("[]" === str43) {
                  if (obj.parseArrays) {
                    let combineResult;
                    if (!obj.allowEmptyArrays) {
                      let obj7 = obj(1288);
                      combineResult = obj7.combine([], tmp67);
                    } else if ("" === tmp67) {
                      combineResult = [];
                    }
                    obj6 = combineResult;
                    diff = diff - 1;
                    tmp67 = obj6;
                    tmp68 = obj6;
                    if (0 > diff) {
                      break;
                    }
                  }
                }
                let tmp71 = obj.plainObjects ? Object.create(null) : {};
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
                    obj6 = { 0: null };
                    obj6[0] = tmp67;
                  }
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
                            items2[parsed] = tmp67;
                            obj6 = items2;
                          }
                        }
                      }
                    }
                  }
                }
                obj6 = tmp71;
                if ("__proto__" !== replaced2) {
                  tmp71[replaced2] = tmp67;
                  obj6 = tmp71;
                }
              }
            }
            tmp50 = tmp68;
          }
          let obj8 = obj(1288);
          mergeResult = obj8.merge(mergeResult, tmp50, obj);
          num16 = num16 + 1;
          tmp46 = mergeResult;
        }
        throw new TypeError("Trying to call a non-function");
      }
      let compactResult = tmp46;
      if (true !== obj.allowSparse) {
        const obj9 = obj(1288);
        compactResult = obj9.compact(tmp46);
      }
      return compactResult;
    }
  }
  if (obj.plainObjects) {
    obj10 = Object.create(null);
  } else {
    obj10 = {};
  }
  return obj10;
};