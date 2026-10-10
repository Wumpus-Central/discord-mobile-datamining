// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import LegacyBaseButton from "../../../../../../_runtime/06334_LegacyBaseButton.js";
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
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
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
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const HappeningNowConstants = fn(15566);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_9, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: c10, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: closure_11 } = HappeningNowConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReanimatedHelperTypes = fn(6762);
const context = noop.createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
const createStyles = fn(5092);
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 } };
let closure_15 = createStyles.createStyles(obj);
const Gesture = fn(6334).Gesture;
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
const gesture = Gesture.Native().disallowInterruption(true);
const maintainVisibleContentPosition = { disabled: true };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowScrollView(ref) {
  const cResult = c.c(6);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const obj2 = { gesture, children: null };
  const merged = Object.assign(tmp4);
  obj2.children = <React5 ref={tmp5} />;
  const tmp11 = jsx(LegacyBaseButton.GestureDetector, { gesture, children: null });
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
  const obj3 = { ref: tmp5 };
}) : (function HappeningNowScrollView(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { gesture, children: null };
  const merged1 = Object.assign(merged);
  obj.children = <React5 ref={ref.ref} />;
  return jsx(LegacyBaseButton.GestureDetector, { gesture, children: null });
});
const renderScrollComponent = tmp5;
tmp5.displayName = "HappeningNowScrollView";
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackActivityCardsView(isFocused, arg1) {
  _require = isFocused;
  importDefault = arg1;
  const cResult = require("c").c(10);
  isFocused = isFocused.isFocused;
  closure_3 = noop.useRef(isFocused);
  if (cResult[0] !== arg1) {
    const fn = function c() {
      const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: null };
      const data = closure_3.current.data;
      obj.card_types = data.map((item) => closure_1_11[item.kind]);
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
  closure_4 = tmp5;
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
  const effect = noop.useEffect(tmp6);
  if (cResult[4] === tmp5) {
    if (cResult[5] === isFocused) {
      let tmp8 = cResult[6];
      let tmp9 = cResult[7];
    }
    const effect1 = noop.useEffect(tmp8, tmp9);
    if (cResult[8] !== tmp5) {
      const fn4 = function h() {
        return () => {
          current = ref.current;
          const loading = current.loading;
          let tmp = !loading;
          if (!loading) {
            tmp = current.data.length > 0;
          }
          if (tmp) {
            closure_1(isFocused[15]).track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
            const obj = closure_1(isFocused[15]);
          }
        };
      };
      cResult[8] = tmp5;
      cResult[9] = fn4;
      let tmp11 = fn4;
    } else {
      tmp11 = cResult[9];
    }
    tmp4(tmp[16])(tmp11);
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
  let obj = require("c");
  tmp4 = importDefault;
}) : (function useTrackActivityCardsView(isFocused, arg1) {
  let current = isFocused;
  importDefault = arg1;
  isFocused = isFocused.isFocused;
  closure_3 = noop.useRef(isFocused);
  let tmp = require("useStableCallback")(() => {
    const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: null };
    const data = closure_3.current.data;
    obj.card_types = data.map((item) => closure_1_11[item.kind]);
    const merged = Object.assign(HappeningNowAnalytics.getAffinityProperties(closure_3.current.data));
    return obj;
  });
  closure_4 = tmp;
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
      closure_1(isFocused[15]).track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
      const obj = closure_1(isFocused[15]);
    }
  });
});
ReactCompilerGating = fn(558);
const NativeResult = Gesture.Native();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNow(listRef) {
  const cResult = listRef(576).c(46);
  listRef = listRef.listRef;
  const tmp4 = closure_15();
  const obj = listRef(576);
  const isFocused = listRef(1504).useIsFocused();
  if (cResult[0] !== isFocused) {
    const obj3 = { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "Build Override Cookie", isFocused };
    cResult[0] = isFocused;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const obj2 = listRef(1504);
  const tmp7 = isFocused;
  const tmp8 = _slicedToArray;
  [arr, tmp10] = isFocused(16473)(listRef.cards, tmp6);
  dependencyMap = tmp10;
  const tmp9 = _slicedToArray(isFocused(16473)(listRef.cards, tmp6), 2);
  const analyticsLocations = isFocused(6851)(isFocused(6878).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
  let num3 = 0;
  const obj4 = sharedValue;
  const tmp11 = isFocused(6851);
  if (cResult[2] === length) {
    if (cResult[3] === isFocused) {
      if (cResult[4] === tmp10) {
        let tmp13 = cResult[5];
      }
      closure_19(tmp13, ref);
      if (cResult[6] === isFocused) {
        if (cResult[7] === listRef) {
          let tmp16 = cResult[8];
          let tmp17 = cResult[9];
        }
        const effect = obj4.useEffect(tmp16, tmp17);
        const _Symbol = Symbol;
        class N {
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
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          cResult[10] = A;
        } else {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
        }
        const findIndexResult = length.findIndex(A);
        _slicedToArray = findIndexResult;
        let num9 = Infinity;
        if (findIndexResult >= num3) {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          num9 = closure_9 * findIndexResult;
        }
        if (cResult[11] === findIndexResult) {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          const first = tmp8(tmp7(16481)(num9, D), 2)[0];
          class N {
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
            class A {
              constructor(arg0) {
                obj = listRef(closure_2[21]);
                return obj.cardSize(listRef) === closure_1_10;
              }
            }
            let result = obj6.filterHappeningNowCards(length);
            const result1 = tmp(16480).sortHappeningNowCards(result);
            class N {
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
            const tmpResult = tmp(16480);
          } else {
            class A {
              constructor(arg0) {
                obj = listRef(closure_2[21]);
                return obj.cardSize(listRef) === closure_1_10;
              }
            }
          }
          const tmp8Result = tmp8(tmp7(16481)(num9, D), 2);
          const happeningNowScrollSnapping = tmp(16481).useHappeningNowScrollSnapping(listRef);
          if (cResult[16] !== tmp10) {
            class Y {
              constructor(arg0) {
                obj = { index: listRef.index, loading: closure_2, panelVariant: true };
                return renderCard(listRef.item, obj);
              }
            }
            cResult[16] = tmp10;
            class N {
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
          const tmpResult3 = tmp(16481);
          sharedValue = tmp(4850).useSharedValue([]);
          if (cResult[18] !== sharedValue) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            cResult[18] = sharedValue;
            class N {
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
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
          }
          class D {
            constructor(arg0, arg1) {
              sum = arg1 + listRef;
              if (sum < closure_5) {
                tmp6 = closure_9;
                sum1 = sum / closure_9 | 0;
              } else {
                tmp3 = closure_4;
                tmp4 = closure_10;
                sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
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
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
          }
          if (tmp10) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            const obj5 = { index: 0, loading: tmp10, fullwidth: true, panelVariant: true };
            class N {
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
                  tmp6 = closure_9;
                  sum1 = sum / closure_9 | 0;
                } else {
                  tmp3 = closure_4;
                  tmp4 = closure_10;
                  sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
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
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                return;
              }
            }
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
              class N {
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
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
            }
            if (cResult[31] === tmp33) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { ... }));
                  return;
                }
              }
            }
            class N {
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
                  tmp6 = closure_9;
                  sum1 = sum / closure_9 | 0;
                } else {
                  tmp3 = closure_4;
                  tmp4 = closure_10;
                  sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
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
            const tmp41 = jsx(tmp(8624).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first, maintainVisibleContentPosition, snapToInterval: tmp25, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null });
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
          const tmpResult4 = tmp(4850);
        }
        class D {
          constructor(arg0, arg1) {
            sum = arg1 + listRef;
            if (sum < closure_5) {
              tmp6 = closure_9;
              sum1 = sum / closure_9 | 0;
            } else {
              tmp3 = closure_4;
              tmp4 = closure_10;
              sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
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
      class N {
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
      tmp16 = N;
    }
  }
  const obj8 = { data: length, isFocused, loading: tmp10 };
  cResult[2] = length;
  cResult[3] = isFocused;
  cResult[4] = tmp10;
  cResult[5] = obj8;
  tmp13 = obj8;
  ref = sharedValue.useRef(0);
}) : (function HappeningNow(listRef) {
  listRef = listRef.listRef;
  let children;
  let ref;
  let num;
  let sharedValue;
  let callback2;
  const tmp = closure_15();
  const isFocused = listRef(children[17]).useIsFocused();
  const obj2 = { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "Build Override Cookie", isFocused };
  const tmp7 = ref(isFocused(children[18])(listRef.cards, obj2), 2);
  children = tmp7[0];
  const loading = tmp8;
  let obj = listRef(children[17]);
  const tmp5 = isFocused;
  const tmp6 = ref;
  ref = num.useRef(0);
  closure_19({ data: children, isFocused, loading: tmp7[1] }, ref);
  const items = [isFocused, listRef];
  const effect = num.useEffect(() => {
    if (!isFocused) {
      const current = listRef.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items);
  const findIndexResult = children.findIndex((item) => listRef(first[21]).cardSize(item) === closure_1_10);
  c5 = findIndexResult;
  num = Infinity;
  if (findIndexResult >= 0) {
    num = snapToInterval * findIndexResult;
  }
  const items1 = [findIndexResult, num];
  const callback = obj3.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / options | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / collapsed | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items1);
  const tmp9 = isFocused(children[19]);
  const items2 = [children];
  const memo = obj3.useMemo(() => {
    const result = happeningNowRankingUtils.filterHappeningNowCards(first);
    return happeningNowRankingUtils.sortHappeningNowCards(result);
  }, items2);
  const tmp6Result = tmp6(tmp5(children[22])(num, callback), 2);
  const items3 = [tmp7[1]];
  const happeningNowScrollSnapping = listRef(children[22]).useHappeningNowScrollSnapping(listRef);
  const callback1 = obj3.useCallback((index) => renderCard(index.item, { index: index.index, loading, panelVariant: true }), items3);
  const tmp2Result = listRef(children[22]);
  sharedValue = listRef(children[23]).useSharedValue([]);
  const items4 = [sharedValue];
  callback2 = obj3.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const result = updateSharedValueIfChanged.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => closure_1_21(item.item)));
  }, items4);
  const items5 = [callback2];
  const memo1 = obj3.useMemo(() => _mod12.debounce(callback2, 130), items5);
  if (0 === children.length) {
    if (!tmp8) {
      return <callback2 />;
    }
  }
  if (!tmp7[1]) {
    const obj4 = { value: sharedValue, children: null };
    const obj5 = { value: tmp9(isFocused(children[20]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null };
    const obj6 = { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], maintainVisibleContentPosition, snapToInterval, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null };
    const intl = tmp2(tmp3[26]).intl;
    obj6.accessibilityLabel = intl.string(tmp2(tmp3[26]).t["1+boPi"]);
    obj6.contentContainerStyle = tmp.containerInner;
    obj6.data = memo;
    obj6.renderItem = callback1;
    obj6.onViewableItemsChanged = memo1;
    obj6.keyExtractor = keyExtractor;
    obj6.getItemType = getItemType;
    obj5.children = jsx(tmp2(tmp3[27]).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: tmp6Result[0], maintainVisibleContentPosition, snapToInterval, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: null, contentContainerStyle: null, data: null, renderItem: null, onViewableItemsChanged: null, keyExtractor: null, getItemType: null });
    obj4.children = jsx(tmp2(tmp3[19]).AnalyticsLocationProvider, { value: tmp9(isFocused(children[20]).ACTIVITIES_HAPPENING_NOW).analyticsLocations, children: null });
    <context.Provider value={sharedValue}>{null}</context.Provider>;
  }
  const obj7 = { style: tmp.loading, children: null };
  children = renderCard(children.length > 0 ? children[0] : { kind: "placeholder", index: 0 }, { index: 0, loading: tmp8, fullwidth: true, panelVariant: true });
  obj7.children = children;
  <callback2 style={tmp.loading}>{null}</callback2>;
  const tmp2Result2 = listRef(children[23]);
}));
export const ViewableHappeningNowCardKeysContext = context;