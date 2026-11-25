// === Module 15979: ProfileCustomizationSettingScreenV2 ===

// Module 15979 (ProfileCustomizationSettingScreenV2)
import nativeDefault from "native" /* 575 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5982 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9397 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6345 */;
import WidgetStore from "WidgetStore" /* 14513 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = fn(17).View;
const constants = fn(1081).ProfileCustomizationSubsection;
const Constants = fn(1071);
({ AnalyticEvents: closure_12, AnalyticsSections: map1 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5012);
let obj2 = { container: { flex: 1 }, profileSelector: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenV2.tsx");

export default function ProfileCustomizationSettingScreenV2() {
  const tmp = closure_15();
  const token = field(handleSubmit[11]).useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  field = ProfileCustomizationNavigationStore.useField("subsection");
  importDefault = tmp7;
  let obj = field(handleSubmit[11]);
  let tmp2 = field;
  ({ hasGuilds, handleSelectMainProfile, handleSelectGuild } = require("useProfileSelection")());
  const tmp9 = require("useUserProfileEditForm")();
  handleSubmit = tmp9.handleSubmit;
  const tmp10 = _objectWithoutProperties(tmp9, handleSubmit2);
  const tmp11 = require("useGuildProfileEditForm")();
  ({ guild, handleSubmit: handleSubmit2 } = tmp11);
  const tmp12 = tmp10.isSubmitting || _objectWithoutProperties(tmp11, id).isSubmitting;
  const tmp8 = require("useProfileSelection")();
  items = [UserProfileSettingsStore, WidgetStore];
  const stateFromStoresObject = tmp2(handleSubmit[15]).useStateFromStoresObject(items, () => {
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
  const items1 = [field === constants.GUILD, handleSubmit, handleSubmit2];
  const items2 = [field];
  const callback = noop.useCallback(() => {
    if (closure_1) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const effect = noop.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, { settings_type: "user", subsection: field, destination_pane: constants3.SETTINGS_CUSTOMIZE_PROFILE });
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
  let obj2 = { location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp12, shouldBlockExit: tmp10.isWaitingForHexagonCampaignEnrollment };
  const tmp2Result = tmp2(handleSubmit[15]);
  ({ saveAndClose, guardUnsavedChanges } = require("useProfileEditorExitHandling")({ location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp12, shouldBlockExit: tmp10.isWaitingForHexagonCampaignEnrollment }));
  const obj4 = { onSave: saveAndClose, saveButtonDisabled: null, isSubmitting: null, showTitleAndBackButton: true, backgroundColor: null };
  let hasInvalidWidgetChanges = !hasUnsavedChanges;
  const tmp18 = require("useProfileEditorExitHandling")({ location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp12, shouldBlockExit: tmp10.isWaitingForHexagonCampaignEnrollment });
  if (hasUnsavedChanges) {
    hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  }
  obj4.saveButtonDisabled = hasInvalidWidgetChanges;
  obj4.isSubmitting = tmp12;
  obj4.backgroundColor = token;
  require("useConfigureProfileEditorScreen")(obj4);
  const obj5 = { style: tmp.container, children: null };
  let tmp21Result = null;
  if (hasGuilds) {
    const obj6 = { style: tmp.profileSelector, children: null };
    let tmp25 = null;
    if (tmp7) {
      tmp25 = guild;
    }
    const obj7 = { guild: tmp25, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild };
    obj6.children = jsx(tmp4(tmp3[20]), { guild: tmp25, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild });
    tmp21Result = <View style={tmp.profileSelector}>{null}</View>;
    const tmp4Result2 = tmp4(tmp3[20]);
  }
  obj5.children = tmp21Result;
  return <View style={tmp.container}>{null}</View>;
};