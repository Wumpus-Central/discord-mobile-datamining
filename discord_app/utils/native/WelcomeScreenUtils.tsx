// === Module 11863: useShowWelcomeModal ===

// Module 11863 (useShowWelcomeModal)
import noop from "noop";
import handleInviteData from "handleInviteData";
import { NO_WELCOME_SCREEN } from "handleInviteData";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "r" };
const result = require("comparator").fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  const _require = guildId;
  const importDefault = channelId;
  welcomeModalChannelId = _require(welcomeModalChannelId[4]).useLocation().welcomeModalChannelId;
  const React = importDefault(welcomeModalChannelId[5])(channelId, guildId);
  let obj = _require(welcomeModalChannelId[4]);
  const items = [createGuildRecordFromRust, shouldFetchGuildId, comparator];
  const stateFromStoresObject = _require(welcomeModalChannelId[6]).useStateFromStoresObject(items, () => {
    if (noop) {
      const guild = outer1_7.getGuild(closure_0);
      const selectableChannelIds = outer1_6.getSelectableChannelIds(closure_0);
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
        tmp14 = value !== outer1_5;
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
      return outer1_8;
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
  const obj = importDefault(4223);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11867, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};