// === Module 10183: ? ===

// Module 10183
import ThemesDefault from "Themes" /* 709 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 10163 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "getParticipants" /* 4494 */;
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import useActiveSpeakerPillScrollHandler from "useActiveSpeakerPillScrollHandler" /* 10154 */;

const require = arg1;
({ useActiveSpeakerPillScrollHandler: closure_6, useActiveSpeakerPillState: error } = require("useActiveSpeakerPillScrollHandler"));
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { container: { width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }, participantItemContainer: null, participantAvatarContainer: null, participantAvatarText: null, participantNameplateContainer: null, participantNameplateSpeakingText: null };
obj = { padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center" };
createCacheKey = { fontSize: 12, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, lineHeight: 18 };
obj[3] = createCacheKey;
obj[4] = { paddingHorizontal: 3, flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj[5] = { lineHeight: 18, color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_10 = createCacheKey.createStyles(obj);
let obj2 = { lineHeight: 18, color: ThemesDefault.colors.TEXT_SUBTLE };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp = callback5();
  let obj = channel(586);
  let items = [closure_5];
  const items1 = [channel.id];
  const first = callback(obj.useStateFromStores(items, () => {
    const speakingParticipants = closure_1_5.getSpeakingParticipants(channel.id);
    const items = [speakingParticipants.map((user) => user.user), closure_1_5.getParticipantsVersion(channel.id)];
    return items;
  }, items1, channel(5384).isVersionEqual), 1)[0];
  let tmp5 = null;
  if (0 !== first.length) {
    tmp5 = null;
    if (callback(callback2(), 1)[0]) {
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = tmp.container;
      obj[2] = tmp4;
      obj = { style: null, children: null };
      obj[0] = tmp.participantItemContainer;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.participantAvatarContainer;
      const obj2 = { namesStyle: null, users: null, withNames: true, channelId: null, guildId: null };
      obj2[0] = tmp.participantAvatarText;
      obj2[1] = first;
      obj2[3] = channel.id;
      obj2[4] = channel.getGuildId();
      obj1[1] = callback3(UserSummaryItemDefault, obj2);
      const items2 = [callback3(View, obj1), ];
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.participantNameplateContainer;
      const obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
      obj4[0] = tmp.participantNameplateSpeakingText;
      const intl = tmp2(1233).intl;
      const obj5 = { count: null };
      obj5[0] = first.length;
      obj4[3] = intl.format(tmp2(1233).t["+dia6l"], obj5);
      obj3[1] = callback3(tmp2(4474).Text, obj4);
      items2[1] = callback3(View, obj3);
      obj[1] = items2;
      obj[3] = callback4(View, obj);
      tmp5 = callback3(tmp2(5077).PressableOpacity, obj);
      const tmp10 = UserSummaryItemDefault;
    }
  }
  return tmp5;
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/ActiveSpeakerTooltip.tsx");

export default memoResult;