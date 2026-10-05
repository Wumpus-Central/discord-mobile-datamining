// discord_app/modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import FamilyCenterUtils from "../../../parent_tools/FamilyCenterUtils.tsx";
import FamilyCenterSettingsNoticeDefault from "../../family_center/native/FamilyCenterSettingsNotice.tsx";
import TinyBroncoSettingsNoticesLazy from "../../../tiny_bronco/native/TinyBroncoSettingsNoticesLazy.tsx";
import AgeConfirmationNoticeDefault from "../../content_and_social/native/AgeConfirmationNotice.tsx";
import SensitiveContentFiltersNotices from "../../content_and_social/native/SensitiveContentFiltersNotices.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let items;
let items1;
let items2;
let obj2;
function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
}
const predicate2 = function predicate() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
const predicate3 = function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
};
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { noticeContainer: obj2, listHeaderNoticeContainer: { marginTop: nativeDefault.space.PX_16 } };
createStyles = createStyles.createStyles;
obj2 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
({ marginTop: nativeDefault.space.PX_16 });
let closure_6 = createStyles(obj);
const obj4 = { SENSITIVE_CONTENT_FILTERS: items, CONTENT_AND_SOCIAL: items1, DATA_AND_PRIVACY: items2 };
items = [
  { order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault },
  ,
  ,
];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items[1] = {
  order: 150,
  predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice,
  Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice,
};
({
  order: 150,
  predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice,
  Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice,
});
items[2] = { order: 200, predicate, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate, Component: AgeConfirmationNoticeDefault });
items[3] = {
  order: 300,
  predicate: predicate2,
  Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice,
};
({ order: 300, predicate: predicate2, Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice });
items1 = [
  { order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault },
];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items1[1] = { order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault });
items2 = [
  { order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault },
];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let isListHeader;
      let screen;
      let tmp16;
      const obj = react2;
      const cResult = obj.c(11);
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
        const arr2 = obj4[screen];
        const found = arr2.filter(C);
        const sorted = found.sort(tmp6);
        const mapped = sorted.map(tmp8);
        cResult[0] = screen;
        cResult[1] = mapped;
        arr = mapped;
      } else {
        class C {
          constructor(arg0) {
            return arg0.predicate();
          }
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
        if (cResult[5] === null) {
          class C {
            constructor(arg0) {
              return arg0.predicate();
            }
          }
          if (cResult[8] === tmp12) {
            class C {
              constructor(arg0) {
                return arg0.predicate();
              }
            }
            return tmp16;
          }
          const tmp19 = <View style={tmp12}>{tmp13}</View>;
          cResult[8] = tmp12;
          cResult[9] = tmp13;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
        cResult[5] = null;
        cResult[6] = screen;
        cResult[7] = jsx(null, {}, screen);
        const tmp15 = jsx(null, {}, screen);
      }
    }
  : (screen) => {
      screen = screen.screen;
      let flag = screen.isListHeader;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_6();
      const items = [screen];
      const memo = react.useMemo(() => {
        const arr = obj4[screen];
        const found = arr.filter((predicate) => predicate.predicate());
        const sorted = found.sort((order, order2) => order.order - order2.order);
        const mapped = sorted.map((Component) => Component.Component);
        let first = null;
        if (0 !== mapped.length) {
          first = mapped[0];
        }
        return first;
      }, items);
      let tmp4Result = null;
      if (null != memo) {
        tmp4Result = (
          <View style={flag ? tmp.listHeaderNoticeContainer : tmp.noticeContainer}>
            <memo key={screen} />
          </View>
        );
      }
      return tmp4Result;
    };
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default tmp3;
export const SettingsScreen = {
  SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS",
  CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL",
  DATA_AND_PRIVACY: "DATA_AND_PRIVACY",
};
