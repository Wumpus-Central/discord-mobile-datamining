// === Module 14869: useRequestToStreamData ===

// Module 14869 (useRequestToStreamData)
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11543 */;
import RequestToStreamActionCreators from "RequestToStreamActionCreators" /* 14872 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const ActivityActionTypes = fn(1072).ActivityActionTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/request_to_stream/useRequestToStreamData.tsx");

export function useRequestToStreamData(id, requestToStreamChannel) {
  _require = id;
  importDefault = requestToStreamChannel;
  let str;
  if (requestToStreamChannel != null) {
    str = requestToStreamChannel.guild_id;
  }
  if (str == null) {
    str = "";
  }
  const enabled = require("RequestToStreamNonGamesExperiment").useConfig({ guildId: str, location: "useRequestToStreamData" }).enabled;
  let obj = require("RequestToStreamNonGamesExperiment");
  const items = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id.getId());
  let guild_id;
  let obj2 = require("initialize");
  if (requestToStreamChannel != null) {
    guild_id = requestToStreamChannel.guild_id;
  }
  activity = require("useStreamRequestActivities")(id, guild_id)[0];
  const tmpResult = require("useStreamRequestActivities");
  const items1 = [handleRequestToStream];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    guildId = undefined;
    if (guildId != null) {
      guildId = guildId.getGuildId();
    }
    return null != ApplicationStreamingStore.getStreamForUser(closure_0, guildId);
  });
  const tmp3Result = require("initialize");
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  const data = require("ApplicationActionCreators").useApplication(application_id).data;
  id = undefined;
  const tmp3Result2 = require("ApplicationActionCreators");
  if (requestToStreamChannel != null) {
    id = requestToStreamChannel.id;
  }
  const items2 = [requestToStreamChannel, activity, id];
  const obj5 = data;
  const tmpResult2 = require("useCanRequestStreamFromUser");
  handleRequestToStream = data.useCallback((arg0) => {
    if (null != closure_1) {
      const obj2 = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: null, location: null, targetUserId: null };
      const _HermesInternal = HermesInternal;
      obj2.content = "<@" + targetUserId + ">";
      obj2.location = tmp;
      obj2.targetUserId = targetUserId;
      ActivitiesActionCreatorsDefault.sendActivityInvite(obj2);
      const result = RequestToStreamActionCreators.startStreamRequestCooldown(targetUserId);
    }
  }, items2);
  let tmp14 = stateFromStores !== id;
  if (tmp14) {
    tmp14 = null != activity || enabled;
    const tmp15 = null != activity || enabled;
  }
  if (tmp14) {
    tmp14 = null != data || enabled;
    const tmp16 = null != data || enabled;
  }
  if (tmp14) {
    tmp14 = tmpResult1Result;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  id = tmp14;
  const items3 = [tmp14, data, handleRequestToStream];
  return obj5.useMemo(() => {
    let tmp = null;
    if (closure_5) {
      const obj = { playingApplication: data, handleRequestToStream };
      tmp = obj;
    }
    return tmp;
  }, items3);
}