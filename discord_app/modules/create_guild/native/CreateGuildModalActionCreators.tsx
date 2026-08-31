// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4691 from "../../../actions/ModalActionCreators.tsx";
import _startContactSyncForDiscoverability from "../../nuf/native/NUFActionCreators.tsx";
import NUXGuildTemplatesAnalytics from "CreateGuildConstants.tsx";

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4691;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12214, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4691.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4691.popWithKey(closure_4);
    const obj = _modDef4691;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4691;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12214, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4691;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12214, dependencyMap.paths), obj, closure_4);
  }
};