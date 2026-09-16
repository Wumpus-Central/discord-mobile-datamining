// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import AssetUtils from "../../lib/AssetUtils.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ANIMATED_CONTENT_SPRING_CONFIG = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
const createStyles = fn(4638);
let obj = {
  wrapper: { flexGrow: 1, flexShrink: 1 },
  headerContentCopy: { flexGrow: 1, flexShrink: 1 },
  closeButton: { opacity: 0.5 },
  scroll: { flexGrow: 1, flexShrink: 1 },
  scrollContent: { flexGrow: 1 },
  content: { padding: nativeDefault.space.PX_16 },
  contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 },
  contentRewardsWrapper: null,
  contentRewards: null,
  contentRewardsCopy: null,
  contentEndCardHeader: null,
  contentEndCardHeaderCopy: null,
  contentEndCard: null,
  image: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj.contentRewardsWrapper = { flexGrow: 1, flexShrink: 0, paddingTop: fn(15238).COMPLETION_GLOW_CLEARANCE };
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
let obj4 = { flexGrow: 1, flexShrink: 0, paddingTop: fn(15238).COMPLETION_GLOW_CLEARANCE };
obj.contentEndCardHeader = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCardHeaderCopy = { flexGrow: 1, flexShrink: 1 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCard = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_STRONG,
  paddingTop: nativeDefault.space.PX_24,
  flexShrink: 0,
};
let obj6 = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_STRONG,
  paddingTop: nativeDefault.space.PX_24,
  flexShrink: 0,
};
obj.image = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}",
};
let obj7 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default noop.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = closure_11();
  const tmp3 = sharedValue;
  quest = quest(sharedValue[7]).useVideoQuestModalContext().quest;
  let items = [quest];
  const memo = noop.useMemo(
    () => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true),
    items,
  );
  let obj = quest(sharedValue[7]);
  importDefault = quest(sharedValue[9]).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj3 = quest(sharedValue[9]);
  let obj4 = quest(sharedValue[10]);
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler({
    quest,
    onSuccess: require("ProductPurchaseSuccessActionCreators").close,
    sourceQuestContent,
  });
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  let obj5 = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const isQuestAccessSuspended = quest(tmp3[12]).useIsQuestAccessSuspended();
  const tmp2Result = quest(tmp3[12]);
  sharedValue = quest(tmp3[13]).useSharedValue(0);
  const tmp2Result5 = quest(tmp3[13]);
  const fn = function u() {
    const obj = { opacity: null, transform: null };
    const obj2 = ReanimatedRexport;
    obj.opacity = obj2.withDelay(125, spring.withSpring(sharedValue.get(), closure_10));
    const obj4 = { translateY: null };
    const obj5 = ReanimatedRexport;
    const obj6 = spring;
    obj4.translateY = obj5.withDelay(
      125,
      obj6.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [75, 0]), closure_10),
    );
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  const tmp2Result6 = quest(tmp3[13]);
  fn.__closure = {
    withDelay: quest(tmp3[13]).withDelay,
    ANIMATION_DELAY: 125,
    withSpring: quest(tmp3[14]).withSpring,
    isComponentMounted: sharedValue,
    ANIMATED_CONTENT_SPRING_CONFIG,
    interpolate: quest(tmp3[13]).interpolate,
    ANIMATED_CONTENT_OFFSET_Y: 75,
  };
  fn.__workletHash = 2704439293952;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let obj6 = {
    withDelay: quest(tmp3[13]).withDelay,
    ANIMATION_DELAY: 125,
    withSpring: quest(tmp3[14]).withSpring,
    isComponentMounted: sharedValue,
    ANIMATED_CONTENT_SPRING_CONFIG,
    interpolate: quest(tmp3[13]).interpolate,
    ANIMATED_CONTENT_OFFSET_Y: 75,
  };
  let isShareableQuestResult = quest(tmp3[15]).isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  const callback = noop.useCallback(() => {
    if (isShareableQuestResult) {
      const obj2 = { message: null };
      const obj = showShareActionSheet;
      obj2.message = QuestCopyUtils.getQuestUrl(quest.id);
      obj.showShareActionSheet(obj2, "Video Quest Modal");
    }
  }, items2);
  const layoutEffect = noop.useLayoutEffect(() => {
    quest(sharedValue[18]).applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(tmp3[20])(noop.useContext(tmp2(tmp3[19]).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp2Result7 = quest(tmp3[15]);
  [tmp17, noop] = noop.useState(null);
  const callback1 = noop.useCallback((nativeEvent) => {
    noop(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp17 == null) {
    tmp17 = tmp2(tmp3[6]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp17 + tmp2(tmp3[6]).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(tmp3[5]).space.PX_16;
  const obj7 = { bottom: true, style: tmp.wrapper, children: null };
  const obj8 = {
    align: "center",
    direction: "horizontal",
    justify: "space-between",
    style: tmp.content,
    children: null,
  };
  const obj9 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: null };
  const intl = tmp2(tmp3[24]).intl;
  obj9.children = intl.formatToPlainString(quest(tmp3[24]).t.EAYZAr, { questName: quest.config.messages.questName });
  const items3 = [
    closure_8(quest(tmp3[23]).Heading, obj9),
    closure_8(require("VideoQuestModalCloseButton"), { onClose, style: tmp.closeButton }),
  ];
  obj8.children = items3;
  const items4 = [closure_9(quest(tmp3[22]).Stack, obj8)];
  const obj12 = {
    style: tmp.scroll,
    contentContainerStyle: tmp.scrollContent,
    showsVerticalScrollIndicator: false,
    alwaysBounceVertical: false,
    children: null,
  };
  const obj13 = { style: null, children: null };
  const items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  obj13.style = items5;
  const obj10 = { questName: quest.config.messages.questName };
  const obj11 = { onClose, style: tmp.closeButton };
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  const obj14 = {
    align: "center",
    justify: "center",
    spacing: require("native").space.PX_24,
    style: null,
    children: null,
  };
  const items6 = [,];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj14.style = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [closure_8(closure_5, {})];
      let tmp22Result = !tmp8;
      if (!tmp8) {
        const obj15 = {
          grow: true,
          variant: "secondary",
          loading: isClaiming,
          disabled: null,
          onPress: null,
          text: null,
          onPressDisabled: null,
        };
        if (!isClaiming) {
          isClaiming = isQuestAccessSuspended;
        }
        obj15.disabled = isClaiming;
        obj15.onPress = claim;
        const intl3 = tmp2(tmp3[24]).intl;
        obj15.text = intl3.string(tmp2(tmp3[24]).t.cfY4PE);
        let tmp5Result2;
        if (isQuestAccessSuspended) {
          tmp5Result2 = tmp5(tmp3[29]);
        }
        obj15.onPressDisabled = tmp5Result2;
        tmp22Result = closure_8(tmp2(tmp3[28]).Button, obj15);
      }
      items7[1] = tmp22Result;
      obj14.children = items7;
      obj13.children = closure_9(tmp2(tmp3[22]).Stack, obj14);
      const items8 = [closure_8(tmp5Result, obj13)];
      const obj16 = { style: null, children: null };
      const items9 = [,];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj16.style = items9;
      const obj17 = {
        direction: "horizontal",
        justify: "space-between",
        style: tmp.contentEndCardHeader,
        children: null,
      };
      const obj18 = { spacing: tmp5(tmp3[5]).space.PX_4, style: tmp.contentEndCardHeaderCopy, children: null };
      const obj19 = {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: quest.config.messages.gameTitle,
      };
      const items10 = [closure_8(tmp2(tmp3[23]).Heading, obj19)];
      const obj20 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
      items10[1] = closure_8(tmp2(tmp3[23]).Text, obj20);
      obj18.children = items10;
      const items11 = [closure_9(tmp2(tmp3[22]).Stack, obj18)];
      const obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp2(tmp3[24]).intl;
      obj21.accessibilityLabel = intl4.string(tmp2(tmp3[24]).t.YsCuyF);
      obj21.onPress = onRestartVideo.onRestartVideo;
      const obj22 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj21.children = closure_8(tmp2(tmp3[31]).RetryIcon, obj22);
      items11[1] = closure_8(tmp2(tmp3[30]).PressableOpacity, obj21);
      obj17.children = items11;
      const items12 = [closure_9(tmp2(tmp3[22]).Stack, obj17), ,];
      let tmp22Result2 = null != memo;
      if (tmp22Result2) {
        const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl5 = tmp2(tmp3[24]).intl;
        const obj24 = { gameTitle: quest.config.messages.gameTitle };
        obj23.accessibilityLabel = intl5.formatToPlainString(tmp2(tmp3[24]).t.r8BzFT, obj24);
        obj23.onPress = function onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
        };
        const obj25 = { style: tmp.image, source: null, resizeMode: "cover" };
        const obj26 = { uri: memo.url };
        obj25.source = obj26;
        obj23.children = closure_8(tmp5(tmp3[33]), obj25);
        tmp22Result2 = closure_8(tmp2(tmp3[30]).PressableOpacity, obj23);
      }
      items12[1] = tmp22Result2;
      const obj27 = { direction: "horizontal", spacing: tmp5(tmp3[5]).space.PX_16, align: "center", children: null };
      const obj28 = {
        grow: true,
        variant: "expressive",
        onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
        },
        text: tmp2(tmp3[17]).getExternalCtaLabel(quest),
      };
      const items13 = [closure_8(tmp2(tmp3[28]).Button, obj28)];
      if (isShareableQuestResult) {
        const obj29 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl6 = tmp2(tmp3[24]).intl;
        obj29.accessibilityLabel = intl6.string(tmp2(tmp3[24]).t.Ej3B3Y);
        obj29.onPress = callback;
        const obj30 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj29.children = closure_8(tmp2(tmp3[34]).ShareIcon, obj30);
        isShareableQuestResult = closure_8(tmp2(tmp3[30]).PressableOpacity, obj29);
      }
      items13[1] = isShareableQuestResult;
      obj27.children = items13;
      items12[2] = closure_9(tmp2(tmp3[22]).Stack, obj27);
      obj16.children = items12;
      items8[1] = closure_9(closure_7, obj16);
      obj12.children = items8;
      items4[1] = closure_9(closure_6, obj12);
      obj7.children = items4;
      return closure_9(tmp2(tmp3[21]).SafeAreaPaddingView, obj7);
    }
  }
  const obj31 = { style: tmp.contentRewards, onLayout: callback1, children: null };
  const items14 = [
    closure_8(require("VideoQuestModalReward"), {
      withQuestName: false,
      withRewardAvailableCopy: false,
      size: str,
      withRewardTileAnimation: true,
    }),
  ];
  let obj32 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: null };
  const intl2 = tmp2(tmp3[24]).intl;
  const string = intl2.string;
  let t = tmp2(tmp3[24]).t;
  if (null != claimedAt) {
    t = t["EMp8/M"];
    let stringResult = string(t);
  } else {
    stringResult = string(t.qyKLdg);
  }
  obj32.children = stringResult;
  obj32 = closure_8(tmp2(tmp3[23]).Heading, obj32);
  items14[1] = obj32;
  obj31.children = items14;
  closure_9(closure_7, obj31);
  tmp5Result = require("ReanimatedNativeView");
});
