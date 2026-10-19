// === Module 18880: GuildSettingsAnalyticsUtils ===

// Module 18880 (GuildSettingsAnalyticsUtils)
import util from "util" /* 1128 */;
import NumberUtils from "NumberUtils" /* 1903 */;
import GuildSettingsAnalyticsActionCreators from "GuildSettingsAnalyticsActionCreators" /* 18899 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5116 */;
import GuildStore from "GuildStore" /* 2090 */;
import GuildSettingsAnalyticsStore from "GuildSettingsAnalyticsStore" /* 18881 */;

const require = globalThis.__r;

require = fn;
function getNotice(errorCode, arg1) {
  if (arg1) {
    const obj2 = { type: "info", message: null, role: "none" };
    const intl3 = util.intl;
    obj2.message = intl3.string(util.t["FsgE/B"]);
    let tmp3 = obj2;
  } else if (errorCode === constants.NOT_ENOUGH_GUILD_MEMBERS) {
    const obj3 = { type: "info", message: null, role: "status" };
    const intl2 = util.intl;
    obj3.message = intl2.string(util.t["FsgE/B"]);
    tmp3 = obj3;
  } else {
    tmp3 = null;
    if (null != errorCode) {
      const obj = { type: "critical", message: null, role: "alert" };
      const intl = util.intl;
      obj.message = intl.string(util.t.Iju63e);
      tmp3 = obj;
    }
  }
  return tmp3;
}
const Constants = fn(1087);
({ AbortCodes: metroRequire, GuildFeatures: closure_7 } = Constants);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFailsMemberCount(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildMemberCountStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn2 = function y() {
      return GuildMemberCountStore.getMemberCount(closure_0);
    };
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp11, tmp12);
  let tmp14 = null == stateFromStores || null == stateFromStores1;
  if (!tmp14) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp17 = !hasItem;
    if (!hasItem) {
      const features2 = stateFromStores.features;
      tmp17 = !features2.has(constants2.VERIFIED);
    }
    if (tmp17) {
      tmp17 = stateFromStores1 < 500;
    }
    tmp14 = tmp17;
  }
  return tmp14;
}) : (function useFailsMemberCount(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const obj = require("initialize");
  const items2 = [GuildMemberCountStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(closure_0), items3);
  let tmp3 = null == stateFromStores || null == stateFromStores1;
  if (!tmp3) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp6 = !hasItem;
    if (!hasItem) {
      const features2 = stateFromStores.features;
      tmp6 = !features2.has(constants2.VERIFIED);
    }
    if (tmp6) {
      tmp6 = stateFromStores1 < 500;
    }
    tmp3 = tmp6;
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsUtils.tsx");

export const useGuildAnalyticsOverview = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildAnalyticsOverview(arg0) {
  _require = arg0;
  const cResult = require("c").c(14);
  const tmp4 = closure_8(arg0);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsAnalyticsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let overviewAnalytics = null;
      if (null != closure_0) {
        overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
      }
      return { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp7, tmp8);
  ({ analytics, errorCode } = stateFromStoresObject);
  if (cResult[4] === tmp4) {
    if (cResult[5] === arg0) {
      let tmp10 = cResult[6];
      let tmp11 = cResult[7];
    }
    const effect = noop.useEffect(tmp10, tmp11);
    if (cResult[8] === errorCode) {
      if (cResult[9] === tmp4) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] === analytics) {
        if (cResult[12] === tmp14) {
          let tmp17 = cResult[13];
        }
        return tmp17;
      }
      let obj2 = { analytics, notice: tmp14 };
      cResult[11] = analytics;
      cResult[12] = tmp14;
      cResult[13] = obj2;
      tmp17 = obj2;
    }
    const tmp16 = getNotice(errorCode, tmp4);
    cResult[8] = errorCode;
    cResult[9] = tmp4;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const fn2 = function y() {
    if (!tmp2) {
      const engagementOverview = GuildSettingsAnalyticsActionCreators.fetchEngagementOverview(closure_0);
      const growthActivationOverview = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationOverview(closure_0);
      const growthActivationRetention = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationRetention(closure_0);
    }
    tmp2 = null == closure_0 || closure_1;
  };
  const items2 = [arg0, tmp4];
  cResult[4] = tmp4;
  cResult[5] = arg0;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = fn2;
  const tmpResult = require("initialize");
}) : (function useGuildAnalyticsOverview(arg0) {
  _require = arg0;
  const tmp = closure_8(arg0);
  dependencyMap = tmp;
  const items = [GuildSettingsAnalyticsStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let overviewAnalytics = null;
    if (null != closure_0) {
      overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
    }
    return { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
  }, items1);
  const items2 = [arg0, tmp];
  ({ analytics, errorCode } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    if (!tmp2) {
      const engagementOverview = GuildSettingsAnalyticsActionCreators.fetchEngagementOverview(closure_0);
      const growthActivationOverview = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationOverview(closure_0);
      const growthActivationRetention = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationRetention(closure_0);
    }
    tmp2 = null == closure_0 || closure_1;
  }, items2);
  let obj = require("initialize");
  return { analytics, notice: getNotice(errorCode, tmp) };
});
export const getGuildAnalyticsCardProps = function getGuildAnalyticsCardProps(communicators, communicatorsChange, stateFromStores, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (null != communicatorsChange) {
    const _Number = Number;
    if (!Number.isNaN(communicatorsChange)) {
      const intl = util.intl;
      const obj = { percentage: null };
      const _Math = Math;
      obj.percentage = NumberUtils.truncateAndLocalizeNumber(Math.abs(communicatorsChange), stateFromStores);
      let formatToPlainStringResult = intl.formatToPlainString(util.t.nskeMw, obj);
    }
    let combined = null;
    if (null != communicators) {
      let str2 = "";
      const result = NumberUtils.truncateAndLocalizeNumber(communicators, stateFromStores);
      if (flag) {
        str2 = "%";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + result + str2;
    }
    const obj4 = { localizedNumber: combined, subtext: formatToPlainStringResult, isTrendingUp: null, isTrendingDown: null };
    let tmp11 = null != communicatorsChange;
    if (tmp11) {
      tmp11 = communicatorsChange > 0;
    }
    obj4.isTrendingUp = tmp11;
    let tmp12 = null != communicatorsChange;
    if (tmp12) {
      tmp12 = communicatorsChange < 0;
    }
    obj4.isTrendingDown = tmp12;
    return obj4;
  }
  formatToPlainStringResult = null;
  if (null != communicators) {
    const intl2 = util.intl;
    formatToPlainStringResult = intl2.string(util.t.xO2msf);
  }
};