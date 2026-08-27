// === Module 14551: QuestHomeSetting ===

// Module 14551 (QuestHomeSetting)
import ThemesDefault from "Themes" /* 712 */;
import QuestHomeHeaderTitleDefault from "QuestHomeHeaderTitle" /* 14552 */;
import EmptyStateNoQuestsAvailableDefault from "EmptyStateNoQuestsAvailable" /* 14556 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "zustandStore" /* 11251 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5339 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ QuestHomeSortMethods: closure_6, getQuestHomeFilterOptionItem: error } = QuestsExperimentLocations);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = [];
const result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  let tmp = callback2();
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
  importDefault = tmp7;
  const effect = React.useEffect(() => closure_1_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      let SUGGESTED = self.sort;
      if (null == SUGGESTED) {
        SUGGESTED = closure_1_6.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(closure_1_6);
      }
      closure_0(SUGGESTED);
      const tmp = closure_0;
    }
    if (self.filter !== self2.filter) {
      if (null == self.filter) {
        let found = closure_1_10;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((arg0) => callback(arg0));
        found = mapped.filter((arg0) => null != arg0);
        if (found.length <= 0) {
          found = closure_1_10;
        }
      }
      closure_1(found);
      const tmp7 = closure_1;
    }
  }, { equalityFn: navigation(closure_1_2[8]).shallow, fireImmediately: true }), []);
  navigation = undefined;
  importDefault = undefined;
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const tmp10 = callback(React.useState(false), 2);
  importDefault = tmp10[1];
  const items = [navigation];
  const effect1 = React.useEffect(() => navigation.addListener("transitionEnd", () => callback(true)), items);
  callback = React.useCallback(() => {
    callback(closure_1_10);
  }, []);
  const effect2 = React.useEffect(() => () => {
    callback(table[9]).close();
    closure_5.resetState();
  }, []);
  const field = closure_5.useField("scrollToQuestId");
  QuestHomeHeaderTitleDefault({ setSelectedSortMethod: tmp4, setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: tmp3 });
  obj = { containerStyle: tmp.container, isNavigationComplete: tmp10[0], scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback };
  return jsx(EmptyStateNoQuestsAvailableDefault, { containerStyle: tmp.container, isNavigationComplete: tmp10[0], scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback });
};