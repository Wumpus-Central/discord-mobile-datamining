// === Module 19505: ChannelPermissionOverwriteEditStore ===

// Module 19505 (ChannelPermissionOverwriteEditStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelPermissionOverwriteEditUtils from "ChannelPermissionOverwriteEditUtils" /* 19506 */;

require = fn;
function getPendingEdits(arg0, arg1) {
  value = map.get("" + arg0 + ":" + arg1);
  if (value == null) {
    value = closure_2;
  }
  return value;
}
function setPendingEdits(channelId, overwriteId, pendingEdits) {
  const combined = "" + channelId + ":" + overwriteId;
  if (0 === Object.keys(pendingEdits).length) {
    map.delete(combined);
  } else {
    const result = map.set(combined, pendingEdits);
  }
}
function handleEditSettled(channelId) {
  return (function settleEdits(channelId, overwriteId, mutations) {
    const tmp3 = getPendingEdits(channelId, overwriteId);
    let tmp4 = tmp3;
    const iter = mutations[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let flagKey = nextResult.flagKey;
      let editId = nextResult.editId;
      let tmp8 = tmp4[flagKey];
      let editId1;
      if (tmp8 != null) {
        editId1 = tmp8.editId;
      }
      if (editId1 === editId) {
        if (tmp4 === tmp3) {
          let obj = {};
          let merged = Object.assign(tmp3);
          tmp4 = obj;
        }
        delete tmp2[tmp];
      }
      continue;
    }
    if (tmp4 === tmp3) {
      return false;
    } else {
      setPendingEdits(channelId, overwriteId, tmp4);
    }
  })(channelId.channelId, channelId.overwriteId, channelId.mutations);
}
let closure_2 = {};
let map = new Map();
const Store = initializeDefault.Store;
class ChannelPermissionOverwriteEditStore extends Store {
}
const prototype = ChannelPermissionOverwriteEditStore.prototype;
prototype["getPendingEdits"] = function getPendingEdits(arg0, arg1) {
  value = map.get("" + arg0 + ":" + arg1);
  if (value == null) {
    value = closure_2;
  }
  return value;
};
prototype["getReadyEdits"] = function getReadyEdits(arg0, arg1) {
  value = map.get("" + arg0 + ":" + arg1);
  if (value == null) {
    value = closure_2;
  }
  const values = Object.values(value);
  return values.filter((ready) => ready.ready);
};
prototype["getEffectiveOverwrite"] = function getEffectiveOverwrite(id, id2, channelPermissionOverwrite) {
  let result = channelPermissionOverwrite;
  const values = Object.values(getPendingEdits(id, id2));
  for (const item10014 of values) {
    ({ flag, value } = item10014);
    let obj = ChannelPermissionOverwriteEditUtils;
    result = obj.applyChannelPermissionOverwriteEdit(result, flag, value);
    continue;
  }
  return result;
};
ChannelPermissionOverwriteEditStore.displayName = "ChannelPermissionOverwriteEditStore";
const channelPermissionOverwriteEditStore = new ChannelPermissionOverwriteEditStore(DispatcherDefault, {
  CHANNEL_PERMISSION_OVERWRITE_EDIT_START: function handleEditStart(arg0) {
    ({ channelId, overwriteId, flag } = arg0);
    ({ value, editId, ready } = arg0);
    let value2 = map.get("" + channelId + ":" + overwriteId);
    if (value2 == null) {
      value2 = closure_2;
    }
    const obj = {};
    const merged = Object.assign(value2);
    obj[String(flag)] = { flag, value, editId, ready };
    const combined = "" + channelId + ":" + overwriteId;
    if (0 === Object.keys(obj).length) {
      map.delete(combined);
    } else {
      const result = map.set(combined, obj);
    }
    const StringResult = String(flag);
  },
  CHANNEL_PERMISSION_OVERWRITE_EDIT_READY: function handleEditReady(editId) {
    ({ channelId, overwriteId, flagKey } = editId);
    value = map.get("" + channelId + ":" + overwriteId);
    if (value == null) {
      value = closure_2;
    }
    editId = undefined;
    if (value[flagKey] != null) {
      editId = tmp2.editId;
    }
    if (editId === editId.editId) {
      if (!tmp2.ready) {
        const obj = {};
        const merged = Object.assign(value);
        const obj2 = {};
        const merged1 = Object.assign(tmp2);
        obj2.ready = true;
        obj[flagKey] = obj2;
        const _HermesInternal = HermesInternal;
        const combined = "" + channelId + ":" + overwriteId;
        const _Object = Object;
        if (0 === Object.keys(obj).length) {
          map.delete(combined);
        } else {
          const result = map.set(combined, obj);
        }
      }
    }
    return false;
  },
  CHANNEL_PERMISSION_OVERWRITE_EDIT_SUCCESS: handleEditSettled,
  CHANNEL_PERMISSION_OVERWRITE_EDIT_FAILURE: handleEditSettled,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwrite(channelId) {
    const combined = "" + channelId.channelId + ":" + channelId.overwriteId;
    if (map.has(combined)) {
      map.delete(combined);
    } else {
      return false;
    }
  },
  LOGOUT: function handleReset() {
    map = new Map();
    return map.size > 0;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditStore.tsx");

export default channelPermissionOverwriteEditStore;
export function getChannelPermissionOverwriteResourceKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}