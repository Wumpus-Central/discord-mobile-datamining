// discord_app/modules/video_calls/native/components/FocusedExpandedControls.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _handleToggleVideo from "../../../voice_calls/native/CallsUtils.tsx";
import showAudioOutputSelector from "../../../voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx";
import stopScreenshareDefault from "../useScreenshareUtils.tsx";
import useMuteAwareLocalVolumeDefault from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import NOOP from "../VoiceActionUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/12576_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/12577_registerAsset.js";
import useDeafStatesDefault from "../../useDeafStates.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import { MediaEngineContextTypes } from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
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
      const items = [tmp10, , ];
      obj = { style: null, source: null };
      obj[0] = tmp.sparkle2;
      obj[1] = registerAssetDefault;
      items[1] = callback(closure_4, obj);
      obj1 = { style: null, source: null };
      obj1[0] = tmp.sparkle;
      obj1[1] = registerAssetDefault2;
      items[2] = callback(closure_4, obj1);
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
  { disabled, leading: callback(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle }), label: callback(Form.FormLabel, obj), onPress, trailing };
  obj = { text: label, style: callback3().formColor };
  return callback(Form.FormRow, obj);
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
const createCacheKey = { tintColor: ThemesDefault.colors.ICON_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { position: "absolute", bottom: -4, right: "70%" };
createCacheKey[3] = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

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
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  obj = { text: null, style: null };
  const intl = getSystemLocale.intl;
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
  obj = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: ThemesDefault.unsafe_rawColors.WHITE, maxTrackTintColor: ThemesDefault.unsafe_rawColors.PRIMARY_300 };
  items2[1] = callback(tmp5Result, obj);
  { children: null }[0] = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj1 = { label: null };
    obj1[0] = tmp11;
    tmp9Result = callback(Form.FormRow, obj1);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = _handleToggleVideo;
  obj = {
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(closure_0, closure_1);
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
  return callback(ExpandedControlItem, { disabled, onPress, iconSource, label });
};
export const DeafenButton = function DeafenButton(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let obj = NOOP;
  const deafHandler = obj.createDeafHandler(useDeafStatesDefault(disabled.channel));
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 12579 : 12580), label: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.wjcRFX);
  return callback(ExpandedControlItem, obj);
};