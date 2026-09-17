// discord_app/modules/video_calls/native/components/FocusedExpandedControls.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import useScreenshareUtilsDefault from "../useScreenshareUtils.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import VoiceActionUtils from "../VoiceActionUtils.tsx";
import _modDef10165 from "../../../../../_runtime/metro/10165__.js";
import _modDef10166 from "../../../../../_runtime/metro/10166__.js";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import useDeafStatesDefault from "../../useDeafStates.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = closure_11();
  if (null == iconSource) {
    return null;
  } else {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp10 = React6(native.Icon, obj2);
    let tmp6 = tmp10;
    if (iconSource.showIconSparkle) {
      const obj = { children: null };
      const items = [tmp10, , ];
      const obj3 = { style: tmp.sparkle2, source: _modDef10165 };
      items[1] = React6(React4, obj3);
      const obj4 = { style: tmp.sparkle, source: _modDef10166 };
      items[2] = React6(React4, obj4);
      obj.children = items;
      tmp6 = React7(React3, obj);
    }
    return tmp6;
  }
}
function ExpandedControlItem(iconSource) {
  ({ disabled, showIconSparkle } = iconSource);
  if (showIconSparkle === undefined) {
    showIconSparkle = false;
  }
  ({ switchValue, trailing } = iconSource);
  ({ label, onPress, onSwitchValueChange } = iconSource);
  let tmp2 = null == trailing;
  if (tmp2) {
    tmp2 = null != switchValue;
  }
  if (tmp2) {
    const obj = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    trailing = React6(Form.FormSwitch, obj);
  }
  const obj2 = { disabled, leading: React6(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle }), label: null, onPress, trailing };
  const tmp = closure_11();
  obj2.label = React6(Form.FormLabel, { text: label, style: closure_11().formColor });
  return React6(Form.FormRow, obj2);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const MediaEngineContextTypes = fn(4665).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { formTintColor: { tintColor: nativeDefault.colors.ICON_STRONG }, formColor: null, sparkle: null, sparkle2: null };
let obj3 = { tintColor: nativeDefault.colors.ICON_STRONG };
obj2.formColor = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.sparkle = { position: "absolute", bottom: -4, right: "70%" };
obj2.sparkle2 = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  const tmp = closure_11();
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  const obj2 = { text: null, style: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj2.style = items1;
  const items2 = [React6(Form.FormLabel, obj2), ];
  const tmp6Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSliderDefault;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  const obj3 = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.pEAl4b);
  items2[1] = React6(tmp5Result, obj3);
  { children: null }.children = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { label: tmp11 };
    tmp9Result = React6(Form.FormRow, obj4);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  const obj2 = {
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(closure_1_0, importDefault);
    },
    iconSource: CallsUtils.useMaskedSpeakerStates().routeSource,
    label: null
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["A/Ly/2"]);
  return closure_8(ExpandedControlItem, obj2);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  ({ channel, disabled } = arg0);
  const tmp = useScreenshareUtilsDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  let disabled2 = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return React6(ExpandedControlItem, { disabled: disabled2, onPress, iconSource, label });
};
export const DeafenButton = function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(disabled.channel);
  const deafHandler = VoiceActionUtils.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 10169 : 10170), label: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.wjcRFX);
  return React6(ExpandedControlItem, obj2);
};