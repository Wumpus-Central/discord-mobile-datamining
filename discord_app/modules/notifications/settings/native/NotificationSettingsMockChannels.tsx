// === Module 10271: NotificationSettingsMockChannels ===

// Module 10271 (NotificationSettingsMockChannels)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UnreadSetting } from "ReadStateTypes" /* 4702 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { card: null, channel: null, channelName: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = callback2();
  const _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
  const intl = _require(1233).intl;
  obj[3] = intl.string(_require(1233).t.EjLobP);
  let items = [obj, , ];
  obj = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl2 = _require(1233).intl;
  obj[3] = intl2.string(_require(1233).t.Wgpwpp);
  items[1] = obj;
  obj = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl3 = _require(1233).intl;
  obj[3] = intl3.string(_require(1233).t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return callback(View, {
    style: tmp.card,
    children: items.map((unread) => {
      let obj = { style: lib.channel, children: null };
      obj = { style: lib.channelName, children: null };
      obj = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      const items = [closure_1_5(closure_1_1(closure_1_2[7]), obj), , ];
      obj1 = { style: { marginLeft: 12 }, size: "xs", color: null };
      let str;
      if (unread.resolvedUnreadSetting === closure_1_4.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1[2] = str;
      items[1] = closure_1_5(lib(closure_1_2[8]).TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: null, children: null };
      let str2;
      if (unread.resolvedUnreadSetting === closure_1_4.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2[2] = str2;
      obj2[3] = unread.name;
      items[2] = closure_1_5(lib(closure_1_2[9]).Text, obj2);
      obj[1] = items;
      const items1 = [closure_1_6(closure_1_3, obj), ];
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = closure_1_5(lib(closure_1_2[10]).Badge, { value: num });
      obj[1] = items1;
      return closure_1_6(closure_1_3, obj, unread.name);
    })
  });
};