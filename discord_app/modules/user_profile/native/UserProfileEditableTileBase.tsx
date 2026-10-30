// === Module 16504: UserProfileEditableTileBase ===

// Module 16504 (UserProfileEditableTileBase)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 6974 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
const obj2 = { tile: { height: 100, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, borderOverlay: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm };
obj2.borderOverlay = rect;
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditableTileBase.tsx");

export default function UserProfileEditableTileBase(arg0) {
  ({ onPress, accessibilityLabel, accessibilityValue, children, style } = arg0);
  const tmp = closure_5();
  const obj = { onPress, accessibilityRole: "button", accessibilityLabel, accessibilityValue: { text: accessibilityValue }, accessibilityHint: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t["4lAcxv"]);
  const items = [tmp.tile, style];
  obj.style = items;
  const items1 = [children, React3(View, { style: tmp.borderOverlay, pointerEvents: "none" })];
  obj.children = items1;
  return React4(Pressables.PressableHighlight, obj);
};