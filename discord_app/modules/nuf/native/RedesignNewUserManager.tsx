// === Module 17909: RedesignNewUserManager ===

// Module 17909 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8658 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 17910 */;
import NewUserUtils from "NewUserUtils" /* 17914 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12437 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2057 */;
import NewUserStore from "NewUserStore" /* 6138 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
const prototype = function RedesignNewUserManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastShownStepIndex = -1;
  applyArgumentsResult._resumeAfterVerificationUserId = null;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    },
    ONBOARDING_START() {
      return applyArgumentsResult.handleOnboardingStart();
    },
    USER_REQUIRED_ACTION_UPDATE(requiredAction) {
      return applyArgumentsResult.handleRequiredActionUpdate(requiredAction);
    }
  };
  applyArgumentsResult.startOnboarding = function startOnboarding() {
    if (tmp2(UserRequiredActionStore.getAction(), "nuf-verification-gate")) {
      applyArgumentsResult._resumeAfterVerificationUserId = AuthenticationStore.getId();
    } else {
      applyArgumentsResult._resumeAfterVerificationUserId = null;
      React3(instant_invite_InstantInviteUtils.hasDeferredInvite() ? React4.ONBOARDING_INVITE : React4.ONBOARDING);
      const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(false, -1, -1);
      nextOnboardingStep.then((result) => {
        ({ lastShownStepIndex, onboardingStepIndex } = result);
        if (tmp3(action.getAction(), "nuf-verification-gate")) {
          closure_1_0._resumeAfterVerificationUserId = id.getId();
        } else {
          const rootNavigationRef = applyArgumentsResult(dependencyMap[5]).getRootNavigationRef();
          const tmp6 = null == rootNavigationRef || !rootNavigationRef.isReady();
          let someResult = !tmp6;
          if (!tmp6) {
            const routes = rootNavigationRef.getRootState().routes;
            someResult = routes.some((item) => {
              const coerceModalRouteResult = closure_1_0(dependencyMap[6]).coerceModalRoute(item);
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
              return key === closure_1_0(dependencyMap[7]).NEW_USER_MODAL_KEY;
            });
          }
          if (!someResult) {
            const keyForOnboardingStep = applyArgumentsResult(dependencyMap[10]).getKeyForOnboardingStep(onboardingStepIndex);
            if (null != keyForOnboardingStep) {
              const tmpResult = ModalActionCreatorsDefault;
              const tmp17 = applyArgumentsResult(dependencyMap[13])(dependencyMap[12], dependencyMap.paths);
              const obj2 = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
              const NEW_USER_MODAL_KEY = applyArgumentsResult(dependencyMap[7]).NEW_USER_MODAL_KEY;
              let str = "card";
              if (tmp4Result2.isAndroid()) {
                str = "transparentModal";
              }
              const obj3 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
              tmpResult.pushLazy(tmp17, obj2, NEW_USER_MODAL_KEY, obj3);
              tmp4Result2 = applyArgumentsResult(dependencyMap[14]);
            }
            const tmp4Result = applyArgumentsResult(dependencyMap[10]);
          }
          const obj = applyArgumentsResult(dependencyMap[5]);
        }
        tmp3 = isFullScreenVerificationModalRequiredDefault;
      });
      const tmp5Result = NewUserUtils;
    }
    tmp2 = isFullScreenVerificationModalRequiredDefault;
  };
  applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
    applyArgumentsResult.startOnboarding();
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != NewUserStore.getType()) {
      if (!obj.isModalOpen()) {
        applyArgumentsResult.startOnboarding();
      }
      obj = NavigationRouteUtils;
    }
  };
  applyArgumentsResult.handleRequiredActionUpdate = function handleRequiredActionUpdate(requiredAction) {
    if (null == requiredAction.requiredAction) {
      let tmp2 = null != applyArgumentsResult._resumeAfterVerificationUserId;
      if (tmp2) {
        tmp2 = applyArgumentsResult._resumeAfterVerificationUserId === AuthenticationStore.getId();
      }
      if (!tmp2) {
        tmp2 = null != NewUserStore.getType();
      }
      if (tmp2) {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        const tmp6 = null == rootNavigationRef || !rootNavigationRef.isReady();
        let someResult = !tmp6;
        if (!tmp6) {
          const routes = rootNavigationRef.getRootState().routes;
          someResult = routes.some((item) => {
            const coerceModalRouteResult = closure_1_0(dependencyMap[6]).coerceModalRoute(item);
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
            return key === closure_1_0(dependencyMap[7]).NEW_USER_MODAL_KEY;
          });
        }
        if (!someResult) {
          applyArgumentsResult.startOnboarding();
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype1;