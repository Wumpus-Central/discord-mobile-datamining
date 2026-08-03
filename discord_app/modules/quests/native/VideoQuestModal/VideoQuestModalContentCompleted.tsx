// === Module 14267: ? ===

// Module 14267
import _slicedToArray from "_slicedToArray";
import importAllResult from "SafeAreaPaddingView";
import get_ActivityIndicator from "QuestDockMode";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ ActivityIndicator: c5, ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: null, contentRewardsAnimatedWrapper: null, contentRewardsWrapper: null, contentRewards: null, contentRewardsCopy: null, contentEndCardHeader: null, contentEndCardHeaderCopy: null, contentEndCard: null, image: null };
obj = { padding: require("Themes").space.PX_16 };
obj[5] = obj;
obj[6] = { flexGrow: 1, flexShrink: 0 };
obj[7] = { flexGrow: 1, flexShrink: 0 };
obj[8] = { alignItems: "center" };
obj[9] = { textAlign: "center" };
createCacheKey = { marginBottom: require("Themes").space.PX_16 };
obj[10] = createCacheKey;
obj[11] = { flexGrow: 1, flexShrink: 1 };
obj[12] = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_STRONG, paddingTop: require("Themes").space.PX_24, flexShrink: 0 };
let obj2 = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_STRONG, paddingTop: require("Themes").space.PX_24, flexShrink: 0 };
obj[13] = { height: 210, marginBottom: require("Themes").space.PX_24, borderRadius: require("Themes").radii.xl };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
let obj3 = { height: 210, marginBottom: require("Themes").space.PX_24, borderRadius: require("Themes").radii.xl };
const memoResult = importAllResult.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  let claim;
  let _slicedToArray;
  let isLoading;
  let onClose;
  let sourceQuestContent;
  let tmp18;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = callback4();
  let obj = quest(14235);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = importAllResult;
  let items = [quest];
  const memo = importAllResult.useMemo(() => quest(isShareableQuestResult[7]).getQuestAsset(quest, quest(isShareableQuestResult[7]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj2 = quest(14265);
  const videoQuestClickCtaAndMaybeCloseModal = obj2.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj3 = quest(14231);
  obj = { quest, onSuccess: sharedValue(9949).close, sourceQuestContent };
  const questRewardClaimHandler = obj3.useQuestRewardClaimHandler(obj);
  const isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  let tmp2Result = tmp2(4116);
  sharedValue = tmp2Result.useSharedValue(0);
  tmp2Result = tmp2(4116);
  const fn = function u() {
    let obj = { opacity: null, transform: null };
    const obj2 = quest(isShareableQuestResult[11]);
    obj[0] = obj2.withDelay(125, quest(isShareableQuestResult[12]).withSpring(sharedValue.get(), outer1_10));
    obj = { translateY: null };
    const obj3 = quest(isShareableQuestResult[12]);
    const obj5 = quest(isShareableQuestResult[11]);
    const obj6 = quest(isShareableQuestResult[12]);
    obj[0] = obj5.withDelay(125, obj6.withSpring(quest(isShareableQuestResult[11]).interpolate(sharedValue.get(), [0, 1], [75, 0]), outer1_10));
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withDelay: tmp2(4116).withDelay, ANIMATION_DELAY: 125, withSpring: tmp2(4665).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG: closure_10, interpolate: tmp2(4116).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__closure = obj;
  fn.__workletHash = 2704439293952;
  fn.__initData = closure_12;
  const items1 = [sharedValue];
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const effect = obj1.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let isShareableQuestResult = quest(7089).isShareableQuest(quest.config);
  const dependencyMap = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  const callback = obj1.useCallback(() => {
    if (closure_2) {
      let obj = quest(isShareableQuestResult[14]);
      obj = { message: null };
      obj[0] = quest(isShareableQuestResult[15]).getQuestUrl(quest.id);
      obj.showShareActionSheet(obj, "Video Quest Modal");
      const obj3 = quest(isShareableQuestResult[15]);
    }
  }, items2);
  const layoutEffect = obj1.useLayoutEffect(() => {
    quest(isShareableQuestResult[16]).lockOrientation("PORTRAIT", true);
  }, []);
  const windowDimensions = obj1.useContext(tmp2(14208).QuestDockGestureContext).windowDimensions;
  const tmp2Result1 = quest(7089);
  let str = "md";
  if (windowDimensions.get().height >= 760) {
    let str2 = "lg";
    if (tmp16) {
      str2 = "md-lg";
    }
    str = str2;
  }
  tmp16 = windowDimensions.get().height < 800;
  [tmp18, _slicedToArray] = callback(obj1.useState(null), 2);
  const callback1 = obj1.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp18 == null) {
    tmp18 = tmp2(14240).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp18 + 2 * tmp6(712).space.PX_16;
  obj1 = { bottom: true, style: tmp.wrapper, children: null };
  obj2 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: null };
  obj3 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: null };
  const intl = tmp2(1236).intl;
  obj3[3] = intl.formatToPlainString(quest(1236).t.EAYZAr, { questName: quest.config.messages.questName });
  const items3 = [callback2(quest(4251).Heading, obj3), callback2(sharedValue(14258), { onClose, style: tmp.closeButton })];
  obj2[4] = items3;
  const items4 = [callback3(quest(4664).Stack, obj2), ];
  let obj6 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj7 = { style: items5, children: null };
  items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum }, animatedStyle];
  const obj4 = { questName: quest.config.messages.questName };
  let obj5 = { onClose, style: tmp.closeButton };
  const tmp17 = callback(obj1.useState(null), 2);
  const tmp23 = closure_6;
  const obj8 = { align: "center", justify: "center", spacing: null, style: null, children: null };
  obj8[2] = sharedValue(712).space.PX_24;
  const items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj8[3] = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [tmp22(closure_5, {}), ];
      let tmp22Result = !tmp9;
      if (!tmp9) {
        const obj9 = { grow: true, variant: "secondary", loading: null, disabled: null, onPress: null, text: null };
        obj9[2] = isClaiming;
        obj9[3] = isClaiming;
        obj9[4] = claim;
        const intl3 = tmp2(1236).intl;
        obj9[5] = intl3.string(tmp2(1236).t.cfY4PE);
        tmp22Result = tmp22(tmp2(4666).Button, obj9);
      }
      items7[1] = tmp22Result;
      obj8[4] = items7;
      obj7[1] = tmp21(tmp2(4664).Stack, obj8);
      const items8 = [tmp22(tmp6Result, obj7), ];
      const obj10 = { style: null, children: null };
      const items9 = [, ];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj10[0] = items9;
      const obj11 = { direction: "horizontal", justify: "space-between", style: null, children: null };
      obj11[2] = tmp.contentEndCardHeader;
      const obj12 = { spacing: null, style: null, children: null };
      obj12[0] = tmp6(712).space.PX_4;
      obj12[1] = tmp.contentEndCardHeaderCopy;
      const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj13[2] = quest.config.messages.gameTitle;
      const items10 = [tmp22(tmp2(4251).Heading, obj13), ];
      const obj14 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      obj14[2] = quest.config.messages.gamePublisher;
      items10[1] = tmp22(tmp2(4251).Text, obj14);
      obj12[2] = items10;
      const items11 = [tmp21(tmp2(4664).Stack, obj12), ];
      const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp2(1236).intl;
      obj15[1] = intl4.string(tmp2(1236).t.YsCuyF);
      obj15[2] = onRestartVideo.onRestartVideo;
      const obj16 = { color: null };
      obj16[0] = tmp6(712).colors.INTERACTIVE_TEXT_DEFAULT;
      obj15[3] = tmp22(tmp2(10127).RetryIcon, obj16);
      items11[1] = tmp22(tmp2(4783).PressableOpacity, obj15);
      obj11[3] = items11;
      const items12 = [tmp21(tmp2(4664).Stack, obj11), , ];
      tmp22Result = null != memo;
      if (tmp22Result) {
        const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl5 = tmp2(1236).intl;
        const obj18 = { gameTitle: null };
        obj18[0] = quest.config.messages.gameTitle;
        obj17[1] = intl5.formatToPlainString(tmp2(1236).t.r8BzFT, obj18);
        obj17[2] = videoQuestClickCtaAndMaybeCloseModal;
        const obj19 = { style: null, source: null, resizeMode: "cover" };
        obj19[0] = tmp.image;
        const obj20 = { uri: null };
        obj20[0] = memo.url;
        obj19[1] = obj20;
        obj17[3] = tmp22(tmp6(5207), obj19);
        tmp22Result = tmp22(tmp2(4783).PressableOpacity, obj17);
      }
      items12[1] = tmp22Result;
      const obj21 = { direction: "horizontal", spacing: null, align: "center", children: null };
      obj21[1] = tmp6(712).space.PX_16;
      const obj22 = { grow: true, variant: "expressive", onPress: null, text: null };
      obj22[2] = videoQuestClickCtaAndMaybeCloseModal;
      obj22[3] = tmp2(9647).getExternalCtaLabel(quest);
      const items13 = [tmp22(tmp2(4666).Button, obj22), ];
      if (isShareableQuestResult) {
        const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl6 = tmp2(1236).intl;
        obj23[1] = intl6.string(tmp2(1236).t.Ej3B3Y);
        obj23[2] = callback;
        const obj24 = { color: null };
        obj24[0] = tmp6(712).colors.INTERACTIVE_TEXT_DEFAULT;
        obj23[3] = tmp22(tmp2(12414).ShareIcon, obj24);
        isShareableQuestResult = tmp22(tmp2(4783).PressableOpacity, obj23);
      }
      items13[1] = isShareableQuestResult;
      obj21[3] = items13;
      items12[2] = tmp21(tmp2(4664).Stack, obj21);
      obj10[1] = items12;
      items8[1] = tmp21(closure_7, obj10);
      obj6[4] = items8;
      items4[1] = tmp21(tmp23, obj6);
      obj1[2] = items4;
      return tmp21(tmp2(5243).SafeAreaPaddingView, obj1);
    }
  }
  const obj25 = { style: tmp.contentRewards, onLayout: callback1, children: null };
  const items14 = [callback2(sharedValue(14259), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  let obj26 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: null };
  const intl2 = tmp2(1236).intl;
  const string = intl2.string;
  EMp8_M = tmp2(1236).t;
  if (null != claimedAt) {
    EMp8_M = EMp8_M["EMp8/M"];
    let stringResult = string(EMp8_M);
  } else {
    stringResult = string(EMp8_M.qyKLdg);
  }
  obj26[3] = stringResult;
  obj26 = tmp22(tmp2(4251).Heading, obj26);
  items14[1] = obj26;
  obj25[2] = items14;
  callback3(closure_7, obj25);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;