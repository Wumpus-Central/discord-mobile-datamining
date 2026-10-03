// === Module 6008: EmailVerificationModal ===

// Module 6008 (EmailVerificationModal)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6007 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import ChangeEmailCollectReasonsDefault from "ChangeEmailCollectReasons" /* 6069 */;
import ChangeEmailWarningDefault from "ChangeEmailWarning" /* 6077 */;
import ConfirmEmailChangeCodeDefault from "ConfirmEmailChangeCode" /* 6095 */;
import EnterEmailDefault from "EnterEmail" /* 6475 */;
import Navigator from "Navigator" /* 6496 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function closeModal() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
function getScreens(initiallyVerified) {
  ({ isChangeEmail: require, changeEmailReason: importDefault, setChangeEmailReason: dependencyMap } = initiallyVerified);
  const obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
  const obj2 = {};
  const obj3 = { headerTitle: NavigatorHeader.getHeaderNoTitle(), headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS;
  obj3.impressionProperties = obj;
  obj3.render = function render() {
    return jsx(ChangeEmailCollectReasonsDefault, { changeEmailReason, setChangeEmailReason });
  };
  obj2[VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS] = obj3;
  const obj6 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj6.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj6.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING;
  obj6.impressionProperties = obj;
  obj6.render = function render() {
    return jsx(ChangeEmailWarningDefault, { changeEmailReason });
  };
  obj2[VerificationModalScenes.CHANGE_EMAIL_WARNING] = obj6;
  const obj9 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj9.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj9.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj9.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL;
  obj9.impressionProperties = obj;
  obj9.render = function render() {
    return jsx(changeEmailReason(setChangeEmailReason[11]), {});
  };
  obj2[VerificationModalScenes.RESEND_EMAIL] = obj9;
  const obj12 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj12.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj12.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj12.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
  obj12.impressionProperties = obj;
  obj12.render = function render() {
    return jsx(changeEmailReason(setChangeEmailReason[12]), {});
  };
  obj2[VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START] = obj12;
  const obj15 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj15.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj15.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj15.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
  obj15.impressionProperties = obj;
  obj15.render = function render() {
    return jsx(ConfirmEmailChangeCodeDefault, { isChangeEmail });
  };
  obj2[VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE] = obj15;
  const obj18 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj18.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj18.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj18.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL;
  const obj21 = {};
  let merged = Object.assign(obj);
  obj21.email_verified = initiallyVerified.initiallyVerified;
  obj18.impressionProperties = obj21;
  obj18.render = function render() {
    return jsx(EnterEmailDefault, { isChangeEmail, changeEmailReason });
  };
  obj2[VerificationModalScenes.ENTER_EMAIL] = obj18;
  const obj22 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj22.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj22.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj22.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_PASSWORD_VERIFY;
  obj22.impressionProperties = obj;
  obj22.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(changeEmailReason(setChangeEmailReason[15]), {});
  };
  obj2[VerificationModalScenes.VERIFY_PASSWORD] = obj22;
  const obj25 = { headerTitle: null, headerLeft: null, impressionName: null, impressionProperties: null, render: null };
  obj25.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj25.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
  obj25.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE;
  obj25.impressionProperties = obj;
  obj25.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(changeEmailReason(setChangeEmailReason[16]), {});
  };
  obj2[VerificationModalScenes.CHANGE_EMAIL_COMPLETE] = obj25;
  return obj2;
}
const resetChangeEmailStore = fn(6009).resetChangeEmailStore;
const VerificationModalScenes = fn(1085).VerificationModalScenes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isChangeEmail) => {
  const cResult = c.c(10);
  isChangeEmail = isChangeEmail.isChangeEmail;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class N {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = N;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, N);
  let flag;
  const tmpResult = initialize;
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp8Result = useInitialValueDefault(flag);
  [tmp11, tmp12] = noop.useState();
  if (cResult[2] === tmp11) {
    if (cResult[3] === tmp8Result) {
      if (cResult[4] === isChangeEmail) {
        let tmp13 = cResult[5];
      }
      if (!isChangeEmail) {
        let email;
        if (stateFromStores != null) {
          email = stateFromStores.email;
        }
        if (null != email) {
          const RESEND_EMAIL = VerificationModalScenes.RESEND_EMAIL;
          const _Symbol = Symbol;
          class N {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["13/7kX"]);
            class N {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            cResult[6] = stringResult;
            let tmp21 = stringResult;
          } else {
            tmp21 = cResult[6];
          }
          if (cResult[7] === RESEND_EMAIL) {
            if (cResult[8] === tmp13) {
              let tmp23 = cResult[9];
            }
            return tmp23;
          }
          const obj2 = { screens: tmp13, initialRouteName: RESEND_EMAIL, headerBackTitle: tmp21 };
          const tmp25 = jsx(Navigator.Navigator, { screens: tmp13, initialRouteName: RESEND_EMAIL, headerBackTitle: tmp21 });
          cResult[7] = RESEND_EMAIL;
          cResult[8] = tmp13;
          cResult[9] = tmp25;
          tmp23 = tmp25;
        }
      }
      class N {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
    }
  }
  const tmp14 = getScreens({ initiallyVerified: tmp8Result, isChangeEmail, changeEmailReason: tmp11, setChangeEmailReason: tmp12 });
  cResult[2] = tmp11;
  cResult[3] = tmp8Result;
  cResult[4] = isChangeEmail;
  cResult[5] = tmp14;
  tmp13 = tmp14;
  const tmp10 = _slicedToArray(noop.useState(), 2);
}) : ((isChangeEmail) => {
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  changeEmailReason = undefined;
  _slicedToArray = undefined;
  const items = [UserStore];
  const stateFromStores = isChangeEmail(changeEmailReason[19]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  const obj = isChangeEmail(changeEmailReason[19]);
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = require("useInitialValue")(flag);
  importDefault = tmp4Result;
  [changeEmailReason, _slicedToArray] = noop.useState();
  const items1 = [changeEmailReason, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      const obj2 = { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL, headerBackTitle: null };
      const intl = tmp(tmp2[21]).intl;
      obj2.headerBackTitle = intl.string(tmp(tmp2[21]).t["13/7kX"]);
      return jsx(tmp(tmp2[22]).Navigator, { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL, headerBackTitle: null });
    }
  }
  if (stateFromStores != null) {
    const verified = stateFromStores.verified;
  }
  const tmp4 = require("useInitialValue");
});