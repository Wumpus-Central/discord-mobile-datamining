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
const isGuildOwner = fn(2082).isGuildOwner;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = 100;
const createStyles = fn(5090);
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
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  color: nativeDefault.colors.TEXT_DEFAULT,
  flexDirection: "row",
  marginBottom: 8,
  marginTop: 8,
  padding: 16,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelAccessInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelAccessInfo(guild) {
      const cResult = guild(str[9]).c(45);
      guild = guild.guild;
      const channel = guild.channel;
      str = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[10]).intl;
        const stringResult = intl.string(tmp(tmp2[10]).t.li1wKf);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleStore];
        cResult[1] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === channel) {
        if (cResult[3] === guild) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        let stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp6, tmp8, tmp9);
        if (cResult[6] === channel) {
          if (cResult[7] === guild) {
            if (cResult[8] === stateFromStoresArray.length) {
              if (cResult[9] === str.avatar) {
                if (cResult[10] === str.labelDetail) {
                  if (cResult[11] === str.section) {
                    if (cResult[12] === str.sectionContent) {
                      if (cResult[13] === str.sectionIcon) {
                        if (cResult[30] === cResult[14]) {
                          if (cResult[31] === tmp14) {
                            const _Symbol2 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              let obj2 = { source: channel(tmp2[22]), size: tmp(tmp2[17]).Icon.Sizes.SMALL };
                              const tmp55 = closure_8(tmp(tmp2[17]).Icon, obj2);
                              cResult[34] = tmp55;
                              let tmp52 = tmp55;
                            } else {
                              tmp52 = cResult[34];
                            }
                            if (cResult[35] === tmp11) {
                              if (cResult[36] === tmp12) {
                                if (cResult[37] === tmp49) {
                                  if (cResult[38] === tmp16) {
                                    if (cResult[39] === tmp17) {
                                      if (cResult[40] === tmp18) {
                                        let tmp56 = cResult[41];
                                      }
                                      if (cResult[42] === tmp13) {
                                        if (cResult[43] === tmp56) {
                                          let tmp59 = cResult[44];
                                        }
                                        return tmp59;
                                      }
                                      let obj3 = { children: null };
                                      const items1 = [tmp13, tmp56];
                                      obj3.children = items1;
                                      const tmp62 = closure_9(closure_10, obj3);
                                      cResult[42] = tmp13;
                                      cResult[43] = tmp56;
                                      cResult[44] = tmp62;
                                      tmp59 = tmp62;
                                    }
                                  }
                                }
                              }
                            }
                            let obj4 = {
                              accessibilityLabel: tmp16,
                              accessibilityRole: tmp17,
                              onPress: tmp18,
                              style: tmp12,
                              children: null,
                            };
                            const items2 = [tmp49, tmp52];
                            obj4.children = items2;
                            const tmp58 = closure_9(tmp11, obj4);
                            cResult[35] = tmp11;
                            cResult[36] = tmp12;
                            cResult[37] = tmp49;
                            class T {
                              constructor() {
                                obj = closure_0(closure_2[11]);
                                return obj.getExistingRoles(
                                  guild,
                                  closure_7.getSortedRoles(guild.id),
                                  channel,
                                  channel.accessPermissions,
                                );
                              }
                            }
                            cResult[39] = tmp17;
                            cResult[40] = tmp18;
                            cResult[41] = tmp58;
                            tmp56 = tmp58;
                          }
                        }
                        let obj5 = { style: cResult[18], children: cResult[19] };
                        cResult[30] = cResult[14];
                        cResult[31] = cResult[18];
                        cResult[32] = cResult[19];
                        cResult[33] = closure_8(cResult[14], obj5);
                        class T {
                          constructor() {
                            obj = closure_0(closure_2[11]);
                            return obj.getExistingRoles(
                              guild,
                              closure_7.getSortedRoles(guild.id),
                              channel,
                              channel.accessPermissions,
                            );
                          }
                        }
                        const tmp51 = closure_8(cResult[14], obj5);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let id;
        if (guild != null) {
          id = guild.id;
        }
        const memberIds = GuildMemberStore.getMemberIds(id);
        const tmpResult2 = tmp(tmp2[11]);
        const existingMembers = tmpResult2.getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
        let tmp27 = 0 === stateFromStoresArray.length;
        if (tmp27) {
          tmp27 = 1 === existingMembers.length;
        }
        if (tmp27) {
          tmp27 = isGuildOwner(guild, existingMembers[0]);
        }
        let first1 = null;
        if (tmp27) {
          first1 = existingMembers[0];
        }
        if (cResult[23] === channel.guild_id) {
          if (cResult[24] === channel.id) {
            let tmp30 = cResult[25];
          }
          if (cResult[26] === str.labelDetail) {
            if (cResult[27] === str.sectionIcon) {
              let tmp32 = cResult[28];
            }
            const _Symbol = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              let obj6 = { variant: "eyebrow", children: first };
              const tmp35 = closure_8(tmp(tmp2[15]).Text, obj6);
              cResult[29] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[29];
            }
            const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
            const section = str.section;
            const sectionContent = str.sectionContent;
            if (null != first1) {
              let obj8 = { style: str.avatar, user: first1, guildId: guild.id, size: tmp(tmp2[17]).AvatarSizes.XSMALL };
              const items3 = [closure_8(tmp(tmp2[17]).Avatar, obj8)];
              const obj9 = { children: null };
              const obj10 = { variant: "text-sm/semibold", children: first1.tag };
              const items4 = [closure_8(tmp(tmp2[15]).Text, obj10)];
              first1 = tmp(tmp2[15]).Text;
              const obj11 = { variant: "text-xs/medium", children: null };
              let intl2 = tmp(tmp2[10]).intl;
              obj11.children = intl2.string(tmp(tmp2[10]).t.rt0ERW);
              items4[1] = closure_8(first1, obj11);
              obj9.children = items4;
              items3[1] = closure_9(View, obj9);
              class T {
                constructor() {
                  obj = closure_0(closure_2[11]);
                  return obj.getExistingRoles(
                    guild,
                    closure_7.getSortedRoles(guild.id),
                    channel,
                    channel.accessPermissions,
                  );
                }
              }
              let obj12 = { children: null };
              let obj7 = { children: null };
            } else {
              obj12 = { children: null };
              const MEMBERS = constants.MEMBERS;
              const items5 = [tmp32(MEMBERS, existingMembers.length, channel(tmp2[18]), tmp(tmp2[19]).GroupIcon)];
              const ROLES = constants.ROLES;
              const tmp65 = channel(tmp2[18]);
              items5[1] = tmp32(ROLES, stateFromStoresArray.length, channel(tmp2[20]), tmp(tmp2[21]).ShieldUserIcon);
              obj12.children = items5;
              const tmp67 = channel(tmp2[20]);
            }
            const tmp37Result = closure_9(closure_10, obj12);
            cResult[6] = channel;
            cResult[7] = guild;
            cResult[8] = stateFromStoresArray.length;
            cResult[9] = str.avatar;
            cResult[10] = str.labelDetail;
            class T {
              constructor() {
                obj = closure_0(closure_2[11]);
                return obj.getExistingRoles(
                  guild,
                  closure_7.getSortedRoles(guild.id),
                  channel,
                  channel.accessPermissions,
                );
              }
            }
            stateFromStoresArray = str.sectionContent;
            cResult[12] = stateFromStoresArray;
            cResult[13] = str.sectionIcon;
            cResult[14] = View;
            cResult[15] = PressableOpacity;
            cResult[16] = section;
            cResult[17] = tmp33;
            cResult[18] = sectionContent;
            cResult[19] = tmp37Result;
            cResult[20] = first;
            str = "button";
            cResult[21] = "button";
            cResult[22] = tmp30;
          }
          function renderCounts(type, count, arg2, arg3) {
            if (0 === count) {
              return null;
            } else if (constants.MEMBERS === type) {
              if (count > c11) {
                const intl4 = util.intl;
                const obj2 = { count: tmp12 };
                let formatToPlainStringResult = intl4.formatToPlainString(util.t.PR5l07, obj2);
              } else {
                const intl3 = util.intl;
                const obj3 = { count };
                formatToPlainStringResult = intl3.formatToPlainString(util.t.bu5sya, obj3);
              }
            } else {
              if (tmp28.ROLES === type) {
                if (count > c11) {
                  const intl2 = util.intl;
                  const obj4 = { count: tmp6 };
                  let formatToPlainStringResult1 = intl2.formatToPlainString(util.t["+OYnFQ"], obj4);
                  let tmp7 = require;
                } else {
                  tmp7 = require;
                  const intl = util.intl;
                  const obj5 = { count };
                  formatToPlainStringResult1 = intl.formatToPlainString(util.t.T2BEtm, obj5);
                }
                let tmp4 = tmp7;
                const tmp5 = formatToPlainStringResult1;
              } else {
                GlobalUtils.assertNever(type);
                tmp4 = require;
              }
              const obj6 = { children: null };
              const obj7 = { size: "sm", style: str.sectionIcon };
              const items = [closure_2_8(arg3, obj7)];
              const obj8 = { style: str.labelDetail, variant: "text-sm/medium", children: tmp5 };
              items[1] = closure_2_8(tmp4(5086).Text, obj8);
              obj6.children = items;
              return options(noop.Fragment, obj6);
            }
          }
          cResult[26] = str.labelDetail;
          cResult[27] = str.sectionIcon;
          cResult[28] = renderCounts;
          tmp32 = renderCounts;
        }
        class T {
          constructor() {
            obj = closure_0(closure_2[11]);
            return obj.getExistingRoles(guild, closure_7.getSortedRoles(guild.id), channel, channel.accessPermissions);
          }
        }
        cResult[23] = channel.guild_id;
        cResult[24] = channel.id;
        cResult[25] = tmp31;
        tmp30 = tmp31;
        const tmpResult = tmp(tmp2[12]);
      }
      class T {
        constructor() {
          obj = closure_0(closure_2[11]);
          return obj.getExistingRoles(guild, closure_7.getSortedRoles(guild.id), channel, channel.accessPermissions);
        }
      }
      const items6 = [guild, channel];
      cResult[2] = channel;
      cResult[3] = guild;
      cResult[4] = T;
      cResult[5] = items6;
      tmp9 = items6;
      tmp8 = T;
      let obj = guild(str[9]);
    }
  : function ChannelAccessInfo(guild) {
      guild = guild.guild;
      const channel = guild.channel;
      const tmp = closure_12();
      dependencyMap = tmp;
      let intl = guild(1126).intl;
      const stringResult = intl.string(guild(1126).t.li1wKf);
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
      const existingMembers = guild(8579).getExistingMembers(memberIds, channel, guild, channel.accessPermissions);
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
      const items2 = [closure_8(guild(5086).Text, { variant: "eyebrow", children: stringResult })];
      let obj2 = {
        accessibilityLabel: stringResult,
        accessibilityRole: "button",
        onPress: function handleSectionPressed() {
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
        let obj5 = { style: tmp.avatar, user: first, guildId: guild.id, size: tmp2(1200).AvatarSizes.XSMALL };
        const items3 = [closure_8(tmp2(1200).Avatar, obj5)];
        let obj6 = { children: null };
        let obj7 = { variant: "text-sm/semibold", children: first.tag };
        const items4 = [closure_8(tmp2(5086).Text, obj7)];
        let obj8 = { variant: "text-xs/medium", children: null };
        let intl2 = tmp2(1126).intl;
        obj8.children = intl2.string(tmp2(1126).t.rt0ERW);
        items4[1] = closure_8(tmp2(5086).Text, obj8);
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
            const items = [closure_2_8(GroupIcon, obj7)];
            const obj8 = { style: closure_2.labelDetail, variant: "text-sm/medium", children: tmp5 };
            items[1] = closure_2_8(tmp4(5086).Text, obj8);
            obj6.children = items;
            return options(noop.Fragment, obj6);
          }
        }
        obj9 = { children: null };
        const MEMBERS = constants.MEMBERS;
        channel(12220);
        const items5 = [renderCounts(MEMBERS, existingMembers.length, 0, tmp2(8192).GroupIcon)];
        const ROLES = constants.ROLES;
        channel(8599);
        items5[1] = renderCounts(ROLES, stateFromStoresArray.length, 0, tmp2(8597).ShieldUserIcon);
        obj9.children = items5;
      }
      const obj10 = { children: null };
      obj3.children = closure_9(closure_10, obj9);
      const items6 = [closure_8(View, obj3)];
      const tmp2Result = guild(8579);
      items6[1] = closure_8(guild(1200).Icon, { source: channel(10808), size: guild(1200).Icon.Sizes.SMALL });
      obj2.children = items6;
      items2[1] = closure_9(guild(6189).PressableOpacity, obj2);
      obj10.children = items2;
      return closure_9(closure_10, obj10);
    };
