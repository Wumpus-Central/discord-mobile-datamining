// === Module 18409: useConjurePublishReview ===

// Module 18409 (useConjurePublishReview)
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8484 */;
import conjurePublishReview from "conjurePublishReview" /* 18405 */;
import useConjureAppIdentityDraftDefault from "useConjureAppIdentityDraft" /* 18410 */;
import useConjurePreviewDevicePermissionsDefault from "useConjurePreviewDevicePermissions" /* 18413 */;
import useConjurePublishRemixDefault from "useConjurePublishRemix" /* 18414 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import UserStore from "UserStore" /* 1386 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7675 */;

const require = globalThis.__r;

require = fn;
let isProjectOwner = fn(6903).isProjectOwner;
const Constants = fn(1071);
({ ChannelTypes: closure_11, Permissions: closure_12 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishReview.tsx");

export default function useConjurePublishReview(id, arg1) {
  _require = id;
  importDefault = arg1;
  closure_12 = async function _save() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (!saving) {
              if (null == isProjectOwner) {
                GuildStore(true);
                c3 = 1;
                let tmp27 = PermissionStore;
                if (PermissionStore) {
                  let changed = name !== user.name;
                  if (!changed) {
                    changed = dependencyMap.changed;
                  }
                  tmp27 = changed;
                }
                if (tmp27) {
                  const obj5 = {};
                  const merged = Object.assign(dependencyMap.changes);
                  obj5.name = name;
                  c1 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(tmp37[17]).updateProjectSettings(user.id, obj5), done: false };
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_6(false);
          throw tmp37;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_6(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_6(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (value) {
          c3 = 0;
          closure_128_6(false);
          c4 = 3;
          return { value: true, done: true };
        } else {
          const _Error = Error;
          const error = new Error("Saving who can remix failed");
          throw error;
        }
        c1 = 3;
        c4 = 1;
        const obj8 = { value: closure_128_3.save(), done: false };
        return obj8;
      } catch (tmp37) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp37;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp2 = useConjureAppIdentityDraftDefault(id.id);
  dependencyMap = tmp2;
  const isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(id.id);
  let obj = require("useConjureManagedCopy");
  const tmp6 = useConjurePublishRemixDefault(id.id);
  closure_3 = tmp6;
  const tmp5 = useConjurePreviewDevicePermissionsDefault(id.id);
  items = [result1];
  const items1 = [id.id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjurePublishStatusStore.getPublishStatus(id.id), items1);
  const tmp8 = stateFromStores(saving.useState(id.name), 2);
  const tmp9 = stateFromStores(saving.useState(false), 2);
  saving = tmp9[0];
  closure_6 = tmp9[1];
  let obj2 = require("initialize");
  let obj3 = saving;
  [tmp12, tmp13] = stateFromStores(saving.useState(false), 2);
  const tmp14 = isProjectOwner(id);
  closure_7 = tmp14;
  const trimmed = str.trim();
  let result = null;
  if (tmp14) {
    result = tmp3(18419).conjureProjectNameError(trimmed);
    const tmp3Result = tmp3(18419);
  }
  isProjectOwner = result;
  const tmp11 = stateFromStores(saving.useState(false), 2);
  result1 = require("conjurePublishReview").conjurePublishReviewReason(id, stateFromStores);
  const items2 = [id, stateFromStores, result1];
  const memo = obj3.useMemo(() => conjurePublishReview.conjurePublishIncludes(closure_0, stateFromStores, result1), items2);
  length = memo.filter((creates) => creates.creates).length;
  let tmp18 = null;
  if (tmp14) {
    tmp18 = null;
    if (length > 0) {
      tmp18 = null;
      if ("guild" === id.install_scope) {
        tmp18 = null;
        if (id.guild_id === arg1) {
          tmp18 = arg1;
        }
      }
    }
  }
  closure_11 = tmp18;
  const tmp3Result5 = require("conjurePublishReview");
  const items3 = [closure_6, closure_7];
  const items4 = [tmp18];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    guild = null;
    if (null != closure_11) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
    }
    if (canResult) {
      const obj = ChannelPermissionsUtils;
      canResult = obj.canCreatePrivateChannel(constants.GUILD_APP, PermissionStore.can(constants2.VIEW_CHANNEL, guild), PermissionStore.can(constants2.CONNECT, guild));
      const canResult1 = PermissionStore.can(constants2.VIEW_CHANNEL, guild);
    }
    return canResult;
  }, items4);
  const tmp3Result6 = require("initialize");
  const items5 = [closure_6];
  const items6 = [arg1];
  const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
    guild = null;
    if (null != closure_1) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  }, items6);
  const tmp3Result7 = require("initialize");
  const items7 = [trimmed];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => trimmed.getCurrentUser());
  const obj4 = { projectId: id.id, reason: result1, editable: tmp14, managedCopy: isConjureManagedCopy, identity: tmp2, name: tmp8[0], setName: tmp8[1], nameError: result, includes: memo, appChannelsPrivate: null, devicePermissions: null, remix: null, destination: null, saving: null, save: null };
  let tmp22 = null;
  if (stateFromStores1) {
    let obj5 = { isPrivate: tmp12, setPrivate: tmp13, shared: length > 1 };
    tmp22 = obj5;
  }
  obj4.appChannelsPrivate = tmp22;
  obj4.devicePermissions = tmp5;
  obj4.remix = tmp6;
  if ("user" === id.install_scope) {
    let tmp24 = null;
    if (null != stateFromStores3) {
      let obj6 = { type: "account", user: stateFromStores3 };
      tmp24 = obj6;
    }
    let tmp23 = tmp24;
  } else {
    tmp23 = null;
    if (null != stateFromStores2) {
      let obj7 = { type: "server", guild: stateFromStores2 };
      tmp23 = obj7;
    }
  }
  obj4.destination = tmp23;
  obj4.saving = saving;
  obj4.save = function save() {
    const self = this;
    const apply = closure_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj4;
};