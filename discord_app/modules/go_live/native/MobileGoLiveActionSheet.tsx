// === Module 9952: MobileGoLiveActionSheet ===

// Module 9952 (MobileGoLiveActionSheet)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2234 from "module_2234" /* 2234 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6960 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9313 */;
import getStreamSettingsForPreset from "getStreamSettingsForPreset" /* 9953 */;
import SpeedometerIcon from "SpeedometerIcon" /* 9959 */;
import ImageSparkleIcon from "ImageSparkleIcon" /* 9961 */;
import _modDef9963 from "module_9963" /* 9963 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4606 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;

const getStreamSettingsForPresetDefault = getStreamSettingsForPreset;

require = fn;
let ApplicationStreamPresets = fn(4607).ApplicationStreamPresets;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = { wrapper: null, header: null, section: null, highQualityLabel: null };
obj = { gap: nativeDefault.space.PX_24 };
obj.wrapper = obj;
obj.header = { textAlign: "center" };
const createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
obj.section = createStyles;
obj.highQualityLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
const MobileGoLiveActionSheet = "MobileGoLiveActionSheet";
let items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
let obj4 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: null };
const PlatformUtils = fn(1116);
obj4.enabled = !PlatformUtils.isIOS();
items[1] = obj4;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj3 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default noop.memo(function MobileGoLiveActionSheet() {
  let obj = user(callback[19]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj1 = user(callback[19]);
  const items1 = [currentUser, first1, value, guild];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
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
  let obj2 = activeSourceId;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => getStreamSettingsForPreset.canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  let obj3 = user(callback[19]);
  const items3 = [currentUserActiveStream];
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items3, () => {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
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
    obj.activeSourceId = sourceId;
    return obj;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj4 = guildPremiumTier(callback[21]);
  const goLiveUpsellVariant = obj4.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
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
    const tmp16 = isStreaming(obj2.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    currentUser = tmp16[1];
    const sharedValue = tmp(tmp2[24]).useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = obj2.useCallback((preset, soundshareEnabled) => {
      let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
      if (items == null) {
        items = [];
      }
      [tmp4, tmp5] = _slicedToArray(items, 2);
      if (null != tmp4) {
        if (null != tmp5) {
          let obj = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
          StreamActionCreators.updateStreamSettings(obj);
          if (isStreaming) {
            obj = { qualityOptions: null, context: null };
            obj = { preset, resolution: tmp4, frameRate: tmp5 };
            obj.qualityOptions = obj;
            obj.context = MediaEngineContextTypes.STREAM;
            if (null != activeSourceId) {
              const obj1 = { sourceId: tmp7, sound: soundshareEnabled };
              obj.desktopSettings = obj1;
            }
            AudioActionCreatorsDefault.setGoLiveSource(obj);
            const tmpResult = AudioActionCreatorsDefault;
          }
        }
      }
      const tmp3 = _slicedToArray(items, 2);
    }, items4);
    obj = { value: analyticsLocations, children: null };
    obj = { bottom: true, style: tmp9.wrapper, children: null };
    obj1 = { style: tmp9.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: null };
    let intl = tmp(tmp2[28]).intl;
    obj1.children = intl.string(tmp7(tmp2[29]).CrNjqp);
    const items5 = [closure_14(tmp(tmp2[33]).Text, obj1), , , , , ];
    obj2 = { style: tmp9.section, children: null };
    let tmp7Result = tmp7(tmp2[32]);
    obj3 = { title: null, hasIcons: false, children: null };
    let intl2 = tmp(tmp2[28]).intl;
    obj3.title = intl2.string(tmp7(tmp2[29])["/XSr8v"]);
    obj4 = {
      value,
      onChange(arg0) {
          if (callback(arg0)) {
            guild(arg0);
            closure_11(arg0, first1);
            if (isStreaming) {
              ActionSheetActionCreatorsDefault.hideActionSheet(MobileGoLiveActionSheet);
            }
          } else {
            const obj = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const result = obj.handleShowUpsellAlert(obj);
          }
        },
      hasIcons: true,
      children: closure_18.map((value) => {
          let obj = getStreamSettingsForPreset;
          const maxSettingsForPreset = obj.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
          let obj1 = getStreamSettingsForPreset;
          const maxSettingsForPreset1 = obj1.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE);
          let obj2 = getStreamSettingsForPreset;
          const maxSettingsForPreset2 = obj2.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY);
          obj = { value };
          obj = { icon: closure_2_14(MobilePhoneIcon.MobilePhoneIcon, {}), label: null, subLabel: null };
          const intl = util.intl;
          obj.label = intl.string(_modDef2234["2qmQ8N"]);
          let str = "";
          let str2 = "";
          if (null != maxSettingsForPreset) {
            const intl2 = util.intl;
            str2 = intl2.formatToPlainString(_modDef2234.ibH7vy, maxSettingsForPreset);
          }
          obj1 = { [closure_2_11.PRESET_MOBILE_DEFAULT]: obj };
          obj.subLabel = str2;
          obj2 = { icon: closure_2_14(SpeedometerIcon.SpeedometerIcon, {}), label: null, subLabel: null };
          const intl3 = util.intl;
          obj2.label = intl3.string(_modDef2234["5eO4/m"]);
          let formatToPlainStringResult = str;
          if (null != maxSettingsForPreset1) {
            const intl4 = util.intl;
            formatToPlainStringResult = intl4.formatToPlainString(_modDef2234.fN0UQY, maxSettingsForPreset1);
          }
          obj2.subLabel = formatToPlainStringResult;
          obj1[ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE] = obj2;
          const obj3 = { icon: closure_2_14(ImageSparkleIcon.ImageSparkleIcon, {}), label: null, subLabel: null };
          const obj4 = { style: currentUserActiveStream.highQualityLabel, children: null };
          const obj5 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl5 = util.intl;
          obj5.children = intl5.string(_modDef2234.nMcXo1);
          const items = [closure_2_14(Text_Text.Text, obj5), ];
          const tmp8Result = NativeViewDefault;
          items[1] = closure_2_14(BaseIconImage.BaseIconImage, { source: _modDef9963, size: "xs" });
          obj4.children = items;
          obj3.label = __initData(tmp8Result, obj4);
          if (null != maxSettingsForPreset2) {
            const intl6 = util.intl;
            str = intl6.formatToPlainString(_modDef2234.q4gYBi, maxSettingsForPreset2);
          }
          obj3.subLabel = str;
          obj1[ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY] = obj3;
          const merged = Object.assign(obj1[value]);
          const merged1 = Object.assign(obj);
          return closure_2_14(TableRadioRow.TableRadioRow, {}, value);
        })
    };
    obj3.children = closure_14(tmp(tmp2[40]).TableRadioGroup, obj4);
    obj2.children = closure_14(tmp(tmp2[39]).TableRowGroup, obj3);
    items5[1] = closure_14(tmp7Result, obj2);
    let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      let obj5 = { style: tmp9.section, children: null };
      tmp7Result = tmp7(tmp2[32]);
      const obj6 = { featureName: tmp(tmp2[45]).EntitlementFeatureNames.STREAM_HIGH_QUALITY, shouldShow: sharedValue };
      obj5.children = closure_14(tmp7(tmp2[44]), obj6);
      tmp18Result = closure_14(tmp7Result, obj5);
      const tmp7Result1 = tmp7(tmp2[44]);
    }
    items5[2] = tmp18Result;
    tmp18Result = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result) {
      const obj7 = { style: tmp9.section, children: null };
      const obj8 = { text: null, onPress: null };
      const tmp7Result2 = tmp7(tmp2[32]);
      let intl3 = tmp(tmp2[28]).intl;
      obj8.text = intl3.string(tmp7(tmp2[29]).u72Prd);
      obj8.onPress = function onPress() {
        const obj = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
        const result = obj.handleShowUpsellAlert(obj);
      };
      obj7.children = closure_14(tmp7(tmp2[46]), obj8);
      tmp18Result = closure_14(tmp7Result2, obj7);
      const tmp7Result3 = tmp7(tmp2[46]);
    }
    items5[3] = tmp18Result;
    const obj9 = { style: tmp9.section, children: null };
    let tmpResult = tmp(tmp2[24]);
    const obj10 = { title: null, hasIcons: false, children: null };
    let intl4 = tmp(tmp2[28]).intl;
    obj10.title = intl4.string(tmp7(tmp2[29])["j+eAMQ"]);
    const obj11 = { label: null, value: null, onValueChange: null };
    let intl5 = tmp(tmp2[28]).intl;
    obj11.label = intl5.string(tmp7(tmp2[29]).uwMBDo);
    obj11.value = first1;
    obj11.onValueChange = function onValueChange(arg0) {
      currentUser(arg0);
      closure_11(first, arg0);
    };
    obj10.children = closure_14(tmp(tmp2[47]).TableSwitchRow, obj11);
    obj9.children = closure_14(tmp(tmp2[39]).TableRowGroup, obj10);
    items5[4] = closure_14(tmp7(tmp2[32]), obj9);
    const obj12 = { style: tmp9.section, children: null };
    const tmp7Result4 = tmp7(tmp2[32]);
    if (isStreaming) {
      const obj13 = { size: "lg", variant: "destructive", text: null, onPress: null };
      const intl7 = tmp(tmp2[28]).intl;
      obj13.text = intl7.string(tmp7(tmp2[29]).OsS9Ll);
      obj13.onPress = function onPress() {
        user(callback[49]).stopScreenshare();
        const obj = user(callback[49]);
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
      };
      let obj14 = obj13;
    } else {
      obj14 = { size: "lg", variant: "primary", text: null, onPress: null };
      let intl6 = tmp(tmp2[28]).intl;
      obj14.text = intl6.string(tmp7(tmp2[29])["3wwZ/Q"]);
      obj14.onPress = function onPress() {
        guildPremiumTier(callback[15]).hideActionSheet(MobileGoLiveActionSheet);
        const obj = guildPremiumTier(callback[15]);
        user(callback[49]).startStream();
      };
    }
    const obj15 = { startExpanded: true, children: null };
    const obj16 = { children: null };
    obj12.children = closure_14(tmp(tmp2[48]).Button, obj14);
    items5[5] = closure_14(tmp7(tmp2[32]), obj12);
    obj.children = items5;
    obj16.children = closure_15(tmp(tmp2[38]).SafeAreaPaddingView, obj);
    obj15.children = closure_14(tmp(tmp2[37]).BottomSheetScrollView, obj16);
    obj.children = closure_14(tmp(tmp2[36]).BottomSheet, obj15);
    return closure_14(tmp(tmp2[22]).AnalyticsLocationProvider, obj);
  }
  preset = tmp10.PRESET_MOBILE_DEFAULT;
  const tmp8 = guildPremiumTier(callback[22]);
});
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(location_stack) {
  let obj = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET, impressionProperties: null };
  obj = { location_stack };
  obj.impressionProperties = obj;
  obj.openLazy(asyncRequireImpl(9952, dependencyMap.paths), MobileGoLiveActionSheet, obj);
};