// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ChevronSmallRightIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ConjurePerfTraceStatsHeaderDefault from "ConjurePerfTraceStatsHeader.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import ConjurePerfTraceStats from "../ConjurePerfTraceStats.tsx";
import useConjurePerfTraceTreeDefault from "../useConjurePerfTraceTree.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../../ConjureDebugStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const perf_trace = "perf_trace";
const createStyles = fn(5092);
let obj2 = {
  content: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 },
  section: null,
  toolbar: null,
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
  detailBlock: null,
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
obj2.row = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
let obj6 = {
  paddingVertical: nativeDefault.space.PX_4,
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
};
obj2.rowSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.chevron = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj2.operation = { flex: 1 };
let obj9 = { width: nativeDefault.space.PX_16, alignItems: "center" };
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
let obj10 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.detail = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
let obj11 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj2.detailLine = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.detailBlock = { gap: nativeDefault.space.PX_4 };
let obj13 = { gap: nativeDefault.space.PX_4 };
obj2.failed = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let obj14 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.running = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let obj15 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj2.smaller = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.smallerTrack = { height: 3 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WaterfallRow(node) {
      const cResult = node(onSelect[7]).c(79);
      node = node.node;
      ({ extent, collapsed, selected } = node);
      onSelect = node.onSelect;
      let chevron = node.onToggle;
      const onExpandSubtree = node.onExpandSubtree;
      let tmp4 = closure_11();
      const detail = tmp4;
      let obj = node(onSelect[7]);
      const perfCategoryColors = node(onSelect[8]).usePerfCategoryColors();
      if (collapsed) {
        let ChevronSmallDownIcon = tmp(tmp2[9]).ChevronSmallRightIcon;
      } else {
        ChevronSmallDownIcon = tmp(tmp2[10]).ChevronSmallDownIcon;
      }
      if (node.failed) {
        let running = tmp4.failed;
      } else if (node.running) {
        running = tmp4.running;
      } else {
        running = perfCategoryColors[node.category];
      }
      let rowSelected = selected;
      if (selected) {
        rowSelected = tmp4.rowSelected;
      }
      if (cResult[0] === tmp4.row) {
        if (cResult[1] === rowSelected) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === node.key) {
          if (cResult[4] === onSelect) {
            if (cResult[5] === selected) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === node.key) {
              if (cResult[8] === onExpandSubtree) {
                let tmp9 = cResult[9];
              }
              let tmp10;
              if (tmp6) {
                tmp10 = !collapsed;
              }
              if (cResult[10] === selected) {
                if (cResult[11] === tmp10) {
                  let tmp11 = cResult[12];
                }
                const result = node.depth * selected(tmp2[5]).space.PX_12;
                if (cResult[13] !== result) {
                  const obj3 = { paddingLeft: result };
                  cResult[13] = result;
                  cResult[14] = obj3;
                  let tmp14 = obj3;
                } else {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === tmp4.rowTop) {
                  if (cResult[16] === tmp14) {
                    let tmp15 = cResult[17];
                  }
                  if (cResult[18] === ChevronSmallDownIcon) {
                    if (cResult[19] === collapsed) {
                      if (cResult[20] === tmp6) {
                        if (cResult[21] === node.key) {
                          if (cResult[22] === chevron) {
                            if (cResult[23] === tmp4.chevron) {
                              if (cResult[25] !== node.descendants) {
                                let tmp23 = null;
                                if (node.descendants > 0) {
                                  const obj4 = {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: node.descendants,
                                  };
                                  tmp23 = closure_8(tmp(tmp2[11]).Text, obj4);
                                }
                                cResult[25] = node.descendants;
                                cResult[26] = tmp23;
                                let tmp22 = tmp23;
                              } else {
                                tmp22 = cResult[26];
                              }
                              if (cResult[27] === tmp4.swatch) {
                                if (cResult[28] === tmp25) {
                                  let tmp26 = cResult[29];
                                }
                                if (cResult[30] !== node.service) {
                                  const obj5 = {
                                    variant: "text-xs/semibold",
                                    color: "text-strong",
                                    children: node.service,
                                  };
                                  const tmp32 = closure_8(tmp(tmp2[11]).Text, obj5);
                                  cResult[30] = node.service;
                                  cResult[31] = tmp32;
                                  let tmp30 = tmp32;
                                } else {
                                  tmp30 = cResult[31];
                                }
                                if (cResult[32] === node.operation) {
                                  if (cResult[33] === tmp4.operation) {
                                    let tmp33 = cResult[34];
                                  }
                                  if (cResult[35] === node.count) {
                                    if (cResult[36] === tmp4.badge) {
                                      let tmp36 = cResult[37];
                                    }
                                    if (cResult[38] !== node.failed) {
                                      let tmp42 = null;
                                      if (node.failed) {
                                        const obj6 = { size: "xs", color: selected(tmp2[5]).colors.STATUS_DANGER };
                                        tmp42 = closure_8(tmp(tmp2[12]).WarningIcon, obj6);
                                      }
                                      cResult[38] = node.failed;
                                      cResult[39] = tmp42;
                                      let tmp41 = tmp42;
                                    } else {
                                      tmp41 = cResult[39];
                                    }
                                    if (cResult[40] !== node) {
                                      const perfNodeDurationResult = tmp(tmp2[13]).perfNodeDuration(node);
                                      cResult[40] = node;
                                      cResult[41] = perfNodeDurationResult;
                                      let tmp44 = perfNodeDurationResult;
                                      const tmpResult = tmp(tmp2[13]);
                                    } else {
                                      tmp44 = cResult[41];
                                    }
                                    if (cResult[42] !== tmp44) {
                                      const obj7 = { variant: "text-xs/normal", color: "text-muted", children: tmp44 };
                                      const tmp48 = closure_8(tmp(tmp2[11]).Text, obj7);
                                      cResult[42] = tmp44;
                                      cResult[43] = tmp48;
                                      let tmp46 = tmp48;
                                    } else {
                                      tmp46 = cResult[43];
                                    }
                                    if (cResult[44] === tmp16) {
                                      if (cResult[45] === tmp22) {
                                        if (cResult[46] === tmp26) {
                                          if (cResult[47] === tmp30) {
                                            if (cResult[48] === tmp33) {
                                              if (cResult[49] === tmp36) {
                                                if (cResult[50] === tmp41) {
                                                  if (cResult[51] === tmp46) {
                                                    if (cResult[52] === tmp15) {
                                                      let tmp49 = cResult[53];
                                                    }
                                                    const text = `${(node.start / extent) * 100}%`;
                                                    const text1 = `${((node.end - node.start) / extent) * 100}%`;
                                                    if (cResult[54] === `${(node.start / extent) * 100}%`) {
                                                      if (
                                                        cResult[55] === `${((node.end - node.start) / extent) * 100}%`
                                                      ) {
                                                        let tmp55 = cResult[56];
                                                      }
                                                      if (cResult[57] === running) {
                                                        if (cResult[58] === tmp4.bar) {
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
                                                                  if (cResult[67] === tmp4.detailBlock) {
                                                                    if (cResult[68] === tmp4.detailLine) {
                                                                      if (cResult[69] === tmp4.operation) {
                                                                        let tmp64 = cResult[70];
                                                                      }
                                                                      if (cResult[71] === tmp7) {
                                                                        if (cResult[72] === tmp49) {
                                                                          if (cResult[73] === tmp60) {
                                                                            if (cResult[74] === tmp64) {
                                                                              if (cResult[75] === tmp8) {
                                                                                if (cResult[76] === tmp9) {
                                                                                  if (cResult[77] === tmp11) {
                                                                                    let tmp68 = cResult[78];
                                                                                  }
                                                                                  return tmp68;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj8 = {
                                                                        style: tmp7,
                                                                        onPress: tmp8,
                                                                        onLongPress: tmp9,
                                                                        accessibilityRole: "button",
                                                                        accessibilityState: tmp11,
                                                                        children: null,
                                                                      };
                                                                      let items = [tmp49, tmp60, tmp64];
                                                                      obj8.children = items;
                                                                      const tmp71 = closure_9(onExpandSubtree, obj8);
                                                                      cResult[71] = tmp7;
                                                                      cResult[72] = tmp49;
                                                                      cResult[73] = tmp60;
                                                                      cResult[74] = tmp64;
                                                                      cResult[75] = tmp8;
                                                                      cResult[76] = tmp9;
                                                                      cResult[77] = tmp11;
                                                                      cResult[78] = tmp71;
                                                                      tmp68 = tmp71;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            let tmp65 = null;
                                                            if (selected) {
                                                              const obj9 = { style: null, children: null };
                                                              const items1 = [tmp4.detail];
                                                              const obj10 = {
                                                                paddingLeft: node.depth * selected(tmp2[5]).space.PX_12,
                                                              };
                                                              items1[1] = obj10;
                                                              obj9.style = items1;
                                                              const tmpResult2 = tmp(tmp2[13]);
                                                              obj9.children = tmp(tmp2[13])
                                                                .perfNodeSections(node)
                                                                .map((item) => {
                                                                  ({ title, rows } = item);
                                                                  let obj = { style: detail.detail, children: null };
                                                                  let tmp3 = null;
                                                                  if (null != title) {
                                                                    const obj2 = {
                                                                      variant: "text-xs/semibold",
                                                                      color: "text-strong",
                                                                      children: title,
                                                                    };
                                                                    tmp3 = closure_2_8(Text_Text.Text, obj2);
                                                                  }
                                                                  let items = [
                                                                    tmp3,
                                                                    rows.map((children) => {
                                                                      const label = children.label;
                                                                      if (children.block) {
                                                                        let detailLine = detail.detailBlock;
                                                                        let tmp4 = detail;
                                                                      } else {
                                                                        detailLine = detail.detailLine;
                                                                        tmp4 = detail;
                                                                      }
                                                                      const obj = { style: detailLine, children: null };
                                                                      const items = [
                                                                        closure_2_8(node(onSelect[11]).Text, {
                                                                          variant: "text-xs/semibold",
                                                                          color: "text-muted",
                                                                          children: label,
                                                                        }),
                                                                        closure_2_8(node(onSelect[11]).Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-default",
                                                                          style: tmp4.operation,
                                                                          selectable: true,
                                                                          children: children.value,
                                                                        }),
                                                                      ];
                                                                      obj.children = items;
                                                                      return closure_2_9(closure_2_6, obj, label);
                                                                    }),
                                                                  ];
                                                                  obj.children = items;
                                                                  if (title == null) {
                                                                    title = "timing";
                                                                  }
                                                                  return options(timestampProducer, obj, title);
                                                                });
                                                              tmp65 = closure_8(closure_6, obj9);
                                                              const perfNodeSectionsResult = tmp(
                                                                tmp2[13],
                                                              ).perfNodeSections(node);
                                                            }
                                                            cResult[64] = node;
                                                            cResult[65] = selected;
                                                            cResult[66] = tmp4.detail;
                                                            cResult[67] = tmp4.detailBlock;
                                                            cResult[68] = tmp4.detailLine;
                                                            cResult[69] = tmp4.operation;
                                                            cResult[70] = tmp65;
                                                            tmp64 = tmp65;
                                                          }
                                                          const obj11 = { style: tmp4.track, children: tmp56 };
                                                          const tmp63 = closure_8(closure_6, obj11);
                                                          cResult[61] = tmp4.track;
                                                          cResult[62] = tmp56;
                                                          cResult[63] = tmp63;
                                                          tmp60 = tmp63;
                                                        }
                                                      }
                                                      const obj12 = { style: null };
                                                      const items2 = [tmp4.bar, running, tmp55];
                                                      obj12.style = items2;
                                                      const tmp59 = closure_8(closure_6, obj12);
                                                      cResult[57] = running;
                                                      cResult[58] = tmp4.bar;
                                                      cResult[59] = tmp55;
                                                      cResult[60] = tmp59;
                                                      tmp56 = tmp59;
                                                    }
                                                    const obj13 = { left: text, width: text1 };
                                                    cResult[54] = text;
                                                    cResult[55] = text1;
                                                    cResult[56] = obj13;
                                                    tmp55 = obj13;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj14 = { style: tmp15, children: null };
                                    const items3 = [tmp16, tmp22, tmp26, tmp30, tmp33, tmp36, tmp41, tmp46];
                                    obj14.children = items3;
                                    const tmp52 = closure_9(closure_6, obj14);
                                    cResult[44] = tmp16;
                                    cResult[45] = tmp22;
                                    cResult[46] = tmp26;
                                    cResult[47] = tmp30;
                                    cResult[48] = tmp33;
                                    cResult[49] = tmp36;
                                    cResult[50] = tmp41;
                                    cResult[51] = tmp46;
                                    cResult[52] = tmp15;
                                    cResult[53] = tmp52;
                                    tmp49 = tmp52;
                                  }
                                  let tmp37 = null;
                                  if (node.count > 1) {
                                    const obj15 = { style: tmp4.badge, children: null };
                                    const obj16 = {
                                      variant: "text-xxs/semibold",
                                      color: "text-default",
                                      children: null,
                                    };
                                    const _HermesInternal = HermesInternal;
                                    obj16.children = "\u00D7" + node.count;
                                    obj15.children = closure_8(tmp(tmp2[11]).Text, obj16);
                                    tmp37 = closure_8(closure_6, obj15);
                                  }
                                  cResult[35] = node.count;
                                  cResult[36] = tmp4.badge;
                                  cResult[37] = tmp37;
                                  tmp36 = tmp37;
                                }
                                const obj17 = {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  style: tmp4.operation,
                                  lineClamp: 1,
                                  children: node.operation,
                                };
                                const tmp35 = closure_8(tmp(tmp2[11]).Text, obj17);
                                cResult[32] = node.operation;
                                cResult[33] = tmp4.operation;
                                cResult[34] = tmp35;
                                tmp33 = tmp35;
                              }
                              const obj18 = { style: null };
                              const items4 = [tmp4.swatch, perfCategoryColors[node.category]];
                              obj18.style = items4;
                              const tmp29 = closure_8(closure_6, obj18);
                              cResult[27] = tmp4.swatch;
                              cResult[28] = perfCategoryColors[node.category];
                              cResult[29] = tmp29;
                              tmp26 = tmp29;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (tmp6) {
                    const obj19 = {
                      style: tmp4.chevron,
                      onPress() {
                        return chevron(node.key);
                      },
                      accessibilityRole: "button",
                      accessibilityLabel: null,
                      children: null,
                    };
                    let str = "Collapse";
                    if (collapsed) {
                      str = "Expand";
                    }
                    obj19.accessibilityLabel = str;
                    const obj20 = { size: "xs", color: selected(tmp2[5]).colors.ICON_SUBTLE };
                    obj19.children = closure_8(ChevronSmallDownIcon, obj20);
                    let tmp17Result = closure_8(onExpandSubtree, obj19);
                  } else {
                    const obj21 = { style: tmp4.chevron };
                    tmp17Result = closure_8(closure_6, obj21);
                  }
                  cResult[18] = ChevronSmallDownIcon;
                  cResult[19] = collapsed;
                  cResult[20] = tmp6;
                  collapsed = node.key;
                  cResult[21] = collapsed;
                  cResult[22] = chevron;
                  chevron = tmp4.chevron;
                  cResult[23] = chevron;
                  cResult[24] = tmp17Result;
                }
                const items5 = [tmp4.rowTop, tmp14];
                cResult[15] = tmp4.rowTop;
                cResult[16] = tmp14;
                cResult[17] = items5;
                tmp15 = items5;
              }
              const obj22 = { selected, expanded: tmp10 };
              cResult[10] = selected;
              cResult[11] = tmp10;
              cResult[12] = obj22;
              tmp11 = obj22;
            }
            const fn2 = function s() {
              return onExpandSubtree(node.key);
            };
            cResult[7] = node.key;
            cResult[8] = onExpandSubtree;
            cResult[9] = fn2;
            tmp9 = fn2;
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
        tmp8 = fn;
      }
      const items6 = [tmp4.row, rowSelected];
      cResult[0] = tmp4.row;
      cResult[1] = rowSelected;
      cResult[2] = items6;
      tmp7 = items6;
      let obj2 = node(onSelect[8]);
    }
  : function WaterfallRow(node) {
      node = node.node;
      ({ extent, collapsed, selected } = node);
      ({ onSelect: dependencyMap, onToggle: noop, onExpandSubtree: closure_4 } = node);
      const tmp = closure_11();
      const detail = tmp;
      const perfCategoryColors = node(17278).usePerfCategoryColors();
      if (collapsed) {
        let ChevronSmallDownIcon = tmp2(6905).ChevronSmallRightIcon;
      } else {
        ChevronSmallDownIcon = tmp2(10532).ChevronSmallDownIcon;
      }
      if (node.failed) {
        let running = tmp.failed;
      } else if (node.running) {
        running = tmp.running;
      } else {
        running = perfCategoryColors[node.category];
      }
      let items = [tmp.row];
      let rowSelected = selected;
      if (selected) {
        rowSelected = tmp.rowSelected;
      }
      let obj2 = {
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
      const obj3 = { selected, expanded: null };
      let tmp8;
      if (node.children.length > 0) {
        tmp8 = !collapsed;
      }
      obj3.expanded = tmp8;
      obj2.accessibilityState = obj3;
      const obj4 = { style: null, children: null };
      const items1 = [tmp.rowTop];
      let obj = node(17278);
      items1[1] = { paddingLeft: node.depth * selected(587).space.PX_12 };
      obj4.style = items1;
      if (node.children.length > 0) {
        const obj6 = {
          style: tmp.chevron,
          onPress() {
            return noop(node.key);
          },
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        let str = "Collapse";
        if (collapsed) {
          str = "Expand";
        }
        obj6.accessibilityLabel = str;
        const obj7 = { size: "xs", color: selected(587).colors.ICON_SUBTLE };
        obj6.children = closure_8(ChevronSmallDownIcon, obj7);
        let tmp11Result = closure_8(closure_4, obj6);
        let tmp13 = closure_8;
      } else {
        const obj8 = { style: tmp.chevron };
        tmp11Result = closure_8(closure_6, obj8);
        tmp13 = closure_8;
      }
      const items2 = [tmp11Result, , , , , , ,];
      let tmp13Result = null;
      if (node.descendants > 0) {
        const obj9 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
        tmp13Result = tmp13(tmp2(5088).Text, obj9);
      }
      items2[1] = tmp13Result;
      const obj10 = { style: null };
      const items3 = [tmp.swatch, perfCategoryColors[node.category]];
      obj10.style = items3;
      items2[2] = tmp13(closure_6, obj10);
      items2[3] = tmp13(node(5088).Text, { variant: "text-xs/semibold", color: "text-strong", children: node.service });
      items2[4] = tmp13(node(5088).Text, {
        variant: "text-xs/normal",
        color: "text-default",
        style: tmp.operation,
        lineClamp: 1,
        children: node.operation,
      });
      let tmp13Result4 = null;
      if (node.count > 1) {
        const obj13 = { style: tmp.badge, children: null };
        const obj14 = { variant: "text-xxs/semibold", color: "text-default", children: null };
        const _HermesInternal = HermesInternal;
        obj14.children = "\u00D7" + node.count;
        obj13.children = tmp13(tmp2(5088).Text, obj14);
        tmp13Result4 = tmp13(closure_6, obj13);
      }
      items2[5] = tmp13Result4;
      let tmp13Result5 = null;
      if (node.failed) {
        const obj15 = { size: "xs", color: selected(587).colors.STATUS_DANGER };
        tmp13Result5 = tmp13(tmp2(7571).WarningIcon, obj15);
      }
      items2[6] = tmp13Result5;
      const obj16 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const obj11 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
      const obj12 = {
        variant: "text-xs/normal",
        color: "text-default",
        style: tmp.operation,
        lineClamp: 1,
        children: node.operation,
      };
      const obj5 = { paddingLeft: node.depth * selected(587).space.PX_12 };
      obj16.children = node(17279).perfNodeDuration(node);
      items2[7] = tmp13(node(5088).Text, obj16);
      obj4.children = items2;
      const items4 = [closure_9(closure_6, obj4), ,];
      const obj17 = { style: tmp.track, children: null };
      const obj18 = { style: null };
      const items5 = [
        tmp.bar,
        running,
        { left: `${(node.start / extent) * 100}%`, width: `${((node.end - node.start) / extent) * 100}%` },
      ];
      obj18.style = items5;
      obj17.children = tmp13(closure_6, obj18);
      items4[1] = tmp13(closure_6, obj17);
      let tmp13Result6 = null;
      if (selected) {
        const obj20 = { style: null, children: null };
        const items6 = [tmp.detail];
        const obj21 = { paddingLeft: node.depth * selected(587).space.PX_12 };
        items6[1] = obj21;
        obj20.style = items6;
        const tmp2Result2 = tmp2(17279);
        obj20.children = tmp2(17279)
          .perfNodeSections(node)
          .map((item) => {
            ({ title, rows } = item);
            let obj = { style: detail.detail, children: null };
            let tmp3 = null;
            if (null != title) {
              const obj2 = { variant: "text-xs/semibold", color: "text-strong", children: title };
              tmp3 = closure_2_8(Text_Text.Text, obj2);
            }
            let items = [
              tmp3,
              rows.map((children) => {
                const label = children.label;
                if (children.block) {
                  let detailLine = detail.detailBlock;
                  let tmp4 = detail;
                } else {
                  detailLine = detail.detailLine;
                  tmp4 = detail;
                }
                const obj = { style: detailLine, children: null };
                const items = [
                  closure_2_8(node(5088).Text, { variant: "text-xs/semibold", color: "text-muted", children: label }),
                  closure_2_8(node(5088).Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    style: tmp4.operation,
                    selectable: true,
                    children: children.value,
                  }),
                ];
                obj.children = items;
                return closure_2_9(closure_2_6, obj, label);
              }),
            ];
            obj.children = items;
            if (title == null) {
              title = "timing";
            }
            return options(timestampProducer, obj, title);
          });
        tmp13Result6 = tmp13(closure_6, obj20);
        const perfNodeSectionsResult = tmp2(17279).perfNodeSections(node);
      }
      items4[2] = tmp13Result6;
      obj2.children = items4;
      return closure_9(closure_4, obj2);
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
                              cResult[40] = tmp4.row;
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
                        cResult[34] = tmp39;
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
              cResult[23] = tmp25;
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
      const fn = function v() {
        return onReveal(row.parentKey);
      };
      cResult[2] = onReveal;
      cResult[3] = row.parentKey;
      cResult[4] = fn;
      tmp8 = fn;
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
  ? function TraceStats(trace) {
      const cResult = c.c(4);
      trace = trace.trace;
      if (cResult[0] !== trace) {
        const perfTraceStatsResult = ConjurePerfTraceStats.perfTraceStats(trace);
        cResult[0] = trace;
        cResult[1] = perfTraceStatsResult;
        let tmp4 = perfTraceStatsResult;
        const tmpResult = ConjurePerfTraceStats;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj2 = { stats: tmp4 };
        const tmp9 = closure_1_8(ConjurePerfTraceStatsHeaderDefault, obj2);
        cResult[2] = tmp4;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : function TraceStats(trace) {
      trace = trace.trace;
      const items = [trace];
      const stats = noop.useMemo(() => ConjurePerfTraceStats.perfTraceStats(trace), items);
      return closure_8(ConjurePerfTraceStatsHeaderDefault, { stats });
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Waterfall(trace) {
      const cResult = toggle(576).c(64);
      trace = trace.trace;
      const tmp4 = closure_11();
      toggle = selectedKey(17282)(trace);
      if (cResult[0] !== trace) {
        const perfTraceExtentResult = tmp(13224).perfTraceExtent(trace);
        cResult[0] = trace;
        cResult[1] = perfTraceExtentResult;
        selectedKey = perfTraceExtentResult;
        const tmpResult = tmp(13224);
      } else {
        selectedKey = cResult[1];
      }
      const sum = selectedKey(587).space.PX_16 + selectedKey(1631)().bottom;
      if (cResult[2] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[2] = sum;
        cResult[3] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4.content) {
        if (cResult[5] === tmp8) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] !== trace) {
          const perfTraceDurationResult = tmp(17279).perfTraceDuration(trace);
          cResult[7] = trace;
          cResult[8] = perfTraceDurationResult;
          let tmp10 = perfTraceDurationResult;
          const tmpResult4 = tmp(17279);
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp10) {
          let obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp10 };
          const tmp14 = closure_8(tmp(5088).Text, obj3);
          cResult[9] = tmp10;
          cResult[10] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] !== trace) {
          const perfTraceSummaryResult = tmp(17279).perfTraceSummary(trace);
          cResult[11] = trace;
          cResult[12] = perfTraceSummaryResult;
          let tmp15 = perfTraceSummaryResult;
          const tmpResult5 = tmp(17279);
        } else {
          tmp15 = cResult[12];
        }
        if (cResult[13] !== tmp15) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp15 };
          const tmp19 = closure_8(tmp(5088).Text, obj4);
          cResult[13] = tmp15;
          cResult[14] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] !== trace.started_by) {
          let tmp21 = null;
          if (null != trace.started_by) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const _HermesInternal = HermesInternal;
            obj5.children = "Started by " + trace.started_by.trace_name;
            tmp21 = closure_8(tmp(5088).Text, obj5);
          }
          cResult[15] = trace.started_by;
          cResult[16] = tmp21;
          let tmp20 = tmp21;
        } else {
          tmp20 = cResult[16];
        }
        if (cResult[17] !== trace.dropped) {
          let tmp25 = null;
          if (0 !== trace.dropped) {
            const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
            const _HermesInternal2 = HermesInternal;
            obj6.children = "" + tmp(17279).formatSpanCount(trace.dropped) + " not recorded";
            tmp25 = closure_8(tmp(5088).Text, obj6);
            const tmpResult6 = tmp(17279);
          }
          cResult[17] = trace.dropped;
          cResult[18] = tmp25;
          let tmp24 = tmp25;
        } else {
          tmp24 = cResult[18];
        }
        if (cResult[19] === tmp4.section) {
          if (cResult[20] === tmp20) {
            if (cResult[21] === tmp24) {
              if (cResult[22] === tmp12) {
                if (cResult[23] === tmp17) {
                  let tmp28 = cResult[24];
                }
                if (cResult[25] !== trace) {
                  const obj7 = { trace };
                  const tmp35 = closure_8(closure_14, obj7);
                  cResult[25] = trace;
                  cResult[26] = tmp35;
                  let tmp32 = tmp35;
                } else {
                  tmp32 = cResult[26];
                }
                if (cResult[27] !== toggle.reset) {
                  const obj8 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: toggle.reset };
                  const tmp38 = closure_8(tmp(5379).Button, obj8);
                  cResult[27] = toggle.reset;
                  cResult[28] = tmp38;
                  let tmp36 = tmp38;
                } else {
                  tmp36 = cResult[28];
                }
                if (cResult[29] !== toggle.expandAll) {
                  const obj9 = { size: "sm", variant: "secondary", text: "Expand all", onPress: toggle.expandAll };
                  const tmp41 = closure_8(tmp(5379).Button, obj9);
                  cResult[29] = toggle.expandAll;
                  cResult[30] = tmp41;
                  let tmp39 = tmp41;
                } else {
                  tmp39 = cResult[30];
                }
                if (cResult[31] !== toggle.collapseAll) {
                  const obj10 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: toggle.collapseAll };
                  const tmp44 = closure_8(tmp(5379).Button, obj10);
                  cResult[31] = toggle.collapseAll;
                  cResult[32] = tmp44;
                  let tmp42 = tmp44;
                } else {
                  tmp42 = cResult[32];
                }
                if (cResult[33] === tmp4.toolbar) {
                  if (cResult[34] === tmp36) {
                    if (cResult[35] === tmp39) {
                      if (cResult[36] === tmp42) {
                        let tmp45 = cResult[37];
                      }
                      const _Symbol = Symbol;
                      if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp53 = closure_8(tmp(5088).Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: "Long-press a span to expand everything under it.",
                        });
                        cResult[38] = tmp53;
                        let tmp51 = tmp53;
                      } else {
                        tmp51 = cResult[38];
                      }
                      if (cResult[39] === selectedKey) {
                        if (cResult[40] === toggle.collapsed) {
                          if (cResult[41] === toggle.expandSubtree) {
                            if (cResult[42] === toggle.reveal) {
                              if (cResult[43] === toggle.rows) {
                                if (cResult[44] === toggle.select) {
                                  if (cResult[45] === toggle.selectedKey) {
                                    if (cResult[46] === toggle.toggle) {
                                      if (cResult[56] !== cResult[47]) {
                                        const obj11 = { children: tmp54 };
                                        cResult[56] = tmp54;
                                        class K {
                                          constructor(arg0) {
                                            if ("node" === trace.kind) {
                                              tmp6 = jsx;
                                              tmp7 = WaterfallRow;
                                              obj1 = {
                                                node: null,
                                                extent: null,
                                                collapsed: null,
                                                selected: null,
                                                onSelect: null,
                                                onToggle: null,
                                                onExpandSubtree: null,
                                              };
                                              obj1.node = trace.node;
                                              tmp8 = closure_1;
                                              obj1.extent = closure_1;
                                              tmp9 = closure_0;
                                              collapsed = closure_0.collapsed;
                                              obj1.collapsed = collapsed.has(trace.key);
                                              obj1.selected = trace.key === closure_0.selectedKey;
                                              ({
                                                select: obj2.onSelect,
                                                toggle: obj2.onToggle,
                                                expandSubtree: obj2.onExpandSubtree,
                                              } = closure_0);
                                              tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                            } else {
                                              tmp = jsx;
                                              tmp2 = SmallerRow;
                                              obj = { row: null, extent: null, onReveal: null };
                                              obj.row = trace;
                                              tmp3 = closure_1;
                                              obj.extent = closure_1;
                                              tmp4 = closure_0;
                                              obj.onReveal = closure_0.reveal;
                                              tmp5 = jsx(SmallerRow, obj, trace.key);
                                            }
                                            return tmp5;
                                          }
                                        }
                                        let tmp58 = closure_8(closure_6, obj11);
                                        const tmp61 = closure_8(closure_6, obj11);
                                      } else {
                                        tmp58 = cResult[57];
                                      }
                                      if (cResult[58] === tmp28) {
                                        if (cResult[59] === tmp32) {
                                          if (cResult[60] === tmp45) {
                                            if (cResult[61] === tmp58) {
                                              if (cResult[62] === tmp9) {
                                                let tmp62 = cResult[63];
                                              }
                                              return tmp62;
                                            }
                                          }
                                        }
                                      }
                                      const obj12 = { contentContainerStyle: tmp9, children: null };
                                      const items = [, , , ,];
                                      class K {
                                        constructor(arg0) {
                                          if ("node" === trace.kind) {
                                            tmp6 = jsx;
                                            tmp7 = WaterfallRow;
                                            obj1 = {
                                              node: null,
                                              extent: null,
                                              collapsed: null,
                                              selected: null,
                                              onSelect: null,
                                              onToggle: null,
                                              onExpandSubtree: null,
                                            };
                                            obj1.node = trace.node;
                                            tmp8 = closure_1;
                                            obj1.extent = closure_1;
                                            tmp9 = closure_0;
                                            collapsed = closure_0.collapsed;
                                            obj1.collapsed = collapsed.has(trace.key);
                                            obj1.selected = trace.key === closure_0.selectedKey;
                                            ({
                                              select: obj2.onSelect,
                                              toggle: obj2.onToggle,
                                              expandSubtree: obj2.onExpandSubtree,
                                            } = closure_0);
                                            tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                          } else {
                                            tmp = jsx;
                                            tmp2 = SmallerRow;
                                            obj = { row: null, extent: null, onReveal: null };
                                            obj.row = trace;
                                            tmp3 = closure_1;
                                            obj.extent = closure_1;
                                            tmp4 = closure_0;
                                            obj.onReveal = closure_0.reveal;
                                            tmp5 = jsx(SmallerRow, obj, trace.key);
                                          }
                                          return tmp5;
                                        }
                                      }
                                      items[1] = tmp32;
                                      items[2] = tmp45;
                                      items[3] = tmp51;
                                      items[4] = tmp58;
                                      obj12.children = items;
                                      const tmp65 = closure_9(closure_5, obj12);
                                      cResult[58] = tmp28;
                                      cResult[59] = tmp32;
                                      cResult[60] = tmp45;
                                      cResult[61] = tmp58;
                                      cResult[62] = tmp9;
                                      cResult[63] = tmp65;
                                      tmp62 = tmp65;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      if (cResult[48] === selectedKey) {
                        if (cResult[49] === toggle.collapsed) {
                          if (cResult[50] === toggle.expandSubtree) {
                            if (cResult[51] === toggle.reveal) {
                              if (cResult[52] === toggle.select) {
                                if (cResult[53] === toggle.selectedKey) {
                                  if (cResult[54] === toggle.toggle) {
                                    let tmp55 = cResult[55];
                                  }
                                  const rows = toggle.rows;
                                  const mapped = rows.map(tmp55);
                                  cResult[39] = selectedKey;
                                  cResult[40] = toggle.collapsed;
                                  class K {
                                    constructor(arg0) {
                                      if ("node" === trace.kind) {
                                        tmp6 = jsx;
                                        tmp7 = WaterfallRow;
                                        obj1 = {
                                          node: null,
                                          extent: null,
                                          collapsed: null,
                                          selected: null,
                                          onSelect: null,
                                          onToggle: null,
                                          onExpandSubtree: null,
                                        };
                                        obj1.node = trace.node;
                                        tmp8 = closure_1;
                                        obj1.extent = closure_1;
                                        tmp9 = closure_0;
                                        collapsed = closure_0.collapsed;
                                        obj1.collapsed = collapsed.has(trace.key);
                                        obj1.selected = trace.key === closure_0.selectedKey;
                                        ({
                                          select: obj2.onSelect,
                                          toggle: obj2.onToggle,
                                          expandSubtree: obj2.onExpandSubtree,
                                        } = closure_0);
                                        tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                      } else {
                                        tmp = jsx;
                                        tmp2 = SmallerRow;
                                        obj = { row: null, extent: null, onReveal: null };
                                        obj.row = trace;
                                        tmp3 = closure_1;
                                        obj.extent = closure_1;
                                        tmp4 = closure_0;
                                        obj.onReveal = closure_0.reveal;
                                        tmp5 = jsx(SmallerRow, obj, trace.key);
                                      }
                                      return tmp5;
                                    }
                                  }
                                  cResult[42] = toggle.reveal;
                                  cResult[43] = toggle.rows;
                                  ({ select: tmp3[44], selectedKey } = toggle);
                                  cResult[45] = selectedKey;
                                  toggle = toggle.toggle;
                                  cResult[46] = toggle;
                                  cResult[47] = mapped;
                                }
                              }
                            }
                          }
                        }
                      }
                      class K {
                        constructor(arg0) {
                          if ("node" === trace.kind) {
                            tmp6 = jsx;
                            tmp7 = WaterfallRow;
                            obj1 = {
                              node: null,
                              extent: null,
                              collapsed: null,
                              selected: null,
                              onSelect: null,
                              onToggle: null,
                              onExpandSubtree: null,
                            };
                            obj1.node = trace.node;
                            tmp8 = closure_1;
                            obj1.extent = closure_1;
                            tmp9 = closure_0;
                            collapsed = closure_0.collapsed;
                            obj1.collapsed = collapsed.has(trace.key);
                            obj1.selected = trace.key === closure_0.selectedKey;
                            ({
                              select: obj2.onSelect,
                              toggle: obj2.onToggle,
                              expandSubtree: obj2.onExpandSubtree,
                            } = closure_0);
                            tmp5 = jsx(WaterfallRow, obj1, trace.key);
                          } else {
                            tmp = jsx;
                            tmp2 = SmallerRow;
                            obj = { row: null, extent: null, onReveal: null };
                            obj.row = trace;
                            tmp3 = closure_1;
                            obj.extent = closure_1;
                            tmp4 = closure_0;
                            obj.onReveal = closure_0.reveal;
                            tmp5 = jsx(SmallerRow, obj, trace.key);
                          }
                          return tmp5;
                        }
                      }
                      cResult[48] = selectedKey;
                      cResult[49] = toggle.collapsed;
                      cResult[50] = toggle.expandSubtree;
                      cResult[51] = toggle.reveal;
                      cResult[52] = toggle.select;
                      cResult[53] = toggle.selectedKey;
                      cResult[54] = toggle.toggle;
                      cResult[55] = K;
                      tmp55 = K;
                    }
                  }
                }
                tmp48[0] = tmp4.toolbar;
                const items1 = [tmp36, tmp39, tmp42];
                tmp48[1] = items1;
                const tmp49 = closure_9(closure_6, tmp48);
                cResult[33] = tmp4.toolbar;
                cResult[34] = tmp36;
                cResult[35] = tmp39;
                cResult[36] = tmp42;
                cResult[37] = tmp49;
                tmp45 = tmp49;
              }
            }
          }
        }
        const obj13 = { style: tmp4.section, children: null };
        const items2 = [tmp12, tmp17, tmp20, tmp24];
        obj13.children = items2;
        const tmp31 = closure_9(closure_6, obj13);
        cResult[19] = tmp4.section;
        cResult[20] = tmp20;
        cResult[21] = tmp24;
        cResult[22] = tmp12;
        cResult[23] = tmp17;
        cResult[24] = tmp31;
        tmp28 = tmp31;
      }
      const items3 = [tmp4.content, tmp8];
      cResult[4] = tmp4.content;
      cResult[5] = tmp8;
      cResult[6] = items3;
      tmp9 = items3;
      let obj = toggle(576);
    }
  : function Waterfall(trace) {
      trace = trace.trace;
      const tmp = closure_11();
      const tmp3 = useConjurePerfTraceTreeDefault(trace);
      _require = tmp3;
      importDefault = require("ConjurePerfTraceLayout").perfTraceExtent(trace);
      const obj2 = { contentContainerStyle: null, children: null };
      const items = [tmp.content];
      let obj = require("ConjurePerfTraceLayout");
      items[1] = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
      obj2.contentContainerStyle = items;
      const obj4 = { style: tmp.section, children: null };
      const obj5 = { variant: "text-md/semibold", color: "text-strong", children: null };
      let obj3 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom };
      obj5.children = require("ConjurePerfTraceFormat").perfTraceDuration(trace);
      const items1 = [closure_8(require("Text/Text").Text, obj5), , ,];
      const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const obj6 = require("ConjurePerfTraceFormat");
      obj7.children = require("ConjurePerfTraceFormat").perfTraceSummary(trace);
      items1[1] = closure_8(require("Text/Text").Text, obj7);
      let tmp8Result = null;
      if (null != trace.started_by) {
        const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const _HermesInternal = HermesInternal;
        obj9.children = "Started by " + trace.started_by.trace_name;
        tmp8Result = closure_8(tmp4(5088).Text, obj9);
      }
      items1[2] = tmp8Result;
      let tmp8Result2 = null;
      if (0 !== trace.dropped) {
        const obj10 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
        const _HermesInternal2 = HermesInternal;
        obj10.children = "" + tmp4(17279).formatSpanCount(trace.dropped) + " not recorded";
        tmp8Result2 = closure_8(tmp4(5088).Text, obj10);
        const tmp4Result = tmp4(17279);
      }
      items1[3] = tmp8Result2;
      obj4.children = items1;
      const items2 = [closure_9(closure_6, obj4), closure_8(closure_14, { trace }), , ,];
      const obj11 = { style: tmp.toolbar, children: null };
      const items3 = [
        closure_8(require("components/Button/Button").Button, {
          size: "sm",
          variant: "secondary",
          text: "Time sinks",
          onPress: tmp3.reset,
        }),
        closure_8(require("components/Button/Button").Button, {
          size: "sm",
          variant: "secondary",
          text: "Expand all",
          onPress: tmp3.expandAll,
        }),
        closure_8(require("components/Button/Button").Button, {
          size: "sm",
          variant: "secondary",
          text: "Collapse all",
          onPress: tmp3.collapseAll,
        }),
      ];
      obj11.children = items3;
      items2[2] = closure_9(closure_6, obj11);
      items2[3] = closure_8(require("Text/Text").Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: "Long-press a span to expand everything under it.",
      });
      const obj15 = { children: null };
      const rows = tmp3.rows;
      obj15.children = rows.map((kind) => {
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
          collapsed = closure_0.collapsed;
          obj3.collapsed = collapsed.has(kind.key);
          obj3.selected = kind.key === closure_0.selectedKey;
          ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
          let tmp5 = closure_2_8(closure_12, obj3, kind.key);
        } else {
          const obj = { row: kind, extent, onReveal: closure_0.reveal };
          tmp5 = closure_2_8(closure_13, obj, kind.key);
        }
        return tmp5;
      });
      items2[4] = closure_8(closure_6, obj15);
      obj2.children = items2;
      return closure_9(closure_5, obj2);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
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
            Text = Text(5088).Text;
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
            const tmp12 = closure_8(closure_15, obj2);
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
        let tmp6 = closure_8(projectId(5088).Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "This trace is no longer available.",
        });
      } else {
        const obj2 = { trace: stateFromStores };
        tmp6 = closure_8(closure_15, obj2);
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
let obj16 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
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
          const headerCloseButton = tmp(6200).getHeaderCloseButton(() => traceId(dependencyMap[21]).pop());
          cResult[5] = headerCloseButton;
          let tmp9 = headerCloseButton;
          const tmpResult2 = tmp(6200);
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
              const tmp17 = closure_8(tmp(10602).Modal, obj2);
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
          return closure_2_8(closure_16, { projectId, traceId });
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
      stateFromStores = projectId(stateFromStores[19]).useStateFromStores(
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
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => traceId(stateFromStores[21]).pop()),
          render() {
            return closure_2_8(closure_2_16, { projectId, traceId });
          },
        };
        obj[perf_trace] = obj2;
        return obj;
      }, items2);
      return closure_8(projectId(stateFromStores[22]).Modal, { initialRouteName: perf_trace, screens: memo });
    };
