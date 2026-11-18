// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../../../flow/Server.tsx";
import asyncRequireImpl from "../../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import InteractionComponentTypes from "../../../interaction_components/InteractionComponentTypes.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../CheckpointMessageComponentUtils.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ForwardModalUtils from "../../../forwarding/native/ForwardModalUtils.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import useCheckpointStepAnalytics from "../../hooks/useCheckpointStepAnalytics.tsx";
import useCheckpointForegroundTrackingDefault from "../../hooks/useCheckpointForegroundTracking.native.tsx";
import CheckpointSounds from "../../CheckpointSounds.tsx";
import useCheckpointPreloaderDefault from "../useCheckpointPreloader.tsx";
import useCheckpointCompletionSurveyDefault from "../../hooks/useCheckpointCompletionSurvey.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
function CheckpointModal() {
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
    obj3.checkpointData = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(
      STATS_ONLY,
      stateFromStores2,
      stateFromStores,
    );
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
                const obj8 = {
                  value: closure_0(12424).sendCheckpointCard(closure_132_0, c3, closure_133_0),
                  done: false,
                };
                return obj8;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(5504).presentError(intl.string(closure_0(1113).t.fEptJP));
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
              const result = closure_0(12415).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj = closure_0(12415);
              closure_0(9954).closeForwardModal();
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
  const tmp = closure_22();
  const rect = route(1630)();
  ({ width, height } = route(1496)());
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp4 = route(1496)();
  items = [CheckpointStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.stats);
  let obj = stateFromStores(504);
  const checkpointFlow = stateFromStores(12419).getCheckpointFlow(stateFromStores);
  let obj2 = stateFromStores(12419);
  const items1 = [CheckpointStore];
  let stateFromStores1 = stateFromStores(504).useStateFromStores(
    items1,
    () => CheckpointStore.isCharacterCreatorEnabled,
  );
  [route, dependencyMap] = route(12453)(checkpointFlow);
  const tmp13 = route(12454)(route);
  let obj3 = stateFromStores(504);
  const checkpointStepAnalytics = stateFromStores(12428).useCheckpointStepAnalytics(route);
  let obj4 = stateFromStores(12428);
  const checkpointRoutePresentation = stateFromStores(6246).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp16 = route === stateFromStores(6246).CheckpointRoute.HOME;
  if (!tmp16) {
    tmp16 = null != statsScreen;
  }
  if (tmp16) {
    let STATS = constants.STATS;
  } else {
    STATS = null;
    if (tmp13) {
      STATS = constants.CUSTOMIZATION_ROUTE_CHANGE;
    }
  }
  let obj5 = stateFromStores(6246);
  let result = stateFromStores(6246).isCheckpointCustomizationRoute(route);
  const tmp22 = route === stateFromStores(6246).CheckpointRoute.SUMMARY;
  const tmp5Result = stateFromStores(6246);
  const items2 = [CheckpointStore];
  const stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => CheckpointStore.character);
  const tmp5Result7 = stateFromStores(504);
  const characterCardColorPalette = stateFromStores(5901).getCharacterCardColorPalette(stateFromStores2);
  const tmp5Result8 = stateFromStores(5901);
  const cardColors = stateFromStores(5901).getCardColors(characterCardColorPalette);
  const tmp27 = route === stateFromStores(6246).CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp2(12455)();
  route(12426)();
  const tmp26 = tmp22 ? cardColors.primaryBackgroundColor : closure_10;
  const tmp5Result9 = stateFromStores(5901);
  [tmp30, tmp31] = noop.useState(stateFromStores(6244).CheckpointCustomizationOption.BASE);
  if (!tmp27) {
    let BASE = tmp5(6244).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6244).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result10 = tmp5(6244);
  }
  const tmp10Result = _slicedToArray(noop.useState(stateFromStores(6244).CheckpointCustomizationOption.BASE), 2);
  const hasItem = route(12463)().includes(tmp5(6244).CUSTOMIZATION_OPTION_TO_TRAIT[tmp30]);
  let tmp36 = result;
  const obj12 = route(12463)();
  if (result) {
    tmp36 = !tmp33;
  }
  let tmp51Result = route === tmp5(6246).CheckpointRoute.INTRODUCTION;
  const tmp2ResultResult = route(7508)({ isMounted: tmp36 });
  const height2 = tmp2ResultResult.height;
  ({ ref, onLayout } = tmp2ResultResult);
  const tmp2Result = route(7508);
  if (result) {
    if (null != height2) {
      let sum = rect.bottom + sum1 + height2;
    }
    const items3 = [CheckpointStore];
    const stateFromStores3 = tmp5(504).useStateFromStores(items3, () => CheckpointStore.isSaving);
    noop = obj10.useRef(0);
    let obj6 = {
      flow: checkpointFlow,
      stats: stateFromStores,
      character: stateFromStores2,
      isCharacterCreatorEnabled: stateFromStores1,
    };
    const tmp5Result11 = tmp5(504);
    let obj7 = {};
    let merged = Object.assign(obj6);
    obj7.currentRoute = route;
    obj7.direction = 1;
    const tmp5Result12 = tmp5(12419);
    const tmp47 = null == tmp5(12419).getAdjacentCheckpointRoute(obj7);
    const tmp2Result10 = tmp2(12464);
    let obj8 = {
      onExitPlaying: tmp2(12464)(tmp2(12465)),
      onExitFinished() {
        transition(1, { skipThrottle: true, hapticType: null });
      },
    };
    const tmp50 = tmp2(12466)(obj8);
    ({ isCharacterExiting, startExit: CheckpointStore } = tmp50);
    let obj9 = { theme: ThemeTypes.DARK, children: null };
    const obj11 = { style: tmp.container, children: null };
    if (stateFromStores1) {
      let EXIT = characterStage;
      if (isCharacterExiting) {
        EXIT = tmp5(6246).CheckpointCharacterStage.EXIT;
      }
      const obj13 = {
        stage: EXIT,
        layout: str,
        characterBottomInset: sum,
        hiddenBy: STATS,
        isActive: null,
        onExitPlaying: null,
        style: null,
        children: null,
      };
      let tmp56 = tmp16;
      if (!tmp16) {
        tmp56 = tmp51Result;
      }
      obj13.isActive = !tmp56;
      obj13.onExitPlaying = tmp50.handleExitPlaying;
      obj13.style = tmp.layer;
      if (tmp51Result) {
        const obj14 = { layout: str, onCharacterBottomInsetChange: tmp40 };
        tmp51Result = closure_19(tmp2(12646), obj14);
      }
      obj13.children = tmp51Result;
      stateFromStores1 = closure_19(tmp2(12467), obj13);
      const tmp2Result11 = tmp2(12467);
    }
    const items4 = [stateFromStores1, , , , , ,];
    const obj15 = { visible: tmp16, enter: exit, exit, hiddenScale, style: tmp.layer, children: null };
    const tmp2Result1Result = tmp2(12464)(tmp2(12465));
    let prop;
    const tmp2Result12 = tmp2(12468);
    if (tmp22) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj16 = { gradientStartColor: prop };
    obj15.children = closure_19(tmp2(12431), obj16);
    items4[1] = closure_19(tmp2Result12, obj15);
    const obj17 = {
      visible: tmp16,
      enter: enter2,
      exit: exit2,
      hiddenScale,
      mountAfterDelay: true,
      style: tmp.layer,
      children: null,
    };
    const tmp2Result13 = tmp2(12431);
    const obj18 = {
      route,
      onNextStep: function handleNextStep() {
        transition(1, { skipThrottle: true, hapticType: null });
      },
      onPreviousStep: function handlePreviousStep() {
        transition(-1, { skipThrottle: true, hapticType: null });
      },
    };
    obj17.children = closure_19(tmp2(12652), obj18);
    items4[2] = closure_19(tmp2(12468), obj17);
    const tmp2Result14 = tmp2(12468);
    if (tmp22) {
      let clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp2(5906);
    }
    const obj19 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: null, color: null };
    if (tmp22) {
      let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp2(5907);
    }
    obj19.logoStaticUri = clydeLogoStaticImage;
    obj19.color = tmp26;
    items4[3] = closure_19(tmp2(12436), obj19);
    let tmp51Result3 = tmp33;
    if (tmp33) {
      tmp51Result3 = width / height >= 1.3333333333333333;
    }
    if (tmp51Result3) {
      let tmp68 = result;
      if (result) {
        tmp68 = !tmp27;
      }
      if (tmp68) {
        tmp68 = !tmp13;
      }
      const obj20 = { visible: tmp68, enter, exit, style: null, children: null };
      const items5 = [tmp.landscapeStat];
      ({ top: obj28.marginTop, left: obj28.marginLeft } = rect);
      items5[1] = { marginTop: null, marginLeft: null };
      obj20.style = items5;
      const obj22 = { customizationOption: tmp30 };
      obj20.children = closure_19(tmp2(12708), obj22);
      tmp51Result3 = closure_19(tmp2(12468), obj20);
      const obj21 = { marginTop: null, marginLeft: null };
      const tmp2Result16 = tmp2(12468);
    }
    items4[4] = tmp51Result3;
    const tmp2Result15 = tmp2(12436);
    if (result) {
      result = !tmp13;
    }
    if (result) {
      result = !isCharacterExiting;
    }
    const obj23 = { visible: result, enter, exit, style: null, children: null };
    const items6 = [tmp.customizationSection, ,];
    ({ left: obj31.marginLeft, right: obj31.marginRight, bottom: obj31.marginBottom } = rect);
    items6[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp74 = tmp33;
    if (tmp33) {
      const items7 = [tmp.landscapeCustomizationSection];
      const obj25 = { marginTop: rect.top };
      items7[1] = obj25;
      tmp74 = items7;
    }
    items6[2] = tmp74;
    obj23.style = items6;
    const items8 = [tmp.customizationContent];
    let landscapeCustomizationContent = tmp33;
    if (tmp33) {
      landscapeCustomizationContent = tmp.landscapeCustomizationContent;
    }
    const obj26 = {
      style: null,
      ref: null,
      onLayout: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    items8[1] = landscapeCustomizationContent;
    obj26.style = items8;
    obj26.ref = ref;
    obj26.onLayout = onLayout;
    let str2 = "auto";
    let str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    obj26.pointerEvents = str3;
    obj26.accessibilityElementsHidden = stateFromStores3;
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj26.importantForAccessibility = str2;
    const obj27 = {
      activeCustomizationOption: tmp30,
      isFinalizeRoute: tmp27,
      isCurrentTraitBlocked: hasItem,
      isSaving: stateFromStores3,
      isLandscape: tmp33,
      onSelectFinalizeOption: tmp31,
      onSelectTraitOption: null,
    };
    const obj24 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result17 = tmp2(12468);
    obj27.onSelectTraitOption = tmp5(12424).selectCharacterTrait;
    obj26.children = closure_19(tmp2(12709), obj27);
    obj23.children = closure_19(transition, obj26);
    items4[5] = closure_19(tmp2Result17, obj23);
    const obj29 = {
      activeRoute: route,
      isCharacterExiting,
      onBack: function handleBack() {
        transition(-1);
      },
      onNext: function handleNext() {
        transition(1);
      },
      onSave: function handleSaved() {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_SUCCESS);
        CheckpointStore();
      },
      onReplay: function handleReplay() {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const checkpointReplayRoute = CheckpointFlows.getCheckpointReplayRoute(obj6);
        const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds({
          previousRoute,
          route: checkpointReplayRoute,
        });
        if (null != checkpointRouteSounds) {
          closure_4(checkpointRouteSounds);
        }
        closure_2(checkpointReplayRoute);
        const obj4 = { previousRoute, route: checkpointReplayRoute };
      },
      onShare: function handleShare() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12441, dependencyMap.paths), "CheckpointShare", {
          character: stateFromStores2,
          stats: stateFromStores,
          onForward: handleForward,
        });
      },
      isLastRoute: tmp47,
    };
    items4[6] = closure_19(tmp2(12655), obj29);
    obj11.children = items4;
    obj9.children = closure_20(transition, obj11);
    const tmp2Result18 = tmp2(12709);
    const obj30 = { route, children: closure_19(tmp5(4884).ThemeContextProvider, obj9) };
    return closure_19(tmp5(12430).CheckpointStepFocusProvider, obj30);
  }
  sum = null;
  if (tmp51Result) {
    sum = tmp10Result2[0];
  }
  tmp10Result2 = _slicedToArray(noop.useState(null), 2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointConstants = fn(5877);
({
  CHECKPOINT_CONTROL_SIZE,
  CHECKPOINT_NAV_HEIGHT,
  CHECKPOINT_PRIMARY: closure_10,
  CHECKPOINT_LOGO_SIZE,
} = CheckpointConstants);
const CheckpointTransitionConstants = fn(12440);
({
  CHECKPOINT_BACKGROUND_FADE: closure_11,
  CHECKPOINT_CHARACTER_PAGE_FADE_IN: closure_12,
  CHECKPOINT_CHARACTER_PAGE_FADE_OUT: map1,
  CHECKPOINT_STATS_FADE_IN: closure_14,
  CHECKPOINT_STATS_FADE_OUT: closure_15,
  CHECKPOINT_STATS_HIDDEN_SCALE: closure_16,
  CheckpointCharacterStageHiddenBy: closure_17,
} = CheckpointTransitionConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(4823);
let obj2 = {
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK },
  container: null,
  layer: null,
  customizationSection: null,
  landscapeCustomizationSection: null,
  landscapeStat: null,
  customizationContent: null,
  landscapeCustomizationContent: null,
};
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.container = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
let rect = {
  top: (CHECKPOINT_NAV_HEIGHT + fn(12438).CHECKPOINT_HEADER_BUTTON_SIZE) / 2,
  bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16,
  left: "59%",
  marginLeft: 0,
};
obj2.landscapeCustomizationSection = rect;
const rect1 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect1.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect1;
let obj4 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.customizationContent = { gap: nativeDefault.space.PX_12 };
obj2.landscapeCustomizationContent = { flex: 1 };
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper() {
  const tmp = useCheckpointPreloaderDefault();
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  useCheckpointCompletionSurveyDefault();
  useCheckpointForegroundTrackingDefault();
  if (tmp) {
    let tmp6Result = closure_1_19(CheckpointModal, {});
  } else {
    const obj2 = { style: tmp5.loader, children: closure_1_19(timestampProducer, {}) };
    tmp6Result = closure_1_19(metroImportDefault, obj2);
  }
  return tmp6Result;
}
