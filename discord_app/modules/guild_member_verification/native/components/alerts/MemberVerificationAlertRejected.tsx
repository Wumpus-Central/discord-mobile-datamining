// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import UserGuildJoinRequestStore from "../../../UserGuildJoinRequestStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx",
);

export default function MemberVerificationAlertRejected(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, secondaryButton: 0, onClose: 0 }));
  let stateFromStores;
  let stateFromStores2;
  const currentUserGuildJoinRequest = guildId(stateFromStores[6]).useCurrentUserGuildJoinRequest(guildId);
  let rejectionReason;
  if (currentUserGuildJoinRequest != null) {
    rejectionReason = currentUserGuildJoinRequest.rejectionReason;
  }
  let obj = guildId(stateFromStores[6]);
  const items = [UserStore];
  stateFromStores = guildId(stateFromStores[7]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp2Result = guildId(stateFromStores[7]);
  const canReapplyToRejectedMemberVerificationApplication = guildId(
    stateFromStores[8],
  ).useCanReapplyToRejectedMemberVerificationApplication(guildId);
  ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
  const tmp2Result4 = guildId(stateFromStores[8]);
  const items1 = [UserGuildJoinRequestStore];
  const items2 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[7]).useStateFromStores(
    items1,
    () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId),
    items2,
  );
  const tmp2Result5 = guildId(stateFromStores[7]);
  const items3 = [GuildMemberStore];
  const items4 = [stateFromStores, guildId];
  stateFromStores2 = guildId(stateFromStores[7]).useStateFromStores(
    items3,
    () => {
      let member = null;
      if (null != stateFromStores) {
        member = GuildMemberStore.getMember(guildId, tmp);
      }
      return member;
    },
    items4,
  );
  const items5 = [guildId, ,];
  let isPending;
  const tmp2Result6 = guildId(stateFromStores[7]);
  if (stateFromStores2 != null) {
    isPending = stateFromStores2.isPending;
  }
  items5[1] = isPending;
  items5[2] = onClose;
  let name;
  const callback = noop.useCallback(
    stateFromStores2(function* () {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              guildId = tmp4;
              let isPending;
              if (stateFromStores2 != null) {
                isPending = stateFromStores2.isPending;
              }
              const obj4 = v1(5758);
              if (isPending) {
                v1 = 2;
                dependencyMap = 1;
                const obj6 = { value: obj4.removeGuildJoinRequest(guildId), done: false };
                return obj6;
              } else {
                v1 = 1;
                dependencyMap = 1;
                const obj7 = { value: obj4.resetGuildJoinRequest(guildId), done: false };
                return obj7;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj = { value, done: true };
              return obj;
            }
            if (closure_128_1 != null) {
              tmp6();
            }
            const result = guildId(5786).openMemberVerificationModal(closure_128_0);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          dependencyMap = tmp;
          throw tmp19;
        }
      }
    }),
    items5,
  );
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (null != name) {
    const intl2 = tmp2(tmp3[11]).intl;
    const obj2 = { guildName: stateFromStores1.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[11]).t["P+/gzA"], obj2);
  } else {
    const intl = tmp2(tmp3[11]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[11]).t.gBPcuP);
  }
  let formatToPlainStringResult1;
  if (null != rejectionReason) {
    if ("" !== rejectionReason) {
      const intl3 = tmp2(tmp3[11]).intl;
      let obj3 = { rejectionReason };
      formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(tmp3[11]).t.fU5PPM, obj3);
    }
  }
  let obj4 = {};
  const tmp11 = stateFromStores2(function* () {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            guildId = tmp4;
            let isPending;
            if (stateFromStores2 != null) {
              isPending = stateFromStores2.isPending;
            }
            const obj4 = v1(5758);
            if (isPending) {
              v1 = 2;
              dependencyMap = 1;
              const obj6 = { value: obj4.removeGuildJoinRequest(guildId), done: false };
              return obj6;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj7 = { value: obj4.resetGuildJoinRequest(guildId), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_128_1 != null) {
            tmp6();
          }
          const result = guildId(5786).openMemberVerificationModal(closure_128_0);
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
  obj4.icon = guildId(stateFromStores[13]).XSmallIcon;
  obj4.header = formatToPlainStringResult;
  obj4.subtitle = formatToPlainStringResult1;
  if (canReapply) {
    let obj5 = { loading: isLoading, disabled: isLoading, variant: "secondary", text: null, onPress: null };
    const intl4 = tmp2(tmp3[11]).intl;
    obj5.text = intl4.string(tmp2(tmp3[11]).t.rpFCLs);
    obj5.onPress = callback;
    let tmp17Result = closure_8(tmp2(tmp3[14]).Button, obj5);
  } else {
    tmp17Result = null;
  }
  let obj6 = { children: null };
  const items6 = [tmp17Result, guildId.secondaryButton];
  obj6.children = items6;
  obj4.buttons = closure_10(closure_9, obj6);
  return closure_8(onClose(stateFromStores[12]), obj4);
}
