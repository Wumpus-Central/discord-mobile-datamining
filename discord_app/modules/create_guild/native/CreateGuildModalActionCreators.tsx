// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NUFActionCreators from "../../nuf/native/NUFActionCreators.tsx";
import CreateGuildConstants from "CreateGuildConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    const obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, React4);
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
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, React4);
  },
  openGuildJoinServerScreen() {
    const obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, React4);
  },
};
