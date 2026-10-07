// === Module 9711: FocusedExpandedControls ===

// Module 9711 (FocusedExpandedControls)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Form from "Form" /* 8924 */;
import CallsUtils from "CallsUtils" /* 9334 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9344 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 9644 */;
import VolumeSliderDefault from "VolumeSlider" /* 9679 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9700 */;
import _modDef9712 from "module_9712" /* 9712 */;
import _modDef9713 from "module_9713" /* 9713 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9714 */;
import useDeafStatesDefault from "useDeafStates" /* 9715 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const MediaEngineContextTypes = fn(4921).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { formTintColor: { tintColor: nativeDefault.colors.ICON_STRONG }, formColor: null, sparkle: null, sparkle2: null };
let obj3 = { tintColor: nativeDefault.colors.ICON_STRONG };
obj2.formColor = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.sparkle = { position: "absolute", bottom: -4, right: "70%" };
obj2.sparkle2 = { position: "absolute", right: -5, height: 10, width: 10 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((iconSource) => {
  const cResult = c.c(11);
  iconSource = iconSource.iconSource;
  const tmp4 = closure_11();
  if (null == iconSource) {
    return null;
  } else {
    if (cResult[0] === iconSource) {
      if (cResult[1] === tmp4.formTintColor) {
        let tmp5 = cResult[2];
      }
      if (!iconSource.showIconSparkle) {
        return tmp5;
      } else {
        if (cResult[3] !== tmp4.sparkle2) {
          const obj2 = { style: tmp4.sparkle2, source: _modDef9712 };
          const tmp13 = closure_1_8(React4, obj2);
          cResult[3] = tmp4.sparkle2;
          cResult[4] = tmp13;
          let tmp9 = tmp13;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== tmp4.sparkle) {
          const obj3 = { style: tmp4.sparkle, source: _modDef9713 };
          const tmp18 = closure_1_8(React4, obj3);
          cResult[5] = tmp4.sparkle;
          cResult[6] = tmp18;
          let tmp14 = tmp18;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp9) {
          }
        }
        const obj4 = { children: null };
        const items = [tmp5, tmp9, tmp14];
        obj4.children = items;
        const tmp22 = options(React3, obj4);
        cResult[7] = tmp5;
        cResult[8] = tmp9;
        cResult[9] = tmp14;
        cResult[10] = tmp22;
      }
    }
    const obj5 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp4.formTintColor, disableColor: true };
    const tmp7 = closure_1_8(native.Icon, obj5);
    cResult[0] = iconSource;
    cResult[1] = tmp4.formTintColor;
    cResult[2] = tmp7;
    tmp5 = tmp7;
  }
}) : ((iconSource) => {
  iconSource = iconSource.iconSource;
  const tmp = closure_11();
  if (null == iconSource) {
    return null;
  } else {
    const obj2 = { size: native.Icon.Sizes.MEDIUM, source: iconSource, style: tmp.formTintColor, disableColor: true };
    const tmp10 = closure_1_8(native.Icon, obj2);
    let tmp6 = tmp10;
    if (iconSource.showIconSparkle) {
      const obj = { children: null };
      const items = [tmp10, , ];
      const obj3 = { style: tmp.sparkle2, source: _modDef9712 };
      items[1] = closure_1_8(React4, obj3);
      const obj4 = { style: tmp.sparkle, source: _modDef9713 };
      items[2] = closure_1_8(React4, obj4);
      obj.children = items;
      tmp6 = options(React3, obj);
    }
    return tmp6;
  }
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ disabled, iconSource, showIconSparkle, label, onPress, onSwitchValueChange, switchValue, trailing } = arg0);
  const tmp5 = closure_11();
  if (!tmp6) {
    if (cResult[4] === iconSource) {
      if (cResult[5] === tmp4) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === label) {
        if (cResult[8] === tmp5.formColor) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === disabled) {
          if (cResult[11] === onPress) {
            if (cResult[12] === tmp12) {
              if (cResult[13] === tmp16) {
                if (cResult[14] === trailing) {
                  let tmp19 = cResult[15];
                }
                return tmp19;
              }
            }
          }
        }
        const obj2 = { disabled, leading: tmp12, label: tmp16, onPress, trailing };
        const tmp21 = closure_1_8(Form.FormRow, obj2);
        cResult[10] = disabled;
        cResult[11] = onPress;
        cResult[12] = tmp12;
        cResult[13] = tmp16;
        cResult[14] = trailing;
        cResult[15] = tmp21;
        tmp19 = tmp21;
      }
      const obj3 = { text: label, style: tmp5.formColor };
      const tmp18 = closure_1_8(Form.FormLabel, obj3);
      cResult[7] = label;
      cResult[8] = tmp5.formColor;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
    const obj4 = { iconSource, showIconSparkle: tmp4 };
    const tmp15 = closure_1_8(closure_12, obj4);
    cResult[4] = iconSource;
    cResult[5] = tmp4;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  } else {
    if (cResult[0] === disabled) {
      if (cResult[1] === onSwitchValueChange) {
      }
    }
    const obj5 = { tintColor: nativeDefault.unsafe_rawColors.BRAND_500, renderIosBackground: true, value: switchValue, disabled, onValueChange: onSwitchValueChange };
    const tmp10 = closure_1_8(Form.FormSwitch, obj5);
    cResult[0] = disabled;
    cResult[1] = onSwitchValueChange;
    cResult[2] = switchValue;
    cResult[3] = tmp10;
  }
  tmp6 = null == trailing && null != switchValue;
}) : ((iconSource) => {
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
    trailing = closure_1_8(Form.FormSwitch, obj);
  }
  const obj2 = { disabled, leading: closure_1_8(closure_12, { iconSource: iconSource.iconSource, showIconSparkle }), label: null, onPress, trailing };
  const tmp = closure_11();
  obj2.label = closure_1_8(Form.FormLabel, { text: label, style: closure_11().formColor });
  return closure_1_8(Form.FormRow, obj2);
});
fn(558);
let obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(17);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    const fn = function n() {
      lastActiveStream = lastActiveStream.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== id.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return tmp2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  let ownerId;
  const tmpResult = initialize;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.pEAl4b);
    cResult[2] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { marginBottom: 16 };
    cResult[3] = obj2;
    let tmp16 = obj2;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] !== tmp4.formColor) {
    const obj3 = { text: tmp14, style: null };
    const items1 = [tmp4.formColor, tmp16];
    obj3.style = items1;
    const tmp19 = closure_1_8(Form.FormLabel, obj3);
    cResult[4] = tmp4.formColor;
    cResult[5] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let fn2;
    if (tmpResult2.isAndroid()) {
      fn2 = () => true;
    }
    cResult[6] = fn2;
    let tmp20 = fn2;
    tmpResult2 = PlatformUtils;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.pEAl4b);
    cResult[7] = stringResult1;
    let tmp21 = stringResult1;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === effectiveVolume) {
    if (cResult[9] === handleVolumeChange) {
      let tmp23 = cResult[10];
    }
    if (cResult[11] === tmp17) {
      if (cResult[12] === tmp23) {
        let tmp26 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === tmp26) {
          let tmp30 = cResult[16];
        }
        return tmp30;
      }
      let tmp31 = null;
      if (null != stateFromStores) {
        const obj4 = { label: tmp26 };
        tmp31 = closure_1_8(Form.FormRow, obj4);
      }
      cResult[14] = stateFromStores;
      cResult[15] = tmp26;
      cResult[16] = tmp31;
      tmp30 = tmp31;
    }
    const obj5 = { children: null };
    const items2 = [tmp17, tmp23];
    obj5.children = items2;
    const tmp29 = options(v65535, obj5);
    cResult[11] = tmp17;
    cResult[12] = tmp23;
    cResult[13] = tmp29;
    tmp26 = tmp29;
  }
  const obj6 = { onResponderGrant: tmp20, value: effectiveVolume, onValueChange: handleVolumeChange, color: null, maxTrackTintColor: null, accessibilityLabel: null };
  const tmp11Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  obj6.color = nativeDefault.unsafe_rawColors.WHITE;
  obj6.maxTrackTintColor = nativeDefault.unsafe_rawColors.PRIMARY_300;
  obj6.accessibilityLabel = tmp21;
  const tmp25 = closure_1_8(VolumeSliderDefault, obj6);
  cResult[8] = effectiveVolume;
  cResult[9] = handleVolumeChange;
  cResult[10] = tmp25;
  tmp23 = tmp25;
  const tmp10Result = VolumeSliderDefault;
}) : (() => {
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
  const items2 = [closure_1_8(Form.FormLabel, obj2), ];
  const tmp6Result = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  const tmp5Result = VolumeSliderDefault;
  let fn;
  if (tmp2Result.isAndroid()) {
    fn = () => true;
  }
  const obj3 = { onResponderGrant: fn, value: effectiveVolume, onValueChange: handleVolumeChange, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.pEAl4b);
  items2[1] = closure_1_8(tmp5Result, obj3);
  { children: null }.children = items2;
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { label: tmp11 };
    tmp9Result = closure_1_8(Form.FormRow, obj4);
  }
  return tmp9Result;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(7);
  channelId = channelId.channelId;
  const isConnectedToVoiceChannel = channelId.isConnectedToVoiceChannel;
  const obj = channelId(576);
  const routeSource = channelId(9334).useMaskedSpeakerStates().routeSource;
  if (cResult[0] === channelId) {
    if (cResult[1] === isConnectedToVoiceChannel) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["A/Ly/2"]);
      cResult[3] = stringResult;
      let tmp6 = stringResult;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === routeSource) {
      if (cResult[5] === tmp4) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
    const obj3 = { onPress: tmp4, iconSource: routeSource, label: tmp6 };
    const tmp11 = closure_8(closure_13, obj3);
    cResult[4] = routeSource;
    cResult[5] = tmp4;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  const fn = function n() {
    const result = showAudioOutputSelector.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
  };
  cResult[0] = channelId;
  cResult[1] = isConnectedToVoiceChannel;
  cResult[2] = fn;
  tmp4 = fn;
  const obj2 = channelId(9334);
}) : ((arg0) => {
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
  return closure_8(closure_13, obj2);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ channel, disabled } = arg0);
  ({ onPress, imgSource, text, isFeatureEnabled } = useScreenshareUtilsDefault(channel));
  let tmp3 = !isFeatureEnabled;
  if (isFeatureEnabled) {
    tmp3 = disabled;
  }
  if (cResult[0] === imgSource) {
    if (cResult[1] === onPress) {
      if (cResult[2] === tmp3) {
        if (cResult[3] === text) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = closure_1_8(closure_13, { disabled: tmp3, onPress, iconSource: imgSource, label: text });
  cResult[0] = imgSource;
  cResult[1] = onPress;
  cResult[2] = tmp3;
  cResult[3] = text;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ channel, disabled } = arg0);
  const tmp = useScreenshareUtilsDefault(channel);
  const isFeatureEnabled = tmp.isFeatureEnabled;
  let disabled2 = !isFeatureEnabled;
  ({ onPress, imgSource, text } = tmp);
  if (isFeatureEnabled) {
    disabled2 = disabled;
  }
  return closure_1_8(closure_13, { disabled: disabled2, onPress, iconSource, label });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedExpandedControls.tsx");

export const StreamVolumeItem = tmp5;
export const AudioRouteButton = tmp6;
export const ScreenshareButton = tmp7;
export const DeafenButton = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  const cResult = c.c(7);
  disabled = disabled.disabled;
  let tmp4 = undefined !== disabled;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmp6 = useDeafStatesDefault(disabled.channel);
  if (cResult[0] !== tmp6) {
    const deafHandler = VoiceActionUtils.createDeafHandler(tmp6);
    cResult[0] = tmp6;
    cResult[1] = deafHandler;
    let tmp7 = deafHandler;
    const tmpResult = VoiceActionUtils;
  } else {
    tmp7 = cResult[1];
  }
  const onPress = tmp7.onPress;
  const tmp5Result = importDefault(tmp7.deaf ? 9716 : 9717);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.wjcRFX);
    cResult[2] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp5Result) {
        let tmp12 = cResult[6];
      }
      return tmp12;
    }
  }
  const tmp13 = closure_1_8(closure_13, { disabled: tmp4, onPress, iconSource: tmp5Result, label: tmp10 });
  cResult[3] = tmp4;
  cResult[4] = onPress;
  cResult[5] = tmp5Result;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((disabled) => {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useDeafStatesDefault(disabled.channel);
  const deafHandler = VoiceActionUtils.createDeafHandler(tmp3);
  const obj2 = { disabled: flag, onPress: deafHandler.onPress, iconSource: importDefault(deafHandler.deaf ? 9716 : 9717), label: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.wjcRFX);
  return closure_1_8(closure_13, obj2);
});