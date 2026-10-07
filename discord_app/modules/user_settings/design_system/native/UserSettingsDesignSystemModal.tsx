// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalActionButton from "../../../../design/components/Modal/native/ModalActionButton.native.tsx";
import Modal from "../../../../design/components/Modal/native/Modal.native.tsx";
import ModalFooter from "../../../../design/components/Modal/native/ModalFooter.native.tsx";
import StepModal from "../../../../design/components/Modal/native/StepModal.native.tsx";
import ModalDisclaimer from "../../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function openDemoModal() {
  ModalActionCreatorsDefault.push(closure_12);
}
function openDemoStepModal() {
  ModalActionCreatorsDefault.push(closure_13);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, emojiContainer: null, emoji: null, title: null, tableRows: null };
let size = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
obj2.emojiContainer = size;
obj2.emoji = { fontSize: 48, lineHeight: 80 };
obj2.title = { marginBottom: 16 };
obj2.tableRows = { width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const constants = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      let obj = {};
      const obj2 = {
        headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
        headerRight() {
          const obj = { text: null, onPress: null };
          const intl = closure_1_0(1126).intl;
          obj.text = intl.string(closure_1_0(1126).t["5Wxrcd"]);
          obj.onPress = closure_1_1(5099).pop;
          return closure_1_7(closure_1_0(6890).HeaderActionButton, obj);
        },
        headerTitle() {
          return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
        },
        render(arg0, arg1) {
          closure_0 = arg1;
          return closure_7(closure_14, {
            title: "Come on fhqwhgads.",
            emoji: "\u{1F60E}",
            action: "Everybody to the limit",
            onAction() {
              return closure_0.push(constants.WHO_DAT);
            },
            secondaryAction: "Maybe later",
            onSecondaryAction: closure_1(5099).pop,
            disclaimer: "I said come on fhqwhgads."
          });
        }
      };
      obj[constants.START] = obj2;
      const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
      const obj3 = require("NavigatorHeader");
      obj4.headerLeft = require("NavigatorHeader").getHeaderBackButton();
      const obj5 = require("NavigatorHeader");
      obj4.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
      obj4.headerTitle = function headerTitle() {
        return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.WHO_DAT });
      };
      obj4.render = function render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_14, {
          title: "Who's that?",
          emoji: "\u{1F4BF}",
          action: "It's to the limit",
          onAction() {
            return closure_0.push(constants.EVERYBODY);
          },
          children: closure_7(closure_0(6105).TextInput, { placeholder: "My friend Jake" })
        });
      };
      obj[constants.WHO_DAT] = obj4;
      const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
      const obj6 = require("NavigatorHeader");
      obj7.headerLeft = require("NavigatorHeader").getHeaderBackButton();
      const obj8 = require("NavigatorHeader");
      obj7.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
      obj7.headerTitle = function headerTitle() {
        return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.EVERYBODY });
      };
      obj7.render = function render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_15, {
          onAction() {
            return closure_0.push(constants.JOCKIN);
          }
        });
      };
      obj[constants.EVERYBODY] = obj7;
      const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
      const obj9 = require("NavigatorHeader");
      obj10.headerLeft = require("NavigatorHeader").getHeaderBackButton();
      const obj11 = require("NavigatorHeader");
      obj10.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
      obj10.headerTitle = function headerTitle() {
        return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
      };
      obj10.render = function render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_14, {
          title: "I see you jockin' me.",
          emoji: "\u{1F525}",
          action: "I'm like come on fhqwhgads",
          onAction() {
            return closure_0.push(constants.LIMIT);
          },
          disclaimer: "Tryin' to play like, you know me."
        });
      };
      obj[constants.JOCKIN] = obj10;
      const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
      const obj12 = require("NavigatorHeader");
      obj13.headerLeft = require("NavigatorHeader").getHeaderBackButton();
      obj13.headerRight = function headerRight() {
        return closure_1_7(closure_1_0(6017).HeaderSubmittingIndicator, {});
      };
      obj13.headerTitle = function headerTitle() {
        return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.LIMIT });
      };
      obj13.render = function render() {
        return closure_1_7(closure_1_14, {
          title: "Everybody to the limit.",
          emoji: "\u{1F44F}",
          action: "Everybody come on fhqwhgads!",
          onAction: closure_1_1(5099).pop,
          secondaryAction: "Push that fh-h-h-h-wqhgad",
          onSecondaryAction() {
            return closure_1_1(dependencyMap[13]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
          },
          disclaimer: "The cheat is to the limit."
        });
      };
      obj[constants.LIMIT] = obj13;
      return obj;
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return Navigator.useNavigatorScreens(tmp4, tmp5);
}) : (() => Navigator.useNavigatorScreens(() => {
  let obj = {};
  const obj2 = {
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerRight() {
      const obj = { text: null, onPress: null };
      const intl = closure_1_0(1126).intl;
      obj.text = intl.string(closure_1_0(1126).t["5Wxrcd"]);
      obj.onPress = closure_1_1(5099).pop;
      return closure_1_7(closure_1_0(6890).HeaderActionButton, obj);
    },
    headerTitle() {
      return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    },
    render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_14, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return closure_0.push(constants.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: closure_1(5099).pop,
        disclaimer: "I said come on fhqwhgads."
      });
    }
  };
  obj[constants.START] = obj2;
  const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
  const obj3 = require("NavigatorHeader");
  obj4.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  const obj5 = require("NavigatorHeader");
  obj4.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  obj4.headerTitle = function headerTitle() {
    return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.WHO_DAT });
  };
  obj4.render = function render(arg0, arg1) {
    closure_0 = arg1;
    return closure_7(closure_14, {
      title: "Who's that?",
      emoji: "\u{1F4BF}",
      action: "It's to the limit",
      onAction() {
        return closure_0.push(constants.EVERYBODY);
      },
      children: closure_7(closure_0(6105).TextInput, { placeholder: "My friend Jake" })
    });
  };
  obj[constants.WHO_DAT] = obj4;
  const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
  const obj6 = require("NavigatorHeader");
  obj7.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  const obj8 = require("NavigatorHeader");
  obj7.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  obj7.headerTitle = function headerTitle() {
    return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.EVERYBODY });
  };
  obj7.render = function render(arg0, arg1) {
    closure_0 = arg1;
    return closure_7(closure_15, {
      onAction() {
        return closure_0.push(constants.JOCKIN);
      }
    });
  };
  obj[constants.EVERYBODY] = obj7;
  const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
  const obj9 = require("NavigatorHeader");
  obj10.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  const obj11 = require("NavigatorHeader");
  obj10.headerRight = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  obj10.headerTitle = function headerTitle() {
    return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
  };
  obj10.render = function render(arg0, arg1) {
    closure_0 = arg1;
    return closure_7(closure_14, {
      title: "I see you jockin' me.",
      emoji: "\u{1F525}",
      action: "I'm like come on fhqwhgads",
      onAction() {
        return closure_0.push(constants.LIMIT);
      },
      disclaimer: "Tryin' to play like, you know me."
    });
  };
  obj[constants.JOCKIN] = obj10;
  const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
  const obj12 = require("NavigatorHeader");
  obj13.headerLeft = require("NavigatorHeader").getHeaderBackButton();
  obj13.headerRight = function headerRight() {
    return closure_1_7(closure_1_0(6017).HeaderSubmittingIndicator, {});
  };
  obj13.headerTitle = function headerTitle() {
    return closure_1_7(closure_1_0(6017).NavigatorHeader, { title: constants.LIMIT });
  };
  obj13.render = function render() {
    return closure_1_7(closure_1_14, {
      title: "Everybody to the limit.",
      emoji: "\u{1F44F}",
      action: "Everybody come on fhqwhgads!",
      onAction: closure_1_1(5099).pop,
      secondaryAction: "Push that fh-h-h-h-wqhgad",
      onSecondaryAction() {
        return closure_1_1(dependencyMap[13]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
      },
      disclaimer: "The cheat is to the limit."
    });
  };
  obj[constants.LIMIT] = obj13;
  return obj;
}, []));
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4) {
    const obj2 = { screens: tmp4, initialRouteName: constants.START };
    const tmp8 = React5(Modal.Modal, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_11();
  return React5(Modal.Modal, { screens: closure_11(), initialRouteName: constants.START });
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { screens: tmp4, steps: first, initialRouteName: constants.START };
    const tmp10 = React5(StepModal.StepModal, obj2);
    cResult[1] = tmp4;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const memo = noop.useMemo(() => {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  const tmp = closure_11();
  return React5(StepModal.StepModal, { screens: closure_11(), steps: memo, initialRouteName: constants.START });
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(21);
  ({ title, emoji, action, onAction, secondaryAction, onSecondaryAction, disclaimer, footer, children } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === emoji) {
    if (cResult[1] === tmp4.emoji) {
      if (cResult[2] === tmp4.emojiContainer) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.title) {
        if (cResult[5] === title) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp9) {
              let tmp12 = cResult[10];
            }
            if (cResult[11] === action) {
              if (cResult[12] === disclaimer) {
                if (cResult[13] === footer) {
                  if (cResult[14] === onAction) {
                    if (cResult[15] === onSecondaryAction) {
                      if (cResult[16] === secondaryAction) {
                        let tmp15 = cResult[17];
                      }
                      if (cResult[18] === tmp12) {
                        if (cResult[19] === tmp15) {
                          let tmp24 = cResult[20];
                        }
                        return tmp24;
                      }
                      const obj2 = { children: null };
                      const items = [tmp12, tmp15];
                      obj2.children = items;
                      const tmp26 = closure_1_8(ModalScreen.ModalScreen, obj2);
                      cResult[18] = tmp12;
                      cResult[19] = tmp15;
                      cResult[20] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                }
              }
            }
            let tmp27Result = footer;
            if (footer == null) {
              let tmp19 = null != disclaimer;
              if (tmp19) {
                const obj3 = { children: disclaimer };
                tmp19 = React5(ModalDisclaimer.ModalDisclaimer, obj3);
              }
              const items1 = [tmp19, , ];
              let tmp20 = null != action;
              if (tmp20) {
                const obj4 = { variant: "primary", text: action, onPress: onAction };
                tmp20 = React5(ModalActionButton.ModalActionButton, obj4);
              }
              items1[1] = tmp20;
              let tmp22 = null != secondaryAction;
              if (tmp22) {
                const obj5 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
                tmp22 = React5(ModalActionButton.ModalActionButton, obj5);
              }
              const obj6 = { children: null };
              items1[2] = tmp22;
              obj6.children = items1;
              tmp27Result = closure_1_8(ModalFooter.ModalFooter, obj6);
            }
            cResult[11] = action;
            cResult[12] = disclaimer;
            cResult[13] = footer;
            cResult[14] = onAction;
            cResult[15] = onSecondaryAction;
            cResult[16] = secondaryAction;
            cResult[17] = tmp27Result;
            tmp15 = tmp27Result;
          }
        }
        const obj7 = { children: null };
        const items2 = [tmp5, tmp9, children];
        obj7.children = items2;
        const tmp14 = closure_1_8(ModalContent.ModalContent, obj7);
        cResult[7] = children;
        cResult[8] = tmp5;
        cResult[9] = tmp9;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
      const obj8 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: title };
      const tmp11 = React5(Text_Text.Text, obj8);
      cResult[4] = tmp4.title;
      cResult[5] = title;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  let tmp6 = null != emoji;
  if (tmp6) {
    const obj9 = { style: tmp4.emojiContainer, children: null };
    const obj10 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp4.emoji, children: emoji };
    obj9.children = React5(Text_Text.Text, obj10);
    tmp6 = React5(hasOwnProperty, obj9);
  }
  cResult[0] = emoji;
  cResult[1] = tmp4.emoji;
  cResult[2] = tmp4.emojiContainer;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = closure_9();
  let tmp5 = null != emoji;
  if (tmp5) {
    const obj = { style: tmp.emojiContainer, children: null };
    const obj2 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    obj.children = React5(Text_Text.Text, obj2);
    tmp5 = React5(hasOwnProperty, obj);
  }
  const obj3 = { children: null };
  const items = [tmp5, React5(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title }), children];
  obj3.children = items;
  const children1 = [closure_1_8(ModalContent.ModalContent, obj3), ];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    if (tmp8Result) {
      const obj5 = { children: disclaimer };
      tmp8Result = React5(ModalDisclaimer.ModalDisclaimer, obj5);
    }
    const items2 = [tmp8Result, , ];
    let tmp8Result3 = null != action;
    if (tmp8Result3) {
      const obj6 = { variant: "primary", text: action, onPress: onAction };
      tmp8Result3 = React5(ModalActionButton.ModalActionButton, obj6);
    }
    items2[1] = tmp8Result3;
    let tmp8Result4 = null != secondaryAction;
    if (tmp8Result4) {
      const obj7 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp8Result4 = React5(ModalActionButton.ModalActionButton, obj7);
    }
    const obj8 = { children: null };
    items2[2] = tmp8Result4;
    obj8.children = items2;
    footer = closure_1_8(ModalFooter.ModalFooter, obj8);
  }
  children1[1] = footer;
  return closure_1_8(ModalScreen.ModalScreen, { children: children1 });
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAction) => {
  const cResult = parts(576).c(22);
  onAction = onAction.onAction;
  const tmp4 = closure_9();
  parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return false;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = parts(576);
  [arr2, importDefault] = noop.useState(parts.map(first));
  if (cResult[1] !== arr2) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function b(arg0) {
        return arg0;
      };
      cResult[3] = fn2;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const someResult = arr2.some(tmp8);
    cResult[1] = arr2;
    cResult[2] = someResult;
  } else {
    if (cResult[4] === onAction) {
      if (cResult[5] === tmp4.screen.backgroundColor) {
        if (cResult[6] === tmp7) {
          let tmp11 = cResult[7];
        }
        if (cResult[8] === parts) {
          if (cResult[9] === arr2) {
            if (cResult[13] !== cResult[10]) {
              const obj2 = { hasIcons: false, children: tmp15 };
              const tmp21 = closure_7(tmp(6081).TableRowGroup, obj2);
              cResult[13] = tmp15;
              cResult[14] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp4.tableRows) {
              if (cResult[16] === tmp19) {
                let tmp22 = cResult[17];
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = closure_7(tmp(10741).ModalFloatingActionSpacer, {});
                cResult[18] = tmp28;
                let tmp26 = tmp28;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] === tmp11) {
                if (cResult[20] === tmp22) {
                  let tmp29 = cResult[21];
                }
                return tmp29;
              }
              const obj3 = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: tmp11, children: null };
              const items = [tmp22, tmp26];
              obj3.children = items;
              const tmp32 = closure_8(closure_14, obj3);
              cResult[19] = tmp11;
              cResult[20] = tmp22;
              cResult[21] = tmp32;
              tmp29 = tmp32;
            }
            const obj4 = { style: tmp14, children: tmp19 };
            const tmp25 = closure_7(closure_5, obj4);
            cResult[15] = tmp4.tableRows;
            cResult[16] = tmp19;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
        }
        if (cResult[11] !== parts) {
          class C {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = {
                label: closure_0[arg1],
                value: onAction,
                onValueChange(arg0) {
                              closure_0 = arg0;
                              closure_1_1(() => { ... });
                            }
              };
              return closure_1_7(closure_0(closure_1_2[24]).TableSwitchRow, obj, arg1);
            }
          }
          cResult[11] = parts;
          cResult[12] = C;
        } else {
          class C {
            constructor(arg0, arg1) {
              closure_0 = arg1;
              obj = {
                label: closure_0[arg1],
                value: onAction,
                onValueChange(arg0) {
                              closure_0 = arg0;
                              closure_1_1(() => { ... });
                            }
              };
              return closure_1_7(closure_0(closure_1_2[24]).TableSwitchRow, obj, arg1);
            }
          }
        }
        const mapped = arr2.map(C);
        cResult[8] = parts;
        cResult[9] = arr2;
        cResult[10] = mapped;
      }
    }
    const obj5 = { isVisible: cResult[2], floatingBackgroundColor: tmp4.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction };
    const tmp13 = closure_7(tmp(10741).ModalFloatingAction, obj5);
    cResult[4] = onAction;
    cResult[5] = tmp4.screen.backgroundColor;
    cResult[6] = cResult[2];
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const tmp6 = _slicedToArray(noop.useState(parts.map(first)), 2);
}) : ((onAction) => {
  c1 = undefined;
  let tmp = closure_9();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = noop.useState(parts.map(() => false));
  const obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: null, children: null };
  const tmp2 = _slicedToArray(noop.useState(parts.map(() => false)), 2);
  obj.footer = closure_7(parts(10741).ModalFloatingAction, { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction });
  const obj3 = { style: tmp.tableRows, children: null };
  const obj2 = { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction };
  obj3.children = closure_7(parts(6081).TableRowGroup, {
    hasIcons: false,
    children: arr2.map((value, index) => {
      parts = index;
      return closure_1_7(parts(dependencyMap[24]).TableSwitchRow, {
        label: parts[index],
        value,
        onValueChange(arg0) {
          closure_0 = arg0;
          closure_1_1((arr) => arr.map((item, index) => {
            let tmp = item;
            if (index === closure_0) {
              tmp = closure_1_0;
            }
            return tmp;
          }));
        }
      }, index);
    })
  });
  const items = [closure_7(closure_5, obj3), closure_7(parts(10741).ModalFloatingActionSpacer, {})];
  obj.children = items;
  return closure_8(closure_14, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onPress: openDemoModal, text: "Show Modal" };
    const tmp9 = React5(components_Button_Button.Button, obj2);
    const obj3 = { onPress: openDemoStepModal, text: "Show Stepped Modal" };
    const tmp11 = React5(components_Button_Button.Button, obj3);
    cResult[0] = tmp9;
    cResult[1] = tmp11;
    tmp5 = tmp9;
    tmp6 = tmp11;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.container) {
    const obj4 = { children: null };
    const obj5 = { style: tmp4.container, children: null };
    const items = [tmp5, tmp6];
    obj5.children = items;
    obj4.children = closure_1_8(hasOwnProperty, obj5);
    const tmp17 = React5(timestampProducer, obj4);
    cResult[2] = tmp4.container;
    cResult[3] = tmp17;
    let tmp12 = tmp17;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (() => {
  const obj = { children: null };
  const obj2 = { style: closure_9().container, children: null };
  const items = [React5(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Modal" }), React5(components_Button_Button.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" })];
  obj2.children = items;
  obj.children = closure_1_8(hasOwnProperty, obj2);
  return React5(timestampProducer, obj);
});