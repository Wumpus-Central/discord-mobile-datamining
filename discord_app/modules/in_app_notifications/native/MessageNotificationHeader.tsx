// discord_app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
import noop from "noop";
import { View } from "XSmallIcon";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let error;
let metroImportAll;
const require = arg1;
function LocationText(channel) {
  let _location;
  let author;
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  let str = channel.color;
  let React;
  str = undefined;
  ({ author, location: _location } = channel);
  const tmp = createCacheKey();
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
        obj[1] = _undefined.icon;
        element = _undefined.createElement(undefined, { color: null, style: null });
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
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = Object.freeze({ radius: 12 });
let closure_10 = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
createCacheKey = { container: null, headerContent: null, primaryText: null, secondaryTextContainer: null, separator: null, icon: null, secondaryText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flexShrink: 1, marginRight: 2 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" };
createCacheKey[4] = { marginHorizontal: 2 };
createCacheKey[5] = { width: 16, height: 16 };
createCacheKey[6] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(locationTextColor) {
  let author;
  let channel;
  let expanded;
  let guild;
  let onDismiss;
  let parentChannel;
  ({ channel, parentChannel, guild, author, expanded, onDismiss } = locationTextColor);
  const tmp = createCacheKey();
  let obj = onDismiss(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
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
  let tmp2Result = tmp2(4445);
  const channelName = tmp2Result.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
  const type = channel.type;
  let tmp10 = channelName;
  if (onDismiss(692).ChannelTypes.GROUP_DM !== type) {
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
            tmp2Result = tmp2(4445);
            channelName1 = tmp2Result.computeChannelName(parentChannel, mergeGuildAvatar, upsertRelationship);
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
  const obj1 = { style: tmp.headerContent, children: null };
  let tmp19 = null != author;
  if (tmp19) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    const items1 = [tmp.primaryText, tmp6];
    obj2[3] = items1;
    obj2[4] = author.nick;
    tmp19 = callback(tmp2(4251).Text, obj2);
  }
  const items2 = [tmp19, ];
  let tmp21 = null != tmp10;
  if (tmp21) {
    const obj3 = { location: null, channel: null, parentChannel: null, author: null, color: null };
    obj3[0] = tmp10;
    obj3[1] = channel;
    obj3[2] = parentChannel;
    obj3[3] = author;
    obj3[4] = locationTextColor.locationTextColor;
    tmp21 = callback(LocationText, obj3);
  }
  items2[1] = tmp21;
  obj1[1] = items2;
  const items3 = [closure_8(View, obj1), ];
  if (expanded) {
    expanded = null != onDismiss;
  }
  if (expanded) {
    const obj4 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null };
    const intl = tmp2(1236).intl;
    obj4[1] = intl.string(tmp2(1236).t.LnEgqX);
    obj4[2] = closure_10;
    obj4[3] = closure_9;
    obj4[4] = function onPress() {
      return onDismiss("close_from_expanded");
    };
    const obj5 = { color: "icon-subtle", style: null };
    obj5[1] = { height: 20, width: 20 };
    obj4[5] = callback(tmp2(5255).XSmallIcon, obj5);
    expanded = callback(tmp2(4797).PressableOpacity, obj4);
  }
  items3[1] = expanded;
  obj[1] = items3;
  return closure_8(View, obj);
};
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  let labelStyle;
  let text;
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  const items = [tmp.primaryText, labelStyle];
  const items1 = [callback(Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: items, children: text }), ];
  let tmp2Result = null != secondaryText;
  if (tmp2Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.secondaryTextContainer;
    obj = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: null, children: "\u00B7" };
    obj[3] = tmp.separator;
    const items2 = [tmp4(tmp5(4251).Text, obj), ];
    const obj1 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: null, children: null };
    obj1[3] = tmp.secondaryText;
    obj1[4] = secondaryText;
    items2[1] = tmp4(tmp5(4251).Text, obj1);
    obj[1] = items2;
    tmp2Result = tmp2(tmp3, obj);
  }
  items1[1] = tmp2Result;
  obj[1] = items1;
  return closure_8(View, obj);
};