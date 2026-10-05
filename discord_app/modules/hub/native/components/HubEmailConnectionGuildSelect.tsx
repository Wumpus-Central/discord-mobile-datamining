// discord_app/modules/hub/native/components/HubEmailConnectionGuildSelect.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import HubConstants from "../../HubConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c4, closure_2, navigation;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: metroRequire, FlatList: metroImportDefault } = react_native);
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  rowContainer: obj2,
  guildIcon: obj3,
  separator: { height: 8 },
  header: { padding: 16, alignItems: "center", justifyContent: "center" },
  title: { marginBottom: 8, textAlign: "center" },
  footerSafeAreaContainer: obj4,
  footerContainer: { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" },
  error: obj5,
};
obj2 = {
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj5 = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildInfo;
      let loading;
      let signup;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      ({ guildInfo, signup, loading } = arg0);
      const tmp4 = closure_11();
      const rowContainer = tmp4.rowContainer;
      const name = guildInfo.name;
      const guildIcon = tmp4.guildIcon;
      if (cResult[0] !== guildInfo) {
        const obj2 = { features: [] };
        const fromGuildBasic = GuildRecordUtils.fromGuildBasic;
        GuildRecordUtils;
        const merged = Object.assign(guildInfo);
        const fromGuildBasicResult = fromGuildBasic(obj2);
        cResult[0] = guildInfo;
        cResult[1] = fromGuildBasicResult;
        tmp5 = fromGuildBasicResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.guildIcon) {
        let tmp11;
        let tmp14;
        if (cResult[3] === tmp5) {
          tmp11 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = React4(Form.FormRow.Arrow, {});
          cResult[5] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] === guildInfo.name) {
          if (cResult[7] === loading) {
            if (cResult[8] === signup) {
              if (cResult[9] === tmp4.rowContainer) {
                let tmp17;
                if (cResult[10] === tmp11) {
                  tmp17 = cResult[11];
                }
                return tmp17;
              }
            }
          }
        }
        const obj3 = {
          onPress: signup,
          disabled: loading,
          DEPRECATED_style: rowContainer,
          label: name,
          leading: tmp11,
          trailing: tmp14,
        };
        const tmp19 = React4(Form.FormRow, obj3);
        cResult[6] = guildInfo.name;
        cResult[7] = loading;
        cResult[8] = signup;
        cResult[9] = tmp4.rowContainer;
        cResult[10] = tmp11;
        cResult[11] = tmp19;
        tmp17 = tmp19;
      }
      const tmp12 = React4(GuildIconDefault, { style: guildIcon, guild: tmp5 });
      cResult[2] = tmp4.guildIcon;
      cResult[3] = tmp5;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (guildInfo) => {
      let fromGuildBasic;
      let loading;
      let obj2;
      let obj3;
      let signup;
      let tmp2;
      guildInfo = guildInfo.guildInfo;
      ({ signup, loading } = guildInfo);
      const tmp = closure_11();
      const obj = {
        onPress: signup,
        disabled: loading,
        DEPRECATED_style: tmp.rowContainer,
        label: guildInfo.name,
        leading: React4(tmp2, obj2),
        trailing: React4(Form.FormRow.Arrow, {}),
      };
      const FormRow = Form.FormRow;
      obj2 = { style: tmp.guildIcon, guild: fromGuildBasic(obj3) };
      obj3 = { features: [] };
      tmp2 = GuildIconDefault;
      fromGuildBasic = GuildRecordUtils.fromGuildBasic;
      GuildRecordUtils;
      const merged = Object.assign(guildInfo);
      return React4(FormRow, obj);
    };
let closure_12 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let header;
      let title;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp4 = closure_11();
      ({ header, title } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.mOMeiR);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.title) {
        const obj2 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp9 = React4(Text_Text.Text, obj2);
        cResult[1] = tmp4.title;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.header) {
        let tmp10;
        if (cResult[4] === tmp7) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = React4(metroRequire, { style: header, children: tmp7 });
      cResult[3] = tmp4.header;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      let Text;
      let intl;
      let obj2;
      const tmp = closure_11();
      const obj = { style: tmp.header, children: React4(Text, obj2) };
      obj2 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl2.t.mOMeiR),
      };
      Text = Text_Text.Text;
      intl = intl2.intl;
      return React4(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let anyErrorMessage;
      let errors;
      let items;
      let loading;
      let onFooterButtonPressed;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(19);
      ({ errors, loading, onFooterButtonPressed } = arg0);
      const tmp4 = closure_11();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.footerSafeAreaContainer) {
        let tmp6;
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        const footerContainer = tmp4.footerContainer;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.G3Zk7V);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === loading) {
          let tmp10;
          if (cResult[7] === onFooterButtonPressed) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === errors) {
            let tmp13;
            if (cResult[10] === tmp4.error) {
              tmp13 = cResult[11];
            }
            if (cResult[12] === tmp4.footerContainer) {
              if (cResult[13] === tmp10) {
                let tmp18;
                if (cResult[14] === tmp13) {
                  tmp18 = cResult[15];
                }
                if (cResult[16] === tmp6) {
                  let tmp22;
                  if (cResult[17] === tmp18) {
                    tmp22 = cResult[18];
                  }
                  return tmp22;
                }
                const obj3 = { style: tmp6, children: tmp18 };
                const tmp25 = React4(metroRequire, obj3);
                cResult[16] = tmp6;
                cResult[17] = tmp18;
                cResult[18] = tmp25;
                tmp22 = tmp25;
              }
            }
            const obj4 = { style: footerContainer, children: items };
            items = [tmp10, tmp13];
            const tmp21 = authStore(metroRequire, obj4);
            cResult[12] = tmp4.footerContainer;
            cResult[13] = tmp10;
            cResult[14] = tmp13;
            cResult[15] = tmp21;
            tmp18 = tmp21;
          }
          let tmp16Result = null != errors;
          if (tmp16Result) {
            const obj5 = { style: tmp4.error, children: anyErrorMessage };
            anyErrorMessage = undefined;
            const LegacyText = native.LegacyText;
            if (errors != null) {
              anyErrorMessage = errors.getAnyErrorMessage();
            }
            tmp16Result = React4(LegacyText, obj5);
          }
          cResult[9] = errors;
          cResult[10] = tmp4.error;
          cResult[11] = tmp16Result;
          tmp13 = tmp16Result;
        }
        const obj6 = {
          variant: "secondary",
          loading,
          disabled: loading,
          grow: true,
          text: tmp8,
          onPress: onFooterButtonPressed,
        };
        const tmp12 = React4(components_Button_Button.Button, obj6);
        cResult[6] = loading;
        cResult[7] = onFooterButtonPressed;
        cResult[8] = tmp12;
        tmp10 = tmp12;
      }
      const items1 = [tmp4.footerSafeAreaContainer, tmp5];
      cResult[2] = tmp4.footerSafeAreaContainer;
      cResult[3] = tmp5;
      cResult[4] = items1;
      tmp6 = items1;
    }
  : (onFooterButtonPressed) => {
      let anyErrorMessage;
      let errors;
      let intl;
      let items;
      let items1;
      let loading;
      let obj3;
      ({ errors, loading } = onFooterButtonPressed);
      onFooterButtonPressed = onFooterButtonPressed.onFooterButtonPressed;
      const tmp = closure_11();
      const obj = { style: items, children: authStore(metroRequire, obj3) };
      items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      obj3 = { style: tmp.footerContainer, children: items1 };
      const obj4 = {
        variant: "secondary",
        loading,
        disabled: loading,
        grow: true,
        text: intl.string(intl2.t.G3Zk7V),
        onPress: onFooterButtonPressed,
      };
      ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
      const Button = components_Button_Button.Button;
      intl = intl2.intl;
      items1 = [React4(Button, obj4)];
      let tmp3Result = null != errors;
      if (tmp3Result) {
        const obj5 = { style: tmp.error, children: anyErrorMessage };
        anyErrorMessage = undefined;
        const LegacyText = native.LegacyText;
        if (errors != null) {
          anyErrorMessage = errors.getAnyErrorMessage();
        }
        tmp3Result = React4(LegacyText, obj5);
      }
      items1[1] = tmp3Result;
      return React4(metroRequire, obj);
    };
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  let closure_5;
  let items2;
  let obj4;
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  react = undefined;
  let closure_3 = closure_11();
  let obj = onClose(guildsInfo[18]);
  navigation = obj.useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        let obj = {
          IconComponent: onClose(guildsInfo[20]).MagnifyingGlassIcon,
          onPress() {
            const obj = { email, onClose, guildsInfo };
            closure_1_4.push(constants.SELECT_SCHOOL_SEARCH, obj);
          },
          accessibilityLabel: intl.string(onClose(guildsInfo[13]).t["5h0QOP"]),
        };
        const HeaderActionButton = onClose(guildsInfo[19]).HeaderActionButton;
        intl = onClose(guildsInfo[13]).intl;
        return closure_2_9(HeaderActionButton, obj);
      },
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [email, navigation, onClose];
  const callback = react.useCallback(() => {
    const obj = { email, onClose };
    navigation.push(HubEmailConnectionSteps.SUBMIT_SCHOOL, obj);
  }, items1);
  const bottom = email(guildsInfo[15])().bottom;
  const tmp4 = navigation(react.useState(null), 2);
  react = tmp4[1];
  const first = tmp4[0];
  const tmp6 = navigation(react.useState(false), 2);
  const first1 = tmp6[0];
  let closure_7 = tmp6[1];
  let obj2 = { children: items2 };
  let obj3 = {
    data: guildsInfo,
    ListHeaderComponent() {
      return closure_1_9(closure_1_13, {});
    },
    renderItem(item) {
      item = item.item;
      let obj = {
        guildInfo: item,
        signup: closure_3(function* () {
          let obj3;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
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
                  email = tmp;
                  onClose = tmp4;
                  v3(null);
                  closure_1_7(true);
                  c3 = 2;
                  c4 = 3;
                  v3 = 1;
                  const obj5 = { value: obj3.sendVerificationEmail(email, true, id), done: false };
                  obj3 = email(guildsInfo[21]);
                  return obj5;
                }
              } else if (1 === c4) {
                c3 = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === c4) {
                  c3 = 1;
                  onClose = closure_2;
                  const self = this;
                  const self2 = this;
                  const aPIError = new id(guildsInfo[22]).APIError(onClose);
                  v3(aPIError);
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_1_7(false);
                  v3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  const obj = { email, onClose, guildId: closure_129_0 };
                  c4.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                closure_1_7(false);
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp42) {
              closure_2 = tmp42;
              if (0 === c3) {
                v3 = 3;
                throw tmp42;
              } else if (1 === tmp44) {
                c4 = 1;
              } else {
                c4 = 2;
              }
            }
          }
        }),
        loading: first1,
      };
      const id = item.id;
      return closure_1_9(closure_1_12, obj);
    },
    ItemSeparatorComponent() {
      const obj = { style: closure_3.separator };
      return React4(metroRequire, obj);
    },
    contentContainerStyle: obj4,
  };
  obj4 = { paddingBottom: 110 + bottom + 8 };
  const HubEmailConnectionScreen = onClose(guildsInfo[23]).HubEmailConnectionScreen;
  items2 = [
    closure_9(closure_7, obj3),
    closure_9(closure_14, { errors: first, loading: first1, onFooterButtonPressed: callback }),
  ];
  return closure_10(HubEmailConnectionScreen, obj2);
}
export const HubEmailConnectionGuildSelectRow = tmp5;
