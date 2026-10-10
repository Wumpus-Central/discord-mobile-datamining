// === Module 11188: ActiveSpeakerTooltip ===

// Module 11188 (ActiveSpeakerTooltip)
import nativeDefault from "native" /* 587 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 10723 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;

const require = fn;
const View = fn(17).View;
const StageChannelListStore = fn(11158);
({ useActiveSpeakerPillScrollHandler: metroRequire, useActiveSpeakerPillState: closure_7 } = StageChannelListStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }, participantItemContainer: { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round }, participantAvatarContainer: { alignItems: "center", justifyContent: "center" }, participantAvatarText: null, participantNameplateContainer: null, participantNameplateSpeakingText: null };
let obj3 = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round };
obj.participantAvatarText = { fontSize: 12, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantNameplateContainer = { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: 12, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantNameplateSpeakingText = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ActiveSpeakerTooltip(channel) {
  const cResult = channel(576).c(30);
  channel = channel.channel;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function u() {
      const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
      const items = [speakingParticipants.map((user) => user.user), ChannelRTCStore.getParticipantsVersion(channel.id)];
      return items;
    };
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = channel(576);
  const first1 = _slicedToArray(channel(504).useStateFromStores(first, tmp7, tmp8, tmp(5957).isVersionEqual), 1)[0];
  const tmp9 = _slicedToArray(closure_6(), 2)[1];
  if (0 !== first1.length) {
    if (_slicedToArray(closure_7(), 1)[0]) {
      ({ container, participantItemContainer, participantAvatarContainer, participantAvatarText } = tmp4);
      if (cResult[4] !== channel) {
        const guildId = channel.getGuildId();
        cResult[4] = channel;
        cResult[5] = guildId;
        let tmp10 = guildId;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === channel.id) {
        if (cResult[7] === first1) {
          if (cResult[8] === tmp4.participantAvatarText) {
            if (cResult[9] === tmp10) {
              let tmp12 = cResult[10];
            }
            if (cResult[11] === tmp4.participantAvatarContainer) {
              if (cResult[12] === tmp12) {
                let tmp16 = cResult[13];
              }
              ({ participantNameplateContainer, participantNameplateSpeakingText } = tmp4);
              if (cResult[14] !== first1.length) {
                const intl = tmp(1126).intl;
                const obj2 = { count: first1.length };
                const formatResult = intl.format(tmp(1126).t["+dia6l"], obj2);
                cResult[14] = first1.length;
                cResult[15] = formatResult;
                let tmp20 = formatResult;
              } else {
                tmp20 = cResult[15];
              }
              if (cResult[16] === tmp4.participantNameplateSpeakingText) {
                if (cResult[17] === tmp20) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] === tmp4.participantNameplateContainer) {
                  if (cResult[20] === tmp22) {
                    let tmp25 = cResult[21];
                  }
                  if (cResult[22] === tmp4.participantItemContainer) {
                    if (cResult[23] === tmp16) {
                      if (cResult[24] === tmp25) {
                        let tmp29 = cResult[25];
                      }
                      if (cResult[26] === tmp9) {
                        if (cResult[27] === tmp4.container) {
                          if (cResult[28] === tmp29) {
                            let tmp33 = cResult[29];
                          }
                          return tmp33;
                        }
                      }
                      const obj3 = { accessibilityRole: "button", style: container, onPress: tmp9, children: tmp29 };
                      const tmp35 = closure_8(tmp(6184).PressableOpacity, obj3);
                      cResult[26] = tmp9;
                      cResult[27] = tmp4.container;
                      cResult[28] = tmp29;
                      cResult[29] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                  const obj4 = { style: participantItemContainer, children: null };
                  const items2 = [tmp16, tmp25];
                  obj4.children = items2;
                  const tmp32 = closure_9(View, obj4);
                  cResult[22] = tmp4.participantItemContainer;
                  cResult[23] = tmp16;
                  cResult[24] = tmp25;
                  cResult[25] = tmp32;
                  tmp29 = tmp32;
                }
                const obj5 = { style: participantNameplateContainer, children: tmp22 };
                const tmp28 = closure_8(View, obj5);
                cResult[19] = tmp4.participantNameplateContainer;
                cResult[20] = tmp22;
                cResult[21] = tmp28;
                tmp25 = tmp28;
              }
              const obj6 = { style: participantNameplateSpeakingText, variant: "text-xs/medium", color: "text-default", children: tmp20 };
              const tmp24 = closure_8(tmp(5088).Text, obj6);
              cResult[16] = tmp4.participantNameplateSpeakingText;
              cResult[17] = tmp20;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            const obj7 = { style: participantAvatarContainer, children: tmp12 };
            const tmp19 = closure_8(View, obj7);
            cResult[11] = tmp4.participantAvatarContainer;
            cResult[12] = tmp12;
            cResult[13] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const obj8 = { namesStyle: participantAvatarText, users: first1, withNames: true, channelId: channel.id, guildId: tmp10 };
      const tmp15 = closure_8(UserSummaryItemDefault, obj8);
      cResult[6] = channel.id;
      cResult[7] = first1;
      cResult[8] = tmp4.participantAvatarText;
      cResult[9] = tmp10;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
  }
  return null;
}) : (function ActiveSpeakerTooltip(channel) {
  channel = channel.channel;
  const tmp = closure_10();
  let items = [ChannelRTCStore];
  const items1 = [channel.id];
  const first = _slicedToArray(channel(504).useStateFromStores(items, () => {
    const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), ChannelRTCStore.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(5957).isVersionEqual), 1)[0];
  let tmp5 = null;
  if (0 !== first.length) {
    tmp5 = null;
    if (_slicedToArray(closure_7(), 1)[0]) {
      const obj2 = { accessibilityRole: "button", style: tmp.container, onPress: tmp4, children: null };
      const obj3 = { style: tmp.participantItemContainer, children: null };
      const obj4 = { style: tmp.participantAvatarContainer, children: null };
      const obj5 = { namesStyle: tmp.participantAvatarText, users: first, withNames: true, channelId: channel.id, guildId: channel.getGuildId() };
      obj4.children = closure_8(UserSummaryItemDefault, obj5);
      const items2 = [closure_8(View, obj4), ];
      const obj6 = { style: tmp.participantNameplateContainer, children: null };
      const obj7 = { style: tmp.participantNameplateSpeakingText, variant: "text-xs/medium", color: "text-default", children: null };
      const intl = tmp2(1126).intl;
      const obj8 = { count: first.length };
      obj7.children = intl.format(tmp2(1126).t["+dia6l"], obj8);
      obj6.children = closure_8(tmp2(5088).Text, obj7);
      items2[1] = closure_8(View, obj6);
      obj3.children = items2;
      obj2.children = closure_9(View, obj3);
      tmp5 = closure_8(tmp2(6184).PressableOpacity, obj2);
    }
  }
  return tmp5;
}));