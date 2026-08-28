// discord_app/modules/chat/native/ChatViewPopups.tsx
import useIsHubRealNamePromptShowingDefault from "../../hub/useIsHubRealNamePromptShowing.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = arg1;
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
          ref(12132).open(obj);
          tmp.current = true;
          const obj3 = ref(12132);
        } else if (showWelcomeModal) {
          obj = guildId(12124);
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
let result = require("set").fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export { ChatViewPopups };