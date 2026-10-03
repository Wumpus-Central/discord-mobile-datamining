// discord_app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
const MidjourneyOnboardingConstants = fn(13671);
({ MIDJOURNEY_BOT_ID: closure_4, MIDJOURNEY_GUILD_ID: hasOwnProperty } = MidjourneyOnboardingConstants);
const ReactCompilerGating = fn(558);
function isMidjourneyOnboardingFlow() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let guildStore = obj.guildStore;
  if (guildStore == null) {
    guildStore = GuildStore;
  }
  guild = guildStore.getGuild(hasOwnProperty);
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
  return 1 === guildStore.getGuildCount() && tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx");

export { isMidjourneyOnboardingFlow };
export const useIsMidjourneyOnboardingFlow = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        const fn = function t() {
          guildStore = { guildStore }.guildStore;
          guild = guildStore.getGuild(closure_1_5);
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
          return 1 === guildStore.getGuildCount() && tmp3;
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5, tmp6);
    }
  : () => {
      const items = [GuildStore];
      return initialize.useStateFromStores(items, () => {
        guildStore = { guildStore }.guildStore;
        guild = guildStore.getGuild(closure_1_5);
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
    guild = guildStore.getGuild(hasOwnProperty);
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
