import Text from "Text";
import { View } from "transitionToGuild";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { getBadgeTooltip } from "getBadgeTooltip";
import jsxProd from "GuildBadgeV2";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: null, members: null, memberCount: null, dot: null, dotOnline: null, established: null, nameRow: null, guildName: null, guildIcon: null };
createCacheKey = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row", gap: 8 };
createCacheKey[3] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[4] = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("Themes").colors.TEXT_STATUS_OFFLINE };
let obj1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("Themes").colors.TEXT_STATUS_OFFLINE };
createCacheKey[5] = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("Themes").colors.TEXT_STATUS_ONLINE };
createCacheKey[6] = { display: "flex" };
createCacheKey[7] = { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[8] = { flexShrink: 1 };
createCacheKey[9] = { marginLeft: 8, height: 24, width: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: require("Themes").colors.TEXT_STATUS_ONLINE };
const result = require("_getSystemLocale").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default function GuildProfileHeader(icon) {
  const profile = icon.profile;
  let id;
  let stateFromStores1;
  let tmp = createCacheKey();
  let obj = profile(stateFromStores1[9]);
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = profile(stateFromStores1[10]);
  let obj2 = id(stateFromStores1[11]);
  const establishedDate = obj1.getEstablishedDate(obj2.extractTimestamp(profile.id), stateFromStores);
  let obj3 = profile(stateFromStores1[12]);
  const items1 = [profile];
  id = profile.id;
  const callback = React.useCallback(() => {
    let tooltipSubtitle;
    let tooltipTitle;
    let obj = profile(stateFromStores1[12]);
    const fromGuildProfileResult = obj.fromGuildProfile(profile);
    const tmp = stateFromStores1;
    const guildTraits = profile(stateFromStores1[13]).getGuildTraits(fromGuildProfileResult);
    const obj2 = profile(stateFromStores1[13]);
    const obj3 = profile(stateFromStores1[14]);
    ({ tooltipTitle, tooltipSubtitle } = outer1_8(profile(stateFromStores1[14]).getBadgeCategory(guildTraits), guildTraits.visibility));
    if (!tmp5) {
      if (tooltipSubtitle == null) {
        tooltipSubtitle = tooltipTitle;
      }
      obj = { key: "guild-badge-tooltip", content: null };
      obj[1] = tooltipSubtitle;
      id(tmp[15]).open(obj);
      const obj4 = id(tmp[15]);
    }
  }, items1);
  let obj4 = profile(stateFromStores1[9]);
  const items2 = [trackCommunicationDisabled, fetchFingerprint];
  const items3 = [id];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const member = outer1_7.getMember(id, outer1_6.getId());
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items3);
  const items4 = [id, stateFromStores1];
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.avatarBackground, children: null };
  const callback1 = React.useCallback(() => {
    if (stateFromStores1) {
      const _HermesInternal = HermesInternal;
      id(stateFromStores1[16]).hideActionSheet("GuildProfileActionSheet:" + id);
      const obj = id(stateFromStores1[16]);
      profile(stateFromStores1[17]).transitionToGuild(id);
      const obj2 = profile(stateFromStores1[17]);
    }
  }, items4);
  obj1 = { icon: icon.guildIconSource, size: null, animate: true, value: null, selected: false };
  let fromGuildProfileResult = obj3.fromGuildProfile(profile);
  const tmp5 = id;
  obj1[1] = profile(stateFromStores1[18]).GuildIconSizes.XXLARGE;
  obj1[3] = profile.name;
  obj[1] = callback(id(stateFromStores1[18]), obj1);
  const items5 = [callback(View, obj), , , ];
  obj2 = { style: tmp.nameRow, children: null };
  let tmp15;
  if (stateFromStores1) {
    tmp15 = callback1;
  }
  obj3 = { onPress: tmp15, style: tmp.guildName, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: profile.name };
  const items6 = [callback(profile(stateFromStores1[19]).Text, obj3), ];
  obj4 = { onPress: callback, children: null };
  obj4[1] = callback(tmp5(stateFromStores1[21]), { guild: fromGuildProfileResult, style: tmp.guildIcon });
  items6[1] = callback(profile(stateFromStores1[20]).PressableHighlight, obj4);
  obj2[1] = items6;
  items5[1] = closure_10(View, obj2);
  const obj6 = { style: tmp.members, children: null };
  const obj7 = { style: tmp.memberCount, children: null };
  const items7 = [callback(View, { style: tmp.dotOnline }), ];
  const obj9 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp2(tmp3[22]).intl;
  obj9[2] = intl.format(profile(stateFromStores1[22]).t["LC+S+m"], { membersOnline: profile.onlineCount });
  items7[1] = callback(profile(stateFromStores1[19]).Text, obj9);
  obj7[1] = items7;
  const items8 = [closure_10(View, obj7), ];
  const obj11 = { style: tmp.memberCount, children: null };
  const items9 = [callback(View, { style: tmp.dot }), ];
  const obj13 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(tmp3[22]).intl;
  obj13[2] = intl2.format(profile(stateFromStores1[22]).t.zRl6XR, { count: profile.memberCount });
  items9[1] = callback(profile(stateFromStores1[19]).Text, obj13);
  obj11[1] = items9;
  items8[1] = closure_10(View, obj11);
  obj6[1] = items8;
  items5[2] = closure_10(View, obj6);
  const obj15 = { style: tmp.established, children: null };
  const obj16 = { variant: "text-md/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[22]).intl;
  obj16[2] = intl3.format(profile(stateFromStores1[22]).t.zb2Q56, { createdAtDate: establishedDate });
  obj15[1] = callback(profile(stateFromStores1[19]).Text, obj16);
  items5[3] = callback(View, obj15);
  obj[1] = items5;
  return closure_10(View, obj);
};
export const useStyles = createCacheKey;