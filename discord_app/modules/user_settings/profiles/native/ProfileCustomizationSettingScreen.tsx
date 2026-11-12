// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import WidgetActionCreatorsDefault from "../../../user_profile/WidgetActionCreators.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile.tsx";
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import WidgetStore from "../../../user_profile/WidgetStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
function resetAllPendingChanges() {
  UserSettingsAccountActionCreators.resetAllPending();
  WidgetActionCreatorsDefault.clearPendingWidgets();
}
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = fn(17).View;
const ProfileCustomizationSubsection = fn(1082).ProfileCustomizationSubsection;
const Constants = fn(1072);
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5243);
let obj = {
  container: { height: "100%" },
  controls: { paddingTop: 4 },
  page: { flex: 1 },
  profileSelector: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_20 = createStyles.createStyles(obj);
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(arg0) {
      ({ autoFocusElement, initialTab } = arg0);
      return closure_1_17(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
    },
    subSection: ProfileCustomizationSubsection.USER_PROFILE,
  },
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return closure_1_17(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD,
  },
];
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = {
  renderLabel() {
    const intl = util.intl;
    return intl.string(util.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(arg0) {
    ({ autoFocusElement, initialTab } = arg0);
    return closure_1_17(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default noop.memo(function ProfileCustomizationSettingScreen() {
  let tmp = token;
  let obj = first;
  token(first[19])();
  const tmp3 = closure_20();
  const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled(
    "ProfileCustomizationSettingScreen",
  );
  _require = isMobileWidgetEditingEnabled;
  let obj2 = require("MobileWidgetEditingExperiment");
  token = require("useToken").useToken(token(first[13]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = require("useToken");
  const tmp7 = token(first[23])();
  const width = tmp7.width;
  let num = 0;
  ({ ref, onLayout } = tmp7);
  if (undefined !== width) {
    num = width;
  }
  const tmp8 = handleSubmit(noop.useState(false), 2);
  first = tmp8[0];
  closure_3 = tmp8[1];
  let obj4 = require("native");
  [tmp11, closure_4] = handleSubmit(noop.useState(false), 2);
  const tmp10 = handleSubmit(noop.useState(false), 2);
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  const tmp4Result = require("useNavigation");
  const settingNavigationRoute = require("useSettingNavigationRoute").useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const params2 = settingNavigationRoute.params;
  let initialTab;
  if (params2 != null) {
    initialTab = params2.initialTab;
  }
  const field = hasUnsavedChanges.useField("subsection");
  _require = { autoFocusElement, initialTab };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  const tmp4Result6 = require("useSettingNavigationRoute");
  const obj6 = { items: mapped, pageWidth: num, defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num2 = 0;
  if (field === id.GUILD) {
    num2 = 1;
  }
  obj6.defaultIndex = num2;
  obj6.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    hasUnsavedChanges.setState({ subsection: first.subSection });
  };
  obj6.onPageChangeStart = function onPageChangeStart(arg0, onContinue) {
    return maybeShowUnsavedChangesAlertDefault({
      location: "ProfileCustomizationSettingScreen",
      hasUnsavedChanges,
      onReset: resetAllPendingChanges,
      onContinue,
      onSave,
    });
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj6);
  const tmp20 = tmp(obj[28])();
  handleSubmit = tmp20.handleSubmit;
  const tmp21 = field(tmp20, closure_3);
  noop = tmp21;
  const tmp22 = tmp(obj[29])();
  ({ guild, handleSubmit: handleSubmit2 } = tmp22);
  const tmp4Result7 = require("SegmentedControlState");
  const tmp23 = field(tmp22, closure_4);
  items = [hasInvalidWidgetChanges, closure_12];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = closure_12.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    if (!hasUnsavedChangesResult) {
      showNoticeResult = hasInvalidWidgetChanges.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: null };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !closure_12.canSaveChanges();
    }
    obj2.hasInvalidWidgetChanges = hasUnsavedChangesResult;
    return obj2;
  });
  hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  closure_12 = tmp25;
  const items1 = [field, handleSubmit, handleSubmit2];
  const onSave = obj5.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [field];
  const effect = obj5.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
      settings_type: "user",
      subsection: field,
      destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE,
    });
  }, items2);
  const tmp4Result8 = require("initialize");
  const items3 = [onSave];
  const items4 = [hasUnsavedChanges, onSave];
  const stateFromStores = require("initialize").useStateFromStores(
    items3,
    () => callback.getFlattenedGuildIds().length > 0,
  );
  const callback1 = obj5.useCallback(
    (onContinue) =>
      maybeShowUnsavedChangesAlertDefault({
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset: resetAllPendingChanges,
        onContinue,
        onSave,
      }),
    items4,
  );
  const callback2 = obj5.useCallback(() => {
    closure_1_4(true);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.USER_PROFILE });
  }, []);
  id = undefined;
  const callback3 = obj5.useCallback((id) => {
    closure_1_4(true);
    GuildIdentityActionCreators.setCurrentGuild(id.id);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.GUILD });
  }, []);
  if (guild != null) {
    id = guild.id;
  }
  const items5 = [id];
  const effect1 = obj5.useEffect(() => {
    if (null != id) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp);
    }
  }, items5);
  const effect2 = obj5.useEffect(
    () => () => {
      const result = closure_1_0(7734).resetAndCloseUserProfileForm();
      hasUnsavedChanges.resetState();
      const obj = closure_1_0(7734);
      token(12026).clearPendingWidgets();
    },
    [],
  );
  const items6 = [
    token,
    nativeStackNavigation,
    isMobileWidgetEditingEnabled,
    hasUnsavedChanges,
    hasInvalidWidgetChanges,
    tmp21.isSubmitting || tmp23.isSubmitting,
    onSave,
  ];
  const layoutEffect = obj5.useLayoutEffect(() => {
    let obj = { contentStyle: { backgroundColor: token }, headerShadowVisible: false };
    if (closure_0) {
      let obj3 = { title: null, headerLeft: null };
      let intl = util.intl;
      obj3.title = intl.string(util.t.s5vZlQ);
      obj3.headerLeft = function headerLeft() {
        return closure_2_17(token(first[33]), { navigation, hideBadge: true });
      };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    obj.headerRight = closure_12
      ? () => closure_1_17(closure_1_0(first[34]).HeaderSubmittingIndicator, {})
      : () => {
          let obj = { text: null, disabled: null, onPress: null };
          const intl = closure_0(first[14]).intl;
          obj.text = intl.string(closure_0(first[14]).t["R3BPH+"]);
          let tmp2 = !hasUnsavedChanges;
          if (hasUnsavedChanges) {
            tmp2 = hasInvalidWidgetChanges;
          }
          obj.disabled = tmp2;
          obj.onPress = nativeStackNavigation(function* () {
            if (c2 === 2) {
              c2 = 3;
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
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_0 = tmp4;
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: onSave(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  if (false !== value) {
                    closure_128_3(true);
                  }
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp9) {
                c2 = tmp;
                throw tmp9;
              }
            }
          });
          return closure_2_17(closure_0(first[35]).HeaderActionButton, obj);
        };
    nativeStackNavigation.setOptions(obj);
    let obj2 = { backgroundColor: token };
  }, items6);
  const tmp4Result9 = require("initialize");
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp25;
    if (tmp25) {
      isWaitingForHexagonCampaignEnrollment = tmp21.isWaitingForHexagonCampaignEnrollment;
    }
    hasUnsavedChanges = isWaitingForHexagonCampaignEnrollment;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = require("Link").usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset,
        onContinue() {
          return nativeStackNavigation.dispatch(action);
        },
        onSave,
      };
      token(first[27])(obj);
    }
  });
  const items7 = [first, nativeStackNavigation];
  const effect3 = obj5.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  let tmp40Result = null;
  if (stateFromStores) {
    const obj7 = { theme: obj4.useThemeContext().theme, children: null };
    const obj8 = { style: tmp3.profileSelector, children: null };
    let tmp43 = null;
    if (tmp36) {
      tmp43 = guild;
    }
    const obj9 = { children: null };
    const obj10 = { guild: tmp43, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
    obj8.children = closure_17(tmp(obj[38]), obj10);
    obj9.children = closure_17(handleSubmit2, obj8);
    obj7.children = closure_17(tmp4(obj[37]).DisableCustomTheme, obj9);
    tmp40Result = closure_17(tmp4(obj[22]).ThemeContextProvider, obj7);
    const tmpResult = tmp(obj[38]);
  }
  const obj11 = { style: tmp3.container, ref, onLayout, children: null };
  const obj12 = { style: null, children: null };
  if (isMobileWidgetEditingEnabled) {
    obj12.style = tmp3.page;
    if (tmp36) {
      tmp = tmp(obj[16]);
      obj = { header: tmp40Result, showGuildSelector: false };
      let tmp44Result = closure_17(tmp, obj);
    } else {
      const obj13 = { header: tmp40Result, autoFocusElement: null, initialTab: null };
      let tmp49;
      if (!tmp11) {
        tmp49 = autoFocusElement;
      }
      obj13.autoFocusElement = tmp49;
      let tmp50;
      if (!tmp11) {
        tmp50 = initialTab;
      }
      obj13.initialTab = tmp50;
      tmp44Result = closure_17(tmp(obj[15]), obj13);
      const tmpResult2 = tmp(obj[15]);
    }
    obj12.children = tmp44Result;
    closure_17(handleSubmit2, obj12);
  } else {
    const obj14 = { children: null };
    obj12.style = tmp3.controls;
    const obj15 = { state: segmentedControlState };
    obj12.children = closure_17(tmp4(obj[39]).Tabs, obj15);
    const items8 = [closure_17(handleSubmit2, obj12)];
    const obj16 = { state: segmentedControlState };
    items8[1] = closure_17(tmp4(obj[40]).SegmentedControlPages, obj16);
    obj14.children = items8;
    obj11.children = closure_19(closure_18, obj14);
    return closure_17(handleSubmit2, obj11);
  }
  const tmp4Result10 = require("Link");
});
