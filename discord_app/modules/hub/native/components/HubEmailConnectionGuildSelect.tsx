// === Module 12406: HubEmailConnectionGuildSelect ===

// Module 12406 (HubEmailConnectionGuildSelect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import Form from "Form" /* 8895 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12385).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { rowContainer: { marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, guildIcon: null, separator: null, header: null, title: null, footerSafeAreaContainer: null, footerContainer: null, error: null };
let obj3 = { marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
obj2.separator = { height: 8 };
obj2.header = { padding: 16, alignItems: "center", justifyContent: "center" };
obj2.title = { marginBottom: 8, textAlign: "center" };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.footerSafeAreaContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj2.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj2.error = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ guildInfo, signup, loading } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== guildInfo) {
    const obj2 = {};
    const merged = Object.assign(guildInfo);
    obj2.features = [];
    const fromGuildBasicResult = GuildRecordUtils.fromGuildBasic(obj2);
    cResult[0] = guildInfo;
    cResult[1] = fromGuildBasicResult;
    let tmp5 = fromGuildBasicResult;
    const tmpResult = GuildRecordUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.guildIcon) {
    if (cResult[3] === tmp5) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = options(Form.FormRow.Arrow, {});
      cResult[5] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === guildInfo.name) {
      if (cResult[7] === loading) {
        if (cResult[8] === signup) {
          if (cResult[9] === tmp4.rowContainer) {
            if (cResult[10] === tmp10) {
              let tmp16 = cResult[11];
            }
            return tmp16;
          }
        }
      }
    }
    const obj3 = { onPress: signup, disabled: loading, DEPRECATED_style: tmp4.rowContainer, label: guildInfo.name, leading: tmp10, trailing: tmp13 };
    const tmp18 = options(Form.FormRow, obj3);
    cResult[6] = guildInfo.name;
    cResult[7] = loading;
    cResult[8] = signup;
    cResult[9] = tmp4.rowContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  const tmp11 = options(GuildIconDefault, { style: tmp4.guildIcon, guild: tmp5 });
  cResult[2] = tmp4.guildIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((guildInfo) => {
  guildInfo = guildInfo.guildInfo;
  ({ signup, loading } = guildInfo);
  const tmp = closure_11();
  const obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name, leading: null, trailing: null };
  const obj2 = { style: tmp.guildIcon, guild: null };
  const tmp2 = GuildIconDefault;
  const obj4 = {};
  const merged = Object.assign(guildInfo);
  obj4.features = [];
  obj2.guild = GuildRecordUtils.fromGuildBasic(obj4);
  obj.leading = options(tmp2, obj2);
  obj.trailing = options(Form.FormRow.Arrow, {});
  return options(Form.FormRow, obj);
});
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_11();
  ({ header, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.mOMeiR);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.title) {
    const obj2 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = options(Text_Text.Text, obj2);
    cResult[1] = tmp4.title;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.header) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = options(timestampProducer, { style: header, children: tmp7 });
  cResult[3] = tmp4.header;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  const tmp = closure_11();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.mOMeiR);
  obj.children = options(Text_Text.Text, obj2);
  return options(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ errors, loading, onFooterButtonPressed } = arg0);
  const tmp4 = closure_11();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[0] = bottom;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.footerSafeAreaContainer) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.G3Zk7V);
      cResult[5] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] === loading) {
      if (cResult[7] === onFooterButtonPressed) {
        let tmp10 = cResult[8];
      }
      if (cResult[9] === errors) {
        if (cResult[10] === tmp4.error) {
          let tmp13 = cResult[11];
        }
        if (cResult[12] === tmp4.footerContainer) {
          if (cResult[13] === tmp10) {
            if (cResult[14] === tmp13) {
              let tmp18 = cResult[15];
            }
            if (cResult[16] === tmp6) {
              if (cResult[17] === tmp18) {
                let tmp22 = cResult[18];
              }
              return tmp22;
            }
            const obj3 = { style: tmp6, children: tmp18 };
            const tmp25 = options(timestampProducer, obj3);
            cResult[16] = tmp6;
            cResult[17] = tmp18;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj4 = { style: tmp4.footerContainer, children: null };
        const items = [tmp10, tmp13];
        obj4.children = items;
        const tmp21 = v65535(timestampProducer, obj4);
        cResult[12] = tmp4.footerContainer;
        cResult[13] = tmp10;
        cResult[14] = tmp13;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
      let tmp16Result = null != errors;
      if (tmp16Result) {
        const obj5 = { style: tmp4.error, children: null };
        let anyErrorMessage;
        if (errors != null) {
          anyErrorMessage = errors.getAnyErrorMessage();
        }
        obj5.children = anyErrorMessage;
        tmp16Result = options(native.LegacyText, obj5);
      }
      cResult[9] = errors;
      cResult[10] = tmp4.error;
      cResult[11] = tmp16Result;
      tmp13 = tmp16Result;
    }
    const obj6 = { variant: "secondary", loading, disabled: loading, grow: true, text: tmp8, onPress: onFooterButtonPressed };
    const tmp12 = options(components_Button_Button.Button, obj6);
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
}) : ((onFooterButtonPressed) => {
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
  const items1 = [options(components_Button_Button.Button, obj4), ];
  let tmp3Result = null != errors;
  if (tmp3Result) {
    const obj5 = { style: tmp.error, children: null };
    let anyErrorMessage;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj5.children = anyErrorMessage;
    tmp3Result = options(native.LegacyText, obj5);
  }
  items1[1] = tmp3Result;
  obj3.children = items1;
  obj.children = v65535(timestampProducer, obj3);
  return options(timestampProducer, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  noop = undefined;
  closure_3 = closure_11();
  const navigation = onClose(guildsInfo[18]).useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: onClose(guildsInfo[20]).MagnifyingGlassIcon,
          onPress() {
            closure_1_4.push(constants.SELECT_SCHOOL_SEARCH, { email, onClose, guildsInfo });
          },
          accessibilityLabel: null
        };
        const intl = onClose(guildsInfo[13]).intl;
        obj.accessibilityLabel = intl.string(onClose(guildsInfo[13]).t["5h0QOP"]);
        return closure_2_9(onClose(guildsInfo[19]).HeaderActionButton, obj);
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
  let obj2 = { children: null };
  const obj3 = {
    data: guildsInfo,
    ListHeaderComponent() {
      return closure_1_9(closure_1_13, {});
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_9(closure_1_12, {
        guildInfo: item,
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
              return { value: "IconComponent", done: null };
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
                  const obj5 = { value: email(12399).sendVerificationEmail(email, true, id), done: false };
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
                  const aPIError = new id(5312).APIError(closure_128_0);
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
        loading
      });
    },
    ItemSeparatorComponent() {
      return options(timestampProducer, { style: closure_3.separator });
    },
    contentContainerStyle: null
  };
  let obj = onClose(guildsInfo[18]);
  obj3.contentContainerStyle = { paddingBottom: 110 + email(guildsInfo[15])().bottom + 8 };
  const items2 = [closure_9(closure_7, obj3), closure_9(closure_14, { errors: tmp4[0], loading, onFooterButtonPressed: callback })];
  obj2.children = items2;
  return closure_10(onClose(guildsInfo[23]).HubEmailConnectionScreen, obj2);
};
export const HubEmailConnectionGuildSelectRow = tmp4;