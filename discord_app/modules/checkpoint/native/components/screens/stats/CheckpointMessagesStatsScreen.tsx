// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3091 from "../../../../Checkpoint.messages.js";
import _modDef3123 from "../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import NumberAnimationDefault from "../../NumberAnimation.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import _modDef12691 from "../../../../../../../discord_assets/assets/checkpoint/messages.png.js";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const initialize = TOMBAW(504);
const util = TOMBAW(1128);
const ChatIcon = TOMBAW(8425);
const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
};
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.75 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointMessagesStatsScreen() {
      let TOMBAW = require;
      const cResult = c.c(69);
      const tmp3 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function h() {
          stats = stats.stats;
          let messages;
          if (stats != null) {
            messages = stats.messages;
          }
          return messages;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let numMessagesSent;
      if (stateFromStores != null) {
        numMessagesSent = stateFromStores.numMessagesSent;
      }
      if (cResult[2] === numMessagesSent) {
        let prop;
        if (stateFromStores != null) {
          prop = stateFromStores.numMessagesSentPercentile;
        }
        if (cResult[3] === prop) {
          if (cResult[4] === tmp3.container) {
            if (cResult[5] === tmp3.copy) {
              if (cResult[6] === tmp3.image) {
                if (cResult[7] === tmp3.imageContainer) {
                  if (cResult[8] === tmp3.title) {
                    if (cResult[9] === tmp3.titleText) {
                      let tmp10 = cResult[10];
                      let tmp11 = cResult[11];
                      let tmp12 = cResult[12];
                      let tmp13 = cResult[13];
                      let tmp14 = cResult[14];
                      let tmp15 = cResult[15];
                      let tmp16 = cResult[16];
                      let str = cResult[17];
                      let tmp17 = cResult[18];
                      let tmp18 = cResult[19];
                      let tmp19 = cResult[20];
                      let tmp20 = cResult[21];
                      let tmp21 = cResult[22];
                      let tmp22 = cResult[23];
                      let tmp23 = cResult[24];
                      let tmp24 = cResult[25];
                      let tmp25 = cResult[26];
                    }
                    if (cResult[33] === tmp10) {
                      if (cResult[34] === str) {
                        if (cResult[35] === tmp17) {
                          if (cResult[36] === tmp18) {
                            let tmp47 = cResult[37];
                          }
                          if (cResult[38] === tmp11) {
                            if (cResult[39] === tmp47) {
                              if (cResult[40] === tmp19) {
                                if (cResult[41] === tmp20) {
                                  let tmp50 = cResult[42];
                                }
                                const _HermesInternal = HermesInternal;
                                const combined = "" + tmp15 + " " + tmp24;
                                if (cResult[43] !== tmp15) {
                                  const obj2 = { end: tmp15 };
                                  const tmp57 = timestampProducer(NumberAnimationDefault, obj2);
                                  cResult[43] = tmp15;
                                  cResult[44] = tmp57;
                                  let tmp54 = tmp57;
                                } else {
                                  tmp54 = cResult[44];
                                }
                                if (cResult[45] === tmp3.number) {
                                  if (cResult[46] === combined) {
                                    if (cResult[47] === tmp54) {
                                      let tmp58 = cResult[48];
                                    }
                                    if (cResult[49] === tmp15) {
                                      if (cResult[50] === tmp25) {
                                        if (cResult[52] === tmp16) {
                                          if (cResult[53] === tmp62) {
                                            let tmp67 = cResult[54];
                                          }
                                          if (cResult[55] === tmp12) {
                                            if (cResult[56] === tmp50) {
                                              if (cResult[57] === tmp58) {
                                                if (cResult[58] === tmp67) {
                                                  if (cResult[59] === tmp21) {
                                                    let tmp71 = cResult[60];
                                                  }
                                                  if (cResult[61] === tmp13) {
                                                    if (cResult[62] === tmp71) {
                                                      if (cResult[63] === tmp22) {
                                                        if (cResult[64] === tmp23) {
                                                          let tmp74 = cResult[65];
                                                        }
                                                        if (cResult[66] === tmp14) {
                                                          if (cResult[67] === tmp74) {
                                                            let tmp77 = cResult[68];
                                                          }
                                                          return tmp77;
                                                        }
                                                        const obj3 = { children: tmp74 };
                                                        const tmp79 = timestampProducer(tmp14, obj3);
                                                        cResult[66] = tmp14;
                                                        cResult[67] = tmp74;
                                                        cResult[68] = tmp79;
                                                        tmp77 = tmp79;
                                                      }
                                                    }
                                                  }
                                                  const obj4 = { style: tmp22, children: null };
                                                  const items1 = [tmp23, tmp71];
                                                  obj4.children = items1;
                                                  const tmp76 = React5(tmp13, obj4);
                                                  cResult[61] = tmp13;
                                                  cResult[62] = tmp71;
                                                  cResult[63] = tmp22;
                                                  cResult[64] = tmp23;
                                                  cResult[65] = tmp76;
                                                  tmp74 = tmp76;
                                                }
                                              }
                                            }
                                          }
                                          const obj5 = { style: tmp21, children: null };
                                          const items2 = [tmp50, tmp58, tmp67];
                                          obj5.children = items2;
                                          const tmp73 = React5(tmp12, obj5);
                                          cResult[55] = tmp12;
                                          cResult[56] = tmp50;
                                          cResult[57] = tmp58;
                                          cResult[58] = tmp67;
                                          cResult[59] = tmp21;
                                          cResult[60] = tmp73;
                                          tmp71 = tmp73;
                                        }
                                        const obj6 = {
                                          variant: "heading-lg/medium",
                                          accessibilityLabel: tmp16,
                                          children: cResult[51],
                                        };
                                        const tmp70 = timestampProducer(CheckpointTextDefault, obj6);
                                        cResult[52] = tmp16;
                                        cResult[53] = cResult[51];
                                        cResult[54] = tmp70;
                                        tmp67 = tmp70;
                                      }
                                    }
                                    if (null != tmp25) {
                                      const intl4 = util.intl;
                                      TOMBAW = _modDef3123.TOMBAW;
                                      const obj7 = {
                                        numMessages: tmp15,
                                        percent: tmp25,
                                        percentHook(children, arg1) {
                                          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
                                        },
                                      };
                                      let formatResult = intl4.format(TOMBAW, obj7);
                                    } else {
                                      const intl3 = util.intl;
                                      const obj8 = { numMessages: tmp15 };
                                      formatResult = intl3.format(_modDef3123.cYCqz8, obj8);
                                    }
                                    cResult[49] = tmp15;
                                    cResult[50] = tmp25;
                                    cResult[51] = formatResult;
                                  }
                                }
                                const obj9 = {
                                  accessible: true,
                                  accessibilityLabel: combined,
                                  style: tmp3.number,
                                  children: tmp54,
                                };
                                const tmp61 = timestampProducer(View, obj9);
                                cResult[45] = tmp3.number;
                                cResult[46] = combined;
                                cResult[47] = tmp54;
                                cResult[48] = tmp61;
                                tmp58 = tmp61;
                              }
                            }
                          }
                          const obj10 = { style: tmp19, children: null };
                          const items3 = [tmp20, tmp47];
                          obj10.children = items3;
                          const tmp52 = React5(tmp11, obj10);
                          cResult[38] = tmp11;
                          cResult[39] = tmp47;
                          cResult[40] = tmp19;
                          cResult[41] = tmp20;
                          cResult[42] = tmp52;
                          tmp50 = tmp52;
                        }
                      }
                    }
                    const obj11 = { variant: str, style: tmp17, children: tmp18 };
                    const tmp49 = timestampProducer(tmp10, obj11);
                    cResult[33] = tmp10;
                    cResult[34] = str;
                    cResult[35] = tmp17;
                    cResult[36] = tmp18;
                    cResult[37] = tmp49;
                    tmp47 = tmp49;
                  }
                }
              }
            }
          }
        }
      }
      let num3;
      if (stateFromStores != null) {
        num3 = stateFromStores.numMessagesSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      const rounded = Math.round(num3);
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.numMessagesSentPercentile;
      }
      let bound = null;
      if (null != prop1) {
        bound = null;
        if (prop1 >= 50) {
          const _Math = Math;
          const _Math2 = Math;
          bound = Math.max(1, Math.ceil(100 - prop1));
        }
      }
      const intl = util.intl;
      const stringResult = intl.string(_modDef3091.wWKySP);
      if (null != bound) {
        const intl2 = util.intl;
        const obj12 = {
          numMessages: rounded,
          percent: bound,
          percentHook(arg0) {
            return arg0;
          },
        };
        const formatToPlainStringResult = intl2.formatToPlainString(_modDef3123.TOMBAW, obj12);
      }
      const tmp29Result = CheckpointScreenDefault;
      const container = tmp3.container;
      if (cResult[27] !== tmp3.image) {
        const obj13 = { uri: _modDef12691, style: tmp3.image };
        const tmp36 = timestampProducer(CheckpointApngPlayerDefault, obj13);
        cResult[27] = tmp3.image;
        cResult[28] = tmp36;
        let tmp33 = tmp36;
        const tmp29Result3 = CheckpointApngPlayerDefault;
      } else {
        tmp33 = cResult[28];
      }
      if (cResult[29] === tmp3.imageContainer) {
        if (cResult[30] === tmp33) {
          let tmp37 = cResult[31];
        }
        ({ copy, title } = tmp3);
        const _Symbol = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          const obj14 = { size: "xs", color: CHECKPOINT_PRIMARY };
          const tmp42 = timestampProducer(ChatIcon.ChatIcon, obj14);
          cResult[32] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[32];
        }
        const tmp29Result4 = CheckpointTextDefault;
        const titleText = tmp3.titleText;
        const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
        let numMessagesSent1;
        if (stateFromStores != null) {
          numMessagesSent1 = stateFromStores.numMessagesSent;
        }
        cResult[2] = numMessagesSent1;
        let prop2;
        if (stateFromStores != null) {
          prop2 = stateFromStores.numMessagesSentPercentile;
        }
        cResult[3] = prop2;
        cResult[4] = tmp3.container;
        cResult[5] = tmp3.copy;
        cResult[6] = tmp3.image;
        cResult[7] = tmp3.imageContainer;
        cResult[8] = tmp3.title;
        cResult[9] = tmp3.titleText;
        cResult[10] = tmp29Result4;
        cResult[11] = View;
        cResult[12] = View;
        cResult[13] = View;
        cResult[14] = tmp29Result;
        cResult[15] = rounded;
        cResult[16] = formatToPlainStringResult;
        cResult[17] = "heading-md/extrabold";
        cResult[18] = titleText;
        cResult[19] = toLocaleUpperCaseResult;
        cResult[20] = title;
        cResult[21] = tmp39;
        cResult[22] = copy;
        cResult[23] = container;
        cResult[24] = tmp37;
        cResult[25] = stringResult;
        cResult[26] = bound;
        tmp25 = bound;
        tmp24 = stringResult;
        tmp23 = tmp37;
        tmp22 = container;
        tmp21 = copy;
        tmp20 = tmp39;
        tmp19 = title;
        tmp18 = toLocaleUpperCaseResult;
        tmp17 = titleText;
        str = "heading-md/extrabold";
        tmp16 = formatToPlainStringResult;
        tmp15 = rounded;
        tmp14 = tmp29Result;
        tmp13 = View;
        tmp12 = View;
        tmp11 = View;
        tmp10 = tmp29Result4;
      }
      const tmp38 = timestampProducer(View, { style: tmp3.imageContainer, children: tmp33 });
      cResult[29] = tmp3.imageContainer;
      cResult[30] = tmp33;
      cResult[31] = tmp38;
      tmp37 = tmp38;
      const TOMBAWResult = initialize;
      const obj15 = { style: tmp3.imageContainer, children: tmp33 };
    }
  : function CheckpointMessagesStatsScreen() {
      const tmp = closure_8();
      const items = [CheckpointStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        stats = stats.stats;
        let messages;
        if (stats != null) {
          messages = stats.messages;
        }
        return messages;
      });
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.numMessagesSent;
      }
      if (num == null) {
        num = 0;
      }
      const rounded = Math.round(num);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.numMessagesSentPercentile;
      }
      let bound = null;
      if (null != prop) {
        bound = null;
        if (prop >= 50) {
          const _Math = Math;
          const _Math2 = Math;
          bound = Math.max(1, Math.ceil(100 - prop));
        }
      }
      const intl = util.intl;
      const stringResult = intl.string(_modDef3091.wWKySP);
      let formatToPlainStringResult;
      if (null != bound) {
        const intl2 = util.intl;
        const obj2 = {
          numMessages: rounded,
          percent: bound,
          percentHook(arg0) {
            return arg0;
          },
        };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3123.TOMBAW, obj2);
      }
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { style: tmp.imageContainer, children: null };
      const obj5 = { uri: null, style: null };
      const tmp8Result = CheckpointScreenDefault;
      obj5.uri = _modDef12691;
      obj5.style = tmp.image;
      obj4.children = timestampProducer(CheckpointApngPlayerDefault, obj5);
      const items1 = [timestampProducer(View, obj4)];
      const obj6 = { style: tmp.copy, children: null };
      const obj7 = { style: tmp.title, children: null };
      const items2 = [timestampProducer(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj9 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp8Result4 = CheckpointApngPlayerDefault;
      obj9.children = stringResult.toLocaleUpperCase();
      items2[1] = timestampProducer(CheckpointTextDefault, obj9);
      obj7.children = items2;
      const items3 = [React5(View, obj7), ,];
      const tmp8Result5 = CheckpointTextDefault;
      items3[1] = timestampProducer(View, {
        accessible: true,
        accessibilityLabel: "" + rounded + " " + stringResult,
        style: tmp.number,
        children: timestampProducer(NumberAnimationDefault, { end: rounded }),
      });
      const obj11 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      const obj10 = {
        accessible: true,
        accessibilityLabel: "" + rounded + " " + stringResult,
        style: tmp.number,
        children: timestampProducer(NumberAnimationDefault, { end: rounded }),
      };
      if (null != bound) {
        const intl4 = util.intl;
        const obj12 = {
          numMessages: rounded,
          percent: bound,
          percentHook(children, arg1) {
            return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        let formatResult = intl4.format(_modDef3123.TOMBAW, obj12);
      } else {
        const intl3 = util.intl;
        const obj13 = { numMessages: rounded };
        formatResult = intl3.format(_modDef3123.cYCqz8, obj13);
      }
      const obj14 = { children: null };
      obj11.children = formatResult;
      items3[2] = timestampProducer(CheckpointTextDefault, obj11);
      obj6.children = items3;
      items1[1] = React5(View, obj6);
      obj3.children = items1;
      obj14.children = React5(View, obj3);
      return timestampProducer(tmp8Result, obj14);
    };
