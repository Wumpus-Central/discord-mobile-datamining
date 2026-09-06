// discord_app/modules/quests/native/QuestHomeSetting.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import useQuestHomeHeaderDefault from "useQuestHomeHeader.tsx";
import QuestHomeDefault from "QuestHome.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestHomeNavigationStore from "../QuestHomeNavigationStore.tsx";

require = fn;
const QuestConstants = fn(5444);
({ QuestHomeSortMethods: metroRequire, getQuestHomeFilterOptionItem: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.container = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
let closure_10 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  const tmp = closure_9();
  [tmp3, tmp4] = _slicedToArray(
    noop.useState(() => {
      let SUGGESTED = QuestHomeNavigationStore.getField("sort");
      if (null == SUGGESTED) {
        SUGGESTED = constants.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(constants);
      }
      return SUGGESTED;
    }),
    2,
  );
  const tmp2 = _slicedToArray(
    noop.useState(() => {
      let SUGGESTED = QuestHomeNavigationStore.getField("sort");
      if (null == SUGGESTED) {
        SUGGESTED = constants.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(constants);
      }
      return SUGGESTED;
    }),
    2,
  );
  [tmp6, tmp7] = _slicedToArray(
    noop.useState(() => {
      const str = QuestHomeNavigationStore.getField("filter");
      if (null == str) {
        let found = closure_1_10;
      } else {
        const parts = str.split(",");
        const mapped = parts.map((item) => closure_1_7(item));
        found = mapped.filter((item) => null != item);
        if (found.length <= 0) {
          found = closure_1_10;
        }
      }
      return found;
    }),
    2,
  );
  const effect = noop.useEffect(
    () =>
      QuestHomeNavigationStore.subscribe(
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
            navigation(SUGGESTED);
          }
          if (self.filter !== self2.filter) {
            if (null == self.filter) {
              let found = closure_2_10;
            } else {
              const parts = str.split(",");
              const mapped = parts.map((item) => closure_1_7(item));
              found = mapped.filter((item) => null != item);
              if (found.length <= 0) {
                found = closure_2_10;
              }
            }
            closure_1_1(found);
          }
        },
        { equalityFn: _mod4184.shallow, fireImmediately: true },
      ),
    [],
  );
  let navigation;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp10[1];
  const items = [navigation];
  const effect1 = noop.useEffect(() => navigation.addListener("transitionEnd", () => closure_1_1(true)), items);
  const callback = noop.useCallback(() => {
    closure_1(closure_10);
  }, []);
  const effect2 = noop.useEffect(
    () => () => {
      closure_1_1(closure_1_2[9]).close();
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
  obj = {
    containerStyle: tmp.container,
    isNavigationComplete: tmp10[0],
    scrollToQuestId: field,
    sortMethod: tmp3,
    filters: tmp6,
    onClearFilters: callback,
  };
  return jsx(QuestHomeDefault, {
    containerStyle: tmp.container,
    isNavigationComplete: tmp10[0],
    scrollToQuestId: field,
    sortMethod: tmp3,
    filters: tmp6,
    onClearFilters: callback,
  });
}
