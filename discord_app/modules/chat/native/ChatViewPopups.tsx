// === Module 11821: ChatViewPopups ===

// Module 11821 (ChatViewPopups)
import useIsHubRealNamePromptShowingDefault from "useIsHubRealNamePromptShowing" /* 11822 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
class ChatViewPopups {
  constructor(arg0) {
    guildId = global.guildId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_1 = closure_3.useRef(false);
    tmp = require("useIsHubRealNamePromptShowing")(guildId);
    closure_2 = tmp;
    obj = require("useShowWelcomeModal");
    showWelcomeModal = obj.useShowWelcomeModal(guildId, global.channelId);
    closure_3 = showWelcomeModal;
    items = [, , ];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = closure_3.useEffect(() => {
      if (!ref.current) {
        if (dependencyMap) {
          let obj = { guildId: null, onHide: null };
          obj[0] = guildId;
          obj[1] = function onHide() {
            closure_1.current = false;
            return false;
          };
          ref(11834).open(obj);
          ref.current = true;
          const obj3 = ref(11834);
        } else if (showWelcomeModal) {
          guildId(11826);
          obj = { guildId: null, onHide: null };
          obj[0] = guildId;
          obj[1] = function onHide() {
            closure_1.current = false;
            return false;
          };
          const result = obj.openWelcomeActionSheet(obj);
          ref.current = true;
        }
      }
    }, items);
    return null;
  }
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(ChatViewPopups);
let result = require("obj132").fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };