// === Module 7897: useMaybeFetchEquippedCollectibleProducts ===

// Module 7897 (useMaybeFetchEquippedCollectibleProducts)
import useDisplayProfileDefault from "useDisplayProfile" /* 7868 */;
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7900 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, guildId) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmp9 = useDisplayProfileDefault(arg0, guildId);
  const tmpResult = require("initialize");
  const avatarDecoration = require("useAvatarDecoration").useAvatarDecoration(stateFromStores, guildId);
  if (cResult[4] === guildId) {
    if (cResult[5] === stateFromStores) {
      let tmp11 = cResult[6];
    }
    const nameplate = tmp(7899).useNameplate(tmp11);
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
          if (cResult[10] === skuId3) {
            let tmp18 = cResult[11];
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
    const tmpResult4 = tmp(7899);
  }
  const obj2 = { user: stateFromStores, guildId };
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = obj2;
  tmp11 = obj2;
  const tmpResult3 = require("useAvatarDecoration");
}) : ((arg0, guildId) => {
  _require = arg0;
  let items = [skuId3];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const tmp2 = skuId(skuId1[5])(arg0, guildId);
  const obj = require("initialize");
  const avatarDecoration = require("useAvatarDecoration").useAvatarDecoration(stateFromStores, guildId);
  const obj2 = require("useAvatarDecoration");
  const nameplate = require("useNameplate").useNameplate({ user: stateFromStores, guildId });
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
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg2;
  const cResult = require("c").c(4);
  const tmp2 = closure_5(arg0, arg1);
  const skuIds = tmp2;
  if (cResult[0] === arg2) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function c() {
    let tmp = closure_0;
    if (closure_0) {
      tmp = 0 !== skuIds.length;
    }
    if (tmp) {
      const obj2 = { skuIds };
      const result = StorefrontProductActionCreators.maybeFetchProductsBySkuIds(obj2);
    }
  };
  const items = [arg2, tmp2];
  cResult[0] = arg2;
  cResult[1] = tmp2;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  let obj = require("c");
}) : ((arg0, arg1, arg2) => {
  closure_0 = arg2;
  let tmp = closure_5(arg0, arg1);
  const skuIds = tmp;
  const items = [arg2, tmp];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = 0 !== skuIds.length;
    }
    if (tmp) {
      const obj2 = { skuIds };
      const result = StorefrontProductActionCreators.maybeFetchProductsBySkuIds(obj2);
    }
  }, items);
});
export const useEquippedCollectibleSkuIds = tmp2;