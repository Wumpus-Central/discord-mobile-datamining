// === Module 11945: set ===

// Module 11945 (set)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import NativeModulesDefault from "NativeModules" /* 9618 */;
import set from "set" /* 2 */;

let obj = { INIT: 0, [0]: "INIT", REQUESTED: 1, [1]: "REQUESTED", PROMPT_SEEN: 2, [2]: "PROMPT_SEEN", PROMPT_SKIPPED: 3, [3]: "PROMPT_SKIPPED" };
obj = { MESSAGE_SENT: 0, [0]: "MESSAGE_SENT", INVITE_ACCEPTED: 1, [1]: "INVITE_ACCEPTED", FRIEND_REQUEST_SENT: 2, [2]: "FRIEND_REQUEST_SENT", DM_SPACE: 3, [3]: "DM_SPACE", CHANNEL_BANNER: 5, [5]: "CHANNEL_BANNER", POST_REACTION_BANNER: 6, [6]: "POST_REACTION_BANNER", GUILD_OPEN_BOTTOM_SHEET: 7, [7]: "GUILD_OPEN_BOTTOM_SHEET", CALL_DISCONNECT_BOTTOM_SHEET: 8, [8]: "CALL_DISCONNECT_BOTTOM_SHEET" };
obj = { permissionState: obj.INIT, promptLastSeen: { [obj.MESSAGE_SENT]: null, [obj.INVITE_ACCEPTED]: null, [obj.FRIEND_REQUEST_SENT]: null, [obj.DM_SPACE]: null, [obj.CHANNEL_BANNER]: null, [obj.POST_REACTION_BANNER]: null, [obj.GUILD_OPEN_BOTTOM_SHEET]: null, [obj.CALL_DISCONNECT_BOTTOM_SHEET]: null }, eligiblePromptTypes: null };
let set = new Set([]);
obj[2] = set;
let c6 = null;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class PushNotificationPermissionStore extends DeviceSettingsStore {
}
const prototype = PushNotificationPermissionStore.prototype;
prototype["initialize"] = function initialize(promptLastSeen) {
  obj = {};
  const merged = Object.assign(obj);
  let tmp3 = promptLastSeen;
  if (promptLastSeen == null) {
    tmp3 = null;
  }
  const merged1 = Object.assign(tmp3);
  obj = {};
  const merged2 = Object.assign(tmp.promptLastSeen);
  promptLastSeen = undefined;
  if (promptLastSeen != null) {
    promptLastSeen = promptLastSeen.promptLastSeen;
  }
  const merged3 = Object.assign(promptLastSeen);
  obj.promptLastSeen = obj;
  const items = [...tmp.eligiblePromptTypes];
  let eligiblePromptTypes;
  if (promptLastSeen != null) {
    eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
  }
  if (eligiblePromptTypes == null) {
    eligiblePromptTypes = [];
  }
  HermesBuiltin.arraySpread(eligiblePromptTypes, tmp8);
  obj.eligiblePromptTypes = new Set(items.filter((arg0) => arg0 !== constants2.POST_REACTION_BANNER));
  const set = new Set(items.filter((arg0) => arg0 !== constants2.POST_REACTION_BANNER));
  NativeModulesDefault.checkPermissions((sound) => {
    ({ alert: _alert, badge } = sound);
    if (!_alert) {
      _alert = sound.sound;
    }
    if (!_alert) {
      _alert = badge;
    }
    if (_alert) {
      obj.permissionState = constants.REQUESTED;
    }
  });
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
Object.defineProperty(prototype, "permissionState", {
  get: function permissionState() {
    return obj.permissionState;
  },
  set: undefined
});
Object.defineProperty(prototype, "promptSeen", {
  get: function promptSeen() {
    const items = [, ];
    ({ PROMPT_SEEN: arr[0], PROMPT_SKIPPED: arr[1] } = obj);
    return items.includes(obj.permissionState);
  },
  set: undefined
});
Object.defineProperty(prototype, "authorizationStatus", {
  get: function authorizationStatus() {
    return c6;
  },
  set: undefined
});
PushNotificationPermissionStore.displayName = "PushNotificationPermissionStore";
PushNotificationPermissionStore.persistKey = "PushNotificationPermissionStoreKey_1";
let items = [
  (promptLastSeen) => {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(promptLastSeen);
    obj = {};
    const merged2 = Object.assign(obj.promptLastSeen);
    const merged3 = Object.assign(promptLastSeen.promptLastSeen);
    obj.promptLastSeen = obj;
    if (null == promptLastSeen.eligiblePromptTypes) {
      const _Set4 = Set;
      let eligiblePromptTypes = new Set([]);
    } else {
      const _Array = Array;
      if (Array.isArray(promptLastSeen.eligiblePromptTypes)) {
        const _Set3 = Set;
        eligiblePromptTypes = new Set(promptLastSeen.eligiblePromptTypes);
      } else {
        const _Set = Set;
        if (promptLastSeen.eligiblePromptTypes instanceof Set) {
          eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
        } else {
          const _Set2 = Set;
          eligiblePromptTypes = new Set([]);
        }
      }
    }
    obj.eligiblePromptTypes = eligiblePromptTypes;
    return obj;
  }
];
PushNotificationPermissionStore.migrations = items;
const pushNotificationPermissionStore = new PushNotificationPermissionStore(dispatcherDefault, {
  PUSH_NOTIFICATION_PERMISSION_SET_STATE: function setPushNotificationPermissionState(permissionState) {
    obj.permissionState = permissionState.permissionState;
  },
  PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN: function setPushPermissionReactivationSeen(promptType) {
    obj.promptLastSeen[promptType.promptType] = new Date();
    return true;
  },
  PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE: function setPromptTypeAsEligible(promptType) {
    obj.eligiblePromptTypes = new Set(obj.eligiblePromptTypes).add(promptType.promptType);
    return true;
  },
  PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE: function setNotificationAuthorizationStatus(authorizationStatus) {
    authorizationStatus = authorizationStatus.authorizationStatus;
  }
});
const result = set.fileFinishedImporting("stores/native/PushNotificationPermissionStore.tsx");

export default pushNotificationPermissionStore;
export const PermissionStateType = obj;
export const PermissionPromptType = obj;