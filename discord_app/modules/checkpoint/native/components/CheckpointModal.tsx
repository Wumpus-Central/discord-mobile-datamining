// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import CheckpointNavigation from "../../CheckpointNavigation.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import CheckpointFlows from "../../CheckpointFlows.tsx";
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
    const result = checkpointFlow(route[30]).triggerHapticFeedback(
      checkpointFlow(route[30]).HapticFeedbackTypes.IMPACT_LIGHT,
    );
    let obj2 = { content: "", components: null };
    const obj3 = { type: checkpointFlow(route[32]).ComponentType.CHECKPOINT_CARD, id: null, checkpointData: null };
    const obj = checkpointFlow(route[30]);
    obj3.id = checkpointFlow(route[33]).asComponentId("0");
    let obj4 = checkpointFlow(route[33]);
    obj3.checkpointData = checkpointFlow(route[34]).toCheckpointMessageComponentData(
      STATS_ONLY,
      stateFromStores,
      closure_1,
    );
    items = [obj3];
    obj2.components = items;
    const obj5 = checkpointFlow(route[34]);
    const tmp2 = new selectedCharacterTraits(obj2);
    let obj7 = { message: tmp2, source: "checkpoint", customSendHandler: null };
    closure_1 = closure_3((arg0, arg1, arg2) => {
      closure_0 = arg0;
      const withMessage = arg1;
      closure_2 = arg2;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      const iter = (function* (arg0, value, arg2) {
        if (c8 === 2) {
          c8 = 3;
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
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_5 = tmp3;
                closure_4 = tmp41;
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
                const obj7 = {
                  value: closure_0(13572).sendCheckpointCard(closure_132_0, c3, closure_133_0),
                  done: false,
                };
                return obj7;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_132_2(false);
              const intl = closure_0(1113).intl;
              closure_0(5831).presentError(intl.string(closure_0(1113).t.fEptJP));
              c8 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c6 = 0;
              closure_0(13515).closeForwardModal();
              closure_1_10(1, { skipThrottle: true, hapticType: null });
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp40) {
            if (tmp4 === c6) {
              c8 = tmp2;
              throw tmp40;
            } else {
              c7 = tmp;
            }
            tmp41 = c6;
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
    checkpointFlow(route[35]).openForwardModal(obj7);
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
            const characterFromTraits = tmp3(tmp40[39]).getCharacterFromTraits(selectedCharacterTraits);
            const obj4 = tmp3(tmp40[39]);
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
            const intl = tmp3(tmp40[38]).intl;
            tmp3(tmp40[37]).presentError(intl.string(tmp3(tmp40[38]).t.fEptJP));
            const obj = tmp3(tmp40[37]);
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
  _slicedToArray = noop.useRef(0);
  let obj2 = checkpointFlow(route[18]);
  const checkpointRoutePresentation = checkpointFlow(route[20]).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp43Result = route === checkpointFlow(tmp3[20]).CheckpointRoute.HOME;
  if (!tmp43Result) {
    tmp43Result = null != statsScreen;
  }
  let tmp43Result4 = tmp43Result;
  if (!tmp43Result) {
    tmp43Result4 = route === tmp5(tmp3[20]).CheckpointRoute.INTRODUCTION;
  }
  let obj4 = checkpointFlow(route[20]);
  let result = checkpointFlow(route[20]).isCheckpointCustomizationRoute(route);
  const tmp16 = route === checkpointFlow(route[20]).CheckpointRoute.FINALIZE_CHARACTER;
  noop = tmp16;
  const tmp17 = route === checkpointFlow(route[20]).CheckpointRoute.SUMMARY;
  const tmp5Result = checkpointFlow(route[20]);
  const items1 = [c9];
  stateFromStores = checkpointFlow(route[18]).useStateFromStores(items1, () => _undefined.character);
  const tmp5Result6 = checkpointFlow(route[18]);
  const characterCardColorPalette = checkpointFlow(route[21]).getCharacterCardColorPalette(stateFromStores);
  const tmp5Result7 = checkpointFlow(route[21]);
  const cardColors = checkpointFlow(route[21]).getCardColors(characterCardColorPalette);
  const tmp21 = tmp17 ? cardColors.primaryBackgroundColor : transition;
  const tmp5Result8 = checkpointFlow(route[21]);
  const items2 = [c9];
  const stateFromStores1 = checkpointFlow(route[18]).useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    let VoiceNormalIcon = tmp5(tmp3[22]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[23]).VoiceNormalIcon;
  }
  const tmp5Result9 = checkpointFlow(route[18]);
  closure_7 = require("useCheckpointSound")(tmp2(tmp3[25]));
  require("useCheckpointMusic")();
  const tmp2Result = require("useCheckpointSound");
  [tmp26, tmp27] = noop.useState(checkpointFlow(route[27]).CheckpointCustomizationOption.BASE);
  if (!tmp16) {
    let BASE = tmp5(tmp3[27]).getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[27]).CheckpointCustomizationOption.BASE;
    }
    const tmp5Result10 = tmp5(tmp3[27]);
  }
  const tmp30 = checkpointFlow(route[27]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp26];
  const tmp31 = require("useCheckpointCustomization")();
  selectedCharacterTraits = tmp31.selectedCharacterTraits;
  const blockedTraits = tmp31.blockedTraits;
  const hasItem = blockedTraits.includes(tmp30);
  let tmp34 = result;
  const tmp8Result = _slicedToArray(noop.useState(checkpointFlow(route[27]).CheckpointCustomizationOption.BASE), 2);
  if (result) {
    tmp34 = !tmp29;
  }
  const tmp2Result1Result = require("useMeasuredLayout")({ isMounted: tmp34 });
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
  [tmp39, c9] = noop.useState(false);
  if (tmp16) {
    let first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp30;
  }
  let tmp41 = result;
  if (result) {
    tmp41 = null != first1 || null == selectedCharacterTraits[tmp30];
    const tmp42 = null != first1 || null == selectedCharacterTraits[tmp30];
  }
  let obj5 = { theme: handleForward.DARK, children: null };
  let obj6 = { style: tmp.container, children: null };
  const items3 = [tmp.layer];
  let coveredCharacterLayer = tmp43Result;
  if (tmp43Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj7 = {
    collapsable: false,
    style: items3,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  items3[1] = coveredCharacterLayer;
  let str2 = "auto";
  let str3 = "auto";
  if (tmp43Result4) {
    str3 = "none";
  }
  obj7.pointerEvents = str3;
  obj7.accessibilityElementsHidden = tmp43Result4;
  let str4 = str2;
  if (tmp43Result4) {
    str4 = "no-hide-descendants";
  }
  obj7.importantForAccessibility = str4;
  obj7.children = closure_12(require("CheckpointCharacterStage"), {
    stage: characterStage,
    layout: str,
    isActive: !tmp43Result4,
    characterBottomInset: sum,
  });
  const items4 = [closure_12(closure_7, obj7), , , , , ,];
  if (tmp43Result) {
    let prop;
    if (tmp17) {
      prop = cardColors.backgroundGradientStartColor;
    }
    let obj9 = { gradientStartColor: prop };
    tmp43Result = tmp43(tmp2(tmp3[42]), obj9);
    const tmp2Result9 = tmp2(tmp3[42]);
  }
  items4[1] = tmp43Result;
  if (tmp43Result4) {
    const obj10 = { style: tmp.layer, children: null };
    const obj11 = {
      route,
      onNextStep: function handleNextStep() {
        transition(1, { skipThrottle: true, hapticType: null });
      },
      onPreviousStep: function handlePreviousStep() {
        transition(-1, { skipThrottle: true, hapticType: null });
      },
    };
    obj10.children = tmp43(tmp2(tmp3[43]), obj11);
    tmp43Result4 = tmp43(tmp45, obj10);
  }
  items4[2] = tmp43Result4;
  const obj12 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj12.style = items5;
  let obj8 = { stage: characterStage, layout: str, isActive: !tmp43Result4, characterBottomInset: sum };
  const tmp8Result2 = _slicedToArray(noop.useState(false), 2);
  if (tmp17) {
    let clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[45]);
  }
  const obj13 = { animatedUri: clydeLogoImage, staticUri: null, style: null };
  if (tmp17) {
    let clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[46]);
  }
  obj13.staticUri = clydeLogoStaticImage;
  obj13.style = tmp.logo;
  const items6 = [closure_12(require("CheckpointApngPlayer"), obj13)];
  const obj14 = { style: tmp.headerActions, children: null };
  const obj15 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const tmp2Result10 = require("CheckpointApngPlayer");
  obj15.onPress = checkpointFlow(route[36]).toggleMute;
  let intl = tmp5(tmp3[38]).intl;
  const t = tmp5(tmp3[38]).t;
  obj15.accessibilityLabel = intl.string(stateFromStores1 ? t.YqAjXy : t.w4m945);
  obj15.color = tmp21;
  obj15.children = closure_12(VoiceNormalIcon, { color: tmp21, size: "xs" });
  const items7 = [closure_12(require("CheckpointHeaderButton"), obj15)];
  const obj16 = {
    onPress: function handleClose() {
      const result = checkpointFlow(route[30]).triggerHapticFeedback(
        checkpointFlow(route[30]).HapticFeedbackTypes.IMPACT_LIGHT,
      );
      const obj = checkpointFlow(route[30]);
      stats(route[31]).pop();
    },
    accessibilityLabel: null,
    color: null,
    children: null,
  };
  const tmp2Result11 = require("CheckpointHeaderButton");
  const intl2 = tmp5(tmp3[38]).intl;
  obj16.accessibilityLabel = intl2.string(checkpointFlow(route[38]).t.cpT0Cq);
  obj16.color = tmp21;
  obj16.children = closure_12(checkpointFlow(route[47]).XSmallIcon, { color: tmp21, size: "xs" });
  items7[1] = closure_12(require("CheckpointHeaderButton"), obj16);
  obj14.children = items7;
  items6[1] = closure_13(closure_7, obj14);
  obj12.children = items6;
  items4[3] = closure_13(closure_7, obj12);
  let tmp43Result5 = result;
  if (result) {
    tmp43Result5 = tmp29;
  }
  if (tmp43Result5) {
    tmp43Result5 = !tmp16;
  }
  if (tmp43Result5) {
    tmp43Result5 = width / height >= 1.3333333333333333;
  }
  if (tmp43Result5) {
    const obj17 = { style: null, children: null };
    const items8 = [tmp.landscapeStat];
    ({ top: obj24.marginTop, left: obj24.marginLeft } = rect);
    items8[1] = { marginTop: null, marginLeft: null };
    obj17.style = items8;
    const obj19 = { customizationOption: tmp26 };
    obj17.children = tmp43(tmp2(tmp3[48]), obj19);
    tmp43Result5 = tmp43(tmp45, obj17);
    const obj18 = { marginTop: null, marginLeft: null };
  }
  items4[4] = tmp43Result5;
  if (result) {
    const items9 = [tmp.customizationSection, ,];
    ({ left: obj26.marginLeft, right: obj26.marginRight, bottom: obj26.marginBottom } = rect);
    items9[1] = { marginLeft: null, marginRight: null, marginBottom: null };
    let tmp52 = tmp29;
    if (tmp29) {
      const items10 = [tmp.landscapeCustomizationSection];
      const obj21 = { marginTop: rect.top };
      items10[1] = obj21;
      tmp52 = items10;
    }
    const obj22 = {
      style: null,
      ref: null,
      onLayout: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    items9[2] = tmp52;
    obj22.style = items9;
    obj22.ref = ref;
    obj22.onLayout = onLayout;
    let str5 = str2;
    if (tmp39) {
      str5 = "none";
    }
    obj22.pointerEvents = str5;
    obj22.accessibilityElementsHidden = tmp39;
    if (tmp39) {
      str2 = "no-hide-descendants";
    }
    obj22.importantForAccessibility = str2;
    const obj23 = {
      activeCustomizationOption: tmp26,
      isFinalizeRoute: tmp16,
      isCurrentTraitBlocked: hasItem,
      isSaving: tmp39,
      isLandscape: tmp29,
      onSelectFinalizeOption: tmp27,
      onSelectTraitOption: tmp5(tmp3[36]).selectCharacterTrait,
    };
    obj22.children = tmp43(tmp2(tmp3[49]), obj23);
    result = tmp43(tmp45, obj22);
    const obj20 = { marginLeft: null, marginRight: null, marginBottom: null };
    const tmp2Result13 = tmp2(tmp3[49]);
  }
  items4[5] = result;
  const obj25 = {
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
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13575, dependencyMap.paths), "CheckpointShare", {
        character: stateFromStores,
        stats,
        onForward: handleForward,
      });
    },
    color: tmp21,
    shadowColor: null,
    backDisabled: null,
    nextDisabled: null,
    nextLoading: null,
    nextBlockedTrait: null,
  };
  let shadowColor;
  const tmp2Result12 = require("CheckpointHeaderButton");
  if (tmp17) {
    shadowColor = cardColors.shadowColor;
  }
  obj25.shadowColor = shadowColor;
  obj25.backDisabled = tmp39;
  obj25.nextDisabled = tmp41;
  obj25.nextLoading = tmp39;
  obj25.nextBlockedTrait = first1;
  items4[6] = closure_12(require("CheckpointNavigationControls"), obj25);
  obj6.children = items4;
  obj5.children = closure_13(closure_7, obj6);
  const tmp2Result14 = require("CheckpointNavigationControls");
  return closure_12(checkpointFlow(route[51]).CheckpointStepFocusProvider, {
    route,
    children: closure_12(checkpointFlow(route[40]).ThemeContextProvider, obj5),
  });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointConstants = fn(6186);
({
  CHECKPOINT_CONTROL_SIZE,
  CHECKPOINT_LOGO_SIZE,
  CHECKPOINT_NAV_HEIGHT,
  CHECKPOINT_PRIMARY: closure_10,
} = CheckpointConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
const createStyles = fn(5141);
let obj2 = {
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK },
  container: null,
  layer: null,
  coveredCharacterLayer: null,
  nav: null,
  logo: null,
  headerActions: null,
  customizationSection: null,
  landscapeCustomizationSection: null,
  landscapeStat: null,
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
obj2.customizationSection = { position: "absolute", left: 0, right: 0, bottom: sum1 };
const rect1 = {
  top: (CHECKPOINT_NAV_HEIGHT + fn(13588).CHECKPOINT_HEADER_BUTTON_SIZE) / 2,
  bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16,
  left: "59%",
  marginLeft: 0,
};
obj2.landscapeCustomizationSection = rect1;
const rect2 = { position: "absolute", top: null, left: nativeDefault.space.PX_16 };
let result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
rect2.top = result + nativeDefault.space.PX_32;
obj2.landscapeStat = rect2;
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper(arg0) {
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    let tmp3Result = application_id(CheckpointModal, obj2);
  } else {
    const obj = { style: tmp2.loader, children: application_id(timestampProducer, {}) };
    tmp3Result = application_id(React5, obj);
  }
  return tmp3Result;
}
