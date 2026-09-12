// discord_app/modules/game_profile/native/components/GameProfileScreen.tsx
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
fn(4636);
let createStyles = { loadingContainer: null, scrollView: null, stickyHeader: null };
createStyles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  minHeight: 300,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.loadingContainer = createStyles;
createStyles.scrollView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_10 = createStyles.createStyles(createStyles);
let closure_12 = {
  code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}",
};
let closure_13 = {
  code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}",
};
let closure_14 = {
  code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}",
};
let __initData = {
  code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}",
};
let closure_16 = {
  code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}",
};
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
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  __initData = undefined;
  let gameProfileStoreWebsites;
  let memo;
  let callback1;
  let callback2;
  let tmp = ref();
  let obj = gameId(sourceUserId[9]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp6Result = source(sourceUserId[10])(source(sourceUserId[11]).openURL);
  noop = tmp6Result;
  let obj1 = noop;
  const viewId = num(
    noop.useState(() => gameId(sourceUserId[12]).generateViewId()),
    1,
  )[0];
  ref = noop.useRef(null);
  let obj2 = gameId(sourceUserId[13]);
  const game = obj2.useGame(gameId);
  ({ data, isLoading } = game);
  const tmp6 = source(sourceUserId[10]);
  const tmp8 = num;
  let tmp13 = num(noop.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  let tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  ref = obj1.useRef(false);
  let items = [num];
  const callback = obj1.useCallback(() => {
    let tmp2 = num > 0;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { y: num, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items);
  let id;
  let tmp5Result = tmp5(tmp3[16]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollY: sharedValue });
  tmp2Result = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  const tmp12 = source(sourceUserId[14])(data);
  sharedValue2 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result1 = gameId(sourceUserId[15]);
  let fn = function j() {
    let tmp = sharedValue1.get() > 0;
    if (tmp) {
      value = sharedValue.get();
      tmp = value >= sharedValue1.get() - 56;
    }
    return tmp;
  };
  fn.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  fn.__workletHash = 15395308691297;
  fn.__initData = sharedValue2;
  class M {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp = closure_12;
        obj = closure_0(closure_2[17]);
        num = 0;
        if (gameId) {
          num = 1;
        }
        result = closure_12.set(obj.withTiming(num, { duration: 150 }));
      }
      return;
    }
  }
  obj = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[17]).withTiming };
  M.__closure = obj;
  M.__workletHash = 3161097061646;
  M.__initData = sharedValue3;
  const animatedReaction = gameId(sourceUserId[15]).useAnimatedReaction(fn, M);
  const tmp2Result2 = gameId(sourceUserId[15]);
  class W {
    constructor() {
      obj = { transform: null };
      obj = { translateY: null };
      obj3 = closure_0(closure_2[15]);
      obj.translateY = obj3.interpolate(closure_12.get(), [0, 1], [-56, 0]);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  W.__closure = obj;
  W.__workletHash = 16452163547712;
  W.__initData = first2;
  const animatedStyle = gameId(sourceUserId[15]).useAnimatedStyle(W);
  const tmp2Result3 = gameId(sourceUserId[15]);
  sharedValue3 = gameId(sourceUserId[15]).useSharedValue(Infinity);
  const tmp8Result = tmp8(obj1.useState(false), 2);
  first2 = tmp8Result[0];
  __initData = tmp28;
  const tmp2Result4 = gameId(sourceUserId[15]);
  class Q {
    constructor() {
      value = closure_9.get();
      return value > closure_13.get() - 56;
    }
  }
  Q.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  Q.__workletHash = 14521195063038;
  Q.__initData = __initData;
  const fn2 = function q(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_15)(arg0);
    }
  };
  obj1 = { runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp28 };
  fn2.__closure = obj1;
  fn2.__workletHash = 15045914286853;
  fn2.__initData = gameProfileStoreWebsites;
  const animatedReaction1 = gameId(sourceUserId[15]).useAnimatedReaction(Q, fn2);
  const tmp2Result5 = gameId(sourceUserId[15]);
  gameProfileStoreWebsites = gameId(sourceUserId[18]).useGameProfileStoreWebsites(data);
  const items1 = [gameProfileStoreWebsites];
  memo = obj1.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items1);
  obj1.useRef(undefined);
  obj1.useRef(null);
  const items2 = [name];
  const effect = obj1.useEffect(() => {
    closure_18.current = name;
  }, items2);
  const items3 = [first1];
  const effect1 = obj1.useEffect(() => {
    closure_19.current = first1;
  }, items3);
  const items4 = [gameId, viewId, source];
  callback1 = obj1.useCallback((action, similarGameId) => {
    let obj = GameProfileAnalyticUtils;
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj = { gameName: str, gameId, action, similarGameId, viewId, guildId, isVerified, source };
    const result = GameProfileAnalyticUtils.trackGameProfileAction(obj);
  }, items4);
  const items5 = [memo, callback1, tmp6Result];
  callback2 = obj1.useCallback(() => {
    if (1 === memo.length) {
      const first = _slicedToArray(memo, 1)[0];
      callback1(first.action);
      closure_4(first.url);
    } else if (memo.length > 1) {
      let obj = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: null, stackingBehavior: "stack" };
      let str = ref2.current;
      const obj2 = ActionSheetActionCreators;
      if (str == null) {
        str = "";
      }
      obj = { gameName: str, websiteButtons: memo, trackAction: callback1 };
      obj.content = React6(GameProfileStoreLinksActionSheetDefault, obj);
      obj2.showActionSheet(obj);
    }
  }, items5);
  const items6 = [gameId, source, sourceUserId, viewId];
  const effect2 = obj1.useEffect(() => {
    const obj = { source, viewId, gameId, gameName: null, authorId: null, profileType: null };
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj.gameName = str;
    obj.authorId = sourceUserId;
    obj.profileType = GameProfileAnalyticUtils.GameProfileTypes.FullProfile;
    obj.trackGameProfileOpen(obj);
  }, items6);
  const items7 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj1.useEffect(
    () => () => {
      let obj = gameId(sourceUserId[12]);
      const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
      ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
      obj = {
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
      obj.gameName = str;
      obj.playedFriendIds = [];
      obj.playedFriendsData = [];
      let similarGames = first1.getSimilarGames(gameId);
      if (similarGames == null) {
        similarGames = [];
      }
      obj.similarGames = similarGames;
      obj.guildId = guildId;
      obj.isVerified = isVerified;
      const result = gameId(sourceUserId[12]).trackGameProfileClose(obj);
      const obj2 = gameId(sourceUserId[12]);
    },
    items7,
  );
  const items8 = [sharedValue1];
  const items9 = [sharedValue3];
  const callback3 = obj1.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items8);
  const items10 = [memo, first2, callback2];
  const callback4 = obj1.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items9);
  const memo1 = obj1.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => name(sharedValue1, { onPress });
      }
    }
    return fn;
  }, items10);
  obj2 = {
    ref: bottomSheetRef,
    startExpanded: true,
    scrollable: true,
    handleDisabled: true,
    onExpand: callback,
    children: null,
  };
  if (!isLoading) {
    if (null != data) {
      let tmp44 = name;
      const obj3 = { ref, style: tmp.scrollView, lockableScrollableContentOffsetY: sharedValue, children: null };
      const obj4 = { obscured: tmp12, children: null };
      tmp5Result = tmp5(tmp3[24]);
      const obj5 = {
        game: data,
        invite: first1,
        viewId,
        source,
        trackAction: callback1,
        onGuildInviteResolved: tmp13[1],
        closeModal() {
          return source(sourceUserId[20]).hideAllActionSheets();
        },
        scrollY: sharedValue,
        websiteButtons: memo,
        onStoreLinksMeasured: callback4,
        onHeaderHeightMeasured: callback3,
      };
      obj4.children = name(tmp5(tmp3[25]), obj5);
      obj3.children = name(tmp5Result, obj4);
      let tmp43 = name(tmp2(tmp3[23]).BottomSheetScrollView, obj3);
    }
    const items11 = [tmp43, ,];
    const obj6 = { style: null, pointerEvents: "box-none", children: null };
    const items12 = [tmp.stickyHeader, animatedStyle];
    obj6.style = items12;
    const obj7 = { game: data, headerRight: memo1 };
    obj6.children = tmp44(tmp5(tmp3[26]), obj7);
    items11[1] = tmp44(tmp5(tmp3[15]).View, obj6);
    const obj8 = { variant: "overlay", onPress: bottomSheetClose };
    items11[2] = tmp44(tmp2(tmp3[27]).ActionSheetHeaderBar, obj8);
    obj2.children = items11;
    return tmp41(tmp42, obj2);
  }
  const tmp2Result6 = gameId(sourceUserId[18]);
  tmp41 = sharedValue;
  tmp43 = name(viewId, { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) });
  tmp44 = name;
}
