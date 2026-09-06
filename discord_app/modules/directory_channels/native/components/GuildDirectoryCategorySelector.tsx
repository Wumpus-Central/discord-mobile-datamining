// discord_app/modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";

require = fn;
const View = fn(17).View;
const GuildDirectoryConstants = fn(12305);
({ DirectoryEntryCategories: closure_8, getHubCategories: closure_9 } = GuildDirectoryConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { categoriesListWrapper: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
createStyles.categoriesListWrapper = createStyles;
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx",
);

export default function GuildDirectoryCategorySelector(channel) {
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  _slicedToArray = undefined;
  let stateFromStores;
  const tmp = closure_12();
  [tmp3, c4] = _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = channel(allEntriesCount[11]);
  let items = [GuildDirectoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(channel.id));
  const items1 = [channel.id];
  const memo = stateFromStores.useMemo(() => {
    const obj = { value: constants.ALL, label: null, idealSize: 70 };
    const intl = util.intl;
    obj.label = intl.string(util.t.hEAa2a);
    const items = [obj, ...closure_2_9(channel.id)];
    return items;
  }, items1);
  const items2 = [memo, categoryCounts, allEntriesCount];
  const items3 = [memo, stateFromStores];
  const memo1 = stateFromStores.useMemo(
    () =>
      memo.map((label) => {
        const obj = { label: label.label, id: String(label.value), count: null, page: null };
        if (label.value === constants.ALL) {
          let tmp3 = allEntriesCount;
        } else if (categoryCounts != null) {
          tmp3 = tmp[label.value];
        }
        obj.count = tmp3;
        return obj;
      }),
    items2,
  );
  const memo2 = stateFromStores.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === stateFromStores);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  const tmp2 = _slicedToArray(stateFromStores.useState(0), 2);
  obj = {
    items: memo1,
    defaultIndex: memo2,
    onSetActiveIndex(arg0) {
      value = undefined;
      if (memo[arg0] != null) {
        value = iter.value;
      }
      if (value !== stateFromStores) {
        const directoryCategory = GuildDirectoryActionCreatorsAll.selectDirectoryCategory(channel.id, value);
        importDefault();
      }
    },
    pageWidth: tmp3,
  };
  const segmentedControlState = channel(allEntriesCount[12]).useSegmentedControlState(obj);
  const obj2 = channel(allEntriesCount[12]);
  const token = channel(allEntriesCount[9]).useToken(require("native").colors.BACKGROUND_BASE_LOW);
  const items4 = [token];
  const obj4 = channel(allEntriesCount[9]);
  const obj5 = require("../../../../../_runtime/metro/00672__.js")(token);
  items4[1] = require("../../../../../_runtime/metro/00672__.js")(token).alpha(0).hex();
  obj = { style: tmp.categoriesListWrapper, onLayout: callback, children: null };
  const items5 = [
    closure_10(channel(allEntriesCount[14]).Tabs, { state: segmentedControlState }),
    closure_10(require("TabsGradient"), { state: segmentedControlState, colors: items4 }),
  ];
  obj.children = items5;
  return closure_11(memo, obj);
}
