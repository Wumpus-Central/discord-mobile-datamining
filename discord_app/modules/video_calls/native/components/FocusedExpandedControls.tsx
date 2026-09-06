// === Module 10014: ExpandedControlItemIcon ===

// Module 10014 (ExpandedControlItemIcon)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import Form from "Form" /* 8593 */;
import _handleToggleVideo from "_handleToggleVideo" /* 9082 */;
import stopScreenshareDefault from "stopScreenshare" /* 9951 */;
import VolumeSliderDefault from "VolumeSlider" /* 9986 */;
import NOOP from "NOOP" /* 10003 */;
import registerAssetDefault from "registerAsset" /* 10015 */;
import registerAssetDefault2 from "registerAsset" /* 10016 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10017 */;
import useDeafStatesDefault from "useDeafStates" /* 10018 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "reset" /* 4582 */;
import closure_6 from "fetchFingerprint" /* 502 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4585 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = callback3();
  if (null == iconSource) {
    return null;
  } else {
    let obj = { size: null, source: null, style: null, disableColor: true };
    obj[0] = Button.Icon.Sizes.MEDIUM;
    obj[1] = iconSource;
    obj[2] = tmp.formTintColor;
    const tmp10 = callback(Button.Icon, obj);
    let tmp6 = tmp10;
    if (iconSource.showIconSparkle) {
      obj = { children: null };
      const items = [tmp10, , ];
      obj = { style: null, source: null };
      obj[0] = tmp.sparkle2;
      obj[1] = registerAssetDefault;
      items[1] = tmp7(closure_4, obj);
      obj1 = { style: null, source: null };
      obj1[0] = tmp.sparkle;
      obj1[1] = registerAssetDefault2;
      items[2] = tmp7(closure_4, obj1);
      obj[0] = items;
      tmp6 = callback2(closure_3, obj);
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
    let obj = { tintColor: null, renderIosBackground: true, value: null, disabled: null, onValueChange: null };
    obj[0] = ThemesDefault.unsafe_rawColors.BRAND_500;
    obj[2] = switchValue;
    obj[3] = disabled;
    obj[4] = onSwitchValueChange;
    trailing = callback(Form.FormSwitch, obj);
  }
  obj = { disabled, leading: callback(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle }), label: callback(Form.FormLabel, obj), onPress, trailing };
  obj = { text: label, style: callback3().formColor };
  return callback(Form.FormRow, obj);
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { formTintColor: null, formColor: null, sparkle: null, sparkle2: null };
createCacheKey = { tintColor: ThemesDefault.colors.ICON_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { position: "absolute", bottom: -4, right: "70%" };
createCacheKey[3] = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = initialize;
  const items = [closure_5, closure_6];
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
  const tmp = callback3();
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  const tmp6 = useMuteAwareLocalVolumeDefault;
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  obj = { text: null, style: null };
  const intl = tmp2(1114).intl;
  obj[0] = intl.string(getSystemLocale.t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj[1] = items1;
  const items2 = [callback(Form.FormLabel, obj), ];
  const tmp6Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSliderDefault;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  obj = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: tmp5(576).unsafe_rawColors.WHITE, maxTrackTintColor: tmp5(576).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
  const intl2 = tmp2(1114).intl;
  obj[5] = intl2.string(getSystemLocale.t.pEAl4b);
  items2[1] = callback(tmp5Result, obj);
  { children: null }[0] = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj1 = { label: null };
    obj1[0] = tmp11;
    tmp9Result = tmp9(tmp2(8593).FormRow, obj1);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = _handleToggleVideo;
  obj = {
    onPress() {
      const result = closure_1_0(closure_1_2[18]).showAudioOutputSelector(closure_0, closure_1);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource,
    label: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["A/Ly/2"]);
  return callback(ExpandedControlItem, obj);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  ({ channel, disabled } = arg0);
  const tmp = stopScreenshareDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  disabled = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  return closure_8(ExpandedControlItem, { disabled, onPress, iconSource, label });
};
export const DeafenButton = function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let obj = NOOP;
  const deafHandler = obj.createDeafHandler(useDeafStatesDefault(disabled.channel));
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 10019 : 10020), label: null };
  const intl = tmp4(1114).intl;
  obj[3] = intl.string(getSystemLocale.t.wjcRFX);
  return callback(ExpandedControlItem, obj);
};