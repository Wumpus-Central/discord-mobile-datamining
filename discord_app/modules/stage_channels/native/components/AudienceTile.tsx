// discord_app/modules/stage_channels/native/components/AudienceTile.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useAudienceRequestToSpeakState from "../../useAudienceRequestToSpeakState.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let channel, dependencyMap, obj1, showUserProfileResult, tmp3;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  touchableContainer: { overflow: "visible" },
  container: { alignItems: "center" },
  avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 },
  raisedHandContainer: size,
  activeBackground: obj2,
  raisedHand: { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" },
  nameplateContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  usernameText: obj3,
  faded: { opacity: 0.5 },
};
size = {
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
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj3 = { fontSize: 14, color: nativeDefault.colors.WHITE };
const styles = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (rtsState) => {
      let PRIMARY_800;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(9);
      rtsState = rtsState.rtsState;
      const tmp4 = styles();
      let activeBackground =
        rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (activeBackground) {
        PRIMARY_800 = unsafe_rawColors.WHITE;
        tmp6 = importDefault;
      } else {
        PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
        tmp6 = importDefault;
      }
      if (activeBackground) {
        activeBackground = tmp4.activeBackground;
      }
      if (cResult[0] === tmp4.raisedHandContainer) {
        let tmp7;
        if (cResult[1] === activeBackground) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === PRIMARY_800) {
          let tmp8;
          if (cResult[4] === tmp4.raisedHand) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp7) {
            let tmp11;
            if (cResult[7] === tmp8) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
          const obj2 = { style: tmp7, children: tmp8 };
          const tmp14 = hasOwnProperty(View, obj2);
          cResult[6] = tmp7;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const obj3 = { style: tmp4.raisedHand, source: tmp6(9612), color: PRIMARY_800 };
        const Icon = native.Icon;
        const tmp10 = hasOwnProperty(Icon, obj3);
        cResult[3] = PRIMARY_800;
        cResult[4] = tmp4.raisedHand;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      const items = [tmp4.raisedHandContainer, activeBackground];
      cResult[0] = tmp4.raisedHandContainer;
      cResult[1] = activeBackground;
      cResult[2] = items;
      tmp7 = items;
    }
  : (rtsState) => {
      let Icon;
      let PRIMARY_800;
      let obj2;
      let tmp5;
      rtsState = rtsState.rtsState;
      const tmp = styles();
      let activeBackground =
        rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (activeBackground) {
        PRIMARY_800 = unsafe_rawColors.WHITE;
        tmp5 = importDefault;
      } else {
        PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
        tmp5 = importDefault;
      }
      const items = [tmp.raisedHandContainer];
      if (activeBackground) {
        activeBackground = tmp.activeBackground;
      }
      items[1] = activeBackground;
      const obj = { style: items, children: hasOwnProperty(Icon, obj2) };
      obj2 = { style: tmp.raisedHand, source: tmp5(9612), color: PRIMARY_800 };
      Icon = native.Icon;
      return hasOwnProperty(View, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function getTileWidthStyle(width) {
  return (width - 46) / 4;
}
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let blocked;
        let closure_2;
        let ignored;
        let participant;
        let rtsState;
        let theme;
        let tmp7;
        let tmp9;
        const tmp = channel;
        let tmp2 = dependencyMap;
        let obj = channel(576);
        const cResult = obj.c(72);
        channel = channel.channel;
        ({ participant, theme } = channel);
        const user = participant.user;
        ({ rtsState, blocked, ignored } = participant);
        const tmp4 = styles();
        const diff = user(1484)().width - 46;
        const tmp5 = user;
        if (cResult[0] !== channel) {
          const guildId = channel.getGuildId();
          cResult[0] = channel;
          cResult[1] = guildId;
          tmp7 = guildId;
        } else {
          tmp7 = cResult[1];
        }
        dependencyMap = tmp7;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildMemberStore];
          cResult[2] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === tmp7) {
          let tmp11;
          let tmp12;
          if (cResult[4] === user.id) {
            tmp11 = cResult[5];
            tmp12 = cResult[6];
          }
          const tmpResult = tmp(504);
          const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
          if (cResult[7] !== rtsState) {
            const tmpResult2 = tmp(5589);
            const result = tmpResult2.isRequestedToSpeakAll(rtsState);
            cResult[7] = rtsState;
            class H {
              constructor() {
                obj = closure_0(closure_2[14]);
                obj1 = { userId: user.id, channelId: channel.id };
                showUserProfileResult = obj.showUserProfile(obj1);
                return;
              }
            }
          }
          if (cResult[9] === channel.id) {
            if (cResult[12] === blocked) {
              if (cResult[13] === channel.id) {
                if (cResult[14] === tmp7) {
                  if (cResult[15] === ignored) {
                    let tmp26;
                    const result1 = diff / 4;
                    if (cResult[21] !== result1) {
                      let obj2 = { width: result1 };
                      cResult[21] = result1;
                      class H {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          obj1 = { userId: user.id, channelId: channel.id };
                          showUserProfileResult = obj.showUserProfile(obj1);
                          return;
                        }
                      }
                      tmp26 = obj2;
                    } else {
                      tmp26 = cResult[22];
                    }
                    if (cResult[23] === tmp4.container) {
                      if (cResult[24] === tmp4.touchableContainer) {
                        class H {
                          constructor() {
                            obj = closure_0(closure_2[14]);
                            obj1 = { userId: user.id, channelId: channel.id };
                            showUserProfileResult = obj.showUserProfile(obj1);
                            return;
                          }
                        }
                        const obj3 = {
                          user,
                          guildId: tmp7,
                          size: tmp(1188).AvatarSizes.LARGE,
                          style: tmp18 && tmp4.faded,
                        };
                        const CutoutableAvatarImage = tmp(1188).CutoutableAvatarImage;
                        cResult[27] = tmp7;
                        cResult[28] = tmp18 && tmp4.faded;
                        cResult[29] = user;
                        cResult[30] = closure_5(CutoutableAvatarImage, obj3);
                        const tmp34 = closure_5(CutoutableAvatarImage, obj3);
                      }
                    }
                    class H {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        obj1 = { userId: user.id, channelId: channel.id };
                        showUserProfileResult = obj.showUserProfile(obj1);
                        return;
                      }
                    }
                    ({ touchableContainer: tmp28[0], container: tmp28[1] } = tmp4);
                    tmp28[2] = tmp26;
                    cResult[23] = tmp4.container;
                    cResult[24] = tmp4.touchableContainer;
                    cResult[25] = tmp26;
                    cResult[26] = tmp28;
                  }
                }
              }
            }
            const tmp5Result = tmp5(5048);
            const name = tmp5Result.getName(tmp7, channel.id, user);
            const tmp22 = blocked || ignored;
            class H {
              constructor() {
                obj = closure_0(closure_2[14]);
                obj1 = { userId: user.id, channelId: channel.id };
                showUserProfileResult = obj.showUserProfile(obj1);
                return;
              }
            }
            const intl = tmp(1126).intl;
            const obj4 = { name };
            cResult[12] = blocked;
            cResult[13] = channel.id;
            cResult[14] = tmp7;
            cResult[15] = ignored;
            cResult[16] = user;
            cResult[17] = tmp23;
            cResult[18] = tmp22;
            cResult[19] = name;
            cResult[20] = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj4);
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj4);
            class R {
              constructor() {
                tmp2 = null != closure_2;
                _Boolean = Boolean;
                if (tmp2) {
                  tmp3 = closure_4;
                  tmp4 = user;
                  member = closure_4.getMember(tmp, user.id);
                  premiumSince = undefined;
                  if (member != null) {
                    premiumSince = member.premiumSince;
                  }
                  tmp2 = null != premiumSince;
                }
                return _Boolean(tmp2);
              }
            }
          }
          class H {
            constructor() {
              obj = closure_0(closure_2[14]);
              obj1 = { userId: user.id, channelId: channel.id };
              showUserProfileResult = obj.showUserProfile(obj1);
              return;
            }
          }
          cResult[9] = channel.id;
          cResult[10] = user.id;
          cResult[11] = H;
        }
        class R {
          constructor() {
            tmp2 = null != closure_2;
            _Boolean = Boolean;
            if (tmp2) {
              tmp3 = closure_4;
              tmp4 = user;
              member = closure_4.getMember(tmp, user.id);
              premiumSince = undefined;
              if (member != null) {
                premiumSince = member.premiumSince;
              }
              tmp2 = null != premiumSince;
            }
            return _Boolean(tmp2);
          }
        }
        const items1 = [tmp7, user.id];
        cResult[3] = tmp7;
        cResult[4] = user.id;
        cResult[5] = R;
        cResult[6] = items1;
        tmp12 = items1;
        tmp11 = R;
      }
    : (channel) => {
        let blocked;
        let ignored;
        let intl;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let rtsState;
        channel = channel.channel;
        const participant = channel.participant;
        const user = participant.user;
        ({ rtsState, blocked, ignored } = participant);
        const theme = channel.theme;
        let guildId;
        const tmp = styles();
        let tmp2 = user;
        const diff = user(guildId[11])().width - 46;
        guildId = channel.getGuildId();
        let obj = channel(guildId[12]);
        const items = [GuildMemberStore];
        const items1 = [guildId, user.id];
        let stateFromStores = obj.useStateFromStores(
          items,
          () => {
            let tmp2 = null != guildId;
            const _Boolean = Boolean;
            if (tmp2) {
              const member = GuildMemberStore.getMember(tmp, user.id);
              let premiumSince;
              if (member != null) {
                premiumSince = member.premiumSince;
              }
              tmp2 = null != premiumSince;
            }
            return _Boolean(tmp2);
          },
          items1,
        );
        let obj2 = channel(guildId[13]);
        let result = obj2.isRequestedToSpeakAll(rtsState);
        const obj3 = user(guildId[15]);
        const name = obj3.getName(guildId, channel.id, user);
        const result1 = diff / 4;
        const obj4 = {
          accessibilityLabel: intl.formatToPlainString(channel(guildId[17]).t.QLMGhv, { name }),
          style: items2,
          accessibilityRole: "button",
          onPress() {
            const obj = StageChannelModalActionCreators;
            const obj2 = { userId: user.id, channelId: channel.id };
            obj.showUserProfile(obj2);
          },
          children: items4,
        };
        const LegacyPressable = tmp6(tmp3[16]).LegacyPressable;
        intl = tmp6(tmp3[17]).intl;
        items2 = [, ,];
        ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
        items2[2] = { width: result1 };
        const obj5 = { style: tmp.avatarContainer, children: items3 };
        const obj6 = {
          user,
          guildId,
          size: channel(guildId[9]).AvatarSizes.LARGE,
          style: (blocked || ignored) && tmp.faded,
        };
        const CutoutableAvatarImage = tmp6(tmp3[9]).CutoutableAvatarImage;
        items3 = [closure_5(CutoutableAvatarImage, obj6)];
        if (result) {
          const obj7 = { rtsState };
          result = closure_5(closure_8, obj7);
        }
        items3[1] = result;
        items4 = [closure_6(View, obj5)];
        const obj8 = { style: items5, children: items6 };
        items5 = [tmp.nameplateContainer];
        if (blocked) {
          blocked = closure_5(tmp6(tmp3[18]).BlockedStatus, {});
        }
        items6 = [blocked, , ,];
        if (ignored) {
          ignored = closure_5(tmp6(tmp3[18]).IgnoredStatus, {});
        }
        items6[1] = ignored;
        const items7 = [tmp.usernameText, ,];
        let tmp16 = stateFromStores;
        const LegacyText = tmp6(tmp3[9]).LegacyText;
        if (!stateFromStores) {
          tmp16 = tmp10;
        }
        if (tmp16) {
          let num2 = 1;
          if (stateFromStores) {
            num2 = 1;
            if (blocked || ignored) {
              num2 = 2;
            }
          }
          tmp16 = { maxWidth: result1 - 18 * num2 };
          const obj9 = { maxWidth: result1 - 18 * num2 };
        }
        items7[1] = tmp16;
        let tmp17 = null != theme;
        if (tmp17) {
          const tmp6Result = channel(guildId[19]);
          const isThemeDarkResult = tmp6Result.isThemeDark(theme);
          const unsafe_rawColors = tmp2(tmp3[5]).unsafe_rawColors;
          tmp17 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
          const obj10 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
        }
        items7[2] = tmp17;
        items6[2] = closure_5(LegacyText, { style: items7, numberOfLines: 1, children: name });
        if (stateFromStores) {
          const obj11 = {
            source: tmp2(guildId[20]),
            size: channel(guildId[9]).Icon.Sizes.SMALL,
            color: tmp2(guildId[5]).unsafe_rawColors.GUILD_BOOSTING_PINK,
          };
          const Icon = tmp6(tmp3[9]).Icon;
          stateFromStores = closure_5(Icon, obj11);
        }
        items6[3] = stateFromStores;
        items4[1] = closure_6(View, obj8);
        return closure_6(LegacyPressable, obj4);
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };
