// === Module 13163: useEventsButtonProps ===

// Module 13163 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6905 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8322 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8332 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6041 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(6042).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  _require = id;
  items = [ReadStateStore];
  const items1 = [id.id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ hasUnread: ReadStateStore.hasUnread(user.id, ReadStateTypes.GUILD_EVENT), mentionCount: ReadStateStore.getMentionCount(user.id, ReadStateTypes.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  let obj = require("initialize");
  const items2 = [UserGuildSettingsStore];
  const eventsMuted = require("initialize").useStateFromStores(items2, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(user.id));
  const arr4 = useGuildScheduledEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = noop.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(user.id)) {
      let result = MemberVerificationModalActionCreators.openMemberVerificationModal(user.id);
      const tmpResult = MemberVerificationModalActionCreators;
    } else {
      result = GuildScheduledEventModalActionCreators.openGuildEventListActionSheet(user);
      const tmpResult2 = GuildScheduledEventModalActionCreators;
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(13164, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1112).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1112).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1112).intl;
    name = intl.string(tmp(1112).t.tlopTM);
  }
  let mode = tmp(13168).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(13168).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};