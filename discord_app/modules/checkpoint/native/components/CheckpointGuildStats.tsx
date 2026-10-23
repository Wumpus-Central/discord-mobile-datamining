// === Module 12949: CheckpointGuildStats ===

// Module 12949 (CheckpointGuildStats)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3056 from "module_3056" /* 3056 */;
import CheckpointConstants from "CheckpointConstants" /* 6013 */;
import ChatIcon from "ChatIcon" /* 8540 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11622 */;
import CheckpointTextDefault from "CheckpointText" /* 12930 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { stats: { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 }, stat: null, text: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
obj.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.text = { fontSize: 16, lineHeight: 20 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGuildStats(arg0) {
  const cResult = c.c(38);
  ({ numVoiceMinutes: text, numMessagesSent } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === numMessagesSent) {
    if (cResult[1] === text) {
      if (cResult[2] === tmp4.stat) {
        if (cResult[3] === tmp4.stats) {
          if (cResult[4] === tmp4.text) {
            const _HermesInternal = HermesInternal;
            const combined = "" + cResult[8] + " " + cResult[9];
            const _Symbol = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { size: "xs", color: CHECKPOINT_PRIMARY };
              const tmp39 = hasOwnProperty(ChatIcon.ChatIcon, obj2);
              cResult[23] = tmp39;
              let tmp36 = tmp39;
            } else {
              tmp36 = cResult[23];
            }
            if (cResult[24] === cResult[7]) {
              if (cResult[25] === tmp4.text) {
                let tmp40 = cResult[26];
              }
              if (cResult[27] === tmp5) {
                if (cResult[28] === tmp4.stat) {
                  if (cResult[29] === tmp8) {
                    if (cResult[30] === combined) {
                      if (cResult[31] === tmp40) {
                        let tmp44 = cResult[32];
                      }
                      if (cResult[33] === tmp6) {
                        if (cResult[34] === tmp9) {
                          if (cResult[35] === tmp10) {
                            if (cResult[36] === tmp44) {
                              let tmp47 = cResult[37];
                            }
                            return tmp47;
                          }
                        }
                      }
                      const obj3 = { style: tmp9, children: null };
                      const items = [tmp10, tmp44];
                      obj3.children = items;
                      const tmp49 = timestampProducer(tmp6, obj3);
                      cResult[33] = tmp6;
                      cResult[34] = tmp9;
                      cResult[35] = tmp10;
                      cResult[36] = tmp44;
                      cResult[37] = tmp49;
                      tmp47 = tmp49;
                    }
                  }
                }
              }
              const obj4 = { accessible: tmp8, accessibilityLabel: combined, style: tmp4.stat, children: null };
              const items1 = [tmp36, tmp40];
              obj4.children = items1;
              const tmp46 = timestampProducer(tmp5, obj4);
              cResult[27] = tmp5;
              cResult[28] = tmp4.stat;
              cResult[29] = tmp8;
              cResult[30] = combined;
              cResult[31] = tmp40;
              cResult[32] = tmp46;
              tmp44 = tmp46;
            }
            const obj5 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: cResult[7] };
            const tmp43 = hasOwnProperty(CheckpointTextDefault, obj5);
            cResult[24] = cResult[7];
            cResult[25] = tmp4.text;
            cResult[26] = tmp43;
            tmp40 = tmp43;
          }
        }
      }
    }
  }
  const rounded = Math.round(text);
  if (cResult[13] !== numMessagesSent) {
    const _Math = Math;
    const rounded1 = Math.round(numMessagesSent);
    cResult[13] = numMessagesSent;
    cResult[14] = rounded1;
    let tmp12 = rounded1;
  } else {
    tmp12 = cResult[14];
  }
  const intl = util.intl;
  const intl2 = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3056.UZbUtl, { numMinutes: rounded });
  const stats = tmp4.stats;
  const combined1 = "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
    const tmp20 = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, obj6);
    cResult[15] = tmp20;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[15];
  }
  if (cResult[16] === tmp4.text) {
    if (cResult[17] === rounded) {
      let tmp21 = cResult[18];
    }
    if (cResult[19] === tmp4.stat) {
      if (cResult[20] === combined1) {
        if (cResult[21] === tmp21) {
          let tmp23 = cResult[22];
        }
        const toLocaleLowerCaseResult = stringResult.toLocaleLowerCase();
        cResult[0] = numMessagesSent;
        cResult[1] = text;
        cResult[2] = tmp4.stat;
        ({ stats: tmp3[3], text } = tmp4);
        cResult[4] = text;
        cResult[5] = View;
        cResult[6] = View;
        cResult[7] = tmp12;
        cResult[8] = tmp12;
        cResult[9] = toLocaleLowerCaseResult;
        cResult[10] = true;
        cResult[11] = stats;
        cResult[12] = tmp23;
      }
    }
    const obj7 = { accessible: true, accessibilityLabel: combined1, style: tmp4.stat, children: null };
    const items2 = [tmp17, tmp21];
    obj7.children = items2;
    const tmp25 = timestampProducer(View, obj7);
    cResult[19] = tmp4.stat;
    cResult[20] = combined1;
    cResult[21] = tmp21;
    cResult[22] = tmp25;
    tmp23 = tmp25;
  }
  const tmp22 = hasOwnProperty(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp4.text, children: rounded });
  cResult[16] = tmp4.text;
  cResult[17] = rounded;
  cResult[18] = tmp22;
  tmp21 = tmp22;
  const obj8 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: rounded };
  stringResult = intl2.string(_modDef3056.wWKySP);
}) : (function CheckpointGuildStats(arg0) {
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_7();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const intl = util.intl;
  const intl2 = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3056.UZbUtl, { numMinutes: rounded });
  const obj = { style: tmp.stats, children: null };
  const obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.stat, children: null };
  const items = [hasOwnProperty(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded })];
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2), ];
  const obj5 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + intl2.string(_modDef3056.wWKySP).toLocaleLowerCase(), style: tmp.stat, children: null };
  const items2 = [hasOwnProperty(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded1 })];
  obj5.children = items2;
  items1[1] = timestampProducer(View, obj5);
  obj.children = items1;
  return timestampProducer(View, obj);
});