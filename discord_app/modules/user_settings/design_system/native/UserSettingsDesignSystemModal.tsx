// === Module 15693: UserSettingsDesignSystemModal ===

// Module 15693 (UserSettingsDesignSystemModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Navigator from "Navigator" /* 6503 */;
import ModalScreen2 from "ModalScreen" /* 8128 */;
import ModalContent2 from "ModalContent" /* 8129 */;
import ModalActionButton from "ModalActionButton" /* 10742 */;
import Modal from "Modal" /* 10989 */;
import ModalFooter2 from "ModalFooter" /* 11549 */;
import StepModal from "StepModal" /* 14290 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14292 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
function openDemoModal() {
  const arr = ModalActionCreatorsDefault;
  arr.push(closure_12);
}
function openDemoStepModal() {
  const arr = ModalActionCreatorsDefault;
  arr.push(closure_13);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: obj2, emojiContainer: size, emoji: { fontSize: 48, lineHeight: 80 }, title: { marginBottom: 16 }, tableRows: { width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
let closure_9 = createStyles(obj);
const constants = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      let obj11;
      let obj12;
      let obj14;
      let obj3;
      let obj5;
      let obj6;
      let obj8;
      let obj9;
      let obj = {};
      const START = constants.START;
      const obj2 = {
        headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
        headerRight() {
          let intl;
          const obj = { text: intl.string(closure_1_0(closure_1_2[11]).t["5Wxrcd"]), onPress: closure_1_1(closure_1_2[9]).pop };
          const HeaderActionButton = closure_1_0(closure_1_2[10]).HeaderActionButton;
          intl = closure_1_0(closure_1_2[11]).intl;
          return closure_1_7(HeaderActionButton, obj);
        },
        headerTitle() {
          const obj = { title: constants.START, subtitle: "I said come on fhqwhgads" };
          return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
        },
        render(arg0, arg1) {
          let closure_0 = arg1;
          const obj = {
            title: "Come on fhqwhgads.",
            emoji: "\u{1F60E}",
            action: "Everybody to the limit",
            onAction() {
              return closure_0.push(constants.WHO_DAT);
            },
            secondaryAction: "Maybe later",
            onSecondaryAction: closure_1(closure_2[9]).pop,
            disclaimer: "I said come on fhqwhgads."
          };
          return closure_7(closure_14, obj);
        }
      };
      obj[START] = obj2;
      obj3 = require("NavigatorHeader");
      const WHO_DAT = constants.WHO_DAT;
      const obj4 = {
        headerLeft: obj5.getHeaderBackButton(),
        headerRight: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
        headerTitle() {
          const obj = { title: constants.WHO_DAT };
          return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
        },
        render(arg0, arg1) {
          let closure_0 = arg1;
          const obj = {
            title: "Who's that?",
            emoji: "\u{1F4BF}",
            action: "It's to the limit",
            onAction() {
              return closure_0.push(constants.EVERYBODY);
            },
            children: closure_7(closure_0(closure_2[12]).TextInput, { placeholder: "My friend Jake" })
          };
          return closure_7(closure_14, obj);
        }
      };
      obj5 = require("NavigatorHeader");
      obj[WHO_DAT] = obj4;
      obj6 = require("NavigatorHeader");
      const EVERYBODY = constants.EVERYBODY;
      const obj7 = {
        headerLeft: obj8.getHeaderBackButton(),
        headerRight: obj9.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
        headerTitle() {
          const obj = { title: constants.EVERYBODY };
          return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
        },
        render(arg0, arg1) {
          let closure_0 = arg1;
          const obj = {
            onAction() {
              return closure_0.push(constants.JOCKIN);
            }
          };
          return closure_7(closure_15, obj);
        }
      };
      obj8 = require("NavigatorHeader");
      obj[EVERYBODY] = obj7;
      obj9 = require("NavigatorHeader");
      const JOCKIN = constants.JOCKIN;
      const obj10 = {
        headerLeft: obj11.getHeaderBackButton(),
        headerRight: obj12.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
        headerTitle() {
          const obj = { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" };
          return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
        },
        render(arg0, arg1) {
          let closure_0 = arg1;
          const obj = {
            title: "I see you jockin' me.",
            emoji: "\u{1F525}",
            action: "I'm like come on fhqwhgads",
            onAction() {
              return closure_0.push(constants.LIMIT);
            },
            disclaimer: "Tryin' to play like, you know me."
          };
          return closure_7(closure_14, obj);
        }
      };
      obj11 = require("NavigatorHeader");
      obj[JOCKIN] = obj10;
      obj12 = require("NavigatorHeader");
      const LIMIT = constants.LIMIT;
      const obj13 = {
        headerLeft: obj14.getHeaderBackButton(),
        headerRight() {
          return closure_1_7(closure_1_0(closure_1_2[8]).HeaderSubmittingIndicator, {});
        },
        headerTitle() {
          const obj = { title: constants.LIMIT };
          return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
        },
        render() {
          let obj = {
            title: "Everybody to the limit.",
            emoji: "\u{1F44F}",
            action: "Everybody come on fhqwhgads!",
            onAction: closure_1_1(closure_1_2[9]).pop,
            secondaryAction: "Push that fh-h-h-h-wqhgad",
            onSecondaryAction() {
              const obj = closure_1_1(closure_1_2[13]);
              return obj.openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
            },
            disclaimer: "The cheat is to the limit."
          };
          return closure_1_7(closure_1_14, obj);
        }
      };
      obj[LIMIT] = obj13;
      obj14 = require("NavigatorHeader");
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
  const tmpResult = Navigator;
  return tmpResult.useNavigatorScreens(tmp4, tmp5);
}) : (() => {
  let obj = Navigator;
  return obj.useNavigatorScreens(() => {
    let obj11;
    let obj12;
    let obj14;
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    let obj9;
    let obj = {};
    const START = constants.START;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerRight() {
        let intl;
        const obj = { text: intl.string(closure_1_0(closure_1_2[11]).t["5Wxrcd"]), onPress: closure_1_1(closure_1_2[9]).pop };
        const HeaderActionButton = closure_1_0(closure_1_2[10]).HeaderActionButton;
        intl = closure_1_0(closure_1_2[11]).intl;
        return closure_1_7(HeaderActionButton, obj);
      },
      headerTitle() {
        const obj = { title: constants.START, subtitle: "I said come on fhqwhgads" };
        return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        const obj = {
          title: "Come on fhqwhgads.",
          emoji: "\u{1F60E}",
          action: "Everybody to the limit",
          onAction() {
            return closure_0.push(constants.WHO_DAT);
          },
          secondaryAction: "Maybe later",
          onSecondaryAction: closure_1(closure_2[9]).pop,
          disclaimer: "I said come on fhqwhgads."
        };
        return closure_7(closure_14, obj);
      }
    };
    obj[START] = obj2;
    obj3 = require("NavigatorHeader");
    const WHO_DAT = constants.WHO_DAT;
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      headerRight: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.WHO_DAT };
        return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        const obj = {
          title: "Who's that?",
          emoji: "\u{1F4BF}",
          action: "It's to the limit",
          onAction() {
            return closure_0.push(constants.EVERYBODY);
          },
          children: closure_7(closure_0(closure_2[12]).TextInput, { placeholder: "My friend Jake" })
        };
        return closure_7(closure_14, obj);
      }
    };
    obj5 = require("NavigatorHeader");
    obj[WHO_DAT] = obj4;
    obj6 = require("NavigatorHeader");
    const EVERYBODY = constants.EVERYBODY;
    const obj7 = {
      headerLeft: obj8.getHeaderBackButton(),
      headerRight: obj9.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.EVERYBODY };
        return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        const obj = {
          onAction() {
            return closure_0.push(constants.JOCKIN);
          }
        };
        return closure_7(closure_15, obj);
      }
    };
    obj8 = require("NavigatorHeader");
    obj[EVERYBODY] = obj7;
    obj9 = require("NavigatorHeader");
    const JOCKIN = constants.JOCKIN;
    const obj10 = {
      headerLeft: obj11.getHeaderBackButton(),
      headerRight: obj12.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" };
        return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
      },
      render(arg0, arg1) {
        let closure_0 = arg1;
        const obj = {
          title: "I see you jockin' me.",
          emoji: "\u{1F525}",
          action: "I'm like come on fhqwhgads",
          onAction() {
            return closure_0.push(constants.LIMIT);
          },
          disclaimer: "Tryin' to play like, you know me."
        };
        return closure_7(closure_14, obj);
      }
    };
    obj11 = require("NavigatorHeader");
    obj[JOCKIN] = obj10;
    obj12 = require("NavigatorHeader");
    const LIMIT = constants.LIMIT;
    const obj13 = {
      headerLeft: obj14.getHeaderBackButton(),
      headerRight() {
        return closure_1_7(closure_1_0(closure_1_2[8]).HeaderSubmittingIndicator, {});
      },
      headerTitle() {
        const obj = { title: constants.LIMIT };
        return closure_1_7(closure_1_0(closure_1_2[8]).NavigatorHeader, obj);
      },
      render() {
        let obj = {
          title: "Everybody to the limit.",
          emoji: "\u{1F44F}",
          action: "Everybody come on fhqwhgads!",
          onAction: closure_1_1(closure_1_2[9]).pop,
          secondaryAction: "Push that fh-h-h-h-wqhgad",
          onSecondaryAction() {
            const obj = closure_1_1(closure_1_2[13]);
            return obj.openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
          },
          disclaimer: "The cheat is to the limit."
        };
        return closure_1_7(closure_1_14, obj);
      }
    };
    obj[LIMIT] = obj13;
    obj14 = require("NavigatorHeader");
    return obj;
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4) {
    const obj2 = { screens: tmp4, initialRouteName: constants.START };
    const tmp8 = metroImportDefault(Modal.Modal, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = { screens: closure_11(), initialRouteName: constants.START };
  return metroImportDefault(Modal.Modal, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { screens: tmp4, steps: first, initialRouteName: constants.START };
    const tmp10 = metroImportDefault(StepModal.StepModal, obj2);
    cResult[1] = tmp4;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (() => {
  const tmp = closure_11();
  const memo = react.useMemo(() => {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  const obj = { screens: tmp, steps: memo, initialRouteName: constants.START };
  return metroImportDefault(StepModal.StepModal, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let action;
  let children;
  let disclaimer;
  let emoji;
  let footer;
  let items;
  let items2;
  let obj10;
  let onAction;
  let onSecondaryAction;
  let secondaryAction;
  let title;
  const obj = react2;
  const cResult = obj.c(21);
  ({ title, emoji, action, onAction, secondaryAction, onSecondaryAction, disclaimer, footer, children } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === emoji) {
    if (cResult[1] === tmp4.emoji) {
      let tmp5;
      if (cResult[2] === tmp4.emojiContainer) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.title) {
        let tmp9;
        if (cResult[5] === title) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === children) {
          if (cResult[8] === tmp5) {
            let tmp12;
            if (cResult[9] === tmp9) {
              tmp12 = cResult[10];
            }
            if (cResult[11] === action) {
              if (cResult[12] === disclaimer) {
                if (cResult[13] === footer) {
                  if (cResult[14] === onAction) {
                    if (cResult[15] === onSecondaryAction) {
                      let tmp15;
                      if (cResult[16] === secondaryAction) {
                        tmp15 = cResult[17];
                      }
                      if (cResult[18] === tmp12) {
                        let tmp24;
                        if (cResult[19] === tmp15) {
                          tmp24 = cResult[20];
                        }
                        return tmp24;
                      }
                      const obj2 = { children: items };
                      items = [tmp12, tmp15];
                      const tmp26 = metroImportAll(ModalScreen2.ModalScreen, obj2);
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
              const ModalFooter = ModalFooter2.ModalFooter;
              if (tmp19) {
                const obj3 = { children: disclaimer };
                tmp19 = metroImportDefault(ModalDisclaimer.ModalDisclaimer, obj3);
              }
              const items1 = [tmp19, , ];
              let tmp20 = null != action;
              if (tmp20) {
                const obj4 = { variant: "primary", text: action, onPress: onAction };
                tmp20 = metroImportDefault(ModalActionButton.ModalActionButton, obj4);
              }
              items1[1] = tmp20;
              let tmp22 = null != secondaryAction;
              if (tmp22) {
                const obj5 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
                tmp22 = metroImportDefault(ModalActionButton.ModalActionButton, obj5);
              }
              const obj6 = { children: items1 };
              items1[2] = tmp22;
              tmp27Result = metroImportAll(ModalFooter, obj6);
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
        const obj7 = { children: items2 };
        items2 = [tmp5, tmp9, children];
        const tmp14 = metroImportAll(ModalContent2.ModalContent, obj7);
        cResult[7] = children;
        cResult[8] = tmp5;
        cResult[9] = tmp9;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
      const obj8 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: title };
      const tmp11 = metroImportDefault(Text_Text.Text, obj8);
      cResult[4] = tmp4.title;
      cResult[5] = title;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  let tmp6 = null != emoji;
  if (tmp6) {
    const obj9 = { style: tmp4.emojiContainer, children: metroImportDefault(Text_Text.Text, obj10) };
    obj10 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp4.emoji, children: emoji };
    tmp6 = metroImportDefault(hasOwnProperty, obj9);
  }
  cResult[0] = emoji;
  cResult[1] = tmp4.emoji;
  cResult[2] = tmp4.emojiContainer;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let action;
  let children;
  let disclaimer;
  let emoji;
  let footer;
  let items;
  let obj2;
  let onAction;
  let onSecondaryAction;
  let secondaryAction;
  let title;
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = closure_9();
  const ModalScreen = ModalScreen2.ModalScreen;
  let tmp5 = null != emoji;
  const ModalContent = ModalContent2.ModalContent;
  if (tmp5) {
    const obj = { style: tmp.emojiContainer, children: metroImportDefault(Text_Text.Text, obj2) };
    obj2 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    tmp5 = metroImportDefault(hasOwnProperty, obj);
  }
  const obj3 = { children: items };
  items = [tmp5, , ];
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  items[1] = metroImportDefault(Text_Text.Text, obj4);
  items[2] = children;
  const children1 = [metroImportAll(ModalContent, obj3), ];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    const ModalFooter = ModalFooter2.ModalFooter;
    if (tmp8Result) {
      const obj5 = { children: disclaimer };
      tmp8Result = metroImportDefault(ModalDisclaimer.ModalDisclaimer, obj5);
    }
    const items2 = [tmp8Result, , ];
    let tmp8Result3 = null != action;
    if (tmp8Result3) {
      const obj6 = { variant: "primary", text: action, onPress: onAction };
      tmp8Result3 = metroImportDefault(ModalActionButton.ModalActionButton, obj6);
    }
    items2[1] = tmp8Result3;
    let tmp8Result4 = null != secondaryAction;
    if (tmp8Result4) {
      const obj7 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp8Result4 = metroImportDefault(ModalActionButton.ModalActionButton, obj7);
    }
    const obj8 = { children: items2 };
    items2[2] = tmp8Result4;
    footer = metroImportAll(ModalFooter, obj8);
  }
  children1[1] = footer;
  return metroImportAll(ModalScreen, { children: children1 });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAction) => {
  let arr2;
  let first;
  let items;
  let parts;
  let tmp7;
  let tmp = parts;
  let obj = parts(576);
  const cResult = obj.c(22);
  onAction = onAction.onAction;
  const tmp4 = closure_9();
  parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return false;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [arr2, importDefault] = react.useState(parts.map(first));
  _slicedToArray(react.useState(parts.map(first)), 2);
  if (cResult[1] !== arr2) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function b(arg0) {
        return arg0;
      };
      cResult[3] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const someResult = arr2.some(tmp8);
    cResult[1] = arr2;
    cResult[2] = someResult;
    tmp7 = someResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[4] === onAction) {
    if (cResult[5] === tmp4.screen.backgroundColor) {
      let tmp10;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === parts) {
        let tmp13;
        let tmp16;
        if (cResult[9] === arr2) {
          tmp13 = cResult[10];
        }
        if (cResult[13] !== tmp13) {
          const obj2 = { hasIcons: false, children: tmp13 };
          const tmp18 = closure_7(tmp(6081).TableRowGroup, obj2);
          cResult[13] = tmp13;
          cResult[14] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[14];
        }
        if (cResult[15] === tmp4.tableRows) {
          let tmp19;
          let tmp23;
          if (cResult[16] === tmp16) {
            tmp19 = cResult[17];
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_7(tmp(10741).ModalFloatingActionSpacer, {});
            cResult[18] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[18];
          }
          if (cResult[19] === tmp10) {
            let tmp26;
            if (cResult[20] === tmp19) {
              tmp26 = cResult[21];
            }
            return tmp26;
          }
          const obj3 = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: tmp10, children: items };
          items = [tmp19, tmp23];
          const tmp29 = closure_8(closure_14, obj3);
          cResult[19] = tmp10;
          cResult[20] = tmp19;
          cResult[21] = tmp29;
          tmp26 = tmp29;
        }
        const obj4 = { style: tmp12, children: tmp16 };
        const tmp22 = closure_7(closure_5, obj4);
        cResult[15] = tmp4.tableRows;
        cResult[16] = tmp16;
        cResult[17] = tmp22;
        tmp19 = tmp22;
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
                          let tmp = closure_1_1(() => { /* body not rendered: F153475 */ });
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
                          let tmp = closure_1_1(() => { /* body not rendered: F153475 */ });
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
      tmp13 = mapped;
    }
  }
  const obj5 = { isVisible: tmp7, floatingBackgroundColor: tmp4.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction };
  const tmp11 = closure_7(tmp(10741).ModalFloatingAction, obj5);
  cResult[4] = onAction;
  cResult[5] = tmp4.screen.backgroundColor;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((onAction) => {
  let ModalFloatingAction;
  let TableRowGroup;
  let arr2;
  let c1;
  let items;
  let obj2;
  let obj4;
  const f121405 = () => false;
  c1 = undefined;
  onAction = onAction.onAction;
  let tmp = closure_9();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = react.useState(parts.map(f121405));
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: closure_7(ModalFloatingAction, obj2), children: items };
  obj2 = { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction };
  _slicedToArray(react.useState(parts.map(f121405)), 2);
  ModalFloatingAction = parts(10741).ModalFloatingAction;
  const obj3 = { style: tmp.tableRows, children: closure_7(TableRowGroup, obj4) };
  obj4 = {
    hasIcons: false,
    children: arr2.map((value, index) => {
      parts = index;
      const obj = {
        label: parts[index],
        value,
        onValueChange(arg0) {
          let closure_0 = arg0;
          let tmp = closure_1_1((arr) => arr.map((item, index) => {
            let tmp = item;
            if (index === closure_0) {
              tmp = closure_1_0;
            }
            return tmp;
          }));
        }
      };
      return closure_1_7(parts(dependencyMap[24]).TableSwitchRow, obj, index);
    })
  };
  TableRowGroup = parts(6081).TableRowGroup;
  items = [closure_7(closure_5, obj3), closure_7(parts(10741).ModalFloatingActionSpacer, {})];
  return closure_8(closure_14, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let obj5;
  let tmp12;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onPress: openDemoModal, text: "Show Modal" };
    const tmp9 = metroImportDefault(components_Button_Button.Button, obj2);
    const obj3 = { onPress: openDemoStepModal, text: "Show Stepped Modal" };
    const tmp11 = metroImportDefault(components_Button_Button.Button, obj3);
    cResult[0] = tmp9;
    cResult[1] = tmp11;
    tmp5 = tmp9;
    tmp6 = tmp11;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.container) {
    const obj4 = { children: metroImportAll(hasOwnProperty, obj5) };
    obj5 = { style: tmp4.container, children: items };
    items = [tmp5, tmp6];
    const tmp17 = metroImportDefault(metroRequire, obj4);
    cResult[2] = tmp4.container;
    cResult[3] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (() => {
  let items;
  let obj2;
  const obj = { children: metroImportAll(hasOwnProperty, obj2) };
  obj2 = { style: closure_9().container, children: items };
  items = [, ];
  const obj3 = { onPress: openDemoModal, text: "Show Modal" };
  items[0] = metroImportDefault(components_Button_Button.Button, obj3);
  const obj4 = { onPress: openDemoStepModal, text: "Show Stepped Modal" };
  items[1] = metroImportDefault(components_Button_Button.Button, obj4);
  return metroImportDefault(metroRequire, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default tmp5;