// discord_app/lib/InviteQueue.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import MessageActionCreatorsDefault from "../actions/MessageActionCreators.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import Queue from "../utils/Queue.tsx";

let sum = DurationsDefault.Millis.SECOND + 10;
let c3 = sum;
const InvitePropertiesType = { GROUP_DM: 0, [0]: "GROUP_DM", USER: 1, [1]: "USER", CHANNEL: 2, [2]: "CHANNEL" };
class InviteQueue extends tmp4 {
  constructor() {
    tmp2 = closure_0(closure_1[3]);
    tmp2 = new tmp2("InviteQueue");
    tmp = new tmp(tmp2, closure_3, tmp2);
    return tmp;
  }
}
const prototype = InviteQueue.prototype;
prototype["_sendInvite"] = function _sendInvite(channel, inviteKey, _location, inviteAnalyticsMetadata, sum) {
  MessageActionCreatorsDefault.sendInvite(channel.id, inviteKey, _location, inviteAnalyticsMetadata).then(
    () => sum(null, true),
    () => sum(null, false),
  );
};
function drain(location, sum) {
  const self = this;
  dependencyMap = location;
  const _location = location.location;
  const inviteAnalyticsMetadata = location.inviteAnalyticsMetadata;
  const type = location.type;
  if (self.GROUP_DM !== type) {
    if (tmp.CHANNEL !== type) {
      if (tmp.USER === type) {
        const obj = inviteAnalyticsMetadata(4573);
        inviteAnalyticsMetadata(4573)
          .ensurePrivateChannel(location.user.id)
          .then(
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
        const ensurePrivateChannelResult = inviteAnalyticsMetadata(4573).ensurePrivateChannel(location.user.id);
      }
    }
  }
  self._sendInvite(location.channel, location.inviteKey, _location, inviteAnalyticsMetadata, sum);
}
prototype["drain"] = drain;
drain = new drain(
  new LoggerDefault("InviteQueue"),
  sum,
  tmp,
  prototype,
  new.target,
  InviteQueue,
  drain,
  dependencyMap,
  new.target,
);
const size = fn(2);
const result = size.fileFinishedImporting("lib/InviteQueue.tsx");

export default drain;
export { InvitePropertiesType };
