// discord_app/modules/user_settings/authorized_apps/native/InfoBox.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { infoBox: null, infoBoxWarning: null, infoText: null };
createCacheKey = {
  borderRadius: ThemesDefault.radii.xs,
  padding: 8,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: ThemesDefault.colors.TEXT_LINK,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO,
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  borderColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
createCacheKey[2] = { flex: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { INFO: "info", WARNING: "warning" };
let obj1 = {
  borderColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING,
  backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj2.INFO;
  }
  const tmp2 = callback3();
  const items = [tmp2.infoBox];
  const items1 = [,];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  let obj = {};
  obj = { color: ThemesDefault.colors.TEXT_LINK };
  obj[obj2.INFO] = callback(CircleInformationIcon.CircleInformationIcon, obj);
  obj = { color: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
  obj[obj2.WARNING] = callback(CircleErrorIcon.CircleErrorIcon, obj);
  obj1 = { style: items2, children: null };
  items2 = [style, ...{ [closure_7.INFO]: items, [closure_7.WARNING]: items1 }[INFO]];
  const items3 = [obj[INFO]];
  obj2 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = callback(Text.Text, obj2);
  obj1[1] = items3;
  return callback2(View, obj1);
}
export const InfoBoxLooks = obj2;
