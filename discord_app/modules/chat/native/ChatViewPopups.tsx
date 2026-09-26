// === Module 12145: ChatViewPopups ===

// Module 12145 (ChatViewPopups)
import useIsHubRealNamePromptShowingDefault from "useIsHubRealNamePromptShowing" /* 12146 */;
import WelcomeScreenUtils from "WelcomeScreenUtils" /* 12150 */;
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "GuildDirectoryNicknameUpsellModalActionCreators" /* 12158 */;
import noop from "module_19" /* 19 */;

require = fn;
class ChatViewPopups {
  constructor(arg0) {
    guildId = global.guildId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_1 = closure_3.useRef(false);
    tmp = closure_1(closure_2[1])(guildId);
    closure_2 = tmp;
    obj = guildId(closure_2[2]);
    showWelcomeModal = obj.useShowWelcomeModal(guildId, global.channelId);
    closure_3 = showWelcomeModal;
    items = [, , ];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = closure_3.useEffect(() => {
      if (!ref.current) {
        if (closure_2) {
          const obj2 = {
            guildId,
            onHide() {
                  ref.current = false;
                  return false;
                }
          };
          GuildDirectoryNicknameUpsellModalActionCreatorsDefault.open(obj2);
          ref.current = true;
        } else if (showWelcomeModal) {
          const obj4 = {
            guildId,
            onHide() {
                  ref.current = false;
                  return false;
                }
          };
          const result = WelcomeScreenUtils.openWelcomeActionSheet(obj4);
          ref.current = true;
        }
      }
    }, items);
    return null;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default noop.memo(ChatViewPopups);
export { ChatViewPopups };