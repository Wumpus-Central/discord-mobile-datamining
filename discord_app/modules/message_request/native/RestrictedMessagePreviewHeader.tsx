// === Module 16476: RestrictedMessagePreviewHeader ===

// Module 16476 (RestrictedMessagePreviewHeader)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MOBILE_MESSAGE_REQUESTS_MODAL_KEY as closure_5 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL" /* 12007 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { alignItems: "flex-start", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_4 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginBottom: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  let userTag;
  const tmp = callback2();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  obj1 = user(analyticsLocations[7]);
  userTag = obj1.getUserTag(user, { decoration: "never", identifiable: "always" });
  const items = [user.id, channel.id, analyticsLocations];
  const callback = userTag.useCallback(() => {
    user(analyticsLocations[8])({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = userTag.useCallback(() => {
    channel(analyticsLocations[9]).copy(userTag);
    const obj = channel(analyticsLocations[9]);
    const result = channel(analyticsLocations[10]).presentUsernameCopied();
  }, items1);
  obj = { style: tmp.container, children: null };
  callback2 = userTag.useCallback(() => {
    let obj = user(analyticsLocations[11]);
    obj = {
      user,
      onPressMutualGuild(arg0) {
        const result = callback(8559).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = callback(8559);
        callback(6186).transitionToGuild(arg0);
        const obj2 = callback(6186);
        callback2(4445).hideActionSheet();
        const obj3 = callback2(4445);
        callback2(4723).popWithKey(closure_5);
      }
    };
    obj.openLazy(channel(analyticsLocations[13])(analyticsLocations[12], analyticsLocations.paths), "MutualGuildsActionSheet", obj);
  }, items2);
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(analyticsLocations[18]).intl;
  obj[1] = intl.string(channel(analyticsLocations[18]).t.iXAna6);
  obj[2] = callback;
  obj1 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
  obj[3] = callback(channel(analyticsLocations[19]).Avatar, obj1);
  const items3 = [callback(channel(analyticsLocations[17]).PressableOpacity, obj), , , , , ];
  let obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = channel(analyticsLocations[18]).intl;
  obj2[1] = intl2.string(channel(analyticsLocations[18]).t.iXAna6);
  obj2[2] = callback;
  obj2[3] = callback(channel(analyticsLocations[20]).Text, { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name });
  items3[1] = callback(channel(analyticsLocations[17]).PressableOpacity, obj2);
  const isProvisional = user.isProvisional;
  let tmp11Result = !isProvisional;
  if (!isProvisional) {
    let obj3 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, children: null };
    const intl3 = tmp12(tmp3[18]).intl;
    obj3[1] = intl3.string(tmp12(tmp3[18]).t.y5MwJy);
    obj3[2] = callback1;
    const obj4 = { variant: "heading-lg/medium", color: "text-default", children: null };
    obj4[2] = userTag;
    obj3[3] = tmp11(tmp12(tmp3[20]).Text, obj4);
    tmp11Result = tmp11(tmp12(tmp3[17]).PressableOpacity, obj3);
  }
  items3[2] = tmp11Result;
  const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp12(tmp3[18]).intl;
  obj5[2] = intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name });
  items3[3] = callback(channel(analyticsLocations[20]).Text, obj5);
  const obj6 = { userId: user.id, onPress: callback2, iconSize: channel(analyticsLocations[22]).GuildIconSizes.XSMALL, textVariant: "text-md/medium" };
  items3[4] = callback(user(analyticsLocations[21]), obj6);
  items3[5] = callback(user(analyticsLocations[23]), { channel, user });
  obj[1] = items3;
  return closure_7(View, obj);
};