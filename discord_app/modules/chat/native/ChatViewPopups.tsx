// discord_app/modules/chat/native/ChatViewPopups.tsx
import useIsHubRealNamePromptShowingDefault from "../../hub/useIsHubRealNamePromptShowing.tsx";
import WelcomeScreenUtils from "../../../utils/native/WelcomeScreenUtils.tsx";
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "../../directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    items = [, ,];
    items[0] = guildId;
    items[1] = showWelcomeModal;
    items[2] = tmp;
    effect = closure_3.useEffect(() => {
      if (!ref.current) {
        if (closure_2) {
          let obj = {
            guildId,
            onHide() {
              ref.current = false;
              return false;
            },
          };
          GuildDirectoryNicknameUpsellModalActionCreatorsDefault.open(obj);
          tmp.current = true;
        } else if (showWelcomeModal) {
          obj = {
            guildId,
            onHide() {
              ref.current = false;
              return false;
            },
          };
          const result = obj.openWelcomeActionSheet(obj);
          tmp.current = true;
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
