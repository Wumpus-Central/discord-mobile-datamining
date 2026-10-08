// discord_app/modules/stage_channels/native/channel_permissions/ViewModerators.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelOverwritesItemDefault from "../../../channel_permissions/native/components/ChannelOverwritesItem.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const RowType = fn(7484).RowType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ReactCompilerGating = fn(558);
function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(17310, dependencyMap.paths), "channel-add-moderators-" + channel.id, {
    channel,
    canSkip: flag,
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewModerators(channel) {
      const cResult = channel(576).c(21);
      channel = channel.channel;
      let obj = channel(576);
      const navigation = channel(1502).useNavigation();
      navigation.setOptions({
        headerRight() {
          return null;
        },
      });
      if (cResult[0] !== channel) {
        const guildId = channel.getGuildId();
        cResult[0] = channel;
        cResult[1] = guildId;
        let tmp5 = guildId;
      } else {
        tmp5 = cResult[1];
      }
      closure_1 = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, GuildRoleStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const fn = function w() {
          const obj = { guild: GuildStore.getGuild(closure_1), sortedGuildRoles: null };
          let sortedRoles;
          if (null != closure_1) {
            sortedRoles = GuildRoleStore.getSortedRoles(closure_1);
          }
          obj.sortedGuildRoles = sortedRoles;
          return obj;
        };
        const items1 = [tmp5];
        cResult[3] = tmp5;
        cResult[4] = fn;
        cResult[5] = items1;
        let tmp11 = items1;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      let obj2 = channel(1502);
      let obj3 = {
        headerRight() {
          return null;
        },
      };
      const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp7, tmp10, tmp11);
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      const tmpResult = channel(504);
      const canUpdateStageChannelModerators = channel(5889).useCanUpdateStageChannelModerators(channel.id);
      if (null != guild) {
        if (null != sortedGuildRoles) {
          if (cResult[6] !== channel) {
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            cResult[6] = channel;
            cResult[7] = isGuildStageVoiceResult;
            let tmp14 = isGuildStageVoiceResult;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] === canUpdateStageChannelModerators) {
            if (cResult[9] === channel) {
              if (cResult[10] === guild) {
                if (cResult[11] === tmp14) {
                  if (cResult[12] === sortedGuildRoles) {
                    let tmp16 = cResult[13];
                  }
                  return tmp16;
                }
              }
            }
          }
          let id;
          if (guild != null) {
            id = guild.id;
          }
          const memberIds = GuildMemberStore.getMemberIds(id);
          const obj7 = canUpdateStageChannelModerators(8579);
          const existingMembersRows = obj7.getExistingMembersRows(
            memberIds,
            channel,
            guild,
            tmp(2072).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          let obj8 = canUpdateStageChannelModerators(8579);
          const existingRolesRowWithPermissionDisabled = obj8.getExistingRolesRowWithPermissionDisabled(
            guild,
            sortedGuildRoles,
            channel,
            tmp(2072).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          if (cResult[14] !== channel) {
            function handleRemovePermission(name) {
              closure_0 = name;
              if (name.rowType === constants.ROLE) {
                let MEMBER = channel(onRemove[19]).PermissionOverwriteType.ROLE;
              } else {
                MEMBER = channel(onRemove[19]).PermissionOverwriteType.MEMBER;
              }
              closure_2 = channel(onRemove[16]).removeModeratorOverwrite(name.id, MEMBER, closure_0);
              let obj = channel(onRemove[16]);
              const obj3 = {
                title: null,
                body: null,
                cancelText: null,
                confirmText: null,
                onConfirm: null,
                hideActionSheet: false,
                confirmColor: null,
              };
              const intl = channel(onRemove[21]).intl;
              obj3.title = intl.string(channel(onRemove[21]).t.GuPYQB);
              const intl2 = channel(onRemove[21]).intl;
              obj3.body = intl2.format(channel(onRemove[21]).t.xERCnZ, { name: name.name });
              const intl3 = channel(onRemove[21]).intl;
              obj3.cancelText = intl3.string(channel(onRemove[21]).t["ETE/oC"]);
              const intl4 = channel(onRemove[21]).intl;
              obj3.confirmText = intl4.string(channel(onRemove[21]).t.fKxYb0);
              closure_1 = closure_4(function* () {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        if (obj11.isEmptyOverwrite(id)) {
                          c1 = 2;
                          c2 = 1;
                          const obj8 = { value: v1(7001).clearPermissionOverwrite(tmp2.id, id.id), done: false };
                          return obj8;
                        } else {
                          const items = [id];
                          c1 = 1;
                          c2 = 1;
                          const obj9 = { value: tmp2(8580).savePermissionUpdates(tmp2.id, items), done: false };
                          return obj9;
                        }
                        obj11 = tmp2(5889);
                      }
                    } else {
                      if (1 === tmp5) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj10 = { value, done: true };
                          return obj10;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj = { value, done: true };
                        return obj;
                      }
                      const result = tmp2(4765).memberOrRoleRemovedToast(closure_128_0.name);
                      const obj2 = tmp2(4765);
                      v1(5054).hideActionSheet();
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp20) {
                    c2 = tmp;
                    throw tmp20;
                  }
                }
              });
              obj3.onConfirm = function onConfirm() {
                const self = this;
                const apply = closure_1.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              obj3.confirmColor = channel(onRemove[25]).ButtonColors.RED;
              closure_1(onRemove[20]).show(obj3);
              let obj2 = closure_1(onRemove[20]);
              let obj4 = { name: name.name };
            }
            cResult[14] = channel;
            cResult[15] = handleRemovePermission;
            let tmp29 = handleRemovePermission;
          } else {
            tmp29 = cResult[15];
          }
          dependencyMap = tmp29;
          if (cResult[16] === canUpdateStageChannelModerators) {
            if (cResult[17] === channel.guild_id) {
              if (cResult[18] === channel.id) {
                if (cResult[19] === tmp29) {
                  let tmp30 = cResult[20];
                }
                closure_4 = tmp30;
                let tmp31 = tmp14;
                if (tmp14) {
                  let obj4 = { style: { paddingHorizontal: 16 }, spacing: 16, children: null };
                  const obj5 = { title: null, hasIcons: true, children: null };
                  let intl = tmp(1126).intl;
                  obj5.title = intl.string(tmp(1126).t.f7VbhF);
                  let obj6 = {
                    icon: closure_10(tmp(11220).CirclePlusIcon, {}),
                    label: null,
                    onPress: null,
                    disabled: null,
                    arrow: true,
                  };
                  let intl2 = tmp(1126).intl;
                  obj6.label = intl2.string(tmp(1126).t.n3bcy8);
                  obj6.onPress = function onPress() {
                    if (null != channel) {
                      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                      const _HermesInternal = HermesInternal;
                      const obj2 = ActionSheetActionCreatorsDefault;
                      const obj3 = { channel, canSkip: false };
                      obj2.openLazy(
                        asyncRequireImpl(17310, dependencyMap.paths),
                        "channel-add-moderators-" + channel.id,
                        obj3,
                      );
                      const tmp7 = asyncRequireImpl(17310, dependencyMap.paths);
                    }
                  };
                  obj6.disabled = !canUpdateStageChannelModerators;
                  obj5.children = closure_10(tmp(6184).TableRow, obj6);
                  const items2 = [closure_10(tmp(6267).TableRowGroup, obj5), ,];
                  let obj9 = { title: null, hasIcons: true, children: null };
                  let intl3 = tmp(1126).intl;
                  obj9.title = intl3.string(tmp(1126).t.ghdVJL);
                  obj9.children = existingRolesRowWithPermissionDisabled.map((item) => closure_4(item));
                  items2[1] = closure_10(tmp(6267).TableRowGroup, obj9);
                  let obj10 = { title: null, hasIcons: true, children: null };
                  let intl4 = tmp(1126).intl;
                  obj10.title = intl4.string(tmp(1126).t.ghdVJL);
                  obj10.children = existingMembersRows.map((item) => closure_4(item));
                  items2[2] = closure_10(tmp(6267).TableRowGroup, obj10);
                  obj4.children = items2;
                  tmp31 = closure_11(tmp(5373).Stack, obj4);
                }
                cResult[8] = canUpdateStageChannelModerators;
                cResult[9] = channel;
                cResult[10] = guild;
                cResult[11] = tmp14;
                cResult[12] = sortedGuildRoles;
                cResult[13] = tmp31;
                tmp16 = tmp31;
              }
            }
          }
          function renderRowItem(item) {
            return collapsed(
              ChannelOverwritesItemDefault,
              {
                guildId: channel.guild_id,
                item,
                channelId: channel.id,
                showType: true,
                showRemove: canUpdateStageChannelModerators,
                onRemove,
              },
              item.id,
            );
          }
          cResult[16] = canUpdateStageChannelModerators;
          cResult[17] = channel.guild_id;
          cResult[18] = channel.id;
          cResult[19] = tmp29;
          cResult[20] = renderRowItem;
          tmp30 = renderRowItem;
        }
      }
      return null;
    }
  : function ViewModerators(channel) {
      channel = channel.channel;
      function handleRemovePermission(name) {
        closure_0 = name;
        if (name.rowType === constants.ROLE) {
          let MEMBER = channel(handleRemovePermission[19]).PermissionOverwriteType.ROLE;
        } else {
          MEMBER = channel(handleRemovePermission[19]).PermissionOverwriteType.MEMBER;
        }
        closure_2 = channel(handleRemovePermission[16]).removeModeratorOverwrite(name.id, MEMBER, closure_0);
        let obj = channel(handleRemovePermission[16]);
        const obj3 = {
          title: null,
          body: null,
          cancelText: null,
          confirmText: null,
          onConfirm: null,
          hideActionSheet: false,
          confirmColor: null,
        };
        const intl = channel(handleRemovePermission[21]).intl;
        obj3.title = intl.string(channel(handleRemovePermission[21]).t.GuPYQB);
        const intl2 = channel(handleRemovePermission[21]).intl;
        obj3.body = intl2.format(channel(handleRemovePermission[21]).t.xERCnZ, { name: name.name });
        const intl3 = channel(handleRemovePermission[21]).intl;
        obj3.cancelText = intl3.string(channel(handleRemovePermission[21]).t["ETE/oC"]);
        const intl4 = channel(handleRemovePermission[21]).intl;
        obj3.confirmText = intl4.string(channel(handleRemovePermission[21]).t.fKxYb0);
        closure_1 = asyncGeneratorStep(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (obj11.isEmptyOverwrite(id)) {
                    c1 = 2;
                    c2 = 1;
                    const obj8 = { value: v1(7001).clearPermissionOverwrite(tmp2.id, id.id), done: false };
                    return obj8;
                  } else {
                    const items = [id];
                    c1 = 1;
                    c2 = 1;
                    const obj9 = { value: tmp2(8580).savePermissionUpdates(tmp2.id, items), done: false };
                    return obj9;
                  }
                  obj11 = tmp2(5889);
                }
              } else {
                if (1 === tmp5) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj10 = { value, done: true };
                    return obj10;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                const result = tmp2(4765).memberOrRoleRemovedToast(closure_128_0.name);
                const obj2 = tmp2(4765);
                v1(5054).hideActionSheet();
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp20) {
              c2 = tmp;
              throw tmp20;
            }
          }
        });
        obj3.onConfirm = function onConfirm() {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        obj3.confirmColor = channel(handleRemovePermission[25]).ButtonColors.RED;
        guildId(handleRemovePermission[20]).show(obj3);
        let obj2 = guildId(handleRemovePermission[20]);
        let obj4 = { name: name.name };
      }
      const navigation = channel(handleRemovePermission[14]).useNavigation();
      navigation.setOptions({
        headerRight() {
          return null;
        },
      });
      const guildId = channel.getGuildId();
      let obj = channel(handleRemovePermission[14]);
      let obj2 = {
        headerRight() {
          return null;
        },
      };
      let items = [GuildStore, GuildRoleStore];
      const items1 = [guildId];
      const stateFromStoresObject = channel(handleRemovePermission[15]).useStateFromStoresObject(
        items,
        () => {
          const obj = { guild: GuildStore.getGuild(guildId), sortedGuildRoles: null };
          let sortedRoles;
          if (null != guildId) {
            sortedRoles = GuildRoleStore.getSortedRoles(guildId);
          }
          obj.sortedGuildRoles = sortedRoles;
          return obj;
        },
        items1,
      );
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      let obj4 = channel(handleRemovePermission[15]);
      const canUpdateStageChannelModerators = channel(handleRemovePermission[16]).useCanUpdateStageChannelModerators(
        channel.id,
      );
      if (null != guild) {
        if (null != sortedGuildRoles) {
          let isGuildStageVoiceResult = channel.isGuildStageVoice();
          let id;
          if (guild != null) {
            id = guild.id;
          }
          const memberIds = GuildMemberStore.getMemberIds(id);
          let obj6 = canUpdateStageChannelModerators(tmp2[17]);
          const existingMembersRows = obj6.getExistingMembersRows(
            memberIds,
            channel,
            guild,
            tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          const obj7 = canUpdateStageChannelModerators(tmp2[17]);
          const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(
            guild,
            sortedGuildRoles,
            channel,
            tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          if (isGuildStageVoiceResult) {
            let obj3 = { style: { paddingHorizontal: 16 }, spacing: 16, children: null };
            let obj8 = { title: null, hasIcons: true, children: null };
            let intl = tmp(tmp2[21]).intl;
            obj8.title = intl.string(tmp(tmp2[21]).t.f7VbhF);
            let obj9 = {
              icon: closure_10(tmp(tmp2[30]).CirclePlusIcon, {}),
              label: null,
              onPress: null,
              disabled: null,
              arrow: true,
            };
            let intl2 = tmp(tmp2[21]).intl;
            obj9.label = intl2.string(tmp(tmp2[21]).t.n3bcy8);
            obj9.onPress = function onPress() {
              if (null != channel) {
                AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                const _HermesInternal = HermesInternal;
                const obj2 = ActionSheetActionCreatorsDefault;
                const obj3 = { channel, canSkip: false };
                obj2.openLazy(
                  asyncRequireImpl(17310, dependencyMap.paths),
                  "channel-add-moderators-" + channel.id,
                  obj3,
                );
                const tmp7 = asyncRequireImpl(17310, dependencyMap.paths);
              }
            };
            obj9.disabled = !canUpdateStageChannelModerators;
            obj8.children = closure_10(tmp(tmp2[29]).TableRow, obj9);
            const items2 = [closure_10(tmp(tmp2[28]).TableRowGroup, obj8), ,];
            let obj10 = { title: null, hasIcons: true, children: null };
            let intl3 = tmp(tmp2[21]).intl;
            obj10.title = intl3.string(tmp(tmp2[21]).t.ghdVJL);
            obj10.children = existingRolesRowWithPermissionDisabled.map((item) =>
              collapsed(
                ChannelOverwritesItemDefault,
                {
                  guildId: channel.guild_id,
                  item,
                  channelId: channel.id,
                  showType: true,
                  showRemove: canUpdateStageChannelModerators,
                  onRemove: handleRemovePermission,
                },
                item.id,
              ),
            );
            items2[1] = closure_10(tmp(tmp2[28]).TableRowGroup, obj10);
            let obj11 = { title: null, hasIcons: true, children: null };
            let intl4 = tmp(tmp2[21]).intl;
            obj11.title = intl4.string(tmp(tmp2[21]).t.ghdVJL);
            obj11.children = existingMembersRows.map((item) =>
              collapsed(
                ChannelOverwritesItemDefault,
                {
                  guildId: channel.guild_id,
                  item,
                  channelId: channel.id,
                  showType: true,
                  showRemove: canUpdateStageChannelModerators,
                  onRemove: handleRemovePermission,
                },
                item.id,
              ),
            );
            items2[2] = closure_10(tmp(tmp2[28]).TableRowGroup, obj11);
            obj3.children = items2;
            isGuildStageVoiceResult = closure_11(tmp(tmp2[27]).Stack, obj3);
          }
          return isGuildStageVoiceResult;
        }
      }
      return null;
    };
export { openAddModeratorsActionSheet };
