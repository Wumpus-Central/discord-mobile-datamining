// discord_app/modules/age_assurance/native/AgeVerificationGetStartedModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" } };
let closure_5 = createStyles.createStyles(obj2);
let obj4 = {
  INTRO: "INTRO",
  RETRY: "RETRY",
  EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO",
  GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION",
};
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
      isRetry(flag[4]).pop();
      if (closure_3 != null) {
        closure_3();
      }
    }
    const obj = {};
    const obj2 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      render() {
        return onComplete(isRetry(flag[6]), { onClose: closeModal, modalSessionId, entryPoint });
      },
    };
    obj[obj4.INTRO] = obj2;
    obj4 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null,
    };
    obj4.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj4.render = function render() {
      return onComplete(isRetry(flag[7]), { onClose: closeModal, modalSessionId });
    };
    obj[obj4.RETRY] = obj4;
    const obj6 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null,
    };
    obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(closeModal);
    obj6.render = function render(arg0, navigation) {
      return onComplete(isRetry(flag[8]), {
        onClose: closeModalWithOnComplete,
        modalSessionId,
        classificationId,
        entryPoint,
        navigation,
      });
    };
    obj[obj4.EXPRESSIVE_INTRO] = obj6;
    const obj8 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null,
    };
    obj8.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj8.render = function render() {
      return onComplete(isRetry(flag[9]), { onClose: closeModalWithOnComplete, modalSessionId });
    };
    obj[obj4.GOOGLE_WALLET_VERIFICATION] = obj8;
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
}
export const AgeVerificationGetStartedModalScenes = obj4;
