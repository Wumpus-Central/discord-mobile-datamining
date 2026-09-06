// discord_app/modules/verification/native/components/EmailVerificationModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function closeModal() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
const resetChangeEmailStore = fn(5623).resetChangeEmailStore;
const VerificationModalScenes = fn(1074).VerificationModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  let first;
  _slicedToArray = undefined;
  let obj = isChangeEmail(first[17]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = require("useInitialValue")(flag);
  importDefault = tmp4Result;
  const tmp6 = _slicedToArray(noop.useState(), 2);
  first = tmp6[0];
  _slicedToArray = tmp6[1];
  const items1 = [first, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      obj = { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL, headerBackTitle: null };
      const intl = tmp(tmp2[20]).intl;
      obj.headerBackTitle = intl.string(tmp(tmp2[20]).t["13/7kX"]);
      return jsx(tmp(tmp2[19]).Navigator, {
        screens: tmp8,
        initialRouteName: VerificationModalScenes.RESEND_EMAIL,
        headerBackTitle: null,
      });
    }
  }
  if (stateFromStores != null) {
    const verified = stateFromStores.verified;
  }
}
