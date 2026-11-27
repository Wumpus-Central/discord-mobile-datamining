// === Module 18477: useConjurePublishReview ===

// Module 18477 (useConjurePublishReview)
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8527 */;
import conjurePublishReview from "conjurePublishReview" /* 18471 */;
import useConjureAppIdentityDraftDefault from "useConjureAppIdentityDraft" /* 18478 */;
import useConjurePreviewDevicePermissionsDefault from "useConjurePreviewDevicePermissions" /* 18481 */;
import useConjurePublishRemixDefault from "useConjurePublishRemix" /* 18482 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;

const require = globalThis.__r;

const useConjureViewPlacementDefault = tmp(18488);
require = fn;
let isProjectOwner = fn(6934).isProjectOwner;
const Constants = fn(1071);
({ ChannelTypes: closure_11, Permissions: closure_12 } = Constants);
let items = ["app_channel", fn(6935).ConjureSupportedSurface.ACTIVITY, fn(6935).ConjureSupportedSurface.VOICE_CHANNEL];
const set = new Set(items);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishReview.tsx");

export default function useConjurePublishReview(id, arg1) {
  _require = id;
  importDefault = arg1;
  closure_13 = async function _save() {
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
        return { value: "HermesInternal", done: null };
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
                  const obj6 = { value: tmp3(tmp37[20]).updateProjectSettings(user.id, obj5), done: false };
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
          const error = new Error("Saving who can make a copy failed");
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
  const tmp3 = useConjureAppIdentityDraftDefault(id.id);
  dependencyMap = tmp3;
  const isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(id.id);
  let obj = require("useConjureManagedCopy");
  const tmp7 = useConjurePublishRemixDefault(id.id);
  closure_3 = tmp7;
  const tmp6 = useConjurePreviewDevicePermissionsDefault(id.id);
  items = [result1];
  const items1 = [id.id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjurePublishStatusStore.getPublishStatus(id.id), items1);
  const tmp9 = stateFromStores(saving.useState(id.name), 2);
  const tmp10 = stateFromStores(saving.useState(false), 2);
  saving = tmp10[0];
  closure_6 = tmp10[1];
  let obj2 = require("initialize");
  let obj3 = saving;
  [tmp13, tmp14] = stateFromStores(saving.useState(false), 2);
  const tmp15 = isProjectOwner(id);
  closure_7 = tmp15;
  const trimmed = str.trim();
  let result = null;
  if (tmp15) {
    result = tmp4(18487).conjureProjectNameError(trimmed);
    const tmp4Result = tmp4(18487);
  }
  isProjectOwner = result;
  const tmp12 = stateFromStores(saving.useState(false), 2);
  result1 = require("conjurePublishReview").conjurePublishReviewReason(id, stateFromStores);
  const tmp19 = useConjureViewPlacementDefault(id, stateFromStores);
  closure_11 = tmp20;
  const items2 = [id, stateFromStores, result1, null != tmp19];
  const memo = obj3.useMemo(() => {
    result = conjurePublishReview.conjurePublishIncludes(closure_0, stateFromStores, result1);
    let found = result;
    if (closure_11) {
      found = result.filter((icon) => !set.has(icon.icon));
    }
    return found;
  }, items2);
  if (stateFromStores != null) {
    const views = stateFromStores.views;
    if (views != null) {
      let appChannels = views.mounts.appChannels;
    }
  }
  if (null == tmp19) {
    length = memo.filter((creates) => creates.creates).length;
  } else {
    if (appChannels == null) {
      appChannels = [];
    }
    length = tmp4(18472).conjureViewPlacementCreatedChannels(tmp19.draft, appChannels);
    const tmp4Result7 = tmp4(18472);
  }
  let tmp21 = null;
  if (tmp15) {
    tmp21 = null;
    if (length > 0) {
      tmp21 = null;
      if ("guild" === id.install_scope) {
        tmp21 = null;
        if (id.guild_id === arg1) {
          tmp21 = arg1;
        }
      }
    }
  }
  closure_12 = tmp21;
  const tmp4Result6 = require("conjurePublishReview");
  const items3 = [closure_6, closure_7];
  const items4 = [tmp21];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    guild = null;
    if (null != closure_12) {
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
  const tmp4Result8 = require("initialize");
  const items5 = [closure_6];
  const items6 = [arg1];
  const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
    guild = null;
    if (null != closure_1) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  }, items6);
  const tmp4Result9 = require("initialize");
  const items7 = [trimmed];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => trimmed.getCurrentUser());
  const obj4 = { projectId: id.id, reason: result1, editable: tmp15, managedCopy: isConjureManagedCopy, identity: tmp3, name: tmp9[0], setName: tmp9[1], nameError: result, includes: memo, placement: tmp19, appChannelsPrivate: null, devicePermissions: null, remix: null, destination: null, saving: null, save: null };
  let tmp25 = null;
  if (stateFromStores1) {
    let obj5 = { isPrivate: tmp13, setPrivate: tmp14, shared: null };
    let tmp26 = null != tmp19;
    if (!tmp26) {
      tmp26 = length > 1;
    }
    obj5.shared = tmp26;
    tmp25 = obj5;
  }
  obj4.appChannelsPrivate = tmp25;
  obj4.devicePermissions = tmp6;
  obj4.remix = tmp7;
  if ("user" === id.install_scope) {
    let tmp28 = null;
    if (null != stateFromStores3) {
      let obj6 = { type: "account", user: stateFromStores3 };
      tmp28 = obj6;
    }
    let tmp27 = tmp28;
  } else {
    tmp27 = null;
    if (null != stateFromStores2) {
      let obj7 = { type: "server", guild: stateFromStores2 };
      tmp27 = obj7;
    }
  }
  obj4.destination = tmp27;
  obj4.saving = saving;
  obj4.save = function save() {
    const self = this;
    const apply = closure_13.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj4;
};