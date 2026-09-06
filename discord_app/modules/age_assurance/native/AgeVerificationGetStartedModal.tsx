// === Module 8576: AgeVerificationGetStartedModal ===

// Module 8576 (AgeVerificationGetStartedModal)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { headerStyle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createStyles.headerStyle = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
let obj1 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default function AgeVerificationGetStartedModal(entryPoint) {
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
  const memo = classificationId.useMemo(() => entryPoint(flag[10]).v4(), []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = classificationId.useMemo(() => {
    const modalSessionId = memo;
    closure_3 = onComplete;
    function closeModal() {
      return entryPoint(classificationId[4]).pop();
    }
    function closeModalWithOnComplete() {
      let arr = isRetry(flag[4]);
      arr = arr.pop();
      if (closure_3 != null) {
        closure_3();
      }
    }
    let obj = {};
    obj = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    let obj2 = NavigatorHeader;
    obj.headerLeft = obj2.getHeaderCloseButton(closeModal);
    obj.render = function render() {
      return onComplete(isRetry(flag[6]), { onClose: closeModal, modalSessionId, entryPoint });
    };
    obj[obj1.INTRO] = obj;
    obj = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      render() {
        return onComplete(isRetry(flag[7]), { onClose: closeModal, modalSessionId });
      }
    };
    obj[obj1.RETRY] = obj;
    obj1 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj1.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj1.render = function render(arg0, navigation) {
      return onComplete(isRetry(flag[8]), { onClose: closeModalWithOnComplete, modalSessionId, classificationId, entryPoint, navigation });
    };
    obj[obj1.EXPRESSIVE_INTRO] = obj1;
    obj2 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj2.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj2.render = function render() {
      return onComplete(isRetry(flag[9]), { onClose: closeModalWithOnComplete, modalSessionId });
    };
    obj[obj1.GOOGLE_WALLET_VERIFICATION] = obj2;
    return obj;
  }, items);
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
  let obj = { screens: memo1, initialRouteName: null, headerBackTitle: null };
  if (flag) {
    let EXPRESSIVE_INTRO = tmp9.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = isRetry ? tmp9.RETRY : tmp9.INTRO;
  }
  obj.initialRouteName = EXPRESSIVE_INTRO;
  const intl = tmp7(tmp8[13]).intl;
  obj.headerBackTitle = intl.string(entryPoint(flag[13]).t["13/7kX"]);
  return onComplete(entryPoint(flag[12]).Navigator, obj);
};
export const AgeVerificationGetStartedModalScenes = obj1;