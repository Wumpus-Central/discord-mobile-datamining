// === Module 12482: ? ===

// Module 12482
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12478 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7765 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4724;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12483, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4724.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4724.popWithKey(closure_4);
    const obj = _modDef4724;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4724;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12483, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4724;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12483, dependencyMap.paths), obj, closure_4);
  }
};