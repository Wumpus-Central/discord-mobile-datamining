// === Module 10071: LocationText ===

// Module 10071 (LocationText)
import initialize from "initialize" /* 589 */;
import set from "set" /* 692 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4440 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import closure_5 from "markAllUserIdListsStale" /* 4098 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function LocationText(channel) {
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str = channel.color;
  let React;
  str = undefined;
  ({ author, location: _location } = channel);
  const tmp = callback2();
  React = tmp;
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
      if (tmp.type !== tmp3(tmp3Result[10]).ChannelTypes.PUBLIC_THREAD) {
        tmp3Result = tmp3(tmp3Result[13]);
        const simpleChannelIconComponent = tmp3Result.getSimpleChannelIconComponent(tmp);
      }
      if (null == tmp2) {
        const ThreadIcon = tmp3(tmp3Result[12]).ThreadIcon;
      }
      tmp3Result = tmp3(tmp3Result[11]);
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
  return closure_8(str, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, headerContent: null, primaryText: null, secondaryTextContainer: null, separator: null, icon: null, secondaryText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flexShrink: 1, marginRight: 2 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" };
createCacheKey[4] = { marginHorizontal: 2 };
createCacheKey[5] = { width: 16, height: 16 };
createCacheKey[6] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

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
  let tmp2Result = tmp2(4638);
  const channelName = tmp2Result.computeChannelName(channel, closure_6, closure_5);
  const type = channel.type;
  let tmp10 = channelName;
  if (set.ChannelTypes.GROUP_DM !== type) {
    if (tmp2(692).ChannelTypes.GUILD_FORUM !== type) {
      if (tmp2(692).ChannelTypes.GUILD_TEXT !== type) {
        if (tmp2(692).ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
          if (tmp2(692).ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
            if (tmp2(692).ChannelTypes.PUBLIC_THREAD !== type) {
              tmp10 = null;
            }
          }
          let channelName1 = null;
          if (null != parentChannel) {
            tmp2Result = tmp2(4638);
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
    tmp17Result = tmp17(tmp2(4440).Text, obj2);
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
    tmp17Result = tmp17(LocationText, obj3);
  }
  items2[1] = tmp17Result;
  obj1[1] = items2;
  obj[1] = closure_8(View, obj1);
  return closure_7(View, obj);
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
    const items2 = [tmp4(tmp5(4440).Text, obj), ];
    obj1 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: null, children: null };
    obj1[3] = tmp.secondaryText;
    obj1[4] = secondaryText;
    items2[1] = tmp4(tmp5(4440).Text, obj1);
    obj[1] = items2;
    tmp2Result = tmp2(tmp3, obj);
  }
  items1[1] = tmp2Result;
  obj[1] = items1;
  return closure_8(View, obj);
};