// discord_app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
import RootNavigationRef from "../../../../main_tabs_v2/RootNavigationRef.native.tsx";
import RegistrationUIStore from "../../RegistrationUIStore.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import RegistrationConstants from "../../../RegistrationConstants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let constants2;
      let context;
      let tmp3;
      let tmp4;
      let obj = context(576);
      const cResult = obj.c(3);
      context = react.useContext(context(15903).TrackRegistrationContext);
      if (cResult[0] !== context) {
        const fn = function o() {
          let obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          let current;
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
          }
          if (null != current) {
            return rootNavigationRef.addListener("state", () => {
              const obj = context(dependencyMap[7]);
              const isModalOpenResult = obj.isModalOpen("hcaptcha") && closure_2_3();
              if (isModalOpenResult) {
                const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
                closure_1_0(obj2);
              }
            });
          }
        };
        const items = [context];
        cResult[0] = context;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const layoutEffect = react.useLayoutEffect(tmp3, tmp4);
    }
  : () => {
      let constants2;
      let context;
      context = react.useContext(context(15903).TrackRegistrationContext);
      const items = [context];
      const layoutEffect = react.useLayoutEffect(() => {
        let obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        let current;
        if (rootNavigationRef != null) {
          current = rootNavigationRef.current;
        }
        if (null != current) {
          return rootNavigationRef.addListener("state", () => {
            const obj = context(dependencyMap[7]);
            const isModalOpenResult = obj.isModalOpen("hcaptcha") && closure_2_3();
            if (isModalOpenResult) {
              const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
              closure_1_0(obj2);
            }
          });
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = tmp3;
