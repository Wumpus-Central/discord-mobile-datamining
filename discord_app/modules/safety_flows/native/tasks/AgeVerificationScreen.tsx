// === Module 18117: AgeVerificationScreen ===

// Module 18117 (AgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import Server from "Server" /* 1985 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import types from "types" /* 18104 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ helpLink: { textAlign: "center" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ageVerificationMethods;
  let currentUser;
  let first;
  let loading;
  let stateFromStores;
  let tmp12;
  let tmp8;
  let tmp9;
  const tmp = first;
  let obj = first(stateFromStores[7]);
  const cResult = obj.c(26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(stateFromStores[8]);
    const v4Result = tmpResult.v4();
    cResult[0] = v4Result;
    first = v4Result;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_8();
  const tmpResult3 = tmp(stateFromStores[9]);
  const onTaskComplete = tmpResult3.useOnTaskComplete();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[1] = items;
    cResult[2] = S;
    tmp9 = S;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult4 = tmp(stateFromStores[10]);
  stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[3] !== onTaskComplete) {
    const obj2 = {
      onClose() {
          const obj = { type: types.TaskInputType.Empty };
          return onTaskComplete(obj);
        }
    };
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[12])(tmp12));
  let prop;
  onTaskComplete(stateFromStores[12])(tmp12);
  const tmp15 = cResult[5];
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  if (tmp15 === prop) {
    let tmp17;
    if (cResult[6] === onTaskComplete) {
      tmp17 = cResult[7];
    }
    if (cResult[8] === stateFromStores) {
      let tmp18;
      let tmp21;
      let tmp25;
      let tmp24;
      let tmp23;
      let tmp32;
      if (cResult[9] === onTaskComplete) {
        tmp18 = cResult[10];
      }
      const effect = react.useEffect(tmp17, tmp18);
      class S {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        const items1 = [first];
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[11] = I;
        cResult[12] = items1;
        tmp21 = items1;
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        tmp21 = cResult[12];
      }
      const effect1 = react.useEffect(I, tmp21);
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        const tmp26 = jsx(tmp(stateFromStores[15]).ShieldSpotIllustration, {});
        const intl = tmp(tmp2[16]).intl;
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        const tmp27Result = tmp27(onTaskComplete(stateFromStores[17])["dSkE/A"]);
        const intl2 = tmp(tmp2[16]).intl;
        const obj3 = {
          handleOnHelpUrlHook() {
                  const openUrl = onTaskComplete(stateFromStores[19]).openUrl;
                  onTaskComplete(stateFromStores[19]);
                  const obj = onTaskComplete(stateFromStores[20]);
                  openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
                }
        };
        const formatResult = intl2.format(onTaskComplete(stateFromStores[18]).RpMIT0, obj3);
        cResult[13] = formatResult;
        cResult[14] = tmp26;
        cResult[15] = tmp27Result;
        tmp25 = tmp27Result;
        tmp24 = tmp26;
        tmp23 = formatResult;
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        tmp24 = cResult[14];
        tmp25 = cResult[15];
      }
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        cResult[16] = tmp31;
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
      }
      const _Symbol3 = Symbol;
      const helpLink = tmp6.helpLink;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        const stringResult = obj8.string(tmp(stateFromStores[16]).t["2jxGer"]);
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[17] = stringResult;
        tmp32 = stringResult;
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
      }
      if (cResult[18] !== tmp6.helpLink) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        tmp36[1] = tmp30;
        const ModalDisclaimer = tmp(tmp2[22]).ModalDisclaimer;
        tmp36[2] = jsx(tmp(stateFromStores[23]).Text, { variant: "text-sm/medium", color: "text-link", style: helpLink, children: tmp32 });
        const tmp37 = <ModalDisclaimer>{null}</ModalDisclaimer>;
        cResult[18] = tmp6.helpLink;
        cResult[19] = tmp37;
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
      }
      if (cResult[20] !== ageVerificationMethods) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
        class S {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[20] = ageVerificationMethods;
        cResult[21] = jsx(tmp(stateFromStores[24]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: null });
        const tmp39 = jsx(tmp(stateFromStores[24]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: null });
      } else {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
      }
      if (cResult[22] === loading) {
        class I {
          constructor() {
            const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
            AgeVerificationAnalyticsUtils;
            const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
          }
        }
      }
      cResult[22] = loading;
      cResult[23] = tmp34;
      cResult[24] = tmp38;
      const tmp42 = jsx(onTaskComplete(stateFromStores[25]), { ImageComponent: tmp24, title: tmp25, subtitle: tmp23, footer: tmp34, submitting: loading, children: tmp38 });
      class V {
        constructor() {
          let prop;
          if (stateFromStores != null) {
            prop = stateFromStores.ageVerificationStatus;
          }
          if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
            const obj = { type: types.TaskInputType.Empty };
            onTaskComplete(obj);
          }
        }
      }
      cResult[25] = tmp42;
    }
    const items2 = [, ];
    class S {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    items2[1] = stateFromStores;
    cResult[8] = stateFromStores;
    cResult[9] = onTaskComplete;
    cResult[10] = items2;
    tmp18 = items2;
  }
  if (stateFromStores != null) {
    class I {
      constructor() {
        const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
        AgeVerificationAnalyticsUtils;
        const result = trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
      }
    }
  }
  class V {
    constructor() {
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
        const obj = { type: types.TaskInputType.Empty };
        onTaskComplete(obj);
      }
    }
  }
  cResult[5] = undefined;
  cResult[6] = onTaskComplete;
  cResult[7] = V;
  tmp17 = V;
}) : (() => {
  let ageVerificationMethods;
  let currentUser;
  let intl3;
  let loading;
  let stateFromStores;
  const memo = react.useMemo(() => {
    const obj = memo(stateFromStores[8]);
    return obj.v4();
  }, []);
  const tmp2 = closure_8();
  let obj = memo(stateFromStores[9]);
  const onTaskComplete = obj.useOnTaskComplete();
  const items = [UserStore];
  const obj2 = memo(stateFromStores[10]);
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = {
    onClose() {
      const obj = { type: types.TaskInputType.Empty };
      return onTaskComplete(obj);
    }
  };
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[12])(obj3));
  const tmp5 = onTaskComplete(stateFromStores[12])(obj3);
  const effect = react.useEffect(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { type: types.TaskInputType.Empty };
      onTaskComplete(obj);
    }
  }, items1);
  const items2 = [memo];
  const effect1 = react.useEffect(() => {
    const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
    AgeVerificationAnalyticsUtils;
    const result = trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
  }, items2);
  onTaskComplete(stateFromStores[25]);
  const intl = memo(stateFromStores[16]).intl;
  const intl2 = memo(stateFromStores[16]).intl;
  const obj5 = {
    handleOnHelpUrlHook() {
      const openUrl = onTaskComplete(stateFromStores[19]).openUrl;
      onTaskComplete(stateFromStores[19]);
      const obj = onTaskComplete(stateFromStores[20]);
      openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  const ModalDisclaimer = memo(stateFromStores[22]).ModalDisclaimer;
  ({ variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: intl3.string(memo(stateFromStores[16]).t["2jxGer"]) });
  const Text = memo(stateFromStores[23]).Text;
  intl3 = memo(stateFromStores[16]).intl;
  return <tmp8 ImageComponent={null} title={intl.string(onTaskComplete(stateFromStores[17])["dSkE/A"])} subtitle={intl2.format(onTaskComplete(stateFromStores[18]).RpMIT0, obj5)} footer={null} submitting={loading}>{null}</tmp8>;
});
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default tmp2;