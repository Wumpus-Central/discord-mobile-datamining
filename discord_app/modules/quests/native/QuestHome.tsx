// discord_app/modules/quests/native/QuestHome.tsx
import c from "../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "../utils/QuestDataUtils.tsx";
import hooks_QuestHooks from "../hooks/QuestHooks.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import QuestContentImpressionTracker from "QuestContentImpressionTracker.native.tsx";
import BountiesModalActionCreatorsDefault from "BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "BountiesModal/BountiesModalTypes.tsx";
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState.tsx";
import QuestHomeBountiesDefault from "QuestHomeBounties.tsx";
import HexagonCampaignQuestHomeHeaderDefault from "../../hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx";
import OrbsArcadeQuestHomeSectionDefault from "../../orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx";
import QuestHomeOpenTriggerPoint2 from "../../experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx";
import QuestHomeRoundtripTrackerDefault from "../QuestHomeRoundtripTracker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import QuestHomeNavigationStore from "../QuestHomeNavigationStore.tsx";
import QuestStore from "../QuestStore.tsx";
import QuestUtmStore from "../QuestUtmStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(6710).QuestsExperimentLocations;
const Constants = fn(1087);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4971);
let obj = {
  container: { flex: 1 },
  loadingContainer: null,
  sectionHeader: null,
  previewButton: null,
  sectionHeaderWithTag: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj.loadingContainer = obj3;
obj.sectionHeader = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.previewButton = {
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: "transparent",
};
let obj5 = {
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: "transparent",
};
obj.sectionHeaderWithTag = { gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const shopCarouselConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScrollAndLayoutCallbacks(scrollToIndex) {
      const cResult = scrollToIndex(ref[13]).c(21);
      scrollToIndex = scrollToIndex.scrollToIndex;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [R];
        const fn = function l() {
          return R.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = scrollToIndex(ref[13]);
      const stateFromStores = scrollToIndex(ref[14]).useStateFromStores(tmp4, tmp5);
      ref = noop.useRef(null);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { parent: { scrollY: 0 }, children: {} };
        cResult[2] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = scrollToIndex(ref[14]);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(arg0) {
          const keys = Object.keys(ref1.current.children);
          const iter = keys[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let tmp4 = null != arg0;
            if (tmp4) {
              tmp4 = tmp3 !== arg0;
            }
            if (!tmp4) {
              let tmp8 = ref1.current.children[tmp3];
              if (tmp8 != null) {
                let calculateVisibility = tmp8.calculateVisibility;
                if (calculateVisibility != null) {
                  let calculateVisibilityResult = calculateVisibility();
                }
              }
            }
            continue;
          }
        };
        cResult[3] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[3];
      }
      noop = tmp11;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function v(nativeEvent) {
          ref1.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
          closure_4();
        };
        cResult[4] = fn3;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function y(nativeEvent) {
          ref1.current.parent.layout = nativeEvent.nativeEvent.layout;
          closure_4();
        };
        cResult[5] = fn4;
      }
      const tmp14 = noop.useRef(tmp9)(noop.useState(false), 2);
      const first = tmp14[0];
      closure_6 = tmp14[1];
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp = closure_6(true);
            return;
          }
        }
        cResult[6] = L;
      } else {
        class L {
          constructor() {
            tmp = closure_6(true);
            return;
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0, arg1) {
            obj = {};
            merged = Object.assign(closure_3.current.children[arg1]);
            obj.layout = scrollToIndex.nativeEvent.layout;
            closure_3.current.children[arg1] = obj;
            tmp2 = closure_4(arg1);
            return;
          }
        }
        cResult[7] = B;
      } else {
        class B {
          constructor(arg0, arg1) {
            obj = {};
            merged = Object.assign(closure_3.current.children[arg1]);
            obj.layout = scrollToIndex.nativeEvent.layout;
            closure_3.current.children[arg1] = obj;
            tmp2 = closure_4(arg1);
            return;
          }
        }
      }
      if (cResult[8] !== stateFromStores) {
        class R {
          constructor(arg0) {
            if (null != closure_2.current) {
              tmp2 = scrollToIndex;
              current = tmp.current;
              obj = { index: null, animated: null, viewOffset: null };
              obj.index = scrollToIndex;
              tmp3 = closure_1;
              obj.animated = !closure_1;
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj.viewOffset = -closure_1(closure_2[11]).space.PX_8;
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return;
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = R;
      } else {
        class R {
          constructor(arg0) {
            if (null != closure_2.current) {
              tmp2 = scrollToIndex;
              current = tmp.current;
              obj = { index: null, animated: null, viewOffset: null };
              obj.index = scrollToIndex;
              tmp3 = closure_1;
              obj.animated = !closure_1;
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj.viewOffset = -closure_1(closure_2[11]).space.PX_8;
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return;
          }
        }
      }
      R = tmp18;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            if (null != closure_2.current) {
              tmp2 = scrollToIndex;
              current = tmp.current;
              obj = { index: null, animated: null, viewOffset: null };
              obj.index = scrollToIndex;
              tmp3 = closure_1;
              obj.animated = !closure_1;
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj.viewOffset = -closure_1(closure_2[11]).space.PX_8;
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return;
          }
        }
        cResult[10] = tmp20;
      } else {
        class R {
          constructor(arg0) {
            if (null != closure_2.current) {
              tmp2 = scrollToIndex;
              current = tmp.current;
              obj = { index: null, animated: null, viewOffset: null };
              obj.index = scrollToIndex;
              tmp3 = closure_1;
              obj.animated = !closure_1;
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj.viewOffset = -closure_1(closure_2[11]).space.PX_8;
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return;
          }
        }
      }
      if (cResult[11] === first) {
        class R {
          constructor(arg0) {
            if (null != closure_2.current) {
              tmp2 = scrollToIndex;
              current = tmp.current;
              obj = { index: null, animated: null, viewOffset: null };
              obj.index = scrollToIndex;
              tmp3 = closure_1;
              obj.animated = !closure_1;
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj.viewOffset = -closure_1(closure_2[11]).space.PX_8;
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return;
          }
        }
      }
      const fn5 = function x() {
        let tmp2 = null != scrollToIndex;
        if (tmp2) {
          tmp2 = -1 !== scrollToIndex;
        }
        if (tmp2) {
          tmp2 = first;
        }
        if (tmp2) {
          R(scrollToIndex);
          QuestHomeNavigationStore.setState({ scrollToQuestId: null });
        }
      };
      cResult[11] = first;
      cResult[12] = tmp18;
      cResult[13] = scrollToIndex;
      cResult[14] = fn5;
      const ref1 = noop.useRef(tmp9);
    }
  : function useScrollAndLayoutCallbacks(scrollToIndex) {
      scrollToIndex = scrollToIndex.scrollToIndex;
      let scrollViewRef;
      let callback;
      let callback5;
      const items = [callback5];
      const stateFromStores = scrollToIndex(scrollViewRef[14]).useStateFromStores(
        items,
        () => callback5.useReducedMotion,
      );
      scrollViewRef = callback.useRef(null);
      const visibilityRef = callback.useRef({ parent: { scrollY: 0 }, children: {} });
      callback = callback.useCallback((arg0) => {
        const keys = Object.keys(visibilityRef.current.children);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp4 = null != arg0;
          if (tmp4) {
            tmp4 = tmp3 !== arg0;
          }
          if (!tmp4) {
            let tmp8 = visibilityRef.current.children[tmp3];
            if (tmp8 != null) {
              let calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                let calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
      }, []);
      const items1 = [callback];
      const items2 = [callback];
      const handleListScroll = callback.useCallback((nativeEvent) => {
        visibilityRef.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
        callback();
      }, items1);
      const handleListLayout = callback.useCallback((nativeEvent) => {
        visibilityRef.current.parent.layout = nativeEvent.nativeEvent.layout;
        callback();
      }, items2);
      let tmp7 = visibilityRef(callback.useState(false), 2);
      const first = tmp7[0];
      closure_6 = tmp7[1];
      const items3 = [callback];
      const handleListLoad = callback.useCallback(() => {
        closure_6(true);
      }, []);
      const items4 = [stateFromStores];
      const handleQuestCardLayout = callback.useCallback((nativeEvent, arg1) => {
        const obj = {};
        const merged = Object.assign(visibilityRef.current.children[arg1]);
        obj.layout = nativeEvent.nativeEvent.layout;
        visibilityRef.current.children[arg1] = obj;
        callback(arg1);
      }, items3);
      callback5 = callback.useCallback((index) => {
        if (null != scrollViewRef.current) {
          const current = tmp.current;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          current.scrollToIndex(obj);
        }
      }, items4);
      const items5 = [callback];
      const items6 = [first, stateFromStores, scrollToIndex, callback5];
      const handleHeaderLayout = callback.useCallback((nativeEvent) => {
        visibilityRef.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
        callback();
      }, items5);
      const effect = callback.useEffect(() => {
        let tmp2 = null != scrollToIndex;
        if (tmp2) {
          tmp2 = -1 !== scrollToIndex;
        }
        if (tmp2) {
          tmp2 = first;
        }
        if (tmp2) {
          callback5(scrollToIndex);
          QuestHomeNavigationStore.setState({ scrollToQuestId: null });
        }
      }, items6);
      return {
        scrollViewRef,
        handleListScroll,
        handleListLayout,
        handleListLoad,
        handleQuestCardLayout,
        handleHeaderLayout,
        visibilityRef,
      };
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSurveyActions(bountiesAvailable) {
      const cResult = bountiesAvailable(576).c(10);
      bountiesAvailable = bountiesAvailable.bountiesAvailable;
      let obj = bountiesAvailable(576);
      const navigation = bountiesAvailable(1505).useNavigation();
      dependencyMap = noop.useRef(false);
      closure_3 = noop.useRef(false);
      noop = noop.useRef(false);
      if (cResult[0] !== bountiesAvailable) {
        const fn = function o() {
          if (bountiesAvailable) {
            closure_2.current = true;
          }
        };
        const items = [bountiesAvailable];
        cResult[0] = bountiesAvailable;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = obj3.useEffect(tmp3, tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          function handleBountiesModalPush(key) {
            if (key.key === bountiesAvailable(closure_2[16]).BOUNTIES_MODAL_KEY) {
              closure_1_3.current = true;
            }
          }
          const subscription = navigation(584).subscribe("MODAL_PUSH", handleBountiesModalPush);
          return () => {
            DispatcherDefault.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
          };
        };
        const items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp7 = items1;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect1 = obj3.useEffect(tmp6, tmp7);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function c() {
          function handleClaimSuccess() {
            closure_1_4.current = true;
          }
          const subscription = navigation(584).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
          return () => {
            DispatcherDefault.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
          };
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp10 = items2;
        let tmp9 = fn3;
      } else {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const effect2 = obj3.useEffect(tmp9, tmp10);
      if (cResult[7] !== navigation) {
        const fn4 = function f() {
          return navigation.addListener("beforeRemove", () => {
            if (ref.current) {
              if (ref3.current) {
                bountiesAvailable(ref[18]).fireSurveyAction(
                  bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED,
                );
                const obj = bountiesAvailable(ref[18]);
              } else {
                const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
                const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
                if (ref2.current) {
                  fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
                } else {
                  fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
                }
                const tmp5 = bountiesAvailable(ref[18]);
              }
            }
          });
        };
        const items3 = [navigation];
        cResult[7] = navigation;
        cResult[8] = fn4;
        cResult[9] = items3;
        let tmp13 = items3;
        let tmp12 = fn4;
      } else {
        tmp12 = cResult[8];
        tmp13 = cResult[9];
      }
      const effect3 = obj3.useEffect(tmp12, tmp13);
    }
  : function useSurveyActions(bountiesAvailable) {
      bountiesAvailable = bountiesAvailable.bountiesAvailable;
      noop = undefined;
      const navigation = bountiesAvailable(1505).useNavigation();
      dependencyMap = noop.useRef(false);
      closure_3 = noop.useRef(false);
      noop = noop.useRef(false);
      const items = [bountiesAvailable];
      const effect = noop.useEffect(() => {
        if (bountiesAvailable) {
          closure_2.current = true;
        }
      }, items);
      const effect1 = noop.useEffect(() => {
        function handleBountiesModalPush(key) {
          if (key.key === bountiesAvailable(closure_2[16]).BOUNTIES_MODAL_KEY) {
            closure_1_3.current = true;
          }
        }
        const subscription = navigation(584).subscribe("MODAL_PUSH", handleBountiesModalPush);
        return () => {
          DispatcherDefault.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
        };
      }, []);
      const effect2 = noop.useEffect(() => {
        function handleClaimSuccess() {
          closure_1_4.current = true;
        }
        const subscription = navigation(584).subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
        return () => {
          DispatcherDefault.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
        };
      }, []);
      const items1 = [navigation];
      const effect3 = noop.useEffect(
        () =>
          navigation.addListener("beforeRemove", () => {
            if (ref.current) {
              if (ref3.current) {
                bountiesAvailable(ref[18]).fireSurveyAction(
                  bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED,
                );
                const obj = bountiesAvailable(ref[18]);
              } else {
                const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
                const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
                if (ref2.current) {
                  fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
                } else {
                  fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
                }
                const tmp5 = bountiesAvailable(ref[18]);
              }
            }
          }),
        items1,
      );
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyStateNoQuestsAvailable(hasContentAbove) {
      const cResult = c.c(8);
      hasContentAbove = hasContentAbove.hasContentAbove;
      const navigation = useNavigation.useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function n() {
          return navigation.goBack();
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["/g10LC"]);
        cResult[2] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const obj3 = { variant: "secondary", text: tmp6, onPress: tmp5 };
        const tmp10 = closure_1_14(components_Button_Button.Button, obj3);
        cResult[3] = tmp5;
        cResult[4] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === hasContentAbove) {
        if (cResult[6] === tmp8) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      const tmp12 = closure_1_14(QuestHomeEmptyStateDefault, { hasContentAbove, action: tmp8 });
      cResult[5] = hasContentAbove;
      cResult[6] = tmp8;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : function EmptyStateNoQuestsAvailable(hasContentAbove) {
      const navigation = useNavigation.useNavigation();
      const items = [navigation];
      const callback = noop.useCallback(() => navigation.goBack(), items);
      const obj2 = { hasContentAbove: hasContentAbove.hasContentAbove, action: null };
      const obj3 = { variant: "secondary", text: null, onPress: null };
      const intl = util.intl;
      obj3.text = intl.string(util.t["/g10LC"]);
      obj3.onPress = callback;
      obj2.action = closure_1_14(components_Button_Button.Button, obj3);
      return closure_1_14(QuestHomeEmptyStateDefault, obj2);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyStateFiltered(arg0) {
      const cResult = c.c(8);
      ({ onClearFilters, hasContentAbove } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.urZl31);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClearFilters) {
        const obj2 = { variant: "secondary", text: first, onPress: onClearFilters };
        const tmp8 = closure_1_14(components_Button_Button.Button, obj2);
        cResult[1] = onClearFilters;
        cResult[2] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.PBfFnx);
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.nwdKFC);
        cResult[3] = stringResult1;
        cResult[4] = stringResult2;
        let tmp10 = stringResult2;
        let tmp9 = stringResult1;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      if (cResult[5] === hasContentAbove) {
        if (cResult[6] === tmp6) {
          let tmp13 = cResult[7];
        }
        return tmp13;
      }
      const tmp14 = closure_1_14(QuestHomeEmptyStateDefault, {
        hasContentAbove,
        action: tmp6,
        title: tmp9,
        subtitle: tmp10,
      });
      cResult[5] = hasContentAbove;
      cResult[6] = tmp6;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : function EmptyStateFiltered(arg0) {
      ({ onClearFilters, hasContentAbove } = arg0);
      const obj = { hasContentAbove, action: null, title: null, subtitle: null };
      const obj2 = { variant: "secondary", text: null, onPress: null };
      const intl = util.intl;
      obj2.text = intl.string(util.t.urZl31);
      obj2.onPress = onClearFilters;
      obj.action = closure_1_14(components_Button_Button.Button, obj2);
      const intl2 = util.intl;
      obj.title = intl2.string(util.t.PBfFnx);
      const intl3 = util.intl;
      obj.subtitle = intl3.string(util.t.nwdKFC);
      return closure_1_14(QuestHomeEmptyStateDefault, obj);
    };
ReactCompilerGating = fn(558);
const shouldShowOrbsArcade = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderPreviewButton() {
      const cResult = c.c(4);
      let previewButton = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          ModalActionCreatorsDefault.popAll();
          require("openUserSettings").openUserSettings({ screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (!tmpResult.useShouldShowPreviewToolTab()) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { grow: true, onPress: first, variant: "primary", text: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t.tx5Ax5);
          const tmp7 = closure_1_14(components_Button_Button.Button, obj2);
          cResult[1] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== previewButton.previewButton) {
          const obj3 = { style: previewButton.previewButton, children: tmp5 };
          const tmp11 = closure_1_14(hasOwnProperty, obj3);
          previewButton = previewButton.previewButton;
          cResult[2] = previewButton;
          cResult[3] = tmp11;
        }
      }
      tmpResult = hooks_QuestHooks;
    }
  : function HeaderPreviewButton() {
      const callback = noop.useCallback(() => {
        ModalActionCreatorsDefault.popAll();
        require("openUserSettings").openUserSettings({ screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 });
      }, []);
      const tmp = closure_16();
      let tmp5 = null;
      if (obj.useShouldShowPreviewToolTab()) {
        const obj2 = { style: tmp.previewButton, children: null };
        const obj3 = { grow: true, onPress: callback, variant: "primary", text: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t.tx5Ax5);
        obj2.children = closure_1_14(components_Button_Button.Button, obj3);
        tmp5 = closure_1_14(hasOwnProperty, obj2);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderWithBounties(arg0) {
      const cResult = c.c(5);
      ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
      if (cResult[0] === obtainableOrbRewards) {
        if (cResult[1] === orbShopProducts) {
          if (cResult[2] === shopCarouselConfig) {
            if (cResult[3] === showOrbShopPlaceholderCarousel) {
              let tmp3 = cResult[4];
            }
            return tmp3;
          }
        }
      }
      const tmp4 = closure_1_14(QuestHomeBountiesDefault, {
        shopCarouselConfig,
        orbShopProducts,
        obtainableOrbRewards,
        showOrbShopPlaceholderCarousel,
      });
      cResult[0] = obtainableOrbRewards;
      cResult[1] = orbShopProducts;
      cResult[2] = shopCarouselConfig;
      cResult[3] = showOrbShopPlaceholderCarousel;
      cResult[4] = tmp4;
      tmp3 = tmp4;
    }
  : function HeaderWithBounties(arg0) {
      ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
      return closure_1_14(QuestHomeBountiesDefault, {
        shopCarouselConfig,
        orbShopProducts,
        obtainableOrbRewards,
        showOrbShopPlaceholderCarousel,
      });
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestsSectionHeader() {
      const cResult = c.c(6);
      const tmp4 = closure_16();
      if (cResult[0] === tmp4.sectionHeader) {
        if (cResult[1] === tmp4.sectionHeaderWithTag) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-lg/semibold", color: "text-strong", children: null };
          const intl = util.intl;
          obj2.children = intl.string(util.t.JALI2K);
          const tmp9 = closure_1_14(Text_Text.Text, obj2);
          cResult[3] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          const obj3 = { style: tmp5, children: tmp7 };
          const tmp13 = closure_1_14(hasOwnProperty, obj3);
          cResult[4] = tmp5;
          cResult[5] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const items = [,];
      ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = tmp4);
      cResult[0] = tmp4.sectionHeader;
      cResult[1] = tmp4.sectionHeaderWithTag;
      cResult[2] = items;
      tmp5 = items;
    }
  : function QuestsSectionHeader() {
      const obj = { style: null, children: null };
      const items = [,];
      ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = closure_16());
      obj.style = items;
      const obj2 = { variant: "text-lg/semibold", color: "text-strong", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.JALI2K);
      obj.children = closure_1_14(Text_Text.Text, obj2);
      return closure_1_14(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MeasuredHeader(arg0) {
        const cResult = c.c(15);
        ({
          shouldShowBounties,
          shouldShowOrbsArcade,
          onLayout,
          orbShopProducts,
          obtainableOrbRewards,
          showOrbShopPlaceholderCarousel,
          shopCarouselConfig,
        } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = closure_1_14(closure_21, {});
          const tmp9 = closure_1_14(HexagonCampaignQuestHomeHeaderDefault, {});
          cResult[0] = tmp7;
          cResult[1] = tmp9;
          tmp3 = tmp7;
          tmp4 = tmp9;
        } else {
          [tmp3, tmp4] = cResult;
        }
        if (cResult[2] === obtainableOrbRewards) {
          if (cResult[3] === orbShopProducts) {
            if (cResult[4] === shopCarouselConfig) {
              if (cResult[5] === shouldShowBounties) {
                if (cResult[6] === showOrbShopPlaceholderCarousel) {
                  let tmp10 = cResult[7];
                }
                if (cResult[8] !== shouldShowOrbsArcade) {
                  let tmp15 = null;
                  if (shouldShowOrbsArcade) {
                    const obj2 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
                    tmp15 = closure_1_14(OrbsArcadeQuestHomeSectionDefault, obj2);
                  }
                  cResult[8] = shouldShowOrbsArcade;
                  cResult[9] = tmp15;
                  let tmp14 = tmp15;
                } else {
                  tmp14 = cResult[9];
                }
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = closure_1_14(closure_23, {});
                  cResult[10] = tmp22;
                  let tmp19 = tmp22;
                } else {
                  tmp19 = cResult[10];
                }
                if (cResult[11] === onLayout) {
                  if (cResult[12] === tmp10) {
                    if (cResult[13] === tmp14) {
                      let tmp23 = cResult[14];
                    }
                    return tmp23;
                  }
                }
                const obj3 = { onLayout, children: null };
                const items = [tmp3, tmp4, tmp10, tmp14, tmp19];
                obj3.children = items;
                const tmp26 = value2(hasOwnProperty, obj3);
                cResult[11] = onLayout;
                cResult[12] = tmp10;
                cResult[13] = tmp14;
                cResult[14] = tmp26;
                tmp23 = tmp26;
              }
            }
          }
        }
        let tmp11 = null;
        if (shouldShowBounties) {
          const obj4 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
          tmp11 = closure_1_14(closure_22, obj4);
        }
        cResult[2] = obtainableOrbRewards;
        cResult[3] = orbShopProducts;
        cResult[4] = shopCarouselConfig;
        cResult[5] = shouldShowBounties;
        cResult[6] = showOrbShopPlaceholderCarousel;
        cResult[7] = tmp11;
        tmp10 = tmp11;
      }
    : function MeasuredHeader(onLayout) {
        const obj = { onLayout: onLayout.onLayout, children: null };
        ({
          shouldShowBounties,
          shouldShowOrbsArcade,
          orbShopProducts,
          obtainableOrbRewards,
          showOrbShopPlaceholderCarousel,
          shopCarouselConfig,
        } = onLayout);
        const items = [closure_1_14(closure_21, {}), closure_1_14(HexagonCampaignQuestHomeHeaderDefault, {}), , ,];
        let tmp3Result = null;
        if (shouldShowBounties) {
          const obj2 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
          tmp3Result = closure_1_14(closure_22, obj2);
        }
        items[2] = tmp3Result;
        let tmp3Result2 = null;
        if (shouldShowOrbsArcade) {
          const obj3 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
          tmp3Result2 = closure_1_14(OrbsArcadeQuestHomeSectionDefault, obj3);
        }
        items[3] = tmp3Result2;
        items[4] = closure_1_14(closure_23, {});
        obj.children = items;
        return value2(hasOwnProperty, obj);
      },
);
ReactCompilerGating = fn(558);
let obj6 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestHome(arg0) {
        const cResult = scrollToQuestId(quests[13]).c(125);
        ({ containerStyle, isNavigationComplete, scrollToQuestId } = arg0);
        ({ filters, sortMethod, onClearFilters } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const isEligibleForQuests = scrollToQuestId(tmp2[30]).getIsEligibleForQuests();
          cResult[0] = isEligibleForQuests;
          let first = isEligibleForQuests;
          const tmpResult = scrollToQuestId(tmp2[30]);
        } else {
          first = cResult[0];
        }
        closure_16();
        const bottom = first(tmp2[31])().bottom;
        if (cResult[1] === filters) {
          if (cResult[2] === sortMethod) {
            let obj15 = cResult[3];
          }
          const filteredQuests = scrollToQuestId(tmp2[25]).useFilteredQuests(
            scrollToQuestId(tmp2[25]).QuestTabs.ALL,
            obj15,
          );
          quests = filteredQuests.quests;
          const excludedQuests = filteredQuests.excludedQuests;
          const isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
          const hasFetched = filteredQuests.hasFetched;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [scrollViewRef];
            class U {
              constructor() {
                quests = scrollViewRef.quests;
                arr = Array.from(quests.values());
                found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                mapped = found.map((id) => id.id);
                return mapped.sort();
              }
            }
            const items1 = [];
            cResult[4] = items;
            cResult[5] = U;
            cResult[6] = items1;
            let tmp11 = items1;
            let tmp10 = U;
            let tmp9 = items;
          } else {
            tmp9 = cResult[4];
            tmp10 = cResult[5];
            tmp11 = cResult[6];
          }
          const tmpResult10 = scrollToQuestId(tmp2[25]);
          const stateFromStoresArray = scrollToQuestId(tmp2[14]).useStateFromStoresArray(tmp9, tmp10, tmp11);
          if (cResult[7] !== stateFromStoresArray) {
            const fn = function q() {
              if (stateFromStoresArray.length > 0) {
                QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
              }
            };
            const items2 = [stateFromStoresArray];
            class U {
              constructor() {
                quests = scrollViewRef.quests;
                arr = Array.from(quests.values());
                found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                mapped = found.map((id) => id.id);
                return mapped.sort();
              }
            }
            cResult[7] = stateFromStoresArray;
            cResult[8] = fn;
            cResult[9] = items2;
            let tmp15 = items2;
            let tmp14 = fn;
          } else {
            tmp14 = cResult[8];
            tmp15 = cResult[9];
          }
          const effect = isFetchingCurrentQuests.useEffect(tmp14, tmp15);
          isFetchingCurrentQuests.useRef(null);
          let tmp18 = null;
          if (null != scrollToQuestId) {
            if (cResult[10] === excludedQuests) {
              if (cResult[11] === quests) {
                if (cResult[12] === scrollToQuestId) {
                  let tmp19 = cResult[13];
                }
                const id = tmp19;
                tmp18 = null;
                class U {
                  constructor() {
                    quests = scrollViewRef.quests;
                    arr = Array.from(quests.values());
                    found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                    mapped = found.map((id) => id.id);
                    return mapped.sort();
                  }
                }
              }
            }
            const result = scrollToQuestId(tmp2[35]).findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
            class U {
              constructor() {
                quests = scrollViewRef.quests;
                arr = Array.from(quests.values());
                found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                mapped = found.map((id) => id.id);
                return mapped.sort();
              }
            }
            cResult[10] = excludedQuests;
            cResult[11] = quests;
            cResult[12] = scrollToQuestId;
            cResult[13] = result;
            tmp19 = result;
            const tmpResult12 = scrollToQuestId(tmp2[35]);
          }
          if (cResult[19] === excludedQuests) {
            if (cResult[20] === hasFetched) {
              if (cResult[21] === isFetchingCurrentQuests) {
                if (cResult[22] === quests) {
                  if (cResult[23] === scrollToQuestId) {
                    let tmp21 = cResult[24];
                    let tmp22 = cResult[25];
                  }
                  const effect1 = obj6.useEffect(tmp22, tmp21);
                  if (cResult[26] !== tmp18) {
                    let obj2 = { scrollToIndex: tmp18 };
                    class U {
                      constructor() {
                        quests = scrollViewRef.quests;
                        arr = Array.from(quests.values());
                        found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                        mapped = found.map((id) => id.id);
                        return mapped.sort();
                      }
                    }
                    cResult[27] = obj2;
                    let tmp24 = obj2;
                  } else {
                    tmp24 = cResult[27];
                  }
                  class U {
                    constructor() {
                      quests = scrollViewRef.quests;
                      arr = Array.from(quests.values());
                      found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                      mapped = found.map((id) => id.id);
                      return mapped.sort();
                    }
                  }
                  const tmp25 = config(tmp24);
                  scrollViewRef = tmp25.scrollViewRef;
                  ({ handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout } = tmp25);
                  const handleHeaderLayout = tmp25.handleHeaderLayout;
                  const visibilityRef = tmp25.visibilityRef;
                  const _Symbol2 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    function re(getUtmCurrentContext) {
                      return getUtmCurrentContext.getUtmCurrentContext();
                    }
                    cResult[28] = re;
                    class U {
                      constructor() {
                        quests = scrollViewRef.quests;
                        arr = Array.from(quests.values());
                        found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                        mapped = found.map((id) => id.id);
                        return mapped.sort();
                      }
                    }
                  } else {
                    const tmp26 = cResult[28];
                  }
                  const tmp28 = handleQuestCardLayout(tmp26);
                  if (cResult[29] === tmp28.utmCampaignCurrent) {
                    if (cResult[30] === tmp28.utmContentCurrent) {
                      if (cResult[31] === tmp28.utmMediumCurrent) {
                        if (cResult[32] === tmp28.utmSourceCurrent) {
                          let tmp29 = cResult[33];
                        }
                        tmp7(tmp2[39])(tmp29);
                        const _Symbol3 = Symbol;
                        class U {
                          constructor() {
                            quests = scrollViewRef.quests;
                            arr = Array.from(quests.values());
                            found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                            mapped = found.map((id) => id.id);
                            return mapped.sort();
                          }
                        }
                        if (tmp31 === Symbol.for("react.memo_cache_sentinel")) {
                          function he() {
                            if (first) {
                              const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
                              QuestHomeOpenTriggerPoint.trigger();
                            }
                          }
                          const items3 = [first];
                          class U {
                            constructor() {
                              quests = scrollViewRef.quests;
                              arr = Array.from(quests.values());
                              found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                              mapped = found.map((id) => id.id);
                              return mapped.sort();
                            }
                          }
                          cResult[34] = he;
                          cResult[35] = items3;
                          let tmp33 = items3;
                          let tmp32 = he;
                        } else {
                          tmp32 = cResult[34];
                          tmp33 = cResult[35];
                        }
                        const effect2 = obj6.useEffect(tmp32, tmp33);
                        if (cResult[36] === hasFetched) {
                          if (cResult[37] === scrollViewRef) {
                            let tmp35 = cResult[38];
                          }
                          if (cResult[39] === filters) {
                            if (cResult[40] === hasFetched) {
                              if (cResult[41] === scrollViewRef) {
                                if (cResult[42] === sortMethod) {
                                  let tmp36 = cResult[43];
                                }
                                const effect3 = obj6.useEffect(tmp35, tmp36);
                                if (cResult[44] === filters) {
                                  if (cResult[45] === quests.length) {
                                    if (cResult[46] === sortMethod) {
                                      let tmp38 = cResult[47];
                                    }
                                    const questHomeSortingFilteringAnalytics = scrollToQuestId(
                                      tmp2[25],
                                    ).useQuestHomeSortingFilteringAnalytics(tmp38);
                                    class U {
                                      constructor() {
                                        quests = scrollViewRef.quests;
                                        arr = Array.from(quests.values());
                                        found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                                        mapped = found.map((id) => id.id);
                                        return mapped.sort();
                                      }
                                    }
                                    const enabled = obj12.useVirtualCurrencyMobileEnabled().enabled;
                                    const _Symbol4 = Symbol;
                                    if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                                      let obj3 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                      class U {
                                        constructor() {
                                          quests = scrollViewRef.quests;
                                          arr = Array.from(quests.values());
                                          found = arr.filter(
                                            (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                          );
                                          mapped = found.map((id) => id.id);
                                          return mapped.sort();
                                        }
                                      }
                                      cResult[48] = obj3;
                                      let tmp41 = obj3;
                                    } else {
                                      tmp41 = cResult[48];
                                    }
                                    const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(
                                      tmp2[42],
                                    ).QuestHomeBountiesFeatureGateExperiment;
                                    const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(tmp41).enabled;
                                    const _Symbol5 = Symbol;
                                    if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                      let obj4 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                      class U {
                                        constructor() {
                                          quests = scrollViewRef.quests;
                                          arr = Array.from(quests.values());
                                          found = arr.filter(
                                            (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                          );
                                          mapped = found.map((id) => id.id);
                                          return mapped.sort();
                                        }
                                      }
                                      cResult[49] = obj4;
                                      let tmp43 = obj4;
                                    } else {
                                      tmp43 = cResult[49];
                                    }
                                    const OrbsHoldoutExperiment = scrollToQuestId(tmp2[43]).OrbsHoldoutExperiment;
                                    const enabled3 = OrbsHoldoutExperiment.useConfig(tmp43).enabled;
                                    const _Symbol6 = Symbol;
                                    if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                                      let obj5 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                      class U {
                                        constructor() {
                                          quests = scrollViewRef.quests;
                                          arr = Array.from(quests.values());
                                          found = arr.filter(
                                            (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                          );
                                          mapped = found.map((id) => id.id);
                                          return mapped.sort();
                                        }
                                      }
                                      cResult[50] = obj5;
                                      let tmp45 = obj5;
                                    } else {
                                      tmp45 = cResult[50];
                                    }
                                    const OrbsArcadeExperiment = scrollToQuestId(tmp2[44]).OrbsArcadeExperiment;
                                    let enabled4 = OrbsArcadeExperiment.useConfig(tmp45).enabled;
                                    const tmpResult13 = scrollToQuestId(tmp2[25]);
                                    const params = scrollToQuestId(tmp2[45]).useRoute().params;
                                    let previewAdCreativeIds;
                                    if (params != null) {
                                      previewAdCreativeIds = params.previewAdCreativeIds;
                                    }
                                    if (cResult[51] !== previewAdCreativeIds) {
                                      const obj7 = { previewAdCreativeIds };
                                      class U {
                                        constructor() {
                                          quests = scrollViewRef.quests;
                                          arr = Array.from(quests.values());
                                          found = arr.filter(
                                            (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                          );
                                          mapped = found.map((id) => id.id);
                                          return mapped.sort();
                                        }
                                      }
                                      cResult[52] = obj7;
                                      let tmp48 = obj7;
                                    } else {
                                      tmp48 = cResult[52];
                                    }
                                    const tmpResult14 = scrollToQuestId(tmp2[45]);
                                    const fetchQuestHomeBounties = scrollToQuestId(tmp2[25]).useFetchQuestHomeBounties(
                                      tmp48,
                                    );
                                    const isLoading = fetchQuestHomeBounties.isLoading;
                                    const questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
                                    if (cResult[53] === isLoading) {
                                      if (cResult[54] === previewAdCreativeIds) {
                                        if (cResult[55] === questHomeBounties) {
                                          let tmp50 = cResult[56];
                                          let tmp51 = cResult[57];
                                        }
                                        const effect4 = obj6.useEffect(tmp50, tmp51);
                                        if (cResult[58] === filters) {
                                          if (cResult[59] === enabled3) {
                                            if (cResult[60] === enabled) {
                                              if (cResult[61] === enabled2) {
                                                let tmp53 = cResult[62];
                                              }
                                              closure_16 = tmp53;
                                              const _Symbol7 = Symbol;
                                              class U {
                                                constructor() {
                                                  quests = scrollViewRef.quests;
                                                  arr = Array.from(quests.values());
                                                  found = arr.filter(
                                                    (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                  );
                                                  mapped = found.map((id) => id.id);
                                                  return mapped.sort();
                                                }
                                              }
                                              if (tmp55 === Symbol.for("react.memo_cache_sentinel")) {
                                                const obj8 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                                class U {
                                                  constructor() {
                                                    quests = scrollViewRef.quests;
                                                    arr = Array.from(quests.values());
                                                    found = arr.filter(
                                                      (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                    );
                                                    mapped = found.map((id) => id.id);
                                                    return mapped.sort();
                                                  }
                                                }
                                                cResult[63] = obj8;
                                                let tmp56 = obj8;
                                              } else {
                                                tmp56 = cResult[63];
                                              }
                                              const BountiesShopCarouselExperiment = scrollToQuestId(
                                                tmp2[49],
                                              ).BountiesShopCarouselExperiment;
                                              config = BountiesShopCarouselExperiment.useConfig(tmp56);
                                              let tmp59 = tmp53;
                                              if (tmp53) {
                                                tmp59 = "none" !== config.placement;
                                              }
                                              if (cResult[64] === config.sortType) {
                                                if (cResult[65] === tmp59) {
                                                  const tmp60 = cResult[66];
                                                }
                                                const questHomeOrbShopCarouselData = scrollToQuestId(
                                                  tmp2[50],
                                                ).useQuestHomeOrbShopCarouselData(tmp60);
                                                class U {
                                                  constructor() {
                                                    quests = scrollViewRef.quests;
                                                    arr = Array.from(quests.values());
                                                    found = arr.filter(
                                                      (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                    );
                                                    mapped = found.map((id) => id.id);
                                                    return mapped.sort();
                                                  }
                                                }
                                                const orbShopProducts = tmp62;
                                                const obtainableOrbRewards =
                                                  questHomeOrbShopCarouselData.obtainableOrbRewards;
                                                const showPlaceholderCarousel =
                                                  questHomeOrbShopCarouselData.showPlaceholderCarousel;
                                                if (enabled4) {
                                                  enabled4 = enabled;
                                                }
                                                if (enabled4) {
                                                  enabled4 = !enabled3;
                                                }
                                                if (enabled4) {
                                                  enabled4 = 0 === filters.length;
                                                }
                                                let tmp63 = tmp53;
                                                if (tmp53) {
                                                  tmp63 = !isLoading;
                                                }
                                                if (tmp63) {
                                                  tmp63 = questHomeBounties.length > 0;
                                                }
                                                if (cResult[67] !== tmp63) {
                                                  const obj9 = { bountiesAvailable: tmp63 };
                                                  class U {
                                                    constructor() {
                                                      quests = scrollViewRef.quests;
                                                      arr = Array.from(quests.values());
                                                      found = arr.filter(
                                                        (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                      );
                                                      mapped = found.map((id) => id.id);
                                                      return mapped.sort();
                                                    }
                                                  }
                                                  cResult[68] = obj9;
                                                  let tmp64 = obj9;
                                                } else {
                                                  tmp64 = cResult[68];
                                                }
                                                orbShopProducts(tmp64);
                                                if (cResult[69] === handleHeaderLayout) {
                                                  if (cResult[70] === obtainableOrbRewards) {
                                                    if (cResult[71] === tmp62) {
                                                      if (cResult[72] === config) {
                                                        if (cResult[73] === tmp53) {
                                                          if (cResult[74] === enabled4) {
                                                            if (cResult[77] !== visibilityRef) {
                                                              class Ge {
                                                                constructor(arg0) {
                                                                  item = arg0.item;
                                                                  index = arg0.index;
                                                                  obj = {
                                                                    questOrQuests: item,
                                                                    questContent: closure_0(closure_2[46]).QuestContent
                                                                      .QUEST_HOME_MOBILE,
                                                                    questContentPosition: index,
                                                                    trackGuildAndChannelMetadata: false,
                                                                    visibilityRef,
                                                                    skipRemountKey: true,
                                                                    sourceQuestContent: closure_0(closure_2[46])
                                                                      .QuestContent.QUEST_HOME_MOBILE,
                                                                    children() {
                                                                      return isLoading(
                                                                        scrollToQuestId(quests[52]).QuestCard,
                                                                        {
                                                                          quest: item,
                                                                          questContentPosition: index,
                                                                          containerPadding: 0,
                                                                          sourceQuestContent: scrollToQuestId(
                                                                            quests[46],
                                                                          ).QuestContent.QUEST_HOME_MOBILE,
                                                                        },
                                                                      );
                                                                    },
                                                                  };
                                                                  return jsx(
                                                                    closure_0(closure_2[51])
                                                                      .QuestContentImpressionTrackerNative,
                                                                    obj,
                                                                  );
                                                                }
                                                              }
                                                              cResult[77] = visibilityRef;
                                                              class U {
                                                                constructor() {
                                                                  quests = scrollViewRef.quests;
                                                                  arr = Array.from(quests.values());
                                                                  found = arr.filter(
                                                                    (item) =>
                                                                      !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                                  );
                                                                  mapped = found.map((id) => id.id);
                                                                  return mapped.sort();
                                                                }
                                                              }
                                                              cResult[78] = Ge;
                                                            } else {
                                                              class Ge {
                                                                constructor(arg0) {
                                                                  item = arg0.item;
                                                                  index = arg0.index;
                                                                  obj = {
                                                                    questOrQuests: item,
                                                                    questContent: closure_0(closure_2[46]).QuestContent
                                                                      .QUEST_HOME_MOBILE,
                                                                    questContentPosition: index,
                                                                    trackGuildAndChannelMetadata: false,
                                                                    visibilityRef,
                                                                    skipRemountKey: true,
                                                                    sourceQuestContent: closure_0(closure_2[46])
                                                                      .QuestContent.QUEST_HOME_MOBILE,
                                                                    children() {
                                                                      return isLoading(
                                                                        scrollToQuestId(quests[52]).QuestCard,
                                                                        {
                                                                          quest: item,
                                                                          questContentPosition: index,
                                                                          containerPadding: 0,
                                                                          sourceQuestContent: scrollToQuestId(
                                                                            quests[46],
                                                                          ).QuestContent.QUEST_HOME_MOBILE,
                                                                        },
                                                                      );
                                                                    },
                                                                  };
                                                                  return jsx(
                                                                    closure_0(closure_2[51])
                                                                      .QuestContentImpressionTrackerNative,
                                                                    obj,
                                                                  );
                                                                }
                                                              }
                                                            }
                                                            if (cResult[79] === handleQuestCardLayout) {
                                                              class Ge {
                                                                constructor(arg0) {
                                                                  item = arg0.item;
                                                                  index = arg0.index;
                                                                  obj = {
                                                                    questOrQuests: item,
                                                                    questContent: closure_0(closure_2[46]).QuestContent
                                                                      .QUEST_HOME_MOBILE,
                                                                    questContentPosition: index,
                                                                    trackGuildAndChannelMetadata: false,
                                                                    visibilityRef,
                                                                    skipRemountKey: true,
                                                                    sourceQuestContent: closure_0(closure_2[46])
                                                                      .QuestContent.QUEST_HOME_MOBILE,
                                                                    children() {
                                                                      return isLoading(
                                                                        scrollToQuestId(quests[52]).QuestCard,
                                                                        {
                                                                          quest: item,
                                                                          questContentPosition: index,
                                                                          containerPadding: 0,
                                                                          sourceQuestContent: scrollToQuestId(
                                                                            quests[46],
                                                                          ).QuestContent.QUEST_HOME_MOBILE,
                                                                        },
                                                                      );
                                                                    },
                                                                  };
                                                                  return jsx(
                                                                    closure_0(closure_2[51])
                                                                      .QuestContentImpressionTrackerNative,
                                                                    obj,
                                                                  );
                                                                }
                                                              }
                                                              let tmp71 = !isNavigationComplete;
                                                              if (isNavigationComplete) {
                                                                class Ge {
                                                                  constructor(arg0) {
                                                                    item = arg0.item;
                                                                    index = arg0.index;
                                                                    obj = {
                                                                      questOrQuests: item,
                                                                      questContent: closure_0(closure_2[46])
                                                                        .QuestContent.QUEST_HOME_MOBILE,
                                                                      questContentPosition: index,
                                                                      trackGuildAndChannelMetadata: false,
                                                                      visibilityRef,
                                                                      skipRemountKey: true,
                                                                      sourceQuestContent: closure_0(closure_2[46])
                                                                        .QuestContent.QUEST_HOME_MOBILE,
                                                                      children() {
                                                                        return isLoading(
                                                                          scrollToQuestId(quests[52]).QuestCard,
                                                                          {
                                                                            quest: item,
                                                                            questContentPosition: index,
                                                                            containerPadding: 0,
                                                                            sourceQuestContent: scrollToQuestId(
                                                                              quests[46],
                                                                            ).QuestContent.QUEST_HOME_MOBILE,
                                                                          },
                                                                        );
                                                                      },
                                                                    };
                                                                    return jsx(
                                                                      closure_0(closure_2[51])
                                                                        .QuestContentImpressionTrackerNative,
                                                                      obj,
                                                                    );
                                                                  }
                                                                }
                                                                if (tmp53) {
                                                                  class Ge {
                                                                    constructor(arg0) {
                                                                      item = arg0.item;
                                                                      index = arg0.index;
                                                                      obj = {
                                                                        questOrQuests: item,
                                                                        questContent: closure_0(closure_2[46])
                                                                          .QuestContent.QUEST_HOME_MOBILE,
                                                                        questContentPosition: index,
                                                                        trackGuildAndChannelMetadata: false,
                                                                        visibilityRef,
                                                                        skipRemountKey: true,
                                                                        sourceQuestContent: closure_0(closure_2[46])
                                                                          .QuestContent.QUEST_HOME_MOBILE,
                                                                        children() {
                                                                          return isLoading(
                                                                            scrollToQuestId(quests[52]).QuestCard,
                                                                            {
                                                                              quest: item,
                                                                              questContentPosition: index,
                                                                              containerPadding: 0,
                                                                              sourceQuestContent: scrollToQuestId(
                                                                                quests[46],
                                                                              ).QuestContent.QUEST_HOME_MOBILE,
                                                                            },
                                                                          );
                                                                        },
                                                                      };
                                                                      return jsx(
                                                                        closure_0(closure_2[51])
                                                                          .QuestContentImpressionTrackerNative,
                                                                        obj,
                                                                      );
                                                                    }
                                                                  }
                                                                }
                                                                tmp71 = tmp72;
                                                              }
                                                              class U {
                                                                constructor() {
                                                                  quests = scrollViewRef.quests;
                                                                  arr = Array.from(quests.values());
                                                                  found = arr.filter(
                                                                    (item) =>
                                                                      !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                                  );
                                                                  mapped = found.map((id) => id.id);
                                                                  return mapped.sort();
                                                                }
                                                              }
                                                              closure_22 = tmp71;
                                                              obj6.useRef(tmp53);
                                                              if (cResult[82] !== tmp53) {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                const items4 = [tmp53];
                                                                class U {
                                                                  constructor() {
                                                                    quests = scrollViewRef.quests;
                                                                    arr = Array.from(quests.values());
                                                                    found = arr.filter(
                                                                      (item) =>
                                                                        !scrollToQuestId(quests[32]).isQuestExpired(
                                                                          item,
                                                                        ),
                                                                    );
                                                                    mapped = found.map((id) => id.id);
                                                                    return mapped.sort();
                                                                  }
                                                                }
                                                                cResult[82] = tmp53;
                                                                cResult[83] = Ze;
                                                                cResult[84] = items4;
                                                                let tmp74 = items4;
                                                              } else {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                tmp74 = cResult[84];
                                                              }
                                                              const effect5 = obj6.useEffect(Ze, tmp74);
                                                              const _Symbol8 = Symbol;
                                                              if (
                                                                cResult[85] === Symbol.for("react.memo_cache_sentinel")
                                                              ) {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                const items5 = [first];
                                                                class U {
                                                                  constructor() {
                                                                    quests = scrollViewRef.quests;
                                                                    arr = Array.from(quests.values());
                                                                    found = arr.filter(
                                                                      (item) =>
                                                                        !scrollToQuestId(quests[32]).isQuestExpired(
                                                                          item,
                                                                        ),
                                                                    );
                                                                    mapped = found.map((id) => id.id);
                                                                    return mapped.sort();
                                                                  }
                                                                }
                                                                cResult[85] = tmp78;
                                                                cResult[86] = items5;
                                                                let tmp77 = items5;
                                                              } else {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                tmp77 = cResult[86];
                                                              }
                                                              const effect6 = obj6.useEffect(tmp78, tmp77);
                                                              if (cResult[87] !== tmp71) {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                const items6 = [first];
                                                                class U {
                                                                  constructor() {
                                                                    quests = scrollViewRef.quests;
                                                                    arr = Array.from(quests.values());
                                                                    found = arr.filter(
                                                                      (item) =>
                                                                        !scrollToQuestId(quests[32]).isQuestExpired(
                                                                          item,
                                                                        ),
                                                                    );
                                                                    mapped = found.map((id) => id.id);
                                                                    return mapped.sort();
                                                                  }
                                                                }
                                                                cResult[87] = tmp71;
                                                                cResult[88] = tmp82;
                                                                cResult[89] = items6;
                                                                let tmp81 = items6;
                                                              } else {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                                tmp81 = cResult[89];
                                                              }
                                                              const effect7 = obj6.useEffect(tmp82, tmp81);
                                                              const shouldShowPreviewToolTab = scrollToQuestId(
                                                                tmp2[25],
                                                              ).useShouldShowPreviewToolTab();
                                                              const tmpResult17 = scrollToQuestId(tmp2[25]);
                                                              const isHexagonCampaignQuestHomeHeaderEnabled =
                                                                scrollToQuestId(
                                                                  tmp2[54],
                                                                ).useIsHexagonCampaignQuestHomeHeaderEnabled(
                                                                  "QuestHome",
                                                                );
                                                              if (first) {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                              } else {
                                                                class Ze {
                                                                  constructor() {
                                                                    closure_23.current = closure_16;
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                              const tmpResult18 = scrollToQuestId(tmp2[54]);
                                                            }
                                                            class U {
                                                              constructor() {
                                                                quests = scrollViewRef.quests;
                                                                arr = Array.from(quests.values());
                                                                found = arr.filter(
                                                                  (item) =>
                                                                    !scrollToQuestId(quests[32]).isQuestExpired(item),
                                                                );
                                                                mapped = found.map((id) => id.id);
                                                                return mapped.sort();
                                                              }
                                                            }
                                                            cResult[79] = handleQuestCardLayout;
                                                            cResult[80] = quests;
                                                            cResult[81] = tmp70;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                class De {
                                                  constructor() {
                                                    obj = {
                                                      shouldShowBounties: closure_16,
                                                      shouldShowOrbsArcade: closure_21,
                                                      onLayout: handleHeaderLayout,
                                                      shopCarouselConfig: closure_17,
                                                      orbShopProducts: products,
                                                      obtainableOrbRewards,
                                                      showOrbShopPlaceholderCarousel: showPlaceholderCarousel,
                                                    };
                                                    return jsx(closure_24, obj);
                                                  }
                                                }
                                                cResult[69] = handleHeaderLayout;
                                                cResult[70] = obtainableOrbRewards;
                                                cResult[71] = tmp62;
                                                cResult[72] = config;
                                                cResult[73] = tmp53;
                                                cResult[74] = enabled4;
                                                class Ae {
                                                  constructor() {
                                                    if (null != previewAdCreativeIds) {
                                                      num = 0;
                                                      if (0 !== previewAdCreativeIds.length) {
                                                        tmp7 = isLoading;
                                                        if (!isLoading) {
                                                          tmp = questHomeBounties;
                                                          found = questHomeBounties.find((id) =>
                                                            previewAdCreativeIds.includes(id.id),
                                                          );
                                                          if (null != found) {
                                                            tmp3 = closure_1;
                                                            tmp4 = closure_2;
                                                            obj = closure_1(closure_2[16]);
                                                            obj1 = {
                                                              bountyId: null,
                                                              sourceQuestContent: null,
                                                              variant: null,
                                                            };
                                                            obj1.bountyId = found.id;
                                                            tmp5 = closure_0;
                                                            obj1.sourceQuestContent = closure_0(
                                                              closure_2[46],
                                                            ).QuestContent.VIDEO_MODAL_MOBILE;
                                                            obj1.variant = closure_0(
                                                              closure_2[47],
                                                            ).BountiesModalVariant.VERTICAL_SCROLL;
                                                            showModalResult = obj.showModal(obj1);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return;
                                                  }
                                                }
                                                cResult[75] = showPlaceholderCarousel;
                                                cResult[76] = De;
                                                const tmpResult16 = scrollToQuestId(tmp2[50]);
                                              }
                                              const obj11 = { enabled: tmp59, sortType: config.sortType };
                                              cResult[64] = config.sortType;
                                              cResult[65] = tmp59;
                                              cResult[66] = obj11;
                                            }
                                          }
                                        }
                                        class U {
                                          constructor() {
                                            quests = scrollViewRef.quests;
                                            arr = Array.from(quests.values());
                                            found = arr.filter(
                                              (item) => !scrollToQuestId(quests[32]).isQuestExpired(item),
                                            );
                                            mapped = found.map((id) => id.id);
                                            return mapped.sort();
                                          }
                                        }
                                        if (enabled) {
                                          class Ze {
                                            constructor() {
                                              closure_23.current = closure_16;
                                              return;
                                            }
                                          }
                                        }
                                        if (result1) {
                                          class Ze {
                                            constructor() {
                                              closure_23.current = closure_16;
                                              return;
                                            }
                                          }
                                        }
                                        if (result1) {
                                          class Ze {
                                            constructor() {
                                              closure_23.current = closure_16;
                                              return;
                                            }
                                          }
                                          result1 = obj19.shouldShowBountiesGivenFilters(filters);
                                        }
                                        cResult[58] = filters;
                                        cResult[59] = enabled3;
                                        cResult[60] = enabled;
                                        cResult[61] = enabled2;
                                        cResult[62] = result1;
                                        tmp53 = result1;
                                      }
                                    }
                                    class Ae {
                                      constructor() {
                                        if (null != previewAdCreativeIds) {
                                          num = 0;
                                          if (0 !== previewAdCreativeIds.length) {
                                            tmp7 = isLoading;
                                            if (!isLoading) {
                                              tmp = questHomeBounties;
                                              found = questHomeBounties.find((id) =>
                                                previewAdCreativeIds.includes(id.id),
                                              );
                                              if (null != found) {
                                                tmp3 = closure_1;
                                                tmp4 = closure_2;
                                                obj = closure_1(closure_2[16]);
                                                obj1 = { bountyId: null, sourceQuestContent: null, variant: null };
                                                obj1.bountyId = found.id;
                                                tmp5 = closure_0;
                                                obj1.sourceQuestContent = closure_0(
                                                  closure_2[46],
                                                ).QuestContent.VIDEO_MODAL_MOBILE;
                                                obj1.variant = closure_0(
                                                  closure_2[47],
                                                ).BountiesModalVariant.VERTICAL_SCROLL;
                                                showModalResult = obj.showModal(obj1);
                                              }
                                            }
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
                                    cResult[53] = isLoading;
                                    cResult[54] = previewAdCreativeIds;
                                    cResult[55] = questHomeBounties;
                                    cResult[56] = Ae;
                                    cResult[57] = items7;
                                    tmp51 = items7;
                                    tmp50 = Ae;
                                    const tmpResult15 = scrollToQuestId(tmp2[25]);
                                  }
                                }
                                class U {
                                  constructor() {
                                    quests = scrollViewRef.quests;
                                    arr = Array.from(quests.values());
                                    found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                                    mapped = found.map((id) => id.id);
                                    return mapped.sort();
                                  }
                                }
                                tmp39[0] = sortMethod;
                                tmp39[1] = filters;
                                tmp39[2] = quests.length;
                                cResult[44] = filters;
                                cResult[45] = quests.length;
                                cResult[46] = sortMethod;
                                cResult[47] = tmp39;
                                tmp38 = tmp39;
                              }
                            }
                          }
                          const items8 = [, , ,];
                          class U {
                            constructor() {
                              quests = scrollViewRef.quests;
                              arr = Array.from(quests.values());
                              found = arr.filter((item) => !scrollToQuestId(quests[32]).isQuestExpired(item));
                              mapped = found.map((id) => id.id);
                              return mapped.sort();
                            }
                          }
                          items8[1] = sortMethod;
                          items8[2] = hasFetched;
                          items8[3] = scrollViewRef;
                          cResult[39] = filters;
                          cResult[40] = hasFetched;
                          cResult[41] = scrollViewRef;
                          cResult[42] = sortMethod;
                          cResult[43] = items8;
                          tmp36 = items8;
                        }
                        function be() {
                          let tmp2 = null != scrollViewRef.current;
                          if (tmp2) {
                            tmp2 = hasFetched;
                          }
                          if (tmp2) {
                            const current = scrollViewRef.current;
                            current.scrollToOffset({ offset: 0, animated: false });
                          }
                        }
                        cResult[36] = hasFetched;
                        cResult[37] = scrollViewRef;
                        cResult[38] = be;
                        tmp35 = be;
                      }
                    }
                  }
                  const obj13 = {
                    name: scrollToQuestId(tmp2[38]).ImpressionNames.QUEST_HOME,
                    type: scrollToQuestId(tmp2[38]).ImpressionTypes.VIEW,
                    properties: null,
                  };
                  const obj14 = {
                    utm_source_current: null,
                    utm_medium_current: null,
                    utm_campaign_current: null,
                    utm_content_current: null,
                    tab: null,
                  };
                  ({
                    utmSourceCurrent: obj10.utm_source_current,
                    utmMediumCurrent: obj10.utm_medium_current,
                    utmCampaignCurrent: obj10.utm_campaign_current,
                    utmContentCurrent: obj10.utm_content_current,
                  } = tmp28);
                  obj14.tab = scrollToQuestId(tmp2[25]).QuestTabs.ALL;
                  obj13.properties = obj14;
                  cResult[30] = tmp28.utmContentCurrent;
                  cResult[31] = tmp28.utmMediumCurrent;
                  cResult[32] = tmp28.utmSourceCurrent;
                  cResult[33] = obj13;
                  tmp29 = obj13;
                }
              }
            }
          }
          function ee() {
            let tmp2 = null != scrollToQuestId;
            if (tmp2) {
              tmp2 = "" !== scrollToQuestId;
            }
            if (tmp2) {
              tmp2 = hasFetched;
            }
            if (tmp2) {
              tmp2 = !isFetchingCurrentQuests;
            }
            if (tmp2) {
              let tmp8 = null == QuestDataUtils.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
              if (tmp8) {
                tmp8 = ref.current !== scrollToQuestId;
              }
              if (tmp8) {
                const obj3 = { text: null, variant: "critical", duration: 5000 };
                const intl = util.intl;
                obj3.text = intl.string(util.t.sIyHuY);
                ToastActionCreatorsDefault.open("QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", obj3);
                const obj5 = { quest_id: scrollToQuestId };
                AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj5);
                ref.current = scrollToQuestId;
              }
            }
          }
          const items9 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
          cResult[19] = excludedQuests;
          cResult[20] = hasFetched;
          cResult[21] = isFetchingCurrentQuests;
          cResult[22] = quests;
          cResult[23] = scrollToQuestId;
          cResult[24] = items9;
          cResult[25] = ee;
          tmp22 = ee;
          tmp21 = items9;
          const tmpResult11 = scrollToQuestId(tmp2[14]);
        }
        cResult[1] = filters;
        cResult[2] = sortMethod;
        obj15 = { filters, sortMethod };
        let obj = scrollToQuestId(quests[13]);
        tmp7 = first;
      }
    : function QuestHome(filters) {
        ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
        filters = filters.filters;
        const sortMethod = filters.sortMethod;
        let quests;
        let ref;
        let isLoading;
        let questHomeBounties;
        let enabled4;
        let config;
        let products;
        let obtainableOrbRewards;
        let showPlaceholderCarousel;
        const isEligibleForQuests = scrollToQuestId(sortMethod[30]).getIsEligibleForQuests();
        let tmp4 = questHomeBounties();
        let obj = scrollToQuestId(sortMethod[30]);
        const items = [filters, sortMethod];
        const filteredQuests = scrollToQuestId(sortMethod[25]).useFilteredQuests(
          scrollToQuestId(sortMethod[25]).QuestTabs.ALL,
          quests.useMemo(() => ({ filters, sortMethod }), items),
        );
        quests = filteredQuests.quests;
        const excludedQuests = filteredQuests.excludedQuests;
        let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
        const hasFetched = filteredQuests.hasFetched;
        let obj2 = scrollToQuestId(sortMethod[25]);
        const items1 = [ref];
        const stateFromStoresArray = scrollToQuestId(sortMethod[14]).useStateFromStoresArray(items1, () => {
          quests = ref.quests;
          const found = Array.from(quests.values()).filter(
            (item) => !scrollToQuestId(sortMethod[32]).isQuestExpired(item),
          );
          const mapped = found.map((id) => id.id);
          return mapped.sort();
        }, []);
        const items2 = [stateFromStoresArray];
        const effect = quests.useEffect(() => {
          if (stateFromStoresArray.length > 0) {
            QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
          }
        }, items2);
        ref = quests.useRef(null);
        const items3 = [scrollToQuestId, quests, excludedQuests];
        const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
        const memo = quests.useMemo(() => {
          if (null == scrollToQuestId) {
            return null;
          } else {
            const result = QuestDataUtils.findQuestOrReplacement(tmp, quests, excludedQuests);
            scrollToQuestId = result;
            let findIndexResult = null;
            if (null != result) {
              findIndexResult = quests.findIndex((id) => id.id === result.id);
            }
            return findIndexResult;
          }
        }, items3);
        const effect1 = quests.useEffect(() => {
          let tmp2 = null != scrollToQuestId;
          if (tmp2) {
            tmp2 = "" !== scrollToQuestId;
          }
          if (tmp2) {
            tmp2 = hasFetched;
          }
          if (tmp2) {
            tmp2 = !isFetchingCurrentQuests;
          }
          if (tmp2) {
            let tmp8 = null == QuestDataUtils.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
            if (tmp8) {
              tmp8 = ref.current !== scrollToQuestId;
            }
            if (tmp8) {
              const obj3 = { text: null, variant: "critical", duration: 5000 };
              const intl = util.intl;
              obj3.text = intl.string(util.t.sIyHuY);
              ToastActionCreatorsDefault.open("QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", obj3);
              const obj5 = { quest_id: scrollToQuestId };
              AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj5);
              ref.current = scrollToQuestId;
            }
          }
        }, items4);
        const tmp11 = enabled4({ scrollToIndex: memo });
        const scrollViewRef = tmp11.scrollViewRef;
        const handleQuestCardLayout = tmp11.handleQuestCardLayout;
        const handleHeaderLayout = tmp11.handleHeaderLayout;
        const visibilityRef = tmp11.visibilityRef;
        ({ handleListScroll, handleListLayout, handleListLoad } = tmp11);
        const tmp12 = scrollViewRef((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
        let obj5 = { name: null, type: null, properties: null };
        let obj4 = scrollToQuestId(sortMethod[14]);
        obj5.name = scrollToQuestId(sortMethod[38]).ImpressionNames.QUEST_HOME;
        obj5.type = scrollToQuestId(sortMethod[38]).ImpressionTypes.VIEW;
        const tmp13 = filters(sortMethod[39]);
        obj5.properties = {
          utm_source_current: tmp12.utmSourceCurrent,
          utm_medium_current: tmp12.utmMediumCurrent,
          utm_campaign_current: tmp12.utmCampaignCurrent,
          utm_content_current: tmp12.utmContentCurrent,
          tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL,
        };
        tmp13(obj5);
        const items5 = [isEligibleForQuests];
        const effect2 = quests.useEffect(() => {
          if (isEligibleForQuests) {
            const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
            QuestHomeOpenTriggerPoint.trigger();
          }
        }, items5);
        const items6 = [filters, sortMethod, hasFetched, scrollViewRef];
        const effect3 = quests.useEffect(() => {
          let tmp2 = null != scrollViewRef.current;
          if (tmp2) {
            tmp2 = hasFetched;
          }
          if (tmp2) {
            const current = scrollViewRef.current;
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }, items6);
        const obj6 = {
          utm_source_current: tmp12.utmSourceCurrent,
          utm_medium_current: tmp12.utmMediumCurrent,
          utm_campaign_current: tmp12.utmCampaignCurrent,
          utm_content_current: tmp12.utmContentCurrent,
          tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL,
        };
        const questHomeSortingFilteringAnalytics = scrollToQuestId(
          sortMethod[25],
        ).useQuestHomeSortingFilteringAnalytics({
          selectedSortMethod: sortMethod,
          selectedFilters: filters,
          numQuestsVisible: quests.length,
        });
        const obj7 = scrollToQuestId(sortMethod[25]);
        const obj8 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
        const enabled = scrollToQuestId(sortMethod[41]).useVirtualCurrencyMobileEnabled().enabled;
        const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(
          sortMethod[42],
        ).QuestHomeBountiesFeatureGateExperiment;
        const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[43]).OrbsHoldoutExperiment;
        const enabled2 = OrbsHoldoutExperiment.useConfig({ location: handleQuestCardLayout.QUEST_HOME_MOBILE }).enabled;
        const OrbsArcadeExperiment = scrollToQuestId(sortMethod[44]).OrbsArcadeExperiment;
        let enabled3 = OrbsArcadeExperiment.useConfig({ location: handleQuestCardLayout.QUEST_HOME_MOBILE }).enabled;
        const obj10 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
        const obj11 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
        const obj12 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
        const obj9 = scrollToQuestId(sortMethod[41]);
        const tmp18 = handleQuestCardLayout;
        const params = scrollToQuestId(sortMethod[45]).useRoute().params;
        let previewAdCreativeIds;
        if (params != null) {
          previewAdCreativeIds = params.previewAdCreativeIds;
        }
        const obj13 = scrollToQuestId(sortMethod[45]);
        const fetchQuestHomeBounties = scrollToQuestId(sortMethod[25]).useFetchQuestHomeBounties({
          previewAdCreativeIds,
        });
        isLoading = fetchQuestHomeBounties.isLoading;
        questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
        const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
        const effect4 = obj3.useEffect(() => {
          if (null != previewAdCreativeIds) {
            if (0 !== previewAdCreativeIds.length) {
              if (!isLoading) {
                const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
                if (null != found) {
                  const obj2 = {
                    bountyId: found.id,
                    sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
                    variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL,
                  };
                  BountiesModalActionCreatorsDefault.showModal(obj2);
                }
              }
            }
          }
        }, items7);
        enabled4 = enabled;
        if (enabled) {
          enabled4 = QuestHomeBountiesFeatureGateExperiment.useConfig(obj10).enabled;
        }
        if (enabled4) {
          enabled4 = !enabled2;
        }
        if (enabled4) {
          enabled4 = tmp(tmp2[48]).shouldShowBountiesGivenFilters(filters);
          const tmpResult5 = tmp(tmp2[48]);
        }
        const BountiesShopCarouselExperiment = tmp(tmp2[49]).BountiesShopCarouselExperiment;
        config = BountiesShopCarouselExperiment.useConfig({ location: tmp18.QUEST_HOME_MOBILE });
        const obj14 = { location: tmp18.QUEST_HOME_MOBILE };
        const tmpResult = scrollToQuestId(sortMethod[25]);
        let tmp23 = enabled4;
        if (enabled4) {
          tmp23 = "none" !== config.placement;
        }
        const questHomeOrbShopCarouselData = scrollToQuestId(sortMethod[50]).useQuestHomeOrbShopCarouselData({
          enabled: tmp23,
          sortType: config.sortType,
        });
        products = questHomeOrbShopCarouselData.products;
        obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
        showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
        if (enabled3) {
          enabled3 = enabled;
        }
        if (enabled3) {
          enabled3 = !enabled2;
        }
        if (enabled3) {
          enabled3 = 0 === filters.length;
        }
        let tmp26 = enabled4;
        if (enabled4) {
          tmp26 = !isLoading;
        }
        if (tmp26) {
          tmp26 = questHomeBounties.length > 0;
        }
        config({ bountiesAvailable: tmp26 });
        const items8 = [
          enabled4,
          enabled3,
          handleHeaderLayout,
          config,
          products,
          obtainableOrbRewards,
          showPlaceholderCarousel,
        ];
        const items9 = [visibilityRef];
        const callback = obj3.useCallback(
          () =>
            closure_2_14(closure_24, {
              shouldShowBounties: enabled4,
              shouldShowOrbsArcade: enabled3,
              onLayout: handleHeaderLayout,
              shopCarouselConfig: config,
              orbShopProducts: products,
              obtainableOrbRewards,
              showOrbShopPlaceholderCarousel: showPlaceholderCarousel,
            }),
          items8,
        );
        const items10 = [quests, handleQuestCardLayout];
        const callback1 = obj3.useCallback((item) => {
          item = item.item;
          const index = item.index;
          return closure_2_14(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
            questOrQuests: item,
            questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
            questContentPosition: index,
            trackGuildAndChannelMetadata: false,
            visibilityRef,
            skipRemountKey: true,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
            children() {
              return previewAdCreativeIds(scrollToQuestId(sortMethod[52]).QuestCard, {
                quest: item,
                questContentPosition: index,
                containerPadding: 0,
                sourceQuestContent: scrollToQuestId(sortMethod[46]).QuestContent.QUEST_HOME_MOBILE,
              });
            },
          });
        }, items9);
        let tmp31 = !isNavigationComplete;
        const callback2 = obj3.useCallback((arg0) => {
          const index = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onLayout = function onLayout(arg0) {
            if (null != quests[index.index]) {
              handleQuestCardLayout(arg0, tmp.id);
            }
            index.onLayout(arg0);
          };
          return previewAdCreativeIds(excludedQuests, obj);
        }, items10);
        if (isNavigationComplete) {
          let tmp32 = enabled4;
          if (enabled4) {
            tmp32 = isLoading;
          }
          tmp31 = tmp32;
        }
        if (!tmp31) {
          if (isFetchingCurrentQuests) {
            isFetchingCurrentQuests = 0 === quests.length;
          }
          tmp31 = isFetchingCurrentQuests;
        }
        isFetchingCurrentQuests = tmp31;
        quests.useRef(enabled4);
        const items11 = [enabled4];
        const effect5 = obj3.useEffect(() => {
          closure_24.current = enabled4;
        }, items11);
        const items12 = [isEligibleForQuests];
        const effect6 = obj3.useEffect(() => {
          if (isEligibleForQuests) {
            const obj2 = { includesBounties: ref2.current };
            QuestHomeRoundtripTrackerDefault.startTracking(obj2);
            return () => {
              filters(sortMethod[53]).clearTracking();
            };
          }
        }, items12);
        const items13 = [isEligibleForQuests, tmp31];
        const effect7 = obj3.useEffect(() => {
          let tmp = isEligibleForQuests;
          if (isEligibleForQuests) {
            tmp = !isFetchingCurrentQuests;
          }
          if (tmp) {
            const obj2 = { includesBounties: ref2.current };
            QuestHomeRoundtripTrackerDefault.stopTracking(obj2);
          }
        }, items13);
        const obj15 = { enabled: tmp23, sortType: config.sortType };
        const tmpResult6 = scrollToQuestId(sortMethod[50]);
        const shouldShowPreviewToolTab = scrollToQuestId(sortMethod[25]).useShouldShowPreviewToolTab();
        const tmpResult7 = scrollToQuestId(sortMethod[25]);
        const isHexagonCampaignQuestHomeHeaderEnabled = scrollToQuestId(
          sortMethod[54],
        ).useIsHexagonCampaignQuestHomeHeaderEnabled("QuestHome");
        if (!isEligibleForQuests) {
          return null;
        } else if (tmp31) {
          const obj16 = { style: null, children: null };
          const items14 = [tmp4.loadingContainer, containerStyle];
          obj16.style = items14;
          tmp4 = isFetchingCurrentQuests;
          obj16.children = previewAdCreativeIds(isFetchingCurrentQuests, { animating: true });
          let tmp49Result = previewAdCreativeIds(excludedQuests, obj16);
        } else if (0 === quests.length) {
          const obj17 = { style: null, children: null };
          const items15 = [tmp4.container, containerStyle];
          obj17.style = items15;
          const items16 = [previewAdCreativeIds(tmp5(tmp2[28]), {})];
          if (0 === filters.length) {
            const obj18 = { hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled };
            let tmp41Result = tmp41(products, obj18);
          } else {
            const obj19 = {
              onClearFilters: filters.onClearFilters,
              hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled,
            };
            tmp41Result = tmp41(obtainableOrbRewards, obj19);
          }
          items16[1] = tmp41Result;
          obj17.children = items16;
          isLoading(excludedQuests, obj17);
        } else {
          const obj20 = {
            ref: scrollViewRef,
            contentContainerStyle: null,
            style: null,
            accessibilityLabel: null,
            data: null,
            renderItem: null,
            showsHorizontalScrollIndicator: false,
            ListHeaderComponent: null,
            CellRendererComponent: null,
            onLayout: null,
            onScroll: null,
            onLoad: null,
            scrollEventThrottle: 16,
          };
          if (enabled4) {
            let num5 = 0;
            const obj21 = { paddingTop: num5, paddingBottom: filters(sortMethod[31])().bottom };
            obj20.contentContainerStyle = obj21;
            const items17 = [tmp4.container, containerStyle];
            obj20.style = items17;
            let intl = tmp(tmp2[20]).intl;
            obj20.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
            obj20.data = quests;
            obj20.renderItem = callback1;
            obj20.ListHeaderComponent = callback;
            obj20.CellRendererComponent = callback2;
            obj20.onLayout = handleListLayout;
            obj20.onScroll = handleListScroll;
            obj20.onLoad = handleListLoad;
            tmp49Result = tmp49(tmp50, obj20);
          }
          num5 = tmp5(tmp2[11]).space.PX_16;
          tmp49 = previewAdCreativeIds;
        }
      },
);
