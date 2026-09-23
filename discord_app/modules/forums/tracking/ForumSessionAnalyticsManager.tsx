// === Module 8098: ForumSessionAnalyticsManager ===

// Module 8098 (ForumSessionAnalyticsManager)
import v1 from "v1" /* 1255 */;
import size from "module_2" /* 2 */;

class ForumSessionAnalyticsManager {
}
ForumSessionAnalyticsManager.prototype["getForumChannelSessionId"] = function getForumChannelSessionId(channelId) {
  const self = this;
  if (null == this.session) {
    const obj = { channelId, sessionId: v1.v4() };
    self.session = obj;
  }
  if (self.session.channelId !== channelId) {
    const obj3 = { channelId, sessionId: v1.v4() };
    self.session = obj3;
  }
  return self.session.sessionId;
};
const result = size.fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(ForumSessionAnalyticsManager.prototype);