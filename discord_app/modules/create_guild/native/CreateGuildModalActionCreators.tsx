// === Module 12708: ? ===

// Module 12708
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 12704 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 6980 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef4763;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef4763.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef4763.popWithKey(closure_4);
    const obj = _modDef4763;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef4763;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef4763;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(12709, dependencyMap.paths), obj, closure_4);
  }
};