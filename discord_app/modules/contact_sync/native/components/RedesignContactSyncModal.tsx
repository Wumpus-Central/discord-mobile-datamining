// discord_app/modules/contact_sync/native/components/RedesignContactSyncModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import ContactSyncUtils from "../ContactSyncUtils.tsx";
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

require = fn;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  const obj = { style: closure_19().landingTrailing, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  const obj2 = { learnMoreUrl: null };
  const tmp = closure_19();
  obj2.learnMoreUrl = ContactSyncUtils.getOpenLearnMoreUrl();
  obj.children = intl.format(util.t["84S6+Z"], obj2);
  return value2(Text_Text.Text, obj);
}
function OnboardingTrailing(isOnboarding) {
  if (isOnboarding.isOnboarding) {
    let tmp3Result = value2(OnboardingTrailingLanding, {});
  } else {
    const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
    tmp3Result = value2(RedesignContactSyncDiscoverabilityFooterDefault, obj);
  }
  return tmp3Result;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  const onComplete = openSettingsSheet.onComplete;
  let discoverabilityEnabled;
  let currentUser;
  let onNext;
  let stateFromStores1;
  const bottom = setLoading(onComplete[19])().bottom;
  const tmp = closure_19();
  const navigation = openSettingsSheet(onComplete[20]).useNavigation();
  let obj = openSettingsSheet(onComplete[20]);
  const items = [currentUser];
  const stateFromStores = openSettingsSheet(onComplete[21]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj2 = openSettingsSheet(onComplete[21]);
  ({ permissionState, error } = closure_10());
  const tmp9 = stateFromStores(phone.useState(true), 2);
  discoverabilityEnabled = tmp9[0];
  let tmp12 = closure_11();
  currentUser = tmp12;
  let email;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const items1 = [email, discoverabilityEnabled, tmp12, navigation, setLoading, phone];
  onNext = phone.useCallback(() => {
    setLoading(true);
    let timerId = setTimeout(
      asyncGeneratorStep(async () => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (!currentUser) {
                let tmp12 = discoverabilityEnabled;
                if (tmp12) {
                  let email;
                  if (user != null) {
                    email = user.email;
                  }
                  tmp12 = null != email;
                }
                const obj5 = { email: tmp12, phone: null };
                let tmp15 = discoverabilityEnabled;
                if (tmp15) {
                  tmp15 = null != phone;
                }
                obj5.phone = tmp15;
                dependencyMap = 2;
                c3 = 1;
                const obj7 = { value: tmp2(12835).updateDiscoverability(obj5), done: false };
                return obj7;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => closure_1_1(false), 2000);
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            dependencyMap = 1;
            c3 = 1;
            const obj9 = { value: tmp2(12827).startContactSync(closure_129_3), done: false };
            return obj9;
          } catch (tmp2) {
            c3 = tmp;
            throw tmp2;
          }
        }
      }),
      25,
    );
  }, items1);
  const tmp8 = closure_10();
  const items2 = [onNext];
  stateFromStores1 = openSettingsSheet(onComplete[21]).useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = obj3.useEffect(() => {
    let isAndroidResult = PlatformUtils.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = stateFromStores1 === ConstantsIOS.AppStates.ACTIVE;
    }
    if (isAndroidResult) {
      const result = ContactSyncModalActionCreators.refreshContactSyncPermissionStatus();
      const tmpResult = ContactSyncModalActionCreators;
    }
  }, items3);
  const items4 = [openSettingsSheet];
  const effect1 = obj3.useEffect(() => {
    if (openSettingsSheet) {
      const obj2 = { type: "Contact Sync", location: { page: "Contact Sync" } };
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(12838, dependencyMap.paths),
        "Contact Sync Info Settings",
      );
    }
  }, items4);
  const items5 = [onNext, onComplete];
  const callback1 = obj3.useCallback(
    navigation(function* () {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj5 = { value: v1(5226).requestPermission(constants.CONTACTS), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              closure_128_8();
            } else {
              const obj7 = { onComplete: closure_128_2, skip: true };
              const result = tmp4(12827).closeContactSyncModal(obj7);
              const obj = tmp4(12827);
            }
            dependencyMap = 3;
          }
        } catch (tmp15) {
          dependencyMap = tmp;
          throw tmp15;
        }
      }
    }),
    items5,
  );
  const items6 = [closure_16(setLoading(onComplete[30]), { absolute: true })];
  const items7 = [tmp.container];
  let num = 16;
  if (bottom > 0) {
    num = bottom;
  }
  let obj4 = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    if (permissionState === constants.AUTHORIZED) {
      let obj5 = { onNext, error, loading, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 };
      let tmp21Result = closure_16(setLoading(tmp3[33]), obj5);
    }
    let obj6 = { children: null };
    obj4.children = tmp21Result;
    items6[1] = closure_16(tmp22, obj4);
    obj6.children = items6;
    return closure_18(closure_17, obj6);
  }
  let obj7 = {
    title: null,
    subtitle: null,
    trailing: null,
    header: null,
    loading: null,
    showSkip: null,
    onAllow: null,
    onDontAllow: null,
  };
  tmp22 = discoverabilityEnabled;
  const tmp4Result = openSettingsSheet(onComplete[21]);
  const intl = tmp4(tmp3[16]).intl;
  obj7.title = intl.string(openSettingsSheet(onComplete[16]).t.DjcfHu);
  const intl2 = tmp4(tmp3[16]).intl;
  obj7.subtitle = intl2.string(openSettingsSheet(onComplete[16]).t["kq+Cd3"]);
  obj7.trailing = closure_16(OnboardingTrailing, {
    isOnboarding: tmp12,
    discoverabilityEnabled,
    setDiscoverabilityEnabled: tmp9[1],
  });
  obj7.header = closure_16(setLoading(onComplete[32]), {});
  obj7.loading = loading;
  obj7.showSkip = tmp12;
  obj7.onAllow = callback1;
  obj7.onDontAllow = function onDontAllow() {
    const result = ContactSyncModalActionCreators.closeContactSyncModal({ onComplete, skip: true });
  };
  tmp21Result = closure_16(setLoading(onComplete[31]), obj7);
  const tmp2Result = setLoading(onComplete[31]);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  _require = undefined;
  loading = undefined;
  dependencyMap = undefined;
  let onNext;
  const tmp = closure_19();
  const navigation = require("useNavigation").useNavigation();
  [loading, dependencyMap] = noop.useState(false);
  const tmp5 = closure_10();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  loading(12846)(navigation, navigateToLandingPage.navigateToLandingPage);
  _require = onNext(function* (arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            dependencyMap(true);
            React7(options);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: options(12827).startContactSync(options), done: false };
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
          const timerId = setTimeout(() => dependencyMap(false), 2000);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  });
  const items = [navigation];
  onNext = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [loading, onNext, navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    options.setOptions({
      headerRight() {
        return closure_2_16(first(closure_2[35]), {
          insideNavigator: true,
          disabled,
          onPress() {
            closure_1_3("");
          },
        });
      },
    });
  }, items1);
  const obj2 = { style: tmp.container, children: null };
  let obj3 = { onNext, error, loading, initialName: null, prefilledFromContactBook: null };
  let str = name;
  let obj = require("useNavigation");
  if (name == null) {
    str = "";
  }
  obj3.initialName = str;
  let tmp12 = null != name;
  if (tmp12) {
    tmp12 = "" !== name;
  }
  if (tmp12) {
    tmp12 = isNameFromContactBook;
  }
  obj3.prefilledFromContactBook = tmp12;
  obj2.children = closure_16(loading(12848), obj3);
  return closure_16(View, obj2);
}
function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  let suggestions;
  const tmp = closure_19();
  const navigation = onComplete(suggestions[20]).useNavigation();
  suggestions = closure_10().suggestions;
  const obj = onComplete(suggestions[20]);
  onComplete(suggestions[34]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = noop.useCallback((skip, friendsAdded) => {
    const result = ContactSyncModalActionCreators.closeContactSyncModal({
      onComplete,
      skip,
      friendsFound: suggestions.length,
      friendsAdded,
    });
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return closure_2_16(navigation(suggestions[35]), {
          insideNavigator: true,
          onPress() {
            return closure_1_3(true, 0);
          },
        });
      },
    });
  }, items1);
  if (suggestions.length > 0) {
    const obj3 = {
      friendSuggestions: suggestions,
      onSubmit(arg0) {
        return ContactSyncModalActionCreators.bulkAddFriendSuggestions(arg0, onComplete);
      },
    };
    let tmp10 = closure_16(navigation(tmp2[37]), obj3);
  } else {
    const obj4 = { style: tmp.container, children: closure_16(navigation(tmp2[38]), {}) };
    tmp10 = closure_16(View, obj4);
  }
  return tmp10;
}
class ContactSyncModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    ({ initialRoutes, openSettingsSheet } = global);
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_4(closure_5.useState(false), 2);
    first = tmp[0];
    closure_2 = first;
    closure_3 = tmp[1];
    tmp3 = useIsOnboarding();
    closure_4 = tmp3;
    items = [];
    items[0] = tmp3;
    effect = closure_5.useEffect(() => {
      if (closure_4) {
        const result = ContactSyncModalActionCreators.refreshContactSyncPermissionStatus();
      }
    }, items);
    items1 = [];
    items1[0] = onComplete;
    memo = closure_5.useMemo(() => {
      let fn = onComplete;
      if (onComplete == null) {
        fn = () => {};
      }
      return fn;
    }, items1);
    closure_5 = memo;
    items2 = [, , ,];
    items2[0] = tmp3;
    items2[1] = first;
    items2[2] = openSettingsSheet;
    items2[3] = memo;
    items3 = [,];
    items3[0] = tmp3;
    items3[1] = memo;
    memo1 = closure_5.useMemo(() => {
      let obj = { isOnboarding, loading, setLoading, openSettingsSheet, onComplete: memo };
      ({
        loading: onComplete,
        setLoading: openSettingsSheet,
        openSettingsSheet: first,
        onComplete: closure_3,
        navigateToLandingPage: closure_4,
      } = obj);
      const obj2 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_START,
        impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle,
        headerLeft: null,
        render: null,
      };
      if (obj.isOnboarding) {
        let headerCloseButton = headerLeft;
      } else {
        headerCloseButton = NavigatorHeader.getHeaderCloseButton(() =>
          onComplete(first[14]).closeContactSyncModal({ onComplete, skip: true }),
        );
        const tmp2Result = NavigatorHeader;
      }
      const obj4 = { [closure_2_13.WELCOME]: obj2 };
      obj2.headerLeft = headerCloseButton;
      obj2.render = function render() {
        return closure_2_16(ContactSyncLandingScreen, { onComplete, openSettingsSheet, loading, setLoading });
      };
      const obj5 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME,
        impressionProperties: null,
        fullscreen: true,
        headerTitle: null,
        headerLeft: null,
        render: null,
      };
      const obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj5.impressionProperties = {
        impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW,
      };
      obj5.headerTitle = headerTitle;
      obj5.headerLeft = headerLeft;
      obj5.render = function render() {
        return closure_2_16(ContactSyncNameInputScreen, { navigateToLandingPage });
      };
      obj4[constants2.NAME_INPUT] = obj5;
      const obj7 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS,
        impressionProperties: null,
        fullscreen: true,
        headerTitle: null,
        headerLeft: null,
        render: null,
      };
      const obj6 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj7.impressionProperties = {
        impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW,
      };
      obj7.headerTitle = headerTitle;
      obj7.headerLeft = headerLeft;
      obj7.render = function render() {
        return closure_2_16(ContactSyncSuggestionScreen, { onComplete });
      };
      obj4[constants2.SUGGESTIONS] = obj7;
      const obj9 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE,
        impressionProperties: null,
        fullscreen: true,
        headerTitle: null,
        headerLeft: null,
        render: null,
      };
      const obj8 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj9.impressionProperties = {
        impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW,
      };
      obj9.headerTitle = headerTitle;
      obj9.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj9.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).AddPhoneScreen, {});
      };
      obj4[constants2.ADD_PHONE] = obj9;
      const obj11 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE,
        impressionProperties: null,
        fullscreen: true,
        headerTitle: null,
        headerLeft: null,
        render: null,
      };
      const obj10 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj11.impressionProperties = {
        impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW,
      };
      obj11.headerTitle = headerTitle;
      obj11.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj11.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).VerifyPhoneScreen, {});
      };
      obj4[constants2.VERIFY_PHONE] = obj11;
      const obj13 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD,
        impressionProperties: null,
        fullscreen: true,
        headerLeft: null,
        headerTitle: null,
        render: null,
      };
      const obj12 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj13.impressionProperties = {
        impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW,
      };
      obj13.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj13.headerTitle = headerTitle;
      obj13.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).VerifyPasswordScreen, {});
      };
      obj4[constants2.VERIFY_PASSWORD] = obj13;
      return obj4;
    }, items2);
    effect1 = closure_5.useEffect(
      () => () => {
        if (!isOnboarding) {
          const obj2 = { onComplete };
          const result = onComplete(first[14]).closeContactSyncModal(obj2);
          const obj = onComplete(first[14]);
        }
      },
      items3,
    );
    tmp9 = onComplete;
    tmp10 = closure_2;
    tmp8 = jsx;
    obj = { screens: memo1, initialRouteStack: null, headerBackTitle: null };
    if (initialRoutes == null) {
      obj1 = { name: null };
      tmp11 = ContactSyncScenes;
      obj1.name = ContactSyncScenes.WELCOME;
      items4 = [];
      items4[0] = obj1;
      initialRoutes = items4;
    }
    obj.initialRouteStack = initialRoutes;
    intl = tmp9(tmp10[16]).intl;
    obj.headerBackTitle = intl.string(tmp9(tmp10[16]).t["13/7kX"]);
    return tmp8(onComplete(closure_2[43]).Navigator, obj);
  }
}
const View = fn(17).View;
const ContactSyncModalStore = fn(12828);
({ setName: closure_9, useContactSyncModalStore: c10, useIsOnboarding: closure_11 } = ContactSyncModalStore);
const ContactSyncConstants = fn(12829);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const NativePermissionTypes = fn(4850).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    justifyContent: "center",
    paddingTop: fn(5770).NAV_BAR_HEIGHT + 32,
  },
  landingTrailing: { textAlign: "center" },
};
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  return value2(ContactSyncModal, {
    onComplete: onComplete.route.params.onComplete,
    openSettingsSheet: onComplete.openSettingsSheet,
    initialRoutes: onComplete.initialRoutes,
  });
};
