// === Module 20075: useCommandPermissionList ===

// Module 20075 (useCommandPermissionList)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1112 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6807 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import UserStore from "UserStore" /* 1387 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useCommandPermissionList.tsx");

export default function useCommandPermissionList(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg2;
  items = [GuildRoleStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleStore.getSortedRoles(closure_0));
  let obj = require("initialize");
  const tmp3 = stateFromStores(first.useState(new Set()), 2);
  first = tmp3[0];
  closure_5 = tmp5;
  const items1 = [arg0, arg1, stateFromStores];
  const items2 = [arg2];
  const sortedOverwrites = first.useMemo(() => {
    closure_0 = closure_0(8184).allChannelsSentinel(closure_0);
    let obj = closure_0(8184);
    dependencyMap = stateFromStores.toReversed().reduce((acc, id, index) => {
      acc[id.id] = index;
      return acc;
    }, {});
    const values = Object.values(dependencyMap);
    const found = values.filter((canRead) => canRead.canRead);
    return found.sort((type, type2) => {
      const diff = type.type - type2.type;
      if (0 !== diff) {
        return diff;
      } else {
        type = type.type;
        if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
          const _Number3 = Number;
          const _Number4 = Number;
          let diff1 = Number(type.canWrite) - Number(type2.canWrite);
          if (0 === diff1) {
            const user = UserStore.getUser(type.id);
            const user1 = UserStore.getUser(type2.id);
            if (null != user) {
              if (null != user1) {
                const name = NicknameUtilsDefault.getName(closure_0, undefined, user);
                NicknameUtilsDefault;
                let localeCompareResult;
                if (name != null) {
                  localeCompareResult = name.localeCompare(tmp16);
                }
                diff1 = localeCompareResult;
              }
            }
            diff1 = SnowflakeUtilsDefault.compare(type.id, type2.id);
          }
          return diff1;
        } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
          let num3 = -1;
          if (type.id !== closure_0) {
            let num4 = 1;
            let num5 = 1;
            if (type2.id !== tmp7) {
              if (dependencyMap[type.id] > dependencyMap[type2.id]) {
                num4 = -1;
              }
              num5 = num4;
            }
            num3 = num5;
          }
          return num3;
        } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
          let num = -1;
          if (type.id !== closure_0) {
            num = 1;
            if (type2.id !== tmp2) {
              const _Number = Number;
              const _Number2 = Number;
              let diff2 = Number(type.canWrite) - Number(type2.canWrite);
              if (0 === diff2) {
                diff2 = SnowflakeUtilsDefault.compare(type.id, type2.id);
              }
              num = diff2;
              const NumberResult1 = Number(type.canWrite);
            }
          }
          return num;
        }
      }
    });
  }, items1);
  const items3 = [arg2, arg1];
  const onRemove = first.useCallback((id) => {
    items = [IntegrationPermissionUtils.toPermissionKey(id.id, id.type)];
    dependencyMap2({}, items);
  }, items2);
  const items4 = [arg0, arg1, first, tmp3[1]];
  const onChange = first.useCallback((id, permission) => {
    const toPermissionKeyResult = IntegrationPermissionUtils.toPermissionKey(id.id, id.type);
    if (null != dependencyMap[toPermissionKeyResult]) {
      const obj2 = {};
      const obj3 = { id: id.id, permission, type: id.type };
      obj2[toPermissionKeyResult] = obj3;
      dependencyMap2(obj2, []);
    }
  }, items3);
  const effect = first.useEffect(() => {
    const values = Object.values(dependencyMap);
    const found = values.filter((type) => {
      let tmp = type.type === mapped(closure_2[9]).ApplicationCommandPermissionType.USER && !type.canRead;
      if (tmp) {
        tmp = !set.has(type.id);
      }
      return tmp;
    });
    const mapped = found.map((id) => id.id);
    if (0 !== mapped.length) {
      const membersById = dependencyMap(6991).requestMembersById(mapped, mapped, false);
      closure_5((arg0) => {
        items = [...mapped];
        return new Set(items);
      });
      const obj = dependencyMap(6991);
    }
  }, items4);
  return { sortedOverwrites, onRemove, onChange };
};
export function getCommandPermissionEntryRestrictions(arg0) {
  ({ overwrite, guildId, commandId, hasAccessToMutatePermissions } = arg0);
  let tmp = overwrite.id === guildId;
  if (!tmp) {
    tmp = overwrite.id === ApplicationCommandUtils.allChannelsSentinel(guildId);
  }
  const canWrite = overwrite.canWrite;
  let isUpdateRestricted = !canWrite;
  if (canWrite) {
    isUpdateRestricted = !isRemovable;
  }
  if (isRemovable) {
    if (!overwrite.canWrite) {
      let prop = dependencyMap;
      if (overwrite.type !== ApplicationCommandTypes.ApplicationCommandPermissionType.USER) {
        let stringResult;
        if (overwrite.type === ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE) {
          const intl3 = util.intl;
          stringResult = intl3.string(util.t.mcAijf);
        }
      }
      if (overwrite.id === AuthenticationStore.getId()) {
        const intl5 = util.intl;
        prop = util.t["1VF/0x"];
        let stringResult1 = intl5.string(prop);
      } else {
        const intl4 = util.intl;
        stringResult1 = intl4.string(util.t.P1GnEd);
      }
    }
  } else if (null != commandId) {
    const intl2 = util.intl;
    let lockReason = intl2.string(util.t.tybdas);
  } else {
    const intl = util.intl;
    lockReason = intl.string(util.t["z2hjk/"]);
  }
  if (isRemovable) {
    isRemovable = null != commandId || !tmp;
    const tmp19 = null != commandId || !tmp;
  }
  return { isRemovable, isUpdateRestricted, lockReason };
}