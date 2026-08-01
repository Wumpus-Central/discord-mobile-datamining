// === Module 14046: QuestHomeSetting ===

// Module 14046 (QuestHomeSetting)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import zustandStore from "zustandStore";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ QuestHomeSortMethods: closure_6, getQuestHomeFilterOptionItem: error } = QuestsExperimentLocations);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = [];
const result = require("zustandStore").fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp = createCacheKey();
  [tmp3, tmp4] = callback(React.useState(() => {
    let SUGGESTED = store.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  }), 2);
  let navigation = tmp4;
  const tmp2 = callback(React.useState(() => {
    let SUGGESTED = store.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  }), 2);
  [tmp6, tmp7] = callback(React.useState(() => {
    const str = store.getField("filter");
    if (null == str) {
      let found = closure_10;
    } else {
      const parts = str.split(",");
      const mapped = parts.map((arg0) => callback(arg0));
      found = mapped.filter((arg0) => null != arg0);
      if (found.length <= 0) {
        found = closure_10;
      }
    }
    return found;
  }), 2);
  let importDefault = tmp7;
  const effect = React.useEffect(() => outer1_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      let SUGGESTED = self.sort;
      if (null == SUGGESTED) {
        SUGGESTED = outer1_6.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(outer1_6);
      }
      closure_0(SUGGESTED);
      const tmp = closure_0;
    }
    if (self.filter !== self2.filter) {
      if (null == self.filter) {
        let found = outer1_10;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((arg0) => callback(arg0));
        found = mapped.filter((arg0) => null != arg0);
        if (found.length <= 0) {
          found = outer1_10;
        }
      }
      closure_1(found);
      const tmp7 = closure_1;
    }
  }, { equalityFn: navigation(outer1_2[8]).shallow, fireImmediately: true }), []);
  navigation = undefined;
  importDefault = undefined;
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const tmp10 = callback(React.useState(false), 2);
  importDefault = tmp10[1];
  const items = [navigation];
  const effect1 = React.useEffect(() => navigation.addListener("transitionEnd", () => callback(true)), items);
  callback = React.useCallback(() => {
    callback(outer1_10);
  }, []);
  const effect2 = React.useEffect(() => () => {
    callback(table[9]).close();
    zustandStore.resetState();
  }, []);
  const field = zustandStore.useField("scrollToQuestId");
  importDefault(14047)({ setSelectedSortMethod: tmp4, setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: tmp3 });
  obj = { containerStyle: tmp.container, isNavigationComplete: tmp10[0], scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback };
  return jsx(importDefault(14051), { containerStyle: tmp.container, isNavigationComplete: tmp10[0], scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback });
};