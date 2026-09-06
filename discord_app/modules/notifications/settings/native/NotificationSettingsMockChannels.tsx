// discord_app/modules/notifications/settings/native/NotificationSettingsMockChannels.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TextIcon from "../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import StaticChannelIndicatorDefault from "../../../channel_list_v2/native/components/StaticChannelIndicator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { card: null, channel: null, channelName: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: 10,
  paddingVertical: 8,
};
createStyles.card = createStyles;
createStyles.channel = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 4,
  justifyContent: "space-between",
  paddingRight: 12,
};
createStyles.channelName = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = closure_7();
  _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
  const intl = require("util").intl;
  obj.name = intl.string(require("util").t.EjLobP);
  let items = [obj, ,];
  obj = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl2 = require("util").intl;
  obj.name = intl2.string(require("util").t.Wgpwpp);
  items[1] = obj;
  obj = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl3 = require("util").intl;
  obj.name = intl3.string(require("util").t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return closure_5(View, {
    style: tmp.card,
    children: items.map((unread) => {
      let obj = { style: closure_0.channel, children: null };
      obj = { style: closure_0.channelName, children: null };
      obj = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      const items = [hasOwnProperty(StaticChannelIndicatorDefault, obj), ,];
      const obj1 = { style: { marginLeft: 12 }, size: "xs", color: null };
      let str;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1.color = str;
      items[1] = hasOwnProperty(TextIcon.TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: null, children: null };
      let str2;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2.color = str2;
      obj2.children = unread.name;
      items[2] = hasOwnProperty(Text_Text.Text, obj2);
      obj.children = items;
      const items1 = [timestampProducer(View, obj)];
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = hasOwnProperty(native.Badge, { value: num });
      obj.children = items1;
      return timestampProducer(View, obj, unread.name);
    }),
  });
}
