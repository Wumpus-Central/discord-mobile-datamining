// === Module 10979: ? ===

// Module 10979
import _slicedToArray from "_slicedToArray";
import { View } from "get ActivityIndicator";
import getParticipants from "getParticipants";
import importAllResult from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import useActiveSpeakerPillScrollHandler from "useActiveSpeakerPillScrollHandler";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ useActiveSpeakerPillScrollHandler: closure_6, useActiveSpeakerPillState: error } = require("useActiveSpeakerPillScrollHandler"));
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }, participantItemContainer: null, participantAvatarContainer: null, participantAvatarText: null, participantNameplateContainer: null, participantNameplateSpeakingText: null };
obj = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.round };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center" };
createCacheKey = { fontSize: 12, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj[3] = createCacheKey;
obj[4] = { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj[5] = { lineHeight: 18, color: require("Themes").colors.TEXT_SUBTLE };
let closure_10 = createCacheKey.createStyles(obj);
let obj2 = { lineHeight: 18, color: require("Themes").colors.TEXT_SUBTLE };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp = callback5();
  let obj = channel(589);
  let items = [getParticipants];
  const items1 = [channel.id];
  const first = callback(obj.useStateFromStores(items, () => {
    const speakingParticipants = outer1_5.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), outer1_5.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(5087).isVersionEqual), 1)[0];
  let tmp5 = null;
  if (0 !== first.length) {
    tmp5 = null;
    if (callback(callback2(), 1)[0]) {
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = tmp.container;
      obj[2] = tmp4;
      obj = { style: null, children: null };
      obj[0] = tmp.participantItemContainer;
      const obj1 = { style: null, children: null };
      obj1[0] = tmp.participantAvatarContainer;
      const obj2 = { namesStyle: null, users: null, withNames: true, channelId: null, guildId: null };
      obj2[0] = tmp.participantAvatarText;
      obj2[1] = first;
      obj2[3] = channel.id;
      obj2[4] = channel.getGuildId();
      obj1[1] = callback3(importDefault(10172), obj2);
      const items2 = [callback3(View, obj1), ];
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.participantNameplateContainer;
      const obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
      obj4[0] = tmp.participantNameplateSpeakingText;
      const intl = tmp2(1236).intl;
      const obj5 = { count: null };
      obj5[0] = first.length;
      obj4[3] = intl.format(tmp2(1236).t["+dia6l"], obj5);
      obj3[1] = callback3(tmp2(4251).Text, obj4);
      items2[1] = callback3(View, obj3);
      obj[1] = items2;
      obj[3] = callback4(View, obj);
      tmp5 = callback3(tmp2(4783).PressableOpacity, obj);
      const tmp10 = importDefault(10172);
    }
  }
  return tmp5;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;