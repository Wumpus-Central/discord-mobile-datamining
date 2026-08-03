const require = arg1;
const dependencyMap = arg6;
arg5.parseItemLocationBox = function parseItemLocationBox(getUint8, uint8, arg2, length) {
  const sum = arg2 + 3;
  let obj = { item: { dataReferenceIndex: 2, extentCount: 2, extent: {} } };
  if (uint8 < 2) {
    obj.itemCount = 2;
    obj.item.itemId = 2;
  } else if (2 === uint8) {
    obj.itemCount = 4;
    obj.item.itemId = 4;
  }
  if (1 === uint8) {
    let num2 = 2;
  } else {
    num2 = 0;
  }
  obj.item.constructionMethod = num2;
  obj = { offsetSize: sum, lengthSize: sum, baseOffsetSize: sum1, indexSize: sum1 };
  sum1 = sum + 1;
  obj.itemCount = sum + 2;
  obj.items = obj.itemCount + obj.itemCount;
  obj.item = { itemId: 0 };
  obj.item.constructionMethod = obj.item.itemId + obj.item.itemId;
  obj.item.dataReferenceIndex = obj.item.constructionMethod + obj.item.constructionMethod;
  const tmp4 = getUint8.getUint8(obj.offsetSize) >> 4;
  obj.item.extent.extentOffset = tmp4;
  const tmp5 = 15 & getUint8.getUint8(obj.lengthSize);
  obj.item.extent.extentLength = tmp5;
  obj.item.baseOffset = getUint8.getUint8(obj.baseOffsetSize) >> 4;
  if (1 === uint8) {
    const tmp7 = 15 & getUint8.getUint8(tmp6);
  }
  let num3 = 0;
  if (undefined !== tmp7) {
    num3 = tmp7;
  }
  obj.item.extent.extentIndex = num3;
  const itemCount = obj.itemCount;
  if (uint8 < 2) {
    let uint16 = getUint8.getUint16(itemCount);
  } else if (2 === uint8) {
    uint16 = getUint8.getUint32(itemCount);
  }
  if (undefined === uint16) {
    let items = [];
  } else {
    const items1 = [];
    items = obj.items;
    let num9 = 0;
    items = items1;
    if (0 < uint16) {
      while (true) {
        obj = { extents: null };
        obj[0] = [];
        let tmp9 = num9;
        let tmp10 = items;
        if (uint8 < 2) {
          let uint161 = getUint8.getUint16(items);
        } else if (2 === uint8) {
          uint161 = getUint8.getUint32(items);
        }
        obj.itemId = uint161;
        let sum2 = items + obj.item.itemId;
        if (tmp2) {
          let tmp13 = 15 & getUint8.getUint16(sum2);
        }
        obj.constructionMethod = tmp13;
        let sum3 = sum2 + obj.item.constructionMethod;
        obj.dataReferenceIndex = getUint8.getUint16(sum3);
        let sum4 = sum3 + obj.item.dataReferenceIndex;
        let baseOffset = obj.item.baseOffset;
        if (4 === baseOffset) {
          let num4 = getUint8.getUint32(sum4);
        } else {
          num4 = 0;
          if (8 === baseOffset) {
            let _console = console;
            let warnResult = console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.");
            let tmp17 = require;
            let tmp18 = dependencyMap;
            let obj4 = require(4879) /* get64BitValue */;
            num4 = obj4.get64BitValue(getUint8, sum4);
          }
        }
        obj.baseOffset = num4;
        let sum5 = sum4 + obj.item.baseOffset;
        obj.extentCount = getUint8.getUint16(sum5);
        let sum6 = sum5 + obj.item.extentCount;
        let num5 = 0;
        let tmp21 = sum6;
        if (0 < obj.extentCount) {
          while (true) {
            let tmp22 = num5;
            let tmp23 = sum6;
            if (tmp2) {
              if (tmp7 > 0) {
                break;
              }
            }
            let obj1 = { extentIndex: tmp24 };
            let sum7 = sum6 + obj.item.extent.extentIndex;
            if (4 === tmp4) {
              let num7 = getUint8.getUint32(sum7);
            } else {
              num7 = 0;
              if (8 === tmp4) {
                let _console3 = console;
                let warnResult1 = console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.");
                let tmp31 = require;
                let tmp32 = dependencyMap;
                let obj7 = require(4879) /* get64BitValue */;
                num7 = obj7.get64BitValue(getUint8, sum7);
              }
            }
            obj1.extentOffset = num7;
            let sum8 = sum7 + obj.item.extent.extentOffset;
            if (4 === tmp5) {
              let num8 = getUint8.getUint32(sum8);
            } else {
              num8 = 0;
              if (8 === tmp5) {
                let _console4 = console;
                let warnResult2 = console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.");
                let tmp35 = require;
                let tmp36 = dependencyMap;
                let obj8 = require(4879) /* get64BitValue */;
                num8 = obj8.get64BitValue(getUint8, sum8);
              }
            }
            obj1.extentLength = num8;
            sum6 = sum8 + obj.item.extent.extentLength;
            let extents = obj.extents;
            let arr = extents.push(obj1);
            num5 = num5 + 1;
            tmp21 = sum6;
            continue;
          }
          if (4 === tmp7) {
            let num6 = getUint8.getUint32(sum6);
          } else {
            num6 = 0;
            if (8 === tmp7) {
              let _console2 = console;
              let warnResult3 = console.warn("This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.");
              let tmp26 = require;
              let tmp27 = dependencyMap;
              let obj5 = require(4879) /* get64BitValue */;
              num6 = obj5.get64BitValue(getUint8, sum6);
            }
          }
          let tmp28 = num6;
        }
        arr = items1.push(obj);
        num9 = num9 + 1;
        items = tmp21;
        items = items1;
      }
    }
  }
  return { type: "iloc", items, length };
};