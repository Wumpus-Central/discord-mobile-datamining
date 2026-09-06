// _runtime/05222_findOffsets.js
import _mod5213 from "metro/05213__.js";
import _modDef5216 from "metro/05216__.js";
import get64BitValue from "05223_get64BitValue.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
function parseBox(getUint32, sum) {
  const uint32 = getUint32.getUint32(sum);
  if (0 === uint32) {
    let obj = { length: getUint32.byteLength - sum, contentOffset: sum + 4 + 4 };
  } else {
    if (1 === uint32) {
      if (0 === getUint32.getUint32(sum + 8)) {
        obj = { length: getUint32.getUint32(sum + 12), contentOffset: sum + 4 + 4 + 8 };
      }
    }
    obj = { length: uint32, contentOffset: sum + 4 + 4 };
  }
  ({ length, contentOffset } = obj);
  if (length >= 8) {
    const uint321 = getUint32.getUint32(sum + 4);
    if (1718909296 === uint321) {
      const obj1 = { type: "ftyp", majorBrand: _mod5213.getStringFromDataView(getUint32, contentOffset, 4), length };
      return obj1;
    } else if (1768977008 === uint321) {
      const diff = length - (contentOffset - sum);
      const items = [c3, c4];
      const items1 = [];
      sum = contentOffset;
      if (contentOffset < contentOffset + diff) {
        const arr12 = parseBox(getUint32, sum);
        while (undefined !== arr12) {
          let tmp63 = undefined === arr12.type;
          if (!tmp63) {
            let tmp64 = undefined !== arr12.itemType && -1 === items.indexOf(arr12.itemType);
            tmp63 = tmp64;
          }
          if (!tmp63) {
            let arr = items1.push(arr12);
          }
          sum = sum + arr12.length;
          if (sum >= contentOffset + diff) {
            break;
          }
        }
      }
      const obj2 = { type: "iprp", subBoxes: items1, length };
      return obj2;
    } else if (1768973167 === uint321) {
      const diff1 = length - (contentOffset - sum);
      const items2 = [c3, c4];
      const items3 = [];
      let sum1 = contentOffset;
      if (contentOffset < contentOffset + diff1) {
        const arr9 = parseBox(getUint32, sum1);
        while (undefined !== arr9) {
          let tmp54 = undefined === arr9.type;
          if (!tmp54) {
            let tmp55 = undefined !== arr9.itemType && -1 === items2.indexOf(arr9.itemType);
            tmp54 = tmp55;
          }
          if (!tmp54) {
            arr = items3.push(arr9);
          }
          sum1 = sum1 + arr9.length;
          if (sum1 >= contentOffset + diff1) {
            break;
          }
        }
      }
      const obj3 = { type: "ipco", properties: items3, length };
      return obj3;
    } else if (1668246642 === uint321) {
      const stringFromDataView = _mod5213.getStringFromDataView(getUint32, contentOffset, 4);
      if ("prof" === stringFromDataView) {
        const obj4 = {
          offset: contentOffset + 4,
          length: getUint32.getUint32(contentOffset + 4),
          chunkNumber: 1,
          chunksTotal: 1,
        };
        const tmp47 = obj4;
      }
      let obj5 = { type: "colr", icc: tmp47, length };
      return obj5;
    } else {
      const uint8 = getUint32.getUint8(contentOffset);
      if (1835365473 === uint321) {
        let sum2 = contentOffset + 1 + 3;
        const items4 = [c3, c4];
        const items5 = [];
        const sum3 = sum2 + (length - (sum2 - sum));
        if (sum2 < sum3) {
          const arr6 = parseBox(getUint32, sum2);
          while (undefined !== arr6) {
            let tmp41 = undefined === arr6.type;
            if (!tmp41) {
              let tmp42 = undefined !== arr6.itemType && -1 === items4.indexOf(arr6.itemType);
              tmp41 = tmp42;
            }
            if (!tmp41) {
              let arr1 = items5.push(arr6);
            }
            sum2 = sum2 + arr6.length;
            if (sum2 >= sum3) {
              break;
            }
          }
        }
        let obj6 = { type: "meta", subBoxes: items5, length };
        let parseItemLocationBoxResult = obj6;
      } else if (1768714083 === uint321) {
        const obj13 = get64BitValue;
        parseItemLocationBoxResult = obj13.parseItemLocationBox(getUint32, uint8, contentOffset + 1, length);
      } else if (1768517222 === uint321) {
        const obj7 = { entryCount: contentOffset + 1 + 3 };
        let num13 = 4;
        if (0 === uint8) {
          num13 = 2;
        }
        const obj8 = { entryCount: num13 };
        obj7.itemInfos = obj7.entryCount + obj8.entryCount;
        const itemInfos = obj7.itemInfos;
        const diff2 = length - (obj7.itemInfos - sum);
        const items6 = [c3, c4];
        const items7 = [];
        let sum4 = itemInfos;
        if (itemInfos < itemInfos + diff2) {
          let arr2 = parseBox(getUint32, sum4);
          while (undefined !== arr2) {
            let tmp26 = undefined === arr2.type;
            if (!tmp26) {
              let tmp27 = undefined !== arr2.itemType && -1 === items6.indexOf(arr2.itemType);
              tmp26 = tmp27;
            }
            if (!tmp26) {
              arr2 = items7.push(arr2);
            }
            sum4 = sum4 + arr2.length;
            if (sum4 >= itemInfos + diff2) {
              break;
            }
          }
        }
        const obj9 = { type: "iinf", itemInfos: items7, length };
        parseItemLocationBoxResult = obj9;
      } else if (1768842853 === uint321) {
        const obj10 = { type: "infe", length };
        let tmp3 = 0 !== uint8;
        const sum5 = contentOffset + 1;
        if (tmp3) {
          tmp3 = 1 !== uint8;
        }
        const sum6 = sum5 + 3;
        let sum9 = sum6;
        if (!tmp3) {
          obj10.itemId = getUint32.getUint16(sum6);
          const sum7 = sum6 + 2;
          obj10.itemProtectionIndex = getUint32.getUint16(sum7);
          const sum8 = sum7 + 2;
          obj5 = _mod5213;
          obj10.itemName = obj5.getNullTerminatedStringFromDataView(getUint32, sum8);
          sum9 = sum8 + (obj10.itemName.length + 1);
        }
        parseItemLocationBoxResult = obj10;
        if (uint8 >= 2) {
          if (2 === uint8) {
            obj10.itemId = getUint32.getUint16(sum9);
            let sum10 = sum9 + 2;
          } else {
            sum10 = sum9;
            if (3 === uint8) {
              obj10.itemId = getUint32.getUint32(sum9);
              sum10 = sum9 + 4;
            }
          }
          obj10.itemProtectionIndex = getUint32.getUint16(sum10);
          const sum11 = sum10 + 2;
          obj10.itemType = getUint32.getUint32(sum11);
          const sum12 = sum11 + 4;
          obj6 = _mod5213;
          obj10.itemName = obj6.getNullTerminatedStringFromDataView(getUint32, sum12);
          const sum13 = sum12 + (obj10.itemName.length + 1);
          if (obj10.itemType === c4) {
            let tmp13Result = tmp13(5213);
            obj10.contentType = tmp13Result.getNullTerminatedStringFromDataView(getUint32, sum13);
            const sum14 = sum13 + (obj10.contentType.length + 1);
            parseItemLocationBoxResult = obj10;
            if (sum + length > sum14) {
              tmp13Result = tmp13(5213);
              obj10.contentEncoding = tmp13Result.getNullTerminatedStringFromDataView(getUint32, sum14);
              const sum15 = obj10.contentEncoding.length + 1;
              parseItemLocationBoxResult = obj10;
            }
          } else {
            parseItemLocationBoxResult = obj10;
            if (obj10.itemType === c5) {
              obj10.itemUri = tmp13(5213).getNullTerminatedStringFromDataView(getUint32, sum13);
              const sum16 = obj10.itemUri.length + 1;
              parseItemLocationBoxResult = obj10;
              const tmp13Result1 = tmp13(5213);
            }
          }
        }
      } else {
        parseItemLocationBoxResult = { type: "Array", length };
      }
      return parseItemLocationBoxResult;
    }
  }
}
function findIlocItem(subBoxes, arg1) {
  closure_0 = arg1;
  subBoxes = subBoxes.subBoxes;
  const items = subBoxes.find((type) => "iloc" === type.type).items;
  return items.find((itemId) => itemId.itemId === closure_0);
}
let c3 = 1165519206;
let c4 = 1835625829;
let c5 = 1970432288;

export const ITEM_INFO_TYPE_EXIF = 1165519206;
export const ITEM_INFO_TYPE_MIME = 1835625829;
export { parseBox };
export const findOffsets = function findOffsets(byteLength) {
  if (!_modDef5216.USE_EXIF) {
    if (!tmp(5216).USE_XMP) {
      if (!tmp(5216).USE_ICC) {
        return {};
      }
    }
  }
  let num = 0;
  let tmp3;
  if (8 <= byteLength.byteLength) {
    const arr = parseBox(byteLength, num);
    while (undefined !== arr) {
      tmp3 = arr;
      if ("meta" === arr.type) {
        break;
      } else {
        let sum = num + arr.length;
        num = sum;
        if (sum + 4 + 4 > byteLength.byteLength) {
          break;
        }
      }
    }
  }
  if (tmp3) {
    let obj = {};
    if (tmp(5216).USE_EXIF) {
      obj.tiffHeaderOffset = (function findExifOffset(byteLength, subBoxes) {
        try {
          const tmp4 = findIlocItem(
            subBoxes,
            (function findIinfExifItemId(subBoxes) {
              subBoxes = subBoxes.subBoxes;
              const itemInfos = subBoxes.find((type) => "iinf" === type.type).itemInfos;
              return itemInfos.find((itemType) => itemType.itemType === closure_1_3);
            })(subBoxes).itemId,
          );
          return (function getTiffHeaderOffset(getUint32, sum) {
            sum = sum + 4;
            return sum + getUint32.getUint32(sum);
          })(byteLength, tmp4.baseOffset + tmp4.extents[0].extentOffset);
        } catch (err) {}
      })(byteLength, tmp3);
    }
    if (tmp(5216).USE_XMP) {
      obj.xmpChunks = (function findXmpChunks(subBoxes) {
        try {
          const itemId = (function findIinfXmpItemId(subBoxes) {
            subBoxes = subBoxes.subBoxes;
            const itemInfos = subBoxes.find((type) => "iinf" === type.type).itemInfos;
            return itemInfos.find((itemType) => {
              let tmp = itemType.itemType === closure_1_4;
              if (tmp) {
                tmp = "application/rdf+xml" === itemType.contentType;
              }
              return tmp;
            });
          })(subBoxes).itemId;
          const first = findIlocItem(subBoxes, itemId).extents[0];
          const obj = {
            dataOffset: findIlocItem(subBoxes, itemId).baseOffset + first.extentOffset,
            length: first.extentLength,
          };
          const items = [obj];
          return items;
        } catch (err) {}
      })(tmp3);
    }
    if (tmp(5216).USE_ICC) {
      obj.iccChunks = (function findIccChunks(subBoxes) {
        try {
          subBoxes = subBoxes.subBoxes;
          const subBoxes1 = subBoxes.find((type) => "iprp" === type.type).subBoxes;
          const properties = subBoxes1.find((type) => "ipco" === type.type).properties;
          const icc = properties.find((type) => "colr" === type.type).icc;
          if (icc) {
            const items = [tmp2];
            return items;
          }
        } catch (err) {}
      })(tmp3);
    }
    obj.hasAppMarkers =
      undefined !== obj.tiffHeaderOffset || undefined !== obj.xmpChunks || undefined !== obj.iccChunks;
  } else {
    obj = { hasAppMarkers: false };
  }
  return obj;
};
