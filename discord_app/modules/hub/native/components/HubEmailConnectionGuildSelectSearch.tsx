// === Module 12983: HubEmailConnectionGuildSelectSearch ===

// Module 12983 (HubEmailConnectionGuildSelectSearch)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4718 */;
import fuzzysearchDefault from "fuzzysearch" /* 5687 */;
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import SearchBarNavDefault from "SearchBarNav" /* 7572 */;
import HubActionCreatorsDefault from "HubActionCreators" /* 12974 */;
import _modDef12984 from "module_12984" /* 12984 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function EmptyState() {
  const tmp = closure_13();
  const obj = { style: tmp.emptyWrapper, children: null };
  const items = [closure_1_10(React5, { style: tmp.emptyStateImage, source: _modDef12984 }), ];
  const obj3 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["6HXiuE"]);
  items[1] = closure_1_10(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_11(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12961).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { scrollContainer: { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, fauxHeader: { paddingHorizontal: 0 }, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, error: null };
let obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.error = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  ({ guildsInfo, email: require, onClose: importDefault } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_13();
  dependencyMap = tmp;
  closure_3 = useNavigation.useNavigation();
  [_slicedToArray, obj5.onChange] = noop.useState("");
  [obj2, c5] = _slicedToArray(noop.useState(null), 2);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [c6, c7] = _slicedToArray(noop.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    const formatted = closure_4.toLowerCase();
    return fuzzysearchDefault(formatted, name.name.toLowerCase());
  });
  let anyErrorMessage;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj3 = { children: null };
  let obj4 = { style: tmp.fauxHeader, children: null };
  let obj5 = { placeholder: null, onChange: null, onClose: null };
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj5.placeholder = intl.string(util.t.nL2wKD);
  obj5.onClose = function onClose() {
    closure_3.pop();
  };
  obj4.children = closure_10(SearchBarNavDefault, obj5);
  const items = [closure_10(NavigatorHeader.FauxHeader, obj4), ];
  let obj6 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: error.error, children: anyErrorMessage };
          tmp2 = closure_2_10(native.LegacyText, obj);
        }
      }
      return tmp2;
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_10(require("HubEmailConnectionGuildSelect").HubEmailConnectionGuildSelectRow, {
        signup: closure_3(function*() {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp7 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              v3 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const onClose = tmp4;
                  const email = tmp8;
                  v3(null);
                  closure_1_7(true);
                  c3 = 2;
                  c4 = 3;
                  v3 = 1;
                  const obj5 = { value: HubActionCreatorsDefault.sendVerificationEmail(email, true, id), done: false };
                  return obj5;
                }
              } else if (1 === tmp8) {
                c3 = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === tmp8) {
                  c3 = 1;
                  closure_128_0 = closure_2;
                  const aPIError = new id(4622).APIError(closure_128_0);
                  v3(aPIError);
                  c3 = 0;
                  closure_1_7(false);
                  v3 = 3;
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  const obj = { email, onClose, guildId: closure_129_0 };
                  c3.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                closure_1_7(false);
                v3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            } catch (tmp48) {
              closure_2 = tmp48;
              if (tmp5 === c3) {
                v3 = tmp3;
                throw tmp48;
              } else if (tmp2 === tmp50) {
                c4 = tmp2;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
        guildInfo: item,
        loading
      });
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return closure_1_10(EmptyState, {});
    },
    ItemSeparatorComponent() {
      return closure_1_10(c6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: null
  };
  const tmp8Result = SearchBarNavDefault;
  obj6.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingTop: 16 };
  items[1] = closure_10(anyErrorMessage, obj6);
  obj3.children = items;
  return closure_11(closure_12, obj3);
};