// === Module 8359: GameProfileScreen ===

// Module 8359 (GameProfileScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import timing from "timing" /* 4897 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 8370 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 8387 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileStore from "GameProfileStore" /* 8360 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;
let current, gameId, ref, set, viewId;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 56;
let createStyles = createStyles_mod;
let obj = { loadingContainer: obj2, scrollView: obj3, stickyHeader: { position: "absolute", top: 0, left: 0, right: 0 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let first;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.l8JeHg);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(intl3.t.Vsxqmz);
    cResult[1] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== onPress) {
    const obj2 = { variant: "primary", size: "sm", text: first, onPress, accessibilityLabel: tmp6 };
    const tmp10 = metroImportAll(components_Button_Button.Button, obj2);
    cResult[2] = onPress;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : ((onPress) => {
  let intl;
  let intl2;
  onPress = onPress.onPress;
  const obj = { variant: "primary", size: "sm", text: intl.string(intl3.t.l8JeHg), onPress, accessibilityLabel: intl2.string(intl3.t.Vsxqmz) };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return metroImportAll(Button, obj);
});
let closure_13 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let __initData = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_15 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let __initData2 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData3 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let __initData4 = { code: "function GameProfileScreenTsx6(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let __initData5 = { code: "function GameProfileScreenTsx7(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_20 = { code: "function GameProfileScreenTsx8(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_21 = { code: "function GameProfileScreenTsx9(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
const __initData6 = { code: "function GameProfileScreenTsx10(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((gameId) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_14;
  let closure_4;
  let data;
  let first;
  let found;
  let isLoading;
  let obj8;
  let onPress;
  let ref3;
  let sharedValue1;
  let sharedValue3;
  let sourceUserId;
  let tmp34;
  let trackAction;
  let tmp = gameId;
  let tmp2 = sourceUserId;
  let obj = gameId(sourceUserId[8]);
  const cResult = obj.c(76);
  gameId = gameId.gameId;
  const source = gameId.source;
  sourceUserId = gameId.sourceUserId;
  const initialScrollOffset = gameId.initialScrollOffset;
  let num = 0;
  if (undefined !== initialScrollOffset) {
    num = initialScrollOffset;
  }
  const tmp4 = sharedValue1();
  const tmpResult = tmp(tmp2[11]);
  const bottomSheetRef1 = tmpResult.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp7 = source(tmp2[12]);
  react = tmp7(source(tmp2[13]).openURL);
  tmp7(source(tmp2[13]).openURL);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const obj = gameId(sourceUserId[14]);
      return obj.generateViewId();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  const first1 = num(react.useState(first), 1)[0];
  ref = react.useRef(null);
  const tmpResult10 = tmp(tmp2[15]);
  const game = tmpResult10.useGame(gameId);
  ({ data, isLoading } = game);
  let tmp14 = tmp6(tmp2[16])(data);
  const first2 = num(react.useState(null), 2)[0];
  let name;
  num(react.useState(null), 2);
  if (data != null) {
    name = data.name;
  }
  const tmpResult11 = tmp(tmp2[17]);
  const sharedValue = tmpResult11.useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj3.useRef(false);
  if (cResult[1] !== num) {
    class B {
      constructor() {
        const tmp2 = num > 0 && !ref.current;
        if (tmp2) {
          ref.current = true;
          current = ref.current;
          if (current != null) {
            const obj = { y: num, animated: false };
            current.scrollTo(obj);
          }
        }
      }
    }
    cResult[1] = num;
    cResult[2] = B;
  } else {
    class B {
      constructor() {
        const tmp2 = num > 0 && !ref.current;
        if (tmp2) {
          ref.current = true;
          current = ref.current;
          if (current != null) {
            const obj = { y: num, animated: false };
            current.scrollTo(obj);
          }
        }
      }
    }
  }
  if (data != null) {
    class B {
      constructor() {
        const tmp2 = num > 0 && !ref.current;
        if (tmp2) {
          ref.current = true;
          current = ref.current;
          if (current != null) {
            const obj = { y: num, animated: false };
            current.scrollTo(obj);
          }
        }
      }
    }
  }
  if (cResult[3] === sharedValue) {
    let tmp39;
    let tmp44;
    let tmp48;
    let tmp47;
    class B {
      constructor() {
        const tmp2 = num > 0 && !ref.current;
        if (tmp2) {
          ref.current = true;
          current = ref.current;
          if (current != null) {
            const obj = { y: num, animated: false };
            current.scrollTo(obj);
          }
        }
      }
    }
    source(tmp2[18])(obj8);
    const tmpResult12 = tmp(tmp2[17]);
    sharedValue1 = tmpResult12.useSharedValue(0);
    const tmpResult13 = tmp(tmp2[17]);
    const sharedValue2 = tmpResult13.useSharedValue(0);
    function ee() {
      let tmp = sharedValue1.get() > 0;
      if (tmp) {
        const value = sharedValue.get();
        tmp = value >= sharedValue1.get() - c10;
      }
      return tmp;
    }
    let obj2 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
    ee.__closure = obj2;
    ee.__workletHash = 15395308691297;
    ee.__initData = sharedValue3;
    const fn2 = function $(arg0, arg1) {
      if (arg0 !== arg1) {
        num = 0;
        set = sharedValue2.set;
        const withTiming = timing.withTiming;
        timing;
        if (arg0) {
          num = 1;
        }
        const result = set(withTiming(num, { duration: 150 }));
      }
    };
    const obj4 = { stickyHeaderVisible: sharedValue2, withTiming: tmp(tmp2[19]).withTiming };
    const useAnimatedReaction = tmp(tmp2[17]).useAnimatedReaction;
    tmp(tmp2[17]);
    fn2.__closure = obj4;
    fn2.__workletHash = 3161097061646;
    fn2.__initData = __initData;
    const animatedReaction = useAnimatedReaction(ee, fn2);
    function re() {
      let items;
      let obj3;
      const obj = { transform: items };
      const obj2 = { translateY: obj3.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
      items = [obj2];
      obj3 = ReanimatedRexport;
      return obj;
    }
    const obj5 = { interpolate: tmp(tmp2[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
    const useAnimatedStyle = tmp(tmp2[17]).useAnimatedStyle;
    tmp(tmp2[17]);
    re.__closure = obj5;
    re.__workletHash = 16452163547712;
    re.__initData = found;
    const animatedStyle = useAnimatedStyle(re);
    const tmpResult16 = tmp(tmp2[17]);
    sharedValue3 = tmpResult16.useSharedValue(Infinity);
    [r10130, tmp34] = num(obj3.useState(false), 2);
    __initData = tmp34;
    num(obj3.useState(false), 2);
    function se() {
      const value = sharedValue.get();
      return value > sharedValue3.get() - c10;
    }
    const obj6 = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
    se.__closure = obj6;
    se.__workletHash = 14521195063038;
    se.__initData = __initData2;
    function oe(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(__initData)(arg0);
      }
    }
    const obj7 = { runOnJS: tmp(tmp2[17]).runOnJS, setShowGetButton: tmp34 };
    const useAnimatedReaction2 = tmp(tmp2[17]).useAnimatedReaction;
    tmp(tmp2[17]);
    oe.__closure = obj7;
    oe.__workletHash = 15045914286853;
    oe.__initData = __initData3;
    const animatedReaction2 = useAnimatedReaction2(se, oe);
    const tmpResult18 = tmp(tmp2[20]);
    const gameProfileStoreWebsites = tmpResult18.useGameProfileStoreWebsites(data);
    if (cResult[6] !== gameProfileStoreWebsites) {
      class B {
        constructor() {
          const tmp2 = num > 0 && !ref.current;
          if (tmp2) {
            ref.current = true;
            current = ref.current;
            if (current != null) {
              const obj = { y: num, animated: false };
              current.scrollTo(obj);
            }
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            const tmp2 = num > 0 && !ref.current;
            if (tmp2) {
              ref.current = true;
              current = ref.current;
              if (current != null) {
                const obj = { y: num, animated: false };
                current.scrollTo(obj);
              }
            }
          }
        }
        cResult[8] = tmp41;
      } else {
        class B {
          constructor() {
            const tmp2 = num > 0 && !ref.current;
            if (tmp2) {
              ref.current = true;
              current = ref.current;
              if (current != null) {
                const obj = { y: num, animated: false };
                current.scrollTo(obj);
              }
            }
          }
        }
      }
      const mapped = gameProfileStoreWebsites.map(tmp6(tmp2[21]));
      found = mapped.filter(tmp41);
      cResult[6] = gameProfileStoreWebsites;
      cResult[7] = found;
      tmp39 = found;
    } else {
      class B {
        constructor() {
          const tmp2 = num > 0 && !ref.current;
          if (tmp2) {
            ref.current = true;
            current = ref.current;
            if (current != null) {
              const obj = { y: num, animated: false };
              current.scrollTo(obj);
            }
          }
        }
      }
    }
    found = tmp39;
    __initData2 = obj3.useRef(undefined);
    __initData3 = obj3.useRef(null);
    if (cResult[9] !== name) {
      class B {
        constructor() {
          const tmp2 = num > 0 && !ref.current;
          if (tmp2) {
            ref.current = true;
            current = ref.current;
            if (current != null) {
              const obj = { y: num, animated: false };
              current.scrollTo(obj);
            }
          }
        }
      }
      let items = [name];
      cResult[9] = name;
      cResult[10] = tmp45;
      cResult[11] = items;
      tmp44 = items;
    } else {
      class B {
        constructor() {
          const tmp2 = num > 0 && !ref.current;
          if (tmp2) {
            ref.current = true;
            current = ref.current;
            if (current != null) {
              const obj = { y: num, animated: false };
              current.scrollTo(obj);
            }
          }
        }
      }
      tmp44 = cResult[11];
    }
    const effect = obj3.useEffect(tmp45, tmp44);
    if (cResult[12] !== first2) {
      class He {
        constructor() {
          ref3.current = first2;
        }
      }
      const items1 = [first2];
      cResult[12] = first2;
      cResult[13] = items1;
      cResult[14] = He;
      tmp48 = He;
      tmp47 = items1;
    } else {
      class He {
        constructor() {
          ref3.current = first2;
        }
      }
      tmp48 = cResult[14];
    }
    const effect1 = obj3.useEffect(tmp48, tmp47);
    if (cResult[15] === gameId) {
      class He {
        constructor() {
          ref3.current = first2;
        }
      }
    }
    class Ie {
      constructor(action, similarGameId) {
        let guildId;
        let isVerified;
        const obj = GameProfileAnalyticUtils;
        const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
        ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
        let str = ref2.current;
        const trackGameProfileAction = GameProfileAnalyticUtils.trackGameProfileAction;
        GameProfileAnalyticUtils;
        if (str == null) {
          str = "";
        }
        const obj2 = { gameName: str, gameId, action, similarGameId, viewId: first1, guildId, isVerified, source };
        const result = trackGameProfileAction(obj2);
      }
    }
    cResult[15] = gameId;
    cResult[16] = source;
    cResult[17] = first1;
    cResult[18] = Ie;
  }
  obj8 = { gameId: undefined, scrollY: sharedValue };
  cResult[3] = sharedValue;
  cResult[4] = undefined;
  cResult[5] = obj8;
}) : ((gameId) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_4;
  let data;
  let isLoading;
  let items12;
  let obj10;
  let obj11;
  let obj13;
  let ref3;
  let tmp5Result2;
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  STICKY_HEADER_HEIGHT = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  closure_15 = undefined;
  let gameProfileStoreWebsites;
  let memo;
  __initData4 = undefined;
  __initData5 = undefined;
  let callback1;
  let callback2;
  let tmp = sharedValue1();
  let tmp2 = gameId;
  const tmp3 = sourceUserId;
  let obj = gameId(sourceUserId[11]);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp6 = source(sourceUserId[12]);
  const tmp6Result = tmp6(source(sourceUserId[13]).openURL);
  react = tmp6Result;
  let obj2 = react;
  viewId = num(react.useState(() => {
    const obj = gameId(sourceUserId[14]);
    return obj.generateViewId();
  }), 1)[0];
  ref = react.useRef(null);
  let obj3 = gameId(sourceUserId[15]);
  const game = obj3.useGame(gameId);
  ({ data, isLoading } = game);
  const tmp12 = source(sourceUserId[16])(data);
  const tmp13 = num(react.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  const tmp15 = tmp13[1];
  const tmp8 = num;
  if (data != null) {
    name = data.name;
  }
  const tmp2Result = tmp2(tmp3[17]);
  sharedValue = tmp2Result.useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj2.useRef(false);
  let items = [num];
  const callback = obj2.useCallback(() => {
    const tmp2 = num > 0 && !ref.current;
    if (tmp2) {
      ref.current = true;
      current = ref.current;
      if (current != null) {
        const obj = { y: num, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items);
  let id;
  const tmp5Result = source(tmp3[18]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollY: sharedValue });
  const tmp2Result8 = tmp2(tmp3[17]);
  sharedValue1 = tmp2Result8.useSharedValue(0);
  const tmp2Result9 = tmp2(tmp3[17]);
  sharedValue2 = tmp2Result9.useSharedValue(0);
  let fn = function j() {
    let tmp = sharedValue1.get() > 0;
    if (tmp) {
      const value = sharedValue.get();
      tmp = value >= sharedValue1.get() - c10;
    }
    return tmp;
  };
  const obj4 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
  fn.__closure = obj4;
  fn.__workletHash = 5065405682310;
  fn.__initData = __initData4;
  const tmp2Result10 = tmp2(tmp3[17]);
  class U {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        num = 0;
        set = sharedValue2.set;
        const withTiming = timing.withTiming;
        timing;
        if (arg0) {
          num = 1;
        }
        const result = set(withTiming(num, { duration: 150 }));
      }
    }
  }
  U.__closure = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[19]).withTiming };
  U.__workletHash = 6249404580523;
  U.__initData = __initData5;
  ({ stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[19]).withTiming });
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, U);
  const tmp2Result11 = tmp2(tmp3[17]);
  class Q {
    constructor() {
      let items;
      let obj3;
      const obj = { transform: items };
      const obj2 = { translateY: obj3.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
      items = [obj2];
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  Q.__closure = { interpolate: tmp2(tmp3[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
  Q.__workletHash = 6838413565739;
  Q.__initData = callback1;
  ({ interpolate: tmp2(tmp3[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT });
  const animatedStyle = tmp2Result11.useAnimatedStyle(Q);
  const tmp2Result12 = tmp2(tmp3[17]);
  sharedValue3 = tmp2Result12.useSharedValue(Infinity);
  const tmp8Result = tmp8(obj2.useState(false), 2);
  first2 = tmp8Result[0];
  closure_15 = tmp29;
  const tmp2Result13 = tmp2(tmp3[17]);
  class Z {
    constructor() {
      const value = sharedValue.get();
      return value > sharedValue3.get() - c10;
    }
  }
  Z.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
  Z.__workletHash = 14590762926099;
  Z.__initData = callback2;
  class X {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_15)(arg0);
      }
    }
  }
  X.__closure = { runOnJS: tmp2(tmp3[17]).runOnJS, setShowGetButton: tmp8Result[1] };
  X.__workletHash = 5106828361905;
  X.__initData = __initData6;
  ({ runOnJS: tmp2(tmp3[17]).runOnJS, setShowGetButton: tmp8Result[1] });
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(Z, X);
  const tmp2Result14 = tmp2(tmp3[20]);
  gameProfileStoreWebsites = tmp2Result14.useGameProfileStoreWebsites(data);
  const items1 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items1);
  __initData4 = obj2.useRef(undefined);
  __initData5 = obj2.useRef(null);
  const items2 = [name];
  const effect = obj2.useEffect(() => {
    ref2.current = name;
  }, items2);
  const items3 = [first1];
  const effect1 = obj2.useEffect(() => {
    ref3.current = first1;
  }, items3);
  const items4 = [gameId, viewId, source];
  callback1 = obj2.useCallback((action, similarGameId) => {
    let guildId;
    let isVerified;
    const obj = GameProfileAnalyticUtils;
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    let str = ref2.current;
    const trackGameProfileAction = GameProfileAnalyticUtils.trackGameProfileAction;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    const obj2 = { gameName: str, gameId, action, similarGameId, viewId, guildId, isVerified, source };
    const result = trackGameProfileAction(obj2);
  }, items4);
  const items5 = [memo, callback1, tmp6Result];
  callback2 = obj2.useCallback(() => {
    let obj;
    let tmp14;
    if (1 === memo.length) {
      const first = _slicedToArray(memo, 1)[0];
      callback1(first.action);
      closure_4(first.url);
    } else if (memo.length > 1) {
      const obj2 = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: metroImportAll(tmp14, obj), stackingBehavior: "stack" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      let str = ref2.current;
      tmp14 = GameProfileStoreLinksActionSheetDefault;
      if (str == null) {
        str = "";
      }
      obj = { gameName: str, websiteButtons: memo, trackAction: callback1 };
      showActionSheet(obj2);
    }
  }, items5);
  const items6 = [gameId, source, sourceUserId, viewId];
  const effect2 = obj2.useEffect(() => {
    let str;
    const obj = { source, viewId, gameId, gameName: str, authorId: sourceUserId, profileType: GameProfileAnalyticUtils.GameProfileTypes.FullProfile };
    str = ref2.current;
    const trackGameProfileOpen = GameProfileAnalyticUtils.trackGameProfileOpen;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    trackGameProfileOpen(obj);
  }, items6);
  const items7 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => () => {
    let guildId;
    let isVerified;
    let similarGames;
    let str;
    const obj = gameId(sourceUserId[14]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj2 = { viewId, gameId, gameName: str, playedFriendIds: [], playedFriendsData: [], similarGames, guildId, isVerified };
    str = ref.current;
    const trackGameProfileClose = gameId(sourceUserId[14]).trackGameProfileClose;
    gameId(sourceUserId[14]);
    if (str == null) {
      str = "";
    }
    similarGames = first1.getSimilarGames(gameId);
    if (similarGames == null) {
      similarGames = [];
    }
    const result = trackGameProfileClose(obj2);
  }, items7);
  const items8 = [sharedValue1];
  const items9 = [sharedValue3];
  const callback3 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items8);
  const items10 = [memo, first2, callback2];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items9);
  const memo1 = obj2.useMemo(() => {
    let onPress;
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => {
          const obj = { onPress };
          return name(sharedValue2, obj);
        };
      }
    }
    return fn;
  }, items10);
  const obj8 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  const tmp42 = sharedValue;
  if (!isLoading) {
    let tmp45;
    let tmp44;
    if (null != data) {
      tmp45 = name;
      const obj9 = { ref, style: tmp.scrollView, lockableScrollableContentOffsetY: sharedValue, children: name(tmp5Result2, obj10) };
      const BottomSheetScrollView = tmp2(tmp3[24]).BottomSheetScrollView;
      obj10 = { obscured: tmp12, children: name(source(tmp3[26]), obj11) };
      obj11 = {
        game: data,
        invite: first1,
        viewId,
        source,
        trackAction: callback1,
        onGuildInviteResolved: tmp15,
        closeModal() {
              const obj = source(sourceUserId[22]);
              return obj.hideAllActionSheets();
            },
        scrollY: sharedValue,
        websiteButtons: memo,
        onStoreLinksMeasured: callback4,
        onHeaderHeightMeasured: callback3
      };
      tmp5Result2 = source(tmp3[25]);
      tmp44 = name(BottomSheetScrollView, obj9);
    }
    const items11 = [tmp44, , ];
    const obj12 = { style: items12, pointerEvents: "box-none", children: tmp45(source(tmp3[27]), obj13) };
    items12 = [tmp.stickyHeader, animatedStyle];
    const View = tmp5(tmp3[17]).View;
    obj13 = { game: data, headerRight: memo1 };
    items11[1] = tmp45(View, obj12);
    const obj14 = { variant: "overlay", onPress: bottomSheetClose };
    items11[2] = tmp45(tmp2(tmp3[28]).ActionSheetHeaderBar, obj14);
    obj8.children = items11;
    return tmp42(tmp43, obj8);
  }
  const obj15 = { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) };
  tmp44 = name(viewId, obj15);
  tmp45 = name;
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default tmp5;