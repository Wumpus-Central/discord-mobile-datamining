// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09091_AssetRegistry.js";
import useScreenshareUtils from "../useScreenshareUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let participant;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  container: obj2,
  image: { marginBottom: 12 },
  title: { textAlign: "center", marginBottom: 8 },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
};
obj2 = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participant) => {
      let intl3;
      let items;
      const obj = react2;
      const cResult = obj.c(29);
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      const containerStyle = participant.containerStyle;
      if (cResult[0] === onSingleTap) {
        let tmp4;
        if (cResult[1] === participant) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === onDoubleTap) {
          let tmp5;
          if (cResult[4] === participant) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            let tmp6;
            if (cResult[7] === tmp4) {
              tmp6 = cResult[8];
            }
            const tmp8 = useParticipantTileTapGestureDefault(tmp6);
            const tmp10 = closure_8();
            if (cResult[9] === containerStyle) {
              let tmp11;
              let tmp12;
              let tmp17;
              let tmp19;
              let tmp22;
              let tmp24;
              let tmp27;
              if (cResult[10] === tmp10.container) {
                tmp11 = cResult[11];
              }
              if (cResult[12] !== tmp10.image) {
                const obj2 = { source: AssetRegistryDefault, style: tmp10.image };
                const tmp15 = metroRequire(hasOwnProperty, obj2);
                cResult[12] = tmp10.image;
                cResult[13] = tmp15;
                tmp12 = tmp15;
              } else {
                tmp12 = cResult[13];
              }
              const _Symbol = Symbol;
              const title = tmp10.title;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl4.intl;
                const stringResult = intl.string(intl4.t.gMOwov);
                cResult[14] = stringResult;
                tmp17 = stringResult;
              } else {
                tmp17 = cResult[14];
              }
              if (cResult[15] !== tmp10.title) {
                const obj3 = {
                  style: title,
                  accessibilityRole: "header",
                  variant: "heading-lg/extrabold",
                  color: "mobile-text-heading-primary",
                  children: tmp17,
                };
                const tmp21 = metroRequire(Text_Text.Text, obj3);
                cResult[15] = tmp10.title;
                cResult[16] = tmp21;
                tmp19 = tmp21;
              } else {
                tmp19 = cResult[16];
              }
              const _Symbol2 = Symbol;
              const description = tmp10.description;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = intl4.intl;
                const stringResult1 = intl2.string(intl4.t.dKeLGt);
                cResult[17] = stringResult1;
                tmp22 = stringResult1;
              } else {
                tmp22 = cResult[17];
              }
              if (cResult[18] !== tmp10.description) {
                const obj4 = {
                  style: description,
                  variant: "text-sm/medium",
                  color: "interactive-text-default",
                  children: tmp22,
                };
                const tmp26 = metroRequire(Text_Text.Text, obj4);
                cResult[18] = tmp10.description;
                cResult[19] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[19];
              }
              const _Symbol3 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  variant: "primary-overlay",
                  text: intl3.string(intl4.t.CpkXwZ),
                  onPress: useScreenshareUtils.stopScreenshare,
                };
                const Button = components_Button_Button.Button;
                intl3 = intl4.intl;
                const tmp29 = metroRequire(Button, obj5);
                cResult[20] = tmp29;
                tmp27 = tmp29;
              } else {
                tmp27 = cResult[20];
              }
              if (cResult[21] === tmp24) {
                if (cResult[22] === tmp11) {
                  if (cResult[23] === tmp12) {
                    let tmp30;
                    if (cResult[24] === tmp19) {
                      tmp30 = cResult[25];
                    }
                    if (cResult[26] === tmp8) {
                      let tmp34;
                      if (cResult[27] === tmp30) {
                        tmp34 = cResult[28];
                      }
                      return tmp34;
                    }
                    const obj6 = { gesture: tmp8, children: tmp30 };
                    const tmp36 = metroRequire(LegacyBaseButton.GestureDetector, obj6);
                    cResult[26] = tmp8;
                    cResult[27] = tmp30;
                    cResult[28] = tmp36;
                    tmp34 = tmp36;
                  }
                }
              }
              const obj7 = { style: tmp11, children: items };
              items = [tmp12, tmp19, tmp24, tmp27];
              const tmp33 = metroImportDefault(React3, obj7);
              cResult[21] = tmp24;
              cResult[22] = tmp11;
              cResult[23] = tmp12;
              cResult[24] = tmp19;
              cResult[25] = tmp33;
              tmp30 = tmp33;
            }
            const items1 = [tmp10.container, containerStyle];
            cResult[9] = containerStyle;
            cResult[10] = tmp10.container;
            cResult[11] = items1;
            tmp11 = items1;
          }
          const obj8 = { onSingleTapStart: tmp4, onDoubleTapStart: tmp5 };
          cResult[6] = tmp5;
          cResult[7] = tmp4;
          cResult[8] = obj8;
          tmp6 = obj8;
        }
        const fn2 = function b() {
          let tmpResult;
          if (onDoubleTap != null) {
            tmpResult = tmp(participant);
          }
          return tmpResult;
        };
        cResult[3] = onDoubleTap;
        cResult[4] = participant;
        cResult[5] = fn2;
        tmp5 = fn2;
      }
      const fn = function n() {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      };
      cResult[0] = onSingleTap;
      cResult[1] = participant;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (participant) => {
      let intl;
      let intl2;
      let intl3;
      let items2;
      let items3;
      let obj2;
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      const items = [onSingleTap, participant];
      const containerStyle = participant.containerStyle;
      const items1 = [onDoubleTap, participant];
      const callback = react.useCallback(() => {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items);
      const callback1 = react.useCallback(() => {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items1);
      const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
      const tmp4 = closure_8();
      const obj = { gesture: tmp3, children: metroImportDefault(React3, obj2) };
      obj2 = { style: items2, children: items3 };
      items2 = [tmp4.container, containerStyle];
      const obj3 = { source: AssetRegistryDefault, style: tmp4.image };
      const GestureDetector = LegacyBaseButton.GestureDetector;
      items3 = [metroRequire(hasOwnProperty, obj3), , ,];
      const obj4 = {
        style: tmp4.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl4.t.gMOwov),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items3[1] = metroRequire(Text, obj4);
      const obj5 = {
        style: tmp4.description,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: intl2.string(intl4.t.dKeLGt),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items3[2] = metroRequire(Text2, obj5);
      const obj6 = {
        variant: "primary-overlay",
        text: intl3.string(intl4.t.CpkXwZ),
        onPress: useScreenshareUtils.stopScreenshare,
      };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items3[3] = metroRequire(Button, obj6);
      return metroRequire(GestureDetector, obj);
    };
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default tmp4;
