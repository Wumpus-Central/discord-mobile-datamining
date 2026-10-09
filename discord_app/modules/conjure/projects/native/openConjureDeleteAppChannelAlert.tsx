// === Module 17442: openConjureDeleteAppChannelAlert ===

// Module 17442 (openConjureDeleteAppChannelAlert)
import useAlertStore from "useAlertStore" /* 5300 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDeleteAppChannelAlert(onAppRemoved) {
  const cResult = require("c").c(26);
  ({ app, channelId, onDeleteChannel } = onAppRemoved);
  _require = onDeleteChannel;
  onAppRemoved = onAppRemoved.onAppRemoved;
  let obj = require("c");
  conjureServerApp = require("conjureServerAppRemoval").useConjureServerApp(app.guildId, onAppRemoved.applicationId);
  if (conjureServerApp == null) {
    conjureServerApp = app;
  }
  if (cResult[0] === conjureServerApp.rest) {
    if (cResult[1] === channelId) {
      let items = cResult[2];
      const tmp7 = checked(noop.useState(true), 2);
      checked = tmp7[0];
      [tmp10, noop] = checked(noop.useState(null), 2);
      if (cResult[3] === conjureServerApp) {
        if (cResult[4] === items.length) {
          if (cResult[5] === onAppRemoved) {
            if (cResult[6] === onDeleteChannel) {
              if (cResult[7] === checked) {
                let tmp11 = cResult[8];
              }
              const _Symbol = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                let intl = tmp(tmp2[8]).intl;
                const stringResult = intl.string(tmp(tmp2[8]).t["8D8Rsb"]);
                cResult[9] = stringResult;
                let tmp14 = stringResult;
              } else {
                tmp14 = cResult[9];
              }
              if (cResult[10] !== conjureServerApp.targetAppName) {
                const formatWithAppTagResult = tmp(tmp2[10]).formatWithAppTag(onAppRemoved(tmp2[9])["HmNT/r"], conjureServerApp.targetAppName);
                cResult[10] = conjureServerApp.targetAppName;
                cResult[11] = formatWithAppTagResult;
                let tmp16 = formatWithAppTagResult;
                const tmpResult = tmp(tmp2[10]);
              } else {
                tmp16 = cResult[11];
              }
              if (cResult[12] === tmp10) {
                if (cResult[13] === items) {
                  if (cResult[14] === checked) {
                    let tmp19 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[8]).intl;
                    const stringResult1 = intl2.string(tmp(tmp2[8]).t["8D8Rsb"]);
                    cResult[16] = stringResult1;
                    let tmp26 = stringResult1;
                  } else {
                    tmp26 = cResult[16];
                  }
                  if (cResult[17] !== tmp11) {
                    let obj3 = { variant: "destructive", text: tmp26, onPress: tmp11 };
                    const tmp30 = closure_6(tmp(tmp2[13]).AlertActionButton, obj3);
                    cResult[17] = tmp11;
                    cResult[18] = tmp30;
                    let tmp28 = tmp30;
                  } else {
                    tmp28 = cResult[18];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj4 = { variant: "secondary", text: null };
                    const intl3 = tmp(tmp2[8]).intl;
                    obj4.text = intl3.string(tmp(tmp2[8]).t["ETE/oC"]);
                    const tmp33 = closure_6(tmp(tmp2[13]).AlertActionButton, obj4);
                    cResult[19] = tmp33;
                    let tmp31 = tmp33;
                  } else {
                    tmp31 = cResult[19];
                  }
                  if (cResult[20] !== tmp28) {
                    const obj5 = { children: null };
                    items = [tmp28, tmp31];
                    obj5.children = items;
                    const tmp37 = closure_7(closure_8, obj5);
                    cResult[20] = tmp28;
                    cResult[21] = tmp37;
                    let tmp34 = tmp37;
                  } else {
                    tmp34 = cResult[21];
                  }
                  if (cResult[22] === tmp16) {
                    if (cResult[23] === tmp19) {
                      if (cResult[24] === tmp34) {
                        let tmp38 = cResult[25];
                      }
                      return tmp38;
                    }
                  }
                  const obj6 = { title: tmp14, content: tmp16, extraContent: tmp19, actions: tmp34 };
                  const tmp40 = closure_6(tmp(tmp2[13]).AlertModal, obj6);
                  cResult[22] = tmp16;
                  cResult[23] = tmp19;
                  cResult[24] = tmp34;
                  cResult[25] = tmp40;
                  tmp38 = tmp40;
                }
              }
              if (items.length > 0) {
                let tmp22 = null;
                if (items.length > 0) {
                  const obj7 = { checked, onChange: tmp7[1], items };
                  tmp22 = closure_6(tmp(tmp2[10]).ConjureRemoveEverythingField, obj7);
                }
                const items1 = [tmp22, ];
                let tmp24 = null;
                if (null != tmp10) {
                  const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp10 };
                  tmp24 = closure_6(tmp(tmp2[12]).Text, obj8);
                }
                const obj9 = { spacing: 12, children: null };
                items1[1] = tmp24;
                obj9.children = items1;
                const tmp21Result = closure_7(tmp(tmp2[11]).Stack, obj9);
              }
              cResult[12] = tmp10;
              cResult[13] = items;
              cResult[14] = checked;
              cResult[15] = tmp21Result;
              tmp19 = tmp21Result;
            }
          }
        }
      }
      _require = items(function*() {
        if (length === 2) {
          length = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp5 === 3) {
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
            length = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                length = 3;
                throw value;
              } else if (arg0 === 2) {
                length = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                if (0 !== length.length) {
                  if (checked) {
                    noop(null);
                    c2 = 1;
                    length = 1;
                    const obj4 = { value: onAppRemoved(conjureServerApp[7])(c2), done: false };
                    return obj4;
                  }
                }
                tmp2();
                length = 3;
              }
            } else if (arg0 === 1) {
              length = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (value) {
                tmp3();
              } else {
                const intl = tmp2(conjureServerApp[8]).intl;
                closure_128_0 = intl.string(onAppRemoved(conjureServerApp[9]).PJ2Fkn);
                noop(closure_128_0);
                const _Error = Error;
                const error = new Error(closure_128_0);
                throw error;
              }
            }
            length = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp34) {
            length = tmp;
            throw tmp34;
          }
        }
      });
      function submit() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[3] = conjureServerApp;
      cResult[4] = items.length;
      cResult[5] = onAppRemoved;
      cResult[6] = onDeleteChannel;
      cResult[7] = checked;
      cResult[8] = submit;
      tmp11 = submit;
      const tmp9 = checked(noop.useState(null), 2);
    }
  }
  if (null == conjureServerApp.rest) {
    let items2 = [];
  } else {
    items2 = tmp(tmp2[6]).conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
    const tmpResult2 = tmp(tmp2[6]);
  }
  cResult[0] = conjureServerApp.rest;
  cResult[1] = channelId;
  cResult[2] = items2;
  let obj2 = require("conjureServerAppRemoval");
}) : (function ConjureDeleteAppChannelAlert(arg0) {
  ({ app, onDeleteChannel: require, onAppRemoved: importDefault } = arg0);
  let conjureServerApp;
  let items;
  let checked;
  noop = undefined;
  closure_6 = async function _submit2() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            if (0 !== length.length) {
              if (checked) {
                noop(null);
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: tmp2(11368)(conjureServerApp), done: false };
                return obj4;
              }
            }
            _require();
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_129_1();
          } else {
            const intl = tmp3(1126).intl;
            closure_128_0 = intl.string(tmp2(3827).PJ2Fkn);
            closure_129_5(closure_128_0);
            const _Error = Error;
            const error = new Error(closure_128_0);
            throw error;
          }
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp34) {
        c3 = tmp;
        throw tmp34;
      }
    }
  };
  ({ applicationId, channelId } = arg0);
  conjureServerApp = require("conjureServerAppRemoval").useConjureServerApp(app.guildId, applicationId);
  if (conjureServerApp == null) {
    conjureServerApp = app;
  }
  if (null == conjureServerApp.rest) {
    items = [];
  } else {
    items = require("conjureServerAppRemoval").conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
    const tmpResult = require("conjureServerAppRemoval");
  }
  const tmp4 = checked(noop.useState(true), 2);
  checked = tmp4[0];
  let obj = require("conjureServerAppRemoval");
  [tmp7, c5] = checked(noop.useState(null), 2);
  let obj2 = { title: null, content: null, extraContent: null, actions: null };
  let intl = require("util").intl;
  obj2.title = intl.string(require("util").t["8D8Rsb"]);
  const tmp6 = checked(noop.useState(null), 2);
  obj2.content = require("ConjureRemovedItems").formatWithAppTag(require("module_3827")["HmNT/r"], conjureServerApp.targetAppName);
  if (items.length > 0) {
    let tmp8Result = null;
    if (items.length > 0) {
      let obj3 = { checked, onChange: tmp4[1], items };
      tmp8Result = tmp8(require("ConjureRemovedItems").ConjureRemoveEverythingField, obj3);
    }
    const items1 = [tmp8Result, ];
    let tmp8Result2 = null;
    if (null != tmp7) {
      let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp7 };
      tmp8Result2 = tmp8(require("Text/Text").Text, obj4);
    }
    const obj5 = { spacing: 12, children: null };
    items1[1] = tmp8Result2;
    obj5.children = items1;
    const tmp10Result = closure_7(require("Stack/Stack").Stack, obj5);
  }
  obj2.extraContent = tmp10Result;
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl2 = require("util").intl;
  obj7.text = intl2.string(require("util").t["8D8Rsb"]);
  obj7.onPress = function submit() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items2 = [closure_6(require("AlertModal").AlertActionButton, obj7), ];
  const obj8 = { variant: "secondary", text: null };
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t["ETE/oC"]);
  items2[1] = closure_6(require("AlertModal").AlertActionButton, obj8);
  obj6.children = items2;
  obj2.actions = closure_7(closure_8, obj6);
  return closure_6(require("AlertModal").AlertModal, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureDeleteAppChannelAlert.tsx");

export default function openConjureDeleteAppChannelAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureDeleteAppChannel", timestampProducer(closure_9, {}));
};