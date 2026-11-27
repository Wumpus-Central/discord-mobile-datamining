// discord_app/modules/guild_settings/integrations/permission/useModifyPermissions.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import ApplicationCommandTypes from "../../../application_commands/ApplicationCommandTypes.tsx";
import ApplicationCommandUtils from "../../../application_commands/ApplicationCommandUtils.tsx";
import IntegrationPermissionUtils from "IntegrationPermissionUtils.tsx";
import IntegrationSettingsActionCreatorsDefault from "../../../../actions/IntegrationSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import IntegrationPermissionStore from "IntegrationPermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1071).Permissions;
let closure_12 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useModifyPermissions.tsx");

export default function useModifyPermissions(id, arg1, arg2) {
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  items = [IntegrationPermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    applicationPermissions.getApplicationPermissions(),
  );
  const items1 = [stateFromStores, id];
  const memo = stateFromStores2.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    const allChannelsSentinelResult = ApplicationCommandUtils.allChannelsSentinel(id);
    const toPermissionKeyResult = IntegrationPermissionUtils.toPermissionKey(
      allChannelsSentinelResult,
      ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL,
    );
    const toPermissionKeyResult1 = IntegrationPermissionUtils.toPermissionKey(
      id,
      ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE,
    );
    if (!(toPermissionKeyResult1 in obj2)) {
      const obj6 = { id, permission: true, type: ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE };
      obj2[toPermissionKeyResult1] = obj6;
    }
    if (!(toPermissionKeyResult in obj2)) {
      const obj7 = {
        id: allChannelsSentinelResult,
        permission: true,
        type: ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL,
      };
      obj2[toPermissionKeyResult] = obj7;
    }
    return obj2;
  }, items1);
  let obj = require("initialize");
  const items2 = [IntegrationPermissionStore];
  const items3 = [arg2];
  let stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      if (null != closure_2) {
        const command = IntegrationPermissionStore.getCommand(tmp);
        let permissions;
        if (command != null) {
          permissions = command.permissions;
        }
        if (permissions == null) {
          permissions = closure_12;
        }
        return permissions;
      }
    },
    items3,
  );
  let obj3 = require("initialize");
  const items4 = [IntegrationPermissionStore];
  const items5 = [arg2];
  stateFromStores2 = require("initialize").useStateFromStores(
    items4,
    () => {
      if (null == closure_2) {
        let permissions = IntegrationPermissionStore.getEditedApplication();
      } else {
        const editedCommand = IntegrationPermissionStore.getEditedCommand();
        if (editedCommand != null) {
          permissions = editedCommand.permissions;
        }
      }
      return permissions;
    },
    items5,
  );
  let tmp7 = arg2;
  if (arg2 == null) {
    tmp7 = arg1;
  }
  closure_5 = tmp7;
  let tmp8 = memo;
  if (null != arg2) {
    tmp8 = stateFromStores1;
  }
  stateFromStores1 = tmp8;
  const items6 = [stateFromStores2, tmp8];
  const memo1 = obj2.useMemo(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2 == null) {
      let obj = stateFromStores1;
      if (stateFromStores1 == null) {
        obj = {};
      }
      const obj2 = {};
      const merged = Object.assign(obj);
      tmp = obj2;
    }
    return tmp;
  }, items6);
  const items7 = [memo1];
  const items8 = [tmp8, memo1];
  const memo2 = obj2.useMemo(() => Object.keys(memo1).length, items7);
  const memo3 = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      tmp2 = null;
      if (null != memo1) {
        tmp2 = !applyDefault.isEqual(tmp, tmp3);
      }
    }
    return tmp2;
  }, items8);
  const items9 = [arg1, memo3, tmp7];
  const effect = obj2.useEffect(() => {
    if (closure_5 === closure_1) {
      const obj = IntegrationSettingsActionCreatorsDefault;
      if (memo3) {
        const result = obj.startEditingCommandPermissions(closure_5);
      } else {
        const result1 = obj.stopEditingCommandPermissions(closure_5);
      }
    }
  }, items9);
  const obj5 = {
    originalApplicationPermissions: memo,
    originalCommandPermissions: stateFromStores1,
    editedTargetPermissions: null,
    hasChanges: null,
    selectedPermissionCount: null,
  };
  closure_129_0 = id;
  closure_129_1 = memo1;
  let obj4 = require("initialize");
  const items10 = [memo1];
  const items11 = [id];
  const stateFromStores3 = require("initialize").useStateFromStores(
    items10,
    () => GuildStore.getGuild(closure_0),
    items11,
  );
  closure_129_2 = stateFromStores3;
  _modDef38(null != stateFromStores3, "guild must be present to be editing its integration settings");
  const tmpResult = require("initialize");
  const items12 = [memo3];
  const items13 = [stateFromStores3];
  const stateFromStores4 = require("initialize").useStateFromStores(
    items12,
    () => PermissionStore.getHighestRole(closure_2),
    items13,
  );
  closure_129_3 = stateFromStores4;
  const tmpResult6 = require("initialize");
  const items14 = [UserStore];
  const stateFromStores5 = require("initialize").useStateFromStores(items14, () => {
    currentUser = currentUser.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  _modDef38(null != stateFromStores5, "useComputePermissions: currentUserId must not be null");
  closure_129_4 = tmp18;
  const items15 = [memo1];
  const memo4 = obj2.useMemo(() => {
    const channelIds = [];
    const roleIds = [];
    const userIds = [];
    const values = Object.values(closure_1);
    for (const item10013 of values) {
      let type = item10013.type;
      if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
        let arr = channelIds.push(item10013.id);
      } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
        let arr2 = roleIds.push(item10013.id);
      } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
        let arr3 = userIds.push(item10013.id);
      } else {
        let type2 = item10013.type;
      }
      continue;
    }
    return { channelIds, roleIds, userIds };
  }, items15);
  let channelIds = memo4.channelIds;
  closure_129_5 = channelIds;
  let roleIds = memo4.roleIds;
  closure_129_6 = roleIds;
  let userIds = memo4.userIds;
  closure_129_7 = userIds;
  const tmpResult7 = require("initialize");
  const items16 = [closure_5];
  const items17 = [channelIds];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items16,
    () => {
      const mapped = closure_5.map(ChannelStore.getChannel);
      const found = mapped.filter(GlobalUtils.isNotNullish);
      return Object.fromEntries(
        found.map((id) => {
          items = [id.id, id];
          return items;
        }),
      );
    },
    items17,
  );
  closure_129_8 = stateFromStoresObject;
  const tmpResult8 = require("initialize");
  const items18 = [stateFromStores1];
  const items19 = [roleIds, id];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items18,
    () => {
      const mapped = stateFromStores1.map((item) => stateFromStores1.getRole(id, item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      return Object.fromEntries(
        found.map((id) => {
          items = [id.id, id];
          return items;
        }),
      );
    },
    items19,
  );
  closure_129_9 = stateFromStoresObject1;
  const tmpResult9 = require("initialize");
  const items20 = [UserStore];
  const items21 = [userIds];
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(
    items20,
    () => {
      const mapped = memo1.map(UserStore.getUser);
      const found = mapped.filter(GlobalUtils.isNotNullish);
      return Object.fromEntries(
        found.map((id) => {
          items = [id.id, id];
          return items;
        }),
      );
    },
    items21,
  );
  closure_129_10 = stateFromStoresObject2;
  const items22 = [
    stateFromStoresObject,
    stateFromStores3,
    stateFromStores4,
    stateFromStores5 === stateFromStores3.ownerId,
    memo1,
    stateFromStoresObject1,
    stateFromStoresObject2,
  ];
  obj5.editedTargetPermissions = stateFromStores2.useMemo(() => {
    const obj2 = {};
    const entries = Object.entries(closure_1);
    const allChannelsSentinelResult = ApplicationCommandUtils.allChannelsSentinel(id.id);
    while (tmp4 !== undefined) {
      let tmp7 = _slicedToArray(tmp5, 2);
      [tmp8, tmp9] = tmp7;
      let flag = false;
      let flag2 = false;
      let type = tmp9.type;
      if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
        let canResult = tmp9.id === allChannelsSentinelResult;
        let tmp40 = memo3[tmp9.id];
        if (!canResult) {
          canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, tmp40);
        }
        flag = canResult;
        flag2 = true;
      } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
        let tmp27 = tmp9.id === tmp;
        let tmp30 = currentUser[tmp9.id];
        let tmp28 = tmp27;
        if (!tmp27) {
          tmp27 = null != tmp30;
        }
        flag = tmp27;
        let isRoleHigherResult = stateFromStores2;
        if (!stateFromStores2) {
          isRoleHigherResult = tmp28;
        }
        if (!isRoleHigherResult) {
          isRoleHigherResult = PermissionStore.isRoleHigher(id, stateFromStores, tmp30);
        }
        flag2 = isRoleHigherResult;
      } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
        let tmp18 = applicationPermissions[tmp9.id];
        flag = null != tmp18;
        let tmp20 = null != tmp18;
        if (tmp20) {
          let canManageUserResult = stateFromStores2;
          if (!stateFromStores2) {
            canManageUserResult = PermissionStore.canManageUser(Permissions.USE_APPLICATION_COMMANDS, tmp19, id);
          }
          tmp20 = canManageUserResult;
        }
        flag2 = tmp20;
      } else {
        let type2 = tmp9.type;
      }
      let obj3 = {};
      let merged = Object.assign(tmp9);
      obj3.canRead = flag;
      obj3.canWrite = flag2;
      obj2[tmp8] = obj3;
      continue;
    }
    return obj2;
  }, items22);
  obj5.hasChanges = memo3;
  obj5.selectedPermissionCount = memo2;
  return obj5;
}
