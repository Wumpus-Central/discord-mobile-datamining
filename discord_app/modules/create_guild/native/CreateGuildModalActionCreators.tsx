// === Module 12160: ? ===

// Module 12160
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12156 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7686 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4676;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12161, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4676.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4676.popWithKey(closure_4);
    const obj = _modDef4676;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4676;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12161, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4676;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12161, dependencyMap.paths), obj, closure_4);
  }
};