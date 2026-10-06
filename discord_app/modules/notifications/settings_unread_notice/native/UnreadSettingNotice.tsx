// === Module 11087: UnreadSettingNotice ===

// Module 11087 (UnreadSettingNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import UnreadSettingNoticeImpressionTrackingDefault from "UnreadSettingNoticeImpressionTracking" /* 11088 */;
import updateChannelUnreadSettingsDefault from "updateChannelUnreadSettings" /* 11089 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = UserSettingsConstants.ChannelNotificationSettingsFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, informations: { flex: 1 }, actions: { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 }, inlineTextWithIcon: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj2 = { display: "flex", flexDirection: "row", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let intl;
  let intl2;
  let items;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp5;
  let tmp9;
  _require = channel;
  const obj = require("react");
  const cResult = obj.c(19);
  const tmp4 = closure_7();
  if (cResult[0] !== channel.channel.id) {
    const obj2 = { id: channel.channel.id };
    const tmp8 = closure_5(UnreadSettingNoticeImpressionTrackingDefault, obj2);
    cResult[0] = channel.channel.id;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/semibold", children: intl.string(require("intl").t.i4xQ5o) };
    const Text = tmp(4892).Text;
    intl = tmp(1126).intl;
    const tmp11 = closure_5(Text, obj3);
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4.informations) {
    const obj4 = { style: tmp4.informations, children: tmp9 };
    const tmp15 = closure_5(View, obj4);
    cResult[3] = tmp4.informations;
    cResult[4] = tmp15;
    tmp12 = tmp15;
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
    tmp16 = fn;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-xs/medium", color: "text-link", children: intl2.string(require("intl").t.KyUKhT) };
    const Text2 = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    const tmp19 = closure_5(Text2, obj5);
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp4.inlineTextWithIcon) {
    let tmp20;
    if (cResult[9] === tmp16) {
      tmp20 = cResult[10];
    }
    if (cResult[11] === tmp4.actions) {
      let tmp22;
      if (cResult[12] === tmp20) {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.content) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp12) {
            let tmp26;
            if (cResult[17] === tmp22) {
              tmp26 = cResult[18];
            }
            return tmp26;
          }
        }
      }
      const obj6 = { style: tmp4.content, children: items };
      items = [tmp5, tmp12, tmp22];
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
  const obj8 = { accessibilityRole: "button", style: tmp4.inlineTextWithIcon, onPress: tmp16, children: tmp17 };
  const tmp21 = closure_5(require("Pressables").PressableOpacity, obj8);
  cResult[8] = tmp4.inlineTextWithIcon;
  cResult[9] = tmp16;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : ((channel) => {
  let PressableOpacity;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items;
  let obj4;
  let obj6;
  let obj7;
  _require = channel;
  const tmp = closure_7();
  const obj = { style: tmp.content, children: items };
  items = [, , ];
  const obj2 = { id: channel.channel.id };
  items[0] = closure_5(UnreadSettingNoticeImpressionTrackingDefault, obj2);
  const obj3 = { style: tmp.informations, children: closure_5(Text, obj4) };
  obj4 = { variant: "text-md/semibold", children: intl.string(require("intl").t.i4xQ5o) };
  Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[1] = closure_5(View, obj3);
  const obj5 = { style: tmp.actions, children: closure_5(PressableOpacity, obj6) };
  obj6 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      updateChannelUnreadSettingsDefault(channel.channel.guild_id, channel.channel.id, constants.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    },
    children: closure_5(Text2, obj7)
  };
  PressableOpacity = require("Pressables").PressableOpacity;
  obj7 = { variant: "text-xs/medium", color: "text-link", children: intl2.string(require("intl").t.KyUKhT) };
  Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[2] = closure_5(View, obj5);
  return closure_6(View, obj);
});
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default tmp6;