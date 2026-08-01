// === Module 11756: ChatViewPopups ===

// Module 11756 (ChatViewPopups)
import importAllResult from "noop";

const require = arg1;
class ChatViewPopups {
  constructor(arg0) {
    guildId = global.guildId;
    useRef = undefined;
    c2 = undefined;
    channelId = undefined;
    useRef = channelId.useRef(false);
    tmp = require("useIsHubRealNamePromptShowing")(guildId);
    c2 = tmp;
    obj = require("useShowWelcomeModal");
    showWelcomeModal = obj.useShowWelcomeModal(guildId, global.channelId);
    channelId = showWelcomeModal;
    items = [, , ];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = channelId.useEffect(() => {
      if (!ref.current) {
        if (_undefined) {
          let obj = { guildId: null, onHide: null };
          obj[0] = guildId;
          obj[1] = function onHide() {
            closure_1.current = false;
            return false;
          };
          ref(_undefined[3]).open(obj);
          tmp.current = true;
          const obj3 = ref(_undefined[3]);
        } else if (showWelcomeModal) {
          obj = guildId(_undefined[2]);
          obj = { guildId: null, onHide: null };
          obj[0] = guildId;
          obj[1] = function onHide() {
            closure_1.current = false;
            return false;
          };
          const result = obj.openWelcomeActionSheet(obj);
          tmp.current = true;
        }
      }
    }, items);
    return null;
  }
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(ChatViewPopups);
let result = require("useShowWelcomeModal").fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };