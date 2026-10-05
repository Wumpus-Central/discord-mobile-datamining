// discord_app/modules/chat/native/ChatViewPopups.tsx
import useIsHubRealNamePromptShowingDefault from "../../hub/useIsHubRealNamePromptShowing.tsx";
import WelcomeScreenUtils from "../../../utils/native/WelcomeScreenUtils.tsx";
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "../../directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, guildId, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_2;
      let ref;
      let showWelcomeModal;
      let obj = guildId(576);
      const cResult = obj.c(5);
      guildId = guildId.guildId;
      let obj2 = showWelcomeModal;
      const channelId = guildId.channelId;
      importDefault = showWelcomeModal.useRef(false);
      const tmp2 = useIsHubRealNamePromptShowingDefault(guildId);
      dependencyMap = tmp2;
      let obj3 = guildId(12448);
      showWelcomeModal = obj3.useShowWelcomeModal(guildId, channelId);
      if (cResult[0] === guildId) {
        if (cResult[1] === tmp2) {
          let tmp4;
          let tmp5;
          if (cResult[2] === showWelcomeModal) {
            tmp4 = cResult[3];
            tmp5 = cResult[4];
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
            const obj3 = GuildDirectoryNicknameUpsellModalActionCreatorsDefault;
            obj3.open(obj2);
            ref.current = true;
          } else if (showWelcomeModal) {
            const obj4 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            const obj = WelcomeScreenUtils;
            const result = obj.openWelcomeActionSheet(obj4);
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
  : (guildId) => {
      let closure_2;
      let ref;
      guildId = guildId.guildId;
      let showWelcomeModal;
      const channelId = guildId.channelId;
      importDefault = showWelcomeModal.useRef(false);
      const tmp = useIsHubRealNamePromptShowingDefault(guildId);
      dependencyMap = tmp;
      let obj = guildId(12448);
      showWelcomeModal = obj.useShowWelcomeModal(guildId, channelId);
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
            const obj3 = GuildDirectoryNicknameUpsellModalActionCreatorsDefault;
            obj3.open(obj2);
            ref.current = true;
          } else if (showWelcomeModal) {
            const obj4 = {
              guildId,
              onHide() {
                ref.current = false;
                return false;
              },
            };
            const obj = WelcomeScreenUtils;
            const result = obj.openWelcomeActionSheet(obj4);
            ref.current = true;
          }
        }
      }, items);
      return null;
    };
const memoResult = react.memo(tmp2);
let result = size.fileFinishedImporting("modules/chat/native/ChatViewPopups.tsx");

export default memoResult;
export const ChatViewPopups = tmp2;
