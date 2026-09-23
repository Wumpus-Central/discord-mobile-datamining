// === Module 15802: UserSettingsText ===

// Module 15802 (UserSettingsText)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2020 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7321 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9549 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4487 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VideoQualitySettings = fn(1184).VideoQualitySettings;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, UserSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { flex: { flex: 1 }, nitroUpsell: { flexDirection: "row", alignItems: "center" }, nitroIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.nitroIcon = size;
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default function UserSettingsText() {
  const token = require("useToken").useToken(videoUploadQuality(dataSavingMode[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_15();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require("UserSettings").RenderReactions;
  const setting3 = RenderReactions.useSetting();
  let obj = require("useToken");
  const items = [UnsyncedUserSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ lowQualityImageMode: UnsyncedUserSettingsStore.dataSavingMode, videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode }));
  ({ lowQualityImageMode: require, videoUploadQuality } = stateFromStoresObject);
  dataSavingMode = stateFromStoresObject.dataSavingMode;
  let obj2 = require("initialize");
  const items1 = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj3 = require("initialize");
  const items2 = [closure_4];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => closure_4.getCurrentUser());
  const obj4 = require("initialize");
  let result = require("PremiumUtils").hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  const obj5 = require("PremiumUtils");
  const items3 = [SelectivelySyncedUserSettingsStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  let ViewImageDescriptions = require("UserSettings").ViewImageDescriptions;
  const setting4 = ViewImageDescriptions.useSetting();
  const obj6 = require("initialize");
  closure_4 = require("useNavigation").useNavigation();
  const obj8 = { style: tmp5.flex, children: null };
  const obj9 = { spacing: videoUploadQuality(dataSavingMode[9]).space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj10 = { children: null };
  const obj11 = { title: null, description: null, hasIcons: false, children: null };
  const intl = require("util").intl;
  obj11.title = intl.string(require("util").t["9nyle0"]);
  const intl2 = require("util").intl;
  obj11.description = intl2.format(require("util").t.qjjvqO, { maxSize: 8 });
  const obj12 = { label: null, value: null, onValueChange: null };
  const intl3 = require("util").intl;
  obj12.label = intl3.string(require("util").t.U47N1p);
  obj12.value = setting1;
  obj12.onValueChange = require("UserSettings").InlineEmbedMedia.updateSetting;
  const items4 = [closure_12(require("TableSwitchRow").TableSwitchRow, obj12), ];
  const obj13 = { label: null, value: null, onValueChange: null };
  const intl4 = require("util").intl;
  obj13.label = intl4.string(require("util").t.VP11No);
  obj13.value = setting;
  obj13.onValueChange = require("UserSettings").InlineAttachmentMedia.updateSetting;
  items4[1] = closure_12(require("TableSwitchRow").TableSwitchRow, obj13);
  obj11.children = items4;
  const items5 = [closure_13(require("TableRowGroup").TableRowGroup, obj11), ];
  const obj14 = { description: null, hasIcons: false, children: null };
  const intl5 = require("util").intl;
  obj14.description = intl5.string(require("util").t.T0rbtM);
  const obj15 = { label: null, value: null, onValueChange: null };
  const intl6 = require("util").intl;
  obj15.label = intl6.string(require("util").t["w8j+yW"]);
  obj15.value = setting4;
  obj15.onValueChange = function updateImageDescriptions(image_descriptions) {
    AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions, low_quality_image_mode, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" });
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    ViewImageDescriptions.updateSetting(image_descriptions);
  };
  obj14.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj15);
  items5[1] = closure_12(require("TableRowGroup").TableRowGroup, obj14);
  obj10.children = items5;
  const items6 = [closure_13(closure_14, obj10), , , , , ];
  const obj16 = { title: null, value: null, onChange: null, description: null, hasIcons: false, children: null };
  const intl7 = require("util").intl;
  const obj7 = require("useNavigation");
  obj16.title = intl7.string(require("util").t.PXq9f1).toUpperCase();
  obj16.value = videoUploadQuality;
  obj16.onChange = function updateVideoUploadQuality(video_upload_quality) {
    AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality, image_descriptions: setting4, low_quality_image_mode, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" });
    const obj2 = { video_upload_quality, image_descriptions: setting4, low_quality_image_mode, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" };
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ videoUploadQuality: video_upload_quality });
  };
  const intl8 = require("util").intl;
  obj16.description = intl8.format(require("util").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  const obj17 = { label: null, value: null };
  const intl9 = require("util").intl;
  obj17.label = intl9.string(require("util").t.cWGW5d);
  obj17.value = VideoQualitySettings.BEST;
  const items7 = [closure_12(require("TableRadioRow").TableRadioRow, obj17), , ];
  const obj18 = { label: null, value: null };
  const intl10 = require("util").intl;
  obj18.label = intl10.string(require("util").t["5hKnyC"]);
  obj18.value = VideoQualitySettings.STANDARD;
  items7[1] = closure_12(require("TableRadioRow").TableRadioRow, obj18);
  const obj19 = { label: null, value: null };
  const intl11 = require("util").intl;
  obj19.label = intl11.string(require("util").t.y5k4ZJ);
  obj19.value = VideoQualitySettings.DATA_SAVER;
  items7[2] = closure_12(require("TableRadioRow").TableRadioRow, obj19);
  obj16.children = items7;
  const items8 = [closure_13(require("TableRadioGroup").TableRadioGroup, obj16), ];
  let tmp18Result = !result;
  if (!result) {
    const obj20 = { style: tmp5.nitroUpsell, children: null };
    const obj21 = { source: videoUploadQuality(tmp2[19]), size: require("native").Icon.Sizes.SMALL, style: tmp5.nitroIcon };
    const items9 = [closure_12(require("native").Icon, obj21), ];
    const obj22 = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 }, children: null };
    const intl12 = require("util").intl;
    const obj23 = {
      onClick() {
          UserSettingsModalActionCreatorsDefault.setSection(constants3.PREMIUM);
          closure_4.push(constants3.PREMIUM, { isFromTextSection: true });
        }
    };
    obj22.children = intl12.format(require("util").t.uW1zul, obj23);
    items9[1] = closure_12(require("Text/Text").Text, obj22);
    obj20.children = items9;
    tmp18Result = closure_13(tmp17, obj20);
  }
  const obj24 = { children: null };
  items8[1] = tmp18Result;
  function handleSync(shouldSync) {
    const result = videoUploadQuality(dataSavingMode[12]).setShouldSyncTextSettings(shouldSync);
  }
  function toggleDataSavingMode(data_saving_mode) {
    AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode, data_saving_mode, updated_setting: "data_saving_mode" });
    const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode, data_saving_mode, updated_setting: "data_saving_mode" };
    const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode: data_saving_mode });
  }
  items6[1] = closure_13(setting4, { children: items8 });
  const obj25 = { title: null, description: null, hasIcons: false, children: null };
  const intl13 = require("util").intl;
  obj25.title = intl13.string(require("util").t.fyG8t2);
  const intl14 = require("util").intl;
  obj25.description = intl14.string(require("util").t["wC0+Ph"]);
  const obj26 = { label: null, value: null, onValueChange: null };
  const intl15 = require("util").intl;
  obj26.label = intl15.string(require("util").t.ix8XIj);
  obj26.value = dataSavingMode;
  obj26.onValueChange = toggleDataSavingMode;
  obj25.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj26);
  items6[2] = closure_12(require("TableRowGroup").TableRowGroup, obj25);
  const obj27 = { title: null, hasIcons: false, children: null };
  const intl16 = require("util").intl;
  obj27.title = intl16.string(require("util").t.PWZOn4);
  const obj28 = { label: null, value: null, onValueChange: null };
  const intl17 = require("util").intl;
  obj28.label = intl17.string(require("util").t["5bK9vw"]);
  obj28.value = setting2;
  obj28.onValueChange = require("UserSettings").RenderEmbeds.updateSetting;
  obj27.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj28);
  items6[3] = closure_12(require("TableRowGroup").TableRowGroup, obj27);
  const obj29 = { title: null, hasIcons: false, children: null };
  const intl18 = require("util").intl;
  obj29.title = intl18.string(require("util").t.sMOuuS);
  const obj30 = { label: null, value: null, onValueChange: null };
  const intl19 = require("util").intl;
  obj30.label = intl19.string(require("util").t["zge/fP"]);
  obj30.value = setting3;
  obj30.onValueChange = require("UserSettings").RenderReactions.updateSetting;
  obj29.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj30);
  items6[4] = closure_12(require("TableRowGroup").TableRowGroup, obj29);
  const obj31 = { title: null, description: null, hasIcons: false, children: null };
  const intl20 = require("util").intl;
  obj31.title = intl20.string(require("util").t.BkuOO6);
  const intl21 = require("util").intl;
  obj31.description = intl21.string(require("util").t.p4IKE9);
  const obj32 = { label: null, value: null, onValueChange: null };
  const intl22 = require("util").intl;
  obj32.label = intl22.string(require("util").t["3340dY"]);
  obj32.value = false !== stateFromStores2;
  obj32.onValueChange = handleSync;
  obj31.children = closure_12(require("TableSwitchRow").TableSwitchRow, obj32);
  items6[5] = closure_12(require("TableRowGroup").TableRowGroup, obj31);
  obj9.children = items6;
  obj24.children = closure_13(require("Stack/Stack").Stack, obj9);
  obj8.children = closure_12(require("Form").Form, obj24);
  return closure_12(setting4, obj8);
};
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  const obj2 = { enabled, location: { section: constants2.SETTINGS_TEXT_AND_IMAGES } };
  AnalyticsUtilsDefault.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj2);
  const IncludeStickersInAutocomplete = UserSettings.IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  ({ videoUploadQuality, viewImageDescriptions, dataSavingMode } = lowQualityImageMode);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "low_quality_image_mode" });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ lowQualityImageMode });
};
export const setDataSavingMode = function setDataSavingMode(dataSavingMode) {
  dataSavingMode = dataSavingMode.dataSavingMode;
  ({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode } = dataSavingMode);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "data_saving_mode" });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode });
};
export const setVideoUploadQuality = function setVideoUploadQuality(videoUploadQuality) {
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  ({ viewImageDescriptions, lowQualityImageMode, dataSavingMode } = videoUploadQuality);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" });
  const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ videoUploadQuality });
};
export const setImageDescriptions = function setImageDescriptions(viewImageDescriptions) {
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  ({ videoUploadQuality, lowQualityImageMode, dataSavingMode } = viewImageDescriptions);
  AnalyticsUtilsDefault.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" });
  const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
};