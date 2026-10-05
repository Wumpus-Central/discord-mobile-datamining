// _runtime/metro/07376__.js
import _modDef7377 from "07377__.js";
import _modDef7378 from "07378__.js";

function parseTags(byteLength, size, sum, arg3) {
  let combined;
  let tmp22;
  let tmp = sum;
  const obj = {};
  sum = sum + size.size;
  if (sum < sum) {
    if (tmp < byteLength.byteLength) {
      while (true) {
        let obj2;
        let encoding = tmp22;
        if (byteLength.getUint8(tmp) !== 28) {
          obj2 = { tag: null, tagSize: 0 };
        } else {
          let num;
          let uint16 = byteLength.getUint16(tmp + 1);
          let uint161 = byteLength.getUint16(tmp + 3);
          if (!arg3) {
            if (!_modDef7377.iptc[uint16]) {
              obj2 = { tag: "Array", tagSize: uint161 };
            }
          }
          let items = [];
          for (let num = 0; num < uint161; num = num + 1) {
            let arr = items.push(byteLength.getUint8(tmp6 + num));
          }
          let obj3 = {
            id: uint16,
            name: combined,
            value: items,
            description: getTagDescription(_modDef7377.iptc[uint16], items, obj, encoding),
          };
          let obj4 = _modDef7377.iptc[uint16];
          if (obj4) {
            let tmp11 = obj4;
            if (typeof obj4 !== "string") {
              let name;
              if (typeof obj4.name === "function") {
                name = obj4.name(items);
              } else {
                name = obj4.name;
              }
              tmp11 = name;
            }
            combined = tmp11;
          } else {
            let _HermesInternal = HermesInternal;
            combined = "undefined-" + uint16;
          }
          let tmp16 = _modDef7377.iptc[uint16] && _modDef7377.iptc[uint16].repeatable;
          if (tmp16) {
            obj3.repeatable = true;
          }
          let tmp17 = _modDef7377.iptc[uint16] && undefined !== _modDef7377.iptc[uint16].encoding_name;
          if (tmp17) {
            let obj5 = _modDef7377.iptc[uint16];
            obj3.encoding = obj5.encoding_name(items);
          }
          let obj6 = { tag: obj3, tagSize: uint161 };
          obj2 = obj6;
        }
        let tag = obj2.tag;
        if (null === tag) {
          break;
        } else {
          let tmp20 = encoding;
          if (tag) {
            if ("encoding" in tag) {
              encoding = tag.encoding;
            }
            if (undefined !== obj[tag.name]) {
              if (undefined !== tag.repeatable) {
                let _Array = Array;
                if (!(obj[tag.name] instanceof Array)) {
                  let obj7 = {
                    id: obj[tag.name].id,
                    value: obj[tag.name].value,
                    description: obj[tag.name].description,
                  };
                  let items1 = [obj7];
                  obj[tag.name] = items1;
                }
                let arr3 = obj[tag.name];
                let obj15 = { id: null, value: null, description: null };
                ({ id: obj8.id, value: obj8.value, description: obj8.description } = tag);
                let arr2 = arr3.push(obj15);
                tmp20 = encoding;
              }
            }
            let obj16 = { id: null, value: null, description: null };
            ({ id: obj9.id, value: obj9.value, description: obj9.description } = tag);
            obj[tag.name] = obj16;
            tmp20 = encoding;
          }
          let sum1 = tmp + (5 + tmp18);
          if (sum1 >= sum) {
            break;
          } else {
            tmp22 = tmp20;
            tmp = sum1;
            if (sum1 >= byteLength.byteLength) {
              break;
            }
          }
        }
      }
    }
  }
  return obj;
}
function getTagDescription(description, items, arg2, encoding) {
  function hasDescriptionProperty(description) {
    return description && undefined !== description.description;
  }
  function tagValueIsText(description, items) {
    let tmp = description;
    if (tmp) {
      const _Array = Array;
      tmp = items instanceof Array;
    }
    return tmp;
  }
  if (!hasDescriptionProperty(description)) {
    let decodeResult = items;
    if (tagValueIsText(description, items)) {
      const decoder = _modDef7378;
      decodeResult = decoder.decode(encoding, items);
    }
    return decodeResult;
  } else {
    try {
      let tmp = arg2;
      return description.description(items, arg2);
    } catch (err) {}
  }
}

export default {
  read(byteLength, sum, arg2) {
    function getNaaResourceBlock(byteLength, sum) {
      let tmp = sum;
      if (sum + 12 <= byteLength.byteLength) {
        while (943868237 === byteLength.getUint32(tmp, false)) {
          let uint8 = byteLength.getUint8(tmp + 4 + 2);
          sum = uint8;
          if (uint8 % 2 === 0) {
            sum = uint8 + 1;
          }
          let sum1 = sum + 1;
          let obj = {
            headerSize: 6 + sum1 + 4,
            type: byteLength.getUint16(tmp + 4),
            size: byteLength.getUint32(tmp + 4 + 2 + sum1),
          };
          if (1028 === obj.type) {
            let obj2 = { naaBlock: obj, dataOffset: tmp + obj.headerSize };
            return obj2;
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
        const self = this;
        const self2 = this;
        const error = new Error("Not an IPTC resource block.");
        throw error;
      }
      const error1 = new Error("No IPTC NAA resource block.");
      throw error1;
    }
    try {
      let tmp = byteLength;
      const _Array = Array;
      if (Array.isArray(byteLength)) {
        const _DataView = DataView;
        const _Uint8Array = Uint8Array;
        let self = this;
        let self2 = this;
        const dataView = new DataView(Uint8Array.from(byteLength).buffer);
        let obj = { size: byteLength.length };
        return parseTags(dataView, obj, 0, arg2);
      } else {
        let num = 0;
        const tmp5 = getNaaResourceBlock(byteLength, sum);
        return parseTags(byteLength, tmp5.naaBlock, tmp5.dataOffset, arg2);
      }
    } catch (err) {
      return {};
    }
  },
};
