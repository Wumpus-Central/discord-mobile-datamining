// discord_app/utils/native/WelcomeScreenUtils.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import WelcomeScreenActionCreators from "../../modules/welcome_screen/WelcomeScreenActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import WelcomeScreenStore from "../../modules/welcome_screen/WelcomeScreenStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
const NO_WELCOME_SCREEN = fn(12654).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "PX_16" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = require("../../../_runtime/metro/04392__.js").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj = require("../../../_runtime/metro/04392__.js");
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
  obj.openLazy(asyncRequireImpl(12657, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, {
    guildId,
    onHide: onHide.onHide,
  });
};
