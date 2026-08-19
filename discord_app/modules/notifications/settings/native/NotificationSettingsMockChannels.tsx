// discord_app/modules/notifications/settings/native/NotificationSettingsMockChannels.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelIndicatorDefault from "../../../channel_list_v2/native/components/StaticChannelIndicator.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = callback2();
  const _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[3] = intl.string(require("../../../../intl/index.native.tsx").t.EjLobP);
  let items = [obj, , ];
  obj = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[3] = intl2.string(require("../../../../intl/index.native.tsx").t.Wgpwpp);
  items[1] = obj;
  obj = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj[3] = intl3.string(require("../../../../intl/index.native.tsx").t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return callback(View, {
    style: tmp.card,
    children: items.map((item, index) => {
      const obj = { unread: item.unread, resolvedUnreadSetting: item.resolvedUnreadSetting };
      const items = [closure_1_5(ChannelIndicatorDefault, obj), , ];
      obj1 = { style: { marginLeft: 12 }, size: "xs", color: null };
      let str;
      if (item.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1[2] = str;
      items[1] = closure_1_5(lib(dependencyMap[8]).TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: null, children: null };
      let str2;
      if (item.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2[2] = str2;
      obj2[3] = item.name;
      items[2] = closure_1_5(lib(dependencyMap[9]).Text, obj2);
      obj[1] = items;
      const items1 = [closure_1_6(View, obj), ];
      let num = 0;
      if (item.badged) {
        num = 1;
      }
      items1[1] = closure_1_5(lib(dependencyMap[10]).Badge, { value: num });
      obj[1] = items1;
      return closure_1_6(View, obj, item.name);
    })
  });
};