// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { _startContactSyncForDiscoverability } from "../../nuf/native/NUFActionCreators.tsx";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = ModalActionCreators;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12124, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    ModalActionCreators.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    ModalActionCreators.popWithKey(closure_4);
    const obj = ModalActionCreators;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = ModalActionCreators;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12124, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = ModalActionCreators;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12124, dependencyMap.paths), obj, closure_4);
  }
};