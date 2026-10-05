// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import UserGuildJoinRequestStore from "../../../UserGuildJoinRequestStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["guildId", "secondaryButton", "onClose"];
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = require("c").c(36);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        ({ secondaryButton, onClose } = guildId);
        closure_1 = onClose;
        const tmp10 = _objectWithoutProperties(guildId, closure_3);
        cResult[0] = guildId;
        cResult[1] = guildId;
        cResult[2] = onClose;
        cResult[3] = tmp10;
        cResult[4] = secondaryButton;
      } else {
        _require = cResult[1];
        closure_1 = cResult[2];
      }
      let obj = require("c");
      const currentUserGuildJoinRequest = require("useCurrentUserGuildJoinRequest").useCurrentUserGuildJoinRequest(
        tmp4,
      );
      if (currentUserGuildJoinRequest != null) {
        const rejectionReason = currentUserGuildJoinRequest.rejectionReason;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class M {
          constructor() {
            currentUser = closure_1_8.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[5] = items;
        cResult[6] = M;
        let tmp13 = M;
        let tmp12 = items;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult = require("useCurrentUserGuildJoinRequest");
      stateFromStores = require("initialize").useStateFromStores(tmp12, tmp13);
      const tmpResult5 = require("initialize");
      const canReapplyToRejectedMemberVerificationApplication =
        require("useCanReapplyToRejectedMemberVerificationApplication").useCanReapplyToRejectedMemberVerificationApplication(
          tmp4,
        );
      ({ canReapply, isLoading } = canReapplyToRejectedMemberVerificationApplication);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserGuildJoinRequestStore];
        class M {
          constructor() {
            currentUser = closure_1_8.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[7] = items1;
        let tmp17 = items1;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        class F {
          constructor() {
            return closure_9.getJoinRequestGuild(closure_0);
          }
        }
        const items2 = [tmp4];
        class M {
          constructor() {
            currentUser = closure_1_8.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[8] = tmp4;
        cResult[9] = F;
        cResult[10] = items2;
        let tmp20 = items2;
      } else {
        class F {
          constructor() {
            return closure_9.getJoinRequestGuild(closure_0);
          }
        }
        tmp20 = cResult[10];
      }
      const tmpResult6 = require("useCanReapplyToRejectedMemberVerificationApplication");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp17, F, tmp20);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return closure_9.getJoinRequestGuild(closure_0);
          }
        }
        const items3 = [GuildMemberStore];
        class M {
          constructor() {
            currentUser = closure_1_8.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[11] = items3;
        const tmp22 = items3;
      } else {
        class F {
          constructor() {
            return closure_9.getJoinRequestGuild(closure_0);
          }
        }
      }
      if (cResult[12] === stateFromStores) {
        class F {
          constructor() {
            return closure_9.getJoinRequestGuild(closure_0);
          }
        }
        const stateFromStores2 = tmp(tmp2[10]).useStateFromStores(tmp22, T, items4);
        class M {
          constructor() {
            currentUser = closure_1_8.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        if (cResult[16] === tmp4) {
          class F {
            constructor() {
              return closure_9.getJoinRequestGuild(closure_0);
            }
          }
          if (stateFromStores2 != null) {
            class F {
              constructor() {
                return closure_9.getJoinRequestGuild(closure_0);
              }
            }
          }
          class M {
            constructor() {
              currentUser = closure_1_8.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
        }
        _require = asyncGeneratorStep(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  const obj4 = v1(stateFromStores[12]);
                  if (isPending) {
                    c1 = 2;
                    c2 = 1;
                    const obj6 = { value: obj4.removeGuildJoinRequest(tmp2), done: false };
                    return obj6;
                  } else {
                    c1 = 1;
                    c2 = 1;
                    const obj7 = { value: obj4.resetGuildJoinRequest(tmp2), done: false };
                    return obj7;
                  }
                }
              } else {
                if (1 === tmp5) {
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
                  tmp7();
                }
                const result = tmp2(stateFromStores[13]).openMemberVerificationModal(tmp2);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp20) {
              c2 = tmp;
              throw tmp20;
            }
          }
        });
        cResult[16] = tmp4;
        if (stateFromStores2 != null) {
          class F {
            constructor() {
              return closure_9.getJoinRequestGuild(closure_0);
            }
          }
        }
        const fn = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[17] = undefined;
        cResult[18] = onClose;
        cResult[19] = fn;
        const tmpResult8 = tmp(tmp2[10]);
      }
      class T {
        constructor() {
          member = null;
          if (null != closure_2) {
            tmp3 = closure_7;
            tmp4 = closure_0;
            member = closure_7.getMember(closure_0, tmp);
          }
          return member;
        }
      }
      items4 = [stateFromStores, tmp4];
      cResult[12] = stateFromStores;
      cResult[13] = tmp4;
      cResult[14] = T;
      cResult[15] = items4;
      const tmpResult7 = require("initialize");
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const onClose = guildId.onClose;
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, secondaryButton: 0, onClose: 0 }));
      let stateFromStores;
      let stateFromStores2;
      const currentUserGuildJoinRequest = guildId(stateFromStores[9]).useCurrentUserGuildJoinRequest(guildId);
      let rejectionReason;
      if (currentUserGuildJoinRequest != null) {
        rejectionReason = currentUserGuildJoinRequest.rejectionReason;
      }
      let obj = guildId(stateFromStores[9]);
      const items = [UserStore];
      stateFromStores = guildId(stateFromStores[10]).useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const tmp2Result = guildId(stateFromStores[10]);
      const canReapplyToRejectedMemberVerificationApplication = guildId(
        stateFromStores[11],
      ).useCanReapplyToRejectedMemberVerificationApplication(guildId);
      ({ isLoading, canReapply } = canReapplyToRejectedMemberVerificationApplication);
      const tmp2Result4 = guildId(stateFromStores[11]);
      const items1 = [UserGuildJoinRequestStore];
      const items2 = [guildId];
      const stateFromStores1 = guildId(stateFromStores[10]).useStateFromStores(
        items1,
        () => UserGuildJoinRequestStore.getJoinRequestGuild(guildId),
        items2,
      );
      const tmp2Result5 = guildId(stateFromStores[10]);
      const items3 = [GuildMemberStore];
      const items4 = [stateFromStores, guildId];
      stateFromStores2 = guildId(stateFromStores[10]).useStateFromStores(
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
      const tmp2Result6 = guildId(stateFromStores[10]);
      if (stateFromStores2 != null) {
        isPending = stateFromStores2.isPending;
      }
      items5[1] = isPending;
      items5[2] = onClose;
      let name;
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: null };
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
                  const obj4 = v1(5931);
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
                const result = guildId(5960).openMemberVerificationModal(closure_128_0);
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
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
        const intl2 = tmp2(tmp3[14]).intl;
        const obj2 = { guildName: stateFromStores1.name };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[14]).t["P+/gzA"], obj2);
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
      let obj4 = {};
      const tmp11 = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
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
                const obj4 = v1(5931);
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
              const result = guildId(5960).openMemberVerificationModal(closure_128_0);
              dependencyMap = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp19) {
            dependencyMap = tmp;
            throw tmp19;
          }
        }
      });
      const merged1 = Object.assign(merged);
      obj4.icon = guildId(stateFromStores[17]).XSmallIcon;
      obj4.header = formatToPlainStringResult;
      obj4.subtitle = formatToPlainStringResult1;
      if (canReapply) {
        let obj5 = { loading: isLoading, disabled: isLoading, variant: "secondary", text: null, onPress: null };
        const intl4 = tmp2(tmp3[14]).intl;
        obj5.text = intl4.string(tmp2(tmp3[14]).t.rpFCLs);
        obj5.onPress = callback;
        let tmp17Result = closure_10(tmp2(tmp3[15]).Button, obj5);
      } else {
        tmp17Result = null;
      }
      let obj6 = { children: null };
      const items6 = [tmp17Result, guildId.secondaryButton];
      obj6.children = items6;
      obj4.buttons = closure_12(closure_11, obj6);
      return closure_10(onClose(stateFromStores[16]), obj4);
    };
