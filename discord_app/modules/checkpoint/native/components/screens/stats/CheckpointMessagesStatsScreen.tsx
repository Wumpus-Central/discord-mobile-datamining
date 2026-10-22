// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3056 from "../../../../Checkpoint.messages.js";
import _modDef3088 from "../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import ChatIcon from "../../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

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
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
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
      const cResult = c.c(57);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function p() {
          const stats = CheckpointStore.stats;
          let messages;
          if (stats != null) {
            messages = stats.messages;
          }
          return messages;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CheckpointStore];
        const fn2 = function b() {
          const globalStats = CheckpointStore.globalStats;
          let numWordsSent;
          if (globalStats != null) {
            const messages = globalStats.messages;
            if (messages != null) {
              numWordsSent = messages.numWordsSent;
            }
          }
          return numWordsSent;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp9, tmp10);
      let numMessagesSent;
      if (stateFromStores != null) {
        numMessagesSent = stateFromStores.numMessagesSent;
      }
      if (cResult[4] === numMessagesSent) {
        let prop;
        if (stateFromStores != null) {
          prop = stateFromStores.numMessagesSentPercentile;
        }
        if (cResult[5] === prop) {
          if (cResult[6] === stateFromStores1) {
            if (cResult[7] === tmp4.container) {
              if (cResult[8] === tmp4.copy) {
                if (cResult[9] === tmp4.image) {
                  if (cResult[10] === tmp4.imageContainer) {
                    if (cResult[11] === tmp4.number) {
                      if (cResult[12] === tmp4.title) {
                        if (cResult[13] === tmp4.titleText) {
                          let tmp15 = cResult[14];
                          let tmp16 = cResult[15];
                          let tmp17 = cResult[16];
                          let tmp18 = cResult[17];
                          let tmp19 = cResult[18];
                          let tmp20 = cResult[19];
                          let str = cResult[20];
                          let tmp21 = cResult[21];
                          let tmp22 = cResult[22];
                          let tmp23 = cResult[23];
                          let tmp24 = cResult[24];
                          let tmp25 = cResult[25];
                        }
                        if (cResult[38] === tmp15) {
                          if (cResult[39] === str) {
                            if (cResult[40] === tmp21) {
                              if (cResult[41] === tmp22) {
                                let tmp61 = cResult[42];
                              }
                              if (cResult[43] === tmp16) {
                                if (cResult[44] === tmp61) {
                                  if (cResult[45] === tmp23) {
                                    if (cResult[46] === tmp24) {
                                      if (cResult[47] === tmp25) {
                                        let tmp64 = cResult[48];
                                      }
                                      if (cResult[49] === tmp17) {
                                        if (cResult[50] === tmp19) {
                                          if (cResult[51] === tmp20) {
                                            if (cResult[52] === tmp64) {
                                              let tmp67 = cResult[53];
                                            }
                                            if (cResult[54] === tmp18) {
                                              if (cResult[55] === tmp67) {
                                                let tmp70 = cResult[56];
                                              }
                                              return tmp70;
                                            }
                                            const obj2 = { children: tmp67 };
                                            const tmp72 = timestampProducer(tmp18, obj2);
                                            cResult[54] = tmp18;
                                            cResult[55] = tmp67;
                                            cResult[56] = tmp72;
                                            tmp70 = tmp72;
                                          }
                                        }
                                      }
                                      const obj3 = { style: tmp19, children: null };
                                      const items2 = [tmp20, tmp64];
                                      obj3.children = items2;
                                      const tmp69 = React5(tmp17, obj3);
                                      cResult[49] = tmp17;
                                      cResult[50] = tmp19;
                                      cResult[51] = tmp20;
                                      cResult[52] = tmp64;
                                      cResult[53] = tmp69;
                                      tmp67 = tmp69;
                                    }
                                  }
                                }
                              }
                              const obj4 = { style: tmp23, children: null };
                              const items3 = [tmp24, tmp25, tmp61];
                              obj4.children = items3;
                              const tmp66 = React5(tmp16, obj4);
                              cResult[43] = tmp16;
                              cResult[44] = tmp61;
                              cResult[45] = tmp23;
                              cResult[46] = tmp24;
                              cResult[47] = tmp25;
                              cResult[48] = tmp66;
                              tmp64 = tmp66;
                            }
                          }
                        }
                        const obj5 = { variant: str, accessibilityLabel: tmp21, children: tmp22 };
                        const tmp63 = timestampProducer(tmp15, obj5);
                        cResult[38] = tmp15;
                        cResult[39] = str;
                        cResult[40] = tmp21;
                        cResult[41] = tmp22;
                        cResult[42] = tmp63;
                        tmp61 = tmp63;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let num5;
      if (stateFromStores != null) {
        num5 = stateFromStores.numMessagesSent;
      }
      if (num5 == null) {
        num5 = 0;
      }
      const rounded = Math.round(num5);
      const tmpResult3 = initialize;
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.numMessagesSentPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop1);
      const intl = util.intl;
      if (rounded <= 0 && null != stateFromStores1) {
        let wWKySP = _modDef3088["2BuyVC"];
        let tmp31 = importDefault;
      } else {
        wWKySP = _modDef3056.wWKySP;
        tmp31 = importDefault;
      }
      const stringResult = intl.string(wWKySP);
      if (!(rounded <= 0 && null != stateFromStores1)) {
        if (null != checkpointTopPercent) {
          const intl2 = util.intl;
          const obj6 = {
            numMessages: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          const formatToPlainStringResult = intl2.formatToPlainString(tmp31(3088).TOMBAW, obj6);
        }
      }
      const tmp31Result = tmp31(12895);
      const container = tmp4.container;
      if (cResult[26] !== tmp4.image) {
        const obj7 = { uri: tmp31(12906), style: tmp4.image };
        const tmp38 = timestampProducer(tmp31(12898), obj7);
        cResult[26] = tmp4.image;
        cResult[27] = tmp38;
        let tmp35 = tmp38;
        const tmp31Result3 = tmp31(12898);
      } else {
        tmp35 = cResult[27];
      }
      if (cResult[28] === tmp4.imageContainer) {
        if (cResult[29] === tmp35) {
          let tmp39 = cResult[30];
        }
        const copy = tmp4.copy;
        const _Symbol = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
          const tmp44 = timestampProducer(ChatIcon.ChatIcon, obj8);
          cResult[31] = tmp44;
          let tmp41 = tmp44;
        } else {
          tmp41 = cResult[31];
        }
        const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
        if (cResult[32] === tmp4.titleText) {
          if (cResult[33] === toLocaleUpperCaseResult) {
            let tmp46 = cResult[34];
          }
          if (cResult[35] === tmp4.title) {
            if (cResult[36] === tmp46) {
              let tmp49 = cResult[37];
            }
            if (tmp27) {
              const obj9 = { value: stateFromStores1 };
              let tmp52Result = timestampProducer(tmp31(12900), obj9);
            } else {
              const obj10 = { accessible: true, accessibilityLabel: null, style: null, children: null };
              const _HermesInternal = HermesInternal;
              obj10.accessibilityLabel = "" + rounded + " " + stringResult;
              obj10.style = tmp4.number;
              const obj11 = { end: rounded };
              obj10.children = timestampProducer(tmp31(12901), obj11);
              tmp52Result = timestampProducer(View, obj10);
            }
            const tmp31Result4 = tmp31(12893);
            if (tmp27) {
              const intl5 = util.intl;
              const obj12 = { numWords: null };
              const _Intl = Intl;
              const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, {
                notation: "compact",
                compactDisplay: "long",
              });
              obj12.numWords = numberFormat.format(stateFromStores1);
              let formatToPlainStringResult1 = intl5.formatToPlainString(tmp31(3088).bAxEs2, obj12);
            } else if (null != checkpointTopPercent) {
              const intl4 = util.intl;
              const obj13 = {
                numMessages: rounded,
                percent: checkpointTopPercent,
                percentHook(children, arg1) {
                  return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
                },
              };
              formatToPlainStringResult1 = intl4.format(tmp31(3088).TOMBAW, obj13);
            } else {
              const intl3 = util.intl;
              const obj14 = { numMessages: rounded };
              formatToPlainStringResult1 = intl3.format(tmp31(3088).cYCqz8, obj14);
            }
            let numMessagesSent1;
            if (stateFromStores != null) {
              numMessagesSent1 = stateFromStores.numMessagesSent;
            }
            cResult[4] = numMessagesSent1;
            let prop2;
            if (stateFromStores != null) {
              prop2 = stateFromStores.numMessagesSentPercentile;
            }
            cResult[5] = prop2;
            cResult[6] = stateFromStores1;
            cResult[7] = tmp4.container;
            cResult[8] = tmp4.copy;
            cResult[9] = tmp4.image;
            cResult[10] = tmp4.imageContainer;
            cResult[11] = tmp4.number;
            cResult[12] = tmp4.title;
            cResult[13] = tmp4.titleText;
            cResult[14] = tmp31Result4;
            cResult[15] = View;
            cResult[16] = View;
            cResult[17] = tmp31Result;
            cResult[18] = container;
            cResult[19] = tmp39;
            cResult[20] = "heading-lg/medium";
            cResult[21] = formatToPlainStringResult;
            cResult[22] = formatToPlainStringResult1;
            cResult[23] = copy;
            cResult[24] = tmp49;
            cResult[25] = tmp52Result;
            tmp25 = tmp52Result;
            tmp24 = tmp49;
            tmp23 = copy;
            tmp22 = formatToPlainStringResult1;
            tmp21 = formatToPlainStringResult;
            str = "heading-lg/medium";
            tmp20 = tmp39;
            tmp19 = container;
            tmp18 = tmp31Result;
            tmp17 = View;
            tmp16 = View;
            tmp15 = tmp31Result4;
          }
          const obj15 = { style: tmp4.title, children: null };
          const items4 = [tmp41, tmp46];
          obj15.children = items4;
          const tmp51 = React5(View, obj15);
          cResult[35] = tmp4.title;
          cResult[36] = tmp46;
          cResult[37] = tmp51;
          tmp49 = tmp51;
        }
        const obj16 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: toLocaleUpperCaseResult };
        const tmp48 = timestampProducer(tmp31(12893), obj16);
        cResult[32] = tmp4.titleText;
        cResult[33] = toLocaleUpperCaseResult;
        cResult[34] = tmp48;
        tmp46 = tmp48;
      }
      const tmp40 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp35 });
      cResult[28] = tmp4.imageContainer;
      cResult[29] = tmp35;
      cResult[30] = tmp40;
      tmp39 = tmp40;
      const obj17 = { style: tmp4.imageContainer, children: tmp35 };
      const tmpResult4 = CheckpointStatsUtils;
    }
  : function CheckpointMessagesStatsScreen() {
      const tmp = closure_8();
      const items = [CheckpointStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        const stats = CheckpointStore.stats;
        let messages;
        if (stats != null) {
          messages = stats.messages;
        }
        return messages;
      });
      const items1 = [CheckpointStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => {
        const globalStats = CheckpointStore.globalStats;
        let numWordsSent;
        if (globalStats != null) {
          const messages = globalStats.messages;
          if (messages != null) {
            numWordsSent = messages.numWordsSent;
          }
        }
        return numWordsSent;
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
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
      const intl = util.intl;
      if (rounded <= 0 && null != stateFromStores1) {
        let wWKySP = _modDef3088["2BuyVC"];
        let tmp11 = importDefault;
      } else {
        wWKySP = _modDef3056.wWKySP;
        tmp11 = importDefault;
      }
      const stringResult = intl.string(wWKySP);
      let formatToPlainStringResult;
      if (!(rounded <= 0 && null != stateFromStores1)) {
        if (null != checkpointTopPercent) {
          const intl2 = util.intl;
          const obj3 = {
            numMessages: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          formatToPlainStringResult = intl2.formatToPlainString(tmp11(3088).TOMBAW, obj3);
        }
      }
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { style: tmp.imageContainer, children: null };
      const tmp2Result = CheckpointStatsUtils;
      const obj6 = { uri: null, style: null };
      const tmp11Result = tmp11(12895);
      obj6.uri = tmp11(12906);
      obj6.style = tmp.image;
      obj5.children = timestampProducer(tmp11(12898), obj6);
      const items2 = [timestampProducer(View, obj5)];
      const obj7 = { style: tmp.copy, children: null };
      const obj8 = { style: tmp.title, children: null };
      const items3 = [timestampProducer(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp11Result4 = tmp11(12898);
      obj10.children = stringResult.toLocaleUpperCase();
      items3[1] = timestampProducer(tmp11(12893), obj10);
      obj8.children = items3;
      const items4 = [React5(View, obj8), ,];
      if (rounded <= 0 && null != stateFromStores1) {
        const obj11 = { value: stateFromStores1 };
        let tmp13Result = timestampProducer(tmp11(12900), obj11);
      } else {
        const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj12.accessibilityLabel = "" + rounded + " " + stringResult;
        obj12.style = tmp.number;
        const obj13 = { end: rounded };
        obj12.children = timestampProducer(tmp11(12901), obj13);
        tmp13Result = timestampProducer(View, obj12);
      }
      items4[1] = tmp13Result;
      const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      const tmp11Result5 = tmp11(12893);
      if (rounded <= 0 && null != stateFromStores1) {
        const intl5 = util.intl;
        const obj15 = { numWords: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, {
          notation: "compact",
          compactDisplay: "long",
        });
        obj15.numWords = numberFormat.format(stateFromStores1);
        let formatToPlainStringResult1 = intl5.formatToPlainString(tmp11(3088).bAxEs2, obj15);
      } else if (null != checkpointTopPercent) {
        const intl4 = util.intl;
        const obj16 = {
          numMessages: rounded,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
            return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        formatToPlainStringResult1 = intl4.format(tmp11(3088).TOMBAW, obj16);
      } else {
        const intl3 = util.intl;
        const obj17 = { numMessages: rounded };
        formatToPlainStringResult1 = intl3.format(tmp11(3088).cYCqz8, obj17);
      }
      const obj18 = { children: null };
      obj14.children = formatToPlainStringResult1;
      items4[2] = timestampProducer(tmp11(12893), obj14);
      obj7.children = items4;
      items2[1] = React5(View, obj7);
      obj4.children = items2;
      obj18.children = React5(View, obj4);
      return timestampProducer(tmp11Result, obj18);
    };
