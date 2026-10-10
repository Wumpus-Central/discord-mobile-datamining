// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3086 from "../../../../Checkpoint.messages.js";
import CheckpointConstants from "../../../../CheckpointConstants.tsx";
import MicrophoneIcon from "../../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
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
obj.image = { height: "100%", aspectRatio: 1 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointVoiceStatsScreen() {
      const cResult = c.c(48);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function h() {
          stats = stats.stats;
          let voice;
          if (stats != null) {
            voice = stats.voice;
          }
          return voice;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp4.copy) {
          if (cResult[4] === tmp4.image) {
            if (cResult[5] === tmp4.imageContainer) {
              if (cResult[6] === tmp4.number) {
                if (cResult[7] === tmp4.title) {
                  if (cResult[8] === tmp4.titleText) {
                    let totalVoiceMinutes;
                    if (stateFromStores != null) {
                      totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
                    }
                    if (cResult[9] === totalVoiceMinutes) {
                      let prop;
                      if (stateFromStores != null) {
                        prop = stateFromStores.totalVoiceMinutesPercentile;
                      }
                      if (cResult[10] === prop) {
                        let tmp12 = cResult[11];
                        let tmp13 = cResult[12];
                        let tmp14 = cResult[13];
                        let tmp15 = cResult[14];
                        let str = cResult[15];
                        let tmp16 = cResult[16];
                        let tmp17 = cResult[17];
                        let tmp18 = cResult[18];
                        let tmp19 = cResult[19];
                        let tmp20 = cResult[20];
                        let tmp21 = cResult[21];
                        let tmp22 = cResult[22];
                      }
                      if (cResult[29] === tmp12) {
                        if (cResult[30] === str) {
                          if (cResult[31] === tmp16) {
                            if (cResult[32] === tmp17) {
                              let tmp52 = cResult[33];
                            }
                            if (cResult[34] === tmp13) {
                              if (cResult[35] === tmp52) {
                                if (cResult[36] === tmp18) {
                                  if (cResult[37] === tmp19) {
                                    if (cResult[38] === tmp20) {
                                      let tmp55 = cResult[39];
                                    }
                                    if (cResult[40] === tmp14) {
                                      if (cResult[41] === tmp55) {
                                        if (cResult[42] === tmp21) {
                                          if (cResult[43] === tmp22) {
                                            let tmp58 = cResult[44];
                                          }
                                          if (cResult[45] === tmp15) {
                                            if (cResult[46] === tmp58) {
                                              let tmp61 = cResult[47];
                                            }
                                            return tmp61;
                                          }
                                          const obj2 = { children: tmp58 };
                                          const tmp63 = timestampProducer(tmp15, obj2);
                                          cResult[45] = tmp15;
                                          cResult[46] = tmp58;
                                          cResult[47] = tmp63;
                                          tmp61 = tmp63;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp21, children: null };
                                    const items1 = [tmp22, tmp55];
                                    obj3.children = items1;
                                    const tmp60 = React5(tmp14, obj3);
                                    cResult[40] = tmp14;
                                    cResult[41] = tmp55;
                                    cResult[42] = tmp21;
                                    cResult[43] = tmp22;
                                    cResult[44] = tmp60;
                                    tmp58 = tmp60;
                                  }
                                }
                              }
                            }
                            const obj4 = { style: tmp18, children: null };
                            const items2 = [tmp19, tmp20, tmp52];
                            obj4.children = items2;
                            const tmp57 = React5(tmp13, obj4);
                            cResult[34] = tmp13;
                            cResult[35] = tmp52;
                            cResult[36] = tmp18;
                            cResult[37] = tmp19;
                            cResult[38] = tmp20;
                            cResult[39] = tmp57;
                            tmp55 = tmp57;
                          }
                        }
                      }
                      const obj5 = { variant: str, accessibilityLabel: tmp16, children: tmp17 };
                      const tmp54 = timestampProducer(tmp12, obj5);
                      cResult[29] = tmp12;
                      cResult[30] = str;
                      cResult[31] = tmp16;
                      cResult[32] = tmp17;
                      cResult[33] = tmp54;
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
        num3 = stateFromStores.totalVoiceMinutes;
      }
      if (num3 == null) {
        num3 = 0;
      }
      const rounded = Math.round(num3);
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.totalVoiceMinutesPercentile;
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
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3086["OBeYX/"]);
        let tmp28 = importDefault;
      } else {
        const obj6 = { numMinutes: rounded };
        stringResult = intl.formatToPlainString(_modDef3086.UZbUtl, obj6);
        tmp28 = importDefault;
      }
      if (rounded > 0) {
        if (null != bound) {
          const intl2 = util.intl;
          const obj7 = {
            numMinutes: rounded,
            percent: bound,
            percentHook(arg0) {
              return arg0;
            },
          };
          const formatToPlainStringResult = intl2.formatToPlainString(tmp28(3118).RqXsIs, obj7);
        }
      }
      const tmp28Result = tmp28(15998);
      const container = tmp4.container;
      if (cResult[23] !== tmp4.image) {
        const obj8 = { uri: tmp28(16001), style: tmp4.image };
        const tmp36 = timestampProducer(tmp28(16000), obj8);
        cResult[23] = tmp4.image;
        cResult[24] = tmp36;
        let tmp33 = tmp36;
        const tmp28Result4 = tmp28(16000);
      } else {
        tmp33 = cResult[24];
      }
      if (cResult[25] === tmp4.imageContainer) {
        if (cResult[26] === tmp33) {
          let tmp37 = cResult[27];
        }
        const copy = tmp4.copy;
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
          const tmp42 = timestampProducer(MicrophoneIcon.MicrophoneIcon, obj9);
          cResult[28] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[28];
        }
        const obj10 = { style: tmp4.title, children: null };
        const items3 = [tmp39];
        const obj11 = {
          variant: "heading-md/extrabold",
          style: tmp4.titleText,
          children: stringResult.toLocaleUpperCase(),
        };
        items3[1] = timestampProducer(tmp28(15996), obj11);
        obj10.children = items3;
        const tmp46 = React5(View, obj10);
        let tmp44Result = !tmp24;
        if (!tmp24) {
          const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
          const _HermesInternal = HermesInternal;
          obj12.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
          obj12.style = tmp4.number;
          const obj13 = { end: rounded };
          obj12.children = timestampProducer(tmp28(16002), obj13);
          tmp44Result = timestampProducer(View, obj12);
        }
        const tmp28Result6 = tmp28(15996);
        if (tmp24) {
          const intl5 = util.intl;
          let stringResult1 = intl5.string(tmp28(3086).MyO0sh);
        } else if (null != bound) {
          const intl4 = util.intl;
          const obj14 = {
            numMinutes: rounded,
            percent: bound,
            percentHook(children, arg1) {
              return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
            },
          };
          stringResult1 = intl4.format(tmp28(3118).RqXsIs, obj14);
        } else {
          const intl3 = util.intl;
          const obj15 = { numMinutes: rounded };
          stringResult1 = intl3.format(tmp28(3118).Y3poDW, obj15);
        }
        cResult[2] = tmp4.container;
        cResult[3] = tmp4.copy;
        cResult[4] = tmp4.image;
        cResult[5] = tmp4.imageContainer;
        cResult[6] = tmp4.number;
        cResult[7] = tmp4.title;
        cResult[8] = tmp4.titleText;
        let totalVoiceMinutes1;
        if (stateFromStores != null) {
          totalVoiceMinutes1 = stateFromStores.totalVoiceMinutes;
        }
        cResult[9] = totalVoiceMinutes1;
        let prop2;
        if (stateFromStores != null) {
          prop2 = stateFromStores.totalVoiceMinutesPercentile;
        }
        cResult[10] = prop2;
        cResult[11] = tmp28Result6;
        cResult[12] = View;
        cResult[13] = View;
        cResult[14] = tmp28Result;
        cResult[15] = "heading-lg/medium";
        cResult[16] = formatToPlainStringResult;
        cResult[17] = stringResult1;
        cResult[18] = copy;
        cResult[19] = tmp46;
        cResult[20] = tmp44Result;
        cResult[21] = container;
        cResult[22] = tmp37;
        tmp22 = tmp37;
        tmp21 = container;
        tmp20 = tmp44Result;
        tmp19 = tmp46;
        tmp18 = copy;
        tmp17 = stringResult1;
        tmp16 = formatToPlainStringResult;
        str = "heading-lg/medium";
        tmp15 = tmp28Result;
        tmp14 = View;
        tmp13 = View;
        tmp12 = tmp28Result6;
        const tmp28Result5 = tmp28(15996);
      }
      const tmp38 = timestampProducer(View, { style: tmp4.imageContainer, children: tmp33 });
      cResult[25] = tmp4.imageContainer;
      cResult[26] = tmp33;
      cResult[27] = tmp38;
      tmp37 = tmp38;
      const obj16 = { style: tmp4.imageContainer, children: tmp33 };
      const tmpResult = initialize;
    }
  : function CheckpointVoiceStatsScreen() {
      const tmp = closure_8();
      const items = [CheckpointStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        stats = stats.stats;
        let voice;
        if (stats != null) {
          voice = stats.voice;
        }
        return voice;
      });
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const rounded = Math.round(num);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
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
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3086["OBeYX/"]);
        let tmp10 = importDefault;
      } else {
        const obj2 = { numMinutes: rounded };
        stringResult = intl.formatToPlainString(_modDef3086.UZbUtl, obj2);
        tmp10 = importDefault;
      }
      let formatToPlainStringResult;
      if (rounded > 0) {
        if (null != bound) {
          const intl2 = util.intl;
          const obj3 = {
            numMinutes: rounded,
            percent: bound,
            percentHook(arg0) {
              return arg0;
            },
          };
          formatToPlainStringResult = intl2.formatToPlainString(tmp10(3118).RqXsIs, obj3);
        }
      }
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { style: tmp.imageContainer, children: null };
      const obj6 = { uri: null, style: null };
      const tmp10Result = tmp10(15998);
      obj6.uri = tmp10(16001);
      obj6.style = tmp.image;
      obj5.children = timestampProducer(tmp10(16000), obj6);
      const items1 = [timestampProducer(View, obj5)];
      const obj7 = { style: tmp.copy, children: null };
      const obj8 = { style: tmp.title, children: null };
      const items2 = [timestampProducer(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp10Result4 = tmp10(16000);
      obj10.children = stringResult.toLocaleUpperCase();
      items2[1] = timestampProducer(tmp10(15996), obj10);
      obj8.children = items2;
      const items3 = [React5(View, obj8), ,];
      let tmp13Result = !tmp6;
      if (rounded > 0) {
        const obj11 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj11.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
        obj11.style = tmp.number;
        const obj12 = { end: rounded };
        obj11.children = timestampProducer(tmp10(16002), obj12);
        tmp13Result = timestampProducer(View, obj11);
      }
      items3[1] = tmp13Result;
      const obj13 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      const tmp10Result5 = tmp10(15996);
      if (rounded <= 0) {
        const intl5 = util.intl;
        let stringResult1 = intl5.string(tmp10(3086).MyO0sh);
      } else if (null != bound) {
        const intl4 = util.intl;
        const obj14 = {
          numMinutes: rounded,
          percent: bound,
          percentHook(children, arg1) {
            return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        stringResult1 = intl4.format(tmp10(3118).RqXsIs, obj14);
      } else {
        const intl3 = util.intl;
        const obj15 = { numMinutes: rounded };
        stringResult1 = intl3.format(tmp10(3118).Y3poDW, obj15);
      }
      const obj16 = { children: null };
      obj13.children = stringResult1;
      items3[2] = timestampProducer(tmp10(15996), obj13);
      obj7.children = items3;
      items1[1] = React5(View, obj7);
      obj4.children = items1;
      obj16.children = React5(View, obj4);
      return timestampProducer(tmp10Result, obj16);
    };
