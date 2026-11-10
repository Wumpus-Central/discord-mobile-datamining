// === Module 17483: VideoQuestModalContentCompleted ===

// Module 17483 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6842 */;
import showShareActionSheet from "showShareActionSheet" /* 9016 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9075 */;
import AssetUtils from "AssetUtils" /* 9791 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9801 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 14757 */;
import VideoQuestModalCloseButtonDefault from "VideoQuestModalCloseButton" /* 17475 */;
import VideoQuestModalRewardDefault from "VideoQuestModalReward" /* 17476 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
const createStyles = fn(5142);
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: { padding: nativeDefault.space.PX_16 }, contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 }, contentRewardsWrapper: null, contentRewards: null, contentRewardsCopy: null, contentEndCardHeader: null, contentEndCardHeaderCopy: null, contentEndCard: null, image: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj.contentRewardsWrapper = { flexGrow: 1, flexShrink: 0, paddingTop: fn(17459).COMPLETION_GLOW_CLEARANCE };
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
let obj4 = { flexGrow: 1, flexShrink: 0, paddingTop: fn(17459).COMPLETION_GLOW_CLEARANCE };
obj.contentEndCardHeader = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCardHeaderCopy = { flexGrow: 1, flexShrink: 1 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCard = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
let obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj.image = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function VideoQuestModalContentCompletedTsx1(){let[withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y]=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};})" };
let obj7 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default noop.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = closure_10();
  const quest = require("VideoQuestModalContext").useVideoQuestModalContext().quest;
  _require = quest;
  items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(c0, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj = require("VideoQuestModalContext");
  importDefault = require("useVideoQuestClickCtaAndMaybeCloseModal").useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj3 = require("useVideoQuestClickCtaAndMaybeCloseModal");
  const obj4 = require("QuestBottomSheetFooter");
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler({ quest, onSuccess: ProductPurchaseSuccessActionCreatorsDefault.close, sourceQuestContent });
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  const obj5 = { quest, onSuccess: ProductPurchaseSuccessActionCreatorsDefault.close, sourceQuestContent };
  const isQuestAccessSuspended = require("hooks/QuestHooks").useIsQuestAccessSuspended();
  const tmp2Result = require("hooks/QuestHooks");
  const sharedValue = require("module_1652").useSharedValue(0);
  const tmp2Result5 = require("module_1652");
  let items1 = [closure_11, require("module_1652").withDelay, 125, require("spring/spring").withSpring, sharedValue, closure_9, require("module_1652").interpolate, 75];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class VideoQuestModalContentCompletedTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1, closure_2(closure_3.get(), closure_4)), transform: null };
      obj1 = { translateY: null };
      items = [, ];
      items[0] = closure_6;
      items[1] = 0;
      obj1.translateY = closure_0(closure_1, closure_2(closure_5(closure_3.get(), [0, 1], items), closure_4));
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VideoQuestModalContentCompletedTsx1.__closure = items2;
  VideoQuestModalContentCompletedTsx1.__workletHash = 11129747434457;
  VideoQuestModalContentCompletedTsx1.__initData = tmp11;
  const items3 = [sharedValue];
  const animatedStyle = require("module_1652").useAnimatedStyle(VideoQuestModalContentCompletedTsx1);
  const effect = obj2.useEffect(() => {
    const result = _undefined3.set(1);
  }, items3);
  const tmp2Result6 = require("module_1652");
  let isShareableQuestResult = require("utils/QuestUtils").isShareableQuest(quest.config);
  noop = isShareableQuestResult;
  const items4 = [isShareableQuestResult, quest.id];
  const callback = obj2.useCallback(() => {
    if (c3) {
      const obj2 = { message: null };
      const obj = showShareActionSheet;
      obj2.message = QuestCopyUtils.getQuestUrl(_undefined.id);
      obj.showShareActionSheet(obj2, "Video Quest Modal");
    }
  }, items4);
  const layoutEffect = obj2.useLayoutEffect(() => {
    _undefined(_undefined3[17]).applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(8921)(obj2.useContext(tmp2(17421).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp2Result7 = require("utils/QuestUtils");
  ({ height: height2, ref, onLayout } = useMeasuredLayoutDefault());
  if (height2 == null) {
    height2 = tmp2(17459).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = height2 + tmp2(17459).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(575).space.PX_16;
  const obj7 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: null };
  const obj8 = { variant: "heading-xs/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: null };
  const intl = tmp2(1113).intl;
  obj8.children = intl.formatToPlainString(require("util").t.EAYZAr, { questName: quest.config.messages.questName });
  const items5 = [closure_7(require("Text/Text").Heading, obj8), closure_7(VideoQuestModalCloseButtonDefault, { onClose, style: tmp.closeButton })];
  obj7.children = items5;
  const items6 = [closure_8(require("Stack/Stack").Stack, obj7), ];
  const obj11 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj12 = { style: null, children: null };
  const items7 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  obj12.style = items7;
  const obj13 = { align: "center", justify: "center", spacing: nativeDefault.space.PX_24, style: null, children: null };
  const items8 = [, ];
  ({ content: arr9[0], contentRewardsWrapper: arr9[1] } = tmp);
  obj13.style = items8;
  if (isLoading) {
    if (!isClaiming) {
      const items9 = [closure_7(c4, {}), ];
      let tmp28Result = !tmp8;
      if (!tmp8) {
        const obj14 = { grow: true, variant: "secondary", loading: isClaiming, disabled: null, onPress: null, text: null, onPressDisabled: null };
        if (!isClaiming) {
          isClaiming = isQuestAccessSuspended;
        }
        obj14.disabled = isClaiming;
        obj14.onPress = claim;
        const intl3 = tmp2(1113).intl;
        obj14.text = intl3.string(tmp2(1113).t.cfY4PE);
        let tmp5Result;
        if (isQuestAccessSuspended) {
          tmp5Result = tmp5(17445);
        }
        obj14.onPressDisabled = tmp5Result;
        tmp28Result = closure_7(tmp2(5760).Button, obj14);
      }
      items9[1] = tmp28Result;
      obj13.children = items9;
      obj12.children = closure_8(tmp2(6161).Stack, obj13);
      const items10 = [closure_7(tmp5(1652).View, obj12), ];
      const obj15 = { style: null, children: null };
      const items11 = [, ];
      ({ content: arr13[0], contentEndCard: arr13[1] } = tmp);
      obj15.style = items11;
      const obj16 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: null };
      const obj17 = { spacing: tmp5(575).space.PX_4, style: tmp.contentEndCardHeaderCopy, children: null };
      const obj18 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
      const items12 = [closure_7(tmp2(5753).Heading, obj18), ];
      const obj19 = { variant: "body-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
      items12[1] = closure_7(tmp2(5753).Text, obj19);
      obj17.children = items12;
      const items13 = [closure_8(tmp2(6161).Stack, obj17), ];
      const obj20 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp2(1113).intl;
      obj20.accessibilityLabel = intl4.string(tmp2(1113).t.YsCuyF);
      obj20.onPress = onRestartVideo.onRestartVideo;
      const obj21 = { color: tmp5(575).colors.INTERACTIVE_TEXT_DEFAULT };
      obj20.children = closure_7(tmp2(11224).RetryIcon, obj21);
      items13[1] = closure_7(tmp2(7046).PressableOpacity, obj20);
      obj16.children = items13;
      const items14 = [closure_8(tmp2(6161).Stack, obj16), , ];
      let tmp28Result2 = null != memo;
      if (tmp28Result2) {
        const obj22 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl5 = tmp2(1113).intl;
        const obj23 = { gameTitle: quest.config.messages.gameTitle };
        obj22.accessibilityLabel = intl5.formatToPlainString(tmp2(1113).t.r8BzFT, obj23);
        obj22.onPress = function onPress() {
          return _undefined2(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
        };
        const obj24 = { style: tmp.image, source: null, resizeMode: "cover" };
        const obj25 = { uri: memo.url };
        obj24.source = obj25;
        obj22.children = closure_7(tmp5(5844), obj24);
        tmp28Result2 = closure_7(tmp2(7046).PressableOpacity, obj22);
      }
      items14[1] = tmp28Result2;
      const obj26 = { direction: "horizontal", spacing: tmp5(575).space.PX_16, align: "center", children: null };
      const obj27 = {
        grow: true,
        variant: "expressive",
        onPress() {
              return _undefined2(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
            },
        text: tmp2(9801).getExternalCtaLabel(quest)
      };
      const items15 = [closure_7(tmp2(5760).Button, obj27), ];
      if (isShareableQuestResult) {
        const obj28 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl6 = tmp2(1113).intl;
        obj28.accessibilityLabel = intl6.string(tmp2(1113).t.Ej3B3Y);
        obj28.onPress = callback;
        const obj29 = { color: tmp5(575).colors.INTERACTIVE_TEXT_DEFAULT };
        obj28.children = closure_7(tmp2(12423).ShareIcon, obj29);
        isShareableQuestResult = closure_7(tmp2(7046).PressableOpacity, obj28);
      }
      items15[1] = isShareableQuestResult;
      obj26.children = items15;
      items14[2] = closure_8(tmp2(6161).Stack, obj26);
      obj15.children = items14;
      items10[1] = closure_8(c6, obj15);
      obj11.children = items10;
      items6[1] = closure_8(tmp29, obj11);
      class VideoQuestModalContentCompletedTsx1 {
        constructor() {
          obj = { opacity: closure_0(closure_1, closure_2(closure_3.get(), closure_4)), transform: null };
          obj1 = { translateY: null };
          items = [, ];
          items[0] = closure_6;
          items[1] = 0;
          obj1.translateY = closure_0(closure_1, closure_2(closure_5(closure_3.get(), [0, 1], items), closure_4));
          items1 = [];
          items1[0] = obj1;
          obj.transform = items1;
          return obj;
        }
      }
      return closure_8(tmp2(7358).SafeAreaPaddingView, obj6);
    }
  }
  const obj30 = { style: tmp.contentRewards, ref, onLayout, children: null };
  const items16 = [closure_7(VideoQuestModalRewardDefault, { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  let obj31 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: null };
  const intl2 = tmp2(1113).intl;
  const string = intl2.string;
  let t = tmp2(1113).t;
  if (null != claimedAt) {
    t = t["EMp8/M"];
    let stringResult = string(t);
  } else {
    stringResult = string(t.qyKLdg);
  }
  obj31.children = stringResult;
  obj31 = closure_7(tmp2(5753).Heading, obj31);
  items16[1] = obj31;
  obj30.children = items16;
  closure_8(c6, obj30);
  const obj10 = { onClose, style: tmp.closeButton };
  obj6 = { bottom: true, style: tmp.wrapper, children: null };
  const obj9 = { questName: quest.config.messages.questName };
  const tmp24 = useMeasuredLayoutDefault();
  tmp29 = c5;
});