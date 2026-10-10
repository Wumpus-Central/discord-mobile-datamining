// === Module 12407: RedesignContactSyncModal ===

// Module 12407 (RedesignContactSyncModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12398 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12408 */;
import ContactSyncBackToLandingDefault from "ContactSyncBackToLanding" /* 12425 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import AppStateStore from "AppStateStore" /* 1999 */;

require = fn;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  const onComplete = openSettingsSheet.onComplete;
  let discoverabilityEnabled;
  let currentUser;
  let onNext;
  let stateFromStores1;
  const bottom = setLoading(onComplete[21])().bottom;
  const tmp = closure_19();
  const navigation = openSettingsSheet(onComplete[22]).useNavigation();
  let obj = openSettingsSheet(onComplete[22]);
  const items = [currentUser];
  const stateFromStores = openSettingsSheet(onComplete[23]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj2 = openSettingsSheet(onComplete[23]);
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
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
              const obj7 = { value: tmp2(12406).updateDiscoverability(obj5), done: false };
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
              return { value: "IconComponent", done: "+51" };
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
          const obj9 = { value: tmp2(12398).startContactSync(closure_129_3), done: false };
          return obj9;
        } catch (tmp2) {
          c3 = tmp;
          throw tmp2;
        }
      }
    }), 25);
  }, items1);
  const tmp8 = closure_10();
  const items2 = [onNext];
  stateFromStores1 = openSettingsSheet(onComplete[23]).useStateFromStores(items2, () => callback.getState(), []);
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
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12409, dependencyMap.paths), "Contact Sync Info Settings");
    }
  }, items4);
  const items5 = [onNext, onComplete];
  const callback1 = obj3.useCallback(navigation(function*() {
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
        return { value: "IconComponent", done: "+51" };
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
            const obj5 = { value: v1(7499).requestPermission(constants.CONTACTS), done: false };
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
            const result = tmp4(12398).closeContactSyncModal(obj7);
            const obj = tmp4(12398);
          }
          dependencyMap = 3;
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  }), items5);
  const items6 = [closure_16(setLoading(onComplete[32]), { absolute: true }), ];
  const items7 = [tmp.container, ];
  let num = 16;
  if (bottom > 0) {
    num = bottom;
  }
  let obj4 = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    if (permissionState === constants.AUTHORIZED) {
      let obj5 = { onNext, error, loading, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 };
      let tmp21Result = closure_16(setLoading(tmp3[35]), obj5);
    }
    let obj6 = { children: null };
    obj4.children = tmp21Result;
    items6[1] = closure_16(tmp22, obj4);
    obj6.children = items6;
    return closure_18(closure_17, obj6);
  }
  let obj7 = { title: null, subtitle: null, trailing: null, header: null, headerInsideCard: true, loading: null, showSkip: null, onAllow: null, onDontAllow: null };
  tmp22 = discoverabilityEnabled;
  const tmp4Result = openSettingsSheet(onComplete[23]);
  const intl = tmp4(tmp3[17]).intl;
  obj7.title = intl.string(openSettingsSheet(onComplete[17]).t.DjcfHu);
  const intl2 = tmp4(tmp3[17]).intl;
  obj7.subtitle = intl2.string(openSettingsSheet(onComplete[17]).t["kq+Cd3"]);
  obj7.trailing = closure_16(closure_23, { isOnboarding: tmp12, discoverabilityEnabled, setDiscoverabilityEnabled: tmp9[1] });
  obj7.header = closure_16(openSettingsSheet(onComplete[34]).FindFriendsSpotIllustration, { width: 188, accessible: false });
  obj7.loading = loading;
  obj7.showSkip = tmp12;
  obj7.onAllow = callback1;
  obj7.onDontAllow = function onDontAllow() {
    const result = ContactSyncModalActionCreators.closeContactSyncModal({ onComplete, skip: true });
  };
  tmp21Result = closure_16(setLoading(onComplete[33]), obj7);
  const tmp2Result = setLoading(onComplete[33]);
}
function getScreens(isOnboarding) {
  ({ loading: require, setLoading: importDefault, openSettingsSheet: dependencyMap, onComplete: asyncGeneratorStep, navigateToLandingPage: _slicedToArray } = isOnboarding);
  let obj = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_START, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft: null, render: null };
  if (isOnboarding.isOnboarding) {
    let headerCloseButton = headerLeft;
  } else {
    headerCloseButton = NavigatorHeader.getHeaderCloseButton(() => ContactSyncModalActionCreators.closeContactSyncModal({ onComplete, skip: true }));
    const tmp2Result = NavigatorHeader;
  }
  const obj3 = { [closure_13.WELCOME]: obj };
  obj.headerLeft = headerCloseButton;
  obj.render = function render() {
    return value3(ContactSyncLandingScreen, { onComplete, openSettingsSheet, loading, setLoading });
  };
  const obj4 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
  const obj2 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj4.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj4.headerTitle = headerTitle;
  obj4.headerLeft = headerLeft;
  obj4.render = function render() {
    return value3(closure_25, { navigateToLandingPage });
  };
  obj3[constants.NAME_INPUT] = obj4;
  const obj6 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
  const obj5 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj6.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj6.headerTitle = headerTitle;
  obj6.headerLeft = headerLeft;
  obj6.render = function render() {
    return value3(closure_26, { onComplete });
  };
  obj3[constants.SUGGESTIONS] = obj6;
  const obj8 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
  const obj7 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj8.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj8.headerTitle = headerTitle;
  obj8.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.navigateToLandingPage = navigateToLandingPage;
    return value3(ContactSyncBackToLandingDefault, obj);
  };
  obj8.render = function render() {
    return closure_1_16(loading(openSettingsSheet[44]).AddPhoneScreen, {});
  };
  obj3[constants.ADD_PHONE] = obj8;
  const obj10 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, fullscreen: true, headerTitle: null, headerLeft: null, render: null };
  const obj9 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj10.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj10.headerTitle = headerTitle;
  obj10.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.navigateToLandingPage = navigateToLandingPage;
    return value3(ContactSyncBackToLandingDefault, obj);
  };
  obj10.render = function render() {
    return closure_1_16(loading(openSettingsSheet[44]).VerifyPhoneScreen, {});
  };
  obj3[constants.VERIFY_PHONE] = obj10;
  const obj12 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD, impressionProperties: null, fullscreen: true, headerLeft: null, headerTitle: null, render: null };
  const obj11 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj12.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW };
  obj12.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.navigateToLandingPage = navigateToLandingPage;
    return value3(ContactSyncBackToLandingDefault, obj);
  };
  obj12.headerTitle = headerTitle;
  obj12.render = function render() {
    return closure_1_16(loading(openSettingsSheet[44]).VerifyPasswordScreen, {});
  };
  obj3[constants.VERIFY_PASSWORD] = obj12;
  return obj3;
}
const View = fn(17).View;
const ContactSyncModalStore = fn(12399);
({ setName: closure_9, useContactSyncModalStore: c10, useIsOnboarding: closure_11 } = ContactSyncModalStore);
const ContactSyncConstants = fn(12400);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const NativePermissionTypes = fn(7482).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(6258).NAV_BAR_HEIGHT + 32 }, landingTrailing: { textAlign: "center" } };
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function OnboardingTrailingLanding() {
  const cResult = c.c(3);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const obj2 = { learnMoreUrl: ContactSyncUtils.getOpenLearnMoreUrl() };
    const formatResult = intl.format(util.t["84S6+Z"], obj2);
    cResult[0] = formatResult;
    let first = formatResult;
    const tmpResult = ContactSyncUtils;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.landingTrailing) {
    const obj3 = { style: tmp4.landingTrailing, variant: "text-sm/medium", color: "text-muted", children: first };
    const tmp9 = value3(Text_Text.Text, obj3);
    cResult[1] = tmp4.landingTrailing;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function OnboardingTrailingLanding() {
  const obj = { style: closure_19().landingTrailing, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  const obj2 = { learnMoreUrl: null };
  const tmp = closure_19();
  obj2.learnMoreUrl = ContactSyncUtils.getOpenLearnMoreUrl();
  obj.children = intl.format(util.t["84S6+Z"], obj2);
  return value3(Text_Text.Text, obj);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function OnboardingTrailing(arg0) {
  const cResult = c.c(4);
  ({ isOnboarding, discoverabilityEnabled, setDiscoverabilityEnabled } = arg0);
  if (cResult[0] === discoverabilityEnabled) {
    if (cResult[1] === isOnboarding) {
      if (cResult[2] === setDiscoverabilityEnabled) {
        return cResult[3];
      }
    }
  }
  if (isOnboarding) {
    let tmp3Result = value3(closure_22, {});
  } else {
    const obj2 = { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled };
    tmp3Result = value3(RedesignContactSyncDiscoverabilityFooterDefault, obj2);
  }
  cResult[0] = discoverabilityEnabled;
  cResult[1] = isOnboarding;
  cResult[2] = setDiscoverabilityEnabled;
  cResult[3] = tmp3Result;
}) : (function OnboardingTrailing(isOnboarding) {
  if (isOnboarding.isOnboarding) {
    let tmp3Result = value3(closure_22, {});
  } else {
    const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
    tmp3Result = value3(RedesignContactSyncDiscoverabilityFooterDefault, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncNameInputScreen(navigateToLandingPage) {
  const cResult = require("c").c(16);
  const tmp3 = closure_19();
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  [loading, dependencyMap] = noop.useState(false);
  const obj2 = require("useNavigation");
  ({ name, error, isNameFromContactBook } = closure_10());
  loading(12418)(navigation, navigateToLandingPage.navigateToLandingPage);
  if (cResult[0] !== navigation) {
    _require = asyncGeneratorStep(async (arg0) => {
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
          return { value: "IconComponent", done: "+51" };
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
              closure_2_9(options);
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: options(12398).startContactSync(options), done: false };
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
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    });
    function t1() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = navigation;
    cResult[1] = t1;
    let tmp10 = t1;
  } else {
    tmp10 = cResult[1];
  }
  asyncGeneratorStep = tmp10;
  if (cResult[2] === loading) {
    if (cResult[3] === navigation) {
      if (cResult[4] === tmp10) {
        let tmp12 = cResult[5];
        let tmp13 = cResult[6];
      }
      const layoutEffect = noop.useLayoutEffect(tmp12, tmp13);
      let str = name;
      if (name == null) {
        str = "";
      }
      let tmp16 = null != name;
      if (tmp16) {
        tmp16 = "" !== name;
      }
      if (tmp16) {
        tmp16 = isNameFromContactBook;
      }
      if (cResult[7] === error) {
        if (cResult[8] === loading) {
          if (cResult[9] === tmp10) {
            if (cResult[10] === str) {
              if (cResult[11] === tmp16) {
                let tmp17 = cResult[12];
              }
              if (cResult[13] === tmp3.container) {
                if (cResult[14] === tmp17) {
                  let tmp20 = cResult[15];
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
      const tmp19 = closure_16(tmp8(12420), obj5);
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
              return closure_2_16(first(closure_2[37]), {
                insideNavigator: true,
                disabled,
                onPress() {
                  closure_1_3("");
                }
              });
            }
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
  const tmp7 = closure_10();
  tmp8 = loading;
}) : (function ContactSyncNameInputScreen(navigateToLandingPage) {
  let _require;
  loading = undefined;
  dependencyMap = undefined;
  let onNext;
  const tmp = closure_19();
  const navigation = require("useNavigation").useNavigation();
  [loading, dependencyMap] = noop.useState(false);
  const tmp5 = closure_10();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  loading(12418)(navigation, navigateToLandingPage.navigateToLandingPage);
  _require = onNext(function*(arg0) {
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
        return { value: "IconComponent", done: "+51" };
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
            closure_2_9(options);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: options(12398).startContactSync(options), done: false };
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
          return { value: "IconComponent", done: "+51" };
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
        return closure_2_16(first(closure_2[37]), {
          insideNavigator: true,
          disabled,
          onPress() {
            closure_1_3("");
          }
        });
      }
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
  obj2.children = closure_16(loading(12420), obj3);
  return closure_16(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncSuggestionScreen(onComplete) {
  let obj = suggestions;
  const cResult = onComplete(suggestions[16]).c(15);
  onComplete = onComplete.onComplete;
  const tmp2 = closure_19();
  const obj2 = onComplete(suggestions[16]);
  const navigation = onComplete(suggestions[22]).useNavigation();
  suggestions = closure_10().suggestions;
  const obj3 = onComplete(suggestions[22]);
  onComplete(suggestions[36]).useBackHandlerMinimizeApp();
  if (cResult[0] === onComplete) {
    if (cResult[1] === suggestions.length) {
      let tmp5 = cResult[2];
    }
    closure_3 = tmp5;
    if (cResult[3] === tmp5) {
      if (cResult[4] === navigation) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === navigation) {
          if (cResult[8] === onComplete) {
            if (cResult[9] === suggestions.length) {
              let tmp7 = cResult[10];
            }
            const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
            if (cResult[11] === onComplete) {
              if (cResult[12] === tmp2) {
                if (cResult[13] === suggestions) {
                  return cResult[14];
                }
              }
            }
            if (suggestions.length > 0) {
              obj = {
                friendSuggestions: suggestions,
                onSubmit(arg0) {
                              return ContactSyncModalActionCreators.bulkAddFriendSuggestions(arg0, onComplete);
                            }
              };
              let tmp13 = closure_16(navigation(obj[39]), obj);
              const tmp16 = navigation(obj[39]);
            } else {
              const obj5 = { style: tmp2.container, children: closure_16(navigation(obj[40]), {}) };
              tmp13 = closure_16(View, obj5);
            }
            cResult[11] = onComplete;
            cResult[12] = tmp2;
            cResult[13] = suggestions;
            cResult[14] = tmp13;
          }
        }
      }
      const items = [tmp5, navigation, onComplete, suggestions.length];
      cResult[6] = tmp5;
      cResult[7] = navigation;
      cResult[8] = onComplete;
      cResult[9] = suggestions.length;
      cResult[10] = items;
      tmp7 = items;
    }
    const fn2 = function f() {
      navigation.setOptions({
        headerRight() {
          return closure_2_16(navigation(suggestions[37]), {
            insideNavigator: true,
            onPress() {
              return closure_1_3(true, 0);
            }
          });
        }
      });
    };
    cResult[3] = tmp5;
    cResult[4] = navigation;
    cResult[5] = fn2;
    tmp6 = fn2;
  }
  const fn = function t(skip, friendsAdded) {
    const result = ContactSyncModalActionCreators.closeContactSyncModal({ onComplete, skip, friendsFound: suggestions.length, friendsAdded });
  };
  cResult[0] = onComplete;
  cResult[1] = suggestions.length;
  cResult[2] = fn;
  tmp5 = fn;
  const obj4 = onComplete(suggestions[36]);
}) : (function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  let suggestions;
  const tmp = closure_19();
  const navigation = onComplete(suggestions[22]).useNavigation();
  suggestions = closure_10().suggestions;
  const obj = onComplete(suggestions[22]);
  onComplete(suggestions[36]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = noop.useCallback((skip, friendsAdded) => {
    const result = ContactSyncModalActionCreators.closeContactSyncModal({ onComplete, skip, friendsFound: suggestions.length, friendsAdded });
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return closure_2_16(navigation(suggestions[37]), {
          insideNavigator: true,
          onPress() {
            return closure_1_3(true, 0);
          }
        });
      }
    });
  }, items1);
  if (suggestions.length > 0) {
    const obj3 = {
      friendSuggestions: suggestions,
      onSubmit(arg0) {
          return ContactSyncModalActionCreators.bulkAddFriendSuggestions(arg0, onComplete);
        }
    };
    let tmp10 = closure_16(navigation(tmp2[39]), obj3);
  } else {
    const obj4 = { style: tmp.container, children: closure_16(navigation(tmp2[40]), {}) };
    tmp10 = closure_16(View, obj4);
  }
  return tmp10;
});
fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(6258).NAV_BAR_HEIGHT + 32 };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncModal(arg0) {
  const cResult = require("c").c(20);
  ({ onComplete, initialRoutes, openSettingsSheet } = arg0);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = closure_11();
  _require = tmp6;
  if (cResult[0] !== tmp6) {
    const fn = function s() {
      if (closure_0) {
        const result = ContactSyncModalActionCreators.refreshContactSyncPermissionStatus();
      }
    };
    const items = [tmp6];
    cResult[0] = tmp6;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[3] !== onComplete) {
    let fn2 = onComplete;
    if (onComplete == null) {
      fn2 = () => {

      };
    }
    cResult[3] = onComplete;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  closure_1 = tmp10;
  if (cResult[5] === tmp6) {
    if (cResult[6] === first) {
      if (cResult[7] === tmp10) {
        if (cResult[8] === openSettingsSheet) {
          let tmp12 = cResult[9];
        }
        if (cResult[10] === tmp6) {
          if (cResult[11] === tmp10) {
            let tmp14 = cResult[12];
            let tmp15 = cResult[13];
          }
          const effect1 = noop.useEffect(tmp14, tmp15);
          class L {
            constructor() {
              return () => {
                if (!closure_1_0) {
                  const obj2 = { onComplete };
                  const result = closure_0(dependencyMap[14]).closeContactSyncModal(obj2);
                  const obj = closure_0(dependencyMap[14]);
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
                  if (!closure_1_0) {
                    const obj2 = { onComplete };
                    const result = closure_0(dependencyMap[14]).closeContactSyncModal(obj2);
                    const obj = closure_0(dependencyMap[14]);
                  }
                };
              }
            }
            cResult[16] = tmp20;
            let tmp19 = tmp20;
          } else {
            tmp19 = cResult[16];
          }
          if (cResult[17] === tmp12) {
            if (cResult[18] === tmp17) {
              let tmp21 = cResult[19];
            }
            return tmp21;
          }
          const obj3 = { screens: tmp12, initialRouteStack: tmp17, headerBackTitle: tmp19 };
          const tmp23 = closure_16(tmp(6687).Navigator, obj3);
          cResult[17] = tmp12;
          cResult[18] = tmp17;
          cResult[19] = tmp23;
          tmp21 = tmp23;
        }
        class L {
          constructor() {
            return () => {
              if (!closure_1_0) {
                const obj2 = { onComplete };
                const result = closure_0(dependencyMap[14]).closeContactSyncModal(obj2);
                const obj = closure_0(dependencyMap[14]);
              }
            };
          }
        }
        const items1 = [tmp6, tmp10];
        cResult[10] = tmp6;
        cResult[11] = tmp10;
        cResult[12] = L;
        cResult[13] = items1;
        tmp15 = items1;
        tmp14 = L;
      }
    }
  }
  const tmp13 = getScreens({ isOnboarding: tmp6, loading: first, setLoading: tmp4[1], openSettingsSheet, onComplete: tmp10 });
  cResult[5] = tmp6;
  cResult[6] = first;
  cResult[7] = tmp10;
  cResult[8] = openSettingsSheet;
  cResult[9] = tmp13;
  tmp12 = tmp13;
  let obj = require("c");
}) : (function ContactSyncModal(onComplete) {
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
    if (closure_4) {
      const result = ContactSyncModalActionCreators.refreshContactSyncPermissionStatus();
    }
  }, items);
  const items1 = [onComplete];
  memo = memo.useMemo(() => {
    let fn = onComplete;
    if (onComplete == null) {
      fn = () => {

      };
    }
    return fn;
  }, items1);
  const items2 = [tmp3, loading, openSettingsSheet, memo];
  const items3 = [tmp3, memo];
  const memo1 = memo.useMemo(() => getScreens({ isOnboarding, loading, setLoading, openSettingsSheet, onComplete: memo }), items2);
  const effect1 = memo.useEffect(() => () => {
    if (!isOnboarding) {
      const obj2 = { onComplete };
      const result = onComplete(first[14]).closeContactSyncModal(obj2);
      const obj = onComplete(first[14]);
    }
  }, items3);
  let obj = { screens: memo1, initialRouteStack: null, headerBackTitle: null };
  if (initialRoutes == null) {
    let obj2 = { name: constants2.WELCOME };
    const items4 = [obj2];
    initialRoutes = items4;
  }
  obj.initialRouteStack = initialRoutes;
  const intl = tmp9(tmp10[17]).intl;
  obj.headerBackTitle = intl.string(onComplete(loading[17]).t["13/7kX"]);
  return closure_16(onComplete(loading[45]).Navigator, obj);
});
let closure_28 = tmp6;
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default tmp6;
export const ContactSyncOnboardingModal = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncOnboardingModal(route) {
  const cResult = c.c(4);
  ({ openSettingsSheet, initialRoutes } = route);
  const onComplete = route.route.params.onComplete;
  if (cResult[0] === initialRoutes) {
    if (cResult[1] === onComplete) {
      if (cResult[2] === openSettingsSheet) {
        let tmp2 = cResult[3];
      }
      return tmp2;
    }
  }
  const tmp3 = value3(closure_28, { onComplete, openSettingsSheet, initialRoutes });
  cResult[0] = initialRoutes;
  cResult[1] = onComplete;
  cResult[2] = openSettingsSheet;
  cResult[3] = tmp3;
  tmp2 = tmp3;
}) : (function ContactSyncOnboardingModal(onComplete) {
  return value3(closure_28, { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes });
});