// discord_app/modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx
import useGetDismissibleContent from "../useGetDismissibleContent.tsx";
import useSelectedDismissibleContentShared from "../useSelectedDismissibleContentShared.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = _slicedToArray(useGetDismissibleContent.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    flag,
  );
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(
  items4,
  id,
  CHANNEL_NOTICES,
) {
  if (flag === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = _slicedToArray(
    useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES),
    2,
  );
  const tmp = _slicedToArray(
    useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES),
    2,
  );
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    flag,
    id,
  );
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedVersionedDismissibleContent = function useSelectedVersionedDismissibleContent(
  COLLECTIBLES_SHOP_ENTRY_MARKETING,
  latestVersion,
  groupName,
) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = _slicedToArray(
    useGetDismissibleContent.useGetVersionedDismissibleContent(
      COLLECTIBLES_SHOP_ENTRY_MARKETING,
      latestVersion,
      groupName,
    ),
    2,
  );
  const tmp = _slicedToArray(
    useGetDismissibleContent.useGetVersionedDismissibleContent(
      COLLECTIBLES_SHOP_ENTRY_MARKETING,
      latestVersion,
      groupName,
    ),
    2,
  );
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    flag,
  );
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringDismissibleContent = function useSelectedTimeRecurringDismissibleContent(
  prop,
  timeRecurringConfig,
  groupName,
) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = _slicedToArray(
    useGetDismissibleContent.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName),
    2,
  );
  const tmp = _slicedToArray(
    useGetDismissibleContent.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName),
    2,
  );
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    flag,
  );
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundDismissibleContent = function useSelectedSnowflakeBoundDismissibleContent(
  prop,
  newSnowflakeId,
  groupName,
) {
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = _slicedToArray(
    useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName),
    2,
  );
  const tmp = _slicedToArray(
    useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName),
    2,
  );
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    flag,
  );
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent =
  function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, newSnowflakeId, GUILD_HEADER_TOOLTIPS) {
    if (flag === undefined) {
      flag = false;
    }
    [tmp2, tmp3] = _slicedToArray(
      useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(
        prop,
        newSnowflakeId,
        id,
        GUILD_HEADER_TOOLTIPS,
      ),
      2,
    );
    const tmp = _slicedToArray(
      useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(
        prop,
        newSnowflakeId,
        id,
        GUILD_HEADER_TOOLTIPS,
      ),
      2,
    );
    const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
      tmp2,
      tmp3,
      flag,
      id,
    );
    const items = [tmp2, tmp3];
    return items;
  };
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent =
  function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(
    contentType,
    newSnowflakeId,
    timeRecurringConfig,
    groupName,
  ) {
    let flag = bypassAutoDismiss;
    if (bypassAutoDismiss === undefined) {
      flag = false;
    }
    [tmp2, tmp3] = _slicedToArray(
      useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(
        contentType,
        timeRecurringConfig,
        newSnowflakeId,
        groupName,
      ),
      2,
    );
    const tmp = _slicedToArray(
      useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(
        contentType,
        timeRecurringConfig,
        newSnowflakeId,
        groupName,
      ),
      2,
    );
    const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
      tmp2,
      tmp3,
      flag,
    );
    const items = [tmp2, tmp3];
    return items;
  };
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(
  prop,
  id,
  cooldownDurationMs,
  GUILD_HEADER_TOOLTIPS,
) {
  [tmp2, tmp3] = _slicedToArray(
    useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(
      prop,
      id,
      cooldownDurationMs,
      GUILD_HEADER_TOOLTIPS,
    ),
    2,
  );
  const tmp = _slicedToArray(
    useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(
      prop,
      id,
      cooldownDurationMs,
      GUILD_HEADER_TOOLTIPS,
    ),
    2,
  );
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(
    tmp2,
    tmp3,
    false,
    id,
  );
  const items = [tmp2, tmp3];
  return items;
};
