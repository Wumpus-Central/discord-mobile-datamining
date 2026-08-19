// discord_app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import v1 from "../../../../_runtime/00514_v1.js";

class ForumSessionAnalyticsManager {
}
ForumSessionAnalyticsManager.prototype["getForumChannelSessionId"] = function getForumChannelSessionId(arg0) {
  const self = this;
  if (null == this.session) {
    let obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1.v4();
    self.session = obj;
  }
  if (self.session.channelId !== arg0) {
    obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1.v4();
    self.session = obj;
  }
  return self.session.sessionId;
};
const result = obj132.fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(ForumSessionAnalyticsManager.prototype);