// === Module 16665: GuildMediaStateShadowCompare ===

// Module 16665 (GuildMediaStateShadowCompare)
import LastFewActionsAll from "LastFewActions" /* 509 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import GuildMediaStateStore from "GuildMediaStateStore" /* 13967 */;

const logger = new fn(4).Logger("GuildMediaStateShadowCompare");
let closure_5 = ["audio", "video", "screenshare", "liveStage", "activeEvent", "activity", "isCurrentUserConnected"];
let closure_6 = 0;
let closure_7 = 0;
const map = new Map();
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateShadowCompare.tsx");

export const compareGuildMediaState = function compareGuildMediaState(guildId, fromHook, stateFromStores) {
  closure_0 = fromHook;
  let guildMediaState = stateFromStores;
  const found = closure_5.filter((item) => {
    let flag = closure_0[item];
    if (flag == null) {
      flag = false;
    }
    let flag2 = closure_1[item];
    if (flag2 == null) {
      flag2 = false;
    }
    return flag !== flag2;
  });
  if (0 !== found.length) {
    closure_0 = fromHook;
    guildMediaState = GuildMediaStateStore.getGuildMediaState(guildId);
    let str = LastFewActionsAll.last();
    if (str == null) {
      str = "unknown";
    }
    const tmp = 0 === closure_5.filter((item) => {
      let flag = closure_0[item];
      if (flag == null) {
        flag = false;
      }
      let flag2 = closure_1[item];
      if (flag2 == null) {
        flag2 = false;
      }
      return flag !== flag2;
    }).length;
    const joined = found.join(",");
    let str3 = "persistent";
    let str4 = "persistent";
    if (tmp) {
      str4 = "transient";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + joined + ":" + str4;
    let flag = false;
    if (!set.has(combined)) {
      if (tmp) {
        let tmp9 = closure_7 >= 15;
      } else {
        tmp9 = closure_6 >= 15;
      }
      flag = false;
      if (!tmp9) {
        let num3 = map.get(str);
        if (num3 == null) {
          num3 = 0;
        }
        let num5 = num3 >= 3;
        if (!num5) {
          set.add(combined);
          const result = map.set(str, num3 + 1);
          if (!tmp) {
            closure_6 = closure_6 + 1;
            num5 = 0;
          }
        }
        closure_7 = closure_7 + 1;
        num5 = 0;
      }
    }
    if (flag) {
      const obj3 = { guildId, lastAction: str, mismatchedFields: found, fromHook, fromStore: stateFromStores, isTransient: tmp };
      if (obj3.isTransient) {
        str3 = "transient";
      }
      const _HermesInternal2 = HermesInternal;
      const mismatchedFields = obj3.mismatchedFields;
      const combined1 = "GuildMediaStateStore diverged from useGuildMediaState after " + obj3.lastAction + " (" + str3 + "): ";
      const sum = combined1 + mismatchedFields.join(", ");
      logger.warn(sum, obj3);
      const obj5 = { tags: null, extra: null };
      const obj6 = { app_context: "guild_media_state_shadow", divergence_severity: str3, divergence_action: obj3.lastAction };
      obj5.tags = obj6;
      ({ guildId: obj7.guildId, mismatchedFields: obj7.mismatchedFields, fromHook: obj7.fromHook, fromStore: obj7.fromStore } = obj3);
      obj5.extra = { guildId: null, mismatchedFields: null, fromHook: null, fromStore: null };
      SentryUtilsDefault.captureMessage(sum, obj5);
      const obj12 = { guildId: null, mismatchedFields: null, fromHook: null, fromStore: null };
    }
  }
};