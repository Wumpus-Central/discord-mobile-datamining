// discord_app/modules/safety_hub/native/SafetyHubAccountStanding.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import _modDef6359 from "../../../../_runtime/metro/06359__.js";
import SafetyHubModels from "../SafetyHubModels.tsx";
import _modDef8905 from "../../../../_runtime/metro/08905__.js";
import SafetyHubAccountStandingLabels from "../SafetyHubAccountStandingLabels.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const View = fn(17).View;
const SafetyHubLinks = fn(7868).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let obj = { [fn(7869).AccountStandingState.ALL_GOOD]: { left: "0%" } };
let obj2 = { left: "25%", transform: null };
let items = [{ translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH }];
obj2.transform = items;
obj[fn(7869).AccountStandingState.LIMITED] = obj2;
let obj4 = { left: "50%", transform: null };
let obj3 = { translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH };
let items1 = [{ translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH }];
obj4.transform = items1;
obj[fn(7869).AccountStandingState.VERY_LIMITED] = obj4;
let obj6 = { left: "75%", transform: null };
let obj5 = { translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH };
let items2 = [{ translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH }];
obj6.transform = items2;
obj[fn(7869).AccountStandingState.AT_RISK] = obj6;
let obj8 = { left: "100%", transform: null };
let obj7 = { translateX: -0.5 * fn(14307).SUBWAY_MARKER_WIDTH };
let items3 = [{ translateX: -fn(14307).SUBWAY_MARKER_WIDTH }];
obj8.transform = items3;
obj[fn(7869).AccountStandingState.SUSPENDED] = obj8;
const createStyles = fn(4836);
const obj11 = {
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
const obj9 = { translateX: -fn(14307).SUBWAY_MARKER_WIDTH };
obj11.container = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  padding: 24,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
};
const obj12 = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  padding: 24,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
};
obj11.avatarBackground = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.round,
};
const obj13 = {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.round,
};
obj11.good = { color: nativeDefault.colors.STATUS_POSITIVE };
const obj14 = { color: nativeDefault.colors.STATUS_POSITIVE };
obj11.limited = { color: nativeDefault.colors.STATUS_WARNING };
obj11.veryLimited = { color: "#FF7A00" };
const obj15 = { color: nativeDefault.colors.STATUS_WARNING };
obj11.atRisk = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
const obj16 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.suspended = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.body = { display: "flex", rowGap: 40, width: "100%" };
const obj17 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj11.bodyText = { rowGap: nativeDefault.space.PX_8 };
obj11.health = { position: "relative", left: 0, right: 0, marginBottom: 18 };
let size = {
  height: 3,
  width: "100%",
  position: "absolute",
  top: 8.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj11.line = size;
obj11.subwayMarker = { position: "absolute" };
const obj18 = { rowGap: nativeDefault.space.PX_8 };
obj11.icon = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles.createStyles(obj11);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  const accountStanding = SafetyHubStore.getAccountStanding();
  [height, dependencyMap] = memo.useState(0);
  const tmp4 = closure_12();
  _slicedToArray = tmp4;
  let items = [tmp4];
  memo = memo.useMemo(() => {
    obj = {};
    const obj2 = { title: util.t.uaKrRi, description: null, status: null, style: null, CustomIcon: null };
    const intl = util.intl;
    obj2.description = intl.format(util.t.pEdBD4, {
      termsOfService: SafetyHubLinks.TOS_LINK,
      communityGuidelines: SafetyHubLinks.COMMUNITY_GUIDELINES,
    });
    obj2.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.ALL_GOOD];
    obj2.style = closure_3.good;
    obj2.CustomIcon = CircleCheckIcon.CircleCheckIcon;
    obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = obj2;
    const obj4 = {
      title: util.t.epkcmS,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl2 = util.intl;
    obj4.description = intl2.string(util.t["774juc"]);
    obj4.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.LIMITED];
    obj4.style = closure_3.limited;
    obj4.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj4.iconSource = _modDef8905;
    obj[SafetyHubModels.AccountStandingState.LIMITED] = obj4;
    const obj5 = {
      title: util.t.crzE2X,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl3 = util.intl;
    obj5.description = intl3.string(util.t["T/Ufh9"]);
    obj5.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.VERY_LIMITED];
    obj5.style = closure_3.veryLimited;
    obj5.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj5.iconSource = _modDef8905;
    obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = obj5;
    const obj6 = {
      title: util.t.XRNVzO,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl4 = util.intl;
    obj6.description = intl4.string(util.t["hbH+9S"]);
    obj6.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.AT_RISK];
    obj6.style = closure_3.atRisk;
    obj6.CustomIcon = CircleErrorIcon.CircleErrorIcon;
    obj6.iconSource = _modDef8905;
    obj[SafetyHubModels.AccountStandingState.AT_RISK] = obj6;
    const obj7 = {
      title: util.t.MExFkz,
      description: null,
      status: null,
      style: null,
      CustomIcon: null,
      iconSource: null,
    };
    const intl5 = util.intl;
    obj7.description = intl5.string(util.t["2liUvt"]);
    obj7.status =
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[SafetyHubModels.AccountStandingState.SUSPENDED];
    obj7.style = closure_3.suspended;
    obj7.CustomIcon = CircleXIcon.CircleXIcon;
    obj7.iconSource = _modDef6359;
    obj[SafetyHubModels.AccountStandingState.SUSPENDED] = obj7;
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
      const obj3 = {
        selectedIcon: null,
        style: null,
        status: null,
        isSelected: null,
        index: null,
        onLayout: null,
        size: 20,
        numOptions: null,
      };
      const obj4 = { style: null, color: null };
      const obj7 = {};
      const merged = Object.assign(closure_1_3.icon);
      obj7.width = 20;
      obj7.height = 20;
      obj4.style = obj7;
      obj4.color = tmp2.style.color;
      obj3.selectedIcon = closure_2_9(tmp2.CustomIcon, obj4);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      obj3.isSelected = parsed === state.state;
      obj3.index = index;
      obj3.onLayout = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > closure_1_1) {
          closure_1_2(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj3.numOptions = Object.keys(memo).length;
      obj.children = closure_2_9(first(closure_2[8]), obj3, index);
      return closure_2_9(style, obj, index);
    });
  }, items1);
  const items2 = [UserStore];
  const stateFromStores = accountStanding(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let userAvatarSource = height(1397).getUserAvatarSource(stateFromStores);
    let obj2 = height(1397);
  } else {
    userAvatarSource = height(8274);
  }
  const style = tmp13.style;
  let obj3 = { style: null, children: null };
  const items3 = [tmp4.container];
  obj3.style = items3;
  let obj4 = { style: tmp4.avatarBackground, children: null };
  ({ title, description } = memo[accountStanding.state]);
  let obj5 = { source: userAvatarSource, size: accountStanding(1177).AvatarSizes.XXLARGE, "aria-label": null };
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  obj5["aria-label"] = str;
  obj4.children = closure_9(accountStanding(1177).Avatar, obj5);
  const items4 = [closure_9(style, obj4)];
  let obj6 = { style: tmp4.body, children: null };
  let obj7 = { style: tmp4.bodyText, children: null };
  const obj8 = { variant: "heading-lg/medium", color: "text-default", style: { textAlign: "center" }, children: null };
  let intl = tmp7(1115).intl;
  obj8.children = intl.format(title, {
    hook(children, arg1) {
      return React7(Text_Text.Text, { style, variant: "heading-lg/bold", children }, arg1);
    },
  });
  const items5 = [
    closure_9(accountStanding(4832).Text, obj8),
    closure_9(accountStanding(4832).Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      style: { textAlign: "center" },
      children: description,
    }),
  ];
  obj7.children = items5;
  const items6 = [closure_10(style, obj7)];
  const obj10 = { style: null, children: null };
  const items7 = [tmp4.health, { height }];
  obj10.style = items7;
  const items8 = [closure_9(style, { style: tmp4.line }), memo1];
  obj10.children = items8;
  items6[1] = closure_10(style, obj10);
  obj6.children = items6;
  items4[1] = closure_10(style, obj6);
  obj3.children = items4;
  return closure_10(style, obj3);
}
