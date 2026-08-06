// discord_app/modules/go_live/native/MobileGoLiveActionSheet.tsx
import set from "set";
import importAllResult from "initialize";
import ApplicationStreamPresets from "ApplicationStreamPresets";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ApplicationStreamPresets } from "RESOLUTION_720";
import { ApplicationStreamStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "apexExperiment";
import createCacheKey from "createCacheKey";
import PlatformTypes from "PlatformTypes";
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { encodeProperties } from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let closure_14;
let closure_15;
const require = arg1;
let c4 = importAllResult;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { wrapper: null, header: null, section: null, highQualityLabel: null };
obj = { gap: require("Themes").space.PX_24 };
obj[0] = obj;
obj[1] = { textAlign: "center" };
createCacheKey = { marginHorizontal: require("Themes").space.PX_16 };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let closure_16 = createCacheKey.createStyles(obj);
const MobileGoLiveActionSheet = "MobileGoLiveActionSheet";
let items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
let obj4 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: null };
obj4[1] = !PlatformTypes.isIOS();
items[1] = obj4;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj3 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
const memoResult = importAllResult.memo(function MobileGoLiveActionSheet() {
  let preset;
  let soundshareEnabled;
  let obj = user(callback[19]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj1 = user(callback[19]);
  const items1 = [mergeGuildAvatar, first1, first, createGuildRecordFromRust];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    const user = currentUser.getCurrentUser();
    const channel = first.getChannel(first1.getVoiceChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    let guildPremiumTier;
    if (guild != null) {
      guildPremiumTier = guild.premiumTier;
    }
    return { user, guildPremiumTier };
  });
  user = stateFromStoresObject1.user;
  let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  let obj2 = activeSourceId;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => user(callback[20]).canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  let obj3 = user(callback[19]);
  const items3 = [reset];
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items3, () => {
    let obj = tmp9;
    const currentUserActiveStream = tmp9.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === constants.ACTIVE;
    }
    obj = { isStreaming: tmp2, activeSourceId: null };
    const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
    let sourceId;
    if (streamerActiveStreamMetadata != null) {
      sourceId = streamerActiveStreamMetadata.sourceId;
    }
    if (sourceId == null) {
      sourceId = null;
    }
    obj[1] = sourceId;
    return obj;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj4 = guildPremiumTier(callback[21]);
  const goLiveUpsellVariant = obj4.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  analyticsLocations = guildPremiumTier(callback[22])(guildPremiumTier(callback[23]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  const tmp9 = callback2();
  reset = tmp9;
  let tmp11 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp11) {
    const tmp14 = isStreaming(activeSourceId.useState(preset), 2);
    first = tmp14[0];
    createGuildRecordFromRust = tmp14[1];
    const tmp16 = isStreaming(obj2.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    mergeGuildAvatar = tmp16[1];
    const sharedValue = tmp(tmp2[24]).useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = obj2.useCallback((arg0, arg1) => {
      let tmp4;
      let tmp5;
      let items = guildPremiumTier(callback[20])(arg0, user, guildPremiumTier);
      if (items == null) {
        items = [];
      }
      [tmp4, tmp5] = isStreaming(items, 2);
      if (null != tmp4) {
        if (null != tmp5) {
          let obj = { preset: null, resolution: null, frameRate: null, soundshareEnabled: null };
          obj[0] = arg0;
          obj[1] = tmp4;
          obj[2] = tmp5;
          obj[3] = arg1;
          user(tmp2[25]).updateStreamSettings(obj);
          if (isStreaming) {
            obj = { qualityOptions: null, context: null };
            obj = { preset: null, resolution: null, frameRate: null };
            obj[0] = arg0;
            obj[1] = tmp4;
            obj[2] = tmp5;
            obj[0] = obj;
            obj[1] = outer1_13.STREAM;
            if (null != activeSourceId) {
              const obj1 = { sourceId: null, sound: null };
              obj1[0] = tmp7;
              obj1[1] = arg1;
              obj.desktopSettings = obj1;
            }
            guildPremiumTier(tmp2[26]).setGoLiveSource(obj);
            const tmpResult = guildPremiumTier(tmp2[26]);
          }
          const obj5 = user(tmp2[25]);
        }
      }
    }, items4);
    obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp9.wrapper;
    obj1 = { style: null, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: null };
    obj1[0] = tmp9.header;
    let intl = tmp(tmp2[28]).intl;
    obj1[4] = intl.string(tmp7(tmp2[29]).CrNjqp);
    const items5 = [callback(tmp(tmp2[33]).Text, obj1), , , , , ];
    obj2 = { style: null, children: null };
    obj2[0] = tmp9.section;
    let tmp7Result = tmp7(tmp2[32]);
    obj3 = { title: null, hasIcons: false, children: null };
    let intl2 = tmp(tmp2[28]).intl;
    obj3[0] = intl2.string(tmp7(tmp2[29])["/XSr8v"]);
    obj4 = { value: null, onChange: null, hasIcons: true, children: null };
    obj4[0] = first;
    obj4[1] = function onChange(arg0) {
      if (callback(arg0)) {
        guild(arg0);
        lib(arg0, first1);
        if (isStreaming) {
          guildPremiumTier(callback[15]).hideActionSheet(outer1_17);
          const obj3 = guildPremiumTier(callback[15]);
        }
      } else {
        let obj = guildPremiumTier(callback[41]);
        obj = { initialUpsellKey: null, analyticsLocations: null };
        obj[0] = user(callback[42]).UpsellTypes.STREAM_HIGH_QUALITY;
        obj[1] = analyticsLocations;
        const result = obj.handleShowUpsellAlert(obj);
      }
    };
    obj4[3] = closure_18.map((value) => {
      let obj = user(callback[20]);
      const maxSettingsForPreset = obj.getMaxSettingsForPreset(lib.PRESET_MOBILE_DEFAULT);
      let obj1 = user(callback[20]);
      const maxSettingsForPreset1 = obj1.getMaxSettingsForPreset(lib.PRESET_MOBILE_PERFORMANCE);
      let obj2 = user(callback[20]);
      const maxSettingsForPreset2 = obj2.getMaxSettingsForPreset(lib.PRESET_MOBILE_HIGH_QUALITY);
      obj = { value };
      obj = { icon: outer1_14(user(callback[27]).MobilePhoneIcon, {}), label: null, subLabel: null };
      const intl = user(callback[28]).intl;
      obj[1] = intl.string(guildPremiumTier(callback[29])["2qmQ8N"]);
      let str = "";
      let str2 = "";
      if (null != maxSettingsForPreset) {
        const intl2 = tmp2(tmp3[28]).intl;
        str2 = intl2.formatToPlainString(tmp8(tmp3[29]).ibH7vy, maxSettingsForPreset);
      }
      obj1 = { [outer1_11.PRESET_MOBILE_DEFAULT]: obj };
      obj[2] = str2;
      obj2 = { icon: tmp(tmp2(tmp3[30]).SpeedometerIcon, {}), label: null, subLabel: null };
      const intl3 = tmp2(tmp3[28]).intl;
      obj2[1] = intl3.string(guildPremiumTier(callback[29])["5eO4/m"]);
      let formatToPlainStringResult = str;
      if (null != maxSettingsForPreset1) {
        const intl4 = tmp2(tmp3[28]).intl;
        formatToPlainStringResult = intl4.formatToPlainString(tmp8(tmp3[29]).fN0UQY, maxSettingsForPreset1);
      }
      obj2[2] = formatToPlainStringResult;
      obj1[lib.PRESET_MOBILE_PERFORMANCE] = obj2;
      const obj3 = { icon: outer1_14(user(callback[31]).ImageSparkleIcon, {}), label: null, subLabel: null };
      const obj4 = { style: tmp9.highQualityLabel, children: null };
      const obj5 = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl5 = tmp2(tmp3[28]).intl;
      obj5[2] = intl5.string(guildPremiumTier(callback[29]).nMcXo1);
      const items = [outer1_14(user(callback[33]).Text, obj5), ];
      const obj6 = { source: null, size: "xs" };
      obj6[0] = guildPremiumTier(callback[35]);
      items[1] = outer1_14(user(callback[34]).BaseIconImage, obj6);
      obj4[1] = items;
      obj3[1] = outer1_15(guildPremiumTier(callback[32]), obj4);
      if (null != maxSettingsForPreset2) {
        const intl6 = tmp2(tmp3[28]).intl;
        str = intl6.formatToPlainString(tmp8(tmp3[29]).q4gYBi, maxSettingsForPreset2);
      }
      obj3[2] = str;
      obj1[lib.PRESET_MOBILE_HIGH_QUALITY] = obj3;
      const merged = Object.assign(obj1[value]);
      const merged1 = Object.assign(obj);
      return outer1_14(user(callback[43]).TableRadioRow, {}, value);
    });
    obj3[2] = callback(tmp(tmp2[40]).TableRadioGroup, obj4);
    obj2[1] = callback(tmp(tmp2[39]).TableRowGroup, obj3);
    items5[1] = callback(tmp7Result, obj2);
    let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      let obj5 = { style: null, children: null };
      obj5[0] = tmp9.section;
      tmp7Result = tmp7(tmp2[32]);
      let obj6 = { featureName: null, shouldShow: null };
      obj6[0] = tmp(tmp2[45]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
      obj6[1] = sharedValue;
      obj5[1] = tmp18(tmp7(tmp2[44]), obj6);
      tmp18Result = tmp18(tmp7Result, obj5);
      const tmp7Result1 = tmp7(tmp2[44]);
    }
    items5[2] = tmp18Result;
    tmp18Result = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp9.section;
      const obj8 = { text: null, onPress: null };
      const tmp7Result2 = tmp7(tmp2[32]);
      let intl3 = tmp(tmp2[28]).intl;
      obj8[0] = intl3.string(tmp7(tmp2[29]).u72Prd);
      obj8[1] = function onPress() {
        let obj = guildPremiumTier(callback[41]);
        obj = { initialUpsellKey: user(callback[42]).UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
        const result = obj.handleShowUpsellAlert(obj);
      };
      obj7[1] = tmp18(tmp7(tmp2[46]), obj8);
      tmp18Result = tmp18(tmp7Result2, obj7);
      const tmp7Result3 = tmp7(tmp2[46]);
    }
    items5[3] = tmp18Result;
    const obj9 = { style: null, children: null };
    obj9[0] = tmp9.section;
    const tmp19 = closure_15;
    let tmpResult = tmp(tmp2[24]);
    const obj10 = { title: null, hasIcons: false, children: null };
    let intl4 = tmp(tmp2[28]).intl;
    obj10[0] = intl4.string(tmp7(tmp2[29])["j+eAMQ"]);
    const obj11 = { label: null, value: null, onValueChange: null };
    let intl5 = tmp(tmp2[28]).intl;
    obj11[0] = intl5.string(tmp7(tmp2[29]).uwMBDo);
    obj11[1] = first1;
    obj11[2] = function onValueChange(arg0) {
      currentUser(arg0);
      lib(first, arg0);
    };
    obj10[2] = callback(tmp(tmp2[47]).TableSwitchRow, obj11);
    obj9[1] = callback(tmp(tmp2[39]).TableRowGroup, obj10);
    items5[4] = callback(tmp7(tmp2[32]), obj9);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp9.section;
    const tmp7Result4 = tmp7(tmp2[32]);
    if (isStreaming) {
      const obj13 = { size: "lg", variant: "destructive", text: null, onPress: null };
      const intl7 = tmp(tmp2[28]).intl;
      obj13[2] = intl7.string(tmp7(tmp2[29]).OsS9Ll);
      obj13[3] = function onPress() {
        user(callback[49]).stopScreenshare();
        const obj = user(callback[49]);
        guildPremiumTier(callback[15]).hideActionSheet(closure_17);
      };
      let obj14 = obj13;
    } else {
      obj14 = { size: "lg", variant: "primary", text: null, onPress: null };
      let intl6 = tmp(tmp2[28]).intl;
      obj14[2] = intl6.string(tmp7(tmp2[29])["3wwZ/Q"]);
      obj14[3] = function onPress() {
        guildPremiumTier(callback[15]).hideActionSheet(closure_17);
        const obj = guildPremiumTier(callback[15]);
        user(callback[49]).startStream();
      };
    }
    const obj15 = { startExpanded: true, children: null };
    const obj16 = { children: null };
    obj12[1] = callback(tmp(tmp2[48]).Button, obj14);
    items5[5] = callback(tmp7(tmp2[32]), obj12);
    obj[2] = items5;
    obj16[0] = tmp19(tmp(tmp2[38]).SafeAreaPaddingView, obj);
    obj15[1] = callback(tmp(tmp2[37]).BottomSheetScrollView, obj16);
    obj[1] = callback(tmp(tmp2[36]).BottomSheet, obj15);
    return callback(tmp(tmp2[22]).AnalyticsLocationProvider, obj);
  }
  preset = tmp10.PRESET_MOBILE_DEFAULT;
});
let result = require("ApplicationStreamPresets").fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default memoResult;
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(closure_1) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { impressionName: null, impressionProperties: null };
  obj[0] = encodeProperties.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET;
  obj = { location_stack: closure_1 };
  obj[1] = obj;
  obj.openLazy(asyncRequireImpl(10747, dependencyMap.paths), MobileGoLiveActionSheet, obj);
};