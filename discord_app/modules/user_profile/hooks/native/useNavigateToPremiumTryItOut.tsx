// discord_app/modules/user_profile/hooks/native/useNavigateToPremiumTryItOut.tsx
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserProfileAnalyticsUtils from "../../UserProfileAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../UserProfileSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8307).TrackUserProfileEditActions;
const UserSettingsSections = fn(1085).UserSettingsSections;
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
      resetPending: closure_0(6670).resetAllPending,
      onHasEdits: closure_0(4985).dismissKeyboard,
      onConfirm() {
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: initialTarget, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW });
        const obj2 = { userId: initialTarget, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
        UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
      }
    };
    navigation(9633)(obj);
  }, items);
});