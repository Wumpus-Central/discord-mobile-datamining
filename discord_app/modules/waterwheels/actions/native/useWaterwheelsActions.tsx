// === Module 18864: useWaterwheelsActions ===

// Module 18864 (useWaterwheelsActions)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7037 */;
import openPrivacySettingsDefault from "openPrivacySettings" /* 8104 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 9073 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9870 */;
import NotificationUtilsDefault from "NotificationUtils" /* 14200 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14191 */;

require = fn;
function openErrorToast(text) {
  ToastActionCreatorsDefault.open("waterwheels-action-error", { text });
}
function requestNotifications() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _requestNotifications() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (authorizationStatus.authorizationStatus !== constants.DENIED) {
          c1 = 1;
          c0 = 1;
          const obj5 = { value: NotificationUtilsDefault.requestPermission(), done: false };
          return obj5;
        } else {
          openPrivacySettingsDefault();
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c0 = tmp;
      throw tmp10;
    }
  }
};
let closure_14 = async function _joinGuild(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp8;
          closure_130_0 = set;
          closure_130_1 = closure_1;
          guild = guild.getGuild(closure_1);
          let joinedAt;
          if (guild != null) {
            joinedAt = guild.joinedAt;
          }
          if (null == joinedAt) {
            if (!set.has(closure_1)) {
              set.add(closure_1);
              c5 = 2;
              c6 = 3;
              c7 = 1;
              const obj5 = { value: GuildActionCreatorsDefault.joinGuild(closure_1, { autoNavigate: false }), done: false };
              return obj5;
            }
          }
          c7 = 3;
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c5 = 1;
          if (!(function isJoinFailureAlreadyShown(body) {
            if (body instanceof closure_1_0(closure_1_2[13]).JoinGuildRefusedError) {
              return true;
            } else {
              let code;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  code = body.code;
                }
              }
              let hasItem = null != code;
              if (hasItem) {
                hasItem = set.has(code);
              }
              return hasItem;
            }
          })(closure_4)) {
            const intl = closure_131_0(closure_131_2[9]).intl;
            closure_131_11(intl.string(closure_131_1(closure_131_2[10]).grYfmA));
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0.delete(closure_130_1);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c5 = 1;
        }
        c5 = 0;
        closure_130_0.delete(closure_130_1);
      }
      c5 = 0;
      closure_130_0.delete(closure_130_1);
      throw closure_4;
    } catch (tmp37) {
      closure_4 = tmp37;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp37;
      } else if (tmp2 === tmp39) {
        c6 = tmp2;
      } else {
        c6 = tmp;
      }
    }
  }
};
function runGuarded() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _runGuarded(arg0) {
  closure_3 = tmp3;
  closure_2 = tmp5;
  closure_130_0 = closure_1;
  await closure_0();
  if (1 === tmp8) {
    c4 = 0;
    closure_131_11(closure_130_0());
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
const Constants = fn(1072);
({ AbortCodes, PlatformTypes } = Constants);
let closure_7 = fn(8080).NotificationAuthorizationStatus;
const items = [, , ];
({ USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0], TOO_MANY_USER_GUILDS: arr[1], GUILD_AT_CAPACITY: arr[2] } = AbortCodes);
const set = new Set(items);
const set1 = new Set(Object.values(PlatformTypes));
const waterwheels = "waterwheels";
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions() {
  noop.useRef(new Set());
  return noop.useCallback((type) => {
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return (function joinGuild() {
        const self = this;
        const apply = closure_1_14.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(ref.current, type.value.guild_id);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(() => type(7661).startLurking(type.value.guild_id, {}), () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2537).d6U01J);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(() => {
        const provider = type.value.provider;
        if (set.has(provider)) {
          const obj = { platformType: provider, location: _location };
          authorizeConnectionDefault(obj);
        }
      }, () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2537)["rdTp+3"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(() => type(9085).handleClick({ href: type.value.url }), () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2537)["4a9Wgk"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2537)["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return Promise.resolve();
    } else {
      return Promise.resolve(type);
    }
  }, []);
}