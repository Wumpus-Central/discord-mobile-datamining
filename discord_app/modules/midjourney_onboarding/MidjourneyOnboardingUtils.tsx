// discord_app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
import initialize from "initialize" /* 589 */;
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "handleConnectionOpen" /* 4197 */;
import MIDJOURNEY_GUILD_ID from "MIDJOURNEY_GUILD_ID" /* 13320 */;

require = arg1;
({ MIDJOURNEY_BOT_ID: c4, MIDJOURNEY_GUILD_ID: c5 } = MIDJOURNEY_GUILD_ID);
const result = require("set").fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export const isMidjourneyOnboardingFlow = function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = closure_2;
  }
  const guild = guildStore.getGuild(closure_5);
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
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    let guildStore = { guildStore: closure_2 }.guildStore;
    if (guildStore == null) {
      guildStore = closure_2;
    }
    const guild = guildStore.getGuild(closure_5);
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
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(closure_1_0) {
  let isDMResult = closure_1_0.isDM();
  if (isDMResult) {
    isDMResult = 1 === closure_1_0.rawRecipients.length;
  }
  if (isDMResult) {
    isDMResult = closure_1_0.rawRecipients[0].id === closure_4;
  }
  if (isDMResult) {
    let guildStore = {}.guildStore;
    if (guildStore == null) {
      guildStore = closure_2;
    }
    const guild = guildStore.getGuild(closure_5);
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
export const hasRedirectedToGuild = function hasRedirectedToGuild(closure_1_4) {
  closure_0 = closure_1_4;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    function handleSelectedGuildUpdate() {
      if (closure_2_3.getGuildId() === callback) {
        closure_2_3.removeChangeListener(handleSelectedGuildUpdate);
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_2);
        callback();
      }
    }
    if (closure_1_3.getGuildId() !== closure_0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_2_3.removeChangeListener(handleSelectedGuildUpdate);
        clearTimeout(closure_2);
        callback2();
      }, 3000);
      closure_1_3.addChangeListener(handleSelectedGuildUpdate);
    } else {
      arg0();
    }
  });
};