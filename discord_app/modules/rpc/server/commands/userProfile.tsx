// === Module 16660: commands/userProfile ===

// Module 16660 (commands/userProfile)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const RPCCommands = fn(1072).RPCCommands;
const weakMap = new WeakMap();
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(16616);
obj[RPCCommands.OPEN_USER_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_PROFILE, {
  scope: fn(6583).RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    socket = socket.socket;
    let user_id = socket.args.user_id;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              ({ iframeId: closure_0, frame } = user_id(16609)(socket));
              const tmp22 = user_id(16609)(socket);
              ({ guildId: closure_1, channelId: c2 } = user_id(16661)(frame));
              value = weakMap.get(socket);
              let iframeId = value;
              if (value == null) {
                iframeId = { inFlight: false, readyAt: 0 };
              }
              closure_3 = iframeId;
              if (!iframeId.inFlight) {
                const _Date = Date;
                if (Date.now() >= tmp6.readyAt) {
                  if (!obj2.isAnyUserProfileOpen()) {
                    tmp6.inFlight = true;
                    const result = weakMap.set(socket, tmp6);
                    user_id = {};
                    const promise = new Promise((fn) => {
                      iframeId = fn;
                      const guildId = false;
                      if (!obj.openUserProfile(obj2)) {
                        closure_3.inFlight = false;
                        fn(false);
                      }
                      obj = iframeId(channelId[6]);
                      obj2 = {
                        userId,
                        iframeId,
                        guildId,
                        channelId,
                        onOpen() {
                          if (!c1) {
                            closure_3.inFlight = false;
                            closure_0(true);
                          }
                        },
                        onClose() {
                          c1 = true;
                          closure_3.inFlight = false;
                          closure_3.readyAt = Date.now() + 1000;
                          closure_0(false);
                        }
                      };
                    });
                    dependencyMap = 1;
                    c3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                  obj2 = iframeId(16662);
                }
              }
              c3 = 3;
              const tmp23 = user_id(16661)(frame);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            user_id.opened = value;
          }
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/userProfile.tsx");

export default obj;