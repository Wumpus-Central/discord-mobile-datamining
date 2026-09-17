// discord_app/modules/guild_settings/community/GuildSettingsAnalyticsUtils.tsx
import util from "../../../intl/index.native.tsx";
import NumberUtils from "../../../utils/NumberUtils.tsx";
import GuildSettingsAnalyticsActionCreators from "GuildSettingsAnalyticsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsAnalyticsStore from "GuildSettingsAnalyticsStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ AbortCodes: metroRequire, GuildFeatures: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsUtils.tsx");

export const useGuildAnalyticsOverview = function useGuildAnalyticsOverview(guildId) {
  _require = guildId;
  closure_129_0 = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  let obj = require("initialize");
  const items2 = [GuildMemberCountStore];
  const items3 = [guildId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => GuildMemberCountStore.getMemberCount(closure_0),
    items3,
  );
  let tmp5 = null == stateFromStores || null == stateFromStores1;
  if (!tmp5) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp8 = !hasItem;
    if (!hasItem) {
      const features2 = stateFromStores.features;
      tmp8 = !features2.has(constants2.VERIFIED);
    }
    if (tmp8) {
      tmp8 = stateFromStores1 < 500;
    }
    tmp5 = tmp8;
  }
  dependencyMap = tmp5;
  let obj2 = require("initialize");
  const items4 = [GuildSettingsAnalyticsStore];
  const items5 = [guildId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items4,
    () => {
      let overviewAnalytics = null;
      if (null != closure_0) {
        overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
      }
      return { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
    },
    items5,
  );
  const errorCode = stateFromStoresObject.errorCode;
  const items6 = [guildId, tmp5];
  const effect = noop.useEffect(() => {
    if (!tmp2) {
      const engagementOverview = GuildSettingsAnalyticsActionCreators.fetchEngagementOverview(closure_0);
      const growthActivationOverview = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationOverview(closure_0);
      const growthActivationRetention = GuildSettingsAnalyticsActionCreators.fetchGrowthActivationRetention(closure_0);
    }
    tmp2 = null == closure_0 || closure_1;
  }, items6);
  let obj3 = { analytics: stateFromStoresObject.analytics, notice: null };
  if (!tmp5) {
    if (errorCode !== constants.NOT_ENOUGH_GUILD_MEMBERS) {
      let tmp12 = null;
      if (null != errorCode) {
        const obj4 = { type: "critical", message: null };
        const intl = tmp(1115).intl;
        obj4.message = intl.string(tmp(1115).t.Iju63e);
        tmp12 = obj4;
      }
    }
    obj3.notice = tmp12;
    return obj3;
  }
  const obj5 = { type: "info", message: null };
  const intl2 = tmp(1115).intl;
  obj5.message = intl2.string(require("util").t["FsgE/B"]);
  tmp12 = obj5;
  const tmpResult = require("initialize");
};
export const getGuildAnalyticsCardProps = function getGuildAnalyticsCardProps(
  communicators,
  communicatorsChange,
  stateFromStores,
  arg3,
) {
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
    const obj4 = {
      localizedNumber: combined,
      subtext: formatToPlainStringResult,
      isTrendingUp: null,
      isTrendingDown: null,
    };
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
