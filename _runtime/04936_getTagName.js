import _slicedToArray from "_slicedToArray";

let error;
let length;
const require = arg1;
function getTagName(dataView, sum1) {
  let obj = require(4897) /* getDataView */;
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
    let obj = require(4897) /* getDataView */;
    const uint8Array = new Uint8Array(arg0);
    const dataView = obj.getDataView(uint8Array.buffer);
    obj = {};
    let num = 0;
    if (0 < arg0.length) {
      const sum = num + closure_7;
      const stringFromDataView = require(4897) /* getDataView */.getStringFromDataView(dataView, num, closure_7);
      const obj3 = require(4897) /* getDataView */;
      const shortAt = importDefault(4914).getShortAt(dataView, sum);
      const sum1 = sum + c5;
      const tmp15 = getTagName(dataView, sum1);
      let name = tmp15.tagName;
      const sum2 = sum1 + tmp15.tagNameSize;
      const obj4 = importDefault(4914);
      const longAt = importDefault(4914).getLongAt(dataView, sum2);
      const sum3 = sum2 + c6;
      if (stringFromDataView === c4) {
        let tmp5Result = tmp5(4897);
        const dataView1 = tmp5Result.getDataView(dataView.buffer, sum3, longAt);
        obj = { id: null, value: null };
        obj[0] = shortAt;
        tmp5Result = tmp5(4897);
        obj[1] = tmp5Result.getStringFromDataView(dataView1, 0, longAt);
        if (tmp10(4937)[shortAt]) {
          try {
            obj.description = tmp10(4937)[shortAt].description(dataView1);
            if (!name) {
              name = tmp10(4937)[shortAt].name;
            }
            obj[name] = obj;
            const obj6 = tmp10(4937)[shortAt];
          } catch (err) {
            tmp.description = tmp2;
          }
        } else if (arg1) {
          const _HermesInternal = HermesInternal;
          obj["undefined-" + shortAt] = obj;
        }
      }
      num = sum3 + (longAt + longAt % 2);
      const obj5 = importDefault(4914);
    }
    return obj;
  }
};