// discord_app/modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserSummaryItemDefault from "../../../../components_native/common/UserSummaryItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

const require = fn;
const View = fn(17).View;
const StageChannelListStore = fn(10045);
({ useActiveSpeakerPillScrollHandler: metroRequire, useActiveSpeakerPillState: closure_7 } = StageChannelListStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = {
  container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  participantItemContainer: null,
  participantAvatarContainer: null,
  participantAvatarText: null,
  participantNameplateContainer: null,
  participantNameplateSpeakingText: null,
};
obj = {
  padding: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
};
obj.participantItemContainer = obj;
obj.participantAvatarContainer = { alignItems: "center", justifyContent: "center" };
const createStyles = {
  fontSize: 12,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  lineHeight: 18,
};
obj.participantAvatarText = createStyles;
obj.participantNameplateContainer = {
  paddingHorizontal: 3,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
obj.participantNameplateSpeakingText = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let obj2 = { lineHeight: 18, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp = closure_10();
  let obj = channel(504);
  let items = [ChannelRTCStore];
  const items1 = [channel.id];
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
      channel(5432).isVersionEqual,
    ),
    1,
  )[0];
  let tmp5 = null;
  if (0 !== first.length) {
    tmp5 = null;
    if (_slicedToArray(closure_7(), 1)[0]) {
      obj = { accessibilityRole: "button", style: tmp.container, onPress: tmp4, children: null };
      obj = { style: tmp.participantItemContainer, children: null };
      const obj1 = { style: tmp.participantAvatarContainer, children: null };
      const obj2 = {
        namesStyle: tmp.participantAvatarText,
        users: first,
        withNames: true,
        channelId: channel.id,
        guildId: channel.getGuildId(),
      };
      obj1.children = closure_8(UserSummaryItemDefault, obj2);
      const items2 = [closure_8(View, obj1)];
      const obj3 = { style: tmp.participantNameplateContainer, children: null };
      const obj4 = {
        style: tmp.participantNameplateSpeakingText,
        variant: "text-xs/medium",
        color: "text-default",
        children: null,
      };
      const intl = tmp2(1114).intl;
      const obj5 = { count: first.length };
      obj4.children = intl.format(tmp2(1114).t["+dia6l"], obj5);
      obj3.children = closure_8(tmp2(4556).Text, obj4);
      items2[1] = closure_8(View, obj3);
      obj.children = items2;
      obj.children = closure_9(View, obj);
      tmp5 = closure_8(tmp2(5123).PressableOpacity, obj);
    }
  }
  return tmp5;
});
