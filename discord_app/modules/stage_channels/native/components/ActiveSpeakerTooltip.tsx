// discord_app/modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import UserSummaryItemDefault from "../../../../components_native/common/UserSummaryItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import StageChannelListStore from "../StageChannelListStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ useActiveSpeakerPillScrollHandler: metroRequire, useActiveSpeakerPillState: metroImportDefault } =
  StageChannelListStore);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  participantItemContainer: obj2,
  participantAvatarContainer: { alignItems: "center", justifyContent: "center" },
  participantAvatarText: obj3,
  participantNameplateContainer: {
    paddingHorizontal: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  participantNameplateSpeakingText: obj4,
};
obj2 = {
  padding: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
};
createStyles = createStyles.createStyles;
obj3 = {
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  lineHeight: 18,
};
obj4 = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let container;
        let first;
        let items2;
        let participantAvatarContainer;
        let participantAvatarText;
        let participantItemContainer;
        let participantNameplateContainer;
        let participantNameplateSpeakingText;
        let tmp7;
        let tmp8;
        const obj = channel(576);
        const cResult = obj.c(30);
        channel = channel.channel;
        const tmp4 = closure_10();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ChannelRTCStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel.id) {
          const fn = function u() {
            const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
            const items = [
              speakingParticipants.map((user) => user.user),
              ChannelRTCStore.getParticipantsVersion(channel.id),
            ];
            return items;
          };
          const items1 = [channel.id];
          cResult[1] = channel.id;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp8 = items1;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
          tmp8 = cResult[3];
        }
        const tmpResult = channel(504);
        const first1 = _slicedToArray(tmpResult.useStateFromStores(first, tmp7, tmp8, tmp(5589).isVersionEqual), 1)[0];
        const first2 = _slicedToArray(closure_7(), 1)[0];
        const tmp10 = _slicedToArray(closure_6(), 2)[1];
        if (0 !== first1.length) {
          if (first2) {
            let tmp11;
            ({ container, participantItemContainer, participantAvatarContainer, participantAvatarText } = tmp4);
            const id = channel.id;
            if (cResult[4] !== channel) {
              const guildId = channel.getGuildId();
              cResult[4] = channel;
              cResult[5] = guildId;
              tmp11 = guildId;
            } else {
              tmp11 = cResult[5];
            }
            if (cResult[6] === channel.id) {
              if (cResult[7] === first1) {
                if (cResult[8] === tmp4.participantAvatarText) {
                  let tmp13;
                  if (cResult[9] === tmp11) {
                    tmp13 = cResult[10];
                  }
                  if (cResult[11] === tmp4.participantAvatarContainer) {
                    let tmp17;
                    let tmp21;
                    if (cResult[12] === tmp13) {
                      tmp17 = cResult[13];
                    }
                    ({ participantNameplateContainer, participantNameplateSpeakingText } = tmp4);
                    if (cResult[14] !== first1.length) {
                      const intl = tmp(1126).intl;
                      const obj2 = { count: first1.length };
                      const formatResult = intl.format(channel(1126).t["+dia6l"], obj2);
                      cResult[14] = first1.length;
                      cResult[15] = formatResult;
                      tmp21 = formatResult;
                    } else {
                      tmp21 = cResult[15];
                    }
                    if (cResult[16] === tmp4.participantNameplateSpeakingText) {
                      let tmp23;
                      if (cResult[17] === tmp21) {
                        tmp23 = cResult[18];
                      }
                      if (cResult[19] === tmp4.participantNameplateContainer) {
                        let tmp26;
                        if (cResult[20] === tmp23) {
                          tmp26 = cResult[21];
                        }
                        if (cResult[22] === tmp4.participantItemContainer) {
                          if (cResult[23] === tmp17) {
                            let tmp30;
                            if (cResult[24] === tmp26) {
                              tmp30 = cResult[25];
                            }
                            if (cResult[26] === tmp10) {
                              if (cResult[27] === tmp4.container) {
                                let tmp34;
                                if (cResult[28] === tmp30) {
                                  tmp34 = cResult[29];
                                }
                                return tmp34;
                              }
                            }
                            const obj3 = {
                              accessibilityRole: "button",
                              style: container,
                              onPress: tmp10,
                              children: tmp30,
                            };
                            const tmp36 = closure_8(channel(5909).PressableOpacity, obj3);
                            cResult[26] = tmp10;
                            cResult[27] = tmp4.container;
                            cResult[28] = tmp30;
                            cResult[29] = tmp36;
                            tmp34 = tmp36;
                          }
                        }
                        const obj4 = { style: participantItemContainer, children: items2 };
                        items2 = [tmp17, tmp26];
                        const tmp33 = closure_9(View, obj4);
                        cResult[22] = tmp4.participantItemContainer;
                        cResult[23] = tmp17;
                        cResult[24] = tmp26;
                        cResult[25] = tmp33;
                        tmp30 = tmp33;
                      }
                      const obj5 = { style: participantNameplateContainer, children: tmp23 };
                      const tmp29 = closure_8(View, obj5);
                      cResult[19] = tmp4.participantNameplateContainer;
                      cResult[20] = tmp23;
                      cResult[21] = tmp29;
                      tmp26 = tmp29;
                    }
                    const obj6 = {
                      style: participantNameplateSpeakingText,
                      variant: "text-xs/medium",
                      color: "text-default",
                      children: tmp21,
                    };
                    const tmp25 = closure_8(channel(4886).Text, obj6);
                    cResult[16] = tmp4.participantNameplateSpeakingText;
                    cResult[17] = tmp21;
                    cResult[18] = tmp25;
                    tmp23 = tmp25;
                  }
                  const obj7 = { style: participantAvatarContainer, children: tmp13 };
                  const tmp20 = closure_8(View, obj7);
                  cResult[11] = tmp4.participantAvatarContainer;
                  cResult[12] = tmp13;
                  cResult[13] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
            const obj8 = {
              namesStyle: participantAvatarText,
              users: first1,
              withNames: true,
              channelId: id,
              guildId: tmp11,
            };
            const tmp16 = closure_8(UserSummaryItemDefault, obj8);
            cResult[6] = channel.id;
            cResult[7] = first1;
            cResult[8] = tmp4.participantAvatarText;
            cResult[9] = tmp11;
            cResult[10] = tmp16;
            tmp13 = tmp16;
          }
        }
        return null;
      }
    : (channel) => {
        let Text;
        let intl;
        let items2;
        let obj3;
        let obj5;
        let obj7;
        let obj8;
        let tmp11;
        channel = channel.channel;
        const tmp = closure_10();
        let items = [ChannelRTCStore];
        const items1 = [channel.id];
        const obj = channel(504);
        const first = _slicedToArray(
          obj.useStateFromStores(
            items,
            () => {
              const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
              const items = [
                speakingParticipants.map((user) => user.user),
                ChannelRTCStore.getParticipantsVersion(channel.id),
              ];
              return items;
            },
            items1,
            channel(5589).isVersionEqual,
          ),
          1,
        )[0];
        const first1 = _slicedToArray(closure_7(), 1)[0];
        let tmp6 = null;
        if (0 !== first.length) {
          tmp6 = null;
          if (first1) {
            const obj2 = {
              accessibilityRole: "button",
              style: tmp.container,
              onPress: tmp5,
              children: closure_9(View, obj3),
            };
            obj3 = { style: tmp.participantItemContainer, children: items2 };
            const obj4 = { style: tmp.participantAvatarContainer, children: closure_8(tmp11, obj5) };
            const PressableOpacity = tmp2(5909).PressableOpacity;
            obj5 = {
              namesStyle: tmp.participantAvatarText,
              users: first,
              withNames: true,
              channelId: channel.id,
              guildId: channel.getGuildId(),
            };
            tmp11 = UserSummaryItemDefault;
            items2 = [closure_8(View, obj4)];
            const obj6 = { style: tmp.participantNameplateContainer, children: closure_8(Text, obj7) };
            obj7 = {
              style: tmp.participantNameplateSpeakingText,
              variant: "text-xs/medium",
              color: "text-default",
              children: intl.format(channel(1126).t["+dia6l"], obj8),
            };
            Text = tmp2(4886).Text;
            intl = tmp2(1126).intl;
            obj8 = { count: first.length };
            items2[1] = closure_8(View, obj6);
            tmp6 = closure_8(PressableOpacity, obj2);
          }
        }
        return tmp6;
      },
);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;
