// === Module 10926: ScreenshareParticipant ===

// Module 10926 (ScreenshareParticipant)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 10698 */;
import _modDef10699 from "module_10699" /* 10699 */;
import useScreenshareUtils from "useScreenshareUtils" /* 10839 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, image: { marginBottom: 12 }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareParticipant(participant) {
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
        class S {
          constructor() {
            tmpResult = undefined;
            if (onDoubleTap != null) {
              tmp3 = participant;
              tmpResult = tmp(participant);
            }
            return tmpResult;
          }
        }
        const tmp11 = closure_8();
        if (cResult[9] === containerStyle) {
          if (cResult[10] === tmp11.container) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] !== tmp11.image) {
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            tmp16[0] = _modDef10699;
            tmp16[1] = tmp11.image;
            const tmp17 = timestampProducer(hasOwnProperty, tmp16);
            cResult[12] = tmp11.image;
            cResult[13] = tmp17;
            let tmp13 = tmp17;
          } else {
            tmp13 = cResult[13];
          }
          class S {
            constructor() {
              tmpResult = undefined;
              if (onDoubleTap != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          const _Symbol = Symbol;
          const title = tmp11.title;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const string = util.intl.string;
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[14] = tmp19;
            let tmp18 = tmp19;
          } else {
            tmp18 = cResult[14];
          }
          if (cResult[15] !== tmp11.title) {
            const obj2 = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            obj2.children = tmp18;
            const tmp22 = timestampProducer(Text_Text.Text, obj2);
            cResult[15] = tmp11.title;
            cResult[16] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[16];
          }
          const _Symbol2 = Symbol;
          const description = tmp11.description;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const string2 = util.intl.string;
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[17] = tmp24;
            let tmp23 = tmp24;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] !== tmp11.description) {
            const obj3 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            obj3.children = tmp23;
            const tmp27 = timestampProducer(Text_Text.Text, obj3);
            cResult[18] = tmp11.description;
            cResult[19] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[19];
          }
          const _Symbol3 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "primary-overlay", text: null, onPress: null };
            class S {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            const intl = util.intl;
            obj4.text = intl.string(util.t.CpkXwZ);
            obj4.onPress = useScreenshareUtils.stopScreenshare;
            const tmp31 = timestampProducer(tmp30, obj4);
            cResult[20] = tmp31;
            let tmp28 = tmp31;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] === tmp25) {
            if (cResult[22] === tmp12) {
              if (cResult[23] === tmp13) {
                if (cResult[24] === tmp20) {
                  let tmp32 = cResult[25];
                }
                if (cResult[26] === tmp9) {
                  if (cResult[27] === tmp32) {
                    let tmp36 = cResult[28];
                  }
                  return tmp36;
                }
                class S {
                  constructor() {
                    tmpResult = undefined;
                    if (onDoubleTap != null) {
                      tmp3 = participant;
                      tmpResult = tmp(participant);
                    }
                    return tmpResult;
                  }
                }
                const obj5 = { gesture: tmp9, children: tmp32 };
                const tmp37 = timestampProducer(LegacyBaseButton.GestureDetector, obj5);
                cResult[26] = tmp9;
                cResult[27] = tmp32;
                cResult[28] = tmp37;
                tmp36 = tmp37;
              }
            }
          }
          const obj6 = { style: tmp12, children: null };
          const items = [tmp13, tmp20, tmp25, tmp28];
          obj6.children = items;
          const tmp35 = React5(React4, obj6);
          cResult[21] = tmp25;
          cResult[22] = tmp12;
          cResult[23] = tmp13;
          cResult[24] = tmp20;
          cResult[25] = tmp35;
          tmp32 = tmp35;
        }
        const items1 = [tmp11.container, containerStyle];
        cResult[9] = containerStyle;
        cResult[10] = tmp11.container;
        cResult[11] = items1;
        tmp12 = items1;
      }
      class S {
        constructor() {
          tmpResult = undefined;
          if (onDoubleTap != null) {
            tmp3 = participant;
            tmpResult = tmp(participant);
          }
          return tmpResult;
        }
      }
      tmp7[0] = tmp4;
      tmp7[1] = tmp5;
      cResult[6] = tmp5;
      cResult[7] = tmp4;
      cResult[8] = tmp7;
    }
    class S {
      constructor() {
        tmpResult = undefined;
        if (onDoubleTap != null) {
          tmp3 = participant;
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }
    }
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = S;
    tmp5 = S;
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
}) : (function ScreenshareParticipant(participant) {
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
  const tmp4 = closure_8();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: null };
  const obj2 = { style: null, children: null };
  const items2 = [tmp4.container, participant.containerStyle];
  obj2.style = items2;
  const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const items3 = [timestampProducer(hasOwnProperty, { source: _modDef10699, style: tmp4.image }), , , ];
  const obj4 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.gMOwov);
  items3[1] = timestampProducer(Text_Text.Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.dKeLGt);
  items3[2] = timestampProducer(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.CpkXwZ);
  obj6.onPress = useScreenshareUtils.stopScreenshare;
  items3[3] = timestampProducer(components_Button_Button.Button, obj6);
  obj2.children = items3;
  obj.children = React5(React4, obj2);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
});