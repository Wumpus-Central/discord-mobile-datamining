// === Module 12625: RaisedHandIcon ===

// Module 12625 (RaisedHandIcon)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4981 */;
import { View } from "get ActivityIndicator" /* 17 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground = rtsState.rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  if (activeBackground) {
    let PRIMARY_800 = unsafe_rawColors.WHITE;
    let tmp5 = importDefault;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = importDefault;
  }
  const items = [tmp.raisedHandContainer, ];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  items[1] = activeBackground;
  const obj = { style: tmp.raisedHand, source: tmp5(8119), color: PRIMARY_800 };
  obj[1] = callback(Button.Icon, obj);
  return callback(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: ThemesDefault.unsafe_rawColors.PRIMARY_800, backgroundColor: ThemesDefault.colors.WHITE };
obj[3] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[4] = createCacheKey;
obj[5] = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj[6] = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj[7] = { fontSize: 14, color: ThemesDefault.colors.WHITE };
obj[8] = { opacity: 0.5 };
const styles = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
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
  const items = [closure_4];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      const member = closure_1_4.getMember(tmp, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return Boolean(tmp2);
  }, items1);
  obj1 = channel(guildId[11]);
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
    channel(guildId[15]);
    const obj = { userId: user.id, channelId: channel.id };
    obj.showUserProfile(obj);
  };
  obj = { style: tmp.avatarContainer, children: null };
  obj1 = { user, guildId, size: channel(guildId[7]).AvatarSizes.LARGE, style: null };
  let faded = tmp10;
  if (tmp10) {
    faded = tmp.faded;
  }
  obj1[3] = faded;
  const items3 = [callback(channel(guildId[7]).CutoutableAvatarImage, obj1), ];
  if (result) {
    obj2 = { rtsState: null };
    obj2[0] = rtsState;
    result = callback(RaisedHandIcon, obj2);
  }
  items3[1] = result;
  obj[1] = items3;
  const items4 = [callback2(View, obj), ];
  const obj3 = { style: items5, children: null };
  items5 = [tmp.nameplateContainer];
  if (blocked) {
    blocked = callback(tmp6(tmp3[16]).BlockedStatus, {});
  }
  const items6 = [blocked, , , ];
  if (ignored) {
    ignored = callback(tmp6(tmp3[16]).IgnoredStatus, {});
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
    items6[2] = callback(tmp6(tmp3[7]).LegacyText, obj5);
    if (stateFromStores) {
      const obj6 = { source: null, size: null, color: null };
      obj6[0] = tmp2(tmp3[18]);
      obj6[1] = tmp6(tmp3[7]).Icon.Sizes.SMALL;
      obj6[2] = tmp2(tmp3[5]).unsafe_rawColors.GUILD_BOOSTING_PINK;
      stateFromStores = callback(tmp6(tmp3[7]).Icon, obj6);
    }
    items6[3] = stateFromStores;
    obj3[1] = items6;
    items4[1] = callback2(View, obj3);
    obj[4] = items4;
    return callback2(tmp6(tmp3[13]).LegacyPressable, obj);
  } else {
    const tmp6Result = tmp6(tmp3[17]);
    tmp2(tmp3[5]).unsafe_rawColors;
    const isThemeDarkResult = tmp6(tmp3[17]).isThemeDark(theme);
    const unsafe_rawColors = { color: null };
    unsafe_rawColors[0] = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const tmp19 = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  }
});
let result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export const getTileWidthStyle = function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
};