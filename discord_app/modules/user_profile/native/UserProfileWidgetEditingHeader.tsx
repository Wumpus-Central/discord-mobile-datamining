// === Module 16220: UserProfileWidgetEditingHeader ===

// Module 16220 (UserProfileWidgetEditingHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import IconButton from "IconButton" /* 7991 */;
import PlusSmallIcon from "PlusSmallIcon" /* 9500 */;
import ArrowsUpDownIcon from "ArrowsUpDownIcon" /* 12074 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let obj2 = { header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, heading: { flex: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetEditingHeader() {
  const cResult = c.c(8);
  const tmp4 = closure_6();
  ({ header, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.OYlggR);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: heading, children: first };
    const tmp9 = React4(Text_Text.Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
    obj3.icon = React4(PlusSmallIcon.PlusSmallIcon, obj4);
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t["lBG2s/"]);
    obj3.onPress = function onPress() {

    };
    const tmp13 = React4(components_Button_Button.Button, obj3);
    cResult[3] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { size: "sm", variant: "secondary", icon: null, accessibilityLabel: null, onPress: null };
    const obj6 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
    obj5.icon = React4(ArrowsUpDownIcon.ArrowsUpDownIcon, obj6);
    const intl3 = util.intl;
    obj5.accessibilityLabel = intl3.string(util.t.tm1WHd);
    obj5.onPress = function onPress() {

    };
    const tmp17 = React4(IconButton.IconButton, obj5);
    cResult[4] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp4.header) {
    if (cResult[6] === tmp7) {
      let tmp18 = cResult[7];
    }
    return tmp18;
  }
  const obj7 = { style: header, children: null };
  const items = [tmp7, tmp10, tmp14];
  obj7.children = items;
  const tmp19 = hasOwnProperty(View, obj7);
  cResult[5] = tmp4.header;
  cResult[6] = tmp7;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : (function UserProfileWidgetEditingHeader() {
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
});