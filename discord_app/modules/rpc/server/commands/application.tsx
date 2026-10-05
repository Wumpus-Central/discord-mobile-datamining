// === Module 14307: application ===

// Module 14307 (application)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants2 from "Constants" /* 5316 */;
import TestModeUtils from "TestModeUtils" /* 8512 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 8981 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9029 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14308 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let closure_4;
let hasOwnProperty;
let metroRequire;
const RPC_LOCAL_SCOPE = Constants2.RPC_LOCAL_SCOPE;
({ ApplicationFlags: closure_4, Endpoints: hasOwnProperty, RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {
  validation(string) {
    let obj4;
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { event_name: stringResult.required(), event_properties: obj4.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    obj4 = createRpcJoiSchemaObjectDefault(string);
    return keys(obj2);
  },
  handler(arg0) {
    let args;
    let guildId;
    let prop;
    let socket;
    let type;
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    const event_name = args.event_name;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    obj2.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = getCurrentEmbeddedActivityChannelDefault();
    if (obj3 != null) {
      guildId = obj3.getGuildId();
    }
    const application = ApplicationStore.getApplication(id);
    const tmpResult = ApplicationFlagUtils;
    if (tmpResult.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      const tmpResult2 = EmbeddedActivitiesManager;
      const activeAnalyticsSessionIDs = tmpResult2.getActiveAnalyticsSessionIDs(id);
      const obj4 = { activity_application_id: id, activity_channel_type: type, activity_guild_id: guildId, activity_user_session_id: prop };
      type = undefined;
      if (obj3 != null) {
        type = obj3.type;
      }
      prop = undefined;
      if (activeAnalyticsSessionIDs != null) {
        prop = activeAnalyticsSessionIDs.activityUserSessionId;
      }
      const obj5 = {};
      const track = AnalyticsUtilsDefault.track;
      AnalyticsUtilsDefault;
      const merged = Object.assign(obj4);
      const merged1 = Object.assign(event_properties);
      track(event_name, obj5);
    } else {
      const self = this;
      const self2 = this;
      const obj6 = { errorCode: metroRequire.INVALID_COMMAND };
      const tmp10 = new RPCErrorDefault(obj6, "This application cannot access this API");
      throw tmp10;
    }
  }
};
let obj2 = {
  scope: RPC_LOCAL_SCOPE,
  handler(socket) {
    let obj2;
    let obj3;
    const id = socket.socket.application.id;
    if (null == id) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: metroRequire.INVALID_COMMAND };
      const tmp8 = new RPCErrorDefault(obj, "No application.");
      throw tmp8;
    } else {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: hasOwnProperty.APPLICATION_TICKET(id), body: obj2, retries: 3, oldFormErrors: true, rejectWithError: false };
      const post = HTTP.post;
      obj2 = { test_mode: obj3.isTestModeForApplication(id) };
      obj3 = TestModeUtils;
      const postResult = post(request);
      return postResult.then((body) => body.body);
    }
  }
};
let result = size.fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj2 };