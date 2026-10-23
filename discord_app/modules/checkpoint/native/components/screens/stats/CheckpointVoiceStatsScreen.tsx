// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx
import initialize from "../../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3056 from "../../../../Checkpoint.messages.js";
import _modDef3088 from "../../../../Checkpoint2026.messages.js";
import MicrophoneIcon from "../../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointStatsUtils from "../../../../CheckpointStatsUtils.tsx";
import CheckpointEmphasisDefault from "../../CheckpointEmphasis.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../../CheckpointStore.tsx";

require = fn;
function formatPeakHour(stateFromStores1) {
  const date = new Date();
  date.setUTCHours(stateFromStores1, 0, 0, 0);
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, closure_9);
  const iter = dateTimeFormat.formatToParts(date).find((type) => "dayPeriod" === type.type);
  value = undefined;
  if (iter != null) {
    value = iter.value;
  }
  let tmp6 = closure_9;
  if (null != value) {
    tmp6 = closure_9;
    if (!re10.test(value)) {
      const obj = {};
      const merged = Object.assign(closure_9);
      obj.hourCycle = "h23";
      tmp6 = obj;
    }
  }
  const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, tmp6);
  const str2 = dateTimeFormat1.format(date);
  const formatToPartsResult = dateTimeFormat.formatToParts(date);
  return { value: str2.replace(re11, ""), label: str2 };
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6013).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" };
const re10 = /^[A-Za-z.\s]+$/;
const re11 = /\s/g;
const createStyles = fn(4969);
let obj2 = {
  container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 },
  title: null,
  titleText: null,
  imageContainer: null,
  image: null,
  copy: null,
  number: null,
};
let obj3 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.image = {
  width: "155.17241379310343%",
  aspectRatio: 1.2996389891696751,
  marginBottom: -nativeDefault.space.PX_16,
};
obj2.copy = { flexShrink: 1 };
let obj5 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj2.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointVoiceStatsScreen() {
      const cResult = c.c(58);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function c() {
          const stats = CheckpointStore.stats;
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
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CheckpointStore];
        const fn2 = function f() {
          const globalStats = CheckpointStore.globalStats;
          let peakHourUtc;
          if (globalStats != null) {
            const voice = globalStats.voice;
            if (voice != null) {
              peakHourUtc = voice.peakHourUtc;
            }
          }
          return peakHourUtc;
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
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === tmp4.container) {
          if (cResult[6] === tmp4.copy) {
            if (cResult[7] === tmp4.image) {
              if (cResult[8] === tmp4.imageContainer) {
                if (cResult[9] === tmp4.number) {
                  if (cResult[10] === tmp4.title) {
                    if (cResult[11] === tmp4.titleText) {
                      let totalVoiceMinutes;
                      if (stateFromStores != null) {
                        totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
                      }
                      if (cResult[12] === totalVoiceMinutes) {
                        let prop;
                        if (stateFromStores != null) {
                          prop = stateFromStores.totalVoiceMinutesPercentile;
                        }
                        if (cResult[13] === prop) {
                          let tmp16 = cResult[14];
                          let tmp17 = cResult[15];
                          let tmp18 = cResult[16];
                          let tmp19 = cResult[17];
                          let tmp20 = cResult[18];
                          let tmp21 = cResult[19];
                          let tmp22 = cResult[20];
                          let str = cResult[21];
                          let tmp23 = cResult[22];
                          let tmp24 = cResult[23];
                          let tmp25 = cResult[24];
                          let tmp26 = cResult[25];
                          let tmp27 = cResult[26];
                        }
                        if (cResult[38] === tmp16) {
                          if (cResult[39] === str) {
                            if (cResult[40] === tmp23) {
                              if (cResult[41] === tmp24) {
                                let tmp62 = cResult[42];
                              }
                              if (cResult[43] === tmp17) {
                                if (cResult[44] === tmp20) {
                                  if (cResult[45] === tmp62) {
                                    if (cResult[46] === tmp25) {
                                      if (cResult[47] === tmp26) {
                                        if (cResult[48] === tmp27) {
                                          let tmp65 = cResult[49];
                                        }
                                        if (cResult[50] === tmp18) {
                                          if (cResult[51] === tmp21) {
                                            if (cResult[52] === tmp22) {
                                              if (cResult[53] === tmp65) {
                                                let tmp68 = cResult[54];
                                              }
                                              if (cResult[55] === tmp19) {
                                                if (cResult[56] === tmp68) {
                                                  let tmp71 = cResult[57];
                                                }
                                                return tmp71;
                                              }
                                              const obj2 = { children: tmp68 };
                                              const tmp73 = React5(tmp19, obj2);
                                              cResult[55] = tmp19;
                                              cResult[56] = tmp68;
                                              cResult[57] = tmp73;
                                              tmp71 = tmp73;
                                            }
                                          }
                                        }
                                        const obj3 = { style: tmp21, children: null };
                                        const items2 = [tmp22, tmp65];
                                        obj3.children = items2;
                                        const tmp70 = closure_1_8(tmp18, obj3);
                                        cResult[50] = tmp18;
                                        cResult[51] = tmp21;
                                        cResult[52] = tmp22;
                                        cResult[53] = tmp65;
                                        cResult[54] = tmp70;
                                        tmp68 = tmp70;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj4 = { style: tmp25, children: null };
                              const items3 = [tmp26, tmp27, tmp20, tmp62];
                              obj4.children = items3;
                              const tmp67 = closure_1_8(tmp17, obj4);
                              cResult[43] = tmp17;
                              cResult[44] = tmp20;
                              cResult[45] = tmp62;
                              cResult[46] = tmp25;
                              cResult[47] = tmp26;
                              cResult[48] = tmp27;
                              cResult[49] = tmp67;
                              tmp65 = tmp67;
                            }
                          }
                        }
                        const obj5 = { variant: str, accessibilityLabel: tmp23, children: tmp24 };
                        const tmp64 = React5(tmp16, obj5);
                        cResult[38] = tmp16;
                        cResult[39] = str;
                        cResult[40] = tmp23;
                        cResult[41] = tmp24;
                        cResult[42] = tmp64;
                        tmp62 = tmp64;
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
        num5 = stateFromStores.totalVoiceMinutes;
      }
      if (num5 == null) {
        num5 = 0;
      }
      const rounded = Math.round(num5);
      if (cResult[27] !== stateFromStores1) {
        let tmp31 = null;
        if (null != stateFromStores1) {
          tmp31 = formatPeakHour(stateFromStores1);
        }
        cResult[27] = stateFromStores1;
        cResult[28] = tmp31;
        let tmp30 = tmp31;
      } else {
        tmp30 = cResult[28];
      }
      const tmpResult3 = initialize;
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop1);
      const intl = util.intl;
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3088.ZCwB8J);
        let tmp36 = importDefault;
      } else {
        const obj6 = { numMinutes: rounded };
        stringResult = intl.formatToPlainString(_modDef3056.UZbUtl, obj6);
        tmp36 = importDefault;
      }
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl2 = util.intl;
          const obj7 = {
            numMinutes: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          const formatToPlainStringResult = intl2.formatToPlainString(tmp36(3088).RqXsIs, obj7);
        }
      }
      const tmp36Result = tmp36(12932);
      const container = tmp4.container;
      if (cResult[29] !== tmp4.image) {
        const obj8 = { animatedUri: tmp36(12936), staticUri: tmp36(12937), style: tmp4.image };
        const tmp44 = React5(tmp36(12935), obj8);
        cResult[29] = tmp4.image;
        cResult[30] = tmp44;
        let tmp41 = tmp44;
        const tmp36Result4 = tmp36(12935);
      } else {
        tmp41 = cResult[30];
      }
      if (cResult[31] === tmp4.imageContainer) {
        if (cResult[32] === tmp41) {
          let tmp45 = cResult[33];
        }
        const copy = tmp4.copy;
        const _Symbol = Symbol;
        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
          const tmp50 = React5(MicrophoneIcon.MicrophoneIcon, obj9);
          cResult[34] = tmp50;
          let tmp47 = tmp50;
        } else {
          tmp47 = cResult[34];
        }
        const obj10 = { style: tmp4.title, children: null };
        const items4 = [tmp47];
        const obj11 = {
          variant: "heading-md/extrabold",
          style: tmp4.titleText,
          children: stringResult.toLocaleUpperCase(),
        };
        items4[1] = React5(tmp36(12930), obj11);
        obj10.children = items4;
        const tmp54 = closure_1_8(View, obj10);
        if (cResult[35] === tmp30) {
          if (cResult[36] === tmp29) {
            let tmp55 = cResult[37];
          }
          let tmp52Result = !tmp29;
          if (!tmp29) {
            const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
            const _HermesInternal = HermesInternal;
            obj12.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
            obj12.style = tmp4.number;
            const obj14 = { end: rounded };
            obj12.children = React5(tmp36(12940), obj14);
            tmp52Result = React5(View, obj12);
          }
          const tmp36Result6 = tmp36(12930);
          if (tmp29) {
            const intl5 = util.intl;
            let stringResult1 = intl5.string(tmp36(3088).huiTne);
          } else if (null != checkpointTopPercent) {
            const intl4 = util.intl;
            const obj15 = {
              numMinutes: rounded,
              percent: checkpointTopPercent,
              percentHook(children, arg1) {
                return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
              },
            };
            stringResult1 = intl4.format(tmp36(3088).RqXsIs, obj15);
          } else {
            const intl3 = util.intl;
            const obj16 = { numMinutes: rounded };
            stringResult1 = intl3.format(tmp36(3088).Y3poDW, obj16);
          }
          cResult[4] = stateFromStores1;
          cResult[5] = tmp4.container;
          cResult[6] = tmp4.copy;
          cResult[7] = tmp4.image;
          cResult[8] = tmp4.imageContainer;
          cResult[9] = tmp4.number;
          cResult[10] = tmp4.title;
          cResult[11] = tmp4.titleText;
          let totalVoiceMinutes1;
          if (stateFromStores != null) {
            totalVoiceMinutes1 = stateFromStores.totalVoiceMinutes;
          }
          cResult[12] = totalVoiceMinutes1;
          let prop2;
          if (stateFromStores != null) {
            prop2 = stateFromStores.totalVoiceMinutesPercentile;
          }
          cResult[13] = prop2;
          cResult[14] = tmp36Result6;
          cResult[15] = View;
          cResult[16] = View;
          cResult[17] = tmp36Result;
          cResult[18] = tmp52Result;
          cResult[19] = container;
          cResult[20] = tmp45;
          cResult[21] = "heading-lg/medium";
          cResult[22] = formatToPlainStringResult;
          cResult[23] = stringResult1;
          cResult[24] = copy;
          cResult[25] = tmp54;
          cResult[26] = tmp55;
          tmp27 = tmp55;
          tmp26 = tmp54;
          tmp25 = copy;
          tmp24 = stringResult1;
          tmp23 = formatToPlainStringResult;
          str = "heading-lg/medium";
          tmp22 = tmp45;
          tmp21 = container;
          tmp20 = tmp52Result;
          tmp19 = tmp36Result;
          tmp18 = View;
          tmp17 = View;
          tmp16 = tmp36Result6;
        }
        let tmp52Result2 = tmp29;
        if (tmp29) {
          tmp52Result2 = null != tmp30;
        }
        if (tmp52Result2) {
          ({ value: obj13.value, label: obj13.accessibilityLabel } = tmp30);
          tmp52Result2 = React5(tmp36(12938), { value: null, accessibilityLabel: null });
          const obj17 = { value: null, accessibilityLabel: null };
        }
        cResult[35] = tmp30;
        cResult[36] = tmp29;
        cResult[37] = tmp52Result2;
        tmp55 = tmp52Result2;
        const tmp36Result5 = tmp36(12930);
      }
      const tmp46 = React5(View, { style: tmp4.imageContainer, children: tmp41 });
      cResult[31] = tmp4.imageContainer;
      cResult[32] = tmp41;
      cResult[33] = tmp46;
      tmp45 = tmp46;
      const obj18 = { style: tmp4.imageContainer, children: tmp41 };
      const tmpResult4 = CheckpointStatsUtils;
    }
  : function CheckpointVoiceStatsScreen() {
      const tmp = closure_12();
      const items = [CheckpointStore];
      const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => {
        const stats = CheckpointStore.stats;
        let voice;
        if (stats != null) {
          voice = stats.voice;
        }
        return voice;
      });
      const obj = stateFromStores1(504);
      const items1 = [CheckpointStore];
      stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      });
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const rounded = Math.round(num);
      const items2 = [stateFromStores1];
      const memo = noop.useMemo(() => {
        let tmp2 = null;
        if (null != stateFromStores1) {
          tmp2 = formatPeakHour(tmp);
        }
        return tmp2;
      }, items2);
      const obj2 = stateFromStores1(504);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.totalVoiceMinutesPercentile;
      }
      const checkpointTopPercent = stateFromStores1(12915).getCheckpointTopPercent(prop);
      const intl = tmp2(1128).intl;
      if (rounded <= 0) {
        let stringResult = intl.string(_modDef3088.ZCwB8J);
        let tmp12 = importDefault;
      } else {
        const obj3 = { numMinutes: rounded };
        stringResult = intl.formatToPlainString(_modDef3056.UZbUtl, obj3);
        tmp12 = importDefault;
      }
      let formatToPlainStringResult;
      if (rounded > 0) {
        if (null != checkpointTopPercent) {
          const intl2 = tmp2(1128).intl;
          const obj4 = {
            numMinutes: rounded,
            percent: checkpointTopPercent,
            percentHook(arg0) {
              return arg0;
            },
          };
          formatToPlainStringResult = intl2.formatToPlainString(tmp12(3088).RqXsIs, obj4);
        }
      }
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.imageContainer, children: null };
      const tmp2Result = stateFromStores1(12915);
      const obj7 = { animatedUri: null, staticUri: null, style: null };
      const tmp12Result = tmp12(12932);
      obj7.animatedUri = tmp12(12936);
      obj7.staticUri = tmp12(12937);
      obj7.style = tmp.image;
      obj6.children = closure_7(tmp12(12935), obj7);
      const items3 = [closure_7(View, obj6)];
      const obj8 = { style: tmp.copy, children: null };
      const obj9 = { style: tmp.title, children: null };
      const items4 = [closure_7(stateFromStores1(11622).MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY })];
      const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp12Result4 = tmp12(12935);
      obj11.children = stringResult.toLocaleUpperCase();
      items4[1] = closure_7(tmp12(12930), obj11);
      obj9.children = items4;
      const items5 = [closure_8(View, obj9), , ,];
      let tmp15Result = tmp7;
      if (rounded <= 0) {
        tmp15Result = null != memo;
      }
      if (tmp15Result) {
        ({ value: obj14.value, label: obj14.accessibilityLabel } = memo);
        tmp15Result = closure_7(tmp12(12938), { value: null, accessibilityLabel: null });
        const obj12 = { value: null, accessibilityLabel: null };
      }
      items5[1] = tmp15Result;
      let tmp15Result2 = !tmp7;
      if (rounded > 0) {
        const obj13 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj13.accessibilityLabel = "" + rounded + " " + stringResult.toLocaleLowerCase();
        obj13.style = tmp.number;
        const obj15 = { end: rounded };
        obj13.children = closure_7(tmp12(12940), obj15);
        tmp15Result2 = closure_7(View, obj13);
      }
      items5[2] = tmp15Result2;
      const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
      const tmp12Result5 = tmp12(12930);
      if (rounded <= 0) {
        const intl5 = tmp2(1128).intl;
        let stringResult1 = intl5.string(tmp12(3088).huiTne);
      } else if (null != checkpointTopPercent) {
        const intl4 = tmp2(1128).intl;
        const obj17 = {
          numMinutes: rounded,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
            return closure_1_7(CheckpointEmphasisDefault, { children }, arg1);
          },
        };
        stringResult1 = intl4.format(tmp12(3088).RqXsIs, obj17);
      } else {
        const intl3 = tmp2(1128).intl;
        const obj18 = { numMinutes: rounded };
        stringResult1 = intl3.format(tmp12(3088).Y3poDW, obj18);
      }
      const obj19 = { children: null };
      obj16.children = stringResult1;
      items5[3] = closure_7(tmp12(12930), obj16);
      obj8.children = items5;
      items3[1] = closure_8(View, obj8);
      obj5.children = items3;
      obj19.children = closure_8(View, obj5);
      return closure_7(tmp12Result, obj19);
    };
