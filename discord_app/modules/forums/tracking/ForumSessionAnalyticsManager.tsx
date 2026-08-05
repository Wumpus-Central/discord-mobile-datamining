import { v1 } from "../../../../_runtime/00514_v1.js";
// discord_app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
class ForumSessionAnalyticsManager {
}
ForumSessionAnalyticsManager.prototype["getForumChannelSessionId"] = function getForumChannelSessionId(arg0) {
  const self = this;
  if (null == this.session) {
    let obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1 /* v1 */.v4();
    self.session = obj;
    const obj2 = v1 /* v1 */;
  }
  if (self.session.channelId !== arg0) {
    obj = { channelId: null, sessionId: null };
    obj[0] = arg0;
    obj[1] = v1 /* v1 */.v4();
    self.session = obj;
    const obj4 = v1 /* v1 */;
  }
  return self.session.sessionId;
};
const result = require("set").fileFinishedImporting("modules/forums/tracking/ForumSessionAnalyticsManager.tsx");

export default Object.create(ForumSessionAnalyticsManager.prototype);