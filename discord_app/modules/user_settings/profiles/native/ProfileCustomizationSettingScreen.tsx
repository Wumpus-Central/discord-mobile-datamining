// === Module 16074: ProfileCustomizationSettingScreen ===

// Module 16074 (ProfileCustomizationSettingScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9439 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16075 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16174 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9437 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
import WidgetStore from "WidgetStore" /* 14565 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = fn(17).View;
const ProfileCustomizationSubsection = fn(1081).ProfileCustomizationSubsection;
const Constants = fn(1071);
({ AnalyticEvents: closure_12, AnalyticsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5043);
let obj = { container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 }, profileSelector: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_17 = createStyles.createStyles(obj);
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(arg0) {
      ({ autoFocusElement, initialTab } = arg0);
      return gesture(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
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
      return gesture(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
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
    return gesture(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default noop.memo(function ProfileCustomizationSettingScreen() {
  let tmp = handleSubmit;
  let obj = handleSubmit2;
  handleSubmit(handleSubmit2[14])();
  const tmp3 = closure_17();
  const isMobileWidgetEditingEnabled = require("MobileWidgetEditingExperiment").useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = require("MobileWidgetEditingExperiment");
  const token = require("useToken").useToken(handleSubmit(handleSubmit2[10]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj3 = require("useToken");
  const tmp7 = handleSubmit(handleSubmit2[18])();
  const width = tmp7.width;
  let num = 0;
  ({ ref, onLayout } = tmp7);
  if (undefined !== width) {
    num = width;
  }
  const obj4 = require("native");
  ({ hasSwitchedProfile, hasGuilds, handleSelectMainProfile, handleSelectGuild } = tmp(obj[19])());
  const tmp8 = tmp(obj[19])();
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
  const field = ProfileCustomizationNavigationStore.useField("subsection");
  _require = { autoFocusElement, initialTab };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  const tmp4Result = require("useSettingNavigationRoute");
  const obj5 = { items: mapped, pageWidth: num, defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num2 = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num2 = 1;
  }
  obj5.defaultIndex = num2;
  obj5.onPageChange = function onPageChange(arg0) {
    let first = dependencyMap[arg0];
    if (first == null) {
      first = 109;
    }
    state.setState({ subsection: first.subSection });
  };
  obj5.onPageChangeStart = function onPageChangeStart(arg0, arg1) {
    return guardUnsavedChanges(arg1);
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj5);
  const tmp16 = tmp(obj[22])();
  handleSubmit = tmp16.handleSubmit;
  const tmp17 = _objectWithoutProperties(tmp16, guardUnsavedChanges);
  const tmp18 = tmp(obj[23])();
  ({ guild, handleSubmit: handleSubmit2 } = tmp18);
  const tmp4Result3 = require("SegmentedControlState");
  const tmp19 = _objectWithoutProperties(tmp18, id);
  items = [UserProfileSettingsStore, WidgetStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = WidgetStore.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    if (!hasUnsavedChangesResult) {
      showNoticeResult = UserProfileSettingsStore.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: null };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !WidgetStore.canSaveChanges();
    }
    obj2.hasInvalidWidgetChanges = hasUnsavedChangesResult;
    return obj2;
  });
  const hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  let isSubmitting = tmp17.isSubmitting;
  if (!isSubmitting) {
    isSubmitting = tmp19.isSubmitting;
  }
  const items1 = [field, handleSubmit, handleSubmit2];
  const callback = noop.useCallback(() => {
    if (closure_0 === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const tmp22 = tmp(obj[25])({ location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, isSubmitting, shouldBlockExit: tmp17.isWaitingForHexagonCampaignEnrollment, onSave: callback });
  guardUnsavedChanges = tmp22.guardUnsavedChanges;
  const items2 = [field];
  const effect = noop.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, { settings_type: "user", subsection, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE });
  }, items2);
  id = undefined;
  if (guild != null) {
    id = guild.id;
  }
  const items3 = [id];
  const effect1 = noop.useEffect(() => {
    if (null != id) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp);
    }
  }, items3);
  const obj7 = { onSave: tmp22.saveAndClose, saveButtonDisabled: null, isSubmitting: null, showTitleAndBackButton: null, backgroundColor: null };
  let hasInvalidWidgetChanges = !hasUnsavedChanges;
  const obj6 = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, isSubmitting, shouldBlockExit: tmp17.isWaitingForHexagonCampaignEnrollment, onSave: callback };
  const tmp4Result4 = require("initialize");
  if (hasUnsavedChanges) {
    hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  }
  obj7.saveButtonDisabled = hasInvalidWidgetChanges;
  obj7.isSubmitting = isSubmitting;
  obj7.showTitleAndBackButton = isMobileWidgetEditingEnabled;
  obj7.backgroundColor = token;
  tmp(obj[28])(obj7);
  let tmp30Result = null;
  if (hasGuilds) {
    const obj8 = { theme: obj4.useThemeContext().theme, children: null };
    const obj10 = { style: tmp3.profileSelector, children: null };
    let tmp33 = null;
    if (tmp27) {
      tmp33 = guild;
    }
    const obj11 = { children: null };
    const obj12 = { guild: tmp33, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild };
    obj10.children = closure_14(tmp(obj[30]), obj12);
    obj11.children = closure_14(View, obj10);
    obj8.children = closure_14(tmp4(obj[29]).DisableCustomTheme, obj11);
    tmp30Result = closure_14(tmp4(obj[17]).ThemeContextProvider, obj8);
    const tmpResult3 = tmp(obj[30]);
  }
  const obj13 = { style: tmp3.container, ref, onLayout, children: null };
  const obj14 = { style: null, children: null };
  if (isMobileWidgetEditingEnabled) {
    obj14.style = tmp3.page;
    if (tmp27) {
      tmp = tmp(obj[13]);
      obj = { header: tmp30Result, showGuildSelector: false };
      let tmp34Result = closure_14(tmp, obj);
    } else {
      const obj15 = { header: tmp30Result, autoFocusElement: null, initialTab: null };
      let tmp39;
      if (!hasSwitchedProfile) {
        tmp39 = autoFocusElement;
      }
      obj15.autoFocusElement = tmp39;
      let tmp40;
      if (!hasSwitchedProfile) {
        tmp40 = initialTab;
      }
      obj15.initialTab = tmp40;
      tmp34Result = closure_14(tmp(obj[12]), obj15);
      const tmpResult4 = tmp(obj[12]);
    }
    obj14.children = tmp34Result;
    closure_14(View, obj14);
  } else {
    const obj16 = { children: null };
    obj14.style = tmp3.controls;
    const obj17 = { state: segmentedControlState };
    obj14.children = closure_14(tmp4(obj[31]).Tabs, obj17);
    const items4 = [closure_14(View, obj14), ];
    const obj18 = { state: segmentedControlState };
    items4[1] = closure_14(tmp4(obj[32]).SegmentedControlPages, obj18);
    obj16.children = items4;
    obj13.children = closure_16(closure_15, obj16);
    return closure_14(View, obj13);
  }
  const tmpResult = tmp(obj[28]);
});