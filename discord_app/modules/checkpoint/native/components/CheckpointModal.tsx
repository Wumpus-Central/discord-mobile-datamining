// === Module 15453: CheckpointModal ===

// Module 15453 (CheckpointModal)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import CheckpointFlows from "CheckpointFlows" /* 15455 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15454 */;

require = fn;
const View = fn(17).View;
const CheckpointFetchStates = fn(15454).CheckpointFetchStates;
const CheckpointConstants = fn(5091);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4866);
let obj2 = { container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: null, logo: null, headerActions: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
obj2.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
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
  let tmp = closure_12();
  const rect = route(1613)();
  checkpointFlow = checkpointFlow(15455).getCheckpointFlow(flag);
  [route, dependencyMap] = noop.useState(checkpointFlow(15456).CheckpointRoute.HOME);
  let obj = checkpointFlow(15455);
  const items = [CheckpointStore];
  const stateFromStores = checkpointFlow(504).useStateFromStores(items, () => CheckpointStore.isMuted);
  _slicedToArray = noop.useRef(0);
  const obj2 = checkpointFlow(504);
  const tmp9Result = route(15459)(route(15460));
  noop = tmp9Result;
  route(15461)();
  const effect = noop.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = checkpointFlow(15449).fetchCheckpointData();
      const obj = checkpointFlow(15449);
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  const items1 = [route, checkpointFlow, tmp9Result];
  const callback = noop.useCallback((arg0) => {
    const timestamp = Date.now();
    if (ref.current + 500 <= timestamp) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
      if (null != adjacentCheckpointRoute) {
        tmp2.current = timestamp;
        closure_4();
        dependencyMap(adjacentCheckpointRoute);
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
    let VoiceNormalIcon = tmp4(9644).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5611).VoiceNormalIcon;
  }
  const tmp9 = route(15459);
  const tmp4Result = checkpointFlow(15455);
  const tmp16 = null == checkpointFlow(15455).getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const checkpointRoutePresentation = checkpointFlow(15456).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp19Result2 = route === tmp4(15456).CheckpointRoute.HOME || null != statsScreen;
  const obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: tmp.container, children: null };
  const items4 = [tmp.layer, ];
  let coveredCharacterLayer = tmp19Result2;
  if (tmp19Result2) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj5 = { style: items4, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items4[1] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp19Result2) {
    str2 = "none";
  }
  obj5.pointerEvents = str2;
  obj5.accessibilityElementsHidden = tmp19Result2;
  if (tmp19Result2) {
    str = "no-hide-descendants";
  }
  obj5.importantForAccessibility = str;
  obj5.children = closure_10(route(15463), { stage: characterStage });
  const items5 = [closure_10(callback, obj5), , , , ];
  let tmp19Result = tmp19Result2;
  if (tmp19Result2) {
    tmp19Result = closure_10(tmp2(15464), {});
  }
  items5[1] = tmp19Result;
  if (tmp19Result2) {
    const obj6 = { style: tmp.layer, children: null };
    const obj7 = { route };
    obj6.children = closure_10(tmp2(15466), obj7);
    tmp19Result2 = closure_10(tmp21, obj6);
  }
  items5[2] = tmp19Result2;
  const obj8 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj8.style = items6;
  const obj9 = { uri: null, style: null };
  const tmp4Result2 = checkpointFlow(15456);
  obj9.uri = route(15483);
  obj9.style = tmp.logo;
  const items7 = [closure_10(route(15482), obj9), ];
  const obj10 = { style: tmp.headerActions, children: null };
  const obj11 = { onPress: null, accessibilityLabel: null, children: null };
  const tmp2Result = route(15482);
  obj11.onPress = checkpointFlow(15449).toggleMute;
  const intl = tmp4(1115).intl;
  const t = tmp4(1115).t;
  const tmp2Result3 = route(15484);
  obj11.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj11.children = closure_10(VoiceNormalIcon, { color, size: "xs" });
  const items8 = [closure_10(tmp2Result3, obj11), ];
  const obj13 = { onPress: null, accessibilityLabel: null, children: null };
  const obj12 = { color, size: "xs" };
  const tmp25 = route === checkpointFlow(15456).CheckpointRoute.HOME;
  obj13.onPress = route(5069).pop;
  const intl2 = tmp4(1115).intl;
  obj13.accessibilityLabel = intl2.string(checkpointFlow(1115).t.cpT0Cq);
  obj13.children = closure_10(checkpointFlow(6188).XSmallIcon, { color, size: "xs" });
  items8[1] = closure_10(route(15484), obj13);
  obj10.children = items8;
  items7[1] = closure_11(callback, obj10);
  obj8.children = items7;
  items5[3] = closure_11(callback, obj8);
  items5[4] = closure_10(route(15485), { onBack: callback1, onNext: callback2, isTerminal: tmp16, isHome: tmp25 });
  obj4.children = items5;
  obj3.children = closure_11(callback, obj4);
  return closure_10(checkpointFlow(4570).ThemeContextProvider, obj3);
};