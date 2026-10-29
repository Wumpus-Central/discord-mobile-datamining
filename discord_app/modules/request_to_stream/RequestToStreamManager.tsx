// discord_app/modules/request_to_stream/RequestToStreamManager.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import StreamActionCreatorsAll from "../../actions/StreamActionCreators.tsx";
import MobileRequestToStreamExperiment2 from "MobileRequestToStreamExperiment.tsx";
import useStreamRequestActivities from "useStreamRequestActivities.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import RequestToStreamStore from "RequestToStreamStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
let closure_7 = fn(14800).STREAM_REQUEST_AUTO_WATCH_MAX_AGE;
const ActivityActionTypes = fn(1084).ActivityActionTypes;
class RequestToStreamManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
RequestToStreamManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(arg0) {
  let channelId;
  function _loop() {
    if (null != channelId.channelId) {
      if (true === channelId.selfStream) {
        const pendingRequestForUser = RequestToStreamStore.getPendingRequestForUser(channelId.userId);
        if (null == pendingRequestForUser) {
          return 0;
        } else {
          if (null != channelId.guildId) {
            const MobileRequestToStreamExperiment = MobileRequestToStreamExperiment2.MobileRequestToStreamExperiment;
            const obj = { guildId: channelId.guildId, location: "RequestToStreamManager" };
            if (!MobileRequestToStreamExperiment.getConfig(obj, { autoTrackExposure: false }).enabled) {
              return 0;
            }
          }
          const message = MessageStore.getMessage(channelId.channelId, pendingRequestForUser);
          let type;
          if (message != null) {
            const activity = message.activity;
            if (activity != null) {
              type = activity.type;
            }
          }
          if (type !== ActivityActionTypes.STREAM_REQUEST) {
            return 0;
          } else {
            const _Date = Date;
            if (extractTimestampResult < Date.now() - closure_7) {
              return 0;
            } else {
              const application = message.application;
              let id;
              if (application != null) {
                id = application.id;
              }
              if (null != id) {
                const streamRequestActivities = useStreamRequestActivities.getStreamRequestActivities(
                  channelId.userId,
                  channelId.guildId,
                );
                if (null == streamRequestActivities.find((application_id) => application_id.application_id === id)) {
                  return 0;
                }
              }
              const streamForUser = ApplicationStreamingStore.getStreamForUser(channelId.userId, channelId.guildId);
              if (null == streamForUser) {
                return 0;
              } else {
                StreamActionCreatorsAll.watchStream(streamForUser, { forceMultiple: true, noFocus: true });
              }
            }
            extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(pendingRequestForUser);
          }
        }
      }
    }
    return 0;
  }
  const iter = arg0.voiceStates[Symbol.iterator]();
  while (iter !== undefined) {
    channelId = iter.next();
    let _loopResult = _loop();
    continue;
  }
};
const requestToStreamManager = new RequestToStreamManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamManager.tsx");

export default requestToStreamManager;
