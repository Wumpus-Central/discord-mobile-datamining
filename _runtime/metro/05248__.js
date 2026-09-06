// _runtime/metro/05248__.js
import _wrapNativeSuperDefault from "00158__wrapNativeSuper.js";
import _modDef5249 from "05249__.js";
import calculateGPSValueDefault from "../05251_calculateGPSValue.js";
import _slicedToArray from "00032__.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ParseError = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function readTags(_raw, buffer, arg2) {
  try {
    let str = _raw._raw;
    ({ doc, raw } = (function getDocument(byteLength, arg1) {
      let obj = _modDef5249;
      value = obj.get(arg1);
      if (value) {
        let str2 = byteLength;
        if (typeof byteLength !== "string") {
          str2 = ParseError(tmp[7]).getStringFromDataView(byteLength, 0, byteLength.byteLength);
          const obj3 = ParseError(tmp[7]);
        }
        obj = {
          doc: parseFromString(
            value,
            str2.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1"),
          ),
          raw: str2,
        };
        return obj;
      } else {
        const _console = console;
        console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
        const _Error = Error;
        const error = new Error();
        throw error;
      }
      tmp = dependencyMap;
    })(buffer, arg2));
    if (!str) {
      str = "";
    }
    _raw._raw = str + raw;
    const tmp4 = (function getDocument(byteLength, arg1) {
      let obj = _modDef5249;
      value = obj.get(arg1);
      if (value) {
        let str2 = byteLength;
        if (typeof byteLength !== "string") {
          str2 = ParseError(tmp[7]).getStringFromDataView(byteLength, 0, byteLength.byteLength);
          const obj3 = ParseError(tmp[7]);
        }
        obj = {
          doc: parseFromString(
            value,
            str2.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1"),
          ),
          raw: str2,
        };
        return obj;
      } else {
        const _console = console;
        console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
        const _Error = Error;
        const error = new Error();
        throw error;
      }
      tmp = dependencyMap;
    })(buffer, arg2);
    const tmp6 = getRDF(doc);
    ParseError(5213).objectAssign(_raw, parseXMPObject(convertToObject(tmp6, true)));
    return true;
  } catch (err) {
    return false;
  }
}
function parseFromString(parseFromString, tmp13Result) {
  try {
    const parseFromStringResult = parseFromString.parseFromString(tmp13Result, "application/xml");
    const elements = parseFromStringResult.getElementsByTagName("parsererror");
    if (elements.length > 0) {
      const tmp10 = new closure_8(elements[0].textContent);
      throw tmp10;
    } else {
      return parseFromStringResult;
    }
  } catch (tmp12) {
    if ("ParseError" === tmp12.name) {
      if (obj2.isMissingNamespaceError(tmp12)) {
        if (!tmp4) {
          return parseFromString(tmp2, tmp13(5250).addMissingNamespaces(tmp), true);
        }
      }
      obj2 = ParseError(5250);
      tmp13 = ParseError;
    }
    throw tmp12;
  }
}
function getRDF(doc) {
  let num = 0;
  if (0 < doc.childNodes.length) {
    while ("x:xmpmeta" !== doc.childNodes[num].tagName) {
      if ("rdf:RDF" === doc.childNodes[num].tagName) {
        return doc.childNodes[num];
      } else {
        num = num + 1;
      }
    }
    return getRDF(doc.childNodes[num]);
  }
  const error = new Error();
  throw error;
}
function convertToObject(childNodes, arg1) {
  let length;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let items = [];
  let num = 0;
  if (0 < childNodes.childNodes.length) {
    do {
      let arr = items.push(childNodes.childNodes[num]);
      num = num + 1;
      length = childNodes.childNodes.length;
    } while (num < length);
  }
  let tmp2 = 1 === items.length;
  if (tmp2) {
    tmp2 = "#text" === items[0].nodeName;
  }
  if (tmp2) {
    if (flag) {
      let nodeValue = {};
    } else {
      nodeValue = items[0].nodeValue;
    }
  } else {
    nodeValue = {};
    const item = items.forEach((nodeName) => {
      let length;
      nodeName = nodeName.nodeName;
      if (nodeName) {
        nodeName = "#text" !== nodeName.nodeName;
      }
      if (nodeName) {
        let obj = {};
        let num3 = 0;
        if (0 < nodeName.attributes.length) {
          do {
            let _decodeURIComponent = decodeURIComponent;
            let _escape = escape;
            obj[nodeName.attributes[num3].nodeName] = decodeURIComponent(escape(nodeName.attributes[num3].value));
            num3 = num3 + 1;
            length = nodeName.attributes.length;
          } while (num3 < length);
        }
        obj = { attributes: null, value: null };
        obj.attributes = obj;
        obj.value = convertToObject(nodeName);
        if (undefined !== nodeValue[nodeName.nodeName]) {
          const _Array = Array;
          if (!Array.isArray(tmp3[nodeName.nodeName])) {
            const items = [tmp3[nodeName.nodeName]];
            tmp3[nodeName.nodeName] = items;
          }
          tmp3[nodeName.nodeName].push(obj);
        } else {
          tmp3[nodeName.nodeName] = obj;
        }
      }
    });
    return nodeValue;
  }
}
function parseXMPObject(str) {
  const obj = {};
  if (typeof str === "string") {
    return str;
  } else {
    for (const key10002 in arg0) {
      let tmp5 = arg0[key10002];
      let _Array = Array;
      let arr2 = tmp5;
      if (!Array.isArray(tmp5)) {
        let items = [tmp5];
        arr2 = items;
      }
      let item = arr2.forEach((attributes) => {
        const obj = ParseError(5213);
        obj.objectAssign(obj, parseNodeAttributesAsTags(attributes.attributes));
        if (typeof attributes.value === "object") {
          ParseError(5213).objectAssign(obj, parseNodeChildrenAsTags(attributes.value));
          const tmpResult = ParseError(5213);
        }
      });
      continue;
    }
    return obj;
  }
}
function parseNodeAttributesAsTags(attributes) {
  let obj = {};
  for (const key10005 in arg0) {
    try {
      if (isTagAttribute(key10005)) {
        obj = { value: arg0[key10005], attributes: {}, description: null };
        let tmp3 = getLocalName(key10005);
        obj.description = getDescription(arg0[key10005], key10005);
        obj[tmp3] = obj;
      }
      continue;
    } catch (err) {
      continue;
    }
  }
  return obj;
}
function isTagAttribute(key10005) {
  let tmp = "rdf:parseType" !== key10005;
  if (tmp) {
    tmp = "xmlns" !== key10005.split(":")[0];
  }
  return tmp;
}
function isNamespaceDefinition(key10005) {
  return "xmlns" === key10005.split(":")[0];
}
function getLocalName(key10005) {
  let str = "RatingPercent";
  if (!obj.test(key10005)) {
    str = key10005.split(":")[1];
  }
  return str;
}
function getDescription(arr) {
  if (Array.isArray(arr)) {
    const tmp11 = (function getDescriptionOfArray(arr) {
      const mapped = arr.map((value) => {
        if (undefined !== value.value) {
          let tmp2 = closure_1_18(value.value);
        } else {
          tmp2 = closure_1_18(value);
        }
        return tmp2;
      });
      return mapped.join(", ");
    })(arr);
    let tmp12 = tmp11;
    if (tmp2) {
      tmp12 = tmp11;
      if (typeof calculateGPSValueDefault[tmp2] === "function") {
        tmp12 = tmp13(5251)[tmp2](arr, tmp11);
        const tmp13Result = tmp13(5251);
      }
      tmp13 = importDefault;
    }
    return tmp12;
  } else if (typeof arr === "object") {
    return (function getDescriptionOfObject(arr) {
      const items = [];
      for (const key10024 in arg0) {
        let str8 = "CreatorCity";
        if ("CiAdrCity" !== key10024) {
          let str = "CreatorCountry";
          if ("CiAdrCtry" !== key10024) {
            let str2 = "CreatorAddress";
            if ("CiAdrExtadr" !== key10024) {
              let str3 = "CreatorPostalCode";
              if ("CiAdrPcode" !== key10024) {
                let str4 = "CreatorRegion";
                if ("CiAdrRegion" !== key10024) {
                  let str5 = "CreatorWorkEmail";
                  if ("CiEmailWork" !== key10024) {
                    let str6 = "CreatorWorkPhone";
                    if ("CiTelWork" !== key10024) {
                      let str7 = "CreatorWorkUrl";
                      if ("CiUrlWork" !== key10024) {
                        str7 = key10024;
                      }
                      str6 = str7;
                    }
                    str5 = str6;
                  }
                  str4 = str5;
                }
                str3 = str4;
              }
              str2 = str3;
            }
            str = str2;
          }
          str8 = str;
        }
        let _HermesInternal = HermesInternal;
        arr = items.push("" + str8 + ": " + getDescription(arg0[key10024].value));
        continue;
      }
      return items.join("; ");
    })(arr);
  } else {
    try {
      if (tmp2) {
        if (typeof calculateGPSValueDefault[tmp2] === "function") {
          let decodeURIComponentResult = calculateGPSValueDefault[tmp2](arr);
          const tmp4Result = calculateGPSValueDefault;
        }
        return decodeURIComponentResult;
      }
      const _decodeURIComponent = decodeURIComponent;
      const _escape = escape;
      decodeURIComponentResult = decodeURIComponent(escape(arr));
    } catch (err) {
      return tmp;
    }
  }
}
function parseNodeChildrenAsTags(value) {
  const obj = {};
  for (const key10005 in arg0) {
    try {
      if (!isNamespaceDefinition(key10005)) {
        let tmp3 = getLocalName(key10005);
        obj[tmp3] = parseNodeAsTag(arg0[key10005], key10005);
      }
      continue;
    } catch (err) {
      continue;
    }
  }
  return obj;
}
function parseNodeAsTag(attributes, key10005) {
  if (Array.isArray(attributes)) {
    let tmp9 = parseNodeAsSimpleValue(attributes[attributes.length - 1], key10005);
  } else {
    let tmp = "Resource" === attributes.attributes["rdf:parseType"] && typeof attributes.value === "string";
    if (tmp) {
      tmp = "" === attributes.value.trim();
    }
    if (tmp) {
      let obj = { value: "", attributes: {}, description: "" };
      tmp9 = obj;
    } else {
      let tmp2 = "Resource" === attributes.attributes["rdf:parseType"];
      if (tmp2) {
        tmp2 = undefined !== attributes.value["rdf:value"];
      }
      if (!tmp2) {
        tmp2 =
          undefined !== attributes.value["rdf:Description"] &&
          undefined !== attributes.value["rdf:Description"].value["rdf:value"];
        let tmp3 =
          undefined !== attributes.value["rdf:Description"] &&
          undefined !== attributes.value["rdf:Description"].value["rdf:value"];
      }
      if (tmp2) {
        tmp9 = parseNodeAsSimpleRdfDescription(attributes, key10005);
      } else {
        let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
        if (!tmp4) {
          tmp4 =
            undefined !== attributes.value["rdf:Description"] &&
            undefined === attributes.value["rdf:Description"].value["rdf:value"];
          let tmp5 =
            undefined !== attributes.value["rdf:Description"] &&
            undefined === attributes.value["rdf:Description"].value["rdf:value"];
        }
        if (tmp4) {
          tmp9 = parseNodeAsStructureRdfDescription(attributes, key10005);
        } else {
          let _Object = Object;
          let tmp6 = 0 === Object.keys(attributes.value).length;
          if (tmp6) {
            tmp6 = undefined === attributes.attributes["xml:lang"];
          }
          if (tmp6) {
            tmp6 = undefined === attributes.attributes["rdf:resource"];
          }
          if (tmp6) {
            const tmp16 = parseNodeAttributesAsTags(attributes.attributes);
            obj = { value: tmp16, attributes: {}, description: getDescription(tmp16, key10005) };
            tmp9 = obj;
          } else {
            value = attributes.value;
            if (undefined !== tmp7) {
              value = attributes.value;
              const prop = value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"].value["rdf:li"];
              obj = {};
              for (const key10070 in arg0.attributes) {
                let tmp11 = "rdf:parseType" === key10070;
                if (!tmp11) {
                  tmp11 = "rdf:resource" === key10070;
                }
                if (!tmp11) {
                  tmp11 = "xmlns" === key10070.split(":")[0];
                }
                if (tmp11) {
                  continue;
                } else {
                  let obj1 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
                  let str9 = "RatingPercent";
                  if (!obj1.test(key10070)) {
                    str9 = key10070.split(":")[1];
                  }
                  obj[str9] = arg0.attributes[key10070];
                  continue;
                }
                continue;
              }
              const items = [];
              if (undefined === prop) {
                let items1 = [];
              } else {
                const _Array = Array;
                items1 = prop;
                if (!Array.isArray(prop)) {
                  const items2 = [prop];
                  items1 = items2;
                }
              }
              const item = items1.forEach((attributes) => {
                let tmp2 = "Resource" === attributes.attributes["rdf:parseType"];
                if (tmp2) {
                  tmp2 = undefined !== attributes.value["rdf:value"];
                }
                if (!tmp2) {
                  tmp2 =
                    undefined !== attributes.value["rdf:Description"] &&
                    undefined !== attributes.value["rdf:Description"].value["rdf:value"];
                  const tmp3 =
                    undefined !== attributes.value["rdf:Description"] &&
                    undefined !== attributes.value["rdf:Description"].value["rdf:value"];
                }
                if (tmp2) {
                  value = parseNodeAsSimpleRdfDescription(attributes);
                } else {
                  let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
                  if (!tmp4) {
                    tmp4 =
                      undefined !== attributes.value["rdf:Description"] &&
                      undefined === attributes.value["rdf:Description"].value["rdf:value"];
                    const tmp5 =
                      undefined !== attributes.value["rdf:Description"] &&
                      undefined === attributes.value["rdf:Description"].value["rdf:value"];
                  }
                  if (tmp4) {
                    value = parseNodeAsStructureRdfDescription(attributes).value;
                  } else {
                    const _Object = Object;
                    let tmp7 = 0 === Object.keys(attributes.value).length;
                    if (tmp7) {
                      tmp7 = undefined === attributes.attributes["xml:lang"];
                    }
                    if (tmp7) {
                      tmp7 = undefined === attributes.attributes["rdf:resource"];
                    }
                    if (tmp7) {
                      const tmp10 = parseNodeAttributesAsTags(attributes.attributes);
                      getDescription(tmp10, undefined);
                      value = tmp10;
                    } else {
                      value = parseNodeAsSimpleValue(attributes);
                    }
                  }
                }
                items.push(value);
              });
              obj1 = { value: items, attributes: obj, description: null };
              obj = getDescription(items, key10005);
              obj1.description = obj;
              const iter = value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"];
            } else {
              tmp9 = parseNodeAsSimpleValue(attributes, key10005);
            }
            tmp7 = value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"];
          }
        }
      }
    }
  }
  return tmp9;
}
function parseNodeAsSimpleRdfDescription(attributes, key10005) {
  let obj = {};
  for (const key10009 in arg0.attributes) {
    let tmp = "rdf:parseType" === key10009;
    if (!tmp) {
      tmp = "rdf:resource" === key10009;
    }
    if (!tmp) {
      tmp = "xmlns" === key10009.split(":")[0];
    }
    if (tmp) {
      continue;
    } else {
      let obj1 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str = "RatingPercent";
      if (!obj1.test(key10009)) {
        str = key10009.split(":")[1];
      }
      obj[str] = arg0.attributes[key10009];
      continue;
    }
    continue;
  }
  let iter = attributes;
  if (undefined !== attributes.value["rdf:Description"]) {
    iter = attributes.value["rdf:Description"];
  }
  obj = {};
  for (const key10035 in iter.attributes) {
    let tmp2 = "rdf:parseType" === key10035;
    if (!tmp2) {
      tmp2 = "rdf:resource" === key10035;
    }
    if (!tmp2) {
      tmp2 = "xmlns" === key10035.split(":")[0];
    }
    if (tmp2) {
      continue;
    } else {
      let obj5 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str2 = "RatingPercent";
      if (!obj5.test(key10035)) {
        str2 = key10035.split(":")[1];
      }
      obj[str2] = iter.attributes[key10035];
      continue;
    }
    continue;
  }
  obj = {};
  for (const key10052 in iter.value) {
    let tmp3 = "rdf:value" === key10052;
    if (!tmp3) {
      tmp3 = "xmlns" === key10052.split(":")[0];
    }
    if (tmp3) {
      continue;
    } else {
      let obj7 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str3 = "RatingPercent";
      if (!obj7.test(key10052)) {
        str3 = key10052.split(":")[1];
      }
      obj[str3] = iter.value[key10052].value;
      continue;
    }
    continue;
  }
  ParseError(5213).objectAssign(obj, obj, obj);
  const prop = iter.value["rdf:value"];
  obj1 = { value: tmp6, attributes: obj, description: getDescription(tmp6, key10005) };
  return obj1;
}
function parseNodeAsStructureRdfDescription(value, key10005) {
  let obj = { value: {}, attributes: {} };
  let iter = value;
  if (undefined !== value.value["rdf:Description"]) {
    ParseError(5213).objectAssign(obj.value, parseNodeAttributesAsTags(value.value["rdf:Description"].attributes));
    const obj4 = ParseError(5213);
    obj = {};
    for (const key10008 in arg0.attributes) {
      let tmp = "rdf:parseType" === key10008;
      if (!tmp) {
        tmp = "rdf:resource" === key10008;
      }
      if (!tmp) {
        tmp = "xmlns" === key10008.split(":")[0];
      }
      if (tmp) {
        continue;
      } else {
        let obj2 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
        let str = "RatingPercent";
        if (!obj2.test(key10008)) {
          str = key10008.split(":")[1];
        }
        obj[str] = arg0.attributes[key10008];
        continue;
      }
      continue;
    }
    ParseError(5213).objectAssign(obj.attributes, obj);
    iter = value.value["rdf:Description"];
    const obj5 = ParseError(5213);
  }
  ParseError(5213).objectAssign(obj.value, parseNodeChildrenAsTags(iter.value));
  obj.description = getDescription(obj.value, key10005);
  return obj;
}
function parseNodeAsSimpleValue(attributes, key10005) {
  let tmp2 = attributes.attributes && attributes.attributes["rdf:resource"];
  if (!tmp2) {
    value = attributes.value;
    attributes = {};
    let tmp3 = value;
    if (typeof value !== "string") {
      tmp3 = attributes;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = attributes;
        while (keys[tmp] !== undefined) {
          let tmp11 = value[tmp4];
          let _Array = Array;
          let arr2 = tmp11;
          if (!Array.isArray(tmp11)) {
            let items = [tmp11];
            arr2 = items;
          }
          let item = arr2.forEach((attributes) => {
            const obj = ParseError(5213);
            obj.objectAssign(obj, parseNodeAttributesAsTags(attributes.attributes));
            if (typeof attributes.value === "object") {
              ParseError(5213).objectAssign(obj, parseNodeChildrenAsTags(attributes.value));
              const tmpResult = ParseError(5213);
            }
          });
          continue;
        }
      }
    }
    tmp2 = tmp3;
  }
  attributes = { value: tmp2, attributes: null, description: null };
  attributes = {};
  for (const key10021 in arg0.attributes) {
    let tmp6 = "rdf:parseType" === key10021;
    if (!tmp6) {
      tmp6 = "rdf:resource" === key10021;
    }
    if (!tmp6) {
      tmp6 = "xmlns" === key10021.split(":")[0];
    }
    if (tmp6) {
      continue;
    } else {
      let obj4 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str = "RatingPercent";
      if (!obj4.test(key10021)) {
        str = key10021.split(":")[1];
      }
      attributes[str] = arg0.attributes[key10021];
      continue;
    }
    continue;
  }
  attributes.attributes = attributes;
  attributes.description = getDescription(tmp2, key10005);
  return attributes;
}
class ParseError {
  constructor(arg0) {
    self = this;
    tmp = closure_4(this, ParseError);
    items = [];
    items[0] = global;
    tmp2 = metroRequire;
    obj = metroRequire(ParseError);
    tmp3 = hasOwnProperty;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "ParseError";
    return tmp3Result;
  }
}
_inherits(ParseError, _wrapNativeSuperDefault(Error));
let closure_8 = _createClass(ParseError);

