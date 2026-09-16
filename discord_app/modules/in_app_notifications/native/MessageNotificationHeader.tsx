// discord_app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import ChatIcon2 from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon2 from "../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
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
    const obj2 = {
      variant: "text-md/bold",
      color: str,
      maxFontSizeMultiplier: 1.75,
      style: tmp.separator,
      children: "\u00B7",
    };
    tmp5 = closure_7(channel(parentChannel[8]).Text, obj2);
  }
  const items1 = [
    tmp5,
    memo,
    closure_7(channel(parentChannel[8]).Text, {
      variant: "text-md/semibold",
      color: str,
      lineClamp: 1,
      style: tmp.secondaryText,
      children: _location,
    }),
  ];
  obj.children = items1;
  return closure_8(str, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
  headerContent: { flex: 1, flexDirection: "row", alignItems: "center" },
  primaryText: { flexShrink: 1, marginRight: 2 },
  secondaryTextContainer: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" },
  separator: { marginHorizontal: 2 },
  icon: { width: 16, height: 16 },
  secondaryText: { flex: 1 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(locationTextColor) {
  ({ channel, parentChannel, guild, author } = locationTextColor);
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
  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  const type = channel.type;
  let tmp10 = channelName;
  if (ChannelTypes.ChannelTypes.GROUP_DM !== type) {
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
                          tmp10 = null;
                          if (ChannelTypes.ChannelTypes.DM !== type) {
                            tmp10 = null;
                            if (ChannelTypes.ChannelTypes.GUILD_CATEGORY !== type) {
                              tmp10 = null;
                              if (ChannelTypes.ChannelTypes.GUILD_STORE !== type) {
                                tmp10 = null;
                                if (ChannelTypes.ChannelTypes.GUILD_DIRECTORY !== type) {
                                  tmp10 = null;
                                  if (ChannelTypes.ChannelTypes.GUILD_SPACE !== type) {
                                    const UNKNOWN = ChannelTypes.ChannelTypes.UNKNOWN;
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
                    channelName1 = useChannelName.computeChannelName(parentChannel, UserStore, RelationshipStore);
                    const tmp2Result2 = useChannelName;
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
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.headerContent, children: null };
  let tmp17Result = null != author;
  if (tmp17Result) {
    const obj5 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: null,
      children: null,
    };
    const items1 = [tmp.primaryText, tmp6];
    obj5.style = items1;
    obj5.children = author.nick;
    tmp17Result = React5(Text_Text.Text, obj5);
  }
  const items2 = [tmp17Result];
  let tmp17Result2 = null != tmp10;
  if (tmp17Result2) {
    const obj6 = { location: tmp10, channel, parentChannel, author, color: locationTextColor.locationTextColor };
    tmp17Result2 = React5(LocationText, obj6);
  }
  items2[1] = tmp17Result2;
  obj4.children = items2;
  obj3.children = React6(View, obj4);
  return React5(View, obj3);
}
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = closure_9();
  const obj = { style: tmp.container, children: null };
  const obj2 = {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    lineClamp: 1,
    style: null,
    children: text,
  };
  const items = [tmp.primaryText, labelStyle];
  obj2.style = items;
  const items1 = [React5(Text_Text.Text, obj2)];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    const obj3 = { style: tmp.secondaryTextContainer, children: null };
    const obj4 = {
      variant: "text-md/bold",
      color: "text-muted",
      maxFontSizeMultiplier: 1.75,
      style: tmp.separator,
      children: "\u00B7",
    };
    const items2 = [React5(Text_Text.Text, obj4)];
    const obj5 = {
      variant: "text-md/semibold",
      color: "text-muted",
      lineClamp: 1,
      style: tmp.secondaryText,
      children: secondaryText,
    };
    items2[1] = React5(Text_Text.Text, obj5);
    obj3.children = items2;
    tmp2Result = React6(View, obj3);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return React6(View, obj);
};
