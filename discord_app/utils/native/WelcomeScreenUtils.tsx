// === Module 12363: WelcomeScreenUtils ===

// Module 12363 (WelcomeScreenUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12366 */;
import noop from "module_19" /* 19 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12364 */;
import GuildChannelStore from "GuildChannelStore" /* 4496 */;
import GuildStore from "GuildStore" /* 2066 */;

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(12364).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = require("module_4695").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj = require("module_4695");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (closure_3) {
      if (!WelcomeScreenStore.hasSeen(closure_0)) {
        if (welcomeModalChannelId === closure_1) {
          const guild = GuildStore.getGuild(closure_0);
          value = WelcomeScreenStore.get(closure_0);
          let tmp5 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          if (tmp5) {
            tmp5 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp5) {
            tmp5 = !isFetchingResult;
          }
          if (tmp5) {
            tmp5 = !hasErrorResult;
          }
          if (tmp5) {
            tmp5 = GuildChannelStore.getSelectableChannelIds(closure_0).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp5, shouldFetchGuildId: null };
          let id;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
          obj2.shouldFetchGuildId = id;
          return obj2;
        }
      }
    }
    return closure_8;
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = noop.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = WelcomeScreenActionCreators.fetchWelcomeScreen(tmp);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
};
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12367, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};