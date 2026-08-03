// === Module 5921: useSelectedDismissibleContent ===

// Module 5921 (useSelectedDismissibleContent)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("useSelectedDismissibleContentShared").fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(items4, id, CHANNEL_NOTICES, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedVersionedDismissibleContent = function useSelectedVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringDismissibleContent = function useSelectedTimeRecurringDismissibleContent(prop, closure_12, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringDismissibleContent(prop, closure_12, groupName), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringDismissibleContent(prop, closure_12, groupName), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundDismissibleContent = function useSelectedSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, arg2, arg3, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, arg2, id, arg3), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, arg2, id, arg3), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, id, closure_17, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = require(5922) /* canShowTimeRecurringContent */;
  [tmp2, tmp3] = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(require(5922) /* canShowTimeRecurringContent */.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_17, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = require(5924) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
};