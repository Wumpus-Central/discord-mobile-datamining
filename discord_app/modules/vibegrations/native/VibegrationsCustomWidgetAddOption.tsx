// === Module 12621: VibegrationsCustomWidgetAddOption ===

// Module 12621 (VibegrationsCustomWidgetAddOption)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 6630 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import MagicWandIcon from "MagicWandIcon" /* 9611 */;
import VibegrationsCustomWidget from "VibegrationsCustomWidget" /* 12622 */;
import VibegrationsCustomWidgetSheet from "VibegrationsCustomWidgetSheet" /* 12623 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 }, copy: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCustomWidgetAddOption.tsx");

export default function VibegrationsCustomWidgetAddOption() {
  const tmp = closure_7();
  const tmp4 = UserProfileSharedStylesDefault();
  const canConjureVibegrationsCustomWidget = VibegrationsCustomWidget.useCanConjureVibegrationsCustomWidget("VibegrationsCustomWidgetAddOption");
  let tmp8 = null;
  if (canConjureVibegrationsCustomWidget) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef3715["27bu14"]);
    const items = [tmp4.card, tmp.row];
    obj2.style = items;
    obj2.onPress = tmp7;
    const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    const items1 = [hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3), , ];
    const obj4 = { style: tmp.copy, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(_modDef3715["4OR+L+"]);
    const items2 = [hasOwnProperty(Text_Text.Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(_modDef3715["27bu14"]);
    items2[1] = hasOwnProperty(Text_Text.Text, obj6);
    obj4.children = items2;
    items1[1] = timestampProducer(View, obj4);
    const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    items1[2] = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, obj7);
    obj2.children = items1;
    tmp8 = timestampProducer(Pressables.PressableOpacity, obj2);
  }
  return tmp8;
};