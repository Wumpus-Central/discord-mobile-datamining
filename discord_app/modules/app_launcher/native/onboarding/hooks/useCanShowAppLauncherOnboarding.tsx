// === Module 11231: result ===

// Module 11231 (result)
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import closure_8 from "initialize";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";

const require = arg1;
let result = 5 * require("set").Millis.SECOND;
let c10 = result;
let closure_11 = 5 * require("set").Millis.SECOND;
let closure_12 = 14 * require("set").Millis.DAY;
const HOUR = require("set").Millis.HOUR;
const DAY = require("set").Millis.DAY;
let result1 = require("handleInviteData").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  let recentApplicationCommandMetadata;
  let recentMessageMetadata;
  channelId = channelId.channelId;
  let guild_id = channelId;
  const timestamp = Date.now();
  let obj = guild_id(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(guild_id));
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp2Result = tmp2(589);
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let createdAt;
  if (stateFromStores1 != null) {
    createdAt = stateFromStores1.createdAt;
  }
  let tmp8 = null != createdAt;
  if (tmp8) {
    const _Date = Date;
    const timestamp1 = Date.now();
    tmp8 = timestamp1 < importDefault(11).extractTimestamp(stateFromStores1.id) + closure_12;
    const obj3 = importDefault(11);
  }
  tmp2Result = tmp2(589);
  const items2 = [handleInviteData];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => outer1_5.getMemberCount(guild_id));
  let tmp13 = null != stateFromStores2;
  if (tmp13) {
    tmp13 = stateFromStores2 < 200;
  }
  const items3 = [initialize];
  const stateFromStores3 = guild_id(589).useStateFromStores(items3, () => store.getLastSeenTimeMs());
  let tmp16 = null != stateFromStores3;
  if (tmp16) {
    tmp16 = timestamp < stateFromStores3 + HOUR;
  }
  const items4 = [];
  if (!tmp16) {
    items4.push(tmp2(1358).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  const tmp14 = initialize;
  const tmp2Result1 = guild_id(589);
  const tmp2Result2 = guild_id(8451);
  const items5 = [closure_8];
  const stateFromStoresObject = guild_id(589).useStateFromStoresObject(items5, () => ({ recentMessageMetadata: store2.getRecentMessageMetadata(), recentApplicationCommandMetadata: store2.getRecentApplicationCommandMetadata() }));
  ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
  const tmp2Result3 = guild_id(589);
  const items6 = [tmp14];
  const stateFromStores4 = guild_id(589).useStateFromStores(items6, () => store.getTriggeredOnboardingContentMetadata());
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
  const tmp2Result4 = guild_id(589);
  const result = guild_id(4009).useIsDismissibleContentDismissed_UNSAFE(tmp2(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const tmp2Result5 = guild_id(4009);
  let result1 = guild_id(4009).useIsDismissibleContentDismissed_UNSAFE(tmp2(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const tmp2Result6 = guild_id(4009);
  let tmp30 = null != stateFromStores4;
  const result2 = guild_id(4009).useIsDismissibleContentDismissed_UNSAFE(tmp2(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
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
    if (callback(tmp2Result2.useSelectedDismissibleContent(items4), 1)[0] === tmp2(1358).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING) {
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