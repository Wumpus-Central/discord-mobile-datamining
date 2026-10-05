// === Module 8260: AgeVerificationGetStartedModal ===

// Module 8260 (AgeVerificationGetStartedModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import GoogleWalletVerificationScreenDefault from "GoogleWalletVerificationScreen" /* 8249 */;
import AgeVerificationIntroScreenDefault from "AgeVerificationIntroScreen" /* 8261 */;
import AgeVerificationRetryScreenDefault from "AgeVerificationRetryScreen" /* 8265 */;
import AgeVerificationEmbeddedIntroScreenDefault from "AgeVerificationEmbeddedIntroScreen" /* 8266 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
function getScreens(headerStyle, modalSessionId, entryPoint, classificationId, arg4) {
  let obj5;
  let obj7;
  let obj9;
  _require = modalSessionId;
  dependencyMap = classificationId;
  let closure_3 = arg4;
  function closeModal() {
    const arr = entryPoint(classificationId[4]);
    return arr.pop();
  }
  function closeModalWithOnComplete() {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (closure_3 != null) {
      closure_3();
    }
  }
  const obj = {};
  const INTRO = obj3.INTRO;
  const obj2 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: obj3.getHeaderCloseButton(closeModal),
    render() {
      return jsx(AgeVerificationIntroScreenDefault, { onClose: closeModal, modalSessionId, entryPoint });
    }
  };
  obj3 = require("NavigatorHeader");
  obj[INTRO] = obj2;
  const RETRY = obj3.RETRY;
  const obj4 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: obj5.getHeaderCloseButton(closeModal),
    render() {
      return jsx(AgeVerificationRetryScreenDefault, { onClose: closeModal, modalSessionId });
    }
  };
  obj[RETRY] = obj4;
  obj5 = require("NavigatorHeader");
  const EXPRESSIVE_INTRO = obj3.EXPRESSIVE_INTRO;
  const obj6 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: obj7.getHeaderCloseButton(closeModal),
    render(arg0, navigation) {
      return jsx(AgeVerificationEmbeddedIntroScreenDefault, { onClose: closeModalWithOnComplete, modalSessionId, classificationId, entryPoint, navigation });
    }
  };
  obj[EXPRESSIVE_INTRO] = obj6;
  obj7 = require("NavigatorHeader");
  const GOOGLE_WALLET_VERIFICATION = obj3.GOOGLE_WALLET_VERIFICATION;
  const obj8 = {
    headerStyle: headerStyle.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: obj9.getHeaderBackButton(),
    render() {
      return jsx(GoogleWalletVerificationScreenDefault, { onClose: closeModalWithOnComplete, modalSessionId });
    }
  };
  obj[GOOGLE_WALLET_VERIFICATION] = obj8;
  obj9 = require("NavigatorHeader");
  return obj;
}
const jsx = Fragment.jsx;
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((entryPoint) => {
  let EXPRESSIVE_PRIMARY;
  let classificationId;
  let first;
  let isRetry;
  let onComplete;
  let useEmbeddedMethods;
  let obj = entryPoint(EXPRESSIVE_PRIMARY[11]);
  const cResult = obj.c(17);
  entryPoint = entryPoint.entryPoint;
  ({ isRetry, useEmbeddedMethods, classificationId, onComplete } = entryPoint);
  const tmp5 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = entryPoint(EXPRESSIVE_PRIMARY[12]);
    const v4Result = tmpResult.v4();
    cResult[0] = v4Result;
    first = v4Result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === classificationId) {
    if (cResult[2] === entryPoint) {
      if (cResult[3] === onComplete) {
        let tmp8;
        if (cResult[4] === tmp5) {
          tmp8 = cResult[5];
        }
        const AgeVerificationModalVersion = tmp(tmp2[13]).AgeVerificationModalVersion;
        if (undefined !== useEmbeddedMethods && useEmbeddedMethods) {
          EXPRESSIVE_PRIMARY = AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
        } else {
          EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
        }
        if (cResult[6] === entryPoint) {
          let tmp10;
          let tmp11;
          if (cResult[7] === EXPRESSIVE_PRIMARY) {
            tmp10 = cResult[8];
            tmp11 = cResult[9];
          }
          const effect = react.useEffect(tmp10, tmp11);
          if (cResult[10] === isRetry) {
            let tmp14;
            let tmp17;
            if (cResult[11] === (undefined !== useEmbeddedMethods && useEmbeddedMethods)) {
              tmp14 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[14]).intl;
              cResult[13] = intl.string(entryPoint(EXPRESSIVE_PRIMARY[14]).t["13/7kX"]);
              intl.string(entryPoint(EXPRESSIVE_PRIMARY[14]).t["13/7kX"]);
              class T {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                  return;
                }
              }
            } else {
              tmp17 = cResult[13];
            }
            if (cResult[14] === tmp8) {
              let tmp19;
              if (cResult[15] === tmp14) {
                tmp19 = cResult[16];
              }
              return tmp19;
            }
            class T {
              constructor() {
                obj = closure_0(closure_2[13]);
                result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
                return;
              }
            }
            const tmp20 = jsx(entryPoint(EXPRESSIVE_PRIMARY[15]).Navigator, { screens: tmp8, initialRouteName: tmp14, headerBackTitle: tmp17 });
            cResult[14] = tmp8;
            cResult[15] = tmp14;
            cResult[16] = tmp20;
            tmp19 = tmp20;
          }
          class T {
            constructor() {
              obj = closure_0(closure_2[13]);
              result = obj.trackAgeVerificationModalViewed(closure_1, PRIMARY, entryPoint);
              return;
            }
          }
          cResult[10] = isRetry;
          cResult[11] = undefined !== useEmbeddedMethods && useEmbeddedMethods;
          cResult[12] = tmp16;
          tmp14 = tmp16;
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
}) : ((entryPoint) => {
  let EXPRESSIVE_INTRO;
  let intl;
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
  const memo = classificationId.useMemo(() => {
    const obj = entryPoint(flag[12]);
    return obj.v4();
  }, []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = classificationId.useMemo(() => getScreens(closure_5, memo, entryPoint, classificationId, onComplete), items);
  const memo2 = classificationId.useMemo(() => {
    let EXPRESSIVE_PRIMARY;
    if (flag) {
      EXPRESSIVE_PRIMARY = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
    } else {
      const AgeVerificationModalVersion = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion;
      EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
    }
    return EXPRESSIVE_PRIMARY;
  }, items1);
  const items2 = [memo, entryPoint, memo2];
  const effect = classificationId.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackAgeVerificationModalViewed(memo, memo2, entryPoint);
  }, items2);
  let obj = { screens: memo1, initialRouteName: EXPRESSIVE_INTRO, headerBackTitle: intl.string(entryPoint(flag[14]).t["13/7kX"]) };
  const Navigator = entryPoint(flag[15]).Navigator;
  const tmp6 = onComplete;
  if (flag) {
    EXPRESSIVE_INTRO = tmp9.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = isRetry ? tmp9.RETRY : tmp9.INTRO;
  }
  intl = tmp7(tmp8[14]).intl;
  return tmp6(Navigator, obj);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default tmp2;
export const AgeVerificationGetStartedModalScenes = obj3;