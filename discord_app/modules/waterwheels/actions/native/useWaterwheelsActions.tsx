// discord_app/modules/waterwheels/actions/native/useWaterwheelsActions.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import openPrivacySettingsDefault from "../../../native_permissions/mobile/openPrivacySettings.native.tsx";
import WaterwheelsCardTypes from "../../cards/WaterwheelsCardTypes.tsx";
import NotificationUtilsDefault from "../../../../utils/native/NotificationUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
function openErrorToast(text) {
  ToastActionCreatorsDefault.open("waterwheels-action-error", { text });
}
function requestNotifications() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _requestNotifications() {
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
let closure_12 = async function _joinGuild(arg0) {
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
              const obj5 = {
                value: GuildActionCreatorsDefault.joinGuild(closure_1, { autoNavigate: false }),
                done: false,
              };
              return obj5;
            }
          }
          c7 = 3;
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c5 = 1;
          if (
            !(function isJoinFailureAlreadyShown(body) {
              if (body instanceof closure_1_0(closure_1_2[12]).JoinGuildRefusedError) {
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
            })(closure_4)
          ) {
            const intl = closure_131_0(closure_131_2[9]).intl;
            closure_131_9(intl.string(closure_131_1(closure_131_2[10]).grYfmA));
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
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _runGuarded(arg0) {
  closure_3 = tmp3;
  closure_2 = tmp5;
  closure_130_0 = closure_1;
  await closure_0();
  if (1 === tmp8) {
    c4 = 0;
    closure_131_9(closure_130_0());
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
let closure_7 = fn(8064).NotificationAuthorizationStatus;
const items = [, ,];
({
  USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0],
  TOO_MANY_USER_GUILDS: arr[1],
  GUILD_AT_CAPACITY: arr[2],
} = fn(1072).AbortCodes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions() {
  noop.useRef(new Set());
  return noop.useCallback((type) => {
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return (function joinGuild() {
        const self = this;
        const apply = closure_1_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(ref.current, type.value.guild_id);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(
        () => type(7645).startLurking(type.value.guild_id, {}),
        () => {
          const intl = type(1113).intl;
          return intl.string(closure_1_1(2537).d6U01J);
        },
      );
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(
        () => type(9068).handleClick({ href: type.value.url }),
        () => {
          const intl = type(1113).intl;
          return intl.string(closure_1_1(2537)["4a9Wgk"]);
        },
      );
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
