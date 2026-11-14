// === Module 14275: CheckpointModal ===

// Module 14275 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 2119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6384 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6398 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import ForwardModalUtils from "ForwardModalUtils" /* 10239 */;
import CheckpointFlows from "CheckpointFlows" /* 14255 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14264 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 14265 */;
import CheckpointSounds from "CheckpointSounds" /* 14292 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 14547 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 5249 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  route = undefined;
  dependencyMap = undefined;
  let stateFromStores2;
  _slicedToArray = undefined;
  noop = undefined;
  let obj6;
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
      const obj3 = {};
      const merged = Object.assign(obj6);
      obj3.currentRoute = currentRoute;
      obj3.direction = direction;
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(obj3);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const result = HapticUtils.triggerHapticFeedback(IMPACT_LIGHT);
        }
        obj6 = { previousRoute: currentRoute, route: adjacentCheckpointRoute };
        const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds(obj6);
        if (null != checkpointRouteSounds) {
          closure_4(checkpointRouteSounds);
        }
        closure_2(adjacentCheckpointRoute);
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
    obj3.checkpointData = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores2, stateFromStores);
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
                return { value: "Path", done: true };
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
                const obj8 = { value: closure_0(14260).sendCheckpointCard(closure_132_0, c3, closure_133_0), done: false };
                return obj8;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(6014).presentError(intl.string(closure_0(1113).t.fEptJP));
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
              const result = closure_0(14251).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj = closure_0(14251);
              closure_0(10239).closeForwardModal();
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
    obj7.customSendHandler = function customSendHandler() {
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
  const tmp = closure_21();
  const rect = route(1630)();
  ({ width, height } = route(1496)());
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp4 = route(1496)();
  const checkpointFlow = stateFromStores(14255).getCheckpointFlow(flag);
  let obj = stateFromStores(14255);
  items = [CheckpointStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.stats);
  let obj2 = stateFromStores(504);
  const items1 = [CheckpointStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => CheckpointStore.isCharacterCreatorEnabled);
  [route, dependencyMap] = route(14290)(checkpointFlow);
  let obj3 = stateFromStores(504);
  const checkpointStepAnalytics = stateFromStores(14264).useCheckpointStepAnalytics(route);
  let obj4 = stateFromStores(14264);
  const checkpointRoutePresentation = stateFromStores(6745).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp15 = route === stateFromStores(6745).CheckpointRoute.HOME;
  if (!tmp15) {
    tmp15 = null != statsScreen;
  }
  let obj5 = stateFromStores(6745);
  let result = stateFromStores(6745).isCheckpointCustomizationRoute(route);
  const tmp18 = route === stateFromStores(6745).CheckpointRoute.SUMMARY;
  const tmp5Result = stateFromStores(6745);
  const items2 = [CheckpointStore];
  stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => CheckpointStore.character);
  const tmp5Result7 = stateFromStores(504);
  const characterCardColorPalette = stateFromStores(6401).getCharacterCardColorPalette(stateFromStores2);
  const tmp5Result8 = stateFromStores(6401);
  const cardColors = stateFromStores(6401).getCardColors(characterCardColorPalette);
  const tmp23 = route === stateFromStores(6745).CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp2(14291)();
  route(14262)();
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : closure_10;
  const tmp5Result9 = stateFromStores(6401);
  [tmp26, tmp27] = noop.useState(stateFromStores(6744).CheckpointCustomizationOption.BASE);
  if (!tmp23) {
    let BASE = tmp5(6744).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6744).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result10 = tmp5(6744);
  }
  const tmp10Result = _slicedToArray(noop.useState(stateFromStores(6744).CheckpointCustomizationOption.BASE), 2);
  const hasItem = route(14298)().includes(tmp5(6744).CUSTOMIZATION_OPTION_TO_TRAIT[tmp26]);
  let tmp32 = result;
  const obj12 = route(14298)();
  if (result) {
    tmp32 = !tmp29;
  }
  let tmp44Result = route === tmp5(6745).CheckpointRoute.INTRODUCTION;
  const tmp2ResultResult = route(7994)({ isMounted: tmp32 });
  const height2 = tmp2ResultResult.height;
  ({ ref, onLayout } = tmp2ResultResult);
  const tmp2Result = route(7994);
  if (result) {
    if (null != height2) {
      let sum = rect.bottom + sum1 + height2;
    }
    const items3 = [CheckpointStore];
    const stateFromStores3 = tmp5(504).useStateFromStores(items3, () => CheckpointStore.isSaving);
    noop = obj10.useRef(0);
    obj6 = { flow: checkpointFlow, stats: stateFromStores, character: stateFromStores2, isCharacterCreatorEnabled: stateFromStores1 };
    const tmp5Result11 = tmp5(504);
    let obj7 = {};
    let merged = Object.assign(obj6);
    obj7.currentRoute = route;
    obj7.direction = 1;
    const tmp5Result12 = tmp5(14255);
    let obj8 = { theme: ThemeTypes.DARK, children: null };
    let obj9 = { style: tmp.container, children: null };
    let tmp44Result4 = stateFromStores1;
    if (stateFromStores1) {
      const obj11 = { stage: characterStage, layout: str, characterBottomInset: sum, isCovered: tmp15, isActive: null, style: null, children: null };
      let tmp50 = tmp15;
      if (!tmp15) {
        tmp50 = tmp44Result;
      }
      obj11.isActive = !tmp50;
      obj11.style = tmp.layer;
      if (tmp44Result) {
        const obj13 = { layout: str, onCharacterBottomInsetChange: tmp36 };
        tmp44Result = closure_18(tmp2(14477), obj13);
      }
      obj11.children = tmp44Result;
      tmp44Result4 = closure_18(tmp2(14299), obj11);
      const tmp2Result8 = tmp2(14299);
    }
    const items4 = [tmp44Result4, , , , , , ];
    const obj14 = { visible: tmp15, enter: exit, exit, hiddenScale, style: tmp.layer, children: null };
    const tmp43 = null == tmp5(14255).getAdjacentCheckpointRoute(obj7);
    let prop;
    const tmp2Result9 = tmp2(14300);
    if (tmp18) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj15 = { gradientStartColor: prop };
    obj14.children = closure_18(tmp2(14267), obj15);
    items4[1] = closure_18(tmp2Result9, obj14);
    const obj16 = { visible: tmp15, enter: enter2, exit: exit2, hiddenScale, mountAfterDelay: true, style: tmp.layer, children: null };
    const tmp2Result10 = tmp2(14267);
    const obj17 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    obj16.children = closure_18(tmp2(14483), obj17);
    items4[2] = closure_18(tmp2(14300), obj16);
    const tmp2Result11 = tmp2(14300);
    if (tmp18) {
      let clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp2(6406);
    }
    const obj18 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: null, color: null };
    if (tmp18) {
      let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp2(6407);
    }
    obj18.logoStaticUri = clydeLogoStaticImage;
    obj18.color = tmp22;
    items4[3] = closure_18(tmp2(14272), obj18);
    let tmp44Result5 = result;
    if (result) {
      tmp44Result5 = tmp29;
    }
    if (tmp44Result5) {
      tmp44Result5 = !tmp23;
    }
    if (tmp44Result5) {
      tmp44Result5 = width / height >= 1.3333333333333333;
    }
    if (tmp44Result5) {
      const obj19 = { style: null, children: null };
      const items5 = [tmp.landscapeStat, ];
      ({ top: obj27.marginTop, left: obj27.marginLeft } = rect);
      items5[1] = { marginTop: null, marginLeft: null };
      obj19.style = items5;
      const obj21 = { customizationOption: tmp26 };
      obj19.children = closure_18(tmp2(14533), obj21);
      tmp44Result5 = closure_18(tmp47, obj19);
      const obj20 = { marginTop: null, marginLeft: null };
    }
    items4[4] = tmp44Result5;
    const obj22 = { visible: result, enter, exit, style: null, children: null };
    const items6 = [tmp.customizationSection, , ];
    ({ left: obj30.marginLeft, right: obj30.marginRight, bottom: obj30.marginBottom } = rect);
    items6[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp64 = tmp29;
    const obj23 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result12 = tmp2(14272);
    if (tmp29) {
      const items7 = [tmp.landscapeCustomizationSection, ];
      const obj24 = { marginTop: rect.top };
      items7[1] = obj24;
      tmp64 = items7;
    }
    items6[2] = tmp64;
    obj22.style = items6;
    const items8 = [tmp.customizationContent, ];
    let landscapeCustomizationContent = tmp29;
    if (tmp29) {
      landscapeCustomizationContent = tmp.landscapeCustomizationContent;
    }
    const obj25 = { style: null, ref: null, onLayout: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items8[1] = landscapeCustomizationContent;
    obj25.style = items8;
    obj25.ref = ref;
    obj25.onLayout = onLayout;
    let str2 = "auto";
    let str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    obj25.pointerEvents = str3;
    obj25.accessibilityElementsHidden = stateFromStores3;
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj25.importantForAccessibility = str2;
    const obj26 = { activeCustomizationOption: tmp26, isFinalizeRoute: tmp23, isCurrentTraitBlocked: hasItem, isSaving: stateFromStores3, isLandscape: tmp29, onSelectFinalizeOption: tmp27, onSelectTraitOption: null };
    const tmp2Result13 = tmp2(14300);
    obj26.onSelectTraitOption = tmp5(14260).selectCharacterTrait;
    obj25.children = closure_18(tmp2(14534), obj26);
    obj22.children = closure_18(transition, obj25);
    items4[5] = closure_18(tmp2Result13, obj22);
    const obj28 = {
      activeRoute: route,
      onBack: function handleBack() {
          transition(-1);
        },
      onNext: function handleNext() {
          transition(1);
        },
      onSave: function handleSaved() {
          transition(1, { skipThrottle: true, hapticType: HapticUtils.HapticFeedbackTypes.NOTIFICATION_SUCCESS });
        },
      onReplay: function handleReplay() {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const checkpointReplayRoute = CheckpointFlows.getCheckpointReplayRoute(obj6);
          const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds({ previousRoute, route: checkpointReplayRoute });
          if (null != checkpointRouteSounds) {
            closure_4(checkpointRouteSounds);
          }
          closure_2(checkpointReplayRoute);
          const obj4 = { previousRoute, route: checkpointReplayRoute };
        },
      onShare: function handleShare() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14277, dependencyMap.paths), "CheckpointShare", { character: stateFromStores2, stats: stateFromStores, onForward: handleForward });
        },
      isLastRoute: tmp43
    };
    items4[6] = closure_18(tmp2(14486), obj28);
    obj9.children = items4;
    obj8.children = closure_19(transition, obj9);
    const tmp2Result14 = tmp2(14534);
    const obj29 = { route, children: closure_18(tmp5(5377).ThemeContextProvider, obj8) };
    return closure_18(tmp5(14266).CheckpointStepFocusProvider, obj29);
  }
  sum = null;
  if (tmp44Result) {
    sum = tmp10Result2[0];
  }
  tmp10Result2 = _slicedToArray(noop.useState(null), 2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointConstants = fn(6377);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: closure_10, CHECKPOINT_LOGO_SIZE } = CheckpointConstants);
const CheckpointTransitionConstants = fn(14276);
({ CHECKPOINT_BACKGROUND_FADE: closure_11, CHECKPOINT_CHARACTER_PAGE_FADE_IN: closure_12, CHECKPOINT_CHARACTER_PAGE_FADE_OUT: map1, CHECKPOINT_STATS_FADE_IN: closure_14, CHECKPOINT_STATS_FADE_OUT: closure_15, CHECKPOINT_STATS_HIDDEN_SCALE: closure_16 } = CheckpointTransitionConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5306);
let obj2 = { loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK }, container: null, layer: null, customizationSection: null, landscapeCustomizationSection: null, landscapeStat: null, customizationContent: null, landscapeCustomizationContent: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.container = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
let rect = { top: (CHECKPOINT_NAV_HEIGHT + fn(14274).CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
obj2.landscapeCustomizationSection = rect;
const rect1 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect1.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect1;
let obj4 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.customizationContent = { gap: nativeDefault.space.PX_12 };
obj2.landscapeCustomizationContent = { flex: 1 };
let closure_21 = createStyles.createStyles(obj2);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper(arg0) {
  const tmp = useCheckpointPreloaderDefault();
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmp5Result = collapsedCategories(CheckpointModal, obj2);
  } else {
    const obj3 = { style: tmp4.loader, children: collapsedCategories(timestampProducer, {}) };
    tmp5Result = collapsedCategories(metroImportDefault, obj3);
  }
  return tmp5Result;
};