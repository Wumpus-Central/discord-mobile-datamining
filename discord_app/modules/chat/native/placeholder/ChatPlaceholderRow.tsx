// discord_app/modules/chat/native/placeholder/ChatPlaceholderRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const tmp3 = fn(1176).AVATAR_SIZE_MAP[fn(undefined, 1176).AvatarSizes.NORMAL];
const createStyles = fn(4636);
let obj = {
  row: {
    paddingLeft: nativeDefault.space.PX_12,
    paddingTop: fn(12770).CHAT_PLACEHOLDER_ROW_MARGIN_TOP,
    flexDirection: "row",
  },
  rowInner: null,
  placeholderAvatar: null,
  placeholderText: null,
  placeholderBody: null,
};
let obj3 = {
  paddingLeft: nativeDefault.space.PX_12,
  paddingTop: fn(12770).CHAT_PLACEHOLDER_ROW_MARGIN_TOP,
  flexDirection: "row",
};
obj.rowInner = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: tmp3,
  width: tmp3,
  borderRadius: nativeDefault.radii.round,
};
obj.placeholderAvatar = size;
const obj4 = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.placeholderText = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: fn(12770).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: fn(12770).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
};
obj.placeholderBody = { marginTop: fn(12770).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = createStyles.createStyles(obj);
let obj6 = { marginTop: fn(12770).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default noop.memo(function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = closure_5();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let obj = { style: null };
      let items1 = [tmp.placeholderText, tmp.placeholderBody];
      let obj2 = { width: null };
      let _HermesInternal = HermesInternal;
      obj2.width = "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%";
      items1[2] = obj2;
      obj.style = items1;
      let arr = items.push(React3(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  const obj3 = { style: tmp.row, children: null };
  const items2 = [React3(View, { style: tmp.placeholderAvatar })];
  const obj5 = { style: tmp.rowInner, children: null };
  const obj6 = { style: null };
  const items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  obj6.style = items3;
  const items4 = [React3(View, obj6), items];
  obj5.children = items4;
  items2[1] = React4(View, obj5);
  obj3.children = items2;
  return React4(View, obj3);
});
