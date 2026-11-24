// === Module 17958: CheckpointGuildsBarEntrypoint ===

// Module 17958 (CheckpointGuildsBarEntrypoint)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef3442 from "module_3442" /* 3442 */;
import LinearGradientDefault from "LinearGradient" /* 5472 */;
import Text_Text from "Text/Text" /* 5508 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 17912 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17924 */;
import _modDef17959 from "module_17959" /* 17959 */;
import noop from "module_19" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17903 */;

const require = globalThis.__r;

require = fn;
function ExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3442["8hclXY"]);
  obj.title = refs(Text_Text.Text, obj2);
  return refs(HomeDrawerShared.HomeDrawerSharedItem, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(6270).CHECKPOINT_PRIMARY;
const ContentDismissActionType = fn(4763).ContentDismissActionType;
const GUILD_ITEM_INSET_LEFT = fn(17900).GUILD_ITEM_INSET_LEFT;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const colors = ["#000000", "rgba(0, 0, 0, 0.5)", "#000000"];
const start = { x: 1, y: 1 };
const end = { x: 0, y: 0 };
let closure_15 = { code: "(function CheckpointGuildsBarEntrypointTsx1(){let[scrollPosition]=this.__closure;return scrollPosition.get();})" };
let closure_16 = { code: "(function CheckpointGuildsBarEntrypointTsx2(current){let[dismissed,initialScrollPosition,DISMISS_SCROLL_DISTANCE,scheduleOnRN,onScroll]=this.__closure;if(dismissed.get())return;const initial=initialScrollPosition.get();if(initial==null){initialScrollPosition.set(current);return;}if(Math.abs(current-initial)>=DISMISS_SCROLL_DISTANCE){dismissed.set(true);scheduleOnRN(onScroll);}})" };
const createStyles = fn(4917);
let closure_17 = createStyles.createStyles((width) => {
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
  noop = undefined;
  let isModalOpen;
  let coachmark;
  const tmp4 = closure_17(require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  importDefault = tmp4;
  let obj = require("useToken");
  const guildsBarAnimatedWrapperStyles = require("GuildsBarAnimatedItemWrapper").useGuildsBarAnimatedWrapperStyles();
  dependencyMap = guildsBarAnimatedWrapperStyles;
  items = [guildsBarAnimatedWrapperStyles, tmp4.itemShape];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined3);
    const merged1 = Object.assign(_undefined3.itemShape);
    const merged2 = Object.assign(_undefined2.itemShape);
    obj.itemShape = {};
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    _undefined(_undefined3[17]).openCheckpoint(_undefined(_undefined3[18]).CHECKPOINT_GUILDS_BAR_SOURCE);
  }, []);
  noop = callback;
  const items1 = [callback];
  const items2 = [markAsDismissed];
  const memo1 = noop.useMemo(() => ({ onPress: _undefined4 }), items1);
  const callback1 = noop.useCallback(() => _undefined(ContentDismissActionType.USER_DISMISS), items2);
  const obj2 = require("GuildsBarAnimatedItemWrapper");
  const tmp10 = GuildsBarDnDStore((scrollPosition) => scrollPosition.scrollPosition);
  const sharedValue = require("module_1653").useSharedValue(null);
  const obj4 = require("module_1653");
  const sharedValue1 = require("module_1653").useSharedValue(false);
  const obj5 = require("module_1653");
  const items3 = [closure_15, tmp10];
  _require = undefined;
  [tmp13, tmp14] = items3;
  class CheckpointGuildsBarEntrypointTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items4 = [tmp14];
  CheckpointGuildsBarEntrypointTsx1.__closure = items4;
  CheckpointGuildsBarEntrypointTsx1.__workletHash = 1024720770114;
  CheckpointGuildsBarEntrypointTsx1.__initData = tmp13;
  const items5 = [closure_16, sharedValue1, sharedValue, 8, require("module_1706").scheduleOnRN, callback1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  isModalOpen = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items5;
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
  const items6 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  CheckpointGuildsBarEntrypointTsx2.__closure = items6;
  CheckpointGuildsBarEntrypointTsx2.__workletHash = 1045220900980;
  CheckpointGuildsBarEntrypointTsx2.__initData = tmp15;
  const animatedReaction = require("module_1653").useAnimatedReaction(CheckpointGuildsBarEntrypointTsx1, CheckpointGuildsBarEntrypointTsx2);
  const obj6 = require("module_1653");
  isModalOpen = require("NavigationRouteUtils").useIsModalOpen();
  const items7 = [markAsDismissed, callback, isModalOpen];
  const memo2 = obj3.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 24, graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3442.tgYaeZ);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef3442.BFc4lY);
    obj.visible = !isModalOpen;
    obj.graphic = { type: "image", src: _modDef17959, aspectRatio: "16/9" };
    obj.onDismiss = function onDismiss() {
      return _undefined(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(_modDef3442.UjtEWE);
    obj.onButtonPress = _undefined4;
    return obj;
  }, items7);
  const ref = noop.useRef(null);
  const tmpResult = require("NavigationRouteUtils");
  coachmark = require("useCoachmark").useCoachmark(ref, memo2);
  const items8 = [coachmark];
  const obj7 = { style: tmp4.container, children: null };
  const callback2 = obj3.useCallback(() => {
    coachmark(false);
  }, items8);
  const obj8 = { selected: false, circle: false, unread: false, styles: memo, overState: "y", config: memo1, label: null, expandedChildren: "\u{1F645}", children: true };
  const tmpResult2 = require("useCoachmark");
  let intl = tmp(1112).intl;
  obj8.label = intl.string(_modDef3442["8hclXY"]);
  obj8.expandedChildren = closure_10(ExpandedChildren, {});
  const items9 = [closure_10(LinearGradientDefault, { colors, start, end, style: isModalOpen.absoluteFill, pointerEvents: "none" }), ];
  const obj9 = { colors, start, end, style: isModalOpen.absoluteFill, pointerEvents: "none" };
  const tmp3Result = GuildsBarAnimatedItemWrapperDefault;
  items9[1] = closure_10(require("ExperimentalCheckpointIcon").ExperimentalCheckpointIcon, { size: "md", color: nativeDefault.colors.WHITE });
  obj8.children = items9;
  const items10 = [closure_11(tmp3Result, obj8), closure_10(coachmark, { ref, style: tmp4.coachmarkAnchor, onLayout: callback2, pointerEvents: "none", collapsable: false })];
  obj7.children = items10;
  return closure_11(coachmark, obj7);
});