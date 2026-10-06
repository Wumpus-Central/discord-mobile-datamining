// === Module 12526: NotificationSettingsMockChannels ===

// Module 12526 (NotificationSettingsMockChannels)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import TextIcon2 from "TextIcon" /* 5871 */;
import StaticChannelIndicatorDefault from "StaticChannelIndicator" /* 12032 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { card: obj2, channel: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 4, justifyContent: "space-between", paddingRight: 12 }, channelName: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, paddingVertical: 8 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((unreadSetting) => {
  let arr;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] !== unreadSetting.unreadSetting) {
    let obj2 = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: intl.string(require("intl").t.EjLobP) };
    intl = tmp(1126).intl;
    let items = [obj2, , ];
    let obj3 = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl2.string(require("intl").t.Wgpwpp) };
    intl2 = tmp(1126).intl;
    items[1] = obj3;
    let obj4 = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl3.string(require("intl").t.g9VImh) };
    intl3 = tmp(1126).intl;
    items[2] = obj4;
    if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
      items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
    }
    let num = 0;
    cResult[0] = unreadSetting.unreadSetting;
    cResult[1] = items;
    arr = items;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    if (cResult[3] === tmp4.channel) {
      let tmp7;
      if (cResult[4] === tmp4.channelName) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.card) {
        let tmp9;
        if (cResult[7] === tmp7) {
          tmp9 = cResult[8];
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
    let items;
    let items1;
    let str;
    let str2;
    const obj2 = { style: closure_0.channelName, children: items };
    items = [, , ];
    const obj = { style: closure_0.channel, children: items1 };
    const obj3 = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
    items[0] = hasOwnProperty(StaticChannelIndicatorDefault, obj3);
    const obj4 = { style: { marginLeft: 12 }, size: "xs", color: str };
    str = undefined;
    const TextIcon = TextIcon2.TextIcon;
    if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
      str = "text-muted";
    }
    items[1] = hasOwnProperty(TextIcon, obj4);
    const obj5 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: str2, children: unread.name };
    str2 = undefined;
    const Text = Text_Text.Text;
    if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
      str2 = "text-muted";
    }
    items[2] = hasOwnProperty(Text, obj5);
    items1 = [metroRequire(View, obj2), ];
    let num = 0;
    const Badge = native.Badge;
    if (unread.badged) {
      num = 1;
    }
    items1[1] = hasOwnProperty(Badge, { value: num });
    return metroRequire(View, obj, unread.name);
  });
  cResult[2] = arr;
  cResult[3] = tmp4.channel;
  cResult[4] = tmp4.channelName;
  cResult[5] = mapped;
  tmp7 = mapped;
}) : ((unreadSetting) => {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  const tmp = closure_7();
  _require = tmp;
  let obj = { badged: true, unread: true, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, name: intl.string(require("intl").t.EjLobP) };
  intl = require("intl").intl;
  let items = [obj, , ];
  let obj2 = { badged: false, unread: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl2.string(require("intl").t.Wgpwpp) };
  intl2 = require("intl").intl;
  items[1] = obj2;
  let obj3 = { badged: false, unread: false, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS, name: intl3.string(require("intl").t.g9VImh) };
  intl3 = require("intl").intl;
  items[2] = obj3;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  let obj4 = {
    style: tmp.card,
    children: items.map((unread) => {
      let items;
      let items1;
      let str;
      let str2;
      const obj2 = { style: closure_0.channelName, children: items };
      items = [, , ];
      const obj = { style: closure_0.channel, children: items1 };
      const obj3 = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      items[0] = hasOwnProperty(StaticChannelIndicatorDefault, obj3);
      const obj4 = { style: { marginLeft: 12 }, size: "xs", color: str };
      str = undefined;
      const TextIcon = TextIcon2.TextIcon;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str = "text-muted";
      }
      items[1] = hasOwnProperty(TextIcon, obj4);
      const obj5 = { style: { marginLeft: 4 }, variant: "text-sm/semibold", color: str2, children: unread.name };
      str2 = undefined;
      const Text = Text_Text.Text;
      if (unread.resolvedUnreadSetting === UnreadSetting.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      items[2] = hasOwnProperty(Text, obj5);
      items1 = [metroRequire(View, obj2), ];
      let num = 0;
      const Badge = native.Badge;
      if (unread.badged) {
        num = 1;
      }
      items1[1] = hasOwnProperty(Badge, { value: num });
      return metroRequire(View, obj, unread.name);
    })
  };
  return closure_5(View, obj4);
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default tmp4;