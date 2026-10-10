// === Module 10473: UnreadSettingNotice ===

// Module 10473 (UnreadSettingNotice)
import nativeDefault from "native" /* 587 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 10474 */;
import updateChannelUnreadSettingsDefault from "updateChannelUnreadSettings" /* 10475 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
let closure_4 = fn(1095).ChannelNotificationSettingsFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { content: null, informations: null, actions: null, inlineTextWithIcon: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.content = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.informations = { flex: 1 };
obj2.actions = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
obj2.inlineTextWithIcon = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UnreadSettingNoticeConnected(channel) {
  _require = channel;
  const cResult = require("c").c(19);
  const tmp4 = closure_7();
  if (cResult[0] !== channel.channel.id) {
    const obj2 = { id: channel.channel.id };
    const tmp8 = closure_5(UnreadSettingNoticeImpressionTrackingDefault, obj2);
    cResult[0] = channel.channel.id;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl = tmp(1126).intl;
    obj3.children = intl.string(tmp(1126).t.i4xQ5o);
    const tmp11 = closure_5(tmp(5088).Text, obj3);
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4.informations) {
    const obj4 = { style: tmp4.informations, children: tmp9 };
    const tmp15 = closure_5(View, obj4);
    cResult[3] = tmp4.informations;
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== channel) {
    const fn = function _() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    };
    cResult[5] = channel;
    cResult[6] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-xs/medium", color: "text-link", children: null };
    const intl2 = tmp(1126).intl;
    obj5.children = intl2.string(tmp(1126).t.KyUKhT);
    const tmp19 = closure_5(tmp(5088).Text, obj5);
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp4.inlineTextWithIcon) {
    if (cResult[9] === tmp16) {
      let tmp20 = cResult[10];
    }
    if (cResult[11] === tmp4.actions) {
      if (cResult[12] === tmp20) {
        let tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.content) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp22) {
              let tmp26 = cResult[18];
            }
            return tmp26;
          }
        }
      }
      const obj6 = { style: tmp4.content, children: null };
      const items = [tmp5, tmp12, tmp22];
      obj6.children = items;
      const tmp29 = closure_6(View, obj6);
      cResult[14] = tmp4.content;
      cResult[15] = tmp5;
      cResult[16] = tmp12;
      cResult[17] = tmp22;
      cResult[18] = tmp29;
      tmp26 = tmp29;
    }
    const obj7 = { style: tmp4.actions, children: tmp20 };
    const tmp25 = closure_5(View, obj7);
    cResult[11] = tmp4.actions;
    cResult[12] = tmp20;
    cResult[13] = tmp25;
    tmp22 = tmp25;
  }
  const tmp21 = closure_5(require("Pressables").PressableOpacity, { accessibilityRole: "button", style: tmp4.inlineTextWithIcon, onPress: tmp16, children: tmp17 });
  cResult[8] = tmp4.inlineTextWithIcon;
  cResult[9] = tmp16;
  cResult[10] = tmp21;
  tmp20 = tmp21;
  const obj = require("c");
  const obj8 = { accessibilityRole: "button", style: tmp4.inlineTextWithIcon, onPress: tmp16, children: tmp17 };
}) : (function UnreadSettingNoticeConnected(channel) {
  _require = channel;
  const tmp = closure_7();
  const obj = { style: tmp.content, children: null };
  const items = [closure_5(UnreadSettingNoticeImpressionTrackingDefault, { id: channel.channel.id }), , ];
  const obj3 = { style: tmp.informations, children: null };
  const obj4 = { variant: "text-md/semibold", children: null };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t.i4xQ5o);
  obj3.children = closure_5(require("Text/Text").Text, obj4);
  items[1] = closure_5(View, obj3);
  const obj5 = { style: tmp.actions, children: null };
  const obj6 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: null
  };
  const obj7 = { variant: "text-xs/medium", color: "text-link", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(require("util").t.KyUKhT);
  obj6.children = closure_5(require("Text/Text").Text, obj7);
  obj5.children = closure_5(require("Pressables").PressableOpacity, obj6);
  items[2] = closure_5(View, obj5);
  obj.children = items;
  return closure_6(View, obj);
});