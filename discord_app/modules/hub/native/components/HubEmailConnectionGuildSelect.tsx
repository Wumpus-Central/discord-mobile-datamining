// === Module 13372: HubEmailConnectionGuildSelect ===

// Module 13372 (HubEmailConnectionGuildSelect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2082 */;
import Text_Text from "Text/Text" /* 5149 */;
import components_Button_Button from "components/Button/Button" /* 5441 */;
import GuildIconDefault from "GuildIcon" /* 6381 */;
import Form from "Form" /* 8808 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HubEmailConnectionSteps = fn(13349).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5153);
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
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function HubEmailConnectionGuildSelectRow(arg0) {
  const cResult = c.c(12);
  ({ guildInfo, signup, loading } = arg0);
  const tmp4 = closure_10();
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
      const tmp15 = closure_1_8(Form.FormRow.Arrow, {});
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
    const tmp18 = closure_1_8(Form.FormRow, obj3);
    cResult[6] = guildInfo.name;
    cResult[7] = loading;
    cResult[8] = signup;
    cResult[9] = tmp4.rowContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  const tmp11 = closure_1_8(GuildIconDefault, { style: tmp4.guildIcon, guild: tmp5 });
  cResult[2] = tmp4.guildIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function HubEmailConnectionGuildSelectRow(guildInfo) {
  guildInfo = guildInfo.guildInfo;
  ({ signup, loading } = guildInfo);
  const tmp = closure_10();
  const obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name, leading: null, trailing: null };
  const obj2 = { style: tmp.guildIcon, guild: null };
  const tmp2 = GuildIconDefault;
  const obj4 = {};
  const merged = Object.assign(guildInfo);
  obj4.features = [];
  obj2.guild = GuildRecordUtils.fromGuildBasic(obj4);
  obj.leading = closure_1_8(tmp2, obj2);
  obj.trailing = closure_1_8(Form.FormRow.Arrow, {});
  return closure_1_8(Form.FormRow, obj);
});
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function HubEmailConnectionGuildSelectHeader() {
  const cResult = c.c(6);
  const tmp4 = closure_10();
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
    const tmp9 = closure_1_8(Text_Text.Text, obj2);
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
  const tmp11 = closure_1_8(View, { style: header, children: tmp7 });
  cResult[3] = tmp4.header;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function HubEmailConnectionGuildSelectHeader() {
  const tmp = closure_10();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.mOMeiR);
  obj.children = closure_1_8(Text_Text.Text, obj2);
  return closure_1_8(View, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function HubEmailConnectionGuildSelectFooter(arg0) {
  const cResult = c.c(19);
  ({ errors, loading, onFooterButtonPressed } = arg0);
  const tmp4 = closure_10();
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
            const tmp25 = closure_1_8(View, obj3);
            cResult[16] = tmp6;
            cResult[17] = tmp18;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj4 = { style: tmp4.footerContainer, children: null };
        const items = [tmp10, tmp13];
        obj4.children = items;
        const tmp21 = React6(View, obj4);
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
        tmp16Result = closure_1_8(native.LegacyText, obj5);
      }
      cResult[9] = errors;
      cResult[10] = tmp4.error;
      cResult[11] = tmp16Result;
      tmp13 = tmp16Result;
    }
    const obj6 = { variant: "secondary", loading, disabled: loading, grow: true, text: tmp8, onPress: onFooterButtonPressed };
    const tmp12 = closure_1_8(components_Button_Button.Button, obj6);
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
}) : (function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = closure_10();
  const obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  const obj3 = { style: tmp.footerContainer, children: null };
  const obj4 = { variant: "secondary", loading, disabled: loading, grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.G3Zk7V);
  obj4.onPress = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [closure_1_8(components_Button_Button.Button, obj4), ];
  let tmp3Result = null != errors;
  if (tmp3Result) {
    const obj5 = { style: tmp.error, children: null };
    let anyErrorMessage;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj5.children = anyErrorMessage;
    tmp3Result = closure_1_8(native.LegacyText, obj5);
  }
  items1[1] = tmp3Result;
  obj3.children = items1;
  obj.children = React6(View, obj3);
  return closure_1_8(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  noop = undefined;
  closure_3 = closure_10();
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
        return closure_2_8(onClose(guildsInfo[19]).HeaderActionButton, obj);
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
    keyExtractor(id) {
      return id.id;
    },
    ListHeaderComponent() {
      return closure_1_8(closure_1_12, {});
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      return closure_1_8(closure_1_11, {
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
                  constants(true);
                  c3 = 2;
                  c4 = 3;
                  v3 = 1;
                  const obj5 = { value: email(13363).sendVerificationEmail(email, true, id), done: false };
                  return obj5;
                }
              } else if (1 === tmp8) {
                c3 = 0;
                constants(false);
                throw closure_2;
              } else {
                if (2 === tmp8) {
                  c3 = 1;
                  closure_128_0 = closure_2;
                  const aPIError = new id(5853).APIError(closure_128_0);
                  v3(aPIError);
                  c3 = 0;
                  constants(false);
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
                constants(false);
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
      return closure_2_8(View, { style: closure_3.separator });
    },
    contentContainerStyle: null
  };
  let obj = onClose(guildsInfo[18]);
  obj3.contentContainerStyle = { paddingBottom: 110 + email(guildsInfo[15])().bottom + 8 };
  const items2 = [closure_8(onClose(guildsInfo[24]).FlashList, obj3), closure_8(closure_13, { errors: tmp4[0], loading, onFooterButtonPressed: callback })];
  obj2.children = items2;
  return closure_9(onClose(guildsInfo[23]).HubEmailConnectionScreen, obj2);
};
export const HubEmailConnectionGuildSelectRow = tmp3;