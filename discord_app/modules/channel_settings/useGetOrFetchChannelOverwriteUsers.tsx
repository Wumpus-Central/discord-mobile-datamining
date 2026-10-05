// === Module 17005: useGetOrFetchChannelOverwriteUsers ===

// Module 17005 (useGetOrFetchChannelOverwriteUsers)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import createAggregatorDefault from "createAggregator" /* 17006 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f128040 = (id) => id.id;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let first1;
  let length;
  let mapped;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp2 = first1;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return GuildMemberStore.getMemberIds(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === stateFromStoresArray) {
    let tmp9;
    if (cResult[5] === arg1) {
      tmp9 = cResult[6];
    }
    const tmp15 = _slicedToArray(tmp9, 2);
    first1 = tmp15[0];
    _slicedToArray = tmp17;
    if (cResult[9] === arg0) {
      let tmp18;
      let tmp19;
      let tmp22;
      let tmp25;
      if (cResult[10] === tmp15[1]) {
        tmp18 = cResult[11];
        tmp19 = cResult[12];
      }
      const effect = react.useEffect(tmp18, tmp19);
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        cResult[13] = items2;
        tmp22 = items2;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] !== first1) {
        class I {
          constructor() {
            const mapped = first1.map(UserStore.getUser);
            return mapped.filter(GlobalUtils.isNotNullish);
          }
        }
        const items3 = [first1];
        cResult[14] = first1;
        cResult[15] = I;
        cResult[16] = items3;
        class F {
          constructor() {
            const tmp2 = length.length > 0 && null != closure_0;
            if (tmp2) {
              const obj = GuildActionCreatorsDefault;
              const membersById = obj.requestMembersById(closure_0, length, false);
            }
          }
        }
      } else {
        class I {
          constructor() {
            const mapped = first1.map(UserStore.getUser);
            return mapped.filter(GlobalUtils.isNotNullish);
          }
        }
        tmp25 = cResult[16];
      }
      const tmpResult2 = require("get initialized");
      return tmpResult2.useStateFromStoresArray(tmp22, I, tmp25);
    }
    class F {
      constructor() {
        const tmp2 = length.length > 0 && null != closure_0;
        if (tmp2) {
          const obj = GuildActionCreatorsDefault;
          const membersById = obj.requestMembersById(closure_0, length, false);
        }
      }
    }
    const items4 = [tmp15[1], arg0];
    cResult[9] = arg0;
    cResult[10] = tmp15[1];
    cResult[11] = F;
    cResult[12] = items4;
    tmp19 = items4;
    tmp18 = F;
  }
  if (cResult[7] !== stateFromStoresArray) {
    class I {
      constructor() {
        const mapped = first1.map(UserStore.getUser);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
    cResult[7] = stateFromStoresArray;
    cResult[8] = S;
  } else {
    class I {
      constructor() {
        const mapped = first1.map(UserStore.getUser);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  const tmp11 = stateFromStoresArray(tmp2[8]);
  if (null == arg1) {
    class I {
      constructor() {
        const mapped = first1.map(UserStore.getUser);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  } else {
    class I {
      constructor() {
        const mapped = first1.map(UserStore.getUser);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
    const values = Object.values(arg1);
    const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
    mapped = found.map(f128040);
  }
  const tmp11Result = tmp11(mapped, S);
  cResult[4] = stateFromStoresArray;
  cResult[5] = arg1;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : ((arg0, arg1) => {
  let closure_0;
  let first;
  let length;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [GuildMemberStore];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildMemberStore.getMemberIds(closure_0), items1);
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(react.useMemo(() => {
    let items;
    const tmp = createAggregatorDefault;
    if (null == closure_1) {
      items = [];
    } else {
      const _Object = Object;
      const values = Object.values(tmp2);
      const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
      items = found.map(f128040);
    }
    return tmp(items, (arg0) => stateFromStoresArray.includes(arg0));
  }, items2), 2);
  first = tmp2[0];
  react = tmp4;
  const items3 = [tmp4, arg0];
  const effect = react.useEffect(() => {
    const tmp2 = length.length > 0 && null != closure_0;
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(closure_0, length, false);
    }
  }, items3);
  const items4 = [UserStore];
  const items5 = [first];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items4, () => {
    const mapped = first.map(UserStore.getUser);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items5);
});
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default tmp2;