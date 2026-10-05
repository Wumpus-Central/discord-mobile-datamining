// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, navigation, setOptionsResult;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, headerTitle: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let analyticsLocations;
      let closure_0;
      let currentUser;
      let items3;
      let sourceAnalyticsLocations;
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp25;
      let tmp8;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(20);
      const tmp4 = closure_10();
      _require = tmp4;
      let obj2 = require("useNavigation");
      navigation = obj2.useNavigation();
      const tmp6 = navigation(sourceAnalyticsLocations[11]);
      const tmp6Result = tmp6(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
      ({ analyticsLocations, sourceAnalyticsLocations } = tmp6Result);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function l() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function h() {
          if (null != stateFromStores) {
            const tmp3 = maybeFetchUserProfileDefault;
            tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp13 = items1;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const effect = stateFromStores.useEffect(tmp12, tmp13);
      if (cResult[5] !== sourceAnalyticsLocations) {
        class P {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
              location: obj3,
              location_stack: sourceAnalyticsLocations,
            };
            obj3 = { page: metroImportDefault.USER_SETTINGS };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const items2 = [sourceAnalyticsLocations];
        cResult[5] = sourceAnalyticsLocations;
        cResult[6] = P;
        cResult[7] = items2;
        tmp16 = items2;
      } else {
        class P {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
              location: obj3,
              location_stack: sourceAnalyticsLocations,
            };
            obj3 = { page: metroImportDefault.USER_SETTINGS };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        tmp16 = cResult[7];
      }
      const effect1 = obj4.useEffect(P, tmp16);
      if (cResult[8] === navigation) {
        class P {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
              location: obj3,
              location_stack: sourceAnalyticsLocations,
            };
            obj3 = { page: metroImportDefault.USER_SETTINGS };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const layoutEffect = obj4.useLayoutEffect(L, items3);
        let tmp19 = null;
        if (null != stateFromStores) {
          class P {
            constructor() {
              let obj3;
              const obj2 = {
                type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
                location: obj3,
                location_stack: sourceAnalyticsLocations,
              };
              obj3 = { page: metroImportDefault.USER_SETTINGS };
              const obj = AnalyticsUtilsDefault;
              obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
            }
          }
          if (cResult[14] === tmp4.container) {
            class P {
              constructor() {
                let obj3;
                const obj2 = {
                  type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
                  location: obj3,
                  location_stack: sourceAnalyticsLocations,
                };
                obj3 = { page: metroImportDefault.USER_SETTINGS };
                const obj = AnalyticsUtilsDefault;
                obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
              }
            }
            if (cResult[17] === analyticsLocations) {
              class P {
                constructor() {
                  let obj3;
                  const obj2 = {
                    type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
                    location: obj3,
                    location_stack: sourceAnalyticsLocations,
                  };
                  obj3 = { page: metroImportDefault.USER_SETTINGS };
                  const obj = AnalyticsUtilsDefault;
                  obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
                }
              }
              tmp19 = tmp25;
            }
            const tmp27 = jsx(require("useAnalyticsLocations").AnalyticsLocationProvider, {
              value: analyticsLocations,
              children: tmp21,
            });
            cResult[17] = analyticsLocations;
            cResult[18] = tmp21;
            cResult[19] = tmp27;
            tmp25 = tmp27;
          }
          const tmp24 = <closure_4 style={tmp4.container}>{tmp20}</closure_4>;
          cResult[14] = tmp4.container;
          cResult[15] = tmp20;
          cResult[16] = tmp24;
        }
        return tmp19;
      }
      class L {
        constructor() {
          obj = {
            headerTitle() {
              const Heading = closure_0(sourceAnalyticsLocations[16]).Heading;
              const intl = closure_0(sourceAnalyticsLocations[17]).intl;
              return (
                <Heading
                  variant="redesign/heading-18/bold"
                  color="mobile-text-heading-primary"
                  lineClamp={1}
                  maxFontSizeMultiplier={2}
                  style={closure_1_0.headerTitle}
                >
                  {intl.string(closure_0(sourceAnalyticsLocations[17]).t.PxUx8e)}
                </Heading>
              );
            },
          };
          setOptionsResult = closure_1.setOptions(obj);
          return;
        }
      }
      items3 = [navigation, tmp4];
      cResult[8] = navigation;
      cResult[9] = tmp4;
      cResult[10] = L;
      cResult[11] = items3;
    }
  : () => {
      let closure_0;
      let currentUser;
      let sourceAnalyticsLocations;
      const tmp = closure_10();
      _require = tmp;
      let tmp3 = sourceAnalyticsLocations;
      let obj = require("useNavigation");
      navigation = obj.useNavigation();
      const tmp6 = navigation(sourceAnalyticsLocations[11]);
      const tmp6Result = tmp6(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
      sourceAnalyticsLocations = tmp6Result.sourceAnalyticsLocations;
      const analyticsLocations = tmp6Result.analyticsLocations;
      let obj2 = require("get initialized");
      const items = [UserStore];
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }, items1);
      const items2 = [sourceAnalyticsLocations];
      const effect1 = stateFromStores.useEffect(() => {
        let obj3;
        const obj2 = {
          type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
          location: obj3,
          location_stack: sourceAnalyticsLocations,
        };
        obj3 = { page: metroImportDefault.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
      }, items2);
      const items3 = [navigation, tmp];
      const layoutEffect = stateFromStores.useLayoutEffect(() => {
        const obj = {
          headerTitle() {
            const Heading = closure_0(sourceAnalyticsLocations[16]).Heading;
            const intl = closure_0(sourceAnalyticsLocations[17]).intl;
            return (
              <Heading
                variant="redesign/heading-18/bold"
                color="mobile-text-heading-primary"
                lineClamp={1}
                maxFontSizeMultiplier={2}
                style={closure_1_0.headerTitle}
              >
                {intl.string(closure_0(sourceAnalyticsLocations[17]).t.PxUx8e)}
              </Heading>
            );
          },
        };
        navigation.setOptions(obj);
      }, items3);
      let tmp12 = null;
      const tmp2 = _require;
      if (null != stateFromStores) {
        const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
        tmp12 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
      }
      return tmp12;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx",
);

export default tmp6;
