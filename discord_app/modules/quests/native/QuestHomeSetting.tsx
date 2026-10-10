// === Module 15254: QuestHomeSetting ===

// Module 15254 (QuestHomeSetting)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useNavigation from "useNavigation" /* 1503 */;
import _mod4733 from "module_4733" /* 4733 */;
import useQuestHomeHeaderDefault from "useQuestHomeHeader" /* 15255 */;
import QuestHomeDefault from "QuestHome" /* 15259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9168 */;

require = fn;
const QuestConstants = fn(5972);
({ QuestHomeSortMethods: metroRequire, getQuestHomeFilterOptionItem: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFinishedNavigating() {
  const cResult = c.c(3);
  const navigation = useNavigation.useNavigation();
  [tmp4, importDefault] = noop.useState(false);
  if (cResult[0] !== navigation) {
    const fn = function o() {
      return navigation.addListener("transitionEnd", () => closure_1_1(true));
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  return tmp4;
}) : (function useFinishedNavigating() {
  const navigation = useNavigation.useNavigation();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2[1];
  const items = [navigation];
  const effect = noop.useEffect(() => navigation.addListener("transitionEnd", () => closure_1_1(true)), items);
  return tmp2[0];
});
let closure_11 = [];
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeSetting() {
  const cResult = c.c(16);
  const tmp3 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let SUGGESTED = QuestHomeNavigationStore.getField("sort");
      if (null == SUGGESTED) {
        SUGGESTED = constants.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(constants);
      }
      return SUGGESTED;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  [tmp7, tmp8] = noop.useState(first);
  const require = tmp8;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const str = QuestHomeNavigationStore.getField("filter");
      if (null == str) {
        let found = closure_1_11;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((item) => closure_1_7(item));
        found = mapped.filter((item) => null != item);
        if (found.length <= 0) {
          found = closure_1_11;
        }
      }
      return found;
    };
    cResult[1] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
  }
  const tmp6 = _slicedToArray(noop.useState(first), 2);
  [tmp11, tmp12] = noop.useState(tmp9);
  importDefault = tmp12;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
        return closure_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
          if (self.sort !== self2.sort) {
            let SUGGESTED = self.sort;
            if (null == SUGGESTED) {
              SUGGESTED = constants.SUGGESTED;
            } else {
              const _Object = Object;
              const values = Object.values(constants);
            }
            closure_1_0(SUGGESTED);
          }
          if (self.filter !== self2.filter) {
            if (null == self.filter) {
              let found = closure_2_11;
            } else {
              const parts = str.split(",");
              const mapped = parts.map((item) => closure_1_7(item));
              found = mapped.filter((item) => null != item);
              if (found.length <= 0) {
                found = closure_2_11;
              }
            }
            closure_1_1(found);
          }
        }, obj);
      }
    }
    const items = [];
    cResult[2] = E;
    cResult[3] = items;
    let tmp14 = items;
  } else {
    class E {
      constructor() {
        obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
        return closure_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
          if (self.sort !== self2.sort) {
            let SUGGESTED = self.sort;
            if (null == SUGGESTED) {
              SUGGESTED = constants.SUGGESTED;
            } else {
              const _Object = Object;
              const values = Object.values(constants);
            }
            closure_1_0(SUGGESTED);
          }
          if (self.filter !== self2.filter) {
            if (null == self.filter) {
              let found = closure_2_11;
            } else {
              const parts = str.split(",");
              const mapped = parts.map((item) => closure_1_7(item));
              found = mapped.filter((item) => null != item);
              if (found.length <= 0) {
                found = closure_2_11;
              }
            }
            closure_1_1(found);
          }
        }, obj);
      }
    }
    tmp14 = cResult[3];
  }
  const effect = noop.useEffect(E, tmp14);
  const tmp16 = closure_10();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        tmp = closure_1(closure_11);
        return;
      }
    }
    cResult[4] = N;
  } else {
    class N {
      constructor() {
        tmp = closure_1(closure_11);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return () => {
          closure_1_1(closure_1_2[11]).close();
          closure_1_5.resetState();
        };
      }
    }
    const items1 = [];
    cResult[5] = H;
    cResult[6] = items1;
    let tmp19 = items1;
  } else {
    class H {
      constructor() {
        return () => {
          closure_1_1(closure_1_2[11]).close();
          closure_1_5.resetState();
        };
      }
    }
    tmp19 = cResult[6];
  }
  const effect1 = noop.useEffect(H, tmp19);
  const field = QuestHomeNavigationStore.useField("scrollToQuestId");
  if (cResult[7] === tmp11) {
    class H {
      constructor() {
        return () => {
          closure_1_1(closure_1_2[11]).close();
          closure_1_5.resetState();
        };
      }
    }
    useQuestHomeHeaderDefault(obj4);
    if (cResult[10] === tmp16) {
      class H {
        constructor() {
          return () => {
            closure_1_1(closure_1_2[11]).close();
            closure_1_5.resetState();
          };
        }
      }
    }
    const obj3 = { containerStyle: tmp3.container, isNavigationComplete: tmp16, scrollToQuestId: field, sortMethod: tmp7, filters: tmp11, onClearFilters: N };
    const tmp26 = jsx(QuestHomeDefault, { containerStyle: tmp3.container, isNavigationComplete: tmp16, scrollToQuestId: field, sortMethod: tmp7, filters: tmp11, onClearFilters: N });
    cResult[10] = tmp16;
    cResult[11] = field;
    cResult[12] = tmp11;
    cResult[13] = tmp7;
    cResult[14] = tmp3.container;
    cResult[15] = tmp26;
  }
  obj4 = { setSelectedSortMethod: tmp8, setSelectedFilters: tmp12, selectedFilters: tmp11, selectedSortMethod: tmp7 };
  cResult[7] = tmp11;
  cResult[8] = tmp7;
  cResult[9] = obj4;
  const tmp5Result = _slicedToArray(noop.useState(tmp9), 2);
}) : (function QuestHomeSetting() {
  const tmp = closure_9();
  [tmp3, tmp4] = noop.useState(() => {
    let SUGGESTED = QuestHomeNavigationStore.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  });
  const require = tmp4;
  const tmp2 = _slicedToArray(noop.useState(() => {
    let SUGGESTED = QuestHomeNavigationStore.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  }), 2);
  [tmp6, tmp7] = noop.useState(() => {
    const str = QuestHomeNavigationStore.getField("filter");
    if (null == str) {
      let found = closure_1_11;
    } else {
      const parts = str.split(",");
      const mapped = parts.map((item) => closure_1_7(item));
      found = mapped.filter((item) => null != item);
      if (found.length <= 0) {
        found = closure_1_11;
      }
    }
    return found;
  });
  importDefault = tmp7;
  const effect = noop.useEffect(() => QuestHomeNavigationStore.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      let SUGGESTED = self.sort;
      if (null == SUGGESTED) {
        SUGGESTED = constants.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(constants);
      }
      closure_1_0(SUGGESTED);
    }
    if (self.filter !== self2.filter) {
      if (null == self.filter) {
        let found = closure_2_11;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((item) => closure_1_7(item));
        found = mapped.filter((item) => null != item);
        if (found.length <= 0) {
          found = closure_2_11;
        }
      }
      closure_1_1(found);
    }
  }, { equalityFn: _mod4733.shallow, fireImmediately: true }), []);
  const tmp5 = _slicedToArray(noop.useState(() => {
    const str = QuestHomeNavigationStore.getField("filter");
    if (null == str) {
      let found = closure_1_11;
    } else {
      const parts = str.split(",");
      const mapped = parts.map((item) => closure_1_7(item));
      found = mapped.filter((item) => null != item);
      if (found.length <= 0) {
        found = closure_1_11;
      }
    }
    return found;
  }), 2);
  const callback = noop.useCallback(() => {
    tmp7(closure_11);
  }, []);
  const effect1 = noop.useEffect(() => () => {
    closure_1_1(closure_1_2[11]).close();
    closure_1_5.resetState();
  }, []);
  const field = QuestHomeNavigationStore.useField("scrollToQuestId");
  useQuestHomeHeaderDefault({ setSelectedSortMethod: tmp4, setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: tmp3 });
  const tmp9 = closure_10();
  return jsx(QuestHomeDefault, { containerStyle: tmp.container, isNavigationComplete: closure_10(), scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback });
});