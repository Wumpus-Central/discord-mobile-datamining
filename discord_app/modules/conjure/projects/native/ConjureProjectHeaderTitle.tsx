// === Module 18620: ConjureProjectHeaderTitle ===

// Module 18620 (ConjureProjectHeaderTitle)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import Pressables from "Pressables" /* 6152 */;
import Badge from "Badge" /* 6159 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14294 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
const createStyles = fn(5043);
let obj2 = { row: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, titles: null, titleText: null };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.titles = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.titleText = { flexShrink: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default function ConjureProjectHeaderTitle(arg0) {
  ({ project, draft } = arg0);
  ({ title, onPressIcon } = arg0);
  if (draft === undefined) {
    draft = false;
  }
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  let tmp4 = null;
  if (null != project) {
    const obj2 = { onPress: onPressIcon, hitSlop, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef4245.FzfmQ8);
    const obj3 = { project, size: "list" };
    obj2.children = React4(ConjureProjectIconDefault, obj3);
    tmp4 = React4(Pressables.PressableOpacity, obj2);
  }
  items = [tmp4, ];
  const obj4 = { style: tmp.titles, children: null };
  const items1 = [React4(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, maxFontSizeMultiplier: 2, variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.titleText, children: title }), ];
  let tmp10Result = null;
  if (draft) {
    const obj6 = { type: null, variant: "secondary" };
    const obj7 = { text: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(_modDef4245["2+GiMw"]);
    obj6.type = obj7;
    tmp10Result = React4(Badge.Badge, obj6);
  }
  items1[1] = tmp10Result;
  obj4.children = items1;
  items[1] = hasOwnProperty(View, obj4);
  obj.children = items;
  return hasOwnProperty(View, obj);
};