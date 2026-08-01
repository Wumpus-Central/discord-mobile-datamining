// === Module 15745: RestrictedMessagePreviewHeader ===

// Module 15745 (RestrictedMessagePreviewHeader)
import Button from "Button";
import { View } from "PressableBase";
import { MOBILE_MESSAGE_REQUESTS_MODAL_KEY as closure_5 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import jsxProd from "MessageRequestMutualServers";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { alignItems: "flex-start", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginBottom: require("Themes").space.PX_4 };
let result = require("MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  let userTag;
  const tmp = createCacheKey();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  let obj1 = user(analyticsLocations[7]);
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
  const callback2 = userTag.useCallback(() => {
    let obj = user(analyticsLocations[11]);
    obj = {
      user,
      onPressMutualGuild(arg0) {
        const result = callback(8112).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = callback(8112);
        callback(6693).transitionToGuild(arg0);
        const obj2 = callback(6693);
        callback2(4161).hideActionSheet();
        const obj3 = callback2(4161);
        callback2(4399).popWithKey(closure_5);
      }
    };
    obj.openLazy(channel(analyticsLocations[13])(analyticsLocations[12], analyticsLocations.paths), "MutualGuildsActionSheet", obj);
  }, items2);
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(analyticsLocations[18]).intl;
  obj[1] = intl.string(channel(analyticsLocations[18]).t.iXAna6);
  obj[2] = callback;
  obj1 = { style: tmp.avatar, user, guildId: channel.guild_id, size: null, avatarDecoration: null };
  obj1[3] = channel(analyticsLocations[19]).AvatarSizes.XXLARGE;
  obj1[4] = user.avatarDecoration;
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
  const obj6 = { userId: user.id, onPress: callback2, iconSize: null, textVariant: "text-md/medium" };
  obj6[2] = channel(analyticsLocations[22]).GuildIconSizes.XSMALL;
  items3[4] = callback(user(analyticsLocations[21]), obj6);
  items3[5] = callback(user(analyticsLocations[23]), { channel, user });
  obj[1] = items3;
  return closure_7(View, obj);
};