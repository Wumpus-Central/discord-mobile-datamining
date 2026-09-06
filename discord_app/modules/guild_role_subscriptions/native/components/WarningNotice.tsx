// discord_app/modules/guild_role_subscriptions/native/components/WarningNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef5597 from "../../../../../_runtime/metro/05597__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  horizontalContainer: null,
  message: null,
  actionButtonWrapper: null,
  containerYellow: null,
  textYellow: null,
  alertIcon: null,
};
createStyles = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
createStyles.container = createStyles;
createStyles.horizontalContainer = { flexDirection: "row", alignItems: "center" };
createStyles.message = { flex: 1, marginStart: 10, textAlignVertical: "center" };
createStyles.actionButtonWrapper = { marginTop: 24, alignSelf: "center", width: "100%" };
createStyles.containerYellow = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
};
let obj1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
};
createStyles.textYellow = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
createStyles.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [style, ,];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj.style = items;
  obj = { style: tmp.horizontalContainer, children: null };
  obj = { style: tmp.alertIcon, source: _modDef5597 };
  const items1 = [React4(FastImageDefault, obj)];
  const obj1 = { style: null, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
  const items2 = [,];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  obj1.style = items2;
  items1[1] = React4(Text_Text.Text, obj1);
  obj.children = items1;
  const items3 = [hasOwnProperty(View, obj)];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    const obj2 = { style: tmp.actionButtonWrapper, children: null };
    const obj3 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj2.children = React4(components_Button_Button.Button, obj3);
    tmp4Result = React4(View, obj2);
  }
  items3[1] = tmp4Result;
  obj.children = items3;
  return hasOwnProperty(View, obj);
}
