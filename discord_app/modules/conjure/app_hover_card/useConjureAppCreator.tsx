// === Module 13770: useConjureAppCreator ===

// Module 13770 (useConjureAppCreator)
import conjureMessageAuthors from "conjureMessageAuthors" /* 12274 */;
import ImagePreload from "ImagePreload" /* 13772 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppCreator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
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
  const tmp4Result = owner_user_id(13771)(conjureProjectId, arg1, arg2);
  ({ project, remixProject } = tmp4Result);
  owner_user_id = undefined;
  if (project != null) {
    owner_user_id = project.owner_user_id;
  }
  if (owner_user_id == null) {
    owner_user_id = null;
  }
  if (cResult[0] === owner_user_id) {
    if (cResult[1] === arg2) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      cResult[4] = items;
      let tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== owner_user_id) {
      const fn2 = function j() {
        let tmp2 = null;
        if (null != owner_user_id) {
          let user = UserStore.getUser(tmp);
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
      let tmp15 = items1;
      let tmp14 = fn2;
    } else {
      tmp14 = cResult[6];
      tmp15 = cResult[7];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp12, tmp14, tmp15);
    if (cResult[8] === stateFromStores) {
      if (cResult[9] === arg1) {
        let tmp16 = cResult[10];
      }
      dependencyMap = tmp16;
      if (cResult[11] === tmp16) {
        if (cResult[12] === arg2) {
          let tmp18 = cResult[13];
          let tmp19 = cResult[14];
        }
        const effect1 = noop.useEffect(tmp18, tmp19);
        class E {
          constructor() {
            tmp = closure_0;
            if (closure_0) {
              tmp2 = closure_2;
              tmp3 = null;
              tmp = null != closure_2;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[7]);
              tmp6 = closure_2;
              preloadImageResult = obj.preloadImage(closure_2);
            }
            return;
          }
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === remixProject) {
            if (cResult[17] === tmp21) {
              let tmp22 = cResult[18];
            }
            return tmp22;
          }
        }
        const obj3 = { creator: stateFromStores, remixProject, isSettled: null != conjureProjectId && tmp4Result.isSettled };
        cResult[15] = stateFromStores;
        cResult[16] = remixProject;
        cResult[17] = null != conjureProjectId && tmp4Result.isSettled;
        cResult[18] = obj3;
        tmp22 = obj3;
      }
      class E {
        constructor() {
          tmp = closure_0;
          if (closure_0) {
            tmp2 = closure_2;
            tmp3 = null;
            tmp = null != closure_2;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[7]);
            tmp6 = closure_2;
            preloadImageResult = obj.preloadImage(closure_2);
          }
          return;
        }
      }
      const items2 = [arg2, tmp16];
      cResult[11] = tmp16;
      cResult[12] = arg2;
      cResult[13] = E;
      cResult[14] = items2;
      tmp19 = items2;
      tmp18 = E;
    }
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(arg1, 32);
    }
    cResult[8] = stateFromStores;
    cResult[9] = arg1;
    cResult[10] = avatarURL;
    tmp16 = avatarURL;
    const tmpResult = tmp(504);
  }
  const fn = function s() {
    if (closure_0) {
      const messageAuthor = conjureMessageAuthors.requestMessageAuthor(owner_user_id);
    }
  };
  const items3 = [arg2, owner_user_id];
  cResult[0] = owner_user_id;
  cResult[1] = arg2;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp9 = items3;
  tmp8 = fn;
  const tmp4 = owner_user_id(13771);
}) : (function useConjureAppCreator(conjureProjectId, arg1, arg2) {
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
  const items = [arg2, owner_user_id];
  const effect = isSettled.useEffect(() => {
    if (closure_1) {
      const messageAuthor = conjureMessageAuthors.requestMessageAuthor(owner_user_id);
    }
  }, items);
  let tmp2 = require("useConjureAppProject");
  const items1 = [owner_user_id];
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
  const items4 = [stateFromStores, remixProject, conjureProjectId, isSettled, owner_user_id];
  return isSettled.useMemo(() => {
    const obj = { creator: stateFromStores, remixProject, isSettled: null };
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = isSettled;
    }
    if (tmp2) {
      tmp2 = null == owner_user_id || null != stateFromStores;
      const tmp4 = null == owner_user_id || null != stateFromStores;
    }
    obj.isSettled = tmp2;
    return obj;
  }, items4);
});