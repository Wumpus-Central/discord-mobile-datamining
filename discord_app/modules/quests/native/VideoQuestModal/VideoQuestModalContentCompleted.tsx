// === Module 14961: VideoQuestModalContentCompleted ===

// Module 14961 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8038 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10010 */;
import QuestProgressIndicator from "QuestProgressIndicator" /* 14935 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1, showShareActionSheetResult, tmp5;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 125;
const ANIMATED_CONTENT_SPRING_CONFIG = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
let createStyles = createStyles_mod;
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: obj2, contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 }, contentRewardsWrapper: obj3, contentRewards: { alignItems: "center" }, contentRewardsCopy: { textAlign: "center" }, contentEndCardHeader: obj4, contentEndCardHeaderCopy: { flexGrow: 1, flexShrink: 1 }, contentEndCard: obj5, image: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexShrink: 0, paddingTop: QuestProgressIndicator.COMPLETION_GLOW_CLEARANCE };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj6 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_12 = createStyles(obj);
const __initData = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const __initData2 = { code: "function VideoQuestModalContentCompletedTsx2(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let claim;
  let content;
  let headerContentCopy;
  let isClaiming;
  let isLoading;
  let items2;
  let onClose;
  let onRestartVideo;
  let quest;
  let sharedValue;
  let sourceQuestContent;
  let tmp38;
  let wrapper;
  const tmp = quest;
  const tmp2 = sharedValue;
  let obj = quest(sharedValue[8]);
  const cResult = obj.c(110);
  ({ onClose, onRestartVideo, sourceQuestContent } = arg0);
  const tmp4 = closure_12();
  let obj2 = quest(sharedValue[9]);
  quest = obj2.useVideoQuestModalContext().quest;
  if (cResult[0] !== quest) {
    const tmpResult = tmp(tmp2[10]);
    const questAsset = tmpResult.getQuestAsset(quest, tmp(tmp2[10]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
    cResult[0] = quest;
    cResult[1] = questAsset;
  }
  if (cResult[2] === onClose) {
    if (cResult[3] === quest) {
      let tmp9;
      if (cResult[4] === sourceQuestContent) {
        tmp9 = cResult[5];
      }
      const tmpResult6 = tmp(tmp2[11]);
      const videoQuestClickCtaAndMaybeCloseModal = tmpResult6.useVideoQuestClickCtaAndMaybeCloseModal(tmp9);
      if (cResult[6] === quest) {
        let tmp11;
        let tmp25;
        if (cResult[7] === sourceQuestContent) {
          tmp11 = cResult[8];
        }
        const tmpResult7 = tmp(tmp2[13]);
        ({ isLoading, isClaiming, claim } = tmpResult7.useQuestRewardClaimHandler(tmp11));
        tmpResult7.useQuestRewardClaimHandler(tmp11);
        if (isLoading) {
          isLoading = !isClaiming;
        }
        const userStatus = quest.userStatus;
        let claimedAt;
        if (userStatus != null) {
          claimedAt = userStatus.claimedAt;
        }
        const tmpResult8 = tmp(tmp2[14]);
        const isQuestAccessSuspended = tmpResult8.useIsQuestAccessSuspended();
        const tmpResult9 = tmp(tmp2[15]);
        sharedValue = tmpResult9.useSharedValue(0);
        const tmpResult10 = tmp(tmp2[15]);
        class D {
          constructor() {
            obj = { opacity: null, transform: null };
            tmp = closure_0(closure_2[15]);
            withDelay = tmp.withDelay;
            obj2 = closure_0(closure_2[16]);
            obj.opacity = withDelay(c10, obj2.withSpring(closure_2.get(), closure_11));
            obj1 = { translateY: null };
            tmp2 = closure_0(closure_2[15]);
            withDelay2 = tmp2.withDelay;
            tmp3 = closure_0(closure_2[16]);
            withSpring = tmp3.withSpring;
            obj4 = closure_0(closure_2[15]);
            obj1.translateY = withDelay2(c10, withSpring(obj4.interpolate(closure_2.get(), [0, 1], [75, 0]), closure_11));
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj3 = { withDelay: tmp(tmp2[15]).withDelay, ANIMATION_DELAY, withSpring: tmp(tmp2[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp(tmp2[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
        const useAnimatedStyle = tmpResult10.useAnimatedStyle;
        D.__closure = obj3;
        D.__workletHash = 2704439293952;
        D.__initData = __initData;
        const animatedStyle = useAnimatedStyle(D);
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
          tmp25 = items;
        } else {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          tmp25 = cResult[11];
        }
        const effect = react.useEffect(M, tmp25);
        if (cResult[12] !== quest.config) {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
          cResult[12] = quest.config;
          cResult[13] = obj12.isShareableQuest(quest.config);
          const isShareableQuestResult = obj12.isShareableQuest(quest.config);
        } else {
          class M {
            constructor() {
              result = closure_2.set(1);
              return;
            }
          }
        }
        _slicedToArray = tmp27;
        if (cResult[14] === tmp27) {
          let tmp32;
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
            cResult[17] = tmp33;
            cResult[18] = items1;
            tmp32 = items1;
          } else {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            tmp32 = cResult[18];
          }
          const layoutEffect = react.useLayoutEffect(tmp33, tmp32);
          const height = videoQuestClickCtaAndMaybeCloseModal(tmp2[22])(react.useContext(tmp(tmp2[21]).QuestDockGestureContext).windowDimensions).height;
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
          const tmp37 = _slicedToArray(react.useState(null), 2);
          [tmp38, react] = tmp37;
          class D {
            constructor() {
              obj = { opacity: null, transform: null };
              tmp = closure_0(closure_2[15]);
              withDelay = tmp.withDelay;
              obj2 = closure_0(closure_2[16]);
              obj.opacity = withDelay(c10, obj2.withSpring(closure_2.get(), closure_11));
              obj1 = { translateY: null };
              tmp2 = closure_0(closure_2[15]);
              withDelay2 = tmp2.withDelay;
              tmp3 = closure_0(closure_2[16]);
              withSpring = tmp3.withSpring;
              obj4 = closure_0(closure_2[15]);
              obj1.translateY = withDelay2(c10, withSpring(obj4.interpolate(closure_2.get(), [0, 1], [75, 0]), closure_11));
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
            cResult[19] = tmp40;
          } else {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
          }
          if (tmp38 == null) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
          }
          const sum = tmp38 + tmp(tmp2[6]).COMPLETION_GLOW_CLEARANCE;
          const sum1 = sum + tmp35(tmp2[5]).space.PX_16;
          ({ wrapper, content, headerContentCopy } = tmp4);
          if (cResult[20] !== quest.config.messages.questName) {
            class M {
              constructor() {
                result = closure_2.set(1);
                return;
              }
            }
            let obj4 = { questName: quest.config.messages.questName };
            cResult[20] = quest.config.messages.questName;
            cResult[21] = obj13.formatToPlainString(tmp(tmp2[23]).t.EAYZAr, obj4);
            const formatToPlainStringResult = obj13.formatToPlainString(tmp(tmp2[23]).t.EAYZAr, obj4);
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
              const obj5 = { align: "center", direction: "horizontal", justify: "space-between", style: content, children: items2 };
              items2 = [tmp45, tmp48];
              cResult[28] = tmp4.content;
              cResult[29] = tmp45;
              cResult[30] = tmp48;
              cResult[31] = closure_9(tmp(tmp2[26]).Stack, obj5);
              const tmp53 = closure_9(tmp(tmp2[26]).Stack, obj5);
            }
            const obj6 = { onClose, style: tmp4.closeButton };
            cResult[25] = onClose;
            cResult[26] = tmp4.closeButton;
            cResult[27] = closure_8(videoQuestClickCtaAndMaybeCloseModal(tmp2[25]), obj6);
            const tmp50 = closure_8(videoQuestClickCtaAndMaybeCloseModal(tmp2[25]), obj6);
          }
          const obj7 = { variant: "heading-sm/semibold", color: "text-subtle", style: headerContentCopy, children: tmp43 };
          cResult[22] = tmp4.headerContentCopy;
          cResult[23] = tmp43;
          cResult[24] = closure_8(tmp(tmp2[24]).Heading, obj7);
          const tmp47 = closure_8(tmp(tmp2[24]).Heading, obj7);
        }
        class B {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              tmp4 = closure_0(closure_2[18]);
              obj = { message: null };
              showShareActionSheet = tmp4.showShareActionSheet;
              obj2 = closure_0(closure_2[19]);
              tmp5 = quest;
              obj.message = obj2.getQuestUrl(quest.id);
              str = "Video Quest Modal";
              showShareActionSheetResult = showShareActionSheet(obj, "Video Quest Modal");
            }
            return;
          }
        }
        cResult[14] = tmp27;
        cResult[15] = quest.id;
        cResult[16] = B;
      }
      const obj8 = { quest, onSuccess: videoQuestClickCtaAndMaybeCloseModal(tmp2[12]).close, sourceQuestContent };
      cResult[6] = quest;
      cResult[7] = sourceQuestContent;
      cResult[8] = obj8;
      tmp11 = obj8;
    }
  }
  const obj9 = { quest, onClose: null, sourceQuestContent };
  cResult[2] = onClose;
  cResult[3] = quest;
  cResult[4] = sourceQuestContent;
  cResult[5] = obj9;
  tmp9 = obj9;
}) : ((onRestartVideo) => {
  let RetryIcon;
  let ShareIcon;
  let claim;
  let closure_1;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isLoading;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items3;
  let items5;
  let items6;
  let items9;
  let obj10;
  let obj22;
  let obj24;
  let obj25;
  let obj26;
  let obj30;
  let onClose;
  let quest;
  let sharedValue;
  let sourceQuestContent;
  let stringResult;
  let tmp17;
  let tmp2Result8;
  let tmp5Result2;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  onRestartVideo = onRestartVideo.onRestartVideo;
  const tmp = closure_12();
  const tmp2 = quest;
  const tmp3 = sharedValue;
  let obj = quest(sharedValue[9]);
  quest = obj.useVideoQuestModalContext().quest;
  let items = [quest];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
  }, items);
  let obj3 = quest(sharedValue[11]);
  importDefault = obj3.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj4 = quest(sharedValue[13]);
  const obj5 = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler(obj5);
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  const tmp2Result = tmp2(tmp3[14]);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  const tmp2Result5 = tmp2(tmp3[15]);
  sharedValue = tmp2Result5.useSharedValue(0);
  const fn = function u() {
    let items;
    let obj2;
    let obj4;
    let withDelay;
    let withDelay2;
    let withSpring;
    const obj = { opacity: withDelay(c10, obj2.withSpring(sharedValue.get(), ANIMATED_CONTENT_SPRING_CONFIG)), transform: items };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = spring;
    const obj3 = { translateY: withDelay2(c10, withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [75, 0]), ANIMATED_CONTENT_SPRING_CONFIG)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    withSpring = spring.withSpring;
    spring;
    items = [obj3];
    obj4 = ReanimatedRexport;
    return obj;
  };
  const tmp2Result6 = tmp2(tmp3[15]);
  fn.__closure = { withDelay: tmp2(tmp3[15]).withDelay, ANIMATION_DELAY, withSpring: tmp2(tmp3[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp2(tmp3[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__workletHash = 10319267444579;
  fn.__initData = __initData2;
  const items1 = [sharedValue];
  ({ withDelay: tmp2(tmp3[15]).withDelay, ANIMATION_DELAY, withSpring: tmp2(tmp3[16]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp2(tmp3[15]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 });
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmp2Result7 = tmp2(tmp3[17]);
  let isShareableQuestResult = tmp2Result7.isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  const callback = react.useCallback(() => {
    let obj2;
    if (_slicedToArray) {
      const obj = { message: obj2.getQuestUrl(quest.id) };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      obj2 = QuestCopyUtils;
      showShareActionSheet(obj, "Video Quest Modal");
    }
  }, items2);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = quest(sharedValue[20]);
    obj.applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(tmp3[22])(react.useContext(tmp2(tmp3[21]).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp16 = _slicedToArray(react.useState(null), 2);
  [tmp17, react] = tmp16;
  const callback1 = react.useCallback((nativeEvent) => {
    react(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp17 == null) {
    tmp17 = tmp2(tmp3[6]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp17 + tmp2(tmp3[6]).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(tmp3[5]).space.PX_16;
  const obj7 = { bottom: true, style: tmp.wrapper, children: null };
  const SafeAreaPaddingView = tmp2(tmp3[36]).SafeAreaPaddingView;
  const obj8 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: items3 };
  const Stack = tmp2(tmp3[26]).Stack;
  const obj9 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: intl.formatToPlainString(tmp2(tmp3[23]).t.EAYZAr, obj10) };
  const Heading = tmp2(tmp3[24]).Heading;
  intl = tmp2(tmp3[23]).intl;
  obj10 = { questName: quest.config.messages.questName };
  items3 = [closure_8(Heading, obj9), ];
  const obj11 = { onClose, style: tmp.closeButton };
  items3[1] = closure_8(require("VideoQuestModalCloseButton"), obj11);
  const items4 = [closure_9(Stack, obj8), ];
  const obj12 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj13 = { style: items5, children: null };
  items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  const obj14 = { align: "center", justify: "center", spacing: require("native").space.PX_24, style: items6, children: null };
  const tmp5Result = require("ReanimatedNativeView");
  const Stack2 = tmp2(tmp3[26]).Stack;
  items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  if (isLoading) {
    let tmp21Result;
    if (!isClaiming) {
      tmp21Result = closure_8(closure_5, {});
    }
    const items7 = [tmp21Result, ];
    let tmp22Result3 = !tmp8;
    if (tmp22Result3) {
      const obj15 = { grow: true, variant: "secondary", loading: isClaiming, disabled: isClaiming, onPress: claim, text: intl3.string(tmp2(tmp3[23]).t.cfY4PE), onPressDisabled: tmp5Result2 };
      const Button = tmp2(tmp3[28]).Button;
      if (!isClaiming) {
        isClaiming = isQuestAccessSuspended;
      }
      intl3 = tmp2(tmp3[23]).intl;
      tmp5Result2 = undefined;
      if (isQuestAccessSuspended) {
        tmp5Result2 = tmp5(tmp3[29]);
      }
      tmp22Result3 = closure_8(Button, obj15);
    }
    items7[1] = tmp22Result3;
    obj14.children = items7;
    obj13.children = closure_9(Stack2, obj14);
    const items8 = [closure_8(tmp5Result, obj13), ];
    const obj16 = { style: items9, children: items12 };
    items9 = [, ];
    ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
    const obj17 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: items11 };
    const Stack3 = tmp2(tmp3[26]).Stack;
    const obj18 = { spacing: require("native").space.PX_4, style: tmp.contentEndCardHeaderCopy, children: items10 };
    const Stack4 = tmp2(tmp3[26]).Stack;
    const obj19 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
    items10 = [closure_8(tmp2(tmp3[24]).Heading, obj19), ];
    const obj20 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items10[1] = closure_8(tmp2(tmp3[24]).Text, obj20);
    items11 = [closure_9(Stack4, obj18), ];
    const obj21 = { accessibilityRole: "button", accessibilityLabel: intl4.string(tmp2(tmp3[23]).t.YsCuyF), onPress: onRestartVideo, children: closure_8(RetryIcon, obj22) };
    const PressableOpacity = tmp2(tmp3[32]).PressableOpacity;
    intl4 = tmp2(tmp3[23]).intl;
    obj22 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    RetryIcon = tmp2(tmp3[31]).RetryIcon;
    items11[1] = closure_8(PressableOpacity, obj21);
    items12 = [closure_9(Stack3, obj17), , ];
    let tmp22Result4 = null != memo;
    if (tmp22Result4) {
      const obj23 = {
        accessibilityRole: "button",
        accessibilityLabel: intl5.formatToPlainString(tmp2(tmp3[23]).t.r8BzFT, obj24),
        onPress() {
              return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
            },
        children: closure_8(require("FastImage"), obj25)
      };
      const PressableOpacity2 = tmp2(tmp3[32]).PressableOpacity;
      intl5 = tmp2(tmp3[23]).intl;
      obj25 = { style: tmp.image, source: obj26, resizeMode: "cover" };
      obj24 = { gameTitle: quest.config.messages.gameTitle };
      obj26 = { uri: memo.url };
      tmp22Result4 = closure_8(PressableOpacity2, obj23);
    }
    items12[1] = tmp22Result4;
    const obj27 = { direction: "horizontal", spacing: require("native").space.PX_16, align: "center", children: items13 };
    const Stack5 = tmp2(tmp3[26]).Stack;
    const obj28 = {
      grow: true,
      variant: "expressive",
      onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
        },
      text: tmp2Result8.getExternalCtaLabel(quest)
    };
    const Button2 = tmp2(tmp3[28]).Button;
    tmp2Result8 = tmp2(tmp3[19]);
    items13 = [closure_8(Button2, obj28), ];
    if (isShareableQuestResult) {
      const obj29 = { accessibilityRole: "button", accessibilityLabel: intl6.string(tmp2(tmp3[23]).t.Ej3B3Y), onPress: callback, children: closure_8(ShareIcon, obj30) };
      const PressableOpacity3 = tmp2(tmp3[32]).PressableOpacity;
      intl6 = tmp2(tmp3[23]).intl;
      obj30 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
      ShareIcon = tmp2(tmp3[35]).ShareIcon;
      isShareableQuestResult = closure_8(PressableOpacity3, obj29);
    }
    items13[1] = isShareableQuestResult;
    items12[2] = closure_9(Stack5, obj27);
    items8[1] = closure_9(closure_7, obj16);
    obj12.children = items8;
    items4[1] = closure_9(closure_6, obj12);
    obj7.children = items4;
    return closure_9(SafeAreaPaddingView, obj7);
  }
  const obj31 = { style: tmp.contentRewards, onLayout: callback1, children: items14 };
  items14 = [closure_8(require("VideoQuestModalReward"), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  const obj32 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: stringResult };
  const Heading2 = tmp2(tmp3[24]).Heading;
  const intl2 = tmp2(tmp3[23]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[23]).t;
  if (null != claimedAt) {
    stringResult = string(t["EMp8/M"]);
  } else {
    stringResult = string(t.qyKLdg);
  }
  items14[1] = closure_8(Heading2, obj32);
  tmp21Result = closure_9(closure_7, obj31);
}));
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;