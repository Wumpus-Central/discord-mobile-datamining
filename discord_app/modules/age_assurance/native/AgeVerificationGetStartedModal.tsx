// discord_app/modules/age_assurance/native/AgeVerificationGetStartedModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import GoogleWalletVerificationScreenDefault from "GoogleWalletVerificationScreen.tsx";
import AgeVerificationIntroScreenDefault from "AgeVerificationIntroScreen.tsx";
import AgeVerificationRetryScreenDefault from "AgeVerificationRetryScreen.tsx";
import AgeVerificationEmbeddedIntroScreenDefault from "AgeVerificationEmbeddedIntroScreen.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getScreens(headerStyle, modalSessionId, entryPoint, classificationId, arg4) {
  _require = modalSessionId;
  dependencyMap = classificationId;
  closure_3 = arg4;
  function closeModal() {
    return entryPoint(classificationId[4]).pop();
  }
  function closeModalWithOnComplete() {
    ModalActionCreatorsDefault.pop();
    if (closure_3 != null) {
      closure_3();
    }
  }
  const obj = {};
  const obj2 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(closeModal),
    render() {
      return jsx(AgeVerificationIntroScreenDefault, { onClose: closeModal, modalSessionId, entryPoint });
    },
  };
  obj[obj4.INTRO] = obj2;
  obj4 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null,
  };
  const obj3 = require("NavigatorHeader");
  obj4.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeModal);
  obj4.render = function render() {
    return jsx(AgeVerificationRetryScreenDefault, { onClose: closeModal, modalSessionId });
  };
  obj[obj4.RETRY] = obj4;
  const obj6 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null,
  };
  const obj5 = require("NavigatorHeader");
  obj6.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeModal);
  obj6.render = function render(arg0, navigation) {
    return jsx(AgeVerificationEmbeddedIntroScreenDefault, {
      onClose: closeModalWithOnComplete,
      modalSessionId,
      classificationId,
      entryPoint,
      navigation,
    });
  };
  obj[obj4.EXPRESSIVE_INTRO] = obj6;
  const obj8 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null,
  };
  const obj7 = require("NavigatorHeader");
  obj8.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  obj8.render = function render() {
    return jsx(GoogleWalletVerificationScreenDefault, { onClose: closeModalWithOnComplete, modalSessionId });
  };
  obj[obj4.GOOGLE_WALLET_VERIFICATION] = obj8;
  return obj;
}
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" } };
let closure_5 = createStyles.createStyles(obj2);
let obj4 = {
  INTRO: "INTRO",
  RETRY: "RETRY",
  EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO",
  GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION",
};
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (entryPoint) => {
      const cResult = entryPoint(EXPRESSIVE_PRIMARY[11]).c(17);
      entryPoint = entryPoint.entryPoint;
      ({ isRetry, useEmbeddedMethods, classificationId, onComplete } = entryPoint);
      const tmp5 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = tmp(tmp2[12]).v4();
        cResult[0] = v4Result;
        let first = v4Result;
        const tmpResult = tmp(tmp2[12]);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === classificationId) {
        if (cResult[2] === entryPoint) {
          if (cResult[3] === onComplete) {
            if (cResult[4] === tmp5) {
              let tmp8 = cResult[5];
            }
            const AgeVerificationModalVersion = tmp(tmp2[13]).AgeVerificationModalVersion;
            if (tmp4) {
              EXPRESSIVE_PRIMARY = AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
            } else {
              EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
            }
            if (cResult[6] === entryPoint) {
              if (cResult[7] === EXPRESSIVE_PRIMARY) {
                let tmp10 = cResult[8];
                let tmp11 = cResult[9];
              }
              const effect = noop.useEffect(tmp10, tmp11);
              if (cResult[10] === isRetry) {
                if (cResult[11] === tmp4) {
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[14]).intl;
                    cResult[13] = intl.string(tmp(tmp2[14]).t["13/7kX"]);
                    class T {
                      constructor() {
                        obj = closure_0(closure_2[13]);
                        result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                        return;
                      }
                    }
                    const stringResult = intl.string(tmp(tmp2[14]).t["13/7kX"]);
                  } else {
                    const tmp18 = cResult[13];
                  }
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === tmp14) {
                      let tmp20 = cResult[16];
                    }
                    return tmp20;
                  }
                  class T {
                    constructor() {
                      obj = closure_0(closure_2[13]);
                      result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                      return;
                    }
                  }
                  const obj2 = { screens: tmp8, initialRouteName: cResult[12], headerBackTitle: tmp18 };
                  const tmp21 = jsx(tmp(tmp2[15]).Navigator, {
                    screens: tmp8,
                    initialRouteName: cResult[12],
                    headerBackTitle: tmp18,
                  });
                  cResult[14] = tmp8;
                  cResult[15] = cResult[12];
                  cResult[16] = tmp21;
                  tmp20 = tmp21;
                }
              }
              class T {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                  return;
                }
              }
              cResult[10] = isRetry;
              cResult[11] = tmp4;
              cResult[12] = tmp16;
            }
            class T {
              constructor() {
                obj = closure_0(closure_2[13]);
                result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                return;
              }
            }
            const items = [first, entryPoint, EXPRESSIVE_PRIMARY];
            cResult[6] = entryPoint;
            cResult[7] = EXPRESSIVE_PRIMARY;
            cResult[8] = T;
            cResult[9] = items;
            tmp11 = items;
            tmp10 = T;
          }
        }
      }
      const tmp9 = getScreens(tmp5, first, entryPoint, classificationId, onComplete);
      cResult[1] = classificationId;
      cResult[2] = entryPoint;
      cResult[3] = onComplete;
      cResult[4] = tmp5;
      cResult[5] = tmp9;
      tmp8 = tmp9;
      const obj = entryPoint(EXPRESSIVE_PRIMARY[11]);
    }
  : (entryPoint) => {
      entryPoint = entryPoint.entryPoint;
      const isRetry = entryPoint.isRetry;
      let flag = entryPoint.useEmbeddedMethods;
      if (flag === undefined) {
        flag = false;
      }
      const classificationId = entryPoint.classificationId;
      const onComplete = entryPoint.onComplete;
      closure_5 = undefined;
      const tmp = closure_5();
      closure_5 = tmp;
      const memo = classificationId.useMemo(() => entryPoint(flag[12]).v4(), []);
      const items = [tmp, memo, classificationId, onComplete, entryPoint];
      const items1 = [flag, isRetry];
      const memo1 = classificationId.useMemo(
        () => getScreens(closure_5, memo, entryPoint, classificationId, onComplete),
        items,
      );
      const memo2 = classificationId.useMemo(() => {
        if (flag) {
          let EXPRESSIVE_PRIMARY = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
        } else {
          const AgeVerificationModalVersion = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion;
          EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
        }
        return EXPRESSIVE_PRIMARY;
      }, items1);
      const items2 = [memo, entryPoint, memo2];
      const effect = classificationId.useEffect(() => {
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(memo, memo2, entryPoint);
      }, items2);
      const obj = { screens: memo1, initialRouteName: null, headerBackTitle: null };
      if (flag) {
        let EXPRESSIVE_INTRO = tmp9.EXPRESSIVE_INTRO;
      } else {
        EXPRESSIVE_INTRO = isRetry ? tmp9.RETRY : tmp9.INTRO;
      }
      obj.initialRouteName = EXPRESSIVE_INTRO;
      const intl = tmp7(tmp8[14]).intl;
      obj.headerBackTitle = intl.string(entryPoint(flag[14]).t["13/7kX"]);
      return onComplete(entryPoint(flag[15]).Navigator, obj);
    };
export const AgeVerificationGetStartedModalScenes = obj4;
