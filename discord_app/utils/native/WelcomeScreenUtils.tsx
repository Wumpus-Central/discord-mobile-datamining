// === Module 12653: WelcomeScreenUtils ===

// Module 12653 (WelcomeScreenUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12656 */;
import noop from "module_19" /* 19 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12654 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const NO_WELCOME_SCREEN = fn(12654).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "PX_16" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = require("module_4392").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj = require("module_4392");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (closure_3) {
      const guild = GuildStore.getGuild(closure_0);
      const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(closure_0);
      value = WelcomeScreenStore.get(closure_0);
      const hasSeenResult = WelcomeScreenStore.hasSeen(closure_0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = WelcomeScreenStore.hasError();
      if (!hasSeenResult) {
        tmp11 = welcomeModalChannelId === closure_1;
      }
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== NO_WELCOME_SCREEN;
      }
      if (tmp14) {
        tmp14 = !isFetchingResult;
      }
      if (tmp14) {
        tmp14 = !hasErrorResult;
      }
      if (tmp14) {
        tmp14 = selectableChannelIds.length > 0;
      }
      const obj = { welcomeScreenModalVisible: tmp14, shouldFetchGuildId: null };
      let id;
      if (tmp11) {
        if (null == value) {
          if (null != guild) {
            id = guild.id;
          }
        }
      }
      obj.shouldFetchGuildId = id;
      return obj;
    } else {
      return closure_8;
    }
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
  obj.openLazy(asyncRequireImpl(12657, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};