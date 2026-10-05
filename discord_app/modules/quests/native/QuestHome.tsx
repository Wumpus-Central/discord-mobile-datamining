// === Module 14810: QuestHome ===

// Module 14810 (QuestHome)
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useNavigation from "useNavigation" /* 1490 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import _modDef4807 from "module_4807" /* 4807 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import QuestDataUtils from "QuestDataUtils" /* 7183 */;
import QuestActionCreators from "QuestActionCreators" /* 9994 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10911 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10958 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14811 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14813 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 14866 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 14868 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 14889 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 14971 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10909 */;
import QuestStore from "QuestStore" /* 7187 */;
import QuestUtmStore from "QuestUtmStore" /* 7207 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { flex: 1 }, loadingContainer: null, sectionHeader: null, previewButton: null, sectionHeaderWithTag: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj.loadingContainer = obj3;
obj.sectionHeader = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.previewButton = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
let obj5 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj.sectionHeaderWithTag = { gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollToIndex) => {
  const cResult = scrollToIndex(ref[13]).c(21);
  scrollToIndex = scrollToIndex.scrollToIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [P];
    const fn = function l() {
      return P.useReducedMotion;
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
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
  }
  noop = C;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
    cResult[4] = tmp13;
  } else {
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
    cResult[5] = tmp15;
  } else {
    class C {
      constructor(arg0) {
        keys = Object.keys(closure_3.current.children);
        iter = keys[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = null != scrollToIndex;
          if (tmp4) {
            tmp5 = nextResult;
            tmp4 = tmp3 !== scrollToIndex;
          }
          if (!tmp4) {
            tmp6 = closure_3;
            tmp7 = nextResult;
            tmp8 = closure_3.current.children[tmp3];
            if (tmp8 != null) {
              calculateVisibility = tmp8.calculateVisibility;
              if (calculateVisibility != null) {
                calculateVisibilityResult = calculateVisibility();
              }
            }
          }
          continue;
        }
        return;
      }
    }
  }
  const tmp16 = noop.useRef(tmp9)(noop.useState(false), 2);
  const first = tmp16[0];
  closure_6 = tmp16[1];
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
    class A {
      constructor(arg0, arg1) {
        obj = {};
        merged = Object.assign(closure_3.current.children[arg1]);
        obj.layout = scrollToIndex.nativeEvent.layout;
        closure_3.current.children[arg1] = obj;
        tmp2 = closure_4(arg1);
        return;
      }
    }
    cResult[7] = A;
  } else {
    class A {
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
    class P {
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
          obj.viewOffset = closure_1(closure_2[11]).space.PX_8;
          scrollToIndexResult = current.scrollToIndex(obj);
        }
        return;
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = P;
  } else {
    class P {
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
          obj.viewOffset = closure_1(closure_2[11]).space.PX_8;
          scrollToIndexResult = current.scrollToIndex(obj);
        }
        return;
      }
    }
  }
  P = tmp20;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        closure_3.current.parent.firstItemOffset = scrollToIndex.nativeEvent.layout.height;
        tmp = closure_4();
        return;
      }
    }
    cResult[10] = H;
  } else {
    class H {
      constructor(arg0) {
        closure_3.current.parent.firstItemOffset = scrollToIndex.nativeEvent.layout.height;
        tmp = closure_4();
        return;
      }
    }
  }
  if (cResult[11] === first) {
    class H {
      constructor(arg0) {
        closure_3.current.parent.firstItemOffset = scrollToIndex.nativeEvent.layout.height;
        tmp = closure_4();
        return;
      }
    }
  }
  const fn2 = function x() {
    let tmp2 = null != scrollToIndex;
    if (tmp2) {
      tmp2 = -1 !== scrollToIndex;
    }
    if (tmp2) {
      tmp2 = first;
    }
    if (tmp2) {
      P(scrollToIndex);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  };
  cResult[11] = first;
  cResult[12] = tmp20;
  cResult[13] = scrollToIndex;
  cResult[14] = fn2;
  const ref1 = noop.useRef(tmp9);
}) : ((scrollToIndex) => {
  scrollToIndex = scrollToIndex.scrollToIndex;
  let scrollViewRef;
  let callback;
  let callback5;
  const items = [callback5];
  const stateFromStores = scrollToIndex(scrollViewRef[14]).useStateFromStores(items, () => callback5.useReducedMotion);
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
      const obj = { index, animated: !stateFromStores, viewOffset: nativeDefault.space.PX_8 };
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
  return { scrollViewRef, handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout, handleHeaderLayout, visibilityRef };
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((bountiesAvailable) => {
  const cResult = bountiesAvailable(576).c(10);
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  let obj = bountiesAvailable(576);
  const navigation = bountiesAvailable(1490).useNavigation();
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
    const fn4 = function h() {
      return navigation.addListener("beforeRemove", () => {
        if (ref.current) {
          if (ref3.current) {
            bountiesAvailable(ref[18]).fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
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
}) : ((bountiesAvailable) => {
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  noop = undefined;
  const navigation = bountiesAvailable(1490).useNavigation();
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
  const effect3 = noop.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (ref.current) {
      if (ref3.current) {
        bountiesAvailable(ref[18]).fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
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
  }), items1);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const navigation = useNavigation.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
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
    const obj3 = { action: null };
    const obj4 = { variant: "secondary", text: tmp6, onPress: tmp5 };
    obj3.action = state(components_Button_Button.Button, obj4);
    const tmp12 = state(QuestHomeEmptyStateDefault, obj3);
    cResult[3] = tmp5;
    cResult[4] = tmp12;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (() => {
  const navigation = useNavigation.useNavigation();
  const items = [navigation];
  const callback = noop.useCallback(() => navigation.goBack(), items);
  const obj2 = { action: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t["/g10LC"]);
  obj3.onPress = callback;
  obj2.action = state(components_Button_Button.Button, obj3);
  return state(QuestHomeEmptyStateDefault, obj2);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClearFilters) => {
  const cResult = c.c(7);
  onClearFilters = onClearFilters.onClearFilters;
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
    const tmp8 = state(components_Button_Button.Button, obj2);
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
  if (cResult[5] !== tmp6) {
    const obj3 = { action: tmp6, title: tmp9, subtitle: tmp10 };
    const tmp16 = state(QuestHomeEmptyStateDefault, obj3);
    cResult[5] = tmp6;
    cResult[6] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[6];
  }
  return tmp13;
}) : ((onClearFilters) => {
  const obj = { action: null, title: null, subtitle: null };
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.urZl31);
  obj2.onPress = onClearFilters.onClearFilters;
  obj.action = state(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.PBfFnx);
  const intl3 = util.intl;
  obj.subtitle = intl3.string(util.t.nwdKFC);
  return state(QuestHomeEmptyStateDefault, obj);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  let previewButton = closure_17();
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
      const tmp7 = state(components_Button_Button.Button, obj2);
      cResult[1] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] !== previewButton.previewButton) {
      const obj3 = { style: previewButton.previewButton, children: tmp5 };
      const tmp11 = state(hasOwnProperty, obj3);
      previewButton = previewButton.previewButton;
      cResult[2] = previewButton;
      cResult[3] = tmp11;
    }
  }
  tmpResult = hooks_QuestHooks;
}) : (() => {
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    require("openUserSettings").openUserSettings({ screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 });
  }, []);
  const tmp = closure_17();
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    const obj2 = { style: tmp.previewButton, children: null };
    const obj3 = { grow: true, onPress: callback, variant: "primary", text: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.tx5Ax5);
    obj2.children = state(components_Button_Button.Button, obj3);
    tmp5 = state(hasOwnProperty, obj2);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = state(closure_22, {});
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === obtainableOrbRewards) {
    if (cResult[2] === orbShopProducts) {
      if (cResult[3] === shopCarouselConfig) {
        if (cResult[4] === showOrbShopPlaceholderCarousel) {
          let tmp9 = cResult[5];
        }
        if (cResult[6] === tmp4.sectionHeader) {
          if (cResult[7] === tmp4.sectionHeaderWithTag) {
            let tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-lg/semibold", color: "text-strong", children: null };
            const intl = util.intl;
            obj2.children = intl.string(util.t.JALI2K);
            const tmp14 = state(Text_Text.Text, obj2);
            cResult[9] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== tmp11) {
            const obj3 = { style: tmp11, children: tmp12 };
            const tmp18 = state(hasOwnProperty, obj3);
            cResult[10] = tmp11;
            cResult[11] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp9) {
            if (cResult[13] === tmp15) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
          const obj4 = { children: null };
          const items = [first, tmp9, tmp15];
          obj4.children = items;
          const tmp22 = value2(closure_1_15, obj4);
          cResult[12] = tmp9;
          cResult[13] = tmp15;
          cResult[14] = tmp22;
          tmp19 = tmp22;
        }
        const items1 = [, ];
        ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = tmp4);
        cResult[6] = tmp4.sectionHeader;
        cResult[7] = tmp4.sectionHeaderWithTag;
        cResult[8] = items1;
        tmp11 = items1;
      }
    }
  }
  const tmp10 = state(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  cResult[1] = obtainableOrbRewards;
  cResult[2] = orbShopProducts;
  cResult[3] = shopCarouselConfig;
  cResult[4] = showOrbShopPlaceholderCarousel;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const obj = { children: null };
  const items = [state(closure_22, {}), state(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel }), ];
  const obj2 = { style: null, children: null };
  const items1 = [, ];
  ({ sectionHeader: arr2[0], sectionHeaderWithTag: arr2[1] } = closure_17());
  obj2.style = items1;
  const obj3 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.JALI2K);
  obj2.children = state(Text_Text.Text, obj3);
  items[2] = state(hasOwnProperty, obj2);
  obj.children = items;
  return value2(closure_1_15, obj);
});
ReactCompilerGating = fn(558);
let closure_24 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ shouldShowBounties, onLayout, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  if (cResult[0] === obtainableOrbRewards) {
    if (cResult[1] === orbShopProducts) {
      if (cResult[2] === shopCarouselConfig) {
        if (cResult[3] === shouldShowBounties) {
          if (cResult[4] === showOrbShopPlaceholderCarousel) {
            if (cResult[6] === onLayout) {
              if (cResult[7] === tmp2) {
                let tmp7 = cResult[8];
              }
              return tmp7;
            }
            const obj2 = { onLayout, children: cResult[5] };
            const tmp10 = state(hasOwnProperty, obj2);
            cResult[6] = onLayout;
            cResult[7] = cResult[5];
            cResult[8] = tmp10;
            tmp7 = tmp10;
          }
        }
      }
    }
  }
  if (shouldShowBounties) {
    const obj3 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    let tmp3Result = state(closure_23, obj3);
  } else {
    tmp3Result = state(closure_22, {});
  }
  cResult[0] = obtainableOrbRewards;
  cResult[1] = orbShopProducts;
  cResult[2] = shopCarouselConfig;
  cResult[3] = shouldShowBounties;
  cResult[4] = showOrbShopPlaceholderCarousel;
  cResult[5] = tmp3Result;
}) : ((onLayout) => {
  const obj = { onLayout: onLayout.onLayout, children: null };
  if (onLayout.shouldShowBounties) {
    const obj2 = { shopCarouselConfig: tmp4, orbShopProducts: tmp, obtainableOrbRewards: tmp2, showOrbShopPlaceholderCarousel: tmp3 };
    let tmp5Result = state(closure_23, obj2);
  } else {
    tmp5Result = state(closure_22, {});
  }
  obj.children = tmp5Result;
  return state(hasOwnProperty, obj);
}));
ReactCompilerGating = fn(558);
let obj6 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = scrollToQuestId(quests[13]).c(115);
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = arg0);
  ({ filters, sortMethod, onClearFilters } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = scrollToQuestId(tmp2[28]).getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    let first = isEligibleForQuests;
    const tmpResult = scrollToQuestId(tmp2[28]);
  } else {
    first = cResult[0];
  }
  shopCarouselConfig();
  const bottom = first(tmp2[29])().bottom;
  if (cResult[1] === filters) {
    if (cResult[2] === sortMethod) {
      let tmp7 = cResult[3];
    }
    const filteredQuests = scrollToQuestId(tmp2[25]).useFilteredQuests(scrollToQuestId(tmp2[25]).QuestTabs.ALL, tmp7);
    quests = filteredQuests.quests;
    const excludedQuests = filteredQuests.excludedQuests;
    const isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
    const hasFetched = filteredQuests.hasFetched;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [QuestStore];
      class H {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => !scrollToQuestId(quests[30]).isQuestExpired(item));
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      const items1 = [];
      cResult[4] = items;
      cResult[5] = H;
      cResult[6] = items1;
      let tmp11 = items1;
      let tmp10 = H;
      let tmp9 = items;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const tmpResult4 = scrollToQuestId(tmp2[25]);
    const stateFromStoresArray = scrollToQuestId(tmp2[14]).useStateFromStoresArray(tmp9, tmp10, tmp11);
    if (cResult[7] !== stateFromStoresArray) {
      class V {
        constructor() {
          if (closure_6.length > 0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[31]);
            markAdContentSeenResult = obj.markAdContentSeen(closure_0(closure_2[32]).AdCreativeType.QUEST, tmp);
          }
          return;
        }
      }
      const items2 = [stateFromStoresArray];
      class H {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => !scrollToQuestId(quests[30]).isQuestExpired(item));
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[7] = stateFromStoresArray;
      cResult[8] = V;
      cResult[9] = items2;
      let tmp15 = items2;
    } else {
      class V {
        constructor() {
          if (closure_6.length > 0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[31]);
            markAdContentSeenResult = obj.markAdContentSeen(closure_0(closure_2[32]).AdCreativeType.QUEST, tmp);
          }
          return;
        }
      }
      tmp15 = cResult[9];
    }
    const effect = isFetchingCurrentQuests.useEffect(V, tmp15);
    isFetchingCurrentQuests.useRef(null);
    if (null != scrollToQuestId) {
      class V {
        constructor() {
          if (closure_6.length > 0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[31]);
            markAdContentSeenResult = obj.markAdContentSeen(closure_0(closure_2[32]).AdCreativeType.QUEST, tmp);
          }
          return;
        }
      }
      const result = scrollToQuestId(tmp2[30]).findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      class H {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => !scrollToQuestId(quests[30]).isQuestExpired(item));
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[10] = excludedQuests;
      cResult[11] = quests;
      cResult[12] = scrollToQuestId;
      cResult[13] = result;
      const tmpResult6 = scrollToQuestId(tmp2[30]);
    }
    if (cResult[19] === excludedQuests) {
      class V {
        constructor() {
          if (closure_6.length > 0) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[31]);
            markAdContentSeenResult = obj.markAdContentSeen(closure_0(closure_2[32]).AdCreativeType.QUEST, tmp);
          }
          return;
        }
      }
    }
    const fn = function $() {
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
          const obj3 = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: null, icon: null, toastDurationMs: 5000 };
          const intl = util.intl;
          obj3.content = intl.string(util.t.sIyHuY);
          obj3.icon = _modDef4807;
          ToastActionCreatorsDefault.open(obj3);
          const obj5 = { quest_id: scrollToQuestId };
          AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj5);
          ref.current = scrollToQuestId;
        }
      }
    };
    const items3 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
    cResult[19] = excludedQuests;
    cResult[20] = hasFetched;
    cResult[21] = isFetchingCurrentQuests;
    cResult[22] = quests;
    cResult[23] = scrollToQuestId;
    cResult[24] = items3;
    cResult[25] = fn;
    const tmpResult5 = scrollToQuestId(tmp2[14]);
  }
  let obj2 = { filters, sortMethod };
  cResult[1] = filters;
  cResult[2] = sortMethod;
  cResult[3] = obj2;
  tmp7 = obj2;
  let obj = scrollToQuestId(quests[13]);
}) : ((filters) => {
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let quests;
  let ref;
  let isLoading;
  let questHomeBounties;
  let enabled;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  const isEligibleForQuests = scrollToQuestId(sortMethod[28]).getIsEligibleForQuests();
  let tmp4 = enabled();
  let obj = scrollToQuestId(sortMethod[28]);
  const tmp5 = filters;
  const items = [filters, sortMethod];
  const filteredQuests = scrollToQuestId(sortMethod[25]).useFilteredQuests(scrollToQuestId(sortMethod[25]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj2 = scrollToQuestId(sortMethod[25]);
  const items1 = [ref];
  const stateFromStoresArray = scrollToQuestId(sortMethod[14]).useStateFromStoresArray(items1, () => {
    quests = ref.quests;
    const found = Array.from(quests.values()).filter((item) => !scrollToQuestId(sortMethod[30]).isQuestExpired(item));
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
        const obj3 = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: null, icon: null, toastDurationMs: 5000 };
        const intl = util.intl;
        obj3.content = intl.string(util.t.sIyHuY);
        obj3.icon = _modDef4807;
        ToastActionCreatorsDefault.open(obj3);
        const obj5 = { quest_id: scrollToQuestId };
        AnalyticsUtilsDefault.track(constants.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj5);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  const tmp11 = config({ scrollToIndex: memo });
  const scrollViewRef = tmp11.scrollViewRef;
  const handleQuestCardLayout = tmp11.handleQuestCardLayout;
  const handleHeaderLayout = tmp11.handleHeaderLayout;
  const visibilityRef = tmp11.visibilityRef;
  ({ handleListScroll, handleListLayout, handleListLoad } = tmp11);
  const tmp12 = scrollViewRef((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  let obj5 = { name: null, type: null, properties: null };
  let obj4 = scrollToQuestId(sortMethod[14]);
  obj5.name = scrollToQuestId(sortMethod[36]).ImpressionNames.QUEST_HOME;
  obj5.type = scrollToQuestId(sortMethod[36]).ImpressionTypes.VIEW;
  const tmp13 = filters(sortMethod[37]);
  obj5.properties = { utm_source_current: tmp12.utmSourceCurrent, utm_medium_current: tmp12.utmMediumCurrent, utm_campaign_current: tmp12.utmCampaignCurrent, utm_content_current: tmp12.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL };
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
  const obj6 = { utm_source_current: tmp12.utmSourceCurrent, utm_medium_current: tmp12.utmMediumCurrent, utm_campaign_current: tmp12.utmCampaignCurrent, utm_content_current: tmp12.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL };
  const questHomeSortingFilteringAnalytics = scrollToQuestId(sortMethod[25]).useQuestHomeSortingFilteringAnalytics({ selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length });
  const obj7 = scrollToQuestId(sortMethod[25]);
  const obj8 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  enabled = scrollToQuestId(sortMethod[39]).useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[40]).QuestHomeBountiesFeatureGateExperiment;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[41]).OrbsHoldoutExperiment;
  const obj10 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const obj11 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const obj9 = scrollToQuestId(sortMethod[39]);
  const tmp18 = handleQuestCardLayout;
  const params = scrollToQuestId(sortMethod[42]).useRoute().params;
  let previewAdCreativeIds;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  const obj12 = scrollToQuestId(sortMethod[42]);
  const fetchQuestHomeBounties = scrollToQuestId(sortMethod[25]).useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect4 = obj3.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (!isLoading) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj2 = { bountyId: found.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
            BountiesModalActionCreatorsDefault.showModal(obj2);
          }
        }
      }
    }
  }, items7);
  if (enabled) {
    enabled = QuestHomeBountiesFeatureGateExperiment.useConfig(obj10).enabled;
  }
  if (enabled) {
    enabled = !OrbsHoldoutExperiment.useConfig(obj11).enabled;
  }
  if (enabled) {
    enabled = tmp(tmp2[45]).shouldShowBountiesGivenFilters(filters);
    const tmpResult4 = tmp(tmp2[45]);
  }
  const BountiesShopCarouselExperiment = tmp(tmp2[46]).BountiesShopCarouselExperiment;
  config = BountiesShopCarouselExperiment.useConfig({ location: tmp18.QUEST_HOME_MOBILE });
  const obj13 = { location: tmp18.QUEST_HOME_MOBILE };
  const tmpResult = scrollToQuestId(sortMethod[25]);
  let tmp23 = enabled;
  if (enabled) {
    tmp23 = "none" !== config.placement;
  }
  const questHomeOrbShopCarouselData = scrollToQuestId(sortMethod[47]).useQuestHomeOrbShopCarouselData({ enabled: tmp23, sortType: config.sortType });
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp26 = enabled;
  if (enabled) {
    tmp26 = !isLoading;
  }
  if (tmp26) {
    tmp26 = questHomeBounties.length > 0;
  }
  products({ bountiesAvailable: tmp26 });
  const items8 = [enabled, handleHeaderLayout, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items9 = [visibilityRef];
  const callback = obj3.useCallback(() => state(closure_24, { shouldShowBounties: enabled, onLayout: handleHeaderLayout, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel }), items8);
  const items10 = [quests, handleQuestCardLayout];
  const callback1 = obj3.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return state(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      questOrQuests: item,
      questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      skipRemountKey: true,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      children() {
        return previewAdCreativeIds(scrollToQuestId(sortMethod[49]).QuestCard, { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[43]).QuestContent.QUEST_HOME_MOBILE });
      }
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
    let tmp32 = enabled;
    if (enabled) {
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
  quests.useRef(enabled);
  const items11 = [enabled];
  const effect5 = obj3.useEffect(() => {
    closure_23.current = enabled;
  }, items11);
  const items12 = [isEligibleForQuests];
  const effect6 = obj3.useEffect(() => {
    if (isEligibleForQuests) {
      const obj2 = { includesBounties: ref2.current };
      QuestHomeRoundtripTrackerDefault.startTracking(obj2);
      return () => {
        filters(sortMethod[50]).clearTracking();
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
  scrollToQuestId(sortMethod[25]);
  if (!isEligibleForQuests) {
    return null;
  } else if (tmp31) {
    const obj15 = { style: null, children: null };
    const items14 = [tmp4.loadingContainer, containerStyle];
    obj15.style = items14;
    tmp4 = isFetchingCurrentQuests;
    obj15.children = previewAdCreativeIds(isFetchingCurrentQuests, { animating: true });
    let tmp48Result = previewAdCreativeIds(excludedQuests, obj15);
  } else if (0 === quests.length) {
    if (0 === filters.length) {
      let tmp41 = previewAdCreativeIds(obtainableOrbRewards, {});
    } else {
      const obj16 = { onClearFilters: filters.onClearFilters };
      tmp41 = previewAdCreativeIds(showPlaceholderCarousel, obj16);
    }
  } else {
    const obj17 = { ref: scrollViewRef, contentContainerStyle: null, style: null, accessibilityLabel: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, CellRendererComponent: null, onLayout: null, onScroll: null, onLoad: null, scrollEventThrottle: 16 };
    let num4 = 0;
    if (tmp37) {
      num4 = tmp5(tmp2[11]).space.PX_16;
    }
    const obj18 = { paddingTop: num4, paddingBottom: filters(sortMethod[29])().bottom };
    obj17.contentContainerStyle = obj18;
    const items15 = [tmp4.container, containerStyle];
    obj17.style = items15;
    let intl = tmp(tmp2[20]).intl;
    obj17.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
    obj17.data = quests;
    obj17.renderItem = callback1;
    obj17.ListHeaderComponent = callback;
    obj17.CellRendererComponent = callback2;
    obj17.onLayout = handleListLayout;
    obj17.onScroll = handleListScroll;
    obj17.onLoad = handleListLoad;
    tmp48Result = previewAdCreativeIds(tmp(tmp2[51]).FlashList, obj17);
  }
}));