// === Module 12262: UserSettingsAuthedAppDeleteWarningModal ===

// Module 12262 (UserSettingsAuthedAppDeleteWarningModal)
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5713 */;
import InfoBox from "InfoBox" /* 9459 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11148 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12263 */;
import jsxProd from "jsxProd" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InfoBoxDefault = InfoBox;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(25);
  ({ application, scopes, onDelete } = arg0);
  if (cResult[0] === application) {
    if (cResult[1] === scopes) {
      let tmp4 = cResult[2];
    }
    _require = tmp4;
    if (cResult[3] === application.name) {
      if (cResult[4] === tmp4) {
        if (cResult[6] === application.name) {
          if (cResult[7] === tmp4) {
            if (cResult[9] !== tmp4) {
              class S {
                constructor(arg0) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  tmp = jsxs;
                  tmp2 = Fragment;
                  tmp5 = closure_1(closure_2[5])(arg0.id);
                  if (tmp5) {
                    tmp6 = jsx;
                    obj = { children: null };
                    tmp8 = closure_0;
                    tmp3Result = tmp3(tmp4[6]);
                    intl = closure_0(tmp4[4]).intl;
                    obj1 = { applicationName: null };
                    obj1.applicationName = arg0.name;
                    obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                    tmp5 = jsx(tmp3Result, obj);
                  }
                  items = [, ];
                  items[0] = tmp5;
                  tmp9 = closure_0;
                  if (closure_0) {
                    tmp10 = jsx;
                    obj4 = { look: null, children: null };
                    tmp12 = closure_0;
                    tmp3Result1 = tmp3(tmp4[6]);
                    obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                    intl2 = closure_0(tmp4[4]).intl;
                    obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                    tmp9 = jsx(tmp3Result1, obj4);
                  }
                  items[1] = tmp9;
                  return tmp(tmp2, { children: items });
                }
              }
              cResult[9] = tmp4;
              cResult[10] = S;
            } else {
              class S {
                constructor(arg0) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  tmp = jsxs;
                  tmp2 = Fragment;
                  tmp5 = closure_1(closure_2[5])(arg0.id);
                  if (tmp5) {
                    tmp6 = jsx;
                    obj = { children: null };
                    tmp8 = closure_0;
                    tmp3Result = tmp3(tmp4[6]);
                    intl = closure_0(tmp4[4]).intl;
                    obj1 = { applicationName: null };
                    obj1.applicationName = arg0.name;
                    obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                    tmp5 = jsx(tmp3Result, obj);
                  }
                  items = [, ];
                  items[0] = tmp5;
                  tmp9 = closure_0;
                  if (closure_0) {
                    tmp10 = jsx;
                    obj4 = { look: null, children: null };
                    tmp12 = closure_0;
                    tmp3Result1 = tmp3(tmp4[6]);
                    obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                    intl2 = closure_0(tmp4[4]).intl;
                    obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                    tmp9 = jsx(tmp3Result1, obj4);
                  }
                  items[1] = tmp9;
                  return tmp(tmp2, { children: items });
                }
              }
            }
            if (cResult[11] === application) {
              class S {
                constructor(arg0) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  tmp = jsxs;
                  tmp2 = Fragment;
                  tmp5 = closure_1(closure_2[5])(arg0.id);
                  if (tmp5) {
                    tmp6 = jsx;
                    obj = { children: null };
                    tmp8 = closure_0;
                    tmp3Result = tmp3(tmp4[6]);
                    intl = closure_0(tmp4[4]).intl;
                    obj1 = { applicationName: null };
                    obj1.applicationName = arg0.name;
                    obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                    tmp5 = jsx(tmp3Result, obj);
                  }
                  items = [, ];
                  items[0] = tmp5;
                  tmp9 = closure_0;
                  if (closure_0) {
                    tmp10 = jsx;
                    obj4 = { look: null, children: null };
                    tmp12 = closure_0;
                    tmp3Result1 = tmp3(tmp4[6]);
                    obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                    intl2 = closure_0(tmp4[4]).intl;
                    obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                    tmp9 = jsx(tmp3Result1, obj4);
                  }
                  items[1] = tmp9;
                  return tmp(tmp2, { children: items });
                }
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
                const stringResult = obj4.string(tmp(1126).t.xUqheM);
                cResult[14] = stringResult;
                const tmp20 = stringResult;
              } else {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
              }
              if (cResult[15] !== onDelete) {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
                let obj2 = { variant: "destructive", text: tmp20, onPress: onDelete };
                const tmp23 = closure_3(tmp(5713).AlertActionButton, obj2, "confirm");
                cResult[15] = onDelete;
                cResult[16] = tmp23;
              } else {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
                let obj3 = { variant: "secondary", text: null };
                const intl3 = tmp(1126).intl;
                obj3.text = intl3.string(tmp(1126).t["ETE/oC"]);
                const tmp25 = closure_3(tmp(5713).AlertActionButton, obj3, "cancel");
                cResult[17] = tmp25;
                const tmp24 = tmp25;
              } else {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
              }
              if (cResult[18] !== tmp22) {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
                const obj5 = { children: null };
                const items = [tmp22, tmp24];
                obj5.children = items;
                const tmp28 = closure_5(closure_4, obj5);
                cResult[18] = tmp22;
                cResult[19] = tmp28;
              } else {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
              }
              if (cResult[20] === tmp11) {
                class S {
                  constructor(arg0) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp = jsxs;
                    tmp2 = Fragment;
                    tmp5 = closure_1(closure_2[5])(arg0.id);
                    if (tmp5) {
                      tmp6 = jsx;
                      obj = { children: null };
                      tmp8 = closure_0;
                      tmp3Result = tmp3(tmp4[6]);
                      intl = closure_0(tmp4[4]).intl;
                      obj1 = { applicationName: null };
                      obj1.applicationName = arg0.name;
                      obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                      tmp5 = jsx(tmp3Result, obj);
                    }
                    items = [, ];
                    items[0] = tmp5;
                    tmp9 = closure_0;
                    if (closure_0) {
                      tmp10 = jsx;
                      obj4 = { look: null, children: null };
                      tmp12 = closure_0;
                      tmp3Result1 = tmp3(tmp4[6]);
                      obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                      intl2 = closure_0(tmp4[4]).intl;
                      obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                      tmp9 = jsx(tmp3Result1, obj4);
                    }
                    items[1] = tmp9;
                    return tmp(tmp2, { children: items });
                  }
                }
              }
              const obj6 = { title: tmp6, content: tmp11, extraContent: tmp17, actions: tmp26 };
              const tmp31 = closure_3(tmp(5713).AlertModal, obj6);
              cResult[20] = tmp11;
              cResult[21] = tmp17;
              cResult[22] = tmp26;
              cResult[23] = tmp6;
              cResult[24] = tmp31;
            }
            const tmp16Result = S(application);
            cResult[11] = application;
            cResult[12] = S;
            cResult[13] = tmp16Result;
          }
        }
        let intl2 = tmp(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        let name = tmp(1126).t;
        if (tmp4) {
          class S {
            constructor(arg0) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp = jsxs;
              tmp2 = Fragment;
              tmp5 = closure_1(closure_2[5])(arg0.id);
              if (tmp5) {
                tmp6 = jsx;
                obj = { children: null };
                tmp8 = closure_0;
                tmp3Result = tmp3(tmp4[6]);
                intl = closure_0(tmp4[4]).intl;
                obj1 = { applicationName: null };
                obj1.applicationName = arg0.name;
                obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                tmp5 = jsx(tmp3Result, obj);
              }
              items = [, ];
              items[0] = tmp5;
              tmp9 = closure_0;
              if (closure_0) {
                tmp10 = jsx;
                obj4 = { look: null, children: null };
                tmp12 = closure_0;
                tmp3Result1 = tmp3(tmp4[6]);
                obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                intl2 = closure_0(tmp4[4]).intl;
                obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                tmp9 = jsx(tmp3Result1, obj4);
              }
              items[1] = tmp9;
              return tmp(tmp2, { children: items });
            }
          }
          tmp14[0] = application.name;
          let formatToPlainStringResult = formatToPlainString(name.inM1Yt, tmp14);
        } else {
          class S {
            constructor(arg0) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp = jsxs;
              tmp2 = Fragment;
              tmp5 = closure_1(closure_2[5])(arg0.id);
              if (tmp5) {
                tmp6 = jsx;
                obj = { children: null };
                tmp8 = closure_0;
                tmp3Result = tmp3(tmp4[6]);
                intl = closure_0(tmp4[4]).intl;
                obj1 = { applicationName: null };
                obj1.applicationName = arg0.name;
                obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
                tmp5 = jsx(tmp3Result, obj);
              }
              items = [, ];
              items[0] = tmp5;
              tmp9 = closure_0;
              if (closure_0) {
                tmp10 = jsx;
                obj4 = { look: null, children: null };
                tmp12 = closure_0;
                tmp3Result1 = tmp3(tmp4[6]);
                obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
                intl2 = closure_0(tmp4[4]).intl;
                obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
                tmp9 = jsx(tmp3Result1, obj4);
              }
              items[1] = tmp9;
              return tmp(tmp2, { children: items });
            }
          }
          tmp12[0] = application.name;
          formatToPlainStringResult = formatToPlainString(name.QWGvxA, tmp12);
        }
        name = application.name;
        cResult[6] = name;
        cResult[7] = tmp4;
        cResult[8] = formatToPlainStringResult;
      }
    }
    let intl = tmp(1126).intl;
    if (tmp4) {
      class S {
        constructor(arg0) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp = jsxs;
          tmp2 = Fragment;
          tmp5 = closure_1(closure_2[5])(arg0.id);
          if (tmp5) {
            tmp6 = jsx;
            obj = { children: null };
            tmp8 = closure_0;
            tmp3Result = tmp3(tmp4[6]);
            intl = closure_0(tmp4[4]).intl;
            obj1 = { applicationName: null };
            obj1.applicationName = arg0.name;
            obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
            tmp5 = jsx(tmp3Result, obj);
          }
          items = [, ];
          items[0] = tmp5;
          tmp9 = closure_0;
          if (closure_0) {
            tmp10 = jsx;
            obj4 = { look: null, children: null };
            tmp12 = closure_0;
            tmp3Result1 = tmp3(tmp4[6]);
            obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
            intl2 = closure_0(tmp4[4]).intl;
            obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
            tmp9 = jsx(tmp3Result1, obj4);
          }
          items[1] = tmp9;
          return tmp(tmp2, { children: items });
        }
      }
      const obj7 = { applicationName: application.name };
      let tmp7Result = tmp9(tmp(1126).t["paC+US"], obj7);
    } else {
      class S {
        constructor(arg0) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp = jsxs;
          tmp2 = Fragment;
          tmp5 = closure_1(closure_2[5])(arg0.id);
          if (tmp5) {
            tmp6 = jsx;
            obj = { children: null };
            tmp8 = closure_0;
            tmp3Result = tmp3(tmp4[6]);
            intl = closure_0(tmp4[4]).intl;
            obj1 = { applicationName: null };
            obj1.applicationName = arg0.name;
            obj.children = intl.format(closure_0(tmp4[4]).t.KRnERi, obj1);
            tmp5 = jsx(tmp3Result, obj);
          }
          items = [, ];
          items[0] = tmp5;
          tmp9 = closure_0;
          if (closure_0) {
            tmp10 = jsx;
            obj4 = { look: null, children: null };
            tmp12 = closure_0;
            tmp3Result1 = tmp3(tmp4[6]);
            obj4.look = closure_0(tmp4[6]).InfoBoxLooks.WARNING;
            intl2 = closure_0(tmp4[4]).intl;
            obj4.children = intl2.string(closure_0(tmp4[4]).t.LY35Zy);
            tmp9 = jsx(tmp3Result1, obj4);
          }
          items[1] = tmp9;
          return tmp(tmp2, { children: items });
        }
      }
      tmp7Result = tmp7(tmp(1126).t["DT39A+"]);
    }
    cResult[3] = application.name;
    cResult[4] = tmp4;
    cResult[5] = tmp7Result;
  }
  let obj = require("c");
  const result = require("isSocialLayerApplication").isSocialLayerSDKAuthorization(application, scopes);
  cResult[0] = application;
  cResult[1] = scopes;
  cResult[2] = result;
  tmp4 = result;
  const tmpResult = require("isSocialLayerApplication");
}) : ((application) => {
  application = application.application;
  ({ scopes, onDelete } = application);
  const result = isSocialLayerApplication.isSocialLayerSDKAuthorization(application, scopes);
  const intl = util.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(util.t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(util.t["DT39A+"]);
  }
  const intl2 = util.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = util.t;
  if (result) {
    const obj3 = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: null };
    const intl3 = util.intl;
    const obj6 = { applicationName: application.name };
    obj5.children = intl3.format(util.t.KRnERi, obj6);
    tmp9 = React3(InfoBoxDefault, obj5);
    const tmp8Result = InfoBoxDefault;
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(util.t.LY35Zy);
    tmp12 = React3(InfoBoxDefault, obj7);
    const tmp8Result2 = InfoBoxDefault;
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React4, { children: items }), actions: null };
  const obj9 = { children: null };
  const obj10 = { variant: "destructive", text: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.xUqheM);
  obj10.onPress = onDelete;
  const items1 = [React3(AlertModal.AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: null };
  const intl6 = util.intl;
  obj11.text = intl6.string(util.t["ETE/oC"]);
  items1[1] = React3(AlertModal.AlertActionButton, obj11, "cancel");
  obj9.children = items1;
  obj8.actions = hasOwnProperty(React4, obj9);
  return React3(AlertModal.AlertModal, obj8);
});