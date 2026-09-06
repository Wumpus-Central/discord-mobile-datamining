// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useGroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import useOnboardingMonetizationEnableFlowDefault from "../../../creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx";
import useRoleSubscriptionSettingsDisabled from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ApplicationRejectedNotice(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
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
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } =
    useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  if (null != resubmissionError) {
    obj = { children: null };
    let tmp9Result = tmp9(12223);
    obj[0] = resubmissionError.getAnyErrorMessage();
    let tmp14 = callback(tmp9Result, obj);
  } else if (null != requestRejectedNoticeText) {
    obj = { notice: null };
    obj[0] = requestRejectedNoticeText;
    tmp14 = callback(tmp9(17683), obj);
  } else if (tmp13) {
    obj1 = { notice: null };
    tmp9Result = tmp9(17683);
    const intl3 = tmp2(1114).intl;
    obj1[0] = intl3.string(tmp2(1114).t.MyJpJT);
    tmp14 = callback(tmp9Result, obj1);
  } else if (null != reapplyNoticeText) {
    const obj2 = { notice: null, ctaLabel: null, onClick: null, submitting: null };
    obj2[0] = reapplyNoticeText;
    const intl2 = tmp2(1114).intl;
    obj2[1] = intl2.string(tmp2(1114).t["YKw/NQ"]);
    obj2[2] = tmp12;
    obj2[3] = tmp11;
    tmp14 = callback(tmp9(17683), obj2);
    const tmp9Result1 = tmp9(17683);
  } else if (true === hasItem1) {
    const obj3 = { notice: null };
    const intl = tmp2(1114).intl;
    obj3[0] = intl.string(tmp2(1114).t.e2g9sW);
    tmp14 = callback(tmp9(17683), obj3);
    const tmp9Result2 = tmp9(17683);
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj4 = { notice: null };
      const intl4 = tmp2(1114).intl;
      obj4[0] = intl4.string(tmp2(1114).t.rxI9sl);
      tmp14 = callback(tmp9(17683), obj4);
      const tmp9Result3 = tmp9(17683);
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
let closure_9 = createCacheKey.createStyles({
  container: { flex: 1 },
  warningBlockContainer: { marginHorizontal: 16, marginTop: 16 },
  spinner: { marginTop: 12 },
});
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx",
);

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  let obj = { guildId: guildId.guildId, refetchOnMount: true, children: null };
  obj = { guildId: guildId.guildId, children: null };
  obj = {};
  const merged = Object.assign(guildId);
  obj[1] = callback(GuildSettingsRoleSubscription, obj);
  obj[2] = callback(useRoleSubscriptionSettingsDisabled.RoleSubscriptionSettingsDisabledContextProvider, obj);
  return callback(useGroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
}
