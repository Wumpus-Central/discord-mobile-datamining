// discord_app/modules/safety_hub/native/ClassificationDetail.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef2979 from "../../age_assurance/ManualReview.messages.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SafetyHubModels from "../SafetyHubModels.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
function ClassificationHeader(classificationTypeText) {
  classificationTypeText = classificationTypeText.classificationTypeText;
  const guildMetadata = classificationTypeText.guildMetadata;
  const tmp = closure_16();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header, children: null };
  const memo = noop.useMemo(() => {
    let obj2 = {
      classification_type: classificationTypeText,
      classificationHook(children, arg1) {
        return closure_1_13(
          classificationTypeText(closure_1_2[9]).Text,
          { variant: "heading-xl/bold", children },
          arg1,
        );
      },
    };
    let tmp3 = null;
    if (null != guildMetadata) {
      let member_type;
      if (guildMetadata != tmp3) {
        member_type = guildMetadata.member_type;
      }
      let X1ngSd = require;
      let obj = dependencyMap;
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = X1ngSd(1115).intl;
        X1ngSd = X1ngSd(1115).t.X1ngSd;
        obj = {};
        const merged = Object.assign(obj2);
        tmp3 = guildMetadata == tmp3;
        obj2 = undefined;
        if (!tmp3) {
          obj2 = guildMetadata.name;
        }
        obj.guildName = obj2;
        let formatResult = intl3.format(X1ngSd, obj);
      } else {
        const intl2 = X1ngSd(1115).intl;
        const obj4 = {};
        const merged1 = Object.assign(obj2);
        let name;
        if (guildMetadata != tmp3) {
          name = guildMetadata.name;
        }
        obj4.guildName = name;
        formatResult = intl2.format(X1ngSd(1115).t.rmpEPD, obj4);
      }
    } else {
      const intl = util.intl;
      return intl.format(util.t["39jfOz"], obj2);
    }
  }, items);
  obj.children = closure_13(classificationTypeText(4634).Text, {
    variant: "text-lg/normal",
    style: tmp.headerText,
    color: "mobile-text-heading-primary",
    children: memo,
  });
  return closure_13(closure_4, obj);
}
function ClassificationActionsTaken(arg0) {
  ({ actions, classificationExpiration } = arg0);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_16();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    const obj2 = { style: tmp4.sectionContainer, children: null };
    const obj3 = { variant: "eyebrow", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["O2nYk+"]);
    const items1 = [map1(Text_Text.Text, obj3)];
    const obj4 = { style: null, children: null };
    const items2 = [tmp4.actionsTaken];
    obj4.style = items2;
    const items3 = [found.map((action) => closure_1_13(ClassificationActionsTakenRows, { action }, action.id))];
    let tmp6Result = null;
    if (null != classificationExpiration) {
      const obj5 = { style: tmp4.classificationActionDescription, children: null };
      const obj6 = { variant: "text-xs/normal", children: [" ", "\u2022"] };
      const items4 = [closure_1_14(Text_Text.Text, obj6)];
      const obj7 = { variant: "text-xs/normal", children: null };
      const intl2 = util.intl;
      const obj8 = {
        expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }),
      };
      obj7.children = intl2.format(util.t.TByIjT, obj8);
      items4[1] = map1(Text_Text.Text, obj7);
      obj5.children = items4;
      tmp6Result = closure_1_14(React4, obj5, "expiration");
    }
    items3[1] = tmp6Result;
    obj4.children = items3;
    items1[1] = closure_1_14(React4, obj4);
    obj2.children = items1;
    let tmp6Result2 = closure_1_14(React4, obj2);
  } else {
    tmp6Result2 = null;
  }
  return tmp6Result2;
}
function ManualReviewDecidedUnderageActionsTaken() {
  const tmp = closure_16();
  const obj = { style: tmp.sectionContainer, children: null };
  const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["O2nYk+"]);
  const items = [map1(Text_Text.Text, obj2)];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.actionsTaken];
  obj3.style = items1;
  const obj4 = { style: tmp.classificationActionDescription, children: null };
  const items2 = [closure_1_14(Text_Text.Text, { variant: "text-xs/normal", children: [" ", "\u2022"] })];
  const obj5 = { variant: "text-xs/normal", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(_modDef2979.rn3Gto);
  items2[1] = map1(Text_Text.Text, obj5);
  obj4.children = items2;
  obj3.children = closure_1_14(React4, obj4);
  items[1] = map1(React4, obj3);
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationActionsTakenRows(action) {
  closure_0 = closure_16();
  let obj = { children: null };
  const descriptions = action.action.descriptions;
  obj.children = descriptions.map((children, index) => {
    const obj = { style: closure_0.classificationActionDescription, children: null };
    const items = [
      closure_2_14(Text_Text.Text, { variant: "text-xs/normal", children: [" ", "\u2022"] }),
      map1(Text_Text.Text, { variant: "text-xs/normal", children }),
    ];
    obj.children = items;
    return closure_2_14(React4, obj, index);
  });
  return closure_13(closure_15, obj);
}
function ManualReviewDecidedUnderageGuidance(arg0) {
  ({ tosLink, communityGuidelinesLink } = arg0);
  const obj = { style: closure_16().sectionContainer, children: null };
  const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["977iei"]);
  const items = [map1(Text_Text.Text, obj2)];
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef2979.vPOpia, { tosLink, communityGuidelinesLink });
  items[1] = map1(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationGuidance(hidePolicyCard) {
  hidePolicyCard = hidePolicyCard.hidePolicyCard;
  let tmp = undefined !== hidePolicyCard;
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = hidePolicyCard);
  if (tmp) {
    tmp = hidePolicyCard;
  }
  const obj = { style: closure_16().sectionContainer, children: null };
  const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["977iei"]);
  const items = [map1(Text_Text.Text, obj2), , ,];
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[1] = map1(Text_Text.Text, obj3);
  let tmp4Result = !tmp;
  if (!tmp) {
    const obj4 = { classificationTypeText, policyExplainerLink };
    tmp4Result = map1(ClassificationPolicyCard, obj4);
  }
  items[2] = tmp4Result;
  items[3] = appealComponent;
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationPolicyCard(classificationDescription) {
  const policyExplainerLink = classificationDescription.policyExplainerLink;
  const tmp = closure_16();
  const obj = { children: null };
  const obj2 = {
    onPress() {
      LinkingDefault.openURL(policyExplainerLink);
    },
    style: null,
    children: null,
  };
  const items = [tmp.classificationPolicyCard];
  obj2.style = items;
  const obj3 = { style: tmp.classificationPolicyCardIcon, children: null };
  const tmp2 = TouchableHitBoxDefault;
  obj3.children = closure_13(policyExplainerLink(9545).ShieldIcon, {
    size: "sm",
    color: nativeDefault.colors.TEXT_LINK,
  });
  const items1 = [closure_13(closure_4, obj3)];
  const obj5 = { style: tmp.classificationPolicyCardContent, children: null };
  const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = policyExplainerLink(1115).intl;
  obj6.children = intl.format(policyExplainerLink(1115).t.zxUdpj, {
    classificationDescription: classificationDescription.classificationTypeText,
  });
  obj5.children = closure_13(policyExplainerLink(4634).Text, obj6);
  items1[1] = closure_13(closure_4, obj5);
  obj2.children = items1;
  obj.children = closure_14(tmp2, obj2);
  return closure_13(closure_4, obj);
}
function AppealStatus() {
  const obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["I2H0/E"]);
  return map1(Text_Text.Text, obj);
}
function LetUsKnow(arg0) {
  _require = arg0;
  const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t.IFxUaT, {
    letUsKnowHook(children, arg1) {
      return map1(
        Text_Text.Text,
        { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children },
        arg1,
      );
    },
  });
  return closure_13(require("Text/Text").Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  const obj = { style: closure_16().letUsKnowContainer, children: null };
  if (hasBeenAppealed.hasBeenAppealed) {
    let tmpResult = map1(AppealStatus, {});
  } else {
    const obj2 = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
    tmpResult = map1(LetUsKnow, obj2);
  }
  obj.children = tmpResult;
  return map1(React4, obj);
}
function ExpressiveModalV2AppealFooter(arg0) {
  _require = arg0;
  const tmp = closure_16();
  const obj = { style: tmp.expressiveModalV2LetUsKnowContainer, children: null };
  const obj2 = {
    variant: "text-sm/normal",
    color: "text-muted",
    style: tmp.expressiveModalV2LetUsKnowText,
    children: null,
  };
  const intl = require("util").intl;
  obj2.children = intl.format(require("util").t.LeAhOQ, {
    letUsKnowHook(children, arg1) {
      return map1(
        Text_Text.Text,
        { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children },
        arg1,
      );
    },
  });
  obj.children = closure_13(require("Text/Text").Text, obj2);
  return closure_13(closure_4, obj);
}
function ManualReviewDecidedUnderageFooter() {
  const tmp = closure_16();
  const obj = { style: tmp.expressiveModalV2LetUsKnowContainer, children: null };
  const obj2 = {
    variant: "text-sm/normal",
    color: "text-strong",
    style: tmp.expressiveModalV2LetUsKnowText,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2979["yV/t/V"]);
  obj.children = map1(Text_Text.Text, obj2);
  return map1(React4, obj);
}
function ManualReviewDecidedUnderageView() {
  const obj = { children: null };
  const items = [
    map1(ManualReviewDecidedUnderageActionsTaken, {}),
    map1(ManualReviewDecidedUnderageGuidance, {
      tosLink: constants.TOS_LINK,
      communityGuidelinesLink: constants.COMMUNITY_GUIDELINES,
    }),
    map1(ManualReviewDecidedUnderageFooter, {}),
  ];
  obj.children = items;
  return closure_1_14(__initData, obj);
}
function ClassificationDetailFooter(onClose) {
  const obj = { style: closure_16().redirectButtonWrapper, children: null };
  const obj2 = { size: "md", text: null, onPress: null, grow: true };
  const intl = util.intl;
  obj2.text = intl.string(util.t.elrEjL);
  obj2.onPress = onClose.onClose;
  obj.children = map1(components_Button_Button.Button, obj2);
  return map1(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(8549);
({
  SafetyHubAnalyticsActionSource: closure_9,
  SafetyHubAnalyticsActions: c10,
  SafetyHubLinks: closure_11,
} = SafetyHubConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  root: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  container: null,
  header: null,
  headerText: null,
  sectionContainer: null,
  actionsTaken: null,
  classificationDetailContainer: null,
  letUsKnowContainer: null,
  expressiveModalV2LetUsKnowContainer: null,
  expressiveModalV2LetUsKnowText: null,
  classificationPolicyCard: null,
  classificationPolicyCardIcon: null,
  classificationPolicyCardContent: null,
  classificationActionDescription: null,
  redirectButtonWrapper: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.container = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
};
let obj4 = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_32,
};
obj2.header = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
};
obj2.headerText = { textAlign: "center", maxWidth: 260 };
let obj5 = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_8,
};
obj2.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj6 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj2.actionsTaken = {
  display: "flex",
  paddingLeft: nativeDefault.space.PX_4,
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
};
let obj7 = {
  display: "flex",
  paddingLeft: nativeDefault.space.PX_4,
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
};
obj2.classificationDetailContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.letUsKnowContainer = { display: "flex", alignItems: "center" };
let obj8 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.expressiveModalV2LetUsKnowContainer = {
  display: "flex",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_16,
};
obj2.expressiveModalV2LetUsKnowText = { textAlign: "center" };
let obj9 = { display: "flex", alignItems: "center", marginTop: nativeDefault.space.PX_16 };
obj2.classificationPolicyCard = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
  flexShrink: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xxl,
};
obj2.classificationPolicyCardIcon = size;
obj2.classificationPolicyCardContent = { flex: 1 };
let obj10 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
  flexShrink: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.classificationActionDescription = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj11 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.redirectButtonWrapper = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  const onClose = classificationId.onClose;
  const safetyHubClassification = classificationId(onClose[18]).useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp4 = closure_16();
  let obj = classificationId(onClose[18]);
  let items = [hasItem];
  const stateFromStores = classificationId(onClose[12]).useStateFromStores(items, () => hasItem.getAppealEligibility());
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  let tmp7 = null != flagged_content;
  if (tmp7) {
    let length;
    if (classification != null) {
      length = classification.flagged_content.length;
    }
    tmp7 = length > 0;
  }
  const is_violative_content_shown = tmp7;
  const obj2 = classificationId(onClose[12]);
  const tmp5 = hasItem;
  const safetyHubAccountStanding = classificationId(onClose[19]).useSafetyHubAccountStanding();
  let is_coppa;
  if (classification != null) {
    is_coppa = classification.is_coppa;
  }
  hasItem = is_coppa;
  if (hasItem) {
    hasItem = stateFromStores.includes(tmp(tmp2[10]).AppealEligibility.AGE_VERIFY_ELIGIBLE);
  }
  let is_coppa1;
  if (classification != null) {
    is_coppa1 = classification.is_coppa;
  }
  let hasItem1 = is_coppa1;
  if (hasItem1) {
    hasItem1 = stateFromStores.includes(tmp(tmp2[10]).AppealEligibility.AGE_VERIFY_GLOBAL_ELIGIBLE);
  }
  let tmpResult = classificationId(onClose[19]);
  if (hasItem1) {
    hasItem1 = tmpResult4.useIsExpressiveModalV2Enabled(
      tmp(tmp2[21]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
    );
  }
  tmpResult4 = classificationId(onClose[20]);
  const items1 = [tmp5];
  let is_coppa2;
  const stateFromStores1 = classificationId(onClose[12]).useStateFromStores(items1, () =>
    hasItem.getIsManualReviewDecidedUnderage(),
  );
  if (classification != null) {
    is_coppa2 = classification.is_coppa;
  }
  const ref = safetyHubClassification.useRef({
    accountStanding: safetyHubAccountStanding,
    classificationId,
    classificationState: safetyHubClassification,
    hasFlaggedContent: tmp7,
    source,
  });
  const effect = safetyHubClassification.useEffect(() => {
    closure_11.current = obj3;
  });
  const items2 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    if (null != classification) {
      const current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      obj3 = {
        action: closure_2_10.ViewViolationDetail,
        account_standing: accountStanding.state,
        classification_ids: null,
        source: null,
        is_violative_content_shown: null,
        is_dsa_eligible: null,
        violation_type: null,
      };
      const _Number = Number;
      const items = [Number(classificationId)];
      obj3.classification_ids = items;
      if (source == null) {
        source = React7.SystemDM;
      }
      obj3.source = source;
      obj3.is_violative_content_shown = hasFlaggedContent;
      ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = classificationState);
      AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
    }
  }, items2);
  if (null == classification) {
    if (safetyHubClassification.classificationRequestState === tmp(tmp2[10]).ClassificationRequestState.FAILED) {
      classificationId.onError();
      let tmp19Result8 = null;
    }
    return tmp19Result8;
  }
  let obj4 = { style: tmp4.root, children: null };
  let obj5 = { style: tmp4.container, bottom: true, children: null };
  if (null == classification) {
    let tmp36Result = closure_13(isAppealEligible, { size: "large" });
  } else {
    const obj6 = { style: null, children: null };
    const items3 = [tmp4.classificationDetailContainer];
    obj6.style = items3;
    ({ description: obj19.classificationTypeText, guild_metadata: obj19.guildMetadata } = classification);
    const items4 = [closure_13(ClassificationHeader, { classificationTypeText: null, guildMetadata: null }), , ,];
    let flagged_content1 = classification.flagged_content;
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    const obj8 = { flaggedContent: flagged_content1 };
    items4[1] = closure_13(source(tmp2[28]), obj8);
    if (tmp16) {
      let tmp19Result5 = closure_13(ManualReviewDecidedUnderageView, {});
    } else {
      function onPressLetUsKnow() {
        obj3 = {
          action: closure_2_10.ClickLetUsKnow,
          account_standing: safetyHubAccountStanding.state,
          classification_ids: null,
          source: null,
          is_violative_content_shown: null,
          is_dsa_eligible: null,
          violation_type: null,
        };
        const items = [Number(classificationId)];
        obj3.classification_ids = items;
        let SystemDM = source;
        if (source == null) {
          SystemDM = React7.SystemDM;
        }
        obj3.source = SystemDM;
        obj3.is_violative_content_shown = is_violative_content_shown;
        ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = safetyHubClassification);
        AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj3);
        if (hasItem1) {
          AutomatedUnderageAppealModalActionCreatorsDefault.openV2(classificationId, onClose);
          const tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
        } else if (hasItem) {
          AutomatedUnderageAppealModalActionCreatorsDefault.open(classificationId, onClose);
          const tmpResult5 = AutomatedUnderageAppealModalActionCreatorsDefault;
        } else if (isAppealEligible) {
          const obj4 = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
          MonitoringAgentDefault.increment(obj4);
          const tmpResult6 = MonitoringAgentDefault;
          const obj5 = { classificationId };
          AppealIngestionModalActionCreatorsDefault.open(obj5);
          const tmpResult7 = AppealIngestionModalActionCreatorsDefault;
        } else {
          LinkingDefault.openURL(constants.APPEALS_LINK);
          const tmpResult8 = LinkingDefault;
        }
      }
      const obj9 = {
        actions: classification.actions,
        classificationExpiration: tmp(tmp2[29]).getClassificationExpiration(classification),
      };
      const items5 = [closure_13(ClassificationActionsTaken, obj9)];
      const obj10 = {
        appealLink: null,
        communityGuidelinesLink: null,
        tosLink: null,
        classificationTypeText: null,
        policyExplainerLink: null,
        hidePolicyCard: null,
        appealComponent: null,
      };
      ({
        APPEALS_LINK: obj13.appealLink,
        COMMUNITY_GUIDELINES: obj13.communityGuidelinesLink,
        TOS_LINK: obj13.tosLink,
      } = ref);
      ({ description: obj13.classificationTypeText, explainer_link: obj13.policyExplainerLink } = classification);
      obj10.hidePolicyCard = hasItem1;
      if (hasItem1) {
        const obj11 = { onPressLetUsKnow };
        let tmp19Result6 = closure_13(ExpressiveModalV2AppealFooter, obj11);
      } else {
        const obj12 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
        tmp19Result6 = closure_13(AppealFooter, obj12);
      }
      const obj14 = { children: null };
      obj10.appealComponent = tmp19Result6;
      items5[1] = closure_13(ClassificationGuidance, obj10);
      obj14.children = items5;
      tmp19Result5 = closure_14(closure_15, obj14);
      let tmpResult6 = tmp(tmp2[29]);
    }
    items4[2] = tmp19Result5;
    let tmp19Result7 = !hasItem1;
    if (!hasItem1) {
      const obj15 = { onClose };
      tmp19Result7 = closure_13(ClassificationDetailFooter, obj15);
    }
    items4[3] = tmp19Result7;
    obj6.children = items4;
    tmp36Result = closure_14(classification, obj6);
    const obj7 = { classificationTypeText: null, guildMetadata: null };
    const tmp40 = source(tmp2[28]);
  }
  obj5.children = tmp36Result;
  obj4.children = closure_13(classificationId(onClose[27]).SafeAreaPaddingView, obj5);
  tmp19Result8 = closure_13(is_violative_content_shown, obj4);
  let obj3 = {
    accountStanding: safetyHubAccountStanding,
    classificationId,
    classificationState: safetyHubClassification,
    hasFlaggedContent: tmp7,
    source,
  };
  tmp16 = is_coppa2 && stateFromStores1;
  let tmpResult5 = classificationId(onClose[12]);
}
