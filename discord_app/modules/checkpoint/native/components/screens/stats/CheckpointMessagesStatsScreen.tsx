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
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import NumberAnimationDefault from "../../NumberAnimation.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import _modDef12873 from "../../../../../../../discord_assets/assets/checkpoint/messages.png.js";
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
      const cResult = c.c(53);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function u() {
          stats = stats.stats;
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
          if (cResult[4] === tmp4.container) {
            if (cResult[5] === tmp4.copy) {
              if (cResult[6] === tmp4.image) {
                if (cResult[7] === tmp4.imageContainer) {
                  if (cResult[8] === tmp4.number) {
                    if (cResult[9] === tmp4.title) {
                      if (cResult[10] === tmp4.titleText) {
                        let tmp11 = cResult[11];
                        let tmp12 = cResult[12];
                        let tmp13 = cResult[13];
                        let tmp14 = cResult[14];
                        let str = cResult[15];
                        let tmp15 = cResult[16];
                        let tmp16 = cResult[17];
                        let tmp17 = cResult[18];
                        let tmp18 = cResult[19];
                        let tmp19 = cResult[20];
                        let tmp20 = cResult[21];
                        let tmp21 = cResult[22];
                      }
                      if (cResult[34] === tmp11) {
                        if (cResult[35] === str) {
                          if (cResult[36] === tmp15) {
                            if (cResult[37] === tmp16) {
                              let tmp52 = cResult[38];
                            }
                            if (cResult[39] === tmp12) {
                              if (cResult[40] === tmp52) {
                                if (cResult[41] === tmp17) {
                                  if (cResult[42] === tmp18) {
                                    if (cResult[43] === tmp19) {
                                      let tmp55 = cResult[44];
                                    }
                                    if (cResult[45] === tmp13) {
                                      if (cResult[46] === tmp55) {
                                        if (cResult[47] === tmp20) {
                                          if (cResult[48] === tmp21) {
                                            let tmp58 = cResult[49];
                                          }
                                          if (cResult[50] === tmp14) {
                                            if (cResult[51] === tmp58) {
                                              let tmp61 = cResult[52];
                                            }
                                            return tmp61;
                                          }
                                          const obj2 = { children: tmp58 };
                                          const tmp63 = timestampProducer(tmp14, obj2);
                                          cResult[50] = tmp14;
                                          cResult[51] = tmp58;
                                          cResult[52] = tmp63;
                                          tmp61 = tmp63;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp20, children: null };
                                    const items1 = [tmp21, tmp55];
                                    obj3.children = items1;
                                    const tmp60 = React5(tmp13, obj3);
                                    cResult[45] = tmp13;
                                    cResult[46] = tmp55;
                                    cResult[47] = tmp20;
                                    cResult[48] = tmp21;
                                    cResult[49] = tmp60;
                                    tmp58 = tmp60;
                                  }
                                }
                              }
                            }
                            const obj4 = { style: tmp17, children: null };
                            const items2 = [tmp18, tmp19, tmp52];
                            obj4.children = items2;
                            const tmp57 = React5(tmp12, obj4);
                            cResult[39] = tmp12;
                            cResult[40] = tmp52;
                            cResult[41] = tmp17;
                            cResult[42] = tmp18;
                            cResult[43] = tmp19;
                            cResult[44] = tmp57;
                            tmp55 = tmp57;
                          }
                        }
                      }
                      const obj5 = { variant: str, accessibilityLabel: tmp15, children: tmp16 };
                      const tmp54 = timestampProducer(tmp11, obj5);
                      cResult[34] = tmp11;
                      cResult[35] = str;
                      cResult[36] = tmp15;
                      cResult[37] = tmp16;
                      cResult[38] = tmp54;
                      tmp52 = tmp54;
                    }
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
      const tmpResult = initialize;
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.numMessagesSentPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop1);
      const intl = util.intl;
      const stringResult = intl.string(_modDef3056.wWKySP);
      if (null != checkpointTopPercent) {
        const intl2 = util.intl;
        const obj6 = {
          numMessages: rounded,
          percent: checkpointTopPercent,
          percentHook(arg0) {
            return arg0;
          },
        };
        const formatToPlainStringResult = intl2.formatToPlainString(_modDef3088.TOMBAW, obj6);
      }
      const tmp25Result = CheckpointScreenDefault;
      const container = tmp4.container;
      if (cResult[23] !== tmp4.image) {
        const obj7 = { uri: _modDef12873, style: tmp4.image };
        const tmp32 = timestampProducer(CheckpointApngPlayerDefault, obj7);
        cResult[23] = tmp4.image;
        cResult[24] = tmp32;
        let tmp29 = tmp32;
        const tmp25Result4 = CheckpointApngPlayerDefault;
      } else {
        tmp29 = cResult[24];
      }
      if (cResult[25] === tmp4.imageContainer) {
        if (cResult[26] === tmp29) {
          let tmp33 = cResult[27];
        }
        const copy = tmp4.copy;
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
          const tmp38 = timestampProducer(ChatIcon.ChatIcon, obj8);
          cResult[28] = tmp38;
          let tmp35 = tmp38;
        } else {
          tmp35 = cResult[28];
        }
        if (cResult[29] !== tmp4.titleText) {
          const obj9 = {
            variant: "heading-md/extrabold",
            style: tmp4.titleText,
            children: stringResult.toLocaleUpperCase(),
          };
          const tmp42 = timestampProducer(CheckpointTextDefault, obj9);
          cResult[29] = tmp4.titleText;
          cResult[30] = tmp42;
          let tmp39 = tmp42;
          const tmp25Result5 = CheckpointTextDefault;
        } else {
          tmp39 = cResult[30];
        }
        if (cResult[31] === tmp4.title) {
          if (cResult[32] === tmp39) {
            let tmp43 = cResult[33];
          }
          const obj10 = { accessible: true, accessibilityLabel: null, style: null, children: null };
          const _HermesInternal = HermesInternal;
          obj10.accessibilityLabel = "" + rounded + " " + stringResult;
          obj10.style = tmp4.number;
          const obj11 = { end: rounded };
          obj10.children = timestampProducer(NumberAnimationDefault, obj11);
          const tmp47 = timestampProducer(View, obj10);
          const tmp25Result6 = CheckpointTextDefault;
          if (null != checkpointTopPercent) {
            const intl4 = util.intl;
            const obj12 = {
              numMessages: rounded,
              percent: checkpointTopPercent,
              percentHook(children, arg1) {
                return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
              },
            };
            let formatResult = intl4.format(_modDef3088.TOMBAW, obj12);
          } else {
            const intl3 = util.intl;
            const obj13 = { numMessages: rounded };
            formatResult = intl3.format(_modDef3088.cYCqz8, obj13);
          }
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
          cResult[4] = tmp4.container;
          cResult[5] = tmp4.copy;
          cResult[6] = tmp4.image;
          cResult[7] = tmp4.imageContainer;
          cResult[8] = tmp4.number;
          cResult[9] = tmp4.title;
          cResult[10] = tmp4.titleText;
          cResult[11] = tmp25Result6;
          cResult[12] = View;
          cResult[13] = View;
          cResult[14] = tmp25Result;
          cResult[15] = "heading-lg/medium";
          cResult[16] = formatToPlainStringResult;
          cResult[17] = formatResult;
          cResult[18] = copy;
          cResult[19] = tmp43;
          cResult[20] = tmp47;
          cResult[21] = container;
          cResult[22] = tmp33;
          tmp21 = tmp33;
          tmp20 = container;
          tmp19 = tmp47;
          tmp18 = tmp43;
          tmp17 = copy;
          tmp16 = formatResult;
          tmp15 = formatToPlainStringResult;
          str = "heading-lg/medium";
          tmp14 = tmp25Result;
          tmp13 = View;
          tmp12 = View;
          tmp11 = tmp25Result6;
        }
        const obj14 = { style: tmp4.title, children: null };
        const items3 = [tmp35, tmp39];
        obj14.children = items3;
        const tmp45 = React5(View, obj14);
        cResult[31] = tmp4.title;
        cResult[32] = tmp39;
        cResult[33] = tmp45;
        tmp43 = tmp45;
      }
      const tmp34 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp29 });
      cResult[25] = tmp4.imageContainer;
      cResult[26] = tmp29;
      cResult[27] = tmp34;
      tmp33 = tmp34;
      const obj15 = { style: tmp4.imageContainer, children: tmp29 };
      const tmpResult2 = CheckpointStatsUtils;
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
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
      const intl = util.intl;
      const stringResult = intl.string(_modDef3056.wWKySP);
      let formatToPlainStringResult;
      if (null != checkpointTopPercent) {
        const intl2 = util.intl;
        const obj2 = {
          numMessages: rounded,
          percent: checkpointTopPercent,
          percentHook(arg0) {
            return arg0;
          },
        };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3088.TOMBAW, obj2);
      }
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { style: tmp.imageContainer, children: null };
      const tmp2Result = CheckpointStatsUtils;
      const obj5 = { uri: null, style: null };
      const tmp8Result = CheckpointScreenDefault;
      obj5.uri = _modDef12873;
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
      if (null != checkpointTopPercent) {
        const intl4 = util.intl;
        const obj12 = {
          numMessages: rounded,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
            return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        let formatResult = intl4.format(_modDef3088.TOMBAW, obj12);
      } else {
        const intl3 = util.intl;
        const obj13 = { numMessages: rounded };
        formatResult = intl3.format(_modDef3088.cYCqz8, obj13);
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
