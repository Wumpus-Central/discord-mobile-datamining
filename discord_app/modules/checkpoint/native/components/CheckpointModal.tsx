// === Module 14168: CheckpointModal ===

// Module 14168 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 2116 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6321 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6335 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ForwardModalUtils from "ForwardModalUtils" /* 10172 */;
import CheckpointFlows from "CheckpointFlows" /* 14183 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14187 */;
import CheckpointSounds from "CheckpointSounds" /* 14189 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 14439 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 5186 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  importDefault = undefined;
  let stateFromStores;
  route = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = undefined;
  let stateFromStores1;
  closure_8 = undefined;
  let stateFromStores2;
  c10 = undefined;
  function transition(direction, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.skipThrottle;
    if (flag === undefined) {
      flag = false;
    }
    let IMPACT_LIGHT = obj.hapticType;
    if (IMPACT_LIGHT === undefined) {
      IMPACT_LIGHT = HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT;
    }
    const timestamp = Date.now();
    if (flag) {
      const obj3 = { flow: checkpointFlow, stats, isCharacterCreatorEnabled: stateFromStores, currentRoute: route, direction };
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(obj3);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const result = HapticUtils.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const obj6 = { previousRoute: route, route: adjacentCheckpointRoute };
        const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds(obj6);
        if (null != checkpointRouteSounds) {
          closure_8(checkpointRouteSounds);
        }
        closure_4(adjacentCheckpointRoute);
      } else if (1 === direction) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }
  function handleForward(STATS_ONLY) {
    closure_0 = STATS_ONLY;
    let result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = { content: "", components: null };
    let obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: null, checkpointData: null };
    obj3.id = InteractionComponentTypes.asComponentId("0");
    obj3.checkpointData = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores1, closure_1);
    items = [obj3];
    obj2.components = items;
    const tmp2 = new MessageRecord(obj2);
    let obj7 = { message: tmp2, source: "checkpoint", customSendHandler: null };
    closure_1 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
      closure_0 = arg0;
      const withMessage = arg1;
      dependencyMap = arg2;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      const iter = (async (arg0, value, arg2) => {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_5 = tmp3;
                closure_4 = tmp44;
                let withMessage2;
                closure_132_2 = undefined;
                closure_132_0 = closure_0;
                withMessage2 = withMessage.withMessage;
                closure_132_2 = dependencyMap;
                c7 = 1;
                c8 = 1;
                return { value: "flexDirection", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                closure_132_2(true);
                c6 = 1;
                c3 = withMessage2;
                if (withMessage2 == null) {
                  c3 = "";
                }
                c7 = 3;
                c8 = 1;
                const obj8 = { value: closure_0(14154).sendCheckpointCard(closure_132_0, c3, closure_133_0), done: false };
                return obj8;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(5951).presentError(intl.string(closure_0(1113).t.fEptJP));
              c8 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              const result = closure_0(14148).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj = closure_0(14148);
              closure_0(10172).closeForwardModal();
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp43) {
            if (tmp4 === c6) {
              c8 = tmp2;
              throw tmp43;
            } else {
              c7 = tmp;
            }
            tmp44 = c6;
          }
        }
      })();
      iter.next();
      return iter;
    });
    obj7.customSendHandler = function customSendHandler(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    ForwardModalUtils.openForwardModal(obj7);
  }
  exit = async function _handleNext() {
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
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (timestampProducer) {
            closure_2_10(true);
            c3 = 1;
            const characterFromTraits = tmp3(tmp40[40]).getCharacterFromTraits(stateFromStores2);
            const obj4 = tmp3(tmp40[40]);
            c1 = 2;
            c4 = 1;
            const obj6 = { value: tmp3(tmp40[36]).completeCheckpoint(characterFromTraits), done: false };
            return obj6;
          } else {
            transition(1);
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_10(false);
          throw tmp40;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            const obj7 = { skipThrottle: true, hapticType: tmp3(tmp40[29]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
            closure_128_11(1, obj7);
          } else {
            const intl = tmp3(tmp40[39]).intl;
            tmp3(tmp40[38]).presentError(intl.string(tmp3(tmp40[39]).t.fEptJP));
            const obj = tmp3(tmp40[38]);
          }
          c3 = 0;
          closure_128_10(false);
        }
        c3 = 0;
        closure_128_10(false);
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } catch (tmp40) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp40;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_21();
  const rect = require("useSafeAreaInsets")();
  ({ width, height } = require("useWindowDimensions")());
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp4 = require("useWindowDimensions")();
  checkpointFlow = checkpointFlow(stateFromStores[18]).getCheckpointFlow(flag);
  let obj = checkpointFlow(stateFromStores[18]);
  items = [stateFromStores2];
  importDefault = checkpointFlow(stateFromStores[19]).useStateFromStores(items, () => stateFromStores2.stats);
  let obj2 = checkpointFlow(stateFromStores[19]);
  const items1 = [stateFromStores2];
  stateFromStores = checkpointFlow(stateFromStores[19]).useStateFromStores(items1, () => stateFromStores2.isCharacterCreatorEnabled);
  [route, _slicedToArray] = require("useCheckpointRoute")(checkpointFlow);
  let obj3 = checkpointFlow(stateFromStores[19]);
  const checkpointStepAnalytics = checkpointFlow(stateFromStores[21]).useCheckpointStepAnalytics(route);
  noop = noop.useRef(0);
  let obj4 = checkpointFlow(stateFromStores[21]);
  const checkpointRoutePresentation = checkpointFlow(stateFromStores[22]).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp14 = route === checkpointFlow(tmp3[22]).CheckpointRoute.HOME;
  if (!tmp14) {
    tmp14 = null != statsScreen;
  }
  let obj6 = checkpointFlow(stateFromStores[22]);
  let result = checkpointFlow(stateFromStores[22]).isCheckpointCustomizationRoute(route);
  const tmp17 = route === checkpointFlow(stateFromStores[22]).CheckpointRoute.FINALIZE_CHARACTER;
  closure_6 = tmp17;
  const tmp18 = route === checkpointFlow(stateFromStores[22]).CheckpointRoute.SUMMARY;
  const tmp5Result = checkpointFlow(stateFromStores[22]);
  const items2 = [stateFromStores2];
  stateFromStores1 = checkpointFlow(stateFromStores[19]).useStateFromStores(items2, () => stateFromStores2.character);
  const tmp5Result6 = checkpointFlow(stateFromStores[19]);
  const characterCardColorPalette = checkpointFlow(stateFromStores[23]).getCharacterCardColorPalette(stateFromStores1);
  const tmp5Result7 = checkpointFlow(stateFromStores[23]);
  const cardColors = checkpointFlow(stateFromStores[23]).getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : c10;
  closure_8 = tmp2(tmp3[24])();
  require("useCheckpointMusic")();
  const tmp5Result8 = checkpointFlow(stateFromStores[23]);
  [tmp25, tmp26] = noop.useState(checkpointFlow(stateFromStores[26]).CheckpointCustomizationOption.BASE);
  if (!tmp17) {
    let BASE = tmp5(tmp3[26]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[26]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result9 = tmp5(tmp3[26]);
  }
  const tmp29 = checkpointFlow(stateFromStores[26]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp25];
  const tmp9Result = _slicedToArray(noop.useState(checkpointFlow(stateFromStores[26]).CheckpointCustomizationOption.BASE), 2);
  const items3 = [stateFromStores2];
  stateFromStores2 = checkpointFlow(stateFromStores[19]).useStateFromStores(items3, () => stateFromStores2.selectedCharacterTraits);
  const obj13 = require("useCheckpointBlockedTraits")();
  const hasItem = obj13.includes(tmp29);
  let tmp33 = result;
  const tmp5Result10 = checkpointFlow(stateFromStores[19]);
  if (result) {
    tmp33 = !tmp28;
  }
  const tmp2ResultResult = require("useMeasuredLayout")({ isMounted: tmp33 });
  const height2 = tmp2ResultResult.height;
  let sum = null;
  ({ ref, onLayout } = tmp2ResultResult);
  if (result) {
    sum = null;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
  }
  const tmp2Result = require("useMeasuredLayout");
  [tmp38, c10] = noop.useState(false);
  if (tmp17) {
    let first1 = obj13[0];
  } else if (hasItem) {
    first1 = tmp29;
  }
  let tmp40 = result;
  if (result) {
    tmp40 = null != first1 || null == stateFromStores2[tmp29];
    const tmp41 = null != first1 || null == stateFromStores2[tmp29];
  }
  function handleNextStep() {
    transition(1, { skipThrottle: true, hapticType: null });
  }
  function handlePreviousStep() {
    transition(-1, { skipThrottle: true, hapticType: null });
  }
  let obj7 = { theme: ThemeTypes.DARK, children: null };
  let obj8 = { style: tmp.container, children: null };
  if (stateFromStores) {
    let tmp42Result = route === tmp5(tmp3[22]).CheckpointRoute.INTRODUCTION;
    let obj9 = { stage: characterStage, layout: str, characterBottomInset: sum, isCovered: tmp14, isActive: null, style: null, children: null };
    let tmp47 = tmp14;
    if (!tmp14) {
      tmp47 = tmp42Result;
    }
    obj9.isActive = !tmp47;
    obj9.style = tmp.layer;
    if (tmp42Result) {
      let obj10 = { route: tmp5(tmp3[22]).CheckpointRoute.INTRODUCTION, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep };
      tmp42Result = closure_18(tmp2(tmp3[43]), obj10);
      const tmp2Result11 = tmp2(tmp3[43]);
    }
    obj9.children = tmp42Result;
    stateFromStores = closure_18(tmp2(tmp3[42]), obj9);
    const tmp2Result10 = tmp2(tmp3[42]);
  }
  const items4 = [stateFromStores, , , , , , ];
  const obj11 = { visible: tmp14, enter: transition, exit: transition, hiddenScale, style: tmp.layer, children: null };
  const tmp9Result2 = _slicedToArray(noop.useState(false), 2);
  let prop;
  const tmp2Result12 = require("CheckpointFadeLayer");
  if (tmp18) {
    prop = cardColors.backgroundGradientStartColor;
  }
  obj11.children = closure_18(require("CheckpointBackground"), { gradientStartColor: prop });
  items4[1] = closure_18(tmp2Result12, obj11);
  const obj12 = { visible: tmp14, enter, exit: exit2, hiddenScale, mountAfterDelay: true, style: tmp.layer, children: null };
  const tmp2Result13 = require("CheckpointBackground");
  obj12.children = closure_18(require("CheckpointOverlay"), { route, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep });
  items4[2] = closure_18(require("CheckpointFadeLayer"), obj12);
  const tmp2Result14 = require("CheckpointFadeLayer");
  if (tmp18) {
    let clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[47]);
  }
  const obj14 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: null, color: null };
  if (tmp18) {
    let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[48]);
  }
  obj14.logoStaticUri = clydeLogoStaticImage;
  obj14.color = tmp22;
  items4[3] = closure_18(require("CheckpointHeader"), obj14);
  let tmp42Result3 = result;
  if (result) {
    tmp42Result3 = tmp28;
  }
  if (tmp42Result3) {
    tmp42Result3 = !tmp17;
  }
  if (tmp42Result3) {
    tmp42Result3 = width / height >= 1.3333333333333333;
  }
  if (tmp42Result3) {
    const obj15 = { style: null, children: null };
    const items5 = [tmp.landscapeStat, ];
    ({ top: obj22.marginTop, left: obj22.marginLeft } = rect);
    items5[1] = { marginTop: null, marginLeft: null };
    obj15.style = items5;
    const obj17 = { customizationOption: tmp25 };
    obj15.children = closure_18(tmp2(tmp3[49]), obj17);
    tmp42Result3 = closure_18(tmp44, obj15);
    const obj16 = { marginTop: null, marginLeft: null };
  }
  items4[4] = tmp42Result3;
  const obj18 = { visible: result, enter: handleForward, exit, style: null, children: null };
  const items6 = [tmp.customizationSection, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }, ];
  let tmp57 = tmp28;
  const tmp2Result15 = require("CheckpointHeader");
  if ("MobileLandscape" === str) {
    const items7 = [tmp.landscapeCustomizationSection, ];
    const obj19 = { marginTop: rect.top };
    items7[1] = obj19;
    tmp57 = items7;
  }
  items6[2] = tmp57;
  obj18.style = items6;
  const obj20 = { style: tmp.customizationContent, ref, onLayout, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str2 = "auto";
  let str3 = "auto";
  if (tmp38) {
    str3 = "none";
  }
  obj20.pointerEvents = str3;
  obj20.accessibilityElementsHidden = tmp38;
  if (tmp38) {
    str2 = "no-hide-descendants";
  }
  obj20.importantForAccessibility = str2;
  const obj21 = { activeCustomizationOption: tmp25, isFinalizeRoute: tmp17, isCurrentTraitBlocked: hasItem, isSaving: tmp38, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp26, onSelectTraitOption: null };
  const tmp2Result16 = require("CheckpointFadeLayer");
  obj21.onSelectTraitOption = checkpointFlow(stateFromStores[36]).selectCharacterTrait;
  obj20.children = closure_18(require("CustomizationControls"), obj21);
  obj18.children = closure_18(stateFromStores1, obj20);
  items4[5] = closure_18(tmp2Result16, obj18);
  const obj23 = {
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
    onReplay: function handleReplay() {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      const checkpointReplayRoute = CheckpointFlows.getCheckpointReplayRoute({ flow: checkpointFlow, stats });
      const obj3 = { flow: checkpointFlow, stats };
      const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds({ previousRoute: route, route: checkpointReplayRoute });
      if (null != checkpointRouteSounds) {
        closure_8(checkpointRouteSounds);
      }
      closure_4(checkpointReplayRoute);
      const obj5 = { previousRoute: route, route: checkpointReplayRoute };
    },
    onShare: function handleShare() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14170, dependencyMap.paths), "CheckpointShare", { character: stateFromStores1, stats, onForward: handleForward });
    },
    color: tmp22,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null
  };
  let shadowColor;
  const tmp2Result17 = require("CustomizationControls");
  if (tmp18) {
    shadowColor = cardColors.shadowColor;
  }
  obj23.shadowColor = shadowColor;
  obj23.backDisabled = tmp38;
  obj23.nextDisabled = tmp40;
  obj23.nextLoading = tmp38;
  obj23.nextBlockedTrait = first1;
  items4[6] = closure_18(require("CheckpointNavigationControls"), obj23);
  obj8.children = items4;
  obj7.children = closure_19(stateFromStores1, obj8);
  const tmp2Result18 = require("CheckpointNavigationControls");
  return closure_18(checkpointFlow(stateFromStores[52]).CheckpointStepFocusProvider, { route, children: closure_18(checkpointFlow(stateFromStores[41]).ThemeContextProvider, obj7) });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointConstants = fn(6314);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: closure_10, CHECKPOINT_LOGO_SIZE } = CheckpointConstants);
const CheckpointTransitionConstants = fn(14169);
({ CHECKPOINT_BACKGROUND_FADE: closure_11, CHECKPOINT_CHARACTER_PAGE_FADE_IN: closure_12, CHECKPOINT_CHARACTER_PAGE_FADE_OUT: map1, CHECKPOINT_STATS_FADE_IN: closure_14, CHECKPOINT_STATS_FADE_OUT: closure_15, CHECKPOINT_STATS_HIDDEN_SCALE: closure_16 } = CheckpointTransitionConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5243);
let obj2 = { loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK }, container: null, layer: null, customizationSection: null, landscapeCustomizationSection: null, landscapeStat: null, customizationContent: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.container = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
let rect = { top: (CHECKPOINT_NAV_HEIGHT + fn(14167).CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
obj2.landscapeCustomizationSection = rect;
const rect1 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect1.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect1;
let obj4 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.customizationContent = { gap: nativeDefault.space.PX_12 };
let closure_21 = createStyles.createStyles(obj2);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper(arg0) {
  const tmp = useCheckpointPreloaderDefault();
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmp4Result = collapsedCategories(CheckpointModal, obj2);
  } else {
    const obj3 = { style: tmp3.loader, children: collapsedCategories(timestampProducer, {}) };
    tmp4Result = collapsedCategories(metroImportDefault, obj3);
  }
  return tmp4Result;
};