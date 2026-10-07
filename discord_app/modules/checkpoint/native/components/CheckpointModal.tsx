// === Module 15539: CheckpointModal ===

// Module 15539 (CheckpointModal)
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import CheckpointFlows from "CheckpointFlows" /* 15541 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15540 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const CheckpointFetchStates = fn(15540).CheckpointFetchStates;
const CheckpointConstants = fn(5121);
({ CHECKPOINT_PRIMARY: closure_8, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
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
  const cResult = require("c").c(68);
  didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  const tmp5 = closure_12();
  first(1618)();
  if (cResult[0] !== (undefined === didPlayerShareDataWithDiscord || didPlayerShareDataWithDiscord)) {
    const checkpointFlow = tmp(15541).getCheckpointFlow(tmp4);
    cResult[0] = tmp4;
    cResult[1] = checkpointFlow;
    let tmp8 = checkpointFlow;
    const tmpResult = tmp(15541);
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
  const tmp6ResultResult = first(15545)(first(15546));
  noop = tmp6ResultResult;
  first(15547)();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function w() {
      const fetchState = CheckpointStore.fetchState;
      if (!tmp) {
        const checkpointData = closure_0(15535).fetchCheckpointData();
        const obj = closure_0(15535);
      }
      tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    };
    const items1 = [];
    class I {
      constructor() {
        return closure_1_6.isMuted;
      }
    }
    cResult[5] = items1;
    let tmp20 = items1;
    let tmp19 = fn;
  } else {
    tmp19 = cResult[4];
    tmp20 = cResult[5];
  }
  const effect = obj3.useEffect(tmp19, tmp20);
  if (cResult[6] === first) {
    if (cResult[7] === tmp8) {
      if (cResult[8] === tmp6ResultResult) {
        let tmp22 = cResult[9];
      }
      View = tmp22;
      if (cResult[10] !== tmp22) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
        cResult[10] = tmp22;
        class I {
          constructor() {
            return closure_1_6.isMuted;
          }
        }
        cResult[11] = N;
      } else {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
      }
      class I {
        constructor() {
          return closure_1_6.isMuted;
        }
      }
      if (stateFromStores) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
      } else {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
      }
      if (cResult[14] !== first) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
        const checkpointRoutePresentation = obj5.getCheckpointRoutePresentation(first);
        class I {
          constructor() {
            return closure_1_6.isMuted;
          }
        }
        cResult[15] = checkpointRoutePresentation;
        const tmp24 = checkpointRoutePresentation;
      } else {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
      }
      ({ characterStage, statsScreen } = tmp24);
      let tmp26 = first === tmp(15542).CheckpointRoute.HOME;
      if (!tmp26) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
        tmp26 = null != statsScreen;
      }
      const container = tmp5.container;
      if (tmp26) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
      }
      if (cResult[16] === tmp5.layer) {
        class N {
          constructor() {
            return closure_5(-1);
          }
        }
        class I {
          constructor() {
            return closure_1_6.isMuted;
          }
        }
        if (tmp26) {
          class N {
            constructor() {
              return closure_5(-1);
            }
          }
        }
        if (cResult[19] !== characterStage) {
          class N {
            constructor() {
              return closure_5(-1);
            }
          }
          { stage: null }.stage = characterStage;
          class I {
            constructor() {
              return closure_1_6.isMuted;
            }
          }
          cResult[19] = characterStage;
          cResult[20] = tmp30;
          const obj2 = { stage: null };
        } else {
          class N {
            constructor() {
              return closure_5(-1);
            }
          }
        }
        if (cResult[21] === tmp26) {
          class N {
            constructor() {
              return closure_5(-1);
            }
          }
        }
        const obj4 = { style: tmp28, pointerEvents: "auto", accessibilityElementsHidden: tmp26, importantForAccessibility: "auto", children: tmp30 };
        const tmp34 = closure_10(View, obj4);
        cResult[21] = tmp26;
        cResult[22] = tmp28;
        cResult[23] = "auto";
        cResult[24] = "auto";
        cResult[25] = tmp30;
        cResult[26] = tmp34;
      }
      const items2 = [tmp5.layer, tmp26];
      cResult[16] = tmp5.layer;
      cResult[17] = tmp26;
      cResult[18] = items2;
    }
  }
  class O {
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
  cResult[9] = O;
  tmp22 = O;
  const tmp6Result = first(15545);
}) : ((didPlayerShareDataWithDiscord) => {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  let activeRoute;
  ref = undefined;
  noop = undefined;
  let tmp = closure_12();
  const rect = activeRoute(1618)();
  checkpointFlow = checkpointFlow(15541).getCheckpointFlow(flag);
  const tmp6 = ref(noop.useState(checkpointFlow(15542).CheckpointRoute.HOME), 2);
  activeRoute = tmp6[0];
  dependencyMap = tmp6[1];
  let obj = checkpointFlow(15541);
  const items = [CheckpointStore];
  const stateFromStores = checkpointFlow(504).useStateFromStores(items, () => CheckpointStore.isMuted);
  ref = noop.useRef(0);
  const obj2 = checkpointFlow(504);
  const tmp9Result = activeRoute(15545)(activeRoute(15546));
  noop = tmp9Result;
  activeRoute(15547)();
  const effect = noop.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = checkpointFlow(15535).fetchCheckpointData();
      const obj = checkpointFlow(15535);
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  const items1 = [activeRoute, checkpointFlow, tmp9Result];
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
    let VoiceNormalIcon = tmp4(9680).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5892).VoiceNormalIcon;
  }
  const tmp9 = activeRoute(15545);
  const checkpointRoutePresentation = checkpointFlow(15542).getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp19Result2 = activeRoute === tmp4(15542).CheckpointRoute.HOME;
  if (!tmp19Result2) {
    tmp19Result2 = null != statsScreen;
  }
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
  obj5.children = closure_10(activeRoute(15549), { stage: characterStage });
  const items5 = [closure_10(callback, obj5), , , , ];
  let tmp19Result = tmp19Result2;
  if (tmp19Result2) {
    tmp19Result = closure_10(tmp2(15550), {});
  }
  items5[1] = tmp19Result;
  if (tmp19Result2) {
    const obj6 = { style: tmp.layer, children: null };
    const obj7 = { route: activeRoute };
    obj6.children = closure_10(tmp2(15552), obj7);
    tmp19Result2 = closure_10(tmp21, obj6);
  }
  items5[2] = tmp19Result2;
  const obj8 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj8.style = items6;
  const obj9 = { uri: null, style: null };
  const tmp4Result = checkpointFlow(15542);
  obj9.uri = activeRoute(15569);
  obj9.style = tmp.logo;
  const items7 = [closure_10(activeRoute(15568), obj9), ];
  const obj10 = { style: tmp.headerActions, children: null };
  const obj11 = { onPress: null, accessibilityLabel: null, children: null };
  const tmp2Result = activeRoute(15568);
  obj11.onPress = checkpointFlow(15535).toggleMute;
  const intl = tmp4(1126).intl;
  const t = tmp4(1126).t;
  obj11.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj11.children = closure_10(VoiceNormalIcon, { color, size: "xs" });
  const items8 = [closure_10(activeRoute(15570), obj11), ];
  const obj13 = { onPress: null, accessibilityLabel: null, children: null };
  const obj12 = { color, size: "xs" };
  const tmp2Result3 = activeRoute(15570);
  obj13.onPress = activeRoute(5099).pop;
  const intl2 = tmp4(1126).intl;
  obj13.accessibilityLabel = intl2.string(checkpointFlow(1126).t.cpT0Cq);
  obj13.children = closure_10(checkpointFlow(6024).XSmallIcon, { color, size: "xs" });
  items8[1] = closure_10(activeRoute(15570), obj13);
  obj10.children = items8;
  items7[1] = closure_11(callback, obj10);
  obj8.children = items7;
  items5[3] = closure_11(callback, obj8);
  items5[4] = closure_10(activeRoute(15571), { onBack: callback1, onNext: callback2, activeRoute });
  obj4.children = items5;
  obj3.children = closure_11(callback, obj4);
  return closure_10(checkpointFlow(4595).ThemeContextProvider, obj3);
});