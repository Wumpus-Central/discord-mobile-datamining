// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NUFActionCreators from "../../nuf/native/NUFActionCreators.tsx";
import CreateGuildConstants from "CreateGuildConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: closure_4 } = CreateGuildConstants);
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12206, dependencyMap.paths), { onSuccess }, React4);
  },
  closeCreateGuildModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
  },
  closeCreateGuildOnboardingModal() {
    ModalActionCreatorsDefault.popWithKey(React4);
    NUFActionCreators.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12206, dependencyMap.paths), { channel }, React4);
  },
  openGuildJoinServerScreen() {
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(12206, dependencyMap.paths),
      { initialState: constants.JOIN_SERVER },
      React4,
    );
  },
};
