// discord_app/modules/video_calls/native/components/FocusedExpandedControls.tsx
import "stopScreenshare";
import get_ActivityIndicator from "_handleToggleVideo";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "NOOP";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/10897_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/10898_registerAsset.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { VolumeSlider } from "../../../../components_native/common/VolumeSlider.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useMuteAwareLocalVolume } from "../../../media_engine/useMuteAwareLocalVolume.tsx";
import { _handleToggleVideo } from "../../../voice_calls/native/CallsUtils.tsx";
import { useDeafStates } from "../../useDeafStates.tsx";
import { stopScreenshare } from "../useScreenshareUtils.tsx";
import { NOOP } from "../VoiceActionUtils.tsx";

let c10;
let c3;
let c4;
let c9;
let metroImportAll;
const require = arg1;
function ExpandedControlItemIcon(iconSource) {
  iconSource = iconSource.iconSource;
  const tmp = createCacheKey();
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
      obj[1] = registerAsset;
      items[1] = tmp7(closure_4, obj);
      const obj1 = { style: null, source: null };
      obj1[0] = tmp.sparkle;
      obj1[1] = registerAsset;
      items[2] = tmp7(closure_4, obj1);
      obj[0] = items;
      tmp6 = callback2(closure_3, obj);
    }
    return tmp6;
  }
}
function ExpandedControlItem(iconSource) {
  let disabled;
  let label;
  let onPress;
  let onSwitchValueChange;
  let showIconSparkle;
  let switchValue;
  let trailing;
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
    obj[0] = Themes.unsafe_rawColors.BRAND_500;
    obj[2] = switchValue;
    obj[3] = disabled;
    obj[4] = onSwitchValueChange;
    trailing = callback(Form.FormSwitch, obj);
  }
  obj = { disabled, leading: null, label: null, onPress: null, trailing: null };
  obj[1] = callback(ExpandedControlItemIcon, { iconSource: iconSource.iconSource, showIconSparkle });
  obj = { text: label, style: createCacheKey().formColor };
  obj[2] = callback(Form.FormLabel, obj);
  obj[3] = onPress;
  obj[4] = trailing;
  return callback(Form.FormRow, obj);
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { formTintColor: null, formColor: null, sparkle: null, sparkle2: null };
createCacheKey = { tintColor: require("Themes").colors.ICON_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { position: "absolute", bottom: -4, right: "70%" };
createCacheKey[3] = { position: "absolute", right: -5, height: 10, width: 10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("reset").fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = function StreamVolumeItem() {
  let effectiveVolume;
  let handleVolumeChange;
  let obj = initialize;
  const items = [reset, fetchFingerprint];
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
  const tmp = createCacheKey();
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  const tmp6 = useMuteAwareLocalVolume;
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolume(ownerId, MediaEngineContextTypes.STREAM));
  obj = { text: null, style: null };
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(getSystemLocale.t.pEAl4b);
  const items1 = [tmp.formColor, { marginBottom: 16 }];
  obj[1] = items1;
  const items2 = [callback(Form.FormLabel, obj), ];
  const tmp6Result = useMuteAwareLocalVolume(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSlider;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  obj = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: tmp5(712).unsafe_rawColors.WHITE, maxTrackTintColor: tmp5(712).unsafe_rawColors.PRIMARY_300 };
  items2[1] = callback(tmp5Result, obj);
  { children: null }[0] = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj1 = { label: null };
    obj1[0] = tmp11;
    tmp9Result = tmp9(tmp2(7967).FormRow, obj1);
  }
  return tmp9Result;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let importDefault;
  let require;
  ({ channelId: require, isConnectedToVoiceChannel: importDefault } = arg0);
  let obj = _handleToggleVideo;
  obj = {
    onPress() {
      const result = outer1_0(outer1_2[18]).showAudioOutputSelector(closure_0, closure_1);
    },
    iconSource: obj.useMaskedSpeakerStates().routeSource,
    label: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["A/Ly/2"]);
  return callback(ExpandedControlItem, obj);
};
export const ScreenshareButton = function ScreenshareButton(arg0) {
  let channel;
  let disabled;
  let imgSource;
  let onPress;
  let text;
  ({ channel, disabled } = arg0);
  const tmp = stopScreenshare(channel);
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
  const deafHandler = obj.createDeafHandler(useDeafStates(disabled.channel));
  obj = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 10901 : 10902), label: null };
  const intl = tmp4(1236).intl;
  obj[3] = intl.string(getSystemLocale.t.wjcRFX);
  return callback(ExpandedControlItem, obj);
};