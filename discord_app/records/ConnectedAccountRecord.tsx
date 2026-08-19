// discord_app/records/ConnectedAccountRecord.tsx
import toJSDefault from "../lib/Record.tsx";

toJSDefault;
const result = require("obj132").fileFinishedImporting("records/ConnectedAccountRecord.tsx");
class ConnectedAccountRecord extends tmp2 {
  constructor(arg0) {
    tmp = new ConnectedAccountRecord(new.target, new.target, global, ConnectedAccountRecord);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, type: tmp.type, name: tmp.name } = global);
    tmp.revoked = global.revoked || false;
    tmp.integrations = global.integrations || [];
    tmp.visibility = global.visibility || 0;
    tmp.friendSync = global.friend_sync || false;
    tmp.showActivity = global.show_activity || false;
    tmp.verified = global.verified || false;
    tmp.accessToken = global.access_token || null;
    tmp.twoWayLink = global.two_way_link || false;
    tmp.metadata = global.metadata || null;
    tmp.metadataVisibility = global.metadata_visibility || 0;
    return tmp;
  }
}
ConnectedAccountRecord.prototype["toString"] = function toString() {
  return this.name;
};

export default ConnectedAccountRecord;