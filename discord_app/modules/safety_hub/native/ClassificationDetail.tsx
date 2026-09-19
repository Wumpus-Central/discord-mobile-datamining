// === Module 12132: ClassificationDetail ===

// Module 12132 (ClassificationDetail)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef3066 from "module_3066" /* 3066 */;
import LinkingDefault from "Linking" /* 4451 */;
import Text_Text from "Text/Text" /* 4752 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5084 */;
import MetricEvents from "MetricEvents" /* 5089 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import TableRow from "TableRow" /* 5817 */;
import SafetyHubModels from "SafetyHubModels" /* 8691 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 10010 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 12136 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 12138 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import SafetyHubStore from "SafetyHubStore" /* 8701 */;

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
  obj.children = closure_13(classificationTypeText(4752).Text, { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo });
  return closure_13(closure_4, obj);
}
function SectionHeader(arg0) {
  ({ children, plain } = arg0);
  if (plain === undefined) {
    plain = false;
  }
  if (plain) {
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children };
    let obj = obj2;
  } else {
    obj = { variant: "eyebrow", color: "text-muted", children };
  }
  return map1(Text_Text.Text, obj);
}
function BulletRow(children) {
  let flag = children.large;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_16();
  let str = "text-xs/normal";
  if (flag) {
    str = "text-md/medium";
  }
  const obj = { style: tmp.classificationActionDescription, children: null };
  const items = [closure_1_14(Text_Text.Text, { variant: str, children: [" ", "\u2022"] }), map1(Text_Text.Text, { variant: str, style: tmp.bulletText, children: children.children })];
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationActionsTaken(arg0) {
  ({ actions, classificationExpiration, redesigned } = arg0);
  const items = [LocaleStore];
  const stateFromStores = redesigned(504).useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_16();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    const obj2 = { style: tmp4.sectionContainer, children: null };
    const obj3 = { plain: redesigned, children: null };
    const intl = redesigned(1115).intl;
    obj3.children = intl.string(redesigned(1115).t["O2nYk+"]);
    const items1 = [closure_13(SectionHeader, obj3), ];
    const obj4 = { style: null, children: null };
    const items2 = [tmp4.actionsTaken];
    obj4.style = items2;
    const items3 = [found.map((action) => map1(ClassificationActionsTakenRows, { action, large: redesigned }, action.id)), ];
    let tmp8Result = null;
    if (null != classificationExpiration) {
      const obj5 = { large: redesigned, children: null };
      const intl2 = redesigned(1115).intl;
      const obj6 = { expirationDate: classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" }) };
      obj5.children = intl2.format(redesigned(1115).t.TByIjT, obj6);
      tmp8Result = closure_13(BulletRow, obj5, "expiration");
    }
    items3[1] = tmp8Result;
    obj4.children = items3;
    items1[1] = closure_14(closure_4, obj4);
    obj2.children = items1;
    let tmp6Result = closure_14(closure_4, obj2);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
function ManualReviewDecidedUnderageActionsTaken() {
  const tmp = closure_16();
  const obj = { style: tmp.sectionContainer, children: null };
  const obj2 = { plain: true, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["O2nYk+"]);
  const items = [map1(SectionHeader, obj2), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.actionsTaken];
  obj3.style = items1;
  const obj4 = { large: true, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3066.rn3Gto);
  obj3.children = map1(BulletRow, obj4);
  items[1] = map1(React4, obj3);
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationActionsTakenRows(large) {
  large = large.large;
  const obj = { children: null };
  const descriptions = large.action.descriptions;
  obj.children = descriptions.map((children, index) => map1(BulletRow, { large, children }, index));
  return closure_13(closure_15, obj);
}
function ManualReviewDecidedUnderageGuidance() {
  const tmp = closure_16();
  const obj = { style: tmp.sectionContainer, children: null };
  const obj2 = { plain: true, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["977iei"]);
  const items = [map1(SectionHeader, obj2), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.actionsTaken];
  obj3.style = items1;
  const obj4 = { large: true, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3066["yV/t/V"]);
  obj3.children = map1(BulletRow, obj4);
  items[1] = map1(React4, obj3);
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ClassificationGuidance(arg0) {
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
  const obj = { style: closure_16().sectionContainer, children: null };
  const obj2 = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["977iei"]);
  const items = [map1(Text_Text.Text, obj2), , , ];
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[1] = map1(Text_Text.Text, obj3);
  items[2] = map1(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
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
    children: null
  };
  const items = [tmp.classificationPolicyCard];
  obj2.style = items;
  const obj3 = { style: tmp.classificationPolicyCardIcon, children: null };
  const tmp2 = TouchableHitBoxDefault;
  obj3.children = closure_13(policyExplainerLink(9515).ShieldIcon, { size: "sm", color: nativeDefault.colors.TEXT_LINK });
  const items1 = [closure_13(closure_4, obj3), ];
  const obj5 = { style: tmp.classificationPolicyCardContent, children: null };
  const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = policyExplainerLink(1115).intl;
  obj6.children = intl.format(policyExplainerLink(1115).t.zxUdpj, { classificationDescription: classificationDescription.classificationTypeText });
  obj5.children = closure_13(policyExplainerLink(4752).Text, obj6);
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
      return map1(Text_Text.Text, { onPress: onPressLetUsKnow.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
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
function ConfirmMinimumAgeGuidance(arg0) {
  ({ tosLink, communityGuidelinesLink, onPressLetUsKnow } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.confirmMinimumAgeSection, children: null };
  const obj2 = { plain: true, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.RVEiD0);
  const items = [map1(SectionHeader, obj2), , ];
  const obj3 = { label: null, onPress: null, arrow: true, start: true, end: true };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.YQPbuc);
  obj3.onPress = onPressLetUsKnow;
  items[1] = map1(TableRow.TableRow, obj3);
  const obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.guidelinesFooter, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.format(util.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[2] = map1(Text_Text.Text, obj4);
  obj.children = items;
  return closure_1_14(React4, obj);
}
function ManualReviewDecidedUnderageFooter(arg0) {
  ({ tosLink, communityGuidelinesLink } = arg0);
  const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3066.vPOpia, { tosLink, communityGuidelinesLink });
  return map1(Text_Text.Text, obj);
}
function ManualReviewDecidedUnderageView() {
  const obj = { children: null };
  const items = [map1(ManualReviewDecidedUnderageActionsTaken, {}), map1(ManualReviewDecidedUnderageGuidance, {}), map1(ManualReviewDecidedUnderageFooter, { tosLink: constants.TOS_LINK, communityGuidelinesLink: constants.COMMUNITY_GUIDELINES })];
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
const SafetyHubConstants = fn(8690);
({ SafetyHubAnalyticsActionSource: closure_9, SafetyHubAnalyticsActions: c10, SafetyHubLinks: closure_11 } = SafetyHubConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { root: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, container: null, header: null, headerText: null, sectionContainer: null, actionsTaken: null, classificationDetailContainer: null, letUsKnowContainer: null, confirmMinimumAgeSection: null, guidelinesFooter: null, classificationPolicyCard: null, classificationPolicyCardIcon: null, classificationPolicyCardContent: null, classificationActionDescription: null, bulletText: null, redirectButtonWrapper: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.container = { display: "flex", flexDirection: "column", height: "100%", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32 };
let obj4 = { display: "flex", flexDirection: "column", height: "100%", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_32 };
obj2.header = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj2.headerText = { textAlign: "center", maxWidth: 260 };
let obj5 = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj2.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj6 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj2.actionsTaken = { display: "flex", paddingLeft: nativeDefault.space.PX_4, flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj7 = { display: "flex", paddingLeft: nativeDefault.space.PX_4, flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj2.classificationDetailContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.letUsKnowContainer = { display: "flex", alignItems: "center" };
let obj8 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj2.confirmMinimumAgeSection = { display: "flex", gap: nativeDefault.space.PX_12 };
let obj9 = { display: "flex", gap: nativeDefault.space.PX_12 };
obj2.guidelinesFooter = { marginTop: nativeDefault.space.PX_12 };
let obj10 = { marginTop: nativeDefault.space.PX_12 };
obj2.classificationPolicyCard = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4, flexShrink: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: nativeDefault.radii.xxl };
obj2.classificationPolicyCardIcon = size;
obj2.classificationPolicyCardContent = { flex: 1 };
let obj11 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4, flexShrink: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.classificationActionDescription = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.bulletText = { flex: 1 };
let obj12 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.redirectButtonWrapper = { width: 300, alignSelf: "center", marginTop: nativeDefault.space.PX_32 };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  const onClose = classificationId.onClose;
  const safetyHubClassification = classificationId(onClose[19]).useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp4 = closure_16();
  let obj = classificationId(onClose[19]);
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
  const safetyHubAccountStanding = classificationId(onClose[20]).useSafetyHubAccountStanding();
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
  let tmpResult = classificationId(onClose[20]);
  if (hasItem1) {
    hasItem1 = tmpResult4.useIsExpressiveModalV2Enabled(tmp(tmp2[22]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS);
  }
  tmpResult4 = classificationId(onClose[21]);
  const items1 = [tmp5];
  let is_coppa2;
  const stateFromStores1 = classificationId(onClose[12]).useStateFromStores(items1, () => hasItem.getIsManualReviewDecidedUnderage());
  if (classification != null) {
    is_coppa2 = classification.is_coppa;
  }
  const ref = safetyHubClassification.useRef({ accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp7, source });
  const effect = safetyHubClassification.useEffect(() => {
    closure_11.current = obj3;
  });
  const items2 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    if (null != classification) {
      const current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      obj3 = { action: closure_2_10.ViewViolationDetail, account_standing: accountStanding.state, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
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
    let tmp37Result = closure_13(isAppealEligible, { size: "large" });
  } else {
    const obj6 = { style: null, children: null };
    const items3 = [tmp4.classificationDetailContainer];
    obj6.style = items3;
    ({ description: obj19.classificationTypeText, guild_metadata: obj19.guildMetadata } = classification);
    const items4 = [closure_13(ClassificationHeader, { classificationTypeText: null, guildMetadata: null }), , , ];
    let flagged_content1 = classification.flagged_content;
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    const obj8 = { flaggedContent: flagged_content1 };
    items4[1] = closure_13(source(tmp2[29]), obj8);
    if (tmp16) {
      let tmp19Result5 = closure_13(ManualReviewDecidedUnderageView, {});
    } else {
      function onPressLetUsKnow() {
        obj3 = { action: closure_2_10.ClickLetUsKnow, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
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
      const obj9 = { actions: classification.actions, classificationExpiration: tmp(tmp2[30]).getClassificationExpiration(classification), redesigned: hasItem1 };
      const items5 = [closure_13(ClassificationActionsTaken, obj9), ];
      if (hasItem1) {
        const obj10 = { tosLink: null, communityGuidelinesLink: null, onPressLetUsKnow: null };
        ({ TOS_LINK: obj15.tosLink, COMMUNITY_GUIDELINES: obj15.communityGuidelinesLink } = ref);
        obj10.onPressLetUsKnow = onPressLetUsKnow;
        let tmp19Result6 = closure_13(ConfirmMinimumAgeGuidance, obj10);
      } else {
        const obj11 = { appealLink: null, communityGuidelinesLink: null, tosLink: null, classificationTypeText: null, policyExplainerLink: null, appealComponent: null };
        ({ APPEALS_LINK: obj13.appealLink, COMMUNITY_GUIDELINES: obj13.communityGuidelinesLink, TOS_LINK: obj13.tosLink } = ref);
        ({ description: obj13.classificationTypeText, explainer_link: obj13.policyExplainerLink } = classification);
        const obj12 = { hasBeenAppealed: null != classification.appeal_status, onPressLetUsKnow };
        obj11.appealComponent = closure_13(AppealFooter, obj12);
        tmp19Result6 = closure_13(ClassificationGuidance, obj11);
      }
      const obj14 = { children: null };
      items5[1] = tmp19Result6;
      obj14.children = items5;
      tmp19Result5 = closure_14(closure_15, obj14);
      let tmpResult6 = tmp(tmp2[30]);
    }
    items4[2] = tmp19Result5;
    let tmp19Result7 = !hasItem1;
    if (!hasItem1) {
      const obj16 = { onClose };
      tmp19Result7 = closure_13(ClassificationDetailFooter, obj16);
    }
    items4[3] = tmp19Result7;
    obj6.children = items4;
    tmp37Result = closure_14(classification, obj6);
    const obj7 = { classificationTypeText: null, guildMetadata: null };
    const tmp41 = source(tmp2[29]);
  }
  obj5.children = tmp37Result;
  obj4.children = closure_13(classificationId(onClose[28]).SafeAreaPaddingView, obj5);
  tmp19Result8 = closure_13(is_violative_content_shown, obj4);
  let obj3 = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp7, source };
  tmp16 = is_coppa2 && stateFromStores1;
  let tmpResult5 = classificationId(onClose[12]);
};