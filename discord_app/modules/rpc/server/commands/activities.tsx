// === Module 14386: ? ===

// Module 14386
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 9521 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14341 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 673 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14353 */;

require = arg1;
({ RPCCommands, RPCErrors: c4, ApplicationFlags: c5 } = ME);
let obj = {};
obj = {
  scope: require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = recurseReplaceContentTree.validatePostMessageTransport(socket.socket.transport);
    const obj = recurseReplaceContentTree;
    return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
  }
};
obj[RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, obj);
obj = {
  scope: require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    return callback(function*() {
      if (constants2 === 2) {
        constants2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants2 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              constants2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              const result = closure_1_0(closure_1_2[4]).validatePostMessageTransport(closure_1_0.transport);
              const obj9 = closure_1_0(closure_1_2[4]);
              const tmp38 = closure_1_0;
              const obj10 = closure_1_0(closure_1_2[4]);
              const validateApplicationResult = closure_1_0(closure_1_2[4]).validateApplication(closure_1_0.application);
              if (obj11.hasApplicationFlag(closure_1_0.application, constants2.EMBEDDED)) {
                const tmp26 = tmp46(tmp47[7])();
                c3 = 1;
                closure_0 = {};
                let id;
                if (tmp26 != null) {
                  id = tmp26.id;
                }
                constants = 2;
                constants2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp38(closure_1_2[8]).createProxyTicket(validateApplicationResult, id);
                return obj1;
              } else {
                const obj2 = { errorCode: null };
                obj2[0] = constants.UNAUTHORIZED_FOR_APPLICATION;
                const tmp24 = new tmp46(tmp47[6])(obj2, "This application cannot access this API");
                throw tmp24;
              }
              obj11 = closure_1_0(closure_1_2[5]);
            }
          } else if (1 === tmp7) {
            c3 = 0;
            const obj3 = { errorCode: null };
            obj3[0] = constants.UNKNOWN_ERROR;
            const tmp18 = new closure_1_1(closure_1_2[6])(obj3, "Failed to create proxy ticket");
            throw tmp18;
          } else if (arg0 === 1) {
            constants2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            constants2 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_0.ticket = arg1;
            c3 = 0;
            constants2 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_0;
            return obj;
          }
        } catch (tmp29) {
          closure_2 = tmp29;
          if (tmp4 === c3) {
            constants2 = tmp2;
            throw tmp29;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  }
};
obj[RPCCommands.REQUEST_PROXY_TICKET_REFRESH] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_PROXY_TICKET_REFRESH, obj);
let result = require("set").fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;