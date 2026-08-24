// === Module 11930: ? ===

// Module 11930
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 11926 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 8654 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef5265;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(11931, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef5265.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef5265.popWithKey(closure_4);
    const obj = _modDef5265;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef5265;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(11931, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef5265;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(11931, dependencyMap.paths), obj, closure_4);
  }
};