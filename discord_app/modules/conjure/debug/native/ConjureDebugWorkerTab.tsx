// discord_app/modules/conjure/debug/native/ConjureDebugWorkerTab.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl16 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import ConjureDebugPrimitives from "ConjureDebugPrimitives.tsx";
import ConjureDebugAnalytics from "ConjureDebugAnalytics.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { tab: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let preview;
      let renderEnv;
      let stable;
      let title;
      const obj = react2;
      const cResult = obj.c(19);
      ({ title, preview, stable, renderEnv } = arg0);
      if (cResult[0] === preview) {
        if (cResult[1] === renderEnv) {
          let arr;
          let tmp18;
          if (cResult[2] === stable) {
            arr = cResult[3];
          }
          if (cResult[14] !== arr) {
            let tmp19 = arr;
            if (arr.length <= 0) {
              const obj2 = { children: intl.string(_modDef3723.umcjif) };
              const DebugNote = ConjureDebugPrimitives.DebugNote;
              intl = intl16.intl;
              tmp19 = hasOwnProperty(DebugNote, obj2);
            }
            cResult[14] = arr;
            cResult[15] = tmp19;
            tmp18 = tmp19;
          } else {
            tmp18 = cResult[15];
          }
          if (cResult[16] === tmp18) {
            let tmp22;
            if (cResult[17] === title) {
              tmp22 = cResult[18];
            }
            return tmp22;
          }
          const obj3 = { title, children: tmp18 };
          const tmp24 = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj3);
          cResult[16] = tmp18;
          cResult[17] = title;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
      }
      const items = [];
      if (null != preview) {
        if (cResult[4] === preview) {
          let tmp4;
          let tmp6;
          if (cResult[5] === renderEnv) {
            tmp4 = cResult[6];
          }
          if (cResult[7] !== tmp4) {
            const obj4 = { children: tmp4 };
            const tmp9 = hasOwnProperty(react.Fragment, obj4, "preview");
            cResult[7] = tmp4;
            cResult[8] = tmp9;
            tmp6 = tmp9;
          } else {
            tmp6 = cResult[8];
          }
          items.push(tmp6);
        }
        const renderEnvResult = renderEnv("preview", preview);
        cResult[4] = preview;
        cResult[5] = renderEnv;
        cResult[6] = renderEnvResult;
        tmp4 = renderEnvResult;
      }
      if (null != stable) {
        if (cResult[9] === renderEnv) {
          let tmp11;
          let tmp13;
          if (cResult[10] === stable) {
            tmp11 = cResult[11];
          }
          if (cResult[12] !== tmp11) {
            const obj5 = { children: tmp11 };
            const tmp16 = hasOwnProperty(react.Fragment, obj5, "stable");
            cResult[12] = tmp11;
            cResult[13] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[13];
          }
          items.push(tmp13);
        }
        const renderEnvResult1 = renderEnv("stable", stable);
        cResult[9] = renderEnv;
        cResult[10] = stable;
        cResult[11] = renderEnvResult1;
        tmp11 = renderEnvResult1;
      }
      cResult[0] = preview;
      cResult[1] = renderEnv;
      cResult[2] = stable;
      cResult[3] = items;
      arr = items;
    }
  : (title) => {
      let intl;
      let preview;
      let renderEnv;
      let stable;
      ({ preview, stable, renderEnv } = title);
      let items = [];
      title = title.title;
      if (null != preview) {
        const push = items.push;
        const Fragment = react.Fragment;
        const obj = { children: renderEnv("preview", preview) };
        push(hasOwnProperty(Fragment, obj, "preview"));
      }
      if (null != stable) {
        const push2 = items.push;
        const Fragment2 = react.Fragment;
        const obj2 = { children: renderEnv("stable", stable) };
        push2(hasOwnProperty(Fragment2, obj2, "stable"));
      }
      const obj3 = { title, children: items };
      const DebugSection = ConjureDebugPrimitives.DebugSection;
      if (items.length <= 0) {
        const obj4 = { children: intl.string(_modDef3723.umcjif) };
        const DebugNote = ConjureDebugPrimitives.DebugNote;
        intl = intl16.intl;
        items = hasOwnProperty(DebugNote, obj4);
      }
      return hasOwnProperty(DebugSection, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bot;
      let env;
      let intl7;
      let items;
      let tmpResult;
      let tmpResult13;
      let tmpResult14;
      const obj = react2;
      const cResult = obj.c(45);
      ({ env, bot } = arg0);
      if (bot.ever_started) {
        let tmp13;
        let tmp17;
        if (cResult[5] !== env) {
          const intl2 = intl16.intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj2 = { env: tmpResult.debugEnvLabel(env) };
          const v01ZMS4 = _modDef3723["01ZMS4"];
          tmpResult = ConjureDebugLabels;
          const formatToPlainStringResult = formatToPlainString(v01ZMS4, obj2);
          cResult[5] = env;
          cResult[6] = formatToPlainStringResult;
          tmp13 = formatToPlainStringResult;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== bot.connected) {
          const tmpResult9 = ConjureDebugLabels;
          const debugYesNoResult = tmpResult9.debugYesNo(bot.connected);
          cResult[7] = bot.connected;
          cResult[8] = debugYesNoResult;
          tmp17 = debugYesNoResult;
        } else {
          tmp17 = cResult[8];
        }
        let fatal_reason = bot.fatal_reason;
        if (fatal_reason == null) {
          let tmp22;
          if (!bot.connected) {
            const last_start_reason = bot.last_start_reason;
            tmp22 = last_start_reason;
          }
          fatal_reason = tmp22;
        }
        if (cResult[9] === tmp13) {
          if (cResult[10] === tmp17) {
            if (cResult[11] === (!bot.connected && null != bot.fatal_reason)) {
              let tmp23;
              let tmp27;
              let tmp30;
              if (cResult[12] === fatal_reason) {
                tmp23 = cResult[13];
              }
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = intl16.intl;
                const stringResult = intl3.string(_modDef3723["z1dh+F"]);
                cResult[14] = stringResult;
                tmp27 = stringResult;
              } else {
                tmp27 = cResult[14];
              }
              if (cResult[15] !== bot.events_received) {
                const tmpResult10 = ConjureDebugFormat;
                const formatCountResult = tmpResult10.formatCount(bot.events_received);
                cResult[15] = bot.events_received;
                cResult[16] = formatCountResult;
                tmp30 = formatCountResult;
              } else {
                tmp30 = cResult[16];
              }
              if (cResult[17] === bot.last_event_at) {
                let tmp32;
                if (cResult[18] === bot.last_event_type) {
                  tmp32 = cResult[19];
                }
                if (cResult[20] === tmp30) {
                  let tmp34;
                  let tmp37;
                  let tmp40;
                  let tmp42;
                  let tmp45;
                  let tmp48;
                  if (cResult[21] === tmp32) {
                    tmp34 = cResult[22];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = intl16.intl;
                    const stringResult1 = intl4.string(_modDef3723.Iz5GnJ);
                    cResult[23] = stringResult1;
                    tmp37 = stringResult1;
                  } else {
                    tmp37 = cResult[23];
                  }
                  if (cResult[24] !== bot.guild_count) {
                    const tmpResult11 = ConjureDebugFormat;
                    const formatCountResult1 = tmpResult11.formatCount(bot.guild_count);
                    cResult[24] = bot.guild_count;
                    cResult[25] = formatCountResult1;
                    tmp40 = formatCountResult1;
                  } else {
                    tmp40 = cResult[25];
                  }
                  if (cResult[26] !== tmp40) {
                    const obj3 = { label: tmp37, value: tmp40 };
                    const tmp44 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3);
                    cResult[26] = tmp40;
                    cResult[27] = tmp44;
                    tmp42 = tmp44;
                  } else {
                    tmp42 = cResult[27];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = intl16.intl;
                    const stringResult2 = intl5.string(_modDef3723["7UqtNv"]);
                    cResult[28] = stringResult2;
                    tmp45 = stringResult2;
                  } else {
                    tmp45 = cResult[28];
                  }
                  if (cResult[29] !== bot.reconnects) {
                    const tmpResult12 = ConjureDebugFormat;
                    const formatCountResult2 = tmpResult12.formatCount(bot.reconnects);
                    cResult[29] = bot.reconnects;
                    cResult[30] = formatCountResult2;
                    tmp48 = formatCountResult2;
                  } else {
                    tmp48 = cResult[30];
                  }
                  if (cResult[31] === bot.last_close_at) {
                    let tmp50;
                    if (cResult[32] === bot.last_close_code) {
                      tmp50 = cResult[33];
                    }
                    if (cResult[34] === tmp48) {
                      let tmp53;
                      let tmp56;
                      if (cResult[35] === tmp50) {
                        tmp53 = cResult[36];
                      }
                      if (cResult[37] !== bot.dispatch_errors) {
                        let tmp57 = null;
                        if (bot.dispatch_errors > 0) {
                          const obj4 = {
                            label: intl7.string(_modDef3723["x3+JXJ"]),
                            value: tmpResult13.formatCount(bot.dispatch_errors),
                            critical: true,
                          };
                          const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
                          intl7 = intl16.intl;
                          tmpResult13 = ConjureDebugFormat;
                          tmp57 = hasOwnProperty(DebugStatRow, obj4);
                        }
                        cResult[37] = bot.dispatch_errors;
                        cResult[38] = tmp57;
                        tmp56 = tmp57;
                      } else {
                        tmp56 = cResult[38];
                      }
                      if (cResult[39] === tmp42) {
                        if (cResult[40] === tmp53) {
                          if (cResult[41] === tmp56) {
                            if (cResult[42] === tmp23) {
                              let tmp60;
                              if (cResult[43] === tmp34) {
                                tmp60 = cResult[44];
                              }
                              return tmp60;
                            }
                          }
                        }
                      }
                      const obj5 = { children: items };
                      items = [tmp23, tmp34, tmp42, tmp53, tmp56];
                      const tmp63 = metroImportDefault(metroRequire, obj5);
                      cResult[39] = tmp42;
                      cResult[40] = tmp53;
                      cResult[41] = tmp56;
                      cResult[42] = tmp23;
                      cResult[43] = tmp34;
                      cResult[44] = tmp63;
                      tmp60 = tmp63;
                    }
                    const obj6 = { label: tmp45, value: tmp48, hint: tmp50 };
                    const tmp55 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj6);
                    cResult[34] = tmp48;
                    cResult[35] = tmp50;
                    cResult[36] = tmp55;
                    tmp53 = tmp55;
                  }
                  let formatToPlainString2Result;
                  if (null != bot.last_close_code) {
                    if (null != bot.last_close_at) {
                      const intl6 = intl16.intl;
                      const formatToPlainString2 = intl6.formatToPlainString;
                      const obj7 = { code: bot.last_close_code, time: tmpResult14.formatObservedAt(bot.last_close_at) };
                      const MasSly = _modDef3723.MasSly;
                      tmpResult14 = ConjureDebugFormat;
                      formatToPlainString2Result = formatToPlainString2(MasSly, obj7);
                    }
                  }
                  cResult[31] = bot.last_close_at;
                  cResult[32] = bot.last_close_code;
                  cResult[33] = formatToPlainString2Result;
                  tmp50 = formatToPlainString2Result;
                }
                const obj8 = { label: tmp27, value: tmp30, hint: tmp32 };
                const tmp36 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
                cResult[20] = tmp30;
                cResult[21] = tmp32;
                cResult[22] = tmp36;
                tmp34 = tmp36;
              }
              let combined;
              if (null != bot.last_event_type) {
                if (null != bot.last_event_at) {
                  const last_event_type = bot.last_event_type;
                  const _HermesInternal = HermesInternal;
                  const tmpResult15 = ConjureDebugFormat;
                  combined = "" + last_event_type + " \u00B7 " + tmpResult15.formatObservedAt(bot.last_event_at);
                }
              }
              cResult[17] = bot.last_event_at;
              cResult[18] = bot.last_event_type;
              cResult[19] = combined;
              tmp32 = combined;
            }
          }
        }
        const obj9 = {
          label: tmp13,
          value: tmp17,
          critical: !bot.connected && null != bot.fatal_reason,
          hint: fatal_reason,
        };
        const tmp25 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj9);
        cResult[9] = tmp13;
        cResult[10] = tmp17;
        cResult[11] = !bot.connected && null != bot.fatal_reason;
        cResult[12] = fatal_reason;
        cResult[13] = tmp25;
        tmp23 = tmp25;
      } else {
        let tmp4;
        let tmp7;
        let tmp10;
        if (cResult[0] !== env) {
          const tmpResult16 = ConjureDebugLabels;
          const debugEnvLabelResult = tmpResult16.debugEnvLabel(env);
          cResult[0] = env;
          cResult[1] = debugEnvLabelResult;
          tmp4 = debugEnvLabelResult;
        } else {
          tmp4 = cResult[1];
        }
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl16.intl;
          const stringResult3 = intl.string(_modDef3723.lTHQss);
          cResult[2] = stringResult3;
          tmp7 = stringResult3;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj10 = { label: tmp4, value: tmp7 };
          const tmp12 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj10);
          cResult[3] = tmp4;
          cResult[4] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
    }
  : (arg0) => {
      let bot;
      let combined;
      let env;
      let fatal_reason;
      let formatToPlainString;
      let formatToPlainString2Result;
      let intl;
      let intl3;
      let intl4;
      let intl5;
      let intl7;
      let obj2;
      let obj4;
      let obj5;
      let obj6;
      let tmp13;
      let tmp6Result;
      let tmp9Result;
      let tmp9Result10;
      let tmp9Result7;
      let tmp9Result8;
      let tmp9Result9;
      let v01ZMS4;
      ({ env, bot } = arg0);
      if (bot.ever_started) {
        const obj3 = {
          label: formatToPlainString(v01ZMS4, obj4),
          value: obj6.debugYesNo(bot.connected),
          critical: tmp13,
          hint: fatal_reason,
        };
        const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
        const intl2 = intl16.intl;
        formatToPlainString = intl2.formatToPlainString;
        obj4 = { env: obj5.debugEnvLabel(env) };
        v01ZMS4 = _modDef3723["01ZMS4"];
        obj5 = ConjureDebugLabels;
        fatal_reason = bot.fatal_reason;
        obj6 = ConjureDebugLabels;
        tmp13 = !bot.connected && null != bot.fatal_reason;
        if (fatal_reason == null) {
          let tmp16;
          if (!bot.connected) {
            const last_start_reason = bot.last_start_reason;
            tmp16 = last_start_reason;
          }
          fatal_reason = tmp16;
        }
        const items = [hasOwnProperty(DebugStatRow2, obj3), , , ,];
        const obj7 = {
          label: intl3.string(_modDef3723["z1dh+F"]),
          value: tmp9Result.formatCount(bot.events_received),
          hint: combined,
        };
        const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
        intl3 = intl16.intl;
        combined = undefined;
        tmp9Result = ConjureDebugFormat;
        if (null != bot.last_event_type) {
          if (null != bot.last_event_at) {
            const last_event_type = bot.last_event_type;
            const _HermesInternal = HermesInternal;
            const tmp9Result6 = ConjureDebugFormat;
            combined = "" + last_event_type + " \u00B7 " + tmp9Result6.formatObservedAt(bot.last_event_at);
          }
        }
        items[1] = hasOwnProperty(DebugStatRow3, obj7);
        const obj8 = { label: intl4.string(_modDef3723.Iz5GnJ), value: tmp9Result7.formatCount(bot.guild_count) };
        const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
        intl4 = intl16.intl;
        tmp9Result7 = ConjureDebugFormat;
        items[2] = hasOwnProperty(DebugStatRow4, obj8);
        const obj9 = {
          label: intl5.string(_modDef3723["7UqtNv"]),
          value: tmp9Result8.formatCount(bot.reconnects),
          hint: formatToPlainString2Result,
        };
        const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
        intl5 = intl16.intl;
        formatToPlainString2Result = undefined;
        tmp9Result8 = ConjureDebugFormat;
        if (null != bot.last_close_code) {
          if (null != bot.last_close_at) {
            const intl6 = intl16.intl;
            const formatToPlainString2 = intl6.formatToPlainString;
            const obj10 = { code: bot.last_close_code, time: tmp9Result9.formatObservedAt(bot.last_close_at) };
            const MasSly = _modDef3723.MasSly;
            tmp9Result9 = ConjureDebugFormat;
            formatToPlainString2Result = formatToPlainString2(MasSly, obj10);
          }
        }
        items[3] = hasOwnProperty(DebugStatRow5, obj9);
        let tmp8Result = null;
        if (bot.dispatch_errors > 0) {
          const obj11 = {
            label: intl7.string(_modDef3723["x3+JXJ"]),
            value: tmp9Result10.formatCount(bot.dispatch_errors),
            critical: true,
          };
          const DebugStatRow6 = ConjureDebugPrimitives.DebugStatRow;
          intl7 = intl16.intl;
          tmp9Result10 = ConjureDebugFormat;
          tmp8Result = hasOwnProperty(DebugStatRow6, obj11);
        }
        const obj12 = { children: items };
        items[4] = tmp8Result;
        tmp6Result = metroImportDefault(metroRequire, obj12);
      } else {
        const obj = { label: obj2.debugEnvLabel(env), value: intl.string(_modDef3723.lTHQss) };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        obj2 = ConjureDebugLabels;
        intl = intl16.intl;
        tmp6Result = hasOwnProperty(DebugStatRow, obj);
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let env;
      let metrics;
      let str;
      let tmp5;
      let tmpResult5;
      let tmpResult6;
      let tmpResult7;
      let tmpResult8;
      const obj = react2;
      const cResult = obj.c(14);
      ({ env, metrics } = arg0);
      const sum = metrics.status_4xx + metrics.status_5xx;
      if (cResult[0] !== env) {
        const tmpResult = ConjureDebugLabels;
        const debugEnvLabelResult = tmpResult.debugEnvLabel(env);
        cResult[0] = env;
        cResult[1] = debugEnvLabelResult;
        tmp5 = debugEnvLabelResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === sum) {
        if (cResult[3] === metrics.errors) {
          let tmp7;
          let formatToPlainString3Result;
          if (cResult[4] === metrics.requests) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === metrics.last_failure) {
            let tmp11;
            if (cResult[7] === metrics.since) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === tmp10 > 0) {
                  let tmp19;
                  if (cResult[12] === tmp11) {
                    tmp19 = cResult[13];
                  }
                  return tmp19;
                }
              }
            }
            const obj2 = { label: tmp5, value: tmp7, critical: tmp10 > 0, hint: tmp11 };
            const tmp21 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj2);
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp10 > 0;
            cResult[12] = tmp11;
            cResult[13] = tmp21;
            tmp19 = tmp21;
          }
          if (null != metrics.last_failure) {
            const intl3 = intl16.intl;
            const formatToPlainString3 = intl3.formatToPlainString;
            const obj3 = {
              host: metrics.last_failure.host,
              status: str,
              time: tmpResult5.formatObservedAt(metrics.last_failure.at),
            };
            str = metrics.last_failure.status;
            const prop = _modDef3723["o/ZBm4"];
            if (str == null) {
              str = "network";
            }
            tmpResult5 = ConjureDebugFormat;
            formatToPlainString3Result = formatToPlainString3(prop, obj3);
          } else {
            const intl2 = intl16.intl;
            const formatToPlainString2 = intl2.formatToPlainString;
            const obj4 = { time: tmpResult6.formatObservedAt(metrics.since) };
            const v7KlGT6 = _modDef3723["7KlGT6"];
            tmpResult6 = ConjureDebugFormat;
            formatToPlainString3Result = formatToPlainString2(v7KlGT6, obj4);
          }
          cResult[6] = metrics.last_failure;
          cResult[7] = metrics.since;
          cResult[8] = formatToPlainString3Result;
          tmp11 = formatToPlainString3Result;
        }
      }
      const intl = intl16.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj5 = {
        requests: tmpResult7.formatCount(metrics.requests),
        failures: tmpResult8.formatCount(sum + metrics.errors),
      };
      const prop1 = _modDef3723["Xq+wHT"];
      tmpResult7 = ConjureDebugFormat;
      tmpResult8 = ConjureDebugFormat;
      const formatToPlainStringResult = formatToPlainString(prop1, obj5);
      cResult[2] = sum;
      cResult[3] = metrics.errors;
      cResult[4] = metrics.requests;
      cResult[5] = formatToPlainStringResult;
      tmp7 = formatToPlainStringResult;
    }
  : (metrics) => {
      let formatToPlainString;
      let formatToPlainString3Result;
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      let prop;
      let str;
      let tmp3Result;
      let tmp3Result2;
      metrics = metrics.metrics;
      const env = metrics.env;
      const sum = metrics.status_4xx + metrics.status_5xx;
      const obj = {
        label: obj2.debugEnvLabel(env),
        value: formatToPlainString(prop, obj3),
        critical: metrics.errors + metrics.status_5xx > 0,
        hint: formatToPlainString3Result,
      };
      const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
      obj2 = ConjureDebugLabels;
      const intl = intl16.intl;
      formatToPlainString = intl.formatToPlainString;
      obj3 = { requests: obj4.formatCount(metrics.requests), failures: obj5.formatCount(sum + metrics.errors) };
      prop = _modDef3723["Xq+wHT"];
      obj4 = ConjureDebugFormat;
      obj5 = ConjureDebugFormat;
      if (null != metrics.last_failure) {
        const intl3 = intl16.intl;
        const formatToPlainString3 = intl3.formatToPlainString;
        const obj6 = {
          host: metrics.last_failure.host,
          status: str,
          time: tmp3Result.formatObservedAt(metrics.last_failure.at),
        };
        str = metrics.last_failure.status;
        const prop1 = _modDef3723["o/ZBm4"];
        if (str == null) {
          str = "network";
        }
        tmp3Result = ConjureDebugFormat;
        formatToPlainString3Result = formatToPlainString3(prop1, obj6);
      } else {
        const intl2 = intl16.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const obj7 = { time: tmp3Result2.formatObservedAt(metrics.since) };
        const v7KlGT6 = _modDef3723["7KlGT6"];
        tmp3Result2 = ConjureDebugFormat;
        formatToPlainString3Result = formatToPlainString2(v7KlGT6, obj7);
      }
      return hasOwnProperty(DebugStatRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (env) => {
      let items;
      let tmp4;
      let tmp8;
      let tmpResult;
      let obj = env(576);
      const cResult = obj.c(15);
      env = env.env;
      const runtime = env.runtime;
      if (cResult[0] !== env) {
        let intl = tmp(1126).intl;
        let formatToPlainString = intl.formatToPlainString;
        let obj2 = { env: tmpResult.debugEnvLabel(env) };
        const v92gVTm = _modDef3723["92gVTm"];
        tmpResult = env(16757);
        const formatToPlainStringResult = formatToPlainString(v92gVTm, obj2);
        cResult[0] = env;
        cResult[1] = formatToPlainStringResult;
        tmp4 = formatToPlainStringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== runtime.connections) {
        const tmpResult2 = env(16756);
        const formatCountResult = tmpResult2.formatCount(runtime.connections);
        cResult[2] = runtime.connections;
        cResult[3] = formatCountResult;
        tmp8 = formatCountResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        let tmp10;
        let tmp13;
        if (cResult[5] === tmp8) {
          tmp10 = cResult[6];
        }
        if (cResult[7] === env) {
          let tmp12;
          if (cResult[8] === runtime.schedules) {
            tmp12 = cResult[9];
          }
          if (cResult[12] === tmp10) {
            let tmp15;
            if (cResult[13] === tmp12) {
              tmp15 = cResult[14];
            }
            return tmp15;
          }
          let obj3 = { children: items };
          items = [tmp10, tmp12];
          const tmp18 = closure_7(closure_6, obj3);
          cResult[12] = tmp10;
          cResult[13] = tmp12;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
        if (cResult[10] !== env) {
          const fn = function _(id) {
            let formatToPlainString2Result;
            let intl;
            let obj2;
            let pending_attempt;
            let tmp2Result;
            const obj = {
              label: intl.formatToPlainString(_modDef3723.Dafaco, obj2),
              value: id.trigger,
              hint: formatToPlainString2Result,
            };
            const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
            intl = intl16.intl;
            obj2 = { id: id.id };
            if (null != id.pending_state) {
              const intl3 = intl16.intl;
              const formatToPlainString2 = intl3.formatToPlainString;
              const obj3 = { state: null, attempt: pending_attempt };
              ({ pending_state: obj5.state, pending_attempt } = id);
              const ologm6 = _modDef3723.ologm6;
              if (pending_attempt == null) {
                pending_attempt = 1;
              }
              formatToPlainString2Result = formatToPlainString2(ologm6, obj3);
            } else if (null != id.next_run_at) {
              const intl2 = intl16.intl;
              const formatToPlainString = intl2.formatToPlainString;
              const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
              const wxAWNv = _modDef3723.wxAWNv;
              tmp2Result = ConjureDebugFormat;
              formatToPlainString2Result = formatToPlainString(wxAWNv, obj4);
            }
            return hasOwnProperty(DebugStatRow, obj, "" + env + "-" + id.id);
          };
          cResult[10] = env;
          cResult[11] = fn;
          tmp13 = fn;
        } else {
          tmp13 = cResult[11];
        }
        const schedules = runtime.schedules;
        const mapped = schedules.map(tmp13);
        cResult[7] = env;
        cResult[8] = runtime.schedules;
        cResult[9] = mapped;
        tmp12 = mapped;
      }
      const tmp11 = closure_5(env(16759).DebugStatRow, { label: tmp4, value: tmp8 });
      cResult[4] = tmp4;
      cResult[5] = tmp8;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (env) => {
      let formatToPlainString;
      let items;
      let obj3;
      let obj4;
      let obj5;
      let v92gVTm;
      env = env.env;
      const runtime = env.runtime;
      let obj = { children: items };
      let obj2 = { label: formatToPlainString(v92gVTm, obj3), value: obj5.formatCount(runtime.connections) };
      let DebugStatRow = env(16759).DebugStatRow;
      let intl = env(1126).intl;
      formatToPlainString = intl.formatToPlainString;
      obj3 = { env: obj4.debugEnvLabel(env) };
      v92gVTm = _modDef3723["92gVTm"];
      obj4 = env(16757);
      obj5 = env(16756);
      items = [closure_5(DebugStatRow, obj2)];
      const schedules = runtime.schedules;
      items[1] = schedules.map((id) => {
        let formatToPlainString2Result;
        let intl;
        let obj2;
        let pending_attempt;
        let tmp2Result;
        const obj = {
          label: intl.formatToPlainString(_modDef3723.Dafaco, obj2),
          value: id.trigger,
          hint: formatToPlainString2Result,
        };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        intl = intl16.intl;
        obj2 = { id: id.id };
        if (null != id.pending_state) {
          const intl3 = intl16.intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const obj3 = { state: null, attempt: pending_attempt };
          ({ pending_state: obj5.state, pending_attempt } = id);
          const ologm6 = _modDef3723.ologm6;
          if (pending_attempt == null) {
            pending_attempt = 1;
          }
          formatToPlainString2Result = formatToPlainString2(ologm6, obj3);
        } else if (null != id.next_run_at) {
          const intl2 = intl16.intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
          const wxAWNv = _modDef3723.wxAWNv;
          tmp2Result = ConjureDebugFormat;
          formatToPlainString2Result = formatToPlainString(wxAWNv, obj4);
        }
        return hasOwnProperty(DebugStatRow, obj, "" + env + "-" + id.id);
      });
      return closure_7(closure_6, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let env;
      let metrics;
      let tmp4;
      let tmpResult3;
      let tmpResult4;
      const obj = react2;
      const cResult = obj.c(10);
      ({ env, metrics } = arg0);
      if (cResult[0] !== env) {
        const tmpResult = ConjureDebugLabels;
        const debugEnvLabelResult = tmpResult.debugEnvLabel(env);
        cResult[0] = env;
        cResult[1] = debugEnvLabelResult;
        tmp4 = debugEnvLabelResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === metrics.calls) {
        let tmp6;
        if (cResult[3] === metrics.errors) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === metrics.last_model) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp6) {
              let tmp9;
              if (cResult[8] === metrics.errors > 0) {
                tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
        }
        const obj2 = { label: tmp4, value: tmp6, critical: metrics.errors > 0, hint: metrics.last_model };
        const tmp11 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj2);
        cResult[5] = metrics.last_model;
        cResult[6] = tmp4;
        cResult[7] = tmp6;
        cResult[8] = metrics.errors > 0;
        cResult[9] = tmp11;
        tmp9 = tmp11;
      }
      const intl = intl16.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { calls: tmpResult3.formatCount(metrics.calls), errors: tmpResult4.formatCount(metrics.errors) };
      const suAOj9 = _modDef3723.suAOj9;
      tmpResult3 = ConjureDebugFormat;
      tmpResult4 = ConjureDebugFormat;
      const formatToPlainStringResult = formatToPlainString(suAOj9, obj3);
      cResult[2] = metrics.calls;
      cResult[3] = metrics.errors;
      cResult[4] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    }
  : (metrics) => {
      let formatToPlainString;
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      let suAOj9;
      metrics = metrics.metrics;
      const env = metrics.env;
      const obj = {
        label: obj2.debugEnvLabel(env),
        value: formatToPlainString(suAOj9, obj3),
        critical: metrics.errors > 0,
        hint: metrics.last_model,
      };
      const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
      obj2 = ConjureDebugLabels;
      const intl = intl16.intl;
      formatToPlainString = intl.formatToPlainString;
      obj3 = { calls: obj4.formatCount(metrics.calls), errors: obj5.formatCount(metrics.errors) };
      suAOj9 = _modDef3723.suAOj9;
      obj4 = ConjureDebugFormat;
      obj5 = ConjureDebugFormat;
      return hasOwnProperty(DebugStatRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let JqMU05;
      let first;
      let formatToPlainString2;
      let intl10;
      let intl11;
      let intl14;
      let intl15;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items;
      let items1;
      let limits;
      let metrics;
      let obj12;
      let title;
      let tmp65;
      let tmpResult10;
      let tmpResult12;
      let tmpResult14;
      let tmpResult15;
      let tmpResult16;
      let tmpResult17;
      let tmpResult18;
      const obj = react2;
      const cResult = obj.c(49);
      ({ title, metrics, limits } = arg0);
      if (null != metrics) {
        if (0 !== metrics.requests) {
          let tmp4;
          let tmp7;
          let tmp9;
          const _Symbol3 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl16.intl;
            const stringResult = intl.string(_modDef3723.xtD4Zp);
            cResult[3] = stringResult;
            tmp4 = stringResult;
          } else {
            tmp4 = cResult[3];
          }
          if (cResult[4] !== metrics.requests) {
            const tmpResult = ConjureDebugFormat;
            const formatCountResult = tmpResult.formatCount(metrics.requests);
            cResult[4] = metrics.requests;
            cResult[5] = formatCountResult;
            tmp7 = formatCountResult;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== metrics.since) {
            const intl2 = intl16.intl;
            const formatToPlainString = intl2.formatToPlainString;
            const obj2 = { time: tmpResult10.formatObservedAt(metrics.since) };
            const v7KlGT6 = _modDef3723["7KlGT6"];
            tmpResult10 = ConjureDebugFormat;
            const formatToPlainStringResult = formatToPlainString(v7KlGT6, obj2);
            cResult[6] = metrics.since;
            cResult[7] = formatToPlainStringResult;
            tmp9 = formatToPlainStringResult;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp7) {
            let tmp13;
            let tmp16;
            let tmp19;
            if (cResult[9] === tmp9) {
              tmp13 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = intl16.intl;
              const stringResult1 = intl3.string(_modDef3723.gfRhR3);
              cResult[11] = stringResult1;
              tmp16 = stringResult1;
            } else {
              tmp16 = cResult[11];
            }
            if (cResult[12] !== metrics.errors) {
              const tmpResult11 = ConjureDebugFormat;
              const formatCountResult1 = tmpResult11.formatCount(metrics.errors);
              cResult[12] = metrics.errors;
              cResult[13] = formatCountResult1;
              tmp19 = formatCountResult1;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] === tmp19) {
              let tmp22;
              let tmp28;
              if (cResult[15] === metrics.errors > 0) {
                tmp22 = cResult[16];
              }
              if (cResult[17] === metrics.cpu_ms_total > 0) {
                if (cResult[18] === limits.cpu_ms_per_request) {
                  if (cResult[19] === metrics.cpu_ms_max) {
                    if (cResult[20] === metrics.cpu_ms_total) {
                      if (cResult[21] === metrics.requests) {
                        let tmp25;
                        if (cResult[22] === metrics.wall_ms_total) {
                          tmp25 = cResult[23];
                        }
                        if (cResult[24] === metrics.cpu_ms_total > 0) {
                          let tmp33;
                          let tmp37;
                          let tmp41;
                          let tmp44;
                          let tmp47;
                          if (cResult[25] === metrics.wall_ms_total) {
                            tmp33 = cResult[26];
                          }
                          if (cResult[27] !== metrics.exceeded_cpu) {
                            let tmp38 = null;
                            if (metrics.exceeded_cpu > 0) {
                              const obj3 = {
                                label: intl11.string(_modDef3723["4sQYwH"]),
                                value: tmpResult12.formatCount(metrics.exceeded_cpu),
                                critical: true,
                              };
                              const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
                              intl11 = intl16.intl;
                              tmpResult12 = ConjureDebugFormat;
                              tmp38 = hasOwnProperty(DebugStatRow4, obj3);
                            }
                            cResult[27] = metrics.exceeded_cpu;
                            cResult[28] = tmp38;
                            tmp37 = tmp38;
                          } else {
                            tmp37 = cResult[28];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl12 = intl16.intl;
                            const stringResult2 = intl12.string(_modDef3723.bQenOy);
                            cResult[29] = stringResult2;
                            tmp41 = stringResult2;
                          } else {
                            tmp41 = cResult[29];
                          }
                          if (cResult[30] !== metrics.exceeded_memory) {
                            const tmpResult13 = ConjureDebugFormat;
                            const formatCountResult2 = tmpResult13.formatCount(metrics.exceeded_memory);
                            cResult[30] = metrics.exceeded_memory;
                            cResult[31] = formatCountResult2;
                            tmp44 = formatCountResult2;
                          } else {
                            tmp44 = cResult[31];
                          }
                          if (cResult[32] !== limits.memory_mb) {
                            const intl13 = intl16.intl;
                            const formatToPlainString3 = intl13.formatToPlainString;
                            const _HermesInternal = HermesInternal;
                            const obj4 = { limit: "" + limits.memory_mb + " MB" };
                            const v5jIZwv = _modDef3723["5jIZwv"];
                            const formatToPlainString3Result = formatToPlainString3(v5jIZwv, obj4);
                            cResult[32] = limits.memory_mb;
                            cResult[33] = formatToPlainString3Result;
                            tmp47 = formatToPlainString3Result;
                          } else {
                            tmp47 = cResult[33];
                          }
                          if (cResult[34] === tmp44) {
                            if (cResult[35] === metrics.exceeded_memory > 0) {
                              let tmp51;
                              let tmp54;
                              if (cResult[36] === tmp47) {
                                tmp51 = cResult[37];
                              }
                              if (cResult[38] !== metrics.build) {
                                let tmp55 = null;
                                if (null != metrics.build) {
                                  const obj5 = {
                                    label: intl14.string(_modDef3723.xgpn4Y),
                                    value: tmpResult14.shortBuildLabel(metrics.build),
                                  };
                                  const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
                                  intl14 = intl16.intl;
                                  tmpResult14 = ConjureDebugFormat;
                                  tmp55 = hasOwnProperty(DebugStatRow5, obj5);
                                }
                                cResult[38] = metrics.build;
                                cResult[39] = tmp55;
                                tmp54 = tmp55;
                              } else {
                                tmp54 = cResult[39];
                              }
                              if (cResult[40] === tmp33) {
                                if (cResult[41] === tmp37) {
                                  if (cResult[42] === tmp51) {
                                    if (cResult[43] === tmp54) {
                                      if (cResult[44] === tmp13) {
                                        if (cResult[45] === tmp22) {
                                          if (cResult[46] === tmp25) {
                                            let tmp58;
                                            if (cResult[47] === title) {
                                              tmp58 = cResult[48];
                                            }
                                            return tmp58;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj6 = { title, children: items };
                              items = [tmp13, tmp22, tmp25, tmp33, tmp37, tmp51, tmp54];
                              const tmp60 = metroImportDefault(ConjureDebugPrimitives.DebugSection, obj6);
                              cResult[40] = tmp33;
                              cResult[41] = tmp37;
                              cResult[42] = tmp51;
                              cResult[43] = tmp54;
                              cResult[44] = tmp13;
                              cResult[45] = tmp22;
                              cResult[46] = tmp25;
                              cResult[47] = title;
                              cResult[48] = tmp60;
                              tmp58 = tmp60;
                            }
                          }
                          const obj7 = {
                            label: tmp41,
                            value: tmp44,
                            critical: metrics.exceeded_memory > 0,
                            hint: tmp47,
                          };
                          const tmp53 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj7);
                          cResult[34] = tmp44;
                          cResult[35] = metrics.exceeded_memory > 0;
                          cResult[36] = tmp47;
                          cResult[37] = tmp53;
                          tmp51 = tmp53;
                        }
                        let tmp34 = null;
                        if (metrics.cpu_ms_total <= 0) {
                          tmp34 = null;
                          if (metrics.wall_ms_total > 0) {
                            const obj8 = {
                              label: intl10.string(_modDef3723.xvmL1D),
                              value: tmpResult15.formatMs(metrics.wall_ms_total),
                            };
                            const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
                            intl10 = intl16.intl;
                            tmpResult15 = ConjureDebugFormat;
                            tmp34 = hasOwnProperty(DebugStatRow3, obj8);
                          }
                        }
                        cResult[24] = metrics.cpu_ms_total > 0;
                        cResult[25] = metrics.wall_ms_total;
                        cResult[26] = tmp34;
                        tmp33 = tmp34;
                      }
                    }
                  }
                }
              }
              if (metrics.cpu_ms_total > 0) {
                const obj9 = { children: items1 };
                const obj10 = {
                  label: intl7.string(_modDef3723.LEJ5r3),
                  used: metrics.cpu_ms_max,
                  max: limits.cpu_ms_per_request,
                  formatValue: ConjureDebugFormat.formatMs,
                };
                const DebugMeter = ConjureDebugPrimitives.DebugMeter;
                intl7 = intl16.intl;
                items1 = [hasOwnProperty(DebugMeter, obj10)];
                const obj11 = {
                  label: intl8.string(_modDef3723.mSKImM),
                  value: tmpResult16.formatMs(metrics.cpu_ms_total / metrics.requests),
                  hint: formatToPlainString2(JqMU05, obj12),
                };
                const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
                intl8 = intl16.intl;
                tmpResult16 = ConjureDebugFormat;
                const intl9 = intl16.intl;
                formatToPlainString2 = intl9.formatToPlainString;
                obj12 = {
                  total: tmpResult17.formatMs(metrics.cpu_ms_total),
                  wall: tmpResult18.formatMs(metrics.wall_ms_total),
                };
                JqMU05 = _modDef3723.JqMU05;
                tmpResult17 = ConjureDebugFormat;
                tmpResult18 = ConjureDebugFormat;
                items1[1] = hasOwnProperty(DebugStatRow2, obj11);
                tmp28 = metroImportDefault(metroRequire, obj9);
              } else {
                const obj13 = {
                  label: intl4.string(_modDef3723.LEJ5r3),
                  value: intl5.string(_modDef3723["2Ekb2b"]),
                  hint: intl6.string(_modDef3723.G0aq7i),
                };
                const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
                intl4 = intl16.intl;
                intl5 = intl16.intl;
                intl6 = intl16.intl;
                tmp28 = hasOwnProperty(DebugStatRow, obj13);
              }
              cResult[17] = metrics.cpu_ms_total > 0;
              cResult[18] = limits.cpu_ms_per_request;
              cResult[19] = metrics.cpu_ms_max;
              cResult[20] = metrics.cpu_ms_total;
              cResult[21] = metrics.requests;
              cResult[22] = metrics.wall_ms_total;
              cResult[23] = tmp28;
              tmp25 = tmp28;
            }
            const obj14 = { label: tmp16, value: tmp19, critical: metrics.errors > 0 };
            const tmp24 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj14);
            cResult[14] = tmp19;
            cResult[15] = metrics.errors > 0;
            cResult[16] = tmp24;
            tmp22 = tmp24;
          }
          const obj15 = { label: tmp4, value: tmp7, hint: tmp9 };
          const tmp15 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj15);
          cResult[8] = tmp7;
          cResult[9] = tmp9;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { children: intl15.string(_modDef3723["Noami/"]) };
        const DebugNote = ConjureDebugPrimitives.DebugNote;
        intl15 = intl16.intl;
        const tmp64 = hasOwnProperty(DebugNote, obj16);
        cResult[0] = tmp64;
        first = tmp64;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== title) {
        const obj17 = { title, children: first };
        const tmp67 = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj17);
        cResult[1] = title;
        cResult[2] = tmp67;
        tmp65 = tmp67;
      } else {
        tmp65 = cResult[2];
      }
      return tmp65;
    }
  : (arg0) => {
      let DebugNote;
      let JqMU05;
      let formatToPlainString;
      let formatToPlainString2;
      let formatToPlainString3;
      let intl;
      let intl11;
      let intl12;
      let intl13;
      let intl15;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl7;
      let intl8;
      let intl9;
      let items;
      let items1;
      let limits;
      let metrics;
      let obj13;
      let obj16;
      let obj22;
      let obj24;
      let obj26;
      let obj4;
      let obj9;
      let title;
      let tmp10Result;
      let tmp10Result10;
      let tmp10Result11;
      let tmp10Result12;
      let tmp10Result7;
      let tmp10Result8;
      let tmp10Result9;
      let v5jIZwv;
      let v7KlGT6;
      ({ title, metrics, limits } = arg0);
      if (null != metrics) {
        if (0 !== metrics.requests) {
          let tmp;
          const obj2 = { title, children: items };
          const DebugSection2 = ConjureDebugPrimitives.DebugSection;
          const obj3 = {
            label: intl13.string(_modDef3723.xtD4Zp),
            value: obj22.formatCount(metrics.requests),
            hint: formatToPlainString3(v7KlGT6, obj4),
          };
          const DebugStatRow7 = ConjureDebugPrimitives.DebugStatRow;
          intl13 = intl16.intl;
          obj22 = ConjureDebugFormat;
          const intl14 = intl16.intl;
          formatToPlainString3 = intl14.formatToPlainString;
          obj4 = { time: obj24.formatObservedAt(metrics.since) };
          v7KlGT6 = _modDef3723["7KlGT6"];
          obj24 = ConjureDebugFormat;
          items = [hasOwnProperty(DebugStatRow7, obj3), , , , , ,];
          const obj5 = {
            label: intl15.string(_modDef3723.gfRhR3),
            value: obj26.formatCount(metrics.errors),
            critical: metrics.errors > 0,
          };
          const DebugStatRow8 = ConjureDebugPrimitives.DebugStatRow;
          intl15 = intl16.intl;
          obj26 = ConjureDebugFormat;
          items[1] = hasOwnProperty(DebugStatRow8, obj5);
          if (metrics.cpu_ms_total > 0) {
            const obj6 = { children: items1 };
            const obj7 = {
              label: intl4.string(_modDef3723.LEJ5r3),
              used: metrics.cpu_ms_max,
              max: limits.cpu_ms_per_request,
              formatValue: ConjureDebugFormat.formatMs,
            };
            const DebugMeter = ConjureDebugPrimitives.DebugMeter;
            intl4 = intl16.intl;
            items1 = [hasOwnProperty(DebugMeter, obj7)];
            const obj8 = {
              label: intl5.string(_modDef3723.mSKImM),
              value: tmp10Result.formatMs(metrics.cpu_ms_total / metrics.requests),
              hint: formatToPlainString(JqMU05, obj9),
            };
            const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
            intl5 = intl16.intl;
            tmp10Result = ConjureDebugFormat;
            const intl6 = intl16.intl;
            formatToPlainString = intl6.formatToPlainString;
            obj9 = {
              total: tmp10Result7.formatMs(metrics.cpu_ms_total),
              wall: tmp10Result8.formatMs(metrics.wall_ms_total),
            };
            JqMU05 = _modDef3723.JqMU05;
            tmp10Result7 = ConjureDebugFormat;
            tmp10Result8 = ConjureDebugFormat;
            items1[1] = hasOwnProperty(DebugStatRow2, obj8);
            tmp = metroImportDefault(metroRequire, obj6);
          } else {
            const obj = {
              label: intl.string(_modDef3723.LEJ5r3),
              value: intl2.string(_modDef3723["2Ekb2b"]),
              hint: intl3.string(_modDef3723.G0aq7i),
            };
            const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
            intl = intl16.intl;
            intl2 = intl16.intl;
            intl3 = intl16.intl;
            tmp = hasOwnProperty(DebugStatRow, obj);
          }
          items[2] = tmp;
          let tmp12Result = null;
          if (metrics.cpu_ms_total <= 0) {
            tmp12Result = null;
            if (metrics.wall_ms_total > 0) {
              const obj10 = {
                label: intl7.string(_modDef3723.xvmL1D),
                value: tmp10Result9.formatMs(metrics.wall_ms_total),
              };
              const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
              intl7 = intl16.intl;
              tmp10Result9 = ConjureDebugFormat;
              tmp12Result = hasOwnProperty(DebugStatRow3, obj10);
            }
          }
          items[3] = tmp12Result;
          let tmp12Result3 = null;
          if (metrics.exceeded_cpu > 0) {
            const obj11 = {
              label: intl8.string(_modDef3723["4sQYwH"]),
              value: tmp10Result10.formatCount(metrics.exceeded_cpu),
              critical: true,
            };
            const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
            intl8 = intl16.intl;
            tmp10Result10 = ConjureDebugFormat;
            tmp12Result3 = hasOwnProperty(DebugStatRow4, obj11);
          }
          items[4] = tmp12Result3;
          const obj12 = {
            label: intl9.string(_modDef3723.bQenOy),
            value: tmp10Result11.formatCount(metrics.exceeded_memory),
            critical: metrics.exceeded_memory > 0,
            hint: formatToPlainString2(v5jIZwv, obj13),
          };
          const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
          intl9 = intl16.intl;
          tmp10Result11 = ConjureDebugFormat;
          const intl10 = intl16.intl;
          formatToPlainString2 = intl10.formatToPlainString;
          const _HermesInternal = HermesInternal;
          obj13 = { limit: "" + limits.memory_mb + " MB" };
          v5jIZwv = _modDef3723["5jIZwv"];
          items[5] = hasOwnProperty(DebugStatRow5, obj12);
          let tmp12Result4 = null;
          if (null != metrics.build) {
            const obj14 = {
              label: intl11.string(_modDef3723.xgpn4Y),
              value: tmp10Result12.shortBuildLabel(metrics.build),
            };
            const DebugStatRow6 = ConjureDebugPrimitives.DebugStatRow;
            intl11 = intl16.intl;
            tmp10Result12 = ConjureDebugFormat;
            tmp12Result4 = hasOwnProperty(DebugStatRow6, obj14);
          }
          items[6] = tmp12Result4;
          return metroImportDefault(DebugSection2, obj2);
        }
      }
      const obj15 = { title, children: hasOwnProperty(DebugNote, obj16) };
      const DebugSection = ConjureDebugPrimitives.DebugSection;
      obj16 = { children: intl12.string(_modDef3723["Noami/"]) };
      DebugNote = ConjureDebugPrimitives.DebugNote;
      intl12 = intl16.intl;
      return hasOwnProperty(DebugSection, obj15);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (status) => {
      let intl;
      let items1;
      let limits;
      let preview;
      let shared_data;
      let stable;
      let tmp6;
      let tmpResult;
      let tmpResult2;
      let tmp = limits;
      let obj = limits(576);
      const cResult = obj.c(6);
      status = status.status;
      ({ stable, preview, shared_data } = status.storage);
      limits = status.worker.limits;
      if (cResult[0] === limits) {
        if (cResult[1] === preview) {
          if (cResult[2] === shared_data) {
            let tmp4;
            if (cResult[3] === stable) {
              tmp4 = cResult[4];
            }
            return tmp4;
          }
        }
      }
      if (shared_data) {
        let obj2 = { key: "shared", label: intl.string(_modDef3723.V5kbaH), metrics: stable };
        intl = tmp(1126).intl;
        let items = [obj2];
        items1 = items;
      } else {
        let obj3 = { key: "preview", label: tmpResult.debugEnvLabel("preview"), metrics: preview };
        items1 = [obj3];
        tmpResult = tmp(16757);
        let obj4 = { key: "stable", label: tmpResult2.debugEnvLabel("stable"), metrics: stable };
        items1[1] = obj4;
        tmpResult2 = tmp(16757);
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let intl2 = tmp(1126).intl;
        const stringResult = intl2.string(_modDef3723.mRt7MW);
        cResult[5] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[5];
      }
      let obj5 = {
        title: tmp6,
        children: items1.map((item) => {
          let formatToPlainString;
          let intl;
          let intl2;
          let key;
          let label;
          let metrics;
          let obj;
          let obj2;
          let obj5;
          let obj7;
          let obj9;
          let tmp;
          let tmp18Result;
          ({ key, label, metrics } = item);
          if (null == metrics) {
            const obj3 = { label, value: "\u2014" };
            tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
          } else {
            const Fragment = react.Fragment;
            const obj4 = {
              label: intl2.formatToPlainString(_modDef3723.u7kJJ4, obj5),
              value: obj9.formatBytes(metrics.r2_bytes),
              hint: formatToPlainString(tmp, obj),
            };
            const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
            intl2 = intl16.intl;
            obj5 = { env: label };
            obj9 = ConjureDebugFormat;
            const intl3 = intl16.intl;
            formatToPlainString = intl3.formatToPlainString;
            const r2_truncated = metrics.r2_truncated;
            const tmp32 = _modDef3723;
            obj = { count: obj2.formatCount(metrics.r2_objects) };
            tmp = r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
            obj2 = ConjureDebugFormat;
            const items = [hasOwnProperty(DebugStatRow, obj4)];
            let tmp4 = null;
            if (null != metrics.db_bytes) {
              const obj6 = {
                label: intl.formatToPlainString(_modDef3723.mnbPqt, obj7),
                used: metrics.db_bytes,
                max: limits.db_bytes,
                formatValue: ConjureDebugFormat.formatBytes,
              };
              const DebugMeter = ConjureDebugPrimitives.DebugMeter;
              intl = intl16.intl;
              obj7 = { env: label };
              tmp4 = hasOwnProperty(DebugMeter, obj6);
            }
            const obj8 = { children: items };
            items[1] = tmp4;
            tmp18Result = metroImportDefault(Fragment, obj8, key);
          }
          return tmp18Result;
        }),
      };
      const DebugSection = tmp(16759).DebugSection;
      const tmp9 = closure_5(DebugSection, obj5);
      cResult[0] = limits;
      cResult[1] = preview;
      cResult[2] = shared_data;
      cResult[3] = stable;
      cResult[4] = tmp9;
      tmp4 = tmp9;
    }
  : (status) => {
      let intl;
      let intl2;
      let items1;
      let obj2;
      let obj4;
      let tmp;
      let tmp4;
      status = status.status;
      const storage = status.storage;
      const stable = storage.stable;
      const limits = status.worker.limits;
      if (storage.shared_data) {
        let obj3 = { key: "shared", label: intl.string(_modDef3723.V5kbaH), metrics: stable };
        intl = limits(1126).intl;
        let items = [obj3];
        tmp4 = limits;
        items1 = items;
      } else {
        let obj = { key: "preview", label: obj2.debugEnvLabel("preview"), metrics: tmp };
        obj2 = limits(16757);
        items1 = [obj];
        let obj5 = { key: "stable", label: obj4.debugEnvLabel("stable"), metrics: stable };
        obj4 = limits(16757);
        items1[1] = obj5;
        tmp4 = limits;
      }
      let obj6 = {
        title: intl2.string(_modDef3723.mRt7MW),
        children: items1.map((item) => {
          let formatToPlainString;
          let intl;
          let intl2;
          let key;
          let label;
          let metrics;
          let obj;
          let obj2;
          let obj5;
          let obj7;
          let obj9;
          let tmp;
          let tmp18Result;
          ({ key, label, metrics } = item);
          if (null == metrics) {
            const obj3 = { label, value: "\u2014" };
            tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
          } else {
            const Fragment = react.Fragment;
            const obj4 = {
              label: intl2.formatToPlainString(_modDef3723.u7kJJ4, obj5),
              value: obj9.formatBytes(metrics.r2_bytes),
              hint: formatToPlainString(tmp, obj),
            };
            const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
            intl2 = intl16.intl;
            obj5 = { env: label };
            obj9 = ConjureDebugFormat;
            const intl3 = intl16.intl;
            formatToPlainString = intl3.formatToPlainString;
            const r2_truncated = metrics.r2_truncated;
            const tmp32 = _modDef3723;
            obj = { count: obj2.formatCount(metrics.r2_objects) };
            tmp = r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
            obj2 = ConjureDebugFormat;
            const items = [hasOwnProperty(DebugStatRow, obj4)];
            let tmp4 = null;
            if (null != metrics.db_bytes) {
              const obj6 = {
                label: intl.formatToPlainString(_modDef3723.mnbPqt, obj7),
                used: metrics.db_bytes,
                max: limits.db_bytes,
                formatValue: ConjureDebugFormat.formatBytes,
              };
              const DebugMeter = ConjureDebugPrimitives.DebugMeter;
              intl = intl16.intl;
              obj7 = { env: label };
              tmp4 = hasOwnProperty(DebugMeter, obj6);
            }
            const obj8 = { children: items };
            items[1] = tmp4;
            tmp18Result = metroImportDefault(Fragment, obj8, key);
          }
          return tmp18Result;
        }),
      };
      const DebugSection = tmp4(16759).DebugSection;
      intl2 = tmp4(1126).intl;
      return closure_5(DebugSection, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let fetchState;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items1;
      let items2;
      let onRefresh;
      let status;
      let str3;
      let tmpResult;
      let tmpResult5;
      let obj = react2;
      const cResult = obj.c(10);
      ({ status, fetchState, onRefresh } = arg0);
      const tmp4 = closure_8();
      let generated_at;
      if (status != null) {
        generated_at = status.generated_at;
      }
      if (generated_at == null) {
        generated_at = null;
      }
      if (cResult[0] === fetchState) {
        if (cResult[1] === onRefresh) {
          let tmp6;
          let tmp8;
          if (cResult[2] === generated_at) {
            tmp6 = cResult[3];
          }
          if (cResult[4] !== status) {
            let tmp10Result = null;
            if (null != status) {
              const obj2 = {
                title: intl.string(_modDef3723.o5xzvl),
                metrics: status.worker.preview,
                limits: status.worker.limits,
              };
              intl = intl16.intl;
              const items = [hasOwnProperty(closure_14, obj2), , , , , , , ,];
              const obj3 = {
                title: intl2.string(_modDef3723.n2X3ZK),
                metrics: status.worker.stable,
                limits: status.worker.limits,
              };
              intl2 = intl16.intl;
              items[1] = hasOwnProperty(closure_14, obj3);
              const obj4 = { status };
              items[2] = hasOwnProperty(closure_15, obj4);
              let tmp12Result = null;
              if (null != status.bot) {
                const obj5 = {
                  title: intl3.string(_modDef3723["7mahem"]),
                  preview: status.bot.preview,
                  stable: status.bot.stable,
                  renderEnv(env, bot) {
                    const obj = { env, bot };
                    return closure_1_5(closure_1_10, obj);
                  },
                };
                intl3 = intl16.intl;
                tmp12Result = hasOwnProperty(closure_9, obj5);
              }
              items[3] = tmp12Result;
              let tmp12Result5 = null;
              if (null != status.outbound) {
                const obj6 = {
                  title: intl4.string(_modDef3723.THneIO),
                  preview: status.outbound.preview,
                  stable: status.outbound.stable,
                  renderEnv(env, metrics) {
                    const obj = { env, metrics };
                    return closure_1_5(closure_1_11, obj);
                  },
                };
                intl4 = intl16.intl;
                tmp12Result5 = hasOwnProperty(closure_9, obj6);
              }
              items[4] = tmp12Result5;
              let tmp12Result6 = null;
              if (null != status.runtime) {
                const obj7 = {
                  title: intl5.string(_modDef3723.vboq04),
                  preview: status.runtime.preview,
                  stable: status.runtime.stable,
                  renderEnv(env, runtime) {
                    const obj = { env, runtime };
                    return closure_1_5(closure_1_12, obj);
                  },
                };
                intl5 = intl16.intl;
                tmp12Result6 = hasOwnProperty(closure_9, obj7);
              }
              items[5] = tmp12Result6;
              let tmp12Result7 = null;
              if (null != status.ai) {
                const obj8 = {
                  title: intl6.string(_modDef3723.UzhuEq),
                  preview: status.ai.preview,
                  stable: status.ai.stable,
                  renderEnv(env, metrics) {
                    const obj = { env, metrics };
                    return closure_1_5(closure_1_13, obj);
                  },
                };
                intl6 = intl16.intl;
                tmp12Result7 = hasOwnProperty(closure_9, obj8);
              }
              items[6] = tmp12Result7;
              let tmp12Result8 = null;
              if (null != status.analytics) {
                const obj9 = { analytics: status.analytics };
                tmp12Result8 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugWorkerAnalyticsSection, obj9);
              }
              items[7] = tmp12Result8;
              const obj10 = { title: intl7.string(_modDef3723.fQMpFp), children: items1 };
              const DebugSection = ConjureDebugPrimitives.DebugSection;
              intl7 = intl16.intl;
              const obj11 = { label: tmpResult.debugEnvLabel("preview"), value: str3 };
              const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
              let str2 = "\u2014";
              str3 = "\u2014";
              tmpResult = ConjureDebugLabels;
              if (null != status.deployments.preview_build) {
                const tmpResult4 = ConjureDebugFormat;
                str3 = tmpResult4.shortBuildLabel(status.deployments.preview_build);
              }
              items1 = [hasOwnProperty(DebugStatRow, obj11)];
              const obj12 = { label: tmpResult5.debugEnvLabel("stable"), value: str2 };
              const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
              tmpResult5 = ConjureDebugLabels;
              if (null != status.deployments.stable_build) {
                const tmpResult6 = ConjureDebugFormat;
                str2 = tmpResult6.shortBuildLabel(status.deployments.stable_build);
              }
              const obj13 = { children: items };
              items1[1] = hasOwnProperty(DebugStatRow2, obj12);
              items[8] = metroImportDefault(DebugSection, obj10);
              tmp10Result = metroImportDefault(metroRequire, obj13);
            }
            cResult[4] = status;
            cResult[5] = tmp10Result;
            tmp8 = tmp10Result;
          } else {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp4.tab) {
            if (cResult[7] === tmp6) {
              let tmp25;
              if (cResult[8] === tmp8) {
                tmp25 = cResult[9];
              }
              return tmp25;
            }
          }
          const obj14 = { style: tmp4.tab, children: items2 };
          items2 = [tmp6, tmp8];
          const tmp28 = metroImportDefault(View, obj14);
          cResult[6] = tmp4.tab;
          cResult[7] = tmp6;
          cResult[8] = tmp8;
          cResult[9] = tmp28;
          tmp25 = tmp28;
        }
      }
      const tmp7 = hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, {
        generatedAt: generated_at,
        fetchState,
        onRefresh,
      });
      cResult[0] = fetchState;
      cResult[1] = onRefresh;
      cResult[2] = generated_at;
      cResult[3] = tmp7;
      tmp6 = tmp7;
    }
  : (status) => {
      let fetchState;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items;
      let items2;
      let onRefresh;
      let str3;
      let tmp4Result;
      let tmp4Result5;
      status = status.status;
      ({ fetchState, onRefresh } = status);
      let obj = { style: closure_8().tab, children: items };
      let generated_at;
      const DebugSnapshotToolbar = ConjureDebugPrimitives.DebugSnapshotToolbar;
      if (status != null) {
        generated_at = status.generated_at;
      }
      if (generated_at == null) {
        generated_at = null;
      }
      items = [hasOwnProperty(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh })];
      let tmpResult = null;
      if (null != status) {
        const obj2 = {
          title: intl.string(_modDef3723.o5xzvl),
          metrics: status.worker.preview,
          limits: status.worker.limits,
        };
        intl = intl16.intl;
        const items1 = [hasOwnProperty(closure_14, obj2), , , , , , , ,];
        const obj3 = {
          title: intl2.string(_modDef3723.n2X3ZK),
          metrics: status.worker.stable,
          limits: status.worker.limits,
        };
        intl2 = intl16.intl;
        items1[1] = hasOwnProperty(closure_14, obj3);
        const obj4 = { status };
        items1[2] = hasOwnProperty(closure_15, obj4);
        let tmp3Result = null;
        if (null != status.bot) {
          const obj5 = {
            title: intl3.string(_modDef3723["7mahem"]),
            preview: status.bot.preview,
            stable: status.bot.stable,
            renderEnv(env, bot) {
              const obj = { env, bot };
              return closure_1_5(closure_1_10, obj);
            },
          };
          intl3 = intl16.intl;
          tmp3Result = hasOwnProperty(closure_9, obj5);
        }
        items1[3] = tmp3Result;
        let tmp3Result5 = null;
        if (null != status.outbound) {
          const obj6 = {
            title: intl4.string(_modDef3723.THneIO),
            preview: status.outbound.preview,
            stable: status.outbound.stable,
            renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(closure_1_11, obj);
            },
          };
          intl4 = intl16.intl;
          tmp3Result5 = hasOwnProperty(closure_9, obj6);
        }
        items1[4] = tmp3Result5;
        let tmp3Result6 = null;
        if (null != status.runtime) {
          const obj7 = {
            title: intl5.string(_modDef3723.vboq04),
            preview: status.runtime.preview,
            stable: status.runtime.stable,
            renderEnv(env, runtime) {
              const obj = { env, runtime };
              return closure_1_5(closure_1_12, obj);
            },
          };
          intl5 = intl16.intl;
          tmp3Result6 = hasOwnProperty(closure_9, obj7);
        }
        items1[5] = tmp3Result6;
        let tmp3Result7 = null;
        if (null != status.ai) {
          const obj8 = {
            title: intl6.string(_modDef3723.UzhuEq),
            preview: status.ai.preview,
            stable: status.ai.stable,
            renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(closure_1_13, obj);
            },
          };
          intl6 = intl16.intl;
          tmp3Result7 = hasOwnProperty(closure_9, obj8);
        }
        items1[6] = tmp3Result7;
        let tmp3Result8 = null;
        if (null != status.analytics) {
          const obj9 = { analytics: status.analytics };
          tmp3Result8 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugWorkerAnalyticsSection, obj9);
        }
        items1[7] = tmp3Result8;
        const obj10 = { title: intl7.string(_modDef3723.fQMpFp), children: items2 };
        const DebugSection = ConjureDebugPrimitives.DebugSection;
        intl7 = intl16.intl;
        const obj11 = { label: tmp4Result.debugEnvLabel("preview"), value: str3 };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        let str2 = "\u2014";
        str3 = "\u2014";
        tmp4Result = ConjureDebugLabels;
        if (null != status.deployments.preview_build) {
          const tmp4Result4 = ConjureDebugFormat;
          str3 = tmp4Result4.shortBuildLabel(status.deployments.preview_build);
        }
        items2 = [hasOwnProperty(DebugStatRow, obj11)];
        const obj12 = { label: tmp4Result5.debugEnvLabel("stable"), value: str2 };
        const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
        tmp4Result5 = ConjureDebugLabels;
        if (null != status.deployments.stable_build) {
          const tmp4Result6 = ConjureDebugFormat;
          str2 = tmp4Result6.shortBuildLabel(status.deployments.stable_build);
        }
        const obj13 = { children: items1 };
        items2[1] = hasOwnProperty(DebugStatRow2, obj12);
        items1[8] = metroImportDefault(DebugSection, obj10);
        tmpResult = metroImportDefault(metroRequire, obj13);
      }
      items[1] = tmpResult;
      return metroImportDefault(View, obj);
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugWorkerTab.tsx");

export default tmp3;
