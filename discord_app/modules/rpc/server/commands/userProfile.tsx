// === Module 16299: commands/userProfile ===

// Module 16299 (commands/userProfile)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const RPCCommands = fn(1072).RPCCommands;
const weakMap = new WeakMap();
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(16255);
obj[RPCCommands.OPEN_USER_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_PROFILE, {
  scope: fn(6444).RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    socket = socket.socket;
    const user_id = socket.args.user_id;
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
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let iframeId = userId(c2[4])(socket).iframeId;
              value = weakMap.get(socket);
              iframeId = value;
              if (value == null) {
                iframeId = { inFlight: false, readyAt: 0 };
              }
              userId = iframeId;
              if (!iframeId.inFlight) {
                const _Date = Date;
                if (Date.now() >= tmp6.readyAt) {
                  if (!obj2.isAnyUserProfileOpen()) {
                    tmp6.inFlight = true;
                    const result = weakMap.set(socket, tmp6);
                    userId = {};
                    const promise = new Promise((fn) => {
                      iframeId = fn;
                      c1 = false;
                      if (!obj.openUserProfile(obj2)) {
                        c1.inFlight = false;
                        fn(false);
                      }
                    });
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                  obj2 = iframeId(tmp20[5]);
                }
              }
              c3 = 3;
              tmp20 = c2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            userId.opened = value;
          }
          c3 = 3;
          const obj = { value, done: true };
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