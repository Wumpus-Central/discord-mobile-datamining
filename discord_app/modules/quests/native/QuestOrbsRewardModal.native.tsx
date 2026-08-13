// discord_app/modules/quests/native/QuestOrbsRewardModal.native.tsx
import openRewardClaimBottomSheet from "openRewardClaimBottomSheet";
import mergeGuildAvatar from "mergeGuildAvatar";
import importAllResult from "useAPNGPlayerControls";
import get_ActivityIndicator from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import closure_10 from "mergeGuildAvatar";
import getState from "getState";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import jsxProd from "metadata";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../_runtime/05317_Background.js";
import { metadata } from "../../../../discord_assets/assets/orbs/quest_reward_mobile_bg_static.png.js";
import { metadata } from "../../../../discord_assets/assets/orbs/quest_reward_mobile_bg.mp4.js";
import { metadata } from "../../../../discord_assets/assets/orbs/static_idle_orb.png.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { PlatformTypes } from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { VideoComponent } from "../../../components_native/common/Video.tsx";
import { OrbsIcon } from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let metroImportAll;
let require = arg1;
function OrbsBalance(balance) {
  const tmp = callback7();
  let obj = { children: null };
  obj = { size: "xs", color: null, style: null };
  obj[1] = Themes.colors.WHITE;
  obj[2] = tmp.orbsIcon;
  const items = [callback3(OrbsIcon.OrbsIcon, obj), , ];
  obj = { style: tmp.spacer };
  items[1] = callback3(closure_8, obj);
  items[2] = balance.balance;
  obj[0] = items;
  return callback4(closure_14, obj);
}
function CancelButton() {
  const tmp = callback5();
  const require = tmp;
  const obj = {
    onPress() {
      callback(table[9]).popWithKey(closure_16);
    },
    backImage() {
      const style = [tmp.closeButtonIcon];
      return outer1_13(tmp(outer1_2[16]).XSmallIcon, { size: "lg", style });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[4] = tmp.closeButton;
  return callback3(Background.HeaderBackButton, obj);
}
function StaticOrb() {
  let obj = { style: { width: "100%", height: "100%" }, children: null };
  obj = { source: null, style: null, fade: false };
  obj = { uri: null };
  const tmp = callback8();
  obj[0] = metadata;
  obj[0] = obj;
  obj[1] = tmp.animatedOrb;
  obj[1] = callback3(preload, obj);
  return callback3(closure_8, obj);
}
function AnimatedOrbContainer(isAppActive) {
  let c4;
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  let first;
  let importDefault;
  let first1;
  let callback;
  c4 = undefined;
  const tmp = callback8();
  const tmp2 = callback(importAllResult.useState(false), 2);
  first = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  first1 = tmp4[0];
  callback = tmp4[1];
  [tmp7, c4] = callback(importAllResult.useState(true), 2);
  callback = importAllResult.useCallback(() => {
    callback(true);
  }, []);
  const items = [first, first1];
  const callback1 = importAllResult.useCallback(() => {
    callback2(true);
  }, []);
  const effect = importAllResult.useEffect(() => {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          callback(false);
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
    obj = { style: null };
    obj[0] = { height: "100%" };
    tmp13 = callback3(tmp12, obj);
  }
  const items1 = [tmp13, , ];
  obj = { uri: importDefault(first1[25]), style: null, onLoad: null, animate: null };
  const items2 = [tmp.animatedOrb, ];
  let obj1 = tmp15Result;
  if (!tmp15Result) {
    obj1 = !first1;
  }
  if (obj1) {
    obj1 = { opacity: 0 };
  }
  items2[1] = obj1;
  obj[1] = items2;
  obj[2] = callback1;
  let tmp19 = !tmp15Result;
  if (!tmp15Result) {
    tmp19 = isAppActive;
  }
  obj[3] = tmp19;
  items1[1] = callback3(closure_24, obj);
  if (tmp15Result) {
    const obj2 = { uri: null, style: null, onLoad: null, animate: null };
    obj2[0] = importDefault(first1[26]);
    const items3 = [tmp.animatedOrb];
    obj2[1] = items3;
    obj2[2] = callback;
    obj2[3] = isAppActive;
    tmp15Result = tmp15(tmp16, obj2);
  }
  items1[2] = tmp15Result;
  obj[1] = items1;
  return closure_15(closure_8, obj);
}
let c5 = importAllResult;
({ ActivityIndicator: closure_6, StyleSheet: error, View: metroImportAll } = get_ActivityIndicator);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let obj = { closeButton: null, closeButtonIcon: null };
obj = { alignSelf: "flex-start", marginHorizontal: require("Themes").space.PX_16, zIndex: 999 };
obj[0] = obj;
createCacheKey = { tintColor: require("Themes").colors.WHITE };
obj[1] = createCacheKey;
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = createCacheKey.createStyles(() => {
  let obj = { root: null, background: null, loading: null, header: null, main: null, animation: null, body: null, title: null, buttonsContainer: null };
  obj = { flex: 1, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  obj[1] = closure_7.absoluteFillObject;
  obj = { justifyContent: "center", alignItems: "center", backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(closure_7.absoluteFillObject);
  obj[2] = obj;
  obj[3] = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj[4] = { flex: 2 };
  obj[5] = { flex: 3 };
  obj[6] = { flex: 2, flexDirection: "column", justifyContent: "center", gap: Themes.space.PX_16 };
  const obj1 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: Themes.space.PX_16 };
  obj[7] = { textAlign: "center", marginHorizontal: Themes.space.PX_32 };
  const obj2 = { textAlign: "center", marginHorizontal: Themes.space.PX_32 };
  obj[8] = { padding: Themes.space.PX_24, gap: Themes.space.PX_16 };
  return obj;
});
let items = [{ translateY: 3 }];
let closure_19 = createCacheKey.createStyles({ orbsIcon: { transform: items }, spacer: { width: 2 } });
let closure_22 = importAllResult.memo((onLoad) => {
  const uri = onLoad.uri;
  let enableAnimation = onLoad.animate;
  if (enableAnimation === undefined) {
    enableAnimation = true;
  }
  const items = [uri];
  const effect = importAllResult.useEffect(() => {
    outer1_1(outer1_2[18]).preload(uri);
  }, items);
  return callback3(preload, { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation, onLoad: onLoad.onLoad, usesSmallCache: false, fade: false }, "orb-animate-" + enableAnimation);
});
let closure_23 = importAllResult.memo((animate) => {
  let onLoad;
  let uri;
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  let aPNGPlayerControls;
  const ref = importAllResult.useRef(null);
  aPNGPlayerControls = flag(9436).useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      obj.play();
    } else {
      obj.stop();
    }
  }, items);
  return callback3(flag(9436).APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_24 = importAllResult.memo((animate) => {
  let onLoad;
  let style;
  let uri;
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  let obj = PlatformTypes;
  obj = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: callback3(obj.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }) };
  return callback3(closure_8, obj);
});
let closure_25 = importAllResult.memo((arg0) => {
  let isAppActive;
  let onAnimatedBgLoad;
  let onStaticBgLoad;
  let style;
  let useReducedMotion;
  ({ useReducedMotion, style } = arg0);
  ({ onStaticBgLoad, onAnimatedBgLoad, isAppActive } = arg0);
  let obj = { source: null, style: null, resizeMode: "cover", onLoad: null };
  obj = { uri: null };
  obj[0] = metadata;
  obj[0] = obj;
  obj[1] = style;
  obj[3] = onStaticBgLoad;
  const children = [callback3(preload, obj), ];
  let tmp2Result = !useReducedMotion;
  if (!useReducedMotion) {
    tmp2Result = isAppActive;
  }
  if (tmp2Result) {
    obj = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj1 = { uri: null };
    obj1[0] = metadata;
    obj[0] = obj1;
    obj[1] = style;
    obj[3] = onAnimatedBgLoad;
    tmp2Result = callback3(VideoComponent.VideoComponent, obj);
  }
  children[1] = tmp2Result;
  return closure_15(importAllResult.Fragment, { children });
});
let closure_26 = createCacheKey.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
let result = require("noop").fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  let c1;
  let c2;
  let tmp6;
  let tmp8;
  quest = quest.quest;
  let num;
  c1 = undefined;
  let dependencyMap;
  let tmp = callback6();
  let stringResult = dependencyMap;
  let obj = num(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = num(9472);
  num = obj1.useFetchVirtualCurrencyBalance().balance;
  let obj2 = importAllResult;
  [tmp6, c1] = callback(importAllResult.useState(false), 2);
  const tmp5 = callback(importAllResult.useState(false), 2);
  [tmp8, c2] = callback(importAllResult.useState(false), 2);
  let obj3 = num(589);
  const items1 = [getState];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => state.getState());
  let obj4 = num(589);
  const items2 = [closure_10];
  const userStatus = quest.userStatus;
  let num2;
  const stateFromStores2 = obj4.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    num2 = tmp2(10436).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp2Result = tmp2(10436);
  }
  const tmp11 = stateFromStores1 === num(691).AppStates.ACTIVE;
  const effect = obj2.useEffect(() => {
    num(_undefined2[31]).applyOrientationLock("PORTRAIT");
    return () => {
      const result = callback(table[31]).restoreDefaultOrientationLock();
    };
  }, []);
  callback = obj2.useCallback(() => {
    _undefined(true);
  }, []);
  const callback1 = obj2.useCallback(() => {
    _undefined2(true);
  }, []);
  let string = obj2.useCallback(() => {
    let obj = _undefined(_undefined2[9]);
    obj.popWithKey(closure_16);
    obj = { filter: constants.VIRTUAL_CURRENCY, fromContent: num(_undefined2[33]).QuestContent.REWARD_MODAL };
    num(_undefined2[32]).openQuestHome(obj);
  }, []);
  obj = { style: tmp.root, children: null };
  obj = { style: closure_7.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: callback3(closure_25, obj1) };
  obj1 = { useReducedMotion: stateFromStores, style: tmp.background, onStaticBgLoad: callback, onAnimatedBgLoad: callback1, isAppActive: tmp11 };
  const items3 = [callback3(closure_8, obj), , ];
  let tmp17Result = !tmp6;
  if (!tmp6) {
    let tmp19 = stateFromStores;
    if (!stateFromStores) {
      tmp19 = !tmp8;
    }
    tmp17Result = tmp19;
  }
  if (tmp17Result) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.loading;
    obj2[1] = tmp17(closure_6, { animating: true });
    tmp17Result = tmp17(tmp16, obj2);
  }
  items3[1] = tmp17Result;
  if (!tmp6) {
    let tmp21 = !stateFromStores;
    if (!stateFromStores) {
      tmp21 = tmp8;
    }
  }
  if (!tmp6) {
    items3[2] = tmp6;
    obj[1] = items3;
    return tmp15(tmp16, obj);
  } else {
    obj3 = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const items4 = [tmp.main];
    obj3[0] = items4;
    obj4 = { style: null, children: null };
    obj4[0] = tmp.header;
    obj4[1] = tmp17(CancelButton, {});
    const items5 = [tmp17(tmp16, obj4), , , ];
    const obj5 = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj5[0] = tmp.animation;
    if (stateFromStores) {
      tmp17Result = tmp17(StaticOrb, {});
    } else {
      const obj6 = { isAppActive: null };
      obj6[0] = tmp11;
      tmp17Result = tmp17(AnimatedOrbContainer, obj6);
    }
    obj5[4] = tmp17Result;
    items5[1] = tmp17(tmp16, obj5);
    let obj7 = { style: null, children: null };
    obj7[0] = tmp.body;
    const obj8 = { variant: "heading-xl/bold", color: "text-overlay-light", style: null, children: null };
    obj8[2] = tmp.title;
    let intl = tmp2(1236).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj9 = { count: null };
    obj9[0] = num2;
    obj8[3] = intl.format(tmp2(1236).t.FIilK5, obj9);
    let items6 = [tmp17(tmp2(4338).Heading, obj8), ];
    let obj10 = { variant: "text-md/normal", color: "text-overlay-light", style: null, children: null };
    obj10[2] = tmp.title;
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp2(1236).intl;
      const obj11 = { balanceHook: null, profileDecoHook: null };
      obj11[0] = function balanceHook() {
        return outer1_13(outer1_20, { balance: num }, "balance");
      };
      obj11[1] = function profileDecoHook() {
        const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
        const intl = num(_undefined2[17]).intl;
        obj[2] = intl.string(num(_undefined2[17]).t.pGDUH9);
        return callback(num(_undefined2[35]).Text, obj, "profileDeco");
      };
      let formatResult = intl3.format(tmp2(1236).t["2dz2AL"], obj11);
    } else {
      const intl2 = tmp2(1236).intl;
      const obj12 = { balanceHook: null };
      obj12[0] = function balanceHook() {
        return outer1_13(outer1_20, { balance: num }, "balance");
      };
      formatResult = intl2.format(tmp2(1236).t.rKHvlX, obj12);
    }
    obj10[3] = formatResult;
    items6[1] = tmp17(tmp2(4338).Text, obj10);
    obj7[1] = items6;
    items5[2] = tmp15(tmp16, obj7);
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.buttonsContainer;
    items6 = tmp2(4755).Button;
    const obj14 = { onPress: null, variant: "primary", size: "lg", text: null };
    obj14[0] = string;
    obj10 = tmp2(1236).intl;
    string = obj10.string;
    stringResult = string(tmp2(1236).t.uJAMFX);
    obj14[3] = stringResult;
    tmp = tmp17(items6, obj14);
    obj13[1] = tmp;
    obj7 = tmp17(tmp16, obj13);
    items5[3] = obj7;
    obj3[5] = items5;
    tmp15(tmp2(5368).SafeAreaPaddingView, obj3);
  }
};
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  ModalActionCreators.pushLazy(callback2(function*() {
    yield v0(outer1_2[11])(outer1_2[10], outer1_2.paths);
    return arg1.default;
  }), { quest: quest.quest }, QuestOrbsRewardModal);
};