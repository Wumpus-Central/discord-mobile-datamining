// discord_app/modules/voice_panel/native/shared/VoiceStateIcons.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import MicrophoneSlashIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import HeadphonesDenyIcon2 from "../../../../design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx";
import HeadphonesSlashIcon from "../../../../design/components/Icon/native/redesign/generated/HeadphonesSlashIcon.tsx";
import MicrophoneDenyIcon2 from "../../../../design/components/Icon/native/redesign/generated/MicrophoneDenyIcon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09357_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/09358_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let closure_3 = ["size", "style"];
let closure_4 = ["state"];
const StyleSheet = react_native.StyleSheet;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { redTint: obj2, defaultTint: obj3, noTint: { tintColor: "r" } };
obj2 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_9 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let alwaysWhite;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let state;
        let style;
        const obj = react2;
        const cResult = obj.c(12);
        ({ style, state, alwaysWhite } = arg0);
        const tmp5 = closure_9();
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
          let redTint = null;
          if (!(undefined !== alwaysWhite && alwaysWhite)) {
            redTint = tmp5.redTint;
          }
          if (cResult[0] === style) {
            let tmp21;
            if (cResult[1] === redTint) {
              tmp21 = cResult[2];
            }
            return tmp21;
          }
          const obj2 = { style: items, size: "xs" };
          items = [style, redTint];
          const tmp23 = metroImportDefault(HeadphonesDenyIcon2.HeadphonesDenyIcon, obj2);
          cResult[0] = style;
          cResult[1] = redTint;
          cResult[2] = tmp23;
          tmp21 = tmp23;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
          let tmp17;
          if (cResult[3] !== style) {
            const obj3 = { style: items1, size: "xs" };
            items1 = [style];
            const tmp19 = metroImportDefault(HeadphonesSlashIcon.HeadphonesSlashIcon, obj3);
            cResult[3] = style;
            cResult[4] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[4];
          }
          return tmp17;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
          let redTint1 = null;
          if (!(undefined !== alwaysWhite && alwaysWhite)) {
            redTint1 = tmp5.redTint;
          }
          if (cResult[5] === style) {
            let tmp14;
            if (cResult[6] === redTint1) {
              tmp14 = cResult[7];
            }
            return tmp14;
          }
          const obj4 = { style: items2, size: "xs" };
          items2 = [style, redTint1];
          const tmp16 = metroImportDefault(MicrophoneDenyIcon2.MicrophoneDenyIcon, obj4);
          cResult[5] = style;
          cResult[6] = redTint1;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
          let tmp10;
          if (cResult[8] !== style) {
            const obj5 = { style: items3, size: "xs" };
            items3 = [style];
            const tmp12 = metroImportDefault(MicrophoneDenyIcon2.MicrophoneDenyIcon, obj5);
            cResult[8] = style;
            cResult[9] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[9];
          }
          return tmp10;
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
          let tmp7;
          if (cResult[10] !== style) {
            const obj6 = { style: items4, size: "xs" };
            items4 = [style];
            const tmp9 = metroImportDefault(MicrophoneSlashIcon.MicrophoneSlashIcon, obj6);
            cResult[10] = style;
            cResult[11] = tmp9;
            tmp7 = tmp9;
          } else {
            tmp7 = cResult[11];
          }
          return tmp7;
        } else {
          const tmpResult = GlobalUtils;
          tmpResult.assertNever(state);
        }
      }
    : (arg0) => {
        let alwaysWhite;
        let items1;
        let items3;
        let items4;
        let state;
        let style;
        ({ style, state, alwaysWhite } = arg0);
        if (alwaysWhite === undefined) {
          alwaysWhite = false;
        }
        const tmp = closure_9();
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
          const items = [style];
          let redTint = null;
          const HeadphonesDenyIcon = HeadphonesDenyIcon2.HeadphonesDenyIcon;
          if (!alwaysWhite) {
            redTint = tmp.redTint;
          }
          const obj = { style: items, size: "xs" };
          items[1] = redTint;
          return metroImportDefault(HeadphonesDenyIcon, obj);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
          const obj2 = { style: items1, size: "xs" };
          items1 = [style];
          return metroImportDefault(HeadphonesSlashIcon.HeadphonesSlashIcon, obj2);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
          const items2 = [style];
          let redTint1 = null;
          const MicrophoneDenyIcon = MicrophoneDenyIcon2.MicrophoneDenyIcon;
          if (!alwaysWhite) {
            redTint1 = tmp.redTint;
          }
          const obj3 = { style: items2, size: "xs" };
          items2[1] = redTint1;
          return metroImportDefault(MicrophoneDenyIcon, obj3);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
          const obj4 = { style: items3, size: "xs" };
          items3 = [style];
          return metroImportDefault(MicrophoneDenyIcon2.MicrophoneDenyIcon, obj4);
        } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
          const obj5 = { style: items4, size: "xs" };
          items4 = [style];
          return metroImportDefault(MicrophoneSlashIcon.MicrophoneSlashIcon, obj5);
        } else {
          const tmp2Result = GlobalUtils;
          tmp2Result.assertNever(state);
        }
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let MEDIUM;
      let items;
      let style;
      let tmp10;
      let tmp12;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(22);
      if (cResult[0] !== arg0) {
        ({ size, style } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = style;
        cResult[3] = size;
        MEDIUM = size;
        tmp5 = style;
        tmp4 = tmp8;
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
        const tmpResult = native;
        const iconStyle = tmpResult.getIconStyle(MEDIUM);
        cResult[4] = MEDIUM;
        cResult[5] = iconStyle;
        tmp10 = iconStyle;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp5) {
        const flattenResult = StyleSheet.flatten(tmp5);
        cResult[6] = tmp5;
        cResult[7] = flattenResult;
        tmp12 = flattenResult;
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
        let tmp16;
        let tmp18;
        let tmp17;
        let tmp22;
        if (cResult[9] === tmp10) {
          tmp16 = cResult[10];
        }
        if (cResult[11] !== tintColor) {
          const obj2 = {
            d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z",
            fill: tintColor,
          };
          const tmp20 = metroImportDefault(inlineStyles.Path, obj2);
          const obj3 = {
            d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z",
            fill: tintColor,
          };
          const tmp21 = metroImportDefault(inlineStyles.Path, obj3);
          cResult[11] = tintColor;
          cResult[12] = tmp20;
          cResult[13] = tmp21;
          tmp18 = tmp21;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[12];
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp9.redTint.tintColor) {
          const obj4 = {
            d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z",
            fill: tmp9.redTint.tintColor,
          };
          const tmp24 = metroImportDefault(inlineStyles.Path, obj4);
          cResult[14] = tmp9.redTint.tintColor;
          cResult[15] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp16) {
            if (cResult[18] === tmp17) {
              if (cResult[19] === tmp18) {
                let tmp25;
                if (cResult[20] === tmp22) {
                  tmp25 = cResult[21];
                }
                return tmp25;
              }
            }
          }
        }
        const obj5 = { style: tmp16, viewBox: "0 0 24 24", children: items };
        const tmp28 = inlineStylesDefault;
        const merged = Object.assign(tmp4);
        items = [tmp17, tmp18, tmp22];
        const tmp32 = metroImportAll(tmp28, obj5);
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
      let items;
      let items1;
      let MEDIUM = size.size;
      if (MEDIUM === undefined) {
        MEDIUM = native.IconSizes.MEDIUM;
      }
      const style = size.style;
      const merged = Object.assign(size, Object.assign({ size: 0, style: 0 }));
      const tmp4 = closure_9();
      const obj = native;
      const iconStyle = obj.getIconStyle(MEDIUM);
      const flattenResult = StyleSheet.flatten(style);
      let tintColor;
      if (flattenResult != null) {
        tintColor = flattenResult.tintColor;
      }
      if (tintColor == null) {
        tintColor = tmp4.defaultTint.tintColor;
      }
      const obj2 = { style: items, viewBox: "0 0 24 24", children: items1 };
      const tmp10 = inlineStylesDefault;
      const merged1 = Object.assign(merged);
      items = [iconStyle, flattenResult];
      items1 = [
        metroImportDefault(inlineStyles.Path, {
          d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z",
          fill: tintColor,
        }),
        metroImportDefault(inlineStyles.Path, {
          d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z",
          fill: tintColor,
        }),
      ];
      const obj3 = {
        d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z",
        fill: tmp4.redTint.tintColor,
      };
      items1[2] = metroImportDefault(inlineStyles.Path, obj3);
      return metroImportAll(tmp10, obj2);
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (state) => {
        let tmp4;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(13);
        if (cResult[0] !== state) {
          state = state.state;
          const tmp8 = _objectWithoutProperties(state, closure_4);
          cResult[0] = state;
          cResult[1] = tmp8;
          cResult[2] = state;
          tmp5 = state;
          tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        const tmp9 = closure_9();
        if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === tmp5) {
          if (cResult[3] === tmp4.style) {
            let tmp25;
            if (cResult[4] === tmp9.noTint) {
              tmp25 = cResult[5];
            }
            if (cResult[6] === tmp4) {
              let tmp26;
              if (cResult[7] === tmp25) {
                tmp26 = cResult[8];
              }
              return tmp26;
            }
            const obj2 = { source: AssetRegistryDefault, style: tmp25 };
            const Icon2 = native.Icon;
            const merged = Object.assign(tmp4);
            const tmp32 = metroImportDefault(Icon2, obj2);
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
          let tmp18;
          if (cResult[9] !== tmp4) {
            const obj3 = {};
            const merged1 = Object.assign(tmp4);
            const tmp24 = metroImportDefault(closure_10, obj3);
            cResult[9] = tmp4;
            cResult[10] = tmp24;
            tmp18 = tmp24;
          } else {
            tmp18 = cResult[10];
          }
          return tmp18;
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === tmp5) {
          let tmp11;
          if (cResult[11] !== tmp4) {
            const obj4 = { source: AssetRegistryDefault2 };
            const Icon = native.Icon;
            const merged2 = Object.assign(tmp4);
            const tmp17 = metroImportDefault(Icon, obj4);
            cResult[11] = tmp4;
            cResult[12] = tmp17;
            tmp11 = tmp17;
          } else {
            tmp11 = cResult[12];
          }
          return tmp11;
        } else {
          const tmpResult = GlobalUtils;
          tmpResult.assertNever(tmp5);
        }
      }
    : (state) => {
        let items;
        state = state.state;
        const merged = Object.assign(state, Object.assign({ state: 0 }));
        const tmp2 = closure_9();
        if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
          const obj = { source: AssetRegistryDefault, style: items };
          const Icon2 = native.Icon;
          const merged1 = Object.assign(merged);
          items = [merged.style, tmp2.noTint];
          return metroImportDefault(Icon2, obj);
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
          const obj2 = {};
          const merged2 = Object.assign(merged);
          return metroImportDefault(closure_10, obj2);
        } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === state) {
          const obj3 = { source: AssetRegistryDefault2 };
          const Icon = native.Icon;
          const merged3 = Object.assign(merged);
          return metroImportDefault(Icon, obj3);
        } else {
          const tmp3Result = GlobalUtils;
          tmp3Result.assertNever(state);
        }
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = memo2Result;
