// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = require("../../../actions/ModalActionCreators.tsx");
    obj = { onSuccess };
    obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(closure_4);
    const obj = require("../../../actions/ModalActionCreators.tsx");
    require("../../nuf/native/NUFActionCreators.tsx") /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = require("../../../actions/ModalActionCreators.tsx");
    obj = { channel };
    obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = require("../../../actions/ModalActionCreators.tsx");
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  }
};