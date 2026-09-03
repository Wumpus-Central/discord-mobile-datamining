// === Module 12427: useShowWelcomeModal ===

// Module 12427 (useShowWelcomeModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleInviteData" /* 12428 */;
import { NO_WELCOME_SCREEN } from "handleInviteData" /* 12428 */;
import closure_6 from "comparator" /* 1981 */;
import closure_7 from "createGuildRecordFromRust" /* 1908 */;

require = arg1;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "r" };
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
  obj.openLazy(asyncRequireImpl(12431, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};