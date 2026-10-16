// === Module 15562: useNavigateToPremiumTryItOut ===

// Module 15562 (useNavigateToPremiumTryItOut)
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6904 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8543 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8512 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8535).TrackUserProfileEditActions;
const UserSettingsSections = fn(1087).UserSettingsSections;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useNavigateToPremiumTryItOut.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigateToPremiumTryItOut(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  class T {
    constructor(arg0) {
      closure_0 = arg0;
      obj = { hasEdits: null, resetPending: null, onHasEdits: null, onConfirm: null };
      tmp = closure_1(closure_1_2[7]);
      obj.hasEdits = closure_1_4.showNotice();
      obj.resetPending = closure_0(closure_1_2[8]).resetAllPending;
      obj.onHasEdits = closure_0(closure_1_2[9]).dismissKeyboard;
      obj.onConfirm = function onConfirm() { ... };
      tmpResult = tmp(obj);
      return;
    }
  }
  cResult[0] = navigation;
  cResult[1] = arg0;
  cResult[2] = T;
  tmp3 = T;
}) : (function useNavigateToPremiumTryItOut(arg0) {
  _require = arg0;
  const navigation = require("useNavigation").useNavigation();
  const items = [navigation, arg0];
  return noop.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = {
      hasEdits: UserProfileSettingsStore.showNotice(),
      resetPending: closure_0(6895).resetAllPending,
      onHasEdits: closure_0(5044).dismissKeyboard,
      onConfirm() {
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: initialTarget, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW });
        const obj2 = { userId: initialTarget, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
        UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
      }
    };
    navigation(9867)(obj);
  }, items);
});