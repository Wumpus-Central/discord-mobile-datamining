// discord_app/modules/channel_permissions/native/components/ChannelAccessInfo.tsx
import ShieldUserIcon from "ShieldUserIcon";
import { View } from "GroupIcon";
import { isGuildOwner } from "GuildNSFWContentLevel";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
let c11 = 100;
createCacheKey = { section: null, sectionContent: null, avatar: null, labelDetail: null, sectionIcon: null };
createCacheKey = { alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, color: require("Themes").colors.TEXT_DEFAULT, flexDirection: "row", marginBottom: 8, marginTop: 8, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", flexDirection: "row", flexGrow: 1 };
createCacheKey[2] = { marginRight: 8 };
createCacheKey[3] = { marginRight: 12 };
createCacheKey[4] = { marginRight: 6 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_13 = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
let result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let dependencyMap;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let intl = guild(1236).intl;
  const stringResult = intl.string(guild(1236).t.li1wKf);
  let obj = guild(589);
  let items = [createGuildRoleRecordFromRust];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => guild(_undefined[10]).getExistingRoles(guild, outer1_7.getSortedRoles(guild.id), channel, channel.accessPermissions), items1);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  memberIds = memberIds.getMemberIds(id);
  const existingMembers = guild(8997).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
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
  const items2 = [callback(guild(4299).Text, { variant: "eyebrow", children: stringResult }), ];
  obj = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = guild(_undefined[14]).openChannelMembersActionSheet(channel.id, channel.guild_id);
    },
    style: tmp.section,
    children: null
  };
  obj = { style: tmp.sectionContent, children: null };
  if (null != first) {
    let obj1 = { children: null };
    let obj2 = { style: null, user: null, guildId: null, size: null };
    obj2[0] = tmp.avatar;
    obj2[1] = first;
    obj2[2] = guild.id;
    obj2[3] = tmp2(1297).AvatarSizes.XSMALL;
    const items3 = [tmp13(tmp2(1297).Avatar, obj2), ];
    let obj3 = { children: null };
    let obj4 = { variant: "text-sm/semibold", children: null };
    obj4[1] = first.tag;
    const items4 = [tmp13(tmp2(4299).Text, obj4), ];
    let obj5 = { variant: "text-xs/medium", children: null };
    let intl2 = tmp2(1236).intl;
    obj5[1] = intl2.string(tmp2(1236).t.rt0ERW);
    items4[1] = tmp13(tmp2(4299).Text, obj5);
    obj3[0] = items4;
    items3[1] = tmp11(tmp14, obj3);
    obj1[0] = items3;
    let obj6 = obj1;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      if (0 === length) {
        return null;
      } else if (outer1_13.MEMBERS === MEMBERS) {
        if (length > outer1_11) {
          const intl4 = guild(_undefined[8]).intl;
          let obj = { count: null };
          obj[0] = tmp12;
          let formatToPlainStringResult = intl4.formatToPlainString(guild(_undefined[8]).t.PR5l07, obj);
          let tmp14 = _undefined;
          let tmp13 = guild;
        } else {
          tmp13 = guild;
          tmp14 = _undefined;
          const intl3 = guild(_undefined[8]).intl;
          obj = { count: null };
          obj[0] = length;
          formatToPlainStringResult = intl3.formatToPlainString(guild(_undefined[8]).t.bu5sya, obj);
        }
      } else {
        if (tmp28.ROLES === MEMBERS) {
          if (length > outer1_11) {
            const intl2 = guild(_undefined[8]).intl;
            const obj1 = { count: null };
            obj1[0] = tmp6;
            let formatToPlainStringResult1 = intl2.formatToPlainString(guild(_undefined[8]).t["+OYnFQ"], obj1);
            let tmp8 = _undefined;
            let tmp7 = guild;
          } else {
            tmp7 = guild;
            tmp8 = _undefined;
            const intl = guild(_undefined[8]).intl;
            const obj2 = { count: null };
            obj2[0] = length;
            formatToPlainStringResult1 = intl.formatToPlainString(guild(_undefined[8]).t.T2BEtm, obj2);
          }
          let tmp2 = tmp8;
          let tmp4 = tmp7;
          const tmp5 = formatToPlainStringResult1;
        } else {
          tmp2 = _undefined;
          obj = guild(_undefined[11]);
          obj.assertNever(MEMBERS);
          tmp4 = guild;
        }
        const obj3 = { children: null };
        const obj4 = { size: "sm", style: null };
        obj4[1] = _undefined.sectionIcon;
        const items = [outer1_8(GroupIcon, obj4), ];
        const obj5 = { style: null, variant: "text-sm/medium", children: null };
        obj5[0] = _undefined.labelDetail;
        obj5[2] = tmp5;
        items[1] = outer1_8(tmp4(tmp2[12]).Text, obj5);
        obj3[0] = items;
        return outer1_9(outer1_3.Fragment, obj3);
      }
    }
    obj6 = { children: null };
    const MEMBERS = constants.MEMBERS;
    channel(11830);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(4817).GroupIcon), ];
    const ROLES = constants.ROLES;
    channel(9008);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(9006).ShieldUserIcon);
    obj6[0] = items5;
  }
  const obj7 = { children: null };
  obj[1] = closure_9(closure_10, obj6);
  const items6 = [callback(View, obj), ];
  const obj8 = { source: null, size: null };
  obj8[0] = channel(10816);
  obj8[1] = guild(1297).Icon.Sizes.SMALL;
  items6[1] = callback(guild(1297).Icon, obj8);
  obj[4] = items6;
  items2[1] = closure_9(guild(4846).PressableOpacity, obj);
  obj7[0] = items2;
  return closure_9(closure_10, obj7);
};