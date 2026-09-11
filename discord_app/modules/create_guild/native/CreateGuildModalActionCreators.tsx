// === Module 12801: CreateGuildModalActionCreators ===

// Module 12801 (CreateGuildModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import NUFActionCreators from "NUFActionCreators" /* 12797 */;
import CreateGuildConstants from "CreateGuildConstants" /* 7051 */;
import size from "module_2" /* 2 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    const obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12802, dependencyMap.paths), obj, React4);
  },
  closeCreateGuildModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
  },
  closeCreateGuildOnboardingModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
    NUFActionCreators.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    const obj = { channel };
    obj.pushLazy(asyncRequireImpl(12802, dependencyMap.paths), obj, React4);
  },
  openGuildJoinServerScreen() {
    const obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12802, dependencyMap.paths), obj, React4);
  }
};