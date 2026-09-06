// discord_app/modules/safety_hub/native/SafetyHubAccountStanding.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import _modDef6940 from "../../../../_runtime/metro/06940__.js";
import SafetyHubModels from "../SafetyHubModels.tsx";
import _modDef9625 from "../../../../_runtime/metro/09625__.js";
import SafetyHubAccountStandingLabels from "../SafetyHubAccountStandingLabels.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const View = fn(17).View;
const SafetyHubLinks = fn(8419).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let obj = { [fn(8420).AccountStandingState.ALL_GOOD]: { left: "0%" } };
obj = { left: "25%", transform: null };
obj = { translateX: -0.5 * fn(14772).SUBWAY_MARKER_WIDTH };
let items = [obj];
obj.transform = items;
obj[fn(8420).AccountStandingState.LIMITED] = obj;
let obj1 = { left: "50%", transform: null };
let items1 = [{ translateX: -0.5 * fn(14772).SUBWAY_MARKER_WIDTH }];
obj1.transform = items1;
obj[fn(8420).AccountStandingState.VERY_LIMITED] = obj1;
let obj3 = { left: "75%", transform: null };
let obj2 = { translateX: -0.5 * fn(14772).SUBWAY_MARKER_WIDTH };
let items2 = [{ translateX: -0.5 * fn(14772).SUBWAY_MARKER_WIDTH }];
obj3.transform = items2;
obj[fn(8420).AccountStandingState.AT_RISK] = obj3;
const obj5 = { left: "100%", transform: null };
let obj4 = { translateX: -0.5 * fn(14772).SUBWAY_MARKER_WIDTH };
let items3 = [{ translateX: -fn(14772).SUBWAY_MARKER_WIDTH }];
obj5.transform = items3;
obj[fn(8420).AccountStandingState.SUSPENDED] = obj5;
fn(4560);
const obj7 = {
  container: null,
  avatarBackground: null,
  good: null,
  limited: null,
  veryLimited: null,
  atRisk: null,
  suspended: null,
  body: null,
  bodyText: null,
  health: null,
  line: null,
  subwayMarker: null,
  icon: null,
};
let obj6 = { translateX: -fn(14772).SUBWAY_MARKER_WIDTH };
obj7.container = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  padding: 24,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
};
const createStyles = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.round,
};
obj7.avatarBackground = createStyles;
const obj8 = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  padding: 24,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
};
obj7.good = { color: nativeDefault.colors.STATUS_POSITIVE };
const obj10 = { color: nativeDefault.colors.STATUS_POSITIVE };
obj7.limited = { color: nativeDefault.colors.STATUS_WARNING };
obj7.veryLimited = { color: "#FF7A00" };
const obj11 = { color: nativeDefault.colors.STATUS_WARNING };
obj7.atRisk = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
const obj12 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj7.suspended = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj7.body = { display: "flex", rowGap: 40, width: "100%" };
const obj13 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj7.bodyText = { rowGap: nativeDefault.space.PX_8 };
obj7.health = { position: "relative", left: 0, right: 0, marginBottom: 18 };
let size = {
  height: 3,
  width: "100%",
  position: "absolute",
  top: 8.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj7.line = size;
obj7.subwayMarker = { position: "absolute" };
const obj14 = { rowGap: nativeDefault.space.PX_8 };
obj7.icon = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles.createStyles(obj7);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  const accountStanding = SafetyHubStore.getAccountStanding();
  const tmp2 = _slicedToArray(memo.useState(0), 2);
  const height = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp4 = closure_12();
  _slicedToArray = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    obj = {};
    obj = { title: util.t.uaKrRi, description: null, status: null, style: null, CustomIcon: null };
    const intl = util.intl;
    obj = { termsOfService: SafetyHubLinks.TOS_LINK, communityGuidelines: SafetyHubLinks.COMMUNITY_GUIDELINES };
    obj.description = intl.format(util.t.pEdBD4, obj);
    obj.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.ALL_GOOD];
    obj.style = closure_3.good;
    obj.CustomIcon = CircleCheckIcon.CircleCheckIcon;
    obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = obj;
    const obj1 = {
      title: util.t.epkcmS,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl2 = util.intl;
    obj1.description = intl2.string(util.t["774juc"]);
    obj1.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.LIMITED];
    obj1.style = closure_3.limited;
    obj1.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj1.iconSource = _modDef9625;
    obj[SafetyHubModels.AccountStandingState.LIMITED] = obj1;
    const obj2 = {
      title: util.t.crzE2X,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl3 = util.intl;
    obj2.description = intl3.string(util.t["T/Ufh9"]);
    obj2.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.VERY_LIMITED];
    obj2.style = closure_3.veryLimited;
    obj2.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj2.iconSource = _modDef9625;
    obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = obj2;
    const obj3 = {
      title: util.t.XRNVzO,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl4 = util.intl;
    obj3.description = intl4.string(util.t["hbH+9S"]);
    obj3.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.AT_RISK];
    obj3.style = closure_3.atRisk;
    obj3.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj3.iconSource = _modDef9625;
    obj[SafetyHubModels.AccountStandingState.AT_RISK] = obj3;
    const obj4 = {
      title: util.t.MExFkz,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl5 = util.intl;
    obj4.description = intl5.string(util.t["2liUvt"]);
    obj4.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.SUSPENDED];
    obj4.style = closure_3.suspended;
    obj4.CustomIcon = CircleXIcon.CircleXIcon;
    obj4.iconSource = _modDef6940;
    obj[SafetyHubModels.AccountStandingState.SUSPENDED] = obj4;
    return obj;
  }, items);
  const items1 = [accountStanding, memo, height, tmp4];
  const memo1 = memo.useMemo(() => {
    const entries = Object.entries(memo);
    return entries.map((item, index) => {
      [tmp, tmp2] = item;
      const parsed = parseInt(tmp);
      obj = { style: null, children: null };
      const items = [closure_1_3.subwayMarker, closure_2_11[parsed]];
      obj.style = items;
      obj = {
        selectedIcon: null,
        style: null,
        status: null,
        isSelected: null,
        index: null,
        onLayout: null,
        size: 20,
        numOptions: null,
      };
      obj = { style: null, color: null };
      const obj1 = {};
      const merged = Object.assign(closure_1_3.icon);
      obj1.width = 20;
      obj1.height = 20;
      obj.style = obj1;
      obj.color = tmp2.style.color;
      obj.selectedIcon = closure_2_9(tmp2.CustomIcon, obj);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      obj.isSelected = parsed === state.state;
      obj.index = index;
      obj.onLayout = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > closure_1_1) {
          closure_1_2(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj.numOptions = Object.keys(memo).length;
      obj.children = closure_2_9(first(closure_2[8]), obj, index);
      return closure_2_9(style, obj, index);
    });
  }, items1);
  obj = accountStanding(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let obj1 = height(1396);
    let userAvatarSource = obj1.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = height(8811);
  }
  const style = tmp13.style;
  obj = { style: null, children: null };
  const items3 = [tmp4.container];
  obj.style = items3;
  obj = { style: tmp4.avatarBackground, children: null };
  ({ title, description } = memo[accountStanding.state]);
  obj1 = { source: userAvatarSource, size: tmp7(1178).AvatarSizes.XXLARGE, "aria-label": null };
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  obj1["aria-label"] = str;
  obj.children = closure_9(accountStanding(1178).Avatar, obj1);
  const items4 = [closure_9(style, obj)];
  let obj2 = { style: tmp4.body, children: null };
  let obj3 = { style: tmp4.bodyText, children: null };
  let obj4 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: null };
  let intl = tmp7(1114).intl;
  obj4.children = intl.format(title, {
    hook(children, arg1) {
      return React7(Text_Text.Text, { style, variant: "heading-lg/bold", children }, arg1);
    },
  });
  const items5 = [
    closure_9(accountStanding(4556).Text, obj4),
    closure_9(accountStanding(4556).Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      style: { textAlign: "center" },
      children: description,
    }),
  ];
  obj3.children = items5;
  const items6 = [closure_10(style, obj3)];
  const obj6 = { style: null, children: null };
  const items7 = [tmp4.health, { height }];
  obj6.style = items7;
  const items8 = [closure_9(style, { style: tmp4.line }), memo1];
  obj6.children = items8;
  items6[1] = closure_10(style, obj6);
  obj2.children = items6;
  items4[1] = closure_10(style, obj2);
  obj.children = items4;
  return closure_10(style, obj);
}