export default {
  read(buffer, arr, arg2) {
    let length;
    let length2;
    let length3;
    const obj = {};
    if (typeof buffer === "string") {
      readTags(obj, buffer, arg2);
      return obj;
    } else {
      if (0 === arr.length) {
        let items = [];
      } else {
        const substr = arr.slice(0, 1);
        const _Uint8Array5 = Uint8Array;
        const uint8Array = new Uint8Array(substr.reduce((acc, item) => acc + item.length, 0));
        let num2 = 0;
        let num = 0;
        if (0 < substr.length) {
          do {
            arr = substr[num2];
            buffer = buffer.buffer;
            let _Uint8Array = Uint8Array;
            let tmp3 = new.target;
            let tmp4 = new.target;
            let uint8Array1 = new Uint8Array(buffer.slice(arr.dataOffset, arr.dataOffset + arr.length));
            let result = uint8Array.set(uint8Array1, num);
            num = num + arr.length;
            num2 = num2 + 1;
            length = substr.length;
          } while (num2 < length);
        }
        const _DataView = DataView;
        const dataView = new DataView(uint8Array.buffer);
        const items1 = [dataView];
        items = items1;
        if (arr.length > 1) {
          const substr1 = arr.slice(1);
          const _Uint8Array6 = Uint8Array;
          const uint8Array2 = new Uint8Array(substr1.reduce((acc, item) => acc + item.length, 0));
          let num4 = 0;
          let num3 = 0;
          if (0 < substr1.length) {
            do {
              let arr5 = substr1[num4];
              let buffer1 = buffer.buffer;
              let _Uint8Array2 = Uint8Array;
              let tmp12 = new.target;
              let tmp13 = new.target;
              let uint8Array3 = new Uint8Array(buffer1.slice(arr5.dataOffset, arr5.dataOffset + arr5.length));
              let result1 = uint8Array2.set(uint8Array3, num3);
              num3 = num3 + arr5.length;
              num4 = num4 + 1;
              length2 = substr1.length;
            } while (num4 < length2);
          }
          const _DataView2 = DataView;
          const dataView1 = new DataView(uint8Array2.buffer);
          arr = items1.push(dataView1);
          items = items1;
        }
      }
      const tmp23 = _slicedToArray(items, 2);
      let tmp25Result = readTags(obj, tmp23[0], arg2);
      if (tmp23[1]) {
        if (!tmp25Result) {
          tmp25Result = tmp25(obj, tmp24, arg2);
        }
        if (!tmp25Result) {
          delete tmp[tmp2];
          const _Uint8Array3 = Uint8Array;
          const uint8Array4 = new Uint8Array(arr.reduce((acc, item) => acc + item.length, 0));
          let num7 = 0;
          let num8 = 0;
          if (0 < arr.length) {
            do {
              let arr7 = arr[num7];
              let buffer2 = buffer.buffer;
              let _Uint8Array4 = Uint8Array;
              let tmp31 = new.target;
              let tmp32 = new.target;
              let uint8Array5 = new Uint8Array(buffer2.slice(arr7.dataOffset, arr7.dataOffset + arr7.length));
              let result2 = uint8Array4.set(uint8Array5, num8);
              num8 = num8 + arr7.length;
              num7 = num7 + 1;
              length3 = arr.length;
            } while (num7 < length3);
          }
          const _DataView3 = DataView;
          const dataView2 = new DataView(uint8Array4.buffer);
          tmp25Result = tmp25(obj, dataView2, arg2);
        }
      }
      return obj;
    }
  },
};
