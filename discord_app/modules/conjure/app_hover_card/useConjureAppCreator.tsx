// discord_app/modules/conjure/app_hover_card/useConjureAppCreator.tsx
import ImagePreload from "../../image/ImagePreload.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAppCreator(conjureProjectId, arg1, arg2) {
      _require = arg2;
      const cResult = require("c").c(19);
      conjureProjectId = undefined;
      let obj = require("c");
      let tmp = _require;
      if (conjureProjectId != null) {
        conjureProjectId = conjureProjectId.conjureProjectId;
      }
      if (conjureProjectId == null) {
        conjureProjectId = null;
      }
      const tmp4Result = owner_user_id(14102)(conjureProjectId, arg1, arg2);
      ({ project, remixProject } = tmp4Result);
      owner_user_id = undefined;
      if (project != null) {
        owner_user_id = project.owner_user_id;
      }
      if (owner_user_id == null) {
        owner_user_id = null;
      }
      const tmp4 = owner_user_id(14102);
      dependencyMap = _slicedToArray(noop.useState(null), 2)[1];
      if (cResult[0] === owner_user_id) {
        if (cResult[1] === arg2) {
          let tmp10 = cResult[2];
          let tmp11 = cResult[3];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[4] = items;
          let tmp14 = items;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== owner_user_id) {
          const fn2 = function _() {
            let tmp2 = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
              if (user == null) {
                user = null;
              }
              tmp2 = user;
            }
            return tmp2;
          };
          const items1 = [owner_user_id];
          cResult[5] = owner_user_id;
          cResult[6] = fn2;
          cResult[7] = items1;
          let tmp17 = items1;
          let tmp16 = fn2;
        } else {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const stateFromStores = tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === arg1) {
            let tmp18 = cResult[10];
          }
          closure_3 = tmp18;
          if (cResult[11] === tmp18) {
            if (cResult[12] === arg2) {
              let tmp20 = cResult[13];
              let tmp21 = cResult[14];
            }
            const effect1 = noop.useEffect(tmp20, tmp21);
            let tmp23 = null != conjureProjectId && tmp4Result.isSettled;
            if (tmp23) {
              tmp23 = null == owner_user_id || null != stateFromStores || tmp9 === owner_user_id;
              const tmp24 = null == owner_user_id || null != stateFromStores || tmp9 === owner_user_id;
            }
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === remixProject) {
                if (cResult[17] === tmp23) {
                  let tmp25 = cResult[18];
                }
                return tmp25;
              }
            }
            let obj3 = { creator: stateFromStores, remixProject, isSettled: tmp23 };
            cResult[15] = stateFromStores;
            cResult[16] = remixProject;
            cResult[17] = tmp23;
            cResult[18] = obj3;
            tmp25 = obj3;
          }
          const fn3 = function b() {
            let tmp = closure_0;
            if (closure_0) {
              tmp = null != closure_3;
            }
            if (tmp) {
              ImagePreload.preloadImage(closure_3);
            }
          };
          const items2 = [arg2, tmp18];
          cResult[11] = tmp18;
          cResult[12] = arg2;
          cResult[13] = fn3;
          cResult[14] = items2;
          tmp21 = items2;
          tmp20 = fn3;
        }
        let avatarURL;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(arg1, 32);
        }
        cResult[8] = stateFromStores;
        cResult[9] = arg1;
        cResult[10] = avatarURL;
        tmp18 = avatarURL;
        const tmpResult = tmp(504);
      }
      const fn = function f() {
        if (c0) {
          if (null != owner_user_id) {
            c0 = closure_3(function* (arg0) {
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
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
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_1 = tmp2;
                      closure_129_0 = closure_0;
                      c3 = 1;
                      c4 = 1;
                      const obj5 = { value: closure_0(tmp5[7]).requestMessageAuthor(closure_0), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    let tmp7 = closure_0;
                    if (closure_0) {
                      tmp7 = null == user.getUser(closure_129_0);
                    }
                    if (tmp7) {
                      closure_2_2(closure_129_0);
                    }
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp20) {
                  c4 = tmp;
                  throw tmp20;
                }
              }
            });
            (function requestCreator() {
              const self = this;
              const apply = c0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(tmp);
            return () => {
              c0 = false;
            };
          }
        }
      };
      const items3 = [arg2, owner_user_id];
      cResult[0] = owner_user_id;
      cResult[1] = arg2;
      cResult[2] = fn;
      cResult[3] = items3;
      tmp11 = items3;
      tmp10 = fn;
      const tmp8 = _slicedToArray(noop.useState(null), 2);
    }
  : function useConjureAppCreator(conjureProjectId, arg1, arg2) {
      _require = conjureProjectId;
      importDefault = arg2;
      conjureProjectId = undefined;
      if (conjureProjectId != null) {
        conjureProjectId = conjureProjectId.conjureProjectId;
      }
      if (conjureProjectId == null) {
        conjureProjectId = null;
      }
      const tmp2Result = require("useConjureAppProject")(conjureProjectId, arg1, arg2);
      ({ project, remixProject } = tmp2Result);
      const isSettled = tmp2Result.isSettled;
      let owner_user_id;
      if (project != null) {
        owner_user_id = project.owner_user_id;
      }
      if (owner_user_id == null) {
        owner_user_id = null;
      }
      const tmp6 = owner_user_id(first.useState(null), 2);
      first = tmp6[0];
      closure_6 = tmp6[1];
      const items = [arg2, owner_user_id];
      const effect = first.useEffect(() => {
        closure_1 = async function _requestCreator2(arg0) {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = closure_0;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = {
                    value: conjureProjectId(remixProject[7]).requestMessageAuthor(closure_0),
                    done: false,
                  };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                let tmp7 = closure_130_0;
                if (closure_130_0) {
                  tmp7 = null == user.getUser(closure_129_0);
                }
                if (tmp7) {
                  closure_1_6(closure_129_0);
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp20) {
              c4 = tmp;
              throw tmp20;
            }
          }
        };
        if (closure_1) {
          if (null != owner_user_id) {
            c0 = true;
            (function requestCreator(arg0) {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(tmp);
            return () => {
              c0 = false;
            };
          }
        }
      }, items);
      let tmp2 = require("useConjureAppProject");
      const items1 = [closure_6];
      const items2 = [owner_user_id];
      const stateFromStores = require("initialize").useStateFromStores(
        items1,
        () => {
          let tmp2 = null;
          if (null != owner_user_id) {
            let user = UserStore.getUser(tmp);
            if (user == null) {
              user = null;
            }
            tmp2 = user;
          }
          return tmp2;
        },
        items2,
      );
      let avatarURL;
      if (stateFromStores != null) {
        avatarURL = stateFromStores.getAvatarURL(arg1, 32);
      }
      const items3 = [arg2, avatarURL];
      const effect1 = obj.useEffect(() => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = null != avatarURL;
        }
        if (tmp) {
          ImagePreload.preloadImage(avatarURL);
        }
      }, items3);
      const items4 = [stateFromStores, remixProject, conjureProjectId, isSettled, owner_user_id, first];
      return first.useMemo(() => {
        const obj = { creator: stateFromStores, remixProject, isSettled: null };
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = isSettled;
        }
        if (tmp2) {
          let tmp4 = null == owner_user_id;
          if (!tmp4) {
            tmp4 = null != stateFromStores;
          }
          if (!tmp4) {
            tmp4 = first === owner_user_id;
          }
          tmp2 = tmp4;
        }
        obj.isSettled = tmp2;
        return obj;
      }, items4);
    };
