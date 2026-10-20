// === Module 12778: CheckpointModal ===

// Module 12778 (CheckpointModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 2000 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5980 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6320 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import ForwardModalUtils from "ForwardModalUtils" /* 12725 */;
import CheckpointFlows from "CheckpointFlows" /* 12783 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 12849 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4891 */;
import CheckpointStore from "CheckpointStore" /* 12779 */;

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
  let stateFromStores;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  function transition(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(closure_0, first, arg0);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = CheckpointNavigation.SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(first)) {
          closure_6();
        }
        dependencyMap(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }
  closure_10 = async function _handleNext() {
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
          } else if (first === tmp3(tmp49[14]).CheckpointRoute.HOME) {
            if (transition.fetchState !== constants.SUCCESS) {
              if (transition.fetchState === tmp36.FETCHING) {
                c4 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c1 = 1;
                c4 = 1;
                const obj5 = { value: tmp3(tmp49[12]).fetchCheckpointData(), done: false };
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
              const intl2 = tmp3(tmp49[26]).intl;
              tmp3(tmp49[25]).presentError(intl2.string(tmp3(tmp49[26]).t.fEptJP));
              c4 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_128_8(false);
            throw tmp49;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_128_9(1, true);
            } else {
              const intl = tmp3(tmp49[26]).intl;
              tmp3(tmp49[25]).presentError(intl.string(tmp3(tmp49[26]).t.fEptJP));
              const obj = tmp3(tmp49[25]);
            }
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
          }
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        if (closure_128_4) {
          closure_128_8(true);
          c3 = 1;
          c1 = 3;
          c4 = 1;
          const obj11 = { value: tmp3(tmp49[12]).completeCheckpoint(closure_128_7), done: false };
          return obj11;
        } else {
          closure_128_9(1);
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
  const tmp = closure_18();
  const rect = activeRoute(1633)();
  const effect = stateFromStores.useEffect(() => {
    closure_0(12780).resetEditedCharacter();
  }, []);
  _require = require("CheckpointFlows").getCheckpointFlow(flag);
  [activeRoute, dependencyMap] = stateFromStores.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  stateFromStores.useRef(0);
  let obj2 = require("CheckpointFlows");
  const checkpointRoutePresentation = require("CheckpointNavigation").getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp36Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp36Result) {
    tmp36Result = null != statsScreen;
  }
  let obj3 = require("CheckpointNavigation");
  let result = require("CheckpointNavigation").isCheckpointCustomizationRoute(activeRoute);
  const tmp13 = activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp13;
  const tmp14 = activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY;
  const tmp5Result = require("CheckpointNavigation");
  let items = [transition];
  stateFromStores = require("initialize").useStateFromStores(items, () => transition.character);
  const tmp15 = transition;
  const tmp5Result5 = require("initialize");
  const cardColors = require("CheckpointCardColors").getCardColors(stateFromStores);
  const tmp18 = tmp14 ? cardColors.primaryBackgroundColor : closure_12;
  const tmp5Result6 = require("CheckpointCardColors");
  const items1 = [tmp15];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => transition.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(11502).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(8521).VoiceNormalIcon;
  }
  const tmp5Result7 = require("initialize");
  closure_6 = activeRoute(12786)(tmp2(12787));
  activeRoute(12788)();
  let tmp2Result = activeRoute(12786);
  [tmp23, tmp24] = stateFromStores.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE);
  if (!tmp13) {
    let BASE = tmp5(6319).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6319).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result8 = tmp5(6319);
  }
  const tmp26 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TRAITS[tmp23];
  const tmp6Result = _slicedToArray(stateFromStores.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  ({ blockedTraits, character: c7, selectedCharacterTraits } = activeRoute(12790)());
  const hasItem = blockedTraits.includes(tmp26);
  const tmp27 = activeRoute(12790)();
  [tmp30, c8] = stateFromStores.useState(false);
  if (tmp13) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp26;
  }
  let tmp32 = result;
  if (result) {
    tmp32 = null != first1 || null == selectedCharacterTraits[tmp26];
    const tmp34 = null != first1 || null == selectedCharacterTraits[tmp26];
  }
  let obj4 = { theme: ThemeTypes.DARK, children: null };
  let obj5 = { style: tmp.container, children: null };
  const items2 = [tmp.layer, , ];
  const obj6 = { paddingTop: null };
  const sum = rect.top + CHECKPOINT_NAV_HEIGHT;
  obj6.paddingTop = sum + activeRoute(587).space.PX_16;
  items2[1] = obj6;
  let coveredCharacterLayer = tmp36Result;
  if (tmp36Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj7 = { style: items2, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items2[2] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp36Result) {
    str2 = "none";
  }
  obj7.pointerEvents = str2;
  obj7.accessibilityElementsHidden = tmp36Result;
  let str3 = str;
  if (tmp36Result) {
    str3 = "no-hide-descendants";
  }
  obj7.importantForAccessibility = str3;
  obj7.children = closure_15(activeRoute(12791), { stage: characterStage, activeCustomizationOption: tmp23 });
  const items3 = [closure_15(c7, obj7), , , , ];
  if (tmp36Result) {
    let prop;
    if (tmp14) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj8 = { children: null };
    let obj9 = { gradientStartColor: prop };
    const items4 = [closure_15(tmp2(12792), obj9), ];
    let obj10 = { style: tmp.layer, children: null };
    let obj11 = {
      route: activeRoute,
      onNextStep: function handleNextStep() {
          transition(1, true);
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, true);
        }
    };
    obj10.children = closure_15(tmp2(12794), obj11);
    items4[1] = closure_15(tmp37, obj10);
    obj8.children = items4;
    tmp36Result = closure_17(closure_16, obj8);
    const tmp2Result7 = tmp2(12792);
  }
  items3[1] = tmp36Result;
  const obj12 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj12.style = items5;
  const obj13 = { uri: null, style: null };
  const tmp6Result2 = _slicedToArray(stateFromStores.useState(false), 2);
  obj13.uri = activeRoute(12836);
  obj13.style = tmp.logo;
  const items6 = [closure_15(activeRoute(12801), obj13), ];
  const obj14 = { style: tmp.headerActions, children: null };
  const obj15 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result8 = activeRoute(12801);
  obj15.onPress = require("CheckpointActionCreators").toggleMute;
  let intl = tmp5(1128).intl;
  const t = tmp5(1128).t;
  obj15.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj15.color = tmp18;
  obj15.children = closure_15(VoiceNormalIcon, { color: tmp18, size: "xs" });
  const items7 = [closure_15(activeRoute(12837), obj15), ];
  const obj16 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result9 = activeRoute(12837);
  obj16.onPress = activeRoute(6623).pop;
  let intl2 = tmp5(1128).intl;
  obj16.accessibilityLabel = intl2.string(require("util").t.cpT0Cq);
  obj16.color = tmp18;
  obj16.children = closure_15(require("XSmallIcon").XSmallIcon, { color: tmp18, size: "xs" });
  items7[1] = closure_15(activeRoute(12837), obj16);
  obj14.children = items7;
  items6[1] = closure_17(c7, obj14);
  obj12.children = items6;
  items3[2] = closure_17(c7, obj12);
  if (result) {
    const obj17 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items8 = [tmp.customizationSection, ];
    ({ left: obj23.marginLeft, right: obj23.marginRight, bottom: obj23.marginBottom } = rect);
    items8[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    obj17.style = items8;
    let str4 = str;
    if (tmp30) {
      str4 = "none";
    }
    obj17.pointerEvents = str4;
    obj17.accessibilityElementsHidden = tmp30;
    if (tmp30) {
      str = "no-hide-descendants";
    }
    obj17.importantForAccessibility = str;
    let tmp35Result = tmp13;
    if (tmp13) {
      const obj19 = { activeCustomizationOption: tmp23, onSelectOption: tmp24, disableSwitching: hasItem, disabled: tmp30 };
      tmp35Result = closure_15(tmp5(12838).FinalizeTraitTabs, obj19);
    }
    const items9 = [tmp35Result, ];
    const obj20 = { activeCustomizationOption: tmp23, disabled: tmp30, showEarnedCount: !tmp13, onSelectOption: tmp5(12780).selectCharacterTrait };
    items9[1] = closure_15(tmp2(12841), obj20);
    obj17.children = items9;
    result = closure_17(tmp37, obj17);
    const obj18 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result11 = tmp2(12841);
  }
  items3[3] = result;
  const obj21 = {
    activeRoute,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      const self = this;
      const apply = closure_10.apply;
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
          closure_0(closure_2[40]).closeForwardModal();
          transition(1, true);
          return Promise.resolve();
        }
      });
      const obj5 = {
        message: tmp5,
        source: "checkpoint",
        customSendHandler() {
          closure_0(closure_2[40]).closeForwardModal();
          transition(1, true);
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
  const tmp2Result10 = activeRoute(12837);
  if (tmp14) {
    shadowColor = cardColors.shadowColor;
  }
  obj21.shadowColor = shadowColor;
  obj21.backDisabled = tmp30;
  obj21.nextDisabled = tmp32;
  obj21.nextLoading = tmp30;
  obj21.nextBlockedTrait = first1;
  items3[4] = closure_15(activeRoute(12847), obj21);
  obj5.children = items3;
  obj4.children = closure_17(c7, obj5);
  return closure_15(require("native").ThemeContextProvider, obj4);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointFetchStates = fn(12779).CheckpointFetchStates;
const CheckpointConstants = fn(5973);
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: closure_12, CheckpointVersions: map1, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = fn(1098).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4945);
let obj2 = { loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK }, container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: null, logo: null, headerActions: null, customizationSection: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
obj2.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
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
const size = fn(2);
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