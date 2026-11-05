// === Module 7711: useSelectedDismissibleContent ===

// Module 7711 (useSelectedDismissibleContent)
import useGetDismissibleContent from "useGetDismissibleContent" /* 7712 */;
import DismissibleContentScope from "DismissibleContentScope" /* 7714 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 7717 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export function useSelectedScopedDismissibleContent(items1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  const scopedDismissibleContentSelection = useGetDismissibleContent.useScopedDismissibleContentSelection(items1, groupName);
  ({ visibleContent, markAsDismissed } = scopedDismissibleContentSelection);
  let candidate = null;
  if (null != visibleContent) {
    candidate = scopedDismissibleContentSelection.candidate;
  }
  let guildId;
  if (null != candidate) {
    guildId = DismissibleContentScope.getDismissibleContentShowing(candidate).guildId;
    const tmpResult2 = DismissibleContentScope;
  }
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(visibleContent, markAsDismissed, bypassAutoDismiss, guildId);
  items = [visibleContent, markAsDismissed];
  return items;
}
export function useSelectedDismissibleContent(items, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  const flatMapResult = items.flatMap((item) => {
    let result = DismissibleContentScope.scopeDismissibleContentEntry(item);
    if (result == null) {
      result = [];
    }
    return result;
  });
  const scopedDismissibleContentSelection = useGetDismissibleContent.useScopedDismissibleContentSelection(flatMapResult, groupName);
  ({ visibleContent, markAsDismissed } = scopedDismissibleContentSelection);
  let candidate = null;
  if (null != visibleContent) {
    candidate = scopedDismissibleContentSelection.candidate;
  }
  let guildId;
  if (null != candidate) {
    guildId = DismissibleContentScope.getDismissibleContentShowing(candidate).guildId;
    const tmp2Result2 = DismissibleContentScope;
  }
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(visibleContent, markAsDismissed, bypassAutoDismiss, guildId);
  items = [visibleContent, markAsDismissed];
  const tmp2Result = useSelectedDismissibleContentShared;
  const items1 = [, ];
  [arr2[0], arr2[1]] = items;
  return items1;
}
export function useSelectedSingleUseGuildDismissibleContent(items4, id, CHANNEL_NOTICES) {
  if (flag === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedSnowflakeBoundGuildDismissibleContent(content, guildId, snowflakeId, groupName) {
  if (flag === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, guildId);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedTimeRecurringGuildDismissibleContent(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS) {
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  items = [tmp2, tmp3];
  return items;
}