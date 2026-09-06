// discord_app/modules/stage_channels/native/components/AudienceTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useAudienceRequestToSpeakState from "../../useAudienceRequestToSpeakState.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground =
    rtsState.rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    let PRIMARY_800 = unsafe_rawColors.WHITE;
    let tmp5 = tmp4;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = tmp4;
  }
  const items = [tmp.raisedHandContainer];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  let obj = { style: items, children: null };
  items[1] = activeBackground;
  obj = { style: tmp.raisedHand, source: tmp5(8616), color: PRIMARY_800 };
  obj.children = hasOwnProperty(native.Icon, obj);
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let obj = {
  touchableContainer: { overflow: "visible" },
  container: { alignItems: "center" },
  avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 },
  raisedHandContainer: null,
  activeBackground: null,
  raisedHand: null,
  nameplateContainer: null,
  usernameText: null,
  faded: null,
};
let size = {
  position: "absolute",
  top: -8,
  right: 0,
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 12,
  borderWidth: 2,
  borderColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  backgroundColor: nativeDefault.colors.WHITE,
};
obj.raisedHandContainer = size;
obj = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.activeBackground = obj;
obj.raisedHand = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj.nameplateContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
const createStyles = { fontSize: 14, color: nativeDefault.colors.WHITE };
obj.usernameText = createStyles;
obj.faded = { opacity: 0.5 };
const styles = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default noop.memo((channel) => {
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
  const items = [GuildMemberStore];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let tmp2 = null != guildId;
      if (tmp2) {
        const member = GuildMemberStore.getMember(tmp, user.id);
        let premiumSince;
        if (member != null) {
          premiumSince = member.premiumSince;
        }
        tmp2 = null != premiumSince;
      }
      return Boolean(tmp2);
    },
    items1,
  );
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
  obj.accessibilityLabel = intl.formatToPlainString(channel(guildId[14]).t.QLMGhv, { name });
  const items2 = [, ,];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: result1 };
  obj.style = items2;
  obj.onPress = function onPress() {
    const obj = { userId: user.id, channelId: channel.id };
    obj.showUserProfile(obj);
  };
  obj = { style: tmp.avatarContainer, children: null };
  obj1 = { user, guildId, size: channel(guildId[7]).AvatarSizes.LARGE, style: null };
  let faded = tmp10;
  if (tmp10) {
    faded = tmp.faded;
  }
  obj1.style = faded;
  const items3 = [closure_5(channel(guildId[7]).CutoutableAvatarImage, obj1)];
  if (result) {
    obj2 = { rtsState };
    result = tmp14(RaisedHandIcon, obj2);
  }
  items3[1] = result;
  obj.children = items3;
  const items4 = [closure_6(View, obj)];
  const obj3 = { style: null, children: null };
  const items5 = [tmp.nameplateContainer];
  obj3.style = items5;
  if (blocked) {
    blocked = tmp14(tmp6(tmp3[16]).BlockedStatus, {});
  }
  const items6 = [blocked, , ,];
  if (ignored) {
    ignored = tmp14(tmp6(tmp3[16]).IgnoredStatus, {});
  }
  items6[1] = ignored;
  const items7 = [tmp.usernameText, ,];
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
    const obj4 = { maxWidth: result1 - 18 * num2 };
    tmp16 = obj4;
  }
  items7[1] = tmp16;
  if (null == theme) {
    const obj5 = { style: null, numberOfLines: 1, children: null };
    items7[2] = tmp17;
    obj5.style = items7;
    obj5.children = name;
    items6[2] = tmp14(tmp6(tmp3[7]).LegacyText, obj5);
    if (stateFromStores) {
      const obj6 = {
        source: tmp2(tmp3[18]),
        size: tmp6(tmp3[7]).Icon.Sizes.SMALL,
        color: tmp2(tmp3[5]).unsafe_rawColors.GUILD_BOOSTING_PINK,
      };
      stateFromStores = tmp14(tmp6(tmp3[7]).Icon, obj6);
    }
    items6[3] = stateFromStores;
    obj3.children = items6;
    items4[1] = tmp12(tmp13, obj3);
    obj.children = items4;
    return tmp12(tmp6(tmp3[13]).LegacyPressable, obj);
  } else {
    const tmp6Result = tmp6(tmp3[17]);
    tmp2(tmp3[5]).unsafe_rawColors;
    const isThemeDarkResult = tmp6(tmp3[17]).isThemeDark(theme);
    const unsafe_rawColors = { color: null };
    unsafe_rawColors.color = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const tmp19 = tmp6(tmp3[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  }
});
export const useAudienceTileStyles = styles;
export const getTileWidthStyle = function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
};
