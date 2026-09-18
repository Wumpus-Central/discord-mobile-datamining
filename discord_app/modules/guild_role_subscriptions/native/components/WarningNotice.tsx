// === Module 18052: WarningNotice ===

// Module 18052 (WarningNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import FastImageDefault from "FastImage" /* 5757 */;
import _modDef5767 from "module_5767" /* 5767 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 }, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: null, textYellow: null, alertIcon: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
obj2.containerYellow = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
obj2.textYellow = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const obj3 = { style: tmp.alertIcon, source: _modDef5767 };
  const items1 = [React4(FastImageDefault, obj3), ];
  const obj4 = { style: null, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
  const items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  obj4.style = items2;
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  const items3 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: null };
    const obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp4Result = React4(View, obj5);
  }
  items3[1] = tmp4Result;
  obj.children = items3;
  return hasOwnProperty(View, obj);
};