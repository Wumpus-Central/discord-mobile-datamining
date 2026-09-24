// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(5054);
({ CHECKPOINT_PRIMARY: closure_7, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
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
let closure_11 = createStyles.createStyles(obj2);
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
  noop = undefined;
  const tmp = closure_11();
  const rect = route(1612)();
  checkpointFlow = checkpointFlow(16047).getCheckpointFlow(flag);
  [route, dependencyMap] = noop.useState(checkpointFlow(16048).CheckpointRoute.HOME);
  let obj = checkpointFlow(16047);
  const items = [CheckpointStore];
  const stateFromStores = checkpointFlow(504).useStateFromStores(items, () => isMuted.isMuted);
  _slicedToArray = noop.useRef(0);
  const obj2 = checkpointFlow(504);
  const tmp9Result = route(16051)(route(16052));
  noop = tmp9Result;
  route(16053)();
  const items1 = [route, checkpointFlow, tmp9Result];
  const callback = noop.useCallback((arg0) => {
    const timestamp = Date.now();
    if (ref.current + 500 <= timestamp) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
      if (null != adjacentCheckpointRoute) {
        tmp2.current = timestamp;
        closure_4();
        closure_2(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }, items1);
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = noop.useCallback(() => callback(-1), items2);
  const callback2 = noop.useCallback(() => callback(1), items3);
  if (stateFromStores) {
    let VoiceNormalIcon = tmp4(10334).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5407).VoiceNormalIcon;
  }
  const tmp9 = route(16051);
  const tmp4Result = checkpointFlow(16047);
  const tmp15 = null == checkpointFlow(16047).getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const checkpointRoutePresentation = checkpointFlow(16048).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp18Result2 = route === tmp4(16048).CheckpointRoute.HOME || null != statsScreen;
  const obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: tmp.container, children: null };
  const items4 = [tmp.layer];
  let coveredCharacterLayer = tmp18Result2;
  if (tmp18Result2) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj5 = {
    style: items4,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items4[1] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp18Result2) {
    str2 = "none";
  }
  obj5.pointerEvents = str2;
  obj5.accessibilityElementsHidden = tmp18Result2;
  if (tmp18Result2) {
    str = "no-hide-descendants";
  }
  obj5.importantForAccessibility = str;
  obj5.children = closure_9(route(16055), { stage: characterStage });
  const items5 = [closure_9(callback, obj5), , , ,];
  let tmp18Result = tmp18Result2;
  if (tmp18Result2) {
    tmp18Result = closure_9(tmp2(16056), {});
  }
  items5[1] = tmp18Result;
  if (tmp18Result2) {
    const obj6 = { style: tmp.layer, children: null };
    const obj7 = { route };
    obj6.children = closure_9(tmp2(16058), obj7);
    tmp18Result2 = closure_9(tmp20, obj6);
  }
  items5[2] = tmp18Result2;
  const obj8 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj8.style = items6;
  const obj9 = { uri: null, style: null };
  const tmp4Result2 = checkpointFlow(16048);
  obj9.uri = route(16075);
  obj9.style = tmp.logo;
  const items7 = [closure_9(route(16074), obj9)];
  const obj10 = { style: tmp.headerActions, children: null };
  const obj11 = { onPress: null, accessibilityLabel: null, children: null };
  const tmp2Result = route(16074);
  obj11.onPress = checkpointFlow(16077).toggleMute;
  const intl = tmp4(1115).intl;
  const t = tmp4(1115).t;
  const tmp2Result3 = route(16076);
  obj11.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj11.children = closure_9(VoiceNormalIcon, { color, size: "xs" });
  const items8 = [closure_9(tmp2Result3, obj11)];
  const obj13 = { onPress: null, accessibilityLabel: null, children: null };
  const obj12 = { color, size: "xs" };
  const tmp24 = route === checkpointFlow(16048).CheckpointRoute.HOME;
  obj13.onPress = route(5032).pop;
  const intl2 = tmp4(1115).intl;
  obj13.accessibilityLabel = intl2.string(checkpointFlow(1115).t.cpT0Cq);
  obj13.children = closure_9(checkpointFlow(5985).XSmallIcon, { color, size: "xs" });
  items8[1] = closure_9(route(16076), obj13);
  obj10.children = items8;
  items7[1] = closure_10(callback, obj10);
  obj8.children = items7;
  items5[3] = closure_10(callback, obj8);
  items5[4] = closure_9(route(16078), { onBack: callback1, onNext: callback2, isTerminal: tmp15, isHome: tmp24 });
  obj4.children = items5;
  obj3.children = closure_10(callback, obj4);
  return closure_9(checkpointFlow(4535).ThemeContextProvider, obj3);
}
