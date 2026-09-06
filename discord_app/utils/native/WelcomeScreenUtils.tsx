// discord_app/utils/native/WelcomeScreenUtils.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../modules/welcome_screen/WelcomeScreenStore.tsx";
import { NO_WELCOME_SCREEN } from "../../modules/welcome_screen/WelcomeScreenStore.tsx";
import closure_6 from "../../stores/GuildChannelStore.tsx";
import closure_7 from "../../stores/GuildStore.tsx";

require = arg1;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "PX_16" };
const result = require("set").fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  const _require = guildId;
  importDefault = channelId;
  welcomeModalChannelId = _require(welcomeModalChannelId[4]).useLocation().welcomeModalChannelId;
  const React = importDefault(welcomeModalChannelId[5])(channelId, guildId);
  let obj = _require(welcomeModalChannelId[4]);
  const items = [closure_7, shouldFetchGuildId, closure_6];
  const stateFromStoresObject = _require(welcomeModalChannelId[6]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      const guild = closure_1_7.getGuild(closure_0);
      const selectableChannelIds = closure_1_6.getSelectableChannelIds(closure_0);
      const value = shouldFetchGuildId.get(closure_0);
      const hasSeenResult = shouldFetchGuildId.hasSeen(closure_0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = shouldFetchGuildId.hasError();
      if (!hasSeenResult) {
        tmp11 = welcomeModalChannelId === closure_1;
      }
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== closure_1_5;
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
      const obj = { welcomeScreenModalVisible: null, shouldFetchGuildId: null };
      obj[0] = tmp14;
      let id;
      if (tmp11) {
        if (null == value) {
          if (null != guild) {
            id = guild.id;
          }
        }
      }
      obj[1] = id;
      return obj;
    } else {
      return closure_1_8;
    }
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = React.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = guildId(welcomeModalChannelId[7]).fetchWelcomeScreen(tmp);
      const obj = guildId(welcomeModalChannelId[7]);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
};
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12657, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, {
    guildId,
    onHide: onHide.onHide,
  });
};
