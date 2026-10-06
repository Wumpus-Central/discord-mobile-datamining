// === Module 12031: BaseChannelItem ===

// Module 12031 (BaseChannelItem)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import Text_Text from "Text/Text" /* 4892 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import native2 from "native" /* 8602 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 12032 */;
import TouchableBackgroundDefault from "TouchableBackground" /* 12033 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let closure_3 = ["icon", "name", "mode", "hideIcon", "disableHighlightOnPress", "channelInfo", "children", "unread"];
const View = react_native.View;
({ CHANNEL_SUBTITLE_TEXT_VARIANT: metroImportDefault, CHANNEL_TITLE_LINE_HEIGHT: metroImportAll } = RedesignChannelListConstants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let obj7;
  const obj = { rowPaddingNoIcon: { paddingHorizontal: 6 }, rowSelected: { borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED }, unreadIndicator: { left: -nativeDefault.space.PX_8 }, channelIcon: { width: 16, height: 16, marginRight: 8, opacity: num2 }, redesignedChannelIcon: { marginRight: 8, opacity: num3 }, channelIconNormal: { tintColor: nativeDefault.colors.CHANNEL_ICON }, channelIconUnread: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, channelIconMuted: { tintColor: nativeDefault.colors.ICON_MUTED }, channel: { paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row", alignItems: "center", position: "relative" }, channelNameContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" }, channelName: obj7 };
  ({ borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED });
  let num = 1;
  num2 = 1;
  ({ left: -nativeDefault.space.PX_8 });
  if (arg0 === obj.MUTED) {
    num2 = 0.5;
  }
  num3 = num;
  if (arg0 === obj.MUTED) {
    num3 = 0.5;
  }
  ({ tintColor: nativeDefault.colors.CHANNEL_ICON });
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
  obj7 = { flexGrow: 1, textAlign: "left", lineHeight: metroImportAll, opacity: num };
  ({ tintColor: nativeDefault.colors.ICON_MUTED });
  if (arg0 === obj.MUTED) {
    num = 0.5;
  }
  return obj;
});
const ChannelModes = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mode;
  let subtitle;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  ({ mode, subtitle } = arg0);
  if (cResult[0] !== mode) {
    if (mode !== obj.UNREAD_IMPORTANT) {
      if (mode !== obj.RELEVANT) {
        let obj2;
        if (mode !== obj.SELECTED) {
          const MUTED = tmp5.MUTED;
          obj2 = { variant: metroImportDefault, color: "text-muted" };
        }
        cResult[0] = mode;
        cResult[1] = obj2;
        tmp4 = obj2;
      }
    }
    obj2 = { variant: metroImportDefault, color: "redesign-channel-name-text" };
    const obj3 = { variant: metroImportDefault, color: "redesign-channel-name-text" };
  } else {
    tmp4 = cResult[1];
  }
  let tmp8 = null;
  if (null != subtitle) {
    let tmp9;
    if (cResult[2] !== subtitle) {
      const tmpResult = utils_PlatformUtils;
      const tmp11 = !tmpResult.isAndroid() && typeof subtitle === "string";
      cResult[2] = subtitle;
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4) {
      if (cResult[5] === subtitle) {
        let tmp12;
        if (cResult[6] === tmp9) {
          tmp12 = cResult[7];
        }
        tmp8 = tmp12;
      }
    }
    const obj4 = { experimental_useNativeText: tmp9, lineClamp: 1, children: subtitle };
    const Text = Text_Text.Text;
    const merged = Object.assign(tmp4);
    const tmp17 = authStore(Text, obj4);
    cResult[4] = tmp4;
    cResult[5] = subtitle;
    cResult[6] = tmp9;
    cResult[7] = tmp17;
    tmp12 = tmp17;
  }
  return tmp8;
}) : ((arg0) => {
  let mode;
  let obj;
  let subtitle;
  ({ mode, subtitle } = arg0);
  if (mode !== obj.UNREAD_IMPORTANT) {
    if (mode !== obj.RELEVANT) {
      if (mode !== obj.SELECTED) {
        const MUTED = tmp.MUTED;
        obj = { variant: metroImportDefault, color: "text-muted" };
      }
      let tmp4Result = null;
      if (null != subtitle) {
        const Text = Text_Text.Text;
        const obj3 = utils_PlatformUtils;
        const obj2 = { experimental_useNativeText: !obj3.isAndroid() && typeof subtitle === "string", lineClamp: 1, children: subtitle };
        !obj3.isAndroid() && typeof subtitle === "string";
        const merged = Object.assign(obj);
        tmp4Result = authStore(Text, obj2);
      }
      return tmp4Result;
    }
  }
  obj = { variant: metroImportDefault, color: "redesign-channel-name-text" };
});
let closure_14 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let disableColor;
  let isChannelLive;
  let mode;
  let source;
  let str;
  let style;
  const obj = react2;
  const cResult = obj.c(20);
  ({ disableColor, mode, source, IconComponent, style, isChannelLive } = arg0);
  const tmp4 = closure_12(mode);
  if (cResult[0] === disableColor) {
    if (cResult[1] === mode === obj.MUTED) {
      if (cResult[2] === mode === obj.SELECTED) {
        if (cResult[3] === style) {
          if (cResult[4] === tmp4.channelIcon) {
            if (cResult[5] === tmp4.channelIconMuted) {
              if (cResult[6] === tmp4.channelIconNormal) {
                if (cResult[7] === tmp4.channelIconUnread) {
                  let tmp8;
                  let tmp15Result;
                  if (cResult[8] === mode === obj.UNREAD_IMPORTANT) {
                    tmp8 = cResult[9];
                  }
                  if (cResult[10] === IconComponent) {
                    if (cResult[11] === disableColor) {
                      if (cResult[12] === tmp8) {
                        if (cResult[13] === isChannelLive) {
                          if (cResult[14] === mode === obj.MUTED) {
                            if (cResult[15] === mode === obj.SELECTED) {
                              if (cResult[16] === source) {
                                if (cResult[17] === tmp4.redesignedChannelIcon) {
                                  let tmp11;
                                  if (cResult[18] === mode === obj.UNREAD_IMPORTANT) {
                                    tmp11 = cResult[19];
                                  }
                                  return tmp11;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (null != IconComponent) {
                    const obj2 = { size: "sm", style: tmp4.redesignedChannelIcon, color: str };
                    str = "status-positive";
                    if (!isChannelLive) {
                      let str2 = "icon-muted";
                      if (mode !== obj.MUTED) {
                        let str3;
                        if (mode === obj.UNREAD_IMPORTANT) {
                          str3 = "interactive-text-active";
                        } else {
                          str3 = "channel-icon";
                        }
                        str2 = str3;
                      }
                      str = str2;
                    }
                    tmp15Result = authStore(IconComponent, obj2);
                  } else {
                    const obj3 = { disableColor, size: native.Icon.Sizes.CUSTOM, style: tmp8, source };
                    const Icon = native.Icon;
                    tmp15Result = authStore(Icon, obj3);
                  }
                  cResult[10] = IconComponent;
                  cResult[11] = disableColor;
                  cResult[12] = tmp8;
                  cResult[13] = isChannelLive;
                  cResult[14] = mode === obj.MUTED;
                  cResult[15] = mode === obj.SELECTED;
                  cResult[16] = source;
                  cResult[17] = tmp4.redesignedChannelIcon;
                  cResult[18] = mode === obj.UNREAD_IMPORTANT;
                  cResult[19] = tmp15Result;
                  tmp11 = tmp15Result;
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [tmp4.channelIcon];
  if (true !== disableColor) {
    let channelIconUnread;
    const push = items.push;
    if (mode === obj.MUTED) {
      channelIconUnread = tmp4.channelIconMuted;
    } else {
      if (mode !== obj.UNREAD_IMPORTANT) {
        if (mode !== obj.SELECTED) {
          channelIconUnread = tmp4.channelIconNormal;
        }
      }
      channelIconUnread = tmp4.channelIconUnread;
    }
    push(channelIconUnread);
  }
  if (null != style) {
    items.push(style);
  }
  cResult[0] = disableColor;
  cResult[1] = mode === obj.MUTED;
  cResult[2] = mode === obj.SELECTED;
  cResult[3] = style;
  cResult[4] = tmp4.channelIcon;
  cResult[5] = tmp4.channelIconMuted;
  cResult[6] = tmp4.channelIconNormal;
  cResult[7] = tmp4.channelIconUnread;
  cResult[8] = mode === obj.UNREAD_IMPORTANT;
  cResult[9] = items;
  tmp8 = items;
}) : ((arg0) => {
  let IconComponent;
  let disableColor;
  let isChannelLive;
  let mode;
  let obj;
  let source;
  let str;
  let style;
  let tmp11Result;
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = closure_12(mode);
  const items = [];
  const tmp4 = mode === obj.SELECTED;
  items[0] = tmp.channelIcon;
  if (true !== disableColor) {
    let channelIconUnread;
    const push = items.push;
    if (mode === obj.MUTED) {
      channelIconUnread = tmp.channelIconMuted;
    } else {
      if (mode !== obj.UNREAD_IMPORTANT) {
        if (!tmp4) {
          channelIconUnread = tmp.channelIconNormal;
        }
      }
      channelIconUnread = tmp.channelIconUnread;
    }
    push(channelIconUnread);
  }
  if (null != style) {
    items.push(style);
  }
  if (null != IconComponent) {
    const obj2 = { size: "sm", style: tmp.redesignedChannelIcon, color: str };
    str = "status-positive";
    if (!isChannelLive) {
      let str2 = "icon-muted";
      if (mode !== obj.MUTED) {
        let str3;
        if (mode === obj.UNREAD_IMPORTANT) {
          str3 = "interactive-text-active";
        } else {
          str3 = "channel-icon";
        }
        str2 = str3;
      }
      str = str2;
    }
    tmp11Result = authStore(IconComponent, obj2);
  } else {
    obj = { disableColor, size: native.Icon.Sizes.CUSTOM, style: items, source };
    const Icon = native.Icon;
    tmp11Result = authStore(Icon, obj);
  }
  return tmp11Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let mode;
  let name;
  let subtitle;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(14);
  ({ mode, name, subtitle, textStyle } = arg0);
  const tmp4 = closure_12(mode);
  if (mode !== obj.UNREAD_IMPORTANT) {
    let obj2;
    if (mode !== obj.RELEVANT) {
      if (mode === obj.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === obj.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    if (cResult[0] === tmp4.channelName) {
      let tmp7;
      if (cResult[1] === textStyle) {
        tmp7 = cResult[2];
      }
      if (cResult[3] === name) {
        if (cResult[4] === obj2) {
          let tmp8;
          if (cResult[5] === tmp7) {
            tmp8 = cResult[6];
          }
          if (cResult[7] === mode) {
            let tmp14;
            if (cResult[8] === subtitle) {
              tmp14 = cResult[9];
            }
            if (cResult[10] === tmp4.channelNameContainer) {
              if (cResult[11] === tmp8) {
                let tmp18;
                if (cResult[12] === tmp14) {
                  tmp18 = cResult[13];
                }
                return tmp18;
              }
            }
            const obj3 = { style: tmp5, children: items };
            items = [tmp8, tmp14];
            const tmp21 = unpackModuleId(View, obj3);
            cResult[10] = tmp4.channelNameContainer;
            cResult[11] = tmp8;
            cResult[12] = tmp14;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { mode, subtitle };
          const tmp17 = authStore(closure_14, obj4);
          cResult[7] = mode;
          cResult[8] = subtitle;
          cResult[9] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj5 = { experimental_useNativeText: true, lineClamp: 1, style: tmp7, children: name };
      const Text = Text_Text.Text;
      const merged = Object.assign(obj2);
      const tmp13 = authStore(Text, obj5);
      cResult[3] = name;
      cResult[4] = obj2;
      cResult[5] = tmp7;
      cResult[6] = tmp13;
      tmp8 = tmp13;
    }
    const items1 = [tmp4.channelName, textStyle];
    cResult[0] = tmp4.channelName;
    cResult[1] = textStyle;
    cResult[2] = items1;
    tmp7 = items1;
  }
  obj2 = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
}) : ((mode) => {
  let items;
  let name;
  let subtitle;
  let textStyle;
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = closure_12(mode);
  const obj = { style: tmp.channelNameContainer, children: null };
  if (mode !== obj.UNREAD_IMPORTANT) {
    let obj2;
    if (mode !== obj.RELEVANT) {
      if (mode === obj.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === obj.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: items, children: name };
    const merged = Object.assign(obj2);
    items = [tmp.channelName, textStyle];
    const items1 = [authStore(tmp5, obj3), ];
    const obj4 = { mode, subtitle };
    items1[1] = authStore(closure_14, obj4);
    obj.children = items1;
    return unpackModuleId(View, obj);
  }
  obj2 = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ALL_MESSAGES;
  let channelInfo;
  let children;
  let disableHighlightOnPress;
  let hideIcon;
  let icon;
  let items;
  let items1;
  let mode;
  let name;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let unread;
  const obj = react2;
  const cResult = obj.c(30);
  if (cResult[0] !== arg0) {
    ({ icon, name, mode, hideIcon, disableHighlightOnPress, channelInfo, children, unread } = arg0);
    const tmp15 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = channelInfo;
    cResult[2] = children;
    cResult[3] = hideIcon;
    cResult[4] = icon;
    cResult[5] = mode;
    cResult[6] = name;
    cResult[7] = tmp15;
    cResult[8] = disableHighlightOnPress;
    cResult[9] = unread;
    tmp12 = unread;
    tmp11 = disableHighlightOnPress;
    tmp10 = tmp15;
    tmp9 = name;
    tmp8 = mode;
    tmp7 = icon;
    tmp6 = hideIcon;
    tmp5 = children;
    tmp4 = channelInfo;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  const tmp18 = closure_12(tmp8);
  let rowSelected = tmp8 === obj.SELECTED;
  const tmp20 = obj;
  if (rowSelected) {
    rowSelected = tmp18.rowSelected;
  }
  if (cResult[10] === tmp18.channel) {
    if (cResult[11] === (tmp6 && tmp18.rowPaddingNoIcon)) {
      let tmp21;
      if (cResult[12] === rowSelected) {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp6) {
        if (cResult[15] === tmp8) {
          if (cResult[16] === tmp18.unreadIndicator) {
            let tmp22;
            if (cResult[17] === (undefined !== tmp12 && tmp12)) {
              tmp22 = cResult[18];
            }
            if (cResult[19] === tmp4) {
              if (cResult[20] === tmp9) {
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp22) {
                    let tmp30;
                    let AnimatedPressableHighlight;
                    if (cResult[23] === (!tmp6 && tmp7)) {
                      tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp30) {
                      if (cResult[26] === tmp5) {
                        if (cResult[27] === (undefined !== tmp11 && tmp11)) {
                          let tmp34;
                          if (cResult[28] === tmp10) {
                            tmp34 = cResult[29];
                          }
                          return tmp34;
                        }
                      }
                    }
                    if (undefined !== tmp11 && tmp11) {
                      AnimatedPressableHighlight = TouchableBackgroundDefault;
                    } else {
                      AnimatedPressableHighlight = native2.AnimatedPressableHighlight;
                    }
                    const obj2 = { children: items };
                    const merged = Object.assign(tmp10);
                    items = [tmp30, tmp5];
                    const tmp35Result = unpackModuleId(AnimatedPressableHighlight, obj2);
                    cResult[25] = tmp30;
                    cResult[26] = tmp5;
                    cResult[27] = undefined !== tmp11 && tmp11;
                    cResult[28] = tmp10;
                    cResult[29] = tmp35Result;
                    tmp34 = tmp35Result;
                  }
                }
              }
            }
            const obj3 = { style: tmp21, children: items1 };
            items1 = [tmp22, !tmp6 && tmp7, tmp9, tmp4];
            const tmp33 = unpackModuleId(View, obj3);
            cResult[19] = tmp4;
            cResult[20] = tmp9;
            cResult[21] = tmp21;
            cResult[22] = tmp22;
            cResult[23] = !tmp6 && tmp7;
            cResult[24] = tmp33;
            tmp30 = tmp33;
          }
        }
      }
      let tmp24Result = !tmp6;
      if (tmp24Result) {
        const obj4 = { style: tmp18.unreadIndicator, unread: undefined !== tmp12 && tmp12, resolvedUnreadSetting: ALL_MESSAGES };
        const tmp26 = StaticChannelIndicatorDefault;
        if (tmp8 === tmp20.UNREAD_LESS_IMPORTANT) {
          ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
        } else {
          ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
        }
        tmp24Result = authStore(tmp26, obj4);
      }
      cResult[14] = tmp6;
      cResult[15] = tmp8;
      cResult[16] = tmp18.unreadIndicator;
      cResult[17] = undefined !== tmp12 && tmp12;
      cResult[18] = tmp24Result;
      tmp22 = tmp24Result;
    }
  }
  const items2 = [tmp18.channel, tmp6 && tmp18.rowPaddingNoIcon, rowSelected];
  cResult[10] = tmp18.channel;
  cResult[11] = tmp6 && tmp18.rowPaddingNoIcon;
  cResult[12] = rowSelected;
  cResult[13] = items2;
  tmp21 = items2;
}) : ((mode) => {
  let ALL_MESSAGES;
  let AnimatedPressableHighlight;
  let channel;
  let channelInfo;
  let children;
  let icon;
  let items1;
  let items2;
  let name;
  let unread;
  mode = mode.mode;
  const hideIcon = mode.hideIcon;
  let flag = mode.disableHighlightOnPress;
  ({ icon, name } = mode);
  if (flag === undefined) {
    flag = false;
  }
  ({ unread, channelInfo, children } = mode);
  if (unread === undefined) {
    unread = false;
  }
  const merged = Object.assign(mode, Object.assign({ icon: 0, name: 0, mode: 0, hideIcon: 0, disableHighlightOnPress: 0, channelInfo: 0, children: 0, unread: 0 }));
  const tmp2 = closure_12(mode);
  dependencyMap = tmp2;
  let items = [hideIcon, mode, tmp2];
  const obj = {
    style: react.useMemo(() => {
      const items = [channel.channel, hideIcon && channel.rowPaddingNoIcon, mode === obj.SELECTED && channel.rowSelected];
      return items;
    }, items),
    children: items1
  };
  let tmp6Result = !hideIcon;
  if (tmp6Result) {
    const obj2 = { style: tmp2.unreadIndicator, unread, resolvedUnreadSetting: ALL_MESSAGES };
    const tmp9 = hideIcon(12032);
    if (mode === obj.UNREAD_LESS_IMPORTANT) {
      ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    tmp6Result = closure_10(tmp9, obj2);
  }
  items1 = [tmp6Result, !hideIcon && icon, name, channelInfo];
  const tmp3Result = closure_11(View, obj);
  if (flag) {
    AnimatedPressableHighlight = hideIcon(12033);
  } else {
    AnimatedPressableHighlight = mode(8602).AnimatedPressableHighlight;
  }
  const obj3 = { children: items2 };
  const merged1 = Object.assign(merged);
  items2 = [tmp3Result, children];
  return closure_11(AnimatedPressableHighlight, obj3);
});
function useChannelNameTextProps(channelMode) {
  let obj;
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode === obj.UNREAD_LESS_IMPORTANT) {
        obj = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (channelMode === obj.MUTED) {
        obj = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj = channelMode === tmp.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
}
function getChannelSubtitleTextProps(channelMode) {
  let obj;
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode !== obj.SELECTED) {
        const MUTED = tmp.MUTED;
        obj = { variant: metroImportDefault, color: "text-muted" };
      }
      return obj;
    }
  }
  obj = { variant: metroImportDefault, color: "redesign-channel-name-text" };
}
const result = size.fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default tmp7;
export { ChannelModes };
export const BaseChannelSubtitle = tmp4;
export const BaseChannelIcon = tmp5;
export { useChannelNameTextProps };
export { getChannelSubtitleTextProps };
export const BaseChannelName = tmp6;