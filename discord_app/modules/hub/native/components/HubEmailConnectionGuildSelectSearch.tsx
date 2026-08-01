// === Module 11858: EmptyState ===

// Module 11858 (EmptyState)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import HubEmailConnectionGuildSelectRow from "HubEmailConnectionGuildSelectRow";
import get_ActivityIndicator from "module_10112";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function EmptyState() {
  const tmp = createCacheKey();
  let obj = { style: tmp.emptyWrapper, children: null };
  obj = { style: tmp.emptyStateImage, source: importDefault(11859) };
  const items = [callback2(closure_7, obj), ];
  obj = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["6HXiuE"]);
  items[1] = callback2(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback3(closure_6, obj);
}
({ View: closure_6, Image: error, FlatList: metroImportAll } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { scrollContainer: null, fauxHeader: null, emptyWrapper: null, emptyStateImage: null, emptyStateTitle: null, error: null };
createCacheKey = { flex: 1, width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 0 };
createCacheKey[2] = { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 };
createCacheKey[3] = { marginBottom: 24 };
createCacheKey[4] = { marginBottom: 4, textAlign: "center" };
createCacheKey[5] = { color: require("Themes").unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
const result = require("noop").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  let c5;
  let c6;
  let c7;
  let guildsInfo;
  let importDefault;
  let obj2;
  let require;
  ({ guildsInfo, email: require, onClose: importDefault } = arg0);
  let dependencyMap;
  let closure_3;
  let callback;
  let React;
  c6 = undefined;
  c7 = undefined;
  let anyErrorMessage;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = require(1480) /* useNavigation */;
  closure_3 = obj.useNavigation();
  const tmp4 = callback(React.useState(""), 2);
  callback = tmp4[0];
  [obj2, c5] = callback(React.useState(null), 2);
  const tmp5 = callback(React.useState(null), 2);
  [c6, c7] = callback(React.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    const formatted = _slicedToArray.toLowerCase();
    return outer1_1(_undefined[12])(formatted, name.name.toLowerCase());
  });
  anyErrorMessage = undefined;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj = { children: null };
  obj = { style: tmp.fauxHeader, children: null };
  obj1 = { placeholder: null, onChange: null, onClose: null };
  const tmp6 = callback(React.useState(false), 2);
  const tmp8 = importDefault;
  const intl = tmp2(1236).intl;
  obj1[0] = intl.string(require(1236) /* getSystemLocale */.t.nL2wKD);
  obj1[1] = tmp4[1];
  obj1[2] = function onClose() {

  };
  obj[1] = callback2(importDefault(10112), obj1);
  const items = [callback2(require(5147) /* HeaderBackImage */.FauxHeader, obj), ];
  obj2 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== tmp) {
          const obj = { style: null, children: null };
          obj[0] = _undefined.error;
          obj[1] = tmp;
          tmp2 = outer1_10(outer1_0(_undefined[18]).LegacyText, obj);
        }
      }
      return tmp2;
    },
    renderItem(item) {
      item = item.item;
      let id;
      let obj = { signup: null, guildInfo: null, loading: null };
      id = item.id;
      obj[0] = arr(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp4;
                let closure_0 = tmp8;
                v0(null);
                outer1_7(true);
                let arr = 2;
                let obj2 = outer2_1(outer2_2[14]);
                c4 = 3;
                v0 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj2.sendVerificationEmail(outer1_0, true, outer1_0);
                return obj1;
              }
            } else if (1 === tmp8) {
              arr = 0;
              outer1_7(false);
              throw closure_2;
            } else {
              if (2 === tmp8) {
                arr = 1;
                outer1_0 = closure_2;
                const aPIError = new id(outer2_2[15]).APIError(outer1_0);
                v0(aPIError);
                arr = 0;
                outer1_7(false);
                v0 = 3;
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                obj = { email: null, onClose: null, guildId: null };
                obj[0] = outer1_0;
                obj[1] = outer1_1;
                obj[2] = closure_0;
                arr = arr.push(outer2_9.VERIFY_PIN, obj);
                arr = 1;
              }
              arr = 0;
              outer1_7(false);
              v0 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            }
          } catch (tmp48) {
            closure_2 = tmp48;
            if (tmp5 === arr) {
              v0 = tmp3;
              throw tmp48;
            } else if (tmp2 === tmp50) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      obj[1] = item;
      obj[2] = c6;
      return outer1_10(outer1_0(_undefined[19]).HubEmailConnectionGuildSelectRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return callback(closure_14, {});
    },
    ItemSeparatorComponent() {
      return callback(c6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: obj3
  };
  const tmp8Result = importDefault(10112);
  items[1] = callback2(anyErrorMessage, obj2);
  obj[0] = items;
  return callback3(closure_12, obj);
};