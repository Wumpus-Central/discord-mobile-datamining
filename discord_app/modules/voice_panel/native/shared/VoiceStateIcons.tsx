// === Module 9119: VoiceStateIcons ===

// Module 9119 (VoiceStateIcons)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9120 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 9121 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9123 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 9125 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9127 */;
import _modDef9129 from "module_9129" /* 9129 */;
import _modDef9130 from "module_9130" /* 9130 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
function VideoDisabledSvgIcon(size) {
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = native.IconSizes.MEDIUM;
  }
  const merged = Object.assign(size, Object.assign({ size: 0, style: 0 }));
  const tmp4 = closure_6();
  let obj = native;
  const iconStyle = obj.getIconStyle(MEDIUM);
  const flattenResult = StyleSheet.flatten(size.style);
  let tintColor;
  if (flattenResult != null) {
    tintColor = flattenResult.tintColor;
  }
  if (tintColor == null) {
    tintColor = tmp4.defaultTint.tintColor;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [iconStyle, flattenResult];
  obj.style = items;
  obj.viewBox = "0 0 24 24";
  const items1 = [React4(inlineStyles.Path, { d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z", fill: tintColor }), React4(inlineStyles.Path, { d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z", fill: tintColor }), ];
  obj = { d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z", fill: tmp4.redTint.tintColor };
  items1[2] = React4(inlineStyles.Path, obj);
  obj.children = items1;
  return hasOwnProperty(inlineStylesDefault, obj);
}
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let obj = { redTint: null, defaultTint: null, noTint: null };
obj = { tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj.redTint = obj;
const createStyles = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.defaultTint = createStyles;
obj.noTint = { tintColor: "Array" };
let closure_6 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ style, state, alwaysWhite } = arg0);
  if (alwaysWhite === undefined) {
    alwaysWhite = false;
  }
  const tmp = closure_6();
  if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
    const items = [style, ];
    let redTint = null;
    if (!alwaysWhite) {
      redTint = tmp.redTint;
    }
    let obj = { style: null, size: "xs" };
    items[1] = redTint;
    obj.style = items;
    return React4(HeadphonesDenyIcon.HeadphonesDenyIcon, obj);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
    obj = { style: null, size: "xs" };
    const items1 = [style];
    obj.style = items1;
    return React4(HeadphonesSlashIcon.HeadphonesSlashIcon, obj);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
    const items2 = [style, ];
    let redTint1 = null;
    if (!alwaysWhite) {
      redTint1 = tmp.redTint;
    }
    const obj1 = { style: null, size: "xs" };
    items2[1] = redTint1;
    obj1.style = items2;
    return React4(MicrophoneDenyIcon.MicrophoneDenyIcon, obj1);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
    const obj2 = { style: null, size: "xs" };
    const items3 = [style];
    obj2.style = items3;
    return React4(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
    const obj3 = { style: null, size: "xs" };
    const items4 = [style];
    obj3.style = items4;
    return React4(MicrophoneSlashIcon.MicrophoneSlashIcon, obj3);
  } else {
    GlobalUtils.assertNever(state);
    const tmp2Result = GlobalUtils;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = noop.memo((state) => {
  state = state.state;
  const merged = Object.assign(state, Object.assign({ state: 0 }));
  if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
    let obj = {};
    const merged1 = Object.assign(merged);
    obj.source = _modDef9129;
    const items = [merged.style, tmp2.noTint];
    obj.style = items;
    return React4(native.Icon, obj);
  } else if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
    obj = {};
    const merged2 = Object.assign(merged);
    return React4(VideoDisabledSvgIcon, obj);
  } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === state) {
    const obj1 = {};
    const merged3 = Object.assign(merged);
    obj1.source = _modDef9130;
    return React4(native.Icon, obj1);
  } else {
    GlobalUtils.assertNever(state);
    const tmp3Result = GlobalUtils;
  }
  tmp2 = closure_6();
});