// === Module 13660: CheckpointModal ===

// Module 13660 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6570 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import CheckpointFlows from "CheckpointFlows" /* 13675 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 13679 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13920 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 5084 */;
import CheckpointStore from "CheckpointStore" /* 13656 */;

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
  let selectedCharacterTraits;
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
    closure_0 = STATS_ONLY;
    let result = checkpointFlow(route[31]).triggerHapticFeedback(checkpointFlow(route[31]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = { content: "", components: null };
    let obj3 = { type: checkpointFlow(route[33]).ComponentType.CHECKPOINT_CARD, id: null, checkpointData: null };
    let obj = checkpointFlow(route[31]);
    obj3.id = checkpointFlow(route[34]).asComponentId("0");
    const obj4 = checkpointFlow(route[34]);
    obj3.checkpointData = checkpointFlow(route[35]).toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1);
    items = [obj3];
    obj2.components = items;
    let obj5 = checkpointFlow(route[35]);
    const tmp2 = new selectedCharacterTraits(obj2);
    let obj7 = { message: tmp2, source: "checkpoint", customSendHandler: null };
    closure_1 = closure_3((arg0, arg1, arg2) => {
      closure_0 = arg0;
      const withMessage = arg1;
      closure_2 = arg2;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      const iter = (function*(arg0, value, arg2) {
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
                closure_4 = tmp35;
                let withMessage2;
                closure_132_2 = undefined;
                closure_132_0 = closure_0;
                withMessage2 = withMessage.withMessage;
                closure_132_2 = closure_2;
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
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_132_2(true);
                c6 = 1;
                c3 = withMessage2;
                if (withMessage2 == null) {
                  c3 = "";
                }
                c7 = 3;
                c8 = 1;
                const obj7 = { value: closure_0(13658).sendCheckpointCard(closure_132_0, c3, closure_133_0), done: false };
                return obj7;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(5845).presentError(intl.string(closure_0(1113).t.fEptJP));
              c8 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const result = closure_0(13654).trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj9 = closure_0(13654);
              closure_0(13599).closeForwardModal();
              closure_1_10(1, { skipThrottle: true, hapticType: null });
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp34) {
            if (tmp4 === c6) {
              c8 = tmp2;
              throw tmp34;
            } else {
              c7 = tmp;
            }
            tmp35 = c6;
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
    checkpointFlow(route[36]).openForwardModal(obj7);
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
            const characterFromTraits = tmp3(tmp40[41]).getCharacterFromTraits(selectedCharacterTraits);
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
            const obj7 = { skipThrottle: true, hapticType: tmp3(tmp40[31]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
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
  let tmp44Result = route === checkpointFlow(tmp3[21]).CheckpointRoute.HOME;
  if (!tmp44Result) {
    tmp44Result = null != statsScreen;
  }
  let tmp44Result4 = tmp44Result;
  if (!tmp44Result) {
    tmp44Result4 = route === tmp5(tmp3[21]).CheckpointRoute.INTRODUCTION;
  }
  let obj5 = checkpointFlow(route[21]);
  let result = checkpointFlow(route[21]).isCheckpointCustomizationRoute(route);
  const tmp17 = route === checkpointFlow(route[21]).CheckpointRoute.FINALIZE_CHARACTER;
  noop = tmp17;
  const tmp18 = route === checkpointFlow(route[21]).CheckpointRoute.SUMMARY;
  const tmp5Result = checkpointFlow(route[21]);
  const items1 = [c9];
  stateFromStores = checkpointFlow(route[18]).useStateFromStores(items1, () => _undefined.character);
  const tmp5Result6 = checkpointFlow(route[18]);
  const characterCardColorPalette = checkpointFlow(route[22]).getCharacterCardColorPalette(stateFromStores);
  const tmp5Result7 = checkpointFlow(route[22]);
  const cardColors = checkpointFlow(route[22]).getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : transition;
  const tmp5Result8 = checkpointFlow(route[22]);
  const items2 = [c9];
  const stateFromStores1 = checkpointFlow(route[18]).useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(tmp3[23]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[24]).VoiceNormalIcon;
  }
  const tmp5Result9 = checkpointFlow(route[18]);
  closure_7 = require("useCheckpointSound")(tmp2(tmp3[26]));
  require("useCheckpointMusic")();
  const tmp2Result = require("useCheckpointSound");
  [tmp27, tmp28] = noop.useState(checkpointFlow(route[28]).CheckpointCustomizationOption.BASE);
  if (!tmp17) {
    let BASE = tmp5(tmp3[28]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[28]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result10 = tmp5(tmp3[28]);
  }
  const tmp31 = checkpointFlow(route[28]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp27];
  const tmp32 = require("useCheckpointCustomization")();
  selectedCharacterTraits = tmp32.selectedCharacterTraits;
  const blockedTraits = tmp32.blockedTraits;
  const hasItem = blockedTraits.includes(tmp31);
  let tmp35 = result;
  const tmp8Result = _slicedToArray(noop.useState(checkpointFlow(route[28]).CheckpointCustomizationOption.BASE), 2);
  if (result) {
    tmp35 = !tmp30;
  }
  const tmp2Result1Result = require("useMeasuredLayout")({ isMounted: tmp35 });
  const height2 = tmp2Result1Result.height;
  let sum = null;
  ({ ref, onLayout } = tmp2Result1Result);
  if (result) {
    sum = null;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
  }
  const tmp2Result8 = require("useMeasuredLayout");
  [tmp40, c9] = noop.useState(false);
  if (tmp17) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp31;
  }
  let tmp42 = result;
  if (result) {
    tmp42 = null != first1 || null == selectedCharacterTraits[tmp31];
    const tmp43 = null != first1 || null == selectedCharacterTraits[tmp31];
  }
  let obj6 = { theme: handleForward.DARK, children: null };
  let obj7 = { style: tmp.container, children: null };
  const items3 = [tmp.layer, ];
  let coveredCharacterLayer = tmp44Result;
  if (tmp44Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj8 = { collapsable: false, style: items3, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items3[1] = coveredCharacterLayer;
  let str2 = "auto";
  let str3 = "auto";
  if (tmp44Result4) {
    str3 = "none";
  }
  obj8.pointerEvents = str3;
  obj8.accessibilityElementsHidden = tmp44Result4;
  let str4 = str2;
  if (tmp44Result4) {
    str4 = "no-hide-descendants";
  }
  obj8.importantForAccessibility = str4;
  obj8.children = closure_12(require("CheckpointCharacterStage"), { stage: characterStage, layout: str, isActive: !tmp44Result4, isHidden: tmp44Result, characterBottomInset: sum });
  const items4 = [closure_12(closure_7, obj8), , , , , , ];
  if (tmp44Result) {
    let prop;
    if (tmp18) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj10 = { gradientStartColor: prop };
    tmp44Result = tmp44(tmp2(tmp3[44]), obj10);
    const tmp2Result9 = tmp2(tmp3[44]);
  }
  items4[1] = tmp44Result;
  if (tmp44Result4) {
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
    obj11.children = tmp44(tmp2(tmp3[45]), obj12);
    tmp44Result4 = tmp44(tmp46, obj11);
  }
  items4[2] = tmp44Result4;
  const obj13 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj13.style = items5;
  let obj9 = { stage: characterStage, layout: str, isActive: !tmp44Result4, isHidden: tmp44Result, characterBottomInset: sum };
  const tmp8Result2 = _slicedToArray(noop.useState(false), 2);
  if (tmp18) {
    let clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[47]);
  }
  const obj14 = { animatedUri: clydeLogoImage, staticUri: null, style: null };
  if (tmp18) {
    let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[48]);
  }
  obj14.staticUri = clydeLogoStaticImage;
  obj14.style = tmp.logo;
  const items6 = [closure_12(require("CheckpointApngPlayer"), obj14), ];
  const obj15 = { style: tmp.headerActions, children: null };
  const obj16 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result10 = require("CheckpointApngPlayer");
  obj16.onPress = checkpointFlow(route[37]).toggleMute;
  let intl = tmp5(tmp3[40]).intl;
  const t = tmp5(tmp3[40]).t;
  obj16.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj16.color = tmp22;
  obj16.children = closure_12(VoiceNormalIcon, { color: tmp22, size: "xs" });
  const items7 = [closure_12(require("CheckpointHeaderButton"), obj16), ];
  const obj17 = {
    onPress: function handleClose() {
      const result = checkpointFlow(route[31]).triggerHapticFeedback(checkpointFlow(route[31]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = checkpointFlow(route[31]);
      stats(route[32]).pop();
    },
    accessibilityLabel: null,
    color: null,
    children: null
  };
  const tmp2Result11 = require("CheckpointHeaderButton");
  const intl2 = tmp5(tmp3[40]).intl;
  obj17.accessibilityLabel = intl2.string(checkpointFlow(route[40]).t.cpT0Cq);
  obj17.color = tmp22;
  obj17.children = closure_12(checkpointFlow(route[49]).XSmallIcon, { color: tmp22, size: "xs" });
  items7[1] = closure_12(require("CheckpointHeaderButton"), obj17);
  obj15.children = items7;
  items6[1] = closure_13(closure_7, obj15);
  obj13.children = items6;
  items4[3] = closure_13(closure_7, obj13);
  let tmp44Result5 = result;
  if (result) {
    tmp44Result5 = tmp30;
  }
  if (tmp44Result5) {
    tmp44Result5 = !tmp17;
  }
  if (tmp44Result5) {
    tmp44Result5 = width / height >= 1.3333333333333333;
  }
  if (tmp44Result5) {
    const obj18 = { style: null, children: null };
    const items8 = [tmp.landscapeStat, ];
    ({ top: obj25.marginTop, left: obj25.marginLeft } = rect);
    items8[1] = { marginTop: null, marginLeft: null };
    obj18.style = items8;
    const obj20 = { customizationOption: tmp27 };
    obj18.children = tmp44(tmp2(tmp3[50]), obj20);
    tmp44Result5 = tmp44(tmp46, obj18);
    const obj19 = { marginTop: null, marginLeft: null };
  }
  items4[4] = tmp44Result5;
  if (result) {
    const items9 = [tmp.customizationSection, , ];
    ({ left: obj27.marginLeft, right: obj27.marginRight, bottom: obj27.marginBottom } = rect);
    items9[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp53 = tmp30;
    if (tmp30) {
      const items10 = [tmp.landscapeCustomizationSection, ];
      const obj22 = { marginTop: rect.top };
      items10[1] = obj22;
      tmp53 = items10;
    }
    const obj23 = { style: null, ref: null, onLayout: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items9[2] = tmp53;
    obj23.style = items9;
    obj23.ref = ref;
    obj23.onLayout = onLayout;
    let str5 = str2;
    if (tmp40) {
      str5 = "none";
    }
    obj23.pointerEvents = str5;
    obj23.accessibilityElementsHidden = tmp40;
    if (tmp40) {
      str2 = "no-hide-descendants";
    }
    obj23.importantForAccessibility = str2;
    const obj24 = { activeCustomizationOption: tmp27, isFinalizeRoute: tmp17, isCurrentTraitBlocked: hasItem, isSaving: tmp40, isLandscape: tmp30, onSelectFinalizeOption: tmp28, onSelectTraitOption: tmp5(tmp3[37]).selectCharacterTrait };
    obj23.children = tmp44(tmp2(tmp3[51]), obj24);
    result = tmp44(tmp46, obj23);
    const obj21 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result13 = tmp2(tmp3[51]);
  }
  items4[5] = result;
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
    onShare: function handleShare() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13661, dependencyMap.paths), "CheckpointShare", { character: stateFromStores, stats, onForward: handleForward });
    },
    color: tmp22,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null
  };
  let shadowColor;
  const tmp2Result12 = require("CheckpointHeaderButton");
  if (tmp18) {
    shadowColor = cardColors.shadowColor;
  }
  obj26.shadowColor = shadowColor;
  obj26.backDisabled = tmp40;
  obj26.nextDisabled = tmp42;
  obj26.nextLoading = tmp40;
  obj26.nextBlockedTrait = first1;
  items4[6] = closure_12(require("CheckpointNavigationControls"), obj26);
  obj7.children = items4;
  obj6.children = closure_13(closure_7, obj7);
  const tmp2Result14 = require("CheckpointNavigationControls");
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
const createStyles = fn(5141);
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
const rect1 = { top: (CHECKPOINT_NAV_HEIGHT + fn(13674).CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
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