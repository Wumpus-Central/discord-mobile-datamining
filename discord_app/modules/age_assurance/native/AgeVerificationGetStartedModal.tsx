// discord_app/modules/age_assurance/native/AgeVerificationGetStartedModal.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
let result = require("createCacheKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default function AgeVerificationGetStartedModal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const isRetry = entryPoint.isRetry;
  let flag = entryPoint.useEmbeddedMethods;
  if (flag === undefined) {
    flag = false;
  }
  const classificationId = entryPoint.classificationId;
  const onComplete = entryPoint.onComplete;
  let createCacheKey;
  let memo;
  let memo2;
  const tmp = createCacheKey();
  createCacheKey = tmp;
  memo = classificationId.useMemo(() => entryPoint(flag[10]).v4(), []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = classificationId.useMemo(() => {
    let closure_0 = memo;
    let closure_1 = closure_0;
    let closure_2 = noop;
    noop = closeModal;
    closeModal = function closeModal() {
      return callback(5260).pop();
    };
    function closeModalWithOnComplete() {
      let arr = callback(5260);
      arr = arr.pop();
      if (callback2 != null) {
        callback2();
      }
    }
    let obj = {};
    obj = {
      headerStyle: closeModalWithOnComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    let obj2 = entryPoint(flag[5]);
    obj[2] = obj2.getHeaderCloseButton(closeModal);
    obj[3] = function render() {
      return closeModal(callback(6690), { onClose: closeModal, modalSessionId: closure_0, entryPoint: callback });
    };
    obj[memo.INTRO] = obj;
    obj = {
      headerStyle: closeModalWithOnComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj[2] = entryPoint(flag[5]).getHeaderCloseButton(closeModal);
    obj[3] = function render() {
      return closeModal(callback(6695), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[memo.RETRY] = obj;
    const obj1 = {
      headerStyle: closeModalWithOnComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj5 = entryPoint(flag[5]);
    obj1[2] = entryPoint(flag[5]).getHeaderCloseButton(closeModal);
    obj1[3] = function render(arg0, navigation) {
      return closeModal(callback(6696), { onClose: closeModalWithOnComplete, modalSessionId: closure_0, classificationId: dependencyMap, entryPoint: callback, navigation });
    };
    obj[memo.EXPRESSIVE_INTRO] = obj1;
    obj2 = {
      headerStyle: closeModalWithOnComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj7 = entryPoint(flag[5]);
    obj2[2] = entryPoint(flag[5]).getHeaderBackButton();
    obj2[3] = function render() {
      return closeModal(callback(6686), { onClose: closeModalWithOnComplete, modalSessionId: closure_0 });
    };
    obj[memo.GOOGLE_WALLET_VERIFICATION] = obj2;
    return obj;
  }, items);
  memo2 = classificationId.useMemo(() => {
    if (flag) {
      let EXPRESSIVE_PRIMARY = entryPoint(flag[11]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
    } else {
      const AgeVerificationModalVersion = entryPoint(flag[11]).AgeVerificationModalVersion;
      EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
    }
    return EXPRESSIVE_PRIMARY;
  }, items1);
  const items2 = [memo, entryPoint, memo2];
  const effect = classificationId.useEffect(() => {
    const result = entryPoint(flag[11]).trackAgeVerificationModalViewed(memo, memo2, entryPoint);
  }, items2);
  let obj = { screens: memo1, initialRouteName: null, headerBackTitle: null };
  if (flag) {
    let EXPRESSIVE_INTRO = tmp9.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = isRetry ? tmp9.RETRY : tmp9.INTRO;
  }
  obj[1] = EXPRESSIVE_INTRO;
  const intl = tmp7(tmp8[13]).intl;
  obj[2] = intl.string(entryPoint(flag[13]).t["13/7kX"]);
  return onComplete(entryPoint(flag[12]).Navigator, obj);
};
export const AgeVerificationGetStartedModalScenes = obj1;