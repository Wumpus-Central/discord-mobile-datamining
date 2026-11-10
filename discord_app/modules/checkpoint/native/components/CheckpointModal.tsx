// === Module 13686: CheckpointModal ===

// Module 13686 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 2116 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import HapticUtils from "HapticUtils" /* 5378 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6208 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6222 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import ForwardModalUtils from "ForwardModalUtils" /* 13624 */;
import CheckpointFlows from "CheckpointFlows" /* 13701 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 13705 */;
import CheckpointSounds from "CheckpointSounds" /* 13707 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13960 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 5085 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;

require = fn;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  importDefault = undefined;
  route = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let stateFromStores;
  closure_7 = undefined;
  let stateFromStores2;
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
      const obj3 = { flow: checkpointFlow, stats, currentRoute: route, direction };
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(obj3);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const result = HapticUtils.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const obj6 = { previousRoute: route, route: adjacentCheckpointRoute };
        const checkpointRouteSounds = CheckpointSounds.getCheckpointRouteSounds(obj6);
        if (null != checkpointRouteSounds) {
          closure_7(checkpointRouteSounds);
        }
        closure_3(adjacentCheckpointRoute);
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
    obj3.checkpointData = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1);
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
                const obj8 = { value: closure_0(13684).sendCheckpointCard(closure_132_0, c3, closure_133_0), done: false };
                return obj8;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(5838).presentError(intl.string(closure_0(1113).t.fEptJP));
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
              const result = closure_0(13679).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj = closure_0(13679);
              closure_0(13624).closeForwardModal();
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
  closure_12 = async function _handleNext() {
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
          } else if (noop) {
            _undefined(true);
            c3 = 1;
            const characterFromTraits = tmp3(tmp40[41]).getCharacterFromTraits(stateFromStores2);
            const obj4 = tmp3(tmp40[41]);
            c1 = 2;
            c4 = 1;
            const obj6 = { value: tmp3(tmp40[37]).completeCheckpoint(characterFromTraits), done: false };
            return obj6;
          } else {
            transition(1);
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_9(false);
          throw tmp40;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            const obj7 = { skipThrottle: true, hapticType: tmp3(tmp40[30]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
            closure_128_10(1, obj7);
          } else {
            const intl = tmp3(tmp40[40]).intl;
            tmp3(tmp40[39]).presentError(intl.string(tmp3(tmp40[40]).t.fEptJP));
            const obj = tmp3(tmp40[39]);
          }
          c3 = 0;
          closure_128_9(false);
        }
        c3 = 0;
        closure_128_9(false);
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
  const tmp = closure_15();
  const rect = require("useSafeAreaInsets")();
  ({ width, height } = require("useWindowDimensions")());
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp4 = require("useWindowDimensions")();
  checkpointFlow = checkpointFlow(route[17]).getCheckpointFlow(flag);
  let obj = checkpointFlow(route[17]);
  items = [c9];
  importDefault = checkpointFlow(route[18]).useStateFromStores(items, () => _undefined.stats);
  [route, closure_3] = require("useCheckpointRoute")(checkpointFlow);
  let obj2 = checkpointFlow(route[18]);
  const checkpointStepAnalytics = checkpointFlow(route[20]).useCheckpointStepAnalytics(route);
  _slicedToArray = noop.useRef(0);
  let obj3 = checkpointFlow(route[20]);
  const checkpointRoutePresentation = checkpointFlow(route[21]).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp43Result = route === checkpointFlow(tmp3[21]).CheckpointRoute.HOME;
  if (!tmp43Result) {
    tmp43Result = null != statsScreen;
  }
  let tmp43Result4 = tmp43Result;
  if (!tmp43Result) {
    tmp43Result4 = route === tmp5(tmp3[21]).CheckpointRoute.INTRODUCTION;
  }
  let obj5 = checkpointFlow(route[21]);
  let result = checkpointFlow(route[21]).isCheckpointCustomizationRoute(route);
  const tmp17 = route === checkpointFlow(route[21]).CheckpointRoute.FINALIZE_CHARACTER;
  noop = tmp17;
  const tmp18 = route === checkpointFlow(route[21]).CheckpointRoute.SUMMARY;
  const tmp5Result = checkpointFlow(route[21]);
  const items1 = [c9];
  stateFromStores = checkpointFlow(route[18]).useStateFromStores(items1, () => _undefined.character);
  const tmp5Result7 = checkpointFlow(route[18]);
  const characterCardColorPalette = checkpointFlow(route[22]).getCharacterCardColorPalette(stateFromStores);
  const tmp5Result8 = checkpointFlow(route[22]);
  const cardColors = checkpointFlow(route[22]).getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : transition;
  const tmp5Result9 = checkpointFlow(route[22]);
  const items2 = [c9];
  const stateFromStores1 = checkpointFlow(route[18]).useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(tmp3[23]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[24]).VoiceNormalIcon;
  }
  closure_7 = tmp2(tmp3[25])();
  require("useCheckpointMusic")();
  const tmp5Result10 = checkpointFlow(route[18]);
  [tmp26, tmp27] = noop.useState(checkpointFlow(route[27]).CheckpointCustomizationOption.BASE);
  if (!tmp17) {
    let BASE = tmp5(tmp3[27]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[27]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result11 = tmp5(tmp3[27]);
  }
  const tmp30 = checkpointFlow(route[27]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp26];
  const tmp8Result = _slicedToArray(noop.useState(checkpointFlow(route[27]).CheckpointCustomizationOption.BASE), 2);
  const items3 = [c9];
  stateFromStores2 = checkpointFlow(route[18]).useStateFromStores(items3, () => _undefined.selectedCharacterTraits);
  const obj13 = require("useCheckpointBlockedTraits")();
  const hasItem = obj13.includes(tmp30);
  let tmp34 = result;
  const tmp5Result12 = checkpointFlow(route[18]);
  if (result) {
    tmp34 = !tmp29;
  }
  const tmp2ResultResult = require("useMeasuredLayout")({ isMounted: tmp34 });
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
  [tmp39, c9] = noop.useState(false);
  if (tmp17) {
    let first1 = obj13[0];
  } else if (hasItem) {
    first1 = tmp30;
  }
  let tmp41 = result;
  if (result) {
    tmp41 = null != first1 || null == stateFromStores2[tmp30];
    const tmp42 = null != first1 || null == stateFromStores2[tmp30];
  }
  let obj6 = { theme: handleForward.DARK, children: null };
  let obj7 = { style: tmp.container, children: null };
  const items4 = [tmp.layer, ];
  let coveredCharacterLayer = tmp43Result;
  if (tmp43Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj8 = { collapsable: false, style: items4, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items4[1] = coveredCharacterLayer;
  let str2 = "auto";
  let str3 = "auto";
  if (tmp43Result4) {
    str3 = "none";
  }
  obj8.pointerEvents = str3;
  obj8.accessibilityElementsHidden = tmp43Result4;
  let str4 = str2;
  if (tmp43Result4) {
    str4 = "no-hide-descendants";
  }
  obj8.importantForAccessibility = str4;
  obj8.children = closure_12(require("CheckpointCharacterStage"), { stage: characterStage, layout: str, isActive: !tmp43Result4, isHidden: tmp43Result, characterBottomInset: sum });
  const items5 = [closure_12(closure_7, obj8), , , , , , ];
  if (tmp43Result) {
    let prop;
    if (tmp18) {
      prop = cardColors.backgroundGradientStartColor;
    }
    let obj10 = { gradientStartColor: prop };
    tmp43Result = tmp43(tmp2(tmp3[44]), obj10);
    const tmp2Result7 = tmp2(tmp3[44]);
  }
  items5[1] = tmp43Result;
  if (tmp43Result4) {
    const obj11 = { style: tmp.layer, children: null };
    const obj12 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    obj11.children = tmp43(tmp2(tmp3[45]), obj12);
    tmp43Result4 = tmp43(tmp45, obj11);
  }
  items5[2] = tmp43Result4;
  const obj14 = { style: null, children: null };
  const items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj14.style = items6;
  let obj9 = { stage: characterStage, layout: str, isActive: !tmp43Result4, isHidden: tmp43Result, characterBottomInset: sum };
  const tmp8Result2 = _slicedToArray(noop.useState(false), 2);
  if (tmp18) {
    let clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[47]);
  }
  const obj15 = { animatedUri: clydeLogoImage, staticUri: null, style: null };
  if (tmp18) {
    let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[48]);
  }
  obj15.staticUri = clydeLogoStaticImage;
  obj15.style = tmp.logo;
  const items7 = [closure_12(require("CheckpointApngPlayer"), obj15), ];
  const obj16 = { style: tmp.headerActions, children: null };
  const obj17 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result8 = require("CheckpointApngPlayer");
  obj17.onPress = checkpointFlow(route[37]).toggleMute;
  let intl = tmp5(tmp3[40]).intl;
  const t = tmp5(tmp3[40]).t;
  obj17.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj17.color = tmp22;
  obj17.children = closure_12(VoiceNormalIcon, { color: tmp22, size: "xs" });
  const items8 = [closure_12(require("CheckpointHeaderButton"), obj17), ];
  const obj18 = {
    onPress: function handleClose() {
      const result = checkpointFlow(route[30]).triggerHapticFeedback(checkpointFlow(route[30]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = checkpointFlow(route[30]);
      stats(route[31]).pop();
    },
    accessibilityLabel: null,
    color: null,
    children: null
  };
  const tmp2Result9 = require("CheckpointHeaderButton");
  const intl2 = tmp5(tmp3[40]).intl;
  obj18.accessibilityLabel = intl2.string(checkpointFlow(route[40]).t.cpT0Cq);
  obj18.color = tmp22;
  obj18.children = closure_12(checkpointFlow(route[49]).XSmallIcon, { color: tmp22, size: "xs" });
  items8[1] = closure_12(require("CheckpointHeaderButton"), obj18);
  obj16.children = items8;
  items7[1] = closure_13(closure_7, obj16);
  obj14.children = items7;
  items5[3] = closure_13(closure_7, obj14);
  let tmp43Result5 = result;
  if (result) {
    tmp43Result5 = tmp29;
  }
  if (tmp43Result5) {
    tmp43Result5 = !tmp17;
  }
  if (tmp43Result5) {
    tmp43Result5 = width / height >= 1.3333333333333333;
  }
  if (tmp43Result5) {
    const obj19 = { style: null, children: null };
    const items9 = [tmp.landscapeStat, ];
    ({ top: obj27.marginTop, left: obj27.marginLeft } = rect);
    items9[1] = { marginTop: null, marginLeft: null };
    obj19.style = items9;
    const obj21 = { customizationOption: tmp26 };
    obj19.children = tmp43(tmp2(tmp3[50]), obj21);
    tmp43Result5 = tmp43(tmp45, obj19);
    const obj20 = { marginTop: null, marginLeft: null };
  }
  items5[4] = tmp43Result5;
  if (result) {
    const items10 = [tmp.customizationSection, , ];
    ({ left: obj29.marginLeft, right: obj29.marginRight, bottom: obj29.marginBottom } = rect);
    items10[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp52 = tmp29;
    if (tmp29) {
      const items11 = [tmp.landscapeCustomizationSection, ];
      const obj23 = { marginTop: rect.top };
      items11[1] = obj23;
      tmp52 = items11;
    }
    const obj24 = { style: null, ref: null, onLayout: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items10[2] = tmp52;
    obj24.style = items10;
    obj24.ref = ref;
    obj24.onLayout = onLayout;
    let str5 = str2;
    if (tmp39) {
      str5 = "none";
    }
    obj24.pointerEvents = str5;
    obj24.accessibilityElementsHidden = tmp39;
    if (tmp39) {
      str2 = "no-hide-descendants";
    }
    obj24.importantForAccessibility = str2;
    const obj25 = { activeCustomizationOption: tmp26, isFinalizeRoute: tmp17, isCurrentTraitBlocked: hasItem, isSaving: tmp39, isLandscape: tmp29, onSelectFinalizeOption: tmp27, onSelectTraitOption: tmp5(tmp3[37]).selectCharacterTrait };
    obj24.children = tmp43(tmp2(tmp3[51]), obj25);
    result = tmp43(tmp45, obj24);
    const obj22 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result11 = tmp2(tmp3[51]);
  }
  items5[5] = result;
  const obj26 = {
    activeRoute: route,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      const self = this;
      const apply = closure_12.apply;
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
        closure_7(checkpointRouteSounds);
      }
      closure_3(checkpointReplayRoute);
      const obj5 = { previousRoute: route, route: checkpointReplayRoute };
    },
    onShare: function handleShare() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13687, dependencyMap.paths), "CheckpointShare", { character: stateFromStores, stats, onForward: handleForward });
    },
    color: tmp22,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null
  };
  let shadowColor;
  const tmp2Result10 = require("CheckpointHeaderButton");
  if (tmp18) {
    shadowColor = cardColors.shadowColor;
  }
  obj26.shadowColor = shadowColor;
  obj26.backDisabled = tmp39;
  obj26.nextDisabled = tmp41;
  obj26.nextLoading = tmp39;
  obj26.nextBlockedTrait = first1;
  items5[6] = closure_12(require("CheckpointNavigationControls"), obj26);
  obj7.children = items5;
  obj6.children = closure_13(closure_7, obj7);
  const tmp2Result12 = require("CheckpointNavigationControls");
  return closure_12(checkpointFlow(route[53]).CheckpointStepFocusProvider, { route, children: closure_12(checkpointFlow(route[42]).ThemeContextProvider, obj6) });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointConstants = fn(6201);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: closure_10 } = CheckpointConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5142);
let obj2 = { loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK }, container: null, layer: null, coveredCharacterLayer: null, nav: null, logo: null, headerActions: null, customizationSection: null, landscapeCustomizationSection: null, landscapeStat: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
obj2.container = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.layer = { position: "absolute", width: "100%", height: "100%" };
obj2.coveredCharacterLayer = { opacity: 0 };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
let size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj2.logo = size;
let obj4 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
const rect1 = { top: (CHECKPOINT_NAV_HEIGHT + fn(13700).CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
obj2.landscapeCustomizationSection = rect1;
const rect2 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect2.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect2;
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper(arg0) {
  const tmp = useCheckpointPreloaderDefault();
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmp4Result = application_id(CheckpointModal, obj2);
  } else {
    const obj3 = { style: tmp3.loader, children: application_id(timestampProducer, {}) };
    tmp4Result = application_id(metroImportDefault, obj3);
  }
  return tmp4Result;
};