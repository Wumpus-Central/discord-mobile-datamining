// === Module 8890: GameProfileScreen ===

// Module 8890 (GameProfileScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4852 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5060 */;
import timing from "timing" /* 5097 */;
import components_Button_Button from "components/Button/Button" /* 5384 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8883 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8889 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 8901 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 8920 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8891 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 56;
const createStyles = fn(5096);
let obj2 = { loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, scrollView: null, stickyHeader: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.scrollView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GetButton(onPress) {
  const cResult = c.c(4);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.l8JeHg);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.Vsxqmz);
    cResult[1] = stringResult1;
    let tmp6 = stringResult1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== onPress) {
    const obj2 = { variant: "primary", size: "sm", text: first, onPress, accessibilityLabel: tmp6 };
    const tmp10 = closure_1_8(components_Button_Button.Button, obj2);
    cResult[2] = onPress;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t.Vsxqmz);
  return closure_1_8(components_Button_Button.Button, obj);
});
let closure_13 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_14 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let __initData = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_16 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData2 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let closure_18 = { code: "function GameProfileScreenTsx6(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let __initData3 = { code: "function GameProfileScreenTsx7(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let __initData4 = { code: "function GameProfileScreenTsx8(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_21 = { code: "function GameProfileScreenTsx9(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_22 = { code: "function GameProfileScreenTsx10(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileScreen(gameId) {
  const cResult = gameId(sourceUserId[8]).c(93);
  gameId = gameId.gameId;
  const source = gameId.source;
  sourceUserId = gameId.sourceUserId;
  const initialScrollOffset = gameId.initialScrollOffset;
  let num = 0;
  if (undefined !== initialScrollOffset) {
    num = initialScrollOffset;
  }
  closure_11();
  let obj = gameId(sourceUserId[8]);
  const bottomSheetRef1 = gameId(sourceUserId[11]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmpResult = gameId(sourceUserId[11]);
  const tmp7 = source(sourceUserId[12]);
  noop = source(sourceUserId[12])(source(sourceUserId[13]).openURL);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return gameId(sourceUserId[14]).generateViewId();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = num(noop.useState(first), 1)[0];
  noop.useRef(null);
  const tmp10 = num;
  const tmp7Result = source(sourceUserId[12])(source(sourceUserId[13]).openURL);
  const game = gameId(sourceUserId[15]).useGame(gameId);
  ({ data, isLoading } = game);
  source(sourceUserId[16])(data);
  const tmpResult10 = gameId(sourceUserId[15]);
  const first2 = num(noop.useState(null), 2)[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  const tmp15 = num(noop.useState(null), 2);
  const sharedValue = gameId(sourceUserId[17]).useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj3.useRef(false);
  closure_11 = obj3.useRef(false);
  if (cResult[1] === gameId) {
    if (cResult[4] !== gameId) {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
              const obj = source(sourceUserId[18]);
            }
          };
        }
      }
      let items = [gameId];
      cResult[4] = gameId;
      cResult[5] = Z;
      cResult[6] = items;
      let tmp21 = items;
    } else {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
              const obj = source(sourceUserId[18]);
            }
          };
        }
      }
      tmp21 = cResult[6];
    }
    const effect = obj3.useEffect(Z, tmp21);
    if (data != null) {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
              const obj = source(sourceUserId[18]);
            }
          };
        }
      }
    }
    if (cResult[7] === sharedValue) {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
              const obj = source(sourceUserId[18]);
            }
          };
        }
      }
      tmp6(tmp2[19])(tmp24);
      const sharedValue1 = tmp(tmp2[17]).useSharedValue(0);
      const tmpResult12 = tmp(tmp2[17]);
      const sharedValue2 = tmp(tmp2[17]).useSharedValue(0);
      const tmpResult13 = tmp(tmp2[17]);
      function oe() {
        let tmp = sharedValue1.get() > 0;
        if (tmp) {
          value = sharedValue.get();
          tmp = value >= sharedValue1.get() - c10;
        }
        return tmp;
      }
      let obj2 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
      oe.__closure = obj2;
      oe.__workletHash = 15395308691297;
      oe.__initData = sharedValue2;
      function re(arg0, arg1) {
        if (arg0 !== arg1) {
          num = 0;
          if (arg0) {
            num = 1;
          }
          const result = sharedValue2.set(timing.withTiming(num, { duration: 150 }));
        }
      }
      const obj4 = { stickyHeaderVisible: sharedValue2, withTiming: tmp(tmp2[20]).withTiming };
      re.__closure = obj4;
      re.__workletHash = 3161097061646;
      re.__initData = sharedValue3;
      const animatedReaction = tmp(tmp2[17]).useAnimatedReaction(oe, re);
      const tmpResult14 = tmp(tmp2[17]);
      function se() {
        const obj = { transform: null };
        const obj2 = { translateY: ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
        const items = [obj2];
        obj.transform = items;
        return obj;
      }
      const obj5 = { interpolate: tmp(tmp2[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
      se.__closure = obj5;
      se.__workletHash = 16452163547712;
      se.__initData = __initData;
      const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(se);
      const tmpResult15 = tmp(tmp2[17]);
      sharedValue3 = tmp(tmp2[17]).useSharedValue(Infinity);
      const tmpResult16 = tmp(tmp2[17]);
      [r10145, tmp36] = tmp10(obj3.useState(false), 2);
      __initData = tmp36;
      const tmp10Result = tmp10(obj3.useState(false), 2);
      function ce() {
        value = sharedValue.get();
        return value > sharedValue3.get() - c10;
      }
      const obj6 = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
      ce.__closure = obj6;
      ce.__workletHash = 14521195063038;
      class D {
        constructor() {
          closure_11.current = true;
          obj = closure_1(closure_2[18]);
          result = obj.clearGameProfilePendingReturn(gameId);
          tmp3 = initialScrollOffset > 0;
          tmp2 = initialScrollOffset;
          if (tmp3) {
            tmp4 = closure_10;
            tmp3 = !closure_10.current;
          }
          if (tmp3) {
            tmp5 = closure_10;
            closure_10.current = true;
            tmp6 = closure_6;
            current = closure_6.current;
            tmp7 = null;
            if (current != null) {
              obj1 = { y: null, animated: false };
              obj1.y = tmp2;
              scrollToResult = current.scrollTo(obj1);
            }
          }
          return;
        }
      }
      function le(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_15)(arg0);
        }
      }
      const obj7 = { runOnJS: tmp(tmp2[17]).runOnJS, setShowGetButton: tmp36 };
      le.__closure = obj7;
      le.__workletHash = 15045914286853;
      le.__initData = __initData2;
      const animatedReaction1 = tmp(tmp2[17]).useAnimatedReaction(ce, le);
      const tmpResult17 = tmp(tmp2[17]);
      const gameProfileStoreWebsites = tmp(tmp2[21]).useGameProfileStoreWebsites(data);
      if (cResult[10] !== gameProfileStoreWebsites) {
        class Z {
          constructor() {
            return () => {
              if (!ref.current) {
                const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
                const obj = source(sourceUserId[18]);
              }
            };
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class Se {
            constructor(arg0) {
              return null != gameId;
            }
          }
          cResult[12] = Se;
        } else {
          class Se {
            constructor(arg0) {
              return null != gameId;
            }
          }
        }
        const mapped = gameProfileStoreWebsites.map(tmp6(tmp2[22]));
        const found = mapped.filter(Se);
        cResult[10] = gameProfileStoreWebsites;
        cResult[11] = found;
      } else {
        class Se {
          constructor(arg0) {
            return null != gameId;
          }
        }
        __initData2 = obj3.useRef(undefined);
        obj3.useRef(null);
        if (cResult[13] !== name) {
          class Ee {
            constructor() {
              closure_17.current = name;
              return;
            }
          }
          const items1 = [name];
          cResult[13] = name;
          cResult[14] = items1;
          cResult[15] = Ee;
          let tmp45 = Ee;
          const tmp44 = items1;
        } else {
          class Ee {
            constructor() {
              closure_17.current = name;
              return;
            }
          }
          tmp45 = cResult[15];
        }
        const effect1 = obj3.useEffect(tmp45, tmp44);
        if (cResult[16] !== first2) {
          class Ee {
            constructor() {
              closure_17.current = name;
              return;
            }
          }
          const items2 = [first2];
          cResult[16] = first2;
          cResult[17] = tmp49;
          cResult[18] = items2;
          let tmp48 = items2;
        } else {
          class Ee {
            constructor() {
              closure_17.current = name;
              return;
            }
          }
          tmp48 = cResult[18];
        }
        const effect2 = obj3.useEffect(tmp49, tmp48);
        if (cResult[19] === gameId) {
          class Ee {
            constructor() {
              closure_17.current = name;
              return;
            }
          }
        }
        function be(action, similarGameId, arg2) {
          const guildIdAndVerifiedFromInvite = GameProfileAnalyticUtils.getGuildIdAndVerifiedFromInvite(ref3.current);
          let str = ref2.current;
          if (str == null) {
            str = "";
          }
          const obj3 = { gameName: str, gameId, action, similarGameId, viewId: first1, guildId: null, isVerified: null, source: null };
          let guildId = arg2;
          if (arg2 == null) {
            guildId = guildIdAndVerifiedFromInvite.guildId;
          }
          obj3.guildId = guildId;
          obj3.isVerified = null == arg2 && guildIdAndVerifiedFromInvite.isVerified;
          obj3.source = source;
          const result = GameProfileAnalyticUtils.trackGameProfileAction(obj3);
        }
        cResult[19] = gameId;
        cResult[20] = source;
        cResult[21] = first1;
        cResult[22] = be;
      }
      const tmpResult18 = tmp(tmp2[21]);
    }
    const obj8 = { gameId: undefined, scrollY: sharedValue };
    cResult[7] = sharedValue;
    cResult[8] = undefined;
    cResult[9] = obj8;
    tmp24 = obj8;
  }
  class D {
    constructor() {
      closure_11.current = true;
      obj = closure_1(closure_2[18]);
      result = obj.clearGameProfilePendingReturn(gameId);
      tmp3 = initialScrollOffset > 0;
      tmp2 = initialScrollOffset;
      if (tmp3) {
        tmp4 = closure_10;
        tmp3 = !closure_10.current;
      }
      if (tmp3) {
        tmp5 = closure_10;
        closure_10.current = true;
        tmp6 = closure_6;
        current = closure_6.current;
        tmp7 = null;
        if (current != null) {
          obj1 = { y: null, animated: false };
          obj1.y = tmp2;
          scrollToResult = current.scrollTo(obj1);
        }
      }
      return;
    }
  }
  cResult[1] = gameId;
  cResult[2] = num;
  cResult[3] = D;
  const tmpResult11 = gameId(sourceUserId[17]);
}) : (function GameProfileScreen(gameId) {
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  STICKY_HEADER_HEIGHT = undefined;
  closure_11 = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  closure_16 = undefined;
  let gameProfileStoreWebsites;
  let memo;
  __initData3 = undefined;
  __initData4 = undefined;
  let callback1;
  selectionVersion = undefined;
  let first3;
  closure_24 = undefined;
  let callback3;
  let tmp = closure_11();
  const bottomSheetRef1 = gameId(sourceUserId[11]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let obj = gameId(sourceUserId[11]);
  const tmp6Result = source(sourceUserId[12])(source(sourceUserId[13]).openURL);
  noop = tmp6Result;
  const viewId = num(noop.useState(() => gameId(sourceUserId[14]).generateViewId()), 1)[0];
  ref = noop.useRef(null);
  const tmp6 = source(sourceUserId[12]);
  const game = gameId(sourceUserId[15]).useGame(gameId);
  ({ data, isLoading } = game);
  let obj3 = gameId(sourceUserId[15]);
  let tmp13 = num(noop.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  const tmp12 = source(sourceUserId[16])(data);
  sharedValue = gameId(sourceUserId[17]).useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj2.useRef(false);
  closure_11 = obj2.useRef(false);
  let items = [gameId, num];
  const items1 = [gameId];
  const callback = obj2.useCallback(() => {
    closure_11.current = true;
    const result = GameProfileActionCreatorsDefault.clearGameProfilePendingReturn(gameId);
    let tmp3 = num > 0;
    if (tmp3) {
      tmp3 = !ref.current;
    }
    if (tmp3) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj2 = { y: num, animated: false };
        current.scrollTo(obj2);
      }
    }
  }, items);
  const effect = obj2.useEffect(() => () => {
    if (!ref.current) {
      const result = source(sourceUserId[18]).clearGameProfilePendingReturn(gameId);
      const obj = source(sourceUserId[18]);
    }
  }, items1);
  let id;
  const tmp2Result = gameId(sourceUserId[17]);
  if (data != null) {
    id = data.id;
  }
  source(sourceUserId[19])({ gameId: id, scrollY: sharedValue });
  const tmp5Result = source(sourceUserId[19]);
  sharedValue1 = gameId(sourceUserId[17]).useSharedValue(0);
  const tmp2Result8 = gameId(sourceUserId[17]);
  sharedValue2 = gameId(sourceUserId[17]).useSharedValue(0);
  const tmp2Result9 = gameId(sourceUserId[17]);
  let fn = function q() {
    let tmp = sharedValue1.get() > 0;
    if (tmp) {
      value = sharedValue.get();
      tmp = value >= sharedValue1.get() - c10;
    }
    return tmp;
  };
  fn.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
  fn.__workletHash = 5065405682310;
  fn.__initData = memo;
  const fn2 = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      num = 0;
      if (arg0) {
        num = 1;
      }
      const result = sharedValue2.set(timing.withTiming(num, { duration: 150 }));
    }
  };
  const obj4 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
  const tmp2Result10 = gameId(sourceUserId[17]);
  fn2.__closure = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[20]).withTiming };
  fn2.__workletHash = 6249404580523;
  fn2.__initData = __initData3;
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, fn2);
  const obj5 = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[20]).withTiming };
  class Z {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[17]);
      obj1.translateY = obj3.interpolate(closure_13.get(), [0, 1], [-56, 0]);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result11 = gameId(sourceUserId[17]);
  Z.__closure = { interpolate: gameId(sourceUserId[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
  Z.__workletHash = 6838413565739;
  Z.__initData = __initData4;
  const animatedStyle = tmp2Result11.useAnimatedStyle(Z);
  const obj6 = { interpolate: gameId(sourceUserId[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
  sharedValue3 = gameId(sourceUserId[17]).useSharedValue(Infinity);
  const tmp8Result = num(noop.useState(false), 2);
  first2 = tmp8Result[0];
  closure_16 = tmp29;
  const tmp2Result12 = gameId(sourceUserId[17]);
  function ee() {
    value = sharedValue.get();
    return value > sharedValue3.get() - c10;
  }
  ee.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
  ee.__workletHash = 14590762926099;
  ee.__initData = callback1;
  const fn3 = function $(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_16)(arg0);
    }
  };
  const tmp2Result13 = gameId(sourceUserId[17]);
  fn3.__closure = { runOnJS: gameId(sourceUserId[17]).runOnJS, setShowGetButton: tmp8Result[1] };
  fn3.__workletHash = 5106828361905;
  fn3.__initData = selectionVersion;
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(ee, fn3);
  const obj7 = { runOnJS: gameId(sourceUserId[17]).runOnJS, setShowGetButton: tmp8Result[1] };
  gameProfileStoreWebsites = gameId(sourceUserId[21]).useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items2);
  __initData3 = obj2.useRef(undefined);
  __initData4 = obj2.useRef(null);
  const items3 = [name];
  const effect1 = obj2.useEffect(() => {
    closure_19.current = name;
  }, items3);
  const items4 = [first1];
  const effect2 = obj2.useEffect(() => {
    closure_20.current = first1;
  }, items4);
  const items5 = [gameId, viewId, source];
  callback1 = obj2.useCallback((action, similarGameId, arg2) => {
    const guildIdAndVerifiedFromInvite = GameProfileAnalyticUtils.getGuildIdAndVerifiedFromInvite(ref3.current);
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    const obj3 = { gameName: str, gameId, action, similarGameId, viewId, guildId: null, isVerified: null, source: null };
    let guildId = arg2;
    if (arg2 == null) {
      guildId = guildIdAndVerifiedFromInvite.guildId;
    }
    obj3.guildId = guildId;
    obj3.isVerified = null == arg2 && guildIdAndVerifiedFromInvite.isVerified;
    obj3.source = source;
    const result = GameProfileAnalyticUtils.trackGameProfileAction(obj3);
  }, items5);
  const tmp2Result14 = gameId(sourceUserId[21]);
  ({ navigation, selectionVersion } = source(sourceUserId[23])(callback1, gameId.initialTab));
  const selectedTab = navigation.selectedTab;
  const tmp8Result2 = num(noop.useState(0), 2);
  first3 = tmp8Result2[0];
  closure_24 = tmp8Result2[1];
  const items6 = [first3];
  const callback2 = obj2.useCallback((nativeEvent) => {
    closure_24(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items7 = [selectionVersion];
  const memo1 = obj2.useMemo(() => ({ paddingBottom: first3 }), items6);
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (selectionVersion > 0) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
    }
  }, items7);
  const items8 = [memo, callback1, tmp6Result];
  callback3 = obj2.useCallback(() => {
    if (1 === memo.length) {
      const first = _slicedToArray(memo, 1)[0];
      callback1(first.action);
      closure_4(first.url);
    } else if (memo.length > 1) {
      const obj3 = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: null, stackingBehavior: "stack" };
      let str = ref2.current;
      const obj2 = ActionSheetActionCreators;
      if (str == null) {
        str = "";
      }
      const obj = { gameName: str, websiteButtons: memo, trackAction: callback1 };
      obj3.content = closure_2_8(GameProfileStoreLinksActionSheetDefault, obj);
      obj2.showActionSheet(obj3);
    }
  }, items8);
  const items9 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => {
    const obj2 = { source, viewId, gameId, gameName: null, authorId: null, profileType: null };
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj2.gameName = str;
    obj2.authorId = sourceUserId;
    obj2.profileType = GameProfileAnalyticUtils.GameProfileTypes.FullProfile;
    GameProfileAnalyticUtils.trackGameProfileOpen(obj2);
  }, items9);
  const items10 = [gameId, source, sourceUserId, viewId];
  const effect4 = obj2.useEffect(() => () => {
    const guildIdAndVerifiedFromInvite = gameId(sourceUserId[14]).getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj = gameId(sourceUserId[14]);
    const obj3 = { viewId, gameId, gameName: null, playedFriendIds: null, playedFriendsData: null, similarGames: null, guildId: null, isVerified: null };
    let str = ref.current;
    if (str == null) {
      str = "";
    }
    obj3.gameName = str;
    obj3.playedFriendIds = [];
    obj3.playedFriendsData = [];
    let similarGames = first1.getSimilarGames(gameId);
    if (similarGames == null) {
      similarGames = [];
    }
    obj3.similarGames = similarGames;
    obj3.guildId = guildId;
    obj3.isVerified = isVerified;
    const result = gameId(sourceUserId[14]).trackGameProfileClose(obj3);
    const obj2 = gameId(sourceUserId[14]);
  }, items10);
  const items11 = [sharedValue1];
  const items12 = [sharedValue3];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items11);
  const items13 = [memo, first2, callback3];
  const callback5 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items12);
  const memo2 = obj2.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => name(sharedValue1, { onPress });
      }
    }
    return fn;
  }, items13);
  const obj8 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  if (!isLoading) {
    if (null != data) {
      let tmp55 = name;
      const obj9 = { ref, style: tmp.scrollView, contentContainerStyle: memo1, lockableScrollableContentOffsetY: sharedValue, children: null };
      const obj10 = { obscured: tmp12, children: null };
      let tmp55Result = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.OVERVIEW;
      if (tmp55Result) {
        const obj11 = { game: data, invite: first1, viewId, source, trackAction: callback1, onGuildInviteResolved: tmp13[1], closeModal: tmp5(tmp3[24]).hideAllActionSheets, scrollY: sharedValue, websiteButtons: memo, onStoreLinksMeasured: callback5, onHeaderHeightMeasured: callback4 };
        tmp55Result = tmp55(tmp5(tmp3[29]), obj11);
        const tmp5Result5 = tmp5(tmp3[29]);
      }
      const items14 = [tmp55Result, ];
      let tmp55Result4 = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.COMMUNITIES;
      if (tmp55Result4) {
        const obj12 = { game: data, viewId, scrollY: sharedValue, trackAction: callback1, closeModal: tmp5(tmp3[24]).hideAllActionSheets };
        tmp55Result4 = tmp55(tmp5(tmp3[30]), obj12);
        const tmp5Result6 = tmp5(tmp3[30]);
      }
      items14[1] = tmp55Result4;
      obj10.children = items14;
      obj9.children = tmp48(tmp5(tmp3[27]), obj10);
      let tmp55Result5 = tmp55(tmp2(tmp3[26]).BottomSheetScrollView, obj9);
      const tmp5Result4 = tmp5(tmp3[27]);
    }
    const items15 = [tmp55Result5, , , ];
    const obj13 = { style: null, pointerEvents: "box-none", children: null };
    const items16 = [tmp.stickyHeader, animatedStyle];
    obj13.style = items16;
    const obj14 = { game: data, headerRight: memo2 };
    obj13.children = tmp55(tmp5(tmp3[31]), obj14);
    items15[1] = tmp55(tmp5(tmp3[17]).View, obj13);
    let tmp55Result6 = !isLoading;
    if (!isLoading) {
      tmp55Result6 = null != data;
    }
    if (tmp55Result6) {
      const obj15 = { game: data, navigation, onLayout: callback2 };
      tmp55Result6 = tmp55(tmp5(tmp3[32]), obj15);
    }
    items15[2] = tmp55Result6;
    const obj16 = { variant: "overlay", onPress: bottomSheetClose };
    items15[3] = tmp55(tmp2(tmp3[33]).ActionSheetHeaderBar, obj16);
    obj8.children = items15;
    return tmp48(tmp49, obj8);
  }
  const tmp36 = source(sourceUserId[23])(callback1, gameId.initialTab);
  tmp55Result5 = name(viewId, { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) });
  tmp55 = name;
});