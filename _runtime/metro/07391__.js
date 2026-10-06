// === Module 7391: ? ===

// Module 7391
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import _mod7356 from "module_7356" /* 7356 */;
import _modDef7392 from "module_7392" /* 7392 */;
import _mod7393 from "module_7393" /* 7393 */;
import _slicedToArrayDefault from "_slicedToArray" /* 7394 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let nodeName, set, set2, set3;

const f94902 = (attributes) => {
  obj = _mod7356;
  obj.objectAssign(obj, parseNodeAttributesAsTags(attributes.attributes));
  const tmp3 = obj;
  if (typeof attributes.value === "object") {
    const tmpResult = _mod7356;
    tmpResult.objectAssign(tmp3, parseNodeChildrenAsTags(attributes.value));
  }
};
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function readTags(_raw, buffer, arg2) {
  let doc;
  let raw;
  function getDocument(byteLength, arg1) {
    let str4;
    const obj = _modDef7392;
    const value = obj.get(arg1);
    if (value) {
      let str2 = byteLength;
      if (typeof byteLength !== "string") {
        const obj3 = _mod7356;
        str2 = obj3.getStringFromDataView(byteLength, 0, byteLength.byteLength);
      }
      const obj2 = { doc: parseFromString(value, str4.replace(/(<\?xpacket end=".*"\?>).+$/, "$1")), raw: str2 };
      str4 = str2.replace(/^.+(<\?xpacket begin)/, "$1");
      return obj2;
    } else {
      const _console = console;
      console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error();
      throw error;
    }
  }
  try {
    let str = _raw._raw;
    ({ doc, raw } = getDocument(buffer, arg2));
    getDocument(buffer, arg2);
    if (!str) {
      str = "";
    }
    _raw._raw = str + raw;
    const tmp6 = getRDF(doc);
    let obj = _mod7356;
    obj.objectAssign(_raw, parseXMPObject(convertToObject(tmp6, true)));
    return true;
  } catch (err) {
    return false;
  }
}
function parseFromString(parseFromString, tmp7Result, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  try {
    const parseFromStringResult = parseFromString.parseFromString(tmp7Result, "application/xml");
    const elements = parseFromStringResult.getElementsByTagName("parsererror");
    if (elements.length > 0) {
      const self = this;
      const self2 = this;
      const tmp4 = new closure_8(elements[0].textContent);
      throw tmp4;
    } else {
      return parseFromStringResult;
    }
  } catch (tmp6) {
    if ("ParseError" === tmp6.name) {
      const obj2 = _mod7393;
      if (obj2.isMissingNamespaceError(tmp6)) {
        if (!flag) {
          tmp7Result = _mod7393;
          return parseFromString(parseFromString, tmp7Result.addMissingNamespaces(tmp7Result), true);
        }
      }
    }
    throw tmp6;
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
  let attributes;
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
    let obj2;
    if (flag) {
      obj2 = {};
    } else {
      obj2 = items[0].nodeValue;
    }
    attributes = obj2;
  } else {
    attributes = {};
    const item = items.forEach((nodeName) => {
      let length;
      nodeName = nodeName.nodeName && "#text" !== nodeName.nodeName;
      if (nodeName) {
        attributes = {};
        let num3 = 0;
        if (0 < nodeName.attributes.length) {
          do {
            let _decodeURIComponent = decodeURIComponent;
            let _escape = escape;
            attributes[nodeName.attributes[num3].nodeName] = decodeURIComponent(escape(nodeName.attributes[num3].value));
            num3 = num3 + 1;
            length = nodeName.attributes.length;
          } while (num3 < length);
        }
        const obj2 = { attributes, value: convertToObject(nodeName) };
        if (undefined !== attributes[nodeName.nodeName]) {
          const _Array = Array;
          if (!Array.isArray(attributes[nodeName.nodeName])) {
            const items = [attributes[nodeName.nodeName]];
            attributes[nodeName.nodeName] = items;
          }
          const arr2 = attributes[nodeName.nodeName];
          arr2.push(obj2);
        } else {
          attributes[nodeName.nodeName] = obj2;
        }
      }
    });
  }
  return attributes;
}
function parseXMPObject(str) {
  const obj = {};
  if (typeof str === "string") {
    return str;
  } else {
    for (const key10002 in str) {
      let tmp5 = str[key10002];
      let _Array = Array;
      let arr2 = tmp5;
      if (!Array.isArray(tmp5)) {
        let items = [tmp5];
        arr2 = items;
      }
      let item = arr2.forEach(f94902);
      continue;
    }
    return obj;
  }
}
function parseNodeAttributesAsTags(attributes) {
  const obj = {};
  for (const key10005 in attributes) {
    try {
      if (isTagAttribute(key10005)) {
        let obj2 = { value: attributes[key10005], attributes: {}, description: getDescription(attributes[key10005], key10005) };
        let tmp3 = getLocalName(key10005);
        obj[tmp3] = obj2;
      }
      continue;
    } catch (err) {
      continue;
    }
  }
  return obj;
}
function isTagAttribute(key10005) {
  const tmp = "rdf:parseType" !== key10005 && "xmlns" !== key10005.split(":")[0];
  return tmp;
}
function isNamespaceDefinition(key10005) {
  return "xmlns" === key10005.split(":")[0];
}
function getLocalName(key10005) {
  let str = "RatingPercent";
  const obj = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
  if (!obj.test(key10005)) {
    str = key10005.split(":")[1];
  }
  return str;
}
function getDescription(arr) {
  function getDescriptionOfArray(arr) {
    const mapped = arr.map((value) => {
      let tmp2;
      if (undefined !== value.value) {
        tmp2 = closure_1_18(value.value);
      } else {
        tmp2 = closure_1_18(value);
      }
      return tmp2;
    });
    return mapped.join(", ");
  }
  function getDescriptionOfObject(arr) {
    const items = [];
    for (const key10024 in arr) {
      let str8 = "CreatorCity";
      let push = items.push;
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
      arr = push("" + str8 + ": " + getDescription(arr[key10024].value));
      continue;
    }
    return items.join("; ");
  }
  if (Array.isArray(arr)) {
    const tmp10 = getDescriptionOfArray(arr);
    let tmp11 = tmp10;
    if (arg1) {
      tmp11 = tmp10;
      if (typeof _slicedToArrayDefault[arg1] === "function") {
        const tmp12Result = _slicedToArrayDefault;
        tmp11 = tmp12Result[tmp](arr, tmp10);
      }
    }
    return tmp11;
  } else if (typeof arr === "object") {
    return getDescriptionOfObject(arr);
  } else {
    try {
      if (arg1) {
        let decodeURIComponentResult;
        if (typeof _slicedToArrayDefault[arg1] === "function") {
          const tmp3Result = _slicedToArrayDefault;
          decodeURIComponentResult = tmp3Result[tmp](arr);
        }
        return decodeURIComponentResult;
      }
      const _decodeURIComponent = decodeURIComponent;
      const _escape = escape;
      decodeURIComponentResult = decodeURIComponent(escape(arr));
    } catch (err) {
      return arr;
    }
  }
}
function parseNodeChildrenAsTags(value) {
  const obj = {};
  for (const key10005 in value) {
    try {
      if (!isNamespaceDefinition(key10005)) {
        let tmp3 = getLocalName(key10005);
        obj[tmp3] = parseNodeAsTag(value[key10005], key10005);
      }
      continue;
    } catch (err) {
      continue;
    }
  }
  return obj;
}
function parseNodeAsTag(attributes, key10005) {
  let tmp9;
  if (Array.isArray(attributes)) {
    tmp9 = parseNodeAsSimpleValue(attributes[attributes.length - 1], key10005);
  } else {
    let tmp = "Resource" === attributes.attributes["rdf:parseType"] && typeof attributes.value === "string";
    if (tmp) {
      const str2 = attributes.value;
      tmp = "" === str2.trim();
    }
    if (tmp) {
      tmp9 = { value: "", attributes: {}, description: "" };
      const obj3 = { value: "", attributes: {}, description: "" };
    } else {
      let tmp2 = "Resource" === attributes.attributes["rdf:parseType"] && undefined !== attributes.value["rdf:value"];
      if (!tmp2) {
        const tmp3 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
        tmp2 = tmp3;
      }
      if (tmp2) {
        tmp9 = parseNodeAsSimpleRdfDescription(attributes, key10005);
      } else {
        let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
        if (!tmp4) {
          const tmp5 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
          tmp4 = tmp5;
        }
        if (tmp4) {
          tmp9 = parseNodeAsStructureRdfDescription(attributes, key10005);
        } else {
          let _Object = Object;
          const tmp6 = 0 === Object.keys(attributes.value).length && undefined === attributes.attributes["xml:lang"] && undefined === attributes.attributes["rdf:resource"];
          if (tmp6) {
            const tmp15 = parseNodeAttributesAsTags(attributes.attributes);
            tmp9 = { value: tmp15, attributes: {}, description: getDescription(tmp15, key10005) };
            const obj4 = { value: tmp15, attributes: {}, description: getDescription(tmp15, key10005) };
          } else {
            let value = attributes.value;
            let tmp7 = value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"];
            if (undefined !== tmp7) {
              let items1;
              const value2 = attributes.value;
              const prop = (value2["rdf:Bag"] || value2["rdf:Seq"] || value2["rdf:Alt"]).value["rdf:li"];
              const obj = {};
              for (const key10070 in attributes.attributes) {
                let tmp11 = "rdf:parseType" === key10070 || "rdf:resource" === key10070 || "xmlns" === key10070.split(":")[0];
                if (tmp11) {
                  continue;
                } else {
                  let obj2 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
                  let str9 = "RatingPercent";
                  if (!obj2.test(key10070)) {
                    str9 = key10070.split(":")[1];
                  }
                  obj[str9] = attributes.attributes[key10070];
                  continue;
                }
                continue;
              }
              const items = [];
              if (undefined === prop) {
                items1 = [];
              } else {
                const _Array = Array;
                items1 = prop;
                if (!Array.isArray(prop)) {
                  const items2 = [prop];
                  items1 = items2;
                }
              }
              const item = items1.forEach((attributes) => {
                let value;
                let tmp2 = "Resource" === attributes.attributes["rdf:parseType"];
                const push = items.push;
                if (tmp2) {
                  tmp2 = undefined !== attributes.value["rdf:value"];
                }
                if (!tmp2) {
                  tmp2 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
                }
                if (tmp2) {
                  value = parseNodeAsSimpleRdfDescription(attributes);
                } else {
                  let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
                  if (!tmp4) {
                    tmp4 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
                  }
                  if (tmp4) {
                    value = parseNodeAsStructureRdfDescription(attributes).value;
                  } else {
                    const _Object = Object;
                    const tmp7 = 0 === Object.keys(attributes.value).length && undefined === attributes.attributes["xml:lang"] && undefined === attributes.attributes["rdf:resource"];
                    if (tmp7) {
                      const tmp10 = parseNodeAttributesAsTags(attributes.attributes);
                      getDescription(tmp10, undefined);
                      value = tmp10;
                    } else {
                      value = parseNodeAsSimpleValue(attributes);
                    }
                  }
                }
                push(value);
              });
              tmp9 = { value: items, attributes: obj, description: getDescription(items, key10005) };
              const obj5 = { value: items, attributes: obj, description: getDescription(items, key10005) };
            } else {
              tmp9 = parseNodeAsSimpleValue(attributes, key10005);
            }
          }
        }
      }
    }
  }
  return tmp9;
}
function parseNodeAsSimpleRdfDescription(attributes, key10005) {
  const obj = {};
  for (const key10009 in attributes.attributes) {
    let tmp = "rdf:parseType" === key10009 || "rdf:resource" === key10009 || "xmlns" === key10009.split(":")[0];
    if (tmp) {
      continue;
    } else {
      let obj2 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str = "RatingPercent";
      if (!obj2.test(key10009)) {
        str = key10009.split(":")[1];
      }
      obj[str] = attributes.attributes[key10009];
      continue;
    }
    continue;
  }
  let iter = attributes;
  if (undefined !== attributes.value["rdf:Description"]) {
    iter = attributes.value["rdf:Description"];
  }
  const obj3 = {};
  const objectAssign = _mod7356.objectAssign;
  _mod7356;
  for (const key10035 in iter.attributes) {
    let tmp3 = "rdf:parseType" === key10035 || "rdf:resource" === key10035 || "xmlns" === key10035.split(":")[0];
    if (tmp3) {
      continue;
    } else {
      let obj4 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str2 = "RatingPercent";
      if (!obj4.test(key10035)) {
        str2 = key10035.split(":")[1];
      }
      obj3[str2] = iter.attributes[key10035];
      continue;
    }
    continue;
  }
  const obj5 = {};
  for (const key10052 in iter.value) {
    let tmp4 = "rdf:value" === key10052 || "xmlns" === key10052.split(":")[0];
    if (tmp4) {
      continue;
    } else {
      let obj6 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str3 = "RatingPercent";
      if (!obj6.test(key10052)) {
        str3 = key10052.split(":")[1];
      }
      obj5[str3] = iter.value[key10052].value;
      continue;
    }
    continue;
  }
  objectAssign(obj, obj3, obj5);
  const prop = iter.value["rdf:value"];
  const obj7 = { value: prop.attributes && prop.attributes["rdf:resource"] || iter.value["rdf:value"].value, attributes: obj, description: getDescription(prop.attributes && prop.attributes["rdf:resource"] || iter.value["rdf:value"].value, key10005) };
  return obj7;
}
function parseNodeAsStructureRdfDescription(value, key10005) {
  let obj;
  obj = { value: {}, attributes: {}, description: getDescription(obj.value, key10005) };
  let iter = value;
  if (undefined !== value.value["rdf:Description"]) {
    const obj4 = _mod7356;
    obj4.objectAssign(obj.value, parseNodeAttributesAsTags(value.value["rdf:Description"].attributes));
    const obj5 = {};
    const objectAssign = _mod7356.objectAssign;
    const attributes = obj.attributes;
    _mod7356;
    for (const key10008 in value.attributes) {
      let tmp = "rdf:parseType" === key10008 || "rdf:resource" === key10008 || "xmlns" === key10008.split(":")[0];
      if (tmp) {
        continue;
      } else {
        let obj2 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
        let str = "RatingPercent";
        if (!obj2.test(key10008)) {
          str = key10008.split(":")[1];
        }
        obj5[str] = value.attributes[key10008];
        continue;
      }
      continue;
    }
    objectAssign(attributes, obj5);
    iter = value.value["rdf:Description"];
  }
  const obj3 = _mod7356;
  obj3.objectAssign(obj.value, parseNodeChildrenAsTags(iter.value));
  return obj;
}
function parseNodeAsSimpleValue(attributes, key10005) {
  let obj3;
  let tmp2 = attributes.attributes && attributes.attributes["rdf:resource"];
  if (!tmp2) {
    const value = attributes.value;
    let obj = {};
    let tmp3 = value;
    if (typeof value !== "string") {
      tmp3 = obj;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = obj;
        while (keys[tmp] !== undefined) {
          let tmp11 = value[tmp4];
          let _Array = Array;
          let arr2 = tmp11;
          if (!Array.isArray(tmp11)) {
            let items = [tmp11];
            arr2 = items;
          }
          let item = arr2.forEach(f94902);
          continue;
        }
      }
    }
    tmp2 = tmp3;
  }
  const obj2 = { value: tmp2, attributes: obj3, description: getDescription(tmp2, key10005) };
  obj3 = {};
  for (const key10021 in attributes.attributes) {
    let tmp6 = "rdf:parseType" === key10021 || "rdf:resource" === key10021 || "xmlns" === key10021.split(":")[0];
    if (tmp6) {
      continue;
    } else {
      let obj4 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
      let str = "RatingPercent";
      if (!obj4.test(key10021)) {
        str = key10021.split(":")[1];
      }
      obj3[str] = attributes.attributes[key10021];
      continue;
    }
    continue;
  }
  return obj2;
}
let obj = {
  read(buffer, arr, arg2) {
    let length;
    let length2;
    let length3;
    const f94900 = (acc, item) => acc + item.length;
    const obj = {};
    if (typeof buffer === "string") {
      readTags(obj, buffer, arg2);
      return obj;
    } else {
      let items;
      if (0 === arr.length) {
        items = [];
      } else {
        const substr = arr.slice(0, 1);
        const _Uint8Array5 = Uint8Array;
        const self15 = this;
        const self16 = this;
        const uint8Array = new Uint8Array(substr.reduce(f94900, 0));
        let num2 = 0;
        let num = 0;
        if (0 < substr.length) {
          do {
            arr = substr[num2];
            buffer = buffer.buffer;
            let _Uint8Array = Uint8Array;
            let self = this;
            let self2 = this;
            set = uint8Array.set;
            let uint8Array1 = new Uint8Array(buffer.slice(arr.dataOffset, arr.dataOffset + arr.length));
            let result = set(uint8Array1, num);
            num = num + arr.length;
            num2 = num2 + 1;
            length = substr.length;
          } while (num2 < length);
        }
        const _DataView = DataView;
        const self3 = this;
        const self4 = this;
        const dataView = new DataView(uint8Array.buffer);
        const items1 = [dataView];
        items = items1;
        if (arr.length > 1) {
          const push = items1.push;
          const substr1 = arr.slice(1);
          const _Uint8Array6 = Uint8Array;
          const self17 = this;
          const self18 = this;
          const uint8Array2 = new Uint8Array(substr1.reduce(f94900, 0));
          let num4 = 0;
          let num3 = 0;
          if (0 < substr1.length) {
            do {
              let arr5 = substr1[num4];
              let buffer1 = buffer.buffer;
              let _Uint8Array2 = Uint8Array;
              let self5 = this;
              let self6 = this;
              set2 = uint8Array2.set;
              let uint8Array3 = new Uint8Array(buffer1.slice(arr5.dataOffset, arr5.dataOffset + arr5.length));
              let set2Result = set2(uint8Array3, num3);
              num3 = num3 + arr5.length;
              num4 = num4 + 1;
              length2 = substr1.length;
            } while (num4 < length2);
          }
          const _DataView2 = DataView;
          const self7 = this;
          const self8 = this;
          const dataView1 = new DataView(uint8Array2.buffer);
          push(dataView1);
          items = items1;
        }
      }
      const tmp13 = _slicedToArray(items, 2);
      let tmp15Result = readTags(obj, tmp13[0], arg2);
      if (tmp13[1]) {
        if (!tmp15Result) {
          tmp15Result = readTags(obj, tmp14, arg2);
        }
        if (!tmp15Result) {
          delete obj["_raw"];
          const _Uint8Array3 = Uint8Array;
          const self9 = this;
          const self10 = this;
          const uint8Array4 = new Uint8Array(arr.reduce(f94900, 0));
          let num7 = 0;
          let num8 = 0;
          if (0 < arr.length) {
            do {
              let arr7 = arr[num7];
              let buffer2 = buffer.buffer;
              let _Uint8Array4 = Uint8Array;
              let self11 = this;
              let self12 = this;
              set3 = uint8Array4.set;
              let uint8Array5 = new Uint8Array(buffer2.slice(arr7.dataOffset, arr7.dataOffset + arr7.length));
              let set3Result = set3(uint8Array5, num8);
              num8 = num8 + arr7.length;
              num7 = num7 + 1;
              length3 = arr.length;
            } while (num7 < length3);
          }
          const _DataView3 = DataView;
          const self13 = this;
          const self14 = this;
          const dataView2 = new DataView(uint8Array4.buffer);
          readTags(obj, dataView2, arg2);
        }
      }
      return obj;
    }
  }
};
class ParseError {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ParseError);
    const items = [arg0];
    const obj = _getPrototypeOf(ParseError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    tmp3Result.name = "ParseError";
    return tmp3Result;
  }
}
_inherits(ParseError, _wrapNativeSuperDefault(Error));
let closure_8 = _createClass(ParseError);

export default obj;