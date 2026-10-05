// === Module 12455: GuildDirectoryNicknameUpsellModal ===

// Module 12455 (GuildDirectoryNicknameUpsellModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6097 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import Constants from "Constants" /* 12446 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, c4, c5, dependencyMap, guildId;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
const handleClose2 = function handleClose() {
  const obj = closure_2_1(closure_2_2[22]);
  obj.viewPrompt(constants.REAL_NAME_PROMPT, guildId);
  closure_1_1();
  const obj2 = closure_2_1(closure_2_2[23]);
  obj2.close();
};
function headerTitle() {
  return null;
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const GuildPrompts = Constants.GuildPrompts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIcon: { alignSelf: "center", marginTop: 16 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, input: { marginHorizontal: 16 }, redesignTextInput: obj3, redesignGrowSpacing: obj4, redesignButtonContainer: obj5 };
obj2 = { flex: 1, flexGrow: 2, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let header;
  let items1;
  let obj3;
  let ref;
  let title;
  let tmp7;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(54);
  guildId = guildId.guildId;
  const handleClose = guildId.handleClose;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const insets = handleClose(6471)().insets;
  [obj3, dependencyMap] = ref(react.useState(null), 2);
  ref(react.useState(null), 2);
  const tmp11 = ref(react.useState(""), 2);
  const first1 = tmp11[0];
  const tmp13 = tmp11[1];
  ref = react.useRef(null);
  if (cResult[3] === guildId) {
    if (cResult[4] === handleClose) {
      const sum = insets.bottom + tmp9(587).space.PX_16;
      if (cResult[7] === insets.top) {
        let tmp17;
        if (cResult[8] === sum) {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          if (cResult[13] === stateFromStores) {
            let tmp25;
            let name;
            ({ header, title } = tmp4);
            const tmp23 = cResult[16];
            if (stateFromStores != null) {
              name = stateFromStores.name;
            }
            if (tmp23 !== name) {
              const intl = tmp(1126).intl;
              const format = intl.format;
              let name1;
              const prop = tmp(1126).t["d+6kzl"];
              if (stateFromStores != null) {
                name1 = stateFromStores.name;
              }
              let obj2 = { guildName: name1 };
              const formatResult = format(prop, obj2);
              let name2;
              if (stateFromStores != null) {
                name2 = stateFromStores.name;
              }
              cResult[16] = name2;
              cResult[17] = formatResult;
              tmp25 = formatResult;
            } else {
              tmp25 = cResult[17];
            }
            if (cResult[18] === tmp4.title) {
              let tmp30;
              let tmp33;
              let tmp35;
              if (cResult[19] === tmp25) {
                tmp30 = cResult[20];
              }
              const _Symbol = Symbol;
              const description = tmp4.description;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult = intl2.string(tmp(1126).t.b3L8yx);
                cResult[21] = stringResult;
                tmp33 = stringResult;
              } else {
                tmp33 = cResult[21];
              }
              if (cResult[22] !== tmp4.description) {
                let obj4 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp33 };
                const tmp37 = closure_10(tmp(4886).Text, obj4);
                cResult[22] = tmp4.description;
                cResult[23] = tmp37;
                tmp35 = tmp37;
              } else {
                tmp35 = cResult[23];
              }
              if (cResult[24] === tmp4.header) {
                if (cResult[25] === tmp30) {
                  let tmp43;
                  let tmp42;
                  let tmp46;
                  const _Symbol2 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(1126).intl;
                    const stringResult1 = intl3.string(tmp(1126).t.ilDlmW);
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(tmp(1126).t.RfWvWI);
                    cResult[28] = stringResult1;
                    cResult[29] = stringResult2;
                    tmp43 = stringResult2;
                    tmp42 = stringResult1;
                  } else {
                    tmp42 = cResult[28];
                    tmp43 = cResult[29];
                  }
                  if (cResult[30] !== obj3) {
                    let firstFieldErrorMessage;
                    if (obj3 != null) {
                      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
                    }
                    cResult[30] = obj3;
                    cResult[31] = firstFieldErrorMessage;
                    tmp46 = firstFieldErrorMessage;
                  } else {
                    tmp46 = cResult[31];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    class J {
                      constructor() {
                        timerId = setTimeout(() => {
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToEnd();
                          }
                        }, 100);
                        return;
                      }
                    }
                    class Q {
                      constructor() {
                        timerId = setTimeout(() => {
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToEnd();
                          }
                        }, 100);
                        return;
                      }
                    }
                    cResult[32] = J;
                    cResult[33] = Q;
                  } else {
                    class J {
                      constructor() {
                        timerId = setTimeout(() => {
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToEnd();
                          }
                        }, 100);
                        return;
                      }
                    }
                    class Q {
                      constructor() {
                        timerId = setTimeout(() => {
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToEnd();
                          }
                        }, 100);
                        return;
                      }
                    }
                  }
                  if (cResult[34] === first1) {
                    class J {
                      constructor() {
                        timerId = setTimeout(() => {
                          const current = ref.current;
                          if (current != null) {
                            current.scrollToEnd();
                          }
                        }, 100);
                        return;
                      }
                    }
                  }
                  let obj5 = { label: tmp42, placeholder: tmp43, value: first1, onChangeText: tmp13, style: null, textStyle: null, clearButtonVisibility: tmp(1188).ClearButtonVisibility.WITH_CONTENT, error: tmp46, onFocus: J, onBlur: Q };
                  ({ input: obj10.style, redesignTextInput: obj10.textStyle } = tmp4);
                  const tmp9Result = handleClose(6097);
                  cResult[34] = first1;
                  cResult[35] = tmp4.input;
                  cResult[36] = tmp4.redesignTextInput;
                  cResult[37] = tmp46;
                  cResult[38] = closure_10(tmp9Result, obj5);
                  const tmp53 = closure_10(tmp9Result, obj5);
                }
              }
              let obj6 = { style: header, children: items1 };
              items1 = [tmp30, tmp35];
              cResult[24] = tmp4.header;
              cResult[25] = tmp30;
              cResult[26] = tmp35;
              cResult[27] = closure_11(closure_6, obj6);
              const tmp41 = closure_11(closure_6, obj6);
            }
            const obj7 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp25 };
            const tmp32 = closure_10(tmp(4886).Text, obj7);
            cResult[18] = tmp4.title;
            cResult[19] = tmp25;
            cResult[20] = tmp32;
            tmp30 = tmp32;
          }
          const obj8 = { style: tmp4.guildIcon, guild: stateFromStores, size: tmp(5971).GuildIconSizes.XLARGE };
          const tmp9Result2 = handleClose(5971);
          cResult[13] = stateFromStores;
          cResult[14] = tmp4.guildIcon;
          cResult[15] = closure_10(tmp9Result2, obj8);
          const tmp22 = closure_10(tmp9Result2, obj8);
        }
        const items2 = [tmp4.container, tmp17];
        cResult[10] = tmp4.container;
        cResult[11] = tmp17;
        cResult[12] = items2;
      }
      const obj9 = { paddingBottom: sum, paddingTop: insets.top };
      cResult[7] = insets.top;
      cResult[8] = sum;
      cResult[9] = obj9;
      tmp17 = obj9;
    }
  }
  let closure_0 = first1(function*() {
    let closure_1;
    let closure_2;
    let obj2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let nick;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            tmp25(null);
            nick = 1;
            const obj5 = { nick };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj2.updateGuildSelfMember(closure_0, obj5), done: false };
            obj2 = closure_0(dependencyMap[14]);
            return obj6;
          }
        } else {
          if (1 === c4) {
            nick = 0;
            closure_0 = tmp25;
            const self = this;
            const self2 = this;
            const aPIError = new closure_0(dependencyMap[15]).APIError(closure_0);
            tmp25(aPIError);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            nick = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp();
            nick = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp25) {
        if (0 === nick) {
          c5 = 3;
          throw tmp25;
        } else {
          c4 = 1;
        }
      }
    }
  });
  function handleSubmit() {
    return closure_0(...arguments);
  }
  cResult[3] = guildId;
  cResult[4] = handleClose;
  cResult[5] = first1;
  cResult[6] = handleSubmit;
}) : ((arg0) => {
  let Button;
  let _undefined;
  let c2;
  let firstFieldErrorMessage;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let name;
  let obj2;
  let obj22;
  let prop;
  let require;
  ({ guildId: require, handleClose: importDefault } = arg0);
  dependencyMap = undefined;
  let ref;
  let obj = function _handleSubmit2() {
    let nick;
    obj = _asyncToGenerator(async function() {
      let obj3;
      if (c5 === 2) {
        c5 = 3;
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
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = tmp4;
              _undefined(null);
              const obj5 = { nick };
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj3.updateGuildSelfMember(_require, obj5), done: false };
              obj3 = closure_0(closure_2[14]);
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[15]).APIError(closure_0);
              closure_129_2(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_1();
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_2 = tmp25;
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  obj = get_initialized;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(obj.useState(null), 2);
  ref(obj.useState(null), 2);
  const tmp7 = ref(obj.useState(""), 2);
  const value = tmp7[0];
  const tmp9 = tmp7[1];
  ref = obj.useRef(null);
  let obj3 = { ref, contentContainerStyle: items1, children: items2 };
  items1 = [tmp.container, ];
  let obj4 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  items1[1] = obj4;
  let obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XLARGE };
  const tmp14 = GuildIconDefault;
  items2 = [closure_10(tmp14, obj5), , , , ];
  let obj6 = { style: tmp.header, children: items3 };
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: format(prop, { guildName: name }) };
  const Text = Text_Text.Text;
  const intl = intl6.intl;
  format = intl.format;
  name = undefined;
  prop = intl6.t["d+6kzl"];
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items3 = [closure_10(Text, obj7), ];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl6.t.b3L8yx) };
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  items3[1] = closure_10(Text2, obj8);
  items2[1] = closure_11(closure_6, obj6);
  const obj10 = {
    label: intl3.string(intl6.t.ilDlmW),
    placeholder: intl4.string(intl6.t.RfWvWI),
    value,
    onChangeText: tmp9,
    style: null,
    textStyle: null,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    error: firstFieldErrorMessage,
    onFocus() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
    onBlur() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  const tmp5Result = FreeFormInputGroupDefault;
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  firstFieldErrorMessage = undefined;
  if (obj2 != null) {
    firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
  }
  items2[2] = closure_10(tmp5Result, obj10);
  const obj11 = { style: tmp.redesignGrowSpacing };
  items2[3] = closure_10(closure_6, obj11);
  const obj12 = { style: tmp.redesignButtonContainer, children: closure_10(Button, obj22) };
  obj22 = {
    size: "lg",
    text: intl5.string(intl6.t.Np4yXU),
    onPress: function handleSubmit() {
      return obj(...arguments);
    }
  };
  Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items2[4] = closure_10(closure_6, obj12);
  return closure_11(closure_7, obj3);
});
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryNicknameUpsellModal(arg0) {
  let closure_0;
  let tmp4;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let closure_129_0;
      let closure_129_1;
      let obj3;
      ({ guildId: closure_129_0, onHide: closure_129_1 } = closure_0);
      const handleClose = handleClose2;
      const obj = {};
      const obj2 = {
        fullscreen: true,
        headerLeft: obj3.getHeaderCloseButton(handleClose),
        headerTitle,
        render() {
          const obj = { guildId, handleClose };
          return closure_2_10(closure_2_13, obj);
        }
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      obj3 = NavigatorHeader;
      return obj;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = useInitialValueDefault(tmp4);
  if (cResult[2] !== tmp5) {
    let obj2 = { screens: tmp5, initialRouteName: UPSELL_SCREEN_KEY };
    const tmp9 = closure_10(tmp(6496).Navigator, obj2);
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function GuildDirectoryNicknameUpsellModal(arg0) {
  let closure_0;
  _require = arg0;
  let obj = {
    screens: useInitialValueDefault(() => {
      let closure_129_0;
      let closure_129_1;
      let obj3;
      ({ guildId: closure_129_0, onHide: closure_129_1 } = closure_0);
      const handleClose = handleClose2;
      let obj = {};
      let obj2 = {
        fullscreen: true,
        headerLeft: obj3.getHeaderCloseButton(handleClose),
        headerTitle,
        render() {
          const obj = { guildId, handleClose };
          return closure_2_10(closure_2_13, obj);
        }
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      obj3 = NavigatorHeader;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY
  };
  const Navigator = require("Navigator").Navigator;
  return closure_10(Navigator, obj);
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default tmp5;