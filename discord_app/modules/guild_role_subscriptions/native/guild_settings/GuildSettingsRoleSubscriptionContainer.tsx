// === Module 17975: GuildSettingsRoleSubscriptionContainer ===

// Module 17975 (GuildSettingsRoleSubscriptionContainer)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ErrorBlockDefault from "ErrorBlock" /* 11866 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15046 */;
import WarningNoticeDefault from "WarningNotice" /* 17926 */;
import useOnboardingMonetizationEnableFlowDefault from "useOnboardingMonetizationEnableFlow" /* 17953 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17967 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
({ ActivityIndicator: c3, View: closure_4 } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1 }, warningBlockContainer: { marginHorizontal: 16, marginTop: 16 }, spinner: { marginTop: 12 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let createEnableRequest;
  let first;
  let hasItem;
  let hasItem1;
  let intl;
  let intl2;
  let intl4;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let resubmittingEnableRequest;
  let tmp20;
  let tmp7;
  const obj = guildId(576);
  const cResult = obj.c(20);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  ({ resubmittingEnableRequest, resubmissionError, createEnableRequest, requestRejectedNoticeText, reapplyNoticeText } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  useOnboardingMonetizationEnableFlowDefault(stateFromStores);
  if (null != resubmissionError) {
    let tmp37;
    let tmp39;
    if (cResult[3] !== resubmissionError) {
      const anyErrorMessage = resubmissionError.getAnyErrorMessage();
      cResult[3] = resubmissionError;
      cResult[4] = anyErrorMessage;
      tmp37 = anyErrorMessage;
    } else {
      tmp37 = cResult[4];
    }
    if (cResult[5] !== tmp37) {
      const obj2 = { children: tmp37 };
      const tmp41 = closure_7(ErrorBlockDefault, obj2);
      cResult[5] = tmp37;
      cResult[6] = tmp41;
      tmp39 = tmp41;
    } else {
      tmp39 = cResult[6];
    }
    tmp20 = tmp39;
  } else if (null != requestRejectedNoticeText) {
    let tmp34;
    if (cResult[7] !== requestRejectedNoticeText) {
      const obj3 = { notice: requestRejectedNoticeText };
      const tmp36 = closure_7(WarningNoticeDefault, obj3);
      cResult[7] = requestRejectedNoticeText;
      cResult[8] = tmp36;
      tmp34 = tmp36;
    } else {
      tmp34 = cResult[8];
    }
    tmp20 = tmp34;
  } else if (tmp15) {
    let tmp30;
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { notice: intl4.string(guildId(1126).t.MyJpJT) };
      const tmp13Result = WarningNoticeDefault;
      intl4 = tmp(1126).intl;
      const tmp33 = closure_7(tmp13Result, obj4);
      cResult[9] = tmp33;
      tmp30 = tmp33;
    } else {
      tmp30 = cResult[9];
    }
    tmp20 = tmp30;
  } else if (null != reapplyNoticeText) {
    let tmp25;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(guildId(1126).t["YKw/NQ"]);
      cResult[10] = stringResult;
      tmp25 = stringResult;
    } else {
      tmp25 = cResult[10];
    }
    if (cResult[11] === createEnableRequest) {
      if (cResult[12] === reapplyNoticeText) {
        let tmp27;
        if (cResult[13] === resubmittingEnableRequest) {
          tmp27 = cResult[14];
        }
        tmp20 = tmp27;
      }
    }
    const obj5 = { notice: reapplyNoticeText, ctaLabel: tmp25, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
    const tmp29 = closure_7(WarningNoticeDefault, obj5);
    cResult[11] = createEnableRequest;
    cResult[12] = reapplyNoticeText;
    cResult[13] = resubmittingEnableRequest;
    cResult[14] = tmp29;
    tmp27 = tmp29;
  } else if (true === hasItem1) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { notice: intl2.string(guildId(1126).t.e2g9sW) };
      const tmp13Result3 = WarningNoticeDefault;
      intl2 = tmp(1126).intl;
      const tmp24 = closure_7(tmp13Result3, obj6);
      cResult[15] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[15];
    }
    tmp20 = tmp21;
  } else {
    tmp20 = null;
    if (true === hasItem) {
      let tmp16;
      const _Symbol4 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { notice: intl.string(guildId(1126).t.rxI9sl) };
        const tmp13Result4 = WarningNoticeDefault;
        intl = tmp(1126).intl;
        const tmp19 = closure_7(tmp13Result4, obj7);
        cResult[16] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[16];
      }
      tmp20 = tmp16;
    }
  }
  if (cResult[17] === tmp20) {
    let tmp42;
    if (cResult[18] === tmp4) {
      tmp42 = cResult[19];
    }
    return tmp42;
  }
  let tmp43 = null;
  if (null != tmp20) {
    const obj8 = { style: tmp4.warningBlockContainer, children: tmp20 };
    tmp43 = closure_7(closure_4, obj8);
  }
  cResult[17] = tmp20;
  cResult[18] = tmp4;
  cResult[19] = tmp43;
  tmp42 = tmp43;
}) : ((guildId) => {
  let hasItem;
  let hasItem1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let tmp14;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const tmp = closure_9();
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  useOnboardingMonetizationEnableFlowDefault(stateFromStores);
  if (null != resubmissionError) {
    const obj2 = { children: resubmissionError.getAnyErrorMessage() };
    const tmp9Result = ErrorBlockDefault;
    tmp14 = closure_7(tmp9Result, obj2);
  } else if (null != requestRejectedNoticeText) {
    const obj3 = { notice: requestRejectedNoticeText };
    tmp14 = closure_7(WarningNoticeDefault, obj3);
  } else if (tmp13) {
    const obj4 = { notice: intl3.string(guildId(1126).t.MyJpJT) };
    const tmp9Result5 = WarningNoticeDefault;
    intl3 = tmp2(1126).intl;
    tmp14 = closure_7(tmp9Result5, obj4);
  } else if (null != reapplyNoticeText) {
    const obj5 = { notice: reapplyNoticeText, ctaLabel: intl2.string(guildId(1126).t["YKw/NQ"]), onClick: tmp12, submitting: tmp11 };
    const tmp9Result6 = WarningNoticeDefault;
    intl2 = tmp2(1126).intl;
    tmp14 = closure_7(tmp9Result6, obj5);
  } else if (true === hasItem1) {
    const obj6 = { notice: intl.string(guildId(1126).t.e2g9sW) };
    const tmp9Result7 = WarningNoticeDefault;
    intl = tmp2(1126).intl;
    tmp14 = closure_7(tmp9Result7, obj6);
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj7 = { notice: intl4.string(guildId(1126).t.rxI9sl) };
      const tmp9Result8 = WarningNoticeDefault;
      intl4 = tmp2(1126).intl;
      tmp14 = closure_7(tmp9Result8, obj7);
    }
  }
  let tmp24 = null;
  if (null != tmp14) {
    const obj8 = { style: tmp.warningBlockContainer, children: tmp14 };
    tmp24 = closure_7(closure_4, obj8);
  }
  return tmp24;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let guildId;
  let items;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  ({ guildId, children } = arg0);
  const tmp2 = closure_9();
  const obj2 = GroupListingsFetchContext;
  if (obj2.useGroupListingsFetchContext()) {
    let tmp12;
    if (cResult[3] !== guildId) {
      const obj3 = { guildId };
      const tmp15 = metroImportDefault(closure_10, obj3);
      cResult[3] = guildId;
      cResult[4] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === children) {
      if (cResult[6] === tmp2.container) {
        let tmp16;
        if (cResult[7] === tmp12) {
          tmp16 = cResult[8];
        }
        tmp8 = tmp16;
      }
    }
    const obj4 = { style: tmp2.container, children: items };
    items = [tmp12, children];
    const tmp19 = metroImportAll(React3, obj4);
    cResult[5] = children;
    cResult[6] = tmp2.container;
    cResult[7] = tmp12;
    cResult[8] = tmp19;
    tmp16 = tmp19;
  } else {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = metroImportDefault(_false, {});
      cResult[0] = tmp7;
      first = tmp7;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp2.spinner) {
      const obj5 = { style: tmp2.spinner, children: first };
      const tmp11 = metroImportDefault(React3, obj5);
      cResult[1] = tmp2.spinner;
      cResult[2] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[2];
    }
  }
  return tmp8;
}) : ((arg0) => {
  let children;
  let guildId;
  let items;
  let tmp5;
  ({ guildId, children } = arg0);
  const tmp = closure_9();
  const obj = GroupListingsFetchContext;
  if (obj.useGroupListingsFetchContext()) {
    const obj2 = { style: tmp.container, children: items };
    const obj3 = { guildId };
    items = [metroImportDefault(closure_10, obj3), children];
    tmp5 = metroImportAll(React3, obj2);
  } else {
    const obj4 = { style: tmp.spinner, children: metroImportDefault(_false, {}) };
    tmp5 = metroImportDefault(React3, obj4);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== guildId) {
    const obj2 = {};
    const merged = Object.assign(guildId);
    const tmp10 = metroImportDefault(closure_11, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === guildId.guildId) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === guildId.guildId) {
      let tmp13;
      if (cResult[6] === tmp11) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
    const obj3 = { guildId: guildId.guildId, refetchOnMount: true, children: tmp11 };
    const tmp15 = metroImportDefault(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj3);
    cResult[5] = guildId.guildId;
    cResult[6] = tmp11;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  }
  const obj4 = { guildId: guildId.guildId, children: tmp4 };
  const tmp12 = metroImportDefault(RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider, obj4);
  cResult[2] = guildId.guildId;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((guildId) => {
  let RoleSubscriptionSettingsDisabledContextProvider;
  let obj2;
  let obj3;
  const obj = { guildId: guildId.guildId, refetchOnMount: true, children: metroImportDefault(RoleSubscriptionSettingsDisabledContextProvider, obj2) };
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  obj2 = { guildId: guildId.guildId, children: metroImportDefault(closure_11, obj3) };
  obj3 = {};
  RoleSubscriptionSettingsDisabledContextProvider = RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider;
  const merged = Object.assign(guildId);
  return metroImportDefault(GroupListingsFetchContextProvider, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default tmp5;