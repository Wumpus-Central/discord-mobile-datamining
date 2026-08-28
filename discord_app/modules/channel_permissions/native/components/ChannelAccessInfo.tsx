// === Module 11969: ChannelAccessInfo ===

// Module 11969 (ChannelAccessInfo)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import closure_6 from "trackCommunicationDisabled" /* 1993 */;
import closure_7 from "createGuildRoleRecordFromRust" /* 1986 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let c11 = 100;
createCacheKey = { section: null, sectionContent: null, avatar: null, labelDetail: null, sectionIcon: null };
createCacheKey = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, color: ThemesDefault.colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", flexDirection: "row", flexGrow: 1 };
createCacheKey[2] = { marginRight: 8 };
createCacheKey[3] = { marginRight: 12 };
createCacheKey[4] = { marginRight: 6 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let closure_13 = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
let result = require("set").fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  dependencyMap = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  let intl = guild(1236).intl;
  const stringResult = intl.string(guild(1236).t.li1wKf);
  let obj = guild(589);
  let items = [closure_7];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => guild(closure_2[10]).getExistingRoles(guild, closure_1_7.getSortedRoles(guild.id), channel, channel.accessPermissions), items1);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  memberIds = memberIds.getMemberIds(id);
  const existingMembers = guild(9646).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
  let tmp8 = 0 === stateFromStoresArray.length;
  if (tmp8) {
    tmp8 = 1 === existingMembers.length;
  }
  if (tmp8) {
    tmp8 = isGuildOwner(guild, existingMembers[0]);
  }
  let first = null;
  if (tmp8) {
    first = existingMembers[0];
  }
  const items2 = [callback(guild(4442).Text, { variant: "eyebrow", children: stringResult }), ];
  obj = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = guild(closure_2[14]).openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section,
    children: null
  };
  obj = { style: tmp.sectionContent, children: null };
  if (null != first) {
    obj1 = { children: null };
    let obj2 = { style: null, user: null, guildId: null, size: null };
    obj2[0] = tmp.avatar;
    obj2[1] = first;
    obj2[2] = guild.id;
    obj2[3] = tmp2(1297).AvatarSizes.XSMALL;
    const items3 = [tmp13(tmp2(1297).Avatar, obj2), ];
    let obj3 = { children: null };
    let obj4 = { variant: "text-sm/semibold", children: null };
    obj4[1] = first.tag;
    const items4 = [tmp13(tmp2(4442).Text, obj4), ];
    let obj5 = { variant: "text-xs/medium", children: null };
    let intl2 = tmp2(1236).intl;
    obj5[1] = intl2.string(tmp2(1236).t.rt0ERW);
    items4[1] = tmp13(tmp2(4442).Text, obj5);
    obj3[0] = items4;
    items3[1] = tmp11(tmp14, obj3);
    obj1[0] = items3;
    let obj6 = obj1;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      if (0 === length) {
        return null;
      } else if (closure_1_13.MEMBERS === MEMBERS) {
        if (length > closure_1_11) {
          const intl4 = guild(closure_2[8]).intl;
          let obj = { count: null };
          obj[0] = tmp12;
          let formatToPlainStringResult = intl4.formatToPlainString(guild(closure_2[8]).t.PR5l07, obj);
          let tmp14 = closure_2;
          let tmp13 = guild;
        } else {
          tmp13 = guild;
          tmp14 = closure_2;
          const intl3 = guild(closure_2[8]).intl;
          obj = { count: null };
          obj[0] = length;
          formatToPlainStringResult = intl3.formatToPlainString(guild(closure_2[8]).t.bu5sya, obj);
        }
      } else {
        if (tmp28.ROLES === MEMBERS) {
          if (length > closure_1_11) {
            const intl2 = guild(closure_2[8]).intl;
            obj1 = { count: null };
            obj1[0] = tmp6;
            let formatToPlainStringResult1 = intl2.formatToPlainString(guild(closure_2[8]).t["+OYnFQ"], obj1);
            let tmp8 = closure_2;
            let tmp7 = guild;
          } else {
            tmp7 = guild;
            tmp8 = closure_2;
            const intl = guild(closure_2[8]).intl;
            const obj2 = { count: null };
            obj2[0] = length;
            formatToPlainStringResult1 = intl.formatToPlainString(guild(closure_2[8]).t.T2BEtm, obj2);
          }
          let tmp2 = tmp8;
          let tmp4 = tmp7;
          const tmp5 = formatToPlainStringResult1;
        } else {
          tmp2 = closure_2;
          obj = guild(closure_2[11]);
          obj.assertNever(MEMBERS);
          tmp4 = guild;
        }
        const obj3 = { children: null };
        const obj4 = { size: "sm", style: null };
        obj4[1] = closure_2.sectionIcon;
        const items = [closure_1_8(GroupIcon, obj4), ];
        const obj5 = { style: null, variant: "text-sm/medium", children: null };
        obj5[0] = closure_2.labelDetail;
        obj5[2] = tmp5;
        items[1] = closure_1_8(tmp4(tmp2[12]).Text, obj5);
        obj3[0] = items;
        return closure_1_9(closure_1_3.Fragment, obj3);
      }
    }
    obj6 = { children: null };
    const MEMBERS = constants.MEMBERS;
    channel(11968);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(5003).GroupIcon), ];
    const ROLES = constants.ROLES;
    channel(9654);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(9652).ShieldUserIcon);
    obj6[0] = items5;
  }
  const obj7 = { children: null };
  obj[1] = closure_9(closure_10, obj6);
  const items6 = [callback(View, obj), ];
  const tmp2Result = guild(9646);
  items6[1] = callback(guild(1297).Icon, { source: channel(9968), size: guild(1297).Icon.Sizes.SMALL });
  obj[4] = items6;
  items2[1] = closure_9(guild(5033).PressableOpacity, obj);
  obj7[0] = items2;
  return closure_9(closure_10, obj7);
};