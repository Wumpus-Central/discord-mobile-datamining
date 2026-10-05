// === Module 17391: SimpleGuild ===

// Module 17391 (SimpleGuild)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import useSimpleGuildDefaultColorsDefault from "useSimpleGuildDefaultColors" /* 17392 */;
import CutoutImageDefault from "CutoutImage" /* 17394 */;
import useSimpleGuildSizeDefault from "useSimpleGuildSize" /* 17395 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import GuildStore from "GuildStore" /* 2074 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const ME = Constants.ME;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ dmsWrapper: { flex: 1, justifyContent: "center", alignItems: "center" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let altDefaultBackground;
  let animated;
  let backgroundColor;
  let badge;
  let badge2;
  let borderRadius;
  let containerSize;
  let containerSizeStyle;
  let containerStyles;
  let first;
  let guildIconRef;
  let guildId;
  let iconBackground;
  let iconBackgroundBrand;
  let iconSize;
  let iconStroke;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let selected;
  let style;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let unread;
  let unread2;
  let obj = guildId(576);
  const cResult = obj.c(62);
  ({ guildIconRef, style, guildId } = arg0);
  ({ onPress, onLongPress, onAccessibilityAction, onLayout, backgroundColor, animated, altDefaultBackground, selected, size, iconSize, borderRadius, unread, badge } = arg0);
  const tmp4 = undefined === animated || animated;
  if (undefined === iconSize) {
    iconSize = guildId(5971).GuildIconSizes.LARGE;
  }
  const tmp7 = closure_10();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = useSimpleGuildDefaultColorsDefault());
  useSimpleGuildDefaultColorsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp12);
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
    tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function x() {
      const obj = { unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) };
      return obj;
    };
    const items2 = [guildId];
    cResult[4] = guildId;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp17 = items2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmpResult4 = guildId(504);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp14, tmp16, tmp17);
  ({ unread: unread2, badge: badge2 } = stateFromStoresObject);
  const tmpResult5 = guildId(17393);
  const tmp20 = tmp4 ? tmpResult5.SimpleGuildContainerAnimated : tmpResult5.SimpleGuildContainer;
  if (cResult[7] === size) {
    let tmp21;
    if (cResult[8] === style) {
      tmp21 = cResult[9];
    }
    ({ containerSize, containerSizeStyle, containerStyles } = useSimpleGuildSizeDefault(tmp21));
    let tmp23 = str;
    useSimpleGuildSizeDefault(tmp21);
    if ("" !== str) {
      if (null != badge2) {
        if (badge2 > 0) {
          if (cResult[10] === badge2) {
            let tmp28;
            if (cResult[11] === str) {
              tmp28 = cResult[12];
            }
            tmp23 = tmp28;
          }
          const intl3 = guildId(1126).intl;
          const obj2 = { guildName: str, mentions: badge2 };
          const formatToPlainStringResult = intl3.formatToPlainString(guildId(1126).t["/uzRss"], obj2);
          cResult[10] = badge2;
          cResult[11] = str;
          cResult[12] = formatToPlainStringResult;
          tmp28 = formatToPlainStringResult;
        }
      }
      if (true !== unread2) {
        if (cResult[15] === badge2) {
          let tmp26;
          if (cResult[16] === str) {
            tmp26 = cResult[17];
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
        let tmp24;
        if (cResult[13] !== str) {
          const intl = guildId(1126).intl;
          const obj4 = { guildName: str };
          const formatToPlainStringResult2 = intl.formatToPlainString(guildId(1126).t.lzqe42, obj4);
          cResult[13] = str;
          cResult[14] = formatToPlainStringResult2;
          tmp24 = formatToPlainStringResult2;
        } else {
          tmp24 = cResult[14];
        }
        tmp23 = tmp24;
      }
    }
    const tmpResult6 = guildId(16274);
    const activityIndicatorState = tmpResult6.useActivityIndicatorState(guildId);
    if (cResult[18] === containerSize) {
      if (cResult[19] === stateFromStores) {
        if (cResult[20] === (undefined !== selected && selected)) {
          let tmp32;
          if (cResult[21] === ((unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor)) {
            tmp32 = cResult[22];
          }
          if (null !== tmp32) {
            if (typeof tmp32 === "object") {
              let tmp36;
              let id;
              let tmp48Result;
              if ("uri" in tmp32) {
                tmp36 = null != tmp32.uri;
              }
              if (stateFromStores != null) {
                id = stateFromStores.id;
              }
              if (unread == null) {
                unread = unread2;
              }
              if (badge == null) {
                badge = badge2;
              }
              if (cResult[23] === activityIndicatorState) {
                if (cResult[24] === (undefined !== altDefaultBackground && altDefaultBackground)) {
                  if (cResult[25] === badge2) {
                    if (cResult[26] === borderRadius) {
                      if (cResult[27] === containerSize) {
                        if (cResult[28] === containerSizeStyle) {
                          if (cResult[29] === stateFromStores) {
                            if (cResult[30] === tmp32) {
                              if (cResult[31] === tmp36) {
                                if (cResult[32] === guildId) {
                                  if (cResult[33] === iconBackground) {
                                    if (cResult[34] === iconBackgroundBrand) {
                                      if (cResult[35] === iconSize) {
                                        if (cResult[36] === iconStroke) {
                                          if (cResult[37] === (undefined !== selected && selected)) {
                                            if (cResult[38] === ((unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor)) {
                                              if (cResult[39] === size) {
                                                if (cResult[40] === tmp7) {
                                                  let tmp37;
                                                  if (cResult[41] === unread2) {
                                                    tmp37 = cResult[42];
                                                  }
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
                                                                        if (cResult[54] === (undefined !== selected && selected)) {
                                                                          if (cResult[55] === ((unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor)) {
                                                                            if (cResult[56] === size) {
                                                                              if (cResult[57] === id) {
                                                                                if (cResult[58] === unread) {
                                                                                  if (cResult[59] === badge) {
                                                                                    let tmp45;
                                                                                    if (cResult[60] === tmp37) {
                                                                                      tmp45 = cResult[61];
                                                                                    }
                                                                                    return tmp45;
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
                                                  const tmp47 = <tmp20 guildIconRef={guildIconRef} guildId={id} style={containerStyles} backgroundColor={backgroundColor} selected={undefined !== selected && selected} size={size} borderRadius={borderRadius} onPress={onPress} onLongPress={onLongPress} unread={unread} badge={badge} onLayout={onLayout} onAccessibilityAction={onAccessibilityAction} accessibilityLabel={tmp23} usingCutout={(unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor} activityIndicatorState={activityIndicatorState}>{tmp37}</tmp20>;
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
                                                  cResult[54] = undefined !== selected && selected;
                                                  cResult[55] = (unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor;
                                                  cResult[56] = size;
                                                  cResult[57] = id;
                                                  cResult[58] = unread;
                                                  cResult[59] = badge;
                                                  cResult[60] = tmp37;
                                                  cResult[61] = tmp47;
                                                  tmp45 = tmp47;
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
              if (guildId === ME) {
                const ChatIcon = guildId(5855).ChatIcon;
                const colors = nativeDefault.colors;
                tmp48Result = <View style={tmp7.dmsWrapper}>{null}</View>;
              } else if ((unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor) {
                let num25 = 13;
                CutoutImageDefault;
                if (badge2 <= 0) {
                  let num26 = 0;
                  if (unread2) {
                    num26 = 11;
                  }
                  num25 = num26;
                }
                let num27 = 0;
                if (null != activityIndicatorState.source) {
                  num27 = 13;
                }
                let num28 = 0;
                if (undefined !== selected && selected) {
                  num28 = 3;
                }
                tmp48Result = <tmp8Result cutoutBottomRightSize={num25} cutoutBottomRightInsetX={6} cutoutBottomRightInsetY={7} cutoutTopRightSize={num27} cutoutTopRightInsetX={8} cutoutTopRightInsetY={8} imageSize={containerSize} imageSource={tmp32} imageBorderRadius={borderRadius} imageBackgroundColor={tmp36 ? iconBackground.color : iconBackgroundBrand.color} clipOuterAmount={num28} borderStroke={1} borderStrokeColor={iconStroke.color} />;
              } else {
                let tmp40 = null;
                GuildIconDefault;
                if (null != size) {
                  tmp40 = containerSizeStyle;
                }
                tmp48Result = <tmp8Result2 guild={stateFromStores} size={iconSize} selected={undefined !== selected && selected} animate={undefined !== selected && selected} TABS_altDefaultBackground={undefined !== altDefaultBackground && altDefaultBackground} style={tmp40} />;
              }
              cResult[23] = activityIndicatorState;
              cResult[24] = undefined !== altDefaultBackground && altDefaultBackground;
              cResult[25] = badge2;
              cResult[26] = borderRadius;
              cResult[27] = containerSize;
              cResult[28] = containerSizeStyle;
              cResult[29] = stateFromStores;
              cResult[30] = tmp32;
              cResult[31] = tmp36;
              cResult[32] = guildId;
              cResult[33] = iconBackground;
              cResult[34] = iconBackgroundBrand;
              cResult[35] = iconSize;
              cResult[36] = iconStroke;
              cResult[37] = undefined !== selected && selected;
              cResult[38] = (unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor;
              cResult[39] = size;
              cResult[40] = tmp7;
              cResult[41] = unread2;
              cResult[42] = tmp48Result;
              tmp37 = tmp48Result;
            }
          }
          tmp36 = null != tmp32;
        }
      }
    }
    let tmp34Result;
    if (null != stateFromStores) {
      let tmp35 = tmp6;
      if (undefined !== selected && selected) {
        tmp35 = !tmp31;
      }
      tmp34Result = getGuildIconSource(stateFromStores, containerSize, tmp35);
    }
    cResult[18] = containerSize;
    cResult[19] = stateFromStores;
    cResult[20] = undefined !== selected && selected;
    cResult[21] = (unread2 || tmp6 || badge2 > 0 || null != activityIndicatorState.source) && "transparent" === backgroundColor;
    cResult[22] = tmp34Result;
    tmp32 = tmp34Result;
  }
  const obj10 = { size, style };
  cResult[7] = size;
  cResult[8] = style;
  cResult[9] = obj10;
  tmp21 = obj10;
}) : ((guildId) => {
  let animated;
  let backgroundColor;
  let badge;
  let borderRadius;
  let containerSizeStyle;
  let containerStyles;
  let guildIconRef;
  let iconBackground;
  let iconBackgroundBrand;
  let iconSize;
  let iconStroke;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let style;
  let unread;
  let unread2;
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
    let tmp2 = unread2;
    iconSize = guildId(unread2[10]).GuildIconSizes.LARGE;
  }
  ({ borderRadius, unread, badge } = guildId);
  let str;
  unread2 = undefined;
  let badge2;
  const tmp3 = closure_10();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = str(unread2[11])());
  str(unread2[11])();
  let obj = guildId(unread2[12]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const items1 = [GuildReadStateStore];
  const items2 = [guildId];
  const tmp7Result = guildId(unread2[12]);
  const stateFromStoresObject = tmp7Result.useStateFromStoresObject(items1, () => {
    const obj = { unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) };
    return obj;
  }, items2);
  unread2 = stateFromStoresObject.unread;
  badge2 = stateFromStoresObject.badge;
  const tmp7Result3 = guildId(unread2[13]);
  const tmp12 = str(unread2[14])({ size, style });
  const containerSize = tmp12.containerSize;
  const items3 = [str, unread2, badge2];
  ({ containerSizeStyle, containerStyles } = tmp12);
  const memo = badge2.useMemo(() => {
    let tmp2 = str;
    if ("" !== str) {
      let formatToPlainStringResult;
      if (null != badge2) {
        if (badge2 > 0) {
          const intl3 = intl4.intl;
          const obj2 = { guildName: str, mentions: badge2 };
          formatToPlainStringResult = intl3.formatToPlainString(intl4.t["/uzRss"], obj2);
        }
        tmp2 = formatToPlainStringResult;
      }
      if (true === unread2) {
        const intl2 = intl4.intl;
        const obj3 = { guildName: str };
        formatToPlainStringResult = intl2.formatToPlainString(intl4.t.lzqe42, obj3);
      } else {
        const intl = intl4.intl;
        const obj = { guildName: str, mentions: badge2 };
        formatToPlainStringResult = intl.formatToPlainString(intl4.t["/uzRss"], obj);
      }
    }
    return tmp2;
  }, items3);
  const tmp7Result4 = guildId(unread2[16]);
  const activityIndicatorState = tmp7Result4.useActivityIndicatorState(guildId);
  let tmp15 = unread2 || flag2;
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
    const tmp18 = flag2 && !tmp15;
    tmp17Result = getGuildIconSource(stateFromStores, containerSize, tmp18);
  }
  if (null !== tmp17Result) {
    if (typeof tmp17Result === "object") {
      let tmp19;
      let tmp20Result;
      if ("uri" in tmp17Result) {
        tmp19 = null != tmp17Result.uri;
      }
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (unread == null) {
        unread = unread2;
      }
      if (badge == null) {
        badge = badge2;
      }
      if (guildId === ME) {
        const ChatIcon = tmp7(tmp5[17]).ChatIcon;
        const colors = tmp4(tmp5[18]).colors;
        tmp20Result = <View style={tmp3.dmsWrapper}>{null}</View>;
      } else if (tmp15) {
        let num4 = 13;
        str(unread2[19]);
        if (badge2 <= 0) {
          let num5 = 0;
          if (unread2) {
            num5 = 11;
          }
          num4 = num5;
        }
        let num6 = 0;
        if (null != activityIndicatorState.source) {
          num6 = 13;
        }
        let num7 = 0;
        if (flag2) {
          num7 = 3;
        }
        tmp20Result = <tmp4Result cutoutBottomRightSize={num4} cutoutBottomRightInsetX={6} cutoutBottomRightInsetY={7} cutoutTopRightSize={num6} cutoutTopRightInsetX={8} cutoutTopRightInsetY={8} imageSize={containerSize} imageSource={tmp17Result} imageBorderRadius={borderRadius} imageBackgroundColor={tmp19 ? iconBackground.color : iconBackgroundBrand.color} clipOuterAmount={num7} borderStroke={1} borderStrokeColor={iconStroke.color} />;
      } else {
        let tmp24 = null;
        str(unread2[10]);
        if (null != size) {
          tmp24 = containerSizeStyle;
        }
        tmp20Result = <tmp4Result2 guild={stateFromStores} size={iconSize} selected={flag2} animate={flag2} TABS_altDefaultBackground={flag} style={tmp24} />;
      }
      return <tmp11 guildIconRef={guildIconRef} guildId={id} style={containerStyles} backgroundColor={backgroundColor} selected={flag2} size={size} borderRadius={borderRadius} onPress={onPress} onLongPress={onLongPress} unread={unread} badge={badge} onLayout={onLayout} onAccessibilityAction={onAccessibilityAction} accessibilityLabel={memo} usingCutout={tmp15} activityIndicatorState={activityIndicatorState}>{tmp20Result}</tmp11>;
    }
  }
  tmp19 = null != tmp17Result;
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

export default tmp2;