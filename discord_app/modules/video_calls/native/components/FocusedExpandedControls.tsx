// === Module 11960: FocusedExpandedControls ===

// Module 11960 (FocusedExpandedControls)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Form from "Form" /* 8169 */;
import CallsUtils from "CallsUtils" /* 9202 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9209 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 11881 */;
import VolumeSliderDefault from "VolumeSlider" /* 11910 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11931 */;
import _modDef11961 from "module_11961" /* 11961 */;
import _modDef11962 from "module_11962" /* 11962 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11963 */;
import useDeafStatesDefault from "useDeafStates" /* 11964 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = closure_10();
  if (null == iconSource) {
    return null;
  } else {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp11 = React5(native.Icon, obj2);
    let tmp7 = tmp11;
    if (iconSource.showIconSparkle) {
      const obj = { children: null };
      const items = [tmp11, , ];
      const obj3 = { style: tmp.sparkle2, source: _modDef11961 };
      items[1] = React5(FastImageDefault, obj3);
      const obj4 = { style: tmp.sparkle, source: null };
      obj4.source = _modDef11962;
      items[2] = React5(FastImageDefault, obj4);
      obj.children = items;
      tmp7 = React6(View, obj);
    }
    return tmp7;
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
    trailing = React5(Form.FormSwitch, obj);
  }
  const obj2 = { disabled, leading: React5(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle }), label: null, onPress, trailing };
  const tmp = closure_10();
  obj2.label = React5(Form.FormLabel, { text: label, style: closure_10().formColor });
  return React5(Form.FormRow, obj2);
}
const View = fn(17).View;
const MediaEngineContextTypes = fn(5763).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { formTintColor: { tintColor: nativeDefault.colors.ICON_STRONG }, formColor: null, sparkle: null, sparkle2: null };
let obj3 = { tintColor: nativeDefault.colors.ICON_STRONG };
obj2.formColor = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.sparkle = { position: "absolute", bottom: -4, right: "70%" };
obj2.sparkle2 = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export function StreamVolumeItem() {
  const tmp = closure_10();
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
  const items2 = [React5(Form.FormLabel, obj2), ];
  const tmp6Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSliderDefault;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  const obj3 = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.pEAl4b);
  items2[1] = React5(tmp5Result, obj3);
  { children: null }.children = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { label: tmp11 };
    tmp9Result = React5(Form.FormRow, obj4);
  }
  return tmp9Result;
}
export function AudioRouteButton(arg0) {
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
  return closure_7(ExpandedControlItem, obj2);
}
export function ScreenshareButton(arg0) {
  ({ channel, disabled } = arg0);
  const tmp = useScreenshareUtilsDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  let disabled2 = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return React5(ExpandedControlItem, { disabled: disabled2, onPress, iconSource, label });
}
export function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(disabled.channel);
  const deafHandler = VoiceActionUtils.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 11965 : 11966), label: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.wjcRFX);
  return React5(ExpandedControlItem, obj2);
}