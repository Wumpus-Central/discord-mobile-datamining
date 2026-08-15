// discord_app/modules/safety_hub/native/SafetyHubViolationsContainer.tsx
import _slicedToArray from "_slicedToArray";
import ModalActionCreators from "../../../actions/ModalActionCreators.tsx";
import get_ActivityIndicator from "useIsNewClassification";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import SafetyHubView from "SafetyHubView";
import { AnalyticEvents } from "ME";
import jsxProd from "asyncRequireImpl";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { WarningIcon } from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { render } from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useSafetyHubClassifications } from "../hooks/useSafetyHubClassifications.tsx";
import { parseMessageEmbedForProps } from "../SafetyHubUtils.tsx";

let c5;
let c9;
let closure_12;
let closure_6;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function SafetyHubViolationsHeader(count) {
  let onClick;
  let opened;
  let status;
  ({ onClick, opened, status } = count);
  const tmp = createCacheKey();
  let obj = { onPress: onClick, style: items, children: null };
  items = [tmp.header];
  obj = { style: items1, children: null };
  items1 = [tmp.iconBackground];
  const colors = Themes.colors;
  obj = { color: tmp8 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_MUTED, size: "xs" };
  obj[1] = closure_11(WarningIcon.WarningIcon, obj);
  const items2 = [closure_11(closure_6, obj), , ];
  const obj1 = { style: items3, children: null };
  items3 = [tmp.headerTextContainer];
  const intl = tmp7(1236).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp7(1236).t;
  if ("active" === status) {
    const obj2 = { count: null };
    obj2[0] = str.toString();
    let formatToPlainStringResult = formatToPlainString(t.IeV2oY, obj2);
  } else {
    const obj3 = { count: null };
    obj3[0] = str.toString();
    formatToPlainStringResult = formatToPlainString(t.fZAHBT, obj3);
  }
  const items4 = [closure_11(Text.Text, { variant: "heading-sm/semibold", children: formatToPlainStringResult }), ];
  const intl2 = tmp7(1236).intl;
  const string = intl2.string;
  const t2 = tmp7(1236).t;
  if ("active" === status) {
    let stringResult = string(t2.XJ2YVR);
  } else {
    stringResult = string(t2.SzGV0g);
  }
  items4[1] = closure_11(Text.Text, { variant: "text-xxs/normal", color: "text-muted", children: stringResult });
  obj1[1] = items4;
  items2[1] = closure_12(closure_6, obj1);
  if (opened) {
    let ChevronSmallDownIcon = tmp7(13006).ChevronSmallUpIcon;
  } else {
    ChevronSmallDownIcon = tmp7(9464).ChevronSmallDownIcon;
  }
  const items5 = [tmp.chevron];
  items2[2] = closure_11(ChevronSmallDownIcon, { size: "md", style: items5 });
  obj[2] = items2;
  return closure_12(render, obj);
}
function EmptyActiveState() {
  let obj = { style: null, children: null };
  const items = [createCacheKey().emptyState];
  obj[0] = items;
  obj = { variant: "heading-sm/extrabold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.reLFaV);
  const items1 = [callback(Text.Text, obj), ];
  obj = { variant: "text-xs/normal", children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.ERdH1o);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(closure_6, obj);
}
function EmptyExpiredState() {
  let obj = { style: null, children: null };
  const items = [createCacheKey().emptyState];
  obj[0] = items;
  obj = { variant: "text-xs/normal", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.RV3AXf);
  obj[1] = callback(Text.Text, obj);
  return callback(closure_6, obj);
}
function RelativeIncidentTime(timestamp) {
  let obj = { style: createCacheKey().incidentDate, children: null };
  obj = { variant: "text-xs/medium", children: null };
  obj[1] = parseMessageEmbedForProps.getClassificationRelativeIncidentTime(timestamp.timestamp);
  obj[1] = callback(Text.Text, obj);
  return callback(closure_6, obj);
}
function NewBadge() {
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [, ];
  ({ incidentDate: arr[0], incidentDateNew: arr[1] } = tmp);
  obj = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp.newText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.QKMRC4);
  obj[1] = callback(Text.Text, obj);
  return callback(closure_6, obj);
}
function ClassificationDetail(classification) {
  classification = classification.classification;
  let id;
  let description;
  let guild_metadata;
  const tmp = createCacheKey();
  id = classification.id;
  description = classification.description;
  guild_metadata = classification.guild_metadata;
  let obj = description(guild_metadata[16]);
  let obj1 = id(guild_metadata[17]);
  const isNewClassification = obj1.useIsNewClassification(classification);
  const items = [description, guild_metadata];
  const items1 = [tmp.detailContainerOuter, ];
  let prop = null;
  const memo = React.useMemo(() => {
    function hook(children) {
      return callback2(callback(table[11]).Text, { variant: "heading-md/extrabold", children }, arg1);
    }
    let name = { description, descriptionHook: hook };
    let tmp4 = null;
    if (null != guild_metadata) {
      let member_type;
      if (tmp3 != tmp4) {
        member_type = tmp3.member_type;
      }
      let Lb0HVv = id;
      name = guild_metadata;
      if (member_type === id(guild_metadata[18]).MemberType.OWNER) {
        const intl3 = Lb0HVv(name[12]).intl;
        Lb0HVv = Lb0HVv(name[12]).t.Lb0HVv;
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
        const intl2 = Lb0HVv(name[12]).intl;
        const obj = { classification_type: null, classificationHook: null, guildName: null };
        obj[0] = tmp2;
        obj[1] = hook;
        name = undefined;
        if (tmp3 != tmp4) {
          name = tmp3.name;
        }
        obj[2] = name;
        formatResult = intl2.format(Lb0HVv(name[12]).t.rmpEPD, obj);
      }
    } else {
      const intl = id(guild_metadata[12]).intl;
      return intl.format(id(guild_metadata[12]).t.QY4g5t, name);
    }
  }, items);
  if (isNewClassification) {
    prop = tmp.detailContainerOuterNew;
  }
  obj = { style: items1, children: null };
  items1[1] = prop;
  obj = {
    onPress() {
      let obj = description(guild_metadata[19]);
      obj = { classificationId: id, source: outer1_8.StandingTab };
      obj.pushLazy(id(guild_metadata[21])(guild_metadata[20], guild_metadata.paths), obj);
    },
    children: null
  };
  obj1 = { style: items2, children: null };
  items2 = [tmp.detailContainerInner];
  const extractTimestampResult = obj.extractTimestamp(id);
  const tmp2 = description;
  const tmp5 = id;
  if (isNewClassification) {
    let tmp8Result = tmp8(NewBadge, {});
  } else {
    const obj2 = { timestamp: null };
    obj2[0] = extractTimestampResult;
    tmp8Result = tmp8(RelativeIncidentTime, obj2);
  }
  const items3 = [tmp8Result, closure_11(tmp5(guild_metadata[11]).Text, { variant: "heading-md/normal", children: memo })];
  obj1[1] = items3;
  obj[1] = closure_12(closure_6, obj1);
  obj[1] = closure_11(description(guild_metadata[9]), obj);
  return closure_11(closure_6, obj);
}
class SafetyHubViolationsContainer {
  constructor(arg0) {
    ({ status, classifications } = global);
    c1 = undefined;
    useState = undefined;
    c3 = undefined;
    useState = undefined;
    c5 = undefined;
    f93654 = undefined;
    useMemo = undefined;
    c8 = undefined;
    tmp = Fragment();
    tmp2 = c3(useState.useState(false), 2);
    first = tmp2[0];
    c1 = first;
    useState = tmp2[1];
    tmp4 = c3(require("handleSafetyHubRequestAgeVerificationResetModalAction"), 2);
    first1 = tmp4[0];
    c3 = first1;
    useState = tmp4[1];
    tmp6 = classifications;
    tmp7 = useState;
    obj = require("useSafetyHubAccountStanding");
    safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
    c5 = safetyHubAccountStanding;
    obj2 = require("initialize");
    items = [];
    items[0] = useMemo;
    stateFromStores = obj2.useStateFromStores(items, () => memo.getIsDsaEligible());
    f93654 = stateFromStores;
    items1 = [, ];
    items1[0] = classifications;
    items1[1] = first1;
    memo = useState.useMemo(() => classifications.slice(0, first1), items1);
    useMemo = memo;
    items2 = [, , , ];
    items2[0] = first;
    items2[1] = safetyHubAccountStanding.state;
    items2[2] = memo;
    items2[3] = stateFromStores;
    effect = useState.useEffect(() => {
      if (first) {
        let obj = first(698);
        obj = { action: null, account_standing: null, classification_ids: null, source: null, is_violative_content_shown: false, is_dsa_eligible: null };
        obj[0] = outer1_9.ViewViolationsDropdown;
        obj[1] = safetyHubAccountStanding.state;
        obj[2] = memo.map((id) => Number(id.id));
        obj[3] = num.StandingTab;
        obj[5] = stateFromStores;
        obj.track(outer1_10.SAFETY_HUB_ACTION, obj);
      }
    }, items2);
    num = 3;
    if (classifications.length - memo.length <= 3) {
      num = classifications.length - memo.length;
    }
    c8 = num;
    tmp11 = jsxs;
    tmp12 = f93654;
    obj = { style: items3, children: null };
    items3 = [];
    items3[0] = tmp.container;
    tmp13 = jsx;
    obj1 = {
      status,
      onClick() {
            return dependencyMap((arg0) => !arg0);
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
      obj2[0] = items5;
      items6 = [, , , , ];
      items6[0] = tmp13(tmp12, obj2);
      num2 = 0;
      tmp14 = memo.length > 0 && memo.map((classification) => callback2(closure_20, { classification }, classification.id));
      items6[1] = tmp14;
      tmp11Result = memo.length < classifications.length;
      if (tmp11Result) {
        tmp16 = Fragment;
        obj3 = { children: null };
        obj4 = { style: null };
        items7 = [];
        items7[0] = tmp.separator;
        obj4[0] = items7;
        items8 = [, ];
        items8[0] = tmp13(tmp12, obj4);
        obj5 = { style: null, children: null };
        items9 = [];
        items9[0] = tmp.moreButtonContainer;
        obj5[0] = items9;
        tmp17 = c5;
        obj6 = { style: null, onPress: null, children: null };
        items10 = [];
        items10[0] = tmp.moreButton;
        obj6[0] = items10;
        obj6[1] = function onPress() {
          return callback((arg0) => arg0 + closure_8);
        };
        obj7 = { variant: "heading-sm/semibold", children: null };
        intl = require("getSystemLocale").intl;
        obj8 = { nextPageSize: null };
        obj8[0] = num;
        obj7[1] = intl.format(require("getSystemLocale").t["9Ml56H"], obj8);
        obj6[2] = tmp13(require("Text").Text, obj7);
        obj5[1] = tmp13(c5, obj6);
        items8[1] = tmp13(tmp12, obj5);
        obj3[0] = items8;
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
      obj9[0] = items6;
      first = tmp11(tmp12, obj9);
    }
    items4[1] = first;
    obj[1] = items4;
    return tmp11(tmp12, obj);
  }
}
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActionSource: metroImportAll, SafetyHubAnalyticsActions: c9 } = SafetyHubView);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { connectedContainer: null, container: null, header: null, detailContainerOuter: null, detailContainerOuterNew: null, detailContainerInner: null, iconBackground: null, chevron: null, incidentDate: null, incidentDateNew: null, newText: null, emptyState: null, separator: null, moreButtonContainer: null, moreButton: null, headerTextContainer: null };
createCacheKey = { display: "flex", marginTop: require("Themes").space.PX_12, marginBottom: 36, gap: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_8, width: "100%" };
let obj1 = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_8, width: "100%" };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_16, width: "100%" };
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_16, width: "100%" };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_12, marginTop: 10 };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.md, padding: require("Themes").space.PX_12, marginTop: 10 };
createCacheKey[4] = { borderColor: require("Themes").colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
let obj4 = { borderColor: require("Themes").colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, borderWidth: 1, borderStyle: "solid" };
createCacheKey[5] = { display: "flex", gap: require("Themes").space.PX_8 };
let obj5 = { display: "flex", gap: require("Themes").space.PX_8 };
createCacheKey[6] = { display: "flex", borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
createCacheKey[7] = { marginLeft: "auto" };
let obj6 = { display: "flex", borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", padding: 6 };
createCacheKey[8] = { alignSelf: "flex-start", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.md, paddingVertical: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8 };
let obj7 = { alignSelf: "flex-start", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.md, paddingVertical: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[9] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, color: require("Themes").colors.CONTROL_PRIMARY_TEXT_DEFAULT };
createCacheKey[10] = { textTransform: "capitalize" };
let obj8 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, color: require("Themes").colors.CONTROL_PRIMARY_TEXT_DEFAULT };
createCacheKey[11] = { display: "flex", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.md, gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8, paddingTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_24 };
const obj9 = { display: "flex", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.md, gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8, paddingTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_24 };
createCacheKey[12] = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginTop: 10 };
createCacheKey[13] = { display: "flex", alignItems: "center", justifyContent: "center" };
const obj10 = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginTop: 10 };
createCacheKey[14] = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: require("Themes").radii.xs, borderBottomStartRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
createCacheKey[15] = { flexShrink: 0, flexGrow: 1, gap: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj11 = { display: "flex", alignItems: "center", justifyContent: "center", borderBottomEndRadius: require("Themes").radii.xs, borderBottomStartRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 29, width: 207 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/SafetyHubViolationsContainer.tsx");

export default SafetyHubViolationsContainer;
export const ConnectedSafetyHubViolationsContainer = function ConnectedSafetyHubViolationsContainer() {
  let obj = useSafetyHubClassifications;
  const activeSafetyHubClassifications = obj.useActiveSafetyHubClassifications();
  let obj1 = useSafetyHubClassifications;
  const expiredSafetyHubClassifications = obj1.useExpiredSafetyHubClassifications();
  if (0 !== activeSafetyHubClassifications.length) {
    obj = { style: null, children: null };
    const items = [tmp.connectedContainer];
    obj[0] = items;
    obj = { status: "active", classifications: null };
    obj[1] = activeSafetyHubClassifications;
    const items1 = [callback(SafetyHubViolationsContainer, obj), ];
    obj1 = { status: "expired", classifications: null };
    obj1[1] = expiredSafetyHubClassifications;
    items1[1] = callback(SafetyHubViolationsContainer, obj1);
    obj[1] = items1;
    let tmp2 = callback2(closure_6, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
};