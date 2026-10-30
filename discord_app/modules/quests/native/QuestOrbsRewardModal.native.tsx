// discord_app/modules/quests/native/QuestOrbsRewardModal.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import NativeImageManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import APNGPlayer from "../../image/native/APNGPlayer.android.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import _modDef14650 from "../../../../discord_assets/assets/orbs/static_idle_orb.png.js";
import _modDef14651 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_idle_dark.png.js";
import _modDef14652 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_entry_dark.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;

require = fn;
function OrbsBalance(balance) {
  const tmp = closure_20();
  const obj = { children: null };
  const items = [
    closure_1_14(OrbsIcon.OrbsIcon, { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon }),
    closure_1_14(React6, { style: tmp.spacer }),
    balance.balance,
  ];
  obj.children = items;
  return __initData2(__initData, obj);
}
function CancelButton(alignEnd) {
  let flag = alignEnd.alignEnd;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_18();
  _require = tmp;
  const obj = {
    onPress: function onClose() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    },
    backImage() {
      return closure_2_14(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null,
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj.style = flag ? tmp.closeButtonWide : tmp.closeButton;
  return closure_14(require("../../../../_runtime/metro/06999__.js").HeaderBackButton, obj);
}
function StaticOrb() {
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  const obj2 = { source: null, style: null, fadeDuration: 0 };
  const obj3 = { uri: null };
  const tmp = closure_26();
  obj3.uri = _modDef14650;
  obj2.source = obj3;
  obj2.style = tmp.animatedOrb;
  obj.children = closure_1_14(FastImageDefault, obj2);
  return closure_1_14(React6, obj);
}
function AnimatedOrbContainer(isAppActive) {
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  const tmp = closure_26();
  [first, closure_1] = noop.useState(false);
  [first1, closure_3] = noop.useState(false);
  [tmp7, c4] = noop.useState(true);
  const callback = noop.useCallback(() => {
    closure_1(true);
  }, []);
  const items = [first, first1];
  const callback1 = noop.useCallback(() => {
    closure_3(true);
  }, []);
  const effect = noop.useEffect(() => {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  let tmp13 = !first;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = closure_1_14(React6, obj2);
  }
  const items1 = [tmp13, ,];
  const obj3 = { uri: _modDef14651, style: null, onLoad: null, animate: null };
  const items2 = [tmp.animatedOrb];
  let obj4 = tmp15Result;
  if (!tmp15Result) {
    obj4 = !first1;
  }
  if (obj4) {
    obj4 = { opacity: 0 };
  }
  items2[1] = obj4;
  obj3.style = items2;
  obj3.onLoad = callback1;
  let tmp19 = !tmp15Result;
  if (!tmp15Result) {
    tmp19 = isAppActive;
  }
  obj3.animate = tmp19;
  items1[1] = closure_1_14(closure_25, obj3);
  if (tmp15Result) {
    const obj5 = { uri: _modDef14652, style: tmp.animatedOrb, onLoad: callback, animate: isAppActive };
    tmp15Result = closure_1_14(closure_25, obj5);
  }
  items1[2] = tmp15Result;
  obj.children = items1;
  return __initData2(React6, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const QuestConstants = fn(6775);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_12, RewardFilterTypes: map1 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let createStyles = fn(5009);
let obj = {
  closeButton: { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 },
  closeButtonWide: null,
  closeButtonIcon: null,
};
let obj3 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButtonWide = {
  alignSelf: "flex-end",
  marginTop: nativeDefault.space.PX_16,
  marginRight: nativeDefault.space.PX_16,
  zIndex: 999,
};
let obj4 = {
  alignSelf: "flex-end",
  marginTop: nativeDefault.space.PX_16,
  marginRight: nativeDefault.space.PX_16,
  zIndex: 999,
};
obj.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_18 = createStyles.createStyles(obj);
createStyles = fn(5009);
let closure_19 = createStyles.createStyles(() => {
  const obj = {
    root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    background: React5.absoluteFillObject,
    loading: null,
    header: null,
    main: null,
    content: null,
    mainColumn: null,
    centeredLockup: null,
    animation: null,
    animationInLockup: null,
    body: null,
    bodyInLockup: null,
    title: null,
    buttonsContainer: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(React5.absoluteFillObject);
  obj.loading = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.content = { flex: 1, width: "100%", alignSelf: "center" };
  obj.mainColumn = { flex: 1 };
  const obj3 = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.centeredLockup = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 };
  obj.animation = { flex: 3 };
  obj.animationInLockup = { flexGrow: 0, flexShrink: 1, width: "100%", aspectRatio: 1.3333333333333333 };
  const obj4 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 };
  obj.body = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj5 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.bodyInLockup = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj6 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  const obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  obj.buttonsContainer = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
  return obj;
});
createStyles = fn(5009);
let obj6 = { orbsIcon: null, spacer: { width: 2 } };
let obj9 = { transform: null };
let items = [{ translateY: 3 }];
obj9.transform = items;
obj6.orbsIcon = obj9;
let closure_20 = createStyles.createStyles(obj6);
let closure_23 = noop.memo(function OrbPlayerIOS(onLoad) {
  const uri = onLoad.uri;
  let flag = onLoad.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = noop.useEffect(() => {
    NativeImageManagerModuleDefault.preload({ uri });
  }, items);
  return closure_14(
    FastImageDefault,
    {
      source: { uri },
      style: { width: "100%", height: "100%" },
      resizeMode: "cover",
      enableAnimation: flag,
      onLoad: onLoad.onLoad,
      usesSmallCache: false,
      fadeDuration: 0,
    },
    "orb-animate-" + flag,
  );
});
let closure_24 = noop.memo(function OrbPlayerAndroid(animate) {
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = noop.useEffect(() => {
    if (flag) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  }, items);
  return closure_1_14(APNGPlayer.APNGPlayer, {
    ref,
    url,
    autoplay: false,
    style: { width: "100%", height: "100%" },
    onLoad,
  });
});
let closure_25 = noop.memo(function AnimatedOrb(animate) {
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  return closure_1_14(React6, {
    style,
    renderToHardwareTextureAndroid: true,
    needsOffscreenAlphaCompositing: true,
    children: closure_1_14(utils_PlatformUtils.isAndroid() ? closure_24 : closure_23, { uri, onLoad, animate: flag }),
  });
});
createStyles = fn(5009);
let closure_26 = createStyles.createStyles({
  animatedOrb: {
    position: "absolute",
    height: "130%",
    width: "130%",
    left: "-15%",
    top: "-15%",
    pointerEvents: "none",
  },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  quest = quest.quest;
  let num;
  importDefault = undefined;
  let tmp = closure_19();
  let stringResult = dependencyMap;
  const size = useWindowDimensionsDefault();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp3 = useSafeAreaInsetsDefault();
  closure_129_2 = tmp3;
  const items = [width, height, ,];
  ({ left: arr[2], right: arr[3] } = tmp3);
  const memo = noop.useMemo(() => {
    const diff = num - dependencyMap.left - dependencyMap.right;
    const bound = Math.min(diff, Math.floor(c1 * closure_2_12));
    return { maxWidthStyle: { maxWidth: bound }, isWidthConstrained: bound < diff };
  }, items);
  const isWidthConstrained = memo.isWidthConstrained;
  const items1 = [AccessibilityStore];
  const stateFromStores = num(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj2 = num(504);
  num = num(9531).useFetchVirtualCurrencyBalance().balance;
  const obj3 = num(9531);
  [tmp8, c1] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items2 = [AppStateStore];
  const stateFromStores1 = num(504).useStateFromStores(items2, () => state.getState());
  const obj4 = num(504);
  const items3 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const stateFromStores2 = num(504).useStateFromStores(items3, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    num2 = tmp5(9680).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp5Result = tmp5(9680);
  }
  const effect = noop.useEffect(() => {
    num(dependencyMap[31]).applyOrientationLock("PORTRAIT");
    return () => {
      const result = num(closure_1_2[31]).restoreDefaultOrientationLock();
    };
  }, []);
  const callback = noop.useCallback(() => {
    _undefined(true);
  }, []);
  let string = noop.useCallback(() => {
    _undefined(dependencyMap[9]).popWithKey(QuestOrbsRewardModal);
    const obj = _undefined(dependencyMap[9]);
    const obj2 = num(dependencyMap[32]);
    obj2.openQuestHome({
      filter: constants.VIRTUAL_CURRENCY,
      fromContent: num(dependencyMap[33]).QuestContent.REWARD_MODAL,
    });
  }, []);
  const obj6 = { style: tmp.root, children: null };
  const obj7 = {
    style: absoluteFill.absoluteFill,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_14(num(14654).OrbsRewardBackground, { style: tmp.background, onReady: callback }),
  };
  const items4 = [closure_14(closure_8, obj7), ,];
  let tmp15Result = !tmp8;
  if (!tmp8) {
    const obj9 = { style: tmp.loading, children: closure_14(closure_6, { animating: true }) };
    tmp15Result = closure_14(closure_8, obj9);
  }
  items4[1] = tmp15Result;
  if (!tmp8) {
    items4[2] = tmp8;
    obj6.children = items4;
    return closure_16(closure_8, obj6);
  } else {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    let tmp15Result4 = isWidthConstrained;
    if (isWidthConstrained) {
      const obj10 = { style: tmp.header, children: closure_14(CancelButton, { alignEnd: true }) };
      tmp15Result4 = closure_14(closure_8, obj10);
    }
    const items5 = [tmp15Result4];
    let obj11 = { style: null, children: null };
    const items6 = [tmp.content, memo.maxWidthStyle];
    obj11.style = items6;
    let tmp15Result5 = !isWidthConstrained;
    if (!isWidthConstrained) {
      const obj12 = { style: tmp.header, children: closure_14(CancelButton, {}) };
      tmp15Result5 = closure_14(closure_8, obj12);
    }
    const items7 = [tmp15Result5, ,];
    let obj13 = { style: isWidthConstrained ? tmp.centeredLockup : tmp.mainColumn, children: null };
    const obj14 = {
      style: isWidthConstrained ? tmp.animationInLockup : tmp.animation,
      accessible: false,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    if (stateFromStores) {
      let tmp15Result6 = closure_14(StaticOrb, {});
    } else {
      const obj15 = { isAppActive: stateFromStores1 === num(1093).AppStates.ACTIVE };
      tmp15Result6 = closure_14(AnimatedOrbContainer, obj15);
    }
    obj14.children = tmp15Result6;
    let items8 = [closure_14(closure_8, obj14)];
    let obj16 = { style: isWidthConstrained ? tmp.bodyInLockup : tmp.body, children: null };
    const obj17 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: null };
    let intl = tmp5(1114).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj18 = { count: num2 };
    obj17.children = intl.format(tmp5(1114).t.FIilK5, obj18);
    const items9 = [closure_14(tmp5(5619).Heading, obj17)];
    let obj19 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: null };
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp5(1114).intl;
      const obj20 = {
        balanceHook() {
          return closure_2_14(OrbsBalance, { balance: num }, "balance");
        },
        profileDecoHook() {
          const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
          const intl = num(dependencyMap[19]).intl;
          obj.children = intl.string(num(dependencyMap[19]).t.pGDUH9);
          return closure_1_14(num(dependencyMap[36]).Text, obj, "profileDeco");
        },
      };
      let formatResult = intl3.format(tmp5(1114).t["2dz2AL"], obj20);
    } else {
      const intl2 = tmp5(1114).intl;
      const obj21 = {
        balanceHook() {
          return closure_2_14(OrbsBalance, { balance: num }, "balance");
        },
      };
      formatResult = intl2.format(tmp5(1114).t.rKHvlX, obj21);
    }
    obj19.children = formatResult;
    obj19 = closure_14(tmp5(5619).Text, obj19);
    items9[1] = obj19;
    obj16.children = items9;
    items8[1] = closure_16(closure_8, obj16);
    obj13.children = items8;
    items7[1] = closure_16(closure_8, obj13);
    const obj22 = { style: tmp.buttonsContainer, children: null };
    items8 = tmp5(5629).Button;
    const obj23 = { onPress: string, variant: "primary-overlay", size: "lg", text: null };
    obj16 = tmp5(1114).intl;
    string = obj16.string;
    stringResult = string(tmp5(1114).t.uJAMFX);
    obj23.text = stringResult;
    tmp = closure_14(items8, obj23);
    obj22.children = tmp;
    obj13 = closure_14(closure_8, obj22);
    items7[2] = obj13;
    obj11.children = items7;
    obj11 = closure_16(closure_8, obj11);
    items5[1] = obj11;
    rect.children = items5;
    closure_16(tmp5(7286).SafeAreaPaddingView, rect);
  }
  const obj5 = num(504);
  const obj8 = { style: tmp.background, onReady: callback };
}
export function openQuestOrbsRewardModal(quest) {
  ModalActionCreatorsDefault.pushLazy(
    asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[10], paths.paths);
      return value.default;
    }),
    { quest: quest.quest },
    QuestOrbsRewardModal,
  );
}
