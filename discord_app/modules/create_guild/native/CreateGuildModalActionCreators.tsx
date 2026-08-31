// === Module 12213: ? ===

// Module 12213
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12209 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7721 */;

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