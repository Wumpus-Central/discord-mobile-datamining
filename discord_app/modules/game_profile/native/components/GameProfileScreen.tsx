// discord_app/modules/game_profile/native/components/GameProfileScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import useGameProfileObscuredDefault from "../../hooks/useGameProfileObscured.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import useInAppBrowserReturnDefault from "../hooks/useInAppBrowserReturn.tsx";
import getGameProfileStoreWebsiteDataDefault from "../utils/getGameProfileStoreWebsiteData.tsx";
import useGameProfileNavigationDefault from "../../hooks/useGameProfileNavigation.tsx";
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameProfileStore from "../../GameProfileStore.tsx";

const require = globalThis.__r;
const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t.Vsxqmz);
  return React5(components_Button_Button.Button, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
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
let closure_10 = createStyles.createStyles(obj2);
let closure_12 = {
  code: "(function GameProfileScreenTsx1(){let[heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT]=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;})",
};
let closure_13 = {
  code: "(function GameProfileScreenTsx2(isVisible,wasVisible){let[stickyHeaderVisible,withTiming]=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}})",
};
let closure_14 = {
  code: "(function GameProfileScreenTsx3(){let[interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT]=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};})",
};
let closure_15 = {
  code: "(function GameProfileScreenTsx4(){let[scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT]=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;})",
};
let closure_16 = {
  code: "(function GameProfileScreenTsx5(shouldShow,prevShouldShow){let[scheduleOnRN,setShowGetButton]=this.__closure;if(shouldShow!==prevShouldShow){scheduleOnRN(setShowGetButton,shouldShow);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  gameId = gameId.gameId;
  _require = gameId;
  const source = gameId.source;
  importDefault = source;
  const sourceUserId = gameId.sourceUserId;
  dependencyMap = sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  closure_10 = undefined;
  let sharedValue1;
  let sharedValue3;
  let first2;
  let gameProfileStoreWebsites;
  let memo;
  let ref2;
  let callback1;
  selectionVersion = undefined;
  let first3;
  closure_21 = undefined;
  let callback3;
  let tmp = closure_10();
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let obj = require("useBottomSheetRef");
  const tmp6Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  noop = tmp6Result;
  const viewId = num(
    noop.useState(() => gameId(authorId[12]).generateViewId()),
    1,
  )[0];
  let ref = noop.useRef(null);
  const game = require("useGame").useGame(gameId);
  ({ data, isLoading } = game);
  let obj3 = require("useGame");
  let tmp13 = num(noop.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  const tmp12 = useGameProfileObscuredDefault(data);
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  ref = obj2.useRef(false);
  closure_10 = obj2.useRef(false);
  items = [gameId, num];
  let items1 = [gameId];
  const callback = obj2.useCallback(() => {
    closure_10.current = true;
    const result = GameProfileActionCreatorsDefault.clearGameProfilePendingReturn(c0);
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
  const effect = obj2.useEffect(
    () => () => {
      if (!ref.current) {
        const result = c1(dependencyMap[16]).clearGameProfilePendingReturn(gameId);
        const obj = c1(dependencyMap[16]);
      }
    },
    items1,
  );
  let id;
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  if (data != null) {
    id = data.id;
  }
  useInAppBrowserReturnDefault({ gameId: id, scrollY: sharedValue });
  const tmp5Result = useInAppBrowserReturnDefault;
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result8 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp2Result9 = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [sharedValue3, sharedValue1, sharedValue, 56];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items2;
  class GameProfileScreenTsx1 {
    constructor() {
      obj = closure_0;
      tmp = closure_0.get() > 0;
      if (tmp) {
        tmp2 = closure_1;
        value = closure_1.get();
        tmp4 = closure_2;
        tmp = value >= obj.get() - closure_2;
      }
      return tmp;
    }
  }
  const items3 = [tmp25, tmp26, tmp27];
  GameProfileScreenTsx1.__closure = items3;
  GameProfileScreenTsx1.__workletHash = 9423056791928;
  GameProfileScreenTsx1.__initData = tmp24;
  const items4 = [first2, sharedValue2, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  [tmp28, tmp29, tmp30] = items4;
  class GameProfileScreenTsx2 {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        num = 0;
        tmp = closure_0;
        tmp2 = closure_1;
        if (gameId) {
          num = 1;
        }
        result = closure_0.set(tmp2(num, { duration: 150 }));
      }
      return;
    }
  }
  const items5 = [tmp29, tmp30];
  GameProfileScreenTsx2.__closure = items5;
  GameProfileScreenTsx2.__workletHash = 34778771479;
  GameProfileScreenTsx2.__initData = tmp28;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    GameProfileScreenTsx1,
    GameProfileScreenTsx2,
  );
  const tmp2Result10 = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [
    gameProfileStoreWebsites,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue2,
    56,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp32, tmp33, tmp34, tmp35] = items6;
  class GameProfileScreenTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [,];
      items[0] = -1 * closure_2;
      items[1] = 0;
      obj1.translateY = closure_0(closure_1.get(), [0, 1], items);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  const items7 = [tmp33, tmp34, tmp35];
  GameProfileScreenTsx3.__closure = items7;
  GameProfileScreenTsx3.__workletHash = 8094450176409;
  GameProfileScreenTsx3.__initData = tmp32;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GameProfileScreenTsx3);
  const tmp2Result11 = require("../../../../../_runtime/metro/01652__.js");
  sharedValue3 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(Infinity);
  const tmp8Result = num(noop.useState(false), 2);
  first2 = tmp8Result[0];
  const tmp2Result12 = require("../../../../../_runtime/metro/01652__.js");
  const items8 = [memo, sharedValue, sharedValue3, 56];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp40, tmp41, tmp42, tmp43] = items8;
  class GameProfileScreenTsx4 {
    constructor() {
      value = closure_0.get();
      return value > closure_1.get() - closure_2;
    }
  }
  const items9 = [tmp41, tmp42, tmp43];
  GameProfileScreenTsx4.__closure = items9;
  GameProfileScreenTsx4.__workletHash = 6575373828455;
  GameProfileScreenTsx4.__initData = tmp40;
  const items10 = [ref2, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp8Result[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp44, tmp45, tmp46] = items10;
  class GameProfileScreenTsx5 {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, gameId);
      }
      return;
    }
  }
  const items11 = [tmp45, tmp46];
  GameProfileScreenTsx5.__closure = items11;
  GameProfileScreenTsx5.__workletHash = 2265918368241;
  GameProfileScreenTsx5.__initData = tmp44;
  const animatedReaction1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    GameProfileScreenTsx4,
    GameProfileScreenTsx5,
  );
  const tmp2Result13 = require("../../../../../_runtime/metro/01652__.js");
  gameProfileStoreWebsites = require("useGameProfileStoreWebsites").useGameProfileStoreWebsites(data);
  const items12 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items12);
  ref2 = obj2.useRef(undefined);
  noop.useRef(null);
  const items13 = [name];
  const effect1 = obj2.useEffect(() => {
    closure_16.current = name;
  }, items13);
  const items14 = [first1];
  const effect2 = obj2.useEffect(() => {
    closure_17.current = first1;
  }, items14);
  const items15 = [gameId, viewId, source];
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
    const obj4 = {
      gameName: str,
      gameId,
      action,
      similarGameId: obj.similarGameId,
      viewId,
      guildId: null,
      isVerified: null,
      source: null,
    };
    let guildId = communityGuildId;
    if (communityGuildId == null) {
      guildId = guildIdAndVerifiedFromInvite.guildId;
    }
    obj4.guildId = guildId;
    obj4.isVerified = null == communityGuildId && guildIdAndVerifiedFromInvite.isVerified;
    obj4.source = source;
    const result = GameProfileAnalyticUtils.trackGameProfileAction(obj4);
  }, items15);
  const tmp2Result14 = require("useGameProfileStoreWebsites");
  ({ navigation, selectionVersion } = useGameProfileNavigationDefault(callback1, gameId.initialTab));
  const selectedTab = navigation.selectedTab;
  const tmp8Result2 = num(noop.useState(0), 2);
  first3 = tmp8Result2[0];
  closure_21 = tmp8Result2[1];
  const items16 = [first3];
  const callback2 = obj2.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items17 = [selectionVersion];
  const memo1 = obj2.useMemo(() => ({ paddingBottom: first3 }), items16);
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (selectionVersion > 0) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
    }
  }, items17);
  const items18 = [memo, callback1, tmp6Result];
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
      obj3.content = React5(GameProfileStoreLinksActionSheetDefault, obj);
      obj2.showActionSheet(obj3);
    }
  }, items18);
  const items19 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => {
    const obj2 = { source, viewId, gameId, gameName: null, authorId: null, profileType: null };
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj2.gameName = str;
    obj2.authorId = authorId;
    obj2.profileType = GameProfileAnalyticUtils.GameProfileTypes.FullProfile;
    GameProfileAnalyticUtils.trackGameProfileOpen(obj2);
  }, items19);
  const items20 = [gameId, source, sourceUserId, viewId];
  const effect4 = obj2.useEffect(
    () => () => {
      const guildIdAndVerifiedFromInvite = gameId(10219).getGuildIdAndVerifiedFromInvite(ref2.current);
      ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
      const obj = gameId(10219);
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
      const result = gameId(10219).trackGameProfileClose(obj3);
      const obj2 = gameId(10219);
    },
    items20,
  );
  const items21 = [sharedValue1];
  const items22 = [sharedValue3];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items21);
  const items23 = [memo, first2, callback3];
  const callback5 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items22);
  const memo2 = obj2.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => name(sharedValue1, { onPress });
      }
    }
    return fn;
  }, items23);
  let obj4 = {
    ref: bottomSheetRef,
    startExpanded: true,
    scrollable: true,
    handleDisabled: true,
    onExpand: callback,
    children: null,
  };
  if (!isLoading) {
    if (null != data) {
      let tmp72 = name;
      const obj5 = {
        ref,
        style: tmp.scrollView,
        contentContainerStyle: memo1,
        lockableScrollableContentOffsetY: sharedValue,
        children: null,
      };
      const obj6 = { obscured: tmp12, children: null };
      let tmp72Result = selectedTab === tmp2(10244).GameProfileNavTab.OVERVIEW;
      if (tmp72Result) {
        const obj7 = {
          game: data,
          invite: first1,
          viewId,
          source,
          trackAction: callback1,
          onGuildInviteResolved: tmp13[1],
          closeModal: tmp5(5489).hideAllActionSheets,
          scrollY: sharedValue,
          websiteButtons: memo,
          onStoreLinksMeasured: callback5,
          onHeaderHeightMeasured: callback4,
        };
        tmp72Result = tmp72(tmp5(10248), obj7);
        const tmp5Result5 = tmp5(10248);
      }
      const items24 = [tmp72Result];
      let tmp72Result4 = selectedTab === tmp2(10244).GameProfileNavTab.COMMUNITIES;
      if (tmp72Result4) {
        const obj8 = {
          game: data,
          viewId,
          scrollY: sharedValue,
          trackAction: callback1,
          closeModal: tmp5(5489).hideAllActionSheets,
        };
        tmp72Result4 = tmp72(tmp5(10430), obj8);
        const tmp5Result6 = tmp5(10430);
      }
      items24[1] = tmp72Result4;
      obj6.children = items24;
      obj5.children = tmp65(tmp5(10246), obj6);
      let tmp72Result5 = tmp72(tmp2(5507).BottomSheetScrollView, obj5);
      const tmp5Result4 = tmp5(10246);
    }
    const items25 = [tmp72Result5, , ,];
    const obj9 = { style: null, pointerEvents: "box-none", children: null };
    const items26 = [tmp.stickyHeader, animatedStyle];
    obj9.style = items26;
    const obj10 = { game: data, headerRight: memo2 };
    obj9.children = tmp72(tmp5(10440), obj10);
    items25[1] = tmp72(tmp5(1652).View, obj9);
    let tmp72Result6 = !isLoading;
    if (!isLoading) {
      tmp72Result6 = null != data;
    }
    if (tmp72Result6) {
      const obj11 = { game: data, navigation, onLayout: callback2 };
      tmp72Result6 = tmp72(tmp5(10441), obj11);
    }
    items25[2] = tmp72Result6;
    const obj12 = { variant: "overlay", onPress: bottomSheetClose };
    items25[3] = tmp72(tmp2(5838).ActionSheetHeaderBar, obj12);
    obj4.children = items25;
    return tmp65(tmp66, obj4);
  }
  const tmp53 = useGameProfileNavigationDefault(callback1, gameId.initialTab);
  tmp72Result5 = name(viewId, { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) });
  tmp72 = name;
}
