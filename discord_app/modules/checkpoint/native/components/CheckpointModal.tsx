// === Module 12953: CheckpointModal ===

// Module 12953 (CheckpointModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 2000 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6022 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6363 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import ForwardModalUtils from "ForwardModalUtils" /* 12900 */;
import CheckpointFlows from "CheckpointFlows" /* 12958 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13037 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4914 */;
import CheckpointStore from "CheckpointStore" /* 12954 */;

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  importDefault = undefined;
  activeRoute = undefined;
  closure_3 = undefined;
  noop = undefined;
  let stateFromStores;
  closure_7 = undefined;
  let selectedCharacterTraits;
  c9 = undefined;
  function transition(arg0) {
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
      const obj2 = CheckpointFlows;
      const adjacentCheckpointRoute = obj2.getAdjacentCheckpointRoute(closure_0, first, arg0, closure_1);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = CheckpointNavigation.SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(first)) {
          closure_7();
        }
        closure_3(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }
  closure_11 = async function _handleNext() {
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
        return { value: "IconComponent", done: null };
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
            if (first === closure_0(tmp53[15]).CheckpointRoute.HOME) {
              if (_undefined.fetchState !== constants.SUCCESS) {
                if (_undefined.fetchState === tmp36.FETCHING) {
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: closure_0(tmp53[12]).fetchCheckpointData(), done: false };
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
              const intl2 = closure_0(tmp53[26]).intl;
              closure_0(tmp53[25]).presentError(intl2.string(closure_0(tmp53[26]).t.fEptJP));
              c5 = 3;
              const obj10 = { value: undefined, done: true };
              return obj10;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_129_9(false);
            throw tmp53;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_129_10(1, { skipThrottle: true });
            } else {
              const intl = closure_0(tmp53[26]).intl;
              closure_0(tmp53[25]).presentError(intl.string(closure_0(tmp53[26]).t.fEptJP));
              const obj = closure_0(tmp53[25]);
            }
            c3 = 0;
            closure_129_9(false);
            c5 = 3;
          }
          c3 = 0;
          closure_129_9(false);
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
        if (closure_129_5) {
          closure_129_9(true);
          c3 = 1;
          characterFromTraits = closure_0(tmp53[27]).getCharacterFromTraits(closure_129_8);
          const obj6 = closure_0(tmp53[27]);
          c4 = 3;
          c5 = 1;
          const obj12 = { value: closure_0(tmp53[12]).completeCheckpoint(characterFromTraits), done: false };
          return obj12;
        } else {
          closure_129_10(1);
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
  const tmp = closure_18();
  const rect = require("useSafeAreaInsets")();
  const effect = noop.useEffect(() => {
    closure_0(first[12]).resetEditedCharacter();
  }, []);
  _require = require("CheckpointFlows").getCheckpointFlow(flag);
  let obj2 = require("CheckpointFlows");
  let items = [c9];
  importDefault = require("initialize").useStateFromStores(items, () => _undefined.stats);
  [activeRoute, closure_3] = noop.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  _slicedToArray = noop.useRef(0);
  let obj3 = require("initialize");
  const checkpointRoutePresentation = require("CheckpointNavigation").getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp36Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp36Result) {
    tmp36Result = null != statsScreen;
  }
  let obj4 = require("CheckpointNavigation");
  let result = require("CheckpointNavigation").isCheckpointCustomizationRoute(activeRoute);
  const tmp14 = activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  noop = tmp14;
  const tmp15 = activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY;
  const tmp5Result = require("CheckpointNavigation");
  const items1 = [c9];
  stateFromStores = require("initialize").useStateFromStores(items1, () => _undefined.character);
  const tmp5Result5 = require("initialize");
  const cardColors = require("CheckpointCardColors").getCardColors(stateFromStores);
  const tmp18 = tmp15 ? cardColors.primaryBackgroundColor : closure_12;
  const tmp5Result6 = require("CheckpointCardColors");
  const items2 = [c9];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(tmp3[17]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[18]).VoiceNormalIcon;
  }
  const tmp5Result7 = require("initialize");
  closure_7 = require("useCheckpointSound")(tmp2(tmp3[20]));
  require("useCheckpointMusic")();
  let tmp2Result = require("useCheckpointSound");
  [tmp23, tmp24] = noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE);
  if (!tmp14) {
    let BASE = tmp5(tmp3[22]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[22]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result8 = tmp5(tmp3[22]);
  }
  const tmp26 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TRAITS[tmp23];
  const tmp27 = require("useCheckpointCustomization")();
  selectedCharacterTraits = tmp27.selectedCharacterTraits;
  const blockedTraits = tmp27.blockedTraits;
  const hasItem = blockedTraits.includes(tmp26);
  const tmp7Result = _slicedToArray(noop.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  [tmp30, c9] = noop.useState(false);
  if (tmp14) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp26;
  }
  let tmp32 = result;
  if (result) {
    tmp32 = null != first1 || null == selectedCharacterTraits[tmp26];
    const tmp34 = null != first1 || null == selectedCharacterTraits[tmp26];
  }
  let obj5 = { theme: ThemeTypes.DARK, children: null };
  let obj6 = { style: tmp.container, children: null };
  const items3 = [tmp.layer, , ];
  const obj7 = { paddingTop: null };
  const sum = rect.top + closure_11;
  obj7.paddingTop = sum + require("native").space.PX_16;
  items3[1] = obj7;
  let coveredCharacterLayer = tmp36Result;
  if (tmp36Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj8 = { style: items3, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items3[2] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp36Result) {
    str2 = "none";
  }
  obj8.pointerEvents = str2;
  obj8.accessibilityElementsHidden = tmp36Result;
  let str3 = str;
  if (tmp36Result) {
    str3 = "no-hide-descendants";
  }
  obj8.importantForAccessibility = str3;
  obj8.children = closure_15(require("CheckpointCharacterStage"), { stage: characterStage, activeCustomizationOption: tmp23 });
  const items4 = [closure_15(closure_7, obj8), , , , ];
  if (tmp36Result) {
    let prop;
    if (tmp15) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj9 = { children: null };
    let obj10 = { gradientStartColor: prop };
    const items5 = [closure_15(tmp2(tmp3[30]), obj10), ];
    let obj11 = { style: tmp.layer, children: null };
    let obj12 = {
      route: activeRoute,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true });
        }
    };
    obj11.children = closure_15(tmp2(tmp3[31]), obj12);
    items5[1] = closure_15(tmp37, obj11);
    obj9.children = items5;
    tmp36Result = closure_17(closure_16, obj9);
    const tmp2Result7 = tmp2(tmp3[30]);
  }
  items4[1] = tmp36Result;
  const obj13 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj13.style = items6;
  const obj14 = { animatedUri: null, staticUri: null, style: null };
  const tmp7Result2 = _slicedToArray(noop.useState(false), 2);
  obj14.animatedUri = require("module_8629");
  obj14.staticUri = require("module_8630");
  obj14.style = tmp.logo;
  const items7 = [closure_15(require("CheckpointApngPlayer"), obj14), ];
  const obj15 = { style: tmp.headerActions, children: null };
  const obj16 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result8 = require("CheckpointApngPlayer");
  obj16.onPress = require("CheckpointActionCreators").toggleMute;
  let intl = tmp5(tmp3[26]).intl;
  const t = tmp5(tmp3[26]).t;
  obj16.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj16.color = tmp18;
  obj16.children = closure_15(VoiceNormalIcon, { color: tmp18, size: "xs" });
  const items8 = [closure_15(require("CheckpointHeaderButton"), obj16), ];
  const obj17 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result9 = require("CheckpointHeaderButton");
  obj17.onPress = require("ModalActionCreators").pop;
  let intl2 = tmp5(tmp3[26]).intl;
  obj17.accessibilityLabel = intl2.string(require("util").t.cpT0Cq);
  obj17.color = tmp18;
  obj17.children = closure_15(require("XSmallIcon").XSmallIcon, { color: tmp18, size: "xs" });
  items8[1] = closure_15(require("CheckpointHeaderButton"), obj17);
  obj15.children = items8;
  items7[1] = closure_17(closure_7, obj15);
  obj13.children = items7;
  items4[2] = closure_17(closure_7, obj13);
  if (result) {
    const obj18 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items9 = [tmp.customizationSection, ];
    ({ left: obj24.marginLeft, right: obj24.marginRight, bottom: obj24.marginBottom } = rect);
    items9[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    obj18.style = items9;
    let str4 = str;
    if (tmp30) {
      str4 = "none";
    }
    obj18.pointerEvents = str4;
    obj18.accessibilityElementsHidden = tmp30;
    if (tmp30) {
      str = "no-hide-descendants";
    }
    obj18.importantForAccessibility = str;
    let tmp35Result = tmp14;
    if (tmp14) {
      const obj20 = { activeCustomizationOption: tmp23, onSelectOption: tmp24, disableSwitching: hasItem, disabled: tmp30 };
      tmp35Result = closure_15(tmp5(tmp3[37]).FinalizeTraitTabs, obj20);
    }
    const items10 = [tmp35Result, ];
    const obj21 = { activeCustomizationOption: tmp23, disabled: tmp30, showEarnedCount: !tmp14, onSelectOption: tmp5(tmp3[12]).selectCharacterTrait };
    items10[1] = closure_15(tmp2(tmp3[38]), obj21);
    obj18.children = items10;
    result = closure_17(tmp37, obj18);
    const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result11 = tmp2(tmp3[38]);
  }
  items4[3] = result;
  const obj22 = {
    activeRoute,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onShare: function handleShare() {
      const obj = { type: Server.ComponentType.CHECKPOINT_CARD, id: InteractionComponentTypes.asComponentId("0"), checkpointData: null };
      const obj3 = { version: V2026.V2026, character: stateFromStores };
      const obj4 = { content: "", components: null };
      obj.checkpointData = obj3;
      const items = [obj];
      obj4.components = items;
      const tmp5 = new MessageRecord(obj4);
      ForwardModalUtils.openForwardModal({
        message: tmp5,
        source: "checkpoint",
        customSendHandler() {
          closure_0(first[42]).closeForwardModal();
          transition(1, { skipThrottle: true });
          return Promise.resolve();
        }
      });
      const obj5 = {
        message: tmp5,
        source: "checkpoint",
        customSendHandler() {
          closure_0(first[42]).closeForwardModal();
          transition(1, { skipThrottle: true });
          return Promise.resolve();
        }
      };
      const tmp2Result = ForwardModalUtils;
    },
    color: tmp18,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null
  };
  let shadowColor;
  const tmp2Result10 = require("CheckpointHeaderButton");
  if (tmp15) {
    shadowColor = cardColors.shadowColor;
  }
  obj22.shadowColor = shadowColor;
  obj22.backDisabled = tmp30;
  obj22.nextDisabled = tmp32;
  obj22.nextLoading = tmp30;
  obj22.nextBlockedTrait = first1;
  items4[4] = closure_15(require("CheckpointNavigationControls"), obj22);
  obj6.children = items4;
  obj5.children = closure_17(closure_7, obj6);
  return closure_15(require("native").ThemeContextProvider, obj5);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointFetchStates = fn(12954).CheckpointFetchStates;
const CheckpointConstants = fn(6015);
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: closure_12, CheckpointVersions: map1, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = fn(1098).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK }, container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: null, logo: null, headerActions: null, customizationSection: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
let size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj2.logo = size;
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const rect1 = { position: "absolute", left: 0, right: 0, bottom: null, gap: null };
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
rect1.bottom = sum + nativeDefault.space.PX_24;
rect1.gap = nativeDefault.space.PX_12;
obj2.customizationSection = rect1;
let closure_18 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointLoaderWrapper(arg0) {
  const cResult = c.c(5);
  const tmp3 = closure_18();
  if (tmp2) {
    if (cResult[3] !== arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      const tmp20 = value2(CheckpointModal, obj2);
      cResult[3] = arg0;
      cResult[4] = tmp20;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = value2(timestampProducer, {});
      cResult[0] = tmp8;
      let first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.loader) {
      const obj3 = { style: tmp3.loader, children: first };
      const tmp12 = value2(React5, obj3);
      cResult[1] = tmp3.loader;
      cResult[2] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[2];
    }
    return tmp9;
  }
  tmp2 = useCheckpointPreloaderDefault();
}) : (function CheckpointLoaderWrapper(arg0) {
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmp3Result = value2(CheckpointModal, obj2);
  } else {
    const obj = { style: tmp2.loader, children: value2(timestampProducer, {}) };
    tmp3Result = value2(React5, obj);
  }
  return tmp3Result;
});