// === Module 10341: NotificationSettingsMockChannels ===

// Module 10341 (NotificationSettingsMockChannels)
import "noop";
import { View } from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { card: null, channel: null, channelName: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.EjLobP);
  let items = [obj, , ];
  obj = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t.Wgpwpp);
  items[1] = obj;
  obj = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return callback(View, {
    style: tmp.card,
    children: items.map((unread) => {
      let obj = { style: tmp.channel, children: null };
      obj = { style: tmp.channelName, children: null };
      obj = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      const items = [outer1_5(outer1_1(outer1_2[7]), obj), , ];
      const obj1 = { style: { marginLeft: 12 }, size: "xs", color: null };
      let str;
      if (unread.resolvedUnreadSetting === outer1_4.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1[2] = str;
      items[1] = outer1_5(outer1_6(outer1_2[8]).TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: null, children: null };
      let str2;
      if (unread.resolvedUnreadSetting === outer1_4.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2[2] = str2;
      obj2[3] = unread.name;
      items[2] = outer1_5(outer1_6(outer1_2[9]).Text, obj2);
      obj[1] = items;
      const items1 = [outer1_6(outer1_3, obj), ];
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = outer1_5(outer1_6(outer1_2[10]).Badge, { value: num });
      obj[1] = items1;
      return outer1_6(outer1_3, obj, unread.name);
    })
  });
};