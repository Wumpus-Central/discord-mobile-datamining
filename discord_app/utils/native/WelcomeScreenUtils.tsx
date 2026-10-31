// === Module 14215: WelcomeScreenUtils ===

// Module 14215 (WelcomeScreenUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 14218 */;
import noop from "module_19" /* 19 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 14216 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(14216).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export function useShowWelcomeModal(guildId, channelId) {
  _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = require("module_5056").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj = require("module_5056");
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
}
export function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(14219, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
}