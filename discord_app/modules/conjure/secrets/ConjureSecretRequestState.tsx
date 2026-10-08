// discord_app/modules/conjure/secrets/ConjureSecretRequestState.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function isSecretsSavedMessage(content) {
  const trimmed = content.content.trim();
  const intl = util.intl;
  let tmp5 = trimmed === intl.string(_modDef3827.UGqnoV);
  if (!tmp5) {
    const intl2 = util.intl;
    tmp5 = trimmed === intl2.string(_modDef3827.sMQt5O);
  }
  return tmp5;
}
const turnSettled = fn(13073).turnSettled;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/secrets/ConjureSecretRequestState.tsx");

export const secretRequestStatuses = function secretRequestStatuses(memo, stateFromStores12) {
  let set1 = null;
  if (null != stateFromStores12) {
    const _Set = Set;
    const found = stateFromStores12.filter((set) => set.set);
    set1 = new Set(found.map((name) => name.name));
  }
  const map = new Map();
  new Set();
  let diff = memo.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    while (true) {
      let tmp7 = memo[diff];
      let render_id = flag;
      let tmp10 = flag;
      let tmp11 = flag2;
      if (null != tmp7) {
        if ("user" !== tmp7.role) {
          let secretRequest = tmp7.secretRequest;
          let fields;
          if (secretRequest != null) {
            fields = secretRequest.fields;
          }
          if (fields == null) {
            fields = [];
          }
          tmp10 = render_id;
          tmp11 = flag2;
          if (0 !== fields.length) {
            let set = turnSettled(tmp7);
            tmp10 = render_id;
            tmp11 = flag2;
            if (set) {
              if (render_id) {
                if (null == set1) {
                  let result = map.set(tmp7.render_id, "pending");
                  let tmp19 = fields[Symbol.iterator]();
                }
                let str = "inactive";
                if (fields.some((name) => set2.has(name.name))) {
                  str = "superseded";
                }
                let result1 = set(render_id, str);
              }
              if (render_id) {
                if (null != set1) {
                  if (fields.every((name) => set1.has(name.name))) {
                    let result2 = map.set(tmp7.render_id, "received");
                  }
                }
              }
              set = map.set;
              render_id = tmp7.render_id;
              if (!flag2) {
                let result3 = set(render_id, "open");
              }
            }
          }
        } else {
          let tmp12 = render_id;
          if (!render_id) {
            tmp12 = isSecretsSavedMessage(tmp7);
          }
          tmp10 = tmp12;
          tmp11 = flag2;
        }
      }
      while (true) {
        diff = diff - 1;
        flag = tmp10;
        flag2 = tmp11;
        if (0 <= diff) {
          break;
        } else {
          break label0;
        }
      }
    }
  }
  return map;
};
export const useSecretRequestStatusChanged = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecretRequestStatusChanged(cardId, arg1) {
  closure_1 = arg1;
  const cResult = c.c(3);
  if (cResult[0] === cardId) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    [tmp6, tmp7] = noop.useState(tmp2);
    if (tmp6.cardId === cardId) {
      if (null == tmp6.status) {
        return flag;
      }
      flag = null != tmp6.status && arg1 !== tmp6.status;
    }
    const obj2 = { cardId, status: null };
    let tmp9 = null;
    if ("pending" !== arg1) {
      tmp9 = arg1;
    }
    obj2.status = tmp9;
    tmp7(obj2);
    flag = false;
    const tmp5 = _slicedToArray(noop.useState(tmp2), 2);
  }
  const fn = function l() {
    const obj = { cardId, status: null };
    let tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    obj.status = tmp;
    return obj;
  };
  cResult[0] = cardId;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useSecretRequestStatusChanged(cardId, arg1) {
  closure_1 = arg1;
  [tmp2, tmp3] = noop.useState(() => {
    const obj = { cardId, status: null };
    let tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    obj.status = tmp;
    return obj;
  });
  if (tmp2.cardId === cardId) {
    if (null == tmp2.status) {
      return flag;
    }
    flag = null != tmp2.status && arg1 !== tmp2.status;
  }
  let obj = { cardId, status: null };
  let tmp5 = null;
  if ("pending" !== arg1) {
    tmp5 = arg1;
  }
  obj.status = tmp5;
  tmp3(obj);
  flag = false;
});