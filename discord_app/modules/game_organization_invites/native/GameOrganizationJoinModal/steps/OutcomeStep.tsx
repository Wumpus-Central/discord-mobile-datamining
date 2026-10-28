// === Module 12789: OutcomeStep ===

// Module 12789 (OutcomeStep)
import util from "util" /* 1125 */;
import _modDef2403 from "module_2403" /* 2403 */;
import transitionToGuild from "transitionToGuild" /* 7485 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4878 */;

require = fn;
function getOutcomeContent(joinStatus, failureReason, guildJoinStatus, noun, onGoToServer) {
  onGoToServer = onGoToServer.onGoToServer;
  noun = noun.noun;
  const obj = { text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.cpT0Cq);
  obj.onPress = onGoToServer.onClose;
  let tmp3 = obj;
  if (null != onGoToServer) {
    const obj2 = { text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(_modDef2403.H1wMHV);
    obj2.onPress = onGoToServer;
    tmp3 = obj2;
  }
  if (joinStatus === constants2.JOINED) {
    ({ noun: noun2, orgName, accountName } = noun);
    const intl9 = util.intl;
    const obj3 = { noun: noun2 };
    const formatToPlainStringResult = intl9.formatToPlainString(_modDef2403["w/spGp"], obj3);
    if (constants3.NEW_MEMBER !== guildJoinStatus) {
      if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
        if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
          const obj4 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl12 = util.intl;
          const obj5 = { noun: noun2, orgName };
          obj4.subtitle = intl12.formatToPlainString(_modDef2403["9K7Jdt"], obj5);
          obj4.cta = tmp3;
          let obj8 = obj4;
        } else if (constants3.APPLICATION === guildJoinStatus) {
          const obj6 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl11 = util.intl;
          const obj7 = { noun: noun2, orgName };
          obj6.subtitle = intl11.formatToPlainString(_modDef2403.ODHuua, obj7);
          obj6.cta = obj;
          obj8 = obj6;
        } else {
          const FAILED = constants3.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl10 = util.intl;
          const obj9 = { noun: noun2, orgName };
          obj8.subtitle = intl10.formatToPlainString(_modDef2403.Qo94hd, obj9);
          obj8.cta = obj;
        }
      }
      return obj8;
    }
    const obj10 = { title: formatToPlainStringResult, subtitle: null, cta: null };
    const intl13 = util.intl;
    const obj11 = { noun: noun2, orgName, accountName };
    obj10.subtitle = intl13.formatToPlainString(_modDef2403.WF9Qgb, obj11);
    obj10.cta = tmp3;
    obj8 = obj10;
  } else if (constants.ALREADY_JOINED === failureReason) {
    const obj12 = { title: null, cta: null };
    const intl8 = util.intl;
    const obj13 = { noun };
    obj12.title = intl8.formatToPlainString(_modDef2403["1PMPYk"], obj13);
    obj12.cta = tmp3;
    return obj12;
  } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
    const obj14 = { title: null, subtitle: null, cta: null };
    const intl6 = util.intl;
    const obj15 = { noun };
    obj14.title = intl6.formatToPlainString(_modDef2403.vSlR1j, obj15);
    const intl7 = util.intl;
    const obj16 = { noun };
    obj14.subtitle = intl7.formatToPlainString(_modDef2403.kvDHqp, obj16);
    obj14.cta = obj;
    return obj14;
  } else if (constants.GUILD_FULL === failureReason) {
    const obj17 = { title: null, subtitle: null, cta: null };
    const intl4 = util.intl;
    const obj18 = { noun };
    obj17.title = intl4.formatToPlainString(_modDef2403["/7Gy4g"], obj18);
    const intl5 = util.intl;
    obj17.subtitle = intl5.string(_modDef2403["8TGo9L"]);
    obj17.cta = obj;
    return obj17;
  } else {
    const OTHER = constants.OTHER;
    const obj19 = { title: null, cta: null };
    const intl3 = util.intl;
    obj19.title = intl3.string(_modDef2403.sXbaMb);
    obj19.cta = obj;
    return obj19;
  }
}
const GameOrganizationInviteConstants = fn(11068);
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: closure_7, GameOrganizationLinkedGuildJoinStatus: closure_8 } = GameOrganizationInviteConstants);
const onClose = fn(12781).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5004);
let closure_12 = createStyles.createStyles({ text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export const OutcomeStep = ReactCompilerGating.isReactCompilerEnabled() ? (function OutcomeStep(code) {
  const cResult = guildId(576).c(39);
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  closure_12();
  const tmp6 = stateFromStores(12783)(code.code);
  guildId = undefined;
  if (tmp6 != null) {
    guildId = tmp6.guildId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      let tmp2 = null != guildId;
      if (tmp2) {
        tmp2 = null != GuildStore.getGuild(tmp);
      }
      return tmp2;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let obj = guildId(576);
  const tmp5 = stateFromStores;
  stateFromStores = guildId(504).useStateFromStores(first, tmp10);
  const tmpResult = guildId(504);
  [tmp13, dependencyMap] = noop.useState(false);
  if (cResult[3] === guildJoinStatus) {
    if (cResult[4] === tmp13) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === joinStatus) {
          let tmp14 = cResult[7];
        }
        _slicedToArray = tmp14;
        if (cResult[8] !== tmp14) {
          class C {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          const items1 = [tmp14];
          cResult[8] = tmp14;
          cResult[9] = C;
          cResult[10] = items1;
          let tmp17 = items1;
        } else {
          class C {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          tmp17 = cResult[10];
        }
        const effect = noop.useEffect(C, tmp17);
        if (cResult[11] === guildId) {
          class C {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          if (cResult[14] === failureReason) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          if (tmp6 != null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          if (undefined == null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          const obj2 = { noun: null, orgName: null, accountName: "[Account/Username]" };
          const obj4 = { displayNoun: undefined, lowercase: true };
          obj2.noun = tmp5(12784)(obj4);
          if (tmp6 != null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          if (undefined == null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          obj2.orgName = undefined;
          const obj5 = { onClose, onGoToServer: null };
          if (stateFromStores) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          } else {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          obj5.onGoToServer = tmp26;
          const tmp21Result = getOutcomeContent(joinStatus, failureReason, guildJoinStatus, obj2, obj5);
          cResult[14] = failureReason;
          cResult[15] = guildJoinStatus;
          cResult[16] = tmp19;
          cResult[17] = stateFromStores;
          if (tmp6 != null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          cResult[18] = undefined;
          if (tmp6 != null) {
            class C {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          cResult[19] = undefined;
          cResult[20] = tmp14;
          cResult[21] = joinStatus;
          cResult[22] = tmp21Result;
          const tmp5Result = tmp5(12784);
        }
        const fn2 = function y() {
          let tmp2 = null != guildId;
          if (tmp2) {
            tmp2 = stateFromStores;
          }
          if (tmp2) {
            closure_9();
            transitionToGuild.transitionToGuild(guildId);
          }
        };
        cResult[11] = guildId;
        cResult[12] = stateFromStores;
        cResult[13] = fn2;
        tmp19 = fn2;
      }
    }
  }
  let tmp15 = !stateFromStores;
  if (!stateFromStores) {
    class C {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 5000;
          closure_0 = setTimeout(() => closure_1_2(true), 5000);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  if (tmp15) {
    class C {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 5000;
          closure_0 = setTimeout(() => closure_1_2(true), 5000);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    let flag = false;
    if (joinStatus === constants2.JOINED) {
      class C {
        constructor() {
          if (closure_3) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 5000;
            closure_0 = setTimeout(() => closure_1_2(true), 5000);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        class C {
          constructor() {
            if (closure_3) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 5000;
              closure_0 = setTimeout(() => closure_1_2(true), 5000);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
      }
      flag = true;
    }
    tmp15 = flag;
  }
  cResult[3] = guildJoinStatus;
  cResult[4] = tmp13;
  cResult[5] = stateFromStores;
  cResult[6] = joinStatus;
  cResult[7] = tmp15;
  tmp14 = tmp15;
  const tmp12 = _slicedToArray(noop.useState(false), 2);
}) : (function OutcomeStep(code) {
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  let stateFromStores;
  dependencyMap = undefined;
  let flag;
  const tmp = closure_12();
  const tmp4 = stateFromStores(12783)(code.code);
  let guildId;
  if (tmp4 != null) {
    guildId = tmp4.guildId;
  }
  const items = [GuildStore];
  stateFromStores = guildId(504).useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null != GuildStore.getGuild(tmp);
    }
    return tmp2;
  });
  const tmp8 = flag(noop.useState(false), 2);
  dependencyMap = tmp8[1];
  let tmp9 = !stateFromStores;
  if (!stateFromStores) {
    tmp9 = !tmp8[0];
  }
  if (tmp9) {
    flag = false;
    if (joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          flag = false;
        }
      }
      flag = true;
    }
    tmp9 = flag;
  }
  flag = tmp9;
  const items1 = [tmp9];
  const effect = noop.useEffect(() => {
    if (flag) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [guildId, stateFromStores];
  const callback = noop.useCallback(() => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      closure_9();
      transitionToGuild.transitionToGuild(guildId);
    }
  }, items2);
  let displayNoun;
  let obj = guildId(504);
  if (tmp4 != null) {
    displayNoun = tmp4.displayNoun;
  }
  if (displayNoun == null) {
    displayNoun = null;
  }
  const obj3 = { noun: stateFromStores(12784)({ displayNoun, lowercase: true }), orgName: null, accountName: "[Account/Username]" };
  let str;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.orgName = str;
  const obj4 = { onClose, onGoToServer: null };
  if (stateFromStores) {
    let tmp17 = callback;
  } else {
    tmp17 = null;
  }
  obj4.onGoToServer = tmp17;
  const tmp14Result = getOutcomeContent(joinStatus, failureReason, guildJoinStatus, obj3, obj4);
  ({ subtitle, cta } = tmp14Result);
  const obj5 = { spacing: stateFromStores(587).space.PX_8, children: null };
  const items3 = [closure_10(guildId(5270).Text, { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp14Result.title }), ];
  let tmp20Result = null != subtitle;
  if (tmp20Result) {
    const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp20Result = closure_10(tmp6(5270).Text, obj7);
  }
  const obj8 = { children: null };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp14Result.title };
  const tmp2Result = stateFromStores(12784);
  items3[1] = tmp20Result;
  obj5.children = items3;
  const items4 = [closure_10(guildId(7936).ModalContent, { children: closure_11(guildId(6013).Stack, obj5) }), ];
  const obj10 = { children: closure_10(guildId(5280).Button, { text: cta.text, size: "lg", onPress: cta.onPress, disabled: tmp9 }) };
  items4[1] = closure_10(guildId(12786).ModalFooter, obj10);
  obj8.children = items4;
  return closure_11(guildId(7935).ModalScreen, obj8);
});