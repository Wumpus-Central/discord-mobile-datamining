// === Module 12173: ConjurePlanSurfaces ===

// Module 12173 (ConjurePlanSurfaces)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5147 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 12172 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(7166).ConjureSupportedSurface.APP_CHANNEL] = fn(8451).AppsIcon;
obj[fn(7166).ConjureSupportedSurface.VOICE_CHANNEL] = fn(8446).VoiceNormalIcon;
obj[fn(7166).ConjureSupportedSurface.ACTIVITY] = fn(12174).ActivitiesIcon;
obj[fn(7166).ConjureSupportedSurface.OVERLAY] = fn(9433).GameControllerIcon;
obj[fn(7166).ConjureSupportedSurface.PROFILE_WIDGET] = fn(10519).UserCircleIcon;
obj[fn(7166).ConjureSupportedSurface.AUTOMOD] = fn(10642).ShieldIcon;
obj[fn(7166).ConjureSupportedSurface.BOT] = fn(11548).RobotIcon;
obj[fn(7166).ConjureSupportedSurface.APPLICATION_COMMANDS] = fn(10853).SlashBoxIcon;
const styles = { width: 72, height: 48 };
const createStyles = fn(5151);
let obj3 = { single: { gap: nativeDefault.space.PX_12 }, singleHeader: null, text: null, thumb: null, thumbSelected: null, thumbScale: null, nav: null, rows: null, row: null, rowSelected: null, titleLine: null, titleText: null, iconTile: null, chips: null, chip: null };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj3.singleHeader = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
obj3.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj3.thumb = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj7 = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj3.thumbSelected = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3.thumbScale = { position: "absolute", top: 0, left: 0, width: 320, transformOrigin: "left top" };
let obj8 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3.nav = { gap: nativeDefault.space.PX_12 };
let obj9 = { gap: nativeDefault.space.PX_12 };
obj3.rows = { gap: nativeDefault.space.PX_4 };
const obj10 = { gap: nativeDefault.space.PX_4 };
obj3.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
const obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj3.rowSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj3.titleLine = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3.titleText = { flexShrink: 1 };
let size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj3.iconTile = size;
const obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
const obj14 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj3.chip = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_9 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SurfaceThumb(arg0) {
  const cResult = c.c(12);
  ({ preview, selected } = arg0);
  const tmp2 = closure_9();
  if (selected) {
    selected = tmp2.thumbSelected;
  }
  if (cResult[0] === tmp2.thumb) {
    if (cResult[1] === selected) {
      let tmp3 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { transform: null };
      const obj3 = { scale: styles.width / 320 };
      const items = [obj3];
      obj2.transform = items;
      cResult[3] = obj2;
      let tmp5 = obj2;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] !== tmp2.thumbScale) {
      const items1 = [tmp2.thumbScale, tmp5];
      cResult[4] = tmp2.thumbScale;
      cResult[5] = items1;
      let tmp7 = items1;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] === preview) {
      if (cResult[7] === tmp7) {
        let tmp8 = cResult[8];
      }
      if (cResult[9] === tmp3) {
        if (cResult[10] === tmp8) {
          let tmp12 = cResult[11];
        }
        return tmp12;
      }
      const obj4 = { style: tmp3, pointerEvents: "none", children: tmp8 };
      const tmp15 = hasOwnProperty(React4, obj4);
      cResult[9] = tmp3;
      cResult[10] = tmp8;
      cResult[11] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { style: tmp7, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: preview };
    const tmp11 = hasOwnProperty(React4, obj5);
    cResult[6] = preview;
    cResult[7] = tmp7;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const items2 = [tmp2.thumb, styles, selected];
  cResult[0] = tmp2.thumb;
  cResult[1] = selected;
  cResult[2] = items2;
  tmp3 = items2;
}) : (function SurfaceThumb(children) {
  let thumbSelected = children.selected;
  const tmp = closure_9();
  const items = [tmp.thumb, styles, ];
  if (thumbSelected) {
    thumbSelected = tmp.thumbSelected;
  }
  obj = { style: items, pointerEvents: "none", children: null };
  items[2] = thumbSelected;
  const obj2 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: children.preview };
  const items1 = [tmp.thumbScale, ];
  const obj3 = { transform: null };
  const items2 = [{ scale: styles.width / 320 }];
  obj3.transform = items2;
  items1[1] = obj3;
  obj2.style = items1;
  obj.children = hasOwnProperty(React4, obj2);
  return hasOwnProperty(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconTile(arg0) {
  obj = c;
  const cResult = obj.c(5);
  const tmp3 = closure_9();
  if (cResult[0] !== obj[arg0.row.surface]) {
    const obj2 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE };
    const tmp8 = hasOwnProperty(tmp4, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.iconTile) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = hasOwnProperty(React4, { style: tmp3.iconTile, children: tmp5 });
  cResult[2] = tmp3.iconTile;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj3 = { style: tmp3.iconTile, children: tmp5 };
}) : (function IconTile(arg0) {
  obj = { style: closure_9().iconTile, children: hasOwnProperty(obj[arg0.row.surface], { size: "sm", color: nativeDefault.colors.ICON_SUBTLE }) };
  return hasOwnProperty(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconThumb(selected) {
  obj = c;
  const cResult = obj.c(8);
  let thumbSelected = selected.selected;
  const tmp3 = closure_9();
  if (thumbSelected) {
    thumbSelected = tmp3.thumbSelected;
  }
  if (cResult[0] === tmp3.thumb) {
    if (cResult[1] === thumbSelected) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE };
      const tmp9 = hasOwnProperty(tmp4, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
    const obj3 = { style: tmp5, children: tmp6 };
    const tmp13 = hasOwnProperty(React4, obj3);
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp3.thumb, closure_8, thumbSelected];
  cResult[0] = tmp3.thumb;
  cResult[1] = thumbSelected;
  cResult[2] = items;
  tmp5 = items;
}) : (function IconThumb(selected) {
  let thumbSelected = selected.selected;
  const tmp = closure_9();
  const items = [tmp.thumb, closure_8, ];
  if (thumbSelected) {
    thumbSelected = tmp.thumbSelected;
  }
  obj = { style: items, children: hasOwnProperty(obj[selected.row.surface], { size: "sm", color: nativeDefault.colors.ICON_SUBTLE }) };
  items[2] = thumbSelected;
  return hasOwnProperty(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelChips(names) {
  const cResult = require("c").c(8);
  names = names.names;
  const tmp2 = closure_9();
  _require = tmp2;
  let num = 0;
  if (0 === names.length) {
    return null;
  } else {
    if (cResult[0] === names) {
      if (cResult[1] === tmp2.chip) {
        if (cResult[5] === tmp2.chips) {
          if (cResult[6] === tmp3) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
        const obj2 = { style: tmp12, children: cResult[2] };
        const tmp10 = closure_5(closure_4, obj2);
        cResult[5] = tmp2.chips;
        cResult[6] = cResult[2];
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
    }
    if (cResult[3] !== tmp2.chip) {
      const fn = function h(id) {
        obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "#" + id }) };
        return hasOwnProperty(React4, obj, id);
      };
      cResult[3] = tmp2.chip;
      cResult[4] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = names.map(tmp4);
    cResult[num] = names;
    names = tmp2.chip;
    cResult[1] = names;
    num = 2;
    cResult[2] = mapped;
  }
  obj = require("c");
}) : (function ChannelChips(names) {
  names = names.names;
  const tmp = closure_9();
  const chip = tmp;
  let tmp2 = null;
  if (0 !== names.length) {
    obj = {
      style: tmp.chips,
      children: names.map((item) => {
          obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: "#" + item }) };
          return hasOwnProperty(React4, obj, item);
        })
    };
    tmp2 = closure_5(closure_4, obj);
  }
  return tmp2;
});
fn(558);
const obj15 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanSingleSurface(arg0) {
  const cResult = c.c(25);
  ({ row, previews, commandNames } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === previews) {
    if (cResult[1] === row) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== row) {
      const obj2 = { row };
      const tmp12 = hasOwnProperty(closure_11, obj2);
      cResult[3] = row;
      cResult[4] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== row.title) {
      const obj3 = { variant: "text-md/semibold", color: "text-strong", children: row.title };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[5] = row.title;
      cResult[6] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === commandNames) {
      if (cResult[8] === row.description) {
        let tmp16 = cResult[9];
      }
      if (cResult[10] !== row.channelNames) {
        const obj4 = { names: row.channelNames };
        const tmp22 = hasOwnProperty(closure_13, obj4);
        cResult[10] = row.channelNames;
        cResult[11] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp4.text) {
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp16) {
            if (cResult[15] === tmp19) {
              let tmp23 = cResult[16];
            }
            if (cResult[17] === tmp4.singleHeader) {
              if (cResult[18] === tmp9) {
                if (cResult[19] === tmp23) {
                  let tmp27 = cResult[20];
                }
                if (cResult[21] === tmp5) {
                  if (cResult[22] === tmp4.single) {
                    if (cResult[23] === tmp27) {
                      let tmp31 = cResult[24];
                    }
                    return tmp31;
                  }
                }
                const obj5 = { style: tmp4.single, children: null };
                const items = [tmp27, tmp5];
                obj5.children = items;
                const tmp34 = timestampProducer(React4, obj5);
                cResult[21] = tmp5;
                cResult[22] = tmp4.single;
                cResult[23] = tmp27;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
            }
            const obj6 = { style: tmp4.singleHeader, children: null };
            const items1 = [tmp9, tmp23];
            obj6.children = items1;
            const tmp30 = timestampProducer(React4, obj6);
            cResult[17] = tmp4.singleHeader;
            cResult[18] = tmp9;
            cResult[19] = tmp23;
            cResult[20] = tmp30;
            tmp27 = tmp30;
          }
        }
      }
      const obj7 = { style: tmp4.text, children: null };
      const items2 = [tmp13, tmp16, tmp19];
      obj7.children = items2;
      const tmp26 = timestampProducer(React4, obj7);
      cResult[12] = tmp4.text;
      cResult[13] = tmp13;
      cResult[14] = tmp16;
      cResult[15] = tmp19;
      cResult[16] = tmp26;
      tmp23 = tmp26;
    }
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const obj9 = { text: row.description, commandNames, size: "text-sm" };
    obj8.children = hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, obj9);
    const tmp18 = hasOwnProperty(Text_Text.Text, obj8);
    cResult[7] = commandNames;
    cResult[8] = row.description;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
  let tmp6 = null;
  if (null != row.preview) {
    let content;
    if (previews[row.preview] != null) {
      content = tmp7.content;
    }
    if (content == null) {
      content = null;
    }
    tmp6 = content;
  }
  cResult[0] = previews;
  cResult[1] = row;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjurePlanSingleSurface(row) {
  row = row.row;
  ({ previews, commandNames } = row);
  const tmp = closure_9();
  let tmp2 = null;
  if (null != row.preview) {
    let content;
    if (previews[row.preview] != null) {
      content = tmp3.content;
    }
    if (content == null) {
      content = null;
    }
    tmp2 = content;
  }
  obj = { style: tmp.single, children: null };
  const obj2 = { style: tmp.singleHeader, children: null };
  const items = [hasOwnProperty(closure_11, { row }), ];
  const obj3 = { style: tmp.text, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", children: row.title }), , ];
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: hasOwnProperty(ConjurePlanCommandText.ConjurePlanCommandText, { text: row.description, commandNames, size: "text-sm" }) };
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  items1[2] = hasOwnProperty(closure_13, { names: row.channelNames });
  obj3.children = items1;
  items[1] = timestampProducer(React4, obj3);
  obj2.children = items;
  const items2 = [timestampProducer(React4, obj2), tmp2];
  obj.children = items2;
  return timestampProducer(React4, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanSurfaces.tsx");

export const ConjurePlanSingleSurface = tmp5;
export const ConjurePlanSurfaceNav = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanSurfaceNav(commandNames) {
  const cResult = previews(576).c(31);
  ({ rows, previews } = commandNames);
  commandNames = commandNames.commandNames;
  const tmp2 = closure_9();
  dependencyMap = tmp2;
  obj = previews(576);
  const conjurePlanSurfaceCycle = previews(12176).useConjurePlanSurfaceCycle(rows.length, commandNames.cycling);
  titleText = conjurePlanSurfaceCycle.selectedIndex;
  const select = conjurePlanSurfaceCycle.select;
  let first = rows[titleText];
  if (first == null) {
    first = rows[0];
  }
  if (cResult[0] === commandNames) {
    if (cResult[1] === previews) {
      if (cResult[2] === rows) {
        if (cResult[3] === select) {
          if (cResult[4] === titleText) {
            if (cResult[5] === tmp2.row) {
              if (cResult[6] === tmp2.rowSelected) {
                if (cResult[7] === tmp2.text) {
                  if (cResult[8] === tmp2.titleLine) {
                    if (cResult[9] === tmp2.titleText) {
                      if (cResult[21] === tmp2.rows) {
                        if (cResult[22] === tmp7) {
                          let tmp11 = cResult[23];
                        }
                        if (cResult[24] === first) {
                          if (cResult[25] === previews) {
                            let tmp15 = cResult[26];
                          }
                          if (cResult[27] === tmp2.nav) {
                            if (cResult[28] === tmp11) {
                              if (cResult[29] === tmp15) {
                                let tmp19 = cResult[30];
                              }
                              return tmp19;
                            }
                          }
                          let obj3 = { style: tmp5, children: null };
                          let items = [tmp11, tmp15];
                          obj3.children = items;
                          const tmp22 = closure_6(select, obj3);
                          cResult[27] = tmp2.nav;
                          cResult[28] = tmp11;
                          cResult[29] = tmp15;
                          cResult[30] = tmp22;
                          tmp19 = tmp22;
                        }
                        let tmp16 = null;
                        if (null != first.preview) {
                          let content;
                          if (previews[first.preview] != null) {
                            content = tmp17.content;
                          }
                          if (content == null) {
                            content = null;
                          }
                          tmp16 = content;
                        }
                        cResult[24] = first;
                        cResult[25] = previews;
                        cResult[26] = tmp16;
                        tmp15 = tmp16;
                      }
                      let obj4 = { style: tmp6, accessibilityRole: "tablist", children: cResult[10] };
                      const tmp14 = closure_5(select, obj4);
                      cResult[21] = tmp2.rows;
                      cResult[22] = cResult[10];
                      cResult[23] = tmp14;
                      tmp11 = tmp14;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[11] === commandNames) {
    if (cResult[12] === previews) {
      if (cResult[13] === select) {
        if (cResult[14] === titleText) {
          if (cResult[15] === tmp2.row) {
            if (cResult[16] === tmp2.rowSelected) {
              if (cResult[17] === tmp2.text) {
                if (cResult[18] === tmp2.titleLine) {
                  if (cResult[19] === tmp2.titleText) {
                    let tmp8 = cResult[20];
                  }
                  const mapped = rows.map(tmp8);
                  cResult[0] = commandNames;
                  cResult[1] = previews;
                  cResult[2] = rows;
                  cResult[3] = select;
                  cResult[4] = titleText;
                  cResult[5] = tmp2.row;
                  cResult[6] = tmp2.rowSelected;
                  cResult[7] = tmp2.text;
                  ({ titleLine: tmp[8], titleText } = tmp2);
                  cResult[9] = titleText;
                  cResult[10] = mapped;
                }
              }
            }
          }
        }
      }
    }
  }
  const fn = function h(accessibilityLabel, arg1) {
    closure_0 = arg1;
    let tmp3 = null;
    if (null != accessibilityLabel.preview) {
      let content;
      if (tmp2[accessibilityLabel.preview] != null) {
        content = tmp4.content;
      }
      if (content == null) {
        content = null;
      }
      tmp3 = content;
    }
    const items = [row.row, ];
    let rowSelected = tmp6;
    if (arg1 === titleText) {
      rowSelected = row.rowSelected;
    }
    obj = {
      style: items,
      accessibilityRole: "tab",
      accessibilityState: { selected: arg1 === titleText },
      accessibilityLabel: accessibilityLabel.title,
      onPress() {
        return select(closure_0);
      },
      children: null
    };
    items[1] = rowSelected;
    if (null != tmp3) {
      const obj2 = { preview: tmp3, selected: tmp6 };
      let tmp13 = closure_1_5(closure_1_10, obj2);
      let tmp12 = closure_1_5;
    } else {
      const obj3 = { row: accessibilityLabel, selected: tmp6 };
      tmp12 = closure_1_5;
      tmp13 = closure_1_5(closure_1_12, obj3);
    }
    const items1 = [tmp13, ];
    const obj4 = { style: row.text, children: null };
    const obj5 = { style: row.titleLine, children: null };
    const items2 = [tmp12(closure_1_7[accessibilityLabel.surface], { size: "xs", color: commandNames(row[13]).colors.ICON_SUBTLE }), ];
    const obj7 = { style: row.titleText, variant: "text-sm/semibold", color: null, lineClamp: 1, children: null };
    let str = "text-default";
    if (arg1 === titleText) {
      str = "text-strong";
    }
    obj7.color = str;
    obj7.children = accessibilityLabel.title;
    items2[1] = tmp12(previews(row[16]).Text, obj7);
    obj5.children = items2;
    const items3 = [closure_1_6(select, obj5), , ];
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: tmp12(previews(row[17]).ConjurePlanCommandText, { text: accessibilityLabel.description, commandNames, size: "text-xs" }) };
    items3[1] = tmp12(previews(row[16]).Text, obj8);
    items3[2] = tmp12(closure_1_13, { names: accessibilityLabel.channelNames });
    obj4.children = items3;
    items1[1] = closure_1_6(select, obj4);
    obj.children = items1;
    return closure_1_6(titleText, obj, accessibilityLabel.surface);
  };
  cResult[11] = commandNames;
  cResult[12] = previews;
  cResult[13] = select;
  cResult[14] = titleText;
  cResult[15] = tmp2.row;
  cResult[16] = tmp2.rowSelected;
  cResult[17] = tmp2.text;
  cResult[18] = tmp2.titleLine;
  cResult[19] = tmp2.titleText;
  cResult[20] = fn;
  tmp8 = fn;
  let obj2 = previews(12176);
}) : (function ConjurePlanSurfaceNav(commandNames) {
  ({ rows, previews } = commandNames);
  commandNames = commandNames.commandNames;
  const tmp = closure_9();
  dependencyMap = tmp;
  const conjurePlanSurfaceCycle = previews(12176).useConjurePlanSurfaceCycle(rows.length, commandNames.cycling);
  const selectedIndex = conjurePlanSurfaceCycle.selectedIndex;
  const select = conjurePlanSurfaceCycle.select;
  let first = rows[selectedIndex];
  if (first == null) {
    first = rows[0];
  }
  let obj2 = { style: tmp.nav, children: null };
  obj = previews(12176);
  let items = [
    closure_5(select, {
      style: tmp.rows,
      accessibilityRole: "tablist",
      children: rows.map((accessibilityLabel, index) => {
        closure_0 = index;
        let tmp3 = null;
        if (null != accessibilityLabel.preview) {
          let content;
          if (tmp2[accessibilityLabel.preview] != null) {
            content = tmp4.content;
          }
          if (content == null) {
            content = null;
          }
          tmp3 = content;
        }
        const items = [row.row, ];
        let rowSelected = tmp6;
        if (index === selectedIndex) {
          rowSelected = row.rowSelected;
        }
        obj = {
          style: items,
          accessibilityRole: "tab",
          accessibilityState: { selected: index === selectedIndex },
          accessibilityLabel: accessibilityLabel.title,
          onPress() {
            return select(closure_0);
          },
          children: null
        };
        items[1] = rowSelected;
        if (null != tmp3) {
          const obj2 = { preview: tmp3, selected: tmp6 };
          let tmp13 = closure_1_5(closure_1_10, obj2);
          let tmp12 = closure_1_5;
        } else {
          const obj3 = { row: accessibilityLabel, selected: tmp6 };
          tmp12 = closure_1_5;
          tmp13 = closure_1_5(closure_1_12, obj3);
        }
        const items1 = [tmp13, ];
        const obj4 = { style: row.text, children: null };
        const obj5 = { style: row.titleLine, children: null };
        const items2 = [tmp12(closure_1_7[accessibilityLabel.surface], { size: "xs", color: commandNames(row[13]).colors.ICON_SUBTLE }), ];
        const obj7 = { style: row.titleText, variant: "text-sm/semibold", color: null, lineClamp: 1, children: null };
        let str = "text-default";
        if (index === selectedIndex) {
          str = "text-strong";
        }
        obj7.color = str;
        obj7.children = accessibilityLabel.title;
        items2[1] = tmp12(previews(row[16]).Text, obj7);
        obj5.children = items2;
        const items3 = [closure_1_6(select, obj5), , ];
        const obj8 = { variant: "text-xs/normal", color: "text-muted", children: tmp12(previews(row[17]).ConjurePlanCommandText, { text: accessibilityLabel.description, commandNames, size: "text-xs" }) };
        items3[1] = tmp12(previews(row[16]).Text, obj8);
        items3[2] = tmp12(closure_1_13, { names: accessibilityLabel.channelNames });
        obj4.children = items3;
        items1[1] = closure_1_6(select, obj4);
        obj.children = items1;
        return closure_1_6(selectedIndex, obj, accessibilityLabel.surface);
      })
    }),

  ];
  let tmp6 = null;
  if (null != first.preview) {
    let content;
    if (previews[first.preview] != null) {
      content = tmp7.content;
    }
    if (content == null) {
      content = null;
    }
    tmp6 = content;
  }
  items[1] = tmp6;
  obj2.children = items;
  return closure_6(select, obj2);
});