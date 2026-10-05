// === Module 15285: UserSettingsText ===

// Module 15285 (UserSettingsText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl23 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UnsyncedUserSettingsStore2 from "UnsyncedUserSettingsStore" /* 1195 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 2028 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRadioRow4 from "TableRadioRow" /* 6071 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6072 */;
import TableRowGroup7 from "TableRowGroup" /* 6074 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import TableSwitchRow8 from "TableSwitchRow" /* 6698 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8863 */;
import AssetRegistryDefault from "AssetRegistry" /* 10124 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const UnsyncedUserSettingsStore = UnsyncedUserSettingsStore2;
let _require, closure_4;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let size;
let unpackModuleId;
const View = react_native.View;
const VideoQualitySettings = UnsyncedUserSettingsStore2.VideoQualitySettings;
({ AnalyticEvents: c9, AnalyticsSections: c10, UserSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { flex: { flex: 1 }, nitroUpsell: { flexDirection: "row", alignItems: "center" }, nitroIcon: size };
size = { width: 16, height: 16, tintColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_15 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let dataSavingMode;
  let onChange;
  let onValueChange2;
  let onValueChange3;
  let setting;
  let setting1;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let obj = require("react");
  const cResult = obj.c(74);
  let obj2 = require("useToken");
  const token = obj2.useToken(setting(setting1[9]).modules.mobile.TABLE_ROW_PADDING);
  _require = closure_15();
  closure_15();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require("UserSettings").RenderReactions;
  const setting3 = RenderReactions.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [dataSavingMode];
    const fn = function p() {
      return { lowQualityImageMode: dataSavingMode.dataSavingMode, videoUploadQuality: dataSavingMode.videoUploadQuality, dataSavingMode: dataSavingMode.dataSavingMode };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp10, tmp11);
  const lowQualityImageMode = stateFromStoresObject.lowQualityImageMode;
  const videoUploadQuality = stateFromStoresObject.videoUploadQuality;
  dataSavingMode = stateFromStoresObject.dataSavingMode;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [lowQualityImageMode];
    class D {
      constructor() {
        return lowQualityImageMode.getPremiumTypeSubscription();
      }
    }
    cResult[2] = items1;
    cResult[3] = D;
    tmp15 = D;
    tmp14 = items1;
  } else {
    tmp14 = cResult[2];
    tmp15 = cResult[3];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores = tmpResult5.useStateFromStores(tmp14, tmp15);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [setting3];
    class D {
      constructor() {
        return lowQualityImageMode.getPremiumTypeSubscription();
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp21;
    tmp19 = tmp21;
    tmp18 = items2;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp18, tmp19);
  if (cResult[6] === stateFromStores) {
    let tmp23;
    let tmp27;
    let tmp26;
    if (cResult[7] === stateFromStores1) {
      tmp23 = cResult[8];
    }
    let closure_8 = tmp23;
    const _Symbol = Symbol;
    class D {
      constructor() {
        return lowQualityImageMode.getPremiumTypeSubscription();
      }
    }
    if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [videoUploadQuality];
      class N {
        constructor() {
          return videoUploadQuality.shouldSync("text");
        }
      }
      cResult[9] = items3;
      cResult[10] = N;
      tmp27 = N;
      tmp26 = items3;
    } else {
      tmp26 = cResult[9];
      tmp27 = cResult[10];
    }
    const tmpResult7 = require("get initialized");
    const stateFromStores2 = tmpResult7.useStateFromStores(tmp26, tmp27);
    let ViewImageDescriptions = tmp(tmp2[11]).ViewImageDescriptions;
    const setting4 = ViewImageDescriptions.useSetting();
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(shouldSync) {
          const obj = setting(setting1[12]);
          const result = obj.setShouldSyncTextSettings(shouldSync);
        }
      }
      cResult[11] = L;
      class N {
        constructor() {
          return videoUploadQuality.shouldSync("text");
        }
      }
    } else {
      class L {
        constructor(shouldSync) {
          const obj = setting(setting1[12]);
          const result = obj.setShouldSyncTextSettings(shouldSync);
        }
      }
    }
    const onValueChange = tmp31;
    if (cResult[12] === lowQualityImageMode) {
      class L {
        constructor(shouldSync) {
          const obj = setting(setting1[12]);
          const result = obj.setShouldSyncTextSettings(shouldSync);
        }
      }
    }
    class W {
      constructor(data_saving_mode) {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode: lowQualityImageMode, data_saving_mode, updated_setting: "data_saving_mode" };
        obj.track(stateFromStores2.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
        const obj3 = UserSettingsActionCreatorsDefault;
        const obj4 = { dataSavingMode: data_saving_mode };
        const result = obj3.updatedUnsyncedSettings(obj4);
      }
    }
    cResult[12] = lowQualityImageMode;
    cResult[13] = videoUploadQuality;
    cResult[14] = setting4;
    cResult[15] = W;
  }
  const tmpResult8 = require("PremiumUtils");
  let result = tmpResult8.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = result;
  tmp23 = result;
}) : (() => {
  let Form;
  let TableSwitchRow3;
  let TableSwitchRow4;
  let TableSwitchRow5;
  let TableSwitchRow6;
  let TableSwitchRow7;
  let dataSavingMode;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let low_quality_image_mode;
  let obj15;
  let obj23;
  let obj24;
  let obj26;
  let obj28;
  let obj30;
  let obj32;
  let premiumTypeSubscription;
  let require;
  let str;
  let videoUploadQuality;
  let obj = require("useToken");
  const token = obj.useToken(videoUploadQuality(dataSavingMode[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_15();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require("UserSettings").RenderReactions;
  const setting3 = RenderReactions.useSetting();
  let obj2 = require("get initialized");
  const items = [UnsyncedUserSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ lowQualityImageMode: UnsyncedUserSettingsStore.dataSavingMode, videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode }));
  ({ lowQualityImageMode: require, videoUploadQuality } = stateFromStoresObject);
  dataSavingMode = stateFromStoresObject.dataSavingMode;
  let obj3 = require("get initialized");
  const items1 = [SubscriptionStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj4 = require("get initialized");
  const items2 = [closure_4];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => closure_4.getCurrentUser());
  const obj5 = require("PremiumUtils");
  let result = obj5.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  const items3 = [SelectivelySyncedUserSettingsStore];
  const obj6 = require("get initialized");
  const stateFromStores2 = obj6.useStateFromStores(items3, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  let ViewImageDescriptions = require("UserSettings").ViewImageDescriptions;
  const setting4 = ViewImageDescriptions.useSetting();
  const obj7 = require("useNavigation");
  closure_4 = obj7.useNavigation();
  const obj8 = { style: tmp5.flex, children: closure_12(Form, obj24) };
  Form = require("Form").Form;
  const obj9 = { spacing: videoUploadQuality(dataSavingMode[9]).space.PX_24, style: { paddingHorizontal: token }, children: items6 };
  const Stack = require("Stack/Stack").Stack;
  const obj10 = { children: items5 };
  const obj11 = { title: intl.string(require("intl").t["9nyle0"]), description: intl2.format(require("intl").t.qjjvqO, { maxSize: 8 }), hasIcons: false, children: items4 };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  const obj12 = { label: intl3.string(require("intl").t.U47N1p), value: setting1, onValueChange: require("UserSettings").InlineEmbedMedia.updateSetting };
  const TableSwitchRow = require("TableSwitchRow").TableSwitchRow;
  intl3 = require("intl").intl;
  items4 = [closure_12(TableSwitchRow, obj12), ];
  const obj13 = { label: intl4.string(require("intl").t.VP11No), value: setting, onValueChange: require("UserSettings").InlineAttachmentMedia.updateSetting };
  const TableSwitchRow2 = require("TableSwitchRow").TableSwitchRow;
  intl4 = require("intl").intl;
  items4[1] = closure_12(TableSwitchRow2, obj13);
  items5 = [closure_13(TableRowGroup, obj11), ];
  const obj14 = { description: intl5.string(require("intl").t.T0rbtM), hasIcons: false, children: closure_12(TableSwitchRow3, obj15) };
  const TableRowGroup2 = require("TableRowGroup").TableRowGroup;
  intl5 = require("intl").intl;
  obj15 = {
    label: intl6.string(require("intl").t["w8j+yW"]),
    value: setting4,
    onValueChange: function updateImageDescriptions(image_descriptions) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions, low_quality_image_mode: require, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" };
      obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
      const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
      ViewImageDescriptions.updateSetting(image_descriptions);
    }
  };
  TableSwitchRow3 = require("TableSwitchRow").TableSwitchRow;
  intl6 = require("intl").intl;
  items5[1] = closure_12(TableRowGroup2, obj14);
  items6 = [closure_13(closure_14, obj10), , , , , ];
  const obj16 = {
    title: str.toUpperCase(),
    value: videoUploadQuality,
    onChange: function updateVideoUploadQuality(video_upload_quality) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_upload_quality, image_descriptions: setting4, low_quality_image_mode: require, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" };
      obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
      const obj3 = UserSettingsActionCreatorsDefault;
      const obj4 = { videoUploadQuality: video_upload_quality };
      const result = obj3.updatedUnsyncedSettings(obj4);
    },
    description: intl8.format(require("intl").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" }),
    hasIcons: false,
    children: items7
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const intl7 = require("intl").intl;
  str = intl7.string(require("intl").t.PXq9f1);
  intl8 = require("intl").intl;
  const obj17 = { label: intl9.string(require("intl").t.cWGW5d), value: VideoQualitySettings.BEST };
  const TableRadioRow = require("TableRadioRow").TableRadioRow;
  intl9 = require("intl").intl;
  items7 = [closure_12(TableRadioRow, obj17), , ];
  const obj18 = { label: intl10.string(require("intl").t["5hKnyC"]), value: VideoQualitySettings.STANDARD };
  const TableRadioRow2 = require("TableRadioRow").TableRadioRow;
  intl10 = require("intl").intl;
  items7[1] = closure_12(TableRadioRow2, obj18);
  const obj19 = { label: intl11.string(require("intl").t.y5k4ZJ), value: VideoQualitySettings.DATA_SAVER };
  const TableRadioRow3 = require("TableRadioRow").TableRadioRow;
  intl11 = require("intl").intl;
  items7[2] = closure_12(TableRadioRow3, obj19);
  const items8 = [closure_13(TableRadioGroup, obj16), ];
  let tmp18Result = !result;
  if (tmp18Result) {
    const obj20 = { style: tmp5.nitroUpsell, children: items9 };
    const obj21 = { source: videoUploadQuality(dataSavingMode[24]), size: require("native").Icon.Sizes.SMALL, style: tmp5.nitroIcon };
    const Icon = require("native").Icon;
    items9 = [closure_12(Icon, obj21), ];
    const obj22 = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 }, children: intl12.format(require("intl").t.uW1zul, obj23) };
    const Text = require("Text/Text").Text;
    intl12 = require("intl").intl;
    obj23 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(unpackModuleId.PREMIUM);
          closure_4.push(unpackModuleId.PREMIUM, { isFromTextSection: true });
        }
    };
    items9[1] = closure_12(Text, obj22);
    tmp18Result = closure_13(tmp17, obj20);
  }
  items8[1] = tmp18Result;
  function handleSync(shouldSync) {
    const obj = videoUploadQuality(dataSavingMode[12]);
    const result = obj.setShouldSyncTextSettings(shouldSync);
  }
  function toggleDataSavingMode(data_saving_mode) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode: require, data_saving_mode, updated_setting: "data_saving_mode" };
    obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
    const obj3 = UserSettingsActionCreatorsDefault;
    const obj4 = { dataSavingMode: data_saving_mode };
    const result = obj3.updatedUnsyncedSettings(obj4);
  }
  obj24 = { children: closure_13(Stack, obj9) };
  items6[1] = closure_13(setting4, { children: items8 });
  const obj25 = { title: intl13.string(require("intl").t.fyG8t2), description: intl14.string(require("intl").t["wC0+Ph"]), hasIcons: false, children: closure_12(TableSwitchRow4, obj26) };
  const TableRowGroup3 = require("TableRowGroup").TableRowGroup;
  intl13 = require("intl").intl;
  intl14 = require("intl").intl;
  obj26 = { label: intl15.string(require("intl").t.ix8XIj), value: dataSavingMode, onValueChange: toggleDataSavingMode };
  TableSwitchRow4 = require("TableSwitchRow").TableSwitchRow;
  intl15 = require("intl").intl;
  items6[2] = closure_12(TableRowGroup3, obj25);
  const obj27 = { title: intl16.string(require("intl").t.PWZOn4), hasIcons: false, children: closure_12(TableSwitchRow5, obj28) };
  const TableRowGroup4 = require("TableRowGroup").TableRowGroup;
  intl16 = require("intl").intl;
  obj28 = { label: intl17.string(require("intl").t["5bK9vw"]), value: setting2, onValueChange: require("UserSettings").RenderEmbeds.updateSetting };
  TableSwitchRow5 = require("TableSwitchRow").TableSwitchRow;
  intl17 = require("intl").intl;
  items6[3] = closure_12(TableRowGroup4, obj27);
  const obj29 = { title: intl18.string(require("intl").t.sMOuuS), hasIcons: false, children: closure_12(TableSwitchRow6, obj30) };
  const TableRowGroup5 = require("TableRowGroup").TableRowGroup;
  intl18 = require("intl").intl;
  obj30 = { label: intl19.string(require("intl").t["zge/fP"]), value: setting3, onValueChange: require("UserSettings").RenderReactions.updateSetting };
  TableSwitchRow6 = require("TableSwitchRow").TableSwitchRow;
  intl19 = require("intl").intl;
  items6[4] = closure_12(TableRowGroup5, obj29);
  const obj31 = { title: intl20.string(require("intl").t.BkuOO6), description: intl21.string(require("intl").t.p4IKE9), hasIcons: false, children: closure_12(TableSwitchRow7, obj32) };
  const TableRowGroup6 = require("TableRowGroup").TableRowGroup;
  intl20 = require("intl").intl;
  intl21 = require("intl").intl;
  obj32 = { label: intl22.string(require("intl").t["3340dY"]), value: false !== stateFromStores2, onValueChange: handleSync };
  TableSwitchRow7 = require("TableSwitchRow").TableSwitchRow;
  intl22 = require("intl").intl;
  items6[5] = closure_12(TableRowGroup6, obj31);
  return closure_12(setting4, obj8);
});
function setDataSavingMode(dataSavingMode) {
  let lowQualityImageMode;
  let videoUploadQuality;
  let viewImageDescriptions;
  dataSavingMode = dataSavingMode.dataSavingMode;
  ({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode } = dataSavingMode);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "data_saving_mode" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ dataSavingMode });
}
function setVideoUploadQuality(videoUploadQuality) {
  let dataSavingMode;
  let lowQualityImageMode;
  let viewImageDescriptions;
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  ({ viewImageDescriptions, lowQualityImageMode, dataSavingMode } = videoUploadQuality);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ videoUploadQuality });
}
function setImageDescriptions(viewImageDescriptions) {
  let dataSavingMode;
  let lowQualityImageMode;
  let videoUploadQuality;
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  ({ videoUploadQuality, lowQualityImageMode, dataSavingMode } = viewImageDescriptions);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" });
  const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
}
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default tmp5;
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  let obj3;
  const obj2 = { enabled, location: obj3 };
  obj3 = { section: image_descriptions.SETTINGS_TEXT_AND_IMAGES };
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj2);
  const IncludeStickersInAutocomplete = UserSettings.IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  let dataSavingMode;
  let videoUploadQuality;
  let viewImageDescriptions;
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  ({ videoUploadQuality, viewImageDescriptions, dataSavingMode } = lowQualityImageMode);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "low_quality_image_mode" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ lowQualityImageMode });
};
export { setDataSavingMode };
export { setVideoUploadQuality };
export { setImageDescriptions };