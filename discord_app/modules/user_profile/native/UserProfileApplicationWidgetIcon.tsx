// === Module 10225: UserProfileApplicationWidgetIcon ===

// Module 10225 (UserProfileApplicationWidgetIcon)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5481 */;
import createStyles from "createStyles" /* 4794 */;
import size_mod from "module_2" /* 2 */;

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
};