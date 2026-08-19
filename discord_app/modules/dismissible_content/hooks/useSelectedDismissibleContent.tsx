// === Module 7366: useSelectedDismissibleContent ===

// Module 7366 (useSelectedDismissibleContent)
import canShowTimeRecurringContent from "canShowTimeRecurringContent" /* 7367 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 7369 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(items4, id, CHANNEL_NOTICES, flag) {
  if (flag === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedVersionedDismissibleContent = function useSelectedVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringDismissibleContent = function useSelectedTimeRecurringDismissibleContent(prop, closure_12, groupName, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetTimeRecurringDismissibleContent(prop, closure_12, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetTimeRecurringDismissibleContent(prop, closure_12, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundDismissibleContent = function useSelectedSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(closure_0, closure_14, arg2, arg3, flag) {
  if (flag === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(closure_0, arg2, closure_14, arg3), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(closure_0, arg2, closure_14, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, closure_14);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, closure_14, closure_17, GUILD_HEADER_TOOLTIPS) {
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, closure_14, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, closure_14, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, false, closure_14);
  const items = [tmp2, tmp3];
  return items;
};