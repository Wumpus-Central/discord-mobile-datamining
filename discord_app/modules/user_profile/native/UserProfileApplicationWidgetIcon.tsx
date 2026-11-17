// discord_app/modules/user_profile/native/UserProfileApplicationWidgetIcon.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let obj = { appIcon: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj.appIcon = size;
let closure_3 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetIcon.tsx");

export default function UserProfileApplicationWidgetIcon(application) {
  application = application.application;
  let iconURL;
  if (application != null) {
    iconURL = application.getIconURL(16);
  }
  let tmp3 = null;
  if (null != iconURL) {
    const obj = { source: null, style: null };
    const obj2 = { uri: iconURL };
    obj.source = obj2;
    obj.style = tmp.appIcon;
    tmp3 = jsx(FastImageDefault, { source: null, style: null });
  }
  return tmp3;
}
