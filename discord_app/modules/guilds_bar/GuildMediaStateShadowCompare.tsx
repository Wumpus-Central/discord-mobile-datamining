// === Module 15692: logger ===

// Module 15692 (logger)
import addAll from "add" /* 594 */;
import _modDef1208 from "module_1208" /* 1208 */;
import closure_3 from "markAllStale" /* 13174 */;
import set from "set" /* 2 */;

const logger = new require("log").Logger("GuildMediaStateShadowCompare");
let closure_5 = ["audio", "video", "screenshare", "liveStage", "activeEvent", "activity", "isCurrentUserConnected"];
let c6 = 0;
let c7 = 0;
const map = new Map();
let set = new Set();
let result = set.fileFinishedImporting("modules/guilds_bar/GuildMediaStateShadowCompare.tsx");

export const compareGuildMediaState = function compareGuildMediaState(closure_0, closure_1, stateFromStores) {
  importDefault = closure_1;
  importAll = stateFromStores;
  const found = closure_5.filter((arg0) => {
    let flag = table[arg0];
    if (flag == null) {
      flag = false;
    }
    let flag2 = table2[arg0];
    if (flag2 == null) {
      flag2 = false;
    }
    return flag !== flag2;
  });
  if (0 !== found.length) {
    importDefault = closure_1;
    importAll = guildMediaState.getGuildMediaState(closure_0);
    let str = addAll.last();
    if (str == null) {
      str = "unknown";
    }
    const tmp = 0 === closure_5.filter((arg0) => {
      let flag = table[arg0];
      if (flag == null) {
        flag = false;
      }
      let flag2 = table2[arg0];
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
    let obj = set;
    let flag = false;
    if (!set.has(combined)) {
      if (tmp) {
        let tmp9 = closure_7 >= 15;
      } else {
        tmp9 = closure_6 >= 15;
      }
      flag = false;
      if (!tmp9) {
        obj1 = map;
        let num3 = map.get(str);
        if (num3 == null) {
          num3 = 0;
        }
        let num5 = num3 >= 3;
        if (!num5) {
          obj.add(combined);
          const result = obj1.set(str, num3 + 1);
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
      obj = { guildId: null, lastAction: null, mismatchedFields: null, fromHook: null, fromStore: null, isTransient: null };
      obj[0] = closure_0;
      obj[1] = str;
      obj[2] = found;
      obj[3] = closure_1;
      obj[4] = stateFromStores;
      obj[5] = tmp;
      if (obj.isTransient) {
        str3 = "transient";
      }
      const _HermesInternal2 = HermesInternal;
      const mismatchedFields = obj.mismatchedFields;
      const combined1 = "GuildMediaStateStore diverged from useGuildMediaState after " + obj.lastAction + " (" + str3 + "): ";
      const sum = combined1 + mismatchedFields.join(", ");
      logger.warn(sum, obj);
      obj = { tags: null, extra: null };
      obj1 = { app_context: "guild_media_state_shadow", divergence_severity: null, divergence_action: null };
      obj1[1] = str3;
      obj1[2] = obj.lastAction;
      obj[0] = obj1;
      ({ guildId: obj7[0], mismatchedFields: obj7[1], fromHook: obj7[2], fromStore: obj7[3] } = obj);
      obj[1] = { guildId: null, mismatchedFields: null, fromHook: null, fromStore: null };
      _modDef1208.captureMessage(sum, obj);
      const obj2 = { guildId: null, mismatchedFields: null, fromHook: null, fromStore: null };
      const obj4 = _modDef1208;
    }
    const obj8 = addAll;
  }
};