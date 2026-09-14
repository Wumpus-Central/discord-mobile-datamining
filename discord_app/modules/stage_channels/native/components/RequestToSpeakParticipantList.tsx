// discord_app/modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function RequestToSpeakParticipant(participant) {
  participant = participant.participant;
  const channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = closure_6();
  analyticsLocations = channel(analyticsLocations[6])().analyticsLocations;
  const obj = { style: tmp.participantItemContainer, children: null };
  const obj2 = {
    onPress() {
      showUserProfileActionSheetDefault({
        userId: participant.user.id,
        channelId: channel.id,
        isVoiceContext: true,
        sourceAnalyticsLocations: analyticsLocations,
      });
    },
    accessibilityLabel: null,
    accessibilityRole: "button",
    style: null,
    children: null,
  };
  const items = [participant.user.username, participant(analyticsLocations[9]).participantMemberInfo(participant)];
  obj2.accessibilityLabel = items.join(", ");
  obj2.style = tmp.touchableContainer;
  const obj4 = { style: tmp.participantAvatarContainer, children: null };
  const obj3 = participant(analyticsLocations[9]);
  obj4.children = closure_4(participant(analyticsLocations[10]).Avatar, {
    user: participant.user,
    guildId: channel.guild_id,
    size: participant(analyticsLocations[10]).AvatarSizes.NORMAL,
  });
  const items1 = [closure_4(View, obj4)];
  const obj6 = { style: tmp.participantNameplateContainer, children: null };
  const items2 = [tmp.participantNameplateText];
  const member = participant.member;
  let colorString;
  if (member != null) {
    colorString = member.colorString;
  }
  if (colorString == null) {
    colorString = tmp.participantNameplateText.color;
  }
  items2[1] = { color: colorString };
  const items3 = [
    closure_4(participant(analyticsLocations[10]).LegacyText, {
      style: items2,
      numberOfLines: 1,
      children: participant.user.username,
    }),
  ];
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
  const obj5 = {
    user: participant.user,
    guildId: channel.guild_id,
    size: participant(analyticsLocations[10]).AvatarSizes.NORMAL,
  };
  const obj7 = { style: items2, numberOfLines: 1, children: participant.user.username };
  obj8.children = participant(analyticsLocations[9]).participantMemberInfo(participant);
  items3[1] = closure_4(participant(analyticsLocations[11]).Text, obj8);
  obj6.children = items3;
  items1[1] = closure_5(View, obj6);
  obj2.children = items1;
  const items4 = [closure_5(participant(analyticsLocations[7]).PressableOpacity, obj2)];
  const obj9 = { style: tmp.participantActionContainer, children: null };
  const obj10 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disabled: null };
  const tmp6Result = participant(analyticsLocations[9]);
  const intl = tmp6(tmp3[13]).intl;
  obj10.accessibilityLabel = intl.string(participant(analyticsLocations[13]).t.f0T7hI);
  obj10.containerStyle = tmp.participantActionIcon;
  obj10.source = channel(analyticsLocations[14]);
  obj10.onPress = onGrantRequest;
  obj10.disabled =
    participant.rtsState ===
    participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [closure_4(channel(analyticsLocations[12]), obj10)];
  const obj11 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null };
  const tmp2Result = channel(analyticsLocations[12]);
  const intl2 = tmp6(tmp3[13]).intl;
  obj11.accessibilityLabel = intl2.string(participant(analyticsLocations[13]).t.moABMy);
  obj11.containerStyle = tmp.participantActionIcon;
  obj11.source = channel(analyticsLocations[16]);
  obj11.onPress = onDenyRequest;
  items5[1] = closure_4(channel(analyticsLocations[12]), obj11);
  obj9.children = items5;
  items4[1] = closure_5(View, obj9);
  obj.children = items4;
  return closure_5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 },
  listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 },
  participantItemContainer: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  participantAvatarContainer: { paddingLeft: 4 },
  participantNameplateContainer: { paddingHorizontal: 16, flex: 1 },
  participantNameplateText: {
    fontSize: 16,
    fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
    marginTop: 0,
    marginBottom: 0,
    color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  },
  participantActionContainer: { flexDirection: "row", paddingRight: 4 },
  participantActionIcon: null,
  emptyContainer: null,
  emptyParticipant: null,
  emptyTitle: null,
  emptyBody: null,
};
let obj3 = {
  fontSize: 16,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  marginTop: 0,
  marginBottom: 0,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
obj2.participantActionIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.emptyContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
obj2.emptyParticipant = { flex: 1, height: 64 };
obj2.emptyTitle = { textAlign: "center", marginTop: 16, marginBottom: 8 };
obj2.emptyBody = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  channel = channel.channel;
  let sortedRequestToSpeakParticipants;
  const tmp = closure_6();
  importDefault = tmp;
  sortedRequestToSpeakParticipants = channel(sortedRequestToSpeakParticipants[17]).useSortedRequestToSpeakParticipants(
    channel.id,
  );
  if (0 === sortedRequestToSpeakParticipants.length) {
    let obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.emptyContainer, children: null };
    const obj4 = { source: require("../../../../../_runtime/metro/10056__.js") };
    const items = [closure_4(require("FastImage"), obj4), ,];
    const obj5 = {
      style: tmp.emptyTitle,
      accessibilityRole: "header",
      variant: "heading-lg/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(tmp3[13]).intl;
    obj5.children = intl.string(tmp2(tmp3[13]).t["7R24mX"]);
    items[1] = closure_4(tmp2(tmp3[11]).Text, obj5);
    const obj6 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj6.children = intl2.string(tmp2(tmp3[13]).t.Rpr2s0);
    items[2] = closure_4(tmp2(tmp3[11]).Text, obj6);
    obj3.children = items;
    obj2.children = closure_5(View, obj3);
    let tmp6 = closure_4(View, obj2);
    const tmp11 = require("FastImage");
  } else {
    const obj7 = { style: null, itemSize: 64, renderItem: null, keyboardShouldPersistTaps: "always", sections: null };
    const items1 = [tmp.listContainer];
    const obj8 = { height: channel.height };
    items1[1] = obj8;
    obj7.style = items1;
    obj7.renderItem = function renderItem(arg0, arg1) {
      channel = tmp;
      if (null == sortedRequestToSpeakParticipants[arg1]) {
        const obj2 = { style: emptyParticipant.emptyParticipant };
        let tmp5 = closure_1_4(View, obj2);
      } else {
        const obj = {
          participant: tmp,
          channel,
          onGrantRequest() {
            StageChannelActionCreators.setUserSuppress(channel, closure_0.user.id, false);
          },
          onDenyRequest() {
            StageChannelActionCreators.setUserSuppress(channel, closure_0.user.id, true);
          },
        };
        tmp5 = closure_1_4(RequestToSpeakParticipant, obj, tmp.user.id);
      }
      return tmp5;
    };
    const items2 = [sortedRequestToSpeakParticipants.length + 1];
    obj7.sections = items2;
    tmp6 = closure_4(require("FastList"), obj7);
  }
  return tmp6;
}
