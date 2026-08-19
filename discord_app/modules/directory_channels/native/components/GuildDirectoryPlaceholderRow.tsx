// === Module 11507: ? ===

// Module 11507
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj[2] = obj;
const createCacheKey = { height: 15, borderRadius: 5, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj[3] = createCacheKey;
obj[4] = { width: "100%", marginTop: 10 };
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  closure_0 = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  let items = [callback(View, obj), ];
  obj = { style: tmp.rowInner, children: null };
  obj1 = { style: null };
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj1[0] = items1;
  const items2 = [callback(View, obj1), ];
  const array = new Array(sum);
  const obj2 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((item, index) => {
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = callback);
    const obj = { width: "" + callback(table[6])(table + index) + "%" };
    items[2] = obj;
    obj[0] = items;
    return closure_1_3(View, obj, index);
  });
  obj[1] = items2;
  items[1] = callback2(View, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;