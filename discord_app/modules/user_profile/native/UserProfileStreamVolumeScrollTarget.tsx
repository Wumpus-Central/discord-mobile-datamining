// === Module 15762: UserProfileStreamVolumeScrollTarget ===

// Module 15762 (UserProfileStreamVolumeScrollTarget)
import util from "util" /* 1113 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import StreamVolumeMovedStore_mod from "StreamVolumeMovedStore" /* 15763 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let StreamVolumeMovedStore = fn(15763);
({ clearScrollToStreamVolume: closure_6, hideStreamVolumeCoachmark: metroImportDefault, showStreamVolumeCoachmark: closure_8 } = StreamVolumeMovedStore);
let StreamVolumeMovedStore = StreamVolumeMovedStore_mod;
const jsx = fn(21).jsx;
let closure_11 = { code: "(function UserProfileStreamVolumeScrollTargetTsx1(){let[animatedScrollableState,SCROLLABLE_STATE]=this.__closure;return animatedScrollableState==null||animatedScrollableState.get()===SCROLLABLE_STATE.UNLOCKED;})" };
let closure_12 = { code: "(function UserProfileStreamVolumeScrollTargetTsx2(isUnlocked,wasUnlocked){let[scheduleOnRN,scrollToTargetIfReady]=this.__closure;if(isUnlocked&&wasUnlocked!==true){scheduleOnRN(scrollToTargetIfReady);}})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStreamVolumeScrollTarget.tsx");

export default function UserProfileStreamVolumeScrollTarget(children) {
  _require = children.userId;
  importDefault = undefined;
  noop = undefined;
  state = undefined;
  let ref;
  function scrollToTargetIfReady() {
    if (ref.current) {
      if (null == prop) {
        tmp.current = false;
        let current;
        if (innerViewRef != null) {
          current = innerViewRef.current;
        }
        innerViewRef = undefined;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        let nativeScrollRef;
        if (current != null) {
          nativeScrollRef = current.getNativeScrollRef();
        }
        if (tmp9) {
          nativeScrollRef.measure((arg0, arg1, arg2, arg3) => {
            closure_0 = arg3;
            current = ref.current;
            if (current != null) {
              current.measureLayout(innerViewRef, (arg0, arg1, arg2, arg3) => {
                current.scrollTo({ y: Math.max(0, arg1 + arg3 / 2 - closure_0 / 2), animated: !closure_4 });
                React5(c0);
              });
            }
          });
        }
        tmp9 = null != current && null != innerViewRef && null != nativeScrollRef;
      } else {
        value = prop.get();
      }
    }
  }
  importDefault = noop.useContext(require("UserProfileScrollViewContext"));
  ref = noop.useRef(null);
  noop = StreamVolumeMovedStore.useState((scrollToStreamVolumeUserId) => scrollToStreamVolumeUserId.scrollToStreamVolumeUserId === c0);
  items = [state];
  closure_4 = require("initialize").useStateFromStores(items, () => state.useReducedMotion);
  state = StreamVolumeMovedStore.useState((coachmarkUserId) => coachmarkUserId.coachmarkUserId === c0);
  ref = noop.useRef(false);
  const obj2 = require("initialize");
  const bottomSheetInternal = require("BottomSheetModal").useBottomSheetInternal(true);
  let prop;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedScrollableState;
  }
  const obj3 = require("BottomSheetModal");
  const items1 = [closure_11, prop, require("BottomSheetModal").SCROLLABLE_STATE];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items1;
  class UserProfileStreamVolumeScrollTargetTsx1 {
    constructor() {
      obj = closure_0;
      tmp = null == closure_0;
      if (!tmp) {
        tmp2 = closure_1;
        tmp = obj.get() === closure_1.UNLOCKED;
      }
      return tmp;
    }
  }
  const items2 = [tmp8, tmp9];
  UserProfileStreamVolumeScrollTargetTsx1.__closure = items2;
  UserProfileStreamVolumeScrollTargetTsx1.__workletHash = 1807770366217;
  UserProfileStreamVolumeScrollTargetTsx1.__initData = tmp7;
  const items3 = [closure_12, require("module_1708").scheduleOnRN, scrollToTargetIfReady];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items3;
  class UserProfileStreamVolumeScrollTargetTsx2 {
    constructor(arg0, arg1) {
      tmp = children;
      if (children) {
        tmp2 = arg1;
        flag = true;
        tmp = true !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        tmp5 = closure_0(closure_1);
      }
      return;
    }
  }
  const items4 = [tmp11, tmp12];
  UserProfileStreamVolumeScrollTargetTsx2.__closure = items4;
  UserProfileStreamVolumeScrollTargetTsx2.__workletHash = 6263218548509;
  UserProfileStreamVolumeScrollTargetTsx2.__initData = tmp10;
  const animatedReaction = require("module_1655").useAnimatedReaction(UserProfileStreamVolumeScrollTargetTsx1, UserProfileStreamVolumeScrollTargetTsx2);
  const effect = obj.useEffect(() => () => prop(), []);
  const items5 = [state];
  const memo = obj.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["/fNrht"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["WQF2/t"]);
    obj.visible = state;
    obj.onDismiss = onDismiss;
    return obj;
  }, items5);
  const tmp3Result = require("module_1655");
  const coachmark = require("useCoachmark").useCoachmark(ref, memo);
  return <closure_4 ref={ref} collapsable={false} onLayout={function handleLayout() {
    if (closure_3) {
      timestampProducer();
      closure_6.current = true;
      scrollToTargetIfReady();
    }
  }}>{children.children}</closure_4>;
};