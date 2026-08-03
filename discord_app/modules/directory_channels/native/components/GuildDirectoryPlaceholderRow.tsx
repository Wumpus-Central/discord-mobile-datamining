import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 }, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
obj = { width: 40, height: 40, borderRadius: require("Themes").radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj[2] = obj;
createCacheKey = { height: 15, borderRadius: 5, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj[3] = createCacheKey;
obj[4] = { width: "100%", marginTop: 10 };
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => {
  const tmp = callback3();
  const importDefault = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  let items = [callback(View, obj), ];
  obj = { style: tmp.rowInner, children: null };
  const obj1 = { style: null };
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj1[0] = items1;
  const items2 = [callback(View, obj1), ];
  const array = new Array(sum);
  const obj2 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((arg0, arg1) => {
    let obj = { style: null };
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = tmp);
    obj = { width: "" + tmp(table[6])(table + arg1) + "%" };
    items[2] = obj;
    obj[0] = items;
    return outer1_3(outer1_2, obj, arg1);
  });
  obj[1] = items2;
  items[1] = callback2(View, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;