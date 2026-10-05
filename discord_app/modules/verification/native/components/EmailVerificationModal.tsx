// discord_app/modules/verification/native/components/EmailVerificationModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import ChangeEmailStore from "../../ChangeEmailStore.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ChangeEmailCollectReasonsDefault from "ChangeEmailCollectReasons.tsx";
import ChangeEmailWarningDefault from "ChangeEmailWarning.tsx";
import ResendEmailDefault from "ResendEmail.tsx";
import ConfirmEmailChangeStartDefault from "ConfirmEmailChangeStart.tsx";
import ConfirmEmailChangeCodeDefault from "ConfirmEmailChangeCode.tsx";
import EnterEmailDefault from "EnterEmail.tsx";
import UserSettingsConfirmPasswordDefault from "../../../user_settings/account/native/UserSettingsConfirmPassword.tsx";
import ChangeEmailCompleteDefault from "ChangeEmailComplete.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

function closeModal() {
  resetChangeEmailStore();
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.close();
}
function getScreens(initiallyVerified) {
  let changeEmailReason;
  let isChangeEmail;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj21;
  let obj23;
  let obj24;
  let obj26;
  let obj27;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let setChangeEmailReason;
  ({
    isChangeEmail: require,
    changeEmailReason: importDefault,
    setChangeEmailReason: dependencyMap,
  } = initiallyVerified);
  const obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
  initiallyVerified = initiallyVerified.initiallyVerified;
  const obj2 = {};
  const CHANGE_EMAIL_COLLECT_REASONS = VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS;
  const obj3 = {
    headerTitle: obj4.getHeaderNoTitle(),
    headerLeft: obj5.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
    impressionProperties: obj,
    render() {
      return jsx(ChangeEmailCollectReasonsDefault, {
        changeEmailReason: importDefault,
        setChangeEmailReason: dependencyMap,
      });
    },
  };
  obj4 = NavigatorHeader;
  obj2[CHANGE_EMAIL_COLLECT_REASONS] = obj3;
  obj5 = NavigatorHeader;
  const CHANGE_EMAIL_WARNING = VerificationModalScenes.CHANGE_EMAIL_WARNING;
  const obj6 = {
    headerTitle: obj7.getHeaderNoTitle(),
    headerLeft: obj8.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
    impressionProperties: obj,
    render() {
      return jsx(ChangeEmailWarningDefault, { changeEmailReason: importDefault });
    },
  };
  obj7 = NavigatorHeader;
  obj2[CHANGE_EMAIL_WARNING] = obj6;
  obj8 = NavigatorHeader;
  const RESEND_EMAIL = VerificationModalScenes.RESEND_EMAIL;
  const obj9 = {
    headerTitle: obj10.getHeaderNoTitle(),
    headerLeft: obj11.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_RESEND_VERIFICATION_EMAIL,
    impressionProperties: obj,
    render() {
      return jsx(ResendEmailDefault, {});
    },
  };
  obj10 = NavigatorHeader;
  obj2[RESEND_EMAIL] = obj9;
  obj11 = NavigatorHeader;
  const CONFIRM_EMAIL_CHANGE_START = VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START;
  const obj12 = {
    headerTitle: obj13.getHeaderNoTitle(),
    headerLeft: obj14.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
    impressionProperties: obj,
    render() {
      return jsx(ConfirmEmailChangeStartDefault, {});
    },
  };
  obj13 = NavigatorHeader;
  obj2[CONFIRM_EMAIL_CHANGE_START] = obj12;
  obj14 = NavigatorHeader;
  const CONFIRM_EMAIL_CHANGE_CODE = VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE;
  const obj15 = {
    headerTitle: obj16.getHeaderNoTitle(),
    headerLeft: obj17.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
    impressionProperties: obj,
    render() {
      return jsx(ConfirmEmailChangeCodeDefault, { isChangeEmail: require });
    },
  };
  obj16 = NavigatorHeader;
  obj2[CONFIRM_EMAIL_CHANGE_CODE] = obj15;
  obj17 = NavigatorHeader;
  const ENTER_EMAIL = VerificationModalScenes.ENTER_EMAIL;
  const obj18 = {
    headerTitle: obj19.getHeaderNoTitle(),
    headerLeft: obj20.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
    impressionProperties: obj21,
    render() {
      return jsx(EnterEmailDefault, { isChangeEmail: require, changeEmailReason: importDefault });
    },
  };
  obj19 = NavigatorHeader;
  obj20 = NavigatorHeader;
  obj21 = { email_verified: initiallyVerified };
  let merged = Object.assign(obj);
  obj2[ENTER_EMAIL] = obj18;
  const VERIFY_PASSWORD = VerificationModalScenes.VERIFY_PASSWORD;
  const obj22 = {
    headerTitle: obj23.getHeaderNoTitle(),
    headerLeft: obj24.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_PASSWORD_VERIFY,
    impressionProperties: obj,
    render(arg0) {
      UserSettingsConfirmPasswordDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    },
  };
  obj23 = NavigatorHeader;
  obj2[VERIFY_PASSWORD] = obj22;
  obj24 = NavigatorHeader;
  const CHANGE_EMAIL_COMPLETE = VerificationModalScenes.CHANGE_EMAIL_COMPLETE;
  const obj25 = {
    headerTitle: obj26.getHeaderNoTitle(),
    headerLeft: obj27.getHeaderCloseButton(closeModal),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
    impressionProperties: obj,
    render(arg0) {
      ChangeEmailCompleteDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    },
  };
  obj26 = NavigatorHeader;
  obj2[CHANGE_EMAIL_COMPLETE] = obj25;
  obj27 = NavigatorHeader;
  return obj2;
}
let _slicedToArray = _slicedToArray_mod;
const resetChangeEmailStore = ChangeEmailStore.resetChangeEmailStore;
const VerificationModalScenes = Constants.VerificationModalScenes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isChangeEmail) => {
      let currentUser;
      let tmp11;
      let tmp12;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, N);
      let flag;
      const tmp8 = useInitialValueDefault;
      if (stateFromStores != null) {
        flag = stateFromStores.verified;
      }
      if (flag == null) {
        flag = false;
      }
      const tmp8Result = tmp8(flag);
      [tmp11, tmp12] = react.useState();
      _slicedToArray(react.useState(), 2);
      if (cResult[2] === tmp11) {
        if (cResult[3] === tmp8Result) {
          let tmp13;
          if (cResult[4] === isChangeEmail) {
            tmp13 = cResult[5];
          }
          if (!isChangeEmail) {
            let RESEND_EMAIL;
            let tmp19;
            let email;
            if (stateFromStores != null) {
              email = stateFromStores.email;
            }
            if (null != email) {
              RESEND_EMAIL = VerificationModalScenes.RESEND_EMAIL;
            }
            class N {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl2.intl;
              const stringResult = intl.string(intl2.t["13/7kX"]);
              class N {
                constructor() {
                  return closure_1_5.getCurrentUser();
                }
              }
              cResult[6] = stringResult;
              tmp19 = stringResult;
            } else {
              tmp19 = cResult[6];
            }
            if (cResult[7] === RESEND_EMAIL) {
              let tmp21;
              if (cResult[8] === tmp13) {
                tmp21 = cResult[9];
              }
              return tmp21;
            }
            const tmp23 = jsx(Navigator2.Navigator, {
              screens: tmp13,
              initialRouteName: RESEND_EMAIL,
              headerBackTitle: tmp19,
            });
            cResult[7] = RESEND_EMAIL;
            cResult[8] = tmp13;
            cResult[9] = tmp23;
            tmp21 = tmp23;
          }
          class N {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          RESEND_EMAIL = tmp17
            ? VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START
            : VerificationModalScenes.ENTER_EMAIL;
        }
      }
      const tmp14 = getScreens({
        initiallyVerified: tmp8Result,
        isChangeEmail,
        changeEmailReason: tmp11,
        setChangeEmailReason: tmp12,
      });
      cResult[2] = tmp11;
      cResult[3] = tmp8Result;
      cResult[4] = isChangeEmail;
      cResult[5] = tmp14;
      tmp13 = tmp14;
    }
  : (isChangeEmail) => {
      let changeEmailReason;
      let currentUser;
      let initiallyVerified;
      let setChangeEmailReason;
      isChangeEmail = isChangeEmail.isChangeEmail;
      importDefault = undefined;
      changeEmailReason = undefined;
      _slicedToArray = undefined;
      let obj = isChangeEmail(changeEmailReason[19]);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let flag;
      const tmp4 = require("useInitialValue");
      if (stateFromStores != null) {
        flag = stateFromStores.verified;
      }
      if (flag == null) {
        flag = false;
      }
      const tmp4Result = tmp4(flag);
      importDefault = tmp4Result;
      [changeEmailReason, _slicedToArray] = react.useState();
      const items1 = [changeEmailReason, isChangeEmail, tmp4Result];
      if (!isChangeEmail) {
        let RESEND_EMAIL;
        let email;
        if (stateFromStores != null) {
          email = stateFromStores.email;
        }
        if (null != email) {
          RESEND_EMAIL = VerificationModalScenes.RESEND_EMAIL;
        }
        const Navigator = tmp(tmp2[22]).Navigator;
        const intl = tmp(tmp2[21]).intl;
        return (
          <Navigator
            screens={tmp8}
            initialRouteName={RESEND_EMAIL}
            headerBackTitle={intl.string(isChangeEmail(changeEmailReason[21]).t["13/7kX"])}
          />
        );
      }
      let verified;
      if (stateFromStores != null) {
        verified = stateFromStores.verified;
      }
      RESEND_EMAIL = verified
        ? VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START
        : VerificationModalScenes.ENTER_EMAIL;
    };
const result = size.fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default tmp2;
