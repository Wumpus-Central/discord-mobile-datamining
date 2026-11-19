// discord_app/modules/rpc/server/commands/userProfile.tsx
import validateEmbeddedAppFrameDefault from "../../helpers/validateEmbeddedAppFrame.tsx";
import createSocketGateDefault from "../../helpers/createSocketGate.tsx";
import getFrameProfileContextDefault from "../../helpers/getFrameProfileContext.tsx";
import userProfile from "../../helpers/userProfile.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function openUserProfileForSocket() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _openUserProfileForSocket(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+60" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let userId = iframeId;
          ({ iframeId: closure_1, frame } = validateEmbeddedAppFrameDefault(userId));
          const tmp18 = userId;
          const tmp22 = validateEmbeddedAppFrameDefault(userId);
          ({ guildId: closure_2, channelId: c3 } = getFrameProfileContextDefault(frame));
          const tmp23 = getFrameProfileContextDefault(frame);
          let tryAcquireResult = null;
          if (!obj6.isAnyUserProfileOpen()) {
            tryAcquireResult = React4.tryAcquire(tmp18);
          }
          c4 = tryAcquireResult;
          if (null == tryAcquireResult) {
            c4 = 3;
          } else {
            const guildId = {};
            const promise = new Promise((fn) => {
              userId = fn;
              iframeId = false;
              if (!obj.openUserProfile(obj2)) {
                tryAcquireResult({ startCooldown: false });
                fn(false);
              }
              obj = userId(guildId[6]);
              obj2 = {
                userId,
                iframeId,
                guildId,
                channelId,
                onOpen() {
                  if (!c1) {
                    tryAcquireResult({ startCooldown: false });
                    closure_0(true);
                  }
                },
                onClose() {
                  c1 = true;
                  tryAcquireResult();
                  closure_0(false);
                },
              };
            });
            c3 = 1;
            c4 = 1;
            const obj5 = { value: promise, done: false };
            return obj5;
          }
          obj6 = userProfile;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        guildId.opened = value;
      }
      c4 = 3;
      let obj = { value, done: true };
      return obj;
    } catch (tmp13) {
      c4 = tmp;
      throw tmp13;
    }
  }
};
const RPCCommands = fn(1072).RPCCommands;
let closure_4 = createSocketGateDefault({ cooldownMs: 1000 });
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15593);
obj[RPCCommands.OPEN_USER_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_PROFILE, {
  scope: fn(6233).RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    return openUserProfileForSocket(socket.socket, socket.args.user_id);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userProfile.tsx");

export default obj;
export { openUserProfileForSocket };
