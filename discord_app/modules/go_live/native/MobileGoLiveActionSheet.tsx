// === Module 9409: MobileGoLiveActionSheet ===

// Module 9409 (MobileGoLiveActionSheet)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import _modDef2323 from "module_2323" /* 2323 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import TableRadioRow from "TableRadioRow" /* 6000 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6379 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import getStreamSettingsForPreset from "getStreamSettingsForPreset" /* 9410 */;
import SpeedometerIcon from "SpeedometerIcon" /* 9415 */;
import ImageSparkleIcon from "ImageSparkleIcon" /* 9417 */;
import _modDef9419 from "module_9419" /* 9419 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4882 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;

const getStreamSettingsForPresetDefault = getStreamSettingsForPreset;

require = fn;
let ApplicationStreamPresets = fn(4883).ApplicationStreamPresets;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4861).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4836);
let obj = { wrapper: { gap: nativeDefault.space.PX_24 }, header: { textAlign: "center" }, section: null, highQualityLabel: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj.section = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj.highQualityLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
const MobileGoLiveActionSheet = "MobileGoLiveActionSheet";
let items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
let obj7 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: null };
const PlatformUtils = fn(1365);
obj7.enabled = !PlatformUtils.isIOS();
items[1] = obj7;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj6 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default noop.memo(function MobileGoLiveActionSheet() {
  let items = [analyticsLocations];
  const stateFromStoresObject = user(callback[19]).useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj = user(callback[19]);
  const items1 = [currentUser, first1, value, guild];
  const stateFromStoresObject1 = user(callback[19]).useStateFromStoresObject(items1, () => {
    user = currentUser.getCurrentUser();
    const channel = first.getChannel(first1.getVoiceChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    guildPremiumTier = undefined;
    if (guild != null) {
      guildPremiumTier = guild.premiumTier;
    }
    return { user, guildPremiumTier };
  });
  user = stateFromStoresObject1.user;
  let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => getStreamSettingsForPreset.canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  let obj2 = user(callback[19]);
  const items3 = [currentUserActiveStream];
  const stateFromStoresObject2 = user(callback[19]).useStateFromStoresObject(items3, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === constants.ACTIVE;
    }
    const obj2 = { isStreaming: tmp2, activeSourceId: null };
    const streamerActiveStreamMetadata = currentUserActiveStream.getStreamerActiveStreamMetadata();
    let sourceId;
    if (streamerActiveStreamMetadata != null) {
      sourceId = streamerActiveStreamMetadata.sourceId;
    }
    if (sourceId == null) {
      sourceId = null;
    }
    obj2.activeSourceId = sourceId;
    return obj2;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj4 = user(callback[19]);
  const goLiveUpsellVariant = guildPremiumTier(callback[21]).useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  let obj5 = guildPremiumTier(callback[21]);
  analyticsLocations = guildPremiumTier(callback[22])(guildPremiumTier(callback[23]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  const tmp9 = closure_16();
  currentUserActiveStream = tmp9;
  let tmp11 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp11) {
    const tmp14 = isStreaming(activeSourceId.useState(preset), 2);
    value = tmp14[0];
    guild = tmp14[1];
    const tmp16 = isStreaming(obj3.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    currentUser = tmp16[1];
    const sharedValue = tmp(tmp2[24]).useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = obj3.useCallback((preset, soundshareEnabled) => {
      let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
      if (items == null) {
        items = [];
      }
      [tmp4, tmp5] = items;
      if (null != tmp4) {
        if (null != tmp5) {
          const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
          StreamActionCreators.updateStreamSettings(obj2);
          if (isStreaming) {
            const obj = { qualityOptions: null, context: null };
            const obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
            obj.qualityOptions = obj3;
            obj.context = MediaEngineContextTypes.STREAM;
            if (null != activeSourceId) {
              const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
              obj.desktopSettings = obj4;
            }
            AudioActionCreatorsDefault.setGoLiveSource(obj);
            const tmpResult = AudioActionCreatorsDefault;
          }
        }
      }
      const tmp3 = _slicedToArray(items, 2);
    }, items4);
    let obj6 = { value: analyticsLocations, children: null };
    let obj7 = { bottom: true, style: tmp9.wrapper, children: null };
    let obj8 = { style: tmp9.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: null };
    let intl = tmp(tmp2[28]).intl;
    obj8.children = intl.string(tmp7(tmp2[29]).CrNjqp);
    const items5 = [closure_14(tmp(tmp2[33]).Text, obj8), , , , , ];
    let obj9 = { style: tmp9.section, children: null };
    let tmpResult = tmp(tmp2[24]);
    let obj10 = { title: null, hasIcons: false, children: null };
    let intl2 = tmp(tmp2[28]).intl;
    obj10.title = intl2.string(tmp7(tmp2[29])["/XSr8v"]);
    const obj11 = {
      value,
      onChange(arg0) {
          if (callback(arg0)) {
            guild(arg0);
            closure_11(arg0, first1);
            if (isStreaming) {
              ActionSheetActionCreatorsDefault.hideActionSheet(MobileGoLiveActionSheet);
            }
          } else {
            const obj2 = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
          }
        },
      hasIcons: true,
      children: closure_18.map((value) => {
          const maxSettingsForPreset = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
          const maxSettingsForPreset1 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE);
          const maxSettingsForPreset2 = getStreamSettingsForPreset.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY);
          const obj5 = { icon: closure_2_14(MobilePhoneIcon.MobilePhoneIcon, {}), label: null, subLabel: null };
          const intl = util.intl;
          obj5.label = intl.string(_modDef2323["2qmQ8N"]);
          let str = "";
          let str2 = "";
          if (null != maxSettingsForPreset) {
            const intl2 = util.intl;
            str2 = intl2.formatToPlainString(_modDef2323.ibH7vy, maxSettingsForPreset);
          }
          const obj6 = { [closure_2_11.PRESET_MOBILE_DEFAULT]: obj5 };
          obj5.subLabel = str2;
          const obj7 = { icon: closure_2_14(SpeedometerIcon.SpeedometerIcon, {}), label: null, subLabel: null };
          const intl3 = util.intl;
          obj7.label = intl3.string(_modDef2323["5eO4/m"]);
          let formatToPlainStringResult = str;
          if (null != maxSettingsForPreset1) {
            const intl4 = util.intl;
            formatToPlainStringResult = intl4.formatToPlainString(_modDef2323.fN0UQY, maxSettingsForPreset1);
          }
          obj7.subLabel = formatToPlainStringResult;
          obj6[ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE] = obj7;
          const obj8 = { icon: closure_2_14(ImageSparkleIcon.ImageSparkleIcon, {}), label: null, subLabel: null };
          const obj9 = { style: currentUserActiveStream.highQualityLabel, children: null };
          const obj4 = { value };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl5 = util.intl;
          obj10.children = intl5.string(_modDef2323.nMcXo1);
          const items = [closure_2_14(Text_Text.Text, obj10), ];
          const tmp8Result = NativeViewDefault;
          items[1] = closure_2_14(BaseIconImage.BaseIconImage, { source: _modDef9419, size: "xs" });
          obj9.children = items;
          obj8.label = __initData(tmp8Result, obj9);
          if (null != maxSettingsForPreset2) {
            const intl6 = util.intl;
            str = intl6.formatToPlainString(_modDef2323.q4gYBi, maxSettingsForPreset2);
          }
          obj8.subLabel = str;
          obj6[ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY] = obj8;
          const merged = Object.assign(obj6[value]);
          const merged1 = Object.assign(obj4);
          return closure_2_14(TableRadioRow.TableRadioRow, {}, value);
        })
    };
    obj10.children = closure_14(tmp(tmp2[40]).TableRadioGroup, obj11);
    obj9.children = closure_14(tmp(tmp2[39]).TableRowGroup, obj10);
    items5[1] = closure_14(tmp7(tmp2[32]), obj9);
    let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      const obj12 = { style: tmp9.section, children: null };
      const obj13 = { featureName: null, shouldShow: null };
      const tmp7Result7 = tmp7(tmp2[32]);
      obj13.featureName = tmp(tmp2[45]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
      obj13.shouldShow = sharedValue;
      obj12.children = closure_14(tmp7(tmp2[44]), obj13);
      tmp18Result = closure_14(tmp7Result7, obj12);
      const tmp7Result8 = tmp7(tmp2[44]);
    }
    items5[2] = tmp18Result;
    let tmp18Result2 = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result2) {
      const obj14 = { style: tmp9.section, children: null };
      const obj15 = { text: null, onPress: null };
      const tmp7Result9 = tmp7(tmp2[32]);
      let intl3 = tmp(tmp2[28]).intl;
      obj15.text = intl3.string(tmp7(tmp2[29]).u72Prd);
      obj15.onPress = function onPress() {
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert({ initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations });
      };
      obj14.children = closure_14(tmp7(tmp2[46]), obj15);
      tmp18Result2 = closure_14(tmp7Result9, obj14);
      const tmp7Result10 = tmp7(tmp2[46]);
    }
    items5[3] = tmp18Result2;
    const obj16 = { style: tmp9.section, children: null };
    const tmp7Result = tmp7(tmp2[32]);
    const obj17 = { title: null, hasIcons: false, children: null };
    let intl4 = tmp(tmp2[28]).intl;
    obj17.title = intl4.string(tmp7(tmp2[29])["j+eAMQ"]);
    const obj18 = { label: null, value: null, onValueChange: null };
    let intl5 = tmp(tmp2[28]).intl;
    obj18.label = intl5.string(tmp7(tmp2[29]).uwMBDo);
    obj18.value = first1;
    obj18.onValueChange = function onValueChange(arg0) {
      currentUser(arg0);
      closure_11(first, arg0);
    };
    obj17.children = closure_14(tmp(tmp2[47]).TableSwitchRow, obj18);
    obj16.children = closure_14(tmp(tmp2[39]).TableRowGroup, obj17);
    items5[4] = closure_14(tmp7(tmp2[32]), obj16);
    const obj19 = { style: tmp9.section, children: null };
    const tmp7Result11 = tmp7(tmp2[32]);
    if (isStreaming) {
      const obj20 = { size: "lg", variant: "destructive", text: null, onPress: null };
      const intl7 = tmp(tmp2[28]).intl;
      obj20.text = intl7.string(tmp7(tmp2[29]).OsS9Ll);
      obj20.onPress = function onPress() {
        user(callback[49]).stopScreenshare();
        const obj = user(callback[49]);
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
      };
      let obj21 = obj20;
    } else {
      obj21 = { size: "lg", variant: "primary", text: null, onPress: null };
      let intl6 = tmp(tmp2[28]).intl;
      obj21.text = intl6.string(tmp7(tmp2[29])["3wwZ/Q"]);
      obj21.onPress = function onPress() {
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
        const obj = guildPremiumTier(callback[15]);
        user(callback[49]).startStream();
      };
    }
    const obj22 = { startExpanded: true, children: null };
    const obj23 = { children: null };
    obj19.children = closure_14(tmp(tmp2[48]).Button, obj21);
    items5[5] = closure_14(tmp7(tmp2[32]), obj19);
    obj7.children = items5;
    obj23.children = closure_15(tmp(tmp2[38]).SafeAreaPaddingView, obj7);
    obj22.children = closure_14(tmp(tmp2[37]).BottomSheetScrollView, obj23);
    obj6.children = closure_14(tmp(tmp2[36]).BottomSheet, obj22);
    return closure_14(tmp(tmp2[22]).AnalyticsLocationProvider, obj6);
  }
  preset = tmp10.PRESET_MOBILE_DEFAULT;
  const tmp8 = guildPremiumTier(callback[22]);
});
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(location_stack) {
  const obj2 = { impressionName: null, impressionProperties: null };
  const obj = ActionSheetActionCreatorsDefault;
  obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET;
  obj2.impressionProperties = { location_stack };
  obj.openLazy(asyncRequireImpl(9409, dependencyMap.paths), MobileGoLiveActionSheet, obj2);
};