// discord_app/modules/create_guild/native/CreateGuildModalActionCreators.tsx
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability" /* 11877 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 8617 */;

({ CreateGuildModalStates: c3, IN_APP_GUILD_TEMPLATES_MODAL_KEY: c4 } = NUXGuildTemplatesAnalytics);
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildModalActionCreators.tsx");

export default {
  openCreateGuildModal(onSuccess) {
    let obj = _modDef5260;
    obj = { onSuccess };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  },
  closeCreateGuildModal() {
    _modDef5260.popWithKey(closure_4);
  },
  closeCreateGuildOnboardingModal() {
    _modDef5260.popWithKey(closure_4);
    const obj = _modDef5260;
    _startContactSyncForDiscoverability.nextOnboardingStep({});
  },
  openGuildInviteScreen(channel) {
    let obj = _modDef5260;
    obj = { channel };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  },
  openGuildJoinServerScreen() {
    let obj = _modDef5260;
    obj = { initialState: constants.JOIN_SERVER };
    obj.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), obj, closure_4);
  }
};