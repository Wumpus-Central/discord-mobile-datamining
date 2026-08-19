// discord_app/modules/quests/native/QuestHomeSetting.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import QuestHomeHeaderTitleDefault from "useQuestHomeHeader.tsx";
import EmptyStateNoQuestsAvailableDefault from "QuestHome.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import zustandStore from "../QuestHomeNavigationStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ QuestHomeSortMethods: closure_6, getQuestHomeFilterOptionItem: error } = QuestsExperimentLocations);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = [];
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  const tmp = callback2();
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
      const mapped = parts.map((item, index) => callback(item));
      found = mapped.filter((item, index) => null != item);
      if (found.length <= 0) {
        found = closure_10;
      }
    }
    return found;
  }), 2);
  const effect = React.useEffect(() => closure_1_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      let SUGGESTED = self.sort;
      if (null == SUGGESTED) {
        SUGGESTED = closure_1_6.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(closure_1_6);
      }
      callback(SUGGESTED);
    }
    if (self.filter !== self2.filter) {
      if (null == self.filter) {
        let found = closure_1_10;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((item, index) => callback(item));
        found = mapped.filter((item, index) => null != item);
        if (found.length <= 0) {
          found = closure_1_10;
        }
      }
      callback2(found);
    }
  }, { equalityFn: navigation(dependencyMap[8]).shallow, fireImmediately: true }), []);
  let navigation;
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