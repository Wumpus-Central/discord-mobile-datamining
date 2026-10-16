// === Module 13300: CreateGuildModalActionCreators ===

// Module 13300 (CreateGuildModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import NUFActionCreators from "NUFActionCreators" /* 13296 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6884 */;
import size from "module_2" /* 2 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13301, dependencyMap.paths), { onSuccess }, React4);
  },
  closeCreateGuildModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
  },
  closeCreateGuildOnboardingModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
    NUFActionCreators.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13301, dependencyMap.paths), { channel }, React4);
  },
  openGuildJoinServerScreen() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13301, dependencyMap.paths), { initialState: constants.JOIN_SERVER }, React4);
  }
};