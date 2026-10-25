// discord_app/modules/conjure/agent_activity/native/ConjureActivityBox.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import ConjureNativeStatusLineDefault from "ConjureNativeStatusLine.tsx";
import ConjureSubagentMark from "ConjureSubagentMark.tsx";
import ConjureNativeStepImagesDefault from "../../chat/native/ConjureNativeStepImages.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4971);
let obj2 = {
  activityBox: { marginLeft: -fn(12354).RAIL_INDENT },
  activityDetail: null,
  stepDetail: null,
  stepLine: null,
  stepCommand: null,
};
let obj3 = { marginLeft: -fn(12354).RAIL_INDENT };
obj2.activityDetail = { paddingLeft: fn(12354).RAIL_INDENT };
let obj4 = { paddingLeft: fn(12354).RAIL_INDENT };
obj2.stepDetail = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
let obj5 = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj2.stepLine = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.stepCommand = { fontFamily: fn(1087).Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TurnStatusLine(projectId) {
      const cResult = projectId(epoch[9]).c(31);
      projectId = projectId.projectId;
      ({ tree, turnActive } = projectId);
      epoch = projectId.epoch;
      const tmp4 = closure_8();
      let obj = projectId(epoch[9]);
      [tmp6, _slicedToArray] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return _slicedToArray((arg0) => !arg0);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tree.steps) {
        if (cResult[2] === tree.tasks) {
          const turn = tree.turn;
          let durationMs;
          if (turn != null) {
            durationMs = turn.durationMs;
          }
          if (cResult[3] === durationMs) {
            if (cResult[4] === turnActive) {
              noop = cResult[5];
              let tmp11 = cResult[6];
            }
            if (cResult[9] !== tree.steps) {
              let someResult = tree.steps.length > 1;
              if (!someResult) {
                const steps = tree.steps;
                someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
              }
              cResult[9] = tree.steps;
              cResult[10] = someResult;
              let tmp22 = someResult;
            } else {
              tmp22 = cResult[10];
            }
            let tmp25;
            if (projectId.besideAvatar) {
              tmp25 = null;
            }
            let tmp26;
            if (tmp22) {
              tmp26 = first;
            }
            if (cResult[11] === epoch) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp11) {
                  if (cResult[14] === tmp24) {
                    if (cResult[15] === tmp25) {
                      if (cResult[16] === tmp26) {
                        if (cResult[17] === turnActive) {
                          let tmp27 = cResult[18];
                        }
                        if (cResult[19] === tmp10) {
                          if (cResult[20] === epoch) {
                            if (cResult[21] === tmp6) {
                              if (cResult[22] === tmp22) {
                                if (cResult[23] === projectId) {
                                  if (cResult[24] === tmp4) {
                                    if (cResult[25] === tree.steps) {
                                      if (cResult[26] === turnActive) {
                                        let tmp31 = cResult[27];
                                      }
                                      if (cResult[28] === tmp27) {
                                        if (cResult[29] === tmp31) {
                                          let tmp35 = cResult[30];
                                        }
                                        return tmp35;
                                      }
                                      const obj2 = { children: null };
                                      const items = [tmp27, tmp31];
                                      obj2.children = items;
                                      const tmp38 = closure_7(View, obj2);
                                      cResult[28] = tmp27;
                                      cResult[29] = tmp31;
                                      cResult[30] = tmp38;
                                      tmp35 = tmp38;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        let tmp32 = null;
                        if (tmp6) {
                          tmp32 = null;
                          if (tmp22) {
                            const obj3 = { style: tmp4.activityDetail, children: null };
                            const steps1 = tree.steps;
                            obj3.children = steps1.map((node) => {
                              const obj = { projectId, node, live: null, epoch: null };
                              let tmp3 = turnActive;
                              if (turnActive) {
                                tmp3 = node === currentStepResult;
                              }
                              obj.live = tmp3;
                              obj.epoch = epoch;
                              return timestampProducer(closure_11, obj, node.id);
                            });
                            tmp32 = closure_6(View, obj3);
                          }
                        }
                        cResult[19] = tmp10;
                        cResult[20] = epoch;
                        cResult[21] = tmp6;
                        cResult[22] = tmp22;
                        cResult[23] = projectId;
                        cResult[24] = tmp4;
                        cResult[25] = tree.steps;
                        cResult[26] = turnActive;
                        cResult[27] = tmp32;
                        tmp31 = tmp32;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = {
              line: tmp11,
              live: turnActive,
              settled: !turnActive,
              inGutter: true,
              glyph: tmp25,
              epoch,
              expanded: tmp6,
              onToggle: tmp26,
            };
            const tmp30 = closure_6(turnActive(tmp2[15]), obj4);
            cResult[11] = epoch;
            cResult[12] = tmp6;
            cResult[13] = tmp11;
            cResult[14] = !turnActive;
            cResult[15] = tmp25;
            cResult[16] = tmp26;
            cResult[17] = turnActive;
            cResult[18] = tmp30;
            tmp27 = tmp30;
          }
        }
      }
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      const currentStepResult = projectId(epoch[11]).currentStep(tree.steps);
      noop = currentStepResult;
      let tmp13;
      if (!turnActive) {
        const turn2 = tree.turn;
        let durationMs1;
        if (turn2 != null) {
          durationMs1 = turn2.durationMs;
        }
        tmp13 = durationMs1;
      }
      if (cResult[7] !== tree.tasks) {
        const tasks = tree.tasks;
        const found = tasks.find((task) => null != task.task.groupLabel);
        let groupLabel;
        if (found != null) {
          groupLabel = found.task.groupLabel;
        }
        cResult[7] = tree.tasks;
        cResult[8] = groupLabel;
        let describeTurnDurationResult = groupLabel;
      } else {
        describeTurnDurationResult = cResult[8];
      }
      if (null != tmp13) {
        describeTurnDurationResult = tmp(tmp2[12]).describeTurnDuration(tmp13);
        const tmpResult3 = tmp(tmp2[12]);
      } else if (null != currentStepResult) {
        describeTurnDurationResult = tmp(tmp2[11]).describeNode(currentStepResult);
        const tmpResult4 = tmp(tmp2[11]);
      } else if (describeTurnDurationResult == null) {
        const intl = tmp(tmp2[13]).intl;
        describeTurnDurationResult = intl.string(turnActive(tmp2[14]).t8skVB);
      }
      ({ steps: tmp3[1], tasks: tmp3[2], turn: turn3 } = tree);
      let durationMs2;
      if (turn3 != null) {
        durationMs2 = turn3.durationMs;
      }
      cResult[3] = durationMs2;
      cResult[4] = turnActive;
      cResult[5] = currentStepResult;
      cResult[6] = describeTurnDurationResult;
      tmp11 = describeTurnDurationResult;
      const tmpResult = projectId(epoch[11]);
    }
  : function TurnStatusLine(epoch) {
      ({ projectId: require, tree, turnActive } = epoch);
      epoch = epoch.epoch;
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_8();
      [tmp3, c3] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      const currentStepResult = require("ConjureTimelineTree").currentStep(tree.steps);
      noop = currentStepResult;
      let tmp8;
      if (!turnActive) {
        const turn = tree.turn;
        let durationMs;
        if (turn != null) {
          durationMs = turn.durationMs;
        }
        tmp8 = durationMs;
      }
      const tasks = tree.tasks;
      const found = tasks.find((task) => null != task.task.groupLabel);
      let groupLabel;
      if (found != null) {
        groupLabel = found.task.groupLabel;
      }
      if (null != tmp8) {
        groupLabel = require("ConjureDuration").describeTurnDuration(tmp8);
        const tmp5Result = require("ConjureDuration");
      } else if (null != currentStepResult) {
        groupLabel = require("ConjureTimelineTree").describeNode(currentStepResult);
        const tmp5Result2 = require("ConjureTimelineTree");
      } else if (groupLabel == null) {
        const intl = require("util").intl;
        groupLabel = intl.string(turnActive(tmp6[14]).t8skVB);
      }
      let someResult = tree.steps.length > 1;
      if (!someResult) {
        const steps = tree.steps;
        someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
      }
      const obj2 = {
        line: groupLabel,
        live: turnActive,
        settled: !turnActive,
        inGutter: true,
        glyph: null,
        epoch: null,
        expanded: null,
        onToggle: null,
      };
      let tmp19;
      let obj = require("ConjureTimelineTree");
      if (epoch.besideAvatar) {
        tmp19 = null;
      }
      obj2.glyph = tmp19;
      obj2.epoch = epoch;
      obj2.expanded = tmp3;
      let tmp20;
      if (someResult) {
        tmp20 = callback;
      }
      obj2.onToggle = tmp20;
      const children = [closure_6(turnActive(epoch[15]), obj2)];
      let tmp17Result = null;
      if (tmp3) {
        tmp17Result = null;
        if (someResult) {
          const obj3 = { style: tmp.activityDetail, children: null };
          const steps1 = tree.steps;
          obj3.children = steps1.map((node) => {
            const obj = { projectId, node, live: null, epoch: null };
            let tmp3 = turnActive;
            if (turnActive) {
              tmp3 = node === c4;
            }
            obj.live = tmp3;
            obj.epoch = epoch;
            return timestampProducer(closure_11, obj, node.id);
          });
          tmp17Result = closure_6(View, obj3);
        }
      }
      children[1] = tmp17Result;
      return closure_7(View, { children });
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LaneStatusLine(projectId) {
      let obj = projectId;
      const cResult = projectId(epoch[9]).c(33);
      projectId = projectId.projectId;
      ({ lane, mark } = projectId);
      ({ turnActive, epoch } = projectId);
      const tmp3 = closure_8();
      const obj2 = projectId(epoch[9]);
      [tmp5, _slicedToArray] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return _slicedToArray((arg0) => !arg0);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (turnActive) {
        turnActive = tmp7;
      }
      if ((cResult[1] === "running") === lane.task.status) {
        if (cResult[2] === lane.steps) {
          if (cResult[3] === lane.task) {
            if (cResult[4] === turnActive) {
              noop = tmp9;
              let tmp18 = !turnActive;
              if (!turnActive) {
                tmp18 = "failed" !== lane.task.status;
              }
              if (cResult[8] !== mark.Illocon) {
                const tmp21 = closure_6(mark.Illocon, { size: 16, accessible: false });
                cResult[8] = mark.Illocon;
                cResult[9] = tmp21;
                let tmp19 = tmp21;
              } else {
                tmp19 = cResult[9];
              }
              let tmp22;
              if (cResult[5]) {
                tmp22 = first;
              }
              if (cResult[10] === epoch) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === turnActive) {
                    if (cResult[13] === tmp10) {
                      if (cResult[14] === mark.tint) {
                        if (cResult[15] === tmp18) {
                          if (cResult[16] === tmp23) {
                            if (cResult[17] === tmp19) {
                              if (cResult[18] === tmp22) {
                                let tmp24 = cResult[19];
                              }
                              if (cResult[20] === epoch) {
                                if (cResult[21] === tmp5) {
                                  if (cResult[22] === tmp8) {
                                    if (cResult[23] === lane.steps) {
                                      if (cResult[24] === lane.task.detail) {
                                        if (cResult[25] === tmp9) {
                                          if (cResult[26] === mark.tint) {
                                            if (cResult[27] === projectId) {
                                              if (cResult[28] === tmp3) {
                                                let tmp28 = cResult[29];
                                              }
                                              if (cResult[30] === tmp24) {
                                                if (cResult[31] === tmp28) {
                                                  let tmp32 = cResult[32];
                                                }
                                                return tmp32;
                                              }
                                              const obj3 = { children: null };
                                              const items = [tmp24, tmp28];
                                              obj3.children = items;
                                              const tmp35 = closure_7(View, obj3);
                                              cResult[30] = tmp24;
                                              cResult[31] = tmp28;
                                              cResult[32] = tmp35;
                                              tmp32 = tmp35;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              let tmp29 = null;
                              if (tmp5) {
                                tmp29 = null;
                                if (tmp8) {
                                  const obj4 = { style: tmp3.activityDetail, children: null };
                                  const detail = lane.task.detail;
                                  const items1 = [
                                    detail.map((children, index) =>
                                      closure_1_6(
                                        projectId(epoch[17]).Text,
                                        { variant: "text-xs/normal", color: "text-feedback-critical", children },
                                        index,
                                      ),
                                    ),
                                  ];
                                  const steps = lane.steps;
                                  items1[1] = steps.map((node) =>
                                    timestampProducer(
                                      closure_11,
                                      {
                                        projectId,
                                        node,
                                        live: node === currentStepResult,
                                        crestColor: mark.tint,
                                        epoch,
                                      },
                                      node.id,
                                    ),
                                  );
                                  obj4.children = items1;
                                  tmp29 = closure_7(View, obj4);
                                }
                              }
                              cResult[20] = epoch;
                              cResult[21] = tmp5;
                              cResult[22] = tmp8;
                              cResult[23] = lane.steps;
                              cResult[24] = lane.task.detail;
                              cResult[25] = tmp9;
                              cResult[26] = mark.tint;
                              cResult[27] = projectId;
                              cResult[28] = tmp3;
                              cResult[29] = tmp29;
                              tmp28 = tmp29;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj5 = {
                line: cResult[7],
                live: turnActive,
                settled: tmp18,
                failed: "failed" === lane.task.status,
                glyph: tmp19,
                crestColor: mark.tint,
                inGutter: true,
                epoch,
                expanded: tmp5,
                onToggle: tmp22,
              };
              const tmp27 = closure_6(mark(epoch[15]), obj5);
              cResult[10] = epoch;
              cResult[11] = tmp5;
              cResult[12] = turnActive;
              cResult[13] = cResult[7];
              cResult[14] = mark.tint;
              cResult[15] = tmp18;
              cResult[16] = "failed" === lane.task.status;
              cResult[17] = tmp19;
              cResult[18] = tmp22;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
          }
        }
      }
      let currentStepResult;
      if (turnActive) {
        currentStepResult = obj(epoch[11]).currentStep(lane.steps);
        const objResult = obj(epoch[11]);
      }
      noop = currentStepResult;
      const tmp12 = lane.task.detail.length > 0 || lane.steps.length > 0;
      if ("running" !== lane.task.status) {
        const describeTaskOutcomeResult = obj(epoch[16]).describeTaskOutcome(lane.task);
        cResult[1] = tmp7;
        cResult[2] = lane.steps;
        cResult[3] = lane.task;
        cResult[4] = turnActive;
        cResult[5] = tmp12;
        cResult[6] = currentStepResult;
        cResult[7] = describeTaskOutcomeResult;
        const objResult3 = obj(epoch[16]);
      }
      if (null != currentStepResult) {
        obj = obj(epoch[11]);
        obj.describeNode(currentStepResult);
      } else {
        obj(epoch[16]).taskTitle(lane.task);
        const objResult4 = obj(epoch[16]);
      }
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : function LaneStatusLine(arg0) {
      ({ projectId: require, lane, mark } = arg0);
      ({ turnActive, epoch } = arg0);
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_8();
      [tmp3, c3] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      if (turnActive) {
        turnActive = tmp5;
      }
      let currentStepResult;
      if (turnActive) {
        currentStepResult = require("ConjureTimelineTree").currentStep(lane.steps);
        const obj = require("ConjureTimelineTree");
      }
      noop = currentStepResult;
      const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
      if ("running" === lane.task.status) {
        if (null != currentStepResult) {
          let describeNodeResult = require("ConjureTimelineTree").describeNode(currentStepResult);
          const obj4 = require("ConjureTimelineTree");
        } else {
          describeNodeResult = require("ConjureTaskOutcome").taskTitle(lane.task);
          const obj3 = require("ConjureTaskOutcome");
        }
      } else {
        const obj2 = require("ConjureTaskOutcome");
        const obj5 = {
          line: require("ConjureTaskOutcome").describeTaskOutcome(lane.task),
          live: turnActive,
          settled: null,
          failed: null,
          glyph: null,
          crestColor: null,
          inGutter: true,
          epoch: null,
          expanded: null,
          onToggle: null,
        };
        let tmp26 = !turnActive;
        const describeTaskOutcomeResult = require("ConjureTaskOutcome").describeTaskOutcome(lane.task);
        if (!turnActive) {
          tmp26 = "failed" !== lane.task.status;
        }
        obj5.settled = tmp26;
        obj5.failed = "failed" === lane.task.status;
        obj5.glyph = closure_6(mark.Illocon, { size: 16, accessible: false });
        obj5.crestColor = mark.tint;
        obj5.epoch = epoch;
        obj5.expanded = tmp3;
        let tmp27;
        if (tmp9) {
          tmp27 = callback;
        }
        obj5.onToggle = tmp27;
        const items = [closure_6(mark(epoch[15]), obj5)];
        let tmp21Result = null;
        if (tmp3) {
          tmp21Result = null;
          if (tmp9) {
            const obj6 = { style: tmp.activityDetail, children: null };
            const detail = lane.task.detail;
            const items1 = [
              detail.map((children, index) =>
                closure_1_6(
                  projectId(epoch[17]).Text,
                  { variant: "text-xs/normal", color: "text-feedback-critical", children },
                  index,
                ),
              ),
            ];
            const steps = lane.steps;
            items1[1] = steps.map((node) =>
              timestampProducer(
                closure_11,
                { projectId, node, live: node === c4, crestColor: mark.tint, epoch },
                node.id,
              ),
            );
            obj6.children = items1;
            tmp21Result = closure_7(View, obj6);
          }
        }
        const obj7 = { children: null };
        items[1] = tmp21Result;
        obj7.children = items;
        return closure_7(View, obj7);
      }
      const tmp2 = _slicedToArray(noop.useState(false), 2);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TimelineRow(arg0) {
      const cResult = node(576).c(29);
      ({ projectId, node } = arg0);
      ({ inGutter, live, crestColor, epoch } = arg0);
      let num = 0;
      if (undefined !== epoch) {
        num = epoch;
      }
      const tmp6 = closure_8();
      importDefault = tmp6;
      if (cResult[0] !== node.attachments) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(id) {
            if (null != id.id) {
              const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[18]).CONJURE_VIEWABLE_IMAGE_TYPES;
              if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
                const obj = {};
                const merged = Object.assign(id);
                obj.id = id.id;
                const items = [obj];
              }
              return [];
            }
          };
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const attachments = node.attachments;
        const flatMapResult = attachments.flatMap(tmp8);
        cResult[0] = node.attachments;
        cResult[1] = flatMapResult;
      } else {
        if (cResult[3] !== node) {
          const describeNodeResult = node(12309).describeNode(node);
          cResult[3] = node;
          cResult[4] = describeNodeResult;
          let tmp11 = describeNodeResult;
          let tmpResult = node(12309);
        } else {
          tmp11 = cResult[4];
        }
        let tmp13 = !tmp5;
        if (!tmp5) {
          tmp13 = "failed" !== node.status;
        }
        let str3 = "detail";
        if (tmp5) {
          str3 = "headline";
        }
        if (cResult[5] !== node.durationMs) {
          let tmp15 = null;
          if (null != node.durationMs) {
            let obj2 = {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: node(11879).describeDuration(node.durationMs),
            };
            tmp15 = closure_6(node(5234).Text, obj2);
            const tmpResult2 = node(11879);
          }
          cResult[5] = node.durationMs;
          cResult[6] = tmp15;
          let tmp14 = tmp15;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === crestColor) {
          if (cResult[8] === num) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp11) {
                  if (cResult[12] === tmp13) {
                    if (cResult[13] === tmp17) {
                      if (cResult[14] === str3) {
                        if (cResult[15] === tmp14) {
                          let tmp18 = cResult[16];
                        }
                        if (cResult[17] === node.detail) {
                          if (cResult[18] === node.detailError) {
                            if (cResult[19] === tmp6) {
                              let tmp22 = cResult[20];
                            }
                            if (cResult[21] === arr) {
                              if (cResult[22] === projectId) {
                                if (cResult[23] === tmp6) {
                                  let tmp26 = cResult[24];
                                }
                                if (cResult[25] === tmp18) {
                                  if (cResult[26] === tmp22) {
                                    if (cResult[27] === tmp26) {
                                      let tmp32 = cResult[28];
                                    }
                                    return tmp32;
                                  }
                                }
                                let obj3 = { children: null };
                                let items = [tmp18, tmp22, tmp26];
                                obj3.children = items;
                                const tmp35 = closure_7(View, obj3);
                                cResult[25] = tmp18;
                                cResult[26] = tmp22;
                                cResult[27] = tmp26;
                                cResult[28] = tmp35;
                                tmp32 = tmp35;
                              }
                            }
                            let tmp28 = null;
                            if (null != projectId) {
                              tmp28 = null;
                              if (arr.length > 0) {
                                let obj4 = { style: tmp6.stepDetail, children: null };
                                const obj5 = { projectId, images: arr };
                                obj4.children = closure_6(ConjureNativeStepImagesDefault, obj5);
                                tmp28 = closure_6(View, obj4);
                              }
                            }
                            cResult[21] = arr;
                            cResult[22] = projectId;
                            cResult[23] = tmp6;
                            cResult[24] = tmp28;
                            tmp26 = tmp28;
                          }
                        }
                        let tmp23 = null;
                        if (node.detail.length > 0) {
                          const obj6 = { style: tmp6.stepDetail, children: null };
                          const detail = node.detail;
                          obj6.children = detail.map((children, index) => {
                            let stepCommand;
                            if (children.startsWith("$ ")) {
                              stepCommand = closure_1.stepCommand;
                            }
                            const tmpResult = timestampProducer(
                              Text_Text.Text,
                              { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
                              index,
                            );
                            let tmp7 = node.detailError[index];
                            if (tmp7 == null) {
                              tmp7 = null;
                            }
                            let tmp8 = tmpResult;
                            if (null != tmp7) {
                              const obj2 = { style: closure_1.stepLine, children: null };
                              const items = [tmpResult];
                              const obj3 = {
                                accessible: true,
                                accessibilityRole: "image",
                                accessibilityLabel: tmp7,
                                children: null,
                              };
                              const obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
                              obj3.children = timestampProducer(WarningIcon.WarningIcon, obj4);
                              items[1] = timestampProducer(View, obj3);
                              obj2.children = items;
                              tmp8 = React5(View, obj2, index);
                            }
                            return tmp8;
                          });
                          tmp23 = closure_6(View, obj6);
                        }
                        cResult[17] = node.detail;
                        cResult[18] = node.detailError;
                        cResult[19] = tmp6;
                        cResult[20] = tmp23;
                        tmp22 = tmp23;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj7 = {
          line: tmp11,
          live: tmp5,
          settled: tmp13,
          failed: "failed" === node.status,
          presentation: str3,
          crestColor,
          inGutter: tmp4,
          epoch: num,
          trailing: tmp14,
        };
        const tmp21 = closure_6(ConjureNativeStatusLineDefault, obj7);
        cResult[7] = crestColor;
        cResult[8] = num;
        cResult[9] = tmp4;
        cResult[10] = tmp5;
        cResult[11] = tmp11;
        cResult[12] = tmp13;
        cResult[13] = "failed" === node.status;
        cResult[14] = str3;
        cResult[15] = tmp14;
        cResult[16] = tmp21;
        tmp18 = tmp21;
      }
      let obj = node(576);
    }
  : function TimelineRow(inGutter) {
      ({ projectId, node } = inGutter);
      let flag = inGutter.inGutter;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = inGutter.live;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ epoch, crestColor } = inGutter);
      if (epoch === undefined) {
        epoch = 0;
      }
      const tmp = closure_8();
      importDefault = tmp;
      const attachments = node.attachments;
      const flatMapResult = attachments.flatMap((id) => {
        if (null != id.id) {
          const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[18]).CONJURE_VIEWABLE_IMAGE_TYPES;
          if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
            const obj = {};
            const merged = Object.assign(id);
            obj.id = id.id;
            const items = [obj];
          }
          return [];
        }
      });
      let obj = {
        line: null,
        live: null,
        settled: null,
        failed: null,
        presentation: null,
        crestColor: null,
        inGutter: null,
        epoch: null,
        trailing: null,
      };
      let tmp7 = ConjureNativeStatusLineDefault;
      obj.line = node(12309).describeNode(node);
      obj.live = flag2;
      let tmp9 = !flag2;
      if (!flag2) {
        tmp9 = "failed" !== node.status;
      }
      obj.settled = tmp9;
      obj.failed = "failed" === node.status;
      let str2 = "detail";
      if (flag2) {
        str2 = "headline";
      }
      obj.presentation = str2;
      obj.crestColor = crestColor;
      obj.inGutter = flag;
      obj.epoch = epoch;
      let tmp4Result = null;
      if (null != node.durationMs) {
        let obj3 = {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: node(11879).describeDuration(node.durationMs),
        };
        tmp4Result = closure_6(node(5234).Text, obj3);
        const tmp8Result = node(11879);
      }
      obj.trailing = tmp4Result;
      const children = [closure_6(tmp7, obj), ,];
      let tmp4Result3 = null;
      if (node.detail.length > 0) {
        let obj4 = { style: tmp.stepDetail, children: null };
        const detail = node.detail;
        obj4.children = detail.map((children, index) => {
          let stepCommand;
          if (children.startsWith("$ ")) {
            stepCommand = closure_1.stepCommand;
          }
          const tmpResult = timestampProducer(
            Text_Text.Text,
            { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
            index,
          );
          let tmp7 = node.detailError[index];
          if (tmp7 == null) {
            tmp7 = null;
          }
          let tmp8 = tmpResult;
          if (null != tmp7) {
            const obj2 = { style: closure_1.stepLine, children: null };
            const items = [tmpResult];
            const obj3 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp7, children: null };
            const obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
            obj3.children = timestampProducer(WarningIcon.WarningIcon, obj4);
            items[1] = timestampProducer(View, obj3);
            obj2.children = items;
            tmp8 = React5(View, obj2, index);
          }
          return tmp8;
        });
        tmp4Result3 = closure_6(View, obj4);
      }
      children[1] = tmp4Result3;
      let tmp4Result4 = null;
      if (null != projectId) {
        tmp4Result4 = null;
        if (flatMapResult.length > 0) {
          const obj5 = { style: tmp.stepDetail, children: null };
          const obj6 = { projectId, images: flatMapResult };
          obj5.children = closure_6(ConjureNativeStepImagesDefault, obj6);
          tmp4Result4 = closure_6(View, obj5);
        }
      }
      children[2] = tmp4Result4;
      return closure_7(View, { children });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureActivityBox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureActivityBox(projectId) {
      const cResult = projectId(length[9]).c(14);
      projectId = projectId.projectId;
      ({ tree, turnActive } = projectId);
      const besideAvatar = projectId.besideAvatar;
      let obj = projectId(length[9]);
      const tmp = projectId;
      const tmp2 = length;
      if (0 === tree.steps.length) {
        if (0 === tree.tasks.length) {
          return null;
        }
      }
      if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
        if (cResult[1] === length) {
          if (cResult[2] === projectId) {
            if (cResult[3] === tmp5.activityBox) {
              if (cResult[4] === tree) {
                if (cResult[5] === turnActive) {
                  return cResult[6];
                }
              }
            }
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            return projectId.taskId;
          }
        }
        cResult[7] = A;
      } else {
        class A {
          constructor(arg0) {
            return projectId.taskId;
          }
        }
      }
      tmp5 = closure_8();
      const tasks = tree.tasks;
      closure_3 = tmp(tmp2[10]).subagentIllocons(tasks.map(A));
      if (cResult[8] === (undefined !== besideAvatar && besideAvatar)) {
        class A {
          constructor(arg0) {
            return projectId.taskId;
          }
        }
      }
      const tmpResult = tmp(tmp2[10]);
      cResult[8] = undefined !== besideAvatar && besideAvatar;
      cResult[9] = tree.tasks.length;
      cResult[10] = projectId;
      cResult[11] = tree;
      cResult[12] = turnActive;
      cResult[13] = closure_6(closure_9, {
        projectId,
        tree,
        turnActive,
        epoch: tree.tasks.length,
        besideAvatar: undefined !== besideAvatar && besideAvatar,
      });
      const tmp7 = closure_6(closure_9, {
        projectId,
        tree,
        turnActive,
        epoch: tree.tasks.length,
        besideAvatar: undefined !== besideAvatar && besideAvatar,
      });
    }
  : function ConjureActivityBox(projectId) {
      projectId = projectId.projectId;
      ({ tree, turnActive } = projectId);
      let flag = projectId.besideAvatar;
      if (flag === undefined) {
        flag = false;
      }
      let length;
      closure_3 = undefined;
      if (0 === tree.steps.length) {
        if (0 === tree.tasks.length) {
          return null;
        }
      }
      length = tree.tasks.length;
      const tmp = closure_8();
      const tasks = tree.tasks;
      closure_3 = projectId(length[10]).subagentIllocons(tasks.map((taskId) => taskId.taskId));
      let obj2 = { style: tmp.activityBox, children: null };
      const items = [closure_6(closure_9, { projectId, tree, turnActive, epoch: length, besideAvatar: flag })];
      const tasks1 = tree.tasks;
      items[1] = tasks1.map((task) => {
        let familiarMarkResult;
        if (null != task.task.helperMark) {
          familiarMarkResult = ConjureSubagentMark.familiarMark(task.task.helperMark);
        }
        if (familiarMarkResult == null) {
          familiarMarkResult = closure_3.get(task.taskId);
        }
        let tmp5 = null;
        if (null != familiarMarkResult) {
          const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
          tmp5 = timestampProducer(closure_10, obj2, task.taskId);
        }
        return tmp5;
      });
      obj2.children = items;
      return closure_7(View, obj2);
    };
export const stretchOf = function stretchOf(memo, index, arg2) {
  closure_0 = index;
  const obj = { steps: null, tasks: null };
  const steps = memo.steps;
  obj.steps = steps.filter((segment) => segment.segment === closure_0);
  const tasks = memo.tasks;
  obj.tasks = tasks.filter((task) => task.task.segment === closure_0);
  if (arg2) {
    if (null != memo.turn) {
      const obj2 = { turn: memo.turn };
      let obj3 = obj2;
    }
    const merged = Object.assign(obj3);
    return obj;
  }
  obj3 = {};
};
