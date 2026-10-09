// === Module 16991: openConjureRemoveAppAlert ===

// Module 16991 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 5300 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveAppAlert(project) {
  const cResult = require("c").c(47);
  project = project.project;
  _require = project;
  const target = project.target;
  const tmp4 = _slicedToArray(noop.useState(target.canRemovePreviewBot), 2);
  checked = tmp4[0];
  let obj = require("c");
  [tmp7, asyncGeneratorStep] = noop.useState(null);
  _slicedToArray = tmp8;
  if (cResult[0] === "delete" === project.action) {
    if (cResult[1] === target) {
      if (cResult[3] === tmp8) {
        if (cResult[4] === target) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === checked) {
          if (cResult[7] === tmp8) {
            if (cResult[8] === project.id) {
              if (cResult[9] === target) {
                let tmp12 = cResult[10];
              }
              if (cResult[11] === tmp8) {
                if (cResult[12] === target.appName) {
                  if (cResult[13] === target.projectName) {
                    if (cResult[15] === tmp8) {
                      if (cResult[16] === target) {
                        if (cResult[18] !== arr) {
                          let tmp24 = null;
                          if (arr.length > 0) {
                            let obj2 = { items: arr };
                            tmp24 = closure_6(target(tmp2[12]), obj2);
                          }
                          cResult[18] = arr;
                          cResult[19] = tmp24;
                          let tmp23 = tmp24;
                        } else {
                          tmp23 = cResult[19];
                        }
                        if (cResult[20] !== tmp10) {
                          let tmp28 = null;
                          if (null != tmp10) {
                            let obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp10 };
                            tmp28 = closure_6(tmp(tmp2[13]).Text, obj3);
                          }
                          cResult[20] = tmp10;
                          cResult[21] = tmp28;
                          let tmp27 = tmp28;
                        } else {
                          tmp27 = cResult[21];
                        }
                        if (cResult[22] === checked) {
                          if (cResult[23] === tmp8) {
                            if (cResult[24] === target.canRemovePreviewBot) {
                              if (cResult[25] === target.previewAppName) {
                                let tmp30 = cResult[26];
                              }
                              if (cResult[27] !== tmp7) {
                                let tmp35 = null;
                                if (null != tmp7) {
                                  let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp7 };
                                  tmp35 = closure_6(tmp(tmp2[13]).Text, obj4);
                                }
                                cResult[27] = tmp7;
                                cResult[28] = tmp35;
                                let tmp34 = tmp35;
                              } else {
                                tmp34 = cResult[28];
                              }
                              if (cResult[29] === tmp23) {
                                if (cResult[30] === tmp27) {
                                  if (cResult[31] === tmp30) {
                                    if (cResult[32] === tmp34) {
                                      let tmp37 = cResult[33];
                                    }
                                    if (cResult[34] !== tmp8) {
                                      const intl3 = tmp(tmp2[8]).intl;
                                      const tmp42 = target(tmp2[9]);
                                      const stringResult = intl3.string(tmp8 ? tmp42.aC42bN : tmp42.BGF8VT);
                                      cResult[34] = tmp8;
                                      cResult[35] = stringResult;
                                    } else {
                                      if (cResult[36] === tmp12) {
                                        if (cResult[37] === tmp40) {
                                          let tmp45 = cResult[38];
                                        }
                                        const _Symbol = Symbol;
                                        if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                          let obj5 = { variant: "secondary", text: null };
                                          const intl4 = tmp(tmp2[8]).intl;
                                          obj5.text = intl4.string(tmp(tmp2[8]).t["ETE/oC"]);
                                          const tmp51 = closure_6(tmp(tmp2[17]).AlertActionButton, obj5);
                                          cResult[39] = tmp51;
                                          let tmp49 = tmp51;
                                        } else {
                                          tmp49 = cResult[39];
                                        }
                                        if (cResult[40] !== tmp45) {
                                          let obj6 = { children: null };
                                          const items = [tmp45, tmp49];
                                          obj6.children = items;
                                          const tmp55 = closure_7(closure_8, obj6);
                                          cResult[40] = tmp45;
                                          cResult[41] = tmp55;
                                          let tmp52 = tmp55;
                                        } else {
                                          tmp52 = cResult[41];
                                        }
                                        if (cResult[42] === tmp37) {
                                          if (cResult[43] === tmp52) {
                                            if (cResult[44] === tmp14) {
                                              if (cResult[45] === tmp19) {
                                                let tmp56 = cResult[46];
                                              }
                                              return tmp56;
                                            }
                                          }
                                        }
                                        let obj7 = { title: tmp14, content: tmp19, extraContent: tmp37, actions: tmp52 };
                                        const tmp58 = closure_6(tmp(tmp2[17]).AlertModal, obj7);
                                        cResult[42] = tmp37;
                                        cResult[43] = tmp52;
                                        cResult[44] = tmp14;
                                        cResult[45] = tmp19;
                                        cResult[46] = tmp58;
                                        tmp56 = tmp58;
                                      }
                                      let obj8 = { variant: "destructive", text: cResult[35], onPress: tmp12 };
                                      const tmp47 = closure_6(tmp(tmp2[17]).AlertActionButton, obj8);
                                      cResult[36] = tmp12;
                                      cResult[37] = cResult[35];
                                      cResult[38] = tmp47;
                                      tmp45 = tmp47;
                                    }
                                  }
                                }
                              }
                              const obj9 = { spacing: 12, children: null };
                              const items1 = [tmp23, tmp27, tmp30, tmp34];
                              obj9.children = items1;
                              const tmp39 = closure_7(tmp(tmp2[16]).Stack, obj9);
                              cResult[29] = tmp23;
                              cResult[30] = tmp27;
                              cResult[31] = tmp30;
                              cResult[32] = tmp34;
                              cResult[33] = tmp39;
                              tmp37 = tmp39;
                            }
                          }
                        }
                        let tmp31 = null;
                        if (!tmp8) {
                          tmp31 = null;
                          if (null != target.previewAppName) {
                            const obj10 = { hasIcons: false, children: null };
                            const obj11 = { label: tmp(tmp2[12]).formatWithAppTag(target(tmp2[9])["87CtcA"], target.previewAppName), checked, onPress: tmp4[1], disabled: !target.canRemovePreviewBot };
                            obj10.children = closure_6(tmp(tmp2[15]).TableCheckboxRow, obj11);
                            tmp31 = closure_6(tmp(tmp2[14]).TableRowGroup, obj10);
                            const tmpResult = tmp(tmp2[12]);
                          }
                        }
                        cResult[22] = checked;
                        cResult[23] = tmp8;
                        cResult[24] = target.canRemovePreviewBot;
                        cResult[25] = target.previewAppName;
                        cResult[26] = tmp31;
                        tmp30 = tmp31;
                      }
                    }
                    if (tmp8) {
                      let result = tmp(tmp2[6]).conjureDeleteProjectBody(target);
                      const tmpResult6 = tmp(tmp2[6]);
                    } else {
                      const intl2 = tmp(tmp2[8]).intl;
                      result = intl2.string(target(tmp2[9])["8OKM1N"]);
                    }
                    cResult[15] = tmp8;
                    cResult[16] = target;
                    cResult[17] = result;
                  }
                }
              }
              if (tmp8) {
                let intl = tmp(tmp2[8]).intl;
                const obj12 = { name: target.projectName };
                let formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj12);
              } else {
                const tmpResult7 = tmp(tmp2[6]);
                formatToPlainStringResult = tmpResult7.conjureTitleWithAppTag(tmp(tmp2[12]).formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName));
                const tmpResult8 = tmp(tmp2[12]);
              }
              cResult[11] = tmp8;
              cResult[12] = target.appName;
              cResult[13] = target.projectName;
              cResult[14] = formatToPlainStringResult;
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
        cResult[6] = checked;
        cResult[7] = tmp8;
        cResult[8] = project.id;
        cResult[9] = target;
        cResult[10] = submit;
        tmp12 = submit;
      }
      let result1 = null;
      if (!tmp8) {
        result1 = tmp(tmp2[6]).conjureRemoveAppKeptChannels(target);
        const tmpResult9 = tmp(tmp2[6]);
      }
      cResult[3] = tmp8;
      cResult[4] = target;
      cResult[5] = result1;
      tmp10 = result1;
    }
  }
  const tmpResult10 = require("conjureRemoveApp");
  if ("delete" === project.action) {
    let result2 = tmpResult10.conjureDeleteProjectItems(target);
  } else {
    result2 = tmpResult10.conjureRemoveAppItems(target);
  }
  cResult[0] = "delete" === project.action;
  cResult[1] = target;
  cResult[2] = result2;
  const tmp6 = _slicedToArray(noop.useState(null), 2);
}) : (function ConjureRemoveAppAlert(action) {
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
            const obj8 = tmp3(11369);
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
              const obj = tmp2(4768);
              obj7.content = tmp3(16992).conjureRemoveAppSuccess(closure_129_1);
              obj7.IconComponent = tmp3(4993).CircleCheckIcon;
              obj.open(obj7);
              const obj3 = tmp3(16992);
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
    result1 = tmp9(tmp8[6]).conjureRemoveAppKeptChannels(target);
    const tmp9Result = tmp9(tmp8[6]);
  }
  if ("delete" === action.action) {
    let intl = tmp9(tmp8[8]).intl;
    let obj2 = { name: target.projectName };
    let formatToPlainStringResult = intl.formatToPlainString(target(tmp8[9]).CJBhb2, obj2);
    let tmp13 = target;
  } else {
    const tmp9Result5 = tmp9(tmp8[6]);
    tmp13 = target;
    formatToPlainStringResult = tmp9Result5.conjureTitleWithAppTag(tmp9(tmp8[12]).formatWithAppTag(target(tmp8[9]).x6FvsZ, target.appName));
    const tmp9Result6 = tmp9(tmp8[12]);
  }
  let obj3 = { title: formatToPlainStringResult, content: null, extraContent: null, actions: null };
  if ("delete" === action.action) {
    let result2 = tmp9(tmp8[6]).conjureDeleteProjectBody(target);
    const tmp9Result7 = tmp9(tmp8[6]);
  } else {
    const intl2 = tmp9(tmp8[8]).intl;
    result2 = intl2.string(tmp13(tmp8[9])["8OKM1N"]);
  }
  obj3.content = result2;
  let tmp11Result = null;
  if (result.length > 0) {
    let obj4 = { items: result };
    tmp11Result = closure_6(tmp13(tmp8[12]), obj4);
  }
  const items = [tmp11Result, , , ];
  let tmp11Result4 = null;
  if (null != result1) {
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: result1 };
    tmp11Result4 = closure_6(tmp9(tmp8[13]).Text, obj5);
  }
  items[1] = tmp11Result4;
  let tmp11Result5 = null;
  if ("delete" !== action.action) {
    tmp11Result5 = null;
    if (null != target.previewAppName) {
      let obj6 = { hasIcons: false, children: null };
      let obj7 = { label: tmp9(tmp8[12]).formatWithAppTag(tmp13(tmp8[9])["87CtcA"], target.previewAppName), checked, onPress: tmp[1], disabled: !target.canRemovePreviewBot };
      obj6.children = closure_6(tmp9(tmp8[15]).TableCheckboxRow, obj7);
      tmp11Result5 = closure_6(tmp9(tmp8[14]).TableRowGroup, obj6);
      const tmp9Result8 = tmp9(tmp8[12]);
    }
  }
  items[2] = tmp11Result5;
  let tmp11Result6 = null;
  if (null != tmp4) {
    let obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp4 };
    tmp11Result6 = closure_6(tmp9(tmp8[13]).Text, obj8);
  }
  items[3] = tmp11Result6;
  obj3.extraContent = closure_7(tmp9(tmp8[16]).Stack, { spacing: 12, children: items });
  const intl3 = tmp9(tmp8[8]).intl;
  const tmp13Result = tmp13(tmp8[9]);
  const obj9 = { children: null };
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const items1 = [
    closure_6(tmp9(tmp8[17]).AlertActionButton, {
      variant: "destructive",
      text: intl3.string("delete" === action.action ? tmp13Result.aC42bN : tmp13Result.BGF8VT),
      onPress: function submit() {
        const self = this;
        const apply = closure_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
    }),

  ];
  const obj11 = { variant: "secondary", text: null };
  const intl4 = tmp9(tmp8[8]).intl;
  obj11.text = intl4.string(tmp9(tmp8[8]).t["ETE/oC"]);
  items1[1] = closure_6(tmp9(tmp8[17]).AlertActionButton, obj11);
  obj9.children = items1;
  obj3.actions = closure_7(closure_8, obj9);
  return closure_6(tmp9(tmp8[17]).AlertModal, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(closure_9, {}));
};