// discord_app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
import v1 from "../../../../_runtime/01266_v1.js";
import size from "../../../../_runtime/metro/00002__.js";

class ForumSessionAnalyticsManager {
  getForumChannelSessionId(channelId) {
    let obj2;
    let obj4;
    const self = this;
    if (null == this.session) {
      const obj = { channelId, sessionId: obj2.v4() };
      self.session = obj;
      obj2 = v1;
    }
    if (self.session.channelId !== channelId) {
      const obj3 = { channelId, sessionId: obj4.v4() };
      self.session = obj3;
      obj4 = v1;
    }
    return self.session.sessionId;
  }
}
const prototype = ForumSessionAnalyticsManager.prototype;
const prototype2 = ForumSessionAnalyticsManager.prototype;
const result = size.fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(prototype2);
