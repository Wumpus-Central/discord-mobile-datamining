// === Module 16749: ConjureSecretRequestState ===

// Module 16749 (ConjureSecretRequestState)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let map, set, set2;

function isSecretsSavedMessage(content) {
  const str = content.content;
  const trimmed = str.trim();
  const intl = intl3.intl;
  let tmp5 = trimmed === intl.string(_modDef3753.UGqnoV);
  if (!tmp5) {
    const intl2 = intl3.intl;
    tmp5 = trimmed === intl2.string(_modDef3753.sMQt5O);
  }
  return tmp5;
}
const turnSettled = ConjureChatStore.turnSettled;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((cardId, arg1) => {
  let flag;
  let tmp6;
  let tmp7;
  let tmp9;
  let closure_0 = cardId;
  let closure_1 = arg1;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === cardId) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    [tmp6, tmp7] = react.useState(tmp2);
    _slicedToArray(react.useState(tmp2), 2);
    if (tmp6.cardId === cardId) {
      if (null == tmp6.status) {
        return flag;
      }
      flag = null != tmp6.status && arg1 !== tmp6.status;
    }
    const obj2 = { cardId, status: tmp9 };
    tmp9 = null;
    if ("pending" !== arg1) {
      tmp9 = arg1;
    }
    tmp7(obj2);
    flag = false;
  }
  const fn = function l() {
    let tmp;
    const obj = { cardId, status: tmp };
    tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    return obj;
  };
  cResult[0] = cardId;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((cardId, arg1) => {
  let flag;
  let tmp2;
  let tmp3;
  let tmp5;
  let closure_0 = cardId;
  let closure_1 = arg1;
  let tmp = _slicedToArray(react.useState(() => {
    let tmp;
    const obj = { cardId, status: tmp };
    tmp = null;
    if ("pending" !== closure_1) {
      tmp = closure_1;
    }
    return obj;
  }), 2);
  [tmp2, tmp3] = tmp;
  if (tmp2.cardId === cardId) {
    if (null == tmp2.status) {
      return flag;
    }
    flag = null != tmp2.status && arg1 !== tmp2.status;
  }
  let obj = { cardId, status: tmp5 };
  tmp5 = null;
  if ("pending" !== arg1) {
    tmp5 = arg1;
  }
  tmp3(obj);
  flag = false;
});
let result = size.fileFinishedImporting("modules/conjure/secrets/ConjureSecretRequestState.tsx");

export const secretRequestStatuses = function secretRequestStatuses(memo, stateFromStores12) {
  let set1 = null;
  if (null != stateFromStores12) {
    const _Set = Set;
    const found = stateFromStores12.filter((set) => set.set);
    const self = this;
    const self2 = this;
    set1 = new Set(found.map((name) => name.name));
  }
  map = new Map();
  set2 = new Set();
  let diff = memo.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    do {
      let tmp4 = memo[diff];
      let flag3 = flag;
      let flag4 = flag2;
      if (null != tmp4) {
        if ("user" !== tmp4.role) {
          let secretRequest = tmp4.secretRequest;
          let fields;
          if (secretRequest != null) {
            fields = secretRequest.fields;
          }
          if (fields == null) {
            fields = [];
          }
          flag3 = flag;
          flag4 = flag2;
          if (0 !== fields.length) {
            flag3 = flag;
            flag4 = flag2;
            if (turnSettled(tmp4)) {
              if (flag) {
                if (null == set1) {
                  let result = map.set(tmp4.render_id, "pending");
                  let tmp15 = fields[Symbol.iterator]();
                  flag3 = false;
                  flag4 = true;
                  while (tmp15 !== undefined) {
                    let addResult = set2.add(tmp17.name);
                    continue;
                  }
                }
              }
              if (flag) {
                if (null != set1) {
                  if (fields.every((name) => set1.has(name.name))) {
                    let result1 = map.set(tmp4.render_id, "received");
                  }
                }
              }
              set = map.set;
              let render_id = tmp4.render_id;
              if (flag2) {
                let str = "inactive";
                if (fields.some((name) => set2.has(name.name))) {
                  str = "superseded";
                }
                let result2 = set(render_id, str);
              } else {
                let result3 = set(render_id, "open");
              }
            }
          }
        } else {
          let tmp8 = flag || isSecretsSavedMessage(tmp4);
          flag3 = tmp8;
          flag4 = flag2;
        }
      }
      diff = diff - 1;
      flag = flag3;
      flag2 = flag4;
    } while (0 <= diff);
  }
  return map;
};
export const useSecretRequestStatusChanged = tmp2;