// === Module 5941: MemberVerificationAlertRejected ===

// Module 5941 (MemberVerificationAlertRejected)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4706 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, currentUser, guildId;

let c10;
let closure_12;
let unpackModuleId;
let closure_3 = ["guildId", "secondaryButton", "onClose"];
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let canReapply;
  let closure_0;
  let isLoading;
  let items4;
  let onClose;
  let secondaryButton;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp4;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(36);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    ({ secondaryButton, onClose } = guildId);
    let closure_1 = onClose;
    const tmp10 = _objectWithoutProperties(guildId, closure_3);
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = onClose;
    cResult[3] = tmp10;
    cResult[4] = secondaryButton;
    let tmp6 = tmp10;
    tmp4 = guildId;
  } else {
    _require = cResult[1];
    closure_1 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores[9]);
  const currentUserGuildJoinRequest = tmpResult.useCurrentUserGuildJoinRequest(tmp4);
  if (currentUserGuildJoinRequest != null) {
    const rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class M {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[5] = items;
    cResult[6] = M;
    tmp13 = M;
    tmp12 = items;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult5 = tmp(stateFromStores[10]);
  stateFromStores = tmpResult5.useStateFromStores(tmp12, tmp13);
  const tmpResult6 = tmp(stateFromStores[11]);
  const canReapplyToRejectedMemberVerificationApplication = tmpResult6.useCanReapplyToRejectedMemberVerificationApplication(tmp4);
  ({ canReapply, isLoading } = canReapplyToRejectedMemberVerificationApplication);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildJoinRequestStore];
    class M {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[7] = items1;
    tmp17 = items1;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4) {
    class F {
      constructor() {
        return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
      }
    }
    const items2 = [tmp4];
    class M {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[8] = tmp4;
    cResult[9] = F;
    cResult[10] = items2;
    tmp20 = items2;
  } else {
    class F {
      constructor() {
        return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
      }
    }
    tmp20 = cResult[10];
  }
  const tmpResult7 = tmp(stateFromStores[10]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp17, F, tmp20);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
      }
    }
    const items3 = [GuildMemberStore];
    class M {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    cResult[11] = items3;
    tmp22 = items3;
  } else {
    class F {
      constructor() {
        return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
      }
    }
  }
  if (cResult[12] === stateFromStores) {
    class F {
      constructor() {
        return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
      }
    }
    const tmpResult8 = tmp(stateFromStores[10]);
    const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, T, items4);
    class M {
      constructor() {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      }
    }
    if (cResult[16] === tmp4) {
      class F {
        constructor() {
          return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
        }
      }
      if (stateFromStores2 != null) {
        class F {
          constructor() {
            return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
          }
        }
      }
      class M {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        }
      }
    }
    _require = _asyncToGenerator(async () => {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let isPending;
              if (isPending != null) {
                isPending = isPending.isPending;
              }
              const obj4 = closure_2_1(stateFromStores[12]);
              if (isPending) {
                c1 = 2;
                c2 = 1;
                const obj6 = { value: obj4.removeGuildJoinRequest(tmp), done: false };
                return obj6;
              } else {
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj4.resetGuildJoinRequest(tmp), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            if (c1 != null) {
              tmp6();
            }
            const obj2 = tmp(stateFromStores[13]);
            const result = obj2.openMemberVerificationModal(tmp);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c2 = 3;
          throw tmp19;
        }
      }
    });
    cResult[16] = tmp4;
    if (stateFromStores2 != null) {
      class F {
        constructor() {
          return UserGuildJoinRequestStore.getJoinRequestGuild(closure_0);
        }
      }
    }
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[17] = undefined;
    cResult[18] = onClose;
    cResult[19] = fn;
  }
  class T {
    constructor() {
      let member = null;
      if (null != stateFromStores) {
        member = GuildMemberStore.getMember(closure_0, tmp);
      }
      return member;
    }
  }
  items4 = [stateFromStores, tmp4];
  cResult[12] = stateFromStores;
  cResult[13] = tmp4;
  cResult[14] = T;
  cResult[15] = items4;
}) : ((guildId) => {
  let canReapply;
  let formatToPlainStringResult;
  let intl4;
  let isLoading;
  let items6;
  let obj6;
  let tmp17Result;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const secondaryButton = guildId.secondaryButton;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, secondaryButton: 0, onClose: 0 }));
  let stateFromStores;
  let stateFromStores2;
  const tmp2 = guildId;
  const tmp3 = stateFromStores;
  let obj = guildId(stateFromStores[9]);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (currentUserGuildJoinRequest != null) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  const items = [UserStore];
  const tmp2Result = tmp2(tmp3[10]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp2Result4 = tmp2(tmp3[11]);
  const canReapplyToRejectedMemberVerificationApplication = tmp2Result4.useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const items1 = [UserGuildJoinRequestStore];
  const items2 = [guildId];
  const tmp2Result5 = tmp2(tmp3[10]);
  const stateFromStores1 = tmp2Result5.useStateFromStores(items1, () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId), items2);
  const items3 = [GuildMemberStore];
  const items4 = [stateFromStores, guildId];
  const tmp2Result6 = tmp2(tmp3[10]);
  stateFromStores2 = tmp2Result6.useStateFromStores(items3, () => {
    let member = null;
    if (null != stateFromStores) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  }, items4);
  const items5 = [, , ];
  const useCallback = react.useCallback;
  items5[0] = guildId;
  let isPending;
  const tmp11 = _asyncToGenerator(async () => {
    let c2;
    let closure_0;
    let v1;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        stateFromStores = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            guildId = tmp3;
            let isPending;
            if (stateFromStores2 != null) {
              isPending = stateFromStores2.isPending;
            }
            const obj4 = v1(stateFromStores[12]);
            if (isPending) {
              v1 = 2;
              stateFromStores = 1;
              const obj6 = { value: obj4.removeGuildJoinRequest(guildId), done: false };
              return obj6;
            } else {
              v1 = 1;
              stateFromStores = 1;
              const obj7 = { value: obj4.resetGuildJoinRequest(guildId), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === v1) {
            if (arg0 === 1) {
              stateFromStores = 3;
              throw value;
            } else if (arg0 === 2) {
              stateFromStores = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_128_1 != null) {
            tmp5();
          }
          const obj2 = guildId(stateFromStores[13]);
          const result = obj2.openMemberVerificationModal(closure_128_0);
          stateFromStores = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        stateFromStores = 3;
        throw tmp18;
      }
    }
  });
  if (stateFromStores2 != null) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  const callback = useCallback(tmp11, items5);
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = tmp2(tmp3[14]).intl;
    let obj2 = { guildName: stateFromStores1.name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[14]).t["P+/gzA"], obj2);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[14]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = tmp2(tmp3[14]).intl;
      let obj3 = { rejectionReason };
      formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(tmp3[14]).t.fU5PPM, obj3);
    }
  }
  let obj4 = { icon: tmp2(tmp3[17]).XSmallIcon, header: formatToPlainStringResult, subtitle: formatToPlainStringResult1, buttons: closure_12(closure_11, obj6) };
  const tmp18 = onClose(tmp3[16]);
  const merged1 = Object.assign(merged);
  if (canReapply) {
    let obj5 = { loading: isLoading, disabled: isLoading, variant: "secondary", text: intl4.string(tmp2(tmp3[14]).t.rpFCLs), onPress: callback };
    const Button = tmp2(tmp3[15]).Button;
    intl4 = tmp2(tmp3[14]).intl;
    tmp17Result = closure_10(Button, obj5);
  } else {
    tmp17Result = null;
  }
  obj6 = { children: items6 };
  items6 = [tmp17Result, secondaryButton];
  return closure_10(tmp18, obj4);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx");

export default tmp3;