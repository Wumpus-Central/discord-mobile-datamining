// discord_app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import MIDJOURNEY_GUILD_ID from "MIDJOURNEY_GUILD_ID";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

let c4;
let c5;
const require = arg1;
({ MIDJOURNEY_BOT_ID: c4, MIDJOURNEY_GUILD_ID: c5 } = MIDJOURNEY_GUILD_ID);
const result = require("MIDJOURNEY_GUILD_ID").fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export const isMidjourneyOnboardingFlow = function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = createGuildRecordFromRust;
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
  const items = [createGuildRecordFromRust];
  return initialize /* initialize */.useStateFromStores(items, () => {
    let guildStore = { guildStore: createGuildRecordFromRust }.guildStore;
    if (guildStore == null) {
      guildStore = createGuildRecordFromRust;
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
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(outer1_0) {
  let isDMResult = outer1_0.isDM();
  if (isDMResult) {
    isDMResult = 1 === outer1_0.rawRecipients.length;
  }
  if (isDMResult) {
    isDMResult = outer1_0.rawRecipients[0].id === closure_4;
  }
  if (isDMResult) {
    let guildStore = {}.guildStore;
    if (guildStore == null) {
      guildStore = createGuildRecordFromRust;
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
export const hasRedirectedToGuild = function hasRedirectedToGuild(outer1_4) {
  let closure_0 = outer1_4;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function handleSelectedGuildUpdate() {
      if (outer2_3.getGuildId() === callback) {
        outer2_3.removeChangeListener(handleSelectedGuildUpdate);
        const _clearTimeout = clearTimeout;
        clearTimeout(createGuildRecordFromRust);
        callback();
      }
    }
    if (outer1_3.getGuildId() !== closure_0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer2_3.removeChangeListener(handleSelectedGuildUpdate);
        clearTimeout(createGuildRecordFromRust);
        callback2();
      }, 3000);
      outer1_3.addChangeListener(handleSelectedGuildUpdate);
    } else {
      arg0();
    }
  });
};