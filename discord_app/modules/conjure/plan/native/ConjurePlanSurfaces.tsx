// discord_app/modules/conjure/plan/native/ConjurePlanSurfaces.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(6947).ConjureSupportedSurface.APP_CHANNEL] = fn(8234).AppsIcon;
obj[fn(6947).ConjureSupportedSurface.VOICE_CHANNEL] = fn(8229).VoiceNormalIcon;
obj[fn(6947).ConjureSupportedSurface.ACTIVITY] = fn(11917).ActivitiesIcon;
obj[fn(6947).ConjureSupportedSurface.OVERLAY] = fn(9212).GameControllerIcon;
obj[fn(6947).ConjureSupportedSurface.PROFILE_WIDGET] = fn(10286).UserCircleIcon;
obj[fn(6947).ConjureSupportedSurface.AUTOMOD] = fn(10409).ShieldIcon;
obj[fn(6947).ConjureSupportedSurface.BOT] = fn(11314).RobotIcon;
obj[fn(6947).ConjureSupportedSurface.APPLICATION_COMMANDS] = fn(10620).SlashBoxIcon;
const styles = { width: 72, height: 48 };
const createStyles = fn(5092);
let obj3 = {
  single: { gap: nativeDefault.space.PX_12 },
  singleHeader: null,
  text: null,
  thumb: null,
  thumbSelected: null,
  thumbScale: null,
  nav: null,
  rows: null,
  row: null,
  rowSelected: null,
  titleLine: null,
  titleText: null,
  iconTile: null,
  chips: null,
  chip: null,
};
let obj4 = { gap: nativeDefault.space.PX_12 };
obj3.singleHeader = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
obj3.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj3.thumb = {
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let obj7 = {
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj3.thumbSelected = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3.thumbScale = { position: "absolute", top: 0, left: 0, width: 320, transformOrigin: "left top" };
let obj8 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3.nav = { gap: nativeDefault.space.PX_12 };
const obj9 = { gap: nativeDefault.space.PX_12 };
obj3.rows = { gap: nativeDefault.space.PX_4 };
const obj10 = { gap: nativeDefault.space.PX_4 };
obj3.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
};
const obj11 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
};
obj3.rowSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj3.titleLine = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3.titleText = { flexShrink: 1 };
let size = {
  alignItems: "center",
  justifyContent: "center",
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj3.iconTile = size;
const obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
const obj14 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj3.chip = {
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_9 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SurfaceThumb(arg0) {
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
        const obj5 = {
          style: tmp7,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children: preview,
        };
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
    }
  : function SurfaceThumb(children) {
      let thumbSelected = children.selected;
      const tmp = closure_9();
      const items = [tmp.thumb, styles];
      if (thumbSelected) {
        thumbSelected = tmp.thumbSelected;
      }
      obj = { style: items, pointerEvents: "none", children: null };
      items[2] = thumbSelected;
      const obj2 = {
        style: null,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: children.preview,
      };
      const items1 = [tmp.thumbScale];
      const obj3 = { transform: null };
      const items2 = [{ scale: styles.width / 320 }];
      obj3.transform = items2;
      items1[1] = obj3;
      obj2.style = items1;
      obj.children = hasOwnProperty(React4, obj2);
      return hasOwnProperty(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IconTile(arg0) {
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
    }
  : function IconTile(arg0) {
      obj = {
        style: closure_9().iconTile,
        children: hasOwnProperty(obj[arg0.row.surface], { size: "sm", color: nativeDefault.colors.ICON_SUBTLE }),
      };
      return hasOwnProperty(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelChips(names) {
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
          const fn = function p(id) {
            obj = {
              style: chip.chip,
              children: hasOwnProperty(Text_Text.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: "#" + id,
              }),
            };
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
    }
  : function ChannelChips(names) {
      names = names.names;
      const tmp = closure_9();
      const chip = tmp;
      let tmp2 = null;
      if (0 !== names.length) {
        obj = {
          style: tmp.chips,
          children: names.map((item) => {
            obj = {
              style: chip.chip,
              children: hasOwnProperty(Text_Text.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: "#" + item,
              }),
            };
            return hasOwnProperty(React4, obj, item);
          }),
        };
        tmp2 = closure_5(closure_4, obj);
      }
      return tmp2;
    };
fn(558);
const obj15 = {
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanSingleSurface(arg0) {
      const cResult = c.c(24);
      ({ row, previews } = arg0);
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
        if (cResult[7] !== row.description) {
          const obj4 = { variant: "text-sm/normal", color: "text-muted", children: row.description };
          const tmp18 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[7] = row.description;
          cResult[8] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== row.channelNames) {
          const obj5 = { names: row.channelNames };
          const tmp22 = hasOwnProperty(closure_12, obj5);
          cResult[9] = row.channelNames;
          cResult[10] = tmp22;
          let tmp19 = tmp22;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] === tmp4.text) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === tmp16) {
              if (cResult[14] === tmp19) {
                let tmp23 = cResult[15];
              }
              if (cResult[16] === tmp4.singleHeader) {
                if (cResult[17] === tmp9) {
                  if (cResult[18] === tmp23) {
                    let tmp27 = cResult[19];
                  }
                  if (cResult[20] === tmp5) {
                    if (cResult[21] === tmp4.single) {
                      if (cResult[22] === tmp27) {
                        let tmp31 = cResult[23];
                      }
                      return tmp31;
                    }
                  }
                  const obj6 = { style: tmp4.single, children: null };
                  const items = [tmp27, tmp5];
                  obj6.children = items;
                  const tmp34 = timestampProducer(React4, obj6);
                  cResult[20] = tmp5;
                  cResult[21] = tmp4.single;
                  cResult[22] = tmp27;
                  cResult[23] = tmp34;
                  tmp31 = tmp34;
                }
              }
              const obj7 = { style: tmp4.singleHeader, children: null };
              const items1 = [tmp9, tmp23];
              obj7.children = items1;
              const tmp30 = timestampProducer(React4, obj7);
              cResult[16] = tmp4.singleHeader;
              cResult[17] = tmp9;
              cResult[18] = tmp23;
              cResult[19] = tmp30;
              tmp27 = tmp30;
            }
          }
        }
        const obj8 = { style: tmp4.text, children: null };
        const items2 = [tmp13, tmp16, tmp19];
        obj8.children = items2;
        const tmp26 = timestampProducer(React4, obj8);
        cResult[11] = tmp4.text;
        cResult[12] = tmp13;
        cResult[13] = tmp16;
        cResult[14] = tmp19;
        cResult[15] = tmp26;
        tmp23 = tmp26;
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
    }
  : function ConjurePlanSingleSurface(row) {
      row = row.row;
      const tmp = closure_9();
      let tmp2 = null;
      if (null != row.preview) {
        let content;
        if (row.previews[row.preview] != null) {
          content = tmp3.content;
        }
        if (content == null) {
          content = null;
        }
        tmp2 = content;
      }
      obj = { style: tmp.single, children: null };
      const obj2 = { style: tmp.singleHeader, children: null };
      const items = [hasOwnProperty(closure_11, { row })];
      const obj3 = { style: tmp.text, children: null };
      const items1 = [
        hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", children: row.title }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: row.description }),
        hasOwnProperty(closure_12, { names: row.channelNames }),
      ];
      obj3.children = items1;
      items[1] = timestampProducer(React4, obj3);
      obj2.children = items;
      const items2 = [timestampProducer(React4, obj2), tmp2];
      obj.children = items2;
      return timestampProducer(React4, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanSurfaces.tsx");

export const ConjurePlanSingleSurface = tmp5;
export const ConjurePlanSurfaceNav = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanSurfaceNav(cycling) {
      const cResult = previews(titleText[15]).c(29);
      ({ rows, previews } = cycling);
      const tmp2 = closure_9();
      closure_1 = tmp2;
      obj = previews(titleText[15]);
      const conjurePlanSurfaceCycle = previews(titleText[17]).useConjurePlanSurfaceCycle(rows.length, cycling.cycling);
      titleText = conjurePlanSurfaceCycle.selectedIndex;
      const select = conjurePlanSurfaceCycle.select;
      let first = rows[titleText];
      if (first == null) {
        first = rows[0];
      }
      if (cResult[0] === previews) {
        if (cResult[1] === rows) {
          if (cResult[2] === select) {
            if (cResult[3] === titleText) {
              if (cResult[4] === tmp2.row) {
                if (cResult[5] === tmp2.rowSelected) {
                  if (cResult[6] === tmp2.text) {
                    if (cResult[7] === tmp2.titleLine) {
                      if (cResult[8] === tmp2.titleText) {
                        if (cResult[19] === tmp2.rows) {
                          if (cResult[20] === tmp7) {
                            let tmp11 = cResult[21];
                          }
                          if (cResult[22] === first) {
                            if (cResult[23] === previews) {
                              let tmp15 = cResult[24];
                            }
                            if (cResult[25] === tmp2.nav) {
                              if (cResult[26] === tmp11) {
                                if (cResult[27] === tmp15) {
                                  let tmp19 = cResult[28];
                                }
                                return tmp19;
                              }
                            }
                            let obj3 = { style: tmp5, children: null };
                            let items = [tmp11, tmp15];
                            obj3.children = items;
                            const tmp22 = closure_6(closure_4, obj3);
                            cResult[25] = tmp2.nav;
                            cResult[26] = tmp11;
                            cResult[27] = tmp15;
                            cResult[28] = tmp22;
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
                          cResult[22] = first;
                          cResult[23] = previews;
                          cResult[24] = tmp16;
                          tmp15 = tmp16;
                        }
                        let obj4 = { style: tmp6, accessibilityRole: "tablist", children: cResult[9] };
                        const tmp14 = closure_5(closure_4, obj4);
                        cResult[19] = tmp2.rows;
                        cResult[20] = cResult[9];
                        cResult[21] = tmp14;
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
      if (cResult[10] === previews) {
        if (cResult[11] === select) {
          if (cResult[12] === titleText) {
            if (cResult[13] === tmp2.row) {
              if (cResult[14] === tmp2.rowSelected) {
                if (cResult[15] === tmp2.text) {
                  if (cResult[16] === tmp2.titleLine) {
                    if (cResult[17] === tmp2.titleText) {
                      let tmp8 = cResult[18];
                    }
                    const mapped = rows.map(tmp8);
                    cResult[0] = previews;
                    cResult[1] = rows;
                    cResult[2] = select;
                    cResult[3] = titleText;
                    cResult[4] = tmp2.row;
                    cResult[5] = tmp2.rowSelected;
                    cResult[6] = tmp2.text;
                    ({ titleLine: tmp[7], titleText } = tmp2);
                    cResult[8] = titleText;
                    cResult[9] = mapped;
                  }
                }
              }
            }
          }
        }
      }
      const fn = function p(accessibilityLabel, arg1) {
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
        const items = [closure_1.row];
        let rowSelected = tmp6;
        if (arg1 === titleText) {
          rowSelected = closure_1.rowSelected;
        }
        obj = {
          style: items,
          accessibilityRole: "tab",
          accessibilityState: { selected: arg1 === titleText },
          accessibilityLabel: accessibilityLabel.title,
          onPress() {
            return select(closure_0);
          },
          children: null,
        };
        items[1] = rowSelected;
        if (null != tmp3) {
          const obj2 = { preview: tmp3, selected: tmp6 };
          let tmp13 = closure_1_5(closure_1_10, obj2);
          let tmp12 = closure_1_5;
        } else {
          const obj3 = { row: accessibilityLabel };
          tmp12 = closure_1_5;
          tmp13 = closure_1_5(closure_1_11, obj3);
        }
        const items1 = [tmp13];
        const obj4 = { style: closure_1.text, children: null };
        const obj5 = { style: closure_1.titleLine, children: null };
        const items2 = [
          tmp12(closure_1_7[accessibilityLabel.surface], {
            size: "xs",
            color: closure_1(titleText[13]).colors.ICON_SUBTLE,
          }),
        ];
        const obj7 = {
          style: closure_1.titleText,
          variant: "text-sm/semibold",
          color: null,
          lineClamp: 1,
          children: null,
        };
        let str = "text-default";
        if (arg1 === titleText) {
          str = "text-strong";
        }
        obj7.color = str;
        obj7.children = accessibilityLabel.title;
        items2[1] = tmp12(previews(titleText[16]).Text, obj7);
        obj5.children = items2;
        const items3 = [
          closure_1_6(closure_1_4, obj5),
          tmp12(previews(titleText[16]).Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: accessibilityLabel.description,
          }),
          tmp12(closure_1_12, { names: accessibilityLabel.channelNames }),
        ];
        obj4.children = items3;
        items1[1] = closure_1_6(closure_1_4, obj4);
        obj.children = items1;
        return closure_1_6(select, obj, accessibilityLabel.surface);
      };
      cResult[10] = previews;
      cResult[11] = select;
      cResult[12] = titleText;
      cResult[13] = tmp2.row;
      cResult[14] = tmp2.rowSelected;
      cResult[15] = tmp2.text;
      cResult[16] = tmp2.titleLine;
      cResult[17] = tmp2.titleText;
      cResult[18] = fn;
      tmp8 = fn;
      let obj2 = previews(titleText[17]);
    }
  : function ConjurePlanSurfaceNav(cycling) {
      ({ rows, previews } = cycling);
      let selectedIndex;
      const tmp = closure_9();
      closure_1 = tmp;
      const conjurePlanSurfaceCycle = previews(selectedIndex[17]).useConjurePlanSurfaceCycle(
        rows.length,
        cycling.cycling,
      );
      selectedIndex = conjurePlanSurfaceCycle.selectedIndex;
      const select = conjurePlanSurfaceCycle.select;
      let first = rows[selectedIndex];
      if (first == null) {
        first = rows[0];
      }
      let obj2 = { style: tmp.nav, children: null };
      obj = previews(selectedIndex[17]);
      let items = [
        closure_5(closure_4, {
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
            const items = [closure_1.row];
            let rowSelected = tmp6;
            if (index === selectedIndex) {
              rowSelected = closure_1.rowSelected;
            }
            obj = {
              style: items,
              accessibilityRole: "tab",
              accessibilityState: { selected: index === selectedIndex },
              accessibilityLabel: accessibilityLabel.title,
              onPress() {
                return select(closure_0);
              },
              children: null,
            };
            items[1] = rowSelected;
            if (null != tmp3) {
              const obj2 = { preview: tmp3, selected: tmp6 };
              let tmp13 = closure_1_5(closure_1_10, obj2);
              let tmp12 = closure_1_5;
            } else {
              const obj3 = { row: accessibilityLabel };
              tmp12 = closure_1_5;
              tmp13 = closure_1_5(closure_1_11, obj3);
            }
            const items1 = [tmp13];
            const obj4 = { style: closure_1.text, children: null };
            const obj5 = { style: closure_1.titleLine, children: null };
            const items2 = [
              tmp12(closure_1_7[accessibilityLabel.surface], {
                size: "xs",
                color: closure_1(selectedIndex[13]).colors.ICON_SUBTLE,
              }),
            ];
            const obj7 = {
              style: closure_1.titleText,
              variant: "text-sm/semibold",
              color: null,
              lineClamp: 1,
              children: null,
            };
            let str = "text-default";
            if (index === selectedIndex) {
              str = "text-strong";
            }
            obj7.color = str;
            obj7.children = accessibilityLabel.title;
            items2[1] = tmp12(previews(selectedIndex[16]).Text, obj7);
            obj5.children = items2;
            const items3 = [
              closure_1_6(closure_1_4, obj5),
              tmp12(previews(selectedIndex[16]).Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: accessibilityLabel.description,
              }),
              tmp12(closure_1_12, { names: accessibilityLabel.channelNames }),
            ];
            obj4.children = items3;
            items1[1] = closure_1_6(closure_1_4, obj4);
            obj.children = items1;
            return closure_1_6(select, obj, accessibilityLabel.surface);
          }),
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
      return closure_6(closure_4, obj2);
    };
