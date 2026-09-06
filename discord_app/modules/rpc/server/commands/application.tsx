// === Module 14467: application ===

// Module 14467 (application)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TestModeUtils from "TestModeUtils" /* 8854 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import RPCHelpers from "RPCHelpers" /* 9559 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14468 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const Constants = fn(1074);
({ ApplicationFlags: closure_4, Endpoints: hasOwnProperty, RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { event_name: null, event_properties: null };
    const requiredResult = obj.required();
    obj.event_name = string.string().required();
    const stringResult = string.string();
    obj.event_properties = createRpcJoiSchemaObjectDefault(string).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    let obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = RPCHelpers;
    obj1.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = getCurrentEmbeddedActivityChannelDefault();
    if (obj3 != null) {
      const guildId = obj3.getGuildId();
    }
    const application = ApplicationStore.getApplication(id);
    let tmpResult = tmp(8856);
    if (tmpResult.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      tmpResult = tmp(9518);
      const activeAnalyticsSessionIDs = tmpResult.getActiveAnalyticsSessionIDs(id);
      obj = { activity_application_id: id, activity_channel_type: null, activity_guild_id: null, activity_user_session_id: null };
      let type;
      if (obj3 != null) {
        type = obj3.type;
      }
      obj.activity_channel_type = type;
      obj.activity_guild_id = guildId;
      let prop;
      if (activeAnalyticsSessionIDs != null) {
        prop = activeAnalyticsSessionIDs.activityUserSessionId;
      }
      obj.activity_user_session_id = prop;
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(event_properties);
      tmp5(1242).track(args.event_name, obj);
    } else {
      obj1 = { errorCode: constants2.INVALID_COMMAND };
      const tmp12 = new tmp5(9554)(obj1, "This application cannot access this API");
      throw tmp12;
    }
  }
};
obj = {
  scope: fn(4465).RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let obj = { errorCode: constants2.INVALID_COMMAND };
      const tmp10 = new RPCErrorDefault(obj, "No application.");
      throw tmp10;
    } else {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: hasOwnProperty.APPLICATION_TICKET(id), body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
      obj = { test_mode: TestModeUtils.isTestModeForApplication(id) };
      request.body = obj;
      return HTTP.post(request).then((body) => body.body);
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };