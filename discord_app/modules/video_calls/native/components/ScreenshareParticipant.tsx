// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import LegacyBaseButton from "../../../../../_runtime/06333_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import _modDef10845 from "../../../../../_runtime/metro/10845__.js";
import useScreenshareUtils from "../useScreenshareUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  image: { marginBottom: 12 },
  title: { textAlign: "center", marginBottom: 8 },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ScreenshareParticipant(participant) {
      const cResult = c.c(29);
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      const containerStyle = participant.containerStyle;
      if (cResult[0] === onSingleTap) {
        if (cResult[1] === participant) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === onDoubleTap) {
          if (cResult[4] === participant) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp4) {
              let tmp6 = cResult[8];
            }
            const tmp8 = useParticipantTileTapGestureDefault(tmp6);
            const tmp10 = closure_7();
            if (cResult[9] === containerStyle) {
              if (cResult[10] === tmp10.container) {
                let tmp11 = cResult[11];
              }
              if (cResult[12] !== tmp10.image) {
                const obj2 = { source: _modDef10845, style: tmp10.image };
                const tmp15 = hasOwnProperty(FastImageDefault, obj2);
                cResult[12] = tmp10.image;
                cResult[13] = tmp15;
                let tmp12 = tmp15;
                const tmp7Result = FastImageDefault;
              } else {
                tmp12 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.gMOwov);
                cResult[14] = stringResult;
                let tmp17 = stringResult;
              } else {
                tmp17 = cResult[14];
              }
              if (cResult[15] !== tmp10.title) {
                const obj3 = {
                  style: tmp10.title,
                  accessibilityRole: "header",
                  variant: "heading-lg/extrabold",
                  color: "mobile-text-heading-primary",
                  children: tmp17,
                };
                const tmp21 = hasOwnProperty(Text_Text.Text, obj3);
                cResult[15] = tmp10.title;
                cResult[16] = tmp21;
                let tmp19 = tmp21;
              } else {
                tmp19 = cResult[16];
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = util.intl;
                const stringResult1 = intl2.string(util.t.dKeLGt);
                cResult[17] = stringResult1;
                let tmp22 = stringResult1;
              } else {
                tmp22 = cResult[17];
              }
              if (cResult[18] !== tmp10.description) {
                const obj4 = {
                  style: tmp10.description,
                  variant: "text-sm/medium",
                  color: "interactive-text-default",
                  children: tmp22,
                };
                const tmp26 = hasOwnProperty(Text_Text.Text, obj4);
                cResult[18] = tmp10.description;
                cResult[19] = tmp26;
                let tmp24 = tmp26;
              } else {
                tmp24 = cResult[19];
              }
              const _Symbol3 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "primary-overlay", text: null, onPress: null };
                const intl3 = util.intl;
                obj5.text = intl3.string(util.t.CpkXwZ);
                obj5.onPress = useScreenshareUtils.stopScreenshare;
                const tmp29 = hasOwnProperty(components_Button_Button.Button, obj5);
                cResult[20] = tmp29;
                let tmp27 = tmp29;
              } else {
                tmp27 = cResult[20];
              }
              if (cResult[21] === tmp24) {
                if (cResult[22] === tmp11) {
                  if (cResult[23] === tmp12) {
                    if (cResult[24] === tmp19) {
                      let tmp30 = cResult[25];
                    }
                    if (cResult[26] === tmp8) {
                      if (cResult[27] === tmp30) {
                        let tmp34 = cResult[28];
                      }
                      return tmp34;
                    }
                    const obj6 = { gesture: tmp8, children: tmp30 };
                    const tmp36 = hasOwnProperty(LegacyBaseButton.GestureDetector, obj6);
                    cResult[26] = tmp8;
                    cResult[27] = tmp30;
                    cResult[28] = tmp36;
                    tmp34 = tmp36;
                  }
                }
              }
              const obj7 = { style: tmp11, children: null };
              const items = [tmp12, tmp19, tmp24, tmp27];
              obj7.children = items;
              const tmp33 = timestampProducer(View, obj7);
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
        const fn2 = function x() {
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
      const fn = function o() {
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
  : function ScreenshareParticipant(participant) {
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      const items = [onSingleTap, participant];
      const items1 = [onDoubleTap, participant];
      const callback = noop.useCallback(() => {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items);
      const callback1 = noop.useCallback(() => {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items1);
      const tmp4 = closure_7();
      const obj = {
        gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }),
        children: null,
      };
      const obj2 = { style: null, children: null };
      const items2 = [tmp4.container, participant.containerStyle];
      obj2.style = items2;
      const obj3 = { source: null, style: null };
      const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
      obj3.source = _modDef10845;
      obj3.style = tmp4.image;
      const items3 = [hasOwnProperty(FastImageDefault, obj3), , ,];
      const obj4 = {
        style: tmp4.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.gMOwov);
      items3[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = {
        style: tmp4.description,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: null,
      };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.dKeLGt);
      items3[2] = hasOwnProperty(Text_Text.Text, obj5);
      const obj6 = { variant: "primary-overlay", text: null, onPress: null };
      const intl3 = util.intl;
      obj6.text = intl3.string(util.t.CpkXwZ);
      obj6.onPress = useScreenshareUtils.stopScreenshare;
      items3[3] = hasOwnProperty(components_Button_Button.Button, obj6);
      obj2.children = items3;
      obj.children = timestampProducer(View, obj2);
      return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
    };
