// === Module 16675: ProfileCustomizationSettingScreen ===

// Module 16675 (ProfileCustomizationSettingScreen)
import util from "util" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5894 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7289 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11595 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11708 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12566 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16676 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16800 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11647 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import WidgetStore from "WidgetStore" /* 12564 */;
import SortedGuildStore from "SortedGuildStore" /* 6907 */;

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
const createStyles = fn(5141);
let closure_20 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 } });
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
    subSection: ProfileCustomizationSubsection.USER_PROFILE
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
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default noop.memo(function ProfileCustomizationSettingScreen() {
  let tmp = importDefault;
  let obj = first;
  require("useMaybeFetchCollectiblesRecommendations")();
  const tmp3 = closure_20();
  const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = require("MobileWidgetEditingExperiment");
  const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  const tmp7 = handleSubmit(noop.useState(0), 2);
  importDefault = tmp7[1];
  const tmp8 = handleSubmit(noop.useState(false), 2);
  first = tmp8[0];
  closure_3 = tmp8[1];
  let obj3 = require("useToken");
  [tmp11, closure_4] = handleSubmit(noop.useState(false), 2);
  const tmp10 = handleSubmit(noop.useState(false), 2);
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  const obj5 = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = handleSubmit2.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  const obj6 = require("useSettingNavigationRoute");
  const obj7 = { items: mapped, pageWidth: tmp7[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === onSave.GUILD) {
    num = 1;
  }
  obj7.defaultIndex = num;
  obj7.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    handleSubmit2.setState({ subsection: first.subSection });
  };
  obj7.onPageChangeStart = function onPageChangeStart(arg0, onContinue) {
    return maybeShowUnsavedChangesAlertDefault({ location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave });
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj7);
  const tmp18 = tmp(obj[26])();
  handleSubmit = tmp18.handleSubmit;
  const tmp19 = field(tmp18, closure_3);
  noop = tmp19;
  const tmp20 = tmp(obj[27])();
  guild = tmp20.guild;
  handleSubmit2 = tmp20.handleSubmit;
  const tmp16 = onSave;
  const tmp4Result = require("SegmentedControlState");
  const tmp21 = field(tmp20, closure_4);
  items = [hasUnsavedChanges, hasInvalidWidgetChanges];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = hasInvalidWidgetChanges.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    if (!hasUnsavedChangesResult) {
      showNoticeResult = hasUnsavedChanges.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: null };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !hasInvalidWidgetChanges.canSaveChanges();
    }
    obj2.hasInvalidWidgetChanges = hasUnsavedChangesResult;
    return obj2;
  });
  hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  const flattenedGuildIds = tmp23;
  const items1 = [field, handleSubmit, handleSubmit2];
  onSave = obj4.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [field];
  const effect = obj4.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, { settings_type: "user", subsection: field, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE });
  }, items2);
  const tmp4Result4 = require("initialize");
  const items3 = [flattenedGuildIds];
  let stateFromStores = require("initialize").useStateFromStores(items3, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const items4 = [hasUnsavedChanges, onSave];
  const callback1 = obj4.useCallback((onContinue) => maybeShowUnsavedChangesAlertDefault({ location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave }), items4);
  const callback2 = obj4.useCallback(() => {
    closure_1_4(true);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.USER_PROFILE });
  }, []);
  const items5 = [guild];
  const callback3 = obj4.useCallback((id) => {
    closure_1_4(true);
    GuildIdentityActionCreators.setCurrentGuild(id.id);
    ProfileCustomizationNavigationStore.setState({ subsection: ProfileCustomizationSubsection.GUILD });
  }, []);
  const effect1 = obj4.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items5);
  const effect2 = obj4.useEffect(() => () => {
    handleSubmit2.resetState();
    closure_1_1(first[17]).clearPendingWidgets();
  }, []);
  const items6 = [token, nativeStackNavigation, hasUnsavedChanges, hasInvalidWidgetChanges, tmp19.isSubmitting || tmp21.isSubmitting, onSave];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let obj = {
      contentStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: closure_13 ? (() => closure_1_17(backgroundColor(first[31]).HeaderSubmittingIndicator, {})) : (() => {
        let obj = { text: null, disabled: null, onPress: null };
        const intl = closure_0(first[13]).intl;
        obj.text = intl.string(closure_0(first[13]).t["R3BPH+"]);
        let tmp2 = !hasUnsavedChanges;
        if (hasUnsavedChanges) {
          tmp2 = hasInvalidWidgetChanges;
        }
        obj.disabled = tmp2;
        obj.onPress = nativeStackNavigation(function*() {
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
        return closure_2_17(closure_0(first[32]).HeaderActionButton, obj);
      })
    };
    nativeStackNavigation.setOptions(obj);
  }, items6);
  const callback4 = obj4.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result5 = require("initialize");
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
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      closure_1(first[25])(obj);
    }
  });
  const items7 = [first, nativeStackNavigation];
  const effect3 = obj4.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  const obj8 = { style: tmp3.container, onLayout: callback4, children: null };
  const obj9 = { children: null };
  if (isMobileWidgetEditingEnabled) {
    if (stateFromStores) {
      let tmp43 = null;
      if (tmp41) {
        tmp43 = guild;
      }
      const obj10 = { guild: tmp43, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
      stateFromStores = closure_17(tmp(obj[34]), obj10);
      const tmpResult = tmp(obj[34]);
    }
    const items8 = [stateFromStores, ];
    let obj11 = { style: tmp3.page, children: null };
    if (field === tmp16.GUILD) {
      tmp = tmp(obj[15]);
      obj = { showGuildSelector: false };
      let tmp36Result = closure_17(tmp, obj);
    } else {
      let tmp45;
      if (!tmp11) {
        tmp45 = autoFocusElement;
      }
      const obj12 = { autoFocusElement: tmp45 };
      tmp36Result = closure_17(tmp(obj[14]), obj12);
      const tmpResult2 = tmp(obj[14]);
    }
    obj11.children = tmp36Result;
    obj11 = closure_17(tmp37, obj11);
    items8[1] = obj11;
    obj9.children = items8;
  } else {
    const obj13 = { style: tmp3.controls, children: null };
    const obj14 = { state: segmentedControlState };
    obj13.children = closure_17(tmp4(obj[35]).Tabs, obj14);
    const items9 = [closure_17(tmp37, obj13), ];
    const obj15 = { state: segmentedControlState };
    items9[1] = closure_17(tmp4(obj[36]).SegmentedControlPages, obj15);
    obj9.children = items9;
    obj8.children = tmp38(tmp39, obj9);
    return closure_17(tmp37, obj8);
  }
  const tmp4Result6 = require("Link");
});