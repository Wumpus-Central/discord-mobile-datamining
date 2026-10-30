// === Module 16508: UserProfileWidgetEditingHeader ===

// Module 16508 (UserProfileWidgetEditingHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import IconButton from "IconButton" /* 8020 */;
import PlusSmallIcon from "PlusSmallIcon" /* 9550 */;
import ArrowsUpDownIcon from "ArrowsUpDownIcon" /* 12304 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, heading: { flex: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
  const tmp = closure_6();
  const obj = { style: tmp.header, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.heading, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.OYlggR);
  const items = [React4(Text_Text.Heading, obj2), , ];
  const obj3 = { size: "sm", variant: "secondary", icon: React4(PlusSmallIcon.PlusSmallIcon, { size: "xs", color: nativeDefault.colors.ICON_DEFAULT }), text: null, onPress: null };
  const intl2 = util.intl;
  obj3.text = intl2.string(util.t["lBG2s/"]);
  obj3.onPress = function onPress() {

  };
  items[1] = React4(components_Button_Button.Button, obj3);
  const obj5 = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, onPress: null };
  const obj4 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
  obj5.icon = React4(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.ICON_DEFAULT });
  const intl3 = util.intl;
  obj5.accessibilityLabel = intl3.string(util.t.tm1WHd);
  obj5.onPress = function onPress() {

  };
  items[2] = React4(IconButton.IconButton, obj5);
  obj.children = items;
  return hasOwnProperty(View, obj);
};