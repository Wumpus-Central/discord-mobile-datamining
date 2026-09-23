// discord_app/modules/channel_permissions/native/components/ChannelAccessInfo.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import ChannelPermissionsUtils from "../../ChannelPermissionsUtils.tsx";
import channel_permissions_ChannelPermissionsUtils from "../ChannelPermissionsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

require = fn;
const View = fn(17).View;
const isGuildOwner = fn(2060).isGuildOwner;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = 100;
const createStyles = fn(4827);
let obj2 = {
  section: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    color: nativeDefault.colors.TEXT_DEFAULT,
    flexDirection: "row",
    marginBottom: 8,
    marginTop: 8,
    padding: 16,
  },
  sectionContent: { alignItems: "center", flexDirection: "row", flexGrow: 1 },
  avatar: { marginRight: 8 },
  labelDetail: { marginRight: 12 },
  sectionIcon: { marginRight: 6 },
};
let closure_12 = createStyles.createStyles(obj2);
const constants = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_12();
  dependencyMap = tmp;
  let intl = guild(1115).intl;
  const stringResult = intl.string(guild(1115).t.li1wKf);
  let items = [GuildRoleStore];
  const items1 = [guild, channel];
  const stateFromStoresArray = guild(504).useStateFromStoresArray(
    items,
    () =>
      ChannelPermissionsUtils.getExistingRoles(
        guild,
        GuildRoleStore.getSortedRoles(guild.id),
        channel,
        channel.accessPermissions,
      ),
    items1,
  );
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const memberIds = GuildMemberStore.getMemberIds(id);
  let obj = guild(504);
  const existingMembers = guild(9902).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
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
  const items2 = [closure_8(guild(4823).Text, { variant: "eyebrow", children: stringResult })];
  let obj2 = {
    accessibilityLabel: stringResult,
    accessibilityRole: "button",
    onPress() {
      const result = channel_permissions_ChannelPermissionsUtils.openChannelMembersActionSheet(
        channel.id,
        channel.guild_id,
      );
    },
    style: tmp.section,
    children: null,
  };
  let obj3 = { style: tmp.sectionContent, children: null };
  if (null != first) {
    let obj4 = { children: null };
    let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1177).AvatarSizes.XSMALL };
    const items3 = [closure_8(tmp2(1177).Avatar, obj5)];
    let obj6 = { children: null };
    let obj7 = { variant: "text-sm/semibold", children: first.tag };
    const items4 = [closure_8(tmp2(4823).Text, obj7)];
    let obj8 = { variant: "text-xs/medium", children: null };
    let intl2 = tmp2(1115).intl;
    obj8.children = intl2.string(tmp2(1115).t.rt0ERW);
    items4[1] = closure_8(tmp2(4823).Text, obj8);
    obj6.children = items4;
    items3[1] = closure_9(View, obj6);
    obj4.children = items3;
    let obj9 = obj4;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      if (0 === length) {
        return null;
      } else if (constants.MEMBERS === MEMBERS) {
        if (length > c11) {
          const intl4 = util.intl;
          const obj2 = { count: tmp12 };
          let formatToPlainStringResult = intl4.formatToPlainString(util.t.PR5l07, obj2);
        } else {
          const intl3 = util.intl;
          const obj3 = { count: length };
          formatToPlainStringResult = intl3.formatToPlainString(util.t.bu5sya, obj3);
        }
      } else {
        if (tmp28.ROLES === MEMBERS) {
          if (length > c11) {
            const intl2 = util.intl;
            const obj4 = { count: tmp6 };
            let formatToPlainStringResult1 = intl2.formatToPlainString(util.t["+OYnFQ"], obj4);
            let tmp7 = require;
          } else {
            tmp7 = require;
            const intl = util.intl;
            const obj5 = { count: length };
            formatToPlainStringResult1 = intl.formatToPlainString(util.t.T2BEtm, obj5);
          }
          let tmp4 = tmp7;
          const tmp5 = formatToPlainStringResult1;
        } else {
          GlobalUtils.assertNever(MEMBERS);
          tmp4 = require;
        }
        const obj6 = { children: null };
        const obj7 = { size: "sm", style: closure_2.sectionIcon };
        const items = [React6(GroupIcon, obj7)];
        const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
        items[1] = React6(tmp4(4823).Text, obj8);
        obj6.children = items;
        return React7(noop.Fragment, obj6);
      }
    }
    obj9 = { children: null };
    const MEMBERS = constants.MEMBERS;
    channel(12810);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(5393).GroupIcon)];
    const ROLES = constants.ROLES;
    channel(9921);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(9919).ShieldUserIcon);
    obj9.children = items5;
  }
  const obj10 = { children: null };
  obj3.children = closure_9(closure_10, obj9);
  const items6 = [closure_8(View, obj3)];
  const tmp2Result = guild(9902);
  items6[1] = closure_8(guild(1177).Icon, { source: channel(10283), size: guild(1177).Icon.Sizes.SMALL });
  obj2.children = items6;
  items2[1] = closure_9(guild(5425).PressableOpacity, obj2);
  obj10.children = items2;
  return closure_9(closure_10, obj10);
}
