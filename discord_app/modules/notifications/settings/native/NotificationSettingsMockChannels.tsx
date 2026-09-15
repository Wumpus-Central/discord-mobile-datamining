// === Module 10294: NotificationSettingsMockChannels ===

// Module 10294 (NotificationSettingsMockChannels)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4635 */;
import TextIcon from "TextIcon" /* 5164 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 10295 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(4821).UnreadSetting;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 }, channel: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 }, channelName: { display: "flex", flexDirection: "row", alignItems: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = closure_7();
  _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
  const intl = require("util").intl;
  obj.name = intl.string(require("util").t.EjLobP);
  let items = [obj, , ];
  let obj2 = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl2 = require("util").intl;
  obj2.name = intl2.string(require("util").t.Wgpwpp);
  items[1] = obj2;
  const obj3 = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl3 = require("util").intl;
  obj3.name = intl3.string(require("util").t.g9VImh);
  items[2] = obj3;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return closure_5(View, {
    style: tmp.card,
    children: items.map((unread) => {
      const obj = { style: closure_0.channel, children: null };
      const obj2 = { style: closure_0.channelName, children: null };
      const items = [hasOwnProperty(StaticChannelIndicatorDefault, { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting }), , ];
      const obj4 = { style: { marginLeft: 12 }, size: "xs", color: null };
      let str;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj4.color = str;
      items[1] = hasOwnProperty(TextIcon.TextIcon, obj4);
      const obj5 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: null, children: null };
      let str2;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj5.color = str2;
      obj5.children = unread.name;
      items[2] = hasOwnProperty(Text_Text.Text, obj5);
      obj2.children = items;
      const items1 = [timestampProducer(View, obj2), ];
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = hasOwnProperty(native.Badge, { value: num });
      obj.children = items1;
      return timestampProducer(View, obj, unread.name);
    })
  });
};