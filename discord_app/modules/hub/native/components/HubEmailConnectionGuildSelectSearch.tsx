// discord_app/modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import fuzzysearchDefault from "../../../../../_runtime/05517_fuzzysearch.js";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SearchBarNavDefault from "../../../main_tabs_v2/native/shared_components/SearchBarNav.tsx";
import HubActionCreatorsDefault from "../../../../actions/HubActionCreators.tsx";
import _modDef12742 from "../../../../../_runtime/metro/12742__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyState() {
  const tmp = closure_13();
  let obj = { style: tmp.emptyWrapper, children: null };
  obj = { style: tmp.emptyStateImage, source: _modDef12742 };
  const items = [closure_1_10(React5, obj)];
  obj = {
    style: tmp.emptyStateTitle,
    variant: "text-sm/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.string(util.t["6HXiuE"]);
  items[1] = closure_1_10(Text_Text.Text, obj);
  obj.children = items;
  return closure_1_11(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12719).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  scrollContainer: null,
  fauxHeader: null,
  emptyWrapper: null,
  emptyStateImage: null,
  emptyStateTitle: null,
  error: null,
};
createStyles = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.scrollContainer = createStyles;
createStyles.fauxHeader = { paddingHorizontal: 0 };
createStyles.emptyWrapper = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 64,
  paddingHorizontal: 16,
};
createStyles.emptyStateImage = { marginBottom: 24 };
createStyles.emptyStateTitle = { marginBottom: 4, textAlign: "center" };
createStyles.error = {
  color: nativeDefault.unsafe_rawColors.RED_400,
  alignSelf: "center",
  fontSize: 14,
  marginBottom: 8,
};
let closure_13 = createStyles.createStyles(createStyles);
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
  let obj = useNavigation;
  closure_3 = obj.useNavigation();
  const tmp4 = _slicedToArray(noop.useState(""), 2);
  _slicedToArray = tmp4[0];
  [obj2, c5] = _slicedToArray(noop.useState(null), 2);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [c6, c7] = _slicedToArray(noop.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    const formatted = closure_4.toLowerCase();
    return fuzzysearchDefault(formatted, name.name.toLowerCase());
  });
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj = { children: null };
  obj = { style: tmp.fauxHeader, children: null };
  obj1 = { placeholder: null, onChange: null, onClose: null };
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const intl = tmp2(1114).intl;
  obj1.placeholder = intl.string(util.t.nL2wKD);
  obj1.onChange = tmp4[1];
  obj1.onClose = function onClose() {
    closure_3.pop();
  };
  obj.children = closure_10(SearchBarNavDefault, obj1);
  const items = [closure_10(NavigatorHeader.FauxHeader, obj)];
  obj2 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== tmp) {
          const obj = { style: error.error, children: tmp };
          tmp2 = closure_2_10(native.LegacyText, obj);
        }
      }
      return tmp2;
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_10(require("HubEmailConnectionGuildSelect").HubEmailConnectionGuildSelectRow, {
        signup: closure_3(function* (arg0, value) {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp7 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  const onClose = tmp4;
                  const email = tmp8;
                  v3(null);
                  closure_1_7(true);
                  c3 = 2;
                  let obj2 = HubActionCreatorsDefault;
                  c4 = 3;
                  v3 = 1;
                  const obj1 = { value: obj2.sendVerificationEmail(email, true, id), done: false };
                  return obj1;
                }
              } else if (1 === tmp8) {
                c3 = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === tmp8) {
                  c3 = 1;
                  closure_128_0 = closure_2;
                  const aPIError = new id(4461).APIError(closure_128_0);
                  v3(aPIError);
                  c3 = 0;
                  closure_1_7(false);
                  v3 = 3;
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  obj = { email, onClose, guildId: closure_129_0 };
                  c3.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                closure_1_7(false);
                v3 = 3;
                obj2 = { value, done: true };
                return obj2;
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
        loading,
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
    contentContainerStyle: null,
  };
  const tmp8Result = SearchBarNavDefault;
  obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingTop: 16 };
  items[1] = closure_10(anyErrorMessage, obj2);
  obj.children = items;
  return closure_11(closure_12, obj);
}
