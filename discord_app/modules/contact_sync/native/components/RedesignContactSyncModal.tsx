// === Module 12459: headerTitle ===

// Module 12459 (headerTitle)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import _uploadContacts from "_uploadContacts" /* 12454 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12460 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import closure_8 from "getState" /* 7167 */;
import ContactSyncModes from "ContactSyncModes" /* 12451 */;
import ContactSyncLandingPage from "ContactSyncLandingPage" /* 12452 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4731 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  let obj = { style: callback5().landingTrailing, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { learnMoreUrl: null };
  const tmp = callback5();
  obj[0] = _uploadContacts.getOpenLearnMoreUrl();
  obj[3] = intl.format(getSystemLocale.t["84S6+Z"], obj);
  return callback4(Text.Text, obj);
}
function OnboardingTrailing(isOnboarding) {
  if (isOnboarding.isOnboarding) {
    let tmp3Result = tmp3(OnboardingTrailingLanding, {});
  } else {
    const obj = { discoverabilityEnabled: null, onValueChanged: null };
    obj[0] = tmp;
    obj[1] = tmp2;
    tmp3Result = tmp3(RedesignContactSyncDiscoverabilityFooterDefault, obj);
  }
  return tmp3Result;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  const onComplete = openSettingsSheet.onComplete;
  let navigation;
  let stateFromStores;
  let phone;
  let first;
  closure_7 = undefined;
  let callback;
  let stateFromStores1;
  const bottom = setLoading(onComplete[19])().bottom;
  let obj = openSettingsSheet(onComplete[20]);
  navigation = obj.useNavigation();
  obj1 = openSettingsSheet(onComplete[21]);
  const items = [closure_7];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  phone = undefined;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  const tmp = callback5();
  let obj2 = phone;
  ({ permissionState, error } = callback2());
  const tmp9 = stateFromStores(phone.useState(true), 2);
  first = tmp9[0];
  let tmp12 = callback3();
  closure_7 = tmp12;
  let email;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const items1 = [email, first, tmp12, navigation, setLoading, phone];
  callback = phone.useCallback(() => {
    setLoading(true);
    let timerId = setTimeout(navigation(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp2;
              if (!closure_1_7) {
                let obj2 = closure_1_1(12458);
                let tmp12 = closure_1_6;
                if (tmp12) {
                  let email;
                  if (closure_1_4 != null) {
                    email = closure_1_4.email;
                  }
                  tmp12 = null != email;
                }
                obj1 = { email: null, phone: null };
                obj1[0] = tmp12;
                let tmp15 = closure_1_6;
                if (tmp15) {
                  tmp15 = null != closure_1_5;
                }
                obj1[1] = tmp15;
                dependencyMap = 2;
                c3 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.updateDiscoverability(obj1);
                return obj2;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => tmp2(false), 2000);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          dependencyMap = 1;
          c3 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = closure_1_0(12450).startContactSync(c3);
          return obj4;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    }), 25);
  }, items1);
  const tmp8 = callback2();
  const items2 = [callback];
  stateFromStores1 = openSettingsSheet(onComplete[21]).useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = obj2.useEffect(() => {
    let isAndroidResult = openSettingsSheet(onComplete[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = stateFromStores1 === tmp(tmp2[24]).AppStates.ACTIVE;
    }
    if (isAndroidResult) {
      const result = tmp(tmp2[14]).refreshContactSyncPermissionStatus();
      const tmpResult = tmp(tmp2[14]);
    }
  }, items3);
  const items4 = [openSettingsSheet];
  const effect1 = obj2.useEffect(() => {
    if (openSettingsSheet) {
      let obj = setLoading(onComplete[25]);
      obj = { type: "Contact Sync", location: null };
      obj[1] = { page: "Contact Sync" };
      obj.track(closure_1_14.OPEN_POPOUT, obj);
      setLoading(onComplete[26]).openLazy(openSettingsSheet(onComplete[28])(onComplete[27], onComplete.paths), "Contact Sync Info Settings");
      const obj3 = setLoading(onComplete[26]);
    }
  }, items4);
  const items5 = [callback, onComplete];
  const callback1 = obj2.useCallback(navigation(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            let obj3 = v0(5092);
            v0 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj3.requestPermission(closure_1_15.CONTACTS);
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          if (arg1) {
            callback();
          } else {
            obj = closure_1_0(12450);
            obj3 = { onComplete: null, skip: true };
            obj3[0] = dependencyMap;
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
  const items6 = [callback4(setLoading(onComplete[30]), { absolute: true }), ];
  const items7 = [tmp.container, ];
  let num = 16;
  if (bottom > 0) {
    num = bottom;
  }
  obj = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    if (permissionState === constants.AUTHORIZED) {
      obj = { onNext: null, error: null, loading: null, discoverabilityEnabled: null, setDiscoverabilityEnabled: null };
      obj[0] = callback;
      obj[1] = error;
      obj[2] = loading;
      obj[3] = first;
      obj[4] = tmp11;
      let tmp21Result = tmp21(tmp2(tmp3[33]), obj);
    }
    obj1 = { children: null };
    obj[1] = tmp21Result;
    items6[1] = tmp21(tmp22, obj);
    obj1[0] = items6;
    return tmp19(tmp20, obj1);
  }
  obj2 = { title: null, subtitle: null, trailing: null, header: null, loading: null, showSkip: null, onAllow: null, onDontAllow: null };
  tmp19 = closure_18;
  tmp20 = closure_17;
  tmp22 = first;
  const tmp4Result = openSettingsSheet(onComplete[21]);
  const intl = tmp4(tmp3[16]).intl;
  obj2[0] = intl.string(openSettingsSheet(onComplete[16]).t.DjcfHu);
  const intl2 = tmp4(tmp3[16]).intl;
  obj2[1] = intl2.string(openSettingsSheet(onComplete[16]).t["kq+Cd3"]);
  obj2[2] = callback4(OnboardingTrailing, { isOnboarding: tmp12, discoverabilityEnabled: first, setDiscoverabilityEnabled: tmp9[1] });
  obj2[3] = callback4(setLoading(onComplete[32]), {});
  obj2[4] = loading;
  obj2[5] = tmp12;
  obj2[6] = callback1;
  obj2[7] = function onDontAllow() {
    let obj = openSettingsSheet(onComplete[14]);
    obj = { onComplete, skip: true };
    const result = obj.closeContactSyncModal(obj);
  };
  tmp21Result = tmp21(setLoading(onComplete[31]), obj2);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  let _require;
  let first;
  dependencyMap = undefined;
  let callback;
  let obj = _require(1498);
  const navigation = obj.useNavigation();
  _require = navigation;
  const tmp3 = callback(React.useState(false), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = callback2();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  first(12469)(navigation, navigateToLandingPage.navigateToLandingPage);
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              dependencyMap(true);
              closure_2_9(callback);
              obj1 = callback(12450);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.startContactSync(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => v1(false), 2000);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const items = [navigation];
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [first, callback, navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    options.setOptions({
      headerRight() {
        return closure_1_16(closure_1_1(closure_1_2[35]), {
          insideNavigator: true,
          disabled: closure_1,
          onPress() {
            callback("");
          }
        });
      }
    });
  }, items1);
  obj = { style: callback5().container, children: null };
  obj = { onNext: callback, error, loading: first, initialName: null, prefilledFromContactBook: null };
  let str = name;
  const tmp = callback5();
  const tmp10 = View;
  if (name == null) {
    str = "";
  }
  obj[3] = str;
  let tmp12 = null != name;
  if (tmp12) {
    tmp12 = "" !== name;
  }
  if (tmp12) {
    tmp12 = isNameFromContactBook;
  }
  obj[4] = tmp12;
  obj[1] = closure_16(first(12471), obj);
  return closure_16(tmp10, obj);
}
function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  let navigation;
  let suggestions;
  let callback;
  let obj = onComplete(suggestions[20]);
  navigation = obj.useNavigation();
  suggestions = callback2().suggestions;
  const tmp = callback5();
  onComplete(suggestions[34]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  callback = React.useCallback((skip, friendsAdded) => {
    let obj = onComplete(suggestions[14]);
    obj = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
    const result = obj.closeContactSyncModal(obj);
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return closure_1_16(closure_1_1(closure_1_2[35]), {
          insideNavigator: true,
          onPress() {
            return callback(true, 0);
          }
        });
      }
    });
  }, items1);
  if (suggestions.length > 0) {
    obj = { friendSuggestions: null, onSubmit: null };
    obj[0] = suggestions;
    obj[1] = function onSubmit(arg0) {
      return onComplete(suggestions[14]).bulkAddFriendSuggestions(arg0, onComplete);
    };
    let tmp10 = callback4(navigation(tmp2[37]), obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj[1] = callback4(navigation(tmp2[38]), {});
    tmp10 = callback4(View, obj);
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
        const result = onComplete(first[14]).refreshContactSyncPermissionStatus();
        const obj = onComplete(first[14]);
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
      let obj = { isOnboarding: closure_4, loading: first, setLoading: closure_3, openSettingsSheet, onComplete: memo };
      ({ loading: onComplete, setLoading: openSettingsSheet, openSettingsSheet: first, onComplete: closure_3, navigateToLandingPage: closure_4 } = obj);
      obj = { ignoreKeyboard: true, impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_START, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      obj = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj[2] = obj;
      obj[4] = closure_1_20;
      if (obj.isOnboarding) {
        let headerCloseButton = closure_1_21;
      } else {
        headerCloseButton = tmp2(tmp3[40]).getHeaderCloseButton(() => {
          let obj = closure_1_0(closure_1_2[14]);
          obj = { onComplete: closure_3, skip: true };
          return obj.closeContactSyncModal(obj);
        });
        const tmp2Result = tmp2(tmp3[40]);
      }
      obj1 = { [closure_1_13.WELCOME]: obj };
      obj[5] = headerCloseButton;
      obj[6] = function render() {
        return closure_1_16(closure_1_24, { onComplete: closure_3, openSettingsSheet: closure_2, loading: closure_0, setLoading: closure_1 });
      };
      const obj2 = {
        ignoreKeyboard: true,
        impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_INPUT_NAME,
        impressionProperties: { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle: closure_1_20,
        headerLeft: closure_1_21,
        render() {
          return closure_1_16(closure_1_25, { navigateToLandingPage: closure_4 });
        }
      };
      obj1[closure_1_13.NAME_INPUT] = obj2;
      const obj4 = { ignoreKeyboard: true, impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_SUGGESTIONS, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj3 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj4[2] = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj4[4] = closure_1_20;
      obj4[5] = closure_1_21;
      obj4[6] = function render() {
        return closure_1_16(closure_1_26, { onComplete: closure_3 });
      };
      obj1[closure_1_13.SUGGESTIONS] = obj4;
      const obj6 = { impressionName: onComplete(first[39]).ImpressionNames.USER_ADD_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj5 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj6[1] = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj6[3] = closure_1_20;
      obj6[4] = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = closure_4;
        return closure_1_16(closure_1_1(closure_1_2[41]), obj);
      };
      obj6[5] = function render() {
        return callback2(callback(12477).AddPhoneScreen, {});
      };
      obj1[closure_1_13.ADD_PHONE] = obj6;
      const obj8 = { impressionName: onComplete(first[39]).ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
      const obj7 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj8[1] = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj8[3] = closure_1_20;
      obj8[4] = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = closure_4;
        return closure_1_16(closure_1_1(closure_1_2[41]), obj);
      };
      obj8[5] = function render() {
        return callback2(callback(12477).VerifyPhoneScreen, {});
      };
      obj1[closure_1_13.VERIFY_PHONE] = obj8;
      const obj10 = { impressionName: onComplete(first[39]).ImpressionNames.USER_VERIFY_PASSWORD, impressionProperties: null, fullscreen: true, headerLeft: null, headerTitle: null, render: null };
      const obj9 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj10[1] = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj10[3] = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.navigateToLandingPage = closure_4;
        return closure_1_16(closure_1_1(closure_1_2[41]), obj);
      };
      obj10[4] = closure_1_20;
      obj10[5] = function render() {
        return callback2(callback(12477).VerifyPasswordScreen, {});
      };
      obj1[closure_1_13.VERIFY_PASSWORD] = obj10;
      return obj1;
    }, items2);
    effect1 = closure_5.useEffect(() => () => {
      if (!closure_4) {
        let obj = closure_1_0(closure_1_2[14]);
        obj = { onComplete: null };
        obj[0] = closure_5;
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
      obj[0] = ContactSyncScenes.WELCOME;
      items4 = [];
      items4[0] = obj;
      initialRoutes = items4;
    }
    obj[1] = initialRoutes;
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["13/7kX"]);
    return tmp8(require("NavigationStack").Navigator, obj);
  }
}
({ setName: c9, useContactSyncModalStore: c10, useIsOnboarding: unpackModuleId } = ContactSyncModes);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncLandingPage);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { container: null, landingTrailing: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_19 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  return callback4(ContactSyncModal, { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes });
};