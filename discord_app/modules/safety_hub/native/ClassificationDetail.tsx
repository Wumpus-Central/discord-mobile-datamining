// discord_app/modules/safety_hub/native/ClassificationDetail.tsx
import expandEventProperties from "expandEventProperties";
import get_ActivityIndicator from "useSafetyHubClassifications";
import _getSystemLocale from "_getSystemLocale";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import SafetyHubView from "SafetyHubView";
import { AnalyticEvents } from "ME";
import jsxProd from "ClassificationEvidence";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { render } from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_14;
let closure_15;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function ClassificationHeader(classificationTypeText) {
  classificationTypeText = classificationTypeText.classificationTypeText;
  const guildMetadata = classificationTypeText.guildMetadata;
  const tmp = createCacheKey();
  const items = [classificationTypeText, guildMetadata];
  let obj = { style: tmp.header, children: null };
  const memo = React.useMemo(() => {
    let name = {
      classification_type: classificationTypeText,
      classificationHook(children) {
        return callback2(callback(table[9]).Text, { variant: "heading-xl/bold", children }, arg1);
      }
    };
    let tmp3 = null;
    if (null != guildMetadata) {
      let member_type;
      if (tmp2 != tmp3) {
        member_type = tmp2.member_type;
      }
      let X1ngSd = classificationTypeText;
      name = outer1_2;
      if (member_type === classificationTypeText(outer1_2[10]).MemberType.OWNER) {
        const intl3 = X1ngSd(name[11]).intl;
        X1ngSd = X1ngSd(name[11]).t.X1ngSd;
        name = {};
        const merged = Object.assign(name);
        tmp3 = tmp2 == tmp3;
        name = undefined;
        if (!tmp3) {
          name = tmp2.name;
        }
        name.guildName = name;
        let formatResult = intl3.format(X1ngSd, name);
      } else {
        const intl2 = X1ngSd(name[11]).intl;
        const obj = {};
        const merged1 = Object.assign(name);
        name = undefined;
        if (tmp2 != tmp3) {
          name = tmp2.name;
        }
        obj.guildName = name;
        formatResult = intl2.format(X1ngSd(name[11]).t.rmpEPD, obj);
      }
    } else {
      const intl = classificationTypeText(outer1_2[11]).intl;
      return intl.format(classificationTypeText(outer1_2[11]).t["39jfOz"], name);
    }
  }, items);
  obj = { variant: "text-lg/normal", style: tmp.headerText, color: "mobile-text-heading-primary", children: memo };
  obj[1] = callback(classificationTypeText(4251).Text, obj);
  return callback(closure_4, obj);
}
function ClassificationActionsTaken(arg0) {
  let actions;
  let classificationExpiration;
  ({ actions, classificationExpiration } = arg0);
  let obj = initialize;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = createCacheKey();
  const found = actions.filter((descriptions) => descriptions.descriptions.length > 0);
  if (0 !== found.length) {
    obj = { style: null, children: null };
    obj[0] = tmp4.sectionContainer;
    obj = { variant: "eyebrow", color: "text-muted", children: null };
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["O2nYk+"]);
    const items1 = [callback(tmp(4251).Text, obj), ];
    const obj1 = { style: null, children: null };
    const items2 = [tmp4.actionsTaken];
    obj1[0] = items2;
    const items3 = [found.map((action) => callback(closure_19, { action }, action.id)), ];
    let tmp6Result = null;
    if (null != classificationExpiration) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp4.classificationActionDescription;
      const obj3 = { variant: "text-xs/normal", children: null };
      obj3[1] = [" ", "\u2022"];
      const items4 = [tmp6(tmp(4251).Text, obj3), ];
      const obj4 = { variant: "text-xs/normal", children: null };
      const intl2 = tmp(1236).intl;
      const obj5 = { expirationDate: null };
      obj5[0] = classificationExpiration.toLocaleDateString(stateFromStores, { dateStyle: "medium" });
      obj4[1] = intl2.format(tmp(1236).t.TByIjT, obj5);
      items4[1] = tmp8(tmp(4251).Text, obj4);
      obj2[1] = items4;
      tmp6Result = tmp6(tmp7, obj2, "expiration");
    }
    items3[1] = tmp6Result;
    obj1[1] = items3;
    items1[1] = closure_14(closure_4, obj1);
    obj[1] = items1;
    tmp6Result = tmp6(tmp7, obj);
    tmp8 = callback;
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
function ClassificationActionsTakenRows(action) {
  let closure_0 = createCacheKey();
  const descriptions = action.action.descriptions;
  return callback(closure_15, {
    children: descriptions.map((children) => {
      let obj = { style: lib.classificationActionDescription, children: null };
      const items = [outer1_14(lib(outer1_2[9]).Text, { variant: "text-xs/normal", children: [" ", "\u2022"] }), ];
      obj = { variant: "text-xs/normal", children };
      items[1] = outer1_13(lib(outer1_2[9]).Text, obj);
      obj[1] = items;
      return outer1_14(outer1_4, obj, arg1);
    })
  });
}
function ClassificationGuidance(arg0) {
  let appealComponent;
  let classificationTypeText;
  let communityGuidelinesLink;
  let policyExplainerLink;
  let tosLink;
  ({ tosLink, communityGuidelinesLink, classificationTypeText, policyExplainerLink, appealComponent } = arg0);
  let obj = { style: createCacheKey().sectionContainer, children: null };
  obj = { variant: "eyebrow", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["977iei"]);
  const items = [callback(Text.Text, obj), , , ];
  obj = { variant: "text-sm/normal", children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t["1Z/+aA"], { tosLink, communityGuidelinesLink });
  items[1] = callback(Text.Text, obj);
  items[2] = callback(ClassificationPolicyCard, { classificationTypeText, policyExplainerLink });
  items[3] = appealComponent;
  obj[1] = items;
  return callback2(closure_4, obj);
}
function ClassificationPolicyCard(classificationDescription) {
  const policyExplainerLink = classificationDescription.policyExplainerLink;
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = {
    onPress() {
      outer1_1(outer1_2[14]).openURL(policyExplainerLink);
    },
    style: items,
    children: null
  };
  items = [tmp.classificationPolicyCard];
  obj = { style: tmp.classificationPolicyCardIcon, children: null };
  const obj1 = { size: "sm", color: null };
  obj1[1] = Themes.colors.TEXT_LINK;
  obj[1] = callback(policyExplainerLink(10119).ShieldIcon, obj1);
  const items1 = [callback(closure_4, obj), ];
  const obj2 = { style: tmp.classificationPolicyCardContent, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = policyExplainerLink(1236).intl;
  obj3[2] = intl.format(policyExplainerLink(1236).t.zxUdpj, { classificationDescription: classificationDescription.classificationTypeText });
  obj2[1] = callback(policyExplainerLink(4251).Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj[2] = items1;
  obj[0] = callback2(render, obj);
  return callback(closure_4, obj);
}
function AppealStatus() {
  const obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["I2H0/E"]);
  return callback(Text.Text, obj);
}
function LetUsKnow(arg0) {
  const _require = arg0;
  let obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl = _getSystemLocale.intl;
  obj = {
    letUsKnowHook(children) {
      return outer1_13(lib(outer1_2[9]).Text, { onPress: lib.onPressLetUsKnow, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
  };
  obj[2] = intl.format(_getSystemLocale.t.IFxUaT, obj);
  return callback(_Text.Text, obj);
}
function AppealFooter(hasBeenAppealed) {
  let obj = { style: createCacheKey().letUsKnowContainer, children: null };
  if (hasBeenAppealed.hasBeenAppealed) {
    let tmpResult = tmp(AppealStatus, {});
  } else {
    obj = { onPressLetUsKnow: null };
    obj[0] = hasBeenAppealed.onPressLetUsKnow;
    tmpResult = tmp(LetUsKnow, obj);
  }
  obj[1] = tmpResult;
  return closure_13(closure_4, obj);
}
function ClassificationDetailFooter(onClose) {
  let obj = { style: createCacheKey().redirectButtonWrapper, children: null };
  obj = { size: "md", text: null, onPress: null, grow: true };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.elrEjL);
  obj[2] = onClose.onClose;
  obj[1] = callback(Button.Button, obj);
  return callback(closure_4, obj);
}
({ View: c4, ActivityIndicator: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActionSource: c9, SafetyHubAnalyticsActions: c10, SafetyHubLinks: unpackModuleId } = SafetyHubView);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { root: null, container: null, header: null, headerText: null, sectionContainer: null, actionsTaken: null, classificationDetailContainer: null, letUsKnowContainer: null, classificationPolicyCard: null, classificationPolicyCardIcon: null, classificationPolicyCardContent: null, classificationActionDescription: null, redirectButtonWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "column", height: "100%", paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_32 };
let obj1 = { display: "flex", flexDirection: "column", height: "100%", paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_32 };
createCacheKey[2] = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_8 };
createCacheKey[3] = { textAlign: "center", maxWidth: 260 };
let obj2 = { display: "flex", textAlign: "center", alignItems: "center", flexDirection: "column", gap: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_8 };
createCacheKey[4] = { display: "flex", gap: require("Themes").space.PX_8 };
let obj3 = { display: "flex", gap: require("Themes").space.PX_8 };
createCacheKey[5] = { display: "flex", paddingLeft: require("Themes").space.PX_4, flexDirection: "column", gap: require("Themes").space.PX_8 };
let obj4 = { display: "flex", paddingLeft: require("Themes").space.PX_4, flexDirection: "column", gap: require("Themes").space.PX_8 };
createCacheKey[6] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_32 };
createCacheKey[7] = { display: "flex", alignItems: "center" };
let obj5 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_32 };
createCacheKey[8] = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: require("Themes").space.PX_12, padding: require("Themes").space.PX_12, marginTop: require("Themes").space.PX_4, flexShrink: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: require("Themes").space.PX_12, padding: require("Themes").space.PX_12, marginTop: require("Themes").space.PX_4, flexShrink: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[9] = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: require("Themes").radii.xxl };
createCacheKey[10] = { flex: 1 };
let obj7 = { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, width: 32, height: 32, borderRadius: require("Themes").radii.xxl };
createCacheKey[11] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8 };
let obj8 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey[12] = { width: 300, alignSelf: "center", marginTop: require("Themes").space.PX_32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj9 = { width: 300, alignSelf: "center", marginTop: require("Themes").space.PX_32 };
const result = require("_getSystemLocale").fileFinishedImporting("modules/safety_hub/native/ClassificationDetail.tsx");

export default function ConnectedClassificationDetail(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  const onClose = classificationId.onClose;
  let obj = classificationId(onClose[17]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
  const classification = safetyHubClassification.classification;
  const isAppealEligible = safetyHubClassification.isAppealEligible;
  const tmp4 = createCacheKey();
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
  let closure_6 = tmp6;
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
  obj = { accountStanding: safetyHubAccountStanding, classificationId, classificationState: safetyHubClassification, hasFlaggedContent: tmp6, source };
  let closure_11 = safetyHubClassification.useRef(obj);
  const effect = safetyHubClassification.useEffect(() => {
    closure_11.current = obj;
  });
  const items1 = [classification];
  const effect1 = safetyHubClassification.useEffect(() => {
    let accountStanding;
    let classificationId;
    let classificationState;
    let hasFlaggedContent;
    let source;
    if (null != classification) {
      const current = ref.current;
      ({ classificationState, source } = current);
      ({ accountStanding, classificationId, hasFlaggedContent } = current);
      let obj = source(onClose[19]);
      obj = { action: null, account_standing: null, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
      obj[0] = obj.ViewViolationDetail;
      obj[1] = accountStanding.state;
      const _Number = Number;
      const items = [Number(classificationId)];
      obj[2] = items;
      if (source == null) {
        source = hasItem1.SystemDM;
      }
      obj[3] = source;
      obj[4] = hasFlaggedContent;
      ({ isDsaEligible: obj2[5], violationType: obj2[6] } = classificationState);
      obj.track(outer1_12.SAFETY_HUB_ACTION, obj);
    }
  }, items1);
  if (null == classification) {
    if (safetyHubClassification.classificationRequestState === tmp(tmp2[10]).ClassificationRequestState.FAILED) {
      classificationId.onError();
      let tmp15Result = null;
    }
    return tmp15Result;
  }
  obj = { style: tmp4.root, children: null };
  obj1 = { style: tmp4.container, bottom: true, children: null };
  if (null == classification) {
    let tmp26Result = tmp15(isAppealEligible, { size: "large" });
  } else {
    const obj2 = { style: null, children: null };
    const items2 = [tmp4.classificationDetailContainer];
    obj2[0] = items2;
    ({ description: obj15[0], guild_metadata: obj15[1] } = classification);
    const items3 = [tmp15(ClassificationHeader, { classificationTypeText: null, guildMetadata: null }), , , , ];
    let flagged_content1 = classification.flagged_content;
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    const obj4 = { flaggedContent: null };
    obj4[0] = flagged_content1;
    items3[1] = tmp15(source(tmp2[21]), obj4);
    const obj5 = { actions: null, classificationExpiration: null };
    obj5[0] = classification.actions;
    tmpResult = tmp(tmp2[22]);
    obj5[1] = tmpResult.getClassificationExpiration(classification);
    items3[2] = tmp15(ClassificationActionsTaken, obj5);
    const obj6 = { appealLink: null, communityGuidelinesLink: null, tosLink: null, classificationTypeText: null, policyExplainerLink: null, appealComponent: null };
    ({ APPEALS_LINK: obj11[0], COMMUNITY_GUIDELINES: obj11[1], TOS_LINK: obj11[2] } = closure_11);
    ({ description: obj11[3], explainer_link: obj11[4] } = classification);
    const obj7 = { hasBeenAppealed: null, onPressLetUsKnow: null };
    obj7[0] = null != classification.appeal_status;
    obj7[1] = function onPressLetUsKnow() {
      let obj = source(onClose[19]);
      obj = { action: obj.ClickLetUsKnow, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_violative_content_shown: null, is_dsa_eligible: null, violation_type: null };
      const items = [Number(classificationId)];
      obj[2] = items;
      let SystemDM = source;
      if (source == null) {
        SystemDM = hasItem1.SystemDM;
      }
      obj[3] = SystemDM;
      obj[4] = closure_6;
      ({ isDsaEligible: obj2[5], violationType: obj2[6] } = safetyHubClassification);
      obj.track(outer1_12.SAFETY_HUB_ACTION, obj);
      if (hasItem1) {
        let tmpResult = tmp(tmp2[23]);
        tmpResult.openV2(tmp3, onClose);
      } else if (hasItem) {
        tmpResult = tmp(tmp2[23]);
        tmpResult.open(tmp3, onClose);
      } else if (isAppealEligible) {
        obj = { name: null };
        obj[0] = classificationId(tmp2[25]).MetricEvents.APPEAL_INGESTION_VIEW;
        tmp(tmp2[24]).increment(obj);
        const tmpResult1 = tmp(tmp2[24]);
        const obj1 = { classificationId: null };
        obj1[0] = tmp3;
        tmp(tmp2[26]).open(obj1);
        const tmpResult2 = tmp(tmp2[26]);
      } else {
        tmp(tmp2[14]).openURL(ref.APPEALS_LINK);
        const tmpResult3 = tmp(tmp2[14]);
      }
    };
    obj6[5] = tmp15(AppealFooter, obj7);
    items3[3] = tmp15(ClassificationGuidance, obj6);
    const obj8 = { onClose: null };
    obj8[0] = onClose;
    items3[4] = tmp15(ClassificationDetailFooter, obj8);
    obj2[1] = items3;
    tmp26Result = closure_14(classification, obj2);
    const obj3 = { classificationTypeText: null, guildMetadata: null };
    const tmp26 = closure_14;
    const tmp27 = classification;
    const tmp30 = source(tmp2[21]);
  }
  obj1[2] = tmp26Result;
  obj[1] = closure_13(classificationId(onClose[20]).SafeAreaPaddingView, obj1);
  tmp15Result = tmp15(closure_6, obj);
};