// discord_app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
import v1 from "../../../../_runtime/01256_v1.js";
import size from "../../../../_runtime/metro/00002__.js";

class ForumSessionAnalyticsManager {}
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
