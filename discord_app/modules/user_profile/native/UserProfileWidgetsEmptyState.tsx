// === Module 16551: UserProfileWidgetsEmptyState ===

// Module 16551 (UserProfileWidgetsEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" }, textContainer: null, centeredText: null };
let obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
obj2.textContainer = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.centeredText = { textAlign: "center" };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.textContainer, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["oqalC+"]);
  const items = [React3(Text_Text.Heading, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", style: tmp.centeredText, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.O9SQ1c);
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React4(View, obj2), ];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["/NKLK5"]);
  obj5.onPress = function onPress() {

  };
  items1[1] = React3(components_Button_Button.Button, obj5);
  obj.children = items1;
  return React4(View, obj);
};