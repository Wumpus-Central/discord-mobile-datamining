// discord_app/stores/native/PushNotificationPermissionStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PushNotificationDefault from "../../lib/pushnotification/PushNotification.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;
let obj = {
  INIT: 0,
  [0]: "INIT",
  REQUESTED: 1,
  [1]: "REQUESTED",
  PROMPT_SEEN: 2,
  [2]: "PROMPT_SEEN",
  PROMPT_SKIPPED: 3,
  [3]: "PROMPT_SKIPPED",
};
let obj2 = {
  MESSAGE_SENT: 0,
  [0]: "MESSAGE_SENT",
  INVITE_ACCEPTED: 1,
  [1]: "INVITE_ACCEPTED",
  FRIEND_REQUEST_SENT: 2,
  [2]: "FRIEND_REQUEST_SENT",
  DM_SPACE: 3,
  [3]: "DM_SPACE",
  CHANNEL_BANNER: 5,
  [5]: "CHANNEL_BANNER",
  POST_REACTION_BANNER: 6,
  [6]: "POST_REACTION_BANNER",
  GUILD_OPEN_BOTTOM_SHEET: 7,
  [7]: "GUILD_OPEN_BOTTOM_SHEET",
  CALL_DISCONNECT_BOTTOM_SHEET: 8,
  [8]: "CALL_DISCONNECT_BOTTOM_SHEET",
};
let obj3 = {
  permissionState: obj.INIT,
  promptLastSeen: {
    [obj2.MESSAGE_SENT]: null,
    [obj2.INVITE_ACCEPTED]: null,
    [obj2.FRIEND_REQUEST_SENT]: null,
    [obj2.DM_SPACE]: null,
    [obj2.CHANNEL_BANNER]: null,
    [obj2.POST_REACTION_BANNER]: null,
    [obj2.GUILD_OPEN_BOTTOM_SHEET]: null,
    [obj2.CALL_DISCONNECT_BOTTOM_SHEET]: null,
  },
  eligiblePromptTypes: set,
};
set = new Set([]);
obj = obj3;
let authorizationStatus = null;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class PushNotificationPermissionStore extends DeviceSettingsStore {
  initialize(promptLastSeen) {
    let _Set1;
    let constants2;
    obj = { promptLastSeen: obj2, eligiblePromptTypes: _Set1 };
    const merged = Object.assign(obj3);
    let tmp4 = promptLastSeen;
    if (promptLastSeen == null) {
      tmp4 = null;
    }
    const merged1 = Object.assign(tmp4);
    obj2 = {};
    const merged2 = Object.assign(tmp2.promptLastSeen);
    promptLastSeen = undefined;
    if (promptLastSeen != null) {
      promptLastSeen = promptLastSeen.promptLastSeen;
    }
    const merged3 = Object.assign(promptLastSeen);
    const items = [...tmp2.eligiblePromptTypes];
    const _Set = Set;
    let eligiblePromptTypes;
    if (promptLastSeen != null) {
      eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
    }
    if (eligiblePromptTypes == null) {
      eligiblePromptTypes = [];
    }
    HermesBuiltin.arraySpread(items, eligiblePromptTypes, tmp9);
    _Set1 = new _Set(items.filter((item) => item !== constants2.POST_REACTION_BANNER));
    obj3 = PushNotificationDefault;
    obj3.checkPermissions((sound) => {
      let _alert;
      let badge;
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
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = PushNotificationPermissionStore.prototype;
Object.defineProperty(prototype, "permissionState", {
  get: function permissionState() {
    return obj.permissionState;
  },
  set: undefined,
});
Object.defineProperty(prototype, "promptSeen", {
  get: function promptSeen() {
    const items = [,];
    ({ PROMPT_SEEN: arr[0], PROMPT_SKIPPED: arr[1] } = obj);
    return items.includes(obj.permissionState);
  },
  set: undefined,
});
Object.defineProperty(prototype, "authorizationStatus", {
  get: function authorizationStatus() {
    return authorizationStatus;
  },
  set: undefined,
});
PushNotificationPermissionStore.displayName = "PushNotificationPermissionStore";
PushNotificationPermissionStore.persistKey = "PushNotificationPermissionStoreKey_1";
let items = [
  function (promptLastSeen) {
    let eligiblePromptTypes;
    obj = { promptLastSeen: obj2, eligiblePromptTypes };
    const merged = Object.assign(obj3);
    const merged1 = Object.assign(promptLastSeen);
    obj2 = {};
    const merged2 = Object.assign(obj3.promptLastSeen);
    const merged3 = Object.assign(promptLastSeen.promptLastSeen);
    if (null == promptLastSeen.eligiblePromptTypes) {
      const _Set4 = Set;
      const self5 = this;
      const self6 = this;
      eligiblePromptTypes = new Set([]);
    } else {
      const _Array = Array;
      if (Array.isArray(promptLastSeen.eligiblePromptTypes)) {
        const _Set3 = Set;
        const self3 = this;
        const self4 = this;
        eligiblePromptTypes = new Set(promptLastSeen.eligiblePromptTypes);
      } else {
        const _Set = Set;
        if (promptLastSeen.eligiblePromptTypes instanceof Set) {
          eligiblePromptTypes = promptLastSeen.eligiblePromptTypes;
        } else {
          const _Set2 = Set;
          const self = this;
          const self2 = this;
          eligiblePromptTypes = new Set([]);
        }
      }
    }
    return obj;
  },
];
PushNotificationPermissionStore.migrations = items;
const obj4 = {
  PUSH_NOTIFICATION_PERMISSION_SET_STATE: function setPushNotificationPermissionState(permissionState) {
    obj.permissionState = permissionState.permissionState;
  },
  PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN: function setPushPermissionReactivationSeen(promptType) {
    promptType = promptType.promptType;
    const promptLastSeen = obj.promptLastSeen;
    promptLastSeen[promptType] = new Date();
    new Date();
    return true;
  },
  PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE: function setPromptTypeAsEligible(promptType) {
    promptType = promptType.promptType;
    set = new Set(obj.eligiblePromptTypes);
    obj.eligiblePromptTypes = set.add(promptType);
    return true;
  },
  PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE: function setNotificationAuthorizationStatus(authorizationStatus) {
    authorizationStatus = authorizationStatus.authorizationStatus;
  },
};
const pushNotificationPermissionStore = new PushNotificationPermissionStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("stores/native/PushNotificationPermissionStore.tsx");

export default pushNotificationPermissionStore;
export const PermissionStateType = obj;
export const PermissionPromptType = obj2;
