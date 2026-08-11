// discord_app/modules/safety_hub/native/SafetyHubAccountStanding.tsx
import _slicedToArray from "_slicedToArray";
import registerAsset from "registerAsset";
import { View } from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import { SafetyHubLinks } from "SafetyHubView";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { [arg1(7808).AccountStandingState.ALL_GOOD]: { left: "0%" } };
obj = { left: "25%", transform: null };
obj = { translateX: null };
obj[0] = -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH;
let items = [obj];
obj[1] = items;
obj[require("ContentIdType").AccountStandingState.LIMITED] = obj;
let obj1 = { left: "50%", transform: null };
let obj2 = { translateX: null };
obj2[0] = -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH;
let items1 = [obj2];
obj1[1] = items1;
obj[require("ContentIdType").AccountStandingState.VERY_LIMITED] = obj1;
let obj3 = { left: "75%", transform: null };
let obj4 = { translateX: null };
obj4[0] = -0.5 * require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH;
let items2 = [obj4];
obj3[1] = items2;
obj[require("ContentIdType").AccountStandingState.AT_RISK] = obj3;
const obj5 = { left: "100%", transform: null };
let obj6 = { translateX: null };
obj6[0] = -require("SafetyHubAccountStandingSubwayMarker").SUBWAY_MARKER_WIDTH;
let items3 = [obj6];
obj5[1] = items3;
obj[require("ContentIdType").AccountStandingState.SUSPENDED] = obj5;
const obj7 = { container: null, avatarBackground: null, good: null, limited: null, veryLimited: null, atRisk: null, suspended: null, body: null, bodyText: null, health: null, line: null, subwayMarker: null, icon: null };
obj7[0] = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.md };
createCacheKey = { position: "relative", justifyContent: "center", alignItems: "center", padding: require("Themes").space.PX_4, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.round };
obj7[1] = createCacheKey;
const obj8 = { display: "flex", flexDirection: "column", rowGap: 12, padding: 24, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.md };
obj7[2] = { color: require("Themes").colors.STATUS_POSITIVE };
const obj10 = { color: require("Themes").colors.STATUS_POSITIVE };
obj7[3] = { color: require("Themes").colors.STATUS_WARNING };
obj7[4] = { color: "#FF7A00" };
const obj11 = { color: require("Themes").colors.STATUS_WARNING };
obj7[5] = { color: require("Themes").colors.ICON_FEEDBACK_CRITICAL };
const obj12 = { color: require("Themes").colors.ICON_FEEDBACK_CRITICAL };
obj7[6] = { color: require("Themes").colors.ICON_FEEDBACK_CRITICAL };
obj7[7] = { display: "flex", rowGap: 40, width: "100%" };
const obj13 = { color: require("Themes").colors.ICON_FEEDBACK_CRITICAL };
obj7[8] = { rowGap: require("Themes").space.PX_8 };
obj7[9] = { position: "relative", left: 0, right: 0, marginBottom: 18 };
const obj14 = { rowGap: require("Themes").space.PX_8 };
obj7[10] = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj7[11] = { position: "absolute" };
const obj15 = { height: 3, width: "100%", position: "absolute", top: 8.5, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj7[12] = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createCacheKey.createStyles(obj7);
const obj16 = { borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  let description;
  let title;
  accountStanding = accountStanding.getAccountStanding();
  const tmp2 = callback(memo.useState(0), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp4 = callback2();
  callback = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    let obj = {};
    obj = { title: null, description: null, status: null, style: null, CustomIcon: null };
    obj[0] = accountStanding(1236).t.uaKrRi;
    const intl = accountStanding(1236).intl;
    obj = { termsOfService: outer1_8.TOS_LINK, communityGuidelines: outer1_8.COMMUNITY_GUIDELINES };
    obj[1] = intl.format(accountStanding(1236).t.pEdBD4, obj);
    obj[2] = accountStanding(1236).t["/Idfao"];
    obj[3] = tmp4.good;
    obj[4] = accountStanding(4264).CircleCheckIcon;
    obj[accountStanding(7808).AccountStandingState.ALL_GOOD] = obj;
    const obj1 = { title: null, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    obj1[0] = accountStanding(1236).t.epkcmS;
    const intl2 = accountStanding(1236).intl;
    obj1[1] = intl2.string(accountStanding(1236).t["774juc"]);
    obj1[2] = accountStanding(1236).t.umleq4;
    obj1[3] = tmp4.limited;
    obj1[4] = accountStanding(7795).CircleErrorIcon;
    obj1[5] = first(9069);
    obj[accountStanding(7808).AccountStandingState.LIMITED] = obj1;
    const obj2 = { title: null, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    obj2[0] = accountStanding(1236).t.crzE2X;
    const intl3 = accountStanding(1236).intl;
    obj2[1] = intl3.string(accountStanding(1236).t["T/Ufh9"]);
    obj2[2] = accountStanding(1236).t.WBtMHf;
    obj2[3] = tmp4.veryLimited;
    obj2[4] = accountStanding(7795).CircleErrorIcon;
    obj2[5] = first(9069);
    obj[accountStanding(7808).AccountStandingState.VERY_LIMITED] = obj2;
    const obj3 = { title: null, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    obj3[0] = accountStanding(1236).t.XRNVzO;
    const intl4 = accountStanding(1236).intl;
    obj3[1] = intl4.string(accountStanding(1236).t["hbH+9S"]);
    obj3[2] = accountStanding(1236).t["7f+4Lg"];
    obj3[3] = tmp4.atRisk;
    obj3[4] = accountStanding(7795).CircleErrorIcon;
    obj3[5] = first(9069);
    obj[accountStanding(7808).AccountStandingState.AT_RISK] = obj3;
    const obj4 = { title: null, description: null, status: null, style: null, CustomIcon: null, iconSource: null };
    obj4[0] = accountStanding(1236).t.MExFkz;
    const intl5 = accountStanding(1236).intl;
    obj4[1] = intl5.string(accountStanding(1236).t["2liUvt"]);
    obj4[2] = accountStanding(1236).t["0OONGB"];
    obj4[3] = tmp4.suspended;
    obj4[4] = accountStanding(5998).CircleXIcon;
    obj4[5] = first(8474);
    obj[accountStanding(7808).AccountStandingState.SUSPENDED] = obj4;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, first, tmp4];
  const memo1 = memo.useMemo(() => {
    const entries = Object.entries(memo);
    return entries.map((arg0, arg1) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const parsed = parseInt(tmp);
      let obj = { style: items, children: null };
      items = [_slicedToArray.subwayMarker, outer1_11[parsed]];
      obj = { selectedIcon: null, style: null, status: null, isSelected: null, index: null, onLayout: null, size: 20, numOptions: null };
      obj = { style: null, color: null };
      const obj1 = {};
      const merged = Object.assign(_slicedToArray.icon);
      obj1.width = 20;
      obj1.height = 20;
      obj[0] = obj1;
      obj[1] = tmp2.style.color;
      obj[0] = outer1_9(tmp2.CustomIcon, obj);
      ({ style: obj2[1], status: obj2[2] } = tmp2);
      obj[3] = parsed === state.state;
      obj[4] = arg1;
      obj[5] = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > closure_1) {
          callback(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj[7] = Object.keys(registerAsset).length;
      obj[1] = outer1_9(outer1_1(outer1_2[8]), obj, arg1);
      return outer1_9(outer1_5, obj, arg1);
    });
  }, items1);
  let obj = accountStanding(589);
  const items2 = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let obj1 = first(1435);
    let userAvatarSource = obj1.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = first(9394);
  }
  const style = tmp13.style;
  obj = { style: items3, children: null };
  items3 = [tmp4.container];
  obj = { style: tmp4.avatarBackground, children: null };
  ({ title, description } = memo[accountStanding.state]);
  obj1 = { source: userAvatarSource, size: null, "aria-label": null };
  obj1[1] = accountStanding(1297).AvatarSizes.XXLARGE;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  obj1[2] = str;
  obj[1] = closure_9(accountStanding(1297).Avatar, obj1);
  const items4 = [closure_9(style, obj), ];
  let obj2 = { style: tmp4.body, children: null };
  let obj3 = { style: tmp4.bodyText, children: null };
  let obj4 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: null };
  let intl = tmp7(1236).intl;
  obj4[3] = intl.format(title, {
    hook(children) {
      return outer1_9(accountStanding(4299).Text, { style, variant: "heading-lg/bold", children }, arg1);
    }
  });
  const items5 = [closure_9(accountStanding(4299).Text, obj4), closure_9(accountStanding(4299).Text, { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: description })];
  obj3[1] = items5;
  const items6 = [closure_10(style, obj3), ];
  const obj6 = { style: items7, children: null };
  items7 = [tmp4.health, { height: first }];
  const items8 = [closure_9(style, { style: tmp4.line }), memo1];
  obj6[1] = items8;
  items6[1] = closure_10(style, obj6);
  obj2[1] = items6;
  items4[1] = closure_10(style, obj2);
  obj[1] = items4;
  return closure_10(style, obj);
};