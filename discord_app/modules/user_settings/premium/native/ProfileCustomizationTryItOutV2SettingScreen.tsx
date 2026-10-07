// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: null, headerContent: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContent = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(21);
      const tmp4 = closure_10();
      _require = tmp4;
      let obj = require("c");
      const tmp = _require;
      const navigation = require("useNavigation").useNavigation();
      let obj2 = require("useNavigation");
      const tmp6 = navigation;
      const tmp7 = navigation(sourceAnalyticsLocations[11]);
      ({ analyticsLocations, sourceAnalyticsLocations } = navigation(sourceAnalyticsLocations[11])(
        navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM,
      ));
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function l() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const tmp7Result = navigation(sourceAnalyticsLocations[11])(
        navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM,
      );
      const stateFromStores = tmp(sourceAnalyticsLocations[13]).useStateFromStores(tmp9, tmp10);
      const tmp13 = tmp6(sourceAnalyticsLocations[14])();
      closure_4 = tmp13;
      if (cResult[2] !== stateFromStores) {
        class T {
          constructor() {
            obj = closure_3;
            if (null != closure_3) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[15]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = T;
        cResult[4] = items1;
        let tmp15 = items1;
      } else {
        class T {
          constructor() {
            obj = closure_3;
            if (null != closure_3) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[15]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        tmp15 = cResult[4];
      }
      const effect = stateFromStores.useEffect(T, tmp15);
      if (cResult[5] !== sourceAnalyticsLocations) {
        class T {
          constructor() {
            obj = closure_3;
            if (null != closure_3) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[15]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        const items2 = [sourceAnalyticsLocations];
        cResult[5] = sourceAnalyticsLocations;
        cResult[6] = tmp19;
        cResult[7] = items2;
        let tmp18 = items2;
      } else {
        class T {
          constructor() {
            obj = closure_3;
            if (null != closure_3) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[15]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
        tmp18 = cResult[7];
      }
      const effect1 = stateFromStores.useEffect(tmp19, tmp18);
      if (cResult[8] === navigation) {
        class T {
          constructor() {
            obj = closure_3;
            if (null != closure_3) {
              tmp = closure_1;
              tmp2 = closure_2;
              num = 80;
              tmp3 = closure_1(closure_2[15]);
              tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
            }
            return;
          }
        }
      }
      const fn2 = function v() {
        navigation.setOptions({
          headerTitle() {
            const obj = {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              maxFontSizeMultiplier: 2,
              style: closure_1_0.headerContent,
              children: null,
            };
            const intl = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.children = intl.string(closure_0(sourceAnalyticsLocations[18]).t.PxUx8e);
            return jsx(closure_0(sourceAnalyticsLocations[17]).Heading, {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              maxFontSizeMultiplier: 2,
              style: closure_1_0.headerContent,
              children: null,
            });
          },
          headerRight() {
            const obj = {
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: null,
              accessibilityHint: null,
              hitSlop: null,
              style: null,
              children: null,
            };
            const intl = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[18]).t.VzqqFC);
            const intl2 = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[18]).t.bBRdiB);
            obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
            obj.style = closure_1_0.headerContent;
            obj.children = jsx(closure_0(sourceAnalyticsLocations[20]).DiceIcon, {
              size: "md",
              color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG,
            });
            return jsx(closure_0(sourceAnalyticsLocations[19]).PressableOpacity, {
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: null,
              accessibilityHint: null,
              hitSlop: null,
              style: null,
              children: null,
            });
          },
        });
      };
      const items3 = [navigation, tmp13, tmp4];
      cResult[8] = navigation;
      cResult[9] = tmp13;
      cResult[10] = tmp4;
      cResult[11] = fn2;
      cResult[12] = items3;
      const tmpResult = tmp(sourceAnalyticsLocations[13]);
    }
  : () => {
      const tmp = closure_10();
      _require = tmp;
      const navigation = require("useNavigation").useNavigation();
      let obj = require("useNavigation");
      const tmp2 = _require;
      const tmp5 = navigation;
      const tmp6Result = navigation(sourceAnalyticsLocations[11])(
        navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM,
      );
      sourceAnalyticsLocations = tmp6Result.sourceAnalyticsLocations;
      const tmp6 = navigation(sourceAnalyticsLocations[11]);
      const items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      const tmp9 = navigation(sourceAnalyticsLocations[14])();
      closure_4 = tmp9;
      const items1 = [stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        if (null != stateFromStores) {
          maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {
            dispatchWait: true,
          });
        }
      }, items1);
      const items2 = [sourceAnalyticsLocations];
      const effect1 = stateFromStores.useEffect(() => {
        const obj2 = {
          type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
          location: { page: constants2.USER_SETTINGS },
          location_stack: sourceAnalyticsLocations,
        };
        AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
      }, items2);
      const items3 = [navigation, tmp9, tmp];
      const layoutEffect = stateFromStores.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle() {
            const obj = {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              maxFontSizeMultiplier: 2,
              style: closure_1_0.headerContent,
              children: null,
            };
            const intl = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.children = intl.string(closure_0(sourceAnalyticsLocations[18]).t.PxUx8e);
            return jsx(closure_0(sourceAnalyticsLocations[17]).Heading, {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              maxFontSizeMultiplier: 2,
              style: closure_1_0.headerContent,
              children: null,
            });
          },
          headerRight() {
            const obj = {
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: null,
              accessibilityHint: null,
              hitSlop: null,
              style: null,
              children: null,
            };
            const intl = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[18]).t.VzqqFC);
            const intl2 = closure_0(sourceAnalyticsLocations[18]).intl;
            obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[18]).t.bBRdiB);
            obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
            obj.style = closure_1_0.headerContent;
            obj.children = jsx(closure_0(sourceAnalyticsLocations[20]).DiceIcon, {
              size: "md",
              color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG,
            });
            return jsx(closure_0(sourceAnalyticsLocations[19]).PressableOpacity, {
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: null,
              accessibilityHint: null,
              hitSlop: null,
              style: null,
              children: null,
            });
          },
        });
      }, items3);
      let tmp13 = null;
      if (null != stateFromStores) {
        const obj3 = { value: tmp6Result.analyticsLocations, children: null };
        const obj4 = { style: tmp.container, children: null };
        const obj5 = { currentUser: stateFromStores };
        obj4.children = jsx(tmp5(tmp3[21]), { currentUser: stateFromStores });
        obj3.children = <closure_4 style={tmp.container}>{null}</closure_4>;
        tmp13 = jsx(tmp2(tmp3[11]).AnalyticsLocationProvider, { value: tmp6Result.analyticsLocations, children: null });
      }
      return tmp13;
    };
