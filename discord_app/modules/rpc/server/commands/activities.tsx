// discord_app/modules/rpc/server/commands/activities.tsx
import RPCHelpers from "../../RPCHelpers.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const Constants = fn(1074);
({ RPCCommands, RPCErrors: closure_4, ApplicationFlags: hasOwnProperty } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(14751);
obj[RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS,
  {
    scope: fn(14738).activityInstanceConnectedParticipantsScope,
    handler(socket) {
      const result = RPCHelpers.validatePostMessageTransport(socket.socket.transport);
      return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
    },
  },
);
CONTEXT_MENU_ICON_NAMES = fn(14751);
let obj3 = {
  scope: fn(14738).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = RPCHelpers.validatePostMessageTransport(socket.socket.transport);
    return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
  },
};
obj[RPCCommands.REQUEST_PROXY_TICKET_REFRESH] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.REQUEST_PROXY_TICKET_REFRESH,
  {
    scope: fn(14738).activityInstanceConnectedParticipantsScope,
    handler(socket) {
      socket = socket.socket;
      return (async () => {
        if (constants2 === 2) {
          constants2 = 3;
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
            constants2 = 2;
            if (0 === constants) {
              if (arg0 === 1) {
                constants2 = 3;
                throw value;
              } else if (arg0 === 2) {
                constants2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const result = value(tmp29[4]).validatePostMessageTransport(socket.transport);
                const obj9 = value(tmp29[4]);
                const tmp37 = value;
                const obj10 = value(tmp29[4]);
                const validateApplicationResult = value(tmp29[4]).validateApplication(socket.application);
                if (obj11.hasApplicationFlag(socket.application, constants2.EMBEDDED)) {
                  const tmp26 = tmp3(tmp29[7])(socket);
                  c3 = 1;
                  value = {};
                  let id;
                  if (tmp26 != null) {
                    id = tmp26.id;
                  }
                  constants = 2;
                  constants2 = 1;
                  const obj4 = { value: tmp37(tmp29[8]).createProxyTicket(validateApplicationResult, id), done: false };
                  return obj4;
                } else {
                  const obj5 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
                  const tmp24 = new tmp3(tmp29[6])(obj5, "This application cannot access this API");
                  throw tmp24;
                }
                obj11 = value(tmp29[5]);
              }
            } else if (1 === tmp7) {
              c3 = 0;
              const obj6 = { errorCode: constants.UNKNOWN_ERROR };
              const tmp18 = new tmp3(tmp29[6])(obj6, "Failed to create proxy ticket");
              throw tmp18;
            } else if (arg0 === 1) {
              constants2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              constants2 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              value.ticket = value;
              c3 = 0;
              constants2 = 3;
              const obj = { value, done: true };
              return obj;
            }
          } catch (tmp29) {
            if (tmp4 === c3) {
              constants2 = tmp2;
              throw tmp29;
            } else {
              constants = tmp;
            }
          }
        }
      })();
    },
  },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;
