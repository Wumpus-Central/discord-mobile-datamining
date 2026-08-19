// === Module 9677: VideoDisabledSvgIcon ===

// Module 9677 (VideoDisabledSvgIcon)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import inlineStyles from "inlineStyles" /* 6571 */;
import inlineStylesDefault from "inlineStyles" /* 6571 */;
import isStableVoiceStateEqual from "isStableVoiceStateEqual" /* 9678 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 9679 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9681 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 9683 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9685 */;
import registerAssetDefault from "registerAsset" /* 9687 */;
import registerAssetDefault2 from "registerAsset" /* 9688 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function VideoDisabledSvgIcon(size) {
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = Button.IconSizes.MEDIUM;
  }
  const merged = Object.assign(size, Object.create(null));
  const tmp4 = callback3();
  let obj = Button;
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
  const items1 = [callback(inlineStyles.Path, { d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z", fill: tintColor }), callback(inlineStyles.Path, { d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z", fill: tintColor }), ];
  obj = { d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z", fill: tmp4.redTint.tintColor };
  items1[2] = callback(inlineStyles.Path, obj);
  obj.children = items1;
  return callback2(inlineStylesDefault, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL };
obj[0] = obj;
const createCacheKey = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[1] = createCacheKey;
obj[2] = { tintColor: "r" };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ style, state, alwaysWhite } = arg0);
  if (alwaysWhite === undefined) {
    alwaysWhite = false;
  }
  const tmp = callback3();
  if (isStableVoiceStateEqual.MuteDeafenIconState.DEAFENED_SERVER === state) {
    const items = [style, ];
    let redTint = null;
    if (!alwaysWhite) {
      redTint = tmp.redTint;
    }
    let obj = { style: null, size: "xs" };
    items[1] = redTint;
    obj[0] = items;
    return callback(HeadphonesDenyIcon.HeadphonesDenyIcon, obj);
  } else if (isStableVoiceStateEqual.MuteDeafenIconState.DEAFENED === state) {
    obj = { style: null, size: "xs" };
    const items1 = [style];
    obj[0] = items1;
    return callback(HeadphonesSlashIcon.HeadphonesSlashIcon, obj);
  } else if (isStableVoiceStateEqual.MuteDeafenIconState.MUTED_SERVER === state) {
    const items2 = [style, ];
    let redTint1 = null;
    if (!alwaysWhite) {
      redTint1 = tmp.redTint;
    }
    obj1 = { style: null, size: "xs" };
    items2[1] = redTint1;
    obj1[0] = items2;
    return callback(MicrophoneDenyIcon.MicrophoneDenyIcon, obj1);
  } else if (isStableVoiceStateEqual.MuteDeafenIconState.MUTED_LOCAL === state) {
    const obj2 = { style: null, size: "xs" };
    const items3 = [style];
    obj2[0] = items3;
    return callback(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
  } else if (isStableVoiceStateEqual.MuteDeafenIconState.MUTED === state) {
    const obj3 = { style: null, size: "xs" };
    const items4 = [style];
    obj3[0] = items4;
    return callback(MicrophoneSlashIcon.MicrophoneSlashIcon, obj3);
  } else {
    isDiscordFrontendDevelopment.assertNever(state);
    const tmp2Result = isDiscordFrontendDevelopment;
  }
});
const memoResult1 = importAllResult.memo((state) => {
  state = state.state;
  const merged = Object.assign(state, Object.create(null));
  if (isStableVoiceStateEqual.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
    let obj = {};
    const merged1 = Object.assign(merged);
    obj.source = registerAssetDefault;
    const items = [merged.style, tmp2.noTint];
    obj.style = items;
    return callback(Button.Icon, obj);
  } else if (isStableVoiceStateEqual.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
    obj = {};
    const merged2 = Object.assign(merged);
    return callback(VideoDisabledSvgIcon, obj);
  } else if (isStableVoiceStateEqual.VideoIconState.VIDEO_ACTIVE === state) {
    obj1 = {};
    const merged3 = Object.assign(merged);
    obj1.source = registerAssetDefault2;
    return callback(Button.Icon, obj1);
  } else {
    isDiscordFrontendDevelopment.assertNever(state);
    const tmp3Result = isDiscordFrontendDevelopment;
  }
  tmp2 = callback3();
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = memoResult1;