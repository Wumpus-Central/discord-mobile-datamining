// === Module 7395: ? ===

// Module 7395
import _mod7356 from "module_7356" /* 7356 */;
import _modDef7373 from "module_7373" /* 7373 */;
import PathRecordTypesDefault from "PathRecordTypes" /* 7396 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let length;
let metroImportDefault;
function getTagName(dataView, sum1) {
  let num;
  let sum;
  const obj = _mod7356;
  const tmp = _slicedToArray(obj.getPascalStringFromDataView(dataView, sum1), 2);
  const first = tmp[0];
  const obj2 = { tagName: tmp[1], tagNameSize: sum + num };
  num = 0;
  sum = 1 + first;
  if (first % 2 === 0) {
    num = 1;
  }
  return obj2;
}
let obj = {
  read(arg0, arg1) {
    let tmp4Result2;
    const getDataView = _mod7356.getDataView;
    _mod7356;
    const uint8Array = new Uint8Array(arg0);
    const dataView = getDataView(uint8Array.buffer);
    const obj = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + metroImportDefault;
      const obj2 = _mod7356;
      const stringFromDataView = obj2.getStringFromDataView(dataView, num, metroImportDefault);
      const obj3 = _modDef7373;
      const shortAt = obj3.getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp14 = getTagName(dataView, sum1);
      let name = tmp14.tagName;
      const sum2 = sum1 + tmp14.tagNameSize;
      const obj4 = _modDef7373;
      const longAt = obj4.getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        const tmp4Result = _mod7356;
        const dataView1 = tmp4Result.getDataView(dataView.buffer, sum3, longAt);
        const obj6 = { id: shortAt, value: tmp4Result2.getStringFromDataView(dataView1, 0, longAt) };
        tmp4Result2 = _mod7356;
        if (PathRecordTypesDefault[shortAt]) {
          try {
            const obj5 = PathRecordTypesDefault[shortAt];
            obj6.description = obj5.description(dataView1);
          } catch (err) {
            obj6.description = "<no description formatter>";
          }
          if (!name) {
            name = PathRecordTypesDefault[shortAt].name;
          }
          obj[name] = obj6;
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj["undefined-" + shortAt] = obj6;
        }
      }
      num = sum3 + (longAt + longAt % 2);
    }
    return obj;
  }
};
let c4 = "8BIM";
let c5 = 2;
let c6 = 4;
({ length, length: metroImportDefault } = "8BIM");

export default obj;