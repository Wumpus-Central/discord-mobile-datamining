// === Module 12737: HubEmailConnectionGuildSelect ===

// Module 12737 (HubEmailConnectionGuildSelect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import Form from "Form" /* 8593 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class HubEmailConnectionGuildSelectRow {
  constructor(arg0) {
    guildInfo = global.guildInfo;
    ({ signup, loading } = global);
    tmp = closure_11();
    obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name, leading: null, trailing: null };
    obj = { style: tmp.guildIcon, guild: null };
    tmp2 = closure_1(closure_2[9]);
    obj3 = closure_0(closure_2[10]);
    obj1 = {};
    merged = Object.assign(guildInfo);
    obj1.features = [];
    obj.guild = obj3.fromGuildBasic(obj1);
    obj.leading = jsx(tmp2, obj);
    obj.trailing = jsx(closure_0(closure_2[8]).FormRow.Arrow, {});
    return jsx(closure_0(closure_2[8]).FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  const tmp = closure_11();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.mOMeiR);
  obj.children = React7(Text_Text.Text, obj);
  return React7(timestampProducer, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = closure_11();
  let obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer, children: null };
  const obj1 = { variant: "secondary", loading, disabled: loading, grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj1.text = intl.string(util.t.G3Zk7V);
  obj1.onPress = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [React7(components_Button_Button.Button, obj1), ];
  let tmp3Result = null != errors;
  if (tmp3Result) {
    const obj2 = { style: tmp.error, children: null };
    let anyErrorMessage;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj2.children = anyErrorMessage;
    tmp3Result = React7(native.LegacyText, obj2);
  }
  items1[1] = tmp3Result;
  obj.children = items1;
  obj.children = closure_1_10(timestampProducer, obj);
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12719).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { rowContainer: null, guildIcon: null, separator: null, header: null, title: null, footerSafeAreaContainer: null, footerContainer: null, error: null };
createStyles = { marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles.rowContainer = createStyles;
createStyles.guildIcon = { borderRadius: nativeDefault.radii.sm };
createStyles.separator = { height: 8 };
createStyles.header = { padding: 16, alignItems: "center", justifyContent: "center" };
createStyles.title = { marginBottom: 8, textAlign: "center" };
let obj1 = { borderRadius: nativeDefault.radii.sm };
createStyles.footerSafeAreaContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
createStyles.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
createStyles.error = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  noop = undefined;
  closure_3 = closure_11();
  let obj = onClose(guildsInfo[16]);
  const navigation = obj.useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: onClose(guildsInfo[18]).MagnifyingGlassIcon,
          onPress() {
            closure_1_4.push(constants.SELECT_SCHOOL_SEARCH, { email, onClose, guildsInfo });
          },
          accessibilityLabel: null
        };
        const intl = onClose(guildsInfo[12]).intl;
        obj.accessibilityLabel = intl.string(onClose(guildsInfo[12]).t["5h0QOP"]);
        return closure_2_9(onClose(guildsInfo[17]).HeaderActionButton, obj);
      }
    });
  }, items);
  const items1 = [email, navigation, onClose];
  const callback = noop.useCallback(() => {
    navigation.push(HubEmailConnectionSteps.SUBMIT_SCHOOL, { email, onClose });
  }, items1);
  const tmp4 = navigation(noop.useState(null), 2);
  noop = tmp4[1];
  const tmp5 = navigation(noop.useState(false), 2);
  const loading = tmp5[0];
  closure_7 = tmp5[1];
  obj = { children: null };
  obj = {
    data: guildsInfo,
    ListHeaderComponent() {
      return closure_1_9(HubEmailConnectionGuildSelectHeader, {});
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_9(HubEmailConnectionGuildSelectRow, {
        guildInfo: item,
        signup: closure_3(function*() {
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
                  email = tmp4;
                  onClose = tmp8;
                  v3(null);
                  closure_1_7(true);
                  c3 = 2;
                  let obj2 = email(12732);
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
                  c4.push(constants.VERIFY_PIN, obj);
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
        loading
      });
    },
    ItemSeparatorComponent() {
      return React7(timestampProducer, { style: closure_3.separator });
    },
    contentContainerStyle: { paddingBottom: 110 + email(guildsInfo[13])().bottom + 8 }
  };
  const items2 = [closure_9(closure_7, obj), closure_9(HubEmailConnectionGuildSelectFooter, { errors: tmp4[0], loading, onFooterButtonPressed: callback })];
  obj.children = items2;
  return closure_10(onClose(guildsInfo[21]).HubEmailConnectionScreen, obj);
};
export { HubEmailConnectionGuildSelectRow };