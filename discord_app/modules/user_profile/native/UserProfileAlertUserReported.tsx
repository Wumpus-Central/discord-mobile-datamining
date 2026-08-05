// discord_app/modules/user_profile/native/UserProfileAlertUserReported.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = { title: null, content: null, actions: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.IwHU3R);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.qxyRaq);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, { text: null });
};