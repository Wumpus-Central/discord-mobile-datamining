// === Module 17820: GuildSettingsModalTemplate ===

// Module 17820 (GuildSettingsModalTemplate)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import CircleXIcon2 from "CircleXIcon" /* 4797 */;
import CopyIcon2 from "CopyIcon" /* 4843 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import AlertModal from "AlertModal" /* 5713 */;
import Card_Card from "Card/Card" /* 5995 */;
import Input2 from "Input" /* 6423 */;
import SceneLoadingIndicator from "SceneLoadingIndicator" /* 6535 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6880 */;
import native from "native" /* 8567 */;
import Form3 from "Form" /* 8895 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11402 */;
import GuildTemplateSettingsUtils from "GuildTemplateSettingsUtils" /* 17821 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _Promise, c4, c5, flag, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = "delete-guild-template";
let c11 = "guild-template-unsaved-changes";
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerContent: obj2, copyRow: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contentContainerStyle;
  let guildId;
  let guildTemplate;
  let intl;
  let loadError;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(21);
  ({ guildId, contentContainerStyle } = arg0);
  const tmp4 = closure_12();
  const obj2 = GuildTemplateSettingsUtils;
  const canViewAllChannels = obj2.useCanViewAllChannels(guildId);
  let tmp7 = null;
  const useGuildTemplate = GuildTemplateSettingsUtils.useGuildTemplate;
  GuildTemplateSettingsUtils;
  if (canViewAllChannels) {
    tmp7 = guildId;
  }
  const guildTemplate1 = useGuildTemplate(tmp7);
  ({ guildTemplate, loadError } = guildTemplate1);
  if (canViewAllChannels) {
    let tmp18;
    if (null != loadError) {
      if (cResult[7] === contentContainerStyle) {
        let tmp26;
        let tmp27;
        if (cResult[8] === tmp4.containerContent) {
          tmp26 = cResult[9];
        }
        if (cResult[10] !== loadError.message) {
          const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: loadError.message };
          const tmp29 = metroImportDefault(Text_Text.Text, obj3);
          cResult[10] = loadError.message;
          cResult[11] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[11];
        }
        if (cResult[12] === tmp4.container) {
          if (cResult[13] === tmp26) {
            let tmp30;
            if (cResult[14] === tmp27) {
              tmp30 = cResult[15];
            }
            tmp18 = tmp30;
          }
        }
        const obj4 = { style: tmp4.container, contentContainerStyle: tmp26, children: tmp27 };
        const tmp32 = metroImportDefault(Form3.Form, obj4);
        cResult[12] = tmp4.container;
        cResult[13] = tmp26;
        cResult[14] = tmp27;
        cResult[15] = tmp32;
        tmp30 = tmp32;
      }
      const items = [tmp4.containerContent, contentContainerStyle];
      cResult[7] = contentContainerStyle;
      cResult[8] = tmp4.containerContent;
      cResult[9] = items;
      tmp26 = items;
    } else if (tmp9) {
      let tmp23;
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp25 = metroImportDefault(SceneLoadingIndicator.SceneLoadingIndicator, {});
        cResult[16] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[16];
      }
      tmp18 = tmp23;
    } else {
      if (cResult[17] === contentContainerStyle) {
        if (cResult[18] === guildId) {
          if (cResult[19] === guildTemplate) {
            tmp18 = cResult[20];
          }
        }
      }
      const obj5 = { guildId, guildTemplate, contentContainerStyle };
      const tmp21 = metroImportDefault(closure_13, obj5);
      cResult[17] = contentContainerStyle;
      cResult[18] = guildId;
      cResult[19] = guildTemplate;
      cResult[20] = tmp21;
      tmp18 = tmp21;
    }
    tmp15 = tmp18;
  } else {
    if (cResult[0] === contentContainerStyle) {
      let tmp10;
      let tmp12;
      if (cResult[1] === tmp4.containerContent) {
        tmp10 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(intl9.t.f0IPAG) };
        const Text = Text_Text.Text;
        intl = intl9.intl;
        const tmp14 = metroImportDefault(Text, obj6);
        cResult[3] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp10) {
          tmp15 = cResult[6];
        }
      }
      const obj7 = { style: tmp4.container, contentContainerStyle: tmp10, children: tmp12 };
      const tmp17 = metroImportDefault(Form3.Form, obj7);
      cResult[4] = tmp4.container;
      cResult[5] = tmp10;
      cResult[6] = tmp17;
      tmp15 = tmp17;
    }
    const items1 = [tmp4.containerContent, contentContainerStyle];
    cResult[0] = contentContainerStyle;
    cResult[1] = tmp4.containerContent;
    cResult[2] = items1;
    tmp10 = items1;
  }
  return tmp15;
}) : ((arg0) => {
  let Text;
  let contentContainerStyle;
  let guildId;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj6;
  let tmp11;
  ({ guildId, contentContainerStyle } = arg0);
  const tmp = closure_12();
  const obj = GuildTemplateSettingsUtils;
  const canViewAllChannels = obj.useCanViewAllChannels(guildId);
  let tmp6 = null;
  const useGuildTemplate = GuildTemplateSettingsUtils.useGuildTemplate;
  GuildTemplateSettingsUtils;
  if (canViewAllChannels) {
    tmp6 = guildId;
  }
  const guildTemplate = useGuildTemplate(tmp6);
  const loadError = guildTemplate.loadError;
  if (canViewAllChannels) {
    let tmp12Result;
    if (null != loadError) {
      const obj2 = { style: tmp.container, contentContainerStyle: items, children: metroImportDefault(Text_Text.Text, obj3) };
      items = [tmp.containerContent, contentContainerStyle];
      const Form2 = Form3.Form;
      obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: loadError.message };
      tmp12Result = metroImportDefault(Form2, obj2);
    } else if (tmp8) {
      tmp12Result = metroImportDefault(SceneLoadingIndicator.SceneLoadingIndicator, {});
    } else {
      const obj4 = { guildId, guildTemplate: tmp9, contentContainerStyle };
      tmp12Result = metroImportDefault(closure_13, obj4);
    }
    tmp11 = tmp12Result;
  } else {
    const obj5 = { style: tmp.container, contentContainerStyle: items1, children: metroImportDefault(Text, obj6) };
    items1 = [tmp.containerContent, contentContainerStyle];
    const Form = Form3.Form;
    obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(intl9.t.f0IPAG) };
    Text = Text_Text.Text;
    intl = intl9.intl;
    tmp11 = metroImportDefault(Form, obj5);
  }
  return tmp11;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_3;
  let closure_4;
  let closure_6;
  let closure_8;
  let closure_9;
  let first;
  let obj3;
  let obj4;
  let str;
  let str2;
  let tmp11;
  let tmp13;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(navigation[8]);
  const cResult = obj.c(70);
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  const tmp4 = closure_12();
  let obj2 = guildId(navigation[14]);
  const tmp2 = navigation;
  navigation = obj2.useNavigation();
  [str, tmp7] = react.useState(null);
  _asyncToGenerator = tmp7;
  _slicedToArray(react.useState(null), 2);
  [str2, tmp9] = _slicedToArray(react.useState(null), 2);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  _slicedToArray = tmp9;
  const tmp10 = _slicedToArray(react.useState(false), 2);
  [tmp11, react] = tmp10;
  [r10041, tmp13] = react.useState(null);
  View = tmp13;
  _slicedToArray(react.useState(null), 2);
  [first, closure_8] = react.useState(false);
  [r10051, closure_9] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (str == null) {
    let name;
    if (guildTemplate != null) {
      name = guildTemplate.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  if (str2 == null) {
    let description;
    if (guildTemplate != null) {
      description = guildTemplate.description;
    }
    str2 = description;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (cResult[0] === str2) {
    if (cResult[1] === guildTemplate) {
      let tmp19;
      if (cResult[2] === str) {
        tmp19 = cResult[3];
      }
      closure_12 = tmp19;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            tmp7(null);
            tmp9(null);
          }
        }
        cResult[4] = Y;
      } else {
        class Y {
          constructor() {
            tmp7(null);
            tmp9(null);
          }
        }
      }
      Y = tmp23;
      if (cResult[5] !== tmp19) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
        cResult[5] = tmp19;
        cResult[6] = U;
      } else {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
      }
      U = tmp24;
      if (cResult[7] !== str) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
        let result = obj3.isGuildTemplateNameValid(str);
        cResult[7] = str;
        cResult[8] = result;
      } else {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
      }
      result = tmp25;
      if (!tmp11) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
        if (str.length >= 1) {
          class U {
            constructor() {
              _Promise = Promise;
              if (closure_12) {
                self = this;
                self2 = this;
                _Promise1 = new _Promise((arg0) => {
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  let closure_0 = arg0;
                  const obj = {
                    key,
                    title: intl.string(guildId(navigation[11]).t.pvRCSu),
                    content: intl2.string(guildId(navigation[11]).t.DRi46S),
                    confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                    cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                    onConfirm() {
                      return closure_0(true);
                    },
                    onCloseCallback() {
                      return closure_0(false);
                    }
                  };
                  const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                  guildId(navigation[15]);
                  intl = guildId(navigation[11]).intl;
                  intl2 = guildId(navigation[11]).intl;
                  intl3 = guildId(navigation[11]).intl;
                  intl4 = guildId(navigation[11]).intl;
                  showConfirmModal(obj);
                });
              } else {
                flag = true;
                _Promise1 = _Promise.resolve(true);
              }
              return _Promise1;
            }
          }
          if (!tmp25) {
            class U {
              constructor() {
                _Promise = Promise;
                if (closure_12) {
                  self = this;
                  self2 = this;
                  _Promise1 = new _Promise((arg0) => {
                    let intl;
                    let intl2;
                    let intl3;
                    let intl4;
                    let closure_0 = arg0;
                    const obj = {
                      key,
                      title: intl.string(guildId(navigation[11]).t.pvRCSu),
                      content: intl2.string(guildId(navigation[11]).t.DRi46S),
                      confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                      cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                      onConfirm() {
                        return closure_0(true);
                      },
                      onCloseCallback() {
                        return closure_0(false);
                      }
                    };
                    const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                    guildId(navigation[15]);
                    intl = guildId(navigation[11]).intl;
                    intl2 = guildId(navigation[11]).intl;
                    intl3 = guildId(navigation[11]).intl;
                    intl4 = guildId(navigation[11]).intl;
                    showConfirmModal(obj);
                  });
                } else {
                  flag = true;
                  _Promise1 = _Promise.resolve(true);
                }
                return _Promise1;
              }
            }
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              class U {
                constructor() {
                  _Promise = Promise;
                  if (closure_12) {
                    self = this;
                    self2 = this;
                    _Promise1 = new _Promise((arg0) => {
                      let intl;
                      let intl2;
                      let intl3;
                      let intl4;
                      let closure_0 = arg0;
                      const obj = {
                        key,
                        title: intl.string(guildId(navigation[11]).t.pvRCSu),
                        content: intl2.string(guildId(navigation[11]).t.DRi46S),
                        confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                        cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                        onConfirm() {
                          return closure_0(true);
                        },
                        onCloseCallback() {
                          return closure_0(false);
                        }
                      };
                      const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                      guildId(navigation[15]);
                      intl = guildId(navigation[11]).intl;
                      intl2 = guildId(navigation[11]).intl;
                      intl3 = guildId(navigation[11]).intl;
                      intl4 = guildId(navigation[11]).intl;
                      showConfirmModal(obj);
                    });
                  } else {
                    flag = true;
                    _Promise1 = _Promise.resolve(true);
                  }
                  return _Promise1;
                }
              }
              const stringResult = obj4.string(tmp(tmp2[11]).t.IHAlh1);
              cResult[9] = stringResult;
            } else {
              class U {
                constructor() {
                  _Promise = Promise;
                  if (closure_12) {
                    self = this;
                    self2 = this;
                    _Promise1 = new _Promise((arg0) => {
                      let intl;
                      let intl2;
                      let intl3;
                      let intl4;
                      let closure_0 = arg0;
                      const obj = {
                        key,
                        title: intl.string(guildId(navigation[11]).t.pvRCSu),
                        content: intl2.string(guildId(navigation[11]).t.DRi46S),
                        confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                        cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                        onConfirm() {
                          return closure_0(true);
                        },
                        onCloseCallback() {
                          return closure_0(false);
                        }
                      };
                      const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                      guildId(navigation[15]);
                      intl = guildId(navigation[11]).intl;
                      intl2 = guildId(navigation[11]).intl;
                      intl3 = guildId(navigation[11]).intl;
                      intl4 = guildId(navigation[11]).intl;
                      showConfirmModal(obj);
                    });
                  } else {
                    flag = true;
                    _Promise1 = _Promise.resolve(true);
                  }
                  return _Promise1;
                }
              }
            }
          }
        }
      }
      if (cResult[10] === str2) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              self = this;
              self2 = this;
              _Promise1 = new _Promise((arg0) => {
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let closure_0 = arg0;
                const obj = {
                  key,
                  title: intl.string(guildId(navigation[11]).t.pvRCSu),
                  content: intl2.string(guildId(navigation[11]).t.DRi46S),
                  confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
                  cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
                  onConfirm() {
                    return closure_0(true);
                  },
                  onCloseCallback() {
                    return closure_0(false);
                  }
                };
                const showConfirmModal = guildId(navigation[15]).showConfirmModal;
                guildId(navigation[15]);
                intl = guildId(navigation[11]).intl;
                intl2 = guildId(navigation[11]).intl;
                intl3 = guildId(navigation[11]).intl;
                intl4 = guildId(navigation[11]).intl;
                showConfirmModal(obj);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
      }
      function le() {
        let fn;
        let fn2;
        let closure_0 = tmp7(function*() {
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
            let c3;
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
                  let closure_1 = tmp;
                  closure_0 = undefined;
                  if (null != closure_1) {
                    closure_1_6(null);
                    closure_1_8(true);
                    c3 = 1;
                    const obj2 = guildTemplate(navigation[16]);
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp39.code, closure_1_10, closure_1_11), done: false };
                    return obj5;
                  }
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_0 = closure_2;
                  const self = this;
                  const self2 = this;
                  const aPIError = new closure_0(navigation[17]).APIError(closure_0);
                  closure_1_6(aPIError);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1_13();
                  c3 = 0;
                }
                closure_1_8(false);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp32) {
              closure_2 = tmp32;
              if (0 === c3) {
                c5 = 3;
                throw tmp32;
              } else {
                c4 = 1;
              }
            }
          }
        });
        function handleSave() {
          return closure_0(...arguments);
        }
        const setOptions = navigation.setOptions;
        if (first) {
          fn = () => null;
        } else {
          let obj = guildId(navigation[18]);
          fn = obj.getHeaderConditionalBackButton(U);
        }
        let obj2 = { headerLeft: fn, headerRight: fn2 };
        if (first) {
          fn2 = () => first(handleSave(navigation[18]).HeaderSubmittingIndicator, {});
        } else if (closure_12) {
          fn2 = () => {
            let intl;
            const obj = { onPress: handleSave, text: intl.string(intl9.t["R3BPH+"]), disabled: !result };
            const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
            intl = intl9.intl;
            return metroImportDefault(HeaderActionButton, obj);
          };
        }
        setOptions(obj2);
      }
      const items = [tmp23, str2, guildId, guildTemplate, tmp24, tmp19, str, tmp25, navigation, first];
      cResult[10] = str2;
      cResult[11] = guildId;
      cResult[12] = guildTemplate;
      cResult[13] = tmp24;
      cResult[14] = tmp19;
      cResult[15] = str;
      cResult[16] = tmp25;
      cResult[17] = navigation;
      cResult[18] = first;
      cResult[19] = le;
      cResult[20] = items;
    }
  }
  let tmp20 = null != guildTemplate;
  if (tmp20) {
    class U {
      constructor() {
        _Promise = Promise;
        if (closure_12) {
          self = this;
          self2 = this;
          _Promise1 = new _Promise((arg0) => {
            let intl;
            let intl2;
            let intl3;
            let intl4;
            let closure_0 = arg0;
            const obj = {
              key,
              title: intl.string(guildId(navigation[11]).t.pvRCSu),
              content: intl2.string(guildId(navigation[11]).t.DRi46S),
              confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
              cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
              onConfirm() {
                return closure_0(true);
              },
              onCloseCallback() {
                return closure_0(false);
              }
            };
            const showConfirmModal = guildId(navigation[15]).showConfirmModal;
            guildId(navigation[15]);
            intl = guildId(navigation[11]).intl;
            intl2 = guildId(navigation[11]).intl;
            intl3 = guildId(navigation[11]).intl;
            intl4 = guildId(navigation[11]).intl;
            showConfirmModal(obj);
          });
        } else {
          flag = true;
          _Promise1 = _Promise.resolve(true);
        }
        return _Promise1;
      }
    }
    tmp20 = tmp21;
  }
  cResult[0] = str2;
  cResult[1] = guildTemplate;
  cResult[2] = str;
  cResult[3] = tmp20;
  tmp19 = tmp20;
}) : ((guildId) => {
  let Stack;
  let _undefined;
  let _undefined2;
  let closure_6;
  let closure_9;
  let first;
  let first1;
  let firstFieldErrorMessage1;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items6;
  let obj3;
  let obj5;
  let str;
  let str2;
  let str5;
  let tmp12;
  let tmp16;
  let tmp29Result;
  let tmp6;
  let tmp8;
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  navigation = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_6 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  str = undefined;
  str2 = undefined;
  closure_13 = undefined;
  let onDeleted;
  let callback1;
  let memo;
  let obj = function _handleCreate2() {
    obj = _asyncToGenerator(async function() {
      let closure_1;
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
              closure_0 = tmp4;
              _undefined(null);
              _undefined2(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.createGuildTemplate(guildId, str, str2), done: false };
              obj2 = tmp(closure_2[16]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[17]).APIError(closure_0);
              closure_129_7(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_14();
              c3 = 0;
            }
            closure_129_10(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp31) {
          closure_2 = tmp31;
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = str2();
  const tmp3 = navigation;
  obj = guildId(navigation[14]);
  navigation = obj.useNavigation();
  let obj2 = first;
  [str, tmp6] = _slicedToArray(first.useState(null), 2);
  let c3 = tmp6;
  const tmp5 = _slicedToArray(first.useState(null), 2);
  [str2, tmp8] = _slicedToArray(first.useState(null), 2);
  const tmp7 = _slicedToArray(first.useState(null), 2);
  _slicedToArray = tmp8;
  [first, closure_6] = first.useState(false);
  [obj3, tmp12] = _slicedToArray(first.useState(null), 2);
  let c7 = tmp12;
  const tmp11 = _slicedToArray(first.useState(null), 2);
  [first1, closure_9] = first.useState(false);
  [tmp16, c10] = _slicedToArray(first.useState(false), 2);
  const tmp15 = _slicedToArray(first.useState(false), 2);
  if (str == null) {
    let name;
    if (guildTemplate != null) {
      name = guildTemplate.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  if (str2 == null) {
    let description;
    if (guildTemplate != null) {
      description = guildTemplate.description;
    }
    str2 = description;
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp19 = null != guildTemplate;
  if (tmp19) {
    tmp19 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
    str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
  }
  closure_13 = tmp19;
  onDeleted = obj2.useCallback(() => {
    _undefined(null);
    _undefined2(null);
  }, []);
  const items = [tmp19];
  callback1 = obj2.useCallback(function() {
    let _Promise1;
    let key;
    if (closure_13) {
      const self = this;
      const self2 = this;
      _Promise1 = new _Promise((arg0) => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let closure_0 = arg0;
        obj = {
          key,
          title: intl.string(guildId(navigation[11]).t.pvRCSu),
          content: intl2.string(guildId(navigation[11]).t.DRi46S),
          confirmText: intl3.string(guildId(navigation[11]).t["6GQDFu"]),
          cancelText: intl4.string(guildId(navigation[11]).t.DmDzZB),
          onConfirm() {
            return closure_0(true);
          },
          onCloseCallback() {
            return closure_0(false);
          }
        };
        const showConfirmModal = guildId(navigation[15]).showConfirmModal;
        guildId(navigation[15]);
        intl = guildId(navigation[11]).intl;
        intl2 = guildId(navigation[11]).intl;
        intl3 = guildId(navigation[11]).intl;
        intl4 = guildId(navigation[11]).intl;
        showConfirmModal(obj);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items);
  const items1 = [str];
  memo = obj2.useMemo(() => {
    obj = GuildTemplateSettingsUtils;
    return obj.isGuildTemplateNameValid(str);
  }, items1);
  const items2 = [str.length, first, memo];
  let memo1 = obj2.useMemo(() => {
    if (!first) {
      if (str.length >= 1) {
        if (!memo) {
          const intl = intl9.intl;
          return intl.string(intl9.t.IHAlh1);
        }
      }
    }
  }, items2);
  const items3 = [onDeleted, str2, guildId, guildTemplate, callback1, tmp19, str, memo, navigation, first1];
  const effect = obj2.useEffect(() => {
    let fn;
    let fn2;
    function handleSave() {
      return obj(...arguments);
    }
    obj = function _handleSave2() {
      obj = _asyncToGenerator(async function() {
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
                if (null != closure_1) {
                  closure_1_7(null);
                  closure_1_9(true);
                  c3 = 1;
                  const obj2 = closure_2_1(navigation[16]);
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp39.code, closure_1_11, closure_1_12), done: false };
                  return obj5;
                }
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = closure_2;
                const self = this;
                const self2 = this;
                const aPIError = new handleSave(navigation[17]).APIError(closure_0);
                closure_1_7(aPIError);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1_14();
                c3 = 0;
              }
              closure_1_9(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp32) {
            closure_2 = tmp32;
            if (0 === c3) {
              c5 = 3;
              throw tmp32;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const setOptions = navigation.setOptions;
    if (first1) {
      fn = () => null;
    } else {
      obj = guildId(navigation[18]);
      fn = obj.getHeaderConditionalBackButton(callback1);
    }
    let obj2 = { headerLeft: fn, headerRight: fn2 };
    if (first1) {
      fn2 = () => _undefined(handleSave(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (closure_13) {
      fn2 = () => {
        let intl;
        obj = { onPress: handleSave, text: intl.string(intl9.t["R3BPH+"]), disabled: !memo };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl9.intl;
        return metroImportDefault(HeaderActionButton, obj);
      };
    }
    setOptions(obj2);
  }, items3);
  let tmp29Result2 = null != obj3 && null == obj3.getFirstFieldErrorMessage("name") && null == obj3.getFirstFieldErrorMessage("description");
  let obj4 = { style: tmp.container, contentContainerStyle: items4, children: tmp27(Stack, obj5) };
  items4 = [tmp.containerContent, contentContainerStyle];
  const Form = tmp2(tmp3[12]).Form;
  obj5 = { spacing: guildTemplate(tmp3[6]).space.PX_24, children: items5 };
  Stack = tmp2(tmp3[23]).Stack;
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: str5.trim() };
  const Text = tmp2(tmp3[10]).Text;
  let intl = tmp2(tmp3[11]).intl;
  str5 = intl.string(guildId(tmp3[11]).t.c0m8bK);
  items5 = [c7(Text, obj6), c7(onDeleted, {}), , , , ];
  const obj7 = {
    label: intl2.string(guildId(tmp3[11]).t.z1a9R1),
    required: true,
    value: str,
    onChange: tmp6,
    placeholder: intl3.string(guildId(tmp3[11]).t.bMlpvk),
    maxLength: 100,
    onFocus() {
      return closure_6(true);
    },
    onBlur() {
      return closure_6(false);
    },
    errorMessage: memo1
  };
  const TextInput = tmp2(tmp3[20]).TextInput;
  intl2 = tmp2(tmp3[11]).intl;
  intl3 = tmp2(tmp3[11]).intl;
  const tmp28 = closure_9;
  if (memo1 == null) {
    let firstFieldErrorMessage;
    if (obj3 != null) {
      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
    }
    memo1 = firstFieldErrorMessage;
  }
  items5[2] = c7(TextInput, obj7);
  const obj8 = { label: intl4.string(guildId(tmp3[11]).t.GxirWa), value: str2, onChange: tmp8, placeholder: intl5.string(guildId(tmp3[11]).t.n1FBXh), maxLength: 120, errorMessage: firstFieldErrorMessage1 };
  const TextArea = tmp2(tmp3[21]).TextArea;
  intl4 = tmp2(tmp3[11]).intl;
  intl5 = tmp2(tmp3[11]).intl;
  firstFieldErrorMessage1 = undefined;
  if (obj3 != null) {
    firstFieldErrorMessage1 = obj3.getFirstFieldErrorMessage("description");
  }
  items5[3] = c7(TextArea, obj8);
  if (null != guildTemplate) {
    const obj9 = { guildId, guildTemplate, onError: tmp12, onDeleted };
    tmp29Result = tmp29(memo, obj9);
  } else {
    const obj10 = {
      variant: "primary",
      text: intl6.string(guildId(tmp3[11]).t.Wxdi8A),
      loading: tmp16,
      disabled: !memo,
      onPress: function handleCreate() {
          return obj(...arguments);
        }
    };
    const Button = tmp2(tmp3[22]).Button;
    intl6 = tmp2(tmp3[11]).intl;
    tmp29Result = tmp29(Button, obj10);
  }
  items5[4] = tmp29Result;
  if (tmp29Result2) {
    const obj11 = { variant: "text-sm/normal", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    const Text2 = tmp2(tmp3[10]).Text;
    tmp29Result2 = tmp29(Text2, obj11);
  }
  const obj12 = { children: items6 };
  items5[5] = tmp29Result2;
  items6 = [tmp29(Form, obj4), tmp29(tmp2(tmp3[24]).NavScrim, {})];
  return first1(tmp28, obj12);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionBox() {
  let Stack2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let items2;
  let obj11;
  let tmp11;
  let tmp15;
  let tmp21;
  let tmp24;
  let tmp28;
  let tmp32;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "eyebrow", children: intl.string(intl9.t["f8u+VO"]) };
    const Heading = Text_Text.Heading;
    intl = intl9.intl;
    const tmp6 = metroImportDefault(Heading, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { copies: true, label: intl2.string(intl9.t.K2tn16) };
    intl2 = intl9.intl;
    const tmp10 = metroImportDefault(closure_15, obj3);
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { copies: true, label: intl3.string(intl9.t.om5gNq) };
    intl3 = intl9.intl;
    const tmp14 = metroImportDefault(closure_15, obj4);
    cResult[2] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { spacing: nativeDefault.space.PX_12, children: items };
    const Stack = Stack_Stack.Stack;
    items = [first, tmp7, tmp11, ];
    const obj6 = { copies: true, label: intl4.string(intl9.t["/VNqdD"]) };
    intl4 = intl9.intl;
    items[3] = metroImportDefault(closure_15, obj6);
    const tmp20 = metroImportAll(Stack, obj5);
    cResult[3] = tmp20;
    tmp15 = tmp20;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { variant: "eyebrow", children: intl5.string(intl9.t["8zhJEr"]) };
    const Heading2 = Text_Text.Heading;
    intl5 = intl9.intl;
    const tmp23 = metroImportDefault(Heading2, obj7);
    cResult[4] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { copies: false, label: intl6.string(intl9.t.WOKI6t) };
    intl6 = intl9.intl;
    const tmp27 = metroImportDefault(closure_15, obj8);
    cResult[5] = tmp27;
    tmp24 = tmp27;
  } else {
    tmp24 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { copies: false, label: intl7.string(intl9.t.ddhDJH) };
    intl7 = intl9.intl;
    const tmp31 = metroImportDefault(closure_15, obj9);
    cResult[6] = tmp31;
    tmp28 = tmp31;
  } else {
    tmp28 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { children: metroImportAll(Stack2, obj11) };
    const Card = Card_Card.Card;
    obj11 = { spacing: nativeDefault.space.PX_16, children: items1 };
    Stack2 = Stack_Stack.Stack;
    items1 = [tmp15, ];
    const obj12 = { spacing: nativeDefault.space.PX_12, children: items2 };
    const Stack3 = Stack_Stack.Stack;
    items2 = [tmp21, tmp24, tmp28, ];
    const obj13 = { copies: false, label: intl8.string(intl9.t["6Q/DHk"]) };
    intl8 = intl9.intl;
    items2[3] = metroImportDefault(closure_15, obj13);
    items1[1] = metroImportAll(Stack3, obj12);
    const tmp37 = metroImportDefault(Card, obj10);
    cResult[7] = tmp37;
    tmp32 = tmp37;
  } else {
    tmp32 = cResult[7];
  }
  return tmp32;
}) : (function DescriptionBox() {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let items2;
  let obj2;
  const obj = { children: metroImportAll(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_16, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: nativeDefault.space.PX_12, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj4 = { variant: "eyebrow", children: intl.string(intl9.t["f8u+VO"]) };
  const Heading = Text_Text.Heading;
  intl = intl9.intl;
  items = [metroImportDefault(Heading, obj4), , , ];
  const obj5 = { copies: true, label: intl2.string(intl9.t.K2tn16) };
  intl2 = intl9.intl;
  items[1] = metroImportDefault(closure_15, obj5);
  const obj6 = { copies: true, label: intl3.string(intl9.t.om5gNq) };
  intl3 = intl9.intl;
  items[2] = metroImportDefault(closure_15, obj6);
  const obj7 = { copies: true, label: intl4.string(intl9.t["/VNqdD"]) };
  intl4 = intl9.intl;
  items[3] = metroImportDefault(closure_15, obj7);
  items1 = [metroImportAll(Stack2, obj3), ];
  const obj8 = { spacing: nativeDefault.space.PX_12, children: items2 };
  const Stack3 = Stack_Stack.Stack;
  const obj9 = { variant: "eyebrow", children: intl5.string(intl9.t["8zhJEr"]) };
  const Heading2 = Text_Text.Heading;
  intl5 = intl9.intl;
  items2 = [metroImportDefault(Heading2, obj9), , , ];
  const obj10 = { copies: false, label: intl6.string(intl9.t.WOKI6t) };
  intl6 = intl9.intl;
  items2[1] = metroImportDefault(closure_15, obj10);
  const obj11 = { copies: false, label: intl7.string(intl9.t.ddhDJH) };
  intl7 = intl9.intl;
  items2[2] = metroImportDefault(closure_15, obj11);
  const obj12 = { copies: false, label: intl8.string(intl9.t["6Q/DHk"]) };
  intl8 = intl9.intl;
  items2[3] = metroImportDefault(closure_15, obj12);
  items1[1] = metroImportAll(Stack3, obj8);
  return metroImportDefault(Card, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function CopyRow(arg0) {
  let CircleXIcon;
  let ICON_FEEDBACK_CRITICAL;
  let copies;
  let items;
  let label;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  ({ copies, label } = arg0);
  const tmp4 = closure_12();
  if (copies) {
    CircleXIcon = CircleCheckIcon.CircleCheckIcon;
  } else {
    CircleXIcon = CircleXIcon2.CircleXIcon;
  }
  const colors = nativeDefault.colors;
  if (copies) {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    tmp6 = importDefault;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp6 = importDefault;
  }
  if (cResult[0] === CircleXIcon) {
    let tmp7;
    let tmp9;
    if (cResult[1] === ICON_FEEDBACK_CRITICAL) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== label) {
      const obj2 = { variant: "text-sm/normal", children: label };
      const tmp11 = metroImportDefault(Text_Text.Text, obj2);
      cResult[3] = label;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.copyRow) {
      if (cResult[6] === tmp7) {
        let tmp12;
        if (cResult[7] === tmp9) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { style: tmp4.copyRow, children: items };
    items = [tmp7, tmp9];
    const tmp15 = metroImportAll(View, obj3);
    cResult[5] = tmp4.copyRow;
    cResult[6] = tmp7;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const obj4 = { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp6(587).colors.WHITE };
  const tmp8 = metroImportDefault(CircleXIcon, obj4);
  cResult[0] = CircleXIcon;
  cResult[1] = ICON_FEEDBACK_CRITICAL;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function CopyRow(copies) {
  let CircleXIcon;
  let ICON_FEEDBACK_CRITICAL;
  let items;
  let tmp10;
  let tmp4;
  copies = copies.copies;
  const label = copies.label;
  const tmp = closure_12();
  if (copies) {
    CircleXIcon = CircleCheckIcon.CircleCheckIcon;
    tmp4 = require;
  } else {
    CircleXIcon = CircleXIcon2.CircleXIcon;
    tmp4 = require;
  }
  const obj = { style: tmp.copyRow, children: items };
  const colors = nativeDefault.colors;
  if (copies) {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    tmp10 = importDefault;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp10 = importDefault;
  }
  items = [, ];
  const obj2 = { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp10(587).colors.WHITE };
  items[0] = metroImportDefault(CircleXIcon, obj2);
  items[1] = metroImportDefault(tmp4(4886).Text, { variant: "text-sm/normal", children: label });
  return metroImportAll(View, obj);
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function TemplateControls(guildId) {
  let closure_5;
  let date;
  let format;
  let intl4;
  let intl5;
  let items;
  let items1;
  let key;
  let obj11;
  let obj6;
  let onError;
  let tmp5;
  let tmp6;
  let tmp9;
  let v0AVum;
  const tmp = guildId;
  let obj = guildId(onError[8]);
  const cResult = obj.c(39);
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  onError = guildId.onError;
  const onDeleted = guildId.onDeleted;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, _slicedToArray] = tmp4;
  if (cResult[0] !== guildTemplate.code) {
    const tmp8 = guildTemplate(tmp2[28])(guildTemplate.code);
    cResult[0] = guildTemplate.code;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  react = tmp6;
  if (cResult[2] !== tmp6) {
    function handleCopyLink() {
      const obj = ClipboardUtils;
      obj.copy(closure_5);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
    cResult[2] = tmp6;
    cResult[3] = handleCopyLink;
    tmp9 = handleCopyLink;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === guildTemplate.code) {
      let tmp10;
      if (cResult[6] === onError) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === guildId) {
        if (cResult[9] === guildTemplate.code) {
          if (cResult[10] === onDeleted) {
            let tmp11;
            let tmp14;
            let tmp16;
            let tmp20;
            let tmp19;
            if (cResult[11] === onError) {
              tmp11 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[11]).intl;
              const stringResult = intl.string(tmp(onError[11]).t.zGGcLw);
              cResult[13] = stringResult;
              tmp14 = stringResult;
            } else {
              tmp14 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp18 = closure_7(tmp(tmp2[31]).CopyIcon, {});
              cResult[14] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[14];
            }
            const _Symbol3 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              let intl2 = tmp(tmp2[11]).intl;
              const stringResult1 = intl2.string(tmp(onError[11]).t.zGGcLw);
              let intl3 = tmp(tmp2[11]).intl;
              const stringResult2 = intl3.string(tmp(onError[11]).t.WqhZss);
              cResult[15] = stringResult1;
              cResult[16] = stringResult2;
              tmp20 = stringResult2;
              tmp19 = stringResult1;
            } else {
              tmp19 = cResult[15];
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp9) {
              let tmp23;
              if (cResult[18] === tmp6) {
                tmp23 = cResult[19];
              }
              if (cResult[20] === guildTemplate.isDirty) {
                if (cResult[21] === tmp10) {
                  let tmp26;
                  let tmp30;
                  let tmp32;
                  let tmp35;
                  let tmp37;
                  if (cResult[22] === tmp5) {
                    tmp26 = cResult[23];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(tmp2[11]).intl;
                    const stringResult3 = intl6.string(tmp(onError[11]).t["cN/RFD"]);
                    cResult[24] = stringResult3;
                    tmp30 = stringResult3;
                  } else {
                    tmp30 = cResult[24];
                  }
                  if (cResult[25] !== tmp11) {
                    let obj2 = { variant: "critical-secondary", text: tmp30, onPress: tmp11 };
                    const tmp34 = closure_7(tmp(onError[22]).Button, obj2);
                    cResult[25] = tmp11;
                    cResult[26] = tmp34;
                    tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[26];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl7 = tmp(tmp2[11]).intl;
                    const stringResult4 = intl7.string(tmp(onError[11]).t.YI3iV6);
                    cResult[27] = stringResult4;
                    tmp35 = stringResult4;
                  } else {
                    tmp35 = cResult[27];
                  }
                  if (cResult[28] !== guildTemplate.code) {
                    let obj3 = {
                      variant: "secondary",
                      text: tmp35,
                      onPress() {
                                          const obj = guild_templates_GuildTemplateActionCreatorsDefault;
                                          return obj.showModal(guildTemplate.code, false);
                                        }
                    };
                    const tmp39 = closure_7(tmp(onError[22]).Button, obj3);
                    cResult[28] = guildTemplate.code;
                    cResult[29] = tmp39;
                    tmp37 = tmp39;
                  } else {
                    tmp37 = cResult[29];
                  }
                  if (cResult[30] === guildTemplate.isDirty) {
                    let tmp40;
                    if (cResult[31] === guildTemplate.updatedAt) {
                      tmp40 = cResult[32];
                    }
                    if (cResult[33] === tmp26) {
                      if (cResult[34] === tmp32) {
                        if (cResult[35] === tmp37) {
                          if (cResult[36] === tmp40) {
                            let tmp44;
                            if (cResult[37] === tmp23) {
                              tmp44 = cResult[38];
                            }
                            return tmp44;
                          }
                        }
                      }
                    }
                    let obj4 = { spacing: guildTemplate(onError[6]).space.PX_12, children: items };
                    const Stack = tmp(tmp2[23]).Stack;
                    items = [tmp23, tmp26, tmp32, tmp37, tmp40];
                    const tmp47 = closure_8(Stack, obj4);
                    cResult[33] = tmp26;
                    cResult[34] = tmp32;
                    cResult[35] = tmp37;
                    cResult[36] = tmp40;
                    cResult[37] = tmp23;
                    cResult[38] = tmp47;
                    tmp44 = tmp47;
                  }
                  let isDirty2 = guildTemplate.isDirty;
                  if (isDirty2) {
                    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: format(v0AVum, obj6) };
                    const Text2 = tmp(tmp2[10]).Text;
                    const intl8 = tmp(tmp2[11]).intl;
                    format = intl8.format;
                    const _Date = Date;
                    let self = this;
                    let self2 = this;
                    obj6 = { timestamp: date };
                    v0AVum = tmp(tmp2[11]).t.v0AVum;
                    date = new Date(guildTemplate.updatedAt);
                    isDirty2 = closure_7(Text2, obj5);
                  }
                  cResult[30] = guildTemplate.isDirty;
                  cResult[31] = guildTemplate.updatedAt;
                  cResult[32] = isDirty2;
                  tmp40 = isDirty2;
                }
              }
              let isDirty = guildTemplate.isDirty;
              if (isDirty) {
                const obj7 = { children: items1 };
                const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl4.string(tmp(onError[11]).t.aWsjtD) };
                const Text = tmp(tmp2[10]).Text;
                intl4 = tmp(tmp2[11]).intl;
                items1 = [closure_7(Text, obj8), ];
                const obj9 = { variant: "primary", text: intl5.string(tmp(onError[11]).t["Nw+0Y/"]), loading: tmp5, onPress: tmp10 };
                const Button = tmp(tmp2[22]).Button;
                intl5 = tmp(tmp2[11]).intl;
                items1[1] = closure_7(Button, obj9);
                isDirty = closure_8(closure_9, obj7);
              }
              cResult[20] = guildTemplate.isDirty;
              cResult[21] = tmp10;
              cResult[22] = tmp5;
              cResult[23] = isDirty;
              tmp26 = isDirty;
            }
            const obj10 = { label: tmp14, children: closure_7(tmp(onError[33]).InputButton, obj11) };
            const Input = tmp(tmp2[32]).Input;
            obj11 = { text: tmp6, value: tmp6, icon: tmp16, iconPosition: "end", onPress: tmp9, accessibilityLabel: tmp19, accessibilityHint: tmp20 };
            const tmp25 = closure_7(Input, obj10);
            cResult[17] = tmp9;
            cResult[18] = tmp6;
            cResult[19] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
      let closure_0 = onDeleted(function*() {
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
          let v0;
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
                const code = tmp;
                closure_0 = undefined;
                tmp25(null);
                v0 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj2.deleteGuildTemplate(closure_0, code.code), done: false };
                obj2 = guildTemplate(onError[16]);
                return obj5;
              }
            } else {
              if (1 === c4) {
                v0 = 0;
                closure_0 = tmp25;
                const self = this;
                const self2 = this;
                const aPIError = new closure_0(onError[17]).APIError(closure_0);
                tmp25(aPIError);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                v0();
                v0 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp25) {
            if (0 === v0) {
              c5 = 3;
              throw tmp25;
            } else {
              c4 = 1;
            }
          }
        }
      });
      function handleDelete() {
        return closure_0(...arguments);
      }
      function confirmDelete() {
        let intl;
        let intl2;
        let intl3;
        const obj = { key, title: intl.string(intl9.t["cN/RFD"]), content: intl2.string(intl9.t["apCQv/"]), confirmText: intl3.string(intl9.t["cN/RFD"]), onConfirm: handleDelete };
        const showConfirmModal = AlertModal.showConfirmModal;
        AlertModal;
        intl = intl9.intl;
        intl2 = intl9.intl;
        intl3 = intl9.intl;
        showConfirmModal(obj);
      }
      cResult[8] = guildId;
      cResult[9] = guildTemplate.code;
      cResult[10] = onDeleted;
      cResult[11] = onError;
      cResult[12] = confirmDelete;
      tmp11 = confirmDelete;
    }
  }
  closure_0 = onDeleted(function*() {
    let closure_2;
    let obj2;
    let v1;
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
      let c3;
      try {
        c5 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const code = tmp;
            closure_0 = undefined;
            tmp27(null);
            v1(true);
            c3 = 1;
            v1 = 2;
            c5 = 1;
            const obj5 = { value: obj2.syncGuildTemplate(closure_0, code.code), done: false };
            obj2 = guildTemplate(onError[16]);
            return obj5;
          }
        } else {
          if (1 === v1) {
            c3 = 0;
            closure_0 = tmp27;
            const self = this;
            const self2 = this;
            const aPIError = new closure_0(onError[17]).APIError(closure_0);
            tmp27(aPIError);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          v1(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        if (0 === c3) {
          c5 = 3;
          throw tmp27;
        } else {
          v1 = 1;
        }
      }
    }
  });
  function handleSync() {
    return closure_0(...arguments);
  }
  cResult[4] = guildId;
  cResult[5] = guildTemplate.code;
  cResult[6] = onError;
  cResult[7] = handleSync;
  tmp10 = handleSync;
}) : (function TemplateControls(arg0) {
  let InputButton;
  let closure_4;
  let closure_5;
  let date;
  let first;
  let format;
  let guildTemplate;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let key;
  let obj10;
  let obj3;
  let v0AVum;
  ({ guildId: require, guildTemplate } = arg0);
  ({ onError: dependencyMap, onDeleted: _asyncToGenerator } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _handleSync2() {
    let code;
    obj = _asyncToGenerator(async function() {
      let closure_1;
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
              closure_0 = tmp4;
              dependencyMap(null);
              closure_2_4(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.syncGuildTemplate(require, code.code), done: false };
              obj2 = tmp(closure_2[16]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[17]).APIError(closure_0);
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
              c3 = 0;
            }
            closure_129_4(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (0 === c3) {
            c5 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  function handleDelete() {
    return obj(...arguments);
  }
  obj = function _handleDelete2() {
    let code;
    obj = _asyncToGenerator(async function() {
      let closure_1;
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
              closure_0 = tmp4;
              dependencyMap(null);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.deleteGuildTemplate(require, code.code), done: false };
              obj2 = tmp(closure_2[16]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[17]).APIError(closure_0);
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
              closure_129_3();
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
  [first, _slicedToArray] = react.useState(false);
  const tmp4 = guildTemplate(17822)(guildTemplate.code);
  react = tmp4;
  obj = { spacing: guildTemplate(587).space.PX_12, children: items };
  const Stack = Stack_Stack.Stack;
  let obj2 = { label: intl.string(intl9.t.zGGcLw), children: handleDelete(InputButton, obj3) };
  const Input = Input2.Input;
  intl = intl9.intl;
  obj3 = {
    text: tmp4,
    value: tmp4,
    icon: handleDelete(CopyIcon2.CopyIcon, {}),
    iconPosition: "end",
    onPress: function handleCopyLink() {
      obj = ClipboardUtils;
      obj.copy(closure_5);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    },
    accessibilityLabel: intl2.string(intl9.t.zGGcLw),
    accessibilityHint: intl3.string(intl9.t.WqhZss)
  };
  InputButton = native.InputButton;
  intl2 = intl9.intl;
  intl3 = intl9.intl;
  items = [handleDelete(Input, obj2), , , , ];
  let isDirty = guildTemplate.isDirty;
  if (isDirty) {
    let obj4 = { children: items1 };
    let obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl4.string(intl9.t.aWsjtD) };
    const Text = Text_Text.Text;
    intl4 = intl9.intl;
    items1 = [tmp7(Text, obj5), ];
    const obj6 = {
      variant: "primary",
      text: intl5.string(intl9.t["Nw+0Y/"]),
      loading: first,
      onPress: function handleSync() {
          return obj(...arguments);
        }
    };
    const Button = components_Button_Button.Button;
    intl5 = intl9.intl;
    items1[1] = handleDelete(Button, obj6);
    isDirty = tmp5(closure_9, obj4);
  }
  items[1] = isDirty;
  const obj7 = {
    variant: "critical-secondary",
    text: intl6.string(intl9.t["cN/RFD"]),
    onPress: function confirmDelete() {
      let intl;
      let intl2;
      let intl3;
      obj = { key, title: intl.string(intl9.t["cN/RFD"]), content: intl2.string(intl9.t["apCQv/"]), confirmText: intl3.string(intl9.t["cN/RFD"]), onConfirm: handleDelete };
      const showConfirmModal = AlertModal.showConfirmModal;
      AlertModal;
      intl = intl9.intl;
      intl2 = intl9.intl;
      intl3 = intl9.intl;
      showConfirmModal(obj);
    }
  };
  const Button2 = components_Button_Button.Button;
  intl6 = intl9.intl;
  items[2] = handleDelete(Button2, obj7);
  const obj8 = {
    variant: "secondary",
    text: intl7.string(intl9.t.YI3iV6),
    onPress() {
      obj = guild_templates_GuildTemplateActionCreatorsDefault;
      return obj.showModal(guildTemplate.code, false);
    }
  };
  const Button3 = components_Button_Button.Button;
  intl7 = intl9.intl;
  items[3] = handleDelete(Button3, obj8);
  let isDirty2 = guildTemplate.isDirty;
  if (isDirty2) {
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: format(v0AVum, obj10) };
    const Text2 = Text_Text.Text;
    const intl8 = intl9.intl;
    format = intl8.format;
    const _Date = Date;
    let self = this;
    let self2 = this;
    obj10 = { timestamp: date };
    v0AVum = intl9.t.v0AVum;
    date = new Date(guildTemplate.updatedAt);
    isDirty2 = tmp7(Text2, obj9);
  }
  items[4] = isDirty2;
  return obj(Stack, obj);
}));
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalTemplate.tsx");

export default tmp5;