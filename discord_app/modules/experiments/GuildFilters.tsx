// discord_app/modules/experiments/GuildFilters.tsx
import _slicedToArray from "_slicedToArray";
import getGuild from "getGuild";
import handleInviteData from "handleInviteData";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import importDefaultResult from "MurmurHashV3";
import importDefaultResult1 from "MurmurHashV3";
import importDefaultResult2 from "MurmurHashV3";
import importDefaultResult3 from "MurmurHashV3";
import importDefaultResult4 from "MurmurHashV3";
import importDefaultResult5 from "MurmurHashV3";
import importDefaultResult6 from "MurmurHashV3";
import importDefaultResult7 from "MurmurHashV3";

function isInRange(arg0, arg1, arg2) {
  try {
    const obj = require("../../../_runtime/00014_Integer.js")(arg0);
    let tmp6 = null;
    if (null != arg1) {
      tmp6 = tmp3(14)(arg1);
    }
    let tmp9 = null;
    if (null != arg2) {
      tmp9 = tmp3(14)(arg2);
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
  let tmp7;
  let tmp8;
  let min;
  let max;
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let tmp9 = importDefault;
    let tmp10 = dependencyMap;
    let obj = require("../../../_runtime/01217_MurmurHashV3.js");
    if (obj.v3("min_id") === tmp7) {
      min = tmp8;
    } else {
      let tmp9Result = tmp9(1217);
      if (tmp9Result.v3("max_id") === tmp7) {
        max = tmp8;
      }
    }
    continue;
  }
  return { min, max };
}
let obj = {};
obj[require("MurmurHashV3").v3("guild_ids")] = (arg0) => {
  let importDefault = [];
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    let tmp5 = tmp4[1];
    let tmp6 = importDefault;
    let tmp7 = dependencyMap;
    let obj = require("../../../_runtime/01217_MurmurHashV3.js");
    if (tmp4[0] === obj.v3("guild_ids")) {
      let tmp8 = tmp5;
      importDefault = tmp5;
    }
    continue;
  }
  return (arg0) => tmp5.includes(arg0);
};
obj[require("MurmurHashV3").v3("guild_id_range")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => outer1_6(arg0, closure_0, closure_1);
};
obj[require("MurmurHashV3").v3("guild_age_range_days")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const obj = outer1_0(outer1_1[6]);
    return outer1_6(Math.floor(outer1_0(outer1_1[6]).age(arg0) / outer1_0(outer1_1[7]).Millis.DAY), closure_0, closure_1);
  };
};
obj[require("MurmurHashV3").v3("guild_member_count_range")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const memberCount = outer1_4.getMemberCount(arg0);
    let tmp2 = null != memberCount;
    if (tmp2) {
      tmp2 = outer1_6(memberCount, closure_0, closure_1);
    }
    return tmp2;
  };
};
obj[require("MurmurHashV3").v3("guild_has_feature")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = outer1_5.getGuild(arg0);
    if (guild == null) {
      guild = outer1_3.getGuild(arg0);
    }
    let someResult = null != guild;
    if (someResult) {
      someResult = guild.some((arg0) => {
        const features = guild.features;
        return features.has(arg0);
      });
    }
    return someResult;
  };
};
obj[require("MurmurHashV3").v3("guild_hub_types")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = outer1_5.getGuild(arg0);
    if (guild == null) {
      guild = outer1_3.getGuild(arg0);
    }
    let someResult = null != guild && typeof guild.hubType === "number";
    if (someResult) {
      someResult = guild.some((arg0) => guild.hubType === arg0);
    }
    return someResult;
  };
};
obj[require("MurmurHashV3").v3("guild_has_vanity_url")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = outer1_5.getGuild(arg0);
    if (guild == null) {
      guild = outer1_3.getGuild(arg0);
    }
    if (null == guild) {
      return false;
    } else {
      return closure_0 === (null != guild.vanityURLCode);
    }
  };
};
obj[require("MurmurHashV3").v3("guild_in_range_by_hash")] = (arg0) => {
  let tmp5;
  let tmp6;
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = importDefault;
    let tmp8 = num;
    let obj = importDefault(num[5]);
    if (obj.v3("hash_key") === tmp5) {
      let tmp10 = tmp6;
      importDefault = tmp6;
    } else {
      let tmp7Result = tmp7(tmp8[5]);
      if (tmp7Result.v3("target") === tmp5) {
        let _parseInt = parseInt;
        let tmp9 = tmp6;
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
const result = require("handleInviteData").fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;