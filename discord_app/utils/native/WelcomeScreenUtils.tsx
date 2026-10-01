// discord_app/utils/native/WelcomeScreenUtils.tsx
import asyncRequireImpl from "../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import WelcomeScreenActionCreators from "../../modules/welcome_screen/WelcomeScreenActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import WelcomeScreenStore from "../../modules/welcome_screen/WelcomeScreenStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(12364).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = require("../../../_runtime/metro/04695__.js").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj = require("../../../_runtime/metro/04695__.js");
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
  obj.openLazy(asyncRequireImpl(12367, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, {
    guildId,
    onHide: onHide.onHide,
  });
};
