// === Module 5544: MemberVerificationAlertRejected ===

// Module 5544 (MemberVerificationAlertRejected)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "trackCommunicationDisabled" /* 2021 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import closure_7 from "handleGatewayJoinRequestUpdate" /* 4382 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx");

export default function MemberVerificationAlertRejected(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.create(null));
  let stateFromStores;
  let stateFromStores2;
  let obj = guildId(stateFromStores[6]);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (currentUserGuildJoinRequest != null) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  let tmp2Result = tmp2(tmp3[7]);
  const items = [closure_6];
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  tmp2Result = tmp2(tmp3[8]);
  const canReapplyToRejectedMemberVerificationApplication = tmp2Result.useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const items1 = [closure_7];
  const items2 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[7]).useStateFromStores(items1, () => closure_1_7.getJoinRequestGuild(guildId), items2);
  const tmp2Result1 = guildId(stateFromStores[7]);
  const items3 = [closure_5];
  const items4 = [stateFromStores, guildId];
  stateFromStores2 = guildId(stateFromStores[7]).useStateFromStores(items3, () => {
    let member = null;
    if (null != stateFromStores) {
      member = closure_1_5.getMember(guildId, tmp);
    }
    return member;
  }, items4);
  const items5 = [guildId, , ];
  let isPending;
  const tmp2Result2 = guildId(stateFromStores[7]);
  if (stateFromStores2 != null) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  const callback = React.useCallback(stateFromStores2(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            let isPending;
            if (closure_1_3 != null) {
              isPending = closure_1_3.isPending;
            }
            let obj3 = v0(5541);
            if (isPending) {
              v0 = 2;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.removeGuildJoinRequest(closure_1_0);
              return obj1;
            } else {
              v0 = 1;
              dependencyMap = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.resetGuildJoinRequest(closure_1_0);
              return obj2;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (v0 != null) {
            tmp6();
          }
          obj1 = closure_1_0(5569);
          const result = obj1.openMemberVerificationModal(closure_0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        dependencyMap = tmp;
        throw tmp19;
      }
    }
  }), items5);
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = tmp2(tmp3[11]).intl;
    obj = { guildName: null };
    obj[0] = stateFromStores1.name;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[11]).t["P+/gzA"], obj);
  } else {
    const intl = tmp2(tmp3[11]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[11]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = tmp2(tmp3[11]).intl;
      obj = { rejectionReason: null };
      obj[0] = rejectionReason;
      formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(tmp3[11]).t.fU5PPM, obj);
    }
  }
  obj1 = {};
  const tmp11 = stateFromStores2(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            let isPending;
            if (closure_1_3 != null) {
              isPending = closure_1_3.isPending;
            }
            let obj3 = v0(5541);
            if (isPending) {
              v0 = 2;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.removeGuildJoinRequest(closure_1_0);
              return obj1;
            } else {
              v0 = 1;
              dependencyMap = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.resetGuildJoinRequest(closure_1_0);
              return obj2;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (v0 != null) {
            tmp6();
          }
          obj1 = closure_1_0(5569);
          const result = obj1.openMemberVerificationModal(closure_0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        dependencyMap = tmp;
        throw tmp19;
      }
    }
  });
  const merged1 = Object.assign(merged);
  obj1.icon = guildId(stateFromStores[13]).XSmallIcon;
  obj1.header = formatToPlainStringResult;
  obj1.subtitle = formatToPlainStringResult1;
  if (canReapply) {
    let obj2 = { loading: null, disabled: null, variant: "secondary", text: null, onPress: null };
    obj2[0] = isLoading;
    obj2[1] = isLoading;
    const intl4 = tmp2(tmp3[11]).intl;
    obj2[3] = intl4.string(tmp2(tmp3[11]).t.rpFCLs);
    obj2[4] = callback;
    let tmp17Result = tmp17(tmp2(tmp3[14]).Button, obj2);
  } else {
    tmp17Result = null;
  }
  const items6 = [tmp17Result, guildId.secondaryButton];
  obj1.buttons = closure_10(closure_9, { children: items6 });
  return closure_8(onClose(stateFromStores[12]), obj1);
};