// discord_app/modules/stage_channels/native/channel_permissions/ViewModerators.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelOverwritesItemDefault from "../../../channel_permissions/native/components/ChannelOverwritesItem.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const RowType = fn(8401).RowType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default function ViewModerators(channel) {
  channel = channel.channel;
  function handleRemovePermission(name) {
    closure_0 = name;
    let obj = channel(handleRemovePermission[14]);
    if (name.rowType === constants.ROLE) {
      let MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = channel(handleRemovePermission[17]).PermissionOverwriteType.MEMBER;
    }
    closure_2 = obj.removeModeratorOverwrite(name.id, MEMBER, closure_0);
    obj = {
      title: null,
      body: null,
      cancelText: null,
      confirmText: null,
      onConfirm: null,
      hideActionSheet: false,
      confirmColor: null,
    };
    const intl = channel(handleRemovePermission[19]).intl;
    obj.title = intl.string(channel(handleRemovePermission[19]).t.GuPYQB);
    const intl2 = channel(handleRemovePermission[19]).intl;
    obj = { name: name.name };
    obj.body = intl2.format(channel(handleRemovePermission[19]).t.xERCnZ, obj);
    const intl3 = channel(handleRemovePermission[19]).intl;
    obj.cancelText = intl3.string(channel(handleRemovePermission[19]).t["ETE/oC"]);
    const intl4 = channel(handleRemovePermission[19]).intl;
    obj.confirmText = intl4.string(channel(handleRemovePermission[19]).t.fKxYb0);
    closure_1 = asyncGeneratorStep(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              if (obj11.isEmptyOverwrite(id)) {
                c1 = 2;
                c2 = 1;
                let obj1 = { value: v1(4573).clearPermissionOverwrite(tmp2.id, id.id), done: false };
                return obj1;
              } else {
                const items = [id];
                c1 = 1;
                c2 = 1;
                let obj2 = { value: tmp2(9739).savePermissionUpdates(tmp2.id, items), done: false };
                return obj2;
              }
              obj11 = tmp2(5415);
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
            obj1 = tmp2(4258);
            const result = obj1.memberOrRoleRemovedToast(closure_128_0.name);
            obj2 = v1(4527);
            obj2.hideActionSheet();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c2 = tmp;
          throw tmp20;
        }
      }
    });
    obj.onConfirm = function () {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.confirmColor = channel(handleRemovePermission[23]).ButtonColors.RED;
    guildId(handleRemovePermission[18]).show(obj);
    let obj2 = guildId(handleRemovePermission[18]);
  }
  let obj = channel(handleRemovePermission[12]);
  const navigation = obj.useNavigation();
  obj = {
    headerRight() {
      return null;
    },
  };
  navigation.setOptions(obj);
  const guildId = channel.getGuildId();
  let obj3 = channel(handleRemovePermission[13]);
  let items = [GuildStore, GuildRoleStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(
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
  let obj4 = channel(handleRemovePermission[14]);
  const canUpdateStageChannelModerators = obj4.useCanUpdateStageChannelModerators(channel.id);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = GuildMemberStore.getMemberIds(id);
      const obj6 = canUpdateStageChannelModerators(tmp2[15]);
      const existingMembersRows = obj6.getExistingMembersRows(
        memberIds,
        channel,
        guild,
        tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
      );
      const obj7 = canUpdateStageChannelModerators(tmp2[15]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(
        guild,
        sortedGuildRoles,
        channel,
        tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
      );
      if (isGuildStageVoiceResult) {
        obj = { style: { paddingHorizontal: 16 }, spacing: 16, children: null };
        let obj1 = { title: null, hasIcons: true, children: null };
        let intl = tmp(tmp2[19]).intl;
        obj1.title = intl.string(tmp(tmp2[19]).t.f7VbhF);
        let obj2 = {
          icon: closure_10(tmp(tmp2[28]).CirclePlusIcon, {}),
          label: null,
          onPress: null,
          disabled: null,
          arrow: true,
        };
        let intl2 = tmp(tmp2[19]).intl;
        obj2.label = intl2.string(tmp(tmp2[19]).t.n3bcy8);
        obj2.onPress = function onPress() {
          if (null != channel) {
            let obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
            const _HermesInternal = HermesInternal;
            const obj2 = ActionSheetActionCreatorsDefault;
            obj = { channel, canSkip: false };
            obj2.openLazy(asyncRequireImpl(16824, dependencyMap.paths), "channel-add-moderators-" + channel.id, obj);
            const tmp7 = asyncRequireImpl(16824, dependencyMap.paths);
          }
        };
        obj2.disabled = !canUpdateStageChannelModerators;
        obj1.children = closure_10(tmp(tmp2[27]).TableRow, obj2);
        const items2 = [closure_10(tmp(tmp2[26]).TableRowGroup, obj1), ,];
        obj3 = { title: null, hasIcons: true, children: null };
        let intl3 = tmp(tmp2[19]).intl;
        obj3.title = intl3.string(tmp(tmp2[19]).t.ghdVJL);
        obj3.children = existingRolesRowWithPermissionDisabled.map((item) =>
          closure_2_10(
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
        items2[1] = closure_10(tmp(tmp2[26]).TableRowGroup, obj3);
        obj4 = { title: null, hasIcons: true, children: null };
        let intl4 = tmp(tmp2[19]).intl;
        obj4.title = intl4.string(tmp(tmp2[19]).t.ghdVJL);
        obj4.children = existingMembersRows.map((item) =>
          closure_2_10(
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
        items2[2] = closure_10(tmp(tmp2[26]).TableRowGroup, obj4);
        obj.children = items2;
        isGuildStageVoiceResult = closure_11(tmp(tmp2[25]).Stack, obj);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
}
export const openAddModeratorsActionSheet = function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj = { channel, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(16824, dependencyMap.paths), "channel-add-moderators-" + channel.id, obj);
};
