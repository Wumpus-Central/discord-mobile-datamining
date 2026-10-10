// === Module 18332: GuildSettingsServerTagColorGrid ===

// Module 18332 (GuildSettingsServerTagColorGrid)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const GuildTagConstants = fn(7887);
({ GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { grid: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, defaultIcon: null };
const rect = { position: "absolute", right: nativeDefault.space.PX_4, bottom: nativeDefault.space.PX_4 };
obj2.defaultIcon = rect;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsServerTagColorGrid(badge) {
  const cResult = badge(secondaryColor[7]).c(41);
  badge = badge.badge;
  const primaryColor = badge.primaryColor;
  secondaryColor = badge.secondaryColor;
  const onSelectColor = badge.onSelectColor;
  ({ onPressEyedropper, cellSize } = badge);
  const tmp4 = closure_9();
  dependencyMap = tmp5;
  let tmp6 = null == primaryColor;
  if (tmp6) {
    let tmp7 = !tmp5;
    if (tmp5) {
      tmp7 = null == secondaryColor;
    }
    tmp6 = tmp7;
  }
  if (cResult[0] === dependencyMap[badge] >= 2) {
    if (cResult[1] === tmp6) {
      if (cResult[2] === primaryColor) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === primaryColor) {
            if (cResult[7] === secondaryColor) {
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
                const intl2 = tmp(tmp2[8]).intl;
                obj2.children = intl2.string(tmp(tmp2[8]).t["Fg/TNW"]);
                const tmp16 = closure_7(tmp(tmp2[9]).Text, obj2);
                cResult[9] = tmp16;
              }
              if (cResult[10] === badge) {
                if (cResult[11] === cellSize) {
                  if (cResult[12] === tmp5) {
                    if (cResult[13] === onSelectColor) {
                      if (cResult[14] === primaryColor) {
                        const _Symbol2 = Symbol;
                        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = tmp(tmp2[8]).intl;
                          const stringResult = intl3.string(tmp(tmp2[8]).t.S6N0gC);
                          cResult[17] = stringResult;
                          let tmp20 = stringResult;
                        } else {
                          tmp20 = cResult[17];
                        }
                        if (cResult[18] !== onSelectColor) {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                          cResult[18] = onSelectColor;
                          cResult[19] = D;
                        } else {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                        }
                        if (cResult[20] !== badge) {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                          let size = { badge, width: null, height: null };
                          ({ SIZE_32: obj5.width, SIZE_32: obj5.height } = closure_6);
                          const tmp25 = closure_7(tmp(tmp2[12]).GuildBadge, size);
                          cResult[20] = badge;
                          cResult[21] = tmp25;
                        } else {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                        }
                        if (cResult[22] !== tmp4.defaultIcon) {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                          const obj3 = { size: "xs", color: primaryColor(tmp2[4]).colors.ICON_DEFAULT, style: tmp4.defaultIcon };
                          const tmp28 = closure_7(tmp(tmp2[13]).RefreshIcon, obj3);
                          cResult[22] = tmp4.defaultIcon;
                          cResult[23] = tmp28;
                        } else {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                        }
                        if (cResult[24] === cellSize) {
                          class D {
                            constructor() {
                              return onSelectColor(null, null);
                            }
                          }
                        }
                        const obj4 = { size: cellSize, selected: tmp6, accessibilityLabel: tmp20, onPress: D, children: null };
                        const items = [tmp23, tmp26];
                        obj4.children = items;
                        const tmp32 = closure_8(primaryColor(tmp2[10]), obj4);
                        cResult[24] = cellSize;
                        cResult[25] = tmp6;
                        cResult[26] = D;
                        cResult[27] = tmp23;
                        cResult[28] = tmp26;
                        cResult[29] = tmp32;
                      }
                    }
                  }
                }
              }
              const mapped = cellSize.map((primary) => {
                badge = primary;
                const obj = { size: cellSize, selected: null, accessibilityLabel: null, onPress: null, children: null };
                let tmp5 = primary.primary === primaryColor;
                if (tmp5) {
                  let tmp7 = !closure_5;
                  if (closure_5) {
                    tmp7 = primary.secondary === secondaryColor;
                  }
                  tmp5 = tmp7;
                }
                obj.selected = tmp5;
                if (closure_5) {
                  let guildTagPalettePresetColorLabel = primaryColor(secondaryColor[11])(primary.primary, primary.secondary);
                } else {
                  guildTagPalettePresetColorLabel = badge(secondaryColor[11]).getGuildTagPalettePresetColorLabel(primary.primary);
                  const obj2 = badge(secondaryColor[11]);
                }
                obj.accessibilityLabel = guildTagPalettePresetColorLabel;
                obj.onPress = function onPress() {
                  let secondary = null;
                  if (closure_5) {
                    secondary = primary.secondary;
                  }
                  return onSelectColor(primary.primary, secondary);
                };
                const size = { badge, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: null };
                let secondary;
                if (closure_5) {
                  secondary = primary.secondary;
                }
                size.secondaryTintColor = secondary;
                obj.children = closure_1_7(badge(secondaryColor[12]).GuildBadge, size);
                return closure_1_7(primaryColor(secondaryColor[10]), obj, "" + primary.primary + primary.secondary);
              });
              cResult[10] = badge;
              cResult[11] = cellSize;
              cResult[12] = tmp5;
              cResult[13] = onSelectColor;
              cResult[14] = primaryColor;
              cResult[15] = secondaryColor;
              cResult[16] = mapped;
            }
          }
        }
        const intl = tmp(tmp2[8]).intl;
        const formatToPlainString = intl.formatToPlainString;
        let t = tmp(tmp2[8]).t;
        if (tmp5) {
          class D {
            constructor() {
              return onSelectColor(null, null);
            }
          }
          if (primaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            const primary2 = cellSize[0].primary;
          }
          t = { primaryColor: primary2, secondaryColor: null };
          let secondary = secondaryColor;
          if (secondaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            secondary = cellSize[0].secondary;
          }
          t.secondaryColor = secondary;
          let formatToPlainStringResult = formatToPlainString(t.hr4D2X, t);
        } else {
          class D {
            constructor() {
              return onSelectColor(null, null);
            }
          }
          if (primaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            const primary = cellSize[0].primary;
          }
          const obj6 = { color: primary };
          formatToPlainStringResult = formatToPlainString(t["7BFCRR"], obj6);
        }
        cResult[5] = tmp5;
        cResult[6] = primaryColor;
        cResult[7] = secondaryColor;
        cResult[8] = formatToPlainStringResult;
      }
    }
  }
  let everyResult = !tmp6;
  if (!tmp6) {
    class D {
      constructor() {
        return onSelectColor(null, null);
      }
    }
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primaryColor;
      if (!tmp) {
        let tmp2 = closure_5;
        if (closure_5) {
          tmp2 = primary.secondary !== secondaryColor;
        }
        tmp = tmp2;
      }
      return tmp;
    });
  }
  cResult[0] = dependencyMap[badge] >= 2;
  cResult[1] = tmp6;
  cResult[2] = primaryColor;
  cResult[3] = secondaryColor;
  cResult[4] = everyResult;
  let obj = badge(secondaryColor[7]);
}) : (function GuildSettingsServerTagColorGrid(badge) {
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let tmp = closure_9();
  dependencyMap = tmp2;
  let tmp3 = null == primary;
  if (tmp3) {
    let tmp4 = !tmp2;
    if (tmp2) {
      tmp4 = null == secondary;
    }
    tmp3 = tmp4;
  }
  let everyResult = !tmp3;
  if (!tmp3) {
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primary;
      if (!tmp) {
        let tmp2 = closure_5;
        if (closure_5) {
          tmp2 = primary.secondary !== secondary;
        }
        tmp = tmp2;
      }
      return tmp;
    });
  }
  const intl = badge(secondary[8]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = badge(secondary[8]).t;
  if (dependencyMap[badge] >= 2) {
    if (primary == null) {
      primary = cellSize[0].primary;
    }
    let obj2 = { primaryColor: primary, secondaryColor: null };
    if (secondary == null) {
      secondary = cellSize[0].secondary;
    }
    obj2.secondaryColor = secondary;
    let formatToPlainStringResult = formatToPlainString(t.hr4D2X, obj2);
    let tmp11 = tmp8;
    let tmp12 = tmp7;
  } else {
    let primary2 = primary;
    if (primary == null) {
      primary2 = cellSize[0].primary;
    }
    let obj = { color: primary2 };
    formatToPlainStringResult = formatToPlainString(t["7BFCRR"], obj);
    tmp11 = tmp8;
    tmp12 = tmp7;
  }
  const obj3 = { spacing: primary(tmp11[4]).space.PX_8, children: null };
  const obj4 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl2 = tmp12(tmp11[8]).intl;
  obj4.children = intl2.string(tmp12(tmp11[8]).t["Fg/TNW"]);
  const items = [closure_7(tmp12(tmp11[9]).Text, obj4), ];
  const obj5 = { accessibilityRole: "radiogroup", style: tmp.grid, children: null };
  const items1 = [
    cellSize.map((primary) => {
      badge = primary;
      const obj = { size: cellSize, selected: null, accessibilityLabel: null, onPress: null, children: null };
      let tmp5 = primary.primary === primary;
      if (tmp5) {
        let tmp7 = !closure_5;
        if (closure_5) {
          tmp7 = primary.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      obj.selected = tmp5;
      if (closure_5) {
        let guildTagPalettePresetColorLabel = primary(tmp3[11])(primary.primary, primary.secondary);
      } else {
        guildTagPalettePresetColorLabel = badge(tmp3[11]).getGuildTagPalettePresetColorLabel(primary.primary);
        const obj2 = badge(tmp3[11]);
      }
      obj.accessibilityLabel = guildTagPalettePresetColorLabel;
      obj.onPress = function onPress() {
        secondary = null;
        if (closure_5) {
          secondary = primary.secondary;
        }
        return View(primary.primary, secondary);
      };
      const size = { badge, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: null };
      secondary = undefined;
      if (closure_5) {
        secondary = primary.secondary;
      }
      size.secondaryTintColor = secondary;
      obj.children = closure_1_7(badge(secondary[12]).GuildBadge, size);
      return closure_1_7(primary(secondary[10]), obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj6 = { size: cellSize, selected: tmp3, accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp12(tmp11[8]).intl;
  obj6.accessibilityLabel = intl3.string(tmp12(tmp11[8]).t.S6N0gC);
  obj6.onPress = function onPress() {
    return View(null, null);
  };
  let size = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  const items2 = [closure_7(tmp12(tmp11[12]).GuildBadge, size), ];
  const tmp15 = primary(tmp11[10]);
  items2[1] = closure_7(tmp12(tmp11[13]).RefreshIcon, { size: "xs", color: primary(tmp11[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon });
  obj6.children = items2;
  items1[1] = closure_8(tmp15, obj6);
  const obj8 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: badge.onPressEyedropper, children: null };
  const obj7 = { size: "xs", color: primary(tmp11[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  const tmp16 = primary(tmp11[10]);
  obj8.children = closure_7(tmp12(tmp11[14]).EyeDropperIcon, { size: "sm", color: primary(tmp11[4]).colors.ICON_DEFAULT });
  items1[2] = closure_7(tmp16, obj8);
  obj5.children = items1;
  items[1] = closure_8(View, obj5);
  obj3.children = items;
  return closure_8(tmp12(tmp11[15]).Stack, obj3);
});