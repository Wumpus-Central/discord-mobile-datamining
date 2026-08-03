import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import isFetching from "isFetching";
import DirectoryEntryTypes from "DirectoryEntryTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ DirectoryEntryCategories: metroImportAll, getHubCategories: c9 } = DirectoryEntryTypes);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { categoriesListWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default function GuildDirectoryCategorySelector(channel) {
  let c4;
  let categoryCounts;
  let importDefault;
  let tmp3;
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  let callback;
  let stateFromStores;
  let memo;
  const tmp = createCacheKey();
  [tmp3, c4] = callback(stateFromStores.useState(0), 2);
  callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = channel(allEntriesCount[11]);
  let items = [isFetching];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentCategoryId(channel.id));
  const items1 = [channel.id];
  memo = stateFromStores.useMemo(() => {
    const obj = { value: outer1_8.ALL, label: null, idealSize: 70 };
    const intl = channel(allEntriesCount[8]).intl;
    obj[1] = intl.string(channel(allEntriesCount[8]).t.hEAa2a);
    const items = [obj, ...outer1_9(channel.id)];
    return items;
  }, items1);
  const items2 = [memo, categoryCounts, allEntriesCount];
  const items3 = [memo, stateFromStores];
  const memo1 = stateFromStores.useMemo(() => memo.map((label) => {
    const obj = { label: label.label, id: String(label.value), count: null, page: null };
    if (label.value === outer1_8.ALL) {
      let tmp3 = closure_3;
    } else if (closure_2 != null) {
      tmp3 = tmp[label.value];
    }
    obj[2] = tmp3;
    return obj;
  }), items2);
  const memo2 = stateFromStores.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === noop);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  const tmp2 = callback(stateFromStores.useState(0), 2);
  obj = {
    items: memo1,
    defaultIndex: memo2,
    onSetActiveIndex(arg0) {
      let value;
      if (memo[arg0] != null) {
        value = iter.value;
      }
      if (value !== stateFromStores) {
        const directoryCategory = categoryCounts(allEntriesCount[13]).selectDirectoryCategory(channel.id, value);
        callback();
        const obj = categoryCounts(allEntriesCount[13]);
      }
    },
    pageWidth: tmp3
  };
  const segmentedControlState = channel(allEntriesCount[12]).useSegmentedControlState(obj);
  const obj2 = channel(allEntriesCount[12]);
  const token = channel(allEntriesCount[9]).useToken(importDefault(allEntriesCount[7]).colors.BACKGROUND_BASE_LOW);
  const items4 = [token, ];
  const obj4 = channel(allEntriesCount[9]);
  const obj5 = importDefault(allEntriesCount[10])(token);
  items4[1] = importDefault(allEntriesCount[10])(token).alpha(0).hex();
  obj = { style: tmp.categoriesListWrapper, onLayout: callback, children: null };
  const items5 = [callback2(channel(allEntriesCount[14]).Tabs, { state: segmentedControlState }), callback2(importDefault(allEntriesCount[15]), { state: segmentedControlState, colors: items4 })];
  obj[2] = items5;
  return callback3(memo, obj);
};