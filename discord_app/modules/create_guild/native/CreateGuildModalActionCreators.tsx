// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";

let c3;
let c4;
({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = require("CreateGuildModal").fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = importDefault(4490);
    obj = { onSuccess };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    importDefault(4490).popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    importDefault(4490).popWithKey(closure_4);
    const obj = importDefault(4490);
    require(11971) /* _startContactSyncForDiscoverability */.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = importDefault(4490);
    obj = { channel };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = importDefault(4490);
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(11976, dependencyMap.paths), obj, closure_4);
  }
};