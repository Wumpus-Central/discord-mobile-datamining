// === Module 9321: GameProfileScreen ===

// Module 9321 (GameProfileScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9320 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 9347 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 9366 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 9322 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t.Vsxqmz);
  return React6(components_Button_Button.Button, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, scrollView: null, stickyHeader: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.scrollView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_10 = createStyles.createStyles(obj2);
let closure_12 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_13 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_14 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_15 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let ref;
  closure_11 = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  __initData = undefined;
  let gameProfileStoreWebsites;
  let memo;
  let callback1;
  selectionVersion = undefined;
  let first3;
  closure_24 = undefined;
  let callback3;
  let tmp = ref();
  const bottomSheetRef1 = gameId(sourceUserId[9]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let obj = gameId(sourceUserId[9]);
  const tmp6Result = source(sourceUserId[10])(source(sourceUserId[11]).openURL);
  noop = tmp6Result;
  const viewId = num(noop.useState(() => gameId(sourceUserId[12]).generateViewId()), 1)[0];
  ref = noop.useRef(null);
  const tmp6 = source(sourceUserId[10]);
  const game = gameId(sourceUserId[13]).useGame(gameId);
  ({ data, isLoading } = game);
  let obj3 = gameId(sourceUserId[13]);
  let tmp13 = num(noop.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  const tmp12 = source(sourceUserId[14])(data);
  sharedValue = gameId(sourceUserId[15]).useSharedValue(0);
  ref = obj2.useRef(false);
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
      const result = source(sourceUserId[16]).clearGameProfilePendingReturn(gameId);
      const obj = source(sourceUserId[16]);
    }
  }, items1);
  let id;
  const tmp2Result = gameId(sourceUserId[15]);
  if (data != null) {
    id = data.id;
  }
  source(sourceUserId[17])({ gameId: id, scrollY: sharedValue });
  const tmp5Result = source(sourceUserId[17]);
  sharedValue1 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result8 = gameId(sourceUserId[15]);
  sharedValue2 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result9 = gameId(sourceUserId[15]);
  class W {
    constructor() {
      obj = closure_12;
      tmp = closure_12.get() > 0;
      if (tmp) {
        tmp2 = closure_9;
        value = closure_9.get();
        num = 56;
        tmp = value >= obj.get() - 56;
      }
      return tmp;
    }
  }
  W.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  W.__workletHash = 15395308691297;
  W.__initData = sharedValue1;
  let fn = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      num = 0;
      if (arg0) {
        num = 1;
      }
      const result = sharedValue2.set(timing.withTiming(num, { duration: 150 }));
    }
  };
  const tmp2Result10 = gameId(sourceUserId[15]);
  fn.__closure = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[18]).withTiming };
  fn.__workletHash = 3161097061646;
  fn.__initData = sharedValue2;
  const animatedReaction = tmp2Result10.useAnimatedReaction(W, fn);
  let obj4 = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[18]).withTiming };
  class Q {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[15]);
      obj1.translateY = obj3.interpolate(closure_13.get(), [0, 1], [-56, 0]);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result11 = gameId(sourceUserId[15]);
  Q.__closure = { interpolate: gameId(sourceUserId[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  Q.__workletHash = 16452163547712;
  Q.__initData = sharedValue3;
  const animatedStyle = tmp2Result11.useAnimatedStyle(Q);
  const obj5 = { interpolate: gameId(sourceUserId[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  sharedValue3 = gameId(sourceUserId[15]).useSharedValue(Infinity);
  const tmp8Result = num(noop.useState(false), 2);
  first2 = tmp8Result[0];
  __initData = tmp29;
  const tmp2Result12 = gameId(sourceUserId[15]);
  class Z {
    constructor() {
      value = closure_9.get();
      return value > closure_14.get() - 56;
    }
  }
  Z.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  Z.__workletHash = 14521195063038;
  Z.__initData = first2;
  class X {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_16;
        tmp4 = obj.runOnJS(closure_16)(gameId);
      }
      return;
    }
  }
  const tmp2Result13 = gameId(sourceUserId[15]);
  X.__closure = { runOnJS: gameId(sourceUserId[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  X.__workletHash = 15045914286853;
  X.__initData = __initData;
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(Z, X);
  const obj6 = { runOnJS: gameId(sourceUserId[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  gameProfileStoreWebsites = gameId(sourceUserId[19]).useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items2);
  noop.useRef(undefined);
  noop.useRef(null);
  const items3 = [name];
  const effect1 = obj2.useEffect(() => {
    closure_19.current = name;
  }, items3);
  const items4 = [first1];
  const effect2 = obj2.useEffect(() => {
    closure_20.current = first1;
  }, items4);
  const items5 = [gameId, viewId, source];
  callback1 = obj2.useCallback((action) => {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const communityGuildId = obj.communityGuildId;
    const guildIdAndVerifiedFromInvite = GameProfileAnalyticUtils.getGuildIdAndVerifiedFromInvite(ref3.current);
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    const obj4 = { gameName: str, gameId, action, similarGameId: obj.similarGameId, viewId, guildId: null, isVerified: null, source: null };
    let guildId = communityGuildId;
    if (communityGuildId == null) {
      guildId = guildIdAndVerifiedFromInvite.guildId;
    }
    obj4.guildId = guildId;
    obj4.isVerified = null == communityGuildId && guildIdAndVerifiedFromInvite.isVerified;
    obj4.source = source;
    const result = GameProfileAnalyticUtils.trackGameProfileAction(obj4);
  }, items5);
  const tmp2Result14 = gameId(sourceUserId[19]);
  ({ navigation, selectionVersion } = source(sourceUserId[21])(callback1, gameId.initialTab));
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
      obj3.content = React6(GameProfileStoreLinksActionSheetDefault, obj);
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
    const guildIdAndVerifiedFromInvite = gameId(sourceUserId[12]).getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj = gameId(sourceUserId[12]);
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
    const result = gameId(sourceUserId[12]).trackGameProfileClose(obj3);
    const obj2 = gameId(sourceUserId[12]);
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
        fn = () => name(closure_11, { onPress });
      }
    }
    return fn;
  }, items13);
  const obj7 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  if (!isLoading) {
    if (null != data) {
      let tmp55 = name;
      const obj8 = { ref, style: tmp.scrollView, contentContainerStyle: memo1, lockableScrollableContentOffsetY: sharedValue, children: null };
      const obj9 = { obscured: tmp12, children: null };
      let tmp55Result = selectedTab === tmp2(tmp3[27]).GameProfileNavTab.OVERVIEW;
      if (tmp55Result) {
        const obj10 = { game: data, invite: first1, viewId, source, trackAction: callback1, onGuildInviteResolved: tmp13[1], closeModal: tmp5(tmp3[22]).hideAllActionSheets, scrollY: sharedValue, websiteButtons: memo, onStoreLinksMeasured: callback5, onHeaderHeightMeasured: callback4 };
        tmp55Result = tmp55(tmp5(tmp3[28]), obj10);
        const tmp5Result5 = tmp5(tmp3[28]);
      }
      const items14 = [tmp55Result, ];
      let tmp55Result4 = selectedTab === tmp2(tmp3[27]).GameProfileNavTab.COMMUNITIES;
      if (tmp55Result4) {
        const obj11 = { game: data, viewId, scrollY: sharedValue, trackAction: callback1, closeModal: tmp5(tmp3[22]).hideAllActionSheets };
        tmp55Result4 = tmp55(tmp5(tmp3[29]), obj11);
        const tmp5Result6 = tmp5(tmp3[29]);
      }
      items14[1] = tmp55Result4;
      obj9.children = items14;
      obj8.children = tmp48(tmp5(tmp3[26]), obj9);
      let tmp55Result5 = tmp55(tmp2(tmp3[25]).BottomSheetScrollView, obj8);
      const tmp5Result4 = tmp5(tmp3[26]);
    }
    const items15 = [tmp55Result5, , , ];
    const obj12 = { style: null, pointerEvents: "box-none", children: null };
    const items16 = [tmp.stickyHeader, animatedStyle];
    obj12.style = items16;
    const obj13 = { game: data, headerRight: memo2 };
    obj12.children = tmp55(tmp5(tmp3[30]), obj13);
    items15[1] = tmp55(tmp5(tmp3[15]).View, obj12);
    let tmp55Result6 = !isLoading;
    if (!isLoading) {
      tmp55Result6 = null != data;
    }
    if (tmp55Result6) {
      const obj14 = { game: data, navigation, onLayout: callback2 };
      tmp55Result6 = tmp55(tmp5(tmp3[31]), obj14);
    }
    items15[2] = tmp55Result6;
    const obj15 = { variant: "overlay", onPress: bottomSheetClose };
    items15[3] = tmp55(tmp2(tmp3[32]).ActionSheetHeaderBar, obj15);
    obj7.children = items15;
    return tmp48(tmp49, obj7);
  }
  const tmp36 = source(sourceUserId[21])(callback1, gameId.initialTab);
  tmp55Result5 = name(viewId, { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) });
  tmp55 = name;
};