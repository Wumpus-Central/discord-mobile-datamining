// discord_app/modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import obj132Default from "../../../../actions/AlertActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  const obj = { title: null, body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["43LbVL"]);
  obj[1] = message;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};