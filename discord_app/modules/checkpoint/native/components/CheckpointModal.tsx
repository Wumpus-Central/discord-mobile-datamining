// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(4981);
({ CHECKPOINT_PRIMARY: metroRequire, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { height: "100%" },
  layer: { position: "absolute", width: "100%", height: "100%" },
  coveredCharacterLayer: { opacity: 0 },
  nav: null,
  logo: null,
  headerActions: null,
};
let rect = {
  position: "absolute",
  top: 0,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  height: CHECKPOINT_NAV_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.nav = rect;
obj2.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  route = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  const rect = route(1612)();
  checkpointFlow = checkpointFlow(15967).getCheckpointFlow(flag);
  [route, dependencyMap] = noop.useState(checkpointFlow(15968).CheckpointRoute.HOME);
  let obj = checkpointFlow(15967);
  [tmp9, c3] = noop.useState(false);
  noop = noop.useRef(0);
  const items = [route, checkpointFlow];
  const callback = noop.useCallback((arg0) => {
    const timestamp = Date.now();
    if (ref.current + 500 <= timestamp) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
      if (null != adjacentCheckpointRoute) {
        tmp2.current = timestamp;
        closure_2(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => callback(-1), items1);
  const callback2 = noop.useCallback(() => callback(1), items2);
  if (tmp9) {
    let VoiceNormalIcon = tmp4(10244).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5319).VoiceNormalIcon;
  }
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const tmp4Result = checkpointFlow(15967);
  const tmp13 = null == checkpointFlow(15967).getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const checkpointRoutePresentation = checkpointFlow(15968).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp16Result2 = route === tmp4(15968).CheckpointRoute.HOME || null != statsScreen;
  const obj2 = { theme: ThemeTypes.DARK, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items3 = [tmp.layer];
  let coveredCharacterLayer = tmp16Result2;
  if (tmp16Result2) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj4 = {
    style: items3,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items3[1] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp16Result2) {
    str2 = "none";
  }
  obj4.pointerEvents = str2;
  obj4.accessibilityElementsHidden = tmp16Result2;
  if (tmp16Result2) {
    str = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str;
  obj4.children = closure_8(route(15971), { stage: characterStage });
  const items4 = [closure_8(callback, obj4), , , ,];
  let tmp16Result = tmp16Result2;
  if (tmp16Result2) {
    tmp16Result = closure_8(tmp2(15972), {});
  }
  items4[1] = tmp16Result;
  if (tmp16Result2) {
    const obj5 = { style: tmp.layer, children: null };
    const obj6 = { route };
    obj5.children = closure_8(tmp2(15974), obj6);
    tmp16Result2 = closure_8(tmp18, obj5);
  }
  items4[2] = tmp16Result2;
  const obj7 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj7.style = items5;
  const obj8 = { uri: null, style: null };
  const tmp4Result2 = checkpointFlow(15968);
  obj8.uri = route(15990);
  obj8.style = tmp.logo;
  const items6 = [closure_8(route(15989), obj8)];
  const obj9 = { style: tmp.headerActions, children: null };
  const obj10 = {
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    accessibilityLabel: null,
    children: null,
  };
  const tmp2Result = route(15989);
  const intl = tmp4(1115).intl;
  const t = tmp4(1115).t;
  const tmp2Result3 = route(15991);
  obj10.accessibilityLabel = intl.string(tmp9 ? t.YqAjXy : t.w4m945);
  obj10.children = closure_8(VoiceNormalIcon, { color, size: "xs" });
  const items7 = [closure_8(tmp2Result3, obj10)];
  const obj12 = { onPress: null, accessibilityLabel: null, children: null };
  const obj11 = { color, size: "xs" };
  const tmp22 = route === checkpointFlow(15968).CheckpointRoute.HOME;
  obj12.onPress = route(4959).pop;
  const intl2 = tmp4(1115).intl;
  obj12.accessibilityLabel = intl2.string(checkpointFlow(1115).t.cpT0Cq);
  obj12.children = closure_8(checkpointFlow(5897).XSmallIcon, { color, size: "xs" });
  items7[1] = closure_8(route(15991), obj12);
  obj9.children = items7;
  items6[1] = closure_9(callback, obj9);
  obj7.children = items6;
  items4[3] = closure_9(callback, obj7);
  items4[4] = closure_8(route(15992), { onBack: callback1, onNext: callback2, isTerminal: tmp13, isHome: tmp22 });
  obj3.children = items4;
  obj2.children = closure_9(callback, obj3);
  return closure_8(checkpointFlow(4466).ThemeContextProvider, obj2);
}
