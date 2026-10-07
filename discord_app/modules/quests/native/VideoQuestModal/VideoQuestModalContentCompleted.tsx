// === Module 14976: VideoQuestModalContentCompleted ===

// Module 14976 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10023 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 125;
const ANIMATED_CONTENT_SPRING_CONFIG = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
const createStyles = fn(4896);
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: { padding: nativeDefault.space.PX_16 }, contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 }, contentRewardsWrapper: null, contentRewards: null, contentRewardsCopy: null, contentEndCardHeader: null, contentEndCardHeaderCopy: null, contentEndCard: null, image: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj.contentRewardsWrapper = { flexGrow: 1, flexShrink: 0, paddingTop: fn(14950).COMPLETION_GLOW_CLEARANCE };
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
let obj4 = { flexGrow: 1, flexShrink: 0, paddingTop: fn(14950).COMPLETION_GLOW_CLEARANCE };
obj.contentEndCardHeader = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCardHeaderCopy = { flexGrow: 1, flexShrink: 1 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj.contentEndCard = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
let obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj.image = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const __initData2 = { code: "function VideoQuestModalContentCompletedTsx2(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const ReactCompilerGating = fn(558);
let obj7 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = quest(sharedValue[8]).c(110);
  ({ onClose, onRestartVideo, sourceQuestContent } = arg0);
  const tmp4 = closure_12();
  let obj = quest(sharedValue[8]);
  quest = quest(sharedValue[9]).useVideoQuestModalContext().quest;
  if (cResult[0] !== quest) {
    const tmpResult = tmp(tmp2[10]);
    const questAsset = tmpResult.getQuestAsset(quest, tmp(tmp2[10]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
    cResult[0] = quest;
    cResult[1] = questAsset;
  }
  if (cResult[2] === onClose) {
    if (cResult[3] === quest) {
      if (cResult[4] === sourceQuestContent) {
        let tmp9 = cResult[5];
      }
      const videoQuestClickCtaAndMaybeCloseModal = tmp(tmp2[11]).useVideoQuestClickCtaAndMaybeCloseModal(tmp9);
      if (cResult[6] === quest) {
        if (cResult[7] === sourceQuestContent) {
          let tmp11 = cResult[8];
        }
        const tmpResult7 = tmp(tmp2[13]);
        ({ isLoading, isClaiming, claim } = tmp(tmp2[13]).useQuestRewardClaimHandler(tmp11));
        if (isLoading) {
          isLoading = !isClaiming;
        }
        const userStatus = quest.userStatus;
        let claimedAt;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
        const questRewardClaimHandler = tmp(tmp2[13]).useQuestRewardClaimHandler(tmp11);
        const isQuestAccessSuspended = tmp(tmp2[14]).useIsQuestAccessSuspended();
        const tmpResult8 = tmp(tmp2[14]);
        sharedValue = tmp(tmp2[15]).useSharedValue(0);
        const tmpResult9 = tmp(tmp2[15]);
        class D {
          constructor() {
            obj = { opacity: null, transform: null };
            obj2 = closure_0(closure_2[15]);
            obj3 = closure_0(closure_2[16]);
            obj.opacity = obj2.withDelay(c10, obj3.withSpring(closure_2.get(), closure_11));
            obj1 = { translateY: null };
            obj5 = closure_0(closure_2[15]);
            obj6 = closure_0(closure_2[16]);
            obj7 = closure_0(closure_2[15]);
            obj1.translateY = obj5.withDelay(c10, obj6.withSpring(obj7.interpolate(closure_2.get(), [0, 1], [75, 0]), closure_11));
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj3 = { withDelay: tmp(tmp2[15]).withDelay, ANIMATION_DELAY, withSpring: tmp(tmp2[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp(tmp2[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
        D.__closure = obj3;
        D.__workletHash = 2704439293952;
        D.__initData = __initData;
        const animatedStyle = tmp(tmp2[15]).useAnimatedStyle(D);
        if (cResult[9] !== sharedValue) {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          let items = [sharedValue];
          cResult[9] = sharedValue;
          cResult[10] = M;
          cResult[11] = items;
          let tmp24 = items;
        } else {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          tmp24 = cResult[11];
        }
        const effect = noop.useEffect(M, tmp24);
        if (cResult[12] !== quest.config) {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          const isShareableQuestResult = obj13.isShareableQuest(quest.config);
          cResult[12] = quest.config;
          cResult[13] = isShareableQuestResult;
        } else {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
        }
        _slicedToArray = tmp26;
        if (cResult[14] === tmp26) {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            const items1 = [];
            cResult[17] = tmp32;
            cResult[18] = items1;
            let tmp31 = items1;
          } else {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            tmp31 = cResult[18];
          }
          const layoutEffect = noop.useLayoutEffect(tmp32, tmp31);
          const height = videoQuestClickCtaAndMaybeCloseModal(tmp2[22])(noop.useContext(tmp(tmp2[21]).QuestDockGestureContext).windowDimensions).height;
          if (height >= 760) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            if (height < 800) {
              class M {
                constructor() {
                  result = closure_2.set(1);
                  return;
                }
              }
            }
          }
          [tmp37, noop] = noop.useState(null);
          class D {
            constructor() {
              obj = { opacity: null, transform: null };
              obj2 = closure_0(closure_2[15]);
              obj3 = closure_0(closure_2[16]);
              obj.opacity = obj2.withDelay(c10, obj3.withSpring(closure_2.get(), closure_11));
              obj1 = { translateY: null };
              obj5 = closure_0(closure_2[15]);
              obj6 = closure_0(closure_2[16]);
              obj7 = closure_0(closure_2[15]);
              obj1.translateY = obj5.withDelay(c10, obj6.withSpring(obj7.interpolate(closure_2.get(), [0, 1], [75, 0]), closure_11));
              items = [];
              items[0] = obj1;
              obj.transform = items;
              return obj;
            }
          }
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            cResult[19] = tmp39;
          } else {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
          }
          if (tmp37 == null) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
          }
          const sum = tmp37 + tmp(tmp2[6]).COMPLETION_GLOW_CLEARANCE;
          const sum1 = sum + tmp34(tmp2[5]).space.PX_16;
          ({ wrapper, content, headerContentCopy } = tmp4);
          if (cResult[20] !== quest.config.messages.questName) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            let obj4 = { questName: quest.config.messages.questName };
            const formatToPlainStringResult = obj14.formatToPlainString(tmp(tmp2[23]).t.EAYZAr, obj4);
            cResult[20] = quest.config.messages.questName;
            cResult[21] = formatToPlainStringResult;
          } else {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
          }
          if (cResult[22] === tmp4.headerContentCopy) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            if (cResult[25] === onClose) {
              class M {
                constructor() {
                  result = closure_2.set(1);
                  return;
                }
              }
              if (cResult[28] === tmp4.content) {
                class M {
                  constructor() {
                    result = closure_2.set(1);
                    return;
                  }
                }
              }
              let obj5 = { align: "center", direction: "horizontal", justify: "space-between", style: content, children: null };
              const items2 = [tmp44, tmp47];
              obj5.children = items2;
              const tmp52 = closure_9(tmp(tmp2[26]).Stack, obj5);
              cResult[28] = tmp4.content;
              cResult[29] = tmp44;
              cResult[30] = tmp47;
              cResult[31] = tmp52;
            }
            let obj6 = { onClose, style: tmp4.closeButton };
            const tmp49 = closure_8(tmp34(tmp2[25]), obj6);
            cResult[25] = onClose;
            cResult[26] = tmp4.closeButton;
            cResult[27] = tmp49;
          }
          const obj7 = { variant: "heading-sm/semibold", color: "text-subtle", style: headerContentCopy, children: tmp42 };
          const tmp46 = closure_8(tmp(tmp2[24]).Heading, obj7);
          cResult[22] = tmp4.headerContentCopy;
          cResult[23] = tmp42;
          cResult[24] = tmp46;
          const tmp36 = _slicedToArray(noop.useState(null), 2);
        }
        class B {
          constructor() {
            if (closure_3) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[18]);
              obj1 = { message: null };
              obj3 = closure_0(closure_2[19]);
              tmp3 = quest;
              obj1.message = obj3.getQuestUrl(quest.id);
              str = "Video Quest Modal";
              showShareActionSheetResult = obj.showShareActionSheet(obj1, "Video Quest Modal");
            }
            return;
          }
        }
        cResult[14] = tmp26;
        cResult[15] = quest.id;
        cResult[16] = B;
        const tmpResult10 = tmp(tmp2[15]);
      }
      const obj8 = { quest, onSuccess: videoQuestClickCtaAndMaybeCloseModal(tmp2[12]).close, sourceQuestContent };
      cResult[6] = quest;
      cResult[7] = sourceQuestContent;
      cResult[8] = obj8;
      tmp11 = obj8;
      const tmpResult6 = tmp(tmp2[11]);
    }
  }
  const obj9 = { quest, onClose: null, sourceQuestContent };
  cResult[2] = onClose;
  cResult[3] = quest;
  cResult[4] = sourceQuestContent;
  cResult[5] = obj9;
  tmp9 = obj9;
  let obj2 = quest(sharedValue[9]);
}) : ((onRestartVideo) => {
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = closure_12();
  const tmp3 = sharedValue;
  quest = quest(sharedValue[9]).useVideoQuestModalContext().quest;
  let items = [quest];
  const memo = noop.useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj = quest(sharedValue[9]);
  importDefault = quest(sharedValue[11]).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj3 = quest(sharedValue[11]);
  let obj4 = quest(sharedValue[13]);
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler({ quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent });
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  let obj5 = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const isQuestAccessSuspended = quest(tmp3[14]).useIsQuestAccessSuspended();
  const tmp2Result = quest(tmp3[14]);
  sharedValue = quest(tmp3[15]).useSharedValue(0);
  const tmp2Result5 = quest(tmp3[15]);
  const fn = function u() {
    const obj = { opacity: null, transform: null };
    const obj2 = ReanimatedRexport;
    obj.opacity = obj2.withDelay(c10, spring.withSpring(sharedValue.get(), closure_11));
    const obj4 = { translateY: null };
    const obj5 = ReanimatedRexport;
    const obj6 = spring;
    obj4.translateY = obj5.withDelay(c10, obj6.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [75, 0]), closure_11));
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  const tmp2Result6 = quest(tmp3[15]);
  fn.__closure = { withDelay: quest(tmp3[15]).withDelay, ANIMATION_DELAY, withSpring: quest(tmp3[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: quest(tmp3[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__workletHash = 10319267444579;
  fn.__initData = __initData2;
  const items1 = [sharedValue];
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let obj6 = { withDelay: quest(tmp3[15]).withDelay, ANIMATION_DELAY, withSpring: quest(tmp3[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: quest(tmp3[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  let isShareableQuestResult = quest(tmp3[17]).isShareableQuest(quest.config);
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
    quest(sharedValue[20]).applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(tmp3[22])(noop.useContext(tmp2(tmp3[21]).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp2Result7 = quest(tmp3[17]);
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
  const obj8 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: null };
  const obj9 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: null };
  const intl = tmp2(tmp3[23]).intl;
  obj9.children = intl.formatToPlainString(quest(tmp3[23]).t.EAYZAr, { questName: quest.config.messages.questName });
  const items3 = [closure_8(quest(tmp3[24]).Heading, obj9), closure_8(require("VideoQuestModalCloseButton"), { onClose, style: tmp.closeButton })];
  obj8.children = items3;
  const items4 = [closure_9(quest(tmp3[26]).Stack, obj8), ];
  const obj12 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj13 = { style: null, children: null };
  const items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  obj13.style = items5;
  const obj10 = { questName: quest.config.messages.questName };
  const obj11 = { onClose, style: tmp.closeButton };
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  const obj14 = { align: "center", justify: "center", spacing: require("native").space.PX_24, style: null, children: null };
  const items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj14.style = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [closure_8(closure_5, {}), ];
      let tmp22Result = !tmp8;
      if (!tmp8) {
        const obj15 = { grow: true, variant: "secondary", loading: isClaiming, disabled: null, onPress: null, text: null, onPressDisabled: null };
        if (!isClaiming) {
          isClaiming = isQuestAccessSuspended;
        }
        obj15.disabled = isClaiming;
        obj15.onPress = claim;
        const intl3 = tmp2(tmp3[23]).intl;
        obj15.text = intl3.string(tmp2(tmp3[23]).t.cfY4PE);
        let tmp5Result2;
        if (isQuestAccessSuspended) {
          tmp5Result2 = tmp5(tmp3[29]);
        }
        obj15.onPressDisabled = tmp5Result2;
        tmp22Result = closure_8(tmp2(tmp3[28]).Button, obj15);
      }
      items7[1] = tmp22Result;
      obj14.children = items7;
      obj13.children = closure_9(tmp2(tmp3[26]).Stack, obj14);
      const items8 = [closure_8(tmp5Result, obj13), ];
      const obj16 = { style: null, children: null };
      const items9 = [, ];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj16.style = items9;
      const obj17 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: null };
      const obj18 = { spacing: tmp5(tmp3[5]).space.PX_4, style: tmp.contentEndCardHeaderCopy, children: null };
      const obj19 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
      const items10 = [closure_8(tmp2(tmp3[24]).Heading, obj19), ];
      const obj20 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
      items10[1] = closure_8(tmp2(tmp3[24]).Text, obj20);
      obj18.children = items10;
      const items11 = [closure_9(tmp2(tmp3[26]).Stack, obj18), ];
      const obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp2(tmp3[23]).intl;
      obj21.accessibilityLabel = intl4.string(tmp2(tmp3[23]).t.YsCuyF);
      obj21.onPress = onRestartVideo.onRestartVideo;
      const obj22 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj21.children = closure_8(tmp2(tmp3[31]).RetryIcon, obj22);
      items11[1] = closure_8(tmp2(tmp3[32]).PressableOpacity, obj21);
      obj17.children = items11;
      const items12 = [closure_9(tmp2(tmp3[26]).Stack, obj17), , ];
      let tmp22Result2 = null != memo;
      if (tmp22Result2) {
        const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl5 = tmp2(tmp3[23]).intl;
        const obj24 = { gameTitle: quest.config.messages.gameTitle };
        obj23.accessibilityLabel = intl5.formatToPlainString(tmp2(tmp3[23]).t.r8BzFT, obj24);
        obj23.onPress = function onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
        };
        const obj25 = { style: tmp.image, source: null, resizeMode: "cover" };
        const obj26 = { uri: memo.url };
        obj25.source = obj26;
        obj23.children = closure_8(tmp5(tmp3[34]), obj25);
        tmp22Result2 = closure_8(tmp2(tmp3[32]).PressableOpacity, obj23);
      }
      items12[1] = tmp22Result2;
      const obj27 = { direction: "horizontal", spacing: tmp5(tmp3[5]).space.PX_16, align: "center", children: null };
      const obj28 = {
        grow: true,
        variant: "expressive",
        onPress() {
              return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
            },
        text: tmp2(tmp3[19]).getExternalCtaLabel(quest)
      };
      const items13 = [closure_8(tmp2(tmp3[28]).Button, obj28), ];
      if (isShareableQuestResult) {
        const obj29 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl6 = tmp2(tmp3[23]).intl;
        obj29.accessibilityLabel = intl6.string(tmp2(tmp3[23]).t.Ej3B3Y);
        obj29.onPress = callback;
        const obj30 = { color: tmp5(tmp3[5]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj29.children = closure_8(tmp2(tmp3[35]).ShareIcon, obj30);
        isShareableQuestResult = closure_8(tmp2(tmp3[32]).PressableOpacity, obj29);
      }
      items13[1] = isShareableQuestResult;
      obj27.children = items13;
      items12[2] = closure_9(tmp2(tmp3[26]).Stack, obj27);
      obj16.children = items12;
      items8[1] = closure_9(closure_7, obj16);
      obj12.children = items8;
      items4[1] = closure_9(closure_6, obj12);
      obj7.children = items4;
      return closure_9(tmp2(tmp3[36]).SafeAreaPaddingView, obj7);
    }
  }
  const obj31 = { style: tmp.contentRewards, onLayout: callback1, children: null };
  const items14 = [closure_8(require("VideoQuestModalReward"), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  let obj32 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: null };
  const intl2 = tmp2(tmp3[23]).intl;
  const string = intl2.string;
  let t = tmp2(tmp3[23]).t;
  if (null != claimedAt) {
    t = t["EMp8/M"];
    let stringResult = string(t);
  } else {
    stringResult = string(t.qyKLdg);
  }
  obj32.children = stringResult;
  obj32 = closure_8(tmp2(tmp3[24]).Heading, obj32);
  items14[1] = obj32;
  obj31.children = items14;
  closure_9(closure_7, obj31);
  tmp5Result = require("ReanimatedNativeView");
}));