// discord_app/modules/conjure/tips/native/ConjureTipGutterRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureNativeStatusLine from "../../agent_activity/native/ConjureNativeStatusLine.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles((arg0, marginTop) => {
  const obj = {
    row: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET,
    },
    gutter: null,
    content: null,
  };
  const size = {
    width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE,
    marginRight: ConjureNativeStatusLine.MESSAGE_AVATAR_GAP,
    height: Text_Text.TextStyleSheet[arg0].lineHeight,
    marginTop,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.gutter = size;
  obj.content = { flex: 1, minWidth: 0 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipGutterRow.tsx");

export default function ConjureTipGutterRow(children) {
  let num = children.firstLineInset;
  ({ icon, tone, firstLine } = children);
  if (num === undefined) {
    num = 0;
  }
  const tmp = closure_6(firstLine, num);
  const obj = { style: tmp.row, children: null };
  const obj2 = {
    style: tmp.gutter,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  if ("brand" === tone) {
    let ICON_MUTED = nativeDefault.colors.ICON_BRAND;
  } else {
    ICON_MUTED = nativeDefault.colors.ICON_MUTED;
  }
  obj2.children = React4(icon, { size: "sm", color: ICON_MUTED });
  const items = [React4(View, obj2), React4(View, { style: tmp.content, children: children.children })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
