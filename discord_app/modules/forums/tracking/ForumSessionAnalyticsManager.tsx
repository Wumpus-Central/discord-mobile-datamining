// === Module 7771: ForumSessionAnalyticsManager ===

// Module 7771 (ForumSessionAnalyticsManager)
import v1 from "v1" /* 1256 */;
import size from "module_2" /* 2 */;

class ForumSessionAnalyticsManager {
}
ForumSessionAnalyticsManager.prototype["getForumChannelSessionId"] = function getForumChannelSessionId(channelId) {
  const self = this;
  if (null == this.session) {
    let obj = { channelId, sessionId: v1.v4() };
    self.session = obj;
  }
  if (self.session.channelId !== channelId) {
    obj = { channelId, sessionId: v1.v4() };
    self.session = obj;
  }
  return self.session.sessionId;
};
const result = size.fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(ForumSessionAnalyticsManager.prototype);