// discord_app/modules/launchpad/native/shared/SimpleGuild.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import useSimpleGuildDefaultColorsDefault from "useSimpleGuildDefaultColors.tsx";
import CutoutImageDefault from "CutoutImage.tsx";
import useSimpleGuildSizeDefault from "useSimpleGuildSize.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const getGuildIconSource = fn(2082).getGuildIconSource;
const ME = fn(1085).ME;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ dmsWrapper: { flex: 1, justifyContent: "center", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleGuild(arg0) {
      const cResult = guildId(576).c(62);
      ({ guildIconRef, style, guildId } = arg0);
      ({
        onPress,
        onLongPress,
        onAccessibilityAction,
        onLayout,
        backgroundColor,
        animated,
        altDefaultBackground,
        selected,
        size,
        iconSize,
        borderRadius,
        unread,
        badge,
      } = arg0);
      if (undefined === iconSize) {
        iconSize = guildId(6161).GuildIconSizes.LARGE;
      }
      const tmp7 = closure_10();
      const obj = guildId(576);
      const tmp4 = undefined === animated || animated;
      ({ iconStroke, iconBackground, iconBackgroundBrand } = useSimpleGuildDefaultColorsDefault());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function y() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[2];
      }
      const tmp9 = useSimpleGuildDefaultColorsDefault();
      const stateFromStores = guildId(504).useStateFromStores(first, tmp12);
      let str;
      if (stateFromStores != null) {
        str = stateFromStores.name;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildReadStateStore];
        cResult[3] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function x() {
          return {
            unread: GuildReadStateStore.hasUnread(guildId),
            badge: GuildReadStateStore.getMentionCount(guildId),
          };
        };
        const items2 = [guildId];
        cResult[4] = guildId;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp17 = items2;
        let tmp16 = fn2;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
      }
      const tmpResult = guildId(504);
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(tmp14, tmp16, tmp17);
      ({ unread: unread2, badge: badge2 } = stateFromStoresObject);
      const tmpResult5 = guildId(17704);
      const tmp20 = tmp4 ? tmpResult5.SimpleGuildContainerAnimated : tmpResult5.SimpleGuildContainer;
      if (cResult[7] === size) {
        if (cResult[8] === style) {
          let tmp21 = cResult[9];
        }
        ({ containerSize, containerSizeStyle, containerStyles } = useSimpleGuildSizeDefault(tmp21));
        let tmp23 = str;
        if ("" !== str) {
          if (null != badge2) {
            if (badge2 > 0) {
              if (cResult[10] === badge2) {
              }
              const intl3 = guildId(1126).intl;
              const obj2 = { guildName: str, mentions: badge2 };
              const formatToPlainStringResult = intl3.formatToPlainString(guildId(1126).t["/uzRss"], obj2);
              cResult[10] = badge2;
              cResult[11] = str;
              cResult[12] = formatToPlainStringResult;
            }
          }
          if (true !== unread2) {
            if (cResult[15] === badge2) {
              if (cResult[16] === str) {
                let tmp26 = cResult[17];
              }
              tmp23 = tmp26;
            }
            const intl2 = guildId(1126).intl;
            const obj3 = { guildName: str, mentions: badge2 };
            const formatToPlainStringResult1 = intl2.formatToPlainString(guildId(1126).t["/uzRss"], obj3);
            cResult[15] = badge2;
            cResult[16] = str;
            cResult[17] = formatToPlainStringResult1;
            tmp26 = formatToPlainStringResult1;
          } else {
            if (cResult[13] !== str) {
              const intl = guildId(1126).intl;
              const obj4 = { guildName: str };
              const formatToPlainStringResult2 = intl.formatToPlainString(guildId(1126).t.lzqe42, obj4);
              cResult[13] = str;
              cResult[14] = formatToPlainStringResult2;
              let tmp24 = formatToPlainStringResult2;
            } else {
              tmp24 = cResult[14];
            }
            tmp23 = tmp24;
          }
        }
        const tmp22 = useSimpleGuildSizeDefault(tmp21);
        const activityIndicatorState = guildId(16574).useActivityIndicatorState(guildId);
        let tmp32 = unread2;
        if (!unread2) {
          tmp32 = tmp6;
        }
        if (!tmp32) {
          tmp32 = badge2 > 0;
        }
        if (!tmp32) {
          tmp32 = null != activityIndicatorState.source;
        }
        if (tmp32) {
          tmp32 = "transparent" === backgroundColor;
        }
        if (cResult[18] === containerSize) {
          if (cResult[19] === stateFromStores) {
            if (cResult[20] === tmp6) {
              if (cResult[21] === tmp32) {
                let tmp33 = cResult[22];
              }
              if (null !== tmp33) {
                if (typeof tmp33 === "object") {
                  if ("uri" in tmp33) {
                    let tmp37 = null != tmp33.uri;
                  }
                  if (stateFromStores != null) {
                    const id = stateFromStores.id;
                  }
                  if (unread == null) {
                    unread = unread2;
                  }
                  if (badge == null) {
                    badge = badge2;
                  }
                  if (cResult[23] === activityIndicatorState) {
                    if (cResult[24] === tmp5) {
                      if (cResult[25] === badge2) {
                        if (cResult[26] === borderRadius) {
                          if (cResult[27] === containerSize) {
                            if (cResult[28] === containerSizeStyle) {
                              if (cResult[29] === stateFromStores) {
                                if (cResult[30] === tmp33) {
                                  if (cResult[31] === tmp37) {
                                    if (cResult[32] === guildId) {
                                      if (cResult[33] === iconBackground) {
                                        if (cResult[34] === iconBackgroundBrand) {
                                          if (cResult[35] === iconSize) {
                                            if (cResult[36] === iconStroke) {
                                              if (cResult[37] === tmp6) {
                                                if (cResult[38] === tmp32) {
                                                  if (cResult[39] === size) {
                                                    if (cResult[40] === tmp7) {
                                                      if (cResult[41] === unread2) {
                                                        if (cResult[43] === tmp20) {
                                                          if (cResult[44] === tmp23) {
                                                            if (cResult[45] === activityIndicatorState) {
                                                              if (cResult[46] === backgroundColor) {
                                                                if (cResult[47] === borderRadius) {
                                                                  if (cResult[48] === containerStyles) {
                                                                    if (cResult[49] === guildIconRef) {
                                                                      if (cResult[50] === onAccessibilityAction) {
                                                                        if (cResult[51] === onLayout) {
                                                                          if (cResult[52] === onLongPress) {
                                                                            if (cResult[53] === onPress) {
                                                                              if (cResult[54] === tmp6) {
                                                                                if (cResult[55] === tmp32) {
                                                                                  if (cResult[56] === size) {
                                                                                    if (cResult[57] === id) {
                                                                                      if (cResult[58] === unread) {
                                                                                        if (cResult[59] === badge) {
                                                                                          if (cResult[60] === tmp38) {
                                                                                            let tmp48 = cResult[61];
                                                                                          }
                                                                                          return tmp48;
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
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj5 = {
                                                          guildIconRef,
                                                          guildId: id,
                                                          style: containerStyles,
                                                          backgroundColor,
                                                          selected: tmp6,
                                                          size,
                                                          borderRadius,
                                                          onPress,
                                                          onLongPress,
                                                          unread,
                                                          badge,
                                                          onLayout,
                                                          onAccessibilityAction,
                                                          accessibilityLabel: tmp23,
                                                          usingCutout: tmp32,
                                                          activityIndicatorState,
                                                          children: cResult[42],
                                                        };
                                                        const tmp50 = (
                                                          <tmp20
                                                            guildIconRef={guildIconRef}
                                                            guildId={id}
                                                            style={containerStyles}
                                                            backgroundColor={backgroundColor}
                                                            selected={tmp6}
                                                            size={size}
                                                            borderRadius={borderRadius}
                                                            onPress={onPress}
                                                            onLongPress={onLongPress}
                                                            unread={unread}
                                                            badge={badge}
                                                            onLayout={onLayout}
                                                            onAccessibilityAction={onAccessibilityAction}
                                                            accessibilityLabel={tmp23}
                                                            usingCutout={tmp32}
                                                            activityIndicatorState={activityIndicatorState}
                                                          >
                                                            {cResult[42]}
                                                          </tmp20>
                                                        );
                                                        cResult[43] = tmp20;
                                                        cResult[44] = tmp23;
                                                        cResult[45] = activityIndicatorState;
                                                        cResult[46] = backgroundColor;
                                                        cResult[47] = borderRadius;
                                                        cResult[48] = containerStyles;
                                                        cResult[49] = guildIconRef;
                                                        cResult[50] = onAccessibilityAction;
                                                        cResult[51] = onLayout;
                                                        cResult[52] = onLongPress;
                                                        cResult[53] = onPress;
                                                        cResult[54] = tmp6;
                                                        cResult[55] = tmp32;
                                                        cResult[56] = size;
                                                        cResult[57] = id;
                                                        cResult[58] = unread;
                                                        cResult[59] = badge;
                                                        cResult[60] = cResult[42];
                                                        cResult[61] = tmp50;
                                                        tmp48 = tmp50;
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (guildId !== ME) {
                    if (tmp32) {
                      let num25 = 13;
                      if (badge2 <= 0) {
                        let num26 = 0;
                        if (unread2) {
                          num26 = 11;
                        }
                        num25 = num26;
                      }
                      const obj6 = {
                        cutoutBottomRightSize: num25,
                        cutoutBottomRightInsetX: 6,
                        cutoutBottomRightInsetY: 7,
                        cutoutTopRightSize: null,
                        cutoutTopRightInsetX: 8,
                        cutoutTopRightInsetY: 8,
                        imageSize: null,
                        imageSource: null,
                        imageBorderRadius: null,
                        imageBackgroundColor: null,
                        clipOuterAmount: null,
                        borderStroke: 1,
                        borderStrokeColor: null,
                      };
                      let num27 = 0;
                      if (null != activityIndicatorState.source) {
                        num27 = 13;
                      }
                      obj6.cutoutTopRightSize = num27;
                      obj6.imageSize = containerSize;
                      obj6.imageSource = tmp33;
                      obj6.imageBorderRadius = borderRadius;
                      obj6.imageBackgroundColor = tmp37 ? iconBackground.color : iconBackgroundBrand.color;
                      let num28 = 0;
                      if (tmp6) {
                        num28 = 3;
                      }
                      obj6.clipOuterAmount = num28;
                      obj6.borderStrokeColor = iconStroke.color;
                      let tmp51Result = jsx(CutoutImageDefault, {
                        cutoutBottomRightSize: num25,
                        cutoutBottomRightInsetX: 6,
                        cutoutBottomRightInsetY: 7,
                        cutoutTopRightSize: null,
                        cutoutTopRightInsetX: 8,
                        cutoutTopRightInsetY: 8,
                        imageSize: null,
                        imageSource: null,
                        imageBorderRadius: null,
                        imageBackgroundColor: null,
                        clipOuterAmount: null,
                        borderStroke: 1,
                        borderStrokeColor: null,
                      });
                      const tmp8Result = CutoutImageDefault;
                    } else {
                      const obj7 = {
                        guild: stateFromStores,
                        size: iconSize,
                        selected: tmp6,
                        animate: tmp6,
                        TABS_altDefaultBackground: tmp5,
                        style: null,
                      };
                      let tmp41 = null;
                      if (null != size) {
                        tmp41 = containerSizeStyle;
                      }
                      obj7.style = tmp41;
                      tmp51Result = jsx(GuildIconDefault, {
                        guild: stateFromStores,
                        size: iconSize,
                        selected: tmp6,
                        animate: tmp6,
                        TABS_altDefaultBackground: tmp5,
                        style: null,
                      });
                      const tmp8Result2 = GuildIconDefault;
                    }
                    cResult[23] = activityIndicatorState;
                    cResult[24] = tmp5;
                    cResult[25] = badge2;
                    cResult[26] = borderRadius;
                    cResult[27] = containerSize;
                    cResult[28] = containerSizeStyle;
                    cResult[29] = stateFromStores;
                    cResult[30] = tmp33;
                    cResult[31] = tmp37;
                    cResult[32] = guildId;
                    cResult[33] = iconBackground;
                    cResult[34] = iconBackgroundBrand;
                    cResult[35] = iconSize;
                    cResult[36] = iconStroke;
                    cResult[37] = tmp6;
                    cResult[38] = tmp32;
                    cResult[39] = size;
                    cResult[40] = tmp7;
                    cResult[41] = unread2;
                    cResult[42] = tmp51Result;
                  }
                  const obj8 = { style: tmp7.dmsWrapper, children: null };
                  let colors = nativeDefault.colors;
                  const obj9 = { color: tmp6 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
                  colors = jsx(guildId(8174).ChatIcon, {
                    color: tmp6 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
                  });
                  obj8.children = colors;
                  <View style={tmp7.dmsWrapper}>{null}</View>;
                }
              }
              tmp37 = null != tmp33;
            }
          }
        }
        let tmp35Result;
        if (null != stateFromStores) {
          let tmp36 = tmp6;
          if (tmp6) {
            tmp36 = !tmp32;
          }
          tmp35Result = getGuildIconSource(stateFromStores, containerSize, tmp36);
        }
        cResult[18] = containerSize;
        cResult[19] = stateFromStores;
        cResult[20] = tmp6;
        cResult[21] = tmp32;
        cResult[22] = tmp35Result;
        tmp33 = tmp35Result;
        const tmpResult6 = guildId(16574);
      }
      const obj10 = { size, style };
      cResult[7] = size;
      cResult[8] = style;
      cResult[9] = obj10;
      tmp21 = obj10;
      const tmpResult4 = guildId(504);
    }
  : function SimpleGuild(guildId) {
      guildId = guildId.guildId;
      ({ backgroundColor, animated } = guildId);
      ({ guildIconRef, style, onPress, onLongPress, onAccessibilityAction, onLayout } = guildId);
      if (animated === undefined) {
        animated = true;
      }
      let flag = guildId.altDefaultBackground;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = guildId.selected;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ size, iconSize } = guildId);
      if (iconSize === undefined) {
        iconSize = guildId(unread2[10]).GuildIconSizes.LARGE;
      }
      ({ borderRadius, unread, badge } = guildId);
      let str;
      unread2 = undefined;
      let badge2;
      const tmp3 = closure_10();
      ({ iconStroke, iconBackground, iconBackgroundBrand } = str(unread2[11])());
      const tmp6 = str(unread2[11])();
      const items = [GuildStore];
      const stateFromStores = guildId(unread2[12]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      str = undefined;
      if (stateFromStores != null) {
        str = stateFromStores.name;
      }
      if (str == null) {
        str = "";
      }
      let obj = guildId(unread2[12]);
      const items1 = [GuildReadStateStore];
      const items2 = [guildId];
      const stateFromStoresObject = guildId(unread2[12]).useStateFromStoresObject(
        items1,
        () => ({ unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) }),
        items2,
      );
      unread2 = stateFromStoresObject.unread;
      badge2 = stateFromStoresObject.badge;
      const tmp7Result3 = guildId(unread2[13]);
      const tmp12 = str(unread2[14])({ size, style });
      const containerSize = tmp12.containerSize;
      const items3 = [str, unread2, badge2];
      ({ containerSizeStyle, containerStyles } = tmp12);
      const memo = badge2.useMemo(() => {
        if ("" === str) {
          return str;
        } else {
          if (null == badge2) {
            if (true === unread2) {
              const intl2 = util.intl;
              const obj2 = { guildName: str };
              let formatToPlainStringResult = intl2.formatToPlainString(util.t.lzqe42, obj2);
            } else {
              const intl = util.intl;
              const obj = { guildName: str, mentions: badge2 };
              formatToPlainStringResult = intl.formatToPlainString(util.t["/uzRss"], obj);
            }
          }
          const intl3 = util.intl;
          const obj3 = { guildName: str, mentions: badge2 };
          formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj3);
        }
      }, items3);
      const tmp11 = animated ? tmp7Result3.SimpleGuildContainerAnimated : tmp7Result3.SimpleGuildContainer;
      const tmp7Result = guildId(unread2[12]);
      const activityIndicatorState = guildId(unread2[16]).useActivityIndicatorState(guildId);
      let tmp15 = unread2;
      if (!unread2) {
        tmp15 = flag2;
      }
      if (!tmp15) {
        tmp15 = badge2 > 0;
      }
      if (!tmp15) {
        tmp15 = null != activityIndicatorState.source;
      }
      if (tmp15) {
        tmp15 = "transparent" === backgroundColor;
      }
      let tmp17Result;
      if (null != stateFromStores) {
        let tmp18 = flag2;
        if (flag2) {
          tmp18 = !tmp15;
        }
        tmp17Result = getGuildIconSource(stateFromStores, containerSize, tmp18);
      }
      if (null !== tmp17Result) {
        if (typeof tmp17Result === "object") {
          if ("uri" in tmp17Result) {
            let tmp19 = null != tmp17Result.uri;
          }
          let obj2 = {
            guildIconRef,
            guildId: null,
            style: null,
            backgroundColor: null,
            selected: null,
            size: null,
            borderRadius: null,
            onPress: null,
            onLongPress: null,
            unread: null,
            badge: null,
            onLayout: null,
            onAccessibilityAction: null,
            accessibilityLabel: null,
            usingCutout: null,
            activityIndicatorState: null,
            children: null,
          };
          let id;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          obj2.guildId = id;
          obj2.style = containerStyles;
          obj2.backgroundColor = backgroundColor;
          obj2.selected = flag2;
          obj2.size = size;
          obj2.borderRadius = borderRadius;
          obj2.onPress = onPress;
          obj2.onLongPress = onLongPress;
          if (unread == null) {
            unread = unread2;
          }
          obj2.unread = unread;
          if (badge == null) {
            badge = badge2;
          }
          obj2.badge = badge;
          obj2.onLayout = onLayout;
          obj2.onAccessibilityAction = onAccessibilityAction;
          obj2.accessibilityLabel = memo;
          obj2.usingCutout = tmp15;
          obj2.activityIndicatorState = activityIndicatorState;
          if (guildId === ME) {
            let obj3 = { style: tmp3.dmsWrapper, children: null };
            let colors = tmp4(tmp5[18]).colors;
            const obj4 = { color: flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
            colors = jsx(tmp7(tmp5[17]).ChatIcon, {
              color: flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT,
            });
            obj3.children = colors;
            <View style={tmp3.dmsWrapper}>{null}</View>;
          } else {
            if (tmp15) {
              let num4 = 13;
              if (badge2 <= 0) {
                let num5 = 0;
                if (unread2) {
                  num5 = 11;
                }
                num4 = num5;
              }
              const obj5 = {
                cutoutBottomRightSize: num4,
                cutoutBottomRightInsetX: 6,
                cutoutBottomRightInsetY: 7,
                cutoutTopRightSize: null,
                cutoutTopRightInsetX: 8,
                cutoutTopRightInsetY: 8,
                imageSize: null,
                imageSource: null,
                imageBorderRadius: null,
                imageBackgroundColor: null,
                clipOuterAmount: null,
                borderStroke: 1,
                borderStrokeColor: null,
              };
              let num6 = 0;
              if (null != activityIndicatorState.source) {
                num6 = 13;
              }
              obj5.cutoutTopRightSize = num6;
              obj5.imageSize = containerSize;
              obj5.imageSource = tmp17Result;
              obj5.imageBorderRadius = borderRadius;
              obj5.imageBackgroundColor = tmp19 ? iconBackground.color : iconBackgroundBrand.color;
              let num7 = 0;
              if (flag2) {
                num7 = 3;
              }
              obj5.clipOuterAmount = num7;
              obj5.borderStrokeColor = iconStroke.color;
              let tmp20Result2 = jsx(tmp4(tmp5[19]), {
                cutoutBottomRightSize: num4,
                cutoutBottomRightInsetX: 6,
                cutoutBottomRightInsetY: 7,
                cutoutTopRightSize: null,
                cutoutTopRightInsetX: 8,
                cutoutTopRightInsetY: 8,
                imageSize: null,
                imageSource: null,
                imageBorderRadius: null,
                imageBackgroundColor: null,
                clipOuterAmount: null,
                borderStroke: 1,
                borderStrokeColor: null,
              });
              const tmp4Result = tmp4(tmp5[19]);
            } else {
              const obj6 = {
                guild: stateFromStores,
                size: iconSize,
                selected: flag2,
                animate: flag2,
                TABS_altDefaultBackground: flag,
                style: null,
              };
              let tmp24 = null;
              if (null != size) {
                tmp24 = containerSizeStyle;
              }
              obj6.style = tmp24;
              tmp20Result2 = jsx(tmp4(tmp5[10]), {
                guild: stateFromStores,
                size: iconSize,
                selected: flag2,
                animate: flag2,
                TABS_altDefaultBackground: flag,
                style: null,
              });
              const tmp4Result2 = tmp4(tmp5[10]);
            }
            obj2.children = tmp20Result2;
            return <tmp11 {...obj2} />;
          }
        }
      }
      tmp19 = null != tmp17Result;
      const tmp7Result4 = guildId(unread2[16]);
    };
