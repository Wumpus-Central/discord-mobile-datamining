// === Module 12533: MessageNotificationHeader ===

// Module 12533 (MessageNotificationHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelName from "useChannelName" /* 5049 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import ChatIcon from "ChatIcon" /* 5862 */;
import ThreadIcon2 from "ThreadIcon" /* 5864 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
function getLocationLabel(arg0) {
  let channel;
  let guild;
  let parentChannel;
  ({ channel, parentChannel, guild } = arg0);
  const obj = useChannelName;
  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
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
                  let combined;
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
                    const tmpResult = useChannelName;
                    channelName1 = tmpResult.computeChannelName(parentChannel, UserStore, RelationshipStore);
                  }
                  if (null != channelName1) {
                    const _HermesInternal2 = HermesInternal;
                    combined = "" + channelName + ", " + channelName1;
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
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, headerContent: { flex: 1, flexDirection: "row", alignItems: "center" }, primaryText: { flexShrink: 1, marginRight: 2 }, secondaryTextContainer: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" }, separator: { marginHorizontal: 2 }, icon: { width: 16, height: 16 }, secondaryText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let labelStyle;
  let secondaryText;
  let text;
  const obj = react2;
  const cResult = obj.c(15);
  ({ text, secondaryText, labelStyle } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === labelStyle) {
    let tmp5;
    if (cResult[1] === tmp4.primaryText) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp6;
      if (cResult[4] === text) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === secondaryText) {
        if (cResult[7] === tmp4.secondaryText) {
          if (cResult[8] === tmp4.secondaryTextContainer) {
            let tmp9;
            if (cResult[9] === tmp4.separator) {
              tmp9 = cResult[10];
            }
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp6) {
                let tmp15;
                if (cResult[13] === tmp9) {
                  tmp15 = cResult[14];
                }
                return tmp15;
              }
            }
            const obj2 = { style: tmp4.container, children: items };
            items = [tmp6, tmp9];
            const tmp18 = metroImportAll(View, obj2);
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
        const obj3 = { style: tmp4.secondaryTextContainer, children: items1 };
        const obj4 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp4.separator, children: "\u00B7" };
        items1 = [metroImportDefault(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp4.secondaryText, children: secondaryText };
        items1[1] = metroImportDefault(Text_Text.Text, obj5);
        tmp11 = metroImportAll(View, obj3);
      }
      cResult[6] = secondaryText;
      cResult[7] = tmp4.secondaryText;
      cResult[8] = tmp4.secondaryTextContainer;
      cResult[9] = tmp4.separator;
      cResult[10] = tmp11;
      tmp9 = tmp11;
    }
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp5, children: text };
    const tmp8 = metroImportDefault(Text_Text.Text, obj6);
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
}) : ((secondaryText) => {
  let items;
  let items1;
  let items2;
  let labelStyle;
  let text;
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = closure_9();
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items, children: text };
  items = [tmp.primaryText, labelStyle];
  const obj = { style: tmp.container, children: items1 };
  items1 = [metroImportDefault(Text_Text.Text, obj2), ];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    const obj3 = { style: tmp.secondaryTextContainer, children: items2 };
    const obj4 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    items2 = [metroImportDefault(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.secondaryText, children: secondaryText };
    items2[1] = metroImportDefault(Text_Text.Text, obj5);
    tmp2Result = metroImportAll(View, obj3);
  }
  items1[1] = tmp2Result;
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let author;
  let channel;
  let color;
  let items;
  let parentChannel;
  const obj = react2;
  const cResult = obj.c(20);
  ({ channel, parentChannel, author, location: _location, color } = arg0);
  const tmp4 = closure_9();
  if (color == null) {
    color = "text-muted";
  }
  if (cResult[0] === channel) {
    let tmp5;
    if (cResult[1] === parentChannel) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp4.icon) {
        let tmp8;
        if (cResult[5] === color) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === author) {
          if (cResult[8] === tmp4.separator) {
            let tmp11;
            if (cResult[9] === color) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === _location) {
              if (cResult[12] === tmp4.secondaryText) {
                let tmp14;
                if (cResult[13] === color) {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp4.secondaryTextContainer) {
                    if (cResult[17] === tmp11) {
                      let tmp17;
                      if (cResult[18] === tmp14) {
                        tmp17 = cResult[19];
                      }
                      return tmp17;
                    }
                  }
                }
                const obj2 = { style: tmp4.secondaryTextContainer, children: items };
                items = [tmp11, tmp8, tmp14];
                const tmp20 = metroImportAll(View, obj2);
                cResult[15] = tmp8;
                cResult[16] = tmp4.secondaryTextContainer;
                cResult[17] = tmp11;
                cResult[18] = tmp14;
                cResult[19] = tmp20;
                tmp17 = tmp20;
              }
            }
            const obj3 = { variant: "text-md/semibold", color, lineClamp: 1, style: tmp4.secondaryText, children: _location };
            const tmp16 = metroImportDefault(Text_Text.Text, obj3);
            cResult[11] = _location;
            cResult[12] = tmp4.secondaryText;
            cResult[13] = color;
            cResult[14] = tmp16;
            tmp14 = tmp16;
          }
        }
        let tmp12 = null != author;
        if (tmp12) {
          const obj4 = { variant: "text-md/bold", color, maxFontSizeMultiplier: 1.75, style: tmp4.separator, children: "\u00B7" };
          tmp12 = metroImportDefault(Text_Text.Text, obj4);
        }
        cResult[7] = author;
        cResult[8] = tmp4.separator;
        cResult[9] = color;
        cResult[10] = tmp12;
        tmp11 = tmp12;
      }
    }
    let element = null;
    if (null != tmp5) {
      element = <tmp5 color={color} style={tmp4.icon} />;
    }
    cResult[3] = tmp5;
    cResult[4] = tmp4.icon;
    cResult[5] = color;
    cResult[6] = element;
    tmp8 = element;
  }
  const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
  let tmp6;
  if (!PRIVATE_CHANNEL.has(channel.type)) {
    let simpleChannelIconComponent;
    if (channel.type === ChannelTypes.ChannelTypes.PUBLIC_THREAD) {
      if (null != parentChannel) {
        let ThreadIcon;
        if (parentChannel.type === ChannelTypes.ChannelTypes.GUILD_FORUM) {
          ThreadIcon = ChatIcon.ChatIcon;
        }
        simpleChannelIconComponent = ThreadIcon;
      }
      ThreadIcon = ThreadIcon2.ThreadIcon;
    } else {
      const tmpResult = utils_ChannelUtils;
      simpleChannelIconComponent = tmpResult.getSimpleChannelIconComponent(channel);
    }
    tmp6 = simpleChannelIconComponent;
  }
  cResult[0] = channel;
  cResult[1] = parentChannel;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((channel) => {
  let _location;
  let author;
  let icon;
  let items1;
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str;
  ({ author, location: _location } = channel);
  const tmp = closure_9();
  react = tmp;
  if (str == null) {
    str = "text-muted";
  }
  const items = [channel, parentChannel, tmp.icon, str];
  let tmp5 = null != author;
  const obj = { style: tmp.secondaryTextContainer, children: items1 };
  const memo = react.useMemo(() => {
    const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
    let tmp5;
    if (!PRIVATE_CHANNEL.has(channel.type)) {
      let simpleChannelIconComponent;
      if (channel.type === ChannelTypes.ChannelTypes.PUBLIC_THREAD) {
        if (null != parentChannel) {
          let ThreadIcon;
          if (parentChannel.type === ChannelTypes.ChannelTypes.GUILD_FORUM) {
            ThreadIcon = ChatIcon.ChatIcon;
          }
          simpleChannelIconComponent = ThreadIcon;
        }
        ThreadIcon = ThreadIcon2.ThreadIcon;
      } else {
        const tmp3Result = utils_ChannelUtils;
        simpleChannelIconComponent = tmp3Result.getSimpleChannelIconComponent(channel);
      }
      tmp5 = simpleChannelIconComponent;
    }
    let element = null;
    if (null != tmp5) {
      element = <tmp5 color={str} style={icon.icon} />;
    }
    return element;
  }, items);
  const tmp4 = str;
  if (tmp5) {
    const obj2 = { variant: "text-md/bold", color: str, maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    tmp5 = closure_7(channel(parentChannel[10]).Text, obj2);
  }
  items1 = [tmp5, memo, ];
  const obj3 = { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location };
  items1[2] = closure_7(channel(parentChannel[10]).Text, obj3);
  return closure_8(tmp4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let channel;
  let colorString;
  let guild;
  let items1;
  let items2;
  let locationTextColor;
  let parentChannel;
  let roleStyle;
  let tmp10;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(25);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (author != null) {
    colorString = author.colorString;
  }
  let tmp9;
  if ("username" === stateFromStores) {
    tmp9 = colorString;
  }
  if (cResult[2] !== tmp9) {
    let tmp11;
    if (null != tmp9) {
      tmp11 = { color: tmp9 };
      const obj2 = { color: tmp9 };
    }
    cResult[2] = tmp9;
    cResult[3] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === channel) {
    if (cResult[5] === guild) {
      let tmp12;
      if (cResult[6] === parentChannel) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === author) {
        if (cResult[9] === tmp10) {
          let tmp14;
          if (cResult[10] === tmp4.primaryText) {
            tmp14 = cResult[11];
          }
          if (cResult[12] === author) {
            if (cResult[13] === channel) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === locationTextColor) {
                  let tmp17;
                  if (cResult[16] === parentChannel) {
                    tmp17 = cResult[17];
                  }
                  if (cResult[18] === tmp4.headerContent) {
                    if (cResult[19] === tmp14) {
                      let tmp21;
                      if (cResult[20] === tmp17) {
                        tmp21 = cResult[21];
                      }
                      if (cResult[22] === tmp4.container) {
                        let tmp25;
                        if (cResult[23] === tmp21) {
                          tmp25 = cResult[24];
                        }
                        return tmp25;
                      }
                      const obj3 = { style: tmp4.container, children: tmp21 };
                      const tmp28 = metroImportDefault(View, obj3);
                      cResult[22] = tmp4.container;
                      cResult[23] = tmp21;
                      cResult[24] = tmp28;
                      tmp25 = tmp28;
                    }
                  }
                  const obj4 = { style: tmp4.headerContent, children: items1 };
                  items1 = [tmp14, tmp17];
                  const tmp24 = metroImportAll(View, obj4);
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
            tmp18 = metroImportDefault(closure_11, obj5);
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
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items2, children: author.nick };
        items2 = [tmp4.primaryText, tmp10];
        tmp15 = metroImportDefault(Text_Text.Text, obj6);
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
}) : ((arg0) => {
  let author;
  let channel;
  let colorString;
  let guild;
  let items1;
  let items2;
  let locationTextColor;
  let obj4;
  let parentChannel;
  let roleStyle;
  let tmp6;
  ({ channel, parentChannel, author } = arg0);
  ({ guild, locationTextColor } = arg0);
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if (author != null) {
    colorString = author.colorString;
  }
  let tmp5;
  if ("username" === stateFromStores) {
    tmp5 = colorString;
  }
  if (null != tmp5) {
    tmp6 = { color: tmp5 };
  }
  const tmp7 = getLocationLabel({ channel, parentChannel, guild });
  const obj3 = { style: tmp.container, children: metroImportAll(View, obj4) };
  let tmp8Result = null != author;
  obj4 = { style: tmp.headerContent, children: items2 };
  if (tmp8Result) {
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items1, children: author.nick };
    items1 = [tmp.primaryText, tmp6];
    tmp8Result = metroImportDefault(Text_Text.Text, obj5);
  }
  items2 = [tmp8Result, ];
  let tmp8Result2 = null != tmp7;
  if (tmp8Result2) {
    const obj6 = { location: tmp7, channel, parentChannel, author, color: locationTextColor };
    tmp8Result2 = metroImportDefault(closure_11, obj6);
  }
  items2[1] = tmp8Result2;
  return metroImportDefault(View, obj3);
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default tmp4;
export const SimpleNotificationHeader = tmp3;