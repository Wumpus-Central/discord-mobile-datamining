// === Module 17627: RedesignNewUserManager ===

// Module 17627 (RedesignNewUserManager)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 17628 */;
import NewUserModalTypes from "NewUserModalTypes" /* 17631 */;
import NewUserUtils from "NewUserUtils" /* 17632 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12341 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import NewUserStore from "NewUserStore" /* 5956 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
class RedesignNewUserManager extends AutomaticLifecycleManager {
  constructor() {
    let action;
    let id;
    const f131368 = (item) => {
      const obj = closure_1_0(closure_1_2[6]);
      const coerceModalRouteResult = obj.coerceModalRoute(item);
      let key;
      if (coerceModalRouteResult != null) {
        const params = coerceModalRouteResult.params;
        if (params != null) {
          const modal = params.modal;
          if (modal != null) {
            key = modal.key;
          }
        }
      }
      return key === closure_1_0(closure_1_2[7]).NEW_USER_MODAL_KEY;
    };
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastShownStepIndex = -1;
    applyArgumentsResult._resumeAfterVerificationUserId = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      },
      ONBOARDING_START() {
        return require.handleOnboardingStart();
      },
      USER_REQUIRED_ACTION_UPDATE(requiredAction) {
        return require.handleRequiredActionUpdate(requiredAction);
      }
    };
    applyArgumentsResult.startOnboarding = function startOnboarding() {
      const tmp2 = isFullScreenVerificationModalRequiredDefault;
      if (tmp2(UserRequiredActionStore.getAction(), "nuf-verification-gate")) {
        require._resumeAfterVerificationUserId = AuthenticationStore.getId();
      } else {
        require._resumeAfterVerificationUserId = null;
        let obj = instant_invite_InstantInviteUtils;
        _false(obj.hasDeferredInvite() ? React3.ONBOARDING_INVITE : React3.ONBOARDING);
        const tmp5Result = NewUserUtils;
        const nextOnboardingStep = tmp5Result.getNextOnboardingStep(false, -1, -1);
        nextOnboardingStep.then((result) => {
          let lastShownStepIndex;
          let onboardingStepIndex;
          ({ lastShownStepIndex, onboardingStepIndex } = result);
          const tmp3 = isFullScreenVerificationModalRequiredDefault;
          if (tmp3(action.getAction(), "nuf-verification-gate")) {
            closure_1_0._resumeAfterVerificationUserId = id.getId();
          } else {
            let obj = RootNavigationRef;
            const rootNavigationRef = obj.getRootNavigationRef();
            let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
            null == rootNavigationRef || !rootNavigationRef.isReady();
            if (someResult) {
              const routes = rootNavigationRef.getRootState().routes;
              someResult = routes.some(f131368);
            }
            if (!someResult) {
              const tmp4Result = NewUserUtils;
              const keyForOnboardingStep = tmp4Result.getKeyForOnboardingStep(onboardingStepIndex);
              if (null != keyForOnboardingStep) {
                const pushLazy = ModalActionCreatorsDefault.pushLazy;
                const tmpResult = ModalActionCreatorsDefault;
                const obj2 = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
                const tmp18 = asyncRequire(dependencyMap[12], dependencyMap.paths);
                const NEW_USER_MODAL_KEY = NewUserModalTypes.NEW_USER_MODAL_KEY;
                let str = "card";
                const tmp4Result2 = PlatformUtils;
                if (tmp4Result2.isAndroid()) {
                  str = "transparentModal";
                }
                const obj3 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
                pushLazy(tmp18, obj2, NEW_USER_MODAL_KEY, obj3);
              }
            }
          }
        });
      }
    };
    applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
      require.startOnboarding();
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (null != NewUserStore.getType()) {
        const obj = NavigationRouteUtils;
        if (!obj.isModalOpen()) {
          require.startOnboarding();
        }
      }
    };
    applyArgumentsResult.handleRequiredActionUpdate = function handleRequiredActionUpdate(requiredAction) {
      if (null == requiredAction.requiredAction) {
        const tmp2 = null != require._resumeAfterVerificationUserId && require._resumeAfterVerificationUserId === AuthenticationStore.getId() || null != NewUserStore.getType();
        if (tmp2) {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
          null == rootNavigationRef || !rootNavigationRef.isReady();
          if (someResult) {
            const routes = rootNavigationRef.getRootState().routes;
            someResult = routes.some(f131368);
          }
          if (!someResult) {
            require.startOnboarding();
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const redesignNewUserManager = new RedesignNewUserManager();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default redesignNewUserManager;