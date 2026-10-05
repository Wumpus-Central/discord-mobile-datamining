// discord_app/modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import intl2 from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";
import GuildDirectoryConstants from "../../GuildDirectoryConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channel;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ DirectoryEntryCategories: metroImportAll, getHubCategories: c9 } = GuildDirectoryConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { categoriesListWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const alphaResult = obj3.alpha(0);
        const hexResult = alphaResult.hex();
        cResult[0] = token;
        cResult[1] = hexResult;
        tmp5 = hexResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === token) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const items = [token, tmp5];
      cResult[2] = token;
      cResult[3] = tmp5;
      cResult[4] = items;
      tmp7 = items;
    }
  : () => {
      const obj = useToken;
      const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      const items = [token];
      const obj2 = _modDef683(token);
      const alphaResult = obj2.alpha(0);
      items[1] = alphaResult.hex();
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let allEntriesCount;
      let arr2;
      let stateFromStores;
      let tmp8;
      let tmp3 = allEntriesCount;
      let obj = channel(allEntriesCount[10]);
      const cResult = obj.c(37);
      channel = channel.channel;
      const onCategorySelected = channel.onCategorySelected;
      const categoryCounts = channel.categoryCounts;
      allEntriesCount = channel.allEntriesCount;
      closure_12();
      const tmp6 = _slicedToArray(stateFromStores.useState(0), 2);
      [r10022, _slicedToArray] = tmp6;
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
        tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== channel.id) {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
        cResult[2] = channel.id;
        cResult[3] = D;
      } else {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
      }
      const tmp2Result = channel(tmp3[13]);
      stateFromStores = tmp2Result.useStateFromStores(tmp8, D);
      if (cResult[4] !== channel.id) {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
        tmp12[0] = constants.ALL;
        const id = channel.id;
        const intl = tmp2(tmp3[8]).intl;
        tmp12[1] = intl.string(channel(tmp3[8]).t.hEAa2a);
        const items1 = [tmp12];
        HermesBuiltin.arraySpread(items1, closure_9(id), 1);
        cResult[4] = channel.id;
        cResult[5] = items1;
        arr2 = items1;
      } else {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
      }
      if (cResult[6] === allEntriesCount) {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
      }
      if (cResult[10] === allEntriesCount) {
        class D {
          constructor() {
            return GuildDirectoryStore.getCurrentCategoryId(channel.id);
          }
        }
        const mapped = arr2.map(T);
        cResult[6] = allEntriesCount;
        cResult[7] = arr2;
        cResult[8] = categoryCounts;
        cResult[9] = mapped;
      }
      class T {
        constructor(label) {
          let tmp3;
          const obj = { label: label.label, id: String(label.value), count: tmp3, page: null };
          if (label.value === metroImportAll.ALL) {
            tmp3 = allEntriesCount;
          } else if (categoryCounts != null) {
            tmp3 = tmp[label.value];
          }
          return obj;
        }
      }
      cResult[10] = allEntriesCount;
      cResult[11] = categoryCounts;
      cResult[12] = T;
    }
  : (channel) => {
      let _undefined;
      let c4;
      let categoryCounts;
      let items4;
      let tmp3;
      channel = channel.channel;
      ({ onCategorySelected: importDefault, categoryCounts } = channel);
      const allEntriesCount = channel.allEntriesCount;
      _slicedToArray = undefined;
      let stateFromStores;
      const tmp = closure_12();
      [tmp3, c4] = _slicedToArray(stateFromStores.useState(0), 2);
      const tmp2 = _slicedToArray(stateFromStores.useState(0), 2);
      const callback = stateFromStores.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.width);
      }, []);
      let obj = channel(allEntriesCount[13]);
      let items = [GuildDirectoryStore];
      stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(channel.id));
      const items1 = [channel.id];
      const memo = stateFromStores.useMemo(() => {
        let intl;
        const id = channel.id;
        const obj = { value: metroImportAll.ALL, label: intl.string(intl2.t.hEAa2a), idealSize: 70 };
        intl = intl2.intl;
        const items = [obj, ...closure_2_9(id)];
        return items;
      }, items1);
      const items2 = [memo, categoryCounts, allEntriesCount];
      const items3 = [memo, stateFromStores];
      const memo1 = stateFromStores.useMemo(
        () =>
          memo.map((label) => {
            let tmp3;
            const obj = { label: label.label, id: String(label.value), count: tmp3, page: null };
            if (label.value === constants.ALL) {
              tmp3 = allEntriesCount;
            } else if (categoryCounts != null) {
              tmp3 = tmp[label.value];
            }
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
      const obj2 = channel(allEntriesCount[15]);
      const obj3 = {
        items: memo1,
        defaultIndex: memo2,
        onSetActiveIndex(arg0) {
          let value;
          if (memo[arg0] != null) {
            value = iter.value;
          }
          if (value !== stateFromStores) {
            const obj = GuildDirectoryActionCreatorsAll;
            const directoryCategory = obj.selectDirectoryCategory(channel.id, value);
            importDefault();
          }
        },
        pageWidth: tmp3,
      };
      const segmentedControlState = obj2.useSegmentedControlState(obj3);
      const obj4 = { style: tmp.categoriesListWrapper, onLayout: callback, children: items4 };
      items4 = [,];
      const tmp10 = closure_13();
      items4[0] = closure_10(channel(allEntriesCount[16]).Tabs, { state: segmentedControlState });
      items4[1] = closure_10(require("TabsGradient"), { state: segmentedControlState, colors: tmp10 });
      return closure_11(memo, obj4);
    };
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx",
);

export default tmp4;
