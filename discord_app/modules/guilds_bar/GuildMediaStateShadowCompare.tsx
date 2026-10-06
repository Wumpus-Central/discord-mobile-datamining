// discord_app/modules/guilds_bar/GuildMediaStateShadowCompare.tsx
import logger_Logger from "../../../discord_common/js/packages/logger/Logger.tsx";
import LastFewActionsAll from "../../../discord_common/js/packages/flux/LastFewActions.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import GuildMediaStateStore from "GuildMediaStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const logger = new logger_Logger.Logger("GuildMediaStateShadowCompare");
let closure_5 = ["audio", "video", "screenshare", "liveStage", "activeEvent", "activity", "isCurrentUserConnected"];
let closure_6 = 0;
let closure_7 = 0;
const map = new Map();
const set = new Set();
let result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateShadowCompare.tsx");

export const compareGuildMediaState = function compareGuildMediaState(guildId, fromHook, stateFromStores) {
  let obj12;
  let obj6;
  const f123941 = (item) => {
    let flag = closure_0[item];
    if (flag == null) {
      flag = false;
    }
    let flag2 = closure_1[item];
    if (flag2 == null) {
      flag2 = false;
    }
    return flag !== flag2;
  };
  let closure_0 = fromHook;
  let guildMediaState = stateFromStores;
  const found = closure_5.filter(f123941);
  if (0 !== found.length) {
    closure_0 = fromHook;
    guildMediaState = GuildMediaStateStore.getGuildMediaState(guildId);
    const length = closure_5.filter(f123941).length;
    const obj8 = LastFewActionsAll;
    let str = obj8.last();
    if (str == null) {
      str = "unknown";
    }
    const joined = found.join(",");
    let str3 = "persistent";
    let str4 = "persistent";
    if (0 === length) {
      str4 = "transient";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + joined + ":" + str4;
    let flag = false;
    if (!set.has(combined)) {
      let tmp9;
      if (0 === length) {
        tmp9 = closure_7 >= 15;
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
          if (0 === length) {
            closure_7 = closure_7 + 1;
            num5 = 0;
          } else {
            closure_6 = closure_6 + 1;
            num5 = 0;
          }
        }
        flag = !num5;
      }
    }
    if (flag) {
      const obj3 = {
        guildId,
        lastAction: str,
        mismatchedFields: found,
        fromHook,
        fromStore: stateFromStores,
        isTransient: 0 === length,
      };
      if (obj3.isTransient) {
        str3 = "transient";
      }
      const _HermesInternal2 = HermesInternal;
      const mismatchedFields = obj3.mismatchedFields;
      const combined1 =
        "GuildMediaStateStore diverged from useGuildMediaState after " + obj3.lastAction + " (" + str3 + "): ";
      const sum = combined1 + mismatchedFields.join(", ");
      logger.warn(sum, obj3);
      const obj5 = { tags: obj6, extra: obj12 };
      obj12 = { guildId: null, mismatchedFields: null, fromHook: null, fromStore: null };
      obj6 = { app_context: "guild_media_state_shadow", divergence_severity: str3, divergence_action: obj3.lastAction };
      ({
        guildId: obj7.guildId,
        mismatchedFields: obj7.mismatchedFields,
        fromHook: obj7.fromHook,
        fromStore: obj7.fromStore,
      } = obj3);
      const obj4 = SentryUtilsDefault;
      obj4.captureMessage(sum, obj5);
    }
  }
};
