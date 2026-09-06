// discord_app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
const MidjourneyOnboardingConstants = fn(13860);
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: hasOwnProperty } = MidjourneyOnboardingConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export const isMidjourneyOnboardingFlow = function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = GuildStore;
  }
  const guild = guildStore.getGuild(hasOwnProperty);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  let tmp3 = joinedAt instanceof Date;
  if (tmp3) {
    const _Date = Date;
    joinedAt = guild.joinedAt;
    const timestamp = Date.now();
    tmp3 = timestamp - joinedAt.getTime() <= 3600000;
  }
  return 1 === guildStore.getGuildCount() && tmp3;
};
export const useIsMidjourneyOnboardingFlow = function useIsMidjourneyOnboardingFlow() {
  const items = [GuildStore];
  return initialize.useStateFromStores(items, () => {
    guildStore = { guildStore }.guildStore;
    const guild = guildStore.getGuild(closure_1_5);
    let joinedAt;
    if (guild != null) {
      joinedAt = guild.joinedAt;
    }
    let tmp3 = joinedAt instanceof Date;
    if (tmp3) {
      const _Date = Date;
      joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp3 = timestamp - joinedAt.getTime() <= 3600000;
    }
    return 1 === guildStore.getGuildCount() && tmp3;
  }, []);
};
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(channel) {
  let isDMResult = channel.isDM();
  if (isDMResult) {
    isDMResult = 1 === channel.rawRecipients.length;
  }
  if (isDMResult) {
    isDMResult = channel.rawRecipients[0].id === React4;
  }
  if (isDMResult) {
    let guildStore = {}.guildStore;
    if (guildStore == null) {
      guildStore = GuildStore;
    }
    const guild = guildStore.getGuild(hasOwnProperty);
    let joinedAt;
    if (guild != null) {
      joinedAt = guild.joinedAt;
    }
    const _Date = Date;
    let tmp8 = joinedAt instanceof Date;
    if (tmp8) {
      const _Date2 = Date;
      joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp8 = timestamp - joinedAt.getTime() <= 3600000;
    }
    isDMResult = 1 === guildStore.getGuildCount() && tmp8;
    const tmp10 = 1 === guildStore.getGuildCount() && tmp8;
  }
  return isDMResult;
};
export const hasRedirectedToGuild = function hasRedirectedToGuild(arg0) {
  closure_0 = arg0;
  return new Promise((fn, arg1) => {
    closure_0 = fn;
    closure_1 = arg1;
    function handleSelectedGuildUpdate() {
      if (SelectedGuildStore.getGuildId() === closure_0) {
        SelectedGuildStore.removeChangeListener(handleSelectedGuildUpdate);
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_2);
        closure_0();
      }
    }
    if (guildId.getGuildId() !== closure_0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        SelectedGuildStore.removeChangeListener(handleSelectedGuildUpdate);
        clearTimeout(closure_2);
        closure_1();
      }, 3000);
      guildId.addChangeListener(handleSelectedGuildUpdate);
    } else {
      fn();
    }
  });
};
