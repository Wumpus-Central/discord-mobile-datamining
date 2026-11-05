// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import WidgetActionCreatorsDefault from "../../../user_profile/WidgetActionCreators.tsx";
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
const createStyles = fn(5143);
let closure_20 = createStyles.createStyles({
  container: { height: "100%" },
  controls: { paddingTop: 4 },
  page: { flex: 1 },
});
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return closure_1_17(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
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
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx",
);

export default noop.memo(function ProfileCustomizationSettingScreen() {
  let tmp = first;
  let obj = dependencyMap;
  first(16844)();
  const tmp3 = closure_20();
  const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled(
    "ProfileCustomizationSettingScreen",
  );
  let obj2 = require("MobileWidgetEditingExperiment");
  const token = require("useToken").useToken(first(575).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  const tmp7 = first(9141)();
  const width = tmp7.width;
  let num = 0;
  ({ ref, onLayout } = tmp7);
  if (undefined !== width) {
    num = width;
  }
  [first, dependencyMap] = guild.useState(false);
  let obj3 = require("useToken");
  [tmp11, closure_3] = guild.useState(false);
  const tmp10 = _slicedToArray(guild.useState(false), 2);
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  const tmp4Result = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = hasUnsavedChanges.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  const tmp4Result6 = require("useSettingNavigationRoute");
  const obj5 = { items: mapped, pageWidth: num, defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num2 = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num2 = 1;
  }
  obj5.defaultIndex = num2;
  obj5.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    hasUnsavedChanges.setState({ subsection: first.subSection });
  };
  obj5.onPageChangeStart = function onPageChangeStart(arg0, onContinue) {
    return maybeShowUnsavedChangesAlertDefault({
      location: "ProfileCustomizationSettingScreen",
      hasUnsavedChanges,
      onReset: resetAllPendingChanges,
      onContinue,
      onSave,
    });
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj5);
  const tmp18 = tmp(16722)();
  const handleSubmit = tmp18.handleSubmit;
  const tmp19 = handleSubmit(tmp18, closure_3);
  _slicedToArray = tmp19;
  const tmp20 = tmp(16836)();
  guild = tmp20.guild;
  const handleSubmit2 = tmp20.handleSubmit;
  const tmp4Result7 = require("SegmentedControlState");
  const tmp21 = handleSubmit(tmp20, nativeStackNavigation);
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
  closure_12 = tmp23;
  const items1 = [field, handleSubmit, handleSubmit2];
  const onSave = obj4.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [field];
  const effect = obj4.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
      settings_type: "user",
      subsection: field,
      destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE,
    });
  }, items2);
  const tmp4Result8 = require("initialize");
  const items3 = [onSave];
  let stateFromStores = require("initialize").useStateFromStores(
    items3,
    () => callback.getFlattenedGuildIds().length > 0,
  );
  const items4 = [hasUnsavedChanges, onSave];
  const callback1 = obj4.useCallback(
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
  const callback2 = obj4.useCallback(() => {
    closure_1_3(true);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.USER_PROFILE });
  }, []);
  const items5 = [guild];
  const callback3 = obj4.useCallback((id) => {
    closure_1_3(true);
    GuildIdentityActionCreators.setCurrentGuild(id.id);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.GUILD });
  }, []);
  const effect1 = obj4.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items5);
  const effect2 = obj4.useEffect(
    () => () => {
      hasUnsavedChanges.resetState();
      first(closure_1_2[17]).clearPendingWidgets();
    },
    [],
  );
  const items6 = [
    token,
    nativeStackNavigation,
    hasUnsavedChanges,
    hasInvalidWidgetChanges,
    tmp19.isSubmitting || tmp21.isSubmitting,
    onSave,
  ];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let obj = {
      contentStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: closure_12
        ? () => closure_1_17(backgroundColor(7142).HeaderSubmittingIndicator, {})
        : () => {
            let obj = { text: null, disabled: null, onPress: null };
            const intl = closure_0(1113).intl;
            obj.text = intl.string(closure_0(1113).t["R3BPH+"]);
            let tmp2 = !hasUnsavedChanges;
            if (hasUnsavedChanges) {
              tmp2 = hasInvalidWidgetChanges;
            }
            obj.disabled = tmp2;
            obj.onPress = field(function* () {
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
                      closure_128_2(true);
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
            return closure_2_17(closure_0(7700).HeaderActionButton, obj);
          },
    };
    nativeStackNavigation.setOptions(obj);
  }, items6);
  const tmp4Result9 = require("initialize");
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp23;
    if (tmp23) {
      isWaitingForHexagonCampaignEnrollment = tmp19.isWaitingForHexagonCampaignEnrollment;
    }
    hasUnsavedChanges = isWaitingForHexagonCampaignEnrollment;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = require("Link").usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    if (!closure_7.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset,
        onContinue() {
          return nativeStackNavigation.dispatch(action);
        },
        onSave,
      };
      first(closure_2[26])(obj);
    }
  });
  const items7 = [first, nativeStackNavigation];
  const effect3 = obj4.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  const obj6 = { style: tmp3.container, ref, onLayout, children: null };
  const obj7 = { children: null };
  if (isMobileWidgetEditingEnabled) {
    if (stateFromStores) {
      let tmp42 = null;
      if (tmp40) {
        tmp42 = guild;
      }
      const obj8 = { guild: tmp42, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
      stateFromStores = closure_17(tmp(16846), obj8);
      const tmpResult = tmp(16846);
    }
    const items8 = [stateFromStores];
    let obj9 = { style: tmp3.page, children: null };
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp = tmp(16835);
      obj = { showGuildSelector: false };
      let tmp35Result = closure_17(tmp, obj);
    } else {
      let tmp44;
      if (!tmp11) {
        tmp44 = autoFocusElement;
      }
      const obj10 = { autoFocusElement: tmp44 };
      tmp35Result = closure_17(tmp(16701), obj10);
      const tmpResult2 = tmp(16701);
    }
    obj9.children = tmp35Result;
    obj9 = closure_17(tmp36, obj9);
    items8[1] = obj9;
    obj7.children = items8;
  } else {
    const obj11 = { style: tmp3.controls, children: null };
    const obj12 = { state: segmentedControlState };
    obj11.children = closure_17(tmp4(12379).Tabs, obj12);
    const items9 = [closure_17(tmp36, obj11)];
    const obj13 = { state: segmentedControlState };
    items9[1] = closure_17(tmp4(14424).SegmentedControlPages, obj13);
    obj7.children = items9;
    obj6.children = tmp37(tmp38, obj7);
    return closure_17(tmp36, obj6);
  }
  const tmp4Result10 = require("Link");
});
