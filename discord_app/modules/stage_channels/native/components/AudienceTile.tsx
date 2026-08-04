// discord_app/modules/stage_channels/native/components/AudienceTile.tsx
import { View } from "AccessibilityAnnouncer";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "set";

let c5;
let closure_6;
const require = arg1;
function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground = rtsState.rtsState === require(4378) /* useAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  if (activeBackground) {
    let PRIMARY_800 = unsafe_rawColors.WHITE;
    let tmp5 = tmp4;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = tmp4;
  }
  const items = [tmp.raisedHandContainer, ];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  let obj = { style: items, children: null };
  items[1] = activeBackground;
  obj = { style: tmp.raisedHand, source: null, color: null };
  obj[1] = tmp5(7678);
  obj[2] = PRIMARY_800;
  obj[1] = closure_5(require(1297) /* Button */.Icon, obj);
  return closure_5(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 }, raisedHandContainer: null, activeBackground: null, raisedHand: null, nameplateContainer: null, usernameText: null, faded: null };
obj = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: require("Themes").unsafe_rawColors.PRIMARY_800, backgroundColor: require("Themes").colors.WHITE };
obj[3] = obj;
createCacheKey = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360 };
obj[4] = createCacheKey;
obj[5] = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj[6] = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj[7] = { fontSize: 14, color: require("Themes").colors.WHITE };
obj[8] = { opacity: 0.5 };
const styles = createCacheKey.createStyles(obj);
let obj2 = { fontSize: 14, color: require("Themes").colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
  let rtsState;
  channel = channel.channel;
  const participant = channel.participant;
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  let guildId;
  const tmp = styles();
  const diff = user(guildId[9])().width - 46;
  guildId = channel.getGuildId();
  let obj = channel(guildId[10]);
  const items = [trackCommunicationDisabled];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      const member = outer1_4.getMember(tmp, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return Boolean(tmp2);
  }, items1);
  let obj1 = channel(guildId[11]);
  let result = obj1.isRequestedToSpeakAll(rtsState);
  let obj2 = user(guildId[12]);
  const name = obj2.getName(guildId, channel.id, user);
  let tmp10 = blocked;
  if (!blocked) {
    tmp10 = ignored;
  }
  const result1 = diff / 4;
  obj = { accessibilityLabel: null, style: null, accessibilityRole: "button", onPress: null, children: null };
  const intl = tmp6(tmp3[14]).intl;
  obj[0] = intl.formatToPlainString(channel(guildId[14]).t.QLMGhv, { name });
  const items2 = [, , ];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: result1 };
  obj[1] = items2;
  obj[3] = function onPress() {
    let obj = channel(guildId[15]);
    obj = { userId: user.id, channelId: channel.id };
    obj.showUserProfile(obj);
  };
  obj = { style: tmp.avatarContainer, children: null };
  obj1 = { user, guildId: null, size: null, style: null };
  obj1[1] = guildId;
  obj1[2] = channel(guildId[7]).AvatarSizes.LARGE;
  let faded = tmp10;
  if (tmp10) {
    faded = tmp.faded;
  }
  obj1[3] = faded;
  const items3 = [closure_5(channel(guildId[7]).CutoutableAvatarImage, obj1), ];
  if (result) {
    obj2 = { rtsState: null };
    obj2[0] = rtsState;
    result = tmp14(RaisedHandIcon, obj2);
  }
  items3[1] = result;
  obj[1] = items3;
  const items4 = [closure_6(View, obj), ];
  const obj3 = { style: items5, children: null };
  items5 = [tmp.nameplateContainer];
  if (blocked) {
    blocked = tmp14(tmp6(tmp3[16]).BlockedStatus, {});
  }
  const items6 = [blocked, , , ];
  if (ignored) {
    ignored = tmp14(tmp6(tmp3[16]).IgnoredStatus, {});
  }
  items6[1] = ignored;
  const items7 = [tmp.usernameText, , ];
  let tmp16 = stateFromStores;
  if (!stateFromStores) {
    tmp16 = tmp10;
  }
  if (tmp16) {
    let num2 = 1;
    if (stateFromStores) {
      num2 = 1;
      if (tmp10) {
        num2 = 2;
      }
    }
    const obj4 = { maxWidth: null };
    obj4[0] = result1 - 18 * num2;
    tmp16 = obj4;
  }
  items7[1] = tmp16;
  if (null == theme) {
    const obj5 = { style: null, numberOfLines: 1, children: null };
    items7[2] = tmp17;
    obj5[0] = items7;
    obj5[2] = name;
    items6[2] = tmp14(tmp6(tmp3[7]).LegacyText, obj5);
    if (stateFromStores) {
      const obj6 = { source: null, size: null, color: null };
      obj6[0] = tmp2(tmp3[18]);
      obj6[1] = tmp6(tmp3[7]).Icon.Sizes.SMALL;
      obj6[2] = tmp2(tmp3[5]).unsafe_rawColors.GUILD_BOOSTING_PINK;
      stateFromStores = tmp14(tmp6(tmp3[7]).Icon, obj6);
    }
    items6[3] = stateFromStores;
    obj3[1] = items6;
    items4[1] = tmp12(tmp13, obj3);
    obj[4] = items4;
    return tmp12(tmp6(tmp3[13]).Pressable, obj);
  } else {
    const tmp6Result = tmp6(tmp3[17]);
    let unsafe_rawColors = tmp2(tmp3[5]).unsafe_rawColors;
    const isThemeDarkResult = tmp6(tmp3[17]).isThemeDark(theme);
    unsafe_rawColors = { color: null };
    unsafe_rawColors[0] = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const tmp19 = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  }
});
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export const getTileWidthStyle = function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
};