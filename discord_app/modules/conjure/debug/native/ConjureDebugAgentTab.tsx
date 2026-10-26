// === Module 12560: ConjureDebugAgentTab ===

// Module 12560 (ConjureDebugAgentTab)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10706 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 12554 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12555 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 12557 */;
import ConjureDebugAnalytics from "ConjureDebugAnalytics" /* 12559 */;
import useConjureDebugAgentStateDefault from "useConjureDebugAgentState" /* 12561 */;
import ConjureDebugGitSection from "ConjureDebugGitSection" /* 12562 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugAgentTab(arg0) {
  const cResult = c.c(72);
  ({ projectId, status, fetchState, onRefresh } = arg0);
  const tmp4 = closure_8();
  const tmp6 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace, lifetime, limits, session, contextCeiling } = tmp6);
  let tmp7 = null;
  if (typeof forceState === "object") {
    tmp7 = forceState;
  }
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
        let tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3830.JghNal);
        cResult[4] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === lifetime) {
        if (cResult[6] === status) {
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult1 = intl4.string(_modDef3830.dZHPE5);
            cResult[8] = stringResult1;
            let tmp20 = stringResult1;
          } else {
            tmp20 = cResult[8];
          }
          if (cResult[9] !== lastTurn) {
            let obj2 = { title: tmp20, children: null };
            if (null == lastTurn) {
              const obj3 = { children: null };
              const intl5 = util.intl;
              obj3.children = intl5.string(_modDef3830.DfVjal);
              let tmp120Result = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj3);
            } else {
              const intl40 = util.intl;
              const total = lastTurn.total;
              const obj4 = { label: intl40.string(_modDef3830["7X3i9d"]), value: null, hint: null };
              const intl41 = util.intl;
              const obj5 = { count: null };
              const stringResult2 = intl40.string(_modDef3830["7X3i9d"]);
              const tmpResult = ConjureDebugFormat;
              obj5.count = tmpResult.formatCount(ConjureUsageTypes.runeCount(total));
              obj4.value = intl41.formatToPlainString(_modDef3830.yHJxuP, obj5);
              const tmpResult44 = ConjureUsageTypes;
              const formatCountResult = ConjureDebugFormat.formatCount(total.input_tokens);
              const tmpResult45 = ConjureDebugFormat;
              const tmpResult46 = ConjureDebugFormat;
              const formatCountResult1 = ConjureDebugFormat.formatCount(total.output_tokens);
              const _HermesInternal7 = HermesInternal;
              obj4.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + ConjureDebugFormat.formatCount(total.cache_read_input_tokens) + " cache read";
              const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4), ];
              const obj6 = { label: null, value: null };
              const intl42 = util.intl;
              obj6.label = intl42.string(_modDef3830["8OUg09"]);
              let cache_hit_rate = lastTurn.cache_hit_rate;
              if (cache_hit_rate == null) {
                cache_hit_rate = ConjureUsageTypes.cacheHitRate(lastTurn.total);
                const tmpResult48 = ConjureUsageTypes;
              }
              const obj7 = { children: null };
              const _HermesInternal = HermesInternal;
              obj6.value = "" + Math.round(100 * cache_hit_rate) + "%";
              items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj6);
              obj7.children = items;
              tmp120Result = React5(timestampProducer, obj7);
              const tmpResult47 = ConjureDebugFormat;
            }
            obj2.children = tmp120Result;
            obj2 = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj2);
            cResult[9] = lastTurn;
            cResult[10] = obj2;
          } else {
            const _Symbol3 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = util.intl;
              const stringResult3 = intl6.string(_modDef3830.NbRk9a);
              cResult[11] = stringResult3;
              let tmp26 = stringResult3;
            } else {
              tmp26 = cResult[11];
            }
            if (cResult[12] === contextCeiling) {
              if (cResult[13] === lastCompaction) {
                if (cResult[15] !== lastDecline) {
                  let tmp38 = null;
                  if (null != lastDecline) {
                    const obj8 = { label: null, value: null, critical: true, hint: null };
                    const intl12 = util.intl;
                    obj8.label = intl12.string(_modDef3830["4BX5KK"]);
                    const tmpResult49 = ConjureDebugFormat;
                    const formatCountResult2 = ConjureDebugFormat.formatCount(lastDecline.projected);
                    const _HermesInternal3 = HermesInternal;
                    obj8.value = "" + formatCountResult2 + " / " + ConjureDebugFormat.formatCount(lastDecline.threshold);
                    const intl13 = util.intl;
                    const obj9 = { time: null };
                    const tmpResult50 = ConjureDebugFormat;
                    obj9.time = ConjureDebugFormat.formatObservedAt(lastDecline.observedAt);
                    obj8.hint = intl13.formatToPlainString(_modDef3830["6ngCax"], obj9);
                    tmp38 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
                    const tmpResult51 = ConjureDebugFormat;
                  }
                  cResult[15] = lastDecline;
                  cResult[16] = tmp38;
                  let tmp37 = tmp38;
                } else {
                  tmp37 = cResult[16];
                }
                const _Symbol4 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl14 = util.intl;
                  const stringResult4 = intl14.string(_modDef3830["1EiJeb"]);
                  cResult[17] = stringResult4;
                  let tmp41 = stringResult4;
                } else {
                  tmp41 = cResult[17];
                }
                if (cResult[18] === handleForceCompaction) {
                  if (cResult[19] === tmp43) {
                    let tmp44 = cResult[20];
                  }
                  let str10 = "text-muted";
                  if (null != tmp7) {
                    str10 = "text-muted";
                    if ("compacted" !== tmp7.outcome) {
                      str10 = "text-feedback-critical";
                    }
                  }
                  if (cResult[21] !== forceState) {
                    const result = ConjureDebugLabels.forceCompactionStatus(forceState);
                    cResult[21] = forceState;
                    cResult[22] = result;
                    let tmp47 = result;
                    const tmpResult52 = ConjureDebugLabels;
                  } else {
                    tmp47 = cResult[22];
                  }
                  if (cResult[23] === str10) {
                    if (cResult[24] === tmp47) {
                      let tmp49 = cResult[25];
                    }
                    let pendingTurn;
                    if (tmp7 != null) {
                      pendingTurn = tmp7.pendingTurn;
                    }
                    if (cResult[26] === pendingTurn) {
                      if (cResult[27] === handleForceCompactionOverride) {
                        let tmp53 = cResult[28];
                      }
                      if (cResult[29] === tmp4.forceCompaction) {
                        if (cResult[30] === tmp44) {
                          if (cResult[31] === tmp49) {
                            if (cResult[32] === tmp53) {
                              let tmp57 = cResult[33];
                            }
                            const _Symbol5 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl15 = util.intl;
                              const stringResult5 = intl15.string(_modDef3830["5qCjBu"]);
                              cResult[34] = stringResult5;
                              let tmp61 = stringResult5;
                            } else {
                              tmp61 = cResult[34];
                            }
                            let turnRunning = tmp63;
                            if ("pending" !== restartState) {
                              turnRunning = tmp6.turnRunning;
                            }
                            if (cResult[35] === handleRestartWorkspace) {
                              if (cResult[36] === tmp63) {
                                if (cResult[37] === turnRunning) {
                                  let tmp64 = cResult[38];
                                }
                                let str12 = "text-muted";
                                if (typeof restartState === "object") {
                                  str12 = "text-muted";
                                  if ("restarted" !== restartState.outcome) {
                                    str12 = "text-feedback-critical";
                                  }
                                }
                                if (cResult[39] !== restartState) {
                                  const sandboxRestartStatusResult = ConjureDebugLabels.sandboxRestartStatus(restartState);
                                  cResult[39] = restartState;
                                  cResult[40] = sandboxRestartStatusResult;
                                  let tmp67 = sandboxRestartStatusResult;
                                  const tmpResult53 = ConjureDebugLabels;
                                } else {
                                  tmp67 = cResult[40];
                                }
                                if (cResult[41] === str12) {
                                  if (cResult[42] === tmp67) {
                                    let tmp69 = cResult[43];
                                  }
                                  if (cResult[44] === tmp4.forceCompaction) {
                                    if (cResult[45] === tmp64) {
                                      if (cResult[46] === tmp69) {
                                        let tmp72 = cResult[47];
                                      }
                                      if (cResult[48] !== projectId) {
                                        const obj10 = { projectId };
                                        const tmp78 = hasOwnProperty(ConjureDebugGitSection.ConjureDebugRestartAgent, obj10);
                                        cResult[48] = projectId;
                                        cResult[49] = tmp78;
                                        let tmp76 = tmp78;
                                      } else {
                                        tmp76 = cResult[49];
                                      }
                                      if (cResult[50] === tmp37) {
                                        if (cResult[51] === tmp57) {
                                          if (cResult[52] === tmp72) {
                                            if (cResult[53] === tmp76) {
                                              if (cResult[54] === tmp28) {
                                                let tmp79 = cResult[55];
                                              }
                                              if (cResult[56] !== projectId) {
                                                const obj11 = { projectId };
                                                const tmp84 = hasOwnProperty(ConjureDebugGitSection.ConjureDebugGitSection, obj11);
                                                cResult[56] = projectId;
                                                cResult[57] = tmp84;
                                                let tmp82 = tmp84;
                                              } else {
                                                tmp82 = cResult[57];
                                              }
                                              if (cResult[58] === session) {
                                                if (cResult[59] === status) {
                                                  let tmp85 = cResult[60];
                                                }
                                                if (cResult[61] !== limits) {
                                                  let tmp98 = null;
                                                  if (null != limits) {
                                                    const obj12 = { title: null, children: null };
                                                    const intl23 = util.intl;
                                                    obj12.title = intl23.string(_modDef3830["LEIhp/"]);
                                                    const obj13 = { label: null, value: null };
                                                    const intl24 = util.intl;
                                                    obj13.label = intl24.string(_modDef3830.IlDBN3);
                                                    obj13.value = ConjureDebugFormat.formatCount(limits.max_subagent_iterations);
                                                    const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj13), , , , , ];
                                                    const obj14 = { label: null, value: null };
                                                    const intl25 = util.intl;
                                                    obj14.label = intl25.string(_modDef3830["ZdzKR+"]);
                                                    const intl26 = util.intl;
                                                    const obj15 = { count: null };
                                                    const tmpResult54 = ConjureDebugFormat;
                                                    obj15.count = ConjureDebugFormat.formatCount(limits.context_window_tokens);
                                                    obj14.value = intl26.formatToPlainString(_modDef3830.yHJxuP, obj15);
                                                    items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj14);
                                                    const obj16 = { label: null, value: null };
                                                    const intl27 = util.intl;
                                                    obj16.label = intl27.string(_modDef3830.cIhN2W);
                                                    const intl28 = util.intl;
                                                    const obj17 = { count: null };
                                                    const tmpResult55 = ConjureDebugFormat;
                                                    obj17.count = ConjureDebugFormat.formatCount(limits.per_turn_max_output_tokens);
                                                    obj16.value = intl28.formatToPlainString(_modDef3830.yHJxuP, obj17);
                                                    items1[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj16);
                                                    const obj18 = { label: null, value: null };
                                                    const intl29 = util.intl;
                                                    obj18.label = intl29.string(_modDef3830["+fOn/q"]);
                                                    const tmpResult56 = ConjureDebugFormat;
                                                    obj18.value = ConjureDebugFormat.formatCount(limits.max_user_message_chars);
                                                    items1[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj18);
                                                    const obj19 = { label: null, value: null };
                                                    const intl30 = util.intl;
                                                    obj19.label = intl30.string(_modDef3830.kIHga0);
                                                    const tmpResult57 = ConjureDebugFormat;
                                                    obj19.value = ConjureDebugFormat.formatCount(limits.max_build_attempts);
                                                    items1[4] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj19);
                                                    const obj20 = { label: null, value: null };
                                                    const intl31 = util.intl;
                                                    obj20.label = intl31.string(_modDef3830.Iw03yW);
                                                    const tmpResult58 = ConjureDebugFormat;
                                                    obj20.value = ConjureDebugFormat.formatCount(limits.max_session_attempts);
                                                    items1[5] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj20);
                                                    obj12.children = items1;
                                                    tmp98 = React5(ConjureDebugPrimitives.DebugSection, obj12);
                                                    const tmpResult59 = ConjureDebugFormat;
                                                  }
                                                  cResult[61] = limits;
                                                  cResult[62] = tmp98;
                                                  let tmp97 = tmp98;
                                                } else {
                                                  tmp97 = cResult[62];
                                                }
                                                if (cResult[63] === tmp4.tab) {
                                                  if (cResult[64] === tmp9) {
                                                    if (cResult[65] === tmp79) {
                                                      if (cResult[66] === tmp82) {
                                                        if (cResult[67] === tmp85) {
                                                          if (cResult[68] === tmp97) {
                                                            if (cResult[69] === tmp14) {
                                                              if (cResult[70] === tmp22) {
                                                                let tmp101 = cResult[71];
                                                              }
                                                              return tmp101;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj21 = { style: tmp4.tab, children: null };
                                                const items2 = [tmp9, tmp14, tmp22, tmp79, tmp82, tmp85, tmp97];
                                                obj21.children = items2;
                                                const tmp104 = React5(View, obj21);
                                                cResult[63] = tmp4.tab;
                                                cResult[64] = tmp9;
                                                cResult[65] = tmp79;
                                                cResult[66] = tmp82;
                                                cResult[67] = tmp85;
                                                cResult[68] = tmp97;
                                                cResult[69] = tmp14;
                                                cResult[70] = tmp22;
                                                cResult[71] = tmp104;
                                                tmp101 = tmp104;
                                              }
                                              if (null != session) {
                                                const obj22 = { title: null, children: null };
                                                const intl16 = util.intl;
                                                obj22.title = intl16.string(_modDef3830.EsSzCS);
                                                let tmp88Result = null;
                                                if (null != session) {
                                                  const obj23 = { label: null, value: null, hint: null };
                                                  const intl17 = util.intl;
                                                  obj23.label = intl17.string(_modDef3830.CLXHAs);
                                                  obj23.value = ConjureDebugFormat.formatObservedAt(session.instance_since);
                                                  const intl18 = util.intl;
                                                  obj23.hint = intl18.string(_modDef3830.UCwUEX);
                                                  const items3 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj23), , , ];
                                                  const obj24 = { label: null, value: null };
                                                  const intl19 = util.intl;
                                                  obj24.label = intl19.string(_modDef3830["8V8e1Z"]);
                                                  const tmpResult60 = ConjureDebugFormat;
                                                  obj24.value = ConjureDebugFormat.formatCount(session.sockets);
                                                  items3[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj24);
                                                  const obj25 = { label: null, value: null };
                                                  const intl20 = util.intl;
                                                  obj25.label = intl20.string(_modDef3830["4pBzYW"]);
                                                  const intl21 = util.intl;
                                                  const tmp5Result = _modDef3830;
                                                  obj25.value = intl21.string(session.turn_inflight ? tmp5Result.Wv025I : tmp5Result["7/lsFY"]);
                                                  items3[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj25);
                                                  let tmp91Result = null;
                                                  if (session.queued_messages > 0) {
                                                    const obj26 = { label: null, value: null };
                                                    const intl22 = util.intl;
                                                    obj26.label = intl22.string(_modDef3830["3oUYnv"]);
                                                    obj26.value = ConjureDebugFormat.formatCount(session.queued_messages);
                                                    tmp91Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj26);
                                                    const tmpResult62 = ConjureDebugFormat;
                                                  }
                                                  const obj27 = { children: null };
                                                  items3[3] = tmp91Result;
                                                  obj27.children = items3;
                                                  tmp88Result = React5(timestampProducer, obj27);
                                                  const tmpResult61 = ConjureDebugFormat;
                                                }
                                                const items4 = [tmp88Result, ];
                                                let analytics;
                                                if (status != null) {
                                                  analytics = status.analytics;
                                                }
                                                let tmp95 = null;
                                                if (null != analytics) {
                                                  const obj28 = { analytics: status.analytics };
                                                  tmp95 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj28);
                                                }
                                                items4[1] = tmp95;
                                                obj22.children = items4;
                                                let tmp88Result2 = React5(ConjureDebugPrimitives.DebugSection, obj22);
                                              } else {
                                                let analytics1;
                                                if (status != null) {
                                                  analytics1 = status.analytics;
                                                }
                                                tmp88Result2 = null;
                                              }
                                              cResult[58] = session;
                                              cResult[59] = status;
                                              cResult[60] = tmp88Result2;
                                              tmp85 = tmp88Result2;
                                            }
                                          }
                                        }
                                      }
                                      const obj29 = { title: tmp26, children: null };
                                      const items5 = [tmp28, tmp37, tmp57, tmp72, tmp76];
                                      obj29.children = items5;
                                      const tmp81 = React5(ConjureDebugPrimitives.DebugSection, obj29);
                                      cResult[50] = tmp37;
                                      cResult[51] = tmp57;
                                      cResult[52] = tmp72;
                                      cResult[53] = tmp76;
                                      cResult[54] = tmp28;
                                      cResult[55] = tmp81;
                                      tmp79 = tmp81;
                                    }
                                  }
                                  const obj30 = { style: tmp4.forceCompaction, children: null };
                                  const items6 = [tmp64, tmp69];
                                  obj30.children = items6;
                                  const tmp75 = React5(View, obj30);
                                  cResult[44] = tmp4.forceCompaction;
                                  cResult[45] = tmp64;
                                  cResult[46] = tmp69;
                                  cResult[47] = tmp75;
                                  tmp72 = tmp75;
                                }
                                const obj31 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str12, children: tmp67 };
                                const tmp71 = hasOwnProperty(Text_Text.Text, obj31);
                                cResult[41] = str12;
                                cResult[42] = tmp67;
                                cResult[43] = tmp71;
                                tmp69 = tmp71;
                              }
                            }
                            const obj32 = { variant: "secondary", size: "sm", text: tmp61, loading: "pending" === restartState, disabled: turnRunning, onPress: handleRestartWorkspace };
                            const tmp66 = hasOwnProperty(components_Button_Button.Button, obj32);
                            cResult[35] = handleRestartWorkspace;
                            cResult[36] = "pending" === restartState;
                            cResult[37] = turnRunning;
                            cResult[38] = tmp66;
                            tmp64 = tmp66;
                          }
                        }
                      }
                      const obj33 = { style: tmp4.forceCompaction, children: null };
                      const items7 = [tmp44, tmp49, tmp53];
                      obj33.children = items7;
                      const tmp60 = React5(View, obj33);
                      cResult[29] = tmp4.forceCompaction;
                      cResult[30] = tmp44;
                      cResult[31] = tmp49;
                      cResult[32] = tmp53;
                      cResult[33] = tmp60;
                      tmp57 = tmp60;
                    }
                    let pendingTurn1;
                    if (tmp7 != null) {
                      pendingTurn1 = tmp7.pendingTurn;
                    }
                    let tmp55 = null;
                    if (true === pendingTurn1) {
                      const obj34 = { children: null };
                      const obj35 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
                      const intl43 = util.intl;
                      obj35.text = intl43.string(_modDef3830.ZxG2AI);
                      obj35.onPress = handleForceCompactionOverride;
                      const items8 = [hasOwnProperty(components_Button_Button.Button, obj35), ];
                      const obj36 = { variant: "text-xs/normal", color: "text-muted", children: null };
                      const intl44 = util.intl;
                      obj36.children = intl44.string(_modDef3830.V73vdN);
                      items8[1] = hasOwnProperty(Text_Text.Text, obj36);
                      obj34.children = items8;
                      tmp55 = React5(timestampProducer, obj34);
                    }
                    let pendingTurn2;
                    if (tmp7 != null) {
                      pendingTurn2 = tmp7.pendingTurn;
                    }
                    cResult[26] = pendingTurn2;
                    cResult[27] = handleForceCompactionOverride;
                    cResult[28] = tmp55;
                    tmp53 = tmp55;
                  }
                  const obj37 = { variant: "text-xs/normal", color: str10, children: tmp47 };
                  const tmp51 = hasOwnProperty(Text_Text.Text, obj37);
                  cResult[23] = str10;
                  cResult[24] = tmp47;
                  cResult[25] = tmp51;
                  tmp49 = tmp51;
                }
                const obj38 = { variant: "secondary", size: "sm", text: tmp41, disabled: "pending" === forceState, onPress: handleForceCompaction };
                const tmp46 = hasOwnProperty(components_Button_Button.Button, obj38);
                cResult[18] = handleForceCompaction;
                cResult[19] = "pending" === forceState;
                cResult[20] = tmp46;
                tmp44 = tmp46;
              }
            }
            if (null == lastCompaction) {
              if (null != contextCeiling) {
                const intl8 = util.intl;
                const obj39 = { ceiling: ConjureDebugFormat.formatCount(contextCeiling) };
                let formatToPlainStringResult = intl8.formatToPlainString(_modDef3830.GMLCNv, obj39);
                const tmpResult63 = ConjureDebugFormat;
              } else {
                const intl7 = util.intl;
                formatToPlainStringResult = intl7.string(_modDef3830.s0U5Fv);
              }
              const obj40 = { children: formatToPlainStringResult };
              let tmp29Result = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj40);
              cResult[12] = contextCeiling;
              cResult[13] = lastCompaction;
              cResult[14] = tmp29Result;
            }
            const obj41 = { children: null };
            const obj42 = { label: null, used: null, max: null, formatValue: null };
            const intl9 = util.intl;
            obj42.label = intl9.string(_modDef3830.Kw5wiQ);
            obj42.used = lastCompaction.tokensAfter;
            obj42.max = contextCeiling;
            obj42.formatValue = ConjureDebugFormat.formatCount;
            const items9 = [hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj42), ];
            const obj43 = { label: null, value: null, hint: null };
            const intl10 = util.intl;
            obj43.label = intl10.string(_modDef3830.mRbSns);
            const tmpResult64 = ConjureDebugFormat;
            const formatCountResult3 = ConjureDebugFormat.formatCount(lastCompaction.tokensBefore);
            const _HermesInternal2 = HermesInternal;
            obj43.value = "" + formatCountResult3 + " \u2192 " + ConjureDebugFormat.formatCount(lastCompaction.tokensAfter);
            const intl11 = util.intl;
            const obj44 = { count: null, time: null };
            const tmpResult65 = ConjureDebugFormat;
            obj44.count = ConjureDebugFormat.formatCount(lastCompaction.retainedMessages);
            const tmpResult66 = ConjureDebugFormat;
            obj44.time = ConjureDebugFormat.formatObservedAt(lastCompaction.observedAt);
            obj43.hint = intl11.formatToPlainString(_modDef3830.Vq3skS, obj44);
            items9[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj43);
            obj41.children = items9;
            tmp29Result = React5(timestampProducer, obj41);
            const tmpResult67 = ConjureDebugFormat;
          }
        }
      }
      let obj45 = { title: tmp12, children: null };
      if (null == lifetime) {
        const obj46 = { children: null };
        const intl3 = util.intl;
        obj46.children = intl3.string(_modDef3830.s0U5Fv);
        let tmp105Result = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj46);
      } else {
        const obj47 = { label: null, value: null, hint: null };
        const intl32 = util.intl;
        obj47.label = intl32.string(_modDef3830["9nqym2"]);
        const tmpResult68 = ConjureDebugFormat;
        obj47.value = tmpResult68.formatCount(ConjureUsageTypes.runesFromUsd(lifetime.cost_usd));
        const intl33 = util.intl;
        const obj48 = { count: null };
        const tmpResult69 = ConjureUsageTypes;
        obj48.count = ConjureDebugFormat.formatCount(lifetime.turns);
        obj47.hint = intl33.formatToPlainString(_modDef3830.NCdUIh, obj48);
        const items10 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj47), , , , ];
        const intl34 = util.intl;
        const orchestrator = lifetime.orchestrator;
        const tmpResult70 = ConjureDebugFormat;
        const obj49 = { label: intl34.string(_modDef3830.xtxP0e), value: null, hint: null };
        const intl35 = util.intl;
        const obj50 = { count: null };
        const stringResult6 = intl34.string(_modDef3830.xtxP0e);
        const tmpResult71 = ConjureDebugFormat;
        obj50.count = tmpResult71.formatCount(ConjureUsageTypes.runeCount(orchestrator));
        obj49.value = intl35.formatToPlainString(_modDef3830.yHJxuP, obj50);
        const tmpResult72 = ConjureUsageTypes;
        const formatCountResult4 = ConjureDebugFormat.formatCount(orchestrator.input_tokens);
        const tmpResult73 = ConjureDebugFormat;
        const tmpResult74 = ConjureDebugFormat;
        const formatCountResult5 = ConjureDebugFormat.formatCount(orchestrator.output_tokens);
        const _HermesInternal4 = HermesInternal;
        obj49.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + ConjureDebugFormat.formatCount(orchestrator.cache_read_input_tokens) + " cache read";
        items10[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj49);
        const intl36 = util.intl;
        const codegen = lifetime.codegen;
        const tmpResult75 = ConjureDebugFormat;
        const obj51 = { label: intl36.string(_modDef3830["9Sj3SX"]), value: null, hint: null };
        const intl37 = util.intl;
        const obj52 = { count: null };
        const stringResult7 = intl36.string(_modDef3830["9Sj3SX"]);
        const tmpResult76 = ConjureDebugFormat;
        obj52.count = tmpResult76.formatCount(ConjureUsageTypes.runeCount(codegen));
        obj51.value = intl37.formatToPlainString(_modDef3830.yHJxuP, obj52);
        const tmpResult77 = ConjureUsageTypes;
        const formatCountResult6 = ConjureDebugFormat.formatCount(codegen.input_tokens);
        const tmpResult78 = ConjureDebugFormat;
        const tmpResult79 = ConjureDebugFormat;
        const formatCountResult7 = ConjureDebugFormat.formatCount(codegen.output_tokens);
        const _HermesInternal5 = HermesInternal;
        obj51.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + ConjureDebugFormat.formatCount(codegen.cache_read_input_tokens) + " cache read";
        items10[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj51);
        const intl38 = util.intl;
        const tmpResult80 = ConjureDebugFormat;
        const stringResult8 = intl38.string(_modDef3830.ANCEo3);
        const usageOrEmptyResult = ConjureUsageTypes.usageOrEmpty(lifetime.compaction);
        const obj53 = { label: stringResult8, value: null, hint: null };
        const intl39 = util.intl;
        const obj54 = { count: null };
        const tmpResult81 = ConjureUsageTypes;
        const tmpResult82 = ConjureDebugFormat;
        obj54.count = tmpResult82.formatCount(ConjureUsageTypes.runeCount(usageOrEmptyResult));
        obj53.value = intl39.formatToPlainString(_modDef3830.yHJxuP, obj54);
        const tmpResult83 = ConjureUsageTypes;
        const formatCountResult8 = ConjureDebugFormat.formatCount(usageOrEmptyResult.input_tokens);
        const tmpResult84 = ConjureDebugFormat;
        const tmpResult85 = ConjureDebugFormat;
        const formatCountResult9 = ConjureDebugFormat.formatCount(usageOrEmptyResult.output_tokens);
        const _HermesInternal6 = HermesInternal;
        obj53.hint = "" + formatCountResult8 + " in \u00B7 " + formatCountResult9 + " out \u00B7 " + ConjureDebugFormat.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
        items10[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj53);
        let outcomes;
        if (status != null) {
          const agent = status.agent;
          if (agent != null) {
            outcomes = agent.outcomes;
          }
        }
        let tmp15Result2 = null;
        if (null != outcomes) {
          const _Object = Object;
          tmp15Result2 = null;
          if (Object.keys(status.agent.outcomes).length > 0) {
            const obj55 = { label: null, value: null };
            const intl2 = util.intl;
            obj55.label = intl2.string(_modDef3830.SQHm7C);
            const _Object2 = Object;
            const entries = Object.entries(status.agent.outcomes);
            const sorted = entries.sort((arg0, arg1) => _slicedToArray(arg1, 2)[1] - _slicedToArray(arg0, 2)[1]);
            const mapped = sorted.map((item) => {
              [tmp2, tmp3] = item;
              const tmp = _slicedToArray(item, 2);
              return "" + ConjureDebugFormat.formatCount(tmp3) + " " + tmp2;
            });
            obj55.value = mapped.join(" \u00B7 ");
            tmp15Result2 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj55);
          }
        }
        const obj56 = { children: null };
        items10[4] = tmp15Result2;
        obj56.children = items10;
        tmp105Result = React5(timestampProducer, obj56);
        const tmpResult86 = ConjureDebugFormat;
      }
      obj45.children = tmp105Result;
      obj45 = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj45);
      cResult[5] = lifetime;
      cResult[6] = status;
      cResult[7] = obj45;
    }
  }
  const tmp10 = hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh });
  cResult[0] = fetchState;
  cResult[1] = onRefresh;
  cResult[2] = generated_at;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function ConjureDebugAgentTab(arg0) {
  ({ projectId, status } = arg0);
  ({ fetchState, onRefresh } = arg0);
  const tmp = closure_8();
  const tmp4 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, lifetime, limits, session, contextCeiling } = tmp4);
  let tmp5 = null;
  ({ turnRunning, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace } = tmp4);
  if (typeof forceState === "object") {
    tmp5 = forceState;
  }
  const obj = { style: tmp.tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj2 = { title: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3830.JghNal);
  if (null == lifetime) {
    const obj3 = { children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(_modDef3830.s0U5Fv);
    let tmp6Result5 = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj3);
  } else {
    const obj4 = { label: null, value: null, hint: null };
    const intl32 = util.intl;
    obj4.label = intl32.string(_modDef3830["9nqym2"]);
    const tmp9Result = ConjureDebugFormat;
    obj4.value = tmp9Result.formatCount(ConjureUsageTypes.runesFromUsd(lifetime.cost_usd));
    const intl33 = util.intl;
    const obj5 = { count: null };
    const tmp9Result44 = ConjureUsageTypes;
    obj5.count = ConjureDebugFormat.formatCount(lifetime.turns);
    obj4.hint = intl33.formatToPlainString(_modDef3830.NCdUIh, obj5);
    const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4), , , , ];
    const intl34 = util.intl;
    const orchestrator = lifetime.orchestrator;
    const tmp9Result45 = ConjureDebugFormat;
    const obj6 = { label: intl34.string(_modDef3830.xtxP0e), value: null, hint: null };
    const intl35 = util.intl;
    const obj7 = { count: null };
    const stringResult = intl34.string(_modDef3830.xtxP0e);
    const tmp9Result46 = ConjureDebugFormat;
    obj7.count = tmp9Result46.formatCount(ConjureUsageTypes.runeCount(orchestrator));
    obj6.value = intl35.formatToPlainString(_modDef3830.yHJxuP, obj7);
    const tmp9Result47 = ConjureUsageTypes;
    const formatCountResult = ConjureDebugFormat.formatCount(orchestrator.input_tokens);
    const tmp9Result48 = ConjureDebugFormat;
    const tmp9Result49 = ConjureDebugFormat;
    const formatCountResult1 = ConjureDebugFormat.formatCount(orchestrator.output_tokens);
    const _HermesInternal4 = HermesInternal;
    obj6.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + ConjureDebugFormat.formatCount(orchestrator.cache_read_input_tokens) + " cache read";
    items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj6);
    const intl36 = util.intl;
    const codegen = lifetime.codegen;
    const tmp9Result50 = ConjureDebugFormat;
    const obj8 = { label: intl36.string(_modDef3830["9Sj3SX"]), value: null, hint: null };
    const intl37 = util.intl;
    const obj9 = { count: null };
    const stringResult1 = intl36.string(_modDef3830["9Sj3SX"]);
    const tmp9Result51 = ConjureDebugFormat;
    obj9.count = tmp9Result51.formatCount(ConjureUsageTypes.runeCount(codegen));
    obj8.value = intl37.formatToPlainString(_modDef3830.yHJxuP, obj9);
    const tmp9Result52 = ConjureUsageTypes;
    const formatCountResult2 = ConjureDebugFormat.formatCount(codegen.input_tokens);
    const tmp9Result53 = ConjureDebugFormat;
    const tmp9Result54 = ConjureDebugFormat;
    const formatCountResult3 = ConjureDebugFormat.formatCount(codegen.output_tokens);
    const _HermesInternal5 = HermesInternal;
    obj8.hint = "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + ConjureDebugFormat.formatCount(codegen.cache_read_input_tokens) + " cache read";
    items1[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
    const intl38 = util.intl;
    const tmp9Result55 = ConjureDebugFormat;
    const stringResult2 = intl38.string(_modDef3830.ANCEo3);
    const usageOrEmptyResult = ConjureUsageTypes.usageOrEmpty(lifetime.compaction);
    const obj10 = { label: stringResult2, value: null, hint: null };
    const intl39 = util.intl;
    const obj11 = { count: null };
    const tmp9Result56 = ConjureUsageTypes;
    const tmp9Result57 = ConjureDebugFormat;
    obj11.count = tmp9Result57.formatCount(ConjureUsageTypes.runeCount(usageOrEmptyResult));
    obj10.value = intl39.formatToPlainString(_modDef3830.yHJxuP, obj11);
    const tmp9Result58 = ConjureUsageTypes;
    const formatCountResult4 = ConjureDebugFormat.formatCount(usageOrEmptyResult.input_tokens);
    const tmp9Result59 = ConjureDebugFormat;
    const tmp9Result60 = ConjureDebugFormat;
    const formatCountResult5 = ConjureDebugFormat.formatCount(usageOrEmptyResult.output_tokens);
    const _HermesInternal6 = HermesInternal;
    obj10.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + ConjureDebugFormat.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
    items1[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj10);
    let outcomes;
    if (status != null) {
      const agent = status.agent;
      if (agent != null) {
        outcomes = agent.outcomes;
      }
    }
    let tmp8Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp8Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj12 = { label: null, value: null };
        const intl2 = util.intl;
        obj12.label = intl2.string(_modDef3830.SQHm7C);
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        const mapped = sorted.map((item) => {
          [tmp, tmp2] = item;
          return "" + ConjureDebugFormat.formatCount(tmp2) + " " + tmp;
        });
        obj12.value = mapped.join(" \u00B7 ");
        tmp8Result6 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
      }
    }
    const obj13 = { children: null };
    items1[4] = tmp8Result6;
    obj13.children = items1;
    tmp6Result5 = React5(timestampProducer, obj13);
    const tmp9Result61 = ConjureDebugFormat;
  }
  obj2.children = tmp6Result5;
  items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj2);
  const obj14 = { title: null, children: null };
  const intl4 = util.intl;
  obj14.title = intl4.string(_modDef3830.dZHPE5);
  if (null == lastTurn) {
    const obj15 = { children: null };
    const intl5 = util.intl;
    obj15.children = intl5.string(_modDef3830.DfVjal);
    let tmp8Result7 = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj15);
  } else {
    const intl40 = util.intl;
    const total = lastTurn.total;
    const obj16 = { label: intl40.string(_modDef3830["7X3i9d"]), value: null, hint: null };
    const intl41 = util.intl;
    const obj17 = { count: null };
    const stringResult3 = intl40.string(_modDef3830["7X3i9d"]);
    const tmp9Result62 = ConjureDebugFormat;
    obj17.count = tmp9Result62.formatCount(ConjureUsageTypes.runeCount(total));
    obj16.value = intl41.formatToPlainString(_modDef3830.yHJxuP, obj17);
    const tmp9Result63 = ConjureUsageTypes;
    const formatCountResult6 = ConjureDebugFormat.formatCount(total.input_tokens);
    const tmp9Result64 = ConjureDebugFormat;
    const tmp9Result65 = ConjureDebugFormat;
    const formatCountResult7 = ConjureDebugFormat.formatCount(total.output_tokens);
    const _HermesInternal7 = HermesInternal;
    obj16.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + ConjureDebugFormat.formatCount(total.cache_read_input_tokens) + " cache read";
    const items2 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj16), ];
    const obj18 = { label: null, value: null };
    const intl42 = util.intl;
    obj18.label = intl42.string(_modDef3830["8OUg09"]);
    let cache_hit_rate = lastTurn.cache_hit_rate;
    if (cache_hit_rate == null) {
      cache_hit_rate = ConjureUsageTypes.cacheHitRate(lastTurn.total);
      const tmp9Result67 = ConjureUsageTypes;
    }
    const obj19 = { children: null };
    const _HermesInternal = HermesInternal;
    obj18.value = "" + Math.round(100 * cache_hit_rate) + "%";
    items2[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj18);
    obj19.children = items2;
    tmp8Result7 = React5(timestampProducer, obj19);
    const tmp9Result66 = ConjureDebugFormat;
  }
  obj14.children = tmp8Result7;
  items[2] = hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj14);
  const obj20 = { title: null, children: null };
  const intl6 = util.intl;
  obj20.title = intl6.string(_modDef3830.NbRk9a);
  if (null != lastCompaction) {
    if (null != contextCeiling) {
      const obj21 = { children: null };
      const obj22 = { label: null, used: null, max: null, formatValue: null };
      const intl9 = util.intl;
      obj22.label = intl9.string(_modDef3830.Kw5wiQ);
      obj22.used = lastCompaction.tokensAfter;
      obj22.max = contextCeiling;
      obj22.formatValue = ConjureDebugFormat.formatCount;
      const items3 = [hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj22), ];
      const obj23 = { label: null, value: null, hint: null };
      const intl10 = util.intl;
      obj23.label = intl10.string(_modDef3830.mRbSns);
      const tmp9Result68 = ConjureDebugFormat;
      const formatCountResult8 = ConjureDebugFormat.formatCount(lastCompaction.tokensBefore);
      const _HermesInternal2 = HermesInternal;
      obj23.value = "" + formatCountResult8 + " \u2192 " + ConjureDebugFormat.formatCount(lastCompaction.tokensAfter);
      const intl11 = util.intl;
      const obj24 = { count: null, time: null };
      const tmp9Result69 = ConjureDebugFormat;
      obj24.count = ConjureDebugFormat.formatCount(lastCompaction.retainedMessages);
      const tmp9Result70 = ConjureDebugFormat;
      obj24.time = ConjureDebugFormat.formatObservedAt(lastCompaction.observedAt);
      obj23.hint = intl11.formatToPlainString(_modDef3830.Vq3skS, obj24);
      items3[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj23);
      obj21.children = items3;
      let tmp8Result11 = React5(timestampProducer, obj21);
      const tmp9Result71 = ConjureDebugFormat;
    }
    const items4 = [tmp8Result11, , , , ];
    let tmp8Result8 = null;
    if (null != lastDecline) {
      const obj25 = { label: null, value: null, critical: true, hint: null };
      const intl12 = util.intl;
      obj25.label = intl12.string(_modDef3830["4BX5KK"]);
      const tmp9Result72 = ConjureDebugFormat;
      const formatCountResult9 = ConjureDebugFormat.formatCount(lastDecline.projected);
      const _HermesInternal3 = HermesInternal;
      obj25.value = "" + formatCountResult9 + " / " + ConjureDebugFormat.formatCount(lastDecline.threshold);
      const intl13 = util.intl;
      const obj26 = { time: null };
      const tmp9Result73 = ConjureDebugFormat;
      obj26.time = ConjureDebugFormat.formatObservedAt(lastDecline.observedAt);
      obj25.hint = intl13.formatToPlainString(_modDef3830["6ngCax"], obj26);
      tmp8Result8 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj25);
      const tmp9Result74 = ConjureDebugFormat;
    }
    items4[1] = tmp8Result8;
    const obj27 = { style: tmp.forceCompaction, children: null };
    const obj28 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
    const intl14 = util.intl;
    obj28.text = intl14.string(_modDef3830["1EiJeb"]);
    obj28.disabled = "pending" === forceState;
    obj28.onPress = handleForceCompaction;
    const items5 = [hasOwnProperty(components_Button_Button.Button, obj28), , ];
    let str9 = "text-muted";
    if (null != tmp5) {
      str9 = "text-muted";
      if ("compacted" !== tmp5.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj29 = { variant: "text-xs/normal", color: str9, children: ConjureDebugLabels.forceCompactionStatus(forceState) };
    items5[1] = hasOwnProperty(Text_Text.Text, obj29);
    let pendingTurn;
    if (tmp5 != null) {
      pendingTurn = tmp5.pendingTurn;
    }
    let tmp6Result6 = null;
    if (true === pendingTurn) {
      const obj30 = { children: null };
      const obj31 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
      const intl43 = util.intl;
      obj31.text = intl43.string(_modDef3830.ZxG2AI);
      obj31.onPress = handleForceCompactionOverride;
      const items6 = [hasOwnProperty(components_Button_Button.Button, obj31), ];
      const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl44 = util.intl;
      obj32.children = intl44.string(_modDef3830.V73vdN);
      items6[1] = hasOwnProperty(Text_Text.Text, obj32);
      obj30.children = items6;
      tmp6Result6 = React5(timestampProducer, obj30);
    }
    items5[2] = tmp6Result6;
    obj27.children = items5;
    items4[2] = React5(View, obj27);
    const obj33 = { style: tmp.forceCompaction, children: null };
    const obj34 = { variant: "secondary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
    const intl15 = util.intl;
    obj34.text = intl15.string(_modDef3830["5qCjBu"]);
    let tmp25 = "pending" === restartState;
    obj34.loading = tmp25;
    if (!tmp25) {
      tmp25 = turnRunning;
    }
    obj34.disabled = tmp25;
    obj34.onPress = handleRestartWorkspace;
    const items7 = [hasOwnProperty(components_Button_Button.Button, obj34), ];
    let str11 = "text-muted";
    if (typeof restartState === "object") {
      str11 = "text-muted";
      if ("restarted" !== restartState.outcome) {
        str11 = "text-feedback-critical";
      }
    }
    const obj35 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: null };
    const tmp9Result75 = ConjureDebugLabels;
    obj35.children = ConjureDebugLabels.sandboxRestartStatus(restartState);
    items7[1] = hasOwnProperty(Text_Text.Text, obj35);
    obj33.children = items7;
    items4[3] = React5(View, obj33);
    const obj36 = { projectId };
    items4[4] = hasOwnProperty(ConjureDebugGitSection.ConjureDebugRestartAgent, obj36);
    obj20.children = items4;
    items[3] = React5(ConjureDebugPrimitives.DebugSection, obj20);
    const obj37 = { projectId };
    items[4] = hasOwnProperty(ConjureDebugGitSection.ConjureDebugGitSection, obj37);
    if (null != session) {
      const obj38 = { title: null, children: null };
      const intl16 = util.intl;
      obj38.title = intl16.string(_modDef3830.EsSzCS);
      let tmp6Result7 = null;
      if (null != session) {
        const obj39 = { label: null, value: null, hint: null };
        const intl17 = util.intl;
        obj39.label = intl17.string(_modDef3830.CLXHAs);
        obj39.value = ConjureDebugFormat.formatObservedAt(session.instance_since);
        const intl18 = util.intl;
        obj39.hint = intl18.string(_modDef3830.UCwUEX);
        const items8 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj39), , , ];
        const obj40 = { label: null, value: null };
        const intl19 = util.intl;
        obj40.label = intl19.string(_modDef3830["8V8e1Z"]);
        const tmp9Result77 = ConjureDebugFormat;
        obj40.value = ConjureDebugFormat.formatCount(session.sockets);
        items8[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj40);
        const obj41 = { label: null, value: null };
        const intl20 = util.intl;
        obj41.label = intl20.string(_modDef3830["4pBzYW"]);
        const intl21 = util.intl;
        const tmp2Result = _modDef3830;
        obj41.value = intl21.string(session.turn_inflight ? tmp2Result.Wv025I : tmp2Result["7/lsFY"]);
        items8[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj41);
        let tmp8Result9 = null;
        if (session.queued_messages > 0) {
          const obj42 = { label: null, value: null };
          const intl22 = util.intl;
          obj42.label = intl22.string(_modDef3830["3oUYnv"]);
          obj42.value = ConjureDebugFormat.formatCount(session.queued_messages);
          tmp8Result9 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj42);
          const tmp9Result79 = ConjureDebugFormat;
        }
        const obj43 = { children: null };
        items8[3] = tmp8Result9;
        obj43.children = items8;
        tmp6Result7 = React5(timestampProducer, obj43);
        const tmp9Result78 = ConjureDebugFormat;
      }
      const items9 = [tmp6Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp8Result10 = null;
      if (null != analytics) {
        const obj44 = { analytics: status.analytics };
        tmp8Result10 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj44);
      }
      items9[1] = tmp8Result10;
      obj38.children = items9;
      let tmp6Result8 = React5(ConjureDebugPrimitives.DebugSection, obj38);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp6Result8 = null;
    }
    items[5] = tmp6Result8;
    let tmp6Result9 = null;
    if (null != limits) {
      const obj45 = { title: null, children: null };
      const intl23 = util.intl;
      obj45.title = intl23.string(_modDef3830["LEIhp/"]);
      const obj46 = { label: null, value: null };
      const intl24 = util.intl;
      obj46.label = intl24.string(_modDef3830.IlDBN3);
      obj46.value = ConjureDebugFormat.formatCount(limits.max_subagent_iterations);
      const items10 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj46), , , , , ];
      const obj47 = { label: null, value: null };
      const intl25 = util.intl;
      obj47.label = intl25.string(_modDef3830["ZdzKR+"]);
      const intl26 = util.intl;
      const obj48 = { count: null };
      const tmp9Result80 = ConjureDebugFormat;
      obj48.count = ConjureDebugFormat.formatCount(limits.context_window_tokens);
      obj47.value = intl26.formatToPlainString(_modDef3830.yHJxuP, obj48);
      items10[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj47);
      const obj49 = { label: null, value: null };
      const intl27 = util.intl;
      obj49.label = intl27.string(_modDef3830.cIhN2W);
      const intl28 = util.intl;
      const obj50 = { count: null };
      const tmp9Result81 = ConjureDebugFormat;
      obj50.count = ConjureDebugFormat.formatCount(limits.per_turn_max_output_tokens);
      obj49.value = intl28.formatToPlainString(_modDef3830.yHJxuP, obj50);
      items10[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj49);
      const obj51 = { label: null, value: null };
      const intl29 = util.intl;
      obj51.label = intl29.string(_modDef3830["+fOn/q"]);
      const tmp9Result82 = ConjureDebugFormat;
      obj51.value = ConjureDebugFormat.formatCount(limits.max_user_message_chars);
      items10[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj51);
      const obj52 = { label: null, value: null };
      const intl30 = util.intl;
      obj52.label = intl30.string(_modDef3830.kIHga0);
      const tmp9Result83 = ConjureDebugFormat;
      obj52.value = ConjureDebugFormat.formatCount(limits.max_build_attempts);
      items10[4] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj52);
      const obj53 = { label: null, value: null };
      const intl31 = util.intl;
      obj53.label = intl31.string(_modDef3830.Iw03yW);
      const tmp9Result84 = ConjureDebugFormat;
      obj53.value = ConjureDebugFormat.formatCount(limits.max_session_attempts);
      items10[5] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj53);
      obj45.children = items10;
      tmp6Result9 = React5(ConjureDebugPrimitives.DebugSection, obj45);
      const tmp9Result85 = ConjureDebugFormat;
    }
    items[6] = tmp6Result9;
    obj.children = items;
    return React5(View, obj);
  }
  if (null != contextCeiling) {
    const intl8 = util.intl;
    const obj54 = { ceiling: ConjureDebugFormat.formatCount(contextCeiling) };
    let formatToPlainStringResult = intl8.formatToPlainString(_modDef3830.GMLCNv, obj54);
    const tmp9Result86 = ConjureDebugFormat;
  } else {
    const intl7 = util.intl;
    formatToPlainStringResult = intl7.string(_modDef3830.s0U5Fv);
  }
  tmp8Result11 = hasOwnProperty(ConjureDebugPrimitives.DebugNote, { children: formatToPlainStringResult });
});