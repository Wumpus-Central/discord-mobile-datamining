// === Module 16955: ApplicationRejectedNotice ===

// Module 16955 (ApplicationRejectedNotice)
import noopAll from "noop" /* 19 */;
import ErrorBlockDefault from "ErrorBlock" /* 11384 */;
import useGroupListingsFetchContext from "useGroupListingsFetchContext" /* 14559 */;
import WarningNoticeDefault from "WarningNotice" /* 16904 */;
import useOnboardingMonetizationEnableFlowDefault from "useOnboardingMonetizationEnableFlow" /* 16931 */;
import useRoleSubscriptionSettingsDisabled from "useRoleSubscriptionSettingsDisabled" /* 16945 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function ApplicationRejectedNotice(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(guildId));
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  const tmp = callback3();
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  if (null != resubmissionError) {
    obj = { children: null };
    let tmp9Result = ErrorBlockDefault;
    obj[0] = resubmissionError.getAnyErrorMessage();
    let tmp14 = callback(tmp9Result, obj);
  } else if (null != requestRejectedNoticeText) {
    obj = { notice: null };
    obj[0] = requestRejectedNoticeText;
    tmp14 = callback(WarningNoticeDefault, obj);
  } else if (tmp13) {
    obj1 = { notice: null };
    tmp9Result = WarningNoticeDefault;
    const intl3 = tmp2(1236).intl;
    obj1[0] = intl3.string(tmp2(1236).t.MyJpJT);
    tmp14 = callback(tmp9Result, obj1);
  } else if (null != reapplyNoticeText) {
    const obj2 = { notice: null, ctaLabel: null, onClick: null, submitting: null };
    obj2[0] = reapplyNoticeText;
    const intl2 = tmp2(1236).intl;
    obj2[1] = intl2.string(tmp2(1236).t["YKw/NQ"]);
    obj2[2] = tmp12;
    obj2[3] = tmp11;
    tmp14 = callback(WarningNoticeDefault, obj2);
    const tmp9Result1 = WarningNoticeDefault;
  } else if (true === hasItem1) {
    const obj3 = { notice: null };
    const intl = tmp2(1236).intl;
    obj3[0] = intl.string(tmp2(1236).t.e2g9sW);
    tmp14 = callback(WarningNoticeDefault, obj3);
    const tmp9Result2 = WarningNoticeDefault;
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj4 = { notice: null };
      const intl4 = tmp2(1236).intl;
      obj4[0] = intl4.string(tmp2(1236).t.rxI9sl);
      tmp14 = callback(WarningNoticeDefault, obj4);
      const tmp9Result3 = WarningNoticeDefault;
    }
  }
  let tmp24 = null;
  if (null != tmp14) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.warningBlockContainer;
    obj5[1] = tmp14;
    tmp24 = callback(closure_4, obj5);
  }
  return tmp24;
}
function GuildSettingsRoleSubscription(arg0) {
  ({ guildId, children } = arg0);
  const tmp = callback3();
  let obj = useGroupListingsFetchContext;
  if (obj.useGroupListingsFetchContext()) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { guildId: null };
    obj[0] = guildId;
    const items = [callback(ApplicationRejectedNotice, obj), children];
    obj[1] = items;
    let tmp5 = callback2(closure_4, obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.spinner;
    obj1[1] = callback(closure_3, {});
    tmp5 = callback(closure_4, obj1);
  }
  return tmp5;
}
noopAll;
({ ActivityIndicator: c3, View: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 1 }, warningBlockContainer: { marginHorizontal: 16, marginTop: 16 }, spinner: { marginTop: 12 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  const obj = {};
  const merged = Object.assign(guildId);
  obj[1] = callback(GuildSettingsRoleSubscription, obj);
  obj[2] = callback(useRoleSubscriptionSettingsDisabled.RoleSubscriptionSettingsDisabledContextProvider, obj);
  return callback(useGroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};