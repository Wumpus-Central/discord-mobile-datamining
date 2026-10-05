// discord_app/modules/contact_sync/native/components/RedesignContactSyncModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NativePermissionConstants from "../../../native_permissions/NativePermissionConstants.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import ContactSyncUtils from "../ContactSyncUtils.tsx";
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter.tsx";
import ContactSyncBackToLandingDefault from "ContactSyncBackToLanding.tsx";
import AddPhoneScreens from "AddPhoneScreens.tsx";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import ContactSyncModalStore from "../ContactSyncModalStore.tsx";
import ContactSyncConstants from "../ContactSyncConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c3, dependencyMap, navigation, setOptionsResult;

let c10;
let c9;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let map1;
let obj2;
let unpackModuleId;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  let error;
  let intl;
  let intl2;
  let loading;
  let permissionState;
  let setLoading;
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  let onComplete = openSettingsSheet.onComplete;
  let discoverabilityEnabled;
  let currentUser;
  let onNext;
  let stateFromStores1;
  const tmp3 = onComplete;
  let tmp = closure_19();
  const bottom = setLoading(onComplete[21])().bottom;
  const tmp4 = openSettingsSheet;
  let obj = openSettingsSheet(onComplete[22]);
  navigation = obj.useNavigation();
  let obj2 = openSettingsSheet(onComplete[23]);
  const items = [currentUser];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj3 = phone;
  ({ permissionState, error } = closure_10());
  closure_10();
  const tmp9 = stateFromStores(phone.useState(true), 2);
  discoverabilityEnabled = tmp9[0];
  let tmp12 = closure_11();
  currentUser = tmp12;
  let email;
  const useCallback = phone.useCallback;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const items1 = [email, discoverabilityEnabled, tmp12, navigation, setLoading, phone];
  onNext = useCallback(() => {
    let user;
    const tmp = setLoading(true);
    let timerId = setTimeout(
      _asyncToGenerator(async () => {
        let closure_0;
        let closure_1;
        let tmp15;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else if (!currentUser) {
                let tmp12 = discoverabilityEnabled;
                const updateDiscoverability = tmp(c2[24]).updateDiscoverability;
                const tmp10 = tmp(c2[24]);
                if (tmp12) {
                  let email;
                  if (user != null) {
                    email = user.email;
                  }
                  tmp12 = null != email;
                }
                const obj4 = { email: tmp12, phone: tmp15 };
                tmp15 = discoverabilityEnabled && null != phone;
                c2 = 2;
                c3 = 1;
                const obj6 = { value: updateDiscoverability(obj4), done: false };
                return obj6;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => closure_1_1(false), 2000);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj5 = tmp(c2[14]);
            c2 = 1;
            c3 = 1;
            const obj8 = { value: obj5.startContactSync(closure_129_3), done: false };
            return obj8;
          } catch (tmp22) {
            c3 = 3;
            throw tmp22;
          }
        }
      }),
      25,
    );
  }, items1);
  const items2 = [onNext];
  const tmp4Result = tmp4(tmp3[23]);
  stateFromStores1 = tmp4Result.useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = obj3.useEffect(() => {
    const obj = PlatformUtils;
    const isAndroidResult = obj.isAndroid() && stateFromStores1 === ConstantsIOS.AppStates.ACTIVE;
    if (isAndroidResult) {
      const tmpResult = ContactSyncModalActionCreators;
      const result = tmpResult.refreshContactSyncPermissionStatus();
    }
  }, items3);
  const items4 = [openSettingsSheet];
  const effect1 = obj3.useEffect(() => {
    if (openSettingsSheet) {
      const obj2 = { type: "Contact Sync", location: { page: "Contact Sync" } };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(12336, dependencyMap.paths), "Contact Sync Info Settings");
    }
  }, items4);
  const items5 = [onNext, onComplete];
  const callback1 = obj3.useCallback(
    navigation(function* () {
      let c2;
      let closure_0;
      let v1;
      if (onComplete === 2) {
        onComplete = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          onComplete = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              onComplete = 3;
              throw value;
            } else if (arg0 === 2) {
              onComplete = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = v1(onComplete[31]);
              v1 = 1;
              onComplete = 1;
              const obj5 = { value: obj4.requestPermission(constants.CONTACTS), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            onComplete = 3;
            throw value;
          } else if (arg0 === 2) {
            onComplete = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              closure_128_8();
            } else {
              const obj7 = { onComplete: closure_128_2, skip: true };
              const obj = tmp3(onComplete[14]);
              const result = obj.closeContactSyncModal(obj7);
            }
            onComplete = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          onComplete = 3;
          throw tmp14;
        }
      }
    }),
    items5,
  );
  const items6 = [closure_16(setLoading(tmp3[32]), { absolute: true })];
  const items7 = [tmp.container];
  let num = 16;
  const tmp22 = discoverabilityEnabled;
  if (bottom > 0) {
    num = bottom;
  }
  let obj4 = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    let tmp21Result;
    if (permissionState === constants.AUTHORIZED) {
      let obj5 = { onNext, error, loading, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 };
      tmp21Result = closure_16(setLoading(tmp3[35]), obj5);
    }
    let obj6 = { children: items6 };
    obj4.children = tmp21Result;
    items6[1] = closure_16(tmp22, obj4);
    return closure_18(closure_17, obj6);
  }
  let obj7 = {
    title: intl.string(tmp4(tmp3[17]).t.DjcfHu),
    subtitle: intl2.string(tmp4(tmp3[17]).t["kq+Cd3"]),
    trailing: closure_16(closure_23, { isOnboarding: tmp12, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 }),
    header: closure_16(setLoading(tmp3[34]), {}),
    loading,
    showSkip: tmp12,
    onAllow: callback1,
    onDontAllow() {
      const obj = ContactSyncModalActionCreators;
      const obj2 = { onComplete, skip: true };
      const result = obj.closeContactSyncModal(obj2);
    },
  };
  const tmp2Result = setLoading(tmp3[33]);
  intl = tmp4(tmp3[17]).intl;
  intl2 = tmp4(tmp3[17]).intl;
  tmp21Result = closure_16(tmp2Result, obj7);
}
function getScreens(isOnboarding) {
  let headerCloseButton;
  let loading;
  let navigateToLandingPage;
  let obj2;
  let onComplete;
  let openSettingsSheet;
  let require;
  let setLoading;
  function render() {
    const obj = { navigateToLandingPage: _slicedToArray };
    return authStore3(closure_25, obj);
  }
  const render2 = function render() {
    const obj = { onComplete: _asyncToGenerator };
    return authStore3(closure_26, obj);
  };
  function headerLeft(arg0) {
    const obj = { navigateToLandingPage: _slicedToArray };
    const tmp = ContactSyncBackToLandingDefault;
    const merged = Object.assign(arg0);
    return authStore3(tmp, obj);
  }
  const render3 = function render() {
    return closure_1_16(AddPhoneScreens.AddPhoneScreen, {});
  };
  const headerLeft2 = function headerLeft(arg0) {
    const obj = { navigateToLandingPage: _slicedToArray };
    const tmp = ContactSyncBackToLandingDefault;
    const merged = Object.assign(arg0);
    return authStore3(tmp, obj);
  };
  const render4 = function render() {
    return closure_1_16(AddPhoneScreens.VerifyPhoneScreen, {});
  };
  const headerLeft3 = function headerLeft(arg0) {
    const obj = { navigateToLandingPage: _slicedToArray };
    const tmp = ContactSyncBackToLandingDefault;
    const merged = Object.assign(arg0);
    return authStore3(tmp, obj);
  };
  const render5 = function render() {
    return closure_1_16(AddPhoneScreens.VerifyPasswordScreen, {});
  };
  ({
    loading: require,
    setLoading: importDefault,
    openSettingsSheet: dependencyMap,
    onComplete: _asyncToGenerator,
    navigateToLandingPage: _slicedToArray,
  } = isOnboarding);
  let obj = {
    ignoreKeyboard: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_START,
    impressionProperties: obj2,
    fullscreen: true,
    headerTitle,
    headerLeft: headerCloseButton,
    render() {
      const obj = {
        onComplete: _asyncToGenerator,
        openSettingsSheet: dependencyMap,
        loading: require,
        setLoading: importDefault,
      };
      return authStore3(ContactSyncLandingScreen, obj);
    },
  };
  isOnboarding = isOnboarding.isOnboarding;
  const WELCOME = constants2.WELCOME;
  obj2 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  if (isOnboarding) {
    headerCloseButton = headerLeft;
  } else {
    const tmp2Result = NavigatorHeader;
    headerCloseButton = tmp2Result.getHeaderCloseButton(() => {
      const obj = ContactSyncModalActionCreators;
      const obj2 = { onComplete: _asyncToGenerator, skip: true };
      return obj.closeContactSyncModal(obj2);
    });
  }
  const obj3 = { [WELCOME]: obj };
  const NAME_INPUT = constants2.NAME_INPUT;
  obj3[NAME_INPUT] = {
    ignoreKeyboard: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render,
  };
  const obj4 = {
    ignoreKeyboard: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render,
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
  const SUGGESTIONS = constants2.SUGGESTIONS;
  obj3[SUGGESTIONS] = {
    ignoreKeyboard: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render: render2,
  };
  const obj6 = {
    ignoreKeyboard: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render: render2,
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
  const ADD_PHONE = constants2.ADD_PHONE;
  obj3[ADD_PHONE] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render: render3,
  };
  const obj8 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft,
    render: render3,
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
  const VERIFY_PHONE = constants2.VERIFY_PHONE;
  obj3[VERIFY_PHONE] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft: headerLeft2,
    render: render4,
  };
  const obj10 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerTitle,
    headerLeft: headerLeft2,
    render: render4,
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
  const VERIFY_PASSWORD = constants2.VERIFY_PASSWORD;
  obj3[VERIFY_PASSWORD] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerLeft: headerLeft3,
    headerTitle,
    render: render5,
  };
  const obj12 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
    fullscreen: true,
    headerLeft: headerLeft3,
    headerTitle,
    render: render5,
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
  return obj3;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ setName: c9, useContactSyncModalStore: c10, useIsOnboarding: unpackModuleId } = ContactSyncModalStore);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { container: obj2, landingTrailing: { textAlign: "center" } };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  justifyContent: "center",
  paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
};
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_19();
      const landingTrailing = tmp4.landingTrailing;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const format = intl.format;
        const obj2 = { learnMoreUrl: tmpResult.getOpenLearnMoreUrl() };
        const prop = intl3.t["84S6+Z"];
        tmpResult = ContactSyncUtils;
        const formatResult = format(prop, obj2);
        cResult[0] = formatResult;
        first = formatResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.landingTrailing) {
        const obj3 = { style: landingTrailing, variant: "text-sm/medium", color: "text-muted", children: first };
        const tmp10 = authStore3(Text_Text.Text, obj3);
        cResult[1] = tmp4.landingTrailing;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      let format;
      let obj2;
      let obj3;
      let prop;
      const obj = {
        style: closure_19().landingTrailing,
        variant: "text-sm/medium",
        color: "text-muted",
        children: format(prop, obj2),
      };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      format = intl.format;
      obj2 = { learnMoreUrl: obj3.getOpenLearnMoreUrl() };
      prop = intl3.t["84S6+Z"];
      obj3 = ContactSyncUtils;
      return authStore3(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let discoverabilityEnabled;
      let isOnboarding;
      let setDiscoverabilityEnabled;
      let tmp4Result;
      const obj = react2;
      const cResult = obj.c(4);
      ({ isOnboarding, discoverabilityEnabled, setDiscoverabilityEnabled } = arg0);
      if (cResult[0] === discoverabilityEnabled) {
        if (cResult[1] === isOnboarding) {
          let tmp3;
          if (cResult[2] === setDiscoverabilityEnabled) {
            tmp3 = cResult[3];
          }
          return tmp3;
        }
      }
      if (isOnboarding) {
        tmp4Result = authStore3(closure_22, {});
      } else {
        const obj2 = { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled };
        tmp4Result = authStore3(RedesignContactSyncDiscoverabilityFooterDefault, obj2);
      }
      cResult[0] = discoverabilityEnabled;
      cResult[1] = isOnboarding;
      cResult[2] = setDiscoverabilityEnabled;
      cResult[3] = tmp4Result;
      tmp3 = tmp4Result;
    }
  : (isOnboarding) => {
      let tmp3Result;
      if (isOnboarding.isOnboarding) {
        tmp3Result = authStore3(closure_22, {});
      } else {
        const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
        tmp3Result = authStore3(RedesignContactSyncDiscoverabilityFooterDefault, obj);
      }
      return tmp3Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigateToLandingPage) => {
      let closure_2;
      let closure_3;
      let error;
      let isNameFromContactBook;
      let loading;
      let name;
      let tmp10;
      const tmp = dependencyMap;
      let obj = navigation(576);
      const cResult = obj.c(16);
      navigateToLandingPage = navigateToLandingPage.navigateToLandingPage;
      const tmp3 = closure_19();
      let obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      [loading, dependencyMap] = react.useState(false);
      ({ name, error, isNameFromContactBook } = closure_10());
      closure_10();
      loading(12344)(navigation, navigateToLandingPage);
      const tmp8 = loading;
      if (cResult[0] !== navigation) {
        const _require = _asyncToGenerator(async (arg0) => {
          let obj2;
          let v1;
          closure_0 = arg0;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_1 = tmp;
                  v1(true);
                  closure_2_9(closure_0);
                  v1 = 1;
                  c3 = 1;
                  const obj5 = { value: obj2.startContactSync(closure_0), done: false };
                  obj2 = closure_0(closure_2_2[14]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => v1(false), 2000);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c3 = 3;
              throw tmp16;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      _asyncToGenerator = tmp10;
      if (cResult[2] === loading) {
        if (cResult[3] === navigation) {
          let tmp12;
          let tmp13;
          if (cResult[4] === tmp10) {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          const layoutEffect = react.useLayoutEffect(tmp12, tmp13);
          let str = name;
          if (name == null) {
            str = "";
          }
          const tmp16 = null != name && "" !== name && isNameFromContactBook;
          if (cResult[7] === error) {
            if (cResult[8] === loading) {
              if (cResult[9] === tmp10) {
                if (cResult[10] === str) {
                  let tmp17;
                  if (cResult[11] === tmp16) {
                    tmp17 = cResult[12];
                  }
                  if (cResult[13] === tmp3.container) {
                    let tmp20;
                    if (cResult[14] === tmp17) {
                      tmp20 = cResult[15];
                    }
                    return tmp20;
                  }
                  let obj4 = { style: tmp3.container, children: tmp17 };
                  const tmp23 = closure_16(View, obj4);
                  cResult[13] = tmp3.container;
                  cResult[14] = tmp17;
                  cResult[15] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
          }
          let obj5 = { onNext: tmp10, error, loading, initialName: str, prefilledFromContactBook: tmp16 };
          const tmp19 = closure_16(tmp8(12346), obj5);
          cResult[7] = error;
          cResult[8] = loading;
          cResult[9] = tmp10;
          cResult[10] = str;
          cResult[11] = tmp16;
          cResult[12] = tmp19;
          tmp17 = tmp19;
        }
      }
      class A {
        constructor() {
          obj = {
            headerRight() {
              const obj = {
                insideNavigator: true,
                disabled,
                onPress() {
                  closure_1_3("");
                },
              };
              return closure_2_16(first(closure_2[37]), obj);
            },
          };
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      const items = [loading, tmp10, navigation];
      cResult[2] = loading;
      cResult[3] = navigation;
      cResult[4] = tmp10;
      cResult[5] = A;
      cResult[6] = items;
      tmp13 = items;
      tmp12 = A;
    }
  : (navigateToLandingPage) => {
      let closure_2;
      let error;
      let isNameFromContactBook;
      let loading;
      let obj3;
      let str;
      let tmp11;
      let tmp12;
      navigation = undefined;
      loading = undefined;
      dependencyMap = undefined;
      let onNext;
      navigateToLandingPage = navigateToLandingPage.navigateToLandingPage;
      const tmp = closure_19();
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      [loading, dependencyMap] = react.useState(false);
      const tmp5 = closure_10();
      const name = tmp5.name;
      ({ isNameFromContactBook, error } = tmp5);
      loading(12344)(navigation, navigateToLandingPage);
      const useCallback = react.useCallback;
      let closure_0 = onNext(function* (arg0) {
        let obj2;
        let v1;
        closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                v1(true);
                closure_2_9(closure_0);
                v1 = 1;
                c3 = 1;
                const obj5 = { value: obj2.startContactSync(closure_0), done: false };
                obj2 = closure_0(closure_2_2[14]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => v1(false), 2000);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c3 = 3;
            throw tmp16;
          }
        }
      });
      const items = [navigation];
      onNext = useCallback(function () {
        return closure_0(...arguments);
      }, items);
      const items1 = [loading, onNext, navigation];
      const layoutEffect = react.useLayoutEffect(() => {
        let disabled;
        let obj = {
          headerRight() {
            const obj = {
              insideNavigator: true,
              disabled,
              onPress() {
                closure_1_3("");
              },
            };
            return closure_2_16(first(closure_2[37]), obj);
          },
        };
        navigation.setOptions(obj);
      }, items1);
      let obj2 = { style: tmp.container, children: closure_16(tmp11, obj3) };
      obj3 = { onNext, error, loading, initialName: str, prefilledFromContactBook: tmp12 };
      str = name;
      tmp11 = loading(12346);
      if (name == null) {
        str = "";
      }
      tmp12 = null != name && "" !== name && isNameFromContactBook;
      return closure_16(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onComplete) => {
      let suggestions;
      let obj = onComplete(suggestions[16]);
      const cResult = obj.c(15);
      onComplete = onComplete.onComplete;
      const tmp3 = closure_19();
      let obj2 = onComplete(suggestions[22]);
      navigation = obj2.useNavigation();
      suggestions = closure_10().suggestions;
      const obj3 = onComplete(suggestions[36]);
      obj3.useBackHandlerMinimizeApp();
      if (cResult[0] === onComplete) {
        let tmp6;
        if (cResult[1] === suggestions.length) {
          tmp6 = cResult[2];
        }
        let closure_3 = tmp6;
        if (cResult[3] === tmp6) {
          let tmp7;
          if (cResult[4] === navigation) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === navigation) {
              if (cResult[8] === onComplete) {
                let tmp8;
                let tmp15;
                if (cResult[9] === suggestions.length) {
                  tmp8 = cResult[10];
                }
                const layoutEffect = react.useLayoutEffect(tmp7, tmp8);
                if (cResult[11] === onComplete) {
                  if (cResult[12] === tmp3) {
                    let tmp11;
                    if (cResult[13] === suggestions) {
                      tmp11 = cResult[14];
                    }
                    return tmp11;
                  }
                }
                if (suggestions.length > 0) {
                  const obj4 = {
                    friendSuggestions: suggestions,
                    onSubmit(arg0) {
                      const obj = ContactSyncModalActionCreators;
                      return obj.bulkAddFriendSuggestions(arg0, onComplete);
                    },
                  };
                  tmp15 = closure_16(navigation(tmp[39]), obj4);
                } else {
                  const obj5 = { style: tmp3.container, children: closure_16(navigation(suggestions[40]), {}) };
                  tmp15 = closure_16(View, obj5);
                }
                cResult[11] = onComplete;
                cResult[12] = tmp3;
                cResult[13] = suggestions;
                cResult[14] = tmp15;
                tmp11 = tmp15;
              }
            }
          }
          const items = [tmp6, navigation, onComplete, suggestions.length];
          cResult[6] = tmp6;
          cResult[7] = navigation;
          cResult[8] = onComplete;
          cResult[9] = suggestions.length;
          cResult[10] = items;
          tmp8 = items;
        }
        const fn2 = function f() {
          let obj = {
            headerRight() {
              const obj = {
                insideNavigator: true,
                onPress() {
                  return closure_1_3(true, 0);
                },
              };
              return closure_2_16(navigation(suggestions[37]), obj);
            },
          };
          navigation.setOptions(obj);
        };
        cResult[3] = tmp6;
        cResult[4] = navigation;
        cResult[5] = fn2;
        tmp7 = fn2;
      }
      const fn = function t(skip, friendsAdded) {
        const obj = ContactSyncModalActionCreators;
        const obj2 = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
        const result = obj.closeContactSyncModal(obj2);
      };
      cResult[0] = onComplete;
      cResult[1] = suggestions.length;
      cResult[2] = fn;
      tmp6 = fn;
    }
  : (onComplete) => {
      let tmp10;
      onComplete = onComplete.onComplete;
      let suggestions;
      const tmp = closure_19();
      let obj = onComplete(suggestions[22]);
      navigation = obj.useNavigation();
      suggestions = closure_10().suggestions;
      let obj2 = onComplete(suggestions[36]);
      obj2.useBackHandlerMinimizeApp();
      const items = [onComplete, suggestions.length];
      const callback = react.useCallback((skip, friendsAdded) => {
        const obj = ContactSyncModalActionCreators;
        const obj2 = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
        const result = obj.closeContactSyncModal(obj2);
      }, items);
      const items1 = [callback, navigation, onComplete, suggestions.length];
      const layoutEffect = react.useLayoutEffect(() => {
        let obj = {
          headerRight() {
            const obj = {
              insideNavigator: true,
              onPress() {
                return closure_1_3(true, 0);
              },
            };
            return closure_2_16(navigation(suggestions[37]), obj);
          },
        };
        navigation.setOptions(obj);
      }, items1);
      if (suggestions.length > 0) {
        const obj3 = {
          friendSuggestions: suggestions,
          onSubmit(arg0) {
            const obj = ContactSyncModalActionCreators;
            return obj.bulkAddFriendSuggestions(arg0, onComplete);
          },
        };
        tmp10 = closure_16(navigation(tmp2[39]), obj3);
      } else {
        const obj4 = { style: tmp.container, children: closure_16(navigation(suggestions[40]), {}) };
        tmp10 = closure_16(View, obj4);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let initialRoutes;
      let openSettingsSheet;
      const obj = react2;
      const cResult = obj.c(4);
      ({ openSettingsSheet, initialRoutes } = route);
      const onComplete = route.route.params.onComplete;
      if (cResult[0] === initialRoutes) {
        if (cResult[1] === onComplete) {
          let tmp2;
          if (cResult[2] === openSettingsSheet) {
            tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      const tmp3 = authStore3(closure_28, { onComplete, openSettingsSheet, initialRoutes });
      cResult[0] = initialRoutes;
      cResult[1] = onComplete;
      cResult[2] = openSettingsSheet;
      cResult[3] = tmp3;
      tmp2 = tmp3;
    }
  : (onComplete) => {
      const obj = {
        onComplete: onComplete.route.params.onComplete,
        openSettingsSheet: onComplete.openSettingsSheet,
        initialRoutes: onComplete.initialRoutes,
      };
      return authStore3(closure_28, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _require;
      let closure_0;
      let first;
      let initialRoutes;
      let onComplete;
      let openSettingsSheet;
      let tmp11;
      let tmp6;
      let tmp8;
      let tmp9;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(20);
      ({ onComplete, initialRoutes, openSettingsSheet } = arg0);
      [first, tmp6] = react.useState(false);
      const tmp7 = closure_11();
      _require = tmp7;
      if (cResult[0] !== tmp7) {
        const fn = function s() {
          if (closure_0) {
            const obj = ContactSyncModalActionCreators;
            const result = obj.refreshContactSyncPermissionStatus();
          }
        };
        const items = [tmp7];
        cResult[0] = tmp7;
        cResult[1] = fn;
        cResult[2] = items;
        tmp9 = items;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[3] !== onComplete) {
        let fn2 = onComplete;
        if (onComplete == null) {
          fn2 = () => {};
        }
        cResult[3] = onComplete;
        cResult[4] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[4];
      }
      let closure_1 = tmp11;
      if (cResult[5] === tmp7) {
        if (cResult[6] === first) {
          if (cResult[7] === tmp11) {
            let tmp13;
            if (cResult[8] === openSettingsSheet) {
              tmp13 = cResult[9];
            }
            if (cResult[10] === tmp7) {
              let tmp15;
              let tmp16;
              let tmp20;
              if (cResult[11] === tmp11) {
                tmp15 = cResult[12];
                tmp16 = cResult[13];
              }
              const effect1 = react.useEffect(tmp15, tmp16);
              class L {
                constructor() {
                  return () => {
                    const tmp = !closure_1_0;
                    if (tmp) {
                      const obj2 = { onComplete };
                      const obj = closure_0(dependencyMap[14]);
                      const result = obj.closeContactSyncModal(obj2);
                    }
                  };
                }
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(1126).intl.string;
                class L {
                  constructor() {
                    return () => {
                      const tmp = !closure_1_0;
                      if (tmp) {
                        const obj2 = { onComplete };
                        const obj = closure_0(dependencyMap[14]);
                        const result = obj.closeContactSyncModal(obj2);
                      }
                    };
                  }
                }
                cResult[16] = tmp21;
                tmp20 = tmp21;
              } else {
                tmp20 = cResult[16];
              }
              if (cResult[17] === tmp13) {
                let tmp22;
                if (cResult[18] === tmp18) {
                  tmp22 = cResult[19];
                }
                return tmp22;
              }
              const obj3 = { screens: tmp13, initialRouteStack: tmp18, headerBackTitle: tmp20 };
              const tmp24 = closure_16(tmp(6496).Navigator, obj3);
              cResult[17] = tmp13;
              cResult[18] = tmp18;
              cResult[19] = tmp24;
              tmp22 = tmp24;
            }
            class L {
              constructor() {
                return () => {
                  const tmp = !closure_1_0;
                  if (tmp) {
                    const obj2 = { onComplete };
                    const obj = closure_0(dependencyMap[14]);
                    const result = obj.closeContactSyncModal(obj2);
                  }
                };
              }
            }
            const items1 = [tmp7, tmp11];
            cResult[10] = tmp7;
            cResult[11] = tmp11;
            cResult[12] = L;
            cResult[13] = items1;
            tmp16 = items1;
            tmp15 = L;
          }
        }
      }
      const tmp14 = getScreens({
        isOnboarding: tmp7,
        loading: first,
        setLoading: tmp6,
        openSettingsSheet,
        onComplete: tmp11,
      });
      cResult[5] = tmp7;
      cResult[6] = first;
      cResult[7] = tmp11;
      cResult[8] = openSettingsSheet;
      cResult[9] = tmp14;
      tmp13 = tmp14;
    }
  : (onComplete) => {
      let initialRoutes;
      let intl;
      let isOnboarding;
      let loading;
      let openSettingsSheet;
      let setLoading;
      onComplete = onComplete.onComplete;
      ({ initialRoutes, openSettingsSheet } = onComplete);
      loading = undefined;
      setLoading = undefined;
      let memo;
      [loading, setLoading] = memo.useState(false);
      const tmp3 = closure_11();
      _slicedToArray = tmp3;
      const items = [tmp3];
      const effect = memo.useEffect(() => {
        if (isOnboarding) {
          const obj = ContactSyncModalActionCreators;
          const result = obj.refreshContactSyncPermissionStatus();
        }
      }, items);
      const items1 = [onComplete];
      memo = memo.useMemo(() => {
        let fn = onComplete;
        if (onComplete == null) {
          fn = () => {};
        }
        return fn;
      }, items1);
      const items2 = [tmp3, loading, openSettingsSheet, memo];
      const items3 = [tmp3, memo];
      const memo1 = memo.useMemo(() => {
        const obj = { isOnboarding, loading, setLoading, openSettingsSheet, onComplete: memo };
        return getScreens(obj);
      }, items2);
      const effect1 = memo.useEffect(
        () => () => {
          const tmp = !isOnboarding;
          if (tmp) {
            const obj2 = { onComplete };
            const obj = onComplete(first[14]);
            const result = obj.closeContactSyncModal(obj2);
          }
        },
        items3,
      );
      let obj = {
        screens: memo1,
        initialRouteStack: initialRoutes,
        headerBackTitle: intl.string(onComplete(loading[17]).t["13/7kX"]),
      };
      const Navigator = onComplete(loading[45]).Navigator;
      if (initialRoutes == null) {
        let obj2 = { name: constants2.WELCOME };
        const items4 = [obj2];
        initialRoutes = items4;
      }
      intl = tmp9(tmp10[17]).intl;
      return closure_16(Navigator, obj);
    };
let closure_28 = tmp6;
let result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default tmp6;
export const ContactSyncOnboardingModal = tmp5;
