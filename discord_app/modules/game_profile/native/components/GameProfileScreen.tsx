// discord_app/modules/game_profile/native/components/GameProfileScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import getGameProfileStoreWebsiteDataDefault from "../utils/getGameProfileStoreWebsiteData.tsx";
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameProfileStore from "../../GameProfileStore.tsx";

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 56;
const createStyles = fn(5091);
let obj2 = {
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 300,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
  scrollView: null,
  stickyHeader: null,
};
let obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  minHeight: 300,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.scrollView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GetButton(onPress) {
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
    }
  : function GetButton(onPress) {
      const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.l8JeHg);
      obj.onPress = onPress.onPress;
      const intl2 = util.intl;
      obj.accessibilityLabel = intl2.string(util.t.Vsxqmz);
      return closure_1_8(components_Button_Button.Button, obj);
    };
let closure_13 = {
  code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}",
};
let __initData = {
  code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}",
};
let __initData2 = {
  code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}",
};
let __initData3 = {
  code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}",
};
let __initData4 = {
  code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}",
};
let __initData5 = {
  code: "function GameProfileScreenTsx6(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}",
};
let __initData6 = {
  code: "function GameProfileScreenTsx7(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}",
};
let closure_20 = {
  code: "function GameProfileScreenTsx8(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}",
};
let closure_21 = {
  code: "function GameProfileScreenTsx9(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}",
};
let closure_22 = {
  code: "function GameProfileScreenTsx10(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}",
};
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileScreen(gameId) {
      const cResult = gameId(sourceUserId[8]).c(89);
      gameId = gameId.gameId;
      const source = gameId.source;
      sourceUserId = gameId.sourceUserId;
      const initialScrollOffset = gameId.initialScrollOffset;
      let num = 0;
      if (undefined !== initialScrollOffset) {
        num = initialScrollOffset;
      }
      sharedValue1();
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
      if (cResult[1] !== num) {
        class P {
          constructor() {
            tmp2 = initialScrollOffset > 0;
            tmp = initialScrollOffset;
            if (tmp2) {
              tmp3 = closure_10;
              tmp2 = !closure_10.current;
            }
            if (tmp2) {
              tmp4 = closure_10;
              flag = true;
              closure_10.current = true;
              tmp5 = closure_6;
              current = closure_6.current;
              tmp6 = null;
              if (current != null) {
                obj = { y: null, animated: false };
                obj.y = tmp;
                scrollToResult = current.scrollTo(obj);
              }
            }
            return;
          }
        }
        cResult[1] = num;
        cResult[2] = P;
      } else {
        class P {
          constructor() {
            tmp2 = initialScrollOffset > 0;
            tmp = initialScrollOffset;
            if (tmp2) {
              tmp3 = closure_10;
              tmp2 = !closure_10.current;
            }
            if (tmp2) {
              tmp4 = closure_10;
              flag = true;
              closure_10.current = true;
              tmp5 = closure_6;
              current = closure_6.current;
              tmp6 = null;
              if (current != null) {
                obj = { y: null, animated: false };
                obj.y = tmp;
                scrollToResult = current.scrollTo(obj);
              }
            }
            return;
          }
        }
      }
      if (data != null) {
        class P {
          constructor() {
            tmp2 = initialScrollOffset > 0;
            tmp = initialScrollOffset;
            if (tmp2) {
              tmp3 = closure_10;
              tmp2 = !closure_10.current;
            }
            if (tmp2) {
              tmp4 = closure_10;
              flag = true;
              closure_10.current = true;
              tmp5 = closure_6;
              current = closure_6.current;
              tmp6 = null;
              if (current != null) {
                obj = { y: null, animated: false };
                obj.y = tmp;
                scrollToResult = current.scrollTo(obj);
              }
            }
            return;
          }
        }
      }
      if (cResult[3] === sharedValue) {
        class P {
          constructor() {
            tmp2 = initialScrollOffset > 0;
            tmp = initialScrollOffset;
            if (tmp2) {
              tmp3 = closure_10;
              tmp2 = !closure_10.current;
            }
            if (tmp2) {
              tmp4 = closure_10;
              flag = true;
              closure_10.current = true;
              tmp5 = closure_6;
              current = closure_6.current;
              tmp6 = null;
              if (current != null) {
                obj = { y: null, animated: false };
                obj.y = tmp;
                scrollToResult = current.scrollTo(obj);
              }
            }
            return;
          }
        }
        tmp6(tmp2[18])(obj8);
        sharedValue1 = tmp(tmp2[17]).useSharedValue(0);
        const tmpResult12 = tmp(tmp2[17]);
        const sharedValue2 = tmp(tmp2[17]).useSharedValue(0);
        const tmpResult13 = tmp(tmp2[17]);
        function ee() {
          let tmp = sharedValue1.get() > 0;
          if (tmp) {
            value = sharedValue.get();
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
            if (arg0) {
              num = 1;
            }
            const result = sharedValue2.set(timing.withTiming(num, { duration: 150 }));
          }
        };
        const obj4 = { stickyHeaderVisible: sharedValue2, withTiming: tmp(tmp2[19]).withTiming };
        fn2.__closure = obj4;
        fn2.__workletHash = 3161097061646;
        fn2.__initData = __initData;
        const animatedReaction = tmp(tmp2[17]).useAnimatedReaction(ee, fn2);
        const tmpResult14 = tmp(tmp2[17]);
        function re() {
          const obj = { transform: null };
          const obj2 = { translateY: ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
          const items = [obj2];
          obj.transform = items;
          return obj;
        }
        const obj5 = {
          interpolate: tmp(tmp2[17]).interpolate,
          stickyHeaderVisible: sharedValue2,
          STICKY_HEADER_HEIGHT,
        };
        re.__closure = obj5;
        re.__workletHash = 16452163547712;
        re.__initData = __initData2;
        const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(re);
        const tmpResult15 = tmp(tmp2[17]);
        sharedValue3 = tmp(tmp2[17]).useSharedValue(Infinity);
        const tmpResult16 = tmp(tmp2[17]);
        [r10130, tmp32] = tmp10(obj3.useState(false), 2);
        __initData = tmp32;
        const tmp10Result = tmp10(obj3.useState(false), 2);
        function ne() {
          value = sharedValue.get();
          return value > sharedValue3.get() - c10;
        }
        const obj6 = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
        ne.__closure = obj6;
        ne.__workletHash = 14521195063038;
        ne.__initData = __initData3;
        function oe(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(closure_14)(arg0);
          }
        }
        const obj7 = { runOnJS: tmp(tmp2[17]).runOnJS, setShowGetButton: tmp32 };
        oe.__closure = obj7;
        oe.__workletHash = 15045914286853;
        oe.__initData = __initData4;
        const animatedReaction1 = tmp(tmp2[17]).useAnimatedReaction(ne, oe);
        const tmpResult17 = tmp(tmp2[17]);
        const gameProfileStoreWebsites = tmp(tmp2[20]).useGameProfileStoreWebsites(data);
        if (cResult[6] !== gameProfileStoreWebsites) {
          class P {
            constructor() {
              tmp2 = initialScrollOffset > 0;
              tmp = initialScrollOffset;
              if (tmp2) {
                tmp3 = closure_10;
                tmp2 = !closure_10.current;
              }
              if (tmp2) {
                tmp4 = closure_10;
                flag = true;
                closure_10.current = true;
                tmp5 = closure_6;
                current = closure_6.current;
                tmp6 = null;
                if (current != null) {
                  obj = { y: null, animated: false };
                  obj.y = tmp;
                  scrollToResult = current.scrollTo(obj);
                }
              }
              return;
            }
          }
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                tmp2 = initialScrollOffset > 0;
                tmp = initialScrollOffset;
                if (tmp2) {
                  tmp3 = closure_10;
                  tmp2 = !closure_10.current;
                }
                if (tmp2) {
                  tmp4 = closure_10;
                  flag = true;
                  closure_10.current = true;
                  tmp5 = closure_6;
                  current = closure_6.current;
                  tmp6 = null;
                  if (current != null) {
                    obj = { y: null, animated: false };
                    obj.y = tmp;
                    scrollToResult = current.scrollTo(obj);
                  }
                }
                return;
              }
            }
            cResult[8] = tmp38;
          } else {
            class P {
              constructor() {
                tmp2 = initialScrollOffset > 0;
                tmp = initialScrollOffset;
                if (tmp2) {
                  tmp3 = closure_10;
                  tmp2 = !closure_10.current;
                }
                if (tmp2) {
                  tmp4 = closure_10;
                  flag = true;
                  closure_10.current = true;
                  tmp5 = closure_6;
                  current = closure_6.current;
                  tmp6 = null;
                  if (current != null) {
                    obj = { y: null, animated: false };
                    obj.y = tmp;
                    scrollToResult = current.scrollTo(obj);
                  }
                }
                return;
              }
            }
          }
          const mapped = gameProfileStoreWebsites.map(tmp6(tmp2[21]));
          const found = mapped.filter(tmp38);
          cResult[6] = gameProfileStoreWebsites;
          cResult[7] = found;
        } else {
          class P {
            constructor() {
              tmp2 = initialScrollOffset > 0;
              tmp = initialScrollOffset;
              if (tmp2) {
                tmp3 = closure_10;
                tmp2 = !closure_10.current;
              }
              if (tmp2) {
                tmp4 = closure_10;
                flag = true;
                closure_10.current = true;
                tmp5 = closure_6;
                current = closure_6.current;
                tmp6 = null;
                if (current != null) {
                  obj = { y: null, animated: false };
                  obj.y = tmp;
                  scrollToResult = current.scrollTo(obj);
                }
              }
              return;
            }
          }
          __initData2 = tmp36;
          __initData3 = obj3.useRef(undefined);
          __initData4 = obj3.useRef(null);
          if (cResult[9] !== name) {
            class P {
              constructor() {
                tmp2 = initialScrollOffset > 0;
                tmp = initialScrollOffset;
                if (tmp2) {
                  tmp3 = closure_10;
                  tmp2 = !closure_10.current;
                }
                if (tmp2) {
                  tmp4 = closure_10;
                  flag = true;
                  closure_10.current = true;
                  tmp5 = closure_6;
                  current = closure_6.current;
                  tmp6 = null;
                  if (current != null) {
                    obj = { y: null, animated: false };
                    obj.y = tmp;
                    scrollToResult = current.scrollTo(obj);
                  }
                }
                return;
              }
            }
            let items = [name];
            cResult[9] = name;
            cResult[10] = tmp43;
            cResult[11] = items;
            class Ie {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[14]);
                guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(closure_17.current);
                ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
                obj2 = closure_0(closure_2[14]);
                str = closure_16.current;
                if (str == null) {
                  str = "";
                }
                obj1 = {
                  gameName: str,
                  gameId,
                  action: gameId,
                  similarGameId: arg1,
                  viewId: closure_5,
                  guildId,
                  isVerified,
                  source,
                };
                result = obj2.trackGameProfileAction(obj1);
                return;
              }
            }
          } else {
            class P {
              constructor() {
                tmp2 = initialScrollOffset > 0;
                tmp = initialScrollOffset;
                if (tmp2) {
                  tmp3 = closure_10;
                  tmp2 = !closure_10.current;
                }
                if (tmp2) {
                  tmp4 = closure_10;
                  flag = true;
                  closure_10.current = true;
                  tmp5 = closure_6;
                  current = closure_6.current;
                  tmp6 = null;
                  if (current != null) {
                    obj = { y: null, animated: false };
                    obj.y = tmp;
                    scrollToResult = current.scrollTo(obj);
                  }
                }
                return;
              }
            }
            const tmp42 = cResult[11];
          }
          const effect = obj3.useEffect(tmp43, tmp42);
          if (cResult[12] !== first2) {
            class He {
              constructor() {
                closure_17.current = closure_7;
                return;
              }
            }
            const items1 = [first2];
            cResult[12] = first2;
            cResult[13] = items1;
            cResult[14] = He;
            class Ie {
              constructor(arg0, arg1) {
                obj = closure_0(closure_2[14]);
                guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(closure_17.current);
                ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
                obj2 = closure_0(closure_2[14]);
                str = closure_16.current;
                if (str == null) {
                  str = "";
                }
                obj1 = {
                  gameName: str,
                  gameId,
                  action: gameId,
                  similarGameId: arg1,
                  viewId: closure_5,
                  guildId,
                  isVerified,
                  source,
                };
                result = obj2.trackGameProfileAction(obj1);
                return;
              }
            }
            const tmp45 = items1;
          } else {
            class He {
              constructor() {
                closure_17.current = closure_7;
                return;
              }
            }
            const tmp46 = cResult[14];
          }
          const effect1 = obj3.useEffect(tmp46, tmp45);
          if (cResult[15] === gameId) {
            class He {
              constructor() {
                closure_17.current = closure_7;
                return;
              }
            }
          }
          class Ie {
            constructor(arg0, arg1) {
              obj = closure_0(closure_2[14]);
              guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(closure_17.current);
              ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
              obj2 = closure_0(closure_2[14]);
              str = closure_16.current;
              if (str == null) {
                str = "";
              }
              obj1 = {
                gameName: str,
                gameId,
                action: gameId,
                similarGameId: arg1,
                viewId: closure_5,
                guildId,
                isVerified,
                source,
              };
              result = obj2.trackGameProfileAction(obj1);
              return;
            }
          }
          cResult[15] = gameId;
          cResult[16] = source;
          cResult[17] = first1;
          cResult[18] = Ie;
        }
        const tmpResult18 = tmp(tmp2[20]);
      }
      obj8 = { gameId: undefined, scrollY: sharedValue };
      cResult[3] = sharedValue;
      cResult[4] = undefined;
      cResult[5] = obj8;
      const tmpResult11 = gameId(sourceUserId[17]);
    }
  : function GameProfileScreen(gameId) {
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
      __initData5 = undefined;
      __initData6 = undefined;
      let callback1;
      selectionVersion = undefined;
      let first3;
      closure_23 = undefined;
      let callback3;
      let tmp = sharedValue1();
      const bottomSheetRef1 = gameId(sourceUserId[11]).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      let obj = gameId(sourceUserId[11]);
      const tmp6Result = source(sourceUserId[12])(source(sourceUserId[13]).openURL);
      noop = tmp6Result;
      viewId = num(
        noop.useState(() => gameId(sourceUserId[14]).generateViewId()),
        1,
      )[0];
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
      let items = [num];
      const callback = obj2.useCallback(() => {
        let tmp2 = num > 0;
        if (tmp2) {
          tmp2 = !ref.current;
        }
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
      const tmp2Result = gameId(sourceUserId[17]);
      if (data != null) {
        id = data.id;
      }
      source(sourceUserId[18])({ gameId: id, scrollY: sharedValue });
      const tmp5Result = source(sourceUserId[18]);
      sharedValue1 = gameId(sourceUserId[17]).useSharedValue(0);
      const tmp2Result8 = gameId(sourceUserId[17]);
      sharedValue2 = gameId(sourceUserId[17]).useSharedValue(0);
      const tmp2Result9 = gameId(sourceUserId[17]);
      class W {
        constructor() {
          obj = closure_11;
          tmp = closure_11.get() > 0;
          if (tmp) {
            tmp2 = closure_9;
            value = closure_9.get();
            tmp4 = c10;
            tmp = value >= obj.get() - c10;
          }
          return tmp;
        }
      }
      W.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
      W.__workletHash = 5065405682310;
      W.__initData = __initData5;
      class U {
        constructor(arg0, arg1) {
          if (gameId !== arg1) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp = closure_12;
            obj = closure_0(closure_2[19]);
            num = 0;
            if (gameId) {
              num = 1;
            }
            result = closure_12.set(obj.withTiming(num, { duration: 150 }));
          }
          return;
        }
      }
      const obj4 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
      const tmp2Result10 = gameId(sourceUserId[17]);
      U.__closure = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[19]).withTiming };
      U.__workletHash = 6249404580523;
      U.__initData = __initData6;
      const animatedReaction = tmp2Result10.useAnimatedReaction(W, U);
      const obj5 = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[19]).withTiming };
      class Q {
        constructor() {
          obj = { transform: null };
          obj1 = { translateY: null };
          obj3 = closure_0(closure_2[17]);
          obj1.translateY = obj3.interpolate(closure_12.get(), [0, 1], [-56, 0]);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      const tmp2Result11 = gameId(sourceUserId[17]);
      Q.__closure = {
        interpolate: gameId(sourceUserId[17]).interpolate,
        stickyHeaderVisible: sharedValue2,
        STICKY_HEADER_HEIGHT,
      };
      Q.__workletHash = 6838413565739;
      Q.__initData = callback1;
      const animatedStyle = tmp2Result11.useAnimatedStyle(Q);
      const obj6 = {
        interpolate: gameId(sourceUserId[17]).interpolate,
        stickyHeaderVisible: sharedValue2,
        STICKY_HEADER_HEIGHT,
      };
      sharedValue3 = gameId(sourceUserId[17]).useSharedValue(Infinity);
      const tmp8Result = num(noop.useState(false), 2);
      first2 = tmp8Result[0];
      closure_15 = tmp28;
      const tmp2Result12 = gameId(sourceUserId[17]);
      class Z {
        constructor() {
          value = closure_9.get();
          return value > closure_13.get() - c10;
        }
      }
      Z.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
      Z.__workletHash = 14590762926099;
      Z.__initData = selectionVersion;
      class X {
        constructor(arg0, arg1) {
          if (gameId !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[17]);
            tmp3 = closure_15;
            tmp4 = obj.runOnJS(closure_15)(gameId);
          }
          return;
        }
      }
      const tmp2Result13 = gameId(sourceUserId[17]);
      X.__closure = { runOnJS: gameId(sourceUserId[17]).runOnJS, setShowGetButton: tmp8Result[1] };
      X.__workletHash = 5106828361905;
      X.__initData = first3;
      const animatedReaction1 = tmp2Result13.useAnimatedReaction(Z, X);
      const obj7 = { runOnJS: gameId(sourceUserId[17]).runOnJS, setShowGetButton: tmp8Result[1] };
      gameProfileStoreWebsites = gameId(sourceUserId[20]).useGameProfileStoreWebsites(data);
      const items1 = [gameProfileStoreWebsites];
      memo = obj2.useMemo(() => {
        const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
        return mapped.filter((item) => null != item);
      }, items1);
      __initData5 = obj2.useRef(undefined);
      __initData6 = obj2.useRef(null);
      const items2 = [name];
      const effect = obj2.useEffect(() => {
        closure_18.current = name;
      }, items2);
      const items3 = [first1];
      const effect1 = obj2.useEffect(() => {
        closure_19.current = first1;
      }, items3);
      const items4 = [gameId, viewId, source];
      callback1 = obj2.useCallback((action, similarGameId) => {
        const guildIdAndVerifiedFromInvite = GameProfileAnalyticUtils.getGuildIdAndVerifiedFromInvite(ref3.current);
        ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
        let str = ref2.current;
        if (str == null) {
          str = "";
        }
        const result = GameProfileAnalyticUtils.trackGameProfileAction({
          gameName: str,
          gameId,
          action,
          similarGameId,
          viewId,
          guildId,
          isVerified,
          source,
        });
      }, items4);
      const tmp2Result14 = gameId(sourceUserId[20]);
      ({ navigation, selectionVersion } = source(sourceUserId[22])(callback1));
      const tmp8Result2 = num(noop.useState(0), 2);
      first3 = tmp8Result2[0];
      closure_23 = tmp8Result2[1];
      const items5 = [first3];
      const callback2 = obj2.useCallback((nativeEvent) => {
        closure_23(nativeEvent.nativeEvent.layout.height);
      }, []);
      const items6 = [selectionVersion];
      const memo1 = obj2.useMemo(() => ({ paddingBottom: first3 }), items5);
      const layoutEffect = obj2.useLayoutEffect(() => {
        if (selectionVersion > 0) {
          current = ref.current;
          if (current != null) {
            current.scrollTo({ y: 0, animated: false });
          }
        }
      }, items6);
      const items7 = [memo, callback1, tmp6Result];
      callback3 = obj2.useCallback(() => {
        if (1 === memo.length) {
          const first = _slicedToArray(memo, 1)[0];
          callback1(first.action);
          closure_4(first.url);
        } else if (memo.length > 1) {
          const obj3 = {
            key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY,
            content: null,
            stackingBehavior: "stack",
          };
          let str = ref2.current;
          const obj2 = ActionSheetActionCreators;
          if (str == null) {
            str = "";
          }
          const obj = { gameName: str, websiteButtons: memo, trackAction: callback1 };
          obj3.content = closure_2_8(GameProfileStoreLinksActionSheetDefault, obj);
          obj2.showActionSheet(obj3);
        }
      }, items7);
      const items8 = [gameId, source, sourceUserId, viewId];
      const effect2 = obj2.useEffect(() => {
        const obj2 = { source, viewId, gameId, gameName: null, authorId: null, profileType: null };
        let str = ref2.current;
        if (str == null) {
          str = "";
        }
        obj2.gameName = str;
        obj2.authorId = sourceUserId;
        obj2.profileType = GameProfileAnalyticUtils.GameProfileTypes.FullProfile;
        GameProfileAnalyticUtils.trackGameProfileOpen(obj2);
      }, items8);
      const items9 = [gameId, source, sourceUserId, viewId];
      const effect3 = obj2.useEffect(
        () => () => {
          const guildIdAndVerifiedFromInvite = gameId(sourceUserId[14]).getGuildIdAndVerifiedFromInvite(ref2.current);
          ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
          const obj = gameId(sourceUserId[14]);
          const obj3 = {
            viewId,
            gameId,
            gameName: null,
            playedFriendIds: null,
            playedFriendsData: null,
            similarGames: null,
            guildId: null,
            isVerified: null,
          };
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
        },
        items9,
      );
      const items10 = [sharedValue1];
      const items11 = [sharedValue3];
      const callback4 = obj2.useCallback((arg0) => {
        const result = sharedValue1.set(arg0);
      }, items10);
      const items12 = [memo, first2, callback3];
      const callback5 = obj2.useCallback((arg0) => {
        const result = sharedValue3.set(arg0);
      }, items11);
      const memo2 = obj2.useMemo(() => {
        let fn;
        if (memo.length > 0) {
          if (first2) {
            fn = () => name(sharedValue2, { onPress });
          }
        }
        return fn;
      }, items12);
      const obj8 = {
        ref: bottomSheetRef,
        startExpanded: true,
        scrollable: true,
        handleDisabled: true,
        onExpand: callback,
        children: null,
      };
      if (!isLoading) {
        if (null != data) {
          let tmp51 = name;
          const obj9 = {
            ref,
            style: tmp.scrollView,
            contentContainerStyle: memo1,
            lockableScrollableContentOffsetY: sharedValue,
            children: null,
          };
          const obj10 = { obscured: tmp12, children: null };
          let tmp51Result = navigation.selectedTab === tmp2(tmp3[27]).GameProfileNavTab.OVERVIEW;
          if (tmp51Result) {
            const obj11 = {
              game: data,
              invite: first1,
              viewId,
              source,
              trackAction: callback1,
              onGuildInviteResolved: tmp13[1],
              closeModal() {
                return source(sourceUserId[23]).hideAllActionSheets();
              },
              scrollY: sharedValue,
              websiteButtons: memo,
              onStoreLinksMeasured: callback5,
              onHeaderHeightMeasured: callback4,
            };
            tmp51Result = tmp51(tmp5(tmp3[28]), obj11);
          }
          obj10.children = tmp51Result;
          obj9.children = tmp51(tmp5(tmp3[26]), obj10);
          let tmp51Result3 = tmp51(tmp2(tmp3[25]).BottomSheetScrollView, obj9);
          const tmp5Result2 = tmp5(tmp3[26]);
        }
        const items13 = [tmp51Result3, , ,];
        const obj12 = { style: null, pointerEvents: "box-none", children: null };
        const items14 = [tmp.stickyHeader, animatedStyle];
        obj12.style = items14;
        const obj13 = { game: data, headerRight: memo2 };
        obj12.children = tmp51(tmp5(tmp3[29]), obj13);
        items13[1] = tmp51(tmp5(tmp3[17]).View, obj12);
        let tmp51Result4 = !isLoading;
        if (!isLoading) {
          tmp51Result4 = null != data;
        }
        if (tmp51Result4) {
          const obj14 = { game: data, navigation, onLayout: callback2 };
          tmp51Result4 = tmp51(tmp5(tmp3[30]), obj14);
        }
        items13[2] = tmp51Result4;
        const obj15 = { variant: "overlay", onPress: bottomSheetClose };
        items13[3] = tmp51(tmp2(tmp3[31]).ActionSheetHeaderBar, obj15);
        obj8.children = items13;
        return tmp47(tmp48, obj8);
      }
      const tmp35 = source(sourceUserId[22])(callback1);
      tmp47 = sharedValue;
      tmp51Result3 = name(viewId, {
        style: tmp.loadingContainer,
        children: name(ref, { animating: true, size: "large" }),
      });
      tmp51 = name;
    };
