// === Module 7886: useMaybeFetchEquippedCollectibleProducts ===

// Module 7886 (useMaybeFetchEquippedCollectibleProducts)
import useDisplayProfileDefault from "useDisplayProfile" /* 7857 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7889 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, guildId) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return UserStore.getUser(closure_0);
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
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = useDisplayProfileDefault(arg0, guildId);
  const tmpResult3 = require("useAvatarDecoration");
  const avatarDecoration = tmpResult3.useAvatarDecoration(stateFromStores, guildId);
  if (cResult[4] === guildId) {
    let tmp11;
    if (cResult[5] === stateFromStores) {
      tmp11 = cResult[6];
    }
    const tmpResult4 = require("useNameplate");
    const nameplate = tmpResult4.useNameplate(tmp11);
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    let skuId1;
    if (nameplate != null) {
      skuId1 = nameplate.skuId;
    }
    let skuId2;
    if (tmp9 != null) {
      const profileEffect = tmp9.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
    let skuId3;
    if (tmp9 != null) {
      const profileFrame = tmp9.profileFrame;
      if (profileFrame != null) {
        skuId3 = profileFrame.skuId;
      }
    }
    if (cResult[7] === skuId) {
      if (cResult[8] === skuId1) {
        if (cResult[9] === skuId2) {
          let tmp18;
          if (cResult[10] === skuId3) {
            tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
    const items2 = [skuId, skuId1, skuId2, skuId3];
    const found = items2.filter((item) => null != item);
    cResult[7] = skuId;
    cResult[8] = skuId1;
    cResult[9] = skuId2;
    cResult[10] = skuId3;
    cResult[11] = found;
    tmp18 = found;
  }
  const obj2 = { user: stateFromStores, guildId };
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = obj2;
  tmp11 = obj2;
}) : ((arg0, guildId) => {
  let closure_0;
  let skuId;
  let skuId1;
  let skuId3;
  _require = arg0;
  let items = [skuId3];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const tmp2 = skuId(skuId1[5])(arg0, guildId);
  const obj2 = require("useAvatarDecoration");
  const avatarDecoration = obj2.useAvatarDecoration(stateFromStores, guildId);
  const obj3 = require("useNameplate");
  const obj4 = { user: stateFromStores, guildId };
  const nameplate = obj3.useNameplate(obj4);
  skuId = undefined;
  if (avatarDecoration != null) {
    skuId = avatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (nameplate != null) {
    skuId1 = nameplate.skuId;
  }
  let skuId2;
  if (tmp2 != null) {
    const profileEffect = tmp2.profileEffect;
    if (profileEffect != null) {
      skuId2 = profileEffect.skuId;
    }
  }
  skuId3 = undefined;
  if (tmp2 != null) {
    const profileFrame = tmp2.profileFrame;
    if (profileFrame != null) {
      skuId3 = profileFrame.skuId;
    }
  }
  const items2 = [skuId, skuId1, skuId2, skuId3];
  return skuId2.useMemo(() => {
    const items = [skuId, skuId1, skuId2, skuId3];
    return items.filter((item) => null != item);
  }, items2);
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  _require = arg2;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = closure_5(arg0, arg1);
  const skuIds = tmp2;
  if (cResult[0] === arg2) {
    let tmp3;
    let tmp4;
    if (cResult[1] === tmp2) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function c() {
    const tmp = closure_0 && 0 !== skuIds.length;
    if (tmp) {
      const obj2 = { skuIds };
      const obj = StorefrontProductActionCreators;
      const result = obj.maybeFetchProductsBySkuIds(obj2);
    }
  };
  const items = [arg2, tmp2];
  cResult[0] = arg2;
  cResult[1] = tmp2;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0, arg1, arg2) => {
  let closure_0 = arg2;
  let tmp = closure_5(arg0, arg1);
  const skuIds = tmp;
  const items = [arg2, tmp];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && 0 !== skuIds.length;
    if (tmp) {
      const obj2 = { skuIds };
      const obj = StorefrontProductActionCreators;
      const result = obj.maybeFetchProductsBySkuIds(obj2);
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx");

export default tmp3;
export const useEquippedCollectibleSkuIds = tmp2;