// discord_app/modules/conjure/projects/native/openConjureRemoveAppAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRemoveAppAlert(project) {
      const cResult = require("c").c(40);
      project = project.project;
      _require = project;
      const target = project.target;
      const tmp4 = _slicedToArray(noop.useState(true), 2);
      checked = tmp4[0];
      let obj = require("c");
      [tmp7, asyncGeneratorStep] = noop.useState(null);
      _slicedToArray = tmp8;
      if ((cResult[0] === "delete") === project.action) {
        if (cResult[1] === target) {
          if (cResult[3] === checked) {
            if (cResult[4] === tmp8) {
              if (cResult[5] === project.id) {
                if (cResult[6] === target) {
                  let tmp10 = cResult[7];
                }
                if (cResult[8] === tmp8) {
                  if (cResult[9] === target.appName) {
                    if (cResult[10] === target.projectName) {
                      if (cResult[12] === tmp8) {
                        if (cResult[13] === target) {
                          if (cResult[15] !== arr) {
                            let tmp22 = null;
                            if (arr.length > 0) {
                              let obj2 = { items: arr };
                              tmp22 = closure_6(target(tmp2[12]), obj2);
                            }
                            cResult[15] = arr;
                            cResult[16] = tmp22;
                            let tmp21 = tmp22;
                          } else {
                            tmp21 = cResult[16];
                          }
                          if (cResult[17] === checked) {
                            if (cResult[18] === tmp8) {
                              if (cResult[19] === target.previewAppName) {
                                let tmp25 = cResult[20];
                              }
                              if (cResult[21] !== tmp7) {
                                let tmp30 = null;
                                if (null != tmp7) {
                                  let obj3 = {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    children: tmp7,
                                  };
                                  tmp30 = closure_6(tmp(tmp2[15]).Text, obj3);
                                }
                                cResult[21] = tmp7;
                                cResult[22] = tmp30;
                                let tmp29 = tmp30;
                              } else {
                                tmp29 = cResult[22];
                              }
                              if (cResult[23] === tmp21) {
                                if (cResult[24] === tmp25) {
                                  if (cResult[25] === tmp29) {
                                    let tmp32 = cResult[26];
                                  }
                                  if (cResult[27] !== tmp8) {
                                    const intl3 = tmp(tmp2[8]).intl;
                                    const tmp37 = target(tmp2[9]);
                                    const stringResult = intl3.string(tmp8 ? tmp37.aC42bN : tmp37.BGF8VT);
                                    cResult[27] = tmp8;
                                    cResult[28] = stringResult;
                                  } else {
                                    if (cResult[29] === tmp10) {
                                      if (cResult[30] === tmp35) {
                                        let tmp40 = cResult[31];
                                      }
                                      const _Symbol = Symbol;
                                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                                        let obj4 = { variant: "secondary", text: null };
                                        const intl4 = tmp(tmp2[8]).intl;
                                        obj4.text = intl4.string(tmp(tmp2[8]).t["ETE/oC"]);
                                        const tmp46 = closure_6(tmp(tmp2[17]).AlertActionButton, obj4);
                                        cResult[32] = tmp46;
                                        let tmp44 = tmp46;
                                      } else {
                                        tmp44 = cResult[32];
                                      }
                                      if (cResult[33] !== tmp40) {
                                        let obj5 = { children: null };
                                        const items = [tmp40, tmp44];
                                        obj5.children = items;
                                        const tmp50 = closure_7(closure_8, obj5);
                                        cResult[33] = tmp40;
                                        cResult[34] = tmp50;
                                        let tmp47 = tmp50;
                                      } else {
                                        tmp47 = cResult[34];
                                      }
                                      if (cResult[35] === tmp47) {
                                        if (cResult[36] === tmp12) {
                                          if (cResult[37] === tmp17) {
                                            if (cResult[38] === tmp32) {
                                              let tmp51 = cResult[39];
                                            }
                                            return tmp51;
                                          }
                                        }
                                      }
                                      let obj6 = { title: tmp12, content: tmp17, extraContent: tmp32, actions: tmp47 };
                                      const tmp53 = closure_6(tmp(tmp2[17]).AlertModal, obj6);
                                      cResult[35] = tmp47;
                                      cResult[36] = tmp12;
                                      cResult[37] = tmp17;
                                      cResult[38] = tmp32;
                                      cResult[39] = tmp53;
                                      tmp51 = tmp53;
                                    }
                                    let obj7 = { variant: "destructive", text: cResult[28], onPress: tmp10 };
                                    const tmp42 = closure_6(tmp(tmp2[17]).AlertActionButton, obj7);
                                    cResult[29] = tmp10;
                                    cResult[30] = cResult[28];
                                    cResult[31] = tmp42;
                                    tmp40 = tmp42;
                                  }
                                }
                              }
                              let obj8 = { spacing: 12, children: null };
                              const items1 = [tmp21, tmp25, tmp29];
                              obj8.children = items1;
                              const tmp34 = closure_7(tmp(tmp2[16]).Stack, obj8);
                              cResult[23] = tmp21;
                              cResult[24] = tmp25;
                              cResult[25] = tmp29;
                              cResult[26] = tmp34;
                              tmp32 = tmp34;
                            }
                          }
                          let tmp26 = null;
                          if (!tmp8) {
                            tmp26 = null;
                            if (null != target.previewAppName) {
                              const obj9 = { hasIcons: false, children: null };
                              const obj10 = {
                                label: tmp(tmp2[12]).formatWithAppTag(target(tmp2[9])["87CtcA"], target.previewAppName),
                                checked,
                                onPress: tmp4[1],
                              };
                              obj9.children = closure_6(tmp(tmp2[14]).TableCheckboxRow, obj10);
                              tmp26 = closure_6(tmp(tmp2[13]).TableRowGroup, obj9);
                              const tmpResult = tmp(tmp2[12]);
                            }
                          }
                          cResult[17] = checked;
                          cResult[18] = tmp8;
                          cResult[19] = target.previewAppName;
                          cResult[20] = tmp26;
                          tmp25 = tmp26;
                        }
                      }
                      if (tmp8) {
                        let result = tmp(tmp2[6]).conjureDeleteProjectBody(target);
                        const tmpResult5 = tmp(tmp2[6]);
                      } else {
                        const intl2 = tmp(tmp2[8]).intl;
                        result = intl2.string(target(tmp2[9])["8OKM1N"]);
                      }
                      cResult[12] = tmp8;
                      cResult[13] = target;
                      cResult[14] = result;
                    }
                  }
                }
                if (tmp8) {
                  let intl = tmp(tmp2[8]).intl;
                  const obj11 = { name: target.projectName };
                  let formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj11);
                } else {
                  const tmpResult6 = tmp(tmp2[6]);
                  formatToPlainStringResult = tmpResult6.conjureTitleWithAppTag(
                    tmp(tmp2[12]).formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName),
                  );
                  const tmpResult7 = tmp(tmp2[12]);
                }
                cResult[8] = tmp8;
                cResult[9] = target.appName;
                cResult[10] = target.projectName;
                cResult[11] = formatToPlainStringResult;
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
                return { value: "IconComponent", done: null };
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
                    const obj8 = tmp2(first[7]);
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
                      const obj7 = { key: "CONJURE_APP_REMOVED", content: null, IconComponent: null };
                      const obj = target(first[10]);
                      obj7.content = tmp2(first[6]).conjureRemoveAppSuccess(closure_1);
                      obj7.IconComponent = tmp2(first[11]).CircleCheckIcon;
                      obj.open(obj7);
                      const obj3 = tmp2(first[6]);
                    }
                    v3 = 3;
                    return { value: "IconComponent", done: null };
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
          cResult[3] = checked;
          cResult[4] = tmp8;
          cResult[5] = project.id;
          cResult[6] = target;
          cResult[7] = submit;
          tmp10 = submit;
        }
      }
      const tmpResult8 = require("conjureRemoveApp");
      if ("delete" === project.action) {
        let result1 = tmpResult8.conjureDeleteProjectItems(target);
      } else {
        result1 = tmpResult8.conjureRemoveAppItems(target);
      }
      cResult[0] = "delete" === project.action;
      cResult[1] = target;
      cResult[2] = result1;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                asyncGeneratorStep(null);
                const obj8 = tmp3(12364);
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
                const tmp23 = tmp2(3827);
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
                  const obj7 = { key: "CONJURE_APP_REMOVED", content: null, IconComponent: null };
                  const obj = tmp2(4766);
                  obj7.content = tmp3(16868).conjureRemoveAppSuccess(closure_129_1);
                  obj7.IconComponent = tmp3(4992).CircleCheckIcon;
                  obj.open(obj7);
                  const obj3 = tmp3(16868);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } catch (tmp39) {
            c3 = tmp;
            throw tmp39;
          }
        }
      };
      const tmp = _slicedToArray(noop.useState(true), 2);
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
      if ("delete" === action.action) {
        let intl = tmp9(tmp8[8]).intl;
        let obj2 = { name: target.projectName };
        let formatToPlainStringResult = intl.formatToPlainString(target(tmp8[9]).CJBhb2, obj2);
        let tmp12 = target;
      } else {
        const tmp9Result = tmp9(tmp8[6]);
        tmp12 = target;
        formatToPlainStringResult = tmp9Result.conjureTitleWithAppTag(
          tmp9(tmp8[12]).formatWithAppTag(target(tmp8[9]).x6FvsZ, target.appName),
        );
        const tmp9Result4 = tmp9(tmp8[12]);
      }
      let obj3 = { title: formatToPlainStringResult, content: null, extraContent: null, actions: null };
      if ("delete" === action.action) {
        let result1 = tmp9(tmp8[6]).conjureDeleteProjectBody(target);
        const tmp9Result5 = tmp9(tmp8[6]);
      } else {
        const intl2 = tmp9(tmp8[8]).intl;
        result1 = intl2.string(tmp12(tmp8[9])["8OKM1N"]);
      }
      obj3.content = result1;
      let tmp10Result = null;
      if (result.length > 0) {
        let obj4 = { items: result };
        tmp10Result = closure_6(tmp12(tmp8[12]), obj4);
      }
      const items = [tmp10Result, ,];
      let tmp10Result3 = null;
      if ("delete" !== action.action) {
        tmp10Result3 = null;
        if (null != target.previewAppName) {
          let obj5 = { hasIcons: false, children: null };
          let obj6 = {
            label: tmp9(tmp8[12]).formatWithAppTag(tmp12(tmp8[9])["87CtcA"], target.previewAppName),
            checked,
            onPress: tmp[1],
          };
          obj5.children = closure_6(tmp9(tmp8[14]).TableCheckboxRow, obj6);
          tmp10Result3 = closure_6(tmp9(tmp8[13]).TableRowGroup, obj5);
          const tmp9Result6 = tmp9(tmp8[12]);
        }
      }
      items[1] = tmp10Result3;
      let tmp10Result4 = null;
      if (null != tmp4) {
        let obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp4 };
        tmp10Result4 = closure_6(tmp9(tmp8[15]).Text, obj7);
      }
      items[2] = tmp10Result4;
      obj3.extraContent = closure_7(tmp9(tmp8[16]).Stack, { spacing: 12, children: items });
      const intl3 = tmp9(tmp8[8]).intl;
      const tmp12Result = tmp12(tmp8[9]);
      let obj8 = { children: null };
      const tmp3 = _slicedToArray(noop.useState(null), 2);
      const items1 = [
        closure_6(tmp9(tmp8[17]).AlertActionButton, {
          variant: "destructive",
          text: intl3.string("delete" === action.action ? tmp12Result.aC42bN : tmp12Result.BGF8VT),
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
      const obj10 = { variant: "secondary", text: null };
      const intl4 = tmp9(tmp8[8]).intl;
      obj10.text = intl4.string(tmp9(tmp8[8]).t["ETE/oC"]);
      items1[1] = closure_6(tmp9(tmp8[17]).AlertActionButton, obj10);
      obj8.children = items1;
      obj3.actions = closure_7(closure_8, obj8);
      return closure_6(tmp9(tmp8[17]).AlertModal, obj3);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(closure_9, {}));
}
