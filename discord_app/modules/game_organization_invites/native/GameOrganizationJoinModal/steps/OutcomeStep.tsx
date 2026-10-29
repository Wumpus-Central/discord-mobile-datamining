// === Module 13010: OutcomeStep ===

// Module 13010 (OutcomeStep)
import util from "util" /* 1125 */;
import _modDef2404 from "module_2404" /* 2404 */;
import transitionToGuild from "transitionToGuild" /* 7508 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4879 */;

require = fn;
function getOutcomeContent(joinStatus, failureReason, guildJoinStatus, noun, onGoToServer) {
  onGoToServer = onGoToServer.onGoToServer;
  noun = noun.noun;
  const obj = { text: null, onPress: null };
  let intl = require;
  let obj11 = dependencyMap;
  const intl2 = util.intl;
  obj.text = intl2.string(util.t.cpT0Cq);
  obj.onPress = onGoToServer.onClose;
  let tmp = obj;
  if (null != onGoToServer) {
    const obj2 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(_modDef2404.H1wMHV);
    obj2.onPress = onGoToServer;
    tmp = obj2;
  }
  if (joinStatus === constants2.JOINED) {
    ({ noun: noun2, orgName, characterName } = noun);
    const intl10 = util.intl;
    let PLA9Om = importDefault;
    const obj3 = { noun: noun2 };
    const formatToPlainStringResult = intl10.formatToPlainString(_modDef2404["w/spGp"], obj3);
    if (constants3.NEW_MEMBER !== guildJoinStatus) {
      if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
        if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
          const obj4 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl13 = util.intl;
          const obj5 = { noun: noun2, orgName };
          obj4.subtitle = intl13.formatToPlainString(PLA9Om(2404)["9K7Jdt"], obj5);
          obj4.cta = tmp;
          let obj8 = obj4;
        } else if (constants3.APPLICATION === guildJoinStatus) {
          const obj6 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl12 = util.intl;
          const obj7 = { noun: noun2, orgName };
          obj6.subtitle = intl12.formatToPlainString(PLA9Om(2404).ODHuua, obj7);
          obj6.cta = obj;
          obj8 = obj6;
        } else {
          const FAILED = constants3.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl11 = util.intl;
          const obj9 = { noun: noun2, orgName };
          obj8.subtitle = intl11.formatToPlainString(PLA9Om(2404).Qo94hd, obj9);
          obj8.cta = obj;
        }
        return obj8;
      }
    }
    const obj10 = { title: formatToPlainStringResult, subtitle: null, cta: null };
    if (null != characterName) {
      intl = util.intl;
      PLA9Om = PLA9Om(2404).PLA9Om;
      obj11 = { noun: noun2, orgName, characterName };
      let formatToPlainStringResult1 = intl.formatToPlainString(PLA9Om, obj11);
    } else {
      const intl14 = util.intl;
      const obj12 = { noun: noun2, orgName };
      formatToPlainStringResult1 = intl14.formatToPlainString(PLA9Om(2404).WF9Qgb, obj12);
    }
    obj10.subtitle = formatToPlainStringResult1;
    obj10.cta = tmp;
  } else if (constants.ALREADY_JOINED === failureReason) {
    const obj13 = { title: null, cta: null };
    const intl9 = util.intl;
    const obj14 = { noun };
    obj13.title = intl9.formatToPlainString(_modDef2404["1PMPYk"], obj14);
    obj13.cta = tmp;
    return obj13;
  } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
    const obj15 = { title: null, subtitle: null, cta: null };
    const intl7 = util.intl;
    const obj16 = { noun };
    obj15.title = intl7.formatToPlainString(_modDef2404.vSlR1j, obj16);
    const intl8 = util.intl;
    const obj17 = { noun };
    obj15.subtitle = intl8.formatToPlainString(_modDef2404.kvDHqp, obj17);
    obj15.cta = obj;
    return obj15;
  } else if (constants.GUILD_FULL === failureReason) {
    const obj18 = { title: null, subtitle: null, cta: null };
    const intl5 = util.intl;
    const obj19 = { noun };
    obj18.title = intl5.formatToPlainString(_modDef2404["/7Gy4g"], obj19);
    const intl6 = util.intl;
    obj18.subtitle = intl6.string(_modDef2404["8TGo9L"]);
    obj18.cta = obj;
    return obj18;
  } else {
    const OTHER = constants.OTHER;
    const obj20 = { title: null, cta: null };
    const intl4 = util.intl;
    obj20.title = intl4.string(_modDef2404.sXbaMb);
    obj20.cta = obj;
    return obj20;
  }
}
const GameOrganizationInviteConstants = fn(11122);
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: closure_7, GameOrganizationLinkedGuildJoinStatus: closure_8 } = GameOrganizationInviteConstants);
const onClose = fn(13000).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5005);
let closure_12 = createStyles.createStyles({ text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export const OutcomeStep = ReactCompilerGating.isReactCompilerEnabled() ? (function OutcomeStep(code) {
  const cResult = guildId(576).c(40);
  ({ joinStatus, failureReason, guildJoinStatus, characterName } = code);
  closure_12();
  const tmp6 = stateFromStores(13002)(code.code);
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
          class R {
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
          cResult[9] = R;
          cResult[10] = items1;
          let tmp17 = items1;
        } else {
          class R {
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
        const effect = noop.useEffect(R, tmp17);
        if (cResult[11] === guildId) {
          class R {
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
          if (cResult[14] === characterName) {
            class R {
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
            class R {
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
            class R {
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
          const obj2 = { noun: null, orgName: null, characterName: null };
          const obj4 = { displayNoun: undefined, lowercase: true };
          obj2.noun = tmp5(13003)(obj4);
          if (tmp6 != null) {
            class R {
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
            class R {
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
          obj2.characterName = characterName;
          const obj5 = { onClose, onGoToServer: null };
          if (stateFromStores) {
            class R {
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
            class R {
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
          cResult[14] = characterName;
          cResult[15] = failureReason;
          cResult[16] = guildJoinStatus;
          cResult[17] = tmp19;
          cResult[18] = stateFromStores;
          if (tmp6 != null) {
            class R {
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
          if (tmp6 != null) {
            class R {
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
          cResult[20] = undefined;
          cResult[21] = tmp14;
          cResult[22] = joinStatus;
          cResult[23] = tmp21Result;
          const tmp5Result = tmp5(13003);
        }
        const fn2 = function z() {
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
    class R {
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
    class R {
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
      class R {
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
        class R {
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
}) : (function OutcomeStep(arg0) {
  ({ joinStatus, failureReason, guildJoinStatus } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  let flag;
  ({ code, characterName } = arg0);
  const tmp = closure_12();
  const tmp4 = stateFromStores(13002)(code);
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
  const obj3 = { noun: stateFromStores(13003)({ displayNoun, lowercase: true }), orgName: null, characterName: null };
  let str;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.orgName = str;
  obj3.characterName = characterName;
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
  const items3 = [closure_10(guildId(5271).Text, { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp14Result.title }), ];
  let tmp20Result = null != subtitle;
  if (tmp20Result) {
    const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp20Result = closure_10(tmp6(5271).Text, obj7);
  }
  const obj8 = { children: null };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp14Result.title };
  const tmp2Result = stateFromStores(13003);
  items3[1] = tmp20Result;
  obj5.children = items3;
  const items4 = [closure_10(guildId(7959).ModalContent, { children: closure_11(guildId(6015).Stack, obj5) }), ];
  const obj10 = { children: closure_10(guildId(5281).Button, { text: cta.text, size: "lg", onPress: cta.onPress, disabled: tmp9 }) };
  items4[1] = closure_10(guildId(13007).ModalFooter, obj10);
  obj8.children = items4;
  return closure_11(guildId(7958).ModalScreen, obj8);
});