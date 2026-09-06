// discord_app/modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import useGuildScheduledEventsDefault from "../../useGuildScheduledEvents.tsx";
import GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const ReadStateTypes = fn(4742).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  _require = id;
  let obj = require("initialize");
  const items = [ReadStateStore];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => ({
      hasUnread: ReadStateStore.hasUnread(user.id, ReadStateTypes.GUILD_EVENT),
      mentionCount: ReadStateStore.getMentionCount(user.id, ReadStateTypes.GUILD_EVENT),
    }),
    items1,
  );
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [UserGuildSettingsStore];
  const eventsMuted = require("initialize").useStateFromStores(items2, () =>
    UserGuildSettingsStore.isMuteScheduledEventsEnabled(user.id),
  );
  const arr4 = useGuildScheduledEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = noop.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(user.id)) {
      let tmpResult = MemberVerificationModalActionCreators;
      let result = tmpResult.openMemberVerificationModal(user.id);
    } else {
      tmpResult = GuildScheduledEventModalActionCreators;
      result = tmpResult.openGuildEventListActionSheet(user);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = { guildId: user.id };
    obj.openLazy(asyncRequireImpl(12375, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, obj);
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1114).intl;
    obj = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1114).t.IBdqSu, obj);
  } else {
    const intl = tmp(1114).intl;
    name = intl.string(tmp(1114).t.tlopTM);
  }
  let mode = tmp(12379).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12379).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
}
