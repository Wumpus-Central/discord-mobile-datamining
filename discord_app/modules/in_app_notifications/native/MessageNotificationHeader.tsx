// discord_app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function LocationText(channel) {
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
    let tmp3Result = dependencyMap;
    const PRIVATE_CHANNEL = ChannelTypes.ChannelTypesSets.PRIVATE_CHANNEL;
    if (PRIVATE_CHANNEL.has(channel.type)) {
      let element = null;
      if (null != undefined) {
        const obj = { color: str, style: icon.icon };
        element = noop.createElement(undefined, { color: str, style: icon.icon });
      }
      return element;
    } else {
      if (tmp.type !== tmp3(1094).ChannelTypes.PUBLIC_THREAD) {
        tmp3Result = tmp3(5028);
        const simpleChannelIconComponent = tmp3Result.getSimpleChannelIconComponent(tmp);
      }
      if (null == tmp2) {
        const ThreadIcon = tmp3(5073).ThreadIcon;
      }
      tmp3Result = tmp3(5071);
      const ChatIcon = tmp3Result.ChatIcon;
    }
  }, items);
  if (tmp5) {
    obj = {
      variant: "text-md/bold",
      color: str,
      maxFontSizeMultiplier: 1.75,
      style: tmp.separator,
      children: "\u00B7",
    };
    tmp5 = closure_7(channel(parentChannel[8]).Text, obj);
  }
  const items1 = [tmp5, memo];
  obj = { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location };
  items1[2] = closure_7(channel(parentChannel[8]).Text, obj);
  obj.children = items1;
  return closure_8(str, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  headerContent: null,
  primaryText: null,
  secondaryTextContainer: null,
  separator: null,
  icon: null,
  secondaryText: null,
};
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerContent = { flex: 1, flexDirection: "row", alignItems: "center" };
createStyles.primaryText = { flexShrink: 1, marginRight: 2 };
createStyles.secondaryTextContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
  flex: 1,
  overflow: "hidden",
};
createStyles.separator = { marginHorizontal: 2 };
createStyles.icon = { width: 16, height: 16 };
createStyles.secondaryText = { flex: 1 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(locationTextColor) {
  ({ channel, parentChannel, guild, author } = locationTextColor);
  const tmp = closure_9();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if (author != null) {
    const colorString = author.colorString;
  }
  let tmp5;
  if ("username" === stateFromStores) {
    tmp5 = colorString;
  }
  if (null != tmp5) {
    obj = { color: tmp5 };
    const tmp6 = obj;
  }
  let tmp2Result = tmp2(4713);
  const channelName = tmp2Result.computeChannelName(channel, UserStore, RelationshipStore);
  const type = channel.type;
  let tmp10 = channelName;
  if (ChannelTypes.ChannelTypes.GROUP_DM !== type) {
    if (tmp2(1094).ChannelTypes.GUILD_FORUM !== type) {
      if (tmp2(1094).ChannelTypes.GUILD_MEDIA !== type) {
        if (tmp2(1094).ChannelTypes.GUILD_TEXT !== type) {
          if (tmp2(1094).ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
            if (tmp2(1094).ChannelTypes.GUILD_APP !== type) {
              if (tmp2(1094).ChannelTypes.GUILD_VOICE !== type) {
                if (tmp2(1094).ChannelTypes.GUILD_STAGE_VOICE !== type) {
                  if (tmp2(1094).ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
                    if (tmp2(1094).ChannelTypes.PUBLIC_THREAD !== type) {
                      if (tmp2(1094).ChannelTypes.PRIVATE_THREAD !== type) {
                        if (tmp2(1094).ChannelTypes.MEDIA_THREAD !== type) {
                          tmp10 = null;
                          if (tmp2(1094).ChannelTypes.DM !== type) {
                            tmp10 = null;
                            if (tmp2(1094).ChannelTypes.GUILD_CATEGORY !== type) {
                              tmp10 = null;
                              if (tmp2(1094).ChannelTypes.GUILD_STORE !== type) {
                                tmp10 = null;
                                if (tmp2(1094).ChannelTypes.GUILD_DIRECTORY !== type) {
                                  tmp10 = null;
                                  if (tmp2(1094).ChannelTypes.GUILD_SPACE !== type) {
                                    const UNKNOWN = tmp2(1094).ChannelTypes.UNKNOWN;
                                    tmp10 = null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let channelName1 = null;
                  if (null != parentChannel) {
                    tmp2Result = tmp2(4713);
                    channelName1 = tmp2Result.computeChannelName(parentChannel, UserStore, RelationshipStore);
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
                  tmp10 = combined;
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
    tmp10 = combined1;
  }
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.headerContent, children: null };
  let tmp17Result = null != author;
  if (tmp17Result) {
    const obj2 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: null,
      children: null,
    };
    const items1 = [tmp.primaryText, tmp6];
    obj2.style = items1;
    obj2.children = author.nick;
    tmp17Result = tmp17(tmp2(4556).Text, obj2);
  }
  const items2 = [tmp17Result];
  tmp17Result = null != tmp10;
  if (tmp17Result) {
    const obj3 = { location: tmp10, channel, parentChannel, author, color: locationTextColor.locationTextColor };
    tmp17Result = tmp17(LocationText, obj3);
  }
  items2[1] = tmp17Result;
  obj1.children = items2;
  obj.children = React6(View, obj1);
  return React5(View, obj);
}
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = closure_9();
  let obj = { style: tmp.container, children: null };
  obj = {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    lineClamp: 1,
    style: null,
    children: text,
  };
  const items = [tmp.primaryText, labelStyle];
  obj.style = items;
  const items1 = [React5(Text_Text.Text, obj)];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    obj = { style: tmp.secondaryTextContainer, children: null };
    const obj1 = {
      variant: "text-md/bold",
      color: "text-muted",
      maxFontSizeMultiplier: 1.75,
      style: tmp.separator,
      children: "\u00B7",
    };
    const items2 = [tmp4(tmp5(4556).Text, obj1)];
    const obj2 = {
      variant: "text-md/semibold",
      color: "text-muted",
      lineClamp: 1,
      style: tmp.secondaryText,
      children: secondaryText,
    };
    items2[1] = tmp4(tmp5(4556).Text, obj2);
    obj.children = items2;
    tmp2Result = tmp2(tmp3, obj);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return React6(View, obj);
};
