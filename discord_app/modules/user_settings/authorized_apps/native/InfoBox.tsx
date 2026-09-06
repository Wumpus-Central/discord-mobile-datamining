// === Module 9459: InfoBox ===

// Module 9459 (InfoBox)
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4515 */;
import Text_Text from "Text/Text" /* 4556 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { infoBox: null, infoBoxWarning: null, infoText: null };
createStyles = { borderRadius: nativeDefault.radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
createStyles.infoBox = createStyles;
createStyles.infoBoxWarning = { borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
createStyles.infoText = { flex: 1 };
let closure_6 = createStyles.createStyles(createStyles);
let obj2 = { INFO: "info", WARNING: "warning" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj2.INFO;
  }
  const tmp2 = closure_6();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  let obj = {};
  obj = { color: nativeDefault.colors.TEXT_LINK };
  obj[obj2.INFO] = React4(CircleInformationIcon.CircleInformationIcon, obj);
  obj = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  obj[obj2.WARNING] = React4(CircleErrorIcon.CircleErrorIcon, obj);
  const obj1 = { style: null, children: null };
  const items2 = [style, ...{ [closure_1_7.INFO]: items, [closure_1_7.WARNING]: items1 }[INFO]];
  obj1.style = items2;
  const items3 = [obj[INFO], ];
  obj2 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = React4(Text_Text.Text, obj2);
  obj1.children = items3;
  return hasOwnProperty(View, obj1);
};
export const InfoBoxLooks = obj2;