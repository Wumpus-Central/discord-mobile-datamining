// === Module 4945: _isNativeReflectConstruct ===

// Module 4945 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import calculateGPSValueDefault from "calculateGPSValue" /* 4948 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "_classCallCheck" /* 41 */;
import closure_5 from "_possibleConstructorReturn" /* 93 */;
import closure_6 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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
  } catch (err) {
  }
}
function readTags(_raw, dataView, arg2) {
  try {
    let str = _raw._raw;
    ({ doc, raw } = (function getDocument(dataView, arg1) {
      let obj = callback2(table[8]);
      const value = obj.get(arg1);
      if (value) {
        let str2 = dataView;
        if (typeof dataView !== "string") {
          str2 = callback(tmp[7]).getStringFromDataView(dataView, 0, dataView.byteLength);
          const obj3 = callback(tmp[7]);
        }
        obj = { doc: null, raw: null };
        obj[0] = callback3(value, str2.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1"));
        obj[1] = str2;
        return obj;
      } else {
        const _console = console;
        console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
        const _Error = Error;
        error = new Error();
        throw error;
      }
      tmp = table;
    })(dataView, arg2));
    if (!str) {
      str = "";
    }
    _raw._raw = str + raw;
    const tmp4 = (function getDocument(dataView, arg1) {
      let obj = callback2(table[8]);
      const value = obj.get(arg1);
      if (value) {
        let str2 = dataView;
        if (typeof dataView !== "string") {
          str2 = callback(tmp[7]).getStringFromDataView(dataView, 0, dataView.byteLength);
          const obj3 = callback(tmp[7]);
        }
        obj = { doc: null, raw: null };
        obj[0] = callback3(value, str2.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1"));
        obj[1] = str2;
        return obj;
      } else {
        const _console = console;
        console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
        const _Error = Error;
        error = new Error();
        throw error;
      }
      tmp = table;
    })(dataView, arg2);
    const tmp6 = getRDF(doc);
    ParseError(4910).objectAssign(_raw, parseXMPObject(convertToObject(tmp6, true)));
    return true;
  } catch (err) {
    return false;
  }
}
function parseFromString(parseFromString, tmp13Result, arg2) {
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
          return parseFromString(tmp2, tmp13(4947).addMissingNamespaces(tmp), true);
        }
      }
      obj2 = ParseError(4947);
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
  error = new Error();
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
        obj[0] = obj;
        obj[1] = closure_1_12(nodeName);
        if (undefined !== nodeValue[nodeName.nodeName]) {
          const _Array = Array;
          if (!Array.isArray(tmp3[nodeName.nodeName])) {
            const items = [tmp3[nodeName.nodeName]];
            tmp3[nodeName.nodeName] = items;
          }
          tmp3[nodeName.nodeName].push(obj);
          const arr2 = tmp3[nodeName.nodeName];
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
      let tmp4 = key10002;
      let tmp5 = arg0[key10002];
      let _Array = Array;
      let arr2 = tmp5;
      if (!Array.isArray(tmp5)) {
        let items = [tmp5];
        arr2 = items;
      }
      let item = arr2.forEach((attributes) => {
        obj = obj(closure_1_2[7]);
        obj.objectAssign(obj, closure_1_14(attributes.attributes));
        if (typeof attributes.value === "object") {
          obj(closure_1_2[7]).objectAssign(obj, closure_1_19(attributes.value));
          const tmpResult = obj(closure_1_2[7]);
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
    let tmp5 = key10005;
    try {
      let tmp = isTagAttribute;
      if (isTagAttribute(key10005)) {
        let tmp2 = getLocalName;
        obj = { value: null, attributes: null, description: null };
        obj[0] = arg0[key10005];
        obj[1] = {};
        let tmp4 = getDescription;
        let tmp3 = getLocalName(key10005);
        obj[2] = getDescription(arg0[key10005], key10005);
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
          let tmp2 = callback(value.value);
        } else {
          tmp2 = callback(value);
        }
        return tmp2;
      });
      return mapped.join(", ");
    })(arr);
    let tmp12 = tmp11;
    if (tmp2) {
      tmp12 = tmp11;
      if (typeof calculateGPSValueDefault[tmp2] === "function") {
        tmp12 = tmp13(4948)[tmp2](arr, tmp11);
        const tmp13Result = tmp13(4948);
      }
      tmp13 = importDefault;
    }
    return tmp12;
  } else if (typeof arr === "object") {
    return (function getDescriptionOfObject(arr) {
      const items = [];
      for (const key10024 in arg0) {
        let tmp3 = key10024;
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
        let tmp = callback;
        let _HermesInternal = HermesInternal;
        arr = items.push("" + str8 + ": " + callback(arg0[key10024].value));
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
    let tmp5 = key10005;
    try {
      let tmp = isNamespaceDefinition;
      if (!isNamespaceDefinition(key10005)) {
        let tmp2 = getLocalName;
        let tmp4 = parseNodeAsTag;
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
      const str2 = attributes.value;
    }
    if (tmp) {
      let obj = { value: "", attributes: null, description: "" };
      obj[1] = {};
      tmp9 = obj;
    } else {
      let tmp2 = "Resource" === attributes.attributes["rdf:parseType"];
      if (tmp2) {
        tmp2 = undefined !== attributes.value["rdf:value"];
      }
      if (!tmp2) {
        tmp2 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
        let tmp3 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
      }
      if (tmp2) {
        tmp9 = parseNodeAsSimpleRdfDescription(attributes, key10005);
      } else {
        let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
        if (!tmp4) {
          tmp4 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
          let tmp5 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
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
            const tmp15 = parseNodeAttributesAsTags(attributes.attributes);
            obj = { value: null, attributes: null, description: null };
            obj[0] = tmp15;
            obj[1] = {};
            obj[2] = getDescription(tmp15, key10005);
            tmp9 = obj;
          } else {
            let value = attributes.value;
            if (undefined !== tmp7) {
              value = attributes.value;
              rdf_li = value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"].value["rdf:li"];
              obj = {};
              for (const key10070 in arg0.attributes) {
                let tmp20 = key10070;
                let tmp10 = "rdf:parseType" === key10070;
                if (!tmp10) {
                  tmp10 = "rdf:resource" === key10070;
                }
                if (!tmp10) {
                  tmp10 = "xmlns" === key10070.split(":")[0];
                }
                if (tmp10) {
                  continue;
                } else {
                  obj1 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
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
              if (undefined === rdf_li) {
                let items1 = [];
              } else {
                const _Array = Array;
                items1 = rdf_li;
                if (!Array.isArray(rdf_li)) {
                  const items2 = [rdf_li];
                  items1 = items2;
                }
              }
              const item = items1.forEach((attributes) => {
                let tmp2 = "Resource" === attributes.attributes["rdf:parseType"];
                if (tmp2) {
                  tmp2 = undefined !== attributes.value["rdf:value"];
                }
                if (!tmp2) {
                  tmp2 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
                  const tmp3 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
                }
                if (tmp2) {
                  let value = closure_1_21(attributes);
                } else {
                  let tmp4 = "Resource" === attributes.attributes["rdf:parseType"];
                  if (!tmp4) {
                    tmp4 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
                    const tmp5 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
                  }
                  if (tmp4) {
                    value = closure_1_22(attributes).value;
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
                      const tmp10 = closure_1_14(attributes.attributes);
                      closure_1_18(tmp10, undefined);
                      value = tmp10;
                    } else {
                      value = closure_1_23(attributes);
                    }
                  }
                }
                items.push(value);
              });
              obj1 = { value: null, attributes: null, description: null };
              obj1[0] = items;
              obj1[1] = obj;
              obj = getDescription(items, key10005);
              obj1[2] = obj;
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
    let tmp6 = key10009;
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
      obj1 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
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
    let tmp7 = key10035;
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
    let tmp8 = key10052;
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
  ParseError(4910).objectAssign(obj, obj, obj);
  rdf_value = iter.value["rdf:value"];
  obj1 = { value: tmp5, attributes: obj, description: getDescription(tmp5, key10005) };
  return obj1;
}
function parseNodeAsStructureRdfDescription(value, key10005) {
  let obj = { value: {}, attributes: {} };
  let iter = value;
  if (undefined !== value.value["rdf:Description"]) {
    ParseError(4910).objectAssign(obj.value, parseNodeAttributesAsTags(value.value["rdf:Description"].attributes));
    const obj4 = ParseError(4910);
    obj = {};
    for (const key10008 in arg0.attributes) {
      let tmp8 = key10008;
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
    ParseError(4910).objectAssign(obj.attributes, obj);
    iter = value.value["rdf:Description"];
    const obj5 = ParseError(4910);
  }
  ParseError(4910).objectAssign(obj.value, parseNodeChildrenAsTags(iter.value));
  obj.description = getDescription(obj.value, key10005);
  return obj;
}
function parseNodeAsSimpleValue(attributes, key10005) {
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
          let tmp10 = tmp4;
          let tmp11 = value[tmp4];
          let _Array = Array;
          let arr2 = tmp11;
          if (!Array.isArray(tmp11)) {
            let items = [tmp11];
            arr2 = items;
          }
          let item = arr2.forEach((attributes) => {
            obj = obj(closure_1_2[7]);
            obj.objectAssign(obj, closure_1_14(attributes.attributes));
            if (typeof attributes.value === "object") {
              obj(closure_1_2[7]).objectAssign(obj, closure_1_19(attributes.value));
              const tmpResult = obj(closure_1_2[7]);
            }
          });
          continue;
        }
      }
    }
    tmp2 = tmp3;
  }
  obj = { value: tmp2, attributes: null, description: null };
  obj = {};
  for (const key10021 in arg0.attributes) {
    let tmp12 = key10021;
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
      obj[str] = arg0.attributes[key10021];
      continue;
    }
    continue;
  }
  obj[1] = obj;
  obj[2] = getDescription(tmp2, key10005);
  return obj;
}
let obj = {
  read(dataView, arr) {
    let length;
    let length2;
    let length3;
    const obj = {};
    if (typeof dataView === "string") {
      readTags(obj, dataView, arg2);
      return obj;
    } else {
      if (0 === arr.length) {
        let items = [];
      } else {
        const substr = arr.slice(0, 1);
        const _Uint8Array5 = Uint8Array;
        const uint8Array = new Uint8Array(substr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
        let num2 = 0;
        let num = 0;
        if (0 < substr.length) {
          do {
            arr = substr[num2];
            let buffer = dataView.buffer;
            let _Uint8Array = Uint8Array;
            let tmp3 = new.target;
            let tmp4 = new.target;
            let uint8Array1 = new Uint8Array(buffer.slice(arr.dataOffset, arr.dataOffset + arr.length));
            let tmp6 = uint8Array1;
            let result = uint8Array.set(uint8Array1, num);
            num = num + arr.length;
            num2 = num2 + 1;
            length = substr.length;
          } while (num2 < length);
        }
        const _DataView = DataView;
        dataView = new DataView(uint8Array.buffer);
        const items1 = [dataView];
        items = items1;
        if (arr.length > 1) {
          const substr1 = arr.slice(1);
          const _Uint8Array6 = Uint8Array;
          const uint8Array2 = new Uint8Array(substr1.reduce((arg0, arg1) => arg0 + arg1.length, 0));
          let num4 = 0;
          let num3 = 0;
          if (0 < substr1.length) {
            do {
              let arr5 = substr1[num4];
              let buffer1 = dataView.buffer;
              let _Uint8Array2 = Uint8Array;
              let tmp12 = new.target;
              let tmp13 = new.target;
              let uint8Array3 = new Uint8Array(buffer1.slice(arr5.dataOffset, arr5.dataOffset + arr5.length));
              let tmp15 = uint8Array3;
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
      const tmp23 = callback(items, 2);
      let tmp25Result = readTags(obj, tmp23[0], arg2);
      if (tmp23[1]) {
        if (!tmp25Result) {
          tmp25Result = tmp25(obj, tmp24, arg2);
        }
        if (!tmp25Result) {
          delete tmp[tmp2];
          const _Uint8Array3 = Uint8Array;
          const uint8Array4 = new Uint8Array(arr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
          let num7 = 0;
          let num8 = 0;
          if (0 < arr.length) {
            do {
              let arr7 = arr[num7];
              let buffer2 = dataView.buffer;
              let _Uint8Array4 = Uint8Array;
              let tmp31 = new.target;
              let tmp32 = new.target;
              let uint8Array5 = new Uint8Array(buffer2.slice(arr7.dataOffset, arr7.dataOffset + arr7.length));
              let tmp34 = uint8Array5;
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
  }
};
class ParseError {
  constructor(arg0) {
    self = this;
    tmp = closure_4(this, ParseError);
    items = [];
    items[0] = global;
    tmp2 = closure_6;
    obj = closure_6(ParseError);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(ParseError, _wrapNativeSuperDefault(Error));
let closure_8 = importDefaultResult(ParseError);

export default obj;