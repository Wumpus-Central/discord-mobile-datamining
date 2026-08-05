// discord_app/modules/chat/native/placeholder/ChatPlaceholderRow.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
const tmp3 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
let obj = { row: null, rowInner: null, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
obj = { paddingLeft: require("Themes").space.PX_12, paddingTop: require("PX_24").CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
obj[0] = obj;
createCacheKey = { marginHorizontal: require("Themes").space.PX_12, flex: 1 };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: require("Themes").radii.round };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: require("Themes").radii.round };
obj[3] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: require("Themes").radii.sm };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: require("Themes").radii.sm };
obj[4] = { marginTop: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = createCacheKey.createStyles(obj);
const obj4 = { marginTop: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
const memoResult = importAllResult.memo(function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = callback3();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let tmp6 = callback;
      let tmp7 = View;
      let obj = { style: null };
      let items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      obj = { width: null };
      let _HermesInternal = HermesInternal;
      obj[0] = "" + require("getChatPlaceholderRowWidth.tsx")(rounded + num) + "%";
      items1[2] = obj;
      obj[0] = items1;
      let arr = items.push(callback(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  obj = { style: tmp.row, children: null };
  const items2 = [callback(View, { style: tmp.placeholderAvatar }), ];
  const obj2 = { style: tmp.rowInner, children: null };
  const obj3 = { style: null };
  const items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  obj3[0] = items3;
  const items4 = [callback(View, obj3), items];
  obj2[1] = items4;
  items2[1] = callback2(View, obj2);
  obj[1] = items2;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default memoResult;