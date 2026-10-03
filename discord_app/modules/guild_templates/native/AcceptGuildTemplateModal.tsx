// discord_app/modules/guild_templates/native/AcceptGuildTemplateModal.tsx
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import AcceptGuildTemplateActionCreatorsDefault from "../AcceptGuildTemplateActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildTemplateStore from "../GuildTemplateStore.tsx";

require = fn;
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, marginTop: fn(6068).NAV_BAR_HEIGHT } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (code) => {
      const cResult = require("c").c(20);
      code = code.code;
      _require = code;
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildTemplateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== code) {
        const fn = function p() {
          return GuildTemplateStore.getGuildTemplate(closure_0);
        };
        cResult[1] = code;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const guildNameSuggestion = first1(5704).getGuildNameSuggestion();
        cResult[3] = guildNameSuggestion;
        let tmp9 = guildNameSuggestion;
        let obj3 = first1(5704);
      } else {
        tmp9 = cResult[3];
      }
      [first1, dependencyMap] = noop.useState(tmp9);
      [first2, _slicedToArray] = noop.useState(null);
      const tmpResult = require("initialize");
      [tmp17, noop] = noop.useState(null);
      stateFromStores(11404)(stateFromStores);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === first2) {
          if (cResult[6] === first1) {
            let tmp20 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(arg0) {
                return closure_3(code);
              }
            }
            cResult[8] = F;
          } else {
            class F {
              constructor(arg0) {
                return closure_3(code);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(arg0) {
                return closure_3(code);
              }
            }
            _require = first2(function* () {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } else {
                try {
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
                      closure_1 = tmp5;
                      closure_0 = tmp2;
                      let base64;
                      const obj5 = { size };
                      c2 = 1;
                      c3 = 1;
                      const obj6 = { value: stateFromStores(dependencyMap[15]).openImagePicker(obj5), done: false };
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
                    return { value: "IconComponent", done: "IconComponent" };
                  }
                } catch (tmp17) {
                  c3 = tmp;
                  throw tmp17;
                }
              }
            });
            const fn3 = function () {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            cResult[9] = fn3;
            const tmp22 = fn3;
          } else {
            class F {
              constructor(arg0) {
                return closure_3(code);
              }
            }
          }
          if (cResult[10] === code) {
            class F {
              constructor(arg0) {
                return closure_3(code);
              }
            }
          }
          const obj2 = {
            code,
            guildTemplate: stateFromStores,
            name: first1,
            setName: F,
            icon: first2,
            errors: tmp17,
            chooseIcon: tmp22,
            createServer: tmp20,
          };
          const tmp25 = jsx(tmp18(11406), {
            code,
            guildTemplate: stateFromStores,
            name: first1,
            setName: F,
            icon: first2,
            errors: tmp17,
            chooseIcon: tmp22,
            createServer: tmp20,
          });
          cResult[10] = code;
          cResult[11] = tmp17;
          cResult[12] = stateFromStores;
          cResult[13] = tmp20;
          cResult[14] = first2;
          cResult[15] = first1;
          cResult[16] = tmp25;
        }
      }
      const fn2 = function b() {
        if (null != stateFromStores) {
          AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(tmp.code, first1, first2).then(
            () => stateFromStores(dependencyMap[14]).hideModal(),
            (arg0) => closure_1_6(arg0),
          );
          const acceptGuildTemplateResult = AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(
            tmp.code,
            first1,
            first2,
          );
        }
      };
      cResult[4] = stateFromStores;
      cResult[5] = first2;
      cResult[6] = first1;
      cResult[7] = fn2;
      tmp20 = fn2;
      const tmp16 = _slicedToArray(noop.useState(null), 2);
      tmp18 = stateFromStores;
    }
  : (code) => {
      code = code.code;
      name = undefined;
      dependencyMap = undefined;
      first1 = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_10();
      const items = [GuildTemplateStore];
      const stateFromStores = code(504).useStateFromStores(items, () => GuildTemplateStore.getGuildTemplate(code));
      let obj = code(504);
      [name, dependencyMap] = noop.useState(name(5704).getGuildNameSuggestion());
      [first1, _slicedToArray] = noop.useState(null);
      const tmp7 = _slicedToArray(noop.useState(null), 2);
      noop = tmp7[1];
      stateFromStores(11404)(stateFromStores);
      let obj3 = { top: true, style: tmp.container, children: null };
      let obj4 = {
        code,
        guildTemplate: stateFromStores,
        name,
        setName(arg0) {
          return dependencyMap(arg0);
        },
        icon: first1,
        errors: tmp7[0],
        chooseIcon: null,
        createServer: null,
      };
      const obj2 = name(5704);
      obj4.chooseIcon = first1(function* () {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp2;
                let base64;
                const obj5 = { size };
                c2 = 1;
                dependencyMap = 1;
                const obj6 = { value: tmp5(dependencyMap[15]).openImagePicker(obj5), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              base64 = value.base64;
              if (null != base64) {
                closure_129_5(base64);
              }
              dependencyMap = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp17) {
            dependencyMap = tmp;
            throw tmp17;
          }
        }
      });
      obj4.createServer = function createServer() {
        if (null != stateFromStores) {
          AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(tmp.code, first, first1).then(
            () => stateFromStores(dependencyMap[14]).hideModal(),
            (arg0) => closure_1_6(arg0),
          );
          const acceptGuildTemplateResult = AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(
            tmp.code,
            first,
            first1,
          );
        }
      };
      obj3.children = jsx(stateFromStores(11406), {
        code,
        guildTemplate: stateFromStores,
        name,
        setName(arg0) {
          return dependencyMap(arg0);
        },
        icon: first1,
        errors: tmp7[0],
        chooseIcon: null,
        createServer: null,
      });
      return jsx(code(6619).SafeAreaPaddingView, { top: true, style: tmp.container, children: null });
    };
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, marginTop: fn(6068).NAV_BAR_HEIGHT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (code) => {
      const cResult = obj2(576).c(4);
      code = code.code;
      if (cResult[0] !== code) {
        obj2 = { code };
        const obj3 = {};
        const obj4 = {
          title: "",
          fullscreen: true,
          headerLeft: tmp(6010).getHeaderCloseButton(() => closure_1_1(closure_1_3[14]).hideModal()),
          render() {
            obj = {};
            const merged = Object.assign(obj);
            return <closure_2_11 />;
          },
        };
        obj3[ACCEPT_GUILD_TEMPLATE] = obj4;
        cResult[0] = code;
        cResult[1] = obj3;
        let tmp4 = obj3;
        const tmpResult = tmp(6010);
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj5 = { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: tmp4 };
        const tmp9 = jsx(tmp(6496).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : (code) => {
      code = code.code;
      const items = [code];
      const memo = noop.useMemo(() => {
        let obj = { code };
        const obj2 = {};
        const obj3 = {
          title: "",
          fullscreen: true,
          headerLeft: NavigatorHeader.getHeaderCloseButton(() => closure_1_1(closure_1_3[14]).hideModal()),
          render() {
            obj = {};
            const merged = Object.assign(obj);
            return <closure_2_11 />;
          },
        };
        obj2[ACCEPT_GUILD_TEMPLATE] = obj3;
        return obj2;
      }, items);
      return jsx(code(6496).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
    };
