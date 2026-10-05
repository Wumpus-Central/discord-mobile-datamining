// discord_app/lib/InviteQueue.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import MessageActionCreatorsDefault from "../actions/MessageActionCreators.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import Queue from "../utils/Queue.tsx";
import size from "../../_runtime/metro/00002__.js";

let dependencyMap;

const sum = DurationsDefault.Millis.SECOND + 10;
let c3 = sum;
const InvitePropertiesType = { GROUP_DM: 0, [0]: "GROUP_DM", USER: 1, [1]: "USER", CHANNEL: 2, [2]: "CHANNEL" };
class InviteQueue extends Queue {
  constructor() {
    const tmp2 = LoggerDefault;
    const tmp22 = new tmp2("InviteQueue");
    const tmp3 = new tmp(tmp22, c3, tmp2);
    return tmp3;
  }
  _sendInvite(channel, inviteKey, _location, inviteAnalyticsMetadata, sum) {
    let closure_0 = sum;
    const obj = MessageActionCreatorsDefault;
    const sendInviteResult = obj.sendInvite(channel.id, inviteKey, _location, inviteAnalyticsMetadata);
    sendInviteResult.then(
      () => closure_0(null, true),
      () => closure_0(null, false),
    );
  }
}
const prototype = InviteQueue.prototype;
function drain(location, sum) {
  const self = this;
  dependencyMap = location;
  const _location = location.location;
  const inviteAnalyticsMetadata = location.inviteAnalyticsMetadata;
  const type = location.type;
  if (self.GROUP_DM !== type) {
    if (self.CHANNEL !== type) {
      if (self.USER === type) {
        const obj = inviteAnalyticsMetadata(4903);
        const ensurePrivateChannelResult = obj.ensurePrivateChannel(location.user.id);
        ensurePrivateChannelResult.then(
          (result) => {
            const channel = ChannelStore.getChannel(result);
            if (null != channel) {
              self._sendInvite(channel, _location.inviteKey, _location, inviteAnalyticsMetadata, sum);
            } else {
              sum(null, false);
            }
          },
          () => sum(null, false),
        );
      }
    }
  }
  self._sendInvite(location.channel, location.inviteKey, _location, inviteAnalyticsMetadata, sum);
}
prototype["drain"] = drain;
const tmp5 = new LoggerDefault("InviteQueue");
const drain1 = new drain(tmp5, sum, tmp, prototype, this, InviteQueue, drain, dependencyMap, this);
const result = size.fileFinishedImporting("lib/InviteQueue.tsx");

export default drain1;
export { InvitePropertiesType };
