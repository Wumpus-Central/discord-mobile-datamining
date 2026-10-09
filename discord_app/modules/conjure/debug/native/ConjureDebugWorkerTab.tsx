// === Module 17220: ConjureDebugWorkerTab ===

// Module 17220 (ConjureDebugWorkerTab)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 17207 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 17208 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 17210 */;
import ConjureDebugAnalytics from "ConjureDebugAnalytics" /* 17221 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnvSection(arg0) {
  const cResult = c.c(19);
  ({ title, preview, stable, renderEnv } = arg0);
  if (cResult[0] === preview) {
    if (cResult[1] === renderEnv) {
      if (cResult[2] === stable) {
        let arr = cResult[3];
      }
      if (cResult[14] !== arr) {
        let tmp19 = arr;
        if (arr.length <= 0) {
          const obj2 = { children: null };
          const intl = util.intl;
          obj2.children = intl.string(_modDef3827.umcjif);
          tmp19 = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj2);
        }
        cResult[14] = arr;
        cResult[15] = tmp19;
        let tmp18 = tmp19;
      } else {
        tmp18 = cResult[15];
      }
      if (cResult[16] === tmp18) {
        if (cResult[17] === title) {
          let tmp22 = cResult[18];
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
  if (null == preview) {
    if (null == stable) {
      cResult[0] = preview;
      cResult[1] = renderEnv;
      cResult[2] = stable;
      cResult[3] = items;
      arr = items;
    } else {
      if (cResult[9] === renderEnv) {
        if (cResult[10] === stable) {
          let tmp11 = cResult[11];
        }
        if (cResult[12] !== tmp11) {
          const obj4 = { children: tmp11 };
          const tmp16 = hasOwnProperty(noop.Fragment, obj4, "stable");
          cResult[12] = tmp11;
          cResult[13] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[13];
        }
        items.push(tmp13);
      }
      const renderEnvResult = renderEnv("stable", stable);
      cResult[9] = renderEnv;
      cResult[10] = stable;
      cResult[11] = renderEnvResult;
      tmp11 = renderEnvResult;
    }
  } else {
    if (cResult[4] === preview) {
      if (cResult[5] === renderEnv) {
        let tmp4 = cResult[6];
      }
      if (cResult[7] !== tmp4) {
        const obj5 = { children: tmp4 };
        const tmp9 = hasOwnProperty(noop.Fragment, obj5, "preview");
        cResult[7] = tmp4;
        cResult[8] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[8];
      }
      items.push(tmp6);
    }
    const renderEnvResult1 = renderEnv("preview", preview);
    cResult[4] = preview;
    cResult[5] = renderEnv;
    cResult[6] = renderEnvResult1;
    tmp4 = renderEnvResult1;
  }
}) : (function EnvSection(title) {
  ({ preview, stable, renderEnv } = title);
  let items = [];
  if (null != preview) {
    const obj = { children: renderEnv("preview", preview) };
    items.push(hasOwnProperty(noop.Fragment, obj, "preview"));
  }
  if (null != stable) {
    const obj2 = { children: renderEnv("stable", stable) };
    items.push(hasOwnProperty(noop.Fragment, obj2, "stable"));
  }
  const obj3 = { title: title.title, children: null };
  if (items.length <= 0) {
    const obj4 = { children: null };
    const intl = util.intl;
    obj4.children = intl.string(_modDef3827.umcjif);
    items = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj4);
  }
  obj3.children = items;
  return hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj3);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function BotEnvBlock(arg0) {
  const cResult = c.c(45);
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    if (cResult[5] !== env) {
      const intl2 = util.intl;
      const obj2 = { env: ConjureDebugLabels.debugEnvLabel(env) };
      const formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["01ZMS4"], obj2);
      cResult[5] = env;
      cResult[6] = formatToPlainStringResult;
      let tmp13 = formatToPlainStringResult;
      const tmpResult = ConjureDebugLabels;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== bot.connected) {
      const debugYesNoResult = ConjureDebugLabels.debugYesNo(bot.connected);
      cResult[7] = bot.connected;
      cResult[8] = debugYesNoResult;
      let tmp16 = debugYesNoResult;
      const tmpResult9 = ConjureDebugLabels;
    } else {
      tmp16 = cResult[8];
    }
    const connected = bot.connected;
    let tmp18 = !connected;
    if (!connected) {
      tmp18 = null != bot.fatal_reason;
    }
    let fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp21;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp21 = last_start_reason;
      }
      fatal_reason = tmp21;
    }
    if (cResult[9] === tmp13) {
      if (cResult[10] === tmp16) {
        if (cResult[11] === tmp18) {
          if (cResult[12] === fatal_reason) {
            let tmp22 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult = intl3.string(_modDef3827["z1dh+F"]);
            cResult[14] = stringResult;
            let tmp26 = stringResult;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] !== bot.events_received) {
            const formatCountResult = ConjureDebugFormat.formatCount(bot.events_received);
            cResult[15] = bot.events_received;
            cResult[16] = formatCountResult;
            let tmp29 = formatCountResult;
            const tmpResult10 = ConjureDebugFormat;
          } else {
            tmp29 = cResult[16];
          }
          if (cResult[17] === bot.last_event_at) {
            if (cResult[18] === bot.last_event_type) {
              let tmp31 = cResult[19];
            }
            if (cResult[20] === tmp29) {
              if (cResult[21] === tmp31) {
                let tmp33 = cResult[22];
              }
              const _Symbol3 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = util.intl;
                const stringResult1 = intl4.string(_modDef3827.Iz5GnJ);
                cResult[23] = stringResult1;
                let tmp36 = stringResult1;
              } else {
                tmp36 = cResult[23];
              }
              if (cResult[24] !== bot.guild_count) {
                const formatCountResult1 = ConjureDebugFormat.formatCount(bot.guild_count);
                cResult[24] = bot.guild_count;
                cResult[25] = formatCountResult1;
                let tmp39 = formatCountResult1;
                const tmpResult11 = ConjureDebugFormat;
              } else {
                tmp39 = cResult[25];
              }
              if (cResult[26] !== tmp39) {
                const obj3 = { label: tmp36, value: tmp39 };
                const tmp43 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3);
                cResult[26] = tmp39;
                cResult[27] = tmp43;
                let tmp41 = tmp43;
              } else {
                tmp41 = cResult[27];
              }
              const _Symbol4 = Symbol;
              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = util.intl;
                const stringResult2 = intl5.string(_modDef3827["7UqtNv"]);
                cResult[28] = stringResult2;
                let tmp44 = stringResult2;
              } else {
                tmp44 = cResult[28];
              }
              if (cResult[29] !== bot.reconnects) {
                const formatCountResult2 = ConjureDebugFormat.formatCount(bot.reconnects);
                cResult[29] = bot.reconnects;
                cResult[30] = formatCountResult2;
                let tmp47 = formatCountResult2;
                const tmpResult12 = ConjureDebugFormat;
              } else {
                tmp47 = cResult[30];
              }
              if (cResult[31] === bot.last_close_at) {
                if (cResult[32] === bot.last_close_code) {
                  let tmp49 = cResult[33];
                }
                if (cResult[34] === tmp47) {
                  if (cResult[35] === tmp49) {
                    let tmp52 = cResult[36];
                  }
                  if (cResult[37] !== bot.dispatch_errors) {
                    let tmp56 = null;
                    if (bot.dispatch_errors > 0) {
                      const obj4 = { label: null, value: null, critical: true };
                      const intl7 = util.intl;
                      obj4.label = intl7.string(_modDef3827["x3+JXJ"]);
                      obj4.value = ConjureDebugFormat.formatCount(bot.dispatch_errors);
                      tmp56 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4);
                      const tmpResult13 = ConjureDebugFormat;
                    }
                    cResult[37] = bot.dispatch_errors;
                    cResult[38] = tmp56;
                    let tmp55 = tmp56;
                  } else {
                    tmp55 = cResult[38];
                  }
                  if (cResult[39] === tmp41) {
                    if (cResult[40] === tmp52) {
                      if (cResult[41] === tmp55) {
                        if (cResult[42] === tmp22) {
                          if (cResult[43] === tmp33) {
                            let tmp59 = cResult[44];
                          }
                          return tmp59;
                        }
                      }
                    }
                  }
                  const obj5 = { children: null };
                  const items = [tmp22, tmp33, tmp41, tmp52, tmp55];
                  obj5.children = items;
                  const tmp62 = React5(timestampProducer, obj5);
                  cResult[39] = tmp41;
                  cResult[40] = tmp52;
                  cResult[41] = tmp55;
                  cResult[42] = tmp22;
                  cResult[43] = tmp33;
                  cResult[44] = tmp62;
                  tmp59 = tmp62;
                }
                const obj6 = { label: tmp44, value: tmp47, hint: tmp49 };
                const tmp54 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj6);
                cResult[34] = tmp47;
                cResult[35] = tmp49;
                cResult[36] = tmp54;
                tmp52 = tmp54;
              }
              let formatToPlainStringResult1;
              if (null != bot.last_close_code) {
                if (null != bot.last_close_at) {
                  const intl6 = util.intl;
                  const obj7 = { code: bot.last_close_code, time: ConjureDebugFormat.formatObservedAt(bot.last_close_at) };
                  formatToPlainStringResult1 = intl6.formatToPlainString(_modDef3827.MasSly, obj7);
                  const tmpResult14 = ConjureDebugFormat;
                }
              }
              cResult[31] = bot.last_close_at;
              cResult[32] = bot.last_close_code;
              cResult[33] = formatToPlainStringResult1;
              tmp49 = formatToPlainStringResult1;
            }
            const obj8 = { label: tmp26, value: tmp29, hint: tmp31 };
            const tmp35 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
            cResult[20] = tmp29;
            cResult[21] = tmp31;
            cResult[22] = tmp35;
            tmp33 = tmp35;
          }
          let combined;
          if (null != bot.last_event_type) {
            if (null != bot.last_event_at) {
              const _HermesInternal = HermesInternal;
              combined = "" + bot.last_event_type + " \u00B7 " + ConjureDebugFormat.formatObservedAt(bot.last_event_at);
              const tmpResult15 = ConjureDebugFormat;
            }
          }
          cResult[17] = bot.last_event_at;
          cResult[18] = bot.last_event_type;
          cResult[19] = combined;
          tmp31 = combined;
        }
      }
    }
    const obj9 = { label: tmp13, value: tmp16, critical: tmp18, hint: fatal_reason };
    const tmp24 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj9);
    cResult[9] = tmp13;
    cResult[10] = tmp16;
    cResult[11] = tmp18;
    cResult[12] = fatal_reason;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  } else {
    if (cResult[0] !== env) {
      const debugEnvLabelResult = ConjureDebugLabels.debugEnvLabel(env);
      cResult[0] = env;
      cResult[1] = debugEnvLabelResult;
      let tmp4 = debugEnvLabelResult;
      const tmpResult16 = ConjureDebugLabels;
    } else {
      tmp4 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult3 = intl.string(_modDef3827.lTHQss);
      cResult[2] = stringResult3;
      let tmp7 = stringResult3;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj10 = { label: tmp4, value: tmp7 };
      const tmp12 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj10);
      cResult[3] = tmp4;
      cResult[4] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
}) : (function BotEnvBlock(arg0) {
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: null, value: null, critical: null, hint: null };
    const intl2 = util.intl;
    const obj4 = { env: ConjureDebugLabels.debugEnvLabel(env) };
    obj3.label = intl2.formatToPlainString(_modDef3827["01ZMS4"], obj4);
    obj3.value = ConjureDebugLabels.debugYesNo(bot.connected);
    const connected = bot.connected;
    let tmp12 = !connected;
    if (!connected) {
      tmp12 = null != bot.fatal_reason;
    }
    obj3.critical = tmp12;
    let fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp15;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp15 = last_start_reason;
      }
      fatal_reason = tmp15;
    }
    obj3.hint = fatal_reason;
    const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3), , , , ];
    const obj7 = { label: null, value: null, hint: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(_modDef3827["z1dh+F"]);
    obj7.value = ConjureDebugFormat.formatCount(bot.events_received);
    let combined;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const _HermesInternal = HermesInternal;
        combined = "" + bot.last_event_type + " \u00B7 " + ConjureDebugFormat.formatObservedAt(bot.last_event_at);
        const tmp9Result6 = ConjureDebugFormat;
      }
    }
    obj7.hint = combined;
    items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj7);
    const obj8 = { label: null, value: null };
    const intl4 = util.intl;
    obj8.label = intl4.string(_modDef3827.Iz5GnJ);
    const tmp9Result = ConjureDebugFormat;
    obj8.value = ConjureDebugFormat.formatCount(bot.guild_count);
    items[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
    const obj9 = { label: null, value: null, hint: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(_modDef3827["7UqtNv"]);
    const tmp9Result7 = ConjureDebugFormat;
    obj9.value = ConjureDebugFormat.formatCount(bot.reconnects);
    let formatToPlainStringResult;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = util.intl;
        const obj10 = { code: bot.last_close_code, time: ConjureDebugFormat.formatObservedAt(bot.last_close_at) };
        formatToPlainStringResult = intl6.formatToPlainString(_modDef3827.MasSly, obj10);
        const tmp9Result9 = ConjureDebugFormat;
      }
    }
    obj9.hint = formatToPlainStringResult;
    items[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: null, value: null, critical: true };
      const intl7 = util.intl;
      obj11.label = intl7.string(_modDef3827["x3+JXJ"]);
      obj11.value = ConjureDebugFormat.formatCount(bot.dispatch_errors);
      tmp8Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11);
      const tmp9Result10 = ConjureDebugFormat;
    }
    const obj12 = { children: null };
    items[4] = tmp8Result;
    obj12.children = items;
    let tmp6Result = React5(timestampProducer, obj12);
    const tmp9Result8 = ConjureDebugFormat;
  } else {
    const obj = { label: ConjureDebugLabels.debugEnvLabel(env), value: null };
    const intl = util.intl;
    obj.value = intl.string(_modDef3827.lTHQss);
    tmp6Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutboundEnvBlock(arg0) {
  const cResult = c.c(14);
  ({ env, metrics: since } = arg0);
  const sum = since.status_4xx + since.status_5xx;
  if (cResult[0] !== env) {
    const debugEnvLabelResult = ConjureDebugLabels.debugEnvLabel(env);
    cResult[0] = env;
    cResult[1] = debugEnvLabelResult;
    let tmp5 = debugEnvLabelResult;
    const tmpResult = ConjureDebugLabels;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === sum) {
    if (cResult[3] === since.errors) {
      if (cResult[4] === since.requests) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === since.last_failure) {
        if (cResult[7] === since.since) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === tmp16) {
                if (cResult[12] === tmp10) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
          const obj2 = { label: tmp5, value: tmp7, critical: tmp9 > 0, hint: cResult[8] };
          const tmp19 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj2);
          cResult[9] = tmp5;
          cResult[10] = tmp7;
          cResult[11] = tmp9 > 0;
          cResult[12] = cResult[8];
          cResult[13] = tmp19;
          tmp17 = tmp19;
        }
      }
      if (null != since.last_failure) {
        const intl3 = util.intl;
        const obj3 = { host: since.last_failure.host, status: null, time: null };
        let str = since.last_failure.status;
        if (str == null) {
          str = "network";
        }
        obj3.status = str;
        obj3.time = ConjureDebugFormat.formatObservedAt(since.last_failure.at);
        let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827["o/ZBm4"], obj3);
        const tmpResult5 = ConjureDebugFormat;
      } else {
        const intl2 = util.intl;
        const obj4 = { time: ConjureDebugFormat.formatObservedAt(since.since) };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["7KlGT6"], obj4);
        const tmpResult6 = ConjureDebugFormat;
      }
      ({ last_failure: tmp3[6], since } = since);
      cResult[7] = since;
      cResult[8] = formatToPlainStringResult;
    }
  }
  const intl = util.intl;
  const obj5 = { requests: null, failures: null };
  obj5.requests = ConjureDebugFormat.formatCount(since.requests);
  const tmpResult7 = ConjureDebugFormat;
  obj5.failures = ConjureDebugFormat.formatCount(sum + since.errors);
  const formatToPlainStringResult1 = intl.formatToPlainString(_modDef3827["Xq+wHT"], obj5);
  cResult[2] = sum;
  cResult[3] = since.errors;
  cResult[4] = since.requests;
  cResult[5] = formatToPlainStringResult1;
  tmp7 = formatToPlainStringResult1;
  const tmpResult8 = ConjureDebugFormat;
}) : (function OutboundEnvBlock(metrics) {
  metrics = metrics.metrics;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: ConjureDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { requests: null, failures: null };
  obj3.requests = ConjureDebugFormat.formatCount(metrics.requests);
  obj3.failures = ConjureDebugFormat.formatCount(sum + metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3827["Xq+wHT"], obj3);
  obj.critical = metrics.errors + metrics.status_5xx > 0;
  if (null != metrics.last_failure) {
    const intl3 = util.intl;
    const obj6 = { host: metrics.last_failure.host, status: null, time: null };
    let str = metrics.last_failure.status;
    if (str == null) {
      str = "network";
    }
    obj6.status = str;
    obj6.time = ConjureDebugFormat.formatObservedAt(metrics.last_failure.at);
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827["o/ZBm4"], obj6);
    const tmp3Result = ConjureDebugFormat;
  } else {
    const intl2 = util.intl;
    const obj7 = { time: ConjureDebugFormat.formatObservedAt(metrics.since) };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["7KlGT6"], obj7);
    const tmp3Result2 = ConjureDebugFormat;
  }
  obj.hint = formatToPlainStringResult;
  return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function RuntimeEnvBlock(env) {
  const cResult = env(576).c(15);
  env = env.env;
  let schedules = env.runtime;
  if (cResult[0] !== env) {
    let intl = tmp(1126).intl;
    const obj2 = { env: tmp(17208).debugEnvLabel(env) };
    let formatToPlainStringResult = intl.formatToPlainString(_modDef3827["92gVTm"], obj2);
    cResult[0] = env;
    cResult[1] = formatToPlainStringResult;
    let tmp4 = formatToPlainStringResult;
    const tmpResult = tmp(17208);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== schedules.connections) {
    const formatCountResult = tmp(17207).formatCount(schedules.connections);
    cResult[2] = schedules.connections;
    cResult[3] = formatCountResult;
    let tmp7 = formatCountResult;
    const tmpResult2 = tmp(17207);
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp7) {
      let tmp9 = cResult[6];
    }
    if (cResult[7] === env) {
      if (cResult[8] === schedules.schedules) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp11) {
            let tmp15 = cResult[14];
          }
          return tmp15;
        }
        let obj3 = { children: null };
        const items = [tmp9, cResult[9]];
        obj3.children = items;
        const tmp18 = closure_7(closure_6, obj3);
        cResult[12] = tmp9;
        cResult[13] = cResult[9];
        cResult[14] = tmp18;
        tmp15 = tmp18;
      }
    }
    if (cResult[10] !== env) {
      const fn = function v(id) {
        const obj = { label: null, value: null, hint: null };
        const intl = util.intl;
        obj.label = intl.formatToPlainString(_modDef3827.Dafaco, { id: id.id });
        obj.value = id.trigger;
        if (null != id.pending_state) {
          const intl3 = util.intl;
          const obj3 = { state: null, attempt: null };
          ({ pending_state: obj5.state, pending_attempt } = id);
          if (pending_attempt == null) {
            pending_attempt = 1;
          }
          obj3.attempt = pending_attempt;
          let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827.ologm6, obj3);
        } else if (null != id.next_run_at) {
          const intl2 = util.intl;
          const obj4 = { time: ConjureDebugFormat.formatObservedAt(id.next_run_at) };
          formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.wxAWNv, obj4);
          const tmp2Result = ConjureDebugFormat;
        }
        obj.hint = formatToPlainStringResult;
        return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj, "" + env + "-" + id.id);
      };
      cResult[10] = env;
      cResult[11] = fn;
      let tmp12 = fn;
    } else {
      tmp12 = cResult[11];
    }
    const schedules1 = schedules.schedules;
    const mapped = schedules1.map(tmp12);
    cResult[7] = env;
    schedules = schedules.schedules;
    cResult[8] = schedules;
    cResult[9] = mapped;
  }
  const tmp10 = closure_5(env(17210).DebugStatRow, { label: tmp4, value: tmp7 });
  cResult[4] = tmp4;
  cResult[5] = tmp7;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  let obj = env(576);
}) : (function RuntimeEnvBlock(env) {
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: null };
  const obj2 = { label: null, value: null };
  let intl = env(1126).intl;
  let obj3 = { env: env(17208).debugEnvLabel(env) };
  obj2.label = intl.formatToPlainString(_modDef3827["92gVTm"], obj3);
  let obj4 = env(17208);
  obj2.value = env(17207).formatCount(runtime.connections);
  const items = [closure_5(env(17210).DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    const obj = { label: null, value: null, hint: null };
    const intl = util.intl;
    obj.label = intl.formatToPlainString(_modDef3827.Dafaco, { id: id.id });
    obj.value = id.trigger;
    if (null != id.pending_state) {
      const intl3 = util.intl;
      const obj3 = { state: null, attempt: null };
      ({ pending_state: obj5.state, pending_attempt } = id);
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      obj3.attempt = pending_attempt;
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827.ologm6, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = util.intl;
      const obj4 = { time: ConjureDebugFormat.formatObservedAt(id.next_run_at) };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.wxAWNv, obj4);
      const tmp2Result = ConjureDebugFormat;
    }
    obj.hint = formatToPlainStringResult;
    return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj, "" + env + "-" + id.id);
  });
  obj.children = items;
  return closure_7(closure_6, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function AiEnvBlock(arg0) {
  const cResult = c.c(10);
  ({ env, metrics } = arg0);
  if (cResult[0] !== env) {
    const debugEnvLabelResult = ConjureDebugLabels.debugEnvLabel(env);
    cResult[0] = env;
    cResult[1] = debugEnvLabelResult;
    let tmp4 = debugEnvLabelResult;
    const tmpResult = ConjureDebugLabels;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === metrics.calls) {
    if (cResult[3] === metrics.errors) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === metrics.last_model) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp8) {
            let tmp9 = cResult[9];
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
  const intl = util.intl;
  const obj3 = { calls: null, errors: null };
  obj3.calls = ConjureDebugFormat.formatCount(metrics.calls);
  const tmpResult3 = ConjureDebugFormat;
  obj3.errors = ConjureDebugFormat.formatCount(metrics.errors);
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3827.suAOj9, obj3);
  cResult[2] = metrics.calls;
  cResult[3] = metrics.errors;
  cResult[4] = formatToPlainStringResult;
  tmp6 = formatToPlainStringResult;
  const tmpResult4 = ConjureDebugFormat;
}) : (function AiEnvBlock(metrics) {
  metrics = metrics.metrics;
  const obj = { label: ConjureDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { calls: null, errors: null };
  obj3.calls = ConjureDebugFormat.formatCount(metrics.calls);
  obj3.errors = ConjureDebugFormat.formatCount(metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3827.suAOj9, obj3);
  obj.critical = metrics.errors > 0;
  obj.hint = metrics.last_model;
  return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnvMetricsSection(arg0) {
  const cResult = c.c(49);
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      const _Symbol3 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3827.xtD4Zp);
        cResult[3] = stringResult;
        let tmp4 = stringResult;
      } else {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== metrics.requests) {
        const formatCountResult = ConjureDebugFormat.formatCount(metrics.requests);
        cResult[4] = metrics.requests;
        cResult[5] = formatCountResult;
        let tmp7 = formatCountResult;
        const tmpResult = ConjureDebugFormat;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== metrics.since) {
        const intl2 = util.intl;
        const obj2 = { time: ConjureDebugFormat.formatObservedAt(metrics.since) };
        const formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["7KlGT6"], obj2);
        cResult[6] = metrics.since;
        cResult[7] = formatToPlainStringResult;
        let tmp9 = formatToPlainStringResult;
        const tmpResult10 = ConjureDebugFormat;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp9) {
          let tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult1 = intl3.string(_modDef3827.gfRhR3);
          cResult[11] = stringResult1;
          let tmp15 = stringResult1;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== metrics.errors) {
          const formatCountResult1 = ConjureDebugFormat.formatCount(metrics.errors);
          cResult[12] = metrics.errors;
          cResult[13] = formatCountResult1;
          let tmp18 = formatCountResult1;
          const tmpResult11 = ConjureDebugFormat;
        } else {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp18) {
          if (cResult[15] === tmp20) {
            let tmp21 = cResult[16];
          }
          if (cResult[17] === tmp67) {
            if (cResult[18] === limits.cpu_ms_per_request) {
              if (cResult[19] === metrics.cpu_ms_max) {
                if (cResult[20] === metrics.cpu_ms_total) {
                  if (cResult[21] === metrics.requests) {
                    if (cResult[22] === metrics.wall_ms_total) {
                      if (cResult[24] === tmp67) {
                        if (cResult[25] === metrics.wall_ms_total) {
                          let tmp33 = cResult[26];
                        }
                        if (cResult[27] !== metrics.exceeded_cpu) {
                          let tmp38 = null;
                          if (metrics.exceeded_cpu > 0) {
                            const obj3 = { label: null, value: null, critical: true };
                            const intl11 = util.intl;
                            obj3.label = intl11.string(_modDef3827["4sQYwH"]);
                            obj3.value = ConjureDebugFormat.formatCount(metrics.exceeded_cpu);
                            tmp38 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3);
                            const tmpResult12 = ConjureDebugFormat;
                          }
                          cResult[27] = metrics.exceeded_cpu;
                          cResult[28] = tmp38;
                          let tmp37 = tmp38;
                        } else {
                          tmp37 = cResult[28];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl12 = util.intl;
                          const stringResult2 = intl12.string(_modDef3827.bQenOy);
                          cResult[29] = stringResult2;
                          let tmp41 = stringResult2;
                        } else {
                          tmp41 = cResult[29];
                        }
                        if (cResult[30] !== metrics.exceeded_memory) {
                          const formatCountResult2 = ConjureDebugFormat.formatCount(metrics.exceeded_memory);
                          cResult[30] = metrics.exceeded_memory;
                          cResult[31] = formatCountResult2;
                          let tmp44 = formatCountResult2;
                          const tmpResult13 = ConjureDebugFormat;
                        } else {
                          tmp44 = cResult[31];
                        }
                        if (cResult[32] !== limits.memory_mb) {
                          const intl13 = util.intl;
                          const obj4 = { limit: null };
                          const _HermesInternal = HermesInternal;
                          obj4.limit = "" + limits.memory_mb + " MB";
                          const formatToPlainStringResult1 = intl13.formatToPlainString(_modDef3827["5jIZwv"], obj4);
                          cResult[32] = limits.memory_mb;
                          cResult[33] = formatToPlainStringResult1;
                          let tmp47 = formatToPlainStringResult1;
                        } else {
                          tmp47 = cResult[33];
                        }
                        if (cResult[34] === tmp44) {
                          if (cResult[35] === tmp46) {
                            if (cResult[36] === tmp47) {
                              let tmp50 = cResult[37];
                            }
                            if (cResult[38] !== metrics.build) {
                              let tmp54 = null;
                              if (null != metrics.build) {
                                const obj5 = { label: null, value: null };
                                const intl14 = util.intl;
                                obj5.label = intl14.string(_modDef3827.xgpn4Y);
                                obj5.value = ConjureDebugFormat.shortBuildLabel(metrics.build);
                                tmp54 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj5);
                                const tmpResult14 = ConjureDebugFormat;
                              }
                              cResult[38] = metrics.build;
                              cResult[39] = tmp54;
                              let tmp53 = tmp54;
                            } else {
                              tmp53 = cResult[39];
                            }
                            if (cResult[40] === tmp33) {
                              if (cResult[41] === tmp37) {
                                if (cResult[42] === tmp50) {
                                  if (cResult[43] === tmp53) {
                                    if (cResult[44] === tmp12) {
                                      if (cResult[45] === tmp21) {
                                        if (cResult[46] === tmp24) {
                                          if (cResult[47] === title) {
                                            let tmp57 = cResult[48];
                                          }
                                          return tmp57;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj6 = { title, children: null };
                            const items = [tmp12, tmp21, tmp24, tmp33, tmp37, tmp50, tmp53];
                            obj6.children = items;
                            const tmp59 = React5(ConjureDebugPrimitives.DebugSection, obj6);
                            cResult[40] = tmp33;
                            cResult[41] = tmp37;
                            cResult[42] = tmp50;
                            cResult[43] = tmp53;
                            cResult[44] = tmp12;
                            cResult[45] = tmp21;
                            cResult[46] = tmp24;
                            cResult[47] = title;
                            cResult[48] = tmp59;
                            tmp57 = tmp59;
                          }
                        }
                        const obj7 = { label: tmp41, value: tmp44, critical: metrics.exceeded_memory > 0, hint: tmp47 };
                        const tmp52 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj7);
                        cResult[34] = tmp44;
                        cResult[35] = metrics.exceeded_memory > 0;
                        cResult[36] = tmp47;
                        cResult[37] = tmp52;
                        tmp50 = tmp52;
                      }
                      let tmp34 = null;
                      if (!tmp67) {
                        tmp34 = null;
                        if (metrics.wall_ms_total > 0) {
                          const obj8 = { label: null, value: null };
                          const intl10 = util.intl;
                          obj8.label = intl10.string(_modDef3827.xvmL1D);
                          obj8.value = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
                          tmp34 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
                          const tmpResult15 = ConjureDebugFormat;
                        }
                      }
                      cResult[24] = tmp67;
                      cResult[25] = metrics.wall_ms_total;
                      cResult[26] = tmp34;
                      tmp33 = tmp34;
                    }
                  }
                }
              }
            }
          }
          if (tmp67) {
            const obj9 = { children: null };
            const obj10 = { label: null, used: null, max: null, formatValue: null };
            const intl7 = util.intl;
            obj10.label = intl7.string(_modDef3827.LEJ5r3);
            obj10.used = metrics.cpu_ms_max;
            obj10.max = limits.cpu_ms_per_request;
            obj10.formatValue = ConjureDebugFormat.formatMs;
            const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj10), ];
            const obj11 = { label: null, value: null, hint: null };
            const intl8 = util.intl;
            obj11.label = intl8.string(_modDef3827.mSKImM);
            obj11.value = ConjureDebugFormat.formatMs(metrics.cpu_ms_total / metrics.requests);
            const intl9 = util.intl;
            const obj12 = { total: null, wall: null };
            const tmpResult16 = ConjureDebugFormat;
            obj12.total = ConjureDebugFormat.formatMs(metrics.cpu_ms_total);
            const tmpResult17 = ConjureDebugFormat;
            obj12.wall = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
            obj11.hint = intl9.formatToPlainString(_modDef3827.JqMU05, obj12);
            items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11);
            obj9.children = items1;
            let tmp27 = React5(timestampProducer, obj9);
            const tmpResult18 = ConjureDebugFormat;
          } else {
            const obj13 = { label: null, value: null, hint: null };
            const intl4 = util.intl;
            obj13.label = intl4.string(_modDef3827.LEJ5r3);
            const intl5 = util.intl;
            obj13.value = intl5.string(_modDef3827["2Ekb2b"]);
            const intl6 = util.intl;
            obj13.hint = intl6.string(_modDef3827.G0aq7i);
            tmp27 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj13);
          }
          cResult[17] = tmp67;
          cResult[18] = limits.cpu_ms_per_request;
          cResult[19] = metrics.cpu_ms_max;
          cResult[20] = metrics.cpu_ms_total;
          cResult[21] = metrics.requests;
          cResult[22] = metrics.wall_ms_total;
          cResult[23] = tmp27;
        }
        const obj14 = { label: tmp15, value: tmp18, critical: metrics.errors > 0 };
        const tmp23 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj14);
        cResult[14] = tmp18;
        cResult[15] = metrics.errors > 0;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      const obj15 = { label: tmp4, value: tmp7, hint: tmp9 };
      const tmp14 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj15);
      cResult[8] = tmp7;
      cResult[9] = tmp9;
      cResult[10] = tmp14;
      tmp12 = tmp14;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { children: null };
    const intl15 = util.intl;
    obj16.children = intl15.string(_modDef3827["Noami/"]);
    const tmp63 = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj16);
    cResult[0] = tmp63;
    let first = tmp63;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== title) {
    const obj17 = { title, children: first };
    const tmp66 = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj17);
    cResult[1] = title;
    cResult[2] = tmp66;
    let tmp64 = tmp66;
  } else {
    tmp64 = cResult[2];
  }
  return tmp64;
}) : (function EnvMetricsSection(arg0) {
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      const obj2 = { title, children: null };
      const obj3 = { label: null, value: null, hint: null };
      const intl13 = util.intl;
      obj3.label = intl13.string(_modDef3827.xtD4Zp);
      obj3.value = ConjureDebugFormat.formatCount(metrics.requests);
      const intl14 = util.intl;
      const obj4 = { time: null };
      obj4.time = ConjureDebugFormat.formatObservedAt(metrics.since);
      obj3.hint = intl14.formatToPlainString(_modDef3827["7KlGT6"], obj4);
      const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3), , , , , , ];
      const obj5 = { label: null, value: null, critical: null };
      const intl15 = util.intl;
      obj5.label = intl15.string(_modDef3827.gfRhR3);
      obj5.value = ConjureDebugFormat.formatCount(metrics.errors);
      obj5.critical = metrics.errors > 0;
      items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: null };
        const obj7 = { label: null, used: null, max: null, formatValue: null };
        const intl4 = util.intl;
        obj7.label = intl4.string(_modDef3827.LEJ5r3);
        obj7.used = metrics.cpu_ms_max;
        obj7.max = limits.cpu_ms_per_request;
        obj7.formatValue = ConjureDebugFormat.formatMs;
        const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj7), ];
        const obj8 = { label: null, value: null, hint: null };
        const intl5 = util.intl;
        obj8.label = intl5.string(_modDef3827.mSKImM);
        obj8.value = ConjureDebugFormat.formatMs(metrics.cpu_ms_total / metrics.requests);
        const intl6 = util.intl;
        const obj9 = { total: null, wall: null };
        const tmp9Result = ConjureDebugFormat;
        obj9.total = ConjureDebugFormat.formatMs(metrics.cpu_ms_total);
        const tmp9Result7 = ConjureDebugFormat;
        obj9.wall = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
        obj8.hint = intl6.formatToPlainString(_modDef3827.JqMU05, obj9);
        items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
        obj6.children = items1;
        let tmp = React5(timestampProducer, obj6);
        const tmp9Result8 = ConjureDebugFormat;
      } else {
        const obj = { label: null, value: null, hint: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3827.LEJ5r3);
        const intl2 = util.intl;
        obj.value = intl2.string(_modDef3827["2Ekb2b"]);
        const intl3 = util.intl;
        obj.hint = intl3.string(_modDef3827.G0aq7i);
        tmp = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp11Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp11Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: null, value: null };
          const intl7 = util.intl;
          obj10.label = intl7.string(_modDef3827.xvmL1D);
          obj10.value = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
          tmp11Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj10);
          const tmp9Result9 = ConjureDebugFormat;
        }
      }
      items[3] = tmp11Result;
      let tmp11Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: null, value: null, critical: true };
        const intl8 = util.intl;
        obj11.label = intl8.string(_modDef3827["4sQYwH"]);
        obj11.value = ConjureDebugFormat.formatCount(metrics.exceeded_cpu);
        tmp11Result3 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11);
        const tmp9Result10 = ConjureDebugFormat;
      }
      items[4] = tmp11Result3;
      const obj12 = { label: null, value: null, critical: null, hint: null };
      const intl9 = util.intl;
      obj12.label = intl9.string(_modDef3827.bQenOy);
      obj12.value = ConjureDebugFormat.formatCount(metrics.exceeded_memory);
      obj12.critical = metrics.exceeded_memory > 0;
      const intl10 = util.intl;
      const obj13 = { limit: null };
      const _HermesInternal = HermesInternal;
      obj13.limit = "" + limits.memory_mb + " MB";
      obj12.hint = intl10.formatToPlainString(_modDef3827["5jIZwv"], obj13);
      items[5] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
      let tmp11Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: null, value: null };
        const intl11 = util.intl;
        obj14.label = intl11.string(_modDef3827.xgpn4Y);
        obj14.value = ConjureDebugFormat.shortBuildLabel(metrics.build);
        tmp11Result4 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj14);
        const tmp9Result12 = ConjureDebugFormat;
      }
      items[6] = tmp11Result4;
      obj2.children = items;
      return React5(ConjureDebugPrimitives.DebugSection, obj2);
    }
  }
  const obj15 = { title, children: null };
  const obj16 = { children: null };
  const intl12 = util.intl;
  obj16.children = intl12.string(_modDef3827["Noami/"]);
  obj15.children = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj16);
  return hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj15);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function StorageSection(status) {
  let DebugSection = limits;
  let tmp = dependencyMap;
  const cResult = limits(576).c(6);
  status = status.status;
  ({ stable, preview, shared_data } = status.storage);
  limits = status.worker.limits;
  if (cResult[0] === limits) {
    if (cResult[1] === preview) {
      if (cResult[2] === shared_data) {
        if (cResult[3] === stable) {
          return cResult[4];
        }
      }
    }
  }
  if (shared_data) {
    let obj2 = { key: "shared", label: null, metrics: null };
    let intl = DebugSection(1126).intl;
    obj2.label = intl.string(_modDef3827.V5kbaH);
    obj2.metrics = stable;
    let items = [obj2];
    let items1 = items;
  } else {
    let obj3 = { key: "preview", label: DebugSection(17208).debugEnvLabel("preview"), metrics: preview };
    items1 = [obj3, ];
    let obj4 = { key: "stable", label: null, metrics: null };
    const DebugSectionResult = DebugSection(17208);
    obj4.label = DebugSection(17208).debugEnvLabel("stable");
    obj4.metrics = stable;
    items1[1] = obj4;
    const DebugSectionResult1 = DebugSection(17208);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let intl2 = DebugSection(1126).intl;
    const stringResult = intl2.string(_modDef3827.mRt7MW);
    cResult[5] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[5];
  }
  DebugSection = DebugSection(17210).DebugSection;
  let obj = limits(576);
  tmp = closure_5(DebugSection, {
    title: tmp4,
    children: items1.map((item) => {
      ({ key, label, metrics } = item);
      if (null == metrics) {
        const obj3 = { label, value: "\u2014" };
        let tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const obj4 = { label: null, value: null, hint: null };
        const intl2 = util.intl;
        const obj5 = { env: label };
        obj4.label = intl2.formatToPlainString(_modDef3827.u7kJJ4, obj5);
        obj4.value = ConjureDebugFormat.formatBytes(metrics.r2_bytes);
        const intl3 = util.intl;
        const tmp32 = _modDef3827;
        const obj = { count: null };
        const tmp = metrics.r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
        obj.count = ConjureDebugFormat.formatCount(metrics.r2_objects);
        obj4.hint = intl3.formatToPlainString(tmp, obj);
        const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4), ];
        let tmp4 = null;
        if (null != metrics.db_bytes) {
          const obj6 = { label: null, used: null, max: null, formatValue: null };
          const intl = util.intl;
          const obj7 = { env: label };
          obj6.label = intl.formatToPlainString(_modDef3827.mnbPqt, obj7);
          obj6.used = metrics.db_bytes;
          obj6.max = limits.db_bytes;
          obj6.formatValue = ConjureDebugFormat.formatBytes;
          tmp4 = hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj6);
        }
        const obj8 = { children: null };
        items[1] = tmp4;
        obj8.children = items;
        tmp18Result = React5(noop.Fragment, obj8, key);
      }
      return tmp18Result;
    })
  });
  cResult[0] = limits;
  cResult[1] = preview;
  cResult[2] = shared_data;
  cResult[3] = stable;
  cResult[4] = tmp;
  let obj5 = {
    title: tmp4,
    children: items1.map((item) => {
      ({ key, label, metrics } = item);
      if (null == metrics) {
        const obj3 = { label, value: "\u2014" };
        let tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const obj4 = { label: null, value: null, hint: null };
        const intl2 = util.intl;
        const obj5 = { env: label };
        obj4.label = intl2.formatToPlainString(_modDef3827.u7kJJ4, obj5);
        obj4.value = ConjureDebugFormat.formatBytes(metrics.r2_bytes);
        const intl3 = util.intl;
        const tmp32 = _modDef3827;
        const obj = { count: null };
        const tmp = metrics.r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
        obj.count = ConjureDebugFormat.formatCount(metrics.r2_objects);
        obj4.hint = intl3.formatToPlainString(tmp, obj);
        const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4), ];
        let tmp4 = null;
        if (null != metrics.db_bytes) {
          const obj6 = { label: null, used: null, max: null, formatValue: null };
          const intl = util.intl;
          const obj7 = { env: label };
          obj6.label = intl.formatToPlainString(_modDef3827.mnbPqt, obj7);
          obj6.used = metrics.db_bytes;
          obj6.max = limits.db_bytes;
          obj6.formatValue = ConjureDebugFormat.formatBytes;
          tmp4 = hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj6);
        }
        const obj8 = { children: null };
        items[1] = tmp4;
        obj8.children = items;
        tmp18Result = React5(noop.Fragment, obj8, key);
      }
      return tmp18Result;
    })
  };
}) : (function StorageSection(status) {
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: null, metrics: null };
    let intl = limits(1126).intl;
    obj3.label = intl.string(_modDef3827.V5kbaH);
    obj3.metrics = stable;
    let items = [obj3];
    let tmp4 = limits;
    let items1 = items;
  } else {
    let obj = { key: "preview", label: limits(17208).debugEnvLabel("preview"), metrics: tmp };
    items1 = [obj, ];
    let obj5 = { key: "stable", label: null, metrics: null };
    let obj2 = limits(17208);
    obj5.label = limits(17208).debugEnvLabel("stable");
    obj5.metrics = stable;
    items1[1] = obj5;
    tmp4 = limits;
    let obj4 = limits(17208);
  }
  let obj6 = { title: null, children: null };
  let intl2 = tmp4(1126).intl;
  obj6.title = intl2.string(_modDef3827.mRt7MW);
  obj6.children = items1.map((item) => {
    ({ key, label, metrics } = item);
    if (null == metrics) {
      const obj3 = { label, value: "\u2014" };
      let tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
    } else {
      const obj4 = { label: null, value: null, hint: null };
      const intl2 = util.intl;
      const obj5 = { env: label };
      obj4.label = intl2.formatToPlainString(_modDef3827.u7kJJ4, obj5);
      obj4.value = ConjureDebugFormat.formatBytes(metrics.r2_bytes);
      const intl3 = util.intl;
      const tmp32 = _modDef3827;
      const obj = { count: null };
      const tmp = metrics.r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
      obj.count = ConjureDebugFormat.formatCount(metrics.r2_objects);
      obj4.hint = intl3.formatToPlainString(tmp, obj);
      const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4), ];
      let tmp4 = null;
      if (null != metrics.db_bytes) {
        const obj6 = { label: null, used: null, max: null, formatValue: null };
        const intl = util.intl;
        const obj7 = { env: label };
        obj6.label = intl.formatToPlainString(_modDef3827.mnbPqt, obj7);
        obj6.used = metrics.db_bytes;
        obj6.max = limits.db_bytes;
        obj6.formatValue = ConjureDebugFormat.formatBytes;
        tmp4 = hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj6);
      }
      const obj8 = { children: null };
      items[1] = tmp4;
      obj8.children = items;
      tmp18Result = React5(noop.Fragment, obj8, key);
    }
    return tmp18Result;
  });
  return closure_5(tmp4(17210).DebugSection, obj6);
});
ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugWorkerTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugWorkerTab(arg0) {
  const cResult = c.c(10);
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
      if (cResult[2] === generated_at) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== status) {
        let tmp10Result = null;
        if (null != status) {
          const obj2 = { title: null, metrics: null, limits: null };
          const intl = util.intl;
          obj2.title = intl.string(_modDef3827.o5xzvl);
          obj2.metrics = status.worker.preview;
          obj2.limits = status.worker.limits;
          const items = [hasOwnProperty(closure_14, obj2), , , , , , , , ];
          const obj3 = { title: null, metrics: null, limits: null };
          const intl2 = util.intl;
          obj3.title = intl2.string(_modDef3827.n2X3ZK);
          obj3.metrics = status.worker.stable;
          obj3.limits = status.worker.limits;
          items[1] = hasOwnProperty(closure_14, obj3);
          const obj4 = { status };
          items[2] = hasOwnProperty(closure_15, obj4);
          let tmp12Result = null;
          if (null != status.bot) {
            const obj5 = { title: null, preview: null, stable: null, renderEnv: null };
            const intl3 = util.intl;
            obj5.title = intl3.string(_modDef3827["7mahem"]);
            obj5.preview = status.bot.preview;
            obj5.stable = status.bot.stable;
            obj5.renderEnv = function renderEnv(env, bot) {
              return closure_1_5(closure_1_10, { env, bot });
            };
            tmp12Result = hasOwnProperty(closure_9, obj5);
          }
          items[3] = tmp12Result;
          let tmp12Result5 = null;
          if (null != status.outbound) {
            const obj6 = { title: null, preview: null, stable: null, renderEnv: null };
            const intl4 = util.intl;
            obj6.title = intl4.string(_modDef3827.THneIO);
            obj6.preview = status.outbound.preview;
            obj6.stable = status.outbound.stable;
            obj6.renderEnv = function renderEnv(env, metrics) {
              return closure_1_5(closure_1_11, { env, metrics });
            };
            tmp12Result5 = hasOwnProperty(closure_9, obj6);
          }
          items[4] = tmp12Result5;
          let tmp12Result6 = null;
          if (null != status.runtime) {
            const obj7 = { title: null, preview: null, stable: null, renderEnv: null };
            const intl5 = util.intl;
            obj7.title = intl5.string(_modDef3827.vboq04);
            obj7.preview = status.runtime.preview;
            obj7.stable = status.runtime.stable;
            obj7.renderEnv = function renderEnv(env, runtime) {
              return closure_1_5(closure_1_12, { env, runtime });
            };
            tmp12Result6 = hasOwnProperty(closure_9, obj7);
          }
          items[5] = tmp12Result6;
          let tmp12Result7 = null;
          if (null != status.ai) {
            const obj8 = { title: null, preview: null, stable: null, renderEnv: null };
            const intl6 = util.intl;
            obj8.title = intl6.string(_modDef3827.UzhuEq);
            obj8.preview = status.ai.preview;
            obj8.stable = status.ai.stable;
            obj8.renderEnv = function renderEnv(env, metrics) {
              return closure_1_5(closure_1_13, { env, metrics });
            };
            tmp12Result7 = hasOwnProperty(closure_9, obj8);
          }
          items[6] = tmp12Result7;
          let tmp12Result8 = null;
          if (null != status.analytics) {
            const obj9 = { analytics: status.analytics };
            tmp12Result8 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugWorkerAnalyticsSection, obj9);
          }
          items[7] = tmp12Result8;
          const obj10 = { title: null, children: null };
          const intl7 = util.intl;
          obj10.title = intl7.string(_modDef3827.fQMpFp);
          const obj11 = { label: ConjureDebugLabels.debugEnvLabel("preview"), value: null };
          let str2 = "\u2014";
          let str3 = "\u2014";
          if (null != status.deployments.preview_build) {
            str3 = ConjureDebugFormat.shortBuildLabel(status.deployments.preview_build);
            const tmpResult4 = ConjureDebugFormat;
          }
          obj11.value = str3;
          const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11), ];
          const obj12 = { label: null, value: null };
          const tmpResult = ConjureDebugLabels;
          obj12.label = ConjureDebugLabels.debugEnvLabel("stable");
          if (null != status.deployments.stable_build) {
            str2 = ConjureDebugFormat.shortBuildLabel(status.deployments.stable_build);
            const tmpResult6 = ConjureDebugFormat;
          }
          const obj13 = { children: null };
          obj12.value = str2;
          items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
          obj10.children = items1;
          items[8] = React5(ConjureDebugPrimitives.DebugSection, obj10);
          obj13.children = items;
          tmp10Result = React5(timestampProducer, obj13);
          const tmpResult5 = ConjureDebugLabels;
        }
        cResult[4] = status;
        cResult[5] = tmp10Result;
        let tmp8 = tmp10Result;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.tab) {
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp8) {
            let tmp25 = cResult[9];
          }
          return tmp25;
        }
      }
      const obj14 = { style: tmp4.tab, children: null };
      const items2 = [tmp6, tmp8];
      obj14.children = items2;
      const tmp28 = React5(View, obj14);
      cResult[6] = tmp4.tab;
      cResult[7] = tmp6;
      cResult[8] = tmp8;
      cResult[9] = tmp28;
      tmp25 = tmp28;
    }
  }
  const tmp7 = hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh });
  cResult[0] = fetchState;
  cResult[1] = onRefresh;
  cResult[2] = generated_at;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function ConjureDebugWorkerTab(status) {
  status = status.status;
  ({ fetchState, onRefresh } = status);
  const obj = { style: closure_8().tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: null, metrics: null, limits: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3827.o5xzvl);
    obj2.metrics = status.worker.preview;
    obj2.limits = status.worker.limits;
    const items1 = [hasOwnProperty(closure_14, obj2), , , , , , , , ];
    const obj3 = { title: null, metrics: null, limits: null };
    const intl2 = util.intl;
    obj3.title = intl2.string(_modDef3827.n2X3ZK);
    obj3.metrics = status.worker.stable;
    obj3.limits = status.worker.limits;
    items1[1] = hasOwnProperty(closure_14, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(closure_15, obj4);
    let tmp3Result = null;
    if (null != status.bot) {
      const obj5 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3827["7mahem"]);
      obj5.preview = status.bot.preview;
      obj5.stable = status.bot.stable;
      obj5.renderEnv = function renderEnv(env, bot) {
        return closure_1_5(closure_1_10, { env, bot });
      };
      tmp3Result = hasOwnProperty(closure_9, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl4 = util.intl;
      obj6.title = intl4.string(_modDef3827.THneIO);
      obj6.preview = status.outbound.preview;
      obj6.stable = status.outbound.stable;
      obj6.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(closure_1_11, { env, metrics });
      };
      tmp3Result5 = hasOwnProperty(closure_9, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl5 = util.intl;
      obj7.title = intl5.string(_modDef3827.vboq04);
      obj7.preview = status.runtime.preview;
      obj7.stable = status.runtime.stable;
      obj7.renderEnv = function renderEnv(env, runtime) {
        return closure_1_5(closure_1_12, { env, runtime });
      };
      tmp3Result6 = hasOwnProperty(closure_9, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl6 = util.intl;
      obj8.title = intl6.string(_modDef3827.UzhuEq);
      obj8.preview = status.ai.preview;
      obj8.stable = status.ai.stable;
      obj8.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(closure_1_13, { env, metrics });
      };
      tmp3Result7 = hasOwnProperty(closure_9, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: null, children: null };
    const intl7 = util.intl;
    obj10.title = intl7.string(_modDef3827.fQMpFp);
    const obj11 = { label: ConjureDebugLabels.debugEnvLabel("preview"), value: null };
    let str2 = "\u2014";
    let str3 = "\u2014";
    if (null != status.deployments.preview_build) {
      str3 = ConjureDebugFormat.shortBuildLabel(status.deployments.preview_build);
      const tmp4Result4 = ConjureDebugFormat;
    }
    obj11.value = str3;
    const items2 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11), ];
    const obj12 = { label: null, value: null };
    const tmp4Result = ConjureDebugLabels;
    obj12.label = ConjureDebugLabels.debugEnvLabel("stable");
    if (null != status.deployments.stable_build) {
      str2 = ConjureDebugFormat.shortBuildLabel(status.deployments.stable_build);
      const tmp4Result6 = ConjureDebugFormat;
    }
    const obj13 = { children: null };
    obj12.value = str2;
    items2[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
    obj10.children = items2;
    items1[8] = React5(ConjureDebugPrimitives.DebugSection, obj10);
    obj13.children = items1;
    tmpResult = React5(timestampProducer, obj13);
    const tmp4Result5 = ConjureDebugLabels;
  }
  items[1] = tmpResult;
  obj.children = items;
  return React5(View, obj);
});