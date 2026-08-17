// discord_app/modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx
import canShowTimeRecurringContent from "canShowTimeRecurringContent" /* 7367 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 7369 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = canShowTimeRecurringContent;
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
  const obj = canShowTimeRecurringContent;
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
  const obj = canShowTimeRecurringContent;
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
  const obj = canShowTimeRecurringContent;
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
  const obj = canShowTimeRecurringContent;
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, arg2, arg3, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const obj = canShowTimeRecurringContent;
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, arg2, id, arg3), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, arg2, id, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = canShowTimeRecurringContent;
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, id, closure_17, GUILD_HEADER_TOOLTIPS) {
  const obj = canShowTimeRecurringContent;
  [tmp2, tmp3] = callback(canShowTimeRecurringContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(canShowTimeRecurringContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
};