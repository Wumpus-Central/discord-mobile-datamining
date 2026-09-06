// === Module 15157: VideoQuestModalContentCompleted ===

// Module 15157 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import AssetUtils from "AssetUtils" /* 11285 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11295 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ANIMATED_CONTENT_SPRING_CONFIG = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
fn(4560);
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: null, contentRewardsAnimatedWrapper: null, contentRewardsWrapper: null, contentRewards: null, contentRewardsCopy: null, contentEndCardHeader: null, contentEndCardHeaderCopy: null, contentEndCard: null, image: null };
obj = { padding: nativeDefault.space.PX_16 };
obj.content = obj;
obj.contentRewardsAnimatedWrapper = { flexGrow: 1, flexShrink: 0 };
const createStyles = { flexGrow: 1, flexShrink: 0, paddingTop: fn(15131).COMPLETION_GLOW_CLEARANCE };
obj.contentRewardsWrapper = createStyles;
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
obj.contentEndCardHeader = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCardHeaderCopy = { flexGrow: 1, flexShrink: 1 };
let obj2 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCard = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
let obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj.image = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
let obj4 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default noop.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = closure_11();
  const tmp3 = sharedValue;
  let obj = quest(sharedValue[7]);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = noop;
  let items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj2 = quest(sharedValue[9]);
  importDefault = obj2.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj3 = quest(sharedValue[10]);
  obj = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const questRewardClaimHandler = obj3.useQuestRewardClaimHandler(obj);
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  let tmp2Result = tmp2(tmp3[12]);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  tmp2Result = tmp2(tmp3[13]);
  sharedValue = tmp2Result.useSharedValue(0);
  const fn = function u() {
    let obj = { opacity: null, transform: null };
    const obj2 = ReanimatedRexport;
    obj.opacity = obj2.withDelay(125, spring.withSpring(sharedValue.get(), closure_10));
    obj = { translateY: null };
    const obj5 = ReanimatedRexport;
    const obj6 = spring;
    obj.translateY = obj5.withDelay(125, obj6.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [75, 0]), closure_10));
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withDelay: tmp2(tmp3[13]).withDelay, ANIMATION_DELAY: 125, withSpring: tmp2(tmp3[14]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp2(tmp3[13]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__closure = obj;
  fn.__workletHash = 2704439293952;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  const animatedStyle = quest(tmp3[13]).useAnimatedStyle(fn);
  const effect = obj1.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmp2Result1 = quest(tmp3[13]);
  let isShareableQuestResult = quest(tmp3[15]).isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  const callback = obj1.useCallback(() => {
    if (isShareableQuestResult) {
      const obj = { message: QuestCopyUtils.getQuestUrl(quest.id) };
      obj.showShareActionSheet(obj, "Video Quest Modal");
    }
  }, items2);
  const layoutEffect = obj1.useLayoutEffect(() => {
    quest(sharedValue[18]).applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(tmp3[20])(obj1.useContext(tmp2(tmp3[19]).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp2Result2 = quest(tmp3[15]);
  [tmp17, noop] = _slicedToArray(obj1.useState(null), 2);
  const callback1 = obj1.useCallback((nativeEvent) => {
    noop(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp17 == null) {
    tmp17 = tmp2(tmp3[6]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp17 + tmp2(tmp3[6]).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(tmp3[5]).space.PX_16;
  obj1 = { bottom: true, style: tmp.wrapper, children: null };
  obj2 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: null };
  obj3 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: null };
  const intl = tmp2(tmp3[24]).intl;
  obj3.children = intl.formatToPlainString(quest(tmp3[24]).t.EAYZAr, { questName: quest.config.messages.questName });
  const items3 = [closure_8(quest(tmp3[23]).Heading, obj3), closure_8(require("VideoQuestModalCloseButton"), { onClose, style: tmp.closeButton })];
  obj2.children = items3;
  const items4 = [closure_9(quest(tmp3[22]).Stack, obj2), ];
  let obj6 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj7 = { style: null, children: null };
  const items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  obj7.style = items5;
  let tmp5Result = tmp5(tmp3[26]);
  const obj8 = { align: "center", justify: "center", spacing: require("native").space.PX_24, style: null, children: null };
  const items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj8.style = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [closure_8(closure_5, {}), ];
      let tmp22Result = !tmp8;
      if (!tmp8) {
        const obj9 = { grow: true, variant: "secondary", loading: isClaiming, disabled: null, onPress: null, text: null, onPressDisabled: null };
        if (!isClaiming) {
          isClaiming = isQuestAccessSuspended;
        }
        obj9.disabled = isClaiming;
        obj9.onPress = claim;
        const intl3 = tmp2(tmp3[24]).intl;
        obj9.text = intl3.string(tmp2(tmp3[24]).t.cfY4PE);
        tmp5Result = undefined;
        if (isQuestAccessSuspended) {
          tmp5Result = tmp5(tmp3[29]);
        }
        obj9.onPressDisabled = tmp5Result;
        tmp22Result = closure_8(tmp2(tmp3[28]).Button, obj9);
      }
      items7[1] = tmp22Result;
      obj8.children = items7;
      obj7.children = closure_9(tmp2(tmp3[22]).Stack, obj8);
      const items8 = [closure_8(tmp5Result, obj7), ];
      const obj10 = { style: null, children: null };
      const items9 = [, ];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj10.style = items9;
      const obj11 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: null };
      const obj12 = { spacing: tmp5(tmp3[5]).space.PX_4, style: tmp.contentEndCardHeaderCopy, children: null };
      const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
      const items10 = [closure_8(tmp2(tmp3[23]).Heading, obj13), ];
      const obj14 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
      items10[1] = closure_8(tmp2(tmp3[23]).Text, obj14);
      obj12.children = items10;
      const items11 = [closure_9(tmp2(tmp3[22]).Stack, obj12), ];
      const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp2(tmp3[24]).intl;
      obj15.accessibilityLabel = intl4.string(tmp2(tmp3[24]).t.YsCuyF);
      obj15.onPress = onRestartVideo.onRestartVideo;
      const obj16 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj15.children = closure_8(tmp2(tmp3[31]).RetryIcon, obj16);
      items11[1] = closure_8(tmp2(tmp3[30]).PressableOpacity, obj15);
      obj11.children = items11;
      const items12 = [closure_9(tmp2(tmp3[22]).Stack, obj11), , ];
      tmp22Result = null != memo;
      if (tmp22Result) {
        const obj17 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl5 = tmp2(tmp3[24]).intl;
        const obj18 = { gameTitle: quest.config.messages.gameTitle };
        obj17.accessibilityLabel = intl5.formatToPlainString(tmp2(tmp3[24]).t.r8BzFT, obj18);
        obj17.onPress = function onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
        };
        const obj19 = { style: tmp.image, source: null, resizeMode: "cover" };
        const obj20 = { uri: memo.url };
        obj19.source = obj20;
        obj17.children = closure_8(tmp5(tmp3[33]), obj19);
        tmp22Result = closure_8(tmp2(tmp3[30]).PressableOpacity, obj17);
      }
      items12[1] = tmp22Result;
      const obj21 = { direction: "horizontal", spacing: tmp5(tmp3[5]).space.PX_16, align: "center", children: null };
      const obj22 = {
        grow: true,
        variant: "expressive",
        onPress() {
              return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
            },
        text: tmp2(tmp3[17]).getExternalCtaLabel(quest)
      };
      const items13 = [closure_8(tmp2(tmp3[28]).Button, obj22), ];
      if (isShareableQuestResult) {
        const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl6 = tmp2(tmp3[24]).intl;
        obj23.accessibilityLabel = intl6.string(tmp2(tmp3[24]).t.Ej3B3Y);
        obj23.onPress = callback;
        const obj24 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj23.children = closure_8(tmp2(tmp3[34]).ShareIcon, obj24);
        isShareableQuestResult = closure_8(tmp2(tmp3[30]).PressableOpacity, obj23);
      }
      items13[1] = isShareableQuestResult;
      obj21.children = items13;
      items12[2] = closure_9(tmp2(tmp3[22]).Stack, obj21);
      obj10.children = items12;
      items8[1] = closure_9(closure_7, obj10);
      obj6.children = items8;
      items4[1] = closure_9(closure_6, obj6);
      obj1.children = items4;
      return closure_9(tmp2(tmp3[21]).SafeAreaPaddingView, obj1);
    }
  }
  const obj25 = { style: tmp.contentRewards, onLayout: callback1, children: null };
  const items14 = [closure_8(require("VideoQuestModalReward"), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  let obj26 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: null };
  const intl2 = tmp2(tmp3[24]).intl;
  const string = intl2.string;
  let t = tmp2(tmp3[24]).t;
  if (null != claimedAt) {
    t = t["EMp8/M"];
    let stringResult = string(t);
  } else {
    stringResult = string(t.qyKLdg);
  }
  obj26.children = stringResult;
  obj26 = closure_8(tmp2(tmp3[23]).Heading, obj26);
  items14[1] = obj26;
  obj25.children = items14;
  closure_9(closure_7, obj25);
  const obj4 = { questName: quest.config.messages.questName };
  let obj5 = { onClose, style: tmp.closeButton };
  const tmp16 = _slicedToArray(obj1.useState(null), 2);
});