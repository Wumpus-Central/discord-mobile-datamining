// discord_app/modules/guild_role_subscriptions/native/components/WarningNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 },
  horizontalContainer: { flexDirection: "row", alignItems: "center" },
  message: { flex: 1, marginStart: 10, textAlignVertical: "center" },
  actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" },
  containerYellow: null,
  alertIcon: null,
};
const obj3 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
obj2.containerYellow = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
};
obj2.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [style, ,];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const items1 = [
    React4(CircleErrorIcon.CircleErrorIcon, {
      style: tmp.alertIcon,
      size: "custom",
      color: nativeDefault.colors.ICON_FEEDBACK_WARNING,
      secondaryColor: nativeDefault.colors.WHITE,
    }),
    React4(Text_Text.Text, {
      style: tmp.message,
      variant: "text-sm/medium",
      color: "text-feedback-warning",
      children: notice,
    }),
  ];
  obj2.children = items1;
  const items2 = [hasOwnProperty(View, obj2)];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: null };
    const obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp4Result = React4(View, obj5);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return hasOwnProperty(View, obj);
}
