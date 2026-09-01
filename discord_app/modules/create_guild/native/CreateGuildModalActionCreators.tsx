// === Module 12246: ? ===

// Module 12246
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12242 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7753 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4723;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12247, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4723.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4723.popWithKey(closure_4);
    const obj = _modDef4723;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4723;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12247, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4723;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12247, dependencyMap.paths), obj, closure_4);
  }
};