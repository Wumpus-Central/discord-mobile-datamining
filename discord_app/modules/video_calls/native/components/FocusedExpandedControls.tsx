// === Module 10014: FocusedExpandedControls ===

// Module 10014 (FocusedExpandedControls)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Form from "Form" /* 8593 */;
import CallsUtils from "CallsUtils" /* 9082 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9114 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 9951 */;
import VolumeSliderDefault from "VolumeSlider" /* 9986 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10003 */;
import _modDef10015 from "module_10015" /* 10015 */;
import _modDef10016 from "module_10016" /* 10016 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10017 */;
import useDeafStatesDefault from "useDeafStates" /* 10018 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = closure_11();
  if (null == iconSource) {
    return null;
  } else {
    let obj = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp10 = React6(native.Icon, obj);
    let tmp6 = tmp10;
    if (iconSource.showIconSparkle) {
      obj = { children: null };
      const items = [tmp10, , ];
      obj = { style: tmp.sparkle2, source: _modDef10015 };
      items[1] = tmp7(React4, obj);
      const obj1 = { style: tmp.sparkle, source: _modDef10016 };
      items[2] = tmp7(React4, obj1);
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
    let obj = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    trailing = React6(Form.FormSwitch, obj);
  }
  obj = { disabled, leading: React6(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle }), label: null, onPress, trailing };
  obj = { text: label, style: closure_11().formColor };
  obj.label = React6(Form.FormLabel, obj);
  return React6(Form.FormRow, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let createStyles = { formTintColor: null, formColor: null, sparkle: null, sparkle2: null };
createStyles = { tintColor: nativeDefault.colors.ICON_STRONG };
createStyles.formTintColor = createStyles;
createStyles.formColor = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.sparkle = { position: "absolute", bottom: -4, right: "70%" };
createStyles.sparkle2 = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = initialize;
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const tmp = closure_11();
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  obj = { text: null, style: null };
  const intl = tmp2(1114).intl;
  obj.text = intl.string(util.t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj.style = items1;
  const items2 = [React6(Form.FormLabel, obj), ];
  const tmp6Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSliderDefault;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  obj = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: tmp5(576).unsafe_rawColors.WHITE, maxTrackTintColor: tmp5(576).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
  const intl2 = tmp2(1114).intl;
  obj.accessibilityLabel = intl2.string(util.t.pEAl4b);
  items2[1] = React6(tmp5Result, obj);
  { children: null }.children = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj1 = { label: tmp11 };
    tmp9Result = tmp9(tmp2(8593).FormRow, obj1);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = CallsUtils;
  obj = {
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(closure_1_0, importDefault);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource,
    label: null
  };
  const intl = util.intl;
  obj.label = intl.string(util.t["A/Ly/2"]);
  return closure_8(ExpandedControlItem, obj);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  ({ channel, disabled } = arg0);
  const tmp = useScreenshareUtilsDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  disabled = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  return React6(ExpandedControlItem, { disabled, onPress, iconSource, label });
};
export const DeafenButton = function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let obj = VoiceActionUtils;
  const deafHandler = obj.createDeafHandler(useDeafStatesDefault(disabled.channel));
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 10019 : 10020), label: null };
  const intl = tmp4(1114).intl;
  obj.label = intl.string(util.t.wjcRFX);
  return React6(ExpandedControlItem, obj);
};