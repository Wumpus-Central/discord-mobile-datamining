// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../../../flow/Server.tsx";
import asyncRequireImpl from "../../../../../_runtime/02120_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import InteractionComponentTypes from "../../../interaction_components/InteractionComponentTypes.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../CheckpointMessageComponentUtils.tsx";
import ForwardModalUtils from "../../../forwarding/native/ForwardModalUtils.tsx";
import CheckpointAvailability from "../../../../../discord_common/js/shared/shared-constants/CheckpointAvailability.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
import CheckpointSounds from "../../CheckpointSounds.tsx";
import CheckpointErrorModalDefault from "CheckpointErrorModal.tsx";
import CheckpointUnavailableModalDefault from "CheckpointUnavailableModal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
function CheckpointAvailableModal(source) {
  let stateFromStores;
  route = undefined;
  dependencyMap = undefined;
  let stateFromStores2;
  _slicedToArray = undefined;
  noop = undefined;
  let obj3;
  c9 = undefined;
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
      obj3 = {};
      const merged = Object.assign(obj3);
      obj3.currentRoute = currentRoute;
      obj3.direction = direction;
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(obj3);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const result = HapticUtils.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const obj6 = { previousRoute: currentRoute, route: adjacentCheckpointRoute };
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
    obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: null, checkpointData: null };
    obj3.id = InteractionComponentTypes.asComponentId(0);
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
            obj3 = { value, done: true };
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
                  value: closure_0(12636).sendCheckpointCard(closure_132_0, c3, closure_133_0),
                  done: false,
                };
                return obj8;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1112).intl;
              closure_0(5724).presentError(intl.string(closure_0(1112).t.fEptJP));
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
              const result = closure_0(12626).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj = closure_0(12626);
              closure_0(8940).closeForwardModal();
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
  route(12655)(source.source);
  const fetchCheckpointGames = stateFromStores(12656).useFetchCheckpointGames();
  let obj = stateFromStores(12656);
  const checkpointCloseAnalytics = stateFromStores(12657).useCheckpointCloseAnalytics();
  route(12658)();
  route(12659)();
  const tmp9 = closure_23();
  const rect = route(1629)();
  let obj2 = stateFromStores(12657);
  ({ width, height } = route(1495)());
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp10 = route(1495)();
  items = [c9];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => _undefined.stats);
  const tmp4Result = stateFromStores(504);
  const checkpointFlow = stateFromStores(12630).getCheckpointFlow(stateFromStores);
  const tmp4Result12 = stateFromStores(12630);
  const items1 = [c9];
  let stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => _undefined.isCharacterCreatorEnabled);
  [route, dependencyMap] = route(12660)(checkpointFlow);
  const tmp18 = route(12661)(route);
  const tmp4Result13 = stateFromStores(504);
  const checkpointStepAnalytics = stateFromStores(12657).useCheckpointStepAnalytics(route);
  const tmp4Result14 = stateFromStores(12657);
  const checkpointRoutePresentation = stateFromStores(6767).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp21 = route === tmp4(6767).CheckpointRoute.HOME;
  if (!tmp21) {
    tmp21 = null != statsScreen;
  }
  if (tmp21) {
    let STATS = constants.STATS;
  } else {
    STATS = null;
    if (tmp18) {
      STATS = constants.CUSTOMIZATION_ROUTE_CHANGE;
    }
  }
  const tmp4Result15 = stateFromStores(6767);
  let result = stateFromStores(6767).isCheckpointCustomizationRoute(route);
  const tmp27 = route === stateFromStores(6767).CheckpointRoute.SUMMARY;
  const tmp4Result16 = stateFromStores(6767);
  const items2 = [c9];
  stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => _undefined.character);
  const tmp4Result17 = stateFromStores(504);
  const characterCardColorPalette = stateFromStores(6422).getCharacterCardColorPalette(stateFromStores2);
  const tmp4Result18 = stateFromStores(6422);
  const cardColors = stateFromStores(6422).getCardColors(characterCardColorPalette);
  const tmp32 = route === stateFromStores(6767).CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp(12662)();
  route(12670)();
  const tmp31 = tmp27 ? cardColors.primaryBackgroundColor : closure_11;
  const tmp4Result19 = stateFromStores(6422);
  [tmp35, tmp36] = noop.useState(stateFromStores(6765).CheckpointCustomizationOption.BASE);
  if (!tmp32) {
    let BASE = tmp4(6765).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp4(6765).CheckpointCustomizationOption.BASE;
    }
    const tmp4Result20 = tmp4(6765);
  }
  const tmp15Result = _slicedToArray(noop.useState(stateFromStores(6765).CheckpointCustomizationOption.BASE), 2);
  const hasItem = route(12672)().includes(tmp4(6765).CUSTOMIZATION_OPTION_TO_TRAIT[tmp35]);
  let tmp41 = result;
  const obj14 = route(12672)();
  if (result) {
    tmp41 = !tmp38;
  }
  let tmp56Result = route === tmp4(6767).CheckpointRoute.INTRODUCTION;
  const tmpResultResult = route(8487)({ isMounted: tmp41 });
  const height2 = tmpResultResult.height;
  ({ ref, onLayout } = tmpResultResult);
  const tmpResult = route(8487);
  if (result) {
    if (null != height2) {
      let sum = rect.bottom + sum1 + height2;
    }
    const items3 = [tmp11];
    const stateFromStores3 = tmp4(504).useStateFromStores(items3, () => _undefined.isSaving);
    noop = obj12.useRef(0);
    obj3 = {
      flow: checkpointFlow,
      stats: stateFromStores,
      character: stateFromStores2,
      isCharacterCreatorEnabled: stateFromStores1,
    };
    const tmp4Result21 = tmp4(504);
    let obj4 = {};
    let merged = Object.assign(obj3);
    obj4.currentRoute = route;
    obj4.direction = 1;
    const tmp4Result22 = tmp4(12630);
    const tmp52 = null == tmp4(12630).getAdjacentCheckpointRoute(obj4);
    const tmpResult10 = tmp(12673);
    let obj5 = {
      onExitPlaying: tmp(12673)(tmp(12674)),
      onExitFinished() {
        transition(1, { skipThrottle: true, hapticType: null });
      },
    };
    const tmp55 = tmp(12675)(obj5);
    ({ isCharacterExiting, startExit: c9 } = tmp55);
    let obj6 = { theme: ThemeTypes.DARK, children: null };
    let obj7 = { style: tmp9.container, children: null };
    if (stateFromStores1) {
      let EXIT = characterStage;
      if (isCharacterExiting) {
        EXIT = tmp4(6767).CheckpointCharacterStage.EXIT;
      }
      let obj8 = {
        stage: EXIT,
        layout: str,
        characterBottomInset: sum,
        hiddenBy: STATS,
        isActive: null,
        onExitPlaying: null,
        style: null,
        children: null,
      };
      let tmp61 = tmp21;
      if (!tmp21) {
        tmp61 = tmp56Result;
      }
      obj8.isActive = !tmp61;
      obj8.onExitPlaying = tmp55.handleExitPlaying;
      obj8.style = tmp9.layer;
      if (tmp56Result) {
        let obj9 = { layout: str, onCharacterBottomInsetChange: tmp45 };
        tmp56Result = closure_20(tmp(12856), obj9);
      }
      obj8.children = tmp56Result;
      stateFromStores1 = closure_20(tmp(12676), obj8);
      const tmpResult11 = tmp(12676);
    }
    const items4 = [stateFromStores1, , , , , ,];
    let obj10 = { visible: tmp21, enter: exit, exit, hiddenScale, style: tmp9.layer, children: null };
    const tmpResult1Result = tmp(12673)(tmp(12674));
    let prop;
    const tmpResult12 = tmp(12677);
    if (tmp27) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj11 = { gradientStartColor: prop };
    obj10.children = closure_20(tmp(12865), obj11);
    items4[1] = closure_20(tmpResult12, obj10);
    const obj13 = {
      visible: tmp21,
      enter: enter2,
      exit: exit2,
      hiddenScale,
      mountAfterDelay: true,
      style: tmp9.layer,
      children: null,
    };
    const tmpResult13 = tmp(12865);
    const obj15 = {
      route,
      onNextStep: function handleNextStep() {
        transition(1, { skipThrottle: true, hapticType: null });
      },
      onPreviousStep: function handlePreviousStep() {
        transition(-1, { skipThrottle: true, hapticType: null });
      },
    };
    obj13.children = closure_20(tmp(12866), obj15);
    items4[2] = closure_20(tmp(12677), obj13);
    const tmpResult14 = tmp(12677);
    if (tmp27) {
      let clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp(6427);
    }
    const obj16 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: null, color: null };
    if (tmp27) {
      let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp(6428);
    }
    obj16.logoStaticUri = clydeLogoStaticImage;
    obj16.color = tmp31;
    items4[3] = closure_20(tmp(12922), obj16);
    let tmp56Result3 = tmp38;
    if (tmp38) {
      tmp56Result3 = width / height >= 1.3333333333333333;
    }
    if (tmp56Result3) {
      let tmp73 = result;
      if (result) {
        tmp73 = !tmp32;
      }
      if (tmp73) {
        tmp73 = !tmp18;
      }
      const obj17 = { visible: tmp73, enter, exit, style: null, children: null };
      const items5 = [tmp9.landscapeStat];
      ({ top: obj30.marginTop, left: obj30.marginLeft } = rect);
      items5[1] = { marginTop: null, marginLeft: null };
      obj17.style = items5;
      const obj19 = { customizationOption: tmp35 };
      obj17.children = closure_20(tmp(12923), obj19);
      tmp56Result3 = closure_20(tmp(12677), obj17);
      const obj18 = { marginTop: null, marginLeft: null };
      const tmpResult16 = tmp(12677);
    }
    items4[4] = tmp56Result3;
    const tmpResult15 = tmp(12922);
    if (result) {
      result = !tmp18;
    }
    if (result) {
      result = !isCharacterExiting;
    }
    const obj20 = { visible: result, enter, exit, style: null, children: null };
    const items6 = [tmp9.customizationSection, ,];
    ({ left: obj33.marginLeft, right: obj33.marginRight, bottom: obj33.marginBottom } = rect);
    items6[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp79 = tmp38;
    if (tmp38) {
      const items7 = [tmp9.landscapeCustomizationSection];
      const obj22 = { marginTop: rect.top };
      items7[1] = obj22;
      tmp79 = items7;
    }
    items6[2] = tmp79;
    obj20.style = items6;
    const items8 = [tmp9.customizationContent];
    let landscapeCustomizationContent = tmp38;
    if (tmp38) {
      landscapeCustomizationContent = tmp9.landscapeCustomizationContent;
    }
    const obj23 = {
      style: null,
      ref: null,
      onLayout: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    items8[1] = landscapeCustomizationContent;
    obj23.style = items8;
    obj23.ref = ref;
    obj23.onLayout = onLayout;
    let str2 = "auto";
    let str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    obj23.pointerEvents = str3;
    obj23.accessibilityElementsHidden = stateFromStores3;
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj23.importantForAccessibility = str2;
    const obj24 = {
      activeCustomizationOption: tmp35,
      isFinalizeRoute: tmp32,
      isCurrentTraitBlocked: hasItem,
      isSaving: stateFromStores3,
      isLandscape: tmp38,
      onSelectFinalizeOption: tmp36,
      onSelectTraitOption: null,
    };
    const obj21 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmpResult17 = tmp(12677);
    obj24.onSelectTraitOption = tmp4(12636).selectCharacterTrait;
    obj23.children = closure_20(tmp(12924), obj24);
    obj20.children = closure_20(transition, obj23);
    items4[5] = closure_20(tmpResult17, obj20);
    const obj25 = {
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
        _undefined();
      },
      onReplay: function handleReplay() {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const checkpointReplayRoute = CheckpointFlows.getCheckpointReplayRoute(obj3);
        obj3 = CheckpointSounds;
        const checkpointRouteSounds = obj3.getCheckpointRouteSounds({ previousRoute, route: checkpointReplayRoute });
        if (null != checkpointRouteSounds) {
          closure_4(checkpointRouteSounds);
        }
        closure_2(checkpointReplayRoute);
        const obj4 = { previousRoute, route: checkpointReplayRoute };
      },
      onShare: function handleShare() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12640, dependencyMap.paths), "CheckpointShare", {
          character: stateFromStores2,
          stats: stateFromStores,
          onForward: handleForward,
        });
      },
      isLastRoute: tmp52,
    };
    items4[6] = closure_20(tmp(12869), obj25);
    obj7.children = items4;
    obj6.children = closure_21(transition, obj7);
    const tmpResult18 = tmp(12924);
    const obj26 = { route, children: closure_20(tmp4(5104).ThemeContextProvider, obj6) };
    return closure_20(tmp4(12678).CheckpointStepFocusProvider, obj26);
  }
  sum = null;
  if (tmp56Result) {
    sum = tmp15Result2[0];
  }
  tmp15Result2 = _slicedToArray(noop.useState(null), 2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointFetchStates = fn(12628).CheckpointFetchStates;
const CheckpointConstants = fn(6396);
({
  CHECKPOINT_CONTROL_SIZE,
  CHECKPOINT_NAV_HEIGHT,
  CHECKPOINT_PRIMARY: closure_11,
  CHECKPOINT_LOGO_SIZE,
} = CheckpointConstants);
const CheckpointTransitionConstants = fn(12639);
({
  CHECKPOINT_BACKGROUND_FADE: closure_12,
  CHECKPOINT_CHARACTER_PAGE_FADE_IN: map1,
  CHECKPOINT_CHARACTER_PAGE_FADE_OUT: closure_14,
  CHECKPOINT_STATS_FADE_IN: closure_15,
  CHECKPOINT_STATS_FADE_OUT: closure_16,
  CHECKPOINT_STATS_HIDDEN_SCALE: closure_17,
  CheckpointCharacterStageHiddenBy: closure_18,
} = CheckpointTransitionConstants);
const ThemeTypes = fn(1082).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5043);
let obj2 = {
  container: { height: "100%", backgroundColor: nativeDefault.colors.BLACK },
  loader: null,
  layer: null,
  customizationSection: null,
  landscapeCustomizationSection: null,
  landscapeStat: null,
  customizationContent: null,
  landscapeCustomizationContent: null,
};
let obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.loader = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
let rect = {
  top: (CHECKPOINT_NAV_HEIGHT + fn(12654).CHECKPOINT_HEADER_BUTTON_SIZE) / 2,
  bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16,
  left: "59%",
  marginLeft: 0,
};
obj2.landscapeCustomizationSection = rect;
const rect1 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect1.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect1;
let obj4 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.customizationContent = { gap: nativeDefault.space.PX_12 };
obj2.landscapeCustomizationContent = { flex: 1 };
let closure_23 = createStyles.createStyles(obj2);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal(source) {
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => CheckpointStore.fetchState);
  const items1 = [CheckpointStore];
  const stateFromStores1 = initialize.useStateFromStores(
    items1,
    () => CheckpointStore.availability === CheckpointAvailability.CheckpointAvailability.UNAVAILABLE,
  );
  if (stateFromStores === CheckpointFetchStates.ERROR) {
    let tmp6Result = set(CheckpointErrorModalDefault, {});
  } else if (stateFromStores !== tmp5.SUCCESS) {
    const obj3 = { style: tmp4.loader, children: set(timestampProducer, {}) };
    tmp6Result = set(metroImportDefault, obj3);
  } else {
    if (stateFromStores1) {
      let tmp7 = CheckpointUnavailableModalDefault;
    } else {
      tmp7 = CheckpointAvailableModal;
    }
    const obj4 = { source: source.source };
    tmp6Result = set(tmp7, obj4);
  }
  return tmp6Result;
}
