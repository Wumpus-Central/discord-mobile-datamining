// _runtime/04949_getTagName.js
import getDataView from "04910_getDataView.js";
import _modDef4927 from "metro/04927__.js";
import parseBezierKnotDefault from "04950_parseBezierKnot.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

require = arg1;
function getTagName(dataView, sum1) {
  let obj = getDataView;
  const tmp = callback(obj.getPascalStringFromDataView(dataView, sum1), 2);
  const first = tmp[0];
  obj = { tagName: tmp[1], tagNameSize: null };
  let num = 0;
  const sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  obj[1] = sum + num;
  return obj;
}
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: error } = "8BIM");

export default {
  read(arg0, arg1) {
    let obj = getDataView;
    const uint8Array = new Uint8Array(arg0);
    const dataView = obj.getDataView(uint8Array.buffer);
    obj = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + closure_7;
      const stringFromDataView = getDataView.getStringFromDataView(dataView, num, closure_7);
      const shortAt = _modDef4927.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const longAt = _modDef4927.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        let tmp5Result = getDataView;
        const dataView1 = tmp5Result.getDataView(dataView.buffer, sum3, longAt);
        obj = { id: null, value: null };
        obj[0] = shortAt;
        tmp5Result = getDataView;
        obj[1] = tmp5Result.getStringFromDataView(dataView1, 0, longAt);
        if (parseBezierKnotDefault[shortAt]) {
          try {
            obj.description = parseBezierKnotDefault[shortAt].description(dataView1);
            if (!name) {
              name = parseBezierKnotDefault[shortAt].name;
            }
            obj[name] = obj;
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj["undefined-" + shortAt] = obj;
        }
      }
      num = sum3 + (longAt + longAt % 2);
    }
    return obj;
  }
};