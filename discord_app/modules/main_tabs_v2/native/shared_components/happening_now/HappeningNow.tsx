// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
import _mod12 from "../../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
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
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import ReanimatedHelperTypes from "../../../../reanimated/ReanimatedHelperTypes.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, listRef, scrollToOffsetResult, viewableItems;

let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const f72492 = (arg0, ref) => {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === ref) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(arg0);
  const tmp6 = <GestureDetector gesture={gesture}>{null}</GestureDetector>;
  cResult[0] = arg0;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
};
const f72493 = (arg0, ref) => {
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(arg0);
  return <GestureDetector gesture={gesture}>{null}</GestureDetector>;
};
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      switch (kind.kind) {
        case "live-guild-stage": {
          HappeningNowCardLiveStageDefault;
          const merged = Object.assign(kind);
          const merged1 = Object.assign(fullWidth);
          return <tmp112 />;
        }
        case "guild-event": {
          HappeningNowCardEventDefault;
          const merged2 = Object.assign(kind);
          const merged3 = Object.assign(fullWidth);
          return <tmp102 />;
        }
        case "active-channel": {
          HappeningNowCardActiveChannelDefault;
          const merged4 = Object.assign(kind);
          const merged5 = Object.assign(fullWidth);
          return <tmp92 />;
        }
        case "user": {
          HappeningNowCardUserDefault;
          const merged6 = Object.assign(kind);
          const merged7 = Object.assign(fullWidth);
          return <tmp82 />;
        }
        case "activity": {
          HappeningNowCardActivityDefault;
          const merged8 = Object.assign(kind);
          const merged9 = Object.assign(fullWidth);
          return <tmp72 />;
        }
        case "voice": {
          HappeningNowCardVoiceDefault;
          const merged10 = Object.assign(kind);
          const merged11 = Object.assign(fullWidth);
          return <tmp62 />;
        }
        case "invite": {
          const HappeningNowCardInvite = HappeningNowActions.HappeningNowCardInvite;
          const merged12 = Object.assign(kind);
          const merged13 = Object.assign(fullWidth);
          return <HappeningNowCardInvite />;
        }
        case "customize-guild": {
          const HappeningNowCardCustomizeGuild = HappeningNowActions.HappeningNowCardCustomizeGuild;
          const merged14 = Object.assign(kind);
          const merged15 = Object.assign(fullWidth);
          return <HappeningNowCardCustomizeGuild />;
        }
        case "create-channel": {
          const HappeningNowCardCreateChannel = HappeningNowActions.HappeningNowCardCreateChannel;
          const merged16 = Object.assign(kind);
          const merged17 = Object.assign(fullWidth);
          return <HappeningNowCardCreateChannel />;
        }
        case "student-hub-add-channel": {
          const HappeningNowStudentHubAddServer = HappeningNowActions.HappeningNowStudentHubAddServer;
          const merged18 = Object.assign(kind);
          const merged19 = Object.assign(fullWidth);
          return <HappeningNowStudentHubAddServer />;
        }
        case "embedded-activity": {
          HappeningNowCardEmbeddedActivityDefault;
          const merged20 = Object.assign(kind);
          const merged21 = Object.assign(fullWidth);
          return <tmp15 cardKey={keyExtractor(kind)} />;
        }
        case "unified-vc": {
          HappeningNowCardUnifiedVCDefault;
          const merged22 = Object.assign(kind);
          const merged23 = Object.assign(fullWidth);
          return <tmp4 cardKey={keyExtractor(kind)} />;
        }
        default: {
          const obj13 = GlobalUtils;
          obj13.assertNever(kind);
          break;
        }
      }
    }
  }
  return jsx(HappeningNowCardPlaceholder.HappeningNowCardPlaceholder, {
    fullWidth: fullWidth.fullwidth,
    panelVariant: fullWidth.panelVariant,
  });
}
function keyExtractor(kind) {
  let combined;
  let combined1;
  let userId2;
  switch (kind.kind) {
    case "placeholder": {
      const _HermesInternal7 = HermesInternal;
      return "" + kind.kind + "-" + kind.index;
    }
    case "live-guild-stage": {
      const _HermesInternal6 = HermesInternal;
      return "" + kind.kind + "-" + kind.stage.id;
    }
    case "guild-event": {
      const _HermesInternal5 = HermesInternal;
      return "" + kind.kind + "-" + kind.event.id;
    }
    case "active-channel": {
      const _HermesInternal4 = HermesInternal;
      return "" + kind.kind + "-" + kind.channelId;
    }
    case "user": {
      let kind3;
      let userId3;
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    }
    case "activity": {
      let kind3;
      let userId3;
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    }
    case "voice": {
      let kind2;
      let voiceState;
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId ?? kind.userId;
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    }
    case "unified-vc": {
      let kind2;
      let voiceState;
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId ?? kind.userId;
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    }
    case "invite": {
      return kind.kind;
    }
    case "customize-guild": {
      return kind.kind;
    }
    case "create-channel": {
      return kind.kind;
    }
    case "student-hub-add-channel": {
      return kind.kind;
    }
    case "embedded-activity": {
      const kindValue = kind.kind;
      const userId = kind.voiceState.channelId ?? kind.userId;
      const _HermesInternal = HermesInternal;
      return "" + kindValue + "-" + userId + "-" + kind.activity.applicationId;
    }
    default: {
      const obj = GlobalUtils;
      obj.assertNever(kind);
      break;
    }
  }
}
function getItemType(kind) {
  return kind.kind;
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({
  HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: metroImportDefault,
  HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: metroImportAll,
  HAPPENING_NOW_PANELS_CONTAINER_PADDING,
  HappeningNowKindIds: c9,
} = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const createContext = react.createContext;
const context = createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
let obj = {
  containerInner: {
    paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING,
    paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING,
  },
  loading: obj2,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
let closure_13 = createStyles.createStyles(obj);
const Gesture = LegacyBaseButton.Gesture;
const NativeResult = Gesture.Native();
const gesture = NativeResult.disallowInterruption(true);
const maintainVisibleContentPosition = { disabled: true };
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? f72492 : f72493).displayName = "HappeningNowScrollView";
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? f72492 : f72493);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isFocused, arg1) => {
      let closure_4;
      let tmp3;
      let tmp6;
      _require = isFocused;
      importDefault = arg1;
      let tmp = isFocused;
      let obj = require("react");
      const cResult = obj.c(10);
      isFocused = isFocused.isFocused;
      let obj2 = react;
      let closure_3 = react.useRef(isFocused);
      if (cResult[0] !== arg1) {
        const fn = function o() {
          let data;
          const obj = {
            context: "messages",
            num_cards: closure_3.current.data.length,
            max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length),
            card_types: data.map((item) => closure_1_9[item.kind]),
          };
          data = closure_3.current.data;
          const obj2 = HappeningNowAnalytics;
          const merged = Object.assign(obj2.getAffinityProperties(closure_3.current.data));
          return obj;
        };
        cResult[0] = arg1;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      const tmp5 = require("useStableCallback")(tmp3);
      react = tmp5;
      const tmp4 = importDefault;
      if (cResult[2] !== isFocused) {
        const fn2 = function p() {
          closure_3.current = current;
        };
        cResult[2] = isFocused;
        cResult[3] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
      }
      const effect = obj2.useEffect(tmp6);
      if (cResult[4] === tmp5) {
        let tmp8;
        let tmp9;
        let tmp11;
        if (cResult[5] === isFocused) {
          tmp8 = cResult[6];
          tmp9 = cResult[7];
        }
        const effect1 = obj2.useEffect(tmp8, tmp9);
        if (cResult[8] !== tmp5) {
          const fn4 = function _() {
            return () => {
              current = ref.current;
              const tmp = !current.loading && current.data.length > 0;
              if (tmp) {
                const obj = closure_1(isFocused[14]);
                obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
              }
            };
          };
          cResult[8] = tmp5;
          cResult[9] = fn4;
          tmp11 = fn4;
        } else {
          tmp11 = cResult[9];
        }
        tmp4(tmp[15])(tmp11);
      }
      const fn3 = function v() {
        let tmp = !isFocused;
        if (tmp) {
          current = closure_3.current;
          tmp = !current.loading && current.data.length > 0;
          const tmp3 = !current.loading && current.data.length > 0;
        }
        if (tmp) {
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
        }
      };
      const items = [isFocused, tmp5];
      cResult[4] = tmp5;
      cResult[5] = isFocused;
      cResult[6] = fn3;
      cResult[7] = items;
      tmp9 = items;
      tmp8 = fn3;
    }
  : (isFocused, arg1) => {
      let closure_4;
      let current = isFocused;
      importDefault = arg1;
      isFocused = isFocused.isFocused;
      let closure_3 = react.useRef(isFocused);
      let tmp = require("useStableCallback")(() => {
        let data;
        const obj = {
          context: "messages",
          num_cards: closure_3.current.data.length,
          max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length),
          card_types: data.map((item) => closure_1_9[item.kind]),
        };
        data = closure_3.current.data;
        const obj2 = HappeningNowAnalytics;
        const merged = Object.assign(obj2.getAffinityProperties(closure_3.current.data));
        return obj;
      });
      react = tmp;
      const effect = react.useEffect(() => {
        closure_3.current = current;
      });
      const items = [isFocused, tmp];
      const effect1 = react.useEffect(() => {
        let tmp = !isFocused;
        if (tmp) {
          current = closure_3.current;
          tmp = !current.loading && current.data.length > 0;
          const tmp3 = !current.loading && current.data.length > 0;
        }
        if (tmp) {
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
        }
      }, items);
      require("useMountEffect")(() => () => {
        current = ref.current;
        const tmp = !current.loading && current.data.length > 0;
        if (tmp) {
          const obj = closure_1(isFocused[14]);
          obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
        }
      });
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (listRef) => {
        let arr;
        let loading;
        let tmp10;
        let tmp6;
        const tmp2 = dependencyMap;
        let obj = listRef(576);
        const cResult = obj.c(46);
        listRef = listRef.listRef;
        const cards = listRef.cards;
        const tmp4 = closure_13();
        const obj2 = listRef(1491);
        const isFocused = obj2.useIsFocused();
        if (cResult[0] !== isFocused) {
          const obj3 = {
            withoutUserCards: "IconComponent",
            guildId: "Array",
            showMultipleActivitiesPerChannel: "SET_SOUNDPACK",
            isFocused,
          };
          cResult[0] = isFocused;
          cResult[1] = obj3;
          tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        [arr, tmp10] = ref(isFocused(16024)(cards, tmp6), 2);
        dependencyMap = tmp10;
        ref(isFocused(16024)(cards, tmp6), 2);
        const tmp11 = isFocused(6664);
        const analyticsLocations = tmp11(isFocused(6688).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
        ref = react.useRef(0);
        const obj4 = react;
        if (cResult[2] === arr) {
          if (cResult[3] === isFocused) {
            let tmp13;
            if (cResult[4] === tmp10) {
              tmp13 = cResult[5];
            }
            closure_17(tmp13, ref);
            if (cResult[6] === isFocused) {
              let tmp16;
              let tmp17;
              if (cResult[7] === listRef) {
                tmp16 = cResult[8];
                tmp17 = cResult[9];
              }
              const effect = obj4.useEffect(tmp16, tmp17);
              const _Symbol = Symbol;
              class S {
                constructor() {
                  tmp = closure_1;
                  if (!tmp) {
                    tmp2 = listRef;
                    current = listRef.current;
                    tmp3 = null;
                    if (current != null) {
                      scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                    }
                    tmp5 = closure_3;
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
              const findIndexResult = arr.findIndex(V);
              react = findIndexResult;
              let num8 = Infinity;
              if (findIndexResult >= 0) {
                class V {
                  constructor(arg0) {
                    obj = listRef(closure_2[20]);
                    return obj.cardSize(listRef) === closure_1_8;
                  }
                }
                num8 = closure_7 * findIndexResult;
              }
              if (cResult[11] === findIndexResult) {
                class V {
                  constructor(arg0) {
                    obj = listRef(closure_2[20]);
                    return obj.cardSize(listRef) === closure_1_8;
                  }
                }
                const first = tmp8(tmp7(16032)(num8, D), 2)[0];
                ref(isFocused(16032)(num8, D), 2);
                class S {
                  constructor() {
                    tmp = closure_1;
                    if (!tmp) {
                      tmp2 = listRef;
                      current = listRef.current;
                      tmp3 = null;
                      if (current != null) {
                        scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                      }
                      tmp5 = closure_3;
                      num = 0;
                      closure_3.current = 0;
                    }
                    return;
                  }
                }
                if (cResult[14] !== arr) {
                  class V {
                    constructor(arg0) {
                      obj = listRef(closure_2[20]);
                      return obj.cardSize(listRef) === closure_1_8;
                    }
                  }
                  let result = obj6.filterHappeningNowCards(arr);
                  const tmpResult = listRef(16031);
                  const result1 = tmpResult.sortHappeningNowCards(result);
                  class S {
                    constructor() {
                      tmp = closure_1;
                      if (!tmp) {
                        tmp2 = listRef;
                        current = listRef.current;
                        tmp3 = null;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        tmp5 = closure_3;
                        num = 0;
                        closure_3.current = 0;
                      }
                      return;
                    }
                  }
                  cResult[14] = arr;
                  cResult[15] = result1;
                } else {
                  class V {
                    constructor(arg0) {
                      obj = listRef(closure_2[20]);
                      return obj.cardSize(listRef) === closure_1_8;
                    }
                  }
                }
                const tmpResult3 = listRef(16032);
                const happeningNowScrollSnapping = tmpResult3.useHappeningNowScrollSnapping(listRef);
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
                      tmp = closure_1;
                      if (!tmp) {
                        tmp2 = listRef;
                        current = listRef.current;
                        tmp3 = null;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        tmp5 = closure_3;
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
                const tmpResult4 = listRef(4618);
                const sharedValue = tmpResult4.useSharedValue([]);
                if (cResult[18] !== sharedValue) {
                  class X {
                    constructor(arg0) {
                      viewableItems = listRef.viewableItems;
                      obj = closure_0(closure_2[23]);
                      result = obj.updateSharedValueArrayIfChanged(
                        closure_6,
                        viewableItems.map(() => {
                          /* body not rendered: F145611 */
                        }),
                      );
                      return;
                    }
                  }
                  cResult[18] = sharedValue;
                  class S {
                    constructor() {
                      tmp = closure_1;
                      if (!tmp) {
                        tmp2 = listRef;
                        current = listRef.current;
                        tmp3 = null;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        tmp5 = closure_3;
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
                      result = obj.updateSharedValueArrayIfChanged(
                        closure_6,
                        viewableItems.map(() => {
                          /* body not rendered: F145611 */
                        }),
                      );
                      return;
                    }
                  }
                }
                class D {
                  constructor(arg0, arg1) {
                    sum = arg1 + listRef;
                    if (sum < closure_5) {
                      tmp6 = closure_7;
                      sum1 = (sum / closure_7) | 0;
                    } else {
                      tmp3 = closure_4;
                      tmp4 = closure_8;
                      sum1 = closure_4 + (((sum - tmp2) / closure_8) | 0);
                    }
                    if (sum1 > closure_3.current) {
                      closure_3.current = sum1;
                    }
                    return;
                  }
                }
                if (0 === arr.length) {
                  class X {
                    constructor(arg0) {
                      viewableItems = listRef.viewableItems;
                      obj = closure_0(closure_2[23]);
                      result = obj.updateSharedValueArrayIfChanged(
                        closure_6,
                        viewableItems.map(() => {
                          /* body not rendered: F145611 */
                        }),
                      );
                      return;
                    }
                  }
                }
                if (tmp10) {
                  class X {
                    constructor(arg0) {
                      viewableItems = listRef.viewableItems;
                      obj = closure_0(closure_2[23]);
                      result = obj.updateSharedValueArrayIfChanged(
                        closure_6,
                        viewableItems.map(() => {
                          /* body not rendered: F145611 */
                        }),
                      );
                      return;
                    }
                  }
                  const obj5 = { index: 0, loading: tmp10, fullwidth: true, panelVariant: true };
                  const tmp43 = renderCard(arr.length > 0 ? arr[0] : { kind: "placeholder", index: 0 }, obj5);
                  class S {
                    constructor() {
                      tmp = closure_1;
                      if (!tmp) {
                        tmp2 = listRef;
                        current = listRef.current;
                        tmp3 = null;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        tmp5 = closure_3;
                        num = 0;
                        closure_3.current = 0;
                      }
                      return;
                    }
                  }
                  cResult[23] = arr[0];
                  cResult[24] = arr.length;
                  cResult[25] = tmp10;
                  cResult[26] = tmp43;
                } else {
                  let tmp34;
                  class X {
                    constructor(arg0) {
                      viewableItems = listRef.viewableItems;
                      obj = closure_0(closure_2[23]);
                      result = obj.updateSharedValueArrayIfChanged(
                        closure_6,
                        viewableItems.map(() => {
                          /* body not rendered: F145611 */
                        }),
                      );
                      return;
                    }
                  }
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    class X {
                      constructor(arg0) {
                        viewableItems = listRef.viewableItems;
                        obj = closure_0(closure_2[23]);
                        result = obj.updateSharedValueArrayIfChanged(
                          closure_6,
                          viewableItems.map(() => {
                            /* body not rendered: F145611 */
                          }),
                        );
                        return;
                      }
                    }
                    const stringResult = obj10.string(listRef(1126).t["1+boPi"]);
                    class S {
                      constructor() {
                        tmp = closure_1;
                        if (!tmp) {
                          tmp2 = listRef;
                          current = listRef.current;
                          tmp3 = null;
                          if (current != null) {
                            scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                          }
                          tmp5 = closure_3;
                          num = 0;
                          closure_3.current = 0;
                        }
                        return;
                      }
                    }
                    tmp34 = stringResult;
                  } else {
                    class X {
                      constructor(arg0) {
                        viewableItems = listRef.viewableItems;
                        obj = closure_0(closure_2[23]);
                        result = obj.updateSharedValueArrayIfChanged(
                          closure_6,
                          viewableItems.map(() => {
                            /* body not rendered: F145611 */
                          }),
                        );
                        return;
                      }
                    }
                  }
                  if (cResult[31] === tmp33) {
                    class X {
                      constructor(arg0) {
                        viewableItems = listRef.viewableItems;
                        obj = closure_0(closure_2[23]);
                        result = obj.updateSharedValueArrayIfChanged(
                          closure_6,
                          viewableItems.map(() => {
                            /* body not rendered: F145611 */
                          }),
                        );
                        return;
                      }
                    }
                  }
                  class S {
                    constructor() {
                      tmp = closure_1;
                      if (!tmp) {
                        tmp2 = listRef;
                        current = listRef.current;
                        tmp3 = null;
                        if (current != null) {
                          scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                        }
                        tmp5 = closure_3;
                        num = 0;
                        closure_3.current = 0;
                      }
                      return;
                    }
                  }
                  class D {
                    constructor(arg0, arg1) {
                      sum = arg1 + listRef;
                      if (sum < closure_5) {
                        tmp6 = closure_7;
                        sum1 = (sum / closure_7) | 0;
                      } else {
                        tmp3 = closure_4;
                        tmp4 = closure_8;
                        sum1 = closure_4 + (((sum - tmp2) / closure_8) | 0);
                      }
                      if (sum1 > closure_3.current) {
                        closure_3.current = sum1;
                      }
                      return;
                    }
                  }
                  cResult[31] = tmp33;
                  cResult[32] = first;
                  cResult[33] = tmp26;
                  cResult[34] = listRef;
                  cResult[35] = happeningNowScrollSnapping;
                  cResult[36] = Y;
                  cResult[37] = tmp25;
                  cResult[38] = tmp4.containerInner;
                  cResult[39] = jsx(listRef(8404).FlashList, {
                    ref: listRef,
                    horizontal: true,
                    renderScrollComponent,
                    decelerationRate: "fast",
                    onScroll: first,
                    maintainVisibleContentPosition,
                    snapToInterval: tmp25,
                    snapToOffsets: null,
                    showsHorizontalScrollIndicator: false,
                    accessibilityLabel: tmp34,
                    contentContainerStyle: tmp4.containerInner,
                    data: tmp26,
                    renderItem: Y,
                    onViewableItemsChanged: tmp33,
                    keyExtractor,
                    getItemType,
                  });
                  const tmp41 = jsx(listRef(8404).FlashList, {
                    ref: listRef,
                    horizontal: true,
                    renderScrollComponent,
                    decelerationRate: "fast",
                    onScroll: first,
                    maintainVisibleContentPosition,
                    snapToInterval: tmp25,
                    snapToOffsets: null,
                    showsHorizontalScrollIndicator: false,
                    accessibilityLabel: tmp34,
                    contentContainerStyle: tmp4.containerInner,
                    data: tmp26,
                    renderItem: Y,
                    onViewableItemsChanged: tmp33,
                    keyExtractor,
                    getItemType,
                  });
                }
              }
              class D {
                constructor(arg0, arg1) {
                  sum = arg1 + listRef;
                  if (sum < closure_5) {
                    tmp6 = closure_7;
                    sum1 = (sum / closure_7) | 0;
                  } else {
                    tmp3 = closure_4;
                    tmp4 = closure_8;
                    sum1 = closure_4 + (((sum - tmp2) / closure_8) | 0);
                  }
                  if (sum1 > closure_3.current) {
                    closure_3.current = sum1;
                  }
                  return;
                }
              }
              cResult[11] = findIndexResult;
              cResult[12] = num8;
              cResult[13] = D;
            }
            class S {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
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
        const obj8 = { data: arr, isFocused, loading: tmp10 };
        cResult[2] = arr;
        cResult[3] = isFocused;
        cResult[4] = tmp10;
        cResult[5] = obj8;
        tmp13 = obj8;
      }
    : (listRef) => {
        let intl;
        let loading;
        let tmp18;
        let tmp28Result;
        listRef = listRef.listRef;
        let data;
        ref = undefined;
        let sharedValue;
        let callback2;
        const cards = listRef.cards;
        const tmp = closure_13();
        const tmp2 = listRef;
        let obj = listRef(data[16]);
        const isFocused = obj.useIsFocused();
        const tmp7 = ref(
          isFocused(data[17])(cards, {
            withoutUserCards: "IconComponent",
            guildId: "Array",
            showMultipleActivitiesPerChannel: "SET_SOUNDPACK",
            isFocused,
          }),
          2,
        );
        data = tmp7[0];
        const tmp6 = ref;
        ref = tmp8;
        let obj2 = ref;
        const tmp9 = isFocused(data[18]);
        const analyticsLocations = tmp9(isFocused(data[19]).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
        ref = ref.useRef(0);
        closure_17({ data, isFocused, loading: tmp7[1] }, ref);
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
        const findIndexResult = data.findIndex((item) => {
          const obj = listRef(first[20]);
          return obj.cardSize(item) === callback2;
        });
        let c5 = findIndexResult;
        let num = Infinity;
        const tmp5 = isFocused;
        if (findIndexResult >= 0) {
          num = sharedValue * findIndexResult;
        }
        const items1 = [findIndexResult, num];
        const callback = obj2.useCallback((arg0, arg1) => {
          let sum1;
          const sum = arg1 + arg0;
          if (sum < num) {
            sum1 = (sum / metroImportDefault) | 0;
          } else {
            sum1 = c5 + (((sum - tmp2) / metroImportAll) | 0);
          }
          if (sum1 > ref.current) {
            ref.current = sum1;
          }
        }, items1);
        const tmp6Result = tmp6(tmp5(data[21])(num, callback), 2);
        const first1 = tmp6Result[0];
        if (tmp6Result[1]) {
          tmp18 = sharedValue;
        }
        const items2 = [data];
        const memo = obj2.useMemo(() => {
          const obj = happeningNowRankingUtils;
          const result = obj.filterHappeningNowCards(first);
          const obj2 = happeningNowRankingUtils;
          return obj2.sortHappeningNowCards(result);
        }, items2);
        const items3 = [tmp7[1]];
        const tmp2Result = tmp2(data[21]);
        const happeningNowScrollSnapping = tmp2Result.useHappeningNowScrollSnapping(listRef);
        const callback1 = obj2.useCallback((index) => {
          const obj = { index: index.index, loading, panelVariant: true };
          return renderCard(index.item, obj);
        }, items3);
        const tmp2Result2 = tmp2(data[22]);
        sharedValue = tmp2Result2.useSharedValue([]);
        const items4 = [sharedValue];
        callback2 = obj2.useCallback((viewableItems) => {
          viewableItems = viewableItems.viewableItems;
          const obj = updateSharedValueIfChanged;
          const result = obj.updateSharedValueArrayIfChanged(
            sharedValue,
            viewableItems.map((item) => closure_1_19(item.item)),
          );
        }, items4);
        const items5 = [callback2];
        const memo1 = obj2.useMemo(() => {
          const obj = _mod12;
          return obj.debounce(callback2, 130);
        }, items5);
        if (0 === data.length) {
          let tmp27;
          if (!tmp7[1]) {
            tmp27 = <num />;
          }
          return tmp27;
        }
        if (tmp7[1]) {
          const obj4 = { index: 0, loading: tmp7[1], fullwidth: true, panelVariant: true };
          tmp28Result = (
            <num style={tmp.loading}>
              {renderCard(data.length > 0 ? data[0] : { kind: "placeholder", index: 0 }, obj4)}
            </num>
          );
        } else {
          const Provider = context.Provider;
          const AnalyticsLocationProvider = tmp2(tmp3[18]).AnalyticsLocationProvider;
          ({
            ref: listRef,
            horizontal: true,
            renderScrollComponent,
            decelerationRate: "fast",
            onScroll: first1,
            maintainVisibleContentPosition,
            snapToInterval: tmp18,
            snapToOffsets: happeningNowScrollSnapping,
            showsHorizontalScrollIndicator: false,
            accessibilityLabel: intl.string(tmp2(data[25]).t["1+boPi"]),
            contentContainerStyle: tmp.containerInner,
            data: memo,
            renderItem: callback1,
            onViewableItemsChanged: memo1,
            keyExtractor,
            getItemType,
          });
          const FlashList = tmp2(tmp3[26]).FlashList;
          intl = tmp2(tmp3[25]).intl;
          tmp28Result = <Provider value={sharedValue}>{null}</Provider>;
        }
        tmp27 = tmp28Result;
      },
);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;
