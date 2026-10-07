// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06147_LegacyBaseButton.js";
import updateSharedValueIfChanged from "../../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import HappeningNowAnalytics from "HappeningNowAnalytics.tsx";
import happeningNowRankingUtils from "happeningNowRankingUtils.tsx";
import HappeningNowCardPlaceholder from "HappeningNowCardPlaceholder.tsx";
import HappeningNowCardLiveStageDefault from "HappeningNowCardLiveStage.tsx";
import HappeningNowCardUnifiedVCDefault from "HappeningNowCardUnifiedVC.tsx";
import HappeningNowCardActivityDefault from "HappeningNowCardActivity.tsx";
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity.tsx";
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice.tsx";
import HappeningNowCardEventDefault from "HappeningNowCardEvent.tsx";
import HappeningNowCardActiveChannelDefault from "HappeningNowCardActiveChannel.tsx";
import HappeningNowCardUserDefault from "HappeningNowCardUser.tsx";
import HappeningNowActions from "HappeningNowActions.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      switch (kind.kind) {
        case "live-guild-stage":
          const obj2 = {};
          const merged = Object.assign(kind);
          const merged1 = Object.assign(fullWidth);
          return jsx(HappeningNowCardLiveStageDefault, {});
        case "guild-event":
          const obj3 = {};
          const merged2 = Object.assign(kind);
          const merged3 = Object.assign(fullWidth);
          return jsx(HappeningNowCardEventDefault, {});
        case "active-channel":
          const obj4 = {};
          const merged4 = Object.assign(kind);
          const merged5 = Object.assign(fullWidth);
          return jsx(HappeningNowCardActiveChannelDefault, {});
        case "user":
          const obj5 = {};
          const merged6 = Object.assign(kind);
          const merged7 = Object.assign(fullWidth);
          return jsx(HappeningNowCardUserDefault, {});
        case "activity":
          const obj6 = {};
          const merged8 = Object.assign(kind);
          const merged9 = Object.assign(fullWidth);
          return jsx(HappeningNowCardActivityDefault, {});
        case "voice":
          const obj7 = {};
          const merged10 = Object.assign(kind);
          const merged11 = Object.assign(fullWidth);
          return jsx(HappeningNowCardVoiceDefault, {});
        case "invite":
          const obj8 = {};
          const merged12 = Object.assign(kind);
          const merged13 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardInvite, {});
        case "customize-guild":
          const obj9 = {};
          const merged14 = Object.assign(kind);
          const merged15 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardCustomizeGuild, {});
        case "create-channel":
          const obj10 = {};
          const merged16 = Object.assign(kind);
          const merged17 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowCardCreateChannel, {});
        case "student-hub-add-channel":
          const obj11 = {};
          const merged18 = Object.assign(kind);
          const merged19 = Object.assign(fullWidth);
          return jsx(HappeningNowActions.HappeningNowStudentHubAddServer, {});
        case "embedded-activity":
          const obj12 = {};
          const merged20 = Object.assign(kind);
          const merged21 = Object.assign(fullWidth);
          obj12.cardKey = keyExtractor(kind);
          return jsx(HappeningNowCardEmbeddedActivityDefault, {});
        case "unified-vc":
          const obj = {};
          const merged22 = Object.assign(kind);
          const merged23 = Object.assign(fullWidth);
          obj.cardKey = keyExtractor(kind);
          return jsx(HappeningNowCardUnifiedVCDefault, {});
        default:
          GlobalUtils.assertNever(kind);
      }
    }
  }
  return jsx(HappeningNowCardPlaceholder.HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
}
function keyExtractor(kind) {
  switch (kind.kind) {
    case "placeholder":
      const _HermesInternal7 = HermesInternal;
      return "" + kind.kind + "-" + kind.index;
    case "live-guild-stage":
      const _HermesInternal6 = HermesInternal;
      return "" + kind.kind + "-" + kind.stage.id;
    case "guild-event":
      const _HermesInternal5 = HermesInternal;
      return "" + kind.kind + "-" + kind.event.id;
    case "active-channel":
      const _HermesInternal4 = HermesInternal;
      return "" + kind.kind + "-" + kind.channelId;
    case "user":
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      let combined = "" + kind3 + "-" + userId3;
      return combined;
    case "activity":
      ({ kind: kind3, userId: userId3 } = kind);
      _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    case "voice":
      ({ kind: kind2, voiceState } = kind);
      let userId2 = voiceState.channelId;
      if (userId2 == null) {
        userId2 = kind.userId;
      }
      let _HermesInternal2 = HermesInternal;
      let combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    case "unified-vc":
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId;
      if (userId2 == null) {
        userId2 = kind.userId;
      }
      _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    case "invite":
      return kind.kind;
    case "customize-guild":
      return kind.kind;
    case "create-channel":
      return kind.kind;
    case "student-hub-add-channel":
      return kind.kind;
    case "embedded-activity":
      kind = kind.kind;
      let userId = kind.voiceState.channelId;
      if (userId == null) {
        userId = kind.userId;
      }
      const _HermesInternal = HermesInternal;
      return "" + kind + "-" + userId + "-" + kind.activity.applicationId;
    default:
      GlobalUtils.assertNever(kind);
  }
}
function getItemType(kind) {
  return kind.kind;
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const HappeningNowConstants = fn(15129);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_7, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_8, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: closure_9 } = HappeningNowConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReanimatedHelperTypes = fn(6578);
const context = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
const createStyles = fn(4896);
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 } };
let closure_13 = createStyles.createStyles(obj);
const Gesture = fn(6147).Gesture;
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
const gesture = Gesture.Native().disallowInterruption(true);
const maintainVisibleContentPosition = { disabled: true };
let ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === ref) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { gesture, children: null };
  const merged = Object.assign(arg0);
  obj2.children = <hasOwnProperty ref={ref} />;
  const tmp6 = jsx(LegacyBaseButton.GestureDetector, { gesture, children: null });
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
  const obj3 = { ref };
}) : ((arg0, ref) => {
  const obj = { gesture, children: null };
  const merged = Object.assign(arg0);
  obj.children = <hasOwnProperty ref={ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture, children: null });
}));
forwardRefResult.displayName = "HappeningNowScrollView";
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((isFocused, arg1) => {
  _require = isFocused;
  importDefault = arg1;
  const cResult = require("c").c(10);
  isFocused = isFocused.isFocused;
  closure_3 = noop.useRef(isFocused);
  if (cResult[0] !== arg1) {
    const fn = function o() {
      const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: null };
      const data = closure_3.current.data;
      obj.card_types = data.map((item) => closure_1_9[item.kind]);
      const merged = Object.assign(HappeningNowAnalytics.getAffinityProperties(closure_3.current.data));
      return obj;
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const tmp5 = require("useStableCallback")(tmp3);
  noop = tmp5;
  if (cResult[2] !== isFocused) {
    const fn2 = function p() {
      closure_3.current = current;
    };
    cResult[2] = isFocused;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const effect = obj2.useEffect(tmp6);
  if (cResult[4] === tmp5) {
    if (cResult[5] === isFocused) {
      let tmp8 = cResult[6];
      let tmp9 = cResult[7];
    }
    const effect1 = obj2.useEffect(tmp8, tmp9);
    if (cResult[8] !== tmp5) {
      const fn4 = function _() {
        return () => {
          current = ref.current;
          const loading = current.loading;
          let tmp = !loading;
          if (!loading) {
            tmp = current.data.length > 0;
          }
          if (tmp) {
            closure_1(isFocused[14]).track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
            const obj = closure_1(isFocused[14]);
          }
        };
      };
      cResult[8] = tmp5;
      cResult[9] = fn4;
      let tmp11 = fn4;
    } else {
      tmp11 = cResult[9];
    }
    require("useMountEffect")(tmp11);
  }
  const fn3 = function v() {
    let tmp = !isFocused;
    if (!isFocused) {
      current = closure_3.current;
      const loading = current.loading;
      let tmp3 = !loading;
      if (!loading) {
        tmp3 = current.data.length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
    }
  };
  const items = [isFocused, tmp5];
  cResult[4] = tmp5;
  cResult[5] = isFocused;
  cResult[6] = fn3;
  cResult[7] = items;
  tmp9 = items;
  tmp8 = fn3;
}) : ((isFocused, arg1) => {
  let current = isFocused;
  importDefault = arg1;
  isFocused = isFocused.isFocused;
  closure_3 = noop.useRef(isFocused);
  let tmp = require("useStableCallback")(() => {
    const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: null };
    const data = closure_3.current.data;
    obj.card_types = data.map((item) => closure_1_9[item.kind]);
    const merged = Object.assign(HappeningNowAnalytics.getAffinityProperties(closure_3.current.data));
    return obj;
  });
  noop = tmp;
  const effect = noop.useEffect(() => {
    closure_3.current = current;
  });
  const items = [isFocused, tmp];
  const effect1 = noop.useEffect(() => {
    let tmp = !isFocused;
    if (!isFocused) {
      current = closure_3.current;
      const loading = current.loading;
      let tmp3 = !loading;
      if (!loading) {
        tmp3 = current.data.length > 0;
      }
      tmp = tmp3;
    }
    if (tmp) {
      AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
    }
  }, items);
  require("useMountEffect")(() => () => {
    current = ref.current;
    const loading = current.loading;
    let tmp = !loading;
    if (!loading) {
      tmp = current.data.length > 0;
    }
    if (tmp) {
      closure_1(isFocused[14]).track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
      const obj = closure_1(isFocused[14]);
    }
  });
});
ReactCompilerGating = fn(558);
const NativeResult = Gesture.Native();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((listRef) => {
  const cResult = listRef(576).c(46);
  listRef = listRef.listRef;
  const tmp4 = closure_13();
  const obj = listRef(576);
  const isFocused = listRef(1491).useIsFocused();
  if (cResult[0] !== isFocused) {
    const obj3 = { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "SET_SOUNDPACK", isFocused };
    cResult[0] = isFocused;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const obj2 = listRef(1491);
  const tmp7 = isFocused;
  const tmp8 = ref;
  [arr, tmp10] = ref(isFocused(16024)(listRef.cards, tmp6), 2);
  dependencyMap = tmp10;
  const tmp9 = ref(isFocused(16024)(listRef.cards, tmp6), 2);
  const analyticsLocations = isFocused(6664)(isFocused(6688).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
  let num3 = 0;
  ref = noop.useRef(0);
  if (cResult[2] === length) {
    if (cResult[3] === isFocused) {
      if (cResult[4] === tmp10) {
        let tmp13 = cResult[5];
      }
      closure_17(tmp13, ref);
      if (cResult[6] === isFocused) {
        if (cResult[7] === listRef) {
          let tmp16 = cResult[8];
          let tmp17 = cResult[9];
        }
        const effect = obj4.useEffect(tmp16, tmp17);
        const _Symbol = Symbol;
        class S {
          constructor() {
            if (!closure_1) {
              tmp = listRef;
              current = listRef.current;
              tmp2 = null;
              if (current != null) {
                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
              }
              tmp4 = closure_3;
              num = 0;
              closure_3.current = 0;
            }
            return;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0) {
              obj = listRef(closure_2[20]);
              return obj.cardSize(listRef) === closure_1_8;
            }
          }
          cResult[10] = V;
        } else {
          class V {
            constructor(arg0) {
              obj = listRef(closure_2[20]);
              return obj.cardSize(listRef) === closure_1_8;
            }
          }
        }
        const findIndexResult = length.findIndex(V);
        noop = findIndexResult;
        let num9 = Infinity;
        if (findIndexResult >= num3) {
          class V {
            constructor(arg0) {
              obj = listRef(closure_2[20]);
              return obj.cardSize(listRef) === closure_1_8;
            }
          }
          num9 = closure_7 * findIndexResult;
        }
        if (cResult[11] === findIndexResult) {
          class V {
            constructor(arg0) {
              obj = listRef(closure_2[20]);
              return obj.cardSize(listRef) === closure_1_8;
            }
          }
          const first = tmp8(tmp7(16032)(num9, D), 2)[0];
          class S {
            constructor() {
              if (!closure_1) {
                tmp = listRef;
                current = listRef.current;
                tmp2 = null;
                if (current != null) {
                  scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                }
                tmp4 = closure_3;
                num = 0;
                closure_3.current = 0;
              }
              return;
            }
          }
          if (cResult[14] !== length) {
            class V {
              constructor(arg0) {
                obj = listRef(closure_2[20]);
                return obj.cardSize(listRef) === closure_1_8;
              }
            }
            let result = obj6.filterHappeningNowCards(length);
            const result1 = tmp(16031).sortHappeningNowCards(result);
            class S {
              constructor() {
                if (!closure_1) {
                  tmp = listRef;
                  current = listRef.current;
                  tmp2 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp4 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            cResult[14] = length;
            cResult[15] = result1;
            const tmpResult = tmp(16031);
          } else {
            class V {
              constructor(arg0) {
                obj = listRef(closure_2[20]);
                return obj.cardSize(listRef) === closure_1_8;
              }
            }
          }
          const tmp8Result = tmp8(tmp7(16032)(num9, D), 2);
          const happeningNowScrollSnapping = tmp(16032).useHappeningNowScrollSnapping(listRef);
          if (cResult[16] !== tmp10) {
            class Y {
              constructor(arg0) {
                obj = { index: listRef.index, loading: closure_2, panelVariant: true };
                return renderCard(listRef.item, obj);
              }
            }
            cResult[16] = tmp10;
            class S {
              constructor() {
                if (!closure_1) {
                  tmp = listRef;
                  current = listRef.current;
                  tmp2 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp4 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
          } else {
            class Y {
              constructor(arg0) {
                obj = { index: listRef.index, loading: closure_2, panelVariant: true };
                return renderCard(listRef.item, obj);
              }
            }
          }
          const tmpResult3 = tmp(16032);
          const sharedValue = tmp(4618).useSharedValue([]);
          if (cResult[18] !== sharedValue) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[23]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            cResult[18] = sharedValue;
            class S {
              constructor() {
                if (!closure_1) {
                  tmp = listRef;
                  current = listRef.current;
                  tmp2 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp4 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
          } else {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[23]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
          }
          class D {
            constructor(arg0, arg1) {
              sum = arg1 + listRef;
              if (sum < closure_5) {
                tmp6 = closure_7;
                sum1 = sum / closure_7 | 0;
              } else {
                tmp3 = closure_4;
                tmp4 = closure_8;
                sum1 = closure_4 + ((sum - tmp2) / closure_8 | 0);
              }
              if (sum1 > closure_3.current) {
                closure_3.current = sum1;
              }
              return;
            }
          }
          if (num3 === length.length) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[23]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
          }
          if (tmp10) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[23]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            const obj5 = { index: 0, loading: tmp10, fullwidth: true, panelVariant: true };
            class S {
              constructor() {
                if (!closure_1) {
                  tmp = listRef;
                  current = listRef.current;
                  tmp2 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp4 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            cResult[23] = length[0];
            cResult[24] = length.length;
            cResult[25] = tmp10;
            num3 = 26;
            cResult[26] = renderCard(length.length.length > num3 ? length.length[0] : { kind: "placeholder", index: 0 }, obj5);
            class D {
              constructor(arg0, arg1) {
                sum = arg1 + listRef;
                if (sum < closure_5) {
                  tmp6 = closure_7;
                  sum1 = sum / closure_7 | 0;
                } else {
                  tmp3 = closure_4;
                  tmp4 = closure_8;
                  sum1 = closure_4 + ((sum - tmp2) / closure_8 | 0);
                }
                if (sum1 > closure_3.current) {
                  closure_3.current = sum1;
                }
                return;
              }
            }
            const tmp42 = renderCard(length.length > num3 ? length[0] : { kind: "placeholder", index: 0 }, obj5);
          } else {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[23]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[23]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
              class S {
                constructor() {
                  if (!closure_1) {
                    tmp = listRef;
                    current = listRef.current;
                    tmp2 = null;
                    if (current != null) {
                      scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                    }
                    tmp4 = closure_3;
                    num = 0;
                    closure_3.current = 0;
                  }
                  return;
                }
              }
              const stringResult = obj10.string(tmp(1126).t["1+boPi"]);
              const tmp34 = obj10.string(tmp(1126).t["1+boPi"]);
            } else {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[23]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
            }
            if (cResult[31] === tmp33) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[23]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
            }
            class S {
              constructor() {
                if (!closure_1) {
                  tmp = listRef;
                  current = listRef.current;
                  tmp2 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp4 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            const obj7 = { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first, maintainVisibleContentPosition, snapToInterval: tmp25, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null };
            class D {
              constructor(arg0, arg1) {
                sum = arg1 + listRef;
                if (sum < closure_5) {
                  tmp6 = closure_7;
                  sum1 = sum / closure_7 | 0;
                } else {
                  tmp3 = closure_4;
                  tmp4 = closure_8;
                  sum1 = closure_4 + ((sum - tmp2) / closure_8 | 0);
                }
                if (sum1 > closure_3.current) {
                  closure_3.current = sum1;
                }
                return;
              }
            }
            obj7.accessibilityLabel = tmp34;
            obj7.contentContainerStyle = tmp4.containerInner;
            obj7.data = tmp26;
            obj7.renderItem = Y;
            obj7.onViewableItemsChanged = tmp33;
            obj7.keyExtractor = keyExtractor;
            obj7.getItemType = getItemType;
            const tmp41 = jsx(tmp(8404).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first, maintainVisibleContentPosition, snapToInterval: tmp25, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null });
            cResult[31] = tmp33;
            cResult[32] = first;
            cResult[33] = tmp26;
            cResult[34] = listRef;
            cResult[35] = happeningNowScrollSnapping;
            cResult[36] = Y;
            cResult[37] = tmp25;
            cResult[38] = tmp4.containerInner;
            cResult[39] = tmp41;
          }
          const tmpResult4 = tmp(4618);
        }
        class D {
          constructor(arg0, arg1) {
            sum = arg1 + listRef;
            if (sum < closure_5) {
              tmp6 = closure_7;
              sum1 = sum / closure_7 | 0;
            } else {
              tmp3 = closure_4;
              tmp4 = closure_8;
              sum1 = closure_4 + ((sum - tmp2) / closure_8 | 0);
            }
            if (sum1 > closure_3.current) {
              closure_3.current = sum1;
            }
            return;
          }
        }
        cResult[11] = findIndexResult;
        cResult[12] = num9;
        cResult[13] = D;
      }
      class S {
        constructor() {
          if (!closure_1) {
            tmp = listRef;
            current = listRef.current;
            tmp2 = null;
            if (current != null) {
              scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
            }
            tmp4 = closure_3;
            num = 0;
            closure_3.current = 0;
          }
          return;
        }
      }
      const items = [isFocused, listRef];
      cResult[6] = isFocused;
      cResult[7] = listRef;
      cResult[9] = items;
      tmp17 = items;
      tmp16 = S;
    }
  }
  const obj8 = { data: length, isFocused, loading: tmp10 };
  cResult[2] = length;
  cResult[3] = isFocused;
  cResult[4] = tmp10;
  cResult[5] = obj8;
  tmp13 = obj8;
  obj4 = noop;
  const tmp11 = isFocused(6664);
}) : ((listRef) => {
  listRef = listRef.listRef;
  let children;
  _slicedToArray = undefined;
  let ref;
  let sharedValue;
  let callback2;
  const tmp = closure_13();
  const isFocused = listRef(children[16]).useIsFocused();
  const tmp7 = _slicedToArray(isFocused(children[17])(listRef.cards, { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "SET_SOUNDPACK", isFocused }), 2);
  children = tmp7[0];
  _slicedToArray = tmp8;
  let obj = listRef(children[16]);
  const tmp5 = isFocused;
  const tmp6 = _slicedToArray;
  ref = ref.useRef(0);
  closure_17({ data: children, isFocused, loading: tmp7[1] }, ref);
  const items = [isFocused, listRef];
  const effect = ref.useEffect(() => {
    if (!isFocused) {
      const current = listRef.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items);
  const findIndexResult = children.findIndex((item) => listRef(first[20]).cardSize(item) === callback2);
  c5 = findIndexResult;
  let num = Infinity;
  if (findIndexResult >= 0) {
    num = sharedValue * findIndexResult;
  }
  const items1 = [findIndexResult, num];
  const callback = obj2.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / React5 | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / closure_2_8 | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items1);
  const tmp6Result = tmp6(tmp5(children[21])(num, callback), 2);
  if (tmp6Result[1]) {
    const tmp17 = sharedValue;
  }
  const items2 = [children];
  const memo = obj2.useMemo(() => {
    const result = happeningNowRankingUtils.filterHappeningNowCards(first);
    return happeningNowRankingUtils.sortHappeningNowCards(result);
  }, items2);
  const tmp9 = isFocused(children[18]);
  const items3 = [tmp7[1]];
  const happeningNowScrollSnapping = listRef(children[21]).useHappeningNowScrollSnapping(listRef);
  const callback1 = obj2.useCallback((index) => renderCard(index.item, { index: index.index, loading, panelVariant: true }), items3);
  const tmp2Result = listRef(children[21]);
  sharedValue = listRef(children[22]).useSharedValue([]);
  const items4 = [sharedValue];
  callback2 = obj2.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const result = updateSharedValueIfChanged.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => closure_1_19(item.item)));
  }, items4);
  const items5 = [callback2];
  const memo1 = obj2.useMemo(() => _mod12.debounce(callback2, 130), items5);
  if (0 === children.length) {
    if (!tmp8) {
      return <num />;
    }
  }
  if (!tmp7[1]) {
    const obj3 = { value: sharedValue, children: null };
    const obj4 = { value: tmp9(isFocused(children[19]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null };
    const obj5 = { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], maintainVisibleContentPosition, snapToInterval: tmp17, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null };
    const intl = tmp2(tmp3[25]).intl;
    obj5.accessibilityLabel = intl.string(tmp2(tmp3[25]).t["1+boPi"]);
    obj5.contentContainerStyle = tmp.containerInner;
    obj5.data = memo;
    obj5.renderItem = callback1;
    obj5.onViewableItemsChanged = memo1;
    obj5.keyExtractor = keyExtractor;
    obj5.getItemType = getItemType;
    obj4.children = jsx(tmp2(tmp3[26]).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], maintainVisibleContentPosition, snapToInterval: tmp17, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null });
    obj3.children = jsx(tmp2(tmp3[18]).AnalyticsLocationProvider, { value: tmp9(isFocused(children[19]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null });
    <context.Provider value={sharedValue}>{null}</context.Provider>;
  }
  const obj6 = { style: tmp.loading, children: null };
  children = renderCard(children.length > 0 ? children[0] : { kind: "placeholder", index: 0 }, { index: 0, loading: tmp8, fullwidth: true, panelVariant: true });
  obj6.children = children;
  <num style={tmp.loading}>{null}</num>;
  const tmp2Result2 = listRef(children[22]);
}));
export const ViewableHappeningNowCardKeysContext = context;