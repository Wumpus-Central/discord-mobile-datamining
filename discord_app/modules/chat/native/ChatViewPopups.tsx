// discord_app/modules/chat/native/ChatViewPopups.tsx
import useIsHubRealNamePromptShowingDefault from "../../hub/useIsHubRealNamePromptShowing.tsx";
import WelcomeScreenUtils from "../../../utils/native/WelcomeScreenUtils.tsx";
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "../../directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatViewPopups(guildId) {
      const cResult = guildId(576).c(5);
      guildId = guildId.guildId;
      importDefault = showWelcomeModal.useRef(false);
      const tmp2 = useIsHubRealNamePromptShowingDefault(guildId);
      dependencyMap = tmp2;
      let obj = guildId(576);
      let obj2 = showWelcomeModal;
      showWelcomeModal = guildId(12559).useShowWelcomeModal(guildId, guildId.channelId);
      if (cResult[0] === guildId) {
        if (cResult[1] === tmp2) {
          if (cResult[2] === showWelcomeModal) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = obj2.useEffect(tmp4, tmp5);
          return null;
        }
      }
      const fn = function t() {
        if (!ref.current) {
          if (closure_2) {
            const obj2 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            GuildDirectoryNicknameUpsellModalActionCreatorsDefault.open(obj2);
            ref.current = true;
          } else if (showWelcomeModal) {
            const obj4 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            const result = WelcomeScreenUtils.openWelcomeActionSheet(obj4);
            ref.current = true;
          }
        }
      };
      const items = [guildId, showWelcomeModal, tmp2];
      cResult[0] = guildId;
      cResult[1] = tmp2;
      cResult[2] = showWelcomeModal;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : function ChatViewPopups(guildId) {
      guildId = guildId.guildId;
      let showWelcomeModal;
      importDefault = showWelcomeModal.useRef(false);
      const tmp = useIsHubRealNamePromptShowingDefault(guildId);
      dependencyMap = tmp;
      showWelcomeModal = guildId(12559).useShowWelcomeModal(guildId, guildId.channelId);
      const items = [guildId, showWelcomeModal, tmp];
      const effect = showWelcomeModal.useEffect(() => {
        if (!ref.current) {
          if (closure_2) {
            const obj2 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            GuildDirectoryNicknameUpsellModalActionCreatorsDefault.open(obj2);
            ref.current = true;
          } else if (showWelcomeModal) {
            const obj4 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            const result = WelcomeScreenUtils.openWelcomeActionSheet(obj4);
            ref.current = true;
          }
        }
      }, items);
      return null;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default noop.memo(tmp2);
export const ChatViewPopups = tmp2;
