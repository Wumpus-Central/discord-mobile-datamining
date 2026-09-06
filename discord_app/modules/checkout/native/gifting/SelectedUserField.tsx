// === Module 10857: SelectedUserField ===

// Module 10857 (SelectedUserField)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import CircleXIcon from "CircleXIcon" /* 6616 */;
import InputFieldContainer from "InputFieldContainer" /* 6621 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7051 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null, opener: null, openerWithClearButton: null, searchIcon: null, userPill: null, userPillText: null, clearButton: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.content = { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" };
createStyles.opener = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
createStyles.openerWithClearButton = { paddingRight: 0 };
const obj1 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
createStyles.searchIcon = { marginRight: nativeDefault.space.PX_8 };
let obj2 = { marginRight: nativeDefault.space.PX_8 };
createStyles.userPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
createStyles.userPillText = { marginLeft: 6 };
let obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
createStyles.clearButton = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.content, children: null };
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  obj = { style: items, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = util.intl;
    let obj3 = UserUtilsDefault;
    const _HermesInternal2 = HermesInternal;
    let combined = "" + intl3.string(util.t.xFn72s) + ", " + obj3.getName(selectedUser);
    const stringResult = intl3.string(util.t.xFn72s);
  } else {
    const intl = util.intl;
    const intl2 = util.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(util.t.xFn72s) + ", " + intl2.string(util.t.R0vK0N);
    const stringResult1 = intl.string(util.t.xFn72s);
  }
  obj.accessibilityLabel = combined;
  const items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" }), ];
  if (null != selectedUser) {
    const obj2 = { style: tmp.userPill, children: null };
    obj3 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
    const items2 = [hasOwnProperty(native.Avatar, obj3), ];
    const obj4 = { variant: "text-md/medium", style: tmp.userPillText, children: UserUtilsDefault.getName(selectedUser) };
    items2[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj2.children = items2;
    let tmp2Result = timestampProducer(React4, obj2);
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = util.intl;
    obj5.children = intl4.string(util.t.R0vK0N);
    tmp2Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  const items3 = [timestampProducer(React3, obj), ];
  tmp2Result = null;
  if (null != selectedUser) {
    const obj6 = {
      style: tmp.clearButton,
      onPress() {
          return require(undefined);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl5 = util.intl;
    const obj7 = { text: UserUtilsDefault.getName(selectedUser) };
    obj6.accessibilityLabel = intl5.formatToPlainString(util.t["0Vb9FQ"], obj7);
    obj6.children = hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" });
    tmp2Result = hasOwnProperty(React3, obj6);
  }
  items3[1] = tmp2Result;
  obj.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj) });
  return hasOwnProperty(React4, obj);
};