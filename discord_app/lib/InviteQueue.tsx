// discord_app/lib/InviteQueue.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import setDefault from "../utils/Durations.tsx";
import trackInviteDefault from "../actions/MessageActionCreators.tsx";
import enqueueDefault from "../utils/Queue.tsx";
import closure_2 from "../stores/ChannelStore.tsx";

const sum = setDefault.Millis.SECOND + 10;
let c3 = sum;
let obj = { GROUP_DM: 0, [0]: "GROUP_DM", USER: 1, [1]: "USER", CHANNEL: 2, [2]: "CHANNEL" };
enqueueDefault;
class InviteQueue extends tmp4 {
  constructor() {
    tmp2 = require("timestamp");
    tmp2 = new tmp2("InviteQueue");
    tmp = new tmp(tmp2, closure_3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = InviteQueue.prototype;
prototype["_sendInvite"] = function _sendInvite(channel, inviteKey, _location, inviteAnalyticsMetadata, closure_2) {
  importDefault = closure_2;
  obj = trackInviteDefault;
  trackInviteDefault.sendInvite(channel.id, inviteKey, _location, inviteAnalyticsMetadata).then(() => callback(null, true), () => callback(null, false));
};
function drain(location, sum, arg2, prototype, arg4, InviteQueue, drain, dependencyMap, arg8) {
  let self = this;
  self = this;
  dependencyMap = location;
  closure_2 = sum;
  const _location = location.location;
  const inviteAnalyticsMetadata = location.inviteAnalyticsMetadata;
  const type = location.type;
  if (self.GROUP_DM !== type) {
    if (tmp.CHANNEL !== type) {
      if (tmp.USER === type) {
        obj = inviteAnalyticsMetadata(4461);
        inviteAnalyticsMetadata(4461).ensurePrivateChannel(location.user.id).then((arg0) => {
          const channel = sum.getChannel(arg0);
          if (null != channel) {
            self._sendInvite(channel, _location.inviteKey, _location, inviteAnalyticsMetadata, sum);
          } else {
            sum(null, false);
          }
        }, () => sum(null, false));
        const ensurePrivateChannelResult = inviteAnalyticsMetadata(4461).ensurePrivateChannel(location.user.id);
      }
    }
  }
  self._sendInvite(location.channel, location.inviteKey, _location, inviteAnalyticsMetadata, sum);
}
prototype["drain"] = drain;
drain = new drain(new timestampDefault("InviteQueue"), sum, tmp, prototype, new.target, InviteQueue, drain, dependencyMap, new.target);
// ThrowIfThisInitialized (0x7c)
const tmp5 = new timestampDefault("InviteQueue");
const result = require("set").fileFinishedImporting("lib/InviteQueue.tsx");

export default drain;
export const InvitePropertiesType = obj;