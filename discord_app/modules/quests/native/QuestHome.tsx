// === Module 14826: QuestHome ===

// Module 14826 (QuestHome)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useNavigation from "useNavigation" /* 1490 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4813 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10924 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10971 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14827 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14829 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 14882 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 14884 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 14905 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 14986 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10922 */;
import QuestStore from "QuestStore" /* 7200 */;
import QuestUtmStore from "QuestUtmStore" /* 7220 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let bountiesAvailable, dependencyMap, item, navigation, scrollToIndex;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, loadingContainer: obj2, sectionHeader: obj3, previewButton: obj4, sectionHeaderWithTag: obj5 };
obj2 = { justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollToIndex) => {
  let ref;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp9;
  const tmp = scrollToIndex;
  let tmp2 = ref;
  let obj = scrollToIndex(ref[13]);
  const cResult = obj.c(21);
  scrollToIndex = scrollToIndex.scrollToIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [P];
    const fn = function l() {
      return P.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  ref = C.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { parent: { scrollY: 0 }, children: {} };
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const ref1 = obj3.useRef(tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
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
      }
    }
    cResult[3] = C;
    tmp11 = C;
  } else {
    class C {
      constructor(arg0) {
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
      }
    }
  }
  C = tmp11;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
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
      }
    }
    cResult[4] = tmp13;
  } else {
    class C {
      constructor(arg0) {
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
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
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
      }
    }
    cResult[5] = tmp15;
  } else {
    class C {
      constructor(arg0) {
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
      }
    }
  }
  const tmp16 = ref1(C.useState(false), 2);
  const first = tmp16[0];
  let closure_6 = tmp16[1];
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        closure_6(true);
      }
    }
    cResult[6] = L;
  } else {
    class L {
      constructor() {
        closure_6(true);
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(nativeEvent, arg1) {
        const children = ref1.current.children;
        const obj = { layout: nativeEvent.nativeEvent.layout };
        const merged = Object.assign(ref1.current.children[arg1]);
        children[arg1] = obj;
        C(arg1);
      }
    }
    cResult[7] = A;
  } else {
    class A {
      constructor(nativeEvent, arg1) {
        const children = ref1.current.children;
        const obj = { layout: nativeEvent.nativeEvent.layout };
        const merged = Object.assign(ref1.current.children[arg1]);
        children[arg1] = obj;
        C(arg1);
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class P {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = P;
  } else {
    class P {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
  }
  P = tmp20;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(nativeEvent) {
        ref1.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
        C();
      }
    }
    cResult[10] = H;
  } else {
    class H {
      constructor(nativeEvent) {
        ref1.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
        C();
      }
    }
  }
  if (cResult[11] === first) {
    class H {
      constructor(nativeEvent) {
        ref1.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
        C();
      }
    }
  }
  const fn2 = function x() {
    const tmp2 = null != scrollToIndex && -1 !== scrollToIndex && first;
    if (tmp2) {
      P(scrollToIndex);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  };
  cResult[11] = first;
  cResult[12] = tmp20;
  cResult[13] = scrollToIndex;
  cResult[14] = fn2;
}) : ((scrollToIndex) => {
  scrollToIndex = scrollToIndex.scrollToIndex;
  let scrollViewRef;
  let callback;
  let callback5;
  let obj = scrollToIndex(scrollViewRef[14]);
  const items = [callback5];
  const stateFromStores = obj.useStateFromStores(items, () => callback5.useReducedMotion);
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
  let closure_6 = tmp7[1];
  const items3 = [callback];
  const handleListLoad = callback.useCallback(() => {
    closure_6(true);
  }, []);
  const items4 = [stateFromStores];
  const handleQuestCardLayout = callback.useCallback((nativeEvent, arg1) => {
    const children = visibilityRef.current.children;
    const obj = { layout: nativeEvent.nativeEvent.layout };
    const merged = Object.assign(visibilityRef.current.children[arg1]);
    children[arg1] = obj;
    callback(arg1);
  }, items3);
  callback5 = callback.useCallback((index) => {
    if (null != scrollViewRef.current) {
      const current = tmp.current;
      scrollToIndex = current.scrollToIndex;
      const obj = { index, animated: !stateFromStores, viewOffset: nativeDefault.space.PX_8 };
      scrollToIndex(obj);
    }
  }, items4);
  const items5 = [callback];
  const items6 = [first, stateFromStores, scrollToIndex, callback5];
  const handleHeaderLayout = callback.useCallback((nativeEvent) => {
    visibilityRef.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items5);
  const effect = callback.useEffect(() => {
    const tmp2 = null != scrollToIndex && -1 !== scrollToIndex && first;
    if (tmp2) {
      callback5(scrollToIndex);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  }, items6);
  return { scrollViewRef, handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout, handleHeaderLayout, visibilityRef };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((bountiesAvailable) => {
  let closure_2;
  let closure_4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = bountiesAvailable(576);
  const cResult = obj.c(10);
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  const obj2 = bountiesAvailable(1490);
  navigation = obj2.useNavigation();
  dependencyMap = react.useRef(false);
  let closure_3 = react.useRef(false);
  react = react.useRef(false);
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
    tmp4 = items;
    tmp3 = fn;
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
      let obj = navigation(closure_2[17]);
      const subscription = obj.subscribe("MODAL_PUSH", handleBountiesModalPush);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp7 = items1;
    tmp6 = fn2;
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
      let obj = navigation(closure_2[17]);
      const subscription = obj.subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      };
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp10 = items2;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const effect2 = obj3.useEffect(tmp9, tmp10);
  if (cResult[7] !== navigation) {
    const fn4 = function h() {
      let ref;
      let ref2;
      let ref3;
      return navigation.addListener("beforeRemove", () => {
        if (ref.current) {
          if (ref3.current) {
            const obj = bountiesAvailable(ref[18]);
            obj.fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
          } else {
            const current = ref2.current;
            const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
            bountiesAvailable(ref[18]);
            const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
            if (current) {
              fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
            } else {
              fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
            }
          }
        }
      });
    };
    const items3 = [navigation];
    cResult[7] = navigation;
    cResult[8] = fn4;
    cResult[9] = items3;
    tmp13 = items3;
    tmp12 = fn4;
  } else {
    tmp12 = cResult[8];
    tmp13 = cResult[9];
  }
  const effect3 = obj3.useEffect(tmp12, tmp13);
}) : ((bountiesAvailable) => {
  let closure_2;
  let closure_4;
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  react = undefined;
  let obj = bountiesAvailable(1490);
  navigation = obj.useNavigation();
  dependencyMap = react.useRef(false);
  let closure_3 = react.useRef(false);
  react = react.useRef(false);
  const items = [bountiesAvailable];
  const effect = react.useEffect(() => {
    if (bountiesAvailable) {
      closure_2.current = true;
    }
  }, items);
  const effect1 = react.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === bountiesAvailable(closure_2[16]).BOUNTIES_MODAL_KEY) {
        closure_1_3.current = true;
      }
    }
    let obj = navigation(closure_2[17]);
    const subscription = obj.subscribe("MODAL_PUSH", handleBountiesModalPush);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
    };
  }, []);
  const effect2 = react.useEffect(() => {
    function handleClaimSuccess() {
      closure_1_4.current = true;
    }
    let obj = navigation(closure_2[17]);
    const subscription = obj.subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items1 = [navigation];
  const effect3 = react.useEffect(() => {
    let ref;
    let ref2;
    let ref3;
    return navigation.addListener("beforeRemove", () => {
      if (ref.current) {
        if (ref3.current) {
          const obj = bountiesAvailable(ref[18]);
          obj.fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        } else {
          const current = ref2.current;
          const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
          bountiesAvailable(ref[18]);
          const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
          if (current) {
            fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
          } else {
            fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
          }
        }
      }
    });
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj4;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      return navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["/g10LC"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const obj3 = { action: authStore2(components_Button_Button.Button, obj4) };
    obj4 = { variant: "secondary", text: tmp6, onPress: tmp5 };
    const tmp11 = QuestHomeEmptyStateDefault;
    const tmp12 = authStore2(tmp11, obj3);
    cResult[3] = tmp5;
    cResult[4] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (() => {
  let Button;
  let intl;
  let obj3;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => navigation.goBack(), items);
  const obj2 = { action: authStore2(Button, obj3) };
  obj3 = { variant: "secondary", text: intl.string(intl4.t["/g10LC"]), onPress: callback };
  const tmp3 = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return authStore2(tmp3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClearFilters) => {
  let first;
  let tmp10;
  let tmp13;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  onClearFilters = onClearFilters.onClearFilters;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.urZl31);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onClearFilters) {
    const obj2 = { variant: "secondary", text: first, onPress: onClearFilters };
    const tmp8 = authStore2(components_Button_Button.Button, obj2);
    cResult[1] = onClearFilters;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.PBfFnx);
    const intl3 = intl4.intl;
    const stringResult2 = intl3.string(intl4.t.nwdKFC);
    cResult[3] = stringResult1;
    cResult[4] = stringResult2;
    tmp10 = stringResult2;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const obj3 = { action: tmp6, title: tmp9, subtitle: tmp10 };
    const tmp16 = authStore2(QuestHomeEmptyStateDefault, obj3);
    cResult[5] = tmp6;
    cResult[6] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[6];
  }
  return tmp13;
}) : ((onClearFilters) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  onClearFilters = onClearFilters.onClearFilters;
  const obj = { action: authStore2(Button, obj2), title: intl2.string(intl4.t.PBfFnx), subtitle: intl3.string(intl4.t.nwdKFC) };
  obj2 = { variant: "secondary", text: intl.string(intl4.t.urZl31), onPress: onClearFilters };
  const tmp = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return authStore2(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let QUEST_PREVIEW_TOOL_2;
  let first;
  let intl;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ModalActionCreatorsDefault;
      obj.popAll();
      const obj2 = require("openUserSettings");
      const obj3 = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
      obj2.openUserSettings(obj3);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp6 = null;
  const tmpResult = hooks_QuestHooks;
  if (tmpResult.useShouldShowPreviewToolTab()) {
    let tmp7;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { grow: true, onPress: first, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
      const Button = components_Button_Button.Button;
      intl = intl4.intl;
      const tmp9 = authStore2(Button, obj2);
      cResult[1] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] !== tmp4.previewButton) {
      let obj3 = { style: tmp4.previewButton, children: tmp7 };
      const tmp13 = authStore2(hasOwnProperty, obj3);
      cResult[2] = tmp4.previewButton;
      cResult[3] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    tmp6 = tmp10;
  }
  return tmp6;
}) : (() => {
  let Button;
  let QUEST_PREVIEW_TOOL_2;
  let intl;
  let obj3;
  const tmp = closure_17();
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    const obj2 = require("openUserSettings");
    const obj3 = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    obj2.openUserSettings(obj3);
  }, []);
  let obj = hooks_QuestHooks;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    let obj2 = { style: tmp.previewButton, children: authStore2(Button, obj3) };
    obj3 = { grow: true, onPress: callback, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
    Button = components_Button_Button.Button;
    intl = intl4.intl;
    tmp5 = authStore2(hasOwnProperty, obj2);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let intl;
  let items;
  let obtainableOrbRewards;
  let orbShopProducts;
  let shopCarouselConfig;
  let showOrbShopPlaceholderCarousel;
  const obj = react2;
  const cResult = obj.c(15);
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = authStore2(closure_22, {});
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === obtainableOrbRewards) {
    if (cResult[2] === orbShopProducts) {
      if (cResult[3] === shopCarouselConfig) {
        let tmp9;
        if (cResult[4] === showOrbShopPlaceholderCarousel) {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp4.sectionHeader) {
          let tmp11;
          let tmp12;
          let tmp15;
          if (cResult[7] === tmp4.sectionHeaderWithTag) {
            tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
            const Text = Text_Text.Text;
            intl = intl4.intl;
            const tmp14 = authStore2(Text, obj2);
            cResult[9] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== tmp11) {
            const obj3 = { style: tmp11, children: tmp12 };
            const tmp18 = authStore2(hasOwnProperty, obj3);
            cResult[10] = tmp11;
            cResult[11] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp9) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
          const obj4 = { children: items };
          items = [first, tmp9, tmp15];
          const tmp22 = authStore3(closure_15, obj4);
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
  const tmp10 = authStore2(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  cResult[1] = obtainableOrbRewards;
  cResult[2] = orbShopProducts;
  cResult[3] = shopCarouselConfig;
  cResult[4] = showOrbShopPlaceholderCarousel;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let Text;
  let intl;
  let items;
  let items1;
  let obj3;
  let obtainableOrbRewards;
  let orbShopProducts;
  let shopCarouselConfig;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const obj = { children: items };
  items = [, , ];
  const tmp = closure_17();
  items[0] = authStore2(closure_22, {});
  items[1] = authStore2(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  const obj2 = { style: items1, children: authStore2(Text, obj3) };
  items1 = [, ];
  ({ sectionHeader: arr2[0], sectionHeaderWithTag: arr2[1] } = tmp);
  obj3 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  items[2] = authStore2(hasOwnProperty, obj2);
  return authStore3(closure_15, obj);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obtainableOrbRewards;
  let onLayout;
  let orbShopProducts;
  let shopCarouselConfig;
  let shouldShowBounties;
  let showOrbShopPlaceholderCarousel;
  let tmp3Result;
  const obj = react2;
  const cResult = obj.c(9);
  ({ shouldShowBounties, onLayout, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  if (cResult[0] === obtainableOrbRewards) {
    if (cResult[1] === orbShopProducts) {
      if (cResult[2] === shopCarouselConfig) {
        if (cResult[3] === shouldShowBounties) {
          let tmp2;
          if (cResult[4] === showOrbShopPlaceholderCarousel) {
            tmp2 = cResult[5];
          }
          if (cResult[6] === onLayout) {
            let tmp7;
            if (cResult[7] === tmp2) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
          const obj2 = { onLayout, children: tmp2 };
          const tmp10 = authStore2(hasOwnProperty, obj2);
          cResult[6] = onLayout;
          cResult[7] = tmp2;
          cResult[8] = tmp10;
          tmp7 = tmp10;
        }
      }
    }
  }
  if (shouldShowBounties) {
    const obj3 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    tmp3Result = authStore2(closure_23, obj3);
  } else {
    tmp3Result = authStore2(closure_22, {});
  }
  cResult[0] = obtainableOrbRewards;
  cResult[1] = orbShopProducts;
  cResult[2] = shopCarouselConfig;
  cResult[3] = shouldShowBounties;
  cResult[4] = showOrbShopPlaceholderCarousel;
  cResult[5] = tmp3Result;
  tmp2 = tmp3Result;
}) : ((onLayout) => {
  let tmp5Result;
  const obj = { onLayout: onLayout.onLayout, children: tmp5Result };
  if (onLayout.shouldShowBounties) {
    const obj2 = { shopCarouselConfig: tmp4, orbShopProducts: tmp, obtainableOrbRewards: tmp2, showOrbShopPlaceholderCarousel: tmp3 };
    tmp5Result = authStore2(closure_23, obj2);
  } else {
    tmp5Result = authStore2(closure_22, {});
  }
  return authStore2(hasOwnProperty, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let filters;
  let first;
  let id;
  let isNavigationComplete;
  let length;
  let obtainableOrbRewards;
  let onClearFilters;
  let onLayout;
  let orbShopProducts;
  let quests;
  let ref2;
  let ref3;
  let scrollToQuestId;
  let showOrbShopPlaceholderCarousel;
  let sortMethod;
  let visibilityRef;
  let tmp2 = quests;
  let obj = scrollToQuestId(quests[13]);
  const cResult = obj.c(115);
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = arg0);
  ({ filters, sortMethod, onClearFilters } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = scrollToQuestId(tmp2[28]);
    const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    first = isEligibleForQuests;
  } else {
    first = cResult[0];
  }
  shopCarouselConfig();
  const bottom = first(tmp2[29])().bottom;
  if (cResult[1] === filters) {
    let tmp7;
    let tmp11;
    let tmp10;
    let tmp9;
    let tmp15;
    if (cResult[2] === sortMethod) {
      tmp7 = cResult[3];
    }
    const tmpResult4 = scrollToQuestId(tmp2[25]);
    const filteredQuests = tmpResult4.useFilteredQuests(scrollToQuestId(tmp2[25]).QuestTabs.ALL, tmp7);
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
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[30]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      const items1 = [];
      cResult[4] = items;
      cResult[5] = H;
      cResult[6] = items1;
      tmp11 = items1;
      tmp10 = H;
      tmp9 = items;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const tmpResult5 = scrollToQuestId(tmp2[14]);
    const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp9, tmp10, tmp11);
    if (cResult[7] !== stateFromStoresArray) {
      class V {
        constructor() {
          if (stateFromStoresArray.length > 0) {
            const obj = QuestActionCreators;
            obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
          }
        }
      }
      const items2 = [stateFromStoresArray];
      class H {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[30]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[7] = stateFromStoresArray;
      cResult[8] = V;
      cResult[9] = items2;
      tmp15 = items2;
    } else {
      class V {
        constructor() {
          if (stateFromStoresArray.length > 0) {
            const obj = QuestActionCreators;
            obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
          }
        }
      }
      tmp15 = cResult[9];
    }
    const effect = isFetchingCurrentQuests.useEffect(V, tmp15);
    const ref = isFetchingCurrentQuests.useRef(null);
    if (null != scrollToQuestId) {
      class V {
        constructor() {
          if (stateFromStoresArray.length > 0) {
            const obj = QuestActionCreators;
            obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
          }
        }
      }
      const tmpResult6 = scrollToQuestId(tmp2[30]);
      const result = tmpResult6.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      class H {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[30]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[10] = excludedQuests;
      cResult[11] = quests;
      cResult[12] = scrollToQuestId;
      cResult[13] = result;
    }
    if (cResult[19] === excludedQuests) {
      class V {
        constructor() {
          if (stateFromStoresArray.length > 0) {
            const obj = QuestActionCreators;
            obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
          }
        }
      }
    }
    const fn = function $() {
      let intl;
      const tmp2 = null != scrollToQuestId && "" !== scrollToQuestId && hasFetched && !isFetchingCurrentQuests;
      if (tmp2) {
        const obj = QuestDataUtils;
        const tmp8 = null == obj.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests) && ref.current !== scrollToQuestId;
        if (tmp8) {
          const obj2 = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: intl.string(intl4.t.sIyHuY), icon: AssetRegistryDefault, toastDurationMs: 5000 };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl4.intl;
          open(obj2);
          const obj4 = { quest_id: scrollToQuestId };
          const obj3 = AnalyticsUtilsDefault;
          obj3.track(visibilityRef.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj4);
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
  }
  let obj2 = { filters, sortMethod };
  cResult[1] = filters;
  cResult[2] = sortMethod;
  cResult[3] = obj2;
  tmp7 = obj2;
}) : ((filters) => {
  let containerStyle;
  let handleListLayout;
  let handleListLoad;
  let handleListScroll;
  let intl;
  let isNavigationComplete;
  let items14;
  let items15;
  let obj17;
  let scrollToQuestId;
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
  let ref2;
  let tmp = scrollToQuestId;
  let tmp2 = sortMethod;
  const onClearFilters = filters.onClearFilters;
  let obj = scrollToQuestId(sortMethod[28]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  const tmp4 = enabled();
  const tmp5 = filters;
  const bottom = filters(sortMethod[29])().bottom;
  const useFilteredQuests = scrollToQuestId(sortMethod[25]).useFilteredQuests;
  let obj2 = quests;
  const items = [filters, sortMethod];
  scrollToQuestId(sortMethod[25]);
  const filteredQuests = useFilteredQuests(scrollToQuestId(sortMethod[25]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj3 = scrollToQuestId(sortMethod[14]);
  const items1 = [ref];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    quests = ref.quests;
    const arr = Array.from(quests.values());
    const found = arr.filter((item) => {
      const obj = scrollToQuestId(sortMethod[30]);
      return !obj.isQuestExpired(item);
    });
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = quests.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
    }
  }, items2);
  ref = quests.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const memo = quests.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const obj = QuestDataUtils;
      const result = obj.findQuestOrReplacement(tmp, quests, excludedQuests);
      let findIndexResult = null;
      if (null != result) {
        findIndexResult = quests.findIndex((id) => id.id === result.id);
      }
      return findIndexResult;
    }
  }, items3);
  const effect1 = quests.useEffect(() => {
    let intl;
    const tmp2 = null != scrollToQuestId && "" !== scrollToQuestId && hasFetched && !isFetchingCurrentQuests;
    if (tmp2) {
      const obj = QuestDataUtils;
      const tmp8 = null == obj.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests) && ref.current !== scrollToQuestId;
      if (tmp8) {
        const obj2 = { key: "QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", content: intl.string(intl4.t.sIyHuY), icon: AssetRegistryDefault, toastDurationMs: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl4.intl;
        open(obj2);
        const obj4 = { quest_id: scrollToQuestId };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(handleHeaderLayout.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj4);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  const tmp12 = config({ scrollToIndex: memo });
  const scrollViewRef = tmp12.scrollViewRef;
  const handleQuestCardLayout = tmp12.handleQuestCardLayout;
  const handleHeaderLayout = tmp12.handleHeaderLayout;
  const visibilityRef = tmp12.visibilityRef;
  ({ handleListScroll, handleListLayout, handleListLoad } = tmp12);
  const tmp13 = scrollViewRef((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  let obj4 = { name: scrollToQuestId(sortMethod[36]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[36]).ImpressionTypes.VIEW, properties: { utm_source_current: tmp13.utmSourceCurrent, utm_medium_current: tmp13.utmMediumCurrent, utm_campaign_current: tmp13.utmCampaignCurrent, utm_content_current: tmp13.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL } };
  const tmp14 = filters(sortMethod[37]);
  ({ utm_source_current: tmp13.utmSourceCurrent, utm_medium_current: tmp13.utmMediumCurrent, utm_campaign_current: tmp13.utmCampaignCurrent, utm_content_current: tmp13.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL });
  tmp14(obj4);
  const items5 = [isEligibleForQuests];
  const effect2 = quests.useEffect(() => {
    if (isEligibleForQuests) {
      const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items5);
  const items6 = [filters, sortMethod, hasFetched, scrollViewRef];
  const effect3 = quests.useEffect(() => {
    const tmp2 = null != scrollViewRef.current && hasFetched;
    if (tmp2) {
      const current = scrollViewRef.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items6);
  const obj6 = scrollToQuestId(sortMethod[25]);
  const obj7 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj6.useQuestHomeSortingFilteringAnalytics(obj7);
  const obj8 = scrollToQuestId(sortMethod[39]);
  enabled = obj8.useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[40]).QuestHomeBountiesFeatureGateExperiment;
  const obj9 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(obj9).enabled;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[41]).OrbsHoldoutExperiment;
  const obj10 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const enabled3 = OrbsHoldoutExperiment.useConfig(obj10).enabled;
  const obj11 = scrollToQuestId(sortMethod[42]);
  const params = obj11.useRoute().params;
  let previewAdCreativeIds;
  const tmp19 = handleQuestCardLayout;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  const tmpResult = tmp(tmp2[25]);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect4 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        if (!isLoading) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj = { bountyId: found.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
            const showModal = BountiesModalActionCreatorsDefault.showModal;
            BountiesModalActionCreatorsDefault;
            showModal(obj);
          }
        }
      }
    }
  }, items7);
  if (enabled) {
    enabled = enabled2;
  }
  if (enabled) {
    enabled = !enabled3;
  }
  if (enabled) {
    const tmpResult4 = tmp(tmp2[45]);
    enabled = tmpResult4.shouldShowBountiesGivenFilters(filters);
  }
  const BountiesShopCarouselExperiment = tmp(tmp2[46]).BountiesShopCarouselExperiment;
  const obj12 = { location: tmp19.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj12);
  let tmp25 = enabled;
  const useQuestHomeOrbShopCarouselData = tmp(tmp2[47]).useQuestHomeOrbShopCarouselData;
  tmp(tmp2[47]);
  if (enabled) {
    tmp25 = "none" !== config.placement;
  }
  const obj13 = { enabled: tmp25, sortType: config.sortType };
  const questHomeOrbShopCarouselData = useQuestHomeOrbShopCarouselData(obj13);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  let tmp28 = enabled;
  const tmp27 = products;
  if (enabled) {
    tmp28 = !isLoading;
  }
  if (tmp28) {
    tmp28 = questHomeBounties.length > 0;
  }
  tmp27({ bountiesAvailable: tmp28 });
  const items8 = [enabled, handleHeaderLayout, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items9 = [visibilityRef];
  const callback = obj2.useCallback(() => {
    const obj = { shouldShowBounties: enabled, onLayout: handleHeaderLayout, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
    return authStore2(closure_24, obj);
  }, items8);
  const items10 = [quests, handleQuestCardLayout];
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      questOrQuests: item,
      questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      skipRemountKey: true,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      children() {
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[43]).QuestContent.QUEST_HOME_MOBILE };
        const QuestCard = scrollToQuestId(sortMethod[49]).QuestCard;
        return previewAdCreativeIds(QuestCard, obj);
      }
    };
    const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
    return authStore2(QuestContentImpressionTrackerNative, obj);
  }, items9);
  let tmp33 = !isNavigationComplete;
  const callback2 = obj2.useCallback((arg0) => {
    const index = arg0;
    const obj = {
      onLayout(arg0) {
        if (null != quests[index.index]) {
          handleQuestCardLayout(arg0, quests[index.index].id);
        }
        index.onLayout(arg0);
      }
    };
    const merged = Object.assign(arg0);
    return previewAdCreativeIds(excludedQuests, obj);
  }, items10);
  if (isNavigationComplete) {
    tmp33 = enabled && isLoading;
  }
  if (!tmp33) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp33 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp33;
  ref2 = obj2.useRef(enabled);
  const items11 = [enabled];
  const effect5 = obj2.useEffect(() => {
    ref2.current = enabled;
  }, items11);
  const items12 = [isEligibleForQuests];
  const effect6 = obj2.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = QuestHomeRoundtripTrackerDefault;
      const obj2 = { includesBounties: ref2.current };
      obj.startTracking(obj2);
      return () => {
        const obj = filters(sortMethod[50]);
        obj.clearTracking();
      };
    }
  }, items12);
  const items13 = [isEligibleForQuests, tmp33];
  const effect7 = obj2.useEffect(() => {
    const tmp = isEligibleForQuests && !isFetchingCurrentQuests;
    if (tmp) {
      const obj2 = { includesBounties: ref2.current };
      const obj = QuestHomeRoundtripTrackerDefault;
      obj.stopTracking(obj2);
    }
  }, items13);
  tmp(tmp2[25]);
  let tmp40 = null;
  if (isEligibleForQuests) {
    let tmp50Result;
    if (tmp33) {
      const obj14 = { style: items14, children: previewAdCreativeIds(isFetchingCurrentQuests, { animating: true }) };
      items14 = [tmp4.loadingContainer, containerStyle];
      tmp50Result = previewAdCreativeIds(excludedQuests, obj14);
    } else if (0 === quests.length) {
      let tmp44;
      if (0 === filters.length) {
        tmp44 = previewAdCreativeIds(obtainableOrbRewards, {});
      } else {
        const obj15 = { onClearFilters };
        tmp44 = previewAdCreativeIds(showPlaceholderCarousel, obj15);
      }
      tmp50Result = tmp44;
    } else {
      let num4 = 0;
      const obj16 = { ref: scrollViewRef, contentContainerStyle: obj17, style: items15, accessibilityLabel: intl.string(tmp(tmp2[20]).t.JALI2K), data: quests, renderItem: callback1, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback, CellRendererComponent: callback2, onLayout: handleListLayout, onScroll: handleListScroll, onLoad: handleListLoad, scrollEventThrottle: 16 };
      const FlashList = tmp(tmp2[51]).FlashList;
      const tmp50 = previewAdCreativeIds;
      if (tmp39) {
        num4 = tmp5(tmp2[11]).space.PX_16;
      }
      items15 = [tmp4.container, containerStyle];
      obj17 = { paddingTop: num4, paddingBottom: bottom };
      intl = tmp(tmp2[20]).intl;
      tmp50Result = tmp50(FlashList, obj16);
    }
    tmp40 = tmp50Result;
  }
  return tmp40;
}));
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;