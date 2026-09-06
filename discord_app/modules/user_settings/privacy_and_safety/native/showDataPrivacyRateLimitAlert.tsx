// discord_app/modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx",
);

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  const obj = { title: null, body: null, confirmText: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["43LbVL"]);
  obj.body = message;
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.BddRzS);
  obj.show(obj);
};
