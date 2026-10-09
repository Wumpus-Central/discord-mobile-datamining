// === Module 12569: MessageNotificationHeader ===

// Module 12569 (MessageNotificationHeader)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import Text_Text from "Text/Text" /* 5087 */;
import useChannelName from "useChannelName" /* 5418 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8142 */;
import ChatIcon2 from "ChatIcon" /* 8182 */;
import ThreadIcon2 from "ThreadIcon" /* 8184 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function getLocationLabel(arg0) {
  ({ channel, parentChannel, guild } = arg0);
  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  const type = channel.type;
  if (ChannelTypes.ChannelTypes.GROUP_DM === type) {
    return channelName;
  } else {
    if (ChannelTypes.ChannelTypes.GUILD_FORUM !== type) {
      if (ChannelTypes.ChannelTypes.GUILD_MEDIA !== type) {
        if (ChannelTypes.ChannelTypes.GUILD_TEXT !== type) {
          if (ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
            if (ChannelTypes.ChannelTypes.GUILD_APP !== type) {
              if (ChannelTypes.ChannelTypes.GUILD_VOICE !== type) {
                if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE !== type) {
                  if (ChannelTypes.ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
                    if (ChannelTypes.ChannelTypes.PUBLIC_THREAD !== type) {
                      if (ChannelTypes.ChannelTypes.PRIVATE_THREAD !== type) {
                        if (ChannelTypes.ChannelTypes.MEDIA_THREAD !== type) {
                          if (ChannelTypes.ChannelTypes.DM !== type) {
                            if (ChannelTypes.ChannelTypes.GUILD_CATEGORY !== type) {
                              if (ChannelTypes.ChannelTypes.GUILD_STORE !== type) {
                                if (ChannelTypes.ChannelTypes.GUILD_DIRECTORY !== type) {
                                  if (ChannelTypes.ChannelTypes.GUILD_SPACE !== type) {
                                    const UNKNOWN = ChannelTypes.ChannelTypes.UNKNOWN;
                                  }
                                }
                              }
                            }
                          }
                          return null;
                        }
                      }
                    }
                  }
                  let channelName1 = null;
                  if (null != parentChannel) {
                    channelName1 = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore);
                    const tmpResult = useChannelName;
                  }
                  if (null != channelName1) {
                    const _HermesInternal2 = HermesInternal;
                    let combined = "" + channelName + ", " + channelName1;
                  } else {
                    combined = channelName;
                    if (null != guild) {
                      const _HermesInternal = HermesInternal;
                      combined = "" + channelName + ", " + guild.name;
                    }
                  }
                  return combined;
                }
              }
            }
          }
        }
      }
    }
    let combined1 = null;
    if (null != guild) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + channelName + ", " + guild.name;
    }
    return combined1;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, headerContent: { flex: 1, flexDirection: "row", alignItems: "center" }, primaryText: { flexShrink: 1, marginRight: 2 }, secondaryTextContainer: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" }, separator: { marginHorizontal: 2 }, icon: { width: 16, height: 16 }, secondaryText: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function LocationText(arg0) {
  const cResult = c.c(20);
  ({ channel, parentChannel, author, location: _location, color } = arg0);
  const tmp4 = closure_9();
  if (color == null) {
    color = "text-muted";
  }
  if (cResult[0] === channel) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp4.icon) {
        if (cResult[5] === color) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === author) {
          if (cResult[8] === tmp4.separator) {
            if (cResult[9] === color) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] === _location) {
              if (cResult[12] === tmp4.secondaryText) {
                if (cResult[13] === color) {
                  let tmp13 = cResult[14];
                }
                if (cResult[15] === tmp7) {
                  if (cResult[16] === tmp4.secondaryTextContainer) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp13) {
                        let tmp16 = cResult[19];
                      }
                      return tmp16;
                    }
                  }
                }
                const obj2 = { style: tmp4.secondaryTextContainer, children: null };
                const items = [tmp10, tmp7, tmp13];
                obj2.children = items;
                const tmp19 = closure_1_8(View, obj2);
                cResult[15] = tmp7;
                cResult[16] = tmp4.secondaryTextContainer;
                cResult[17] = tmp10;
                cResult[18] = tmp13;
                cResult[19] = tmp19;
                tmp16 = tmp19;
              }
            }
            const obj3 = { variant: "text-md/semibold", color, lineClamp: 1, style: tmp4.secondaryText, children: _location };
            const tmp15 = React5(Text_Text.Text, obj3);
            cResult[11] = _location;
            cResult[12] = tmp4.secondaryText;
            cResult[13] = color;
            cResult[14] = tmp15;
            tmp13 = tmp15;
          }
        }
        let tmp11 = null != author;
        if (tmp11) {
          const obj4 = { variant: "text-md/bold", color, maxFontSizeMultiplier: 1.75, style: tmp4.separator, children: "\u00B7" };
          tmp11 = React5(Text_Text.Text, obj4);
        }
        cResult[7] = author;
        cResult[8] = tmp4.separator;
        cResult[9] = color;
        cResult[10] = tmp11;
        tmp10 = tmp11;
      }
    }
    let element = null;
    if (null != tmp5) {
      const obj5 = { color, style: tmp4.icon };
      element = <tmp5 color={color} style={tmp4.icon} />;
    }
    cResult[3] = tmp5;
    cResult[4] = tmp4.icon;
    cResult[5] = color;
    cResult[6] = element;
    tmp7 = element;
  }
  const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
  if (PRIVATE_CHANNEL.has(channel.type)) {
    cResult[0] = channel;
    cResult[1] = parentChannel;
    cResult[2] = undefined;
  } else {
    if (channel.type !== ChannelTypes.ChannelTypes.PUBLIC_THREAD) {
      const simpleChannelIconComponent = utils_ChannelUtils.getSimpleChannelIconComponent(channel);
      const tmpResult = utils_ChannelUtils;
    }
    if (null == parentChannel) {
      const ThreadIcon = ThreadIcon2.ThreadIcon;
    }
    const ChatIcon = ChatIcon2.ChatIcon;
  }
}) : (function LocationText(channel) {
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str;
  ({ author, location: _location } = channel);
  const tmp = closure_9();
  noop = tmp;
  if (str == null) {
    str = "text-muted";
  }
  const items = [channel, parentChannel, tmp.icon, str];
  let obj = { style: tmp.secondaryTextContainer, children: null };
  let tmp5 = null != author;
  const memo = noop.useMemo(() => {
    let tmp3Result2 = dependencyMap;
    const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
    if (PRIVATE_CHANNEL.has(channel.type)) {
      let element = null;
      if (null != undefined) {
        const obj = { color: str, style: icon.icon };
        element = noop.createElement(undefined, { color: str, style: icon.icon });
      }
      return element;
    } else {
      if (channel.type !== ChannelTypes.ChannelTypes.PUBLIC_THREAD) {
        const simpleChannelIconComponent = utils_ChannelUtils.getSimpleChannelIconComponent(channel);
        const tmp3Result = utils_ChannelUtils;
      }
      if (null == parentChannel) {
        const ThreadIcon = ThreadIcon2.ThreadIcon;
      }
      tmp3Result2 = ChatIcon2;
      const ChatIcon = tmp3Result2.ChatIcon;
    }
  }, items);
  if (tmp5) {
    const obj2 = { variant: "text-md/bold", color: str, maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    tmp5 = closure_7(channel(parentChannel[10]).Text, obj2);
  }
  const items1 = [tmp5, memo, closure_7(channel(parentChannel[10]).Text, { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location })];
  obj.children = items1;
  return closure_8(str, obj);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SimpleNotificationHeader(arg0) {
  const cResult = c.c(15);
  ({ text, secondaryText, labelStyle } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === labelStyle) {
    if (cResult[1] === tmp4.primaryText) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === text) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === secondaryText) {
        if (cResult[7] === tmp4.secondaryText) {
          if (cResult[8] === tmp4.secondaryTextContainer) {
            if (cResult[9] === tmp4.separator) {
              let tmp9 = cResult[10];
            }
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp9) {
                  let tmp15 = cResult[14];
                }
                return tmp15;
              }
            }
            const obj2 = { style: tmp4.container, children: null };
            const items = [tmp6, tmp9];
            obj2.children = items;
            const tmp18 = closure_1_8(View, obj2);
            cResult[11] = tmp4.container;
            cResult[12] = tmp6;
            cResult[13] = tmp9;
            cResult[14] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      let tmp11 = null != secondaryText;
      if (tmp11) {
        const obj3 = { style: tmp4.secondaryTextContainer, children: null };
        const obj4 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp4.separator, children: "\u00B7" };
        const items1 = [React5(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp4.secondaryText, children: secondaryText };
        items1[1] = React5(Text_Text.Text, obj5);
        obj3.children = items1;
        tmp11 = closure_1_8(View, obj3);
      }
      cResult[6] = secondaryText;
      cResult[7] = tmp4.secondaryText;
      cResult[8] = tmp4.secondaryTextContainer;
      cResult[9] = tmp4.separator;
      cResult[10] = tmp11;
      tmp9 = tmp11;
    }
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp5, children: text };
    const tmp8 = React5(Text_Text.Text, obj6);
    cResult[3] = tmp5;
    cResult[4] = text;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items2 = [tmp4.primaryText, labelStyle];
  cResult[0] = labelStyle;
  cResult[1] = tmp4.primaryText;
  cResult[2] = items2;
  tmp5 = items2;
}) : (function SimpleNotificationHeader(secondaryText) {
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = closure_9();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: text };
  const items = [tmp.primaryText, labelStyle];
  obj2.style = items;
  const items1 = [React5(Text_Text.Text, obj2), ];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    const obj3 = { style: tmp.secondaryTextContainer, children: null };
    const obj4 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    const items2 = [React5(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.secondaryText, children: secondaryText };
    items2[1] = React5(Text_Text.Text, obj5);
    obj3.children = items2;
    tmp2Result = closure_1_8(View, obj3);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return closure_1_8(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessageNotificationHeader(arg0) {
  const cResult = c.c(25);
  ({ channel, parentChannel, guild, author, locationTextColor } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (author != null) {
    const colorString = author.colorString;
  }
  let tmp9;
  if ("username" === stateFromStores) {
    tmp9 = colorString;
  }
  if (cResult[2] !== tmp9) {
    let tmp11;
    if (null != tmp9) {
      const obj2 = { color: tmp9 };
      tmp11 = obj2;
    }
    cResult[2] = tmp9;
    cResult[3] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === channel) {
    if (cResult[5] === guild) {
      if (cResult[6] === parentChannel) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] === author) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp4.primaryText) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === author) {
            if (cResult[13] === channel) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === locationTextColor) {
                  if (cResult[16] === parentChannel) {
                    let tmp17 = cResult[17];
                  }
                  if (cResult[18] === tmp4.headerContent) {
                    if (cResult[19] === tmp14) {
                      if (cResult[20] === tmp17) {
                        let tmp21 = cResult[21];
                      }
                      if (cResult[22] === tmp4.container) {
                        if (cResult[23] === tmp21) {
                          let tmp25 = cResult[24];
                        }
                        return tmp25;
                      }
                      const obj3 = { style: tmp4.container, children: tmp21 };
                      const tmp28 = React5(View, obj3);
                      cResult[22] = tmp4.container;
                      cResult[23] = tmp21;
                      cResult[24] = tmp28;
                      tmp25 = tmp28;
                    }
                  }
                  const obj4 = { style: tmp4.headerContent, children: null };
                  const items1 = [tmp14, tmp17];
                  obj4.children = items1;
                  const tmp24 = closure_1_8(View, obj4);
                  cResult[18] = tmp4.headerContent;
                  cResult[19] = tmp14;
                  cResult[20] = tmp17;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
          }
          let tmp18 = null != tmp12;
          if (tmp18) {
            const obj5 = { location: tmp12, channel, parentChannel, author, color: locationTextColor };
            tmp18 = React5(closure_11, obj5);
          }
          cResult[12] = author;
          cResult[13] = channel;
          cResult[14] = tmp12;
          cResult[15] = locationTextColor;
          cResult[16] = parentChannel;
          cResult[17] = tmp18;
          tmp17 = tmp18;
        }
      }
      let tmp15 = null != author;
      if (tmp15) {
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        const items2 = [tmp4.primaryText, tmp10];
        obj6.style = items2;
        obj6.children = author.nick;
        tmp15 = React5(Text_Text.Text, obj6);
      }
      cResult[8] = author;
      cResult[9] = tmp10;
      cResult[10] = tmp4.primaryText;
      cResult[11] = tmp15;
      tmp14 = tmp15;
    }
  }
  const tmp13 = getLocationLabel({ channel, parentChannel, guild });
  cResult[4] = channel;
  cResult[5] = guild;
  cResult[6] = parentChannel;
  cResult[7] = tmp13;
  tmp12 = tmp13;
  const tmpResult = initialize;
}) : (function MessageNotificationHeader(arg0) {
  ({ channel, parentChannel, author } = arg0);
  ({ guild, locationTextColor } = arg0);
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  if (author != null) {
    const colorString = author.colorString;
  }
  let tmp5;
  if ("username" === stateFromStores) {
    tmp5 = colorString;
  }
  if (null != tmp5) {
    const obj2 = { color: tmp5 };
    const tmp6 = obj2;
  }
  const tmp7 = getLocationLabel({ channel, parentChannel, guild });
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.headerContent, children: null };
  let tmp8Result = null != author;
  if (tmp8Result) {
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    const items1 = [tmp.primaryText, tmp6];
    obj5.style = items1;
    obj5.children = author.nick;
    tmp8Result = React5(Text_Text.Text, obj5);
  }
  const items2 = [tmp8Result, ];
  let tmp8Result2 = null != tmp7;
  if (tmp8Result2) {
    const obj6 = { location: tmp7, channel, parentChannel, author, color: locationTextColor };
    tmp8Result2 = React5(closure_11, obj6);
  }
  items2[1] = tmp8Result2;
  obj4.children = items2;
  obj3.children = closure_1_8(View, obj4);
  return React5(View, obj3);
});
export const SimpleNotificationHeader = tmp3;