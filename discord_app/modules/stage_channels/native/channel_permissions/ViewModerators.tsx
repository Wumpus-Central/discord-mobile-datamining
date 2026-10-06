// discord_app/modules/stage_channels/native/channel_permissions/ViewModerators.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelPermissionsConstants from "../../../channel_permissions/ChannelPermissionsConstants.tsx";
import ChannelOverwritesItemDefault from "../../../channel_permissions/native/components/ChannelOverwritesItem.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, c2, navigation;

let c10;
let unpackModuleId;
const AnalyticEvents = Constants.AnalyticEvents;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let guild;
      let onRemove;
      let sortedGuildRoles;
      let tmp11;
      let tmp5;
      let tmp7;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(21);
      channel = channel.channel;
      let obj2 = channel(1490);
      navigation = obj2.useNavigation();
      let obj3 = {
        headerRight() {
          return null;
        },
      };
      navigation.setOptions(obj3);
      if (cResult[0] !== channel) {
        const guildId = channel.getGuildId();
        cResult[0] = channel;
        cResult[1] = guildId;
        tmp5 = guildId;
      } else {
        tmp5 = cResult[1];
      }
      let closure_1 = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, GuildRoleStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        class S {
          constructor() {
            let sortedRoles;
            const obj = { guild: GuildStore.getGuild(closure_1), sortedGuildRoles: sortedRoles };
            sortedRoles = undefined;
            if (null != closure_1) {
              sortedRoles = GuildRoleStore.getSortedRoles(closure_1);
            }
            return obj;
          }
        }
        const items1 = [tmp5];
        cResult[3] = tmp5;
        cResult[4] = S;
        cResult[5] = items1;
        tmp11 = items1;
      } else {
        class S {
          constructor() {
            let sortedRoles;
            const obj = { guild: GuildStore.getGuild(closure_1), sortedGuildRoles: sortedRoles };
            sortedRoles = undefined;
            if (null != closure_1) {
              sortedRoles = GuildRoleStore.getSortedRoles(closure_1);
            }
            return obj;
          }
        }
        tmp11 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, S, tmp11);
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      const tmpResult2 = tmp(5579);
      const canUpdateStageChannelModerators = tmpResult2.useCanUpdateStageChannelModerators(channel.id);
      if (null != guild) {
        class S {
          constructor() {
            let sortedRoles;
            const obj = { guild: GuildStore.getGuild(closure_1), sortedGuildRoles: sortedRoles };
            sortedRoles = undefined;
            if (null != closure_1) {
              sortedRoles = GuildRoleStore.getSortedRoles(closure_1);
            }
            return obj;
          }
        }
      }
      return null;
    }
  : (channel) => {
      let TableRow;
      let guild;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items2;
      let obj9;
      let sortedGuildRoles;
      channel = channel.channel;
      function handleRemovePermission(id) {
        let MEMBER;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let obj2;
        let closure_0 = id;
        const tmp3 = channel(handleRemovePermission[16]);
        const removeModeratorOverwrite = tmp3.removeModeratorOverwrite;
        id = id.id;
        if (id.rowType === constants.ROLE) {
          MEMBER = channel(handleRemovePermission[19]).PermissionOverwriteType.ROLE;
        } else {
          MEMBER = channel(handleRemovePermission[19]).PermissionOverwriteType.MEMBER;
        }
        let closure_2 = removeModeratorOverwrite(id, MEMBER, closure_0);
        const tmp4 = guildId(handleRemovePermission[20]);
        let obj = {
          title: intl.string(channel(handleRemovePermission[21]).t.GuPYQB),
          body: intl2.format(channel(handleRemovePermission[21]).t.xERCnZ, obj2),
          cancelText: intl3.string(channel(handleRemovePermission[21]).t["ETE/oC"]),
          confirmText: intl4.string(channel(handleRemovePermission[21]).t.fKxYb0),
          onConfirm: function () {
            return closure_1(...arguments);
          },
          hideActionSheet: false,
          confirmColor: channel(handleRemovePermission[25]).ButtonColors.RED,
        };
        const show = tmp4.show;
        intl = channel(handleRemovePermission[21]).intl;
        intl2 = channel(handleRemovePermission[21]).intl;
        obj2 = { name: id.name };
        intl3 = channel(handleRemovePermission[21]).intl;
        intl4 = channel(handleRemovePermission[21]).intl;
        let closure_1 = _asyncToGenerator(async () => {
          let closure_0;
          let obj5;
          let obj7;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  const obj11 = tmp(handleRemovePermission[16]);
                  if (obj11.isEmptyOverwrite(id)) {
                    c1 = 2;
                    c2 = 1;
                    const obj8 = { value: obj7.clearPermissionOverwrite(tmp.id, id.id), done: false };
                    obj7 = v1(handleRemovePermission[22]);
                    return obj8;
                  } else {
                    const items = [id];
                    c1 = 1;
                    c2 = 1;
                    const obj9 = { value: obj5.savePermissionUpdates(tmp.id, items), done: false };
                    obj5 = tmp(handleRemovePermission[23]);
                    return obj9;
                  }
                }
              } else {
                if (1 === tmp4) {
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
                const obj2 = tmp(handleRemovePermission[24]);
                const result = obj2.memberOrRoleRemovedToast(closure_128_0.name);
                const obj3 = v1(handleRemovePermission[9]);
                obj3.hideActionSheet();
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c2 = 3;
              throw tmp19;
            }
          }
        });
        show(obj);
      }
      const tmp = channel;
      let obj = channel(handleRemovePermission[14]);
      navigation = obj.useNavigation();
      let obj2 = {
        headerRight() {
          return null;
        },
      };
      navigation.setOptions(obj2);
      const guildId = channel.getGuildId();
      let obj4 = channel(handleRemovePermission[15]);
      let items = [GuildStore, GuildRoleStore];
      const items1 = [guildId];
      const stateFromStoresObject = obj4.useStateFromStoresObject(
        items,
        () => {
          let sortedRoles;
          const obj = { guild: GuildStore.getGuild(guildId), sortedGuildRoles: sortedRoles };
          sortedRoles = undefined;
          if (null != guildId) {
            sortedRoles = GuildRoleStore.getSortedRoles(guildId);
          }
          return obj;
        },
        items1,
      );
      ({ guild, sortedGuildRoles } = stateFromStoresObject);
      let obj5 = channel(handleRemovePermission[16]);
      const canUpdateStageChannelModerators = obj5.useCanUpdateStageChannelModerators(channel.id);
      if (null != guild) {
        if (null != sortedGuildRoles) {
          let isGuildStageVoiceResult = channel.isGuildStageVoice();
          let id;
          const getMemberIds = GuildMemberStore.getMemberIds;
          if (guild != null) {
            id = guild.id;
          }
          const memberIds = getMemberIds(id);
          let obj6 = canUpdateStageChannelModerators(tmp2[17]);
          const existingMembersRows = obj6.getExistingMembersRows(
            memberIds,
            channel,
            guild,
            tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          let obj7 = canUpdateStageChannelModerators(tmp2[17]);
          const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(
            guild,
            sortedGuildRoles,
            channel,
            tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
          );
          if (isGuildStageVoiceResult) {
            let obj3 = { style: { paddingHorizontal: 16 }, spacing: 16, children: items2 };
            const Stack = tmp(tmp2[27]).Stack;
            let obj8 = {
              title: intl.string(tmp(handleRemovePermission[21]).t.f7VbhF),
              hasIcons: true,
              children: closure_10(TableRow, obj9),
            };
            const TableRowGroup = tmp(tmp2[28]).TableRowGroup;
            intl = tmp(tmp2[21]).intl;
            obj9 = {
              icon: closure_10(tmp(handleRemovePermission[30]).CirclePlusIcon, {}),
              label: intl2.string(tmp(handleRemovePermission[21]).t.n3bcy8),
              onPress() {
                if (null != channel) {
                  const obj = AnalyticsUtilsDefault;
                  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                  const _HermesInternal = HermesInternal;
                  ActionSheetActionCreatorsDefault;
                  const obj2 = { channel, canSkip: false };
                  const tmp8 = asyncRequire(17029, dependencyMap.paths);
                  openLazy(tmp8, "channel-add-moderators-" + channel.id, obj2);
                }
              },
              disabled: !canUpdateStageChannelModerators,
              arrow: true,
            };
            TableRow = tmp(tmp2[29]).TableRow;
            intl2 = tmp(tmp2[21]).intl;
            items2 = [closure_10(TableRowGroup, obj8), ,];
            let obj10 = {
              title: intl3.string(tmp(handleRemovePermission[21]).t.ghdVJL),
              hasIcons: true,
              children: existingRolesRowWithPermissionDisabled.map((item) => {
                const obj = {
                  guildId: channel.guild_id,
                  item,
                  channelId: channel.id,
                  showType: true,
                  showRemove: canUpdateStageChannelModerators,
                  onRemove: handleRemovePermission,
                };
                return authStore(ChannelOverwritesItemDefault, obj, item.id);
              }),
            };
            const TableRowGroup2 = tmp(tmp2[28]).TableRowGroup;
            intl3 = tmp(tmp2[21]).intl;
            items2[1] = closure_10(TableRowGroup2, obj10);
            let obj11 = {
              title: intl4.string(tmp(handleRemovePermission[21]).t.ghdVJL),
              hasIcons: true,
              children: existingMembersRows.map((item) => {
                const obj = {
                  guildId: channel.guild_id,
                  item,
                  channelId: channel.id,
                  showType: true,
                  showRemove: canUpdateStageChannelModerators,
                  onRemove: handleRemovePermission,
                };
                return authStore(ChannelOverwritesItemDefault, obj, item.id);
              }),
            };
            const TableRowGroup3 = tmp(tmp2[28]).TableRowGroup;
            intl4 = tmp(tmp2[21]).intl;
            items2[2] = closure_10(TableRowGroup3, obj11);
            isGuildStageVoiceResult = closure_11(Stack, obj3);
          }
          return isGuildStageVoiceResult;
        }
      }
      return null;
    };
function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channel, canSkip: flag };
  const tmp3 = asyncRequire(17029, dependencyMap.paths);
  openLazy(tmp3, "channel-add-moderators-" + channel.id, obj2);
}
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default tmp4;
export { openAddModeratorsActionSheet };
