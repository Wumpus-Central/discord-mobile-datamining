// discord_app/modules/hub/native/components/HubEmailConnectionGuildSelect.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1430 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import Form from "Form" /* 8083 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps" /* 11897 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
class HubEmailConnectionGuildSelectRow {
  constructor(arg0) {
    guildInfo = global.guildInfo;
    ({ signup, loading } = global);
    tmp = closure_11();
    obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name, leading: null, trailing: null };
    obj = { style: tmp.guildIcon, guild: null };
    tmp2 = require("GuildIconSizes");
    obj3 = require("fromGuildPropertiesWithAdditionalFields");
    obj1 = {};
    merged = Object.assign(guildInfo);
    obj1.features = [];
    obj[1] = obj3.fromGuildBasic(obj1);
    obj[4] = jsx(tmp2, obj);
    obj[5] = jsx(require("Form").FormRow.Arrow, {});
    return jsx(require("Form").FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  const tmp = callback3();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.mOMeiR);
  obj[1] = callback(Text.Text, obj);
  return callback(closure_6, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = callback3();
  let obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj[0] = items;
  obj = { style: tmp.footerContainer, children: null };
  obj1 = { variant: "secondary", loading, disabled: loading, grow: true, text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.string(getSystemLocale.t.G3Zk7V);
  obj1[5] = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [callback(Button2.Button, obj1), ];
  let tmp3Result = null != errors;
  if (tmp3Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.error;
    let anyErrorMessage;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj2[1] = anyErrorMessage;
    tmp3Result = tmp3(Button.LegacyText, obj2);
  }
  items1[1] = tmp3Result;
  obj[1] = items1;
  obj[1] = closure_10(closure_6, obj);
  return callback(closure_6, obj);
}
({ View: closure_6, FlatList: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { rowContainer: null, guildIcon: null, separator: null, header: null, title: null, footerSafeAreaContainer: null, footerContainer: null, error: null };
createCacheKey = { marginHorizontal: 16, borderRadius: ThemesDefault.radii.sm, padding: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[2] = { height: 8 };
createCacheKey[3] = { padding: 16, alignItems: "center", justifyContent: "center" };
createCacheKey[4] = { marginBottom: 8, textAlign: "center" };
let obj1 = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
createCacheKey[6] = { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
createCacheKey[7] = { color: ThemesDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj3 = { color: ThemesDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  const email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  closure_3 = undefined;
  let navigation;
  let React;
  let first;
  closure_7 = undefined;
  closure_3 = callback3();
  let obj = onClose(guildsInfo[16]);
  navigation = obj.useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: closure_1_0(closure_1_2[18]).MagnifyingGlassIcon,
          onPress() {

          },
          accessibilityLabel: null
        };
        const intl = closure_1_0(closure_1_2[12]).intl;
        obj[2] = intl.string(closure_1_0(closure_1_2[12]).t["5h0QOP"]);
        return closure_1_9(closure_1_0(closure_1_2[17]).HeaderActionButton, obj);
      }
    });
  }, items);
  const items1 = [email, navigation, onClose];
  const callback = React.useCallback(() => {
    navigation.push(closure_1_8.SUBMIT_SCHOOL, { email, onClose });
  }, items1);
  const tmp4 = navigation(React.useState(null), 2);
  React = tmp4[1];
  const tmp5 = navigation(React.useState(false), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  obj = { children: null };
  obj = {
    data: guildsInfo,
    ListHeaderComponent() {
      return callback(closure_13, {});
    },
    renderItem(item) {
      item = item.item;
      let id;
      id = item.id;
      return closure_1_9(closure_1_12, {
        guildInfo: item,
        signup: lib(function*() {
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
              if (0 === arr) {
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
                  c3 = 2;
                  let obj2 = closure_2_1(closure_2_2[19]);
                  arr = 3;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj2.sendVerificationEmail(closure_1_1, true, closure_0);
                  return obj1;
                }
              } else if (1 === tmp8) {
                c3 = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === tmp8) {
                  c3 = 1;
                  closure_0 = closure_2;
                  const aPIError = new id(closure_2_2[20]).APIError(closure_0);
                  v0(aPIError);
                  c3 = 0;
                  closure_1_7(false);
                  v0 = 3;
                } else if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj = { email: null, onClose: null, guildId: null };
                  obj[0] = closure_1_1;
                  obj[1] = closure_0;
                  obj[2] = closure_0;
                  arr = arr.push(closure_2_8.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                closure_1_7(false);
                v0 = 3;
                obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } catch (tmp48) {
              closure_2 = tmp48;
              if (tmp5 === c3) {
                v0 = tmp3;
                throw tmp48;
              } else if (tmp2 === tmp50) {
                arr = tmp2;
              } else {
                arr = tmp;
              }
            }
          }
        }),
        loading: first
      });
    },
    ItemSeparatorComponent() {
      return closure_1_9(first, { style: lib.separator });
    },
    contentContainerStyle: obj1
  };
  const items2 = [callback(closure_7, obj), callback(HubEmailConnectionGuildSelectFooter, { errors: tmp4[0], loading: first, onFooterButtonPressed: callback })];
  obj[0] = items2;
  return callback2(onClose(guildsInfo[21]).HubEmailConnectionScreen, obj);
};
export { HubEmailConnectionGuildSelectRow };