// === Module 14621: SettingsScreenNotices ===

// Module 14621 (SettingsScreenNotices)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5581 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 14622 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 14630 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { noticeContainer: { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 }, listHeaderNoticeContainer: null };
const obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
obj2.listHeaderNoticeContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const obj5 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
const obj4 = { marginTop: nativeDefault.space.PX_16 };
let items = [{ order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , , ];
const obj6 = { order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items[1] = { order: 150, predicate: fn(14623).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(14623).ContentFiltersUnconfirmedNotice };
const obj7 = { order: 150, predicate: fn(14623).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(14623).ContentFiltersUnconfirmedNotice };
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const obj8 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
items[3] = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14631).SensitiveContentFiltersTeenNotice
};
obj5.SENSITIVE_CONTENT_FILTERS = items;
const obj9 = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(14631).SensitiveContentFiltersTeenNotice
};
const items1 = [{ order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
const obj10 = { order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj5.CONTENT_AND_SOCIAL = items1;
const obj11 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const items2 = [{ order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
obj5.DATA_AND_PRIVACY = items2;
const ReactCompilerGating = fn(558);
const obj12 = { order: 100, predicate: fn(8298).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ screen, isListHeader } = arg0);
  closure_6();
  if (cResult[0] !== screen) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[2] = C;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[3] = tmp6;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[4] = tmp8;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const found = obj5[screen].filter(C);
    const sorted = found.sort(tmp6);
    const mapped = sorted.map(tmp8);
    cResult[0] = screen;
    cResult[1] = mapped;
  } else {
    class C {
      constructor(arg0) {
        return arg0.predicate();
      }
    }
    if (0 !== arr.length) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    if (null == null) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      if (cResult[5] === tmp13) {
        class C {
          constructor(arg0) {
            return arg0.predicate();
          }
        }
        if (cResult[8] === tmp14) {
          class C {
            constructor(arg0) {
              return arg0.predicate();
            }
          }
          return tmp18;
        }
        const obj2 = { style: tmp14, children: tmp15 };
        const tmp21 = <View style={tmp14}>{tmp15}</View>;
        cResult[8] = tmp14;
        cResult[9] = tmp15;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
      const tmp17 = <tmp13 key={screen} />;
      cResult[5] = tmp13;
      cResult[6] = screen;
      cResult[7] = tmp17;
    }
  }
}) : ((screen) => {
  screen = screen.screen;
  let flag = screen.isListHeader;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_6();
  const items = [screen];
  const memo = noop.useMemo(() => {
    const found = obj5[screen].filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  if (null == memo) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj.style = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
    obj.children = <memo key={screen} />;
    <View style={null}>{null}</View>;
    const tmp4 = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
  }
});
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };