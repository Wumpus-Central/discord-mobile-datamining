// === Module 14773: SafetyHubViolationsContainer ===

// Module 14773 (SafetyHubViolationsContainer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8418 */;
import SafetyHubModels from "SafetyHubModels" /* 8420 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11880 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
function SafetyHubViolationsHeader(count) {
  ({ onClick, opened, status } = count);
  const tmp = closure_14();
  let obj = { onPress: onClick, style: null, children: null };
  const items = [tmp.header];
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.iconBackground];
  obj.style = items1;
  const colors = nativeDefault.colors;
  obj = { color: tmp8 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" };
  obj.children = closure_1_11(WarningIcon.WarningIcon, obj);
  const items2 = [closure_1_11(timestampProducer, obj), , ];
  const obj1 = { style: null, children: null };
  const items3 = [tmp.headerTextContainer];
  obj1.style = items3;
  const intl = tmp7(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp7(1114).t;
  if ("active" === status) {
    const obj2 = { count: str.toString() };
    let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj2);
  } else {
    const obj3 = { count: str.toString() };
    formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj3);
  }
  const items4 = [closure_1_11(Text_Text.Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }), ];
  const intl2 = tmp7(1114).intl;
  const string = intl2.string;
  const t2 = tmp7(1114).t;
  if ("active" === status) {
    let stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  items4[1] = closure_1_11(Text_Text.Text, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
  obj1.children = items4;
  items2[1] = closure_1_12(timestampProducer, obj1);
  if (opened) {
    let ChevronSmallDownIcon = tmp7(13573).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp7(11153).ChevronSmallDownIcon;
  }
  const obj4 = { size: "md", style: null };
  const items5 = [tmp.chevron];
  obj4.style = items5;
  items2[2] = closure_1_11(ChevronSmallDownIcon, obj4);
  obj.children = items2;
  return closure_1_12(TouchableHitBoxDefault, obj);
}
function EmptyActiveState() {
  let obj = { style: null, children: null };
  const items = [closure_14().emptyState];
  obj.style = items;
  obj = { variant: "heading-sm/extrabold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.reLFaV);
  const items1 = [closure_1_11(Text_Text.Text, obj), ];
  obj = { variant: "text-xs/normal", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.ERdH1o);
  items1[1] = closure_1_11(Text_Text.Text, obj);
  obj.children = items1;
  return closure_1_12(timestampProducer, obj);
}
function EmptyExpiredState() {
  let obj = { style: null, children: null };
  const items = [closure_14().emptyState];
  obj.style = items;
  obj = { variant: "text-xs/normal", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.RV3AXf);
  obj.children = closure_1_11(Text_Text.Text, obj);
  return closure_1_11(timestampProducer, obj);
}
function RelativeIncidentTime(timestamp) {
  let obj = { style: closure_14().incidentDate, children: null };
  obj = { variant: "text-xs/medium", children: SafetyHubUtils.getClassificationRelativeIncidentTime(timestamp.timestamp) };
  obj.children = closure_1_11(Text_Text.Text, obj);
  return closure_1_11(timestampProducer, obj);
}
function NewBadge() {
  const tmp = closure_14();
  let obj = { style: null, children: null };
  const items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj.style = items;
  obj = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.QKMRC4);
  obj.children = closure_1_11(Text_Text.Text, obj);
  return closure_1_11(timestampProducer, obj);
}
function ClassificationDetail(classification) {
  classification = classification.classification;
  const tmp = closure_14();
  const id = classification.id;
  const description = classification.description;
  const guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[16]);
  let obj1 = id(guild_metadata[17]);
  const isNewClassification = obj1.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = noop.useMemo(() => {
    function hook(children, arg1) {
      return closure_1_11(id(guild_metadata[11]).Text, { variant: "heading-md/extrabold", children }, arg1);
    }
    let name = { description, descriptionHook: hook };
    let tmp4 = null;
    if (null != guild_metadata) {
      let member_type;
      if (tmp3 != tmp4) {
        member_type = tmp3.member_type;
      }
      let Lb0HVv = require;
      name = dependencyMap;
      if (member_type === SafetyHubModels.MemberType.OWNER) {
        const intl3 = Lb0HVv(1114).intl;
        Lb0HVv = Lb0HVv(1114).t.Lb0HVv;
        name = {};
        const merged = Object.assign(name);
        tmp4 = tmp3 == tmp4;
        name = undefined;
        if (!tmp4) {
          name = tmp3.name;
        }
        name.guildName = name;
        let formatResult = intl3.format(Lb0HVv, name);
      } else {
        const intl2 = Lb0HVv(1114).intl;
        const obj = { classification_type: tmp2, classificationHook: hook, guildName: null };
        name = undefined;
        if (tmp3 != tmp4) {
          name = tmp3.name;
        }
        obj.guildName = name;
        formatResult = intl2.format(Lb0HVv(1114).t.rmpEPD, obj);
      }
    } else {
      const intl = util.intl;
      return intl.format(util.t.QY4g5t, name);
    }
  }, items);
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  obj = {
    onPress() {
      const obj = { classificationId: id, source: React6.StandingTab };
      obj.pushLazy(asyncRequireImpl(11878, dependencyMap.paths), obj);
    },
    children: null
  };
  obj1 = { style: null, children: null };
  const items2 = [tmp.detailContainerInner];
  obj1.style = items2;
  const extractTimestampResult = obj.extractTimestamp(id);
  const tmp5 = id;
  if (isNewClassification) {
    let tmp8Result = tmp8(NewBadge, {});
  } else {
    const obj2 = { timestamp: extractTimestampResult };
    tmp8Result = tmp8(RelativeIncidentTime, obj2);
  }
  const items3 = [tmp8Result, closure_11(tmp5(guild_metadata[11]).Text, { variant: "heading-md/normal", children: memo })];
  obj1.children = items3;
  obj.children = closure_12(closure_6, obj1);
  obj.children = closure_11(description(guild_metadata[9]), obj);
  return closure_11(closure_6, obj);
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
        const obj = { action: React7.ViewViolationsDropdown, account_standing: safetyHubAccountStanding.state, classification_ids: memo.map((id) => Number(id.id)), source: React6.StandingTab, is_violative_content_shown: false, is_dsa_eligible: stateFromStores };
        obj.track(AnalyticEvents.SAFETY_HUB_ACTION, obj);
      }
    }, items2);
    num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    closure_8 = num;
    tmp11 = jsxs;
    tmp12 = closure_6;
    obj = { style: null, children: null };
    items3 = [];
    items3[0] = tmp.container;
    obj.style = items3;
    tmp13 = jsx;
    obj1 = {
      status,
      onClick() {
            return closure_2((arg0) => !arg0);
          },
      opened: first,
      count: classifications.length
    };
    items4 = [, ];
    items4[0] = jsx(SafetyHubViolationsHeader, obj1);
    if (first) {
      obj2 = { style: null };
      items5 = [];
      items5[0] = tmp.separator;
      obj2.style = items5;
      items6 = [, , , , ];
      items6[0] = tmp13(tmp12, obj2);
      num2 = 0;
      tmp14 = memo.length > 0 && memo.map((classification) => closure_1_11(ClassificationDetail, { classification }, classification.id));
      items6[1] = tmp14;
      tmp11Result = memo.length < classifications.length;
      if (tmp11Result) {
        tmp16 = Fragment;
        obj3 = { children: null };
        obj4 = { style: null };
        items7 = [];
        items7[0] = tmp.separator;
        obj4.style = items7;
        items8 = [, ];
        items8[0] = tmp13(tmp12, obj4);
        obj5 = { style: null, children: null };
        items9 = [];
        items9[0] = tmp.moreButtonContainer;
        obj5.style = items9;
        tmp17 = closure_5;
        obj6 = { style: null, onPress: null, children: null };
        items10 = [];
        items10[0] = tmp.moreButton;
        obj6.style = items10;
        obj6.onPress = function onPress() {
          return closure_4((arg0) => arg0 + num);
        };
        obj7 = { variant: "heading-sm/semibold", children: null };
        intl = tmp6(tmp7[12]).intl;
        obj8 = { nextPageSize: null };
        obj8.nextPageSize = num;
        obj7.children = intl.format(tmp6(tmp7[12]).t["9Ml56H"], obj8);
        obj6.children = tmp13(tmp6(tmp7[11]).Text, obj7);
        obj5.children = tmp13(closure_5, obj6);
        items8[1] = tmp13(tmp12, obj5);
        obj3.children = items8;
        tmp11Result = tmp11(Fragment, obj3);
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
      obj9 = { children: null };
      items6[4] = tmp13Result1;
      obj9.children = items6;
      first = tmp11(tmp12, obj9);
    }
    items4[1] = first;
    obj.children = items4;
    return tmp11(tmp12, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SafetyHubConstants = fn(8419);
({ SafetyHubAnalyticsActionSource: closure_8, SafetyHubAnalyticsActions: closure_9 } = SafetyHubConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { connectedContainer: null, container: null, header: null, detailContainerOuter: null, detailContainerOuterNew: null, detailContainerInner: null, iconBackground: null, chevron: null, incidentDate: null, incidentDateNew: null, newText: null, emptyState: null, separator: null, moreButtonContainer: null, moreButton: null, headerTextContainer: null };
createStyles = { display: "flex", marginTop: nativeDefault.space.PX_12, marginBottom: 36, gap: nativeDefault.space.PX_12 };
createStyles.connectedContainer = createStyles;
createStyles.container = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_8, width: "100%" };
let obj1 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_8, width: "100%" };
createStyles.header = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, width: "100%" };
createStyles.detailContainerOuter = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: 10 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: 10 };
createStyles.detailContainerOuterNew = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
let obj4 = { borderColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
createStyles.detailContainerInner = { display: "flex", gap: nativeDefault.space.PX_8 };
let obj5 = { display: "flex", gap: nativeDefault.space.PX_8 };
createStyles.iconBackground = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
createStyles.chevron = { marginLeft: "auto" };
let obj6 = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
createStyles.incidentDate = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
let obj7 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.incidentDateNew = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
createStyles.newText = { textTransform: "capitalize" };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
createStyles.emptyState = { display: "flex", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 10 };
createStyles.separator = size;
createStyles.moreButtonContainer = { display: "flex", alignItems: "center", justifyContent: "center" };
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: nativeDefault.radii.xs, borderBottomStartRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
createStyles.moreButton = size1;
createStyles.headerTextContainer = { flexShrink: 0, flexGrow: 1, gap: 2 };
const value = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  let obj = useSafetyHubClassifications;
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  let obj1 = useSafetyHubClassifications;
  const expiredSafetyHubClassifications = obj1.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    obj = { style: null, children: null };
    const items = [tmp.connectedContainer];
    obj.style = items;
    obj = { status: "active", classifications: activeSafetyHubClassifications };
    const items1 = [closure_1_11(SafetyHubViolationsContainer, obj), ];
    obj1 = { status: "expired", classifications: expiredSafetyHubClassifications };
    items1[1] = closure_1_11(SafetyHubViolationsContainer, obj1);
    obj.children = items1;
    let tmp2 = closure_1_12(timestampProducer, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
};