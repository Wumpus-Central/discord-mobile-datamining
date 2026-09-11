// === Module 11872: QuestOrbsRewardModal ===

// Module 11872 (QuestOrbsRewardModal)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import FastImageDefault from "FastImage" /* 5638 */;
import XSmallIcon from "XSmallIcon" /* 5731 */;
import APNGPlayer from "APNGPlayer" /* 8900 */;
import OrbsIcon from "OrbsIcon" /* 8927 */;
import _modDef11873 from "module_11873" /* 11873 */;
import _modDef11874 from "module_11874" /* 11874 */;
import _modDef11875 from "module_11875" /* 11875 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
function OrbsBalance(balance) {
  const tmp = closure_19();
  let obj = { children: null };
  obj = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon };
  const items = [map1(OrbsIcon.OrbsIcon, obj), , ];
  obj = { style: tmp.spacer };
  items[1] = map1(React6, obj);
  items[2] = balance.balance;
  obj.children = items;
  return __initData(closure_1_14, obj);
}
function CancelButton() {
  const tmp = closure_17();
  _require = tmp;
  let obj = {
    onPress() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    },
    backImage() {
      const obj = { size: "lg", style: null };
      const items = [closeButtonIcon.closeButtonIcon];
      obj.style = items;
      return map1(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj.style = tmp.closeButton;
  return closure_13(require("module_5682").HeaderBackButton, obj);
}
function StaticOrb() {
  let obj = { style: { width: "100%", height: "100%" }, children: null };
  obj = { source: null, style: null, fade: false };
  obj = { uri: null };
  const tmp = closure_25();
  obj.uri = _modDef11873;
  obj.source = obj;
  obj.style = tmp.animatedOrb;
  obj.children = map1(FastImageDefault, obj);
  return map1(React6, obj);
}
function AnimatedOrbContainer(isAppActive) {
  isAppActive = isAppActive.isAppActive;
  c4 = undefined;
  const tmp = closure_25();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_3 = tmp4[1];
  [tmp7, c4] = _slicedToArray(noop.useState(true), 2);
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
  let obj = { style: { width: "100%", height: "100%" }, children: null };
  let tmp13 = !first;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    obj = { style: { height: "100%" } };
    tmp13 = map1(React6, obj);
  }
  const items1 = [tmp13, , ];
  obj = { uri: _modDef11874, style: null, onLoad: null, animate: null };
  const items2 = [tmp.animatedOrb, ];
  let obj1 = tmp15Result;
  if (!tmp15Result) {
    obj1 = !first1;
  }
  if (obj1) {
    obj1 = { opacity: 0 };
  }
  items2[1] = obj1;
  obj.style = items2;
  obj.onLoad = callback1;
  let tmp19 = !tmp15Result;
  if (!tmp15Result) {
    tmp19 = isAppActive;
  }
  obj.animate = tmp19;
  items1[1] = map1(closure_24, obj);
  if (tmp15Result) {
    const obj2 = { uri: _modDef11875, style: null, onLoad: null, animate: null };
    const items3 = [tmp.animatedOrb];
    obj2.style = items3;
    obj2.onLoad = callback;
    obj2.animate = isAppActive;
    tmp15Result = map1(closure_24, obj2);
  }
  items1[2] = tmp15Result;
  obj.children = items1;
  return __initData(React6, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const RewardFilterTypes = fn(5495).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
fn(4606);
let obj = { closeButton: null, closeButtonIcon: null };
obj = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButton = obj;
let createStyles = { tintColor: nativeDefault.colors.WHITE };
obj.closeButtonIcon = createStyles;
let closure_17 = createStyles.createStyles(obj);
createStyles = fn(4606);
let closure_18 = createStyles.createStyles(() => {
  let obj = { root: null, background: null, loading: null, header: null, main: null, animation: null, body: null, title: null, buttonsContainer: null };
  obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj.background = React5.absoluteFillObject;
  obj = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(React5.absoluteFillObject);
  obj.loading = obj;
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.animation = { flex: 3 };
  obj.body = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj1 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  const obj2 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  obj.buttonsContainer = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
  return obj;
});
createStyles = fn(4606);
let obj2 = { orbsIcon: null, spacer: { width: 2 } };
let obj3 = { transform: null };
let items = [{ translateY: 3 }];
obj3.transform = items;
obj2.orbsIcon = obj3;
let closure_19 = createStyles.createStyles(obj2);
let closure_22 = noop.memo((onLoad) => {
  const uri = onLoad.uri;
  let flag = onLoad.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = noop.useEffect(() => {
    FastImageDefault.preload(uri);
  }, items);
  return closure_13(FastImageDefault, { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad: onLoad.onLoad, usesSmallCache: false, fade: false }, "orb-animate-" + flag);
});
let closure_23 = noop.memo((animate) => {
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
  return map1(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_24 = noop.memo((animate) => {
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  let obj = utils_PlatformUtils;
  obj = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: map1(obj.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }) };
  return map1(React6, obj);
});
createStyles = fn(4606);
let closure_25 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  quest = quest.quest;
  let num;
  c1 = undefined;
  let tmp = closure_18();
  let stringResult = dependencyMap;
  let obj = num(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = num(8940);
  num = obj1.useFetchVirtualCurrencyBalance().balance;
  let obj2 = noop;
  [tmp6, c1] = _slicedToArray(noop.useState(false), 2);
  let obj3 = num(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => state.getState());
  let obj4 = num(504);
  const items2 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const stateFromStores2 = obj4.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    num2 = tmp2(11384).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp2Result = tmp2(11384);
  }
  const effect = obj2.useEffect(() => {
    num(11876).applyOrientationLock("PORTRAIT");
    return () => {
      const result = num(dependencyMap[28]).restoreDefaultOrientationLock();
    };
  }, []);
  const callback = obj2.useCallback(() => {
    _undefined(true);
  }, []);
  let string = obj2.useCallback(() => {
    let obj = _undefined(4809);
    obj.popWithKey(QuestOrbsRewardModal);
    obj = { filter: constants.VIRTUAL_CURRENCY, fromContent: num(5498).QuestContent.REWARD_MODAL };
    num(11860).openQuestHome(obj);
  }, []);
  obj = { style: tmp.root, children: null };
  obj = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  obj1 = { style: tmp.background, onReady: callback };
  obj.children = closure_13(num(11877).OrbsRewardBackground, obj1);
  const items3 = [closure_13(closure_8, obj), , ];
  let tmp13Result = !tmp6;
  if (!tmp6) {
    obj2 = { style: tmp.loading, children: closure_13(closure_6, { animating: true }) };
    tmp13Result = closure_13(closure_8, obj2);
  }
  items3[1] = tmp13Result;
  if (!tmp6) {
    items3[2] = tmp6;
    obj.children = items3;
    return closure_15(closure_8, obj);
  } else {
    const rect = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const items4 = [tmp.main];
    rect.style = items4;
    obj3 = { style: tmp.header, children: closure_13(CancelButton, {}) };
    const items5 = [closure_13(closure_8, obj3), , , ];
    obj4 = { style: tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    if (stateFromStores) {
      tmp13Result = closure_13(StaticOrb, {});
    } else {
      const obj5 = { isAppActive: stateFromStores1 === num(1093).AppStates.ACTIVE };
      tmp13Result = closure_13(AnimatedOrbContainer, obj5);
    }
    obj4.children = tmp13Result;
    items5[1] = closure_13(closure_8, obj4);
    let obj6 = { style: tmp.body, children: null };
    const obj7 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: null };
    let intl = tmp2(1114).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj8 = { count: num2 };
    obj7.children = intl.format(tmp2(1114).t.FIilK5, obj8);
    let items6 = [closure_13(tmp2(4602).Heading, obj7), ];
    let obj9 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: null };
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp2(1114).intl;
      const obj10 = {
        balanceHook() {
              return map1(OrbsBalance, { balance: num }, "balance");
            },
        profileDecoHook() {
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
              const intl = num(1114).intl;
              obj.children = intl.string(num(1114).t.pGDUH9);
              return closure_1_13(num(4602).Text, obj, "profileDeco");
            }
      };
      let formatResult = intl3.format(tmp2(1114).t["2dz2AL"], obj10);
    } else {
      const intl2 = tmp2(1114).intl;
      const obj11 = {
        balanceHook() {
              return map1(OrbsBalance, { balance: num }, "balance");
            }
      };
      formatResult = intl2.format(tmp2(1114).t.rKHvlX, obj11);
    }
    obj9.children = formatResult;
    items6[1] = closure_13(tmp2(4602).Text, obj9);
    obj6.children = items6;
    items5[2] = closure_15(closure_8, obj6);
    const obj12 = { style: tmp.buttonsContainer, children: null };
    items6 = tmp2(5026).Button;
    const obj13 = { onPress: string, variant: "primary", size: "lg", text: null };
    obj9 = tmp2(1114).intl;
    string = obj9.string;
    stringResult = string(tmp2(1114).t.uJAMFX);
    obj13.text = stringResult;
    tmp = closure_13(items6, obj13);
    obj12.children = tmp;
    obj6 = closure_13(closure_8, obj12);
    items5[3] = obj6;
    rect.children = items5;
    closure_15(tmp2(7196).SafeAreaPaddingView, rect);
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
};
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[10], paths.paths);
    return value.default;
  }), { quest: quest.quest }, QuestOrbsRewardModal);
};