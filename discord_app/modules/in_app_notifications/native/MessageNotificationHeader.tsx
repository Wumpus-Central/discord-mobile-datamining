// discord_app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import set from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import computeChannelName from "../../channel/useChannelName.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function LocationText(channel) {
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str;
  ({ author, location: _location } = channel);
  const tmp = callback2();
  const React = tmp;
  if (str == null) {
    str = "text-muted";
  }
  const items = [channel, parentChannel, tmp.icon, str];
  let obj = { style: tmp.secondaryTextContainer, children: null };
  let tmp5 = null != author;
  const memo = React.useMemo(() => {
    let tmp3Result = parentChannel;
    const PRIVATE_CHANNEL = channel(parentChannel[10]).ChannelTypesSets.PRIVATE_CHANNEL;
    if (PRIVATE_CHANNEL.has(channel.type)) {
      let element = null;
      if (null != undefined) {
        const obj = { color: null, style: null };
        obj[0] = str;
        obj[1] = React.icon;
        element = React.createElement(undefined, { color: null, style: null });
      }
      return element;
    } else {
      if (channel.type !== channel(tmp3Result[10]).ChannelTypes.PUBLIC_THREAD) {
        tmp3Result = channel(tmp3Result[13]);
        const simpleChannelIconComponent = tmp3Result.getSimpleChannelIconComponent(channel);
      }
      if (null == parentChannel) {
        const ThreadIcon = channel(tmp3Result[12]).ThreadIcon;
      }
      tmp3Result = channel(tmp3Result[11]);
      const ChatIcon = tmp3Result.ChatIcon;
    }
  }, items);
  if (tmp5) {
    obj = { variant: "text-md/bold", color: null, maxFontSizeMultiplier: 1.75, style: null, children: "\u00B7" };
    obj[1] = str;
    obj[3] = tmp.separator;
    tmp5 = callback(channel(parentChannel[8]).Text, obj);
  }
  const items1 = [tmp5, memo, ];
  obj = { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location };
  items1[2] = callback(channel(parentChannel[8]).Text, obj);
  obj[1] = items1;
  return callback2(str, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flexShrink: 1, marginRight: 2 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" };
createCacheKey[4] = { marginHorizontal: 2 };
createCacheKey[5] = { width: 16, height: 16 };
createCacheKey[6] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(locationTextColor) {
  ({ channel, parentChannel, guild, author } = locationTextColor);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if (author != null) {
    const colorString = author.colorString;
  }
  let tmp5;
  if ("username" === stateFromStores) {
    tmp5 = colorString;
  }
  if (null != tmp5) {
    obj = { color: null };
    obj[0] = tmp5;
    const tmp6 = obj;
  }
  let tmp2Result = computeChannelName;
  const channelName = tmp2Result.computeChannelName(channel, closure_6, closure_5);
  const type = channel.type;
  let tmp10 = channelName;
  if (set.ChannelTypes.GROUP_DM !== type) {
    if (set.ChannelTypes.GUILD_FORUM !== type) {
      if (set.ChannelTypes.GUILD_TEXT !== type) {
        if (set.ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
          if (set.ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
            if (set.ChannelTypes.PUBLIC_THREAD !== type) {
              tmp10 = null;
            }
          }
          let channelName1 = null;
          if (null != parentChannel) {
            tmp2Result = computeChannelName;
            channelName1 = tmp2Result.computeChannelName(parentChannel, closure_6, closure_5);
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
    let combined1 = null;
    if (null != guild) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + channelName + ", " + guild.name;
    }
    tmp10 = combined1;
  }
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.headerContent, children: null };
  let tmp17Result = null != author;
  if (tmp17Result) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    const items1 = [tmp.primaryText, tmp6];
    obj2[3] = items1;
    obj2[4] = author.nick;
    tmp17Result = callback(Text.Text, obj2);
  }
  const items2 = [tmp17Result, ];
  tmp17Result = null != tmp10;
  if (tmp17Result) {
    const obj3 = { location: null, channel: null, parentChannel: null, author: null, color: null };
    obj3[0] = tmp10;
    obj3[1] = channel;
    obj3[2] = parentChannel;
    obj3[3] = author;
    obj3[4] = locationTextColor.locationTextColor;
    tmp17Result = callback(LocationText, obj3);
  }
  items2[1] = tmp17Result;
  obj1[1] = items2;
  obj[1] = callback2(View, obj1);
  return callback(View, obj);
};
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  const items = [tmp.primaryText, labelStyle];
  const items1 = [callback(Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items, children: text }), ];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.secondaryTextContainer;
    obj = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: null, children: "\u00B7" };
    obj[3] = tmp.separator;
    const items2 = [callback(Text.Text, obj), ];
    obj1 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: null, children: null };
    obj1[3] = tmp.secondaryText;
    obj1[4] = secondaryText;
    items2[1] = callback(Text.Text, obj1);
    obj[1] = items2;
    tmp2Result = callback2(View, obj);
  }
  items1[1] = tmp2Result;
  obj[1] = items1;
  return callback2(View, obj);
};