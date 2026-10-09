// === Module 12562: NotificationSettingsMockChannels ===

// Module 12562 (NotificationSettingsMockChannels)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import TextIcon from "TextIcon" /* 8191 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 12042 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(5974).UnreadSetting;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 }, channel: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 }, channelName: { display: "flex", flexDirection: "row", alignItems: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMockChannels(unreadSetting) {
  const cResult = require("c").c(9);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] !== unreadSetting.unreadSetting) {
    let obj2 = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: null };
    const intl = tmp(1126).intl;
    obj2.name = intl.string(tmp(1126).t.EjLobP);
    let items = [obj2, , ];
    const obj3 = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
    const intl2 = tmp(1126).intl;
    obj3.name = intl2.string(tmp(1126).t.Wgpwpp);
    items[1] = obj3;
    let obj4 = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: null };
    const intl3 = tmp(1126).intl;
    obj4.name = intl3.string(tmp(1126).t.g9VImh);
    items[2] = obj4;
    if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
      items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
    }
    cResult[0] = unreadSetting.unreadSetting;
    cResult[1] = items;
    let arr = items;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    if (cResult[3] === tmp4.channel) {
      if (cResult[4] === tmp4.channelName) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.card) {
        if (cResult[7] === tmp7) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
      let obj5 = { style: tmp6, children: tmp7 };
      const tmp12 = closure_5(View, obj5);
      cResult[6] = tmp4.card;
      cResult[7] = tmp7;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
  }
  const mapped = arr.map((unread) => {
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
  });
  cResult[2] = arr;
  cResult[3] = tmp4.channel;
  cResult[4] = tmp4.channelName;
  cResult[5] = mapped;
  tmp7 = mapped;
  let obj = require("c");
}) : (function NotificationSettingsMockChannels(unreadSetting) {
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
});