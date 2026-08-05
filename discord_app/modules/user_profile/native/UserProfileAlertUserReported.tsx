// discord_app/modules/user_profile/native/UserProfileAlertUserReported.tsx
import "noop";
import { jsx } from "jsxProd";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.IwHU3R);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.qxyRaq);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { text: null });
};