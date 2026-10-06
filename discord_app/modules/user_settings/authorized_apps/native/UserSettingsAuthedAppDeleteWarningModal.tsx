// === Module 12277: UserSettingsAuthedAppDeleteWarningModal ===

// Module 12277 (UserSettingsAuthedAppDeleteWarningModal)
import intl7 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import InfoBox from "InfoBox" /* 9472 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11161 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12278 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InfoBoxDefault = InfoBox;
let _require, obj1, tmp, tmp2, tmp3Result, tmp3Result1, tmp5, tmp8;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let closure_0;
  let intl3;
  let items;
  let onDelete;
  let scopes;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(25);
  ({ application, scopes, onDelete } = arg0);
  if (cResult[0] === application) {
    let tmp4;
    let tmp7Result;
    if (cResult[1] === scopes) {
      tmp4 = cResult[2];
    }
    _require = tmp4;
    if (cResult[3] === application.name) {
      let tmp6;
      let formatToPlainStringResult;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === application.name) {
        let tmp10;
        if (cResult[7] === tmp4) {
          tmp10 = cResult[8];
        }
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
              if (tmp9) {
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
              if (tmp9) {
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
          let tmp18;
          let tmp22;
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
              if (tmp9) {
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
                if (tmp9) {
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
            const stringResult = obj4.string(require("intl").t.xUqheM);
            cResult[14] = stringResult;
            tmp18 = stringResult;
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
                if (tmp9) {
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
                if (tmp9) {
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
            let obj2 = { variant: "destructive", text: tmp18, onPress: onDelete };
            cResult[15] = onDelete;
            cResult[16] = closure_3(require("AlertModal").AlertActionButton, obj2, "confirm");
            const tmp21 = closure_3(require("AlertModal").AlertActionButton, obj2, "confirm");
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
                if (tmp9) {
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
                if (tmp9) {
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
            let obj3 = { variant: "secondary", text: intl3.string(require("intl").t["ETE/oC"]) };
            const AlertActionButton = tmp(5720).AlertActionButton;
            intl3 = tmp(1126).intl;
            const tmp23 = closure_3(AlertActionButton, obj3, "cancel");
            cResult[17] = tmp23;
            tmp22 = tmp23;
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
                if (tmp9) {
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
          if (cResult[18] !== tmp20) {
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
                if (tmp9) {
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
            const obj5 = { children: items };
            items = [tmp20, tmp22];
            cResult[18] = tmp20;
            cResult[19] = closure_5(closure_4, obj5);
            const tmp26 = closure_5(closure_4, obj5);
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
                if (tmp9) {
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
          if (cResult[20] === tmp10) {
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
                if (tmp9) {
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
          const obj6 = { title: tmp6, content: tmp10, extraContent: tmp15, actions: tmp24 };
          cResult[20] = tmp10;
          cResult[21] = tmp15;
          cResult[22] = tmp24;
          cResult[23] = tmp6;
          cResult[24] = closure_3(require("AlertModal").AlertModal, obj6);
          const tmp29 = closure_3(require("AlertModal").AlertModal, obj6);
        }
        cResult[11] = application;
        cResult[12] = S;
        cResult[13] = S(application);
        const tmp14Result = S(application);
      }
      let intl2 = tmp(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = tmp(1126).t;
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
            if (tmp9) {
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
        tmp13[0] = application.name;
        formatToPlainStringResult = formatToPlainString(t.inM1Yt, tmp13);
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
            if (tmp9) {
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
        tmp11[0] = application.name;
        formatToPlainStringResult = formatToPlainString(t.QWGvxA, tmp11);
      }
      cResult[6] = application.name;
      cResult[7] = tmp4;
      cResult[8] = formatToPlainStringResult;
      tmp10 = formatToPlainStringResult;
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
          if (tmp9) {
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
      tmp7Result = tmp9(tmp(1126).t["paC+US"], obj7);
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
          if (tmp9) {
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
    tmp6 = tmp7Result;
  }
  const tmpResult = require("isSocialLayerApplication");
  const result = tmpResult.isSocialLayerSDKAuthorization(application, scopes);
  cResult[0] = application;
  cResult[1] = scopes;
  cResult[2] = result;
  tmp4 = result;
}) : ((application) => {
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj6;
  let obj9;
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  const obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = intl7.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    formatToPlainStringResult = intl.formatToPlainString(intl7.t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(intl7.t["DT39A+"]);
  }
  const intl2 = intl7.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = intl7.t;
  if (result) {
    const obj3 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: intl3.format(intl7.t.KRnERi, obj6) };
    const tmp8Result = InfoBoxDefault;
    intl3 = intl7.intl;
    obj6 = { applicationName: application.name };
    tmp9 = _false(tmp8Result, obj5);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (tmp12) {
    const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: intl4.string(intl7.t.LY35Zy) };
    const tmp8Result2 = InfoBoxDefault;
    intl4 = intl7.intl;
    tmp12 = _false(tmp8Result2, obj7);
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React3, { children: items }), actions: hasOwnProperty(React3, obj9) };
  obj9 = { children: items1 };
  const AlertModal = AlertModal2.AlertModal;
  const obj10 = { variant: "destructive", text: intl5.string(intl7.t.xUqheM), onPress: onDelete };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl5 = intl7.intl;
  items1 = [_false(AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl6 = intl7.intl;
  items1[1] = _false(AlertActionButton2, obj11, "cancel");
  return _false(AlertModal, obj8);
});
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default tmp3;