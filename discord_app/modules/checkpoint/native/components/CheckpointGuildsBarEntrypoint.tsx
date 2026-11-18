// === Module 17972: CheckpointGuildsBarEntrypoint ===

// Module 17972 (CheckpointGuildsBarEntrypoint)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3339 from "module_3339" /* 3339 */;
import LinearGradientDefault from "LinearGradient" /* 5378 */;
import Text_Text from "Text/Text" /* 5414 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 17926 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17938 */;
import _modDef17975 from "module_17975" /* 17975 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17917 */;

const require = globalThis.__r;

require = fn;
function ExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3339["8hclXY"]);
  obj.title = closure_1_11(Text_Text.Text, obj2);
  return closure_1_11(HomeDrawerShared.HomeDrawerSharedItem, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(5877).CHECKPOINT_PRIMARY;
const ContentDismissActionType = fn(4669).ContentDismissActionType;
const GUILD_ITEM_INSET_LEFT = fn(17914).GUILD_ITEM_INSET_LEFT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const colors = ["#000000", "rgba(0, 0, 0, 0.5)", "#000000"];
const start = { x: 1, y: 1 };
const end = { x: 0, y: 0 };
let closure_16 = { code: "(function CheckpointGuildsBarEntrypointTsx1(){let[scrollPosition]=this.__closure;return scrollPosition.get();})" };
let closure_17 = { code: "(function CheckpointGuildsBarEntrypointTsx2(current){let[dismissed,initialScrollPosition,DISMISS_SCROLL_DISTANCE,scheduleOnRN,onScroll]=this.__closure;if(dismissed.get())return;const initial=initialScrollPosition.get();if(initial==null){initialScrollPosition.set(current);return;}if(Math.abs(current-initial)>=DISMISS_SCROLL_DISTANCE){dismissed.set(true);scheduleOnRN(onScroll);}})" };
const createStyles = fn(4823);
let closure_18 = createStyles.createStyles((width) => {
  const obj = { container: { position: "relative" }, itemShape: { backgroundColor: CHECKPOINT_PRIMARY }, coachmarkAnchor: null };
  const size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: GUILD_ITEM_INSET_LEFT, width, height: width };
  obj.coachmarkAnchor = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildsBarEntrypoint.tsx");

export default noop.memo(function CheckpointGuildsBarEntrypoint(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  _require = markAsDismissed;
  asyncGeneratorStep = undefined;
  let isModalOpen;
  let coachmark;
  const tmp4 = closure_18(require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  importDefault = tmp4;
  let obj = require("useToken");
  const guildsBarAnimatedWrapperStyles = require("GuildsBarAnimatedItemWrapper").useGuildsBarAnimatedWrapperStyles();
  dependencyMap = guildsBarAnimatedWrapperStyles;
  items = [guildsBarAnimatedWrapperStyles, tmp4.itemShape];
  const memo = isModalOpen.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined3);
    const merged1 = Object.assign(_undefined3.itemShape);
    const merged2 = Object.assign(_undefined2.itemShape);
    obj.itemShape = {};
    return obj;
  }, items);
  const items1 = [markAsDismissed];
  const callback = isModalOpen.useCallback(asyncGeneratorStep(async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: tmp4(12422).openCheckpoint(tmp4(17973).CHECKPOINT_GUILDS_BAR_SOURCE), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_0(constants.TAKE_ACTION);
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        dependencyMap = tmp;
        throw tmp11;
      }
    }
  }), items1);
  asyncGeneratorStep = callback;
  const items2 = [callback];
  const items3 = [markAsDismissed];
  const memo1 = isModalOpen.useMemo(() => ({ onPress: _undefined4 }), items2);
  const callback1 = isModalOpen.useCallback(() => _undefined(ContentDismissActionType.USER_DISMISS), items3);
  const obj2 = require("GuildsBarAnimatedItemWrapper");
  const tmp10 = GuildsBarDnDStore((scrollPosition) => scrollPosition.scrollPosition);
  const sharedValue = require("module_1655").useSharedValue(null);
  let obj4 = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(false);
  let obj5 = require("module_1655");
  const items4 = [closure_16, tmp10];
  _require = undefined;
  [tmp13, tmp14] = items4;
  class CheckpointGuildsBarEntrypointTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items5 = [tmp14];
  CheckpointGuildsBarEntrypointTsx1.__closure = items5;
  CheckpointGuildsBarEntrypointTsx1.__workletHash = 1024720770114;
  CheckpointGuildsBarEntrypointTsx1.__initData = tmp13;
  const items6 = [closure_17, sharedValue1, sharedValue, 8, require("module_1708").scheduleOnRN, callback1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  isModalOpen = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items6;
  class CheckpointGuildsBarEntrypointTsx2 {
    constructor(arg0) {
      obj = closure_0;
      if (!closure_0.get()) {
        tmp = markAsDismissed;
        obj2 = closure_1;
        value = closure_1.get();
        tmp3 = null;
        if (null != value) {
          tmp5 = globalThis;
          _Math = Math;
          tmp6 = closure_2;
          if (Math.abs(markAsDismissed - value) >= closure_2) {
            flag = true;
            result = obj.set(true);
            tmp8 = closure_3;
            tmp9 = closure_4;
            tmp10 = closure_3(closure_4);
          }
        } else {
          result1 = obj2.set(markAsDismissed);
        }
      }
      return;
    }
  }
  const items7 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  CheckpointGuildsBarEntrypointTsx2.__closure = items7;
  CheckpointGuildsBarEntrypointTsx2.__workletHash = 1045220900980;
  CheckpointGuildsBarEntrypointTsx2.__initData = tmp15;
  const animatedReaction = require("module_1655").useAnimatedReaction(CheckpointGuildsBarEntrypointTsx1, CheckpointGuildsBarEntrypointTsx2);
  const obj6 = require("module_1655");
  isModalOpen = require("NavigationRouteUtils").useIsModalOpen();
  const items8 = [markAsDismissed, callback, isModalOpen];
  const memo2 = obj3.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 24, graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3339.tgYaeZ);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef3339.BFc4lY);
    obj.visible = !isModalOpen;
    obj.graphic = { type: "image", src: _modDef17975, aspectRatio: "16/9" };
    obj.onDismiss = function onDismiss() {
      return _undefined(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(_modDef3339.UjtEWE);
    obj.onButtonPress = _undefined4;
    return obj;
  }, items8);
  const ref = isModalOpen.useRef(null);
  const tmpResult = require("NavigationRouteUtils");
  coachmark = require("useCoachmark").useCoachmark(ref, memo2);
  const items9 = [coachmark];
  const obj7 = { style: tmp4.container, children: null };
  const callback2 = obj3.useCallback(() => {
    coachmark(false);
  }, items9);
  const obj8 = { selected: false, circle: false, unread: false, styles: memo, overState: "y", config: memo1, label: null, expandedChildren: "Nitro Server Boost Yearly", children: null };
  const tmpResult2 = require("useCoachmark");
  let intl = tmp(1113).intl;
  obj8.label = intl.string(_modDef3339["8hclXY"]);
  obj8.expandedChildren = closure_11(ExpandedChildren, {});
  const items10 = [closure_11(LinearGradientDefault, { colors, start, end, style: coachmark.absoluteFill, pointerEvents: "none" }), ];
  const obj9 = { colors, start, end, style: coachmark.absoluteFill, pointerEvents: "none" };
  const tmp3Result = GuildsBarAnimatedItemWrapperDefault;
  items10[1] = closure_11(require("ExperimentalCheckpointIcon").ExperimentalCheckpointIcon, { size: "md", color: nativeDefault.colors.WHITE });
  obj8.children = items10;
  const items11 = [closure_12(tmp3Result, obj8), closure_11(closure_6, { ref, style: tmp4.coachmarkAnchor, onLayout: callback2, pointerEvents: "none", collapsable: false })];
  obj7.children = items11;
  return closure_12(closure_6, obj7);
});