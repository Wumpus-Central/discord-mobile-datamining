// discord_app/modules/hub/native/components/HubEmailConnectionGuildSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class HubEmailConnectionGuildSelectRow {
  constructor(arg0) {
    guildInfo = global.guildInfo;
    ({ signup, loading } = global);
    tmp = closure_11();
    obj = {
      onPress: signup,
      disabled: loading,
      DEPRECATED_style: tmp.rowContainer,
      label: guildInfo.name,
      leading: null,
      trailing: null,
    };
    obj1 = { style: tmp.guildIcon, guild: null };
    tmp2 = closure_1(closure_2[9]);
    obj3 = closure_0(closure_2[10]);
    obj5 = {};
    merged = Object.assign(guildInfo);
    obj5.features = [];
    obj1.guild = obj3.fromGuildBasic(obj5);
    obj.leading = jsx(tmp2, obj1);
    obj.trailing = jsx(closure_0(closure_2[8]).FormRow.Arrow, {});
    return jsx(closure_0(closure_2[8]).FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  const tmp = closure_11();
  const obj = { style: tmp.header, children: null };
  const obj2 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.mOMeiR);
  obj.children = React7(Text_Text.Text, obj2);
  return React7(timestampProducer, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = closure_11();
  const obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  const obj3 = { style: tmp.footerContainer, children: null };
  const obj4 = { variant: "secondary", loading, disabled: loading, grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.G3Zk7V);
  obj4.onPress = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [React7(components_Button_Button.Button, obj4)];
  let tmp3Result = null != errors;
  if (tmp3Result) {
    const obj5 = { style: tmp.error, children: null };
    let anyErrorMessage;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj5.children = anyErrorMessage;
    tmp3Result = React7(native.LegacyText, obj5);
  }
  items1[1] = tmp3Result;
  obj3.children = items1;
  obj.children = closure_1_10(timestampProducer, obj3);
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12970).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  rowContainer: {
    marginHorizontal: 16,
    borderRadius: nativeDefault.radii.sm,
    padding: 12,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  },
  guildIcon: null,
  separator: null,
  header: null,
  title: null,
  footerSafeAreaContainer: null,
  footerContainer: null,
  error: null,
};
let obj3 = {
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
obj2.separator = { height: 8 };
obj2.header = { padding: 16, alignItems: "center", justifyContent: "center" };
obj2.title = { marginBottom: 8, textAlign: "center" };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.footerSafeAreaContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
obj2.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" };
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
obj2.error = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  noop = undefined;
  closure_3 = closure_11();
  const navigation = onClose(guildsInfo[16]).useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: onClose(guildsInfo[18]).MagnifyingGlassIcon,
          onPress() {
            closure_1_4.push(constants.SELECT_SCHOOL_SEARCH, { email, onClose, guildsInfo });
          },
          accessibilityLabel: null,
        };
        const intl = onClose(guildsInfo[12]).intl;
        obj.accessibilityLabel = intl.string(onClose(guildsInfo[12]).t["5h0QOP"]);
        return closure_2_9(onClose(guildsInfo[17]).HeaderActionButton, obj);
      },
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
  let obj2 = { children: null };
  const obj3 = {
    data: guildsInfo,
    ListHeaderComponent() {
      return closure_1_9(HubEmailConnectionGuildSelectHeader, {});
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_9(HubEmailConnectionGuildSelectRow, {
        guildInfo: item,
        signup: closure_3(function* () {
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
                  email = tmp4;
                  onClose = tmp8;
                  v3(null);
                  closure_1_7(true);
                  c3 = 2;
                  c4 = 3;
                  v3 = 1;
                  const obj5 = { value: email(12983).sendVerificationEmail(email, true, id), done: false };
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
                  const aPIError = new id(4656).APIError(closure_128_0);
                  v3(aPIError);
                  c3 = 0;
                  closure_1_7(false);
                  v3 = 3;
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  const obj = { email, onClose, guildId: closure_129_0 };
                  c4.push(constants.VERIFY_PIN, obj);
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
        loading,
      });
    },
    ItemSeparatorComponent() {
      return React7(timestampProducer, { style: closure_3.separator });
    },
    contentContainerStyle: null,
  };
  let obj = onClose(guildsInfo[16]);
  obj3.contentContainerStyle = { paddingBottom: 110 + email(guildsInfo[13])().bottom + 8 };
  const items2 = [
    closure_9(closure_7, obj3),
    closure_9(HubEmailConnectionGuildSelectFooter, { errors: tmp4[0], loading, onFooterButtonPressed: callback }),
  ];
  obj2.children = items2;
  return closure_10(onClose(guildsInfo[21]).HubEmailConnectionScreen, obj2);
}
export { HubEmailConnectionGuildSelectRow };
