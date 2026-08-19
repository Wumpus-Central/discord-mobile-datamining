// discord_app/modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import HeaderBackImage from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _modDef7336 from "../../../main_tabs_v2/native/shared_components/SearchBarNav.tsx";
import registerAssetDefault from "../../../../../_runtime/11921_registerAsset.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { HubEmailConnectionSteps } from "../../HubConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function EmptyState() {
  const tmp = callback4();
  let obj = { style: tmp.emptyStateImage, source: registerAssetDefault };
  const items = [callback2(closure_7, obj), ];
  obj = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["6HXiuE"]);
  items[1] = callback2(Text.Text, obj);
  obj[1] = items;
  return callback3(closure_6, obj);
}
({ View: closure_6, Image: error, FlatList: closure_8 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const createCacheKey = { flex: 1, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 0 };
createCacheKey[2] = { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 };
createCacheKey[3] = { marginBottom: 24 };
createCacheKey[4] = { marginBottom: 4, textAlign: "center" };
createCacheKey[5] = { color: ThemesDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  ({ guildsInfo, email: require, onClose: importDefault } = arg0);
  let callback;
  let React;
  c6 = undefined;
  c7 = undefined;
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = useNavigation;
  closure_3 = obj.useNavigation();
  const tmp4 = callback(React.useState(""), 2);
  callback = tmp4[0];
  [obj2, c5] = callback(React.useState(null), 2);
  const tmp5 = callback(React.useState(null), 2);
  [c6, c7] = callback(React.useState(false), 2);
  const found = guildsInfo.filter((item, index) => {
    const formatted = closure_4.toLowerCase();
    return importDefault(error[12])(formatted, item.name.toLowerCase());
  });
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj = { style: tmp.fauxHeader, children: null };
  obj1 = { placeholder: null, onChange: null, onClose: null };
  const tmp6 = callback(React.useState(false), 2);
  const intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t.nL2wKD);
  obj1[1] = tmp4[1];
  obj1[2] = function onClose() {

  };
  obj[1] = callback2(_modDef7336, obj1);
  const items = [callback2(HeaderBackImage.FauxHeader, obj), ];
  obj2 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: null, children: null };
          obj[0] = error.error;
          obj[1] = anyErrorMessage;
          tmp2 = closure_1_10(require(error[18]).LegacyText, obj);
        }
      }
      return tmp2;
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_10(require(error[19]).HubEmailConnectionGuildSelectRow, {
        signup: arr(function*() {
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
              return { value: "HermesInternal", done: "HermesInternal" };
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
                  closure_1 = tmp4;
                  closure_0 = tmp8;
                  v0(null);
                  closure_1_7(true);
                  let arr = 2;
                  let obj2 = closure_2_1(closure_2_2[14]);
                  c4 = 3;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj2.sendVerificationEmail(closure_0, true, closure_0);
                  return obj1;
                }
              } else if (1 === tmp8) {
                arr = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === tmp8) {
                  arr = 1;
                  closure_0 = closure_2;
                  const aPIError = new id(closure_2_2[15]).APIError(closure_0);
                  v0(aPIError);
                  arr = 0;
                  closure_1_7(false);
                  v0 = 3;
                } else if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj = { email: null, onClose: null, guildId: null };
                  obj[0] = closure_0;
                  obj[1] = closure_1_1;
                  obj[2] = closure_0;
                  arr = arr.push(closure_2_9.VERIFY_PIN, obj);
                  arr = 1;
                }
                arr = 0;
                closure_1_7(false);
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
        }),
        guildInfo: item,
        loading: c6
      });
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
  const tmp8Result = _modDef7336;
  items[1] = callback2(anyErrorMessage, obj2);
  obj[0] = items;
  return callback3(closure_12, obj);
};