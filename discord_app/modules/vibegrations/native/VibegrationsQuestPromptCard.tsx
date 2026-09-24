// discord_app/modules/vibegrations/native/VibegrationsQuestPromptCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import VibegrationsQuestPrompt from "../lib/VibegrationsQuestPrompt.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestStore from "../../quests/QuestStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function sameDeliveredQuestState(quest, quest2) {
  return (
    quest.quest === quest2.quest && quest.overridden === quest2.overridden && quest.gatesClosed === quest2.gatesClosed
  );
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { root: null, opaque: null, body: null, header: null, tile: null, copy: null, actions: null, action: null };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
};
obj2.root = rect;
obj2.opaque = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
obj2.body = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
obj2.tile = size;
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
let closure_15 = {
  code: "function VibegrationsQuestPromptCardTsx1(finished){const{runOnJS,unmount}=this.__closure;if(finished===true)runOnJS(unmount)();}",
};
const __initData = {
  code: "function VibegrationsQuestPromptCardTsx2(){const{progress}=this.__closure;return{opacity:progress.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsQuestPromptCard.tsx");

export default function VibegrationsQuestPromptCard(open) {
  open = open.open;
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_13();
  closure_129_0 = undefined;
  const adDecisionForPlacement = require("useQuestForPlacement").useAdDecisionForPlacement(
    require("QuestTypes").AdPlacement.MOBILE_HOME_DOCK_AREA,
  );
  let obj = require("useQuestForPlacement");
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  closure_129_0 = deliveredQuestId;
  let obj2 = require("AdDecisionUtils");
  const items = [QuestStore];
  const items1 = [deliveredQuestId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const questPreviewOverride = QuestStore.getQuestPreviewOverride(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      let tmp4 = null;
      if (null != c0) {
        const quests = QuestStore.quests;
        value = quests.get(tmp3);
        if (value == null) {
          value = null;
        }
        tmp4 = value;
      }
      let tmp6 = questPreviewOverride;
      if (questPreviewOverride == null) {
        tmp6 = tmp4;
      }
      return {
        quest: tmp6,
        overridden: null != questPreviewOverride,
        gatesClosed: QuestStore.isQuestAccessSuspended || null != QuestStore.questEnrollmentBlockedUntil,
      };
    },
    items1,
    sameDeliveredQuestState,
  );
  const quest = stateFromStores.quest;
  let watchableQuestResult = null;
  if (null != quest) {
    watchableQuestResult = null;
    if (tmp2Result8.hasWatchVideoOnMobileTasks(quest)) {
      const obj3 = { overridden: tmp8, gatesClosed: tmp9 };
      watchableQuestResult = tmp2(17150).watchableQuest(quest, obj3);
      const tmp2Result9 = tmp2(17150);
    }
    tmp2Result8 = tmp2(8047);
  }
  _require = watchableQuestResult;
  const tmp2Result = require("initialize");
  [tmp13, c1] = noop.useState(require("VibegrationsQuestPrompt").isQuestPromptDismissed);
  const tmp12 = _slicedToArray(noop.useState(require("VibegrationsQuestPrompt").isQuestPromptDismissed), 2);
  const items2 = [ThemeStore];
  let tmp15 = open;
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => state.getState().theme);
  if (open) {
    tmp15 = !tmp13;
  }
  if (tmp15) {
    tmp15 = null != watchableQuestResult;
  }
  closure_130_0 = tmp15;
  const tmp2Result10 = require("initialize");
  [tmp17, tmp18] = noop.useState(tmp15);
  closure_130_1 = tmp18;
  let tmp19 = tmp15;
  if (tmp15) {
    tmp19 = !tmp17;
  }
  if (tmp19) {
    tmp18(true);
  }
  const tmp11Result = _slicedToArray(noop.useState(tmp15), 2);
  let num = 0;
  if (tmp15) {
    num = 1;
  }
  const sharedValue = require("ReanimatedRexport").useSharedValue(num);
  closure_130_2 = sharedValue;
  const callback = noop.useCallback(() => _undefined(false), []);
  closure_130_3 = callback;
  const items3 = [sharedValue, callback, tmp15];
  const effect = noop.useEffect(() => {
    const tmp2 = timing;
    const withTiming = tmp2.withTiming;
    if (c0) {
      const result = set(withTiming(1, { duration: 250 }));
    } else {
      const fn = function s(arg0) {
        if (true === arg0) {
          c0(dependencyMap[16]).runOnJS(unmount)();
          const obj = c0(dependencyMap[16]);
        }
      };
      let obj = { runOnJS: ReanimatedRexport.runOnJS, unmount };
      fn.__closure = obj;
      fn.__workletHash = 15141110690551;
      fn.__initData = __initData;
      const result1 = set(withTiming(0, { duration: 150 }, "respect-motion-settings", fn));
    }
  }, items3);
  const tmp2Result11 = require("ReanimatedRexport");
  let fn = function c() {
    return { opacity: dependencyMap.get() };
  };
  fn.__closure = { progress: sharedValue };
  fn.__workletHash = 14712862852075;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const tmp11Result2 = _slicedToArray(noop.useState(watchableQuestResult), 2);
  const first = tmp11Result2[0];
  let tmp27 = null != watchableQuestResult;
  if (tmp27) {
    tmp27 = watchableQuestResult !== first;
  }
  if (tmp27) {
    tmp11Result2[1](watchableQuestResult);
  }
  let tmp29 = watchableQuestResult;
  if (watchableQuestResult == null) {
    tmp29 = first;
  }
  const items4 = [watchableQuestResult];
  const callback1 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              if (null != tmp2) {
                const QUEST_BAR_MOBILE = tmp2(5752).QuestContent.QUEST_BAR_MOBILE;
                closure_128_0 = QUEST_BAR_MOBILE;
                const userStatus = tmp2.userStatus;
                let enrolledAt;
                if (userStatus != null) {
                  enrolledAt = userStatus.enrolledAt;
                }
                if (null == enrolledAt) {
                  const obj5 = {
                    questContent: tmp2(5752).QuestContent.QUEST_BAR_MOBILE,
                    questContentCTA: tmp2(8051).QuestContentCTA.START_QUEST,
                    sourceQuestContent: QUEST_BAR_MOBILE,
                  };
                  dependencyMap = 1;
                  c3 = 1;
                  const obj6 = { value: tmp2(11628).enrollInQuest(tmp2.id, obj5), done: false };
                  return obj6;
                } else {
                  const obj7 = { questId: tmp2.id, sourceQuestContent: QUEST_BAR_MOBILE };
                  tmp5(15460)(obj7);
                }
              }
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value.type === tmp2(11628).QuestEnrollmentResultType.SUCCESS) {
              const obj8 = { questId: closure_129_0.id, sourceQuestContent: closure_128_0 };
              tmp5(15460)(obj8);
            }
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp21) {
          c3 = tmp;
          throw tmp21;
        }
      }
    }),
    items4,
  );
  if (tmp17) {
    if (null != tmp29) {
      const tmp2Result13 = tmp2(11634);
      const url = tmp2Result13.getQuestAsset(
        tmp29,
        tmp2(11634).QuestAssetType.GAME_TILE,
        tmp2(4533).isThemeDark(stateFromStores1) ? ThemeTypes.DARK : ThemeTypes.LIGHT,
      ).url;
      let obj4 = { style: null, pointerEvents: null, children: null };
      const items5 = [tmp.root, animatedStyle];
      obj4.style = items5;
      let str = "none";
      if (open) {
        str = "auto";
      }
      obj4.pointerEvents = str;
      let obj5 = { style: tmp.opaque, children: null };
      let obj6 = { style: tmp.body, children: null };
      let obj8 = { style: tmp.header, children: null };
      let tmp32Result = null;
      if ("" !== url) {
        const obj9 = { accessibilityIgnoresInvertColors: true, source: null, style: null };
        const obj10 = { uri: url };
        obj9.source = obj10;
        obj9.style = tmp.tile;
        tmp32Result = closure_11(closure_6, obj9);
      }
      const obj11 = { variant: "primary", shadow: "high", children: null };
      const items6 = [tmp32Result];
      const obj12 = { style: tmp.copy, children: null };
      const obj13 = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl = tmp2(1115).intl;
      obj13.children = intl.string(_modDef3714["09LJ+I"]);
      const items7 = [closure_11(tmp2(4825).Text, obj13)];
      const obj14 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, children: null };
      const intl2 = tmp2(1115).intl;
      const obj15 = { questName: tmp29.config.messages.questName };
      obj14.children = intl2.format(tmp2(1115).t.EQa7os, obj15);
      items7[1] = closure_11(tmp2(4825).Text, obj14);
      obj12.children = items7;
      items6[1] = closure_12(closure_7, obj12);
      obj8.children = items6;
      const items8 = [closure_12(closure_7, obj8)];
      const obj16 = { style: tmp.actions, children: null };
      const obj17 = { style: tmp.action, children: null };
      const obj18 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(1115).intl;
      obj18.text = intl3.string(_modDef3714.egO5fO);
      obj18.onPress = tmp31;
      obj17.children = closure_11(tmp2(5273).Button, obj18);
      const items9 = [closure_11(closure_7, obj17)];
      const obj19 = { style: tmp.action, children: null };
      const obj20 = { variant: "primary", size: "sm", text: null, onPress: null };
      const intl4 = tmp2(1115).intl;
      obj20.text = intl4.string(tmp2(1115).t.kUQLMJ);
      obj20.onPress = callback1;
      obj19.children = closure_11(tmp2(5273).Button, obj20);
      items9[1] = closure_11(closure_7, obj19);
      obj16.children = items9;
      items8[1] = closure_12(closure_7, obj16);
      obj6.children = items8;
      obj11.children = closure_12(closure_7, obj6);
      obj5.children = closure_11(tmp2(5912).Card, obj11);
      obj4.children = closure_11(closure_7, obj5);
      return closure_11(ReanimatedRexportDefault.View, obj4);
    }
  }
  return null;
}
