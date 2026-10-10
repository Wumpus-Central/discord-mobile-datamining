// === Module 12085: BaseChannelItem ===

// Module 12085 (BaseChannelItem)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import native2 from "native" /* 8541 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 12086 */;
import TouchableBackgroundDefault from "TouchableBackground" /* 12087 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const utils_PlatformUtils = Text(1383);
const Text_Text = Text(5088);
require = fn;
let closure_3 = ["icon", "name", "mode", "hideIcon", "disableHighlightOnPress", "channelInfo", "children", "unread"];
const View = fn(17).View;
const RedesignChannelListConstants = fn(11758);
({ CHANNEL_SUBTITLE_TEXT_VARIANT: closure_7, CHANNEL_TITLE_LINE_HEIGHT: closure_8 } = RedesignChannelListConstants);
const UnreadSetting = fn(5967).UnreadSetting;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { rowPaddingNoIcon: { paddingHorizontal: 6 }, rowSelected: null, unreadIndicator: null, channelIcon: null, redesignedChannelIcon: null, channelIconNormal: null, channelIconUnread: null, channelIconMuted: null, channel: null, channelNameContainer: null, channelName: null };
  obj2 = { borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.rowSelected = obj2;
  obj.unreadIndicator = { left: -nativeDefault.space.PX_8 };
  let num = 1;
  let num2 = 1;
  if (arg0 === obj2.MUTED) {
    num2 = 0.5;
  }
  obj.channelIcon = { width: 16, height: 16, marginRight: 8, opacity: num2 };
  let num3 = num;
  if (arg0 === obj2.MUTED) {
    num3 = 0.5;
  }
  obj.redesignedChannelIcon = { marginRight: 8, opacity: num3 };
  const obj3 = { left: -nativeDefault.space.PX_8 };
  obj.channelIconNormal = { tintColor: nativeDefault.colors.CHANNEL_ICON };
  const obj4 = { tintColor: nativeDefault.colors.CHANNEL_ICON };
  obj.channelIconUnread = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.channelIconMuted = { tintColor: nativeDefault.colors.ICON_MUTED };
  obj.channel = { paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row", alignItems: "center", position: "relative" };
  obj.channelNameContainer = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" };
  const obj7 = { flexGrow: 1, textAlign: "left", lineHeight, opacity: null };
  if (arg0 === obj2.MUTED) {
    num = 0.5;
  }
  obj7.opacity = num;
  obj.channelName = obj7;
  return obj;
});
let obj2 = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseChannelSubtitle(arg0) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(8);
  ({ mode, subtitle } = arg0);
  if (cResult[0] !== mode) {
    if (mode !== obj2.UNREAD_IMPORTANT) {
      if (mode !== tmp4.RELEVANT) {
        if (mode !== tmp4.SELECTED) {
          const MUTED = tmp4.MUTED;
          obj2 = { variant, color: "text-muted" };
        }
        cResult[0] = mode;
        cResult[1] = obj2;
      }
    }
    const obj3 = { variant, color: "redesign-channel-name-text" };
    obj2 = obj3;
  } else if (null == subtitle) {
    return null;
  } else {
    if (cResult[2] !== subtitle) {
      const isAndroidResult = utils_PlatformUtils.isAndroid();
      let tmp11 = !isAndroidResult;
      if (!isAndroidResult) {
        tmp11 = typeof subtitle === "string";
      }
      cResult[2] = subtitle;
      cResult[3] = tmp11;
      let tmp9 = tmp11;
      const TextResult = utils_PlatformUtils;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp3) {
      if (cResult[5] === subtitle) {
      }
    }
    Text = Text_Text.Text;
    const obj4 = { experimental_useNativeText: tmp9, lineClamp: 1 };
    const merged = Object.assign(tmp3);
    obj4.children = subtitle;
    tmp = collapsed(Text, obj4);
    cResult[4] = tmp3;
    cResult[5] = subtitle;
    cResult[6] = tmp9;
    cResult[7] = tmp;
  }
}) : (function BaseChannelSubtitle(arg0) {
  ({ mode, subtitle } = arg0);
  if (mode !== obj2.UNREAD_IMPORTANT) {
    if (mode !== tmp.RELEVANT) {
      if (mode !== tmp.SELECTED) {
        const MUTED = tmp.MUTED;
        let obj = { variant, color: "text-muted" };
      }
      let tmp4Result = null;
      if (null != subtitle) {
        const isAndroidResult = utils_PlatformUtils.isAndroid();
        let tmp8 = !isAndroidResult;
        if (!isAndroidResult) {
          tmp8 = typeof subtitle === "string";
        }
        obj2 = { experimental_useNativeText: tmp8, lineClamp: 1 };
        const merged = Object.assign(obj);
        obj2.children = subtitle;
        tmp4Result = collapsed(Text_Text.Text, obj2);
      }
      return tmp4Result;
    }
  }
  obj = { variant, color: "redesign-channel-name-text" };
  const obj4 = { variant, color: "redesign-channel-name-text" };
});
let closure_14 = tmp4;
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseChannelIcon(arg0) {
  const cResult = c.c(20);
  ({ disableColor, mode, source, IconComponent, style, isChannelLive } = arg0);
  let redesignedChannelIcon = closure_12(mode);
  if (cResult[0] === disableColor) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp6) {
        if (cResult[3] === style) {
          if (cResult[4] === redesignedChannelIcon.channelIcon) {
            if (cResult[5] === redesignedChannelIcon.channelIconMuted) {
              if (cResult[6] === redesignedChannelIcon.channelIconNormal) {
                if (cResult[7] === redesignedChannelIcon.channelIconUnread) {
                  if (cResult[8] === tmp5) {
                    let tmp7 = cResult[9];
                  }
                  if (cResult[10] === IconComponent) {
                    if (cResult[11] === disableColor) {
                      if (cResult[12] === tmp7) {
                        if (cResult[13] === isChannelLive) {
                          if (cResult[14] === tmp4) {
                            if (cResult[15] === tmp6) {
                              if (cResult[16] === source) {
                                if (cResult[17] === redesignedChannelIcon.redesignedChannelIcon) {
                                  if (cResult[18] === tmp5) {
                                    return cResult[19];
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (null != IconComponent) {
                    obj2 = { size: "sm", style: redesignedChannelIcon.redesignedChannelIcon, color: null };
                    let str = "status-positive";
                    if (!isChannelLive) {
                      let str2 = "icon-muted";
                      if (!tmp4) {
                        if (tmp5) {
                          let str3 = "interactive-text-active";
                        } else {
                          str3 = "channel-icon";
                        }
                        str2 = str3;
                      }
                      str = str2;
                    }
                    obj2.color = str;
                    let tmp14Result = collapsed(IconComponent, obj2);
                  } else {
                    const obj3 = { disableColor, size: native.Icon.Sizes.CUSTOM, style: tmp7, source };
                    tmp14Result = collapsed(native.Icon, obj3);
                  }
                  cResult[10] = IconComponent;
                  cResult[11] = disableColor;
                  cResult[12] = tmp7;
                  cResult[13] = isChannelLive;
                  cResult[14] = tmp4;
                  cResult[15] = tmp6;
                  cResult[16] = source;
                  redesignedChannelIcon = redesignedChannelIcon.redesignedChannelIcon;
                  cResult[17] = redesignedChannelIcon;
                  cResult[18] = tmp5;
                  cResult[19] = tmp14Result;
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [redesignedChannelIcon.channelIcon];
  if (true === disableColor) {
    if (null != style) {
      items.push(style);
    }
    cResult[0] = disableColor;
    cResult[1] = tmp4;
    cResult[2] = tmp6;
    cResult[3] = style;
    cResult[4] = redesignedChannelIcon.channelIcon;
    cResult[5] = redesignedChannelIcon.channelIconMuted;
    cResult[6] = redesignedChannelIcon.channelIconNormal;
    cResult[7] = redesignedChannelIcon.channelIconUnread;
    cResult[8] = tmp5;
    cResult[9] = items;
    tmp7 = items;
  } else {
    if (tmp4) {
      let channelIconUnread = redesignedChannelIcon.channelIconMuted;
    } else {
      if (!tmp5) {
        if (!tmp6) {
          channelIconUnread = redesignedChannelIcon.channelIconNormal;
        }
      }
      channelIconUnread = redesignedChannelIcon.channelIconUnread;
    }
    items.push(channelIconUnread);
  }
}) : (function BaseChannelIcon(arg0) {
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = closure_12(mode);
  const items = [tmp.channelIcon];
  if (true === disableColor) {
    if (null != style) {
      items.push(style);
    }
    if (null != IconComponent) {
      obj2 = { size: "sm", style: tmp.redesignedChannelIcon, color: null };
      let str = "status-positive";
      if (!isChannelLive) {
        let str2 = "icon-muted";
        if (!tmp2) {
          if (tmp3) {
            let str3 = "interactive-text-active";
          } else {
            str3 = "channel-icon";
          }
          str2 = str3;
        }
        str = str2;
      }
      obj2.color = str;
      let tmp12Result = collapsed(IconComponent, obj2);
    } else {
      const obj = { disableColor, size: native.Icon.Sizes.CUSTOM, style: items, source };
      tmp12Result = collapsed(native.Icon, obj);
    }
    return tmp12Result;
  } else {
    if (tmp2) {
      let channelIconUnread = tmp.channelIconMuted;
    } else {
      if (!tmp3) {
        if (!tmp4) {
          channelIconUnread = tmp.channelIconNormal;
        }
      }
      channelIconUnread = tmp.channelIconUnread;
    }
    items.push(channelIconUnread);
  }
  tmp4 = mode === obj2.SELECTED;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseChannelName(arg0) {
  const cResult = c.c(14);
  ({ mode, name, subtitle, textStyle } = arg0);
  const tmp4 = closure_12(mode);
  if (mode !== obj2.UNREAD_IMPORTANT) {
    if (mode !== tmp6.RELEVANT) {
      if (mode === tmp6.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === tmp6.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    if (cResult[0] === tmp4.channelName) {
      if (cResult[1] === textStyle) {
        let tmp7 = cResult[2];
      }
      if (cResult[3] === name) {
        if (cResult[4] === obj2) {
          if (cResult[5] === tmp7) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] === mode) {
            if (cResult[8] === subtitle) {
              let tmp14 = cResult[9];
            }
            if (cResult[10] === tmp4.channelNameContainer) {
              if (cResult[11] === tmp8) {
                if (cResult[12] === tmp14) {
                  let tmp18 = cResult[13];
                }
                return tmp18;
              }
            }
            const obj3 = { style: tmp5, children: null };
            const items = [tmp8, tmp14];
            obj3.children = items;
            const tmp21 = closure_1_11(View, obj3);
            cResult[10] = tmp4.channelNameContainer;
            cResult[11] = tmp8;
            cResult[12] = tmp14;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { mode, subtitle };
          const tmp17 = collapsed(closure_14, obj4);
          cResult[7] = mode;
          cResult[8] = subtitle;
          cResult[9] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj5 = { experimental_useNativeText: true };
      const merged = Object.assign(obj2);
      obj5.lineClamp = 1;
      obj5.style = tmp7;
      obj5.children = name;
      const tmp13 = collapsed(Text_Text.Text, obj5);
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
}) : (function BaseChannelName(mode) {
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = closure_12(mode);
  const obj = { style: tmp.channelNameContainer, children: null };
  if (mode !== obj2.UNREAD_IMPORTANT) {
    if (mode !== tmp6.RELEVANT) {
      if (mode === tmp6.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === tmp6.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    const obj3 = { experimental_useNativeText: true };
    const merged = Object.assign(obj2);
    obj3.lineClamp = 1;
    const items = [tmp.channelName, textStyle];
    obj3.style = items;
    obj3.children = name;
    const items1 = [collapsed(tmp5, obj3), ];
    const obj4 = { mode, subtitle };
    items1[1] = collapsed(closure_14, obj4);
    obj.children = items1;
    return closure_1_11(View, obj);
  }
  obj2 = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
});
function useChannelNameTextProps(channelMode) {
  if (channelMode !== obj2.UNREAD_IMPORTANT) {
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
}
function getChannelSubtitleTextProps(channelMode) {
  if (channelMode !== obj2.UNREAD_IMPORTANT) {
    if (channelMode !== tmp.RELEVANT) {
      if (channelMode !== tmp.SELECTED) {
        const MUTED = tmp.MUTED;
        let obj = { variant, color: "text-muted" };
      }
      return obj;
    }
  }
  obj2 = { variant, color: "redesign-channel-name-text" };
  obj = obj2;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BaseChannelItem(arg0) {
  let tmp34Result = dependencyMap;
  const cResult = c.c(30);
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
    let tmp10 = tmp15;
    let tmp9 = name;
    let tmp8 = mode;
    let tmp7 = icon;
    let tmp6 = hideIcon;
    let tmp5 = children;
    let tmp4 = channelInfo;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp18 = closure_12(tmp8);
  let rowPaddingNoIcon = tmp6;
  if (tmp6) {
    rowPaddingNoIcon = tmp18.rowPaddingNoIcon;
  }
  let rowSelected = tmp8 === obj2.SELECTED;
  if (rowSelected) {
    rowSelected = tmp18.rowSelected;
  }
  if (cResult[10] === tmp18.channel) {
    if (cResult[11] === rowPaddingNoIcon) {
      if (cResult[12] === rowSelected) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] === tmp6) {
        if (cResult[15] === tmp8) {
          if (cResult[16] === tmp18.unreadIndicator) {
            if (cResult[17] === tmp17) {
              let tmp21 = cResult[18];
            }
            let tmp29 = !tmp6;
            if (!tmp6) {
              tmp29 = tmp7;
            }
            if (cResult[19] === tmp4) {
              if (cResult[20] === tmp9) {
                if (cResult[21] === tmp20) {
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp29) {
                      let tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp30) {
                      if (cResult[26] === tmp5) {
                        if (cResult[27] === tmp16) {
                          if (cResult[28] === tmp10) {
                            return cResult[29];
                          }
                        }
                      }
                    }
                    if (tmp16) {
                      let AnimatedPressableHighlight = TouchableBackgroundDefault;
                    } else {
                      AnimatedPressableHighlight = native2.AnimatedPressableHighlight;
                    }
                    obj2 = {};
                    const merged = Object.assign(tmp10);
                    const items = [tmp30, tmp5];
                    obj2.children = items;
                    tmp34Result = closure_1_11(AnimatedPressableHighlight, obj2);
                    cResult[25] = tmp30;
                    cResult[26] = tmp5;
                    cResult[27] = tmp16;
                    cResult[28] = tmp10;
                    cResult[29] = tmp34Result;
                  }
                }
              }
            }
            const obj3 = { style: tmp20, children: null };
            const items1 = [tmp21, tmp29, tmp9, tmp4];
            obj3.children = items1;
            const tmp33 = closure_1_11(View, obj3);
            cResult[19] = tmp4;
            cResult[20] = tmp9;
            cResult[21] = tmp20;
            cResult[22] = tmp21;
            cResult[23] = tmp29;
            cResult[24] = tmp33;
            tmp30 = tmp33;
          }
        }
      }
      if (tmp6) {
        cResult[14] = tmp6;
        cResult[15] = tmp8;
        cResult[16] = tmp18.unreadIndicator;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        tmp21 = tmp22;
      } else {
        const obj4 = { style: tmp18.unreadIndicator, unread: tmp17, resolvedUnreadSetting: null };
        if (tmp8 === tmp19.UNREAD_LESS_IMPORTANT) {
          let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
        } else {
          ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
        }
        obj4.resolvedUnreadSetting = ALL_MESSAGES;
        collapsed(StaticChannelIndicatorDefault, obj4);
      }
    }
  }
  const items2 = [tmp18.channel, rowPaddingNoIcon, rowSelected];
  cResult[10] = tmp18.channel;
  cResult[11] = rowPaddingNoIcon;
  cResult[12] = rowSelected;
  cResult[13] = items2;
  tmp20 = items2;
  tmp19 = obj2;
}) : (function BaseChannelItem(mode) {
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
    style: noop.useMemo(() => {
      const items = [channel.channel, , ];
      let rowPaddingNoIcon = hideIcon;
      if (hideIcon) {
        rowPaddingNoIcon = channel.rowPaddingNoIcon;
      }
      items[1] = rowPaddingNoIcon;
      items[2] = mode === obj2.SELECTED && channel.rowSelected;
      return items;
    }, items),
    children: null
  };
  if (hideIcon) {
    const items1 = [tmp5, , , ];
    let tmp14 = !hideIcon;
    if (!hideIcon) {
      tmp14 = icon;
    }
    items1[1] = tmp14;
    items1[2] = name;
    items1[3] = channelInfo;
    obj.children = items1;
    if (flag) {
      let AnimatedPressableHighlight = hideIcon(12087);
    } else {
      AnimatedPressableHighlight = mode(8541).AnimatedPressableHighlight;
    }
    obj2 = {};
    const merged1 = Object.assign(merged);
    const items2 = [closure_11(tmp4, obj), children];
    obj2.children = items2;
    return closure_11(AnimatedPressableHighlight, obj2);
  } else {
    const obj3 = { style: tmp2.unreadIndicator, unread, resolvedUnreadSetting: null };
    if (mode === obj2.UNREAD_LESS_IMPORTANT) {
      let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    obj3.resolvedUnreadSetting = ALL_MESSAGES;
    closure_10(hideIcon(12086), obj3);
    const tmp9 = hideIcon(12086);
  }
});
export const ChannelModes = obj2;
export const BaseChannelSubtitle = tmp4;
export const BaseChannelIcon = tmp5;
export { useChannelNameTextProps };
export { getChannelSubtitleTextProps };
export const BaseChannelName = tmp6;