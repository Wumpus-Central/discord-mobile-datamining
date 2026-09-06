// discord_app/modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function RequestToSpeakParticipant(participant) {
  participant = participant.participant;
  const channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = closure_6();
  analyticsLocations = channel(analyticsLocations[6])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer, children: null };
  obj = {
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
  const items = [participant.user.username];
  let obj2 = participant(analyticsLocations[9]);
  items[1] = obj2.participantMemberInfo(participant);
  obj.accessibilityLabel = items.join(", ");
  obj.style = tmp.touchableContainer;
  obj = {
    style: tmp.participantAvatarContainer,
    children: closure_4(participant(analyticsLocations[10]).Avatar, {
      user: participant.user,
      guildId: channel.guild_id,
      size: participant(analyticsLocations[10]).AvatarSizes.NORMAL,
    }),
  };
  const items1 = [closure_4(View, obj)];
  obj2 = { style: tmp.participantNameplateContainer, children: null };
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
  const obj4 = { variant: "text-xs/medium", color: "text-default", children: null };
  const obj1 = {
    user: participant.user,
    guildId: channel.guild_id,
    size: participant(analyticsLocations[10]).AvatarSizes.NORMAL,
  };
  const obj3 = { style: items2, numberOfLines: 1, children: participant.user.username };
  obj4.children = participant(analyticsLocations[9]).participantMemberInfo(participant);
  items3[1] = closure_4(participant(analyticsLocations[11]).Text, obj4);
  obj2.children = items3;
  items1[1] = closure_5(View, obj2);
  obj.children = items1;
  const items4 = [closure_5(participant(analyticsLocations[7]).PressableOpacity, obj)];
  const obj5 = { style: tmp.participantActionContainer, children: null };
  const obj6 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disabled: null };
  let tmp2Result = tmp2(tmp3[12]);
  const intl = tmp6(tmp3[13]).intl;
  obj6.accessibilityLabel = intl.string(participant(analyticsLocations[13]).t.f0T7hI);
  obj6.containerStyle = tmp.participantActionIcon;
  obj6.source = channel(analyticsLocations[14]);
  obj6.onPress = onGrantRequest;
  obj6.disabled =
    participant.rtsState ===
    participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [closure_4(tmp2Result, obj6)];
  const obj7 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null };
  tmp2Result = tmp2(tmp3[12]);
  const intl2 = tmp6(tmp3[13]).intl;
  obj7.accessibilityLabel = intl2.string(participant(analyticsLocations[13]).t.moABMy);
  obj7.containerStyle = tmp.participantActionIcon;
  obj7.source = channel(analyticsLocations[16]);
  obj7.onPress = onDenyRequest;
  items5[1] = closure_4(tmp2Result, obj7);
  obj5.children = items5;
  items4[1] = closure_5(View, obj5);
  obj.children = items4;
  return closure_5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
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
  participantNameplateText: null,
  participantActionContainer: null,
  participantActionIcon: null,
  emptyContainer: null,
  emptyParticipant: null,
  emptyTitle: null,
  emptyBody: null,
};
createStyles = {
  fontSize: 16,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  marginTop: 0,
  marginBottom: 0,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
createStyles.participantNameplateText = createStyles;
createStyles.participantActionContainer = { flexDirection: "row", paddingRight: 4 };
createStyles.participantActionIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.emptyContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
createStyles.emptyParticipant = { flex: 1, height: 64 };
createStyles.emptyTitle = { textAlign: "center", marginTop: 16, marginBottom: 8 };
createStyles.emptyBody = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  channel = channel.channel;
  let sortedRequestToSpeakParticipants;
  const tmp = closure_6();
  importDefault = tmp;
  let obj = channel(sortedRequestToSpeakParticipants[17]);
  sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    obj = { style: tmp.container, children: null };
    obj = { style: tmp.emptyContainer, children: null };
    const obj1 = { source: require("../../../../../_runtime/metro/09926__.js") };
    const items = [closure_4(require("FastImage"), obj1), ,];
    const obj2 = {
      style: tmp.emptyTitle,
      accessibilityRole: "header",
      variant: "heading-lg/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(tmp3[13]).intl;
    obj2.children = intl.string(tmp2(tmp3[13]).t["7R24mX"]);
    items[1] = closure_4(tmp2(tmp3[11]).Text, obj2);
    const obj3 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj3.children = intl2.string(tmp2(tmp3[13]).t.Rpr2s0);
    items[2] = closure_4(tmp2(tmp3[11]).Text, obj3);
    obj.children = items;
    obj.children = closure_5(View, obj);
    let tmp6 = closure_4(View, obj);
    const tmp11 = require("FastImage");
  } else {
    const obj4 = { style: null, itemSize: 64, renderItem: null, keyboardShouldPersistTaps: "always", sections: null };
    const items1 = [tmp.listContainer];
    const obj5 = { height: channel.height };
    items1[1] = obj5;
    obj4.style = items1;
    obj4.renderItem = function renderItem(arg0, arg1) {
      channel = tmp;
      if (null == sortedRequestToSpeakParticipants[arg1]) {
        let obj = { style: emptyParticipant.emptyParticipant };
        let tmp5 = closure_1_4(View, obj);
      } else {
        obj = {
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
    obj4.sections = items2;
    tmp6 = closure_4(require("FastList"), obj4);
  }
  return tmp6;
}
