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
const isGuildOwner = fn(1975).isGuildOwner;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = 100;
fn(4560);
let createStyles = { section: null, sectionContent: null, avatar: null, labelDetail: null, sectionIcon: null };
createStyles = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  color: nativeDefault.colors.TEXT_DEFAULT,
  flexDirection: "row",
  marginBottom: 8,
  marginTop: 8,
  padding: 16,
};
createStyles.section = createStyles;
createStyles.sectionContent = { alignItems: "center", flexDirection: "row", flexGrow: 1 };
createStyles.avatar = { marginRight: 8 };
createStyles.labelDetail = { marginRight: 12 };
createStyles.sectionIcon = { marginRight: 6 };
let closure_12 = createStyles.createStyles(createStyles);
const constants = { MEMBERS: 0, [0]: "MEMBERS", ROLES: 1, [1]: "ROLES" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default function ChannelAccessInfo(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_12();
  dependencyMap = tmp;
  let intl = guild(1114).intl;
  const stringResult = intl.string(guild(1114).t.li1wKf);
  let obj = guild(504);
  let items = [GuildRoleStore];
  const items1 = [guild, channel];
  const stateFromStoresArray = obj.useStateFromStoresArray(
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
  const existingMembers = guild(9738).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
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
  const items2 = [closure_8(guild(4556).Text, { variant: "eyebrow", children: stringResult })];
  obj = {
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
  obj = { style: tmp.sectionContent, children: null };
  if (null != first) {
    let obj1 = { children: null };
    let obj2 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1178).AvatarSizes.XSMALL };
    const items3 = [closure_8(tmp2(1178).Avatar, obj2)];
    let obj3 = { children: null };
    let obj4 = { variant: "text-sm/semibold", children: first.tag };
    const items4 = [closure_8(tmp2(4556).Text, obj4)];
    let obj5 = { variant: "text-xs/medium", children: null };
    let intl2 = tmp2(1114).intl;
    obj5.children = intl2.string(tmp2(1114).t.rt0ERW);
    items4[1] = closure_8(tmp2(4556).Text, obj5);
    obj3.children = items4;
    items3[1] = closure_9(View, obj3);
    obj1.children = items3;
    let obj6 = obj1;
  } else {
    function renderCounts(MEMBERS, length, arg2, GroupIcon) {
      if (0 === length) {
        return null;
      } else if (constants.MEMBERS === MEMBERS) {
        if (length > c11) {
          const intl4 = util.intl;
          let obj = { count: tmp12 };
          let formatToPlainStringResult = intl4.formatToPlainString(util.t.PR5l07, obj);
        } else {
          const intl3 = util.intl;
          obj = { count: length };
          formatToPlainStringResult = intl3.formatToPlainString(util.t.bu5sya, obj);
        }
      } else {
        if (tmp28.ROLES === MEMBERS) {
          if (length > c11) {
            const intl2 = util.intl;
            const obj1 = { count: tmp6 };
            let formatToPlainStringResult1 = intl2.formatToPlainString(util.t["+OYnFQ"], obj1);
            let tmp7 = require;
          } else {
            tmp7 = require;
            const intl = util.intl;
            const obj2 = { count: length };
            formatToPlainStringResult1 = intl.formatToPlainString(util.t.T2BEtm, obj2);
          }
          let tmp4 = tmp7;
          const tmp5 = formatToPlainStringResult1;
        } else {
          obj = GlobalUtils;
          obj.assertNever(MEMBERS);
          tmp4 = require;
        }
        const obj3 = { children: null };
        const obj4 = { size: "sm", style: closure_2.sectionIcon };
        const items = [React6(GroupIcon, obj4)];
        const obj5 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
        items[1] = React6(tmp4(4556).Text, obj5);
        obj3.children = items;
        return React7(noop.Fragment, obj3);
      }
    }
    obj6 = { children: null };
    const MEMBERS = constants.MEMBERS;
    channel(12470);
    const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(5089).GroupIcon)];
    const ROLES = constants.ROLES;
    channel(9754);
    items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(9752).ShieldUserIcon);
    obj6.children = items5;
  }
  const obj7 = { children: null };
  obj.children = closure_9(closure_10, obj6);
  const items6 = [closure_8(View, obj)];
  const tmp2Result = guild(9738);
  items6[1] = closure_8(guild(1178).Icon, { source: channel(9939), size: guild(1178).Icon.Sizes.SMALL });
  obj.children = items6;
  items2[1] = closure_9(guild(5123).PressableOpacity, obj);
  obj7.children = items2;
  return closure_9(closure_10, obj7);
}
