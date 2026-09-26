// discord_app/modules/user_settings/authorized_apps/native/InfoBox.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  infoBox: {
    borderRadius: nativeDefault.radii.xs,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: nativeDefault.colors.TEXT_LINK,
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoBoxWarning: null,
  infoText: null,
};
const obj3 = {
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
};
obj2.infoBoxWarning = {
  borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
obj2.infoText = { flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = { INFO: "info", WARNING: "warning" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj5.INFO;
  }
  const tmp2 = closure_6();
  const items = [tmp2.infoBox];
  const items1 = [,];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  const obj = {};
  obj[obj5.INFO] = React4(CircleInformationIcon.CircleInformationIcon, { color: nativeDefault.colors.TEXT_LINK });
  const obj2 = { color: nativeDefault.colors.TEXT_LINK };
  obj[obj5.WARNING] = React4(CircleErrorIcon.CircleErrorIcon, { color: nativeDefault.colors.ICON_FEEDBACK_WARNING });
  const obj4 = { style: null, children: null };
  const items2 = [style, ...{ [closure_1_7.INFO]: items, [closure_1_7.WARNING]: items1 }[INFO]];
  obj4.style = items2;
  const items3 = [obj[INFO]];
  obj5 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = React4(Text_Text.Text, obj5);
  obj4.children = items3;
  return hasOwnProperty(View, obj4);
}
export const InfoBoxLooks = obj5;
