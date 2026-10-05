// discord_app/modules/experiments/GuildFilters.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef14 from "../../../_runtime/metro/00014__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import AuthInviteStore from "../auth/AuthInviteStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import module_1251_mod from "../../../_runtime/metro/01251__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function isInRange(memberCount, importDefault, dependencyMap) {
  try {
    const obj = _modDef14(memberCount);
    let tmp6 = null;
    if (null != importDefault) {
      tmp6 = _modDef14(importDefault);
    }
    let tmp9 = null;
    const tmp8 = tmp6;
    if (null != dependencyMap) {
      tmp9 = _modDef14(dependencyMap);
    }
    let tmp12 = null == tmp8;
    const tmp10 = tmp9;
    if (!tmp12) {
      tmp12 = !obj.lesser(tmp6);
    }
    if (tmp12) {
      tmp12 = null == tmp10 || !obj.greater(tmp9);
      const tmp15 = null == tmp10 || !obj.greater(tmp9);
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
  const tmp3 = arg0[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let obj = module_1251;
    if (obj.v3("min_id") === tmp7) {
      min = tmp8;
    } else {
      let tmp9Result = module_1251;
      if (tmp9Result.v3("max_id") === tmp7) {
        max = tmp8;
      }
    }
    continue;
  }
  return { min, max };
}
let obj = {};
let module_1251 = module_1251_mod;
obj[module_1251.v3("guild_ids")] = (arg0) => {
  let first;
  let tmp6;
  let closure_0 = [];
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    [first, tmp6] = tmp2;
    let obj = module_1251;
    if (first === obj.v3("guild_ids")) {
      closure_0 = tmp6;
    }
    continue;
  }
  return (arg0) => closure_0.includes(arg0);
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_id_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  getRangeData(arg0);
  return (memberCount) => isInRange(memberCount, importDefault, dependencyMap);
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_age_range_days")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  getRangeData(arg0);
  return (arg0) => {
    const obj = SnowflakeUtilsDefault;
    const ageResult = obj.age(arg0);
    return isInRange(floor(ageResult / DurationsDefault.Millis.DAY), importDefault, dependencyMap);
  };
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_member_count_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  getRangeData(arg0);
  return (arg0) => {
    const memberCount = GuildMemberCountStore.getMemberCount(arg0);
    const tmp2 = null != memberCount && isInRange(memberCount, importDefault, dependencyMap);
    return tmp2;
  };
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_has_feature")] = (arg0) => {
  let closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = GuildStore.getGuild(arg0);
    if (guild == null) {
      guild = AuthInviteStore.getGuild(arg0);
    }
    const someResult =
      null != guild &&
      closure_0.some((item) => {
        const features = guild.features;
        return features.has(item);
      });
    return someResult;
  };
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_hub_types")] = (arg0) => {
  let closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = GuildStore.getGuild(arg0);
    if (guild == null) {
      guild = AuthInviteStore.getGuild(arg0);
    }
    const someResult =
      null != guild && typeof guild.hubType === "number" && closure_0.some((item) => guild.hubType === item);
    return someResult;
  };
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_has_vanity_url")] = (arg0) => {
  let closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = GuildStore.getGuild(arg0);
    if (guild == null) {
      guild = AuthInviteStore.getGuild(arg0);
    }
    if (null == guild) {
      return false;
    } else {
      return closure_0 === (null != guild.vanityURLCode);
    }
  };
};
module_1251 = module_1251_mod;
obj[module_1251.v3("guild_in_range_by_hash")] = (arg0) => {
  let closure_0;
  let num;
  let tmp5;
  let tmp6;
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = importDefault;
    let tmp8 = num;
    let obj = require("../../../_runtime/metro/01251__.js");
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
    const obj = module_1251;
    const v3Result = obj.v3("" + importDefault + ":" + arg0);
    return (v3Result > 0 ? v3Result + v3Result : v3Result >>> 0) % 10000 < num;
  };
};
const result = size.fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;
