// discord_app/lib/InviteQueue.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import "enqueue";
import { trackInvite } from "../actions/MessageActionCreators.tsx";

const sum = require("set").Millis.SECOND + 10;
let c3 = sum;
let obj = { GROUP_DM: 0, [0]: "GROUP_DM", USER: 1, [1]: "USER", CHANNEL: 2, [2]: "CHANNEL" };
class InviteQueue extends tmp4 {
  constructor() {
    tmp2 = require("timestamp");
    tmp2 = new tmp2("InviteQueue");
    tmp = new tmp(tmp2, c3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = InviteQueue.prototype;
prototype["_sendInvite"] = function _sendInvite(channel, inviteKey, _location, inviteAnalyticsMetadata, ensureGuildLoaded) {
  const importDefault = ensureGuildLoaded;
  const obj = trackInvite;
  trackInvite.sendInvite(channel.id, inviteKey, _location, inviteAnalyticsMetadata).then(() => callback(null, true), () => callback(null, false));
};
function drain(location, sum, arg2, prototype, arg4, InviteQueue, drain, dependencyMap, arg8) {
  let self = this;
  self = this;
  dependencyMap = location;
  let ensureGuildLoaded = sum;
  const _location = location.location;
  const inviteAnalyticsMetadata = location.inviteAnalyticsMetadata;
  const type = location.type;
  if (self.GROUP_DM !== type) {
    if (tmp.CHANNEL !== type) {
      if (tmp.USER === type) {
        const obj = inviteAnalyticsMetadata(4355);
        inviteAnalyticsMetadata(4355).ensurePrivateChannel(location.user.id).then((arg0) => {
          const channel = sum.getChannel(arg0);
          if (null != channel) {
            self._sendInvite(channel, _location.inviteKey, _location, inviteAnalyticsMetadata, sum);
          } else {
            sum(null, false);
          }
        }, () => sum(null, false));
        const ensurePrivateChannelResult = inviteAnalyticsMetadata(4355).ensurePrivateChannel(location.user.id);
      }
    }
  }
  self._sendInvite(location.channel, location.inviteKey, _location, inviteAnalyticsMetadata, sum);
}
prototype["drain"] = drain;
drain = new drain(new require("timestamp")("InviteQueue"), sum, tmp, prototype, new.target, InviteQueue, drain, dependencyMap, new.target);
// ThrowIfThisInitialized (0x7c)
const tmp5 = new require("timestamp")("InviteQueue");
const result = require("enqueue").fileFinishedImporting("lib/InviteQueue.tsx");

export default drain;
export const InvitePropertiesType = obj;