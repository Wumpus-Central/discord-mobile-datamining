// === Module 11879: ClassificationDetail ===

// Module 11879 (ClassificationDetail)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import LinkingDefault from "Linking" /* 4255 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import SafetyHubModels from "SafetyHubModels" /* 8420 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11883 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 11885 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
function ClassificationHeader(classificationTypeText) {
  classificationTypeText = classificationTypeText.classificationTypeText;
  const guildMetadata = classificationTypeText.guildMetadata;
  const tmp = closure_16();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header, children: null };
  const memo = noop.useMemo(() => {
    let name = {
      classification_type: classificationTypeText,
      classificationHook(children, arg1) {
        return closure_1_13(classificationTypeText(closure_1_2[9]).Text, { variant: "heading-xl/bold", children }, arg1);
      }
    };
    let tmp3 = null;
    if (null != guildMetadata) {
      let member_type;
      if (guildMetadata != tmp3) {
        member_type = guildMetadata.member_type;
      }
      let X1ngSd = require;
      name = dependencyMap;
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = X1ngSd(1114).intl;
        X1ngSd = X1ngSd(1114).t.X1ngSd;
        name = {};
        const merged = Object.assign(name);
        tmp3 = guildMetadata == tmp3;
        name = undefined;
        if (!tmp3) {
          name = guildMetadata.name;
        }
        name.guildName = name;
        let formatResult = intl3.format(X1ngSd, name);
      } else {
        const intl2 = X1ngSd(1114).intl;
        const obj = {};
        const merged1 = Object.assign(name);
        name = undefined;
        if (guildMetadata != tmp3) {
          name = guildMetadata.name;
        }
        obj.guildName = name;
        formatResult = intl2.format(X1ngSd(1114).t.rmpEPD, obj);
      }
    } else {
      const intl = util.intl;
      return intl.format(util.t["39jfOz"], name);
    }
  }, items);
  obj = { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo };
  obj.children = closure_13(classificationTypeText(4556).Text, obj);
  return closure_13(closure_4, obj);
}
function ClassificationActionsTaken(arg0) {
  ({ actions, classificationExpiration } = arg0);
  let obj = initialize;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_16();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    obj = { style: tmp4.sectionContainer, children: null };
    obj = { variant: "eyebrow", color: "text-muted", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["O2nYk+"]);
    const items1 = [map1(Text_Text.Text, obj), ];
    const obj1 = { style: null, children: null };
    const items2 = [tmp4.actionsTaken];
    obj1.style = items2;
    const items3 = [found.map((action) => closure_1_13(ClassificationActionsTakenRows, { action }, action.id)), ];
    let tmp6Result = null;
    if (null != classificationExpiration) {
      const obj2 = { style: tmp4.classificationActionDescription, children: null };
      const obj3 = { variant: "text-xs/normal", children: [" ", "\u2022"] };
      const items4 = [closure_1_14(Text_Text.Text, obj3), ];
      const obj4 = { variant: "text-xs/normal", children: null };
      const intl2 = util.intl;
      const obj5 = { expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }) };
      obj4.children = intl2.format(util.t.TByIjT, obj5);
      items4[1] = map1(Text_Text.Text, obj4);
      obj2.children = items4;
      tmp6Result = closure_1_14(React4, obj2, "expiration");
    }
    items3[1] = tmp6Result;
    obj1.children = items3;
    items1[1] = closure_1_14(React4, obj1);
    obj.children = items1;
    tmp6Result = closure_1_14(React4, obj);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
function ClassificationActionsTakenRows(action) {
  closure_0 = closure_16();
  let obj = { children: null };
  const descriptions = action.action.descriptions;
  obj.children = descriptions.map((children, index) => {
    let obj = { style: closure_0.classificationActionDescription, children: null };
    const items = [closure_2_14(Text_Text.Text, { variant: "text-xs/normal", children: [" ", "\u2022"] }), ];
    obj = { variant: "text-xs/normal", children };
    items[1] = map1(Text_Text.Text, obj);
    obj.children = items;
    return closure_2_14(React4, obj, index);
  });
  return closure_13(closure_15, obj);
}
function ClassificationGuidance(hidePolicyCard) {
  hidePolicyCard = hidePolicyCard.hidePolicyCard;
  let tmp = undefined !== hidePolicyCard;
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = hidePolicyCard);
  if (tmp) {
    tmp = hidePolicyCard;
  }
  let obj = { style: closure_16().sectionContainer, children: null };
  obj = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["977iei"]);
  const items = [map1(Text_Text.Text, obj), , , ];
  obj = { variant: "text-sm/normal", children: null };
  const intl2 = util.intl;
  obj.children = intl2.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[1] = map1(Text_Text.Text, obj);
  let tmp4Result = !tmp;
  if (!tmp) {
    const obj1 = { classificationTypeText, policyExplainerLink };
    tmp4Result = map1(ClassificationPolicyCard, obj1);
  }
  items[2] = tmp4Result;
  items[3] = appealComponent;
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationPolicyCard(classificationDescription) {
  const policyExplainerLink = classificationDescription.policyExplainerLink;
  const tmp = closure_16();
  let obj = { children: null };
  obj = {
    onPress() {
      LinkingDefault.openURL(policyExplainerLink);
    },
    style: null,
    children: null
  };
  const items = [tmp.classificationPolicyCard];
  obj.style = items;
  obj = { style: tmp.classificationPolicyCardIcon, children: null };
  const tmp2 = TouchableHitBoxDefault;
  obj.children = closure_13(policyExplainerLink(9402).ShieldIcon, { size: "sm", color: nativeDefault.colors.TEXT_LINK });
  const items1 = [closure_13(closure_4, obj), ];
  const obj2 = { style: tmp.classificationPolicyCardContent, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = policyExplainerLink(1114).intl;
  obj3.children = intl.format(policyExplainerLink(1114).t.zxUdpj, { classificationDescription: classificationDescription.classificationTypeText });
  obj2.children = closure_13(policyExplainerLink(4556).Text, obj3);
  items1[1] = closure_13(closure_4, obj2);
  obj.children = items1;
  obj.children = closure_14(tmp2, obj);
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
  let obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj = {
    letUsKnowHook(children, arg1) {
      return map1(Text_Text.Text, { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
  };
  obj.children = intl.format(require("util").t.IFxUaT, obj);
  return closure_13(require("Text/Text").Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  let obj = { style: closure_16().letUsKnowContainer, children: null };
  if (hasBeenAppealed.hasBeenAppealed) {
    let tmpResult = map1(AppealStatus, {});
  } else {
    obj = { onPressLetUsKnow: hasBeenAppealed.onPressLetUsKnow };
    tmpResult = map1(LetUsKnow, obj);
  }
  obj.children = tmpResult;
  return map1(React4, obj);
}
function ExpressiveModalV2AppealFooter(arg0) {
  _require = arg0;
  const tmp = closure_16();
  let obj = { style: tmp.expressiveModalV2LetUsKnowContainer, children: null };
  obj = { variant: "text-sm/normal", color: "text-muted", style: tmp.expressiveModalV2LetUsKnowText, children: null };
  const intl = require("util").intl;
  obj = {
    letUsKnowHook(children, arg1) {
      return map1(Text_Text.Text, { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
  };
  obj.children = intl.format(require("util").t.LeAhOQ, obj);
  obj.children = closure_13(require("Text/Text").Text, obj);
  return closure_13(closure_4, obj);
}
function ClassificationDetailFooter(onClose) {
  let obj = { style: closure_16().redirectButtonWrapper, children: null };
  obj = { size: "md", text: null, onPress: null, grow: true };
  const intl = util.intl;
  obj.text = intl.string(util.t.elrEjL);
  obj.onPress = onClose.onClose;
  obj.children = map1(components_Button_Button.Button, obj);
  return map1(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(8419);
({ SafetyHubAnalyticsActionSource: closure_9, SafetyHubAnalyticsActions: c10, SafetyHubLinks: closure_11 } = SafetyHubConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
fn(4560);
let createStyles = { root: null, container: null, header: null, headerText: null, sectionContainer: null, actionsTaken: null, classificationDetailContainer: null, letUsKnowContainer: null, expressiveModalV2LetUsKnowContainer: null, expressiveModalV2LetUsKnowText: null, classificationPolicyCard: null, classificationPolicyCardIcon: null, classificationPolicyCardContent: null, classificationActionDescription: null, redirectButtonWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.root = createStyles;
createStyles.container = { display: "flex", flexDirection: "column", height: "100%", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32 };
let obj1 = { display: "flex", flexDirection: "column", height: "100%", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32 };
createStyles.header = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
createStyles.headerText = { textAlign: "center", maxWidth: 260 };
let obj2 = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
createStyles.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj3 = { display: "flex", gap: nativeDefault.space.PX_8 };
createStyles.actionsTaken = { display: "flex", paddingLeft: nativeDefault.space.PX_4, flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj4 = { display: "flex", paddingLeft: nativeDefault.space.PX_4, flexDirection: "column", gap: nativeDefault.space.PX_8 };
createStyles.classificationDetailContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
createStyles.letUsKnowContainer = { display: "flex", alignItems: "center" };
let obj5 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
createStyles.expressiveModalV2LetUsKnowContainer = { display: "flex", alignItems: "center", marginTop: nativeDefault.space.PX_16 };
createStyles.expressiveModalV2LetUsKnowText = { textAlign: "center" };
let obj6 = { display: "flex", alignItems: "center", marginTop: nativeDefault.space.PX_16 };
createStyles.classificationPolicyCard = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4, flexShrink: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: nativeDefault.radii.xxl };
createStyles.classificationPolicyCardIcon = size;
createStyles.classificationPolicyCardContent = { flex: 1 };
let obj7 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4, flexShrink: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.classificationActionDescription = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj8 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles.redirectButtonWrapper = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  const onClose = classificationId.onClose;
  let current = classificationId(onClose[17]);
  const safetyHubClassification = current.useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp4 = closure_16();
  let obj1 = classificationId(onClose[12]);
  let items = [hasItem];
  const stateFromStores = obj1.useStateFromStores(items, () => hasItem.getAppealEligibility());
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  let tmp6 = null != flagged_content;
  if (tmp6) {
    let length;
    if (classification != null) {
      length = classification.flagged_content.length;
    }
    tmp6 = length > 0;
  }
  const is_violative_content_shown = tmp6;
  let tmpResult = tmp(tmp2[18]);
  const safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
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
  tmpResult = tmp(tmp2[19]);
  if (hasItem1) {
    hasItem1 = tmpResult.useIsExpressiveModalV2Enabled(tmp(tmp2[20]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS);
  }
  current = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp6, source };
  const ref = safetyHubClassification.useRef(current);
  const effect = safetyHubClassification.useEffect(() => {
    closure_11.current = current;
  });
  const items1 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    if (null != classification) {
      current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      const obj = { action: closure_2_10.ViewViolationDetail, account_standing: accountStanding.state, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
      const _Number = Number;
      const items = [Number(classificationId)];
      obj.classification_ids = items;
      if (source == null) {
        source = React7.SystemDM;
      }
      obj.source = source;
      obj.is_violative_content_shown = hasFlaggedContent;
      ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = classificationState);
      obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj);
    }
  }, items1);
  if (null == classification) {
    if (safetyHubClassification.classificationRequestState === tmp(tmp2[10]).ClassificationRequestState.FAILED) {
      classificationId.onError();
      let tmp15Result2 = null;
    }
    return tmp15Result2;
  }
  current = { style: tmp4.root, children: null };
  obj1 = { style: tmp4.container, bottom: true, children: null };
  if (null == classification) {
    let tmp29Result = closure_13(isAppealEligible, { size: "large" });
  } else {
    const obj2 = { style: null, children: null };
    const items2 = [tmp4.classificationDetailContainer];
    obj2.style = items2;
    ({ description: obj17.classificationTypeText, guild_metadata: obj17.guildMetadata } = classification);
    const items3 = [closure_13(ClassificationHeader, { classificationTypeText: null, guildMetadata: null }), , , , ];
    let flagged_content1 = classification.flagged_content;
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    function onPressLetUsKnow() {
      let obj = { action: closure_2_10.ClickLetUsKnow, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
      const items = [Number(classificationId)];
      obj.classification_ids = items;
      let SystemDM = source;
      if (source == null) {
        SystemDM = React7.SystemDM;
      }
      obj.source = SystemDM;
      obj.is_violative_content_shown = is_violative_content_shown;
      ({ isDsaEligible: obj2.is_dsa_eligible, violationType: obj2.violation_type } = safetyHubClassification);
      obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj);
      if (hasItem1) {
        let tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
        tmpResult.openV2(classificationId, onClose);
      } else if (hasItem) {
        tmpResult = AutomatedUnderageAppealModalActionCreatorsDefault;
        tmpResult.open(classificationId, onClose);
      } else if (isAppealEligible) {
        obj = { name: MetricEvents.MetricEvents.APPEAL_INGESTION_VIEW };
        MonitoringAgentDefault.increment(obj);
        const tmpResult1 = MonitoringAgentDefault;
        const obj1 = { classificationId };
        AppealIngestionModalActionCreatorsDefault.open(obj1);
        const tmpResult2 = AppealIngestionModalActionCreatorsDefault;
      } else {
        LinkingDefault.openURL(constants.APPEALS_LINK);
        const tmpResult3 = LinkingDefault;
      }
    }
    const obj4 = { flaggedContent: flagged_content1 };
    items3[1] = closure_13(source(tmp2[27]), obj4);
    const obj5 = { actions: classification.actions, classificationExpiration: null };
    const obj3 = { classificationTypeText: null, guildMetadata: null };
    const tmp30 = classification;
    const tmp33 = source(tmp2[27]);
    obj5.classificationExpiration = tmp(tmp2[28]).getClassificationExpiration(classification);
    items3[2] = closure_13(ClassificationActionsTaken, obj5);
    const obj6 = { appealLink: null, communityGuidelinesLink: null, tosLink: null, classificationTypeText: null, policyExplainerLink: null, hidePolicyCard: null, appealComponent: null };
    ({ APPEALS_LINK: obj12.appealLink, COMMUNITY_GUIDELINES: obj12.communityGuidelinesLink, TOS_LINK: obj12.tosLink } = ref);
    ({ description: obj12.classificationTypeText, explainer_link: obj12.policyExplainerLink } = classification);
    obj6.hidePolicyCard = hasItem1;
    if (hasItem1) {
      const obj7 = { onPressLetUsKnow };
      let tmp15Result = closure_13(ExpressiveModalV2AppealFooter, obj7);
    } else {
      const obj8 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
      tmp15Result = closure_13(AppealFooter, obj8);
    }
    obj6.appealComponent = tmp15Result;
    items3[3] = closure_13(ClassificationGuidance, obj6);
    let tmp15Result1 = !hasItem1;
    if (!hasItem1) {
      const obj9 = { onClose };
      tmp15Result1 = closure_13(ClassificationDetailFooter, obj9);
    }
    items3[4] = tmp15Result1;
    obj2.children = items3;
    tmp29Result = closure_14(tmp30, obj2);
    let tmpResult1 = tmp(tmp2[28]);
  }
  obj1.children = tmp29Result;
  current.children = closure_13(classificationId(onClose[26]).SafeAreaPaddingView, obj1);
  tmp15Result2 = closure_13(is_violative_content_shown, current);
};