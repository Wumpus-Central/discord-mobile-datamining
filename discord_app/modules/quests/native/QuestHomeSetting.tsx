// discord_app/modules/quests/native/QuestHomeSetting.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import _slicedToArray2 from "../../../../_runtime/metro/04498__slicedToArray.js";
import useQuestHomeHeaderDefault from "useQuestHomeHeader.tsx";
import QuestHomeDefault from "QuestHome.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import QuestHomeNavigationStore from "../QuestHomeNavigationStore.tsx";
import QuestConstants from "../QuestConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
const f118116 = (item) => closure_1_7(item);
const f118117 = (item) => null != item;
({ QuestHomeSortMethods: metroRequire, getQuestHomeFilterOptionItem: metroImportDefault } = QuestConstants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_1;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = useNavigation;
      navigation = obj2.useNavigation();
      [tmp4, closure_129_1] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] !== navigation) {
        const fn = function o() {
          return navigation.addListener("transitionEnd", () => closure_1_1(true));
        };
        const items = [navigation];
        cResult[0] = navigation;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      return tmp4;
    }
  : () => {
      let closure_1;
      let first;
      const obj = useNavigation;
      navigation = obj.useNavigation();
      [first, closure_1] = react.useState(false);
      const items = [navigation];
      const effect = react.useEffect(() => navigation.addListener("transitionEnd", () => closure_1_1(true)), items);
      return first;
    };
let closure_11 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let closure_1;
      let first;
      let obj4;
      let tmp11;
      let tmp12;
      let tmp14;
      let tmp19;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(16);
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
        first = fn;
      } else {
        first = cResult[0];
      }
      [tmp7, tmp8] = react.useState(first);
      const require = tmp8;
      _slicedToArray(react.useState(first), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v() {
          let found;
          const str = QuestHomeNavigationStore.getField("filter");
          if (null == str) {
            found = closure_1_11;
          } else {
            const parts = str.split(",");
            const mapped = parts.map(f118116);
            found = mapped.filter(f118117);
            if (found.length <= 0) {
              found = closure_1_11;
            }
          }
          return found;
        };
        cResult[1] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[1];
      }
      [tmp11, tmp12] = react.useState(tmp9);
      importDefault = tmp12;
      _slicedToArray(react.useState(tmp9), 2);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
            return closure_5.subscribe(
              (self) => ({ sort: self.sort, filter: self.filter }),
              (self, self2) => {
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
                  let found;
                  if (null == self.filter) {
                    found = closure_2_11;
                  } else {
                    const parts = str.split(",");
                    const mapped = parts.map(f118116);
                    found = mapped.filter(f118117);
                    if (found.length <= 0) {
                      found = closure_2_11;
                    }
                  }
                  closure_1_1(found);
                }
              },
              obj,
            );
          }
        }
        const items = [];
        cResult[2] = E;
        cResult[3] = items;
        tmp14 = items;
      } else {
        class E {
          constructor() {
            obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
            return closure_5.subscribe(
              (self) => ({ sort: self.sort, filter: self.filter }),
              (self, self2) => {
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
                  let found;
                  if (null == self.filter) {
                    found = closure_2_11;
                  } else {
                    const parts = str.split(",");
                    const mapped = parts.map(f118116);
                    found = mapped.filter(f118117);
                    if (found.length <= 0) {
                      found = closure_2_11;
                    }
                  }
                  closure_1_1(found);
                }
              },
              obj,
            );
          }
        }
        tmp14 = cResult[3];
      }
      const effect = react.useEffect(E, tmp14);
      const tmp16 = closure_10();
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp12(closure_11);
          }
        }
        cResult[4] = T;
      } else {
        class T {
          constructor() {
            tmp12(closure_11);
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            return () => {
              const obj = closure_1_1(closure_1_2[11]);
              obj.close();
              closure_1_5.resetState();
            };
          }
        }
        const items1 = [];
        cResult[5] = O;
        cResult[6] = items1;
        tmp19 = items1;
      } else {
        class O {
          constructor() {
            return () => {
              const obj = closure_1_1(closure_1_2[11]);
              obj.close();
              closure_1_5.resetState();
            };
          }
        }
        tmp19 = cResult[6];
      }
      const effect1 = react.useEffect(O, tmp19);
      const field = QuestHomeNavigationStore.useField("scrollToQuestId");
      if (cResult[7] === tmp11) {
        class O {
          constructor() {
            return () => {
              const obj = closure_1_1(closure_1_2[11]);
              obj.close();
              closure_1_5.resetState();
            };
          }
        }
        useQuestHomeHeaderDefault(obj4);
        const tmp22 = importDefault;
        if (cResult[10] === tmp16) {
          class O {
            constructor() {
              return () => {
                const obj = closure_1_1(closure_1_2[11]);
                obj.close();
                closure_1_5.resetState();
              };
            }
          }
        }
        cResult[10] = tmp16;
        cResult[11] = field;
        cResult[12] = tmp11;
        cResult[13] = tmp7;
        cResult[14] = tmp3.container;
        cResult[15] = jsx(tmp22(14826), {
          containerStyle: tmp3.container,
          isNavigationComplete: tmp16,
          scrollToQuestId: field,
          sortMethod: tmp7,
          filters: tmp11,
          onClearFilters: T,
        });
        const tmp26 = jsx(tmp22(14826), {
          containerStyle: tmp3.container,
          isNavigationComplete: tmp16,
          scrollToQuestId: field,
          sortMethod: tmp7,
          filters: tmp11,
          onClearFilters: T,
        });
      }
      obj4 = {
        setSelectedSortMethod: tmp8,
        setSelectedFilters: tmp12,
        selectedFilters: tmp11,
        selectedSortMethod: tmp7,
      };
      cResult[7] = tmp11;
      cResult[8] = tmp7;
      cResult[9] = obj4;
    }
  : () => {
      let closure_0;
      let closure_1;
      let tmp3;
      let tmp4;
      let tmp6;
      let tmp7;
      const f118125 = () => {
        let SUGGESTED = QuestHomeNavigationStore.getField("sort");
        if (null == SUGGESTED) {
          SUGGESTED = constants.SUGGESTED;
        } else {
          const _Object = Object;
          const values = Object.values(constants);
        }
        return SUGGESTED;
      };
      const f118126 = () => {
        let found;
        const str = QuestHomeNavigationStore.getField("filter");
        if (null == str) {
          found = closure_1_11;
        } else {
          const parts = str.split(",");
          const mapped = parts.map(f118116);
          found = mapped.filter(f118117);
          if (found.length <= 0) {
            found = closure_1_11;
          }
        }
        return found;
      };
      const tmp = closure_9();
      [tmp3, tmp4] = _slicedToArray(react.useState(f118125), 2);
      const require = tmp4;
      const tmp2 = _slicedToArray(react.useState(f118125), 2);
      [tmp6, tmp7] = react.useState(f118126);
      importDefault = tmp7;
      _slicedToArray(react.useState(f118126), 2);
      const effect = react.useEffect(() => {
        const obj = { equalityFn: _slicedToArray2.shallow, fireImmediately: true };
        return QuestHomeNavigationStore.subscribe(
          (self) => ({ sort: self.sort, filter: self.filter }),
          (self, self2) => {
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
              let found;
              if (null == self.filter) {
                found = closure_2_11;
              } else {
                const parts = str.split(",");
                const mapped = parts.map(f118116);
                found = mapped.filter(f118117);
                if (found.length <= 0) {
                  found = closure_2_11;
                }
              }
              closure_1_1(found);
            }
          },
          obj,
        );
      }, []);
      const tmp9 = closure_10();
      const callback = react.useCallback(() => {
        tmp7(closure_11);
      }, []);
      const effect1 = react.useEffect(
        () => () => {
          const obj = closure_1_1(closure_1_2[11]);
          obj.close();
          closure_1_5.resetState();
        },
        [],
      );
      const field = QuestHomeNavigationStore.useField("scrollToQuestId");
      useQuestHomeHeaderDefault({
        setSelectedSortMethod: tmp4,
        setSelectedFilters: tmp7,
        selectedFilters: tmp6,
        selectedSortMethod: tmp3,
      });
      return jsx(QuestHomeDefault, {
        containerStyle: tmp.container,
        isNavigationComplete: tmp9,
        scrollToQuestId: field,
        sortMethod: tmp3,
        filters: tmp6,
        onClearFilters: callback,
      });
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default tmp3;
