// === Module 11403: AcceptGuildTemplateModal ===

// Module 11403 (AcceptGuildTemplateModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import AcceptGuildTemplateActionCreatorsDefault from "AcceptGuildTemplateActionCreators" /* 11405 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6966 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, code, dependencyMap;

let obj2;
const f107560 = () => {
  const obj = closure_1_1(closure_1_3[14]);
  return obj.hideModal();
};
function render() {
  obj = {};
  const merged = Object.assign(obj);
  return closure_2_9(closure_2_11, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((code) => {
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let first2;
  let tmp17;
  let tmp7;
  let tmp9;
  const tmp = code;
  let obj = code(576);
  const cResult = obj.c(20);
  code = code.code;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildTemplateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== code) {
    const fn = function p() {
      return GuildTemplateStore.getGuildTemplate(code);
    };
    cResult[1] = code;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = first1(5704);
    const guildNameSuggestion = obj3.getGuildNameSuggestion();
    cResult[3] = guildNameSuggestion;
    tmp9 = guildNameSuggestion;
  } else {
    tmp9 = cResult[3];
  }
  [first1, dependencyMap] = react.useState(tmp9);
  [first2, _slicedToArray] = react.useState(null);
  const tmp16 = _slicedToArray(react.useState(null), 2);
  [tmp17, react] = tmp16;
  stateFromStores(11404)(stateFromStores);
  const tmp18 = stateFromStores;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === first2) {
      let tmp20;
      let tmp22;
      if (cResult[6] === first1) {
        tmp20 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return closure_3(arg0);
          }
        }
        cResult[8] = F;
      } else {
        class F {
          constructor(arg0) {
            return closure_3(arg0);
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return closure_3(arg0);
          }
        }
        let closure_0 = first2(function*() {
          let obj2;
          if (c3 === 2) {
            c3 = 3;
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
            try {
              let base64;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_1 = tmp4;
                  closure_0 = tmp;
                  base64 = undefined;
                  const obj5 = { size };
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: obj2.openImagePicker(obj5), done: false };
                  obj2 = stateFromStores(closure_2_3[15]);
                  return obj6;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                base64 = value.base64;
                if (null != base64) {
                  closure_1_5(base64);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c3 = 3;
              throw tmp16;
            }
          }
        });
        const fn3 = function() {
          return closure_0(...arguments);
        };
        cResult[9] = fn3;
        tmp22 = fn3;
      } else {
        class F {
          constructor(arg0) {
            return closure_3(arg0);
          }
        }
      }
      if (cResult[10] === code) {
        class F {
          constructor(arg0) {
            return closure_3(arg0);
          }
        }
      }
      cResult[10] = code;
      cResult[11] = tmp17;
      cResult[12] = stateFromStores;
      cResult[13] = tmp20;
      cResult[14] = first2;
      cResult[15] = first1;
      cResult[16] = jsx(tmp18(11406), { code, guildTemplate: stateFromStores, name: first1, setName: F, icon: first2, errors: tmp17, chooseIcon: tmp22, createServer: tmp20 });
      const tmp25 = jsx(tmp18(11406), { code, guildTemplate: stateFromStores, name: first1, setName: F, icon: first2, errors: tmp17, chooseIcon: tmp22, createServer: tmp20 });
    }
  }
  const fn2 = function b() {
    if (null != stateFromStores) {
      let obj = AcceptGuildTemplateActionCreatorsDefault;
      const acceptGuildTemplateResult = obj.acceptGuildTemplate(tmp.code, first1, first2);
      acceptGuildTemplateResult.then(() => {
        const obj = stateFromStores(closure_1_3[14]);
        return obj.hideModal();
      }, (arg0) => closure_1_6(arg0));
    }
  };
  cResult[4] = stateFromStores;
  cResult[5] = first2;
  cResult[6] = first1;
  cResult[7] = fn2;
  tmp20 = fn2;
}) : ((code) => {
  let closure_3;
  let closure_5;
  let closure_6;
  let first1;
  let first2;
  let name;
  code = code.code;
  name = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_10();
  let obj = code(504);
  const items = [GuildTemplateStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildTemplateStore.getGuildTemplate(code));
  const useState = react.useState;
  let obj2 = name(5704);
  [name, dependencyMap] = useState(obj2.getGuildNameSuggestion());
  [first1, _slicedToArray] = react.useState(null);
  [first2, react] = react.useState(null);
  stateFromStores(11404)(stateFromStores);
  const SafeAreaPaddingView = code(6619).SafeAreaPaddingView;
  let obj4 = {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return closure_3(arg0);
    },
    icon: first1,
    errors: first2,
    chooseIcon: first1(function*() {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              base64 = undefined;
              const obj5 = { size };
              c2 = 1;
              const obj2 = tmp4(c3[15]);
              c3 = 1;
              const obj6 = { value: obj2.openImagePicker(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              closure_129_5(base64);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    }),
    createServer() {
      if (null != stateFromStores) {
        let obj = AcceptGuildTemplateActionCreatorsDefault;
        const acceptGuildTemplateResult = obj.acceptGuildTemplate(tmp.code, first, first1);
        acceptGuildTemplateResult.then(() => {
          const obj = stateFromStores(closure_1_3[14]);
          return obj.hideModal();
        }, (arg0) => closure_1_6(arg0));
      }
    }
  };
  stateFromStores(11406);
  return <SafeAreaPaddingView top style={tmp.container}>{null}</SafeAreaPaddingView>;
});
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((code) => {
  let obj2;
  let tmp4;
  let tmp6;
  let tmpResult;
  const obj = obj2(576);
  const cResult = obj.c(4);
  code = code.code;
  if (cResult[0] !== code) {
    obj2 = { code };
    const obj3 = {};
    const obj4 = { title: "", fullscreen: true, headerLeft: tmpResult.getHeaderCloseButton(f107560), render };
    obj3[ACCEPT_GUILD_TEMPLATE] = obj4;
    cResult[0] = code;
    cResult[1] = obj3;
    tmp4 = obj3;
    tmpResult = obj2(6010);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const tmp9 = jsx(obj2(6496).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: tmp4 });
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : ((code) => {
  code = code.code;
  const items = [code];
  const memo = react.useMemo(() => {
    let obj4;
    let obj = { code };
    const obj2 = {};
    const obj3 = { title: "", fullscreen: true, headerLeft: obj4.getHeaderCloseButton(f107560), render };
    obj2[ACCEPT_GUILD_TEMPLATE] = obj3;
    obj4 = NavigatorHeader;
    return obj2;
  }, items);
  return jsx(code(6496).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
});
const result = size.fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default tmp2;