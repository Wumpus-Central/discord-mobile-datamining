// === Module 15877: PremiumTryItOutModal ===

// Module 15877 (PremiumTryItOutModal)
import util from "util" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import NavigatorHeader from "NavigatorHeader" /* 6909 */;
import HeaderActionButton from "HeaderActionButton" /* 7470 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8656 */;
import DiceIcon from "DiceIcon" /* 9402 */;
import UserProfileTryItOutEditFormDefault from "UserProfileTryItOutEditForm" /* 15878 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const Constants = fn(1087);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
const PremiumUpsellTypes = fn(1394).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/PremiumTryItOutModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumTryItOutModal(initialTarget) {
  const cResult = initialTarget(sourceAnalyticsLocations[6]).c(26);
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = initialTarget(sourceAnalyticsLocations[6]);
  const stateFromStores = initialTarget(sourceAnalyticsLocations[7]).useStateFromStores(tmp4, I);
  const tmpResult = initialTarget(sourceAnalyticsLocations[7]);
  const tmp8 = stateFromStores(sourceAnalyticsLocations[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(sourceAnalyticsLocations[8])(stateFromStores(sourceAnalyticsLocations[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  const tmp8Result = stateFromStores(sourceAnalyticsLocations[8])(stateFromStores(sourceAnalyticsLocations[9]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const shuffleButtonLocation = initialTarget(sourceAnalyticsLocations[10]).useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp10 = stateFromStores(sourceAnalyticsLocations[11])();
  noop = tmp10;
  if (cResult[2] !== sourceAnalyticsLocations) {
    class R {
      constructor() {
        obj = closure_1(closure_2[12]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    const items1 = [sourceAnalyticsLocations];
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[2] = sourceAnalyticsLocations;
    cResult[3] = R;
    cResult[4] = items1;
    let tmp12 = items1;
  } else {
    class R {
      constructor() {
        obj = closure_1(closure_2[12]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    tmp12 = cResult[4];
  }
  const effect = noop.useEffect(R, tmp12);
  if (cResult[5] !== stateFromStores) {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    const items2 = [stateFromStores];
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = U;
    cResult[7] = items2;
    let tmp15 = items2;
  } else {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    tmp15 = cResult[7];
  }
  const effect1 = noop.useEffect(U, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    const stringResult = obj5.string(tmp(sourceAnalyticsLocations[14]).t.PxUx8e);
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[8] = stringResult;
    const tmp17 = stringResult;
  } else {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
  }
  if (cResult[9] !== onClose) {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    const headerCloseButton = obj6.getHeaderCloseButton(onClose);
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[10] = headerCloseButton;
  } else {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
  }
  if (cResult[11] === tmp10) {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    if (cResult[14] === stateFromStores) {
      class U {
        constructor() {
          obj = closure_1;
          if (null != closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            num = 80;
            tmp3 = closure_1(closure_2[13]);
            tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
          }
          return;
        }
      }
      if (cResult[17] === tmp23) {
        class U {
          constructor() {
            obj = closure_1;
            if (null != closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[13]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
            }
            return;
          }
        }
      }
      let obj2 = { root: null };
      class I {
        constructor() {
          return closure_1_4.getCurrentUser();
        }
      }
      tmp25[0] = tmp17;
      tmp25[1] = tmp19;
      tmp25[2] = tmp21;
      tmp25[3] = tmp23;
      obj2.root = tmp25;
      cResult[17] = tmp23;
      cResult[18] = tmp19;
      cResult[19] = tmp21;
      cResult[20] = obj2;
    }
    const fn = function v() {
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj = { currentUser: tmp, initialTarget };
        tmp2 = jsx(UserProfileTryItOutEditFormDefault, { currentUser: tmp, initialTarget });
      }
      return tmp2;
    };
    class I {
      constructor() {
        return closure_1_4.getCurrentUser();
      }
    }
    cResult[14] = stateFromStores;
    cResult[15] = initialTarget;
    cResult[16] = fn;
  }
  if ("header" === shuffleButtonLocation) {
    class U {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[13]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
  }
  cResult[11] = tmp10;
  cResult[12] = shuffleButtonLocation;
  cResult[13] = undefined;
  const tmpResult2 = initialTarget(sourceAnalyticsLocations[10]);
}) : (function PremiumTryItOutModal(initialTarget) {
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  let stateFromStores;
  let shuffleButtonLocation;
  const items = [shuffleButtonLocation];
  stateFromStores = initialTarget(stateFromStores[7]).useStateFromStores(items, () => shuffleButtonLocation.getCurrentUser());
  let obj = initialTarget(stateFromStores[7]);
  const tmp2Result = onClose(stateFromStores[8])(onClose(stateFromStores[9]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const sourceAnalyticsLocations = tmp2Result.sourceAnalyticsLocations;
  let tmp2 = onClose(stateFromStores[8]);
  shuffleButtonLocation = initialTarget(stateFromStores[10]).useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp4 = onClose(stateFromStores[11])();
  closure_5 = tmp4;
  const items1 = [sourceAnalyticsLocations];
  const effect = sourceAnalyticsLocations.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = sourceAnalyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items2);
  const items3 = [stateFromStores, initialTarget, onClose, tmp4, shuffleButtonLocation];
  const memo = sourceAnalyticsLocations.useMemo(() => {
    const root = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = util.intl;
    root.title = intl.string(util.t.PxUx8e);
    root.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    let fn;
    if ("header" === shuffleButtonLocation) {
      fn = () => {
        const obj = { IconComponent: initialTarget(stateFromStores[17]).DiceIcon, IconComponentSize: "md", onPress, accessibilityLabel: null, accessibilityHint: null };
        const intl = initialTarget(stateFromStores[14]).intl;
        obj.accessibilityLabel = intl.string(initialTarget(stateFromStores[14]).t.VzqqFC);
        const intl2 = initialTarget(stateFromStores[14]).intl;
        obj.accessibilityHint = intl2.string(initialTarget(stateFromStores[14]).t.bBRdiB);
        return jsx(initialTarget(stateFromStores[16]).HeaderActionButton, { IconComponent: initialTarget(stateFromStores[17]).DiceIcon, IconComponentSize: "md", onPress, accessibilityLabel: null, accessibilityHint: null });
      };
    }
    root.headerRight = fn;
    root.render = function render() {
      let tmp2 = null;
      if (null != closure_1_2) {
        const obj = { currentUser: tmp, initialTarget };
        tmp2 = jsx(onClose(stateFromStores[18]), { currentUser: tmp, initialTarget });
      }
      return tmp2;
    };
    return { root };
  }, items3);
  let obj2 = initialTarget(stateFromStores[10]);
  return jsx(initialTarget(stateFromStores[8]).AnalyticsLocationProvider, { value: tmp2Result.analyticsLocations, children: jsx(initialTarget(stateFromStores[19]).Modal, { initialRouteName: "root", screens: memo }) });
});