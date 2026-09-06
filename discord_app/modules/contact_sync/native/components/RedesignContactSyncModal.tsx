// === Module 12685: RedesignContactSyncModal ===

// Module 12685 (RedesignContactSyncModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12686 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  let obj = { style: closure_19().landingTrailing, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { learnMoreUrl: null };
  const tmp = closure_19();
  obj.learnMoreUrl = ContactSyncUtils.getOpenLearnMoreUrl();
  obj.children = intl.format(util.t["84S6+Z"], obj);
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
  let obj = openSettingsSheet(onComplete[20]);
  const navigation = obj.useNavigation();
  let obj1 = openSettingsSheet(onComplete[21]);
  const items = [currentUser];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  const tmp = closure_19();
  let obj2 = phone;
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
    let timerId = setTimeout(asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else if (!currentUser) {
              let obj2 = tmp2(12684);
              let tmp12 = discoverabilityEnabled;
              if (tmp12) {
                let email;
                if (user != null) {
                  email = user.email;
                }
                tmp12 = null != email;
              }
              const obj1 = { email: tmp12, phone: null };
              let tmp15 = discoverabilityEnabled;
              if (tmp15) {
                tmp15 = null != phone;
              }
              obj1.phone = tmp15;
              dependencyMap = 2;
              c3 = 1;
              obj2 = { value: null, done: false };
              obj2.value = obj2.updateDiscoverability(obj1);
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
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
            obj = { value, done: true };
            return obj;
          }
          dependencyMap = 1;
          c3 = 1;
          const obj4 = { value: tmp2(12676).startContactSync(closure_129_3), done: false };
          return obj4;
        } catch (tmp2) {
          c3 = tmp;
          throw tmp2;
        }
      }
    }), 25);
  }, items1);
  const tmp8 = closure_10();
  const items2 = [onNext];
  stateFromStores1 = openSettingsSheet(onComplete[21]).useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = obj2.useEffect(() => {
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
  const effect1 = obj2.useEffect(() => {
    if (openSettingsSheet) {
      const obj = { type: "Contact Sync", location: { page: "Contact Sync" } };
      obj.track(AnalyticEvents.OPEN_POPOUT, obj);
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12687, dependencyMap.paths), "Contact Sync Info Settings");
    }
  }, items4);
  const items5 = [onNext, onComplete];
  const callback1 = obj2.useCallback(navigation(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj3 = v1(5139);
            v1 = 1;
            dependencyMap = 1;
            const obj1 = { value: obj3.requestPermission(constants.CONTACTS), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          if (value) {
            closure_128_8();
          } else {
            obj = tmp4(12676);
            obj3 = { onComplete: closure_128_2, skip: true };
            const result = obj.closeContactSyncModal(obj3);
          }
          dependencyMap = 3;
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  }), items5);
  const items6 = [closure_16(setLoading(onComplete[30]), { absolute: true }), ];
  const items7 = [tmp.container, ];
  let num = 16;
  if (bottom > 0) {
    num = bottom;
  }
  obj = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    if (permissionState === constants.AUTHORIZED) {
      obj = { onNext, error, loading, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 };
      let tmp21Result = closure_16(setLoading(tmp3[33]), obj);
    }
    obj1 = { children: null };
    obj.children = tmp21Result;
    items6[1] = closure_16(tmp22, obj);
    obj1.children = items6;
    return closure_18(closure_17, obj1);
  }
  obj2 = { title: null, subtitle: null, trailing: null, header: null, loading: null, showSkip: null, onAllow: null, onDontAllow: null };
  tmp22 = discoverabilityEnabled;
  const tmp4Result = openSettingsSheet(onComplete[21]);
  const intl = tmp4(tmp3[16]).intl;
  obj2.title = intl.string(openSettingsSheet(onComplete[16]).t.DjcfHu);
  const intl2 = tmp4(tmp3[16]).intl;
  obj2.subtitle = intl2.string(openSettingsSheet(onComplete[16]).t["kq+Cd3"]);
  obj2.trailing = closure_16(OnboardingTrailing, { isOnboarding: tmp12, discoverabilityEnabled, setDiscoverabilityEnabled: tmp9[1] });
  obj2.header = closure_16(setLoading(onComplete[32]), {});
  obj2.loading = loading;
  obj2.showSkip = tmp12;
  obj2.onAllow = callback1;
  obj2.onDontAllow = function onDontAllow() {
    const obj = { onComplete, skip: true };
    const result = obj.closeContactSyncModal(obj);
  };
  tmp21Result = closure_16(setLoading(onComplete[31]), obj2);
  const tmp2Result = setLoading(onComplete[31]);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  _require = undefined;
  let onNext;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const loading = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = closure_10();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  loading(12695)(navigation, navigateToLandingPage.navigateToLandingPage);
  _require = onNext(function*(arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            dependencyMap(true);
            React7(options);
            let obj1 = options(12676);
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.startContactSync(options);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
  onNext = noop.useCallback(function() {
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
          }
        });
      }
    });
  }, items1);
  obj = { style: closure_19().container, children: null };
  obj = { onNext, error, loading, initialName: null, prefilledFromContactBook: null };
  let str = name;
  const tmp = closure_19();
  if (name == null) {
    str = "";
  }
  obj.initialName = str;
  let tmp12 = null != name;
  if (tmp12) {
    tmp12 = "" !== name;
  }
  if (tmp12) {
    tmp12 = isNameFromContactBook;
  }
  obj.prefilledFromContactBook = tmp12;
  obj.children = closure_16(loading(12697), obj);
  return closure_16(View, obj);
}
function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  let suggestions;
  let obj = onComplete(suggestions[20]);
  const navigation = obj.useNavigation();
  suggestions = closure_10().suggestions;
  const tmp = closure_19();
  onComplete(suggestions[34]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = noop.useCallback((skip, friendsAdded) => {
    const obj = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
    const result = obj.closeContactSyncModal(obj);
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return closure_2_16(navigation(suggestions[35]), {
          insideNavigator: true,
          onPress() {
            return closure_1_3(true, 0);
          }
        });
      }
    });
  }, items1);
  if (suggestions.length > 0) {
    obj = {
      friendSuggestions: suggestions,
      onSubmit(arg0) {
          return ContactSyncModalActionCreators.bulkAddFriendSuggestions(arg0, onComplete);
        }
    };
    let tmp10 = closure_16(navigation(tmp2[37]), obj);
  } else {
    obj = { style: tmp.container, children: closure_16(navigation(tmp2[38]), {}) };
    tmp10 = closure_16(View, obj);
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
        fn = () => {

        };
      }
      return fn;
    }, items1);
    closure_5 = memo;
    items2 = [, , , ];
    items2[0] = tmp3;
    items2[1] = first;
    items2[2] = openSettingsSheet;
    items2[3] = memo;
    items3 = [, ];
    items3[0] = tmp3;
    items3[1] = memo;
    memo1 = closure_5.useMemo(() => {
      let obj = { isOnboarding, loading, setLoading, openSettingsSheet, onComplete: memo };
      ({ loading: onComplete, setLoading: openSettingsSheet, openSettingsSheet: first, onComplete: closure_3, navigateToLandingPage: closure_4 } = obj);
      obj = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_START, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj.impressionProperties = obj;
      obj.headerTitle = headerTitle;
      if (obj.isOnboarding) {
        let headerCloseButton = headerLeft;
      } else {
        headerCloseButton = NavigatorHeader.getHeaderCloseButton(() => {
          onComplete(first[14]);
          const obj = { onComplete, skip: true };
          return obj.closeContactSyncModal(obj);
        });
        const tmp2Result = NavigatorHeader;
      }
      const obj1 = { [closure_2_13.WELCOME]: obj };
      obj.headerLeft = headerCloseButton;
      obj.render = function render() {
        return closure_2_16(ContactSyncLandingScreen, { onComplete, openSettingsSheet, loading, setLoading });
      };
      const obj2 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME,
        impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle,
        headerLeft,
        render() {
          return closure_2_16(ContactSyncNameInputScreen, { navigateToLandingPage });
        }
      };
      obj1[constants2.NAME_INPUT] = obj2;
      const obj4 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj4.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj4.headerTitle = headerTitle;
      obj4.headerLeft = headerLeft;
      obj4.render = function render() {
        return closure_2_16(ContactSyncSuggestionScreen, { onComplete });
      };
      obj1[constants2.SUGGESTIONS] = obj4;
      const obj6 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj5 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj6.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj6.headerTitle = headerTitle;
      obj6.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj6.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).AddPhoneScreen, {});
      };
      obj1[constants2.ADD_PHONE] = obj6;
      const obj8 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj7 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj8.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj8.headerTitle = headerTitle;
      obj8.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj8.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).VerifyPhoneScreen, {});
      };
      obj1[constants2.VERIFY_PHONE] = obj8;
      const obj10 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD, impressionProperties: null, fullscreen: true, headerLeft: null, headerTitle: null, render: null };
      const obj9 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj10.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
      obj10.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = navigateToLandingPage;
        return closure_2_16(openSettingsSheet(first[41]), obj);
      };
      obj10.headerTitle = headerTitle;
      obj10.render = function render() {
        return closure_1_16(loading(openSettingsSheet[42]).VerifyPasswordScreen, {});
      };
      obj1[constants2.VERIFY_PASSWORD] = obj10;
      return obj1;
    }, items2);
    effect1 = closure_5.useEffect(() => () => {
      if (!isOnboarding) {
        onComplete(first[14]);
        const obj = { onComplete };
        const result = obj.closeContactSyncModal(obj);
      }
    }, items3);
    tmp9 = onComplete;
    tmp10 = closure_2;
    tmp8 = jsx;
    obj = { screens: memo1, initialRouteStack: null, headerBackTitle: null };
    if (initialRoutes == null) {
      obj = { name: null };
      tmp11 = ContactSyncScenes;
      obj.name = ContactSyncScenes.WELCOME;
      items4 = [];
      items4[0] = obj;
      initialRoutes = items4;
    }
    obj.initialRouteStack = initialRoutes;
    intl = tmp9(tmp10[16]).intl;
    obj.headerBackTitle = intl.string(tmp9(tmp10[16]).t["13/7kX"]);
    return tmp8(onComplete(closure_2[43]).Navigator, obj);
  }
}
const View = fn(17).View;
const ContactSyncModalStore = fn(12677);
({ setName: closure_9, useContactSyncModalStore: c10, useIsOnboarding: closure_11 } = ContactSyncModalStore);
const ContactSyncConstants = fn(12678);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = { container: null, landingTrailing: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(5682).NAV_BAR_HEIGHT + 32 };
createStyles.container = createStyles;
createStyles.landingTrailing = { textAlign: "center" };
let closure_19 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  return value2(ContactSyncModal, { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes });
};