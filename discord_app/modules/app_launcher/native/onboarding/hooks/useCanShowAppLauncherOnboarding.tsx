// discord_app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
import DISCORD_EPOCHDefault from "../../../../../utils/SnowflakeUtils.tsx";
import setDefault from "../../../../../utils/Durations.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import closure_5 from "../../../../../stores/GuildMemberCountStore.tsx";
import closure_6 from "../../../../../stores/UserStore.tsx";
import closure_7 from "../stores/AppLauncherOnboardingPersistedStore.tsx";
import closure_8 from "../stores/AppLauncherOnboardingStore.tsx";
import { BuiltInSectionId } from "../../../../application_commands/ApplicationCommandConstants.tsx";

const require = arg1;
let result = 5 * setDefault.Millis.SECOND;
let c10 = result;
let closure_11 = 5 * setDefault.Millis.SECOND;
let closure_12 = 14 * setDefault.Millis.DAY;
const HOUR = setDefault.Millis.HOUR;
const DAY = setDefault.Millis.DAY;
let result1 = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  channelId = channelId.channelId;
  let guild_id = channelId;
  const timestamp = Date.now();
  let obj = guild_id(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(guild_id));
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp2Result = tmp2(589);
  const items1 = [closure_6];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let createdAt;
  if (stateFromStores1 != null) {
    createdAt = stateFromStores1.createdAt;
  }
  let tmp8 = null != createdAt;
  if (tmp8) {
    const _Date = Date;
    const timestamp1 = Date.now();
    tmp8 = timestamp1 < DISCORD_EPOCHDefault.extractTimestamp(stateFromStores1.id) + closure_12;
    const obj3 = DISCORD_EPOCHDefault;
  }
  tmp2Result = tmp2(589);
  const items2 = [closure_5];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => closure_1_5.getMemberCount(guild_id));
  let tmp13 = null != stateFromStores2;
  if (tmp13) {
    tmp13 = stateFromStores2 < 200;
  }
  const items3 = [closure_7];
  const stateFromStores3 = guild_id(589).useStateFromStores(items3, () => store.getLastSeenTimeMs());
  let tmp16 = null != stateFromStores3;
  if (tmp16) {
    tmp16 = timestamp < stateFromStores3 + HOUR;
  }
  const items4 = [];
  if (!tmp16) {
    items4.push(tmp2(1377).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  const tmp14 = closure_7;
  const tmp2Result1 = guild_id(589);
  const tmp2Result2 = guild_id(6197);
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
  result = guild_id(4265).useIsDismissibleContentDismissed_UNSAFE(tmp2(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const tmp2Result5 = guild_id(4265);
  let result1 = guild_id(4265).useIsDismissibleContentDismissed_UNSAFE(tmp2(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const tmp2Result6 = guild_id(4265);
  let tmp30 = null != stateFromStores4;
  const result2 = guild_id(4265).useIsDismissibleContentDismissed_UNSAFE(tmp2(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
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
    if (callback(tmp2Result2.useSelectedDismissibleContent(items4), 1)[0] === tmp2(1377).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING) {
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