// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import useCheckpointPreloaderDefault from "../useCheckpointPreloader.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  activeRoute = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  function transition(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(closure_0, first, 1);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        closure_5();
        dependencyMap(adjacentCheckpointRoute);
      } else {
        {
          ModalActionCreatorsDefault.pop();
        }
      }
    }
  }
  closure_9 = async function _handleNext() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (first === tmp3(tmp49[13]).CheckpointRoute.HOME) {
            if (transition.fetchState !== constants.SUCCESS) {
              if (transition.fetchState === tmp36.FETCHING) {
                c4 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c1 = 1;
                c4 = 1;
                const obj5 = { value: tmp3(tmp49[11]).fetchCheckpointData(), done: false };
                return obj5;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (!value) {
              const intl2 = tmp3(tmp49[24]).intl;
              tmp3(tmp49[23]).presentError(intl2.string(tmp3(tmp49[24]).t.fEptJP));
              c4 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_128_7(false);
            throw tmp49;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_128_8(1, true);
            } else {
              const intl = tmp3(tmp49[24]).intl;
              tmp3(tmp49[23]).presentError(intl.string(tmp3(tmp49[24]).t.fEptJP));
              const obj = tmp3(tmp49[23]);
            }
            c3 = 0;
            closure_128_7(false);
            c4 = 3;
          }
          c3 = 0;
          closure_128_7(false);
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        if (closure_128_4) {
          closure_128_7(true);
          c3 = 1;
          c1 = 3;
          c4 = 1;
          const obj11 = { value: tmp3(tmp49[11]).completeCheckpoint(closure_128_6), done: false };
          return obj11;
        } else {
          closure_128_8(1);
        }
      } catch (tmp49) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp49;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_16();
  const rect = activeRoute(1631)();
  const effect = noop.useEffect(() => {
    closure_0(15910).resetEditedCharacter();
  }, []);
  _require = require("CheckpointFlows").getCheckpointFlow(flag);
  [activeRoute, dependencyMap] = noop.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  noop.useRef(0);
  let obj2 = require("CheckpointFlows");
  const checkpointRoutePresentation = require("CheckpointNavigation").getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp31Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp31Result) {
    tmp31Result = null != statsScreen;
  }
  const obj3 = require("CheckpointNavigation");
  let result = require("CheckpointNavigation").isCheckpointCustomizationRoute(activeRoute);
  const tmp13 = activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp13;
  const tmp5Result = require("CheckpointNavigation");
  const items = [transition];
  const stateFromStores = require("initialize").useStateFromStores(items, () => transition.isMuted);
  if (stateFromStores) {
    let VoiceNormalIcon = tmp5(11042).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(8212).VoiceNormalIcon;
  }
  const tmp5Result3 = require("initialize");
  noop = activeRoute(15920)(tmp2(15921));
  activeRoute(15922)();
  const tmp2Result = activeRoute(15920);
  [tmp18, tmp19] = noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE);
  if (!tmp13) {
    let BASE = tmp5(15924).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(15924).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result4 = tmp5(15924);
  }
  const tmp21 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TRAITS[tmp18];
  const tmp6Result = _slicedToArray(
    noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE),
    2,
  );
  ({ blockedTraits, character: c6, selectedCharacterTraits } = activeRoute(15927)());
  const hasItem = blockedTraits.includes(tmp21);
  const tmp22 = activeRoute(15927)();
  [tmp25, c7] = noop.useState(false);
  if (tmp13) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp21;
  }
  let tmp27 = result;
  if (result) {
    tmp27 = null != first1 || null == selectedCharacterTraits[tmp21];
    const tmp29 = null != first1 || null == selectedCharacterTraits[tmp21];
  }
  let obj4 = { theme: ThemeTypes.DARK, children: null };
  let obj5 = { style: tmp.container, children: null };
  const items1 = [tmp.layer, ,];
  const obj6 = { paddingTop: null };
  const sum = rect.top + CHECKPOINT_NAV_HEIGHT;
  obj6.paddingTop = sum + activeRoute(587).space.PX_16;
  items1[1] = obj6;
  let coveredCharacterLayer = tmp31Result;
  if (tmp31Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj7 = {
    style: items1,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items1[2] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp31Result) {
    str2 = "none";
  }
  obj7.pointerEvents = str2;
  obj7.accessibilityElementsHidden = tmp31Result;
  let str3 = str;
  if (tmp31Result) {
    str3 = "no-hide-descendants";
  }
  obj7.importantForAccessibility = str3;
  obj7.children = closure_13(activeRoute(15928), { stage: characterStage, activeCustomizationOption: tmp18 });
  const items2 = [closure_13(c7, obj7), , , ,];
  if (tmp31Result) {
    const obj8 = { children: null };
    const items3 = [closure_13(tmp2(15929), {})];
    let obj9 = { style: tmp.layer, children: null };
    let obj10 = { route: activeRoute };
    obj9.children = closure_13(tmp2(15931), obj10);
    items3[1] = closure_13(tmp32, obj9);
    obj8.children = items3;
    tmp31Result = closure_15(closure_14, obj8);
  }
  items2[1] = tmp31Result;
  let obj11 = { style: null, children: null };
  const items4 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj11.style = items4;
  const obj12 = { uri: null, style: null };
  const tmp6Result2 = _slicedToArray(noop.useState(false), 2);
  obj12.uri = activeRoute(15951);
  obj12.style = tmp.logo;
  const items5 = [closure_13(activeRoute(15938), obj12)];
  const obj13 = { style: tmp.headerActions, children: null };
  const obj14 = { onPress: null, accessibilityLabel: null, children: null };
  const tmp2Result5 = activeRoute(15938);
  obj14.onPress = require("CheckpointActionCreators").toggleMute;
  let intl = tmp5(1126).intl;
  const t = tmp5(1126).t;
  obj14.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj14.children = closure_13(VoiceNormalIcon, { color, size: "xs" });
  const items6 = [closure_13(activeRoute(15952), obj14)];
  const obj16 = { onPress: null, accessibilityLabel: null, children: null };
  const obj15 = { color, size: "xs" };
  const tmp2Result6 = activeRoute(15952);
  obj16.onPress = activeRoute(5941).pop;
  let intl2 = tmp5(1126).intl;
  obj16.accessibilityLabel = intl2.string(require("util").t.cpT0Cq);
  obj16.children = closure_13(require("XSmallIcon").XSmallIcon, { color, size: "xs" });
  items6[1] = closure_13(activeRoute(15952), obj16);
  obj13.children = items6;
  items5[1] = closure_15(c7, obj13);
  obj11.children = items5;
  items2[2] = closure_15(c7, obj11);
  if (result) {
    const obj18 = {
      style: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    const items7 = [tmp.customizationSection];
    ({ left: obj22.marginLeft, right: obj22.marginRight, bottom: obj22.marginBottom } = rect);
    items7[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    obj18.style = items7;
    let str4 = str;
    if (tmp25) {
      str4 = "none";
    }
    obj18.pointerEvents = str4;
    obj18.accessibilityElementsHidden = tmp25;
    if (tmp25) {
      str = "no-hide-descendants";
    }
    obj18.importantForAccessibility = str;
    let tmp30Result = tmp13;
    if (tmp13) {
      const obj20 = {
        activeCustomizationOption: tmp18,
        onSelectOption: tmp19,
        disableSwitching: hasItem,
        disabled: tmp25,
      };
      tmp30Result = closure_13(tmp5(15953).FinalizeTraitTabs, obj20);
    }
    const items8 = [tmp30Result];
    const obj21 = {
      activeCustomizationOption: tmp18,
      disabled: tmp25,
      showEarnedCount: !tmp13,
      onSelectOption: tmp5(15910).selectCharacterTrait,
    };
    items8[1] = closure_13(tmp2(15957), obj21);
    obj18.children = items8;
    result = closure_15(tmp32, obj18);
    const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result8 = tmp2(15957);
  }
  items2[3] = result;
  items2[4] = closure_13(activeRoute(15963), {
    activeRoute,
    onBack: function handleBack() {
      const timestamp = Date.now();
      if (ref.current + 500 <= timestamp) {
        const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(closure_0, first, -1);
        if (null != adjacentCheckpointRoute) {
          tmp2.current = timestamp;
          closure_5();
          dependencyMap(adjacentCheckpointRoute);
        }
      }
    },
    onNext: function handleNext() {
      const self = this;
      const apply = closure_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    backDisabled: tmp25,
    nextDisabled: tmp27,
    nextLoading: tmp25,
    nextBlockedTrait: first1,
  });
  obj5.children = items2;
  obj4.children = closure_15(c7, obj5);
  return closure_13(require("native").ThemeContextProvider, obj4);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointFetchStates = fn(15915).CheckpointFetchStates;
const CheckpointConstants = fn(5434);
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: closure_11, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK },
  container: { height: "100%" },
  layer: { position: "absolute", width: "100%", height: "100%" },
  coveredCharacterLayer: { opacity: 0 },
  nav: null,
  logo: null,
  headerActions: null,
  customizationSection: null,
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
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const rect1 = { position: "absolute", left: 0, right: 0, bottom: null, gap: null };
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
rect1.bottom = sum + nativeDefault.space.PX_24;
rect1.gap = nativeDefault.space.PX_12;
obj2.customizationSection = rect1;
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointLoaderWrapper(arg0) {
      const cResult = c.c(5);
      const tmp3 = closure_16();
      if (tmp2) {
        if (cResult[3] !== arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          const tmp20 = __initData2(CheckpointModal, obj2);
          cResult[3] = arg0;
          cResult[4] = tmp20;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = __initData2(timestampProducer, {});
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp3.loader) {
          const obj3 = { style: tmp3.loader, children: first };
          const tmp12 = __initData2(React5, obj3);
          cResult[1] = tmp3.loader;
          cResult[2] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      tmp2 = useCheckpointPreloaderDefault();
    }
  : function CheckpointLoaderWrapper(arg0) {
      if (tmp) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        let tmp3Result = __initData2(CheckpointModal, obj2);
      } else {
        const obj = { style: tmp2.loader, children: __initData2(timestampProducer, {}) };
        tmp3Result = __initData2(React5, obj);
      }
      return tmp3Result;
    };
