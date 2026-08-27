// === Module 8732: GetButton ===

// Module 8732 (GetButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4880 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "getSimilarGames" /* 8733 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.l8JeHg);
  obj[3] = onPress.onPress;
  const intl2 = getSystemLocale.intl;
  obj[4] = intl2.string(getSystemLocale.t.Vsxqmz);
  return callback(Button.Button, obj);
}
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { loadingContainer: null, scrollView: null, stickyHeader: null };
createCacheKey = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_13 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_14 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_15 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_16 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let React;
  let first;
  let ref;
  let ref1;
  let first1;
  let name;
  let sharedValue;
  closure_11 = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  closure_16 = undefined;
  let gameProfileStoreWebsites;
  let memo;
  closure_19 = undefined;
  closure_20 = undefined;
  let callback2;
  let callback3;
  let tmp = sharedValue();
  let obj = gameId(sourceUserId[9]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp6Result = source(sourceUserId[10])(source(sourceUserId[11]).openURL);
  React = tmp6Result;
  obj1 = React;
  first = num(React.useState(() => gameId(sourceUserId[12]).generateViewId()), 1)[0];
  ref = React.useRef(null);
  ref1 = React.useRef(0);
  let obj2 = gameId(sourceUserId[13]);
  const game = obj2.useGame(gameId);
  ({ data, isLoading } = game);
  const tmp6 = source(sourceUserId[10]);
  const tmp8 = num;
  const tmp14 = num(React.useState(null), 2);
  first1 = tmp14[0];
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  let tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  let items = [sharedValue];
  const callback = obj1.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const result = sharedValue.set(y);
    ref1.current = y;
  }, items);
  closure_11 = obj1.useRef(false);
  const items1 = [num];
  const callback1 = obj1.useCallback(() => {
    let tmp2 = num > 0;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { y: null, animated: false };
        obj[0] = num;
        current.scrollTo(obj);
      }
    }
  }, items1);
  let id;
  let tmp5Result = tmp5(tmp3[16]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollOffsetRef: ref1 });
  tmp2Result = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  let tmp13 = source(sourceUserId[14])(data);
  sharedValue2 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result1 = gameId(sourceUserId[15]);
  class U {
    constructor() {
      obj = closure_12;
      tmp = closure_12.get() > 0;
      if (tmp) {
        tmp2 = closure_10;
        value = closure_10.get();
        num = 56;
        tmp = value >= obj.get() - 56;
      }
      return tmp;
    }
  }
  U.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  U.__workletHash = 15395308691297;
  U.__initData = sharedValue1;
  let fn = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      num = 0;
      if (arg0) {
        num = 1;
      }
      const result = sharedValue2.set(gameId(sourceUserId[17]).withTiming(num, { duration: 150 }));
      const obj = gameId(sourceUserId[17]);
    }
  };
  obj = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[17]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 3161097061646;
  fn.__initData = sharedValue2;
  const animatedReaction = gameId(sourceUserId[15]).useAnimatedReaction(U, fn);
  const tmp2Result2 = gameId(sourceUserId[15]);
  const fn2 = function q() {
    let obj = { transform: null };
    obj = { translateY: gameId(sourceUserId[15]).interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  fn2.__closure = obj;
  fn2.__workletHash = 16452163547712;
  fn2.__initData = sharedValue3;
  const animatedStyle = gameId(sourceUserId[15]).useAnimatedStyle(fn2);
  const tmp2Result3 = gameId(sourceUserId[15]);
  sharedValue3 = gameId(sourceUserId[15]).useSharedValue(Infinity);
  const tmp8Result = tmp8(obj1.useState(false), 2);
  first2 = tmp8Result[0];
  closure_16 = tmp30;
  const tmp2Result4 = gameId(sourceUserId[15]);
  class X {
    constructor() {
      value = closure_10.get();
      return value > closure_14.get() - 56;
    }
  }
  X.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  X.__workletHash = 14521195063038;
  X.__initData = first2;
  class Q {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = gameId;
        tmp2 = sourceUserId;
        obj = gameId(sourceUserId[15]);
        tmp3 = closure_16;
        tmp4 = obj.runOnJS(closure_16)(gameId);
      }
      return;
    }
  }
  obj1 = { runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp30 };
  Q.__closure = obj1;
  Q.__workletHash = 15045914286853;
  Q.__initData = closure_16;
  const animatedReaction1 = gameId(sourceUserId[15]).useAnimatedReaction(X, Q);
  const tmp2Result5 = gameId(sourceUserId[15]);
  gameProfileStoreWebsites = gameId(sourceUserId[18]).useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj1.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(source(sourceUserId[19]));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  closure_19 = obj1.useRef(undefined);
  closure_20 = obj1.useRef(null);
  const items3 = [name];
  const effect = obj1.useEffect(() => {
    closure_19.current = name;
  }, items3);
  const items4 = [first1];
  const effect1 = obj1.useEffect(() => {
    closure_20.current = first1;
  }, items4);
  const items5 = [gameId, first, source];
  callback2 = obj1.useCallback((action, similarGameId) => {
    let obj = gameId(sourceUserId[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj = { gameName: str, gameId, action, similarGameId, viewId: first, guildId, isVerified, source };
    const result = gameId(sourceUserId[12]).trackGameProfileAction(obj);
  }, items5);
  const items6 = [memo, callback2, tmp6Result];
  callback3 = obj1.useCallback(() => {
    if (1 === memo.length) {
      first = num(arr, 1)[0];
      callback2(first.action);
      callback(first.url);
    } else if (arr.length > 1) {
      let obj = { key: null, content: null, stackingBehavior: "stack" };
      obj[0] = gameId(sourceUserId[21]).ACTION_SHEET_KEY;
      let str = ref2.current;
      const obj2 = gameId(sourceUserId[20]);
      const tmp11 = first1;
      if (str == null) {
        str = "";
      }
      obj = { gameName: null, websiteButtons: null, trackAction: null };
      obj[0] = str;
      obj[1] = arr;
      obj[2] = callback2;
      obj[1] = tmp11(source(sourceUserId[21]), obj);
      obj2.showActionSheet(obj);
      const tmp13 = source(sourceUserId[21]);
    }
  }, items6);
  const items7 = [gameId, source, sourceUserId, first];
  const effect2 = obj1.useEffect(() => {
    let obj = gameId(sourceUserId[12]);
    obj = { source, viewId: first, gameId, gameName: null, authorId: null, profileType: null };
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj[3] = str;
    obj[4] = sourceUserId;
    obj[5] = gameId(sourceUserId[12]).GameProfileTypes.FullProfile;
    obj.trackGameProfileOpen(obj);
  }, items7);
  const items8 = [gameId, source, sourceUserId, first];
  const effect3 = obj1.useEffect(() => () => {
    let obj = closure_1_0(closure_1_2[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    obj = { viewId: closure_5, gameId: closure_0, gameName: null, playedFriendIds: null, playedFriendsData: null, similarGames: null, guildId: null, isVerified: null };
    let str = ref.current;
    if (str == null) {
      str = "";
    }
    obj[2] = str;
    obj[3] = [];
    obj[4] = [];
    let similarGames = closure_1_7.getSimilarGames(closure_0);
    if (similarGames == null) {
      similarGames = [];
    }
    obj[5] = similarGames;
    obj[6] = guildId;
    obj[7] = isVerified;
    const result = closure_1_0(closure_1_2[12]).trackGameProfileClose(obj);
  }, items8);
  const items9 = [sharedValue1];
  const items10 = [sharedValue3];
  const callback4 = obj1.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items9);
  const items11 = [memo, first2, callback3];
  const callback5 = obj1.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items10);
  const memo1 = obj1.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => closure_1_8(closure_1_11, { onPress: closure_22 });
      }
    }
    return fn;
  }, items11);
  obj2 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback1, children: null };
  if (!isLoading) {
    if (null != data) {
      let tmp46 = first1;
      const obj3 = { ref: null, style: null, onScroll: null, children: null };
      obj3[0] = ref;
      obj3[1] = tmp.scrollView;
      obj3[2] = callback;
      const obj4 = { obscured: null, children: null };
      obj4[0] = tmp13;
      tmp5Result = tmp5(tmp3[24]);
      const obj5 = { game: null, invite: null, viewId: null, source: null, trackAction: null, onGuildInviteResolved: null, closeModal: null, scrollY: null, websiteButtons: null, onStoreLinksMeasured: null, onHeaderHeightMeasured: null, scrollOffsetRef: null };
      obj5[0] = data;
      obj5[1] = first1;
      obj5[2] = first;
      obj5[3] = source;
      obj5[4] = callback2;
      obj5[5] = tmp14[1];
      obj5[6] = function closeModal() {
        return source(sourceUserId[20]).hideAllActionSheets();
      };
      obj5[7] = sharedValue;
      obj5[8] = memo;
      obj5[9] = callback5;
      obj5[10] = callback4;
      obj5[11] = ref1;
      obj4[1] = first1(tmp5(tmp3[25]), obj5);
      obj3[3] = first1(tmp5Result, obj4);
      let tmp45 = first1(tmp2(tmp3[23]).BottomSheetScrollView, obj3);
    }
    const items12 = [tmp45, , ];
    const obj6 = { style: null, pointerEvents: "box-none", children: null };
    const items13 = [tmp.stickyHeader, animatedStyle];
    obj6[0] = items13;
    const obj7 = { game: null, headerRight: null };
    obj7[0] = data;
    obj7[1] = memo1;
    obj6[2] = tmp46(tmp5(tmp3[26]), obj7);
    items12[1] = tmp46(tmp5(tmp3[15]).View, obj6);
    const obj8 = { variant: "overlay", onPress: null };
    obj8[1] = bottomSheetClose;
    items12[2] = tmp46(tmp2(tmp3[27]).ActionSheetHeaderBar, obj8);
    obj2[5] = items12;
    return tmp43(tmp44, obj2);
  }
  const tmp2Result6 = gameId(sourceUserId[18]);
  tmp43 = name;
  tmp45 = first1(first, { style: tmp.loadingContainer, children: first1(ref, { animating: true, size: "large" }) });
  tmp46 = first1;
};