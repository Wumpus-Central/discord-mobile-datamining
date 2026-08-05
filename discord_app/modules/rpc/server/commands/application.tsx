// discord_app/modules/rpc/server/commands/application.tsx
import addApplication from "addApplication";
import ME from "ME";
import { sendRequest } from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { isTestModeForApplication } from "../../../game_store/TestModeUtils.tsx";
import { createRpcJoiSchemaObject } from "../../helpers/createRpcJoiSchemaObject.tsx";
import { getCurrentEmbeddedActivityChannel } from "../../helpers/getCurrentEmbeddedActivityChannel.tsx";
import { prototype } from "../../RPCError.tsx";
import { recurseReplaceContentTree } from "../../RPCHelpers.tsx";

let RPCCommands;
let c4;
let c5;
let closure_6;
const require = arg1;
({ ApplicationFlags: c4, Endpoints: c5, RPCCommands, RPCErrors: closure_6 } = ME);
let obj = {
  validation(string) {
    let obj = createRpcJoiSchemaObject(string);
    obj = { event_name: null, event_properties: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    const stringResult = string.string();
    obj[1] = createRpcJoiSchemaObject(string).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    let obj = recurseReplaceContentTree /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = recurseReplaceContentTree /* recurseReplaceContentTree */;
    obj1.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = getCurrentEmbeddedActivityChannel();
    if (obj3 != null) {
      const guildId = obj3.getGuildId();
    }
    application = application.getApplication(id);
    let tmpResult = tmp(7510);
    if (tmpResult.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      tmpResult = tmp(10520);
      const activeAnalyticsSessionIDs = tmpResult.getActiveAnalyticsSessionIDs(id);
      obj = { activity_application_id: null, activity_channel_type: null, activity_guild_id: null, activity_user_session_id: null };
      obj[0] = id;
      let type;
      if (obj3 != null) {
        type = obj3.type;
      }
      obj[1] = type;
      obj[2] = guildId;
      let prop;
      if (activeAnalyticsSessionIDs != null) {
        prop = activeAnalyticsSessionIDs.activityUserSessionId;
      }
      obj[3] = prop;
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(event_properties);
      tmp5(698).track(args.event_name, obj);
    } else {
      obj1 = { errorCode: null };
      obj1[0] = constants2.INVALID_COMMAND;
      const tmp12 = new tmp5(10543)(obj1, "This application cannot access this API");
      throw tmp12;
    }
  }
};
obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp7 = new prototype(obj, "No application.");
      throw tmp7;
    } else {
      const HTTP = sendRequest /* sendRequest */.HTTP;
      obj = { url: null, body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
      obj[0] = closure_5.APPLICATION_TICKET(id);
      obj = { test_mode: null };
      obj[0] = isTestModeForApplication /* isTestModeForApplication */.isTestModeForApplication(id);
      obj[1] = obj;
      const obj4 = isTestModeForApplication /* isTestModeForApplication */;
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
let result = require("ME").fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };