// === Module 12043: useCanShowAppLauncherOnboarding ===

// Module 12043 (useCanShowAppLauncherOnboarding)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1090 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import UserStore from "UserStore" /* 1371 */;
import AppLauncherOnboardingPersistedStore from "AppLauncherOnboardingPersistedStore" /* 12044 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 12045 */;

const require = fn;
const BuiltInSectionId = fn(4999).BuiltInSectionId;
let result = 5 * DurationsDefault.Millis.SECOND;
let c10 = result;
let closure_11 = 5 * DurationsDefault.Millis.SECOND;
let closure_12 = 14 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  channelId = channelId.channelId;
  const timestamp = Date.now();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp2Result = tmp2(504);
  const items1 = [UserStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let createdAt;
  if (stateFromStores1 != null) {
    createdAt = stateFromStores1.createdAt;
  }
  let tmp8 = null != createdAt;
  if (tmp8) {
    const _Date = Date;
    const timestamp1 = Date.now();
    tmp8 = timestamp1 < SnowflakeUtilsDefault.extractTimestamp(stateFromStores1.id) + closure_12;
  }
  closure_129_0 = guild_id;
  tmp2Result = tmp2(504);
  const items2 = [GuildMemberCountStore];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(channelId));
  let tmp13 = null != stateFromStores2;
  if (tmp13) {
    tmp13 = stateFromStores2 < 200;
  }
  const items3 = [AppLauncherOnboardingPersistedStore];
  const stateFromStores3 = channelId(504).useStateFromStores(items3, () => AppLauncherOnboardingPersistedStore.getLastSeenTimeMs());
  let tmp16 = null != stateFromStores3;
  if (tmp16) {
    tmp16 = timestamp < stateFromStores3 + HOUR;
  }
  const items4 = [];
  if (!tmp16) {
    items4.push(tmp2(1943).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  const tmp14 = AppLauncherOnboardingPersistedStore;
  const tmp2Result1 = channelId(504);
  const tmp2Result2 = channelId(7388);
  const items5 = [AppLauncherOnboardingStore];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items5, () => ({ recentMessageMetadata: AppLauncherOnboardingStore.getRecentMessageMetadata(), recentApplicationCommandMetadata: AppLauncherOnboardingStore.getRecentApplicationCommandMetadata() }));
  ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
  const tmp2Result3 = channelId(504);
  const items6 = [tmp14];
  const stateFromStores4 = channelId(504).useStateFromStores(items6, () => AppLauncherOnboardingPersistedStore.getTriggeredOnboardingContentMetadata());
  let tmp21 = null != recentMessageMetadata;
  if (tmp21) {
    tmp21 = timestamp < recentMessageMetadata.timeMs + closure_10;
  }
  if (tmp21) {
    channelId = undefined;
    if (recentMessageMetadata != null) {
      channelId = recentMessageMetadata.channelId;
    }
    tmp21 = channelId === channelId;
  }
  let tmp24 = null != recentApplicationCommandMetadata;
  if (tmp24) {
    tmp24 = timestamp < recentApplicationCommandMetadata.timeMs + closure_11;
  }
  if (tmp24) {
    let channelId1;
    if (recentApplicationCommandMetadata != null) {
      channelId1 = recentApplicationCommandMetadata.channelId;
    }
    tmp24 = channelId1 === channelId;
  }
  if (recentApplicationCommandMetadata != null) {
    const applicationId = recentApplicationCommandMetadata.applicationId;
  }
  const tmp2Result4 = channelId(504);
  result = channelId(4380).useIsDismissibleContentDismissed_UNSAFE(tmp2(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const tmp2Result5 = channelId(4380);
  let result1 = channelId(4380).useIsDismissibleContentDismissed_UNSAFE(tmp2(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const tmp2Result6 = channelId(4380);
  let tmp30 = null != stateFromStores4;
  const result2 = channelId(4380).useIsDismissibleContentDismissed_UNSAFE(tmp2(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
  if (tmp30) {
    tmp30 = stateFromStores4.channelId === channelId;
  }
  if (tmp30) {
    tmp30 = stateFromStores4.timeMs + DAY > timestamp;
  }
  obj = { canShowOnboarding: false, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, fromTriggeredOnboarding: false };
  if (null != stateFromStores) {
    let tmp32 = !tmp24;
    if (tmp24) {
      tmp32 = applicationId === BuiltInSectionId.BUILT_IN;
    }
    if (!tmp32) {
      tmp32 = result;
    }
    if (!tmp32) {
      tmp32 = tmp16;
    }
    if (!tmp32) {
      obj.canShowOnboarding = true;
      obj.canShowBotsBanner = true;
    }
    if (!tmp8) {
      tmp8 = !tmp21;
    }
    if (!tmp8) {
      tmp8 = !tmp13;
    }
    if (!tmp8) {
      tmp8 = tmp16;
    }
    if (!tmp8) {
      if (result1) {
        result1 = result2;
      }
      tmp8 = result1;
    }
    if (!tmp8) {
      obj.canShowOnboarding = true;
      obj.canShowAppsOrActivitiesBanner = true;
    }
    if (_slicedToArray(tmp2Result2.useSelectedDismissibleContent(items4), 1)[0] === tmp2(1943).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING) {
      obj.willShowGlobalSearchOnboarding = true;
      obj.canShowOnboarding = true;
    }
    const canShowOnboarding = obj.canShowOnboarding;
    let tmp33 = !canShowOnboarding;
    if (!canShowOnboarding) {
      tmp33 = tmp30;
    }
    if (tmp33) {
      obj.canShowOnboarding = true;
      ({ canShowBotsBanner: obj12.canShowBotsBanner, canShowAppsOrActivitiesBanner: obj12.canShowAppsOrActivitiesBanner, willShowGlobalSearchOnboarding: obj12.willShowGlobalSearchOnboarding } = stateFromStores4);
      obj.fromTriggeredOnboarding = true;
    }
  }
  return obj;
};
export const RECENT_MESSAGE_MS = result;