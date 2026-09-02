// discord_app/modules/guild_sidebar/native/VoiceChannelUserLimit.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/13668_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { videoIcon: null, wrapper: null, left: null, mid: null, right: null };
obj = { height: 16, width: 16, marginRight: 4, tintColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_ICON };
obj[0] = obj;
createCacheKey = {
  backgroundColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: 10,
  borderWidth: ThemesDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
obj[1] = createCacheKey;
obj[2] = {
  height: 20,
  flexDirection: "row",
  paddingLeft: 6,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
};
let obj2 = {
  height: 20,
  flexDirection: "row",
  paddingLeft: 6,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
};
obj[3] = {
  borderTopWidth: 20,
  borderBottomWidth: 0,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderRightWidth: 6,
  borderRightColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
  paddingRight: 2,
};
let obj3 = {
  borderTopWidth: 20,
  borderBottomWidth: 0,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderRightWidth: 6,
  borderRightColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
  paddingRight: 2,
};
obj[4] = {
  height: 20,
  flexDirection: "row",
  paddingRight: 6,
  paddingLeft: 2,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
};
let closure_6 = createCacheKey.createStyles(obj);
let obj4 = {
  height: 20,
  flexDirection: "row",
  paddingRight: 6,
  paddingLeft: 2,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
};
const memoResult = importAllResult.memo(function VoiceChannelUserLimit(videoLimit) {
  ({ users, total } = videoLimit);
  const rect = callback2();
  let obj = { style: rect.wrapper, children: null };
  obj = { style: rect.left, children: null };
  let tmp3 = null;
  if (videoLimit.videoLimit) {
    obj = { source: null, size: null, style: null };
    obj[0] = registerAssetDefault;
    obj[1] = Button.Icon.Sizes.REFRESH_SMALL_16;
    obj[2] = rect.videoIcon;
    tmp3 = callback(Button.Icon, obj);
  }
  const items = [tmp3];
  obj1 = {
    variant: "text-xs/medium",
    lineClamp: 1,
    color: "voice-channel-user-limit-text",
    children: users.toString().padStart(2, "0"),
  };
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  const items1 = [closure_5(View, obj), callback(View, { style: rect.mid })];
  const obj3 = { style: rect.right, children: null };
  const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: null };
  const obj2 = { style: rect.mid };
  const str = users.toString();
  obj4[3] = total.toString().padStart(2, "0");
  obj3[1] = callback(Text.Text, obj4);
  items1[2] = callback(View, obj3);
  obj[1] = items1;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default memoResult;
