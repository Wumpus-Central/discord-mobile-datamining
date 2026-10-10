// === Module 14749: activities ===

// Module 14749 (activities)
import RPCHelpers from "RPCHelpers" /* 10945 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14699 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Constants = fn(1085);
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(14713);
obj[RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
  scope: fn(14699).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = RPCHelpers.validatePostMessageTransport(socket.socket.transport);
    return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
  }
});
CONTEXT_MENU_ICON_NAMES = fn(14713);
let obj3 = {
  scope: fn(14699).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = RPCHelpers.validatePostMessageTransport(socket.socket.transport);
    return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
  }
};
obj[RPCCommands.REQUEST_PROXY_TICKET_REFRESH] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_PROXY_TICKET_REFRESH, {
  scope: fn(14699).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const result = value(tmp36[4]).validatePostMessageTransport(socket.transport);
              const obj12 = value(tmp36[4]);
              const validateApplicationResult = value(tmp36[4]).validateApplication(socket.application);
              const obj13 = value(tmp36[4]);
              if (obj14.isEmbeddedApplication(socket.application)) {
                let context;
                if (tmp3(tmp36[7])(socket)) {
                  context = socket.context;
                }
                let surface;
                if (context != null) {
                  surface = context.surface;
                }
                const tmp29Result = tmp3(tmp36[8])(surface);
                c3 = 1;
                value = {};
                let type;
                if (context != null) {
                  type = context.source.type;
                }
                if (type === tmp44(tmp36[9]).EmbeddedContextSourceType.FRAME) {
                  constants = 3;
                  c5 = 1;
                  const obj4 = { value: tmp44(tmp36[10]).createProxyTicket(validateApplicationResult, tmp29Result, context.surface.type), done: false };
                  return obj4;
                } else {
                  constants = 2;
                  c5 = 1;
                  const obj5 = { value: tmp44(tmp36[10]).createProxyTicket(validateApplicationResult, tmp29Result), done: false };
                  return obj5;
                }
                const tmp29 = tmp3(tmp36[8]);
              } else {
                const obj6 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
                const tmp24 = new tmp3(tmp36[6])(obj6, "This application cannot access this API");
                throw tmp24;
              }
              obj14 = value(tmp36[5]);
            }
          } else if (1 === tmp7) {
            c3 = 0;
            const obj7 = { errorCode: constants.UNKNOWN_ERROR };
            const tmp18 = new tmp3(tmp36[6])(obj7, "Failed to create proxy ticket");
            throw tmp18;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            value.ticket = value;
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } catch (tmp36) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp36;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;