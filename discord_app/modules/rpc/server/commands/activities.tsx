// discord_app/modules/rpc/server/commands/activities.tsx
import RPCHelpers from "../../RPCHelpers.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES_mod from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c5, closure_2, constants;

let RPCCommands;
let closure_4;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
const GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  },
};
obj[GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS,
  obj2,
);
const REQUEST_PROXY_TICKET_REFRESH = RPCCommands.REQUEST_PROXY_TICKET_REFRESH;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    return (async function () {
      let closure_1;
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              const obj8 = value(closure_2[4]);
              const result = obj8.validatePostMessageTransport(socket.transport);
              const obj9 = value(closure_2[4]);
              const validateApplicationResult = obj9.validateApplication(socket.application);
              const obj10 = value(closure_2[5]);
              const tmp30 = value;
              if (obj10.isEmbeddedApplication(socket.application)) {
                const tmp19 = tmp(closure_2[7])(socket);
                c3 = 1;
                value = {};
                let id;
                const createProxyTicket = tmp30(closure_2[8]).createProxyTicket;
                const tmp30Result = tmp30(closure_2[8]);
                if (tmp19 != null) {
                  id = tmp19.id;
                }
                constants = 2;
                c5 = 1;
                const obj4 = { value: createProxyTicket(validateApplicationResult, id), done: false };
                return obj4;
              } else {
                const obj5 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
                const self3 = this;
                const self4 = this;
                const tmp17 = new tmp(closure_2[6])(obj5, "This application cannot access this API");
                throw tmp17;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const obj6 = { errorCode: constants.UNKNOWN_ERROR };
            const self = this;
            const self2 = this;
            const tmp13 = new tmp(closure_2[6])(obj6, "Failed to create proxy ticket");
            throw tmp13;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            value.ticket = value;
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp23) {
          closure_2 = tmp23;
          if (0 === c3) {
            c5 = 3;
            throw tmp23;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
};
obj[REQUEST_PROXY_TICKET_REFRESH] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.REQUEST_PROXY_TICKET_REFRESH,
  obj3,
);
let result = size.fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;
