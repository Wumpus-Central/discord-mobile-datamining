// === Module 15523: CheckpointModal ===

// Module 15523 (CheckpointModal)
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import CheckpointFlows from "CheckpointFlows" /* 15525 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15524 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const CheckpointFetchStates = fn(15524).CheckpointFetchStates;
const CheckpointConstants = fn(5115);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: null, logo: null, headerActions: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
obj2.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((didPlayerShareDataWithDiscord) => {
  const cResult = require("c").c(72);
  didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  closure_12();
  first(1618)();
  if (cResult[0] !== (undefined === didPlayerShareDataWithDiscord || didPlayerShareDataWithDiscord)) {
    const checkpointFlow = tmp(15525).getCheckpointFlow(tmp4);
    cResult[0] = tmp4;
    cResult[1] = checkpointFlow;
    let tmp8 = checkpointFlow;
    const tmpResult = tmp(15525);
  } else {
    tmp8 = cResult[1];
  }
  _require = tmp8;
  const tmp10 = ref(noop.useState(require("CheckpointNavigation").CheckpointRoute.HOME), 2);
  first = tmp10[0];
  dependencyMap = tmp10[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    class I {
      constructor() {
        return closure_1_6.isMuted;
      }
    }
    cResult[2] = items;
    cResult[3] = I;
    let tmp13 = I;
    let tmp12 = items;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp12, tmp13);
  const tmpResult2 = require("initialize");
  ref = noop.useRef(0);
  const tmp6ResultResult = first(15529)(first(15530));
  noop = tmp6ResultResult;
  first(15531)();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        fetchState = closure_1_6.fetchState;
        tmp = fetchState !== closure_1_7.INIT && fetchState !== closure_1_7.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    const items1 = [];
    class I {
      constructor() {
        return closure_1_6.isMuted;
      }
    }
    cResult[5] = items1;
    let tmp20 = items1;
  } else {
    class O {
      constructor() {
        fetchState = closure_1_6.fetchState;
        tmp = fetchState !== closure_1_7.INIT && fetchState !== closure_1_7.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    tmp20 = cResult[5];
  }
  const effect = obj3.useEffect(O, tmp20);
  if (cResult[6] === first) {
    class O {
      constructor() {
        fetchState = closure_1_6.fetchState;
        tmp = fetchState !== closure_1_7.INIT && fetchState !== closure_1_7.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
  }
  class M {
    constructor(arg0) {
      timestamp = Date.now();
      if (closure_3.current + 500 <= timestamp) {
        tmp3 = didPlayerShareDataWithDiscord;
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp6 = closure_0;
        tmp7 = closure_1;
        adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(closure_0, closure_1, didPlayerShareDataWithDiscord);
        tmp9 = null;
        if (null != adjacentCheckpointRoute) {
          tmp2.current = timestamp;
          tmp12 = closure_4;
          tmp13 = closure_4();
          tmp14 = closure_2;
          tmp15 = closure_2(adjacentCheckpointRoute);
        } else {
          num = 1;
          if (1 === didPlayerShareDataWithDiscord) {
            tmp10 = closure_1;
            arr = closure_1(tmp5[19]);
            arr1 = arr.pop();
          }
        }
      }
      return;
    }
  }
  cResult[6] = first;
  cResult[7] = tmp8;
  cResult[8] = tmp6ResultResult;
  cResult[9] = M;
  const tmp6Result = first(15529);
}) : ((didPlayerShareDataWithDiscord) => {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  let route;
  ref = undefined;
  noop = undefined;
  let tmp = closure_12();
  const rect = route(1618)();
  checkpointFlow = checkpointFlow(15525).getCheckpointFlow(flag);
  const tmp6 = ref(noop.useState(checkpointFlow(15526).CheckpointRoute.HOME), 2);
  route = tmp6[0];
  dependencyMap = tmp6[1];
  let obj = checkpointFlow(15525);
  const items = [CheckpointStore];
  const stateFromStores = checkpointFlow(504).useStateFromStores(items, () => CheckpointStore.isMuted);
  ref = noop.useRef(0);
  const obj2 = checkpointFlow(504);
  const tmp9Result = route(15529)(route(15530));
  noop = tmp9Result;
  route(15531)();
  const effect = noop.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = checkpointFlow(15519).fetchCheckpointData();
      const obj = checkpointFlow(15519);
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
    let VoiceNormalIcon = tmp4(9667).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5885).VoiceNormalIcon;
  }
  const tmp9 = route(15529);
  const tmp4Result = checkpointFlow(15525);
  const tmp16 = null == checkpointFlow(15525).getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const checkpointRoutePresentation = checkpointFlow(15526).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp19Result2 = route === tmp4(15526).CheckpointRoute.HOME || null != statsScreen;
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
  obj5.children = closure_10(route(15533), { stage: characterStage });
  const items5 = [closure_10(callback, obj5), , , , ];
  let tmp19Result = tmp19Result2;
  if (tmp19Result2) {
    tmp19Result = closure_10(tmp2(15534), {});
  }
  items5[1] = tmp19Result;
  if (tmp19Result2) {
    const obj6 = { style: tmp.layer, children: null };
    const obj7 = { route };
    obj6.children = closure_10(tmp2(15536), obj7);
    tmp19Result2 = closure_10(tmp21, obj6);
  }
  items5[2] = tmp19Result2;
  const obj8 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj8.style = items6;
  const obj9 = { uri: null, style: null };
  const tmp4Result2 = checkpointFlow(15526);
  obj9.uri = route(15553);
  obj9.style = tmp.logo;
  const items7 = [closure_10(route(15552), obj9), ];
  const obj10 = { style: tmp.headerActions, children: null };
  const obj11 = { onPress: null, accessibilityLabel: null, children: null };
  const tmp2Result = route(15552);
  obj11.onPress = checkpointFlow(15519).toggleMute;
  const intl = tmp4(1126).intl;
  const t = tmp4(1126).t;
  const tmp2Result3 = route(15554);
  obj11.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj11.children = closure_10(VoiceNormalIcon, { color, size: "xs" });
  const items8 = [closure_10(tmp2Result3, obj11), ];
  const obj13 = { onPress: null, accessibilityLabel: null, children: null };
  const obj12 = { color, size: "xs" };
  const tmp25 = route === checkpointFlow(15526).CheckpointRoute.HOME;
  obj13.onPress = route(5093).pop;
  const intl2 = tmp4(1126).intl;
  obj13.accessibilityLabel = intl2.string(checkpointFlow(1126).t.cpT0Cq);
  obj13.children = closure_10(checkpointFlow(6017).XSmallIcon, { color, size: "xs" });
  items8[1] = closure_10(route(15554), obj13);
  obj10.children = items8;
  items7[1] = closure_11(callback, obj10);
  obj8.children = items7;
  items5[3] = closure_11(callback, obj8);
  items5[4] = closure_10(route(15555), { onBack: callback1, onNext: callback2, isTerminal: tmp16, isHome: tmp25 });
  obj4.children = items5;
  obj3.children = closure_11(callback, obj4);
  return closure_10(checkpointFlow(4589).ThemeContextProvider, obj3);
});