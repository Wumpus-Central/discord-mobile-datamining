// === Module 14872: SafetyHubViolationsContainer ===

// Module 14872 (SafetyHubViolationsContainer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import Text_Text from "Text/Text" /* 4635 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8539 */;
import SafetyHubModels from "SafetyHubModels" /* 8541 */;
import WarningIcon from "WarningIcon" /* 8714 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9182 */;
import ChevronSmallDownIcon2 from "ChevronSmallDownIcon" /* 11292 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 12015 */;
import ChevronSmallUpIcon from "ChevronSmallUpIcon" /* 13666 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8551 */;

require = fn;
function SafetyHubViolationsHeader(count) {
  ({ onClick, opened, status } = count);
  const tmp = closure_14();
  const obj = { onPress: onClick, style: null, children: null };
  const items = [tmp.header];
  obj.style = items;
  const obj2 = { style: null, children: null };
  const items1 = [tmp.iconBackground];
  obj2.style = items1;
  const colors = nativeDefault.colors;
  obj2.children = closure_1_11(WarningIcon.WarningIcon, { color: "active" === status ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" });
  const items2 = [closure_1_11(timestampProducer, obj2), , ];
  const obj4 = { style: null, children: null };
  const items3 = [tmp.headerTextContainer];
  obj4.style = items3;
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if ("active" === status) {
    const obj5 = { count: str.toString() };
    let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj5);
  } else {
    const obj6 = { count: str.toString() };
    formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj6);
  }
  const items4 = [closure_1_11(Text_Text.Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }), ];
  const intl2 = util.intl;
  const string = intl2.string;
  const t2 = util.t;
  if ("active" === status) {
    let stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  items4[1] = closure_1_11(Text_Text.Text, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
  obj4.children = items4;
  items2[1] = closure_1_12(timestampProducer, obj4);
  if (opened) {
    let ChevronSmallDownIcon = ChevronSmallUpIcon.ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
  }
  const obj7 = { size: "md", style: null };
  const items5 = [tmp.chevron];
  obj7.style = items5;
  items2[2] = closure_1_11(ChevronSmallDownIcon, obj7);
  obj.children = items2;
  return closure_1_12(TouchableHitBoxDefault, obj);
}
function EmptyActiveState() {
  const obj = { style: null, children: null };
  const items = [closure_14().emptyState];
  obj.style = items;
  const obj2 = { variant: "heading-sm/extrabold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.reLFaV);
  const items1 = [closure_1_11(Text_Text.Text, obj2), ];
  const obj3 = { variant: "text-xs/normal", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.ERdH1o);
  items1[1] = closure_1_11(Text_Text.Text, obj3);
  obj.children = items1;
  return closure_1_12(timestampProducer, obj);
}
function EmptyExpiredState() {
  const obj = { style: null, children: null };
  const items = [closure_14().emptyState];
  obj.style = items;
  const obj2 = { variant: "text-xs/normal", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.RV3AXf);
  obj.children = closure_1_11(Text_Text.Text, obj2);
  return closure_1_11(timestampProducer, obj);
}
function RelativeIncidentTime(timestamp) {
  const obj = { style: closure_14().incidentDate, children: null };
  const obj2 = { variant: "text-xs/medium", children: SafetyHubUtils.getClassificationRelativeIncidentTime(timestamp.timestamp) };
  obj.children = closure_1_11(Text_Text.Text, obj2);
  return closure_1_11(timestampProducer, obj);
}
function NewBadge() {
  const tmp = closure_14();
  const obj = { style: null, children: null };
  const items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj.style = items;
  const obj2 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.QKMRC4);
  obj.children = closure_1_11(Text_Text.Text, obj2);
  return closure_1_11(timestampProducer, obj);
}
function ClassificationDetail(classification) {
  classification = classification.classification;
  const tmp = closure_14();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[16]);
  const tmp2 = description;
  const extractTimestampResult = description(guild_metadata[16]).extractTimestamp(id);
  const tmp5 = id;
  const isNewClassification = id(guild_metadata[17]).useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = noop.useMemo(() => {
    function hook(children, arg1) {
      return closure_1_11(id(guild_metadata[11]).Text, { variant: "heading-md/extrabold", children }, arg1);
    }
    let obj2 = { description, descriptionHook: hook };
    let tmp4 = null;
    if (null != guild_metadata) {
      let member_type;
      if (guild_metadata != tmp4) {
        member_type = guild_metadata.member_type;
      }
      let Lb0HVv = require;
      let obj = dependencyMap;
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = Lb0HVv(1115).intl;
        Lb0HVv = Lb0HVv(1115).t.Lb0HVv;
        obj = {};
        const merged = Object.assign(obj2);
        tmp4 = guild_metadata == tmp4;
        obj2 = undefined;
        if (!tmp4) {
          obj2 = guild_metadata.name;
        }
        obj.guildName = obj2;
        let formatResult = intl3.format(Lb0HVv, obj);
      } else {
        const intl2 = Lb0HVv(1115).intl;
        const obj4 = { classification_type: tmp2, classificationHook: hook, guildName: null };
        let name;
        if (guild_metadata != tmp4) {
          name = guild_metadata.name;
        }
        obj4.guildName = name;
        formatResult = intl2.format(Lb0HVv(1115).t.rmpEPD, obj4);
      }
    } else {
      const intl = util.intl;
      return intl.format(util.t.QY4g5t, obj2);
    }
  }, items);
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = prop;
  let obj4 = {
    onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12013, dependencyMap.paths), { classificationId: id, source: React6.StandingTab });
    },
    children: null
  };
  const obj5 = { style: null, children: null };
  const items2 = [tmp.detailContainerInner];
  obj5.style = items2;
  let obj2 = id(guild_metadata[17]);
  if (isNewClassification) {
    let tmp8Result = closure_11(NewBadge, {});
  } else {
    const obj6 = { timestamp: extractTimestampResult };
    tmp8Result = closure_11(RelativeIncidentTime, obj6);
  }
  const items3 = [tmp8Result, closure_11(tmp5(guild_metadata[11]).Text, { variant: "heading-md/normal", children: memo })];
  obj5.children = items3;
  obj4.children = closure_12(closure_6, obj5);
  obj3.children = closure_11(tmp2(guild_metadata[9]), obj4);
  return closure_11(closure_6, obj3);
}
class SafetyHubViolationsContainer {
  constructor(arg0) {
    ({ status, classifications } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    tmp = closure_14();
    tmp2 = closure_3(closure_4.useState(false), 2);
    first = tmp2[0];
    closure_1 = first;
    closure_2 = tmp2[1];
    tmp4 = closure_3(closure_4.useState(3), 2);
    first1 = tmp4[0];
    closure_3 = first1;
    closure_4 = tmp4[1];
    tmp6 = classifications;
    tmp7 = closure_2;
    obj = classifications(closure_2[22]);
    safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
    closure_5 = safetyHubAccountStanding;
    obj2 = classifications(closure_2[23]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
    closure_6 = stateFromStores;
    items1 = [, ];
    items1[0] = classifications;
    items1[1] = first1;
    memo = closure_4.useMemo(() => classifications.slice(0, first1), items1);
    closure_7 = memo;
    items2 = [, , , ];
    items2[0] = first;
    items2[1] = safetyHubAccountStanding.state;
    items2[2] = memo;
    items2[3] = stateFromStores;
    effect = closure_4.useEffect(() => {
      if (first) {
        const obj2 = { action: React7.ViewViolationsDropdown, account_standing: safetyHubAccountStanding.state, classification_ids: memo.map((id) => Number(id.id)), source: React6.StandingTab, is_violative_content_shown: false, is_dsa_eligible: stateFromStores };
        AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_HUB_ACTION, obj2);
      }
    }, items2);
    num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    closure_8 = num;
    tmp11 = jsxs;
    tmp12 = closure_6;
    obj1 = { style: null, children: null };
    items3 = [];
    items3[0] = tmp.container;
    obj1.style = items3;
    tmp13 = jsx;
    obj13 = {
      status,
      onClick() {
            return closure_2((arg0) => !arg0);
          },
      opened: first,
      count: classifications.length
    };
    items4 = [, ];
    items4[0] = jsx(SafetyHubViolationsHeader, obj13);
    if (first) {
      obj14 = { style: null };
      items5 = [];
      items5[0] = tmp.separator;
      obj14.style = items5;
      items6 = [, , , , ];
      items6[0] = tmp13(tmp12, obj14);
      num2 = 0;
      tmp14 = memo.length > 0 && memo.map((classification) => closure_1_11(ClassificationDetail, { classification }, classification.id));
      items6[1] = tmp14;
      tmp11Result = memo.length < classifications.length;
      if (tmp11Result) {
        tmp16 = Fragment;
        obj15 = { children: null };
        obj16 = { style: null };
        items7 = [];
        items7[0] = tmp.separator;
        obj16.style = items7;
        items8 = [, ];
        items8[0] = tmp13(tmp12, obj16);
        obj17 = { style: null, children: null };
        items9 = [];
        items9[0] = tmp.moreButtonContainer;
        obj17.style = items9;
        tmp17 = closure_5;
        obj18 = { style: null, onPress: null, children: null };
        items10 = [];
        items10[0] = tmp.moreButton;
        obj18.style = items10;
        obj18.onPress = function onPress() {
          return closure_4((arg0) => arg0 + num);
        };
        obj19 = { variant: "heading-sm/semibold", children: null };
        intl = tmp6(tmp7[12]).intl;
        obj20 = { nextPageSize: null };
        obj20.nextPageSize = num;
        obj19.children = intl.format(tmp6(tmp7[12]).t["9Ml56H"], obj20);
        obj18.children = tmp13(tmp6(tmp7[11]).Text, obj19);
        obj17.children = tmp13(closure_5, obj18);
        items8[1] = tmp13(tmp12, obj17);
        obj15.children = items8;
        tmp11Result = tmp11(Fragment, obj15);
      }
      items6[2] = tmp11Result;
      tmp13Result = 0 === memo.length;
      if (tmp13Result) {
        str = "active";
        tmp13Result = "active" === status;
      }
      if (tmp13Result) {
        tmp19 = EmptyActiveState;
        tmp13Result = tmp13(EmptyActiveState, {});
      }
      items6[3] = tmp13Result;
      tmp13Result1 = 0 === memo.length;
      if (tmp13Result1) {
        str2 = "expired";
        tmp13Result1 = "expired" === status;
      }
      if (tmp13Result1) {
        tmp21 = EmptyExpiredState;
        tmp13Result1 = tmp13(EmptyExpiredState, {});
      }
      obj21 = { children: null };
      items6[4] = tmp13Result1;
      obj21.children = items6;
      first = tmp11(tmp12, obj21);
    }
    items4[1] = first;
    obj1.children = items4;
    return tmp11(tmp12, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(8540);
({ SafetyHubAnalyticsActionSource: closure_8, SafetyHubAnalyticsActions: closure_9 } = SafetyHubConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { connectedContainer: { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 }, container: null, header: null, detailContainerOuter: null, detailContainerOuterNew: null, detailContainerInner: null, iconBackground: null, chevron: null, incidentDate: null, incidentDateNew: null, newText: null, emptyState: null, separator: null, moreButtonContainer: null, moreButton: null, headerTextContainer: null };
let obj3 = { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 };
obj2.container = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_8, width: "100%" };
let obj4 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_8, width: "100%" };
obj2.header = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
obj2.detailContainerOuter = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: 10 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: 10 };
obj2.detailContainerOuterNew = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
let obj7 = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
obj2.detailContainerInner = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj8 = { display: "flex", gap: nativeDefault.space.PX_8 };
obj2.iconBackground = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
obj2.chevron = { marginLeft: "auto" };
let obj9 = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
obj2.incidentDate = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
let obj10 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
obj2.incidentDateNew = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj2.newText = { textTransform: "capitalize" };
let obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj2.emptyState = { display: "flex", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 10 };
obj2.separator = size;
obj2.moreButtonContainer = { display: "flex", alignItems: "center", justifyContent: "center" };
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: nativeDefault.radii.xs, borderBottomStartRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
obj2.moreButton = size1;
obj2.headerTextContainer = { flexShrink: 0, flexGrow: 1, gap: 2 };
const value = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  const tmp = closure_14();
  const activeSafetyHubClassifications = useSafetyHubClassifications.useActiveSafetyHubClassifications();
  const expiredSafetyHubClassifications = useSafetyHubClassifications.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    const obj3 = { style: null, children: null };
    const items = [tmp.connectedContainer];
    obj3.style = items;
    const obj4 = { status: "active", classifications: activeSafetyHubClassifications };
    const items1 = [closure_1_11(SafetyHubViolationsContainer, obj4), ];
    const obj5 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items1[1] = closure_1_11(SafetyHubViolationsContainer, obj5);
    obj3.children = items1;
    let tmp2 = closure_1_12(timestampProducer, obj3);
  } else {
    tmp2 = null;
  }
  return tmp2;
};