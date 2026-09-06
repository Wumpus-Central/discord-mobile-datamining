// discord_app/modules/experiments/GuildFilters.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import IntegerDefault from "../../../_runtime/00014_Integer.js";
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AuthInviteStore from "../auth/AuthInviteStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MurmurHashV3 from "../../../_runtime/01241_MurmurHashV3.js";

function isInRange(memberCount, importDefault, dependencyMap) {
  try {
    const obj = IntegerDefault(memberCount);
    let tmp6 = null;
    if (null != importDefault) {
      tmp6 = IntegerDefault(importDefault);
    }
    let tmp9 = null;
    if (null != dependencyMap) {
      tmp9 = IntegerDefault(dependencyMap);
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
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    let obj = MurmurHashV3;
    if (obj.v3("min_id") === tmp7) {
      min = tmp8;
    } else {
      let tmp9Result = MurmurHashV3;
      if (tmp9Result.v3("max_id") === tmp7) {
        max = tmp8;
      }
    }
    continue;
  }
  return { min, max };
}
let obj = {};
obj[MurmurHashV3.v3("guild_ids")] = (arg0) => {
  closure_0 = [];
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let tmp5 = tmp4[1];
    let obj = MurmurHashV3;
    if (tmp4[0] === obj.v3("guild_ids")) {
      closure_0 = tmp5;
    }
    continue;
  }
  return (arg0) => closure_0.includes(arg0);
};
obj[MurmurHashV3.v3("guild_id_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (memberCount) => isInRange(memberCount, importDefault, dependencyMap);
};
obj[MurmurHashV3.v3("guild_age_range_days")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) =>
    isInRange(Math.floor(SnowflakeUtilsDefault.age(arg0) / DurationsDefault.Millis.DAY), closure_1_0, dependencyMap);
};
obj[MurmurHashV3.v3("guild_member_count_range")] = (arg0) => {
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const memberCount = GuildMemberCountStore.getMemberCount(arg0);
    let tmp2 = null != memberCount;
    if (tmp2) {
      tmp2 = isInRange(memberCount, importDefault, dependencyMap);
    }
    return tmp2;
  };
};
obj[MurmurHashV3.v3("guild_has_feature")] = (arg0) => {
  closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = GuildStore.getGuild(arg0);
    if (guild == null) {
      guild = AuthInviteStore.getGuild(arg0);
    }
    let someResult = null != guild;
    if (someResult) {
      someResult = closure_0.some((item) => {
        const features = guild.features;
        return features.has(item);
      });
    }
    return someResult;
  };
};
obj[MurmurHashV3.v3("guild_hub_types")] = (arg0) => {
  closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
  return (arg0) => {
    let guild = GuildStore.getGuild(arg0);
    if (guild == null) {
      guild = AuthInviteStore.getGuild(arg0);
    }
    let someResult = null != guild && typeof guild.hubType === "number";
    if (someResult) {
      someResult = closure_0.some((item) => guild.hubType === item);
    }
    return someResult;
  };
};
obj[MurmurHashV3.v3("guild_has_vanity_url")] = (arg0) => {
  closure_0 = _slicedToArray(_slicedToArray(arg0, 1)[0], 2)[1];
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
obj[MurmurHashV3.v3("guild_in_range_by_hash")] = (arg0) => {
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = importDefault;
    let tmp8 = num;
    let obj = require("MurmurHashV3");
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
    const v3Result = MurmurHashV3.v3("" + closure_0 + ":" + arg0);
    return (v3Result > 0 ? v3Result + v3Result : v3Result >>> 0) % 10000 < num;
  };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;
