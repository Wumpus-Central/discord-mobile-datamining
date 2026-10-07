// discord_app/modules/voice_panel/native/shared/VoiceStateIcons.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import MicrophoneSlashIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import HeadphonesDenyIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx";
import HeadphonesSlashIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import MicrophoneDenyIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import _modDef9357 from "../../../../../_runtime/metro/09357__.js";
import _modDef9358 from "../../../../../_runtime/metro/09358__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
let closure_3 = ["size", "style"];
let closure_4 = ["state"];
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj = { redTint: { tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }, defaultTint: null, noTint: null };
let obj3 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj.defaultTint = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.noTint = { tintColor: "r" };
let closure_9 = createStyles.createStyles(obj);
fn(558);
let obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(22);
      if (cResult[0] !== arg0) {
        ({ size, style } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = style;
        cResult[3] = size;
        let MEDIUM = size;
        let tmp5 = style;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        MEDIUM = cResult[3];
      }
      if (undefined === MEDIUM) {
        MEDIUM = native.IconSizes.MEDIUM;
      }
      const tmp9 = closure_9();
      if (cResult[4] !== MEDIUM) {
        const iconStyle = native.getIconStyle(MEDIUM);
        cResult[4] = MEDIUM;
        cResult[5] = iconStyle;
        let tmp10 = iconStyle;
        const tmpResult = native;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp5) {
        const flattenResult = StyleSheet.flatten(tmp5);
        cResult[6] = tmp5;
        cResult[7] = flattenResult;
        let tmp12 = flattenResult;
      } else {
        tmp12 = cResult[7];
      }
      let tintColor;
      if (tmp12 != null) {
        tintColor = tmp12.tintColor;
      }
      if (tintColor == null) {
        tintColor = tmp9.defaultTint.tintColor;
      }
      if (cResult[8] === tmp12) {
        if (cResult[9] === tmp10) {
          let tmp16 = cResult[10];
        }
        if (cResult[11] !== tintColor) {
          const obj2 = {
            d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z",
            fill: tintColor,
          };
          const tmp20 = React5(inlineStyles.Path, obj2);
          const obj3 = {
            d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z",
            fill: tintColor,
          };
          const tmp21 = React5(inlineStyles.Path, obj3);
          cResult[11] = tintColor;
          cResult[12] = tmp20;
          cResult[13] = tmp21;
          let tmp18 = tmp21;
          let tmp17 = tmp20;
        } else {
          tmp17 = cResult[12];
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp9.redTint.tintColor) {
          const obj4 = {
            d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z",
            fill: tmp9.redTint.tintColor,
          };
          const tmp24 = React5(inlineStyles.Path, obj4);
          cResult[14] = tmp9.redTint.tintColor;
          cResult[15] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp16) {
            if (cResult[18] === tmp17) {
              if (cResult[19] === tmp18) {
                if (cResult[20] === tmp22) {
                  let tmp25 = cResult[21];
                }
                return tmp25;
              }
            }
          }
        }
        const obj5 = {};
        const merged = Object.assign(tmp4);
        obj5.style = tmp16;
        obj5.viewBox = "0 0 24 24";
        const items = [tmp17, tmp18, tmp22];
        obj5.children = items;
        const tmp32 = closure_1_8(inlineStylesDefault, obj5);
        cResult[16] = tmp4;
        cResult[17] = tmp16;
        cResult[18] = tmp17;
        cResult[19] = tmp18;
        cResult[20] = tmp22;
        cResult[21] = tmp32;
        tmp25 = tmp32;
      }
      const items1 = [tmp10, tmp12];
      cResult[8] = tmp12;
      cResult[9] = tmp10;
      cResult[10] = items1;
      tmp16 = items1;
    }
  : (size) => {
      let MEDIUM = size.size;
      if (MEDIUM === undefined) {
        MEDIUM = native.IconSizes.MEDIUM;
      }
      const merged = Object.assign(size, Object.assign({ size: 0, style: 0 }));
      const tmp4 = closure_9();
      const iconStyle = native.getIconStyle(MEDIUM);
      const flattenResult = StyleSheet.flatten(size.style);
      let tintColor;
      if (flattenResult != null) {
        tintColor = flattenResult.tintColor;
      }
      if (tintColor == null) {
        tintColor = tmp4.defaultTint.tintColor;
      }
      const obj2 = {};
      const merged1 = Object.assign(merged);
      const items = [iconStyle, flattenResult];
      obj2.style = items;
      obj2.viewBox = "0 0 24 24";
      const items1 = [
        React5(inlineStyles.Path, {
          d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z",
          fill: tintColor,
        }),
        React5(inlineStyles.Path, {
          d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z",
          fill: tintColor,
        }),
        React5(inlineStyles.Path, {
          d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z",
          fill: tmp4.redTint.tintColor,
        }),
      ];
      obj2.children = items1;
      return closure_1_8(inlineStylesDefault, obj2);
    };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(12);
        ({ style, state, alwaysWhite } = arg0);
        const tmp5 = closure_9();
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
          let redTint = null;
          if (!tmp4) {
            redTint = tmp5.redTint;
          }
          if (cResult[0] === style) {
            if (cResult[1] === redTint) {
              let tmp21 = cResult[2];
            }
            return tmp21;
          }
          const obj2 = { style: null, size: "xs" };
          const items = [style, redTint];
          obj2.style = items;
          const tmp23 = React5(HeadphonesDenyIcon.HeadphonesDenyIcon, obj2);
          cResult[0] = style;
          cResult[1] = redTint;
          cResult[2] = tmp23;
          tmp21 = tmp23;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
          if (cResult[3] !== style) {
            const obj3 = { style: null, size: "xs" };
            const items1 = [style];
            obj3.style = items1;
            const tmp19 = React5(HeadphonesSlashIcon.HeadphonesSlashIcon, obj3);
            cResult[3] = style;
            cResult[4] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[4];
          }
          return tmp17;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
          let redTint1 = null;
          if (!tmp4) {
            redTint1 = tmp5.redTint;
          }
          if (cResult[5] === style) {
            if (cResult[6] === redTint1) {
              let tmp14 = cResult[7];
            }
            return tmp14;
          }
          const obj4 = { style: null, size: "xs" };
          const items2 = [style, redTint1];
          obj4.style = items2;
          const tmp16 = React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj4);
          cResult[5] = style;
          cResult[6] = redTint1;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
          if (cResult[8] !== style) {
            const obj5 = { style: null, size: "xs" };
            const items3 = [style];
            obj5.style = items3;
            const tmp12 = React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj5);
            cResult[8] = style;
            cResult[9] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[9];
          }
          return tmp10;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
          if (cResult[10] !== style) {
            const obj6 = { style: null, size: "xs" };
            const items4 = [style];
            obj6.style = items4;
            const tmp9 = React5(MicrophoneSlashIcon.MicrophoneSlashIcon, obj6);
            cResult[10] = style;
            cResult[11] = tmp9;
            let tmp7 = tmp9;
          } else {
            tmp7 = cResult[11];
          }
          return tmp7;
        } else {
          GlobalUtils.assertNever(state);
          const tmpResult = GlobalUtils;
        }
      }
    : (arg0) => {
        ({ style, state, alwaysWhite } = arg0);
        if (alwaysWhite === undefined) {
          alwaysWhite = false;
        }
        const tmp = closure_9();
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
          const items = [style];
          let redTint = null;
          if (!alwaysWhite) {
            redTint = tmp.redTint;
          }
          const obj = { style: null, size: "xs" };
          items[1] = redTint;
          obj.style = items;
          return React5(HeadphonesDenyIcon.HeadphonesDenyIcon, obj);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
          const obj2 = { style: null, size: "xs" };
          const items1 = [style];
          obj2.style = items1;
          return React5(HeadphonesSlashIcon.HeadphonesSlashIcon, obj2);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
          const items2 = [style];
          let redTint1 = null;
          if (!alwaysWhite) {
            redTint1 = tmp.redTint;
          }
          const obj3 = { style: null, size: "xs" };
          items2[1] = redTint1;
          obj3.style = items2;
          return React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
          const obj4 = { style: null, size: "xs" };
          const items3 = [style];
          obj4.style = items3;
          return React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj4);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
          const obj5 = { style: null, size: "xs" };
          const items4 = [style];
          obj5.style = items4;
          return React5(MicrophoneSlashIcon.MicrophoneSlashIcon, obj5);
        } else {
          GlobalUtils.assertNever(state);
          const tmp2Result = GlobalUtils;
        }
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (state) => {
        const cResult = c.c(13);
        if (cResult[0] !== state) {
          state = state.state;
          const tmp8 = _objectWithoutProperties(state, closure_4);
          cResult[0] = state;
          cResult[1] = tmp8;
          cResult[2] = state;
          let tmp5 = state;
          let tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        const tmp9 = closure_9();
        if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === tmp5) {
          if (cResult[3] === tmp4.style) {
            if (cResult[4] === tmp9.noTint) {
              let tmp25 = cResult[5];
            }
            if (cResult[6] === tmp4) {
              if (cResult[7] === tmp25) {
                let tmp26 = cResult[8];
              }
              return tmp26;
            }
            const obj2 = {};
            const merged = Object.assign(tmp4);
            obj2.source = _modDef9357;
            obj2.style = tmp25;
            const tmp32 = React5(native.Icon, obj2);
            cResult[6] = tmp4;
            cResult[7] = tmp25;
            cResult[8] = tmp32;
            tmp26 = tmp32;
          }
          const items = [tmp4.style, tmp9.noTint];
          cResult[3] = tmp4.style;
          cResult[4] = tmp9.noTint;
          cResult[5] = items;
          tmp25 = items;
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL === tmp5) {
          if (cResult[9] !== tmp4) {
            const obj3 = {};
            const merged1 = Object.assign(tmp4);
            const tmp24 = React5(closure_10, obj3);
            cResult[9] = tmp4;
            cResult[10] = tmp24;
            let tmp18 = tmp24;
          } else {
            tmp18 = cResult[10];
          }
          return tmp18;
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === tmp5) {
          if (cResult[11] !== tmp4) {
            const obj4 = {};
            const merged2 = Object.assign(tmp4);
            obj4.source = _modDef9358;
            const tmp17 = React5(native.Icon, obj4);
            cResult[11] = tmp4;
            cResult[12] = tmp17;
            let tmp11 = tmp17;
          } else {
            tmp11 = cResult[12];
          }
          return tmp11;
        } else {
          GlobalUtils.assertNever(tmp5);
          const tmpResult = GlobalUtils;
        }
      }
    : (state) => {
        state = state.state;
        const merged = Object.assign(state, Object.assign({ state: 0 }));
        if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
          const obj = {};
          const merged1 = Object.assign(merged);
          obj.source = _modDef9357;
          const items = [merged.style, tmp2.noTint];
          obj.style = items;
          return React5(native.Icon, obj);
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
          const obj2 = {};
          const merged2 = Object.assign(merged);
          return React5(closure_10, obj2);
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === state) {
          const obj3 = {};
          const merged3 = Object.assign(merged);
          obj3.source = _modDef9358;
          return React5(native.Icon, obj3);
        } else {
          GlobalUtils.assertNever(state);
          const tmp3Result = GlobalUtils;
        }
        tmp2 = closure_9();
      },
);
