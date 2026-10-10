// === Module 18389: GuildSettingsModalTemplate ===

// Module 18389 (GuildSettingsModalTemplate)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import CopyIcon2 from "CopyIcon" /* 5042 */;
import AlertModal from "AlertModal" /* 5305 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import Card from "Card" /* 6181 */;
import Input from "Input" /* 6286 */;
import CircleXIcon2 from "CircleXIcon" /* 6295 */;
import CircleCheckIcon from "CircleCheckIcon" /* 6867 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import HeaderActionButton from "HeaderActionButton" /* 7088 */;
import native from "native" /* 8541 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11346 */;
import GuildTemplateSettingsUtils from "GuildTemplateSettingsUtils" /* 18390 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const util = Form(1126);
const Text_Text = Form(5088);
const SceneLoadingIndicator = Form(6726);
const Form2 = Form(8579);
require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "delete-guild-template";
let c11 = "guild-template-unsaved-changes";
const createStyles = fn(5092);
let obj = { container: { flex: 1 }, containerContent: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, copyRow: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj);
fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function TemplateForm(guildId) {
  const cResult = guildId(navigation[8]).c(70);
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  closure_12();
  let obj = guildId(navigation[8]);
  const tmp = guildId;
  const tmp2 = navigation;
  navigation = guildId(navigation[14]).useNavigation();
  let obj2 = guildId(navigation[14]);
  [str, tmp7] = noop.useState(null);
  asyncGeneratorStep = tmp7;
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [str2, tmp9] = noop.useState(null);
  _slicedToArray = tmp9;
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  [tmp11, noop] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  [r10041, tmp13] = noop.useState(null);
  View = tmp13;
  [first, closure_8] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(null), 2);
  [r10051, closure_9] = noop.useState(false);
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
      if (cResult[2] === str) {
        let tmp19 = cResult[3];
      }
      closure_12 = tmp19;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            tmp = closure_3(null);
            tmp2 = closure_4(null);
            return;
          }
        }
        cResult[4] = Y;
      } else {
        class Y {
          constructor() {
            tmp = closure_3(null);
            tmp2 = closure_4(null);
            return;
          }
        }
      }
      if (cResult[5] !== tmp19) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
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
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
              });
            } else {
              flag = true;
              _Promise1 = _Promise.resolve(true);
            }
            return _Promise1;
          }
        }
      }
      closure_14 = U;
      if (cResult[7] !== str) {
        class U {
          constructor() {
            _Promise = Promise;
            if (closure_12) {
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
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
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
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
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
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
                tmp2 = new.target;
                tmp3 = new.target;
                _Promise1 = new _Promise((arg0) => {
                  closure_0 = arg0;
                  const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                  const intl = guildId(1126).intl;
                  obj2.title = intl.string(guildId(1126).t.pvRCSu);
                  const intl2 = guildId(1126).intl;
                  obj2.content = intl2.string(guildId(1126).t.DRi46S);
                  const intl3 = guildId(1126).intl;
                  obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                  const intl4 = guildId(1126).intl;
                  obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                  obj2.onConfirm = function onConfirm() {
                    return closure_0(true);
                  };
                  obj2.onCloseCallback = function onCloseCallback() {
                    return closure_0(false);
                  };
                  guildId(5305).showConfirmModal(obj2);
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
                  tmp2 = new.target;
                  tmp3 = new.target;
                  _Promise1 = new _Promise((arg0) => {
                    closure_0 = arg0;
                    const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                    const intl = guildId(1126).intl;
                    obj2.title = intl.string(guildId(1126).t.pvRCSu);
                    const intl2 = guildId(1126).intl;
                    obj2.content = intl2.string(guildId(1126).t.DRi46S);
                    const intl3 = guildId(1126).intl;
                    obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                    const intl4 = guildId(1126).intl;
                    obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                    obj2.onConfirm = function onConfirm() {
                      return closure_0(true);
                    };
                    obj2.onCloseCallback = function onCloseCallback() {
                      return closure_0(false);
                    };
                    guildId(5305).showConfirmModal(obj2);
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
                    tmp2 = new.target;
                    tmp3 = new.target;
                    _Promise1 = new _Promise((arg0) => {
                      closure_0 = arg0;
                      const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                      const intl = guildId(1126).intl;
                      obj2.title = intl.string(guildId(1126).t.pvRCSu);
                      const intl2 = guildId(1126).intl;
                      obj2.content = intl2.string(guildId(1126).t.DRi46S);
                      const intl3 = guildId(1126).intl;
                      obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                      const intl4 = guildId(1126).intl;
                      obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                      obj2.onConfirm = function onConfirm() {
                        return closure_0(true);
                      };
                      obj2.onCloseCallback = function onCloseCallback() {
                        return closure_0(false);
                      };
                      guildId(5305).showConfirmModal(obj2);
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
                    tmp2 = new.target;
                    tmp3 = new.target;
                    _Promise1 = new _Promise((arg0) => {
                      closure_0 = arg0;
                      const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                      const intl = guildId(1126).intl;
                      obj2.title = intl.string(guildId(1126).t.pvRCSu);
                      const intl2 = guildId(1126).intl;
                      obj2.content = intl2.string(guildId(1126).t.DRi46S);
                      const intl3 = guildId(1126).intl;
                      obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                      const intl4 = guildId(1126).intl;
                      obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                      obj2.onConfirm = function onConfirm() {
                        return closure_0(true);
                      };
                      obj2.onCloseCallback = function onCloseCallback() {
                        return closure_0(false);
                      };
                      guildId(5305).showConfirmModal(obj2);
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
              tmp2 = new.target;
              tmp3 = new.target;
              _Promise1 = new _Promise((arg0) => {
                closure_0 = arg0;
                const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
                const intl = guildId(1126).intl;
                obj2.title = intl.string(guildId(1126).t.pvRCSu);
                const intl2 = guildId(1126).intl;
                obj2.content = intl2.string(guildId(1126).t.DRi46S);
                const intl3 = guildId(1126).intl;
                obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
                const intl4 = guildId(1126).intl;
                obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
                obj2.onConfirm = function onConfirm() {
                  return closure_0(true);
                };
                obj2.onCloseCallback = function onCloseCallback() {
                  return closure_0(false);
                };
                guildId(5305).showConfirmModal(obj2);
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
        closure_129_0 = tmp7(function*() {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              c5 = 2;
              let tmp7 = c4;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_1 = tmp3;
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  tmp7 = closure_1;
                  if (null != closure_1) {
                    closure_1_6(null);
                    closure_1_8(true);
                    c3 = 1;
                    const obj2 = guildTemplate(11346);
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp7.code, str, str2), done: false };
                    return obj5;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_0 = closure_2;
                  const aPIError = new handleSave(5635).APIError(closure_128_0);
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
                tmp7 = closure_1_8(false);
              }
              c5 = 3;
            } catch (tmp36) {
              closure_2 = tmp36;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp36;
              } else {
                c4 = tmp;
              }
            }
          }
        });
        function handleSave() {
          const self = this;
          const apply = handleSave.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        if (first) {
          let fn = () => null;
        } else {
          fn = guildId(navigation[18]).getHeaderConditionalBackButton(closure_14);
          let obj = guildId(navigation[18]);
        }
        let obj2 = { headerLeft: fn, headerRight: null };
        if (first) {
          let fn2 = () => first(handleSave(6200).HeaderSubmittingIndicator, {});
        } else if (closure_12) {
          fn2 = () => {
            const obj = { onPress: handleSave, text: null, disabled: null };
            const intl = util.intl;
            obj.text = intl.string(util.t["R3BPH+"]);
            obj.disabled = !result;
            return React5(HeaderActionButton.HeaderActionButton, obj);
          };
        }
        obj2.headerRight = fn2;
        navigation.setOptions(obj2);
      }
      const items = [Y, str2, guildId, guildTemplate, U, tmp19, str, tmp25, navigation, first];
      cResult[10] = str2;
      cResult[11] = guildId;
      cResult[12] = guildTemplate;
      cResult[13] = U;
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
          tmp2 = new.target;
          tmp3 = new.target;
          _Promise1 = new _Promise((arg0) => {
            closure_0 = arg0;
            const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
            const intl = guildId(1126).intl;
            obj2.title = intl.string(guildId(1126).t.pvRCSu);
            const intl2 = guildId(1126).intl;
            obj2.content = intl2.string(guildId(1126).t.DRi46S);
            const intl3 = guildId(1126).intl;
            obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
            const intl4 = guildId(1126).intl;
            obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
            obj2.onConfirm = function onConfirm() {
              return closure_0(true);
            };
            obj2.onCloseCallback = function onCloseCallback() {
              return closure_0(false);
            };
            guildId(5305).showConfirmModal(obj2);
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
  const tmp16 = _slicedToArray(noop.useState(false), 2);
}) : (function TemplateForm(guildId) {
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  let navigation;
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
  closure_17 = async function _handleCreate2() {
    React5(null);
    deleteguildtemplate(true);
    await tmp3(tmp36[16]).createGuildTemplate(guildId, str, str2);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp36;
      const aPIError = new guildId(tmp36[17]).APIError(closure_128_0);
      closure_129_7(aPIError);
      closure_129_10(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_14();
      c3 = 0;
    }
    return value;
  };
  const tmp = str2();
  navigation = guildId(navigation[14]).useNavigation();
  let obj = guildId(navigation[14]);
  [str, tmp6] = first.useState(null);
  c3 = tmp6;
  const tmp5 = _slicedToArray(first.useState(null), 2);
  [str2, tmp8] = first.useState(null);
  _slicedToArray = tmp8;
  [first, closure_6] = first.useState(false);
  let tmp7 = _slicedToArray(first.useState(null), 2);
  [obj3, tmp12] = first.useState(null);
  c7 = tmp12;
  [first1, closure_9] = first.useState(false);
  const tmp11 = _slicedToArray(first.useState(null), 2);
  [tmp16, c10] = first.useState(false);
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
    const tmp20 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
  }
  closure_13 = tmp19;
  onDeleted = obj2.useCallback(() => {
    _undefined(null);
    _undefined2(null);
  }, []);
  const items = [tmp19];
  callback1 = obj2.useCallback(() => {
    if (closure_13) {
      let _Promise1 = new _Promise((arg0) => {
        closure_0 = arg0;
        const obj2 = { key, title: null, content: null, confirmText: null, cancelText: null, onConfirm: null, onCloseCallback: null };
        const intl = guildId(1126).intl;
        obj2.title = intl.string(guildId(1126).t.pvRCSu);
        const intl2 = guildId(1126).intl;
        obj2.content = intl2.string(guildId(1126).t.DRi46S);
        const intl3 = guildId(1126).intl;
        obj2.confirmText = intl3.string(guildId(1126).t["6GQDFu"]);
        const intl4 = guildId(1126).intl;
        obj2.cancelText = intl4.string(guildId(1126).t.DmDzZB);
        obj2.onConfirm = function onConfirm() {
          return closure_0(true);
        };
        obj2.onCloseCallback = function onCloseCallback() {
          return closure_0(false);
        };
        guildId(5305).showConfirmModal(obj2);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items);
  const items1 = [str];
  memo = obj2.useMemo(() => GuildTemplateSettingsUtils.isGuildTemplateNameValid(str), items1);
  const items2 = [str.length, first, memo];
  let memo1 = obj2.useMemo(() => {
    if (!first) {
      if (str.length >= 1) {
        if (!memo) {
          const intl = util.intl;
          return intl.string(util.t.IHAlh1);
        }
      }
    }
  }, items2);
  const items3 = [onDeleted, str2, guildId, guildTemplate, callback1, tmp19, str, memo, navigation, first1];
  const effect = obj2.useEffect(() => {
    function handleSave() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _handleSave2() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c5 = 2;
          let tmp7 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              tmp7 = closure_1;
              if (null != closure_1) {
                closure_1_7(null);
                closure_1_9(true);
                c3 = 1;
                const obj2 = guildTemplate(11346);
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp7.code, str, str2), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_0 = closure_2;
              const aPIError = new handleSave(5635).APIError(closure_128_0);
              closure_1_7(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              onDeleted();
              c3 = 0;
            }
            tmp7 = closure_1_9(false);
          }
          c5 = 3;
        } catch (tmp36) {
          closure_2 = tmp36;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp36;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    if (first1) {
      let fn = () => null;
    } else {
      fn = guildId(navigation[18]).getHeaderConditionalBackButton(callback1);
      let obj = guildId(navigation[18]);
    }
    let obj2 = { headerLeft: fn, headerRight: null };
    if (first1) {
      let fn2 = () => closure_1_7(handleSave(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (closure_13) {
      fn2 = () => {
        const obj = { onPress: handleSave, text: null, disabled: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        obj.disabled = !memo;
        return React5(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    navigation.setOptions(obj2);
  }, items3);
  let tmp29Result2 = null != obj3;
  if (tmp29Result2) {
    tmp29Result2 = null == obj3.getFirstFieldErrorMessage("name");
  }
  if (tmp29Result2) {
    tmp29Result2 = null == obj3.getFirstFieldErrorMessage("description");
  }
  let obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.containerContent, guildId.contentContainerStyle];
  obj4.contentContainerStyle = items4;
  let obj5 = { spacing: guildTemplate(navigation[6]).space.PX_24, children: null };
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  let intl = tmp2(tmp3[11]).intl;
  const tmp15 = _slicedToArray(first.useState(false), 2);
  const tmp28 = closure_9;
  obj6.children = intl.string(guildId(navigation[11]).t.c0m8bK).trim();
  const items5 = [c7(guildId(navigation[10]).Text, obj6), c7(onDeleted, {}), , , , ];
  const obj7 = { label: null, required: true, value: null, onChange: null, placeholder: null, maxLength: 100, onFocus: null, onBlur: null, errorMessage: null };
  let intl2 = tmp2(tmp3[11]).intl;
  obj7.label = intl2.string(guildId(navigation[11]).t.z1a9R1);
  obj7.value = str;
  obj7.onChange = tmp6;
  let intl3 = tmp2(tmp3[11]).intl;
  obj7.placeholder = intl3.string(guildId(navigation[11]).t.bMlpvk);
  obj7.onFocus = function onFocus() {
    return closure_6(true);
  };
  obj7.onBlur = function onBlur() {
    return closure_6(false);
  };
  if (memo1 == null) {
    let firstFieldErrorMessage;
    if (obj3 != null) {
      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
    }
    memo1 = firstFieldErrorMessage;
  }
  obj7.errorMessage = memo1;
  items5[2] = c7(guildId(navigation[20]).TextInput, obj7);
  const obj8 = { label: null, value: null, onChange: null, placeholder: null, maxLength: 120, errorMessage: null };
  let intl4 = tmp2(tmp3[11]).intl;
  obj8.label = intl4.string(guildId(navigation[11]).t.GxirWa);
  obj8.value = str2;
  obj8.onChange = tmp8;
  const intl5 = tmp2(tmp3[11]).intl;
  obj8.placeholder = intl5.string(guildId(navigation[11]).t.n1FBXh);
  let firstFieldErrorMessage1;
  if (obj3 != null) {
    firstFieldErrorMessage1 = obj3.getFirstFieldErrorMessage("description");
  }
  obj8.errorMessage = firstFieldErrorMessage1;
  items5[3] = c7(guildId(navigation[21]).TextArea, obj8);
  if (null != guildTemplate) {
    const obj9 = { guildId, guildTemplate, onError: tmp12, onDeleted };
    let tmp29Result = tmp29(memo, obj9);
  } else {
    const obj10 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
    const intl6 = tmp2(tmp3[11]).intl;
    obj10.text = intl6.string(tmp2(tmp3[11]).t.Wxdi8A);
    obj10.loading = tmp16;
    obj10.disabled = !memo;
    obj10.onPress = function handleCreate() {
      const self = this;
      const apply = closure_17.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp29Result = tmp29(tmp2(tmp3[22]).Button, obj10);
  }
  items5[4] = tmp29Result;
  if (tmp29Result2) {
    const obj11 = { variant: "text-sm/normal", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    tmp29Result2 = tmp29(tmp2(tmp3[10]).Text, obj11);
  }
  const obj12 = { children: null };
  items5[5] = tmp29Result2;
  obj5.children = items5;
  obj4.children = first1(guildId(navigation[23]).Stack, obj5);
  const items6 = [c7(guildId(navigation[12]).Form, obj4), c7(guildId(navigation[24]).NavScrim, {})];
  obj12.children = items6;
  return first1(tmp28, obj12);
});
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionBox() {
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "eyebrow", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["f8u+VO"]);
    const tmp6 = React5(Text_Text.Heading, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { copies: true, label: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.K2tn16);
    const tmp10 = React5(closure_15, obj3);
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { copies: true, label: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.om5gNq);
    const tmp14 = React5(closure_15, obj4);
    cResult[2] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { spacing: nativeDefault.space.PX_12, children: null };
    const items = [first, tmp7, tmp11, ];
    const obj6 = { copies: true, label: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["/VNqdD"]);
    items[3] = React5(closure_15, obj6);
    obj5.children = items;
    const tmp20 = closure_1_8(Stack_Stack.Stack, obj5);
    cResult[3] = tmp20;
    let tmp15 = tmp20;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { variant: "eyebrow", children: null };
    const intl5 = util.intl;
    obj7.children = intl5.string(util.t["8zhJEr"]);
    const tmp23 = React5(Text_Text.Heading, obj7);
    cResult[4] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { copies: false, label: null };
    const intl6 = util.intl;
    obj8.label = intl6.string(util.t.WOKI6t);
    const tmp27 = React5(closure_15, obj8);
    cResult[5] = tmp27;
    let tmp24 = tmp27;
  } else {
    tmp24 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { copies: false, label: null };
    const intl7 = util.intl;
    obj9.label = intl7.string(util.t.ddhDJH);
    const tmp31 = React5(closure_15, obj9);
    cResult[6] = tmp31;
    let tmp28 = tmp31;
  } else {
    tmp28 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { children: null };
    const obj11 = { spacing: nativeDefault.space.PX_16, children: null };
    const items1 = [tmp15, ];
    const obj12 = { spacing: nativeDefault.space.PX_12, children: null };
    const items2 = [tmp21, tmp24, tmp28, ];
    const obj13 = { copies: false, label: null };
    const intl8 = util.intl;
    obj13.label = intl8.string(util.t["6Q/DHk"]);
    items2[3] = React5(closure_15, obj13);
    obj12.children = items2;
    items1[1] = closure_1_8(Stack_Stack.Stack, obj12);
    obj11.children = items1;
    obj10.children = closure_1_8(Stack_Stack.Stack, obj11);
    const tmp37 = React5(Card.Card, obj10);
    cResult[7] = tmp37;
    let tmp32 = tmp37;
  } else {
    tmp32 = cResult[7];
  }
  return tmp32;
}) : (function DescriptionBox() {
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_12, children: null };
  const obj4 = { variant: "eyebrow", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["f8u+VO"]);
  const items = [React5(Text_Text.Heading, obj4), , , ];
  const obj5 = { copies: true, label: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.K2tn16);
  items[1] = React5(closure_15, obj5);
  const obj6 = { copies: true, label: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t.om5gNq);
  items[2] = React5(closure_15, obj6);
  const obj7 = { copies: true, label: null };
  const intl4 = util.intl;
  obj7.label = intl4.string(util.t["/VNqdD"]);
  items[3] = React5(closure_15, obj7);
  obj3.children = items;
  const items1 = [closure_1_8(Stack_Stack.Stack, obj3), ];
  const obj8 = { spacing: nativeDefault.space.PX_12, children: null };
  const obj9 = { variant: "eyebrow", children: null };
  const intl5 = util.intl;
  obj9.children = intl5.string(util.t["8zhJEr"]);
  const items2 = [React5(Text_Text.Heading, obj9), , , ];
  const obj10 = { copies: false, label: null };
  const intl6 = util.intl;
  obj10.label = intl6.string(util.t.WOKI6t);
  items2[1] = React5(closure_15, obj10);
  const obj11 = { copies: false, label: null };
  const intl7 = util.intl;
  obj11.label = intl7.string(util.t.ddhDJH);
  items2[2] = React5(closure_15, obj11);
  const obj12 = { copies: false, label: null };
  const intl8 = util.intl;
  obj12.label = intl8.string(util.t["6Q/DHk"]);
  items2[3] = React5(closure_15, obj12);
  obj8.children = items2;
  items1[1] = closure_1_8(Stack_Stack.Stack, obj8);
  obj2.children = items1;
  obj.children = closure_1_8(Stack_Stack.Stack, obj2);
  return React5(Card.Card, obj);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function CopyRow(arg0) {
  const cResult = c.c(9);
  ({ copies, label } = arg0);
  const tmp4 = closure_12();
  if (copies) {
    let CircleXIcon = CircleCheckIcon.CircleCheckIcon;
  } else {
    CircleXIcon = CircleXIcon2.CircleXIcon;
  }
  const colors = nativeDefault.colors;
  if (copies) {
    let ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    let tmp6 = importDefault;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp6 = importDefault;
  }
  if (cResult[0] === CircleXIcon) {
    if (cResult[1] === ICON_FEEDBACK_CRITICAL) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== label) {
      const obj2 = { variant: "text-sm/normal", children: label };
      const tmp11 = React5(Text_Text.Text, obj2);
      cResult[3] = label;
      cResult[4] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.copyRow) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp9) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { style: tmp4.copyRow, children: null };
    const items = [tmp7, tmp9];
    obj3.children = items;
    const tmp15 = closure_1_8(View, obj3);
    cResult[5] = tmp4.copyRow;
    cResult[6] = tmp7;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const tmp8 = React5(CircleXIcon, { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp6(587).colors.WHITE });
  cResult[0] = CircleXIcon;
  cResult[1] = ICON_FEEDBACK_CRITICAL;
  cResult[2] = tmp8;
  tmp7 = tmp8;
  const obj4 = { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp6(587).colors.WHITE };
}) : (function CopyRow(children) {
  const copies = children.copies;
  if (copies) {
    let CircleXIcon = CircleCheckIcon.CircleCheckIcon;
    let tmp4 = require;
  } else {
    CircleXIcon = CircleXIcon2.CircleXIcon;
    tmp4 = require;
  }
  const obj = { style: closure_12().copyRow, children: null };
  const colors = nativeDefault.colors;
  if (copies) {
    let ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    let tmp10 = importDefault;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp10 = importDefault;
  }
  const tmp = closure_12();
  const items = [React5(CircleXIcon, { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp10(587).colors.WHITE }), React5(tmp4(5088).Text, { variant: "text-sm/normal", children: children.label })];
  obj.children = items;
  return closure_1_8(View, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function TemplateControls(guildId) {
  const cResult = require("c").c(39);
  guildId = guildId.guildId;
  _require = guildId;
  const guildTemplate = guildId.guildTemplate;
  onError = guildId.onError;
  const onDeleted = guildId.onDeleted;
  let obj = require("c");
  [tmp5, _slicedToArray] = noop.useState(false);
  if (cResult[0] !== guildTemplate.code) {
    const tmp8 = guildTemplate(tmp2[28])(guildTemplate.code);
    cResult[0] = guildTemplate.code;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  noop = tmp6;
  if (cResult[2] !== tmp6) {
    function handleCopyLink() {
      ClipboardUtils.copy(closure_5);
      ToastUtils.presentLinkCopied();
    }
    cResult[2] = tmp6;
    cResult[3] = handleCopyLink;
    let tmp9 = handleCopyLink;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === guildTemplate.code) {
      if (cResult[6] === onError) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === guildId) {
        if (cResult[9] === guildTemplate.code) {
          if (cResult[10] === onDeleted) {
            if (cResult[11] === onError) {
              let tmp11 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[11]).intl;
              const stringResult = intl.string(tmp(tmp2[11]).t.zGGcLw);
              cResult[13] = stringResult;
              let tmp14 = stringResult;
            } else {
              tmp14 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp18 = closure_7(tmp(tmp2[31]).CopyIcon, {});
              cResult[14] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[14];
            }
            const _Symbol3 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              let intl2 = tmp(tmp2[11]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[11]).t.zGGcLw);
              let intl3 = tmp(tmp2[11]).intl;
              const stringResult2 = intl3.string(tmp(tmp2[11]).t.WqhZss);
              cResult[15] = stringResult1;
              cResult[16] = stringResult2;
              let tmp20 = stringResult2;
              let tmp19 = stringResult1;
            } else {
              tmp19 = cResult[15];
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp9) {
              if (cResult[18] === tmp6) {
                let tmp23 = cResult[19];
              }
              if (cResult[20] === guildTemplate.isDirty) {
                if (cResult[21] === tmp10) {
                  if (cResult[22] === tmp5) {
                    let tmp26 = cResult[23];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(tmp2[11]).intl;
                    const stringResult3 = intl6.string(tmp(tmp2[11]).t["cN/RFD"]);
                    cResult[24] = stringResult3;
                    let tmp30 = stringResult3;
                  } else {
                    tmp30 = cResult[24];
                  }
                  if (cResult[25] !== tmp11) {
                    let obj2 = { variant: "critical-secondary", text: tmp30, onPress: tmp11 };
                    const tmp34 = closure_7(tmp(tmp2[22]).Button, obj2);
                    cResult[25] = tmp11;
                    cResult[26] = tmp34;
                    let tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[26];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl7 = tmp(tmp2[11]).intl;
                    const stringResult4 = intl7.string(tmp(tmp2[11]).t.YI3iV6);
                    cResult[27] = stringResult4;
                    let tmp35 = stringResult4;
                  } else {
                    tmp35 = cResult[27];
                  }
                  if (cResult[28] !== guildTemplate.code) {
                    const obj3 = {
                      variant: "secondary",
                      text: tmp35,
                      onPress() {
                                          return guild_templates_GuildTemplateActionCreatorsDefault.showModal(guildTemplate.code, false);
                                        }
                    };
                    const tmp39 = closure_7(tmp(tmp2[22]).Button, obj3);
                    cResult[28] = guildTemplate.code;
                    cResult[29] = tmp39;
                    let tmp37 = tmp39;
                  } else {
                    tmp37 = cResult[29];
                  }
                  if (cResult[30] === guildTemplate.isDirty) {
                    if (cResult[31] === guildTemplate.updatedAt) {
                      let tmp40 = cResult[32];
                    }
                    if (cResult[33] === tmp26) {
                      if (cResult[34] === tmp32) {
                        if (cResult[35] === tmp37) {
                          if (cResult[36] === tmp40) {
                            if (cResult[37] === tmp23) {
                              let tmp46 = cResult[38];
                            }
                            return tmp46;
                          }
                        }
                      }
                    }
                    const obj4 = { spacing: guildTemplate(tmp2[6]).space.PX_12, children: null };
                    const items = [tmp23, tmp26, tmp32, tmp37, tmp40];
                    obj4.children = items;
                    const tmp49 = closure_8(tmp(tmp2[23]).Stack, obj4);
                    cResult[33] = tmp26;
                    cResult[34] = tmp32;
                    cResult[35] = tmp37;
                    cResult[36] = tmp40;
                    cResult[37] = tmp23;
                    cResult[38] = tmp49;
                    tmp46 = tmp49;
                  }
                  let isDirty2 = guildTemplate.isDirty;
                  if (isDirty2) {
                    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
                    const intl8 = tmp(tmp2[11]).intl;
                    const obj6 = { timestamp: null };
                    const _Date = Date;
                    const date = new Date(guildTemplate.updatedAt);
                    obj6.timestamp = date;
                    obj5.children = intl8.format(tmp(tmp2[11]).t.v0AVum, obj6);
                    isDirty2 = closure_7(tmp(tmp2[10]).Text, obj5);
                  }
                  cResult[30] = guildTemplate.isDirty;
                  cResult[31] = guildTemplate.updatedAt;
                  cResult[32] = isDirty2;
                  tmp40 = isDirty2;
                }
              }
              let isDirty = guildTemplate.isDirty;
              if (isDirty) {
                const obj7 = { children: null };
                const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
                const intl4 = tmp(tmp2[11]).intl;
                obj8.children = intl4.string(tmp(tmp2[11]).t.aWsjtD);
                const items1 = [closure_7(tmp(tmp2[10]).Text, obj8), ];
                const obj9 = { variant: "primary", text: null, loading: null, onPress: null };
                const intl5 = tmp(tmp2[11]).intl;
                obj9.text = intl5.string(tmp(tmp2[11]).t["Nw+0Y/"]);
                obj9.loading = tmp5;
                obj9.onPress = tmp10;
                items1[1] = closure_7(tmp(tmp2[22]).Button, obj9);
                obj7.children = items1;
                isDirty = closure_8(closure_9, obj7);
              }
              cResult[20] = guildTemplate.isDirty;
              cResult[21] = tmp10;
              cResult[22] = tmp5;
              cResult[23] = isDirty;
              tmp26 = isDirty;
            }
            const obj10 = { label: tmp14, children: null };
            const obj11 = { text: tmp6, value: tmp6, icon: tmp16, iconPosition: "end", onPress: tmp9, accessibilityLabel: tmp19, accessibilityHint: tmp20 };
            obj10.children = closure_7(tmp(tmp2[33]).InputButton, obj11);
            const tmp25 = closure_7(tmp(tmp2[32]).Input, obj10);
            cResult[17] = tmp9;
            cResult[18] = tmp6;
            cResult[19] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
      _require = onDeleted(function*() {
        tmp30(null);
        let v0 = 1;
        yield guildTemplate(onError[16]).deleteGuildTemplate(closure_0, tmp3.code);
        if (1 === tmp7) {
          v0 = 0;
          closure_128_0 = tmp30;
          const aPIError = new closure_0(onError[17]).APIError(closure_128_0);
          tmp30(aPIError);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          v0();
          v0 = 0;
        }
        v0 = 0;
        return value;
      });
      function handleDelete() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function confirmDelete() {
        const obj2 = { key, title: null, content: null, confirmText: null, onConfirm: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t["cN/RFD"]);
        const intl2 = util.intl;
        obj2.content = intl2.string(util.t["apCQv/"]);
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t["cN/RFD"]);
        obj2.onConfirm = handleDelete;
        AlertModal.showConfirmModal(obj2);
      }
      cResult[8] = guildId;
      cResult[9] = guildTemplate.code;
      cResult[10] = onDeleted;
      cResult[11] = onError;
      cResult[12] = confirmDelete;
      tmp11 = confirmDelete;
    }
  }
  _require = onDeleted(function*() {
    tmp32(null);
    v2(true);
    yield guildTemplate(onError[16]).syncGuildTemplate(closure_0, tmp3.code);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp32;
      const aPIError = new closure_0(onError[17]).APIError(closure_128_0);
      tmp32(aPIError);
      v2(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  });
  function handleSync() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = guildId;
  cResult[5] = guildTemplate.code;
  cResult[6] = onError;
  cResult[7] = handleSync;
  tmp10 = handleSync;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function TemplateControls(arg0) {
  ({ guildId: require, guildTemplate } = arg0);
  ({ onError: dependencyMap, onDeleted: asyncGeneratorStep } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _handleSync2() {
    dependencyMap(null);
    _slicedToArray(true);
    await tmp3(tmp32[16]).syncGuildTemplate(closure_2_0, code.code);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp32;
      const aPIError = new closure_0(tmp32[17]).APIError(closure_128_0);
      closure_129_2(aPIError);
      closure_129_4(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  };
  function handleDelete() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_8 = async function _handleDelete2() {
    dependencyMap(null);
    await tmp3(tmp30[16]).deleteGuildTemplate(closure_2_0, code.code);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp30;
      const aPIError = new closure_0(tmp30[17]).APIError(closure_128_0);
      closure_129_2(aPIError);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_3();
      c3 = 0;
    }
    return value;
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp[1];
  const tmp3 = guildTemplate(18391)(guildTemplate.code);
  noop = tmp3;
  let obj = { spacing: guildTemplate(587).space.PX_12, children: null };
  let obj2 = { label: null, children: null };
  let intl = util.intl;
  obj2.label = intl.string(util.t.zGGcLw);
  const obj3 = {
    text: tmp3,
    value: tmp3,
    icon: handleDelete(CopyIcon2.CopyIcon, {}),
    iconPosition: "end",
    onPress: function handleCopyLink() {
      ClipboardUtils.copy(closure_5);
      ToastUtils.presentLinkCopied();
    },
    accessibilityLabel: null,
    accessibilityHint: null
  };
  let intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.zGGcLw);
  let intl3 = util.intl;
  obj3.accessibilityHint = intl3.string(util.t.WqhZss);
  obj2.children = handleDelete(native.InputButton, obj3);
  const items = [handleDelete(Input.Input, obj2), , , , ];
  let isDirty = guildTemplate.isDirty;
  if (isDirty) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    const intl4 = util.intl;
    obj5.children = intl4.string(util.t.aWsjtD);
    const items1 = [tmp6(Text_Text.Text, obj5), ];
    const obj6 = { variant: "primary", text: null, loading: null, onPress: null };
    const intl5 = util.intl;
    obj6.text = intl5.string(util.t["Nw+0Y/"]);
    obj6.loading = tmp[0];
    obj6.onPress = function handleSync() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items1[1] = tmp6(components_Button_Button.Button, obj6);
    obj4.children = items1;
    isDirty = tmp4(closure_9, obj4);
  }
  items[1] = isDirty;
  const obj7 = { variant: "critical-secondary", text: null, onPress: null };
  const intl6 = util.intl;
  obj7.text = intl6.string(util.t["cN/RFD"]);
  obj7.onPress = function confirmDelete() {
    const obj2 = { key, title: null, content: null, confirmText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["cN/RFD"]);
    const intl2 = util.intl;
    obj2.content = intl2.string(util.t["apCQv/"]);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(util.t["cN/RFD"]);
    obj2.onConfirm = handleDelete;
    AlertModal.showConfirmModal(obj2);
  };
  items[2] = handleDelete(components_Button_Button.Button, obj7);
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl7 = util.intl;
  obj8.text = intl7.string(util.t.YI3iV6);
  obj8.onPress = function onPress() {
    return guild_templates_GuildTemplateActionCreatorsDefault.showModal(guildTemplate.code, false);
  };
  items[3] = handleDelete(components_Button_Button.Button, obj8);
  let isDirty2 = guildTemplate.isDirty;
  if (isDirty2) {
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = util.intl;
    const obj10 = { timestamp: null };
    const _Date = Date;
    const date = new Date(guildTemplate.updatedAt);
    obj10.timestamp = date;
    obj9.children = intl8.format(util.t.v0AVum, obj10);
    isDirty2 = tmp6(Text_Text.Text, obj9);
  }
  items[4] = isDirty2;
  obj.children = items;
  return closure_8(Stack_Stack.Stack, obj);
}));
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalTemplate(arg0) {
  let Form = require;
  let tmp = dependencyMap;
  const cResult = c.c(21);
  ({ guildId, contentContainerStyle } = arg0);
  let container = closure_12();
  const canViewAllChannels = GuildTemplateSettingsUtils.useCanViewAllChannels(guildId);
  let tmp4 = null;
  if (canViewAllChannels) {
    tmp4 = guildId;
  }
  const guildTemplate1 = GuildTemplateSettingsUtils.useGuildTemplate(tmp4);
  ({ guildTemplate, loadError } = guildTemplate1);
  if (canViewAllChannels) {
    if (null == loadError) {
      if (guildTemplate1.loading) {
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = React5(SceneLoadingIndicator.SceneLoadingIndicator, {});
          cResult[16] = tmp21;
        }
      } else {
        if (cResult[17] === contentContainerStyle) {
          if (cResult[18] === guildId) {
          }
        }
        const obj4 = { guildId, guildTemplate, contentContainerStyle };
        const tmp17 = React5(closure_13, obj4);
        cResult[17] = contentContainerStyle;
        cResult[18] = guildId;
        cResult[19] = guildTemplate;
        cResult[20] = tmp17;
      }
    }
    if (cResult[7] === contentContainerStyle) {
      if (cResult[8] === container.containerContent) {
        let tmp23 = cResult[9];
      }
      if (cResult[10] !== loadError.message) {
        const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: loadError.message };
        const tmp26 = React5(Text_Text.Text, obj5);
        cResult[10] = loadError.message;
        cResult[11] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] === container.container) {
        if (cResult[13] === tmp23) {
        }
      }
      Form = Form2.Form;
      const obj6 = { style: container.container, contentContainerStyle: tmp23, children: tmp24 };
      tmp = React5(Form, obj6);
      container = container.container;
      cResult[12] = container;
      cResult[13] = tmp23;
      cResult[14] = tmp24;
      cResult[15] = tmp;
    }
    const items = [container.containerContent, contentContainerStyle];
    cResult[7] = contentContainerStyle;
    cResult[8] = container.containerContent;
    cResult[9] = items;
    tmp23 = items;
  } else {
    if (cResult[0] === contentContainerStyle) {
      if (cResult[1] === container.containerContent) {
        let tmp6 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj7.children = intl.string(util.t.f0IPAG);
        const tmp10 = React5(Text_Text.Text, obj7);
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === container.container) {
        if (cResult[5] === tmp6) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
      const obj8 = { style: container.container, contentContainerStyle: tmp6, children: tmp8 };
      const tmp13 = React5(Form2.Form, obj8);
      cResult[4] = container.container;
      cResult[5] = tmp6;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    }
    const items1 = [container.containerContent, contentContainerStyle];
    cResult[0] = contentContainerStyle;
    cResult[1] = container.containerContent;
    cResult[2] = items1;
    tmp6 = items1;
  }
}) : (function GuildSettingsModalTemplate(arg0) {
  ({ guildId, contentContainerStyle } = arg0);
  let items = closure_12();
  let Text = require;
  let tmp = dependencyMap;
  const canViewAllChannels = GuildTemplateSettingsUtils.useCanViewAllChannels(guildId);
  let tmp3 = null;
  if (canViewAllChannels) {
    tmp3 = guildId;
  }
  const guildTemplate = GuildTemplateSettingsUtils.useGuildTemplate(tmp3);
  let message = guildTemplate.loadError;
  if (canViewAllChannels) {
    if (null != message) {
      const obj3 = { style: null, contentContainerStyle: null, children: null };
      ({ container: obj6.style, containerContent } = items);
      items = [containerContent, contentContainerStyle];
      obj3.contentContainerStyle = items;
      Text = Text_Text.Text;
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
      message = message.message;
      obj4.children = message;
      tmp = React5(Text, obj4);
      obj3.children = tmp;
      let tmp8Result = React5(Form2.Form, obj3);
    } else if (tmp5) {
      tmp8Result = React5(SceneLoadingIndicator.SceneLoadingIndicator, {});
    } else {
      const obj5 = { guildId, guildTemplate: tmp6, contentContainerStyle };
      tmp8Result = React5(closure_13, obj5);
    }
  } else {
    const obj7 = { style: items.container, contentContainerStyle: null, children: null };
    const items1 = [items.containerContent, contentContainerStyle];
    obj7.contentContainerStyle = items1;
    const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj12.children = intl.string(util.t.f0IPAG);
    obj7.children = React5(Text_Text.Text, obj12);
    return React5(Form2.Form, obj7);
  }
});