// discord_app/modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx
import "preload";
import { View } from "useStageParticipants";
import jsxProd from "renderDefaultEmpty";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function RequestToSpeakParticipant(participant) {
  let onDenyRequest;
  let onGrantRequest;
  participant = participant.participant;
  const channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = createCacheKey();
  analyticsLocations = channel(analyticsLocations[6])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer, children: null };
  obj = {
    onPress() {
      channel(analyticsLocations[8])({ userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    },
    accessibilityLabel: null,
    accessibilityRole: "button",
    style: null,
    children: null
  };
  const items = [participant.user.username, ];
  let obj2 = participant(analyticsLocations[9]);
  items[1] = obj2.participantMemberInfo(participant);
  obj[1] = items.join(", ");
  obj[3] = tmp.touchableContainer;
  obj = { style: tmp.participantAvatarContainer, children: null };
  const obj1 = { user: participant.user, guildId: channel.guild_id, size: null };
  obj1[2] = participant(analyticsLocations[10]).AvatarSizes.NORMAL;
  obj[1] = callback(participant(analyticsLocations[10]).Avatar, obj1);
  const items1 = [callback(View, obj), ];
  obj2 = { style: tmp.participantNameplateContainer, children: null };
  const items2 = [tmp.participantNameplateText, ];
  const member = participant.member;
  let colorString;
  if (member != null) {
    colorString = member.colorString;
  }
  if (colorString == null) {
    colorString = tmp.participantNameplateText.color;
  }
  items2[1] = { color: colorString };
  const items3 = [callback(participant(analyticsLocations[10]).LegacyText, { style: items2, numberOfLines: 1, children: participant.user.username }), ];
  const obj4 = { variant: "text-xs/medium", color: "text-default", children: null };
  obj4[2] = participant(analyticsLocations[9]).participantMemberInfo(participant);
  items3[1] = callback(participant(analyticsLocations[11]).Text, obj4);
  obj2[1] = items3;
  items1[1] = closure_5(View, obj2);
  obj[4] = items1;
  const items4 = [closure_5(participant(analyticsLocations[7]).PressableOpacity, obj), ];
  const obj5 = { style: tmp.participantActionContainer, children: null };
  const obj6 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disabled: null };
  let tmp2Result = tmp2(tmp3[12]);
  const intl = tmp6(tmp3[13]).intl;
  obj6[0] = intl.string(participant(analyticsLocations[13]).t.f0T7hI);
  obj6[1] = tmp.participantActionIcon;
  obj6[2] = channel(analyticsLocations[14]);
  obj6[3] = onGrantRequest;
  obj6[4] = participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [callback(tmp2Result, obj6), ];
  const obj7 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null };
  tmp2Result = tmp2(tmp3[12]);
  const intl2 = tmp6(tmp3[13]).intl;
  obj7[0] = intl2.string(participant(analyticsLocations[13]).t.moABMy);
  obj7[1] = tmp.participantActionIcon;
  obj7[2] = channel(analyticsLocations[16]);
  obj7[3] = onDenyRequest;
  items5[1] = callback(tmp2Result, obj7);
  obj5[1] = items5;
  items4[1] = closure_5(View, obj5);
  obj[1] = items4;
  return closure_5(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 }, listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 }, participantItemContainer: { padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { paddingHorizontal: 16, flex: 1 }, participantNameplateText: null, participantActionContainer: null, participantActionIcon: null, emptyContainer: null, emptyParticipant: null, emptyTitle: null, emptyBody: null };
createCacheKey = { fontSize: 16, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { flexDirection: "row", paddingRight: 4 };
createCacheKey[8] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[9] = { flex: 1, alignItems: "center", justifyContent: "center" };
createCacheKey[10] = { flex: 1, height: 64 };
createCacheKey[11] = { textAlign: "center", marginTop: 16, marginBottom: 8 };
createCacheKey[12] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const result = require("ME").fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default function RequestToSpeakParticipantList(channel) {
  channel = channel.channel;
  let importDefault;
  let sortedRequestToSpeakParticipants;
  const tmp = createCacheKey();
  importDefault = tmp;
  let obj = channel(sortedRequestToSpeakParticipants[17]);
  sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.emptyContainer;
    const obj1 = { source: null };
    obj1[0] = importDefault(tmp3[20]);
    const items = [callback(importDefault(tmp3[19]), obj1), , ];
    const obj2 = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.emptyTitle;
    const intl = tmp2(tmp3[13]).intl;
    obj2[4] = intl.string(tmp2(tmp3[13]).t["7R24mX"]);
    items[1] = callback(tmp2(tmp3[11]).Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.emptyBody;
    const intl2 = tmp2(tmp3[13]).intl;
    obj3[3] = intl2.string(tmp2(tmp3[13]).t.Rpr2s0);
    items[2] = callback(tmp2(tmp3[11]).Text, obj3);
    obj[1] = items;
    obj[1] = callback2(View, obj);
    let tmp6 = callback(View, obj);
    const tmp11 = importDefault(tmp3[19]);
  } else {
    const obj4 = { style: null, itemSize: 64, renderItem: null, keyboardShouldPersistTaps: "always", sections: null };
    const items1 = [tmp.listContainer, ];
    const obj5 = { height: null };
    obj5[0] = channel.height;
    items1[1] = obj5;
    obj4[0] = items1;
    obj4[2] = function renderItem(arg0, arg1) {
      const channel = tmp;
      if (null == sortedRequestToSpeakParticipants[arg1]) {
        let obj = { style: null };
        obj[0] = _undefined.emptyParticipant;
        let tmp5 = outer1_4(outer1_3, obj);
      } else {
        obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
        obj[0] = tmp;
        obj[1] = channel;
        obj[2] = function onGrantRequest() {
          channel(sortedRequestToSpeakParticipants[18]).setUserSuppress(tmp, tmp.user.id, false);
        };
        obj[3] = function onDenyRequest() {
          channel(sortedRequestToSpeakParticipants[18]).setUserSuppress(tmp, tmp.user.id, true);
        };
        tmp5 = outer1_4(outer1_7, obj, tmp.user.id);
      }
      return tmp5;
    };
    const items2 = [sortedRequestToSpeakParticipants.length + 1];
    obj4[4] = items2;
    tmp6 = callback(importDefault(tmp3[21]), obj4);
  }
  return tmp6;
};