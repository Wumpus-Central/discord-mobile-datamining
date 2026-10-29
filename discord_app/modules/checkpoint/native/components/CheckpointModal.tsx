// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import useCheckpointPreloaderDefault from "../useCheckpointPreloader.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  importDefault = undefined;
  route = undefined;
  closure_3 = undefined;
  noop = undefined;
  let stateFromStores;
  closure_7 = undefined;
  let selectedCharacterTraits;
  c9 = undefined;
  c10 = undefined;
  function transition(direction) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.skipThrottle;
    if (flag === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      const obj3 = { flow, stats, currentRoute: route, direction };
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(obj3);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = CheckpointNavigation.SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(route)) {
          closure_7();
        }
        closure_3(adjacentCheckpointRoute);
      } else if (1 === direction) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }
  function handleForward(STATS_ONLY) {
    flow = STATS_ONLY;
    const obj = { content: "", components: null };
    const obj2 = {
      type: flow(route[28]).ComponentType.CHECKPOINT_CARD,
      id: flow(route[29]).asComponentId("0"),
      checkpointData: null,
    };
    const obj3 = flow(route[29]);
    obj2.checkpointData = flow(route[30]).toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1);
    const items = [obj2];
    obj.components = items;
    const obj4 = flow(route[30]);
    const tmp = new selectedCharacterTraits(obj);
    const obj6 = { message: tmp, source: "checkpoint", customSendHandler: null };
    closure_1 = closure_3((arg0, arg1, arg2) => {
      closure_0 = arg0;
      const withMessage = arg1;
      closure_2 = arg2;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      const iter = (function* (arg0, value, arg2) {
        closure_5 = tmp3;
        closure_4 = tmp41;
        closure_132_0 = closure_0;
        const withMessage2 = withMessage.withMessage;
        closure_132_2 = closure_2;
        yield "Reflect";
        closure_132_2(true);
        c3 = withMessage2;
        if (withMessage2 == null) {
          c3 = "";
        }
        yield closure_0(13247).sendCheckpointCard(closure_132_0, c3, closure_133_0);
        closure_0(13179).closeForwardModal();
        closure_1_11(1, { skipThrottle: true });
        yield "IconComponent";
        closure_132_2(false);
        const intl = closure_0(1125).intl;
        closure_0(5700).presentError(intl.string(closure_0(1125).t.fEptJP));
      })();
      iter.next();
      return iter;
    });
    obj6.customSendHandler = function customSendHandler(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    flow(route[31]).openForwardModal(obj6);
  }
  closure_13 = async function _handleNext() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            let characterFromTraits;
            if (route === closure_0(tmp53[18]).CheckpointRoute.HOME) {
              if (_undefined.fetchState !== constants.SUCCESS) {
                if (_undefined.fetchState === tmp36.FETCHING) {
                  c5 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                } else {
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: closure_0(tmp53[15]).fetchCheckpointData(), done: false };
                  return obj5;
                }
              }
            }
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else if (!value) {
              const intl2 = closure_0(tmp53[33]).intl;
              closure_0(tmp53[32]).presentError(intl2.string(closure_0(tmp53[33]).t.fEptJP));
              c5 = 3;
              const obj10 = { value: undefined, done: true };
              return obj10;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_129_10(false);
            throw tmp53;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_129_11(1, { skipThrottle: true });
            } else {
              const intl = closure_0(tmp53[33]).intl;
              closure_0(tmp53[32]).presentError(intl.string(closure_0(tmp53[33]).t.fEptJP));
              const obj = closure_0(tmp53[32]);
            }
            c3 = 0;
            closure_129_10(false);
            c5 = 3;
          }
          c3 = 0;
          closure_129_10(false);
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
        if (closure_129_5) {
          closure_129_10(true);
          c3 = 1;
          characterFromTraits = closure_0(tmp53[34]).getCharacterFromTraits(closure_129_8);
          const obj6 = closure_0(tmp53[34]);
          c4 = 3;
          c5 = 1;
          const obj12 = { value: closure_0(tmp53[15]).completeCheckpoint(characterFromTraits), done: false };
          return obj12;
        } else {
          closure_129_11(1);
        }
      } catch (tmp53) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp53;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  let tmp = closure_16();
  const rect = require("useSafeAreaInsets")();
  const effect = noop.useEffect(() => {
    flow(route[15]).resetEditedCharacter();
  }, []);
  _require = require("CheckpointFlows").getCheckpointFlow(flag);
  let obj2 = require("CheckpointFlows");
  let items = [c9];
  importDefault = require("initialize").useStateFromStores(items, () => _undefined.stats);
  [route, closure_3] = noop.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  _slicedToArray = noop.useRef(0);
  let obj3 = require("initialize");
  const checkpointRoutePresentation = require("CheckpointNavigation").getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp40Result = route === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp40Result) {
    tmp40Result = null != statsScreen;
  }
  let tmp40Result4 = tmp40Result;
  if (!tmp40Result) {
    tmp40Result4 = route === tmp5(tmp3[18]).CheckpointRoute.INTRODUCTION;
  }
  let obj4 = require("CheckpointNavigation");
  let result = require("CheckpointNavigation").isCheckpointCustomizationRoute(route);
  const tmp15 = route === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  noop = tmp15;
  const tmp16 = route === require("CheckpointNavigation").CheckpointRoute.SUMMARY;
  const tmp5Result = require("CheckpointNavigation");
  const items1 = [c9];
  stateFromStores = require("initialize").useStateFromStores(items1, () => _undefined.character);
  const tmp5Result6 = require("initialize");
  const characterCardColorPalette = require("CheckpointCardColors").getCharacterCardColorPalette(stateFromStores);
  const tmp5Result7 = require("CheckpointCardColors");
  const cardColors = require("CheckpointCardColors").getCardColors(characterCardColorPalette);
  const tmp20 = tmp16 ? cardColors.primaryBackgroundColor : transition;
  const tmp5Result8 = require("CheckpointCardColors");
  const items2 = [c9];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(tmp3[20]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[21]).VoiceNormalIcon;
  }
  const tmp5Result9 = require("initialize");
  closure_7 = require("useCheckpointSound")(tmp2(tmp3[23]));
  require("useCheckpointMusic")();
  const tmp2Result = require("useCheckpointSound");
  [tmp25, tmp26] = noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE);
  if (!tmp15) {
    let BASE = tmp5(tmp3[25]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[25]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result10 = tmp5(tmp3[25]);
  }
  const tmp28 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TO_TRAIT[tmp25];
  const tmp29 = require("useCheckpointCustomization")();
  selectedCharacterTraits = tmp29.selectedCharacterTraits;
  const blockedTraits = tmp29.blockedTraits;
  const hasItem = blockedTraits.includes(tmp28);
  const tmp7Result = _slicedToArray(
    noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE),
    2,
  );
  [tmp32, c9] = noop.useState(null);
  let sum = null;
  if (result) {
    sum = null;
    if (null != tmp32) {
      sum = rect.bottom + sum1 + tmp32;
    }
  }
  const tmp7Result3 = _slicedToArray(noop.useState(null), 2);
  [tmp36, c10] = noop.useState(false);
  if (tmp15) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp28;
  }
  let tmp38 = result;
  if (result) {
    tmp38 = null != first1 || null == selectedCharacterTraits[tmp28];
    const tmp39 = null != first1 || null == selectedCharacterTraits[tmp28];
  }
  let obj5 = { theme: handleForward.DARK, children: null };
  let obj6 = { style: tmp.container, children: null };
  const items3 = [tmp.layer];
  let coveredCharacterLayer = tmp40Result;
  if (tmp40Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj7 = {
    collapsable: false,
    style: items3,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items3[1] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp40Result4) {
    str2 = "none";
  }
  obj7.pointerEvents = str2;
  obj7.accessibilityElementsHidden = tmp40Result4;
  let str3 = str;
  if (tmp40Result4) {
    str3 = "no-hide-descendants";
  }
  obj7.importantForAccessibility = str3;
  obj7.children = closure_13(require("CheckpointCharacterStage"), {
    stage: characterStage,
    isActive: !tmp40Result4,
    characterBottomInset: sum,
  });
  const items4 = [closure_13(closure_7, obj7), , , , ,];
  if (tmp40Result) {
    let prop;
    if (tmp16) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj9 = { gradientStartColor: prop };
    tmp40Result = tmp40(tmp2(tmp3[37]), obj9);
    const tmp2Result7 = tmp2(tmp3[37]);
  }
  items4[1] = tmp40Result;
  if (tmp40Result4) {
    let obj10 = { style: tmp.layer, children: null };
    let obj11 = {
      route,
      onNextStep: function handleNextStep() {
        transition(1, { skipThrottle: true });
      },
      onPreviousStep: function handlePreviousStep() {
        transition(-1, { skipThrottle: true });
      },
    };
    obj10.children = tmp40(tmp2(tmp3[38]), obj11);
    tmp40Result4 = tmp40(tmp42, obj10);
  }
  items4[2] = tmp40Result4;
  let obj12 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj12.style = items5;
  let obj8 = { stage: characterStage, isActive: !tmp40Result4, characterBottomInset: sum };
  const tmp7Result4 = _slicedToArray(noop.useState(false), 2);
  if (tmp16) {
    let clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[40]);
  }
  const obj13 = { animatedUri: clydeLogoImage, staticUri: null, style: null };
  if (tmp16) {
    let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[41]);
  }
  obj13.staticUri = clydeLogoStaticImage;
  obj13.style = tmp.logo;
  const items6 = [closure_13(require("CheckpointApngPlayer"), obj13)];
  const obj14 = { style: tmp.headerActions, children: null };
  const obj15 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result8 = require("CheckpointApngPlayer");
  obj15.onPress = require("CheckpointActionCreators").toggleMute;
  let intl = tmp5(tmp3[33]).intl;
  const t = tmp5(tmp3[33]).t;
  obj15.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj15.color = tmp20;
  obj15.children = closure_13(VoiceNormalIcon, { color: tmp20, size: "xs" });
  const items7 = [closure_13(require("CheckpointHeaderButton"), obj15)];
  const obj16 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result9 = require("CheckpointHeaderButton");
  obj16.onPress = require("ModalActionCreators").pop;
  let intl2 = tmp5(tmp3[33]).intl;
  obj16.accessibilityLabel = intl2.string(require("util").t.cpT0Cq);
  obj16.color = tmp20;
  obj16.children = closure_13(require("XSmallIcon").XSmallIcon, { color: tmp20, size: "xs" });
  items7[1] = closure_13(require("CheckpointHeaderButton"), obj16);
  obj14.children = items7;
  items6[1] = closure_14(closure_7, obj14);
  obj12.children = items6;
  items4[3] = closure_14(closure_7, obj12);
  if (result) {
    const obj17 = {
      style: null,
      onLayout: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    const items8 = [tmp.customizationSection];
    ({ left: obj24.marginLeft, right: obj24.marginRight, bottom: obj24.marginBottom } = rect);
    items8[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    obj17.style = items8;
    obj17.onLayout = function handleCustomizationSectionLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.height);
    };
    let str4 = str;
    if (tmp36) {
      str4 = "none";
    }
    obj17.pointerEvents = str4;
    obj17.accessibilityElementsHidden = tmp36;
    if (tmp36) {
      str = "no-hide-descendants";
    }
    obj17.importantForAccessibility = str;
    let tmp40Result5 = tmp15;
    if (tmp15) {
      const obj19 = {
        activeCustomizationOption: tmp25,
        onSelectOption: tmp26,
        disableSwitching: hasItem,
        disabled: tmp36,
      };
      tmp40Result5 = tmp40(tmp5(tmp3[44]).FinalizeTraitTabs, obj19);
    }
    const items9 = [tmp40Result5];
    const obj20 = {
      activeCustomizationOption: tmp25,
      disabled: tmp36,
      showEarnedCount: !tmp15,
      onSelectOption: tmp5(tmp3[15]).selectCharacterTrait,
    };
    items9[1] = tmp40(tmp2(tmp3[45]), obj20);
    obj17.children = items9;
    result = closure_14(tmp42, obj17);
    const obj18 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result11 = tmp2(tmp3[45]);
  }
  items4[4] = result;
  const obj21 = {
    activeRoute: route,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      const self = this;
      const apply = closure_13.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onShare: function handleShare() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13237, dependencyMap.paths), "CheckpointShare", {
        character: stateFromStores,
        stats,
        onForward: handleForward,
      });
    },
    color: tmp20,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null,
  };
  let shadowColor;
  const tmp2Result10 = require("CheckpointHeaderButton");
  if (tmp16) {
    shadowColor = cardColors.shadowColor;
  }
  obj21.shadowColor = shadowColor;
  obj21.backDisabled = tmp36;
  obj21.nextDisabled = tmp38;
  obj21.nextLoading = tmp36;
  obj21.nextBlockedTrait = first1;
  items4[5] = closure_13(require("CheckpointNavigationControls"), obj21);
  obj6.children = items4;
  obj5.children = closure_14(closure_7, obj6);
  const tmp2Result12 = require("CheckpointNavigationControls");
  return closure_13(require("CheckpointStepHeaderRefContext").CheckpointStepFocusProvider, {
    route,
    children: closure_13(require("native").ThemeContextProvider, obj5),
  });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointFetchStates = fn(13236).CheckpointFetchStates;
const CheckpointConstants = fn(6054);
({
  CHECKPOINT_LOGO_SIZE,
  CHECKPOINT_PRIMARY: closure_11,
  CHECKPOINT_CONTROL_SIZE,
  CHECKPOINT_NAV_HEIGHT,
} = CheckpointConstants);
const ThemeTypes = fn(1095).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5005);
let obj2 = {
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK },
  container: null,
  layer: null,
  coveredCharacterLayer: null,
  nav: null,
  logo: null,
  headerActions: null,
  customizationSection: null,
};
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.container = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.coveredCharacterLayer = { opacity: 0 };
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
let size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj2.logo = size;
let obj4 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const rect1 = { position: "absolute", left: 0, right: 0, bottom: sum1, gap: nativeDefault.space.PX_12 };
obj2.customizationSection = rect1;
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointLoaderWrapper(arg0) {
      const cResult = c.c(5);
      const tmp3 = closure_16();
      if (tmp2) {
        if (cResult[3] !== arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          const tmp20 = map1(CheckpointModal, obj2);
          cResult[3] = arg0;
          cResult[4] = tmp20;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = map1(timestampProducer, {});
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp3.loader) {
          const obj3 = { style: tmp3.loader, children: first };
          const tmp12 = map1(React5, obj3);
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
        let tmp3Result = map1(CheckpointModal, obj2);
      } else {
        const obj = { style: tmp2.loader, children: map1(timestampProducer, {}) };
        tmp3Result = map1(React5, obj);
      }
      return tmp3Result;
    };
