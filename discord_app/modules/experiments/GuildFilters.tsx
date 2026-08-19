// === Module 4293: isInRange ===

// Module 4293 (isInRange)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import IntegerDefault from "Integer" /* 14 */;
import obj132Default from "obj132" /* 687 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import getGuild from "getGuild" /* 4294 */;
import handleInviteData from "handleInviteData" /* 4295 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import importDefaultResult from "MurmurHashV3" /* 1217 */;

function isInRange(memberCount, closure_0, closure_1) {
  try {
    const obj = IntegerDefault(memberCount);
    let tmp6 = null;
    if (null != closure_0) {
      tmp6 = IntegerDefault(closure_0);
    }
    let tmp9 = null;
    if (null != closure_1) {
      tmp9 = IntegerDefault(closure_1);
    }
    let tmp12 = null == tmp6;
    if (!tmp12) {
      tmp12 = !obj.lesser(tmp6);
    }
    if (tmp12) {
      let tmp15 = null == tmp9;
      if (!tmp15) {
        tmp15 = !obj.greater(tmp9);
      }
      tmp12 = tmp15;
    }
    return tmp12;
  } catch (err) {
    return false;
  }
}
function getRangeData(arg0) {
  let min;
  let max;
  while (tmp3 !== undefined) {
    let tmp6 = callback(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let obj = importDefaultResult;
    if (obj.v3("min_id") === tmp7) {
      min = tmp8;
    } else {
      let tmp9Result = importDefaultResult;
      if (tmp9Result.v3("max_id") === tmp7) {
        max = tmp8;
      }
    }
    continue;
  }
  return { min, max };
}
let obj = {};
obj[importDefaultResult.v3("guild_ids")] = (arg0) => {
  importDefault = [];
  while (tmp !== undefined) {
    let tmp4 = callback(tmp2, 2);
    let tmp5 = tmp4[1];
    let obj = importDefaultResult;
    if (tmp4[0] === obj.v3("guild_ids")) {
      importDefault = tmp5;
    }
    continue;
  }
  return (arg0) => closure_0.includes(arg0);
};
obj[importDefaultResult.v3("guild_id_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (memberCount) => isInRange(memberCount, closure_0, closure_1);
};
const importDefaultResult1 = importDefaultResult;
obj[importDefaultResult.v3("guild_age_range_days")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => isInRange(Math.floor(DISCORD_EPOCHDefault.age(arg0) / obj132Default.Millis.DAY), closure_0, closure_1);
};
const importDefaultResult2 = importDefaultResult;
obj[importDefaultResult.v3("guild_member_count_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const memberCount = closure_1_4.getMemberCount(arg0);
    let tmp2 = null != memberCount;
    if (tmp2) {
      tmp2 = isInRange(memberCount, closure_0, closure_1);
    }
    return tmp2;
  };
};
const importDefaultResult3 = importDefaultResult;
obj[importDefaultResult.v3("guild_has_feature")] = (arg0) => {
  closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = closure_1_5.getGuild(arg0);
    if (guild == null) {
      guild = closure_1_3.getGuild(arg0);
    }
    let someResult = null != guild;
    if (someResult) {
      someResult = guild.some((item, index) => {
        const features = guild.features;
        return features.has(item);
      });
    }
    return someResult;
  };
};
const importDefaultResult4 = importDefaultResult;
obj[importDefaultResult.v3("guild_hub_types")] = (arg0) => {
  closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = closure_1_5.getGuild(arg0);
    if (guild == null) {
      guild = closure_1_3.getGuild(arg0);
    }
    let someResult = null != guild && typeof guild.hubType === "number";
    if (someResult) {
      someResult = guild.some((item, index) => guild.hubType === item);
    }
    return someResult;
  };
};
const importDefaultResult5 = importDefaultResult;
obj[importDefaultResult.v3("guild_has_vanity_url")] = (arg0) => {
  closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = closure_1_5.getGuild(arg0);
    if (guild == null) {
      guild = closure_1_3.getGuild(arg0);
    }
    if (null == guild) {
      return false;
    } else {
      return closure_0 === (null != guild.vanityURLCode);
    }
  };
};
const importDefaultResult6 = importDefaultResult;
obj[importDefaultResult.v3("guild_in_range_by_hash")] = (arg0) => {
  while (tmp !== undefined) {
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = importDefault;
    let tmp8 = num;
    let obj = importDefault(num[5]);
    if (obj.v3("hash_key") === tmp5) {
      importDefault = tmp6;
    } else {
      let tmp7Result = tmp7(tmp8[5]);
      if (tmp7Result.v3("target") === tmp5) {
        let _parseInt = parseInt;
        num = parseInt(tmp6);
        if (num == null) {
          num = 0;
        }
      }
    }
    continue;
  }
  return (arg0) => {
    const v3Result = tmp6(num[5]).v3("" + tmp6 + ":" + arg0);
    return (v3Result > 0 ? v3Result + v3Result : v3Result >>> 0) % 10000 < num;
  };
};
const importDefaultResult7 = importDefaultResult;
const result = require("obj132").fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;