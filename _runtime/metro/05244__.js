// === Module 5244: ? ===

// Module 5244
import _modDef5245 from "module_5245" /* 5245 */;
import _modDef5246 from "module_5246" /* 5246 */;

importDefault = arg2;
const dependencyMap = arg6;
function parseTags(byteLength, size, sum, arg3) {
  let items;
  let obj3;
  let tmp = sum;
  let obj = {};
  sum = sum + size.size;
  if (sum < sum) {
    if (tmp < byteLength.byteLength) {
      while (true) {
        let encoding = tmp23;
        if (byteLength.getUint8(tmp) !== 28) {
          obj = { tag: null, tagSize: 0 };
        } else {
          let uint16 = byteLength.getUint16(tmp + 1);
          let uint161 = byteLength.getUint16(tmp + 3);
          if (!arg3) {
            if (!_modDef5245.iptc[uint16]) {
              obj = { tag: "Array", tagSize: uint161 };
            }
          }
          items = [];
          for (let num = 0; num < uint161; num = num + 1) {
            let arr = items.push(byteLength.getUint8(tmp6 + num));
          }
          obj = { id: uint16, name: null, value: null, description: null };
          let tmp8 = importDefault;
          obj3 = _modDef5245.iptc[uint16];
          if (obj3) {
            if (typeof obj3 !== "string") {
              break;
            } else {
              let combined = obj3;
            }
          } else {
            let _HermesInternal = HermesInternal;
            combined = "undefined-" + uint16;
          }
          obj.name = combined;
          obj.value = items;
          obj.description = getTagDescription(tmp8(5245).iptc[uint16], items, obj, encoding);
          let tmp17 = tmp8(5245).iptc[uint16] && tmp8(5245).iptc[uint16].repeatable;
          if (tmp17) {
            obj.repeatable = true;
          }
          let tmp18 = tmp8(5245).iptc[uint16] && undefined !== tmp8(5245).iptc[uint16].encoding_name;
          if (tmp18) {
            let obj4 = tmp8(5245).iptc[uint16];
            obj.encoding = obj4.encoding_name(items);
          }
          let obj1 = { tag: obj, tagSize: uint161 };
          obj = obj1;
        }
        let tag = obj.tag;
        if (null !== tag) {
          let tmp21 = encoding;
          if (tag) {
            if ("encoding" in tag) {
              encoding = tag.encoding;
            }
            if (undefined !== obj[tag.name]) {
              if (undefined !== tag.repeatable) {
                let _Array = Array;
                if (!(obj[tag.name] instanceof Array)) {
                  let obj2 = { id: obj[tag.name].id, value: obj[tag.name].value, description: obj[tag.name].description };
                  let items1 = [obj2];
                  obj[tag.name] = items1;
                }
                let arr3 = obj[tag.name];
                obj3 = { id: null, value: null, description: null };
                ({ id: obj8.id, value: obj8.value, description: obj8.description } = tag);
                arr = arr3.push(obj3);
                tmp21 = encoding;
              }
            }
            obj4 = { id: null, value: null, description: null };
            ({ id: obj9.id, value: obj9.value, description: obj9.description } = tag);
            obj[tag.name] = obj4;
            tmp21 = encoding;
          }
          let sum1 = tmp + (5 + tmp19);
          if (sum1 < sum) {
            tmp23 = tmp21;
            tmp = sum1;
          }
        }
      }
      if (typeof obj3.name === "function") {
        let name = obj3.name(items);
      } else {
        name = obj3.name;
      }
    }
  }
  return obj;
}
function getTagDescription(description, items, arg2, encoding) {
  if (!(function hasDescriptionProperty(description) {
    let tmp = description;
    if (description) {
      tmp = undefined !== description.description;
    }
    return tmp;
  })(description)) {
    let decodeResult = items;
    if ((function tagValueIsText(description, items) {
      let tmp = description;
      if (description) {
        const _Array = Array;
        tmp = items instanceof Array;
      }
      return tmp;
    })(description, items)) {
      const decoder = _modDef5246;
      decodeResult = decoder.decode(encoding, items);
    }
    return decodeResult;
  } else {
    try {
      return description.description(items, arg2);
    } catch (err) {
    }
  }
}

export default {
  read(byteLength, sum, arg2) {
    try {
      const _Array = Array;
      if (Array.isArray(byteLength)) {
        const _DataView = DataView;
        const _Uint8Array = Uint8Array;
        const dataView = new DataView(Uint8Array.from(byteLength).buffer);
        let obj = { size: byteLength.length };
        return parseTags(dataView, obj, 0, arg2);
      } else {
        const tmp5 = (function getNaaResourceBlock(byteLength, sum) {
          let tmp = sum;
          if (sum + 12 <= byteLength.byteLength) {
            while (943868237 === byteLength.getUint32(tmp, false)) {
              let uint8 = byteLength.getUint8(tmp + 4 + 2);
              sum = uint8;
              if (uint8 % 2 === 0) {
                sum = uint8 + 1;
              }
              let sum1 = sum + 1;
              let obj = { headerSize: 6 + sum1 + 4, type: byteLength.getUint16(tmp + 4), size: byteLength.getUint32(tmp + 4 + 2 + sum1) };
              if (1028 === obj.type) {
                obj = { naaBlock: null, dataOffset: null };
                obj.naaBlock = obj;
                obj.dataOffset = tmp + obj.headerSize;
                return obj;
              } else {
                let num = 0;
                let sum2 = obj.headerSize + obj.size;
                if (obj.size % 2 !== 0) {
                  num = 1;
                }
                let sum3 = tmp + (sum2 + num);
                tmp = sum3;
              }
            }
            const _Error = Error;
            const error = new Error("Not an IPTC resource block.");
            throw error;
          }
          const error1 = new Error("No IPTC NAA resource block.");
          throw error1;
        })(byteLength, sum);
        return parseTags(byteLength, tmp5.naaBlock, tmp5.dataOffset, arg2);
      }
    } catch (err) {
      return {};
    }
  }
};