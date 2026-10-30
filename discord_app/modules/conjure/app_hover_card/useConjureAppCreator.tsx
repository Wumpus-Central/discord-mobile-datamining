// === Module 14364: useConjureAppCreator ===

// Module 14364 (useConjureAppCreator)
import ImagePreload from "ImagePreload" /* 14366 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default function useConjureAppCreator(conjureProjectId, arg1, arg2) {
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
    closure_1 = async function _requestCreator(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              const obj5 = { value: conjureProjectId(remixProject[5]).requestMessageAuthor(closure_0), done: false };
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
            return { value: "HermesInternal", done: null };
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
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != owner_user_id) {
      let user = UserStore.getUser(tmp);
      if (user == null) {
        user = null;
      }
      tmp2 = user;
    }
    return tmp2;
  }, items2);
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