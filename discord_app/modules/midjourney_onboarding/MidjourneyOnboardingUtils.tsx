// === Module 13688: MidjourneyOnboardingUtils ===

// Module 13688 (MidjourneyOnboardingUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import MidjourneyOnboardingConstants from "MidjourneyOnboardingConstants" /* 13689 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: hasOwnProperty } = MidjourneyOnboardingConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    const fn = function t() {
      const obj = { guildStore };
      guildStore = obj.guildStore;
      const guild = guildStore.getGuild(closure_1_5);
      let joinedAt1;
      if (guild != null) {
        joinedAt1 = guild.joinedAt;
      }
      let tmp3 = joinedAt1 instanceof Date;
      if (tmp3) {
        const _Date = Date;
        const joinedAt = guild.joinedAt;
        const timestamp = Date.now();
        tmp3 = timestamp - joinedAt.getTime() <= 3600000;
      }
      const tmp5 = 1 === guildStore.getGuildCount() && tmp3;
      return tmp5;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp5 = fn;
    tmp4 = items;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
}) : (() => {
  let obj = get_initialized;
  const items = [GuildStore];
  return obj.useStateFromStores(items, () => {
    const obj = { guildStore };
    guildStore = obj.guildStore;
    const guild = guildStore.getGuild(closure_1_5);
    let joinedAt1;
    if (guild != null) {
      joinedAt1 = guild.joinedAt;
    }
    let tmp3 = joinedAt1 instanceof Date;
    if (tmp3) {
      const _Date = Date;
      const joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp3 = timestamp - joinedAt.getTime() <= 3600000;
    }
    const tmp5 = 1 === guildStore.getGuildCount() && tmp3;
    return tmp5;
  }, []);
});
function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = GuildStore;
  }
  const guild = guildStore.getGuild(hasOwnProperty);
  let joinedAt1;
  if (guild != null) {
    joinedAt1 = guild.joinedAt;
  }
  let tmp3 = joinedAt1 instanceof Date;
  if (tmp3) {
    const _Date = Date;
    const joinedAt = guild.joinedAt;
    const timestamp = Date.now();
    tmp3 = timestamp - joinedAt.getTime() <= 3600000;
  }
  const tmp5 = 1 === guildStore.getGuildCount() && tmp3;
  return tmp5;
}
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export { isMidjourneyOnboardingFlow };
export const useIsMidjourneyOnboardingFlow = tmp3;
export const isEligibleForMidjourneyRedirect = function isEligibleForMidjourneyRedirect(channel) {
  let isDMResult = channel.isDM() && 1 === channel.rawRecipients.length && channel.rawRecipients[0].id === React3;
  if (isDMResult) {
    let guildStore = {}.guildStore;
    if (guildStore == null) {
      guildStore = GuildStore;
    }
    const guild = guildStore.getGuild(hasOwnProperty);
    let joinedAt1;
    if (guild != null) {
      joinedAt1 = guild.joinedAt;
    }
    const _Date = Date;
    let tmp8 = joinedAt1 instanceof Date;
    if (tmp8) {
      const _Date2 = Date;
      const joinedAt = guild.joinedAt;
      const timestamp = Date.now();
      tmp8 = timestamp - joinedAt.getTime() <= 3600000;
    }
    isDMResult = 1 === guildStore.getGuildCount() && tmp8;
    1 === guildStore.getGuildCount() && tmp8;
  }
  return isDMResult;
};
export const hasRedirectedToGuild = function hasRedirectedToGuild(arg0) {
  let guildId;
  let closure_0 = arg0;
  const promise = new Promise((fn, arg1) => {
    let closure_2;
    closure_0 = fn;
    let closure_1 = arg1;
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
  return promise;
};