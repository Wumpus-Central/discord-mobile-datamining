// discord_app/modules/conjure/projects/native/openConjureRemoveAppAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRemoveAppAlert(project) {
      const cResult = require("c").c(49);
      project = project.project;
      _require = project;
      const target = project.target;
      const tmp4 = _slicedToArray(noop.useState(target.canRemovePreviewBot), 2);
      checked = tmp4[0];
      let obj = require("c");
      [tmp7, asyncGeneratorStep] = noop.useState(null);
      _slicedToArray = tmp8;
      if ((cResult[0] === "delete") === project.action) {
        if (cResult[1] === target) {
          if (cResult[3] === tmp8) {
            if (cResult[4] === target) {
              let tmp10 = cResult[5];
            }
            if (cResult[6] !== target) {
              const result = tmp(tmp2[7]).conjureRemoveAppKeptChannels(target);
              cResult[6] = target;
              cResult[7] = result;
              let tmp12 = result;
              const tmpResult = tmp(tmp2[7]);
            } else {
              tmp12 = cResult[7];
            }
            const tmp15 = closure_9();
            if (cResult[8] === tmp8) {
              if (cResult[9] === target.appName) {
                if (cResult[10] === target.projectName) {
                  if (cResult[12] === checked) {
                    if (cResult[13] === tmp8) {
                      if (cResult[14] === project.id) {
                        if (cResult[15] === target) {
                          let tmp21 = cResult[16];
                        }
                        if (cResult[17] === tmp15.title) {
                          if (cResult[18] === tmp16) {
                            let tmp23 = cResult[19];
                          }
                          if (cResult[20] === tmp8) {
                            if (cResult[21] === target) {
                              if (cResult[23] === checked) {
                                if (cResult[24] === arr) {
                                  if (cResult[25] === tmp10) {
                                    if (cResult[26] === target.canRemovePreviewBot) {
                                      let tmp30 = cResult[27];
                                    }
                                    if (cResult[28] !== tmp12) {
                                      let tmp37 = null;
                                      if (null != tmp12) {
                                        let obj2 = { variant: "text-sm/normal", color: "text-muted", children: tmp12 };
                                        tmp37 = closure_6(tmp(tmp2[13]).Text, obj2);
                                      }
                                      cResult[28] = tmp12;
                                      cResult[29] = tmp37;
                                      let tmp36 = tmp37;
                                    } else {
                                      tmp36 = cResult[29];
                                    }
                                    if (cResult[30] !== tmp7) {
                                      let tmp40 = null;
                                      if (null != tmp7) {
                                        let obj3 = {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          children: tmp7,
                                        };
                                        tmp40 = closure_6(tmp(tmp2[13]).Text, obj3);
                                      }
                                      cResult[30] = tmp7;
                                      cResult[31] = tmp40;
                                      let tmp39 = tmp40;
                                    } else {
                                      tmp39 = cResult[31];
                                    }
                                    if (cResult[32] === tmp39) {
                                      if (cResult[33] === tmp30) {
                                        if (cResult[34] === tmp36) {
                                          let tmp42 = cResult[35];
                                        }
                                        if (cResult[36] !== tmp8) {
                                          const intl3 = tmp(tmp2[8]).intl;
                                          const tmp47 = target(tmp2[9]);
                                          const stringResult = intl3.string(tmp8 ? tmp47.aC42bN : tmp47.BGF8VT);
                                          cResult[36] = tmp8;
                                          cResult[37] = stringResult;
                                        } else {
                                          if (cResult[38] === tmp21) {
                                            if (cResult[39] === tmp45) {
                                              let tmp50 = cResult[40];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                              let obj4 = { variant: "secondary", text: null };
                                              const intl4 = tmp(tmp2[8]).intl;
                                              obj4.text = intl4.string(tmp(tmp2[8]).t["ETE/oC"]);
                                              const tmp56 = closure_6(tmp(tmp2[15]).AlertActionButton, obj4);
                                              cResult[41] = tmp56;
                                              let tmp54 = tmp56;
                                            } else {
                                              tmp54 = cResult[41];
                                            }
                                            if (cResult[42] !== tmp50) {
                                              let obj5 = { children: null };
                                              const items = [tmp50, tmp54];
                                              obj5.children = items;
                                              const tmp60 = closure_7(closure_8, obj5);
                                              cResult[42] = tmp50;
                                              cResult[43] = tmp60;
                                              let tmp57 = tmp60;
                                            } else {
                                              tmp57 = cResult[43];
                                            }
                                            if (cResult[44] === tmp42) {
                                              if (cResult[45] === tmp57) {
                                                if (cResult[46] === tmp23) {
                                                  if (cResult[47] === tmp26) {
                                                    let tmp61 = cResult[48];
                                                  }
                                                  return tmp61;
                                                }
                                              }
                                            }
                                            let obj6 = {
                                              title: tmp23,
                                              content: tmp26,
                                              extraContent: tmp42,
                                              actions: tmp57,
                                            };
                                            const tmp63 = closure_6(tmp(tmp2[15]).AlertModal, obj6);
                                            cResult[44] = tmp42;
                                            cResult[45] = tmp57;
                                            cResult[46] = tmp23;
                                            cResult[47] = tmp26;
                                            cResult[48] = tmp63;
                                            tmp61 = tmp63;
                                          }
                                          let obj7 = { variant: "destructive", text: cResult[37], onPress: tmp21 };
                                          const tmp52 = closure_6(tmp(tmp2[15]).AlertActionButton, obj7);
                                          cResult[38] = tmp21;
                                          cResult[39] = cResult[37];
                                          cResult[40] = tmp52;
                                          tmp50 = tmp52;
                                        }
                                      }
                                    }
                                    let obj8 = { spacing: 12, children: null };
                                    const items1 = [tmp30, tmp36, tmp39];
                                    obj8.children = items1;
                                    const tmp44 = closure_7(tmp(tmp2[14]).Stack, obj8);
                                    cResult[32] = tmp39;
                                    cResult[33] = tmp30;
                                    cResult[34] = tmp36;
                                    cResult[35] = tmp44;
                                    tmp42 = tmp44;
                                  }
                                }
                              }
                              if (arr.length > 0) {
                                const obj9 = { items: arr, optionalItem: null };
                                let tmp35;
                                if (null != tmp10) {
                                  const obj10 = {
                                    item: tmp10,
                                    checked,
                                    onChange: tmp4[1],
                                    disabled: !target.canRemovePreviewBot,
                                  };
                                  tmp35 = obj10;
                                }
                                obj9.optionalItem = tmp35;
                                let tmp32Result = closure_6(target(tmp2[10]), obj9);
                                const tmp34 = target(tmp2[10]);
                              } else {
                                tmp32Result = null;
                              }
                              cResult[23] = checked;
                              cResult[24] = arr;
                              cResult[25] = tmp10;
                              cResult[26] = target.canRemovePreviewBot;
                              cResult[27] = tmp32Result;
                              tmp30 = tmp32Result;
                            }
                          }
                          if (tmp8) {
                            let result1 = tmp(tmp2[7]).conjureDeleteProjectBody(target);
                            const tmpResult6 = tmp(tmp2[7]);
                          } else {
                            const intl2 = tmp(tmp2[8]).intl;
                            result1 = intl2.string(target(tmp2[9])["8OKM1N"]);
                          }
                          cResult[20] = tmp8;
                          cResult[21] = target;
                          cResult[22] = result1;
                        }
                        const obj11 = {
                          variant: "heading-lg/bold",
                          color: "none",
                          style: tmp15.title,
                          children: tmp16,
                        };
                        const result2 = tmp(tmp2[7]).conjureTitleWithAppTag(closure_6(tmp(tmp2[13]).Text, obj11));
                        cResult[17] = tmp15.title;
                        cResult[18] = tmp16;
                        cResult[19] = result2;
                        tmp23 = result2;
                        const tmpResult7 = tmp(tmp2[7]);
                      }
                    }
                  }
                  _require = asyncGeneratorStep(async () => {
                    if (v3 === 2) {
                      v3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp5 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: "+51" };
                      }
                    } else {
                      try {
                        v3 = 2;
                        if (0 === alsoRemovePreviewBot) {
                          if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v3 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            closure_1 = tmp3;
                            closure_128_0 = undefined;
                            closure_128_1 = undefined;
                            v3(null);
                            const obj8 = tmp2(first[11]);
                            if (closure_1_4) {
                              let deleteProjectResult = obj8.deleteProject(tmp2.id);
                            } else {
                              const obj5 = { alsoRemovePreviewBot };
                              deleteProjectResult = obj8.unpublishProject(tmp2.id, obj5);
                            }
                            deleteProjectResult.catch(() => null);
                            alsoRemovePreviewBot = 1;
                            v3 = 1;
                          }
                        } else if (arg0 === 1) {
                          v3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          v3 = 3;
                          const obj6 = { value, done: true };
                          return obj6;
                        } else {
                          closure_128_0 = value;
                          let ok;
                          if (closure_128_0 != null) {
                            ok = closure_128_0.ok;
                          }
                          if (true !== ok) {
                            const intl = tmp2(first[8]).intl;
                            const tmp23 = target(first[9]);
                            if (closure_1_4) {
                              let PJ2Fkn = tmp23["0XDHob"];
                            } else {
                              PJ2Fkn = tmp23.PJ2Fkn;
                            }
                            closure_128_1 = intl.string(PJ2Fkn);
                            v3(closure_128_1);
                            const _Error = Error;
                            const error = new Error(closure_128_1);
                            throw error;
                          } else {
                            if (!closure_1_4) {
                              const obj7 = { text: null, variant: "success" };
                              const obj = target(first[12]);
                              obj7.text = tmp2(first[7]).conjureRemoveAppSuccess(closure_1);
                              obj.open("CONJURE_APP_REMOVED", obj7);
                              const obj3 = tmp2(first[7]);
                            }
                            v3 = 3;
                            return { value: "IconComponent", done: "+51" };
                          }
                        }
                      } catch (tmp39) {
                        v3 = tmp;
                        throw tmp39;
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
                  cResult[12] = checked;
                  cResult[13] = tmp8;
                  cResult[14] = project.id;
                  cResult[15] = target;
                  cResult[16] = submit;
                  tmp21 = submit;
                }
              }
            }
            if (tmp8) {
              let intl = tmp(tmp2[8]).intl;
              const obj12 = { name: target.projectName };
              let formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj12);
            } else {
              formatToPlainStringResult = tmp(tmp2[10]).formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName);
              const tmpResult8 = tmp(tmp2[10]);
            }
            cResult[8] = tmp8;
            cResult[9] = target.appName;
            cResult[10] = target.projectName;
            cResult[11] = formatToPlainStringResult;
          }
          let result3 = null;
          if (!tmp8) {
            result3 = tmp(tmp2[7]).conjurePreviewAppItem(target);
            const tmpResult9 = tmp(tmp2[7]);
          }
          cResult[3] = tmp8;
          cResult[4] = target;
          cResult[5] = result3;
          tmp10 = result3;
        }
      }
      const tmpResult10 = require("conjureRemoveApp");
      if ("delete" === project.action) {
        let result4 = tmpResult10.conjureDeleteProjectItems(target);
      } else {
        result4 = tmpResult10.conjureRemoveAppItems(target);
      }
      cResult[0] = "delete" === project.action;
      cResult[1] = target;
      cResult[2] = result4;
      const tmp6 = _slicedToArray(noop.useState(null), 2);
    }
  : function ConjureRemoveAppAlert(action) {
      ({ project: require, target } = action);
      c3 = undefined;
      _slicedToArray = undefined;
      noop = async function _submit2() {
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
            return { value: "IconComponent", done: "+51" };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                asyncGeneratorStep(null);
                const obj8 = tmp3(11411);
                if (_slicedToArray) {
                  let deleteProjectResult = obj8.deleteProject(user.id);
                } else {
                  const obj5 = { alsoRemovePreviewBot };
                  deleteProjectResult = obj8.unpublishProject(user.id, obj5);
                }
                deleteProjectResult.catch(() => null);
                dependencyMap = 1;
                c3 = 1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              let ok;
              if (closure_128_0 != null) {
                ok = closure_128_0.ok;
              }
              if (true !== ok) {
                const intl = tmp3(1126).intl;
                const tmp23 = tmp2(3849);
                if (closure_129_4) {
                  let PJ2Fkn = tmp23["0XDHob"];
                } else {
                  PJ2Fkn = tmp23.PJ2Fkn;
                }
                closure_128_1 = intl.string(PJ2Fkn);
                closure_129_3(closure_128_1);
                const _Error = Error;
                const error = new Error(closure_128_1);
                throw error;
              } else {
                if (!closure_129_4) {
                  const obj7 = { text: null, variant: "success" };
                  const obj = tmp2(4809);
                  obj7.text = tmp3(17060).conjureRemoveAppSuccess(closure_129_1);
                  obj.open("CONJURE_APP_REMOVED", obj7);
                  const obj3 = tmp3(17060);
                }
                c3 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            }
          } catch (tmp39) {
            c3 = tmp;
            throw tmp39;
          }
        }
      };
      const tmp = _slicedToArray(noop.useState(target.canRemovePreviewBot), 2);
      const checked = tmp[0];
      [tmp4, c3] = noop.useState(null);
      _slicedToArray = tmp5;
      let obj = require("conjureRemoveApp");
      if ("delete" === action.action) {
        let result = obj.conjureDeleteProjectItems(target);
        let tmp8 = tmp7;
        let tmp9 = require;
      } else {
        result = obj.conjureRemoveAppItems(target);
        tmp8 = tmp7;
        tmp9 = require;
      }
      let result1 = null;
      if ("delete" !== action.action) {
        result1 = tmp9(tmp8[7]).conjurePreviewAppItem(target);
        const tmp9Result = tmp9(tmp8[7]);
      }
      const tmp3 = _slicedToArray(noop.useState(null), 2);
      const result2 = tmp9(tmp8[7]).conjureRemoveAppKeptChannels(target);
      const tmp9Result5 = tmp9(tmp8[7]);
      if ("delete" === action.action) {
        let intl = tmp9(tmp8[8]).intl;
        let obj2 = { name: target.projectName };
        let formatToPlainStringResult = intl.formatToPlainString(target(tmp8[9]).CJBhb2, obj2);
        let tmp15 = target;
      } else {
        formatToPlainStringResult = tmp9(tmp8[10]).formatWithAppTag(target(tmp8[9]).x6FvsZ, target.appName);
        tmp15 = target;
        const tmp9Result6 = tmp9(tmp8[10]);
      }
      let obj3 = { title: null, content: null, extraContent: null, actions: null };
      const tmp12 = closure_9();
      obj3.title = tmp9(tmp8[7]).conjureTitleWithAppTag(
        closure_6(tmp9(tmp8[13]).Text, {
          variant: "heading-lg/bold",
          color: "none",
          style: tmp12.title,
          children: formatToPlainStringResult,
        }),
      );
      if ("delete" === action.action) {
        let result3 = tmp9(tmp8[7]).conjureDeleteProjectBody(target);
        const tmp9Result8 = tmp9(tmp8[7]);
      } else {
        const intl2 = tmp9(tmp8[8]).intl;
        result3 = intl2.string(tmp15(tmp8[9])["8OKM1N"]);
      }
      obj3.content = result3;
      if (result.length > 0) {
        let obj5 = { items: result, optionalItem: null };
        let tmp22;
        if (null != result1) {
          let obj6 = { item: result1, checked, onChange: tmp[1], disabled: !target.canRemovePreviewBot };
          tmp22 = obj6;
        }
        obj5.optionalItem = tmp22;
        let tmp17Result = closure_6(tmp15(tmp8[10]), obj5);
        const tmp15Result = tmp15(tmp8[10]);
      } else {
        tmp17Result = null;
      }
      const items = [tmp17Result, ,];
      let tmp17Result3 = null;
      if (null != result2) {
        let obj7 = { variant: "text-sm/normal", color: "text-muted", children: result2 };
        tmp17Result3 = closure_6(tmp9(tmp8[13]).Text, obj7);
      }
      items[1] = tmp17Result3;
      let tmp17Result4 = null;
      if (null != tmp4) {
        let obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp4 };
        tmp17Result4 = closure_6(tmp9(tmp8[13]).Text, obj8);
      }
      items[2] = tmp17Result4;
      obj3.extraContent = closure_7(tmp9(tmp8[14]).Stack, { spacing: 12, children: items });
      const intl3 = tmp9(tmp8[8]).intl;
      const tmp15Result2 = tmp15(tmp8[9]);
      const obj9 = { children: null };
      let obj4 = { variant: "heading-lg/bold", color: "none", style: tmp12.title, children: formatToPlainStringResult };
      const tmp9Result7 = tmp9(tmp8[7]);
      const items1 = [
        closure_6(tmp9(tmp8[15]).AlertActionButton, {
          variant: "destructive",
          text: intl3.string("delete" === action.action ? tmp15Result2.aC42bN : tmp15Result2.BGF8VT),
          onPress: function submit() {
            const self = this;
            const apply = closure_5.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          },
        }),
      ];
      const obj11 = { variant: "secondary", text: null };
      const intl4 = tmp9(tmp8[8]).intl;
      obj11.text = intl4.string(tmp9(tmp8[8]).t["ETE/oC"]);
      items1[1] = closure_6(tmp9(tmp8[15]).AlertActionButton, obj11);
      obj9.children = items1;
      obj3.actions = closure_7(closure_8, obj9);
      return closure_6(tmp9(tmp8[15]).AlertModal, obj3);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(closure_10, {}));
}
