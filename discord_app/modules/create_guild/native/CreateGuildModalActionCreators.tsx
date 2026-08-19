// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import _startContactSyncForDiscoverability from "../../nuf/native/NUFActionCreators.tsx";
import NUXGuildTemplatesAnalytics from "CreateGuildConstants.tsx";

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = obj132.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    const obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef5260.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef5260.popWithKey(closure_4);
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    const obj = { channel };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    const obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  }
};