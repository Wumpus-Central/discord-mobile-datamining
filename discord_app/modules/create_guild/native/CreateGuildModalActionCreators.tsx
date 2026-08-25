// === Module 12264: ? ===

// Module 12264
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12260 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 8662 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4611;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12265, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4611.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4611.popWithKey(closure_4);
    const obj = _modDef4611;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4611;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12265, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4611;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12265, dependencyMap.paths), obj, closure_4);
  }
};