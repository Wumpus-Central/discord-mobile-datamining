// === Module 12179: ? ===

// Module 12179
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12175 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7700 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4689;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12180, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4689.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4689.popWithKey(closure_4);
    const obj = _modDef4689;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4689;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12180, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4689;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12180, dependencyMap.paths), obj, closure_4);
  }
};