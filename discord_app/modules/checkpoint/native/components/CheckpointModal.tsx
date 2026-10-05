// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointStore2 from "../../CheckpointStore.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const CheckpointStore = CheckpointStore2;
let _require, arr1, dependencyMap, didPlayerShareDataWithDiscord, num, ref, tmp14, tmp15, tmp3, tmp4, tmp7;

let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c10;
let metroImportAll;
let obj2;
let rect;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_PRIMARY: metroImportAll, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { height: "100%" },
  layer: { position: "absolute", width: "100%", height: "100%" },
  coveredCharacterLayer: { opacity: 0 },
  nav: rect,
  logo: { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE },
  headerActions: obj2,
};
rect = {
  position: "absolute",
  top: 0,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  height: CHECKPOINT_NAV_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (didPlayerShareDataWithDiscord) => {
      let closure_0;
      let closure_2;
      let closure_4;
      let first;
      let tmp12;
      let tmp13;
      let tmp20;
      let tmp8;
      let tmp = _require;
      const tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(72);
      didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
      closure_12();
      first(1618)();
      if (cResult[0] !== (undefined === didPlayerShareDataWithDiscord || didPlayerShareDataWithDiscord)) {
        const tmpResult = tmp(15525);
        const checkpointFlow = tmpResult.getCheckpointFlow(tmp4);
        cResult[0] = undefined === didPlayerShareDataWithDiscord || didPlayerShareDataWithDiscord;
        cResult[1] = checkpointFlow;
        tmp8 = checkpointFlow;
      } else {
        tmp8 = cResult[1];
      }
      _require = tmp8;
      const tmp10 = ref(react.useState(tmp(15526).CheckpointRoute.HOME), 2);
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
        tmp13 = I;
        tmp12 = items;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp12, tmp13);
      ref = obj3.useRef(0);
      const tmp6Result = first(15529);
      const tmp6ResultResult = tmp6Result(first(15530));
      react = tmp6ResultResult;
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
        tmp20 = items1;
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
            adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(
              closure_0,
              closure_1,
              didPlayerShareDataWithDiscord,
            );
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
    }
  : (didPlayerShareDataWithDiscord) => {
      let VoiceNormalIcon;
      let characterStage;
      let closure_2;
      let closure_4;
      let intl2;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj12;
      let obj14;
      let obj4;
      let obj7;
      let statsScreen;
      let str;
      let str2;
      let string;
      let t;
      let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
      if (flag === undefined) {
        flag = true;
      }
      let checkpointFlow;
      let route;
      ref = undefined;
      react = undefined;
      let tmp = closure_12();
      const tmp2 = route;
      const rect = route(1618)();
      let obj = checkpointFlow(15525);
      checkpointFlow = obj.getCheckpointFlow(flag);
      const tmp6 = ref(react.useState(checkpointFlow(15526).CheckpointRoute.HOME), 2);
      route = tmp6[0];
      dependencyMap = tmp6[1];
      const items = [CheckpointStore];
      const obj2 = checkpointFlow(504);
      const stateFromStores = obj2.useStateFromStores(items, () => CheckpointStore.isMuted);
      ref = react.useRef(0);
      const tmp9 = route(15529);
      const tmp9Result = tmp9(route(15530));
      react = tmp9Result;
      route(15531)();
      const effect = react.useEffect(() => {
        const fetchState = CheckpointStore.fetchState;
        const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
        if (!tmp) {
          const obj = checkpointFlow(closure_2[18]);
          const checkpointData = obj.fetchCheckpointData();
        }
      }, []);
      const items1 = [route, checkpointFlow, tmp9Result];
      const callback = react.useCallback((arg0) => {
        const timestamp = Date.now();
        if (ref.current + 500 <= timestamp) {
          const obj = CheckpointFlows;
          const adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
          if (null != adjacentCheckpointRoute) {
            tmp2.current = timestamp;
            closure_4();
            closure_2(adjacentCheckpointRoute);
          } else if (1 === arg0) {
            const arr = ModalActionCreatorsDefault;
            arr.pop();
          }
        }
      }, items1);
      const items2 = [callback];
      const items3 = [callback];
      const callback1 = react.useCallback(() => callback(-1), items2);
      const callback2 = react.useCallback(() => callback(1), items3);
      if (stateFromStores) {
        VoiceNormalIcon = tmp4(9667).VoiceXIcon;
      } else {
        VoiceNormalIcon = tmp4(5885).VoiceNormalIcon;
      }
      const HOME = tmp4(15526).CheckpointRoute.HOME;
      const tmp4Result = checkpointFlow(15525);
      const tmp16 = null == tmp4Result.getAdjacentCheckpointRoute(checkpointFlow, route, 1);
      const tmp4Result2 = checkpointFlow(15526);
      const checkpointRoutePresentation = tmp4Result2.getCheckpointRoutePresentation(route);
      ({ characterStage, statsScreen } = checkpointRoutePresentation);
      let tmp19Result = route === tmp4(15526).CheckpointRoute.HOME || null != statsScreen;
      const obj3 = { theme: ThemeTypes.DARK, children: closure_11(callback, obj4) };
      const items4 = [tmp.layer];
      let coveredCharacterLayer = tmp19Result;
      obj4 = { style: tmp.container, children: items5 };
      const ThemeContextProvider = tmp4(4589).ThemeContextProvider;
      if (tmp19Result) {
        coveredCharacterLayer = tmp.coveredCharacterLayer;
      }
      items4[1] = coveredCharacterLayer;
      const obj5 = {
        style: items4,
        pointerEvents: str2,
        accessibilityElementsHidden: tmp19Result,
        importantForAccessibility: str,
        children: closure_10(tmp2(15533), { stage: characterStage }),
      };
      str = "auto";
      str2 = "auto";
      if (tmp19Result) {
        str2 = "none";
      }
      if (tmp19Result) {
        str = "no-hide-descendants";
      }
      items5 = [closure_10(callback, obj5), tmp19Result && closure_10(tmp2(15534), {}), , ,];
      tmp19Result && closure_10(tmp2(15534), {});
      if (tmp19Result) {
        const obj6 = { style: tmp.layer, children: closure_10(tmp2(15536), obj7) };
        obj7 = { route };
        tmp19Result = closure_10(tmp21, obj6);
      }
      items5[2] = tmp19Result;
      const obj8 = { style: items6, children: items7 };
      items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
      const obj9 = { uri: tmp2(15553), style: tmp.logo };
      const tmp2Result = tmp2(15552);
      items7 = [closure_10(tmp2Result, obj9)];
      const obj10 = { style: tmp.headerActions, children: items8 };
      const obj11 = {
        onPress: checkpointFlow(15519).toggleMute,
        accessibilityLabel: string(stateFromStores ? t.YqAjXy : t.w4m945),
        children: closure_10(VoiceNormalIcon, obj12),
      };
      const tmp2Result3 = tmp2(15554);
      const intl = tmp4(1126).intl;
      string = intl.string;
      t = tmp4(1126).t;
      obj12 = { color, size: "xs" };
      const tmp25 = route === HOME;
      items8 = [closure_10(tmp2Result3, obj11)];
      const obj13 = {
        onPress: tmp2(5093).pop,
        accessibilityLabel: intl2.string(checkpointFlow(1126).t.cpT0Cq),
        children: closure_10(checkpointFlow(6017).XSmallIcon, obj14),
      };
      const tmp2Result4 = tmp2(15554);
      intl2 = tmp4(1126).intl;
      obj14 = { color, size: "xs" };
      items8[1] = closure_10(tmp2Result4, obj13);
      items7[1] = closure_11(callback, obj10);
      items5[3] = closure_11(callback, obj8);
      items5[4] = closure_10(tmp2(15555), { onBack: callback1, onNext: callback2, isTerminal: tmp16, isHome: tmp25 });
      return closure_10(ThemeContextProvider, obj3);
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default tmp5;
