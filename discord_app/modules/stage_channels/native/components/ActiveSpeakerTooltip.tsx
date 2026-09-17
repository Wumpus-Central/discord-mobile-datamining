// === Module 10224: ActiveSpeakerTooltip ===

// Module 10224 (ActiveSpeakerTooltip)
import nativeDefault from "native" /* 576 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 10204 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4656 */;

const require = fn;
const View = fn(17).View;
const StageChannelListStore = fn(10195);
({ useActiveSpeakerPillScrollHandler: metroRequire, useActiveSpeakerPillState: closure_7 } = StageChannelListStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
const obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }, participantItemContainer: { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round }, participantAvatarContainer: { alignItems: "center", justifyContent: "center" }, participantAvatarText: null, participantNameplateContainer: null, participantNameplateSpeakingText: null };
let obj3 = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round };
obj.participantAvatarText = { fontSize: 12, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantNameplateContainer = { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: 12, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj.participantNameplateSpeakingText = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let obj5 = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp = closure_10();
  let items = [ChannelRTCStore];
  const items1 = [channel.id];
  const first = _slicedToArray(channel(504).useStateFromStores(items, () => {
    const speakingParticipants = ChannelRTCStore.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), ChannelRTCStore.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(5520).isVersionEqual), 1)[0];
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
      const intl = tmp2(1115).intl;
      const obj8 = { count: first.length };
      obj7.children = intl.format(tmp2(1115).t["+dia6l"], obj8);
      obj6.children = closure_8(tmp2(4636).Text, obj7);
      items2[1] = closure_8(View, obj6);
      obj3.children = items2;
      obj2.children = closure_9(View, obj3);
      tmp5 = closure_8(tmp2(5210).PressableOpacity, obj2);
    }
  }
  return tmp5;
});