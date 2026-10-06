// === Module 17811: GuildSettingsServerTagColorGrid ===

// Module 17811 (GuildSettingsServerTagColorGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let badge;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let rect;
const View = react_native.View;
({ GUILD_TAG_BADGE_PALETTE_PRESETS: closure_4, GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let obj = { grid: { flexDirection: "row", flexWrap: "wrap", gap: PX_8 }, defaultIcon: rect };
rect = { position: "absolute", right: nativeDefault.space.PX_4, bottom: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let cellSize;
  let intl2;
  let items;
  let onPressEyedropper;
  let secondary;
  let secondaryColor;
  let tmp = badge;
  let tmp2 = secondaryColor;
  let obj = badge(secondaryColor[7]);
  const cResult = obj.c(41);
  badge = badge.badge;
  const primaryColor = badge.primaryColor;
  secondaryColor = badge.secondaryColor;
  const onSelectColor = badge.onSelectColor;
  ({ onPressEyedropper, cellSize } = badge);
  let tmp4 = closure_9();
  let tmp5 = closure_5[badge] >= 2;
  closure_5 = tmp5;
  let tmp6 = null == primaryColor;
  if (tmp6) {
    let tmp7 = !tmp5;
    if (tmp5) {
      tmp7 = null == secondaryColor;
    }
    tmp6 = tmp7;
  }
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp6) {
      if (cResult[2] === primaryColor) {
        let formatToPlainStringResult;
        if (cResult[5] === tmp5) {
          if (cResult[6] === primaryColor) {
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl2.string(tmp(tmp2[8]).t["Fg/TNW"]) };
              const Text = tmp(tmp2[9]).Text;
              intl2 = tmp(tmp2[8]).intl;
              cResult[9] = closure_7(Text, obj2);
              const tmp16 = closure_7(Text, obj2);
            }
            if (cResult[10] === badge) {
              if (cResult[11] === cellSize) {
                if (cResult[12] === tmp5) {
                  if (cResult[13] === onSelectColor) {
                    if (cResult[14] === primaryColor) {
                      let tmp20;
                      const _Symbol2 = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl3 = tmp(tmp2[8]).intl;
                        const stringResult = intl3.string(tmp(tmp2[8]).t.S6N0gC);
                        cResult[17] = stringResult;
                        tmp20 = stringResult;
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
                        size = { badge, width: null, height: null };
                        ({ SIZE_32: obj5.width, SIZE_32: obj5.height } = closure_6);
                        cResult[20] = badge;
                        cResult[21] = closure_7(tmp(tmp2[12]).GuildBadge, size);
                        const tmp25 = closure_7(tmp(tmp2[12]).GuildBadge, size);
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
                        const RefreshIcon = tmp(tmp2[13]).RefreshIcon;
                        cResult[22] = tmp4.defaultIcon;
                        cResult[23] = closure_7(RefreshIcon, obj3);
                        const tmp28 = closure_7(RefreshIcon, obj3);
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
                      const obj4 = { size: cellSize, selected: tmp6, accessibilityLabel: tmp20, onPress: D, children: items };
                      items = [tmp23, tmp26];
                      cResult[24] = cellSize;
                      cResult[25] = tmp6;
                      cResult[26] = D;
                      cResult[27] = tmp23;
                      cResult[28] = tmp26;
                      cResult[29] = closure_8(primaryColor(tmp2[10]), obj4);
                      const tmp32 = closure_8(primaryColor(tmp2[10]), obj4);
                    }
                  }
                }
              }
            }
            const mapped = cellSize.map((primary) => {
              let GuildBadge;
              let guildTagPalettePresetColorLabel;
              let secondary;
              let tmp5;
              badge = primary;
              const obj = {
                size: cellSize,
                selected: tmp5,
                accessibilityLabel: guildTagPalettePresetColorLabel,
                onPress() {
                  let secondary = null;
                  primary = primary.primary;
                  if (closure_5) {
                    secondary = primary.secondary;
                  }
                  return onSelectColor(primary, secondary);
                },
                children: closure_1_7(GuildBadge, size)
              };
              tmp5 = primary.primary === primaryColor;
              const tmp4 = primaryColor(secondaryColor[10]);
              if (tmp5) {
                let tmp7 = !closure_5;
                if (closure_5) {
                  tmp7 = primary.secondary === secondaryColor;
                }
                tmp5 = tmp7;
              }
              if (closure_5) {
                guildTagPalettePresetColorLabel = primaryColor(secondaryColor[11])(primary.primary, primary.secondary);
              } else {
                const obj2 = badge(secondaryColor[11]);
                guildTagPalettePresetColorLabel = obj2.getGuildTagPalettePresetColorLabel(primary.primary);
              }
              size = { badge, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: secondary };
              secondary = undefined;
              GuildBadge = badge(secondaryColor[12]).GuildBadge;
              if (closure_5) {
                secondary = primary.secondary;
              }
              return closure_1_7(tmp4, obj, "" + primary.primary + primary.secondary);
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
        const intl = tmp(tmp2[8]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = tmp(tmp2[8]).t;
        if (tmp5) {
          let primary2;
          class D {
            constructor() {
              return onSelectColor(null, null);
            }
          }
          const hr4D2X = t.hr4D2X;
          if (primaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            primary2 = cellSize[0].primary;
          }
          const obj6 = { primaryColor: primary2, secondaryColor: secondary };
          secondary = secondaryColor;
          if (secondaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            secondary = cellSize[0].secondary;
          }
          formatToPlainStringResult = formatToPlainString(hr4D2X, obj6);
        } else {
          let primary;
          class D {
            constructor() {
              return onSelectColor(null, null);
            }
          }
          const v7BFCRR = t["7BFCRR"];
          if (primaryColor == null) {
            class D {
              constructor() {
                return onSelectColor(null, null);
              }
            }
            primary = cellSize[0].primary;
          }
          const obj7 = { color: primary };
          formatToPlainStringResult = formatToPlainString(v7BFCRR, obj7);
        }
        cResult[5] = tmp5;
        cResult[6] = primaryColor;
        cResult[7] = secondaryColor;
        cResult[8] = formatToPlainStringResult;
      }
    }
  }
  let everyResult = !tmp6;
  if (everyResult) {
    class D {
      constructor() {
        return onSelectColor(null, null);
      }
    }
    everyResult = cellSize.every((primary) => {
      let tmp = primary.primary !== primaryColor;
      if (!tmp) {
        tmp = closure_5 && primary.secondary !== secondaryColor;
        const tmp2 = closure_5 && primary.secondary !== secondaryColor;
      }
      return tmp;
    });
  }
  cResult[0] = tmp5;
  cResult[1] = tmp6;
  cResult[2] = primaryColor;
  cResult[3] = secondaryColor;
  cResult[4] = everyResult;
}) : ((badge) => {
  let EyeDropperIcon;
  let cellSize;
  let formatToPlainStringResult;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj9;
  let tmp12;
  let tmp13;
  badge = badge.badge;
  let primary = badge.primaryColor;
  let secondary = badge.secondaryColor;
  ({ onSelectColor: View, cellSize } = badge);
  let closure_5;
  const onPressEyedropper = badge.onPressEyedropper;
  let tmp = closure_9();
  let tmp2 = closure_5[badge] >= 2;
  closure_5 = tmp2;
  let tmp3 = null == primary;
  if (tmp3) {
    let tmp4 = !tmp2;
    if (tmp2) {
      tmp4 = null == secondary;
    }
    tmp3 = tmp4;
  }
  let tmp7 = badge;
  const everyResult = !tmp3 && cellSize.every((primary) => {
    let tmp = primary.primary !== primary;
    if (!tmp) {
      tmp = closure_5 && primary.secondary !== secondary;
      const tmp2 = closure_5 && primary.secondary !== secondary;
    }
    return tmp;
  });
  const intl = badge(secondary[8]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = badge(secondary[8]).t;
  if (tmp2) {
    const hr4D2X = t.hr4D2X;
    if (primary == null) {
      primary = cellSize[0].primary;
    }
    let obj2 = { primaryColor: primary, secondaryColor: secondary };
    if (secondary == null) {
      secondary = cellSize[0].secondary;
    }
    formatToPlainStringResult = formatToPlainString(hr4D2X, obj2);
    tmp12 = tmp8;
    tmp13 = tmp7;
  } else {
    let primary2 = primary;
    const v7BFCRR = t["7BFCRR"];
    if (primary == null) {
      primary2 = cellSize[0].primary;
    }
    let obj = { color: primary2 };
    formatToPlainStringResult = formatToPlainString(v7BFCRR, obj);
    tmp12 = tmp8;
    tmp13 = tmp7;
  }
  const obj3 = { spacing: primary(tmp12[4]).space.PX_8, children: items };
  const Stack = tmp13(tmp12[15]).Stack;
  const obj4 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl2.string(tmp13(tmp12[8]).t["Fg/TNW"]) };
  const Text = tmp13(tmp12[9]).Text;
  intl2 = tmp13(tmp12[8]).intl;
  items = [closure_7(Text, obj4), ];
  const obj5 = { accessibilityRole: "radiogroup", style: tmp.grid, children: items1 };
  items1 = [
    cellSize.map((primary) => {
      let GuildBadge;
      let guildTagPalettePresetColorLabel;
      let tmp5;
      badge = primary;
      const obj = {
        size: cellSize,
        selected: tmp5,
        accessibilityLabel: guildTagPalettePresetColorLabel,
        onPress() {
          secondary = null;
          primary = primary.primary;
          if (closure_5) {
            secondary = primary.secondary;
          }
          return View(primary, secondary);
        },
        children: closure_1_7(GuildBadge, size)
      };
      tmp5 = primary.primary === primary;
      const tmp4 = primary(secondary[10]);
      if (tmp5) {
        let tmp7 = !closure_5;
        if (closure_5) {
          tmp7 = primary.secondary === secondary;
        }
        tmp5 = tmp7;
      }
      if (closure_5) {
        guildTagPalettePresetColorLabel = primary(tmp3[11])(primary.primary, primary.secondary);
      } else {
        const obj2 = badge(secondary[11]);
        guildTagPalettePresetColorLabel = obj2.getGuildTagPalettePresetColorLabel(primary.primary);
      }
      size = { badge, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32, primaryTintColor: primary.primary, secondaryTintColor: secondary };
      secondary = undefined;
      GuildBadge = badge(tmp3[12]).GuildBadge;
      if (closure_5) {
        secondary = primary.secondary;
      }
      return closure_1_7(tmp4, obj, "" + primary.primary + primary.secondary);
    }),
  ,

  ];
  const obj6 = {
    size: cellSize,
    selected: tmp3,
    accessibilityLabel: intl3.string(tmp13(tmp12[8]).t.S6N0gC),
    onPress() {
      return View(null, null);
    },
    children: items2
  };
  const tmp16 = primary(tmp12[10]);
  intl3 = tmp13(tmp12[8]).intl;
  size = { badge, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
  items2 = [closure_7(tmp13(tmp12[12]).GuildBadge, size), ];
  const obj7 = { size: "xs", color: primary(tmp12[4]).colors.ICON_DEFAULT, style: tmp.defaultIcon };
  const RefreshIcon = tmp13(tmp12[13]).RefreshIcon;
  items2[1] = closure_7(RefreshIcon, obj7);
  items1[1] = closure_8(tmp16, obj6);
  const obj8 = { size: cellSize, selected: everyResult, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: onPressEyedropper, children: closure_7(EyeDropperIcon, obj9) };
  obj9 = { size: "sm", color: primary(tmp12[4]).colors.ICON_DEFAULT };
  const tmp17 = primary(tmp12[10]);
  EyeDropperIcon = tmp13(tmp12[14]).EyeDropperIcon;
  items1[2] = closure_7(tmp17, obj8);
  items[1] = closure_8(View, obj5);
  return closure_8(Stack, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx");

export default tmp5;