// _runtime/metro/05252__.js
import _mod5213 from "05213__.js";
import _modDef5230 from "05230__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getTagName(dataView, sum1) {
  let obj = _mod5213;
  const tmp = _slicedToArray(obj.getPascalStringFromDataView(dataView, sum1), 2);
  const first = tmp[0];
  obj = { tagName: tmp[1], tagNameSize: null };
  let num = 0;
  const sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  obj.tagNameSize = sum + num;
  return obj;
}
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: closure_7 } = "8BIM");

export default {
  read(arg0, arg1) {
    let obj = _mod5213;
    const uint8Array = new Uint8Array(arg0);
    const dataView = obj.getDataView(uint8Array.buffer);
    obj = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + React5;
      const stringFromDataView = _mod5213.getStringFromDataView(dataView, num, React5);
      const shortAt = _modDef5230.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const longAt = _modDef5230.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        let tmp5Result = tmp5(5213);
        const dataView1 = tmp5Result.getDataView(dataView.buffer, sum3, longAt);
        obj = { id: shortAt, value: null };
        tmp5Result = tmp5(5213);
        obj.value = tmp5Result.getStringFromDataView(dataView1, 0, longAt);
        if (tmp10(5253)[shortAt]) {
          try {
            obj.description = tmp10(5253)[shortAt].description(dataView1);
            if (!name) {
              name = tmp10(5253)[shortAt].name;
            }
            obj[name] = obj;
            const obj6 = tmp10(5253)[shortAt];
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj["undefined-" + shortAt] = obj;
        }
      }
      num = sum3 + (longAt + (longAt % 2));
    }
    return obj;
  },
};
