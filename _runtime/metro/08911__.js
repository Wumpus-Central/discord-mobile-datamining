// _runtime/metro/08911__.js
import _mod8872 from "08872__.js";
import _modDef8889 from "08889__.js";
import _modDef8912 from "08912__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getTagName(dataView, sum1) {
  const tmp = _slicedToArray(_mod8872.getPascalStringFromDataView(dataView, sum1), 2);
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
({ length, length: metroImportDefault } = "8BIM");

export default {
  read(arg0, arg1) {
    const uint8Array = new Uint8Array(arg0);
    const dataView = _mod8872.getDataView(uint8Array.buffer);
    const obj2 = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + metroImportDefault;
      const stringFromDataView = _mod8872.getStringFromDataView(dataView, num, metroImportDefault);
      const shortAt = _modDef8889.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const longAt = _modDef8889.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        const dataView1 = _mod8872.getDataView(dataView.buffer, sum3, longAt);
        const obj7 = { id: shortAt, value: null };
        const tmp5Result = _mod8872;
        obj7.value = _mod8872.getStringFromDataView(dataView1, 0, longAt);
        if (_modDef8912[shortAt]) {
          try {
            obj7.description = _modDef8912[shortAt].description(dataView1);
            if (!name) {
              name = _modDef8912[shortAt].name;
            }
            obj2[name] = obj7;
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj2["undefined-" + shortAt] = obj7;
        }
        const tmp5Result2 = _mod8872;
      }
      num = sum3 + (longAt + (longAt % 2));
    }
    return obj2;
  },
};
