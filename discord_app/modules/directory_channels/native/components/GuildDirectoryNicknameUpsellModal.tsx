// === Module 12506: GuildDirectoryNicknameUpsellModal ===

// Module 12506 (GuildDirectoryNicknameUpsellModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import useInitialValueDefault from "useInitialValue" /* 6176 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6289 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6663 */;
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 12498 */;
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "GuildDirectoryNicknameUpsellModalActionCreators" /* 12505 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildPrompts = fn(12497).GuildPrompts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, flexGrow: 2, marginTop: fn(6263).NAV_BAR_HEIGHT }, guildIcon: { alignSelf: "center", marginTop: 16 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, input: { marginHorizontal: 16 }, redesignTextInput: null, redesignGrowSpacing: null, redesignButtonContainer: null };
let obj3 = { flex: 1, flexGrow: 2, marginTop: fn(6263).NAV_BAR_HEIGHT };
obj2.redesignTextInput = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.redesignGrowSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj5 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.redesignButtonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryNicknameUpsell(guildId) {
  const cResult = require("c").c(54);
  guildId = guildId.guildId;
  _require = guildId;
  const handleClose = guildId.handleClose;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  const insets = handleClose(6663)().insets;
  const tmpResult = require("initialize");
  [obj3, dependencyMap] = ref(noop.useState(null), 2);
  const tmp11 = ref(noop.useState(""), 2);
  const first1 = tmp11[0];
  ref = noop.useRef(null);
  if (cResult[3] === guildId) {
    if (cResult[4] === handleClose) {
      const sum = insets.bottom + tmp9(587).space.PX_16;
      if (cResult[7] === insets.top) {
        if (cResult[8] === sum) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          if (cResult[13] === stateFromStores) {
            let name;
            ({ header, title } = tmp4);
            if (stateFromStores != null) {
              name = stateFromStores.name;
            }
            if (cResult[16] !== name) {
              const intl = tmp(1126).intl;
              let name1;
              if (stateFromStores != null) {
                name1 = stateFromStores.name;
              }
              const obj2 = { guildName: name1 };
              const formatResult = intl.format(tmp(1126).t["d+6kzl"], obj2);
              let name2;
              if (stateFromStores != null) {
                name2 = stateFromStores.name;
              }
              cResult[16] = name2;
              cResult[17] = formatResult;
              let tmp23 = formatResult;
            } else {
              tmp23 = cResult[17];
            }
            if (cResult[18] === tmp4.title) {
              if (cResult[19] === tmp23) {
                let tmp27 = cResult[20];
              }
              const _Symbol = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult = intl2.string(tmp(1126).t.b3L8yx);
                cResult[21] = stringResult;
                let tmp30 = stringResult;
              } else {
                tmp30 = cResult[21];
              }
              if (cResult[22] !== tmp4.description) {
                const obj4 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp30 };
                const tmp34 = closure_10(tmp(5087).Text, obj4);
                cResult[22] = tmp4.description;
                cResult[23] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[23];
              }
              if (cResult[24] === tmp4.header) {
                if (cResult[25] === tmp27) {
                  const _Symbol2 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(1126).intl;
                    const stringResult1 = intl3.string(tmp(1126).t.ilDlmW);
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(tmp(1126).t.RfWvWI);
                    cResult[28] = stringResult1;
                    cResult[29] = stringResult2;
                    let tmp40 = stringResult2;
                    let tmp39 = stringResult1;
                  } else {
                    tmp39 = cResult[28];
                    tmp40 = cResult[29];
                  }
                  if (cResult[30] !== obj3) {
                    let firstFieldErrorMessage;
                    if (obj3 != null) {
                      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
                    }
                    cResult[30] = obj3;
                    cResult[31] = firstFieldErrorMessage;
                    let tmp43 = firstFieldErrorMessage;
                  } else {
                    tmp43 = cResult[31];
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
                  const obj5 = { label: tmp39, placeholder: tmp40, value: first1, onChangeText: tmp11[1], style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
                  ({ input: obj10.style, redesignTextInput: obj10.textStyle } = tmp4);
                  obj5.clearButtonVisibility = tmp(1200).ClearButtonVisibility.WITH_CONTENT;
                  obj5.error = tmp43;
                  obj5.onFocus = J;
                  obj5.onBlur = Q;
                  const tmp50 = closure_10(tmp9(6289), obj5);
                  cResult[34] = first1;
                  cResult[35] = tmp4.input;
                  cResult[36] = tmp4.redesignTextInput;
                  cResult[37] = tmp43;
                  cResult[38] = tmp50;
                  const tmp9Result = tmp9(6289);
                }
              }
              const obj6 = { style: header, children: null };
              const items1 = [tmp27, tmp32];
              obj6.children = items1;
              const tmp38 = closure_11(closure_6, obj6);
              cResult[24] = tmp4.header;
              cResult[25] = tmp27;
              cResult[26] = tmp32;
              cResult[27] = tmp38;
            }
            const obj7 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp23 };
            const tmp29 = closure_10(tmp(5087).Text, obj7);
            cResult[18] = tmp4.title;
            cResult[19] = tmp23;
            cResult[20] = tmp29;
            tmp27 = tmp29;
          }
          const obj8 = { style: tmp4.guildIcon, guild: stateFromStores, size: tmp(6165).GuildIconSizes.XLARGE };
          const tmp21 = closure_10(tmp9(6165), obj8);
          cResult[13] = stateFromStores;
          cResult[14] = tmp4.guildIcon;
          cResult[15] = tmp21;
          const tmp9Result2 = tmp9(6165);
        }
        const items2 = [tmp4.container, tmp16];
        cResult[10] = tmp4.container;
        cResult[11] = tmp16;
        cResult[12] = items2;
      }
      const obj9 = { paddingBottom: sum, paddingTop: insets.top };
      cResult[7] = insets.top;
      cResult[8] = sum;
      cResult[9] = obj9;
      tmp16 = obj9;
    }
  }
  _require = first1(function*() {
    tmp30(null);
    let nick = 1;
    yield closure_0(6806).updateGuildSelfMember(closure_0, { nick });
    if (1 === tmp7) {
      nick = 0;
      closure_128_0 = tmp30;
      const aPIError = new closure_0(5632).APIError(closure_128_0);
      tmp30(aPIError);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      tmp3();
      nick = 0;
    }
    nick = 0;
    return value;
  });
  function handleSubmit() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[3] = guildId;
  cResult[4] = handleClose;
  cResult[5] = first1;
  cResult[6] = handleSubmit;
  const tmp10 = ref(noop.useState(null), 2);
}) : (function GuildDirectoryNicknameUpsell(arg0) {
  ({ guildId: require, handleClose: importDefault } = arg0);
  dependencyMap = undefined;
  let ref;
  noop = async function _handleSubmit2() {
    closure_1 = tmp3;
    dependencyMap(null);
    await closure_0(tmp30[14]).updateGuildSelfMember(closure_2_0, { nick });
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp30;
      const aPIError = new closure_0(tmp30[15]).APIError(closure_128_0);
      closure_129_2(aPIError);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_1();
      c3 = 0;
    }
    return value;
  };
  const tmp = closure_12();
  const items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(noop.useState(null), 2);
  const tmp7 = ref(noop.useState(""), 2);
  value = tmp7[0];
  ref = noop.useRef(null);
  const obj3 = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  const tmp6 = ref(noop.useState(null), 2);
  items1[1] = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  obj3.contentContainerStyle = items1;
  const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: null };
  const obj4 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  obj5.size = GuildIcon.GuildIconSizes.XLARGE;
  const items2 = [closure_10(GuildIconDefault, obj5), , , , ];
  const obj6 = { style: tmp.header, children: null };
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  obj7.children = intl.format(util.t["d+6kzl"], { guildName: name });
  const items3 = [closure_10(Text_Text.Text, obj7), ];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.b3L8yx);
  items3[1] = closure_10(Text_Text.Text, obj8);
  obj6.children = items3;
  items2[1] = closure_11(closure_6, obj6);
  const obj10 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const intl3 = util.intl;
  obj10.label = intl3.string(util.t.ilDlmW);
  const intl4 = util.intl;
  obj10.placeholder = intl4.string(util.t.RfWvWI);
  obj10.value = value;
  obj10.onChangeText = tmp7[1];
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  obj10.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (obj2 != null) {
    firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
  }
  obj10.error = firstFieldErrorMessage;
  obj10.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj10.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = closure_10(FreeFormInputGroupDefault, obj10);
  items2[3] = closure_10(closure_6, { style: tmp.redesignGrowSpacing });
  const obj12 = { style: tmp.redesignButtonContainer, children: null };
  const obj22 = { size: "lg", text: null, onPress: null };
  const intl5 = util.intl;
  obj22.text = intl5.string(util.t.Np4yXU);
  obj22.onPress = function handleSubmit() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj12.children = closure_10(components_Button_Button.Button, obj22);
  items2[4] = closure_10(closure_6, obj12);
  obj3.children = items2;
  return closure_11(closure_7, obj3);
});
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
ReactCompilerGating = fn(558);
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryNicknameUpsellModal(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      ({ guildId: closure_0, onHide: closure_1 } = closure_0);
      function handleClose() {
        GuildPromptsActionCreatorsDefault.viewPrompt(constants.REAL_NAME_PROMPT, guildId);
        closure_1_1();
        GuildDirectoryNicknameUpsellModalActionCreatorsDefault.close();
      }
      const obj = {};
      const obj2 = {
        fullscreen: true,
        headerLeft: NavigatorHeader.getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return closure_2_10(closure_2_13, { guildId, handleClose });
        }
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      return obj;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = useInitialValueDefault(tmp4);
  if (cResult[2] !== tmp5) {
    let obj2 = { screens: tmp5, initialRouteName: UPSELL_SCREEN_KEY };
    const tmp9 = closure_10(require("Navigator").Navigator, obj2);
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function GuildDirectoryNicknameUpsellModal(arg0) {
  _require = arg0;
  return closure_10(require("Navigator").Navigator, {
    screens: useInitialValueDefault(() => {
      ({ guildId: closure_0, onHide: closure_1 } = guildId);
      function handleClose() {
        GuildPromptsActionCreatorsDefault.viewPrompt(constants.REAL_NAME_PROMPT, guildId);
        closure_1_1();
        GuildDirectoryNicknameUpsellModalActionCreatorsDefault.close();
      }
      let obj = {};
      const obj2 = {
        fullscreen: true,
        headerLeft: NavigatorHeader.getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return closure_2_10(closure_2_13, { guildId, handleClose });
        }
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY
  });
});