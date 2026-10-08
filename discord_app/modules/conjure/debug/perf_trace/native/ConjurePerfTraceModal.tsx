// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ChevronSmallRightIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import ConjurePerfTraceLayout from "../ConjurePerfTraceLayout.tsx";
import useConjurePerfTraceTreeDefault from "../useConjurePerfTraceTree.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../../ConjureDebugStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const perf_trace = "perf_trace";
const createStyles = fn(5090);
let obj2 = {
  content: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 },
  section: null,
  toolbar: null,
  legend: null,
  legendItem: null,
  row: null,
  rowSelected: null,
  rowTop: null,
  chevron: null,
  operation: null,
  badge: null,
  swatch: null,
  track: null,
  bar: null,
  detail: null,
  detailLine: null,
  op: null,
  model: null,
  tool: null,
  setup: null,
  worktree: null,
  sandbox: null,
  build: null,
  platform: null,
  other: null,
  failed: null,
  running: null,
  smaller: null,
  smallerTrack: null,
};
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
obj2.section = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.toolbar = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.legend = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_12,
  rowGap: nativeDefault.space.PX_4,
};
let obj6 = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_12,
  rowGap: nativeDefault.space.PX_4,
};
obj2.legendItem = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.row = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
let obj8 = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
obj2.rowSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.chevron = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj2.operation = { flex: 1 };
let obj11 = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj2.badge = {
  paddingHorizontal: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
obj2.swatch = size;
obj2.track = { height: 6 };
const rect = { position: "absolute", top: 0, bottom: 0, minWidth: 2, borderRadius: nativeDefault.radii.xs };
obj2.bar = rect;
let obj12 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.detail = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
let obj13 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj2.detailLine = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj14 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.op = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj15 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.model = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
let obj16 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
obj2.tool = { backgroundColor: nativeDefault.colors.TEXT_LINK };
let obj17 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj2.setup = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
let obj18 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
obj2.worktree = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let obj19 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
obj2.sandbox = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let obj20 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.build = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let obj21 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.platform = { backgroundColor: nativeDefault.colors.ICON_MUTED };
const obj22 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.other = { backgroundColor: nativeDefault.colors.ICON_SUBTLE };
const obj23 = { backgroundColor: nativeDefault.colors.ICON_SUBTLE };
obj2.failed = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
const obj24 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.running = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
const obj25 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.smaller = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.smallerTrack = { height: 3 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WaterfallRow(node) {
      const cResult = node(onSelect[7]).c(78);
      node = node.node;
      ({ extent, collapsed, selected } = node);
      onSelect = node.onSelect;
      let chevron = node.onToggle;
      const onExpandSubtree = node.onExpandSubtree;
      const tmp4 = closure_11();
      closure_5 = tmp4;
      if (collapsed) {
        let ChevronSmallDownIcon = tmp(tmp2[8]).ChevronSmallRightIcon;
      } else {
        ChevronSmallDownIcon = tmp(tmp2[9]).ChevronSmallDownIcon;
      }
      const str = "failed";
      if (!node.failed) {
        const str2 = "running";
      }
      let rowSelected = selected;
      if (selected) {
        rowSelected = tmp4.rowSelected;
      }
      if (cResult[0] === tmp4.row) {
        if (cResult[1] === rowSelected) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === node.key) {
          if (cResult[4] === onSelect) {
            if (cResult[5] === selected) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === node.key) {
              if (cResult[8] === onExpandSubtree) {
                let tmp8 = cResult[9];
              }
              let tmp9;
              if (tmp5) {
                tmp9 = !collapsed;
              }
              if (cResult[10] === selected) {
                if (cResult[11] === tmp9) {
                  let tmp10 = cResult[12];
                }
                const result = node.depth * selected(tmp2[5]).space.PX_12;
                if (cResult[13] !== result) {
                  const obj2 = { paddingLeft: result };
                  cResult[13] = result;
                  cResult[14] = obj2;
                  let tmp13 = obj2;
                } else {
                  tmp13 = cResult[14];
                }
                if (cResult[15] === tmp4.rowTop) {
                  if (cResult[16] === tmp13) {
                    let tmp14 = cResult[17];
                  }
                  if (cResult[18] === ChevronSmallDownIcon) {
                    if (cResult[19] === collapsed) {
                      if (cResult[20] === tmp5) {
                        if (cResult[21] === node.key) {
                          if (cResult[22] === chevron) {
                            if (cResult[23] === tmp4.chevron) {
                              if (cResult[25] !== node.descendants) {
                                let tmp22 = null;
                                if (node.descendants > 0) {
                                  const obj3 = {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: node.descendants,
                                  };
                                  tmp22 = closure_8(tmp(tmp2[10]).Text, obj3);
                                }
                                cResult[25] = node.descendants;
                                cResult[26] = tmp22;
                                let tmp21 = tmp22;
                              } else {
                                tmp21 = cResult[26];
                              }
                              if (cResult[27] === tmp4.swatch) {
                                if (cResult[28] === tmp24) {
                                  let tmp25 = cResult[29];
                                }
                                if (cResult[30] !== node.service) {
                                  const obj4 = {
                                    variant: "text-xs/semibold",
                                    color: "text-strong",
                                    children: node.service,
                                  };
                                  const tmp31 = closure_8(tmp(tmp2[10]).Text, obj4);
                                  cResult[30] = node.service;
                                  cResult[31] = tmp31;
                                  let tmp29 = tmp31;
                                } else {
                                  tmp29 = cResult[31];
                                }
                                if (cResult[32] === node.operation) {
                                  if (cResult[33] === tmp4.operation) {
                                    let tmp32 = cResult[34];
                                  }
                                  if (cResult[35] === node.count) {
                                    if (cResult[36] === tmp4.badge) {
                                      let tmp35 = cResult[37];
                                    }
                                    if (cResult[38] !== node.failed) {
                                      let tmp41 = null;
                                      if (node.failed) {
                                        const obj5 = { size: "xs", color: selected(tmp2[5]).colors.STATUS_DANGER };
                                        tmp41 = closure_8(tmp(tmp2[11]).WarningIcon, obj5);
                                      }
                                      cResult[38] = node.failed;
                                      cResult[39] = tmp41;
                                      let tmp40 = tmp41;
                                    } else {
                                      tmp40 = cResult[39];
                                    }
                                    if (cResult[40] !== node) {
                                      const perfNodeDurationResult = tmp(tmp2[12]).perfNodeDuration(node);
                                      cResult[40] = node;
                                      cResult[41] = perfNodeDurationResult;
                                      let tmp43 = perfNodeDurationResult;
                                      const tmpResult = tmp(tmp2[12]);
                                    } else {
                                      tmp43 = cResult[41];
                                    }
                                    if (cResult[42] !== tmp43) {
                                      const obj6 = { variant: "text-xs/normal", color: "text-muted", children: tmp43 };
                                      const tmp47 = closure_8(tmp(tmp2[10]).Text, obj6);
                                      cResult[42] = tmp43;
                                      cResult[43] = tmp47;
                                      let tmp45 = tmp47;
                                    } else {
                                      tmp45 = cResult[43];
                                    }
                                    if (cResult[44] === tmp15) {
                                      if (cResult[45] === tmp21) {
                                        if (cResult[46] === tmp25) {
                                          if (cResult[47] === tmp29) {
                                            if (cResult[48] === tmp32) {
                                              if (cResult[49] === tmp35) {
                                                if (cResult[50] === tmp40) {
                                                  if (cResult[51] === tmp45) {
                                                    if (cResult[52] === tmp14) {
                                                      let tmp48 = cResult[53];
                                                    }
                                                    const text = `${(node.start / extent) * 100}%`;
                                                    const text1 = `${((node.end - node.start) / extent) * 100}%`;
                                                    if (cResult[54] === `${(node.start / extent) * 100}%`) {
                                                      if (
                                                        cResult[55] === `${((node.end - node.start) / extent) * 100}%`
                                                      ) {
                                                        let tmp55 = cResult[56];
                                                      }
                                                      if (cResult[57] === tmp4.bar) {
                                                        if (cResult[58] === tmp52) {
                                                          if (cResult[59] === tmp55) {
                                                            let tmp56 = cResult[60];
                                                          }
                                                          if (cResult[61] === tmp4.track) {
                                                            if (cResult[62] === tmp56) {
                                                              let tmp60 = cResult[63];
                                                            }
                                                            if (cResult[64] === node) {
                                                              if (cResult[65] === selected) {
                                                                if (cResult[66] === tmp4.detail) {
                                                                  if (cResult[67] === tmp4.detailLine) {
                                                                    if (cResult[68] === tmp4.operation) {
                                                                      let tmp64 = cResult[69];
                                                                    }
                                                                    if (cResult[70] === tmp6) {
                                                                      if (cResult[71] === tmp48) {
                                                                        if (cResult[72] === tmp60) {
                                                                          if (cResult[73] === tmp64) {
                                                                            if (cResult[74] === tmp7) {
                                                                              if (cResult[75] === tmp8) {
                                                                                if (cResult[76] === tmp10) {
                                                                                  let tmp68 = cResult[77];
                                                                                }
                                                                                return tmp68;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj7 = {
                                                                      style: tmp6,
                                                                      onPress: tmp7,
                                                                      onLongPress: tmp8,
                                                                      accessibilityRole: "button",
                                                                      accessibilityState: tmp10,
                                                                      children: null,
                                                                    };
                                                                    let items = [tmp48, tmp60, tmp64];
                                                                    obj7.children = items;
                                                                    const tmp71 = closure_9(onExpandSubtree, obj7);
                                                                    cResult[70] = tmp6;
                                                                    cResult[71] = tmp48;
                                                                    cResult[72] = tmp60;
                                                                    cResult[73] = tmp64;
                                                                    cResult[74] = tmp7;
                                                                    cResult[75] = tmp8;
                                                                    cResult[76] = tmp10;
                                                                    cResult[77] = tmp71;
                                                                    tmp68 = tmp71;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            let tmp65 = null;
                                                            if (selected) {
                                                              const obj8 = { style: null, children: null };
                                                              const items1 = [tmp4.detail];
                                                              const obj9 = {
                                                                paddingLeft: node.depth * selected(tmp2[5]).space.PX_12,
                                                              };
                                                              items1[1] = obj9;
                                                              obj8.style = items1;
                                                              const tmpResult2 = tmp(tmp2[12]);
                                                              obj8.children = tmp(tmp2[12])
                                                                .perfNodeDetails(node)
                                                                .map((children) => {
                                                                  const label = children.label;
                                                                  const obj = {
                                                                    style: closure_5.detailLine,
                                                                    children: null,
                                                                  };
                                                                  const items = [
                                                                    closure_2_8(Text_Text.Text, {
                                                                      variant: "text-xs/semibold",
                                                                      color: "text-muted",
                                                                      children: label,
                                                                    }),
                                                                    closure_2_8(Text_Text.Text, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-default",
                                                                      style: closure_5.operation,
                                                                      children: children.value,
                                                                    }),
                                                                  ];
                                                                  obj.children = items;
                                                                  return options(timestampProducer, obj, label);
                                                                });
                                                              tmp65 = closure_8(closure_6, obj8);
                                                              const perfNodeDetailsResult = tmp(
                                                                tmp2[12],
                                                              ).perfNodeDetails(node);
                                                            }
                                                            cResult[64] = node;
                                                            cResult[65] = selected;
                                                            cResult[66] = tmp4.detail;
                                                            cResult[67] = tmp4.detailLine;
                                                            cResult[68] = tmp4.operation;
                                                            cResult[69] = tmp65;
                                                            tmp64 = tmp65;
                                                          }
                                                          const obj10 = { style: tmp4.track, children: tmp56 };
                                                          const tmp63 = closure_8(closure_6, obj10);
                                                          cResult[61] = tmp4.track;
                                                          cResult[62] = tmp56;
                                                          cResult[63] = tmp63;
                                                          tmp60 = tmp63;
                                                        }
                                                      }
                                                      const obj11 = { style: null };
                                                      const items2 = [tmp4.bar, tmp52, tmp55];
                                                      obj11.style = items2;
                                                      const tmp59 = closure_8(closure_6, obj11);
                                                      cResult[57] = tmp4.bar;
                                                      cResult[58] = tmp52;
                                                      cResult[59] = tmp55;
                                                      cResult[60] = tmp59;
                                                      tmp56 = tmp59;
                                                    }
                                                    const obj12 = { left: text, width: text1 };
                                                    cResult[54] = text;
                                                    cResult[55] = text1;
                                                    cResult[56] = obj12;
                                                    tmp55 = obj12;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj13 = { style: tmp14, children: null };
                                    const items3 = [tmp15, tmp21, tmp25, tmp29, tmp32, tmp35, tmp40, tmp45];
                                    obj13.children = items3;
                                    const tmp51 = closure_9(closure_6, obj13);
                                    cResult[44] = tmp15;
                                    cResult[45] = tmp21;
                                    cResult[46] = tmp25;
                                    cResult[47] = tmp29;
                                    cResult[48] = tmp32;
                                    cResult[49] = tmp35;
                                    cResult[50] = tmp40;
                                    cResult[51] = tmp45;
                                    cResult[52] = tmp14;
                                    cResult[53] = tmp51;
                                    tmp48 = tmp51;
                                  }
                                  let tmp36 = null;
                                  if (node.count > 1) {
                                    const obj14 = { style: tmp4.badge, children: null };
                                    const obj15 = {
                                      variant: "text-xxs/semibold",
                                      color: "text-default",
                                      children: null,
                                    };
                                    const _HermesInternal = HermesInternal;
                                    obj15.children = "\u00D7" + node.count;
                                    obj14.children = closure_8(tmp(tmp2[10]).Text, obj15);
                                    tmp36 = closure_8(closure_6, obj14);
                                  }
                                  cResult[35] = node.count;
                                  cResult[36] = tmp4.badge;
                                  cResult[37] = tmp36;
                                  tmp35 = tmp36;
                                }
                                const obj16 = {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  style: tmp4.operation,
                                  lineClamp: 1,
                                  children: node.operation,
                                };
                                const tmp34 = closure_8(tmp(tmp2[10]).Text, obj16);
                                cResult[32] = node.operation;
                                cResult[33] = tmp4.operation;
                                cResult[34] = tmp34;
                                tmp32 = tmp34;
                              }
                              const obj17 = { style: null };
                              const items4 = [tmp4.swatch, tmp4[node.category]];
                              obj17.style = items4;
                              const tmp28 = closure_8(closure_6, obj17);
                              cResult[27] = tmp4.swatch;
                              cResult[28] = tmp4[node.category];
                              cResult[29] = tmp28;
                              tmp25 = tmp28;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (tmp5) {
                    const obj18 = {
                      style: tmp4.chevron,
                      onPress() {
                        return chevron(node.key);
                      },
                      accessibilityRole: "button",
                      accessibilityLabel: null,
                      children: null,
                    };
                    let str3 = "Collapse";
                    if (collapsed) {
                      str3 = "Expand";
                    }
                    obj18.accessibilityLabel = str3;
                    const obj19 = { size: "xs", color: selected(tmp2[5]).colors.ICON_SUBTLE };
                    obj18.children = closure_8(ChevronSmallDownIcon, obj19);
                    let tmp16Result = closure_8(onExpandSubtree, obj18);
                  } else {
                    const obj20 = { style: tmp4.chevron };
                    tmp16Result = closure_8(closure_6, obj20);
                  }
                  cResult[18] = ChevronSmallDownIcon;
                  cResult[19] = collapsed;
                  cResult[20] = tmp5;
                  collapsed = node.key;
                  cResult[21] = collapsed;
                  cResult[22] = chevron;
                  chevron = tmp4.chevron;
                  cResult[23] = chevron;
                  cResult[24] = tmp16Result;
                }
                const items5 = [tmp4.rowTop, tmp13];
                cResult[15] = tmp4.rowTop;
                cResult[16] = tmp13;
                cResult[17] = items5;
                tmp14 = items5;
              }
              const obj21 = { selected, expanded: tmp9 };
              cResult[10] = selected;
              cResult[11] = tmp9;
              cResult[12] = obj21;
              tmp10 = obj21;
            }
            const fn2 = function s() {
              return onExpandSubtree(node.key);
            };
            cResult[7] = node.key;
            cResult[8] = onExpandSubtree;
            cResult[9] = fn2;
            tmp8 = fn2;
          }
        }
        const fn = function n() {
          let key = null;
          if (!selected) {
            key = node.key;
          }
          return onSelect(key);
        };
        cResult[3] = node.key;
        cResult[4] = onSelect;
        cResult[5] = selected;
        cResult[6] = fn;
        tmp7 = fn;
      }
      const items6 = [tmp4.row, rowSelected];
      cResult[0] = tmp4.row;
      cResult[1] = rowSelected;
      cResult[2] = items6;
      tmp6 = items6;
      let obj = node(onSelect[7]);
    }
  : function WaterfallRow(node) {
      node = node.node;
      ({ extent, collapsed, selected } = node);
      ({ onSelect: dependencyMap, onToggle: noop, onExpandSubtree: closure_4 } = node);
      const tmp = closure_11();
      closure_5 = tmp;
      if (collapsed) {
        let ChevronSmallDownIcon = tmp3(6892).ChevronSmallRightIcon;
        let tmp5 = tmp3;
      } else {
        ChevronSmallDownIcon = tmp3(10508).ChevronSmallDownIcon;
        tmp5 = tmp3;
      }
      let str = "failed";
      if (!node.failed) {
        let str2 = "running";
        if (!node.running) {
          str2 = node.category;
        }
        str = str2;
      }
      let items = [tmp.row];
      let rowSelected = selected;
      if (selected) {
        rowSelected = tmp.rowSelected;
      }
      let obj = {
        style: items,
        onPress() {
          let key = null;
          if (!selected) {
            key = node.key;
          }
          return dependencyMap(key);
        },
        onLongPress() {
          return closure_1_4(node.key);
        },
        accessibilityRole: "button",
        accessibilityState: null,
        children: null,
      };
      items[1] = rowSelected;
      const obj2 = { selected, expanded: null };
      let tmp9;
      if (node.children.length > 0) {
        tmp9 = !collapsed;
      }
      obj2.expanded = tmp9;
      obj.accessibilityState = obj2;
      const obj3 = { style: null, children: null };
      const items1 = [tmp.rowTop, { paddingLeft: node.depth * selected(587).space.PX_12 }];
      obj3.style = items1;
      if (node.children.length > 0) {
        const obj5 = {
          style: tmp.chevron,
          onPress() {
            return noop(node.key);
          },
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        let str3 = "Collapse";
        if (collapsed) {
          str3 = "Expand";
        }
        obj5.accessibilityLabel = str3;
        const obj6 = { size: "xs", color: selected(587).colors.ICON_SUBTLE };
        obj5.children = closure_8(ChevronSmallDownIcon, obj6);
        let tmp12Result = closure_8(closure_4, obj5);
        let tmp14 = closure_8;
      } else {
        const obj7 = { style: tmp.chevron };
        tmp12Result = closure_8(closure_6, obj7);
        tmp14 = closure_8;
      }
      const items2 = [tmp12Result, , , , , , ,];
      let tmp14Result = null;
      if (node.descendants > 0) {
        const obj8 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
        tmp14Result = tmp14(tmp5(5086).Text, obj8);
      }
      items2[1] = tmp14Result;
      const obj9 = { style: null };
      const items3 = [tmp.swatch, tmp[node.category]];
      obj9.style = items3;
      items2[2] = tmp14(closure_6, obj9);
      items2[3] = tmp14(tmp5(5086).Text, { variant: "text-xs/semibold", color: "text-strong", children: node.service });
      items2[4] = tmp14(tmp5(5086).Text, {
        variant: "text-xs/normal",
        color: "text-default",
        style: tmp.operation,
        lineClamp: 1,
        children: node.operation,
      });
      let tmp14Result4 = null;
      if (node.count > 1) {
        const obj12 = { style: tmp.badge, children: null };
        const obj13 = { variant: "text-xxs/semibold", color: "text-default", children: null };
        const _HermesInternal = HermesInternal;
        obj13.children = "\u00D7" + node.count;
        obj12.children = tmp14(tmp5(5086).Text, obj13);
        tmp14Result4 = tmp14(closure_6, obj12);
      }
      items2[5] = tmp14Result4;
      let tmp14Result5 = null;
      if (node.failed) {
        const obj14 = { size: "xs", color: selected(587).colors.STATUS_DANGER };
        tmp14Result5 = tmp14(tmp5(5003).WarningIcon, obj14);
      }
      items2[6] = tmp14Result5;
      const obj15 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const obj10 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
      const obj11 = {
        variant: "text-xs/normal",
        color: "text-default",
        style: tmp.operation,
        lineClamp: 1,
        children: node.operation,
      };
      const obj4 = { paddingLeft: node.depth * selected(587).space.PX_12 };
      obj15.children = tmp5(17067).perfNodeDuration(node);
      items2[7] = tmp14(tmp5(5086).Text, obj15);
      obj3.children = items2;
      const items4 = [closure_9(closure_6, obj3), ,];
      const obj16 = { style: tmp.track, children: null };
      const obj17 = { style: null };
      const items5 = [
        tmp.bar,
        tmp[str],
        { left: `${(node.start / extent) * 100}%`, width: `${((node.end - node.start) / extent) * 100}%` },
      ];
      obj17.style = items5;
      obj16.children = tmp14(closure_6, obj17);
      items4[1] = tmp14(closure_6, obj16);
      let tmp14Result6 = null;
      if (selected) {
        const obj19 = { style: null, children: null };
        const items6 = [tmp.detail];
        const obj20 = { paddingLeft: node.depth * selected(587).space.PX_12 };
        items6[1] = obj20;
        obj19.style = items6;
        const tmp5Result2 = tmp5(17067);
        obj19.children = tmp5(17067)
          .perfNodeDetails(node)
          .map((children) => {
            const label = children.label;
            const obj = { style: closure_5.detailLine, children: null };
            const items = [
              closure_2_8(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: label }),
              closure_2_8(Text_Text.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                style: closure_5.operation,
                children: children.value,
              }),
            ];
            obj.children = items;
            return options(timestampProducer, obj, label);
          });
        tmp14Result6 = tmp14(closure_6, obj19);
        const perfNodeDetailsResult = tmp5(17067).perfNodeDetails(node);
      }
      items4[2] = tmp14Result6;
      obj.children = items4;
      return closure_9(closure_4, obj);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SmallerRow(row) {
      const cResult = c.c(45);
      row = row.row;
      ({ extent, onReveal } = row);
      const tmp4 = closure_11();
      if (cResult[0] !== row) {
        const perfSmallerLabelResult = ConjurePerfTraceFormat.perfSmallerLabel(row);
        cResult[0] = row;
        cResult[1] = perfSmallerLabelResult;
        let tmp5 = perfSmallerLabelResult;
        const tmpResult = ConjurePerfTraceFormat;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === onReveal) {
        if (cResult[3] === row.parentKey) {
          let tmp8 = cResult[4];
        }
        const result = row.depth * nativeDefault.space.PX_12;
        if (cResult[5] !== result) {
          const obj2 = { paddingLeft: result };
          cResult[5] = result;
          cResult[6] = obj2;
          let tmp11 = obj2;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp4.rowTop) {
          if (cResult[8] === tmp11) {
            let tmp12 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
            const tmp16 = closure_1_8(ChevronSmallRightIcon.ChevronSmallRightIcon, obj3);
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== tmp4.chevron) {
            const obj4 = { style: tmp4.chevron, children: tmp14 };
            const tmp20 = closure_1_8(timestampProducer, obj4);
            cResult[11] = tmp4.chevron;
            cResult[12] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp4.smaller) {
            if (cResult[14] === tmp4.swatch) {
              let tmp21 = cResult[15];
            }
            if (cResult[16] === tmp5) {
              if (cResult[17] === tmp4.operation) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] !== row.totalMs) {
                const formatPerfMsResult = ConjurePerfTraceFormat.formatPerfMs(row.totalMs);
                cResult[19] = row.totalMs;
                cResult[20] = formatPerfMsResult;
                let tmp28 = formatPerfMsResult;
                const tmpResult2 = ConjurePerfTraceFormat;
              } else {
                tmp28 = cResult[20];
              }
              if (cResult[21] !== tmp28) {
                const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp28 };
                const tmp32 = closure_1_8(Text_Text.Text, obj5);
                cResult[21] = tmp28;
                cResult[22] = tmp32;
                let tmp30 = tmp32;
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === tmp25) {
                if (cResult[24] === tmp30) {
                  if (cResult[25] === tmp12) {
                    if (cResult[26] === tmp17) {
                      if (cResult[27] === tmp21) {
                        let tmp33 = cResult[28];
                      }
                      const text = `${(row.start / extent) * 100}%`;
                      const text1 = `${((row.end - row.start) / extent) * 100}%`;
                      if (cResult[29] === `${(row.start / extent) * 100}%`) {
                        if (cResult[30] === `${((row.end - row.start) / extent) * 100}%`) {
                          let tmp39 = cResult[31];
                        }
                        if (cResult[32] === tmp4.bar) {
                          if (cResult[33] === tmp4.smaller) {
                            if (cResult[34] === tmp39) {
                              let tmp40 = cResult[35];
                            }
                            if (cResult[36] === tmp4.smallerTrack) {
                              if (cResult[37] === tmp40) {
                                let tmp44 = cResult[38];
                              }
                              if (cResult[39] === tmp5) {
                                if (cResult[40] === tmp4.row) {
                                  if (cResult[41] === tmp33) {
                                    if (cResult[42] === tmp44) {
                                      if (cResult[43] === tmp8) {
                                        let tmp48 = cResult[44];
                                      }
                                      return tmp48;
                                    }
                                  }
                                }
                              }
                              const obj6 = {
                                style: tmp7,
                                onPress: tmp8,
                                accessibilityRole: "button",
                                accessibilityLabel: tmp5,
                                children: null,
                              };
                              const items = [tmp33, tmp44];
                              obj6.children = items;
                              const tmp51 = options(React4, obj6);
                              cResult[39] = tmp5;
                              class T {
                                constructor() {
                                  return onReveal(row.parentKey);
                                }
                              }
                              cResult[41] = tmp33;
                              cResult[42] = tmp44;
                              cResult[43] = tmp8;
                              cResult[44] = tmp51;
                              tmp48 = tmp51;
                            }
                            const obj7 = { style: tmp4.smallerTrack, children: tmp40 };
                            const tmp47 = closure_1_8(timestampProducer, obj7);
                            cResult[36] = tmp4.smallerTrack;
                            cResult[37] = tmp40;
                            cResult[38] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                        const obj8 = { style: null };
                        const items1 = [, ,];
                        ({ bar: arr4[0], smaller: arr4[1] } = tmp4);
                        items1[2] = tmp39;
                        obj8.style = items1;
                        const tmp43 = closure_1_8(timestampProducer, obj8);
                        cResult[32] = tmp4.bar;
                        cResult[33] = tmp4.smaller;
                        class T {
                          constructor() {
                            return onReveal(row.parentKey);
                          }
                        }
                        cResult[35] = tmp43;
                        tmp40 = tmp43;
                      }
                      const obj9 = { left: text, width: text1 };
                      cResult[29] = text;
                      cResult[30] = text1;
                      cResult[31] = obj9;
                      tmp39 = obj9;
                    }
                  }
                }
              }
              const obj10 = { style: tmp12, children: null };
              const items2 = [tmp17, tmp21, tmp25, tmp30];
              obj10.children = items2;
              const tmp36 = options(timestampProducer, obj10);
              class T {
                constructor() {
                  return onReveal(row.parentKey);
                }
              }
              cResult[24] = tmp30;
              cResult[25] = tmp12;
              cResult[26] = tmp17;
              cResult[27] = tmp21;
              cResult[28] = tmp36;
              tmp33 = tmp36;
            }
            const obj11 = {
              variant: "text-xs/normal",
              color: "text-muted",
              style: tmp4.operation,
              lineClamp: 1,
              children: tmp5,
            };
            const tmp27 = closure_1_8(Text_Text.Text, obj11);
            cResult[16] = tmp5;
            cResult[17] = tmp4.operation;
            cResult[18] = tmp27;
            tmp25 = tmp27;
          }
          const obj12 = { style: null };
          const items3 = [,];
          ({ swatch: arr2[0], smaller: arr2[1] } = tmp4);
          obj12.style = items3;
          const tmp24 = closure_1_8(timestampProducer, obj12);
          class T {
            constructor() {
              return onReveal(row.parentKey);
            }
          }
          cResult[13] = tmp4.smaller;
          cResult[14] = tmp4.swatch;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        }
        const items4 = [tmp4.rowTop, tmp11];
        cResult[7] = tmp4.rowTop;
        cResult[8] = tmp11;
        cResult[9] = items4;
        tmp12 = items4;
      }
      class T {
        constructor() {
          return onReveal(row.parentKey);
        }
      }
      cResult[2] = onReveal;
      cResult[3] = row.parentKey;
      cResult[4] = T;
      tmp8 = T;
    }
  : function SmallerRow(row) {
      row = row.row;
      ({ extent, onReveal: importDefault } = row);
      const tmp = closure_11();
      const perfSmallerLabelResult = ConjurePerfTraceFormat.perfSmallerLabel(row);
      const obj2 = {
        style: tmp.row,
        onPress() {
          return importDefault(row.parentKey);
        },
        accessibilityRole: "button",
        accessibilityLabel: perfSmallerLabelResult,
        children: null,
      };
      const obj3 = { style: null, children: null };
      const items = [tmp.rowTop];
      items[1] = { paddingLeft: row.depth * nativeDefault.space.PX_12 };
      obj3.style = items;
      const obj5 = { style: tmp.chevron, children: null };
      const obj4 = { paddingLeft: row.depth * nativeDefault.space.PX_12 };
      obj5.children = closure_1_8(ChevronSmallRightIcon.ChevronSmallRightIcon, {
        size: "xs",
        color: nativeDefault.colors.ICON_SUBTLE,
      });
      const items1 = [closure_1_8(timestampProducer, obj5), , ,];
      const obj7 = { style: null };
      const items2 = [,];
      ({ swatch: arr3[0], smaller: arr3[1] } = tmp);
      obj7.style = items2;
      items1[1] = closure_1_8(timestampProducer, obj7);
      items1[2] = closure_1_8(Text_Text.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp.operation,
        lineClamp: 1,
        children: perfSmallerLabelResult,
      });
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
      const obj8 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp.operation,
        lineClamp: 1,
        children: perfSmallerLabelResult,
      };
      obj9.children = ConjurePerfTraceFormat.formatPerfMs(row.totalMs);
      items1[3] = closure_1_8(Text_Text.Text, obj9);
      obj3.children = items1;
      const items3 = [options(timestampProducer, obj3)];
      const obj11 = { style: tmp.smallerTrack, children: null };
      const obj12 = { style: null };
      const items4 = [, ,];
      ({ bar: arr5[0], smaller: arr5[1] } = tmp);
      items4[2] = { left: `${(row.start / extent) * 100}%`, width: `${((row.end - row.start) / extent) * 100}%` };
      obj12.style = items4;
      obj11.children = closure_1_8(timestampProducer, obj12);
      items3[1] = closure_1_8(timestampProducer, obj11);
      obj2.children = items3;
      return options(React4, obj2);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Waterfall(trace) {
      const cResult = require("c").c(73);
      trace = trace.trace;
      const tmp4 = closure_11();
      _require = tmp4;
      toggle = toggle(selectedKey[14])(trace);
      if (cResult[0] !== trace) {
        const perfTraceExtentResult = tmp(tmp2[15]).perfTraceExtent(trace);
        cResult[0] = trace;
        cResult[1] = perfTraceExtentResult;
        selectedKey = perfTraceExtentResult;
        const tmpResult = tmp(tmp2[15]);
      } else {
        selectedKey = cResult[1];
      }
      if (cResult[2] !== trace) {
        const perfTraceSelfTimesResult = tmp(tmp2[15]).perfTraceSelfTimes(trace, 6);
        cResult[2] = trace;
        cResult[3] = perfTraceSelfTimesResult;
        let arr = perfTraceSelfTimesResult;
        const tmpResult5 = tmp(tmp2[15]);
      } else {
        arr = cResult[3];
      }
      const sum = toggle(tmp2[5]).space.PX_16 + toggle(selectedKey[13])().bottom;
      if (cResult[4] !== sum) {
        let obj2 = { paddingBottom: sum };
        cResult[4] = sum;
        cResult[5] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.content) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] !== trace) {
          let str = tmp(tmp2[12]).perfTraceDuration(trace);
          if (str == null) {
            str = "still running";
          }
          cResult[9] = trace;
          cResult[10] = str;
          let tmp11 = str;
          const tmpResult6 = tmp(tmp2[12]);
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] !== tmp11) {
          let obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp11 };
          const tmp15 = closure_8(tmp(tmp2[10]).Text, obj3);
          cResult[11] = tmp11;
          cResult[12] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[12];
        }
        if (cResult[13] !== trace) {
          const perfTraceSummaryResult = tmp(tmp2[12]).perfTraceSummary(trace);
          cResult[13] = trace;
          cResult[14] = perfTraceSummaryResult;
          let tmp16 = perfTraceSummaryResult;
          const tmpResult7 = tmp(tmp2[12]);
        } else {
          tmp16 = cResult[14];
        }
        if (cResult[15] !== tmp16) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp16 };
          const tmp20 = closure_8(tmp(tmp2[10]).Text, obj4);
          cResult[15] = tmp16;
          cResult[16] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[16];
        }
        if (cResult[17] !== trace.started_by) {
          let tmp22 = null;
          if (null != trace.started_by) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const _HermesInternal = HermesInternal;
            obj5.children = "Started by " + trace.started_by.trace_name;
            tmp22 = closure_8(tmp(tmp2[10]).Text, obj5);
          }
          cResult[17] = trace.started_by;
          cResult[18] = tmp22;
          let tmp21 = tmp22;
        } else {
          tmp21 = cResult[18];
        }
        if (cResult[19] !== trace.dropped) {
          let tmp26 = null;
          if (0 !== trace.dropped) {
            const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
            const _HermesInternal2 = HermesInternal;
            obj6.children = "" + tmp(tmp2[12]).formatSpanCount(trace.dropped) + " not recorded";
            tmp26 = closure_8(tmp(tmp2[10]).Text, obj6);
            const tmpResult8 = tmp(tmp2[12]);
          }
          cResult[19] = trace.dropped;
          cResult[20] = tmp26;
          let tmp25 = tmp26;
        } else {
          tmp25 = cResult[20];
        }
        if (cResult[21] === tmp4.section) {
          if (cResult[22] === tmp18) {
            if (cResult[23] === tmp21) {
              if (cResult[24] === tmp25) {
                if (cResult[25] === tmp13) {
                  let tmp29 = cResult[26];
                }
                if (cResult[27] !== toggle.reset) {
                  const obj7 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: toggle.reset };
                  const tmp35 = closure_8(tmp(tmp2[16]).Button, obj7);
                  cResult[27] = toggle.reset;
                  cResult[28] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[28];
                }
                if (cResult[29] !== toggle.expandAll) {
                  const obj8 = { size: "sm", variant: "secondary", text: "Expand all", onPress: toggle.expandAll };
                  const tmp38 = closure_8(tmp(tmp2[16]).Button, obj8);
                  cResult[29] = toggle.expandAll;
                  cResult[30] = tmp38;
                  let tmp36 = tmp38;
                } else {
                  tmp36 = cResult[30];
                }
                if (cResult[31] !== toggle.collapseAll) {
                  const obj9 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: toggle.collapseAll };
                  const tmp41 = closure_8(tmp(tmp2[16]).Button, obj9);
                  cResult[31] = toggle.collapseAll;
                  cResult[32] = tmp41;
                  let tmp39 = tmp41;
                } else {
                  tmp39 = cResult[32];
                }
                if (cResult[33] === tmp4.toolbar) {
                  if (cResult[34] === tmp33) {
                    if (cResult[35] === tmp36) {
                      if (cResult[36] === tmp39) {
                        let tmp42 = cResult[37];
                      }
                      const _Symbol = Symbol;
                      if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp49 = closure_8(tmp(tmp2[10]).Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: "Long-press a span to expand everything under it.",
                        });
                        cResult[38] = tmp49;
                        let tmp47 = tmp49;
                      } else {
                        tmp47 = cResult[38];
                      }
                      if (cResult[39] !== tmp4) {
                        const PERF_CATEGORIES = tmp(tmp2[15]).PERF_CATEGORIES;
                        const mapped = PERF_CATEGORIES.map((item) => {
                          const obj = { style: closure_0.legendItem, children: null };
                          const obj2 = { style: null };
                          const items = [closure_0.swatch, closure_0[item]];
                          obj2.style = items;
                          const items1 = [
                            closure_2_8(timestampProducer, obj2),
                            closure_2_8(Text_Text.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item],
                            }),
                          ];
                          obj.children = items1;
                          return options(timestampProducer, obj, item);
                        });
                        cResult[39] = tmp4;
                        cResult[40] = mapped;
                        let tmp50 = mapped;
                      } else {
                        tmp50 = cResult[40];
                      }
                      if (cResult[41] === tmp4.legend) {
                        if (cResult[42] === tmp50) {
                          let tmp52 = cResult[43];
                        }
                        if (cResult[44] === selectedKey) {
                          if (cResult[45] === toggle.collapsed) {
                            if (cResult[46] === toggle.expandSubtree) {
                              if (cResult[47] === toggle.reveal) {
                                if (cResult[48] === toggle.rows) {
                                  if (cResult[49] === toggle.select) {
                                    if (cResult[50] === toggle.selectedKey) {
                                      if (cResult[51] === toggle.toggle) {
                                        if (cResult[61] !== cResult[52]) {
                                          const obj10 = { children: tmp56 };
                                          const tmp63 = closure_8(closure_6, obj10);
                                          cResult[61] = tmp56;
                                          cResult[62] = tmp63;
                                          let tmp60 = tmp63;
                                        } else {
                                          tmp60 = cResult[62];
                                        }
                                        if (cResult[63] === arr) {
                                          if (cResult[64] === tmp4.section) {
                                            let tmp64 = cResult[65];
                                          }
                                          if (cResult[66] === tmp29) {
                                            if (cResult[67] === tmp42) {
                                              if (cResult[68] === tmp52) {
                                                if (cResult[69] === tmp60) {
                                                  if (cResult[70] === tmp64) {
                                                    if (cResult[71] === tmp10) {
                                                      let tmp69 = cResult[72];
                                                    }
                                                    return tmp69;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj11 = { contentContainerStyle: tmp10, children: null };
                                          let items = [tmp29, tmp42, tmp47, tmp52, tmp60, tmp64];
                                          obj11.children = items;
                                          const tmp72 = closure_9(closure_5, obj11);
                                          cResult[66] = tmp29;
                                          cResult[67] = tmp42;
                                          cResult[68] = tmp52;
                                          cResult[69] = tmp60;
                                          cResult[70] = tmp64;
                                          cResult[71] = tmp10;
                                          cResult[72] = tmp72;
                                          tmp69 = tmp72;
                                        }
                                        let tmp65 = null;
                                        if (0 !== arr.length) {
                                          const obj12 = { style: tmp4.section, children: null };
                                          let items1 = [
                                            closure_8(tmp(tmp2[10]).Text, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: "Most time",
                                            }),
                                            arr.map((name) => {
                                              name = name.name;
                                              const obj = {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children:
                                                  "" + name + " " + closure_0(selectedKey[12]).formatPerfMs(name.ms),
                                              };
                                              return closure_1_8(closure_0(selectedKey[10]).Text, obj, name);
                                            }),
                                          ];
                                          obj12.children = items1;
                                          tmp65 = closure_9(closure_6, obj12);
                                        }
                                        cResult[63] = arr;
                                        cResult[64] = tmp4.section;
                                        cResult[65] = tmp65;
                                        tmp64 = tmp65;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (cResult[53] === selectedKey) {
                          if (cResult[54] === toggle.collapsed) {
                            if (cResult[55] === toggle.expandSubtree) {
                              if (cResult[56] === toggle.reveal) {
                                if (cResult[57] === toggle.select) {
                                  if (cResult[58] === toggle.selectedKey) {
                                    if (cResult[59] === toggle.toggle) {
                                      let tmp57 = cResult[60];
                                    }
                                    const rows = toggle.rows;
                                    const mapped1 = rows.map(tmp57);
                                    cResult[44] = selectedKey;
                                    cResult[45] = toggle.collapsed;
                                    cResult[46] = toggle.expandSubtree;
                                    cResult[47] = toggle.reveal;
                                    cResult[48] = toggle.rows;
                                    ({ select: tmp3[49], selectedKey } = toggle);
                                    cResult[50] = selectedKey;
                                    toggle = toggle.toggle;
                                    cResult[51] = toggle;
                                    cResult[52] = mapped1;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const fn = function z(kind) {
                          if ("node" === kind.kind) {
                            const obj3 = {
                              node: kind.node,
                              extent: selectedKey,
                              collapsed: null,
                              selected: null,
                              onSelect: null,
                              onToggle: null,
                              onExpandSubtree: null,
                            };
                            collapsed = toggle.collapsed;
                            obj3.collapsed = collapsed.has(kind.key);
                            obj3.selected = kind.key === toggle.selectedKey;
                            ({
                              select: obj2.onSelect,
                              toggle: obj2.onToggle,
                              expandSubtree: obj2.onExpandSubtree,
                            } = toggle);
                            let tmp5 = closure_2_8(closure_12, obj3, kind.key);
                          } else {
                            const obj = { row: kind, extent: selectedKey, onReveal: toggle.reveal };
                            tmp5 = closure_2_8(closure_13, obj, kind.key);
                          }
                          return tmp5;
                        };
                        cResult[53] = selectedKey;
                        cResult[54] = toggle.collapsed;
                        cResult[55] = toggle.expandSubtree;
                        cResult[56] = toggle.reveal;
                        cResult[57] = toggle.select;
                        cResult[58] = toggle.selectedKey;
                        cResult[59] = toggle.toggle;
                        cResult[60] = fn;
                        tmp57 = fn;
                      }
                      const obj13 = { style: tmp4.legend, children: tmp50 };
                      const tmp55 = closure_8(closure_6, obj13);
                      cResult[41] = tmp4.legend;
                      cResult[42] = tmp50;
                      cResult[43] = tmp55;
                      tmp52 = tmp55;
                    }
                  }
                }
                const obj14 = { style: tmp4.toolbar, children: null };
                const items2 = [tmp33, tmp36, tmp39];
                obj14.children = items2;
                const tmp45 = closure_9(closure_6, obj14);
                cResult[33] = tmp4.toolbar;
                cResult[34] = tmp33;
                cResult[35] = tmp36;
                cResult[36] = tmp39;
                cResult[37] = tmp45;
                tmp42 = tmp45;
              }
            }
          }
        }
        const obj15 = { style: tmp4.section, children: null };
        const items3 = [tmp13, tmp18, tmp21, tmp25];
        obj15.children = items3;
        const tmp32 = closure_9(closure_6, obj15);
        cResult[21] = tmp4.section;
        cResult[22] = tmp18;
        cResult[23] = tmp21;
        cResult[24] = tmp25;
        cResult[25] = tmp13;
        cResult[26] = tmp32;
        tmp29 = tmp32;
      }
      const items4 = [tmp4.content, tmp9];
      cResult[6] = tmp4.content;
      cResult[7] = tmp9;
      cResult[8] = items4;
      tmp10 = items4;
      let obj = require("c");
    }
  : function Waterfall(trace) {
      trace = trace.trace;
      const tmp = closure_11();
      importDefault = tmp;
      const tmp3 = useConjurePerfTraceTreeDefault(trace);
      dependencyMap = tmp3;
      noop = trace(17068).perfTraceExtent(trace);
      let items = [trace];
      const memo = noop.useMemo(() => ConjurePerfTraceLayout.perfTraceSelfTimes(trace, 6), items);
      let obj2 = { contentContainerStyle: null, children: null };
      let items1 = [tmp.content];
      let obj = trace(17068);
      items1[1] = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
      obj2.contentContainerStyle = items1;
      const obj4 = { style: tmp.section, children: null };
      let obj3 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
      let str = trace(17067).perfTraceDuration(trace);
      if (str == null) {
        str = "still running";
      }
      const items2 = [
        closure_8(trace(5086).Text, { variant: "text-md/semibold", color: "text-strong", children: str }),
        ,
        ,
      ];
      const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const obj5 = trace(17067);
      obj6.children = trace(17067).perfTraceSummary(trace);
      items2[1] = closure_8(trace(5086).Text, obj6);
      let tmp8Result = null;
      if (null != trace.started_by) {
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const _HermesInternal = HermesInternal;
        obj7.children = "Started by " + trace.started_by.trace_name;
        tmp8Result = closure_8(tmp4(5086).Text, obj7);
      }
      items2[2] = tmp8Result;
      let tmp8Result2 = null;
      if (0 !== trace.dropped) {
        const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
        const _HermesInternal2 = HermesInternal;
        obj8.children = "" + tmp4(17067).formatSpanCount(trace.dropped) + " not recorded";
        tmp8Result2 = closure_8(tmp4(5086).Text, obj8);
        const tmp4Result2 = tmp4(17067);
      }
      items2[3] = tmp8Result2;
      obj4.children = items2;
      const items3 = [closure_9(closure_6, obj4), , , , ,];
      const obj9 = { style: tmp.toolbar, children: null };
      const items4 = [
        closure_8(trace(5375).Button, { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp3.reset }),
        closure_8(trace(5375).Button, {
          size: "sm",
          variant: "secondary",
          text: "Expand all",
          onPress: tmp3.expandAll,
        }),
        closure_8(trace(5375).Button, {
          size: "sm",
          variant: "secondary",
          text: "Collapse all",
          onPress: tmp3.collapseAll,
        }),
      ];
      obj9.children = items4;
      items3[1] = closure_9(closure_6, obj9);
      items3[2] = closure_8(trace(5086).Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: "Long-press a span to expand everything under it.",
      });
      const obj13 = { style: tmp.legend, children: null };
      const PERF_CATEGORIES = tmp4(17068).PERF_CATEGORIES;
      obj13.children = PERF_CATEGORIES.map((item) => {
        const obj = { style: closure_1.legendItem, children: null };
        const obj2 = { style: null };
        const items = [closure_1.swatch, closure_1[item]];
        obj2.style = items;
        const items1 = [
          closure_2_8(timestampProducer, obj2),
          closure_2_8(Text_Text.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item],
          }),
        ];
        obj.children = items1;
        return options(timestampProducer, obj, item);
      });
      items3[3] = closure_8(closure_6, obj13);
      const obj14 = { children: null };
      const rows = tmp3.rows;
      obj14.children = rows.map((kind) => {
        if ("node" === kind.kind) {
          const obj3 = {
            node: kind.node,
            extent,
            collapsed: null,
            selected: null,
            onSelect: null,
            onToggle: null,
            onExpandSubtree: null,
          };
          collapsed = closure_2.collapsed;
          obj3.collapsed = collapsed.has(kind.key);
          obj3.selected = kind.key === closure_2.selectedKey;
          ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_2);
          let tmp5 = closure_2_8(closure_12, obj3, kind.key);
        } else {
          const obj = { row: kind, extent, onReveal: closure_2.reveal };
          tmp5 = closure_2_8(closure_13, obj, kind.key);
        }
        return tmp5;
      });
      items3[4] = closure_8(closure_6, obj14);
      let tmp5Result = null;
      if (0 !== memo.length) {
        const obj15 = { style: tmp.section, children: null };
        const items5 = [
          closure_8(tmp4(5086).Text, { variant: "text-sm/semibold", color: "text-default", children: "Most time" }),
          memo.map((name) => {
            name = name.name;
            const obj = {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "" + name + " " + trace(closure_2[12]).formatPerfMs(name.ms),
            };
            return closure_1_8(trace(closure_2[10]).Text, obj, name);
          }),
        ];
        obj15.children = items5;
        tmp5Result = closure_9(closure_6, obj15);
      }
      items3[5] = tmp5Result;
      obj2.children = items3;
      return closure_9(closure_5, obj2);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PerfTraceScreen(projectId) {
      let Text = projectId;
      let tmp = dependencyMap;
      const cResult = projectId(576).c(8);
      projectId = projectId.projectId;
      const traceId = projectId.traceId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === projectId) {
        if (cResult[2] === traceId) {
          let tmp5 = cResult[3];
          let tmp6 = cResult[4];
        }
        const stateFromStores = Text(504).useStateFromStores(first, tmp5, tmp6);
        if (null == stateFromStores) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            Text = Text(5086).Text;
            tmp = closure_8(Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "This trace is no longer available.",
            });
            cResult[5] = tmp;
          }
        } else {
          if (cResult[6] !== stateFromStores) {
            const obj2 = { trace: stateFromStores };
            const tmp12 = closure_8(closure_14, obj2);
            cResult[6] = stateFromStores;
            cResult[7] = tmp12;
            let tmp9 = tmp12;
          } else {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const TextResult = Text(504);
      }
      const fn = function o() {
        return ConjureDebugStore.getTimingTrace(projectId, traceId);
      };
      const items1 = [projectId, traceId];
      cResult[1] = projectId;
      cResult[2] = traceId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp6 = items1;
      tmp5 = fn;
      const obj = projectId(576);
    }
  : function PerfTraceScreen(projectId) {
      projectId = projectId.projectId;
      const traceId = projectId.traceId;
      const items = [ConjureDebugStore];
      const items1 = [projectId, traceId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureDebugStore.getTimingTrace(projectId, traceId),
        items1,
      );
      if (null == stateFromStores) {
        let tmp6 = closure_8(projectId(5086).Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "This trace is no longer available.",
        });
      } else {
        const obj2 = { trace: stateFromStores };
        tmp6 = closure_8(closure_14, obj2);
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
const obj26 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePerfTraceModal(projectId) {
      const cResult = projectId(576).c(14);
      projectId = projectId.projectId;
      const traceId = projectId.traceId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === projectId) {
        if (cResult[2] === traceId) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const headerCloseButton = tmp(6203).getHeaderCloseButton(() => traceId(dependencyMap[19]).pop());
          cResult[5] = headerCloseButton;
          let tmp9 = headerCloseButton;
          const tmpResult2 = tmp(6203);
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === projectId) {
          if (cResult[7] === traceId) {
            let tmp11 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            if (cResult[10] === stateFromStores) {
              let tmp12 = cResult[11];
            }
            if (cResult[12] !== tmp12) {
              const obj2 = { initialRouteName: perf_trace, screens: tmp12 };
              const tmp17 = closure_8(tmp(11213).Modal, obj2);
              cResult[12] = tmp12;
              cResult[13] = tmp17;
              let tmp14 = tmp17;
            } else {
              tmp14 = cResult[13];
            }
            return tmp14;
          }
          const obj3 = {};
          const obj4 = { title: stateFromStores, headerLeft: tmp9, render: tmp11 };
          obj3[perf_trace] = obj4;
          cResult[9] = tmp11;
          cResult[10] = stateFromStores;
          cResult[11] = obj3;
          tmp12 = obj3;
        }
        const fn2 = function b() {
          return closure_2_8(closure_15, { projectId, traceId });
        };
        cResult[6] = projectId;
        cResult[7] = traceId;
        cResult[8] = fn2;
        tmp11 = fn2;
        const tmpResult = tmp(504);
      }
      const fn = function o() {
        const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
        let str;
        if (timingTrace != null) {
          str = timingTrace.name;
        }
        if (str == null) {
          str = "Perf Trace";
        }
        return str;
      };
      const items1 = [projectId, traceId];
      cResult[1] = projectId;
      cResult[2] = traceId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = projectId(576);
    }
  : function ConjurePerfTraceModal(projectId) {
      projectId = projectId.projectId;
      const traceId = projectId.traceId;
      let stateFromStores;
      const items = [ConjureDebugStore];
      const items1 = [projectId, traceId];
      stateFromStores = projectId(stateFromStores[17]).useStateFromStores(
        items,
        () => {
          const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
          let str;
          if (timingTrace != null) {
            str = timingTrace.name;
          }
          if (str == null) {
            str = "Perf Trace";
          }
          return str;
        },
        items1,
      );
      const items2 = [projectId, stateFromStores, traceId];
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          title: stateFromStores,
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => traceId(stateFromStores[19]).pop()),
          render() {
            return closure_2_8(closure_2_15, { projectId, traceId });
          },
        };
        obj[perf_trace] = obj2;
        return obj;
      }, items2);
      return closure_8(projectId(stateFromStores[20]).Modal, { initialRouteName: perf_trace, screens: memo });
    };
