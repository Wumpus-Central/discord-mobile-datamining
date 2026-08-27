// === Module 16317: ViewModerators ===

// Module 16317 (ViewModerators)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { RowType } from "RowType" /* 8603 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let result = require("set").fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default function ViewModerators(channel) {
  channel = channel.channel;
  let guildId;
  let canUpdateStageChannelModerators;
  function handleRemovePermission(name) {
    closure_0 = name;
    let obj = channel(handleRemovePermission[14]);
    if (name.rowType === closure_1_9.ROLE) {
      let MEMBER = tmp(tmp2[17]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = tmp(tmp2[17]).PermissionOverwriteType.MEMBER;
    }
    closure_2 = obj.removeModeratorOverwrite(name.id, MEMBER, closure_0);
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
    const intl = tmp(tmp2[19]).intl;
    obj[0] = intl.string(channel(handleRemovePermission[19]).t.GuPYQB);
    const intl2 = tmp(tmp2[19]).intl;
    obj = { name: name.name };
    obj[1] = intl2.format(channel(handleRemovePermission[19]).t.xERCnZ, obj);
    const intl3 = tmp(tmp2[19]).intl;
    obj[2] = intl3.string(channel(handleRemovePermission[19]).t["ETE/oC"]);
    const intl4 = tmp(tmp2[19]).intl;
    obj[3] = intl4.string(channel(handleRemovePermission[19]).t.fKxYb0);
    closure_1 = closure_1_4(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const lib = tmp2;
              if (obj11.isEmptyOverwrite(c2)) {
                c1 = 2;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(closure_2_3[20]).clearPermissionOverwrite(closure_1_0.id, tmp28.id);
                return obj1;
              } else {
                const items = [tmp28];
                c1 = 1;
                c2 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = lib(closure_2_3[21]).savePermissionUpdates(closure_1_0.id, items);
                return obj2;
              }
              obj11 = lib(closure_2_3[14]);
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj1 = lib(closure_2_3[22]);
            const result = obj1.memberOrRoleRemovedToast(lib.name);
            obj2 = v0(closure_2_3[9]);
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
    obj[4] = function() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[6] = channel(handleRemovePermission[23]).ButtonColors.RED;
    guildId(handleRemovePermission[18]).show(obj);
  }
  let obj = channel(handleRemovePermission[12]);
  const navigation = obj.useNavigation();
  obj = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj);
  guildId = channel.getGuildId();
  let obj3 = channel(handleRemovePermission[13]);
  let items = [closure_7, closure_6];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: closure_1_7.getGuild(guildId), sortedGuildRoles: null };
    let sortedRoles;
    if (null != guildId) {
      sortedRoles = closure_1_6.getSortedRoles(guildId);
    }
    obj[1] = sortedRoles;
    return obj;
  }, items1);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj4 = channel(handleRemovePermission[14]);
  canUpdateStageChannelModerators = obj4.useCanUpdateStageChannelModerators(channel.id);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      let id;
      if (guild != null) {
        id = guild.id;
      }
      memberIds = memberIds.getMemberIds(id);
      const obj6 = canUpdateStageChannelModerators(tmp2[15]);
      const existingMembersRows = obj6.getExistingMembersRows(memberIds, channel, guild, tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      const obj7 = canUpdateStageChannelModerators(tmp2[15]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (isGuildStageVoiceResult) {
        obj = { style: null, spacing: 16, children: null };
        obj[0] = { paddingHorizontal: 16 };
        obj1 = { title: null, hasIcons: true, children: null };
        let intl = tmp(tmp2[19]).intl;
        obj1[0] = intl.string(tmp(tmp2[19]).t.f7VbhF);
        let obj2 = { icon: null, label: null, onPress: null, disabled: null, arrow: true };
        obj2[0] = callback(tmp(tmp2[28]).CirclePlusIcon, {});
        let intl2 = tmp(tmp2[19]).intl;
        obj2[1] = intl2.string(tmp(tmp2[19]).t.n3bcy8);
        obj2[2] = function onPress() {
          if (null != channel) {
            let obj = guildId(handleRemovePermission[8]);
            obj.track(closure_1_8.OPEN_POPOUT, { type: "Grant Channel Access" });
            const _HermesInternal = HermesInternal;
            const obj2 = guildId(handleRemovePermission[9]);
            obj = { channel: null, canSkip: null };
            obj[0] = tmp;
            obj[1] = false;
            obj2.openLazy(channel(handleRemovePermission[11])(handleRemovePermission[10], handleRemovePermission.paths), "channel-add-moderators-" + tmp.id, obj);
            const tmp7 = channel(handleRemovePermission[11])(handleRemovePermission[10], handleRemovePermission.paths);
          }
        };
        obj2[3] = !canUpdateStageChannelModerators;
        obj1[2] = callback(tmp(tmp2[27]).TableRow, obj2);
        const items2 = [callback(tmp(tmp2[26]).TableRowGroup, obj1), , ];
        obj3 = { title: null, hasIcons: true, children: null };
        let intl3 = tmp(tmp2[19]).intl;
        obj3[0] = intl3.string(tmp(tmp2[19]).t.ghdVJL);
        obj3[2] = existingRolesRowWithPermissionDisabled.map((id) => closure_1_10(guildId(handleRemovePermission[24]), { guildId: channel.guild_id, item: id, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission }, id.id));
        items2[1] = callback(tmp(tmp2[26]).TableRowGroup, obj3);
        obj4 = { title: null, hasIcons: true, children: null };
        let intl4 = tmp(tmp2[19]).intl;
        obj4[0] = intl4.string(tmp(tmp2[19]).t.ghdVJL);
        obj4[2] = existingMembersRows.map((id) => closure_1_10(guildId(handleRemovePermission[24]), { guildId: channel.guild_id, item: id, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission }, id.id));
        items2[2] = callback(tmp(tmp2[26]).TableRowGroup, obj4);
        obj[2] = items2;
        isGuildStageVoiceResult = callback2(tmp(tmp2[25]).Stack, obj);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
};
export const openAddModeratorsActionSheet = function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(16318, dependencyMap.paths), "channel-add-moderators-" + channel.id, obj);
};