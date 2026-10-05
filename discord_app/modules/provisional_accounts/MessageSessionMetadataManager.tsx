// === Module 17508: MessageSessionMetadataManager ===

// Module 17508 (MessageSessionMetadataManager)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
class MessageSessionMetadataManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(arg0) {
        return applyArgumentsResult.handleMessageCreate(arg0);
      },
      MESSAGE_UPDATE(arg0) {
        return applyArgumentsResult.handleMessageUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleMessageCreate(message) {
    const result = this._trackIfSessionMetadataExists(message.message);
  }
  handleMessageUpdate(message) {
    const result = this._trackIfSessionMetadataExists(message.message);
  }
  _getAuthorizedApplicationIds(session_metadata) {
    try {
      return session_metadata.authorized_application_ids;
    } catch (err) {
      return null;
    }
  }
  _trackIfSessionMetadataExists(message) {
    let author;
    let id;
    if (null != message.session_metadata) {
      const obj = { message_id: null, channel_id: null, author_id: id, authorized_application_ids: this._getAuthorizedApplicationIds(message.session_metadata) };
      ({ id: obj.message_id, channel_id: obj.channel_id, author } = message);
      id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const MESSAGE_DISPATCH_SESSION_METADATA_FOUND = AnalyticEvents.MESSAGE_DISPATCH_SESSION_METADATA_FOUND;
      AnalyticsUtilsDefault;
      if (author != null) {
        id = author.id;
      }
      const self = this;
      track(MESSAGE_DISPATCH_SESSION_METADATA_FOUND, obj);
    }
  }
}
const prototype = MessageSessionMetadataManager.prototype;
const messageSessionMetadataManager = new MessageSessionMetadataManager();
let result = size.fileFinishedImporting("modules/provisional_accounts/MessageSessionMetadataManager.tsx");

export default messageSessionMetadataManager;