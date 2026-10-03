// === Module 12424: GuildDirectoryCategorySelector ===

// Module 12424 (GuildDirectoryCategorySelector)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11944 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11940 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GuildDirectoryConstants = fn(11933);
({ DirectoryEntryCategories: closure_8, getHubCategories: closure_9 } = GuildDirectoryConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { categoriesListWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const obj3 = _modDef683(token);
    const hexResult = _modDef683(token).alpha(0).hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    let tmp5 = hexResult;
    const alphaResult = _modDef683(token).alpha(0);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const items = [token, tmp5];
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp7 = items;
}) : (() => {
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const items = [token, ];
  const obj2 = _modDef683(token);
  items[1] = _modDef683(token).alpha(0).hex();
  return items;
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(allEntriesCount[10]).c(37);
  channel = channel.channel;
  const onCategorySelected = channel.onCategorySelected;
  const categoryCounts = channel.categoryCounts;
  allEntriesCount = channel.allEntriesCount;
  closure_12();
  let obj = channel(allEntriesCount[10]);
  [r10022, _slicedToArray] = stateFromStores.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      _slicedToArray(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildDirectoryStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== channel.id) {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
    cResult[2] = channel.id;
    cResult[3] = D;
  } else {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
  }
  const tmp5 = _slicedToArray(stateFromStores.useState(0), 2);
  stateFromStores = channel(allEntriesCount[13]).useStateFromStores(tmp7, D);
  if (cResult[4] !== channel.id) {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
    tmp11[0] = constants.ALL;
    const intl = tmp(tmp2[8]).intl;
    tmp11[1] = intl.string(tmp(tmp2[8]).t.hEAa2a);
    const items1 = [tmp11];
    HermesBuiltin.arraySpread(closure_9(channel.id), 1);
    cResult[4] = channel.id;
    cResult[5] = items1;
  } else {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
  }
  if (cResult[6] === allEntriesCount) {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
  }
  if (cResult[10] === allEntriesCount) {
    class D {
      constructor() {
        return closure_7.getCurrentCategoryId(channel.id);
      }
    }
    const mapped = arr2.map(T);
    cResult[6] = allEntriesCount;
    cResult[7] = arr2;
    cResult[8] = categoryCounts;
    cResult[9] = mapped;
  }
  class T {
    constructor(arg0) {
      obj = { label: channel.label, id: String(channel.value), count: null, page: null };
      if (channel.value === DirectoryEntryCategories.ALL) {
        tmp3 = allEntriesCount;
      } else {
        tmp2 = null;
        if (categoryCounts != null) {
          tmp3 = tmp[channel.value];
        }
      }
      obj.count = tmp3;
      return obj;
    }
  }
  cResult[10] = allEntriesCount;
  cResult[11] = categoryCounts;
  cResult[12] = T;
  const tmpResult = channel(allEntriesCount[13]);
}) : ((channel) => {
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  _slicedToArray = undefined;
  let stateFromStores;
  const tmp = closure_12();
  [tmp3, c4] = stateFromStores.useState(0);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2 = _slicedToArray(stateFromStores.useState(0), 2);
  let items = [GuildDirectoryStore];
  stateFromStores = channel(allEntriesCount[13]).useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(channel.id));
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
  const memo1 = stateFromStores.useMemo(() => memo.map((label) => {
    const obj = { label: label.label, id: String(label.value), count: null, page: null };
    if (label.value === constants.ALL) {
      let tmp3 = allEntriesCount;
    } else if (categoryCounts != null) {
      tmp3 = tmp[label.value];
    }
    obj.count = tmp3;
    return obj;
  }), items2);
  const memo2 = stateFromStores.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === stateFromStores);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  let obj = channel(allEntriesCount[13]);
  const segmentedControlState = channel(allEntriesCount[15]).useSegmentedControlState({
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
    pageWidth: tmp3
  });
  const obj4 = { style: tmp.categoriesListWrapper, onLayout: callback, children: null };
  const obj2 = channel(allEntriesCount[15]);
  const obj3 = {
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
    pageWidth: tmp3
  };
  const items4 = [closure_10(channel(allEntriesCount[16]).Tabs, { state: segmentedControlState }), closure_10(require("TabsGradient"), { state: segmentedControlState, colors: closure_13() })];
  obj4.children = items4;
  return closure_11(memo, obj4);
});