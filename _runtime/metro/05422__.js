// === Module 5422: ? ===

// Module 5422
import _mod5383 from "module_5383" /* 5383 */;
import _modDef5400 from "module_5400" /* 5400 */;
import _modDef5423 from "module_5423" /* 5423 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getTagName(dataView, sum1) {
  const tmp = _slicedToArray(_mod5383.getPascalStringFromDataView(dataView, sum1), 2);
  const first = tmp[0];
  const obj2 = { tagName: tmp[1], tagNameSize: null };
  let num = 0;
  const sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  obj2.tagNameSize = sum + num;
  return obj2;
}
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: closure_7 } = "8BIM");

export default {
  read(arg0, arg1) {
    const uint8Array = new Uint8Array(arg0);
    const dataView = _mod5383.getDataView(uint8Array.buffer);
    const obj2 = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + React5;
      const stringFromDataView = _mod5383.getStringFromDataView(dataView, num, React5);
      const shortAt = _modDef5400.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const longAt = _modDef5400.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        const dataView1 = _mod5383.getDataView(dataView.buffer, sum3, longAt);
        const obj7 = { id: shortAt, value: null };
        const tmp5Result = _mod5383;
        obj7.value = _mod5383.getStringFromDataView(dataView1, 0, longAt);
        if (_modDef5423[shortAt]) {
          try {
            obj7.description = _modDef5423[shortAt].description(dataView1);
            if (!name) {
              name = _modDef5423[shortAt].name;
            }
            obj2[name] = obj7;
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj2["undefined-" + shortAt] = obj7;
        }
        const tmp5Result2 = _mod5383;
      }
      num = sum3 + (longAt + longAt % 2);
    }
    return obj2;
  }
};