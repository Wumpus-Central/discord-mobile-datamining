// === Module 10395: StrangerDangerMoreTipsModalActionItems ===

// Module 10395 (StrangerDangerMoreTipsModalActionItems)
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6641 */;
import EyeIcon from "EyeIcon" /* 6643 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
import DenyIcon from "DenyIcon" /* 9306 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10374 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const SafetyWarningTypes = fn(10266).SafetyWarningTypes;
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StrangerDangerMoreTipsModalActionItems(channelId) {
  const cResult = channelId(senderId[7]).c(47);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function _() {
      return UserStore.getUser(senderId);
    };
    const items1 = [senderId];
    cResult[1] = senderId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = channelId(senderId[7]);
  const stateFromStores = channelId(senderId[8]).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const name = warningId(tmp2[9]).getName(stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = name;
    let tmp9 = name;
    const obj3 = warningId(tmp2[9]);
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RelationshipStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== senderId) {
    const fn2 = function k() {
      return { isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) };
    };
    const items3 = [senderId];
    cResult[7] = senderId;
    cResult[8] = fn2;
    cResult[9] = items3;
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult = channelId(senderId[8]);
  const stateFromStoresObject = channelId(senderId[8]).useStateFromStoresObject(tmp12, tmp14, tmp15);
  const isBlocked = stateFromStoresObject.isBlocked;
  const tmpResult2 = channelId(senderId[8]);
  [tmp18, _slicedToArray] = noop.useState(stateFromStoresObject.isIgnored);
  if (cResult[10] === channelId) {
    if (cResult[11] === senderId) {
      if (cResult[12] === warningId) {
        let tmp19 = cResult[13];
      }
      if (cResult[14] === channelId) {
        if (cResult[15] === senderId) {
          if (cResult[18] === tmp9) {
            if (cResult[19] === tmp18) {
              if (cResult[21] !== tmp18) {
                if (!tmp18) {
                  const string = tmp(tmp2[12]).intl.string;
                  class O {
                    constructor() {
                      obj = closure_0(closure_2[10]);
                      obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                      trackCtaEventResult = obj.trackCtaEvent(obj1);
                      obj3 = closure_1(closure_2[11]);
                      unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                      tmp3 = closure_3(false);
                      return;
                    }
                  }
                }
                class O {
                  constructor() {
                    obj = closure_0(closure_2[10]);
                    obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                    trackCtaEventResult = obj.trackCtaEvent(obj1);
                    obj3 = closure_1(closure_2[11]);
                    unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                    tmp3 = closure_3(false);
                    return;
                  }
                }
                cResult[21] = tmp18;
                cResult[22] = undefined;
                let tmp24 = tmp25;
              } else {
                tmp24 = cResult[22];
              }
              class O {
                constructor() {
                  obj = closure_0(closure_2[10]);
                  obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                  trackCtaEventResult = obj.trackCtaEvent(obj1);
                  obj3 = closure_1(closure_2[11]);
                  unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                  tmp3 = closure_3(false);
                  return;
                }
              }
              if (cResult[23] !== tmp18) {
                if (tmp18) {
                  let EyeSlashIcon = tmp(tmp2[13]).EyeIcon;
                } else {
                  EyeSlashIcon = tmp(tmp2[14]).EyeSlashIcon;
                }
                class O {
                  constructor() {
                    obj = closure_0(closure_2[10]);
                    obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                    trackCtaEventResult = obj.trackCtaEvent(obj1);
                    obj3 = closure_1(closure_2[11]);
                    unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                    tmp3 = closure_3(false);
                    return;
                  }
                }
                cResult[23] = tmp18;
                cResult[24] = tmp28;
              } else {
                if (cResult[25] === isBlocked) {
                  if (cResult[26] === tmp21) {
                    if (cResult[27] === tmp24) {
                      if (cResult[28] === tmp19) {
                        if (cResult[29] === tmp26) {
                          let tmp30 = cResult[30];
                        }
                        if (cResult[31] === tmp9) {
                          if (cResult[32] === isBlocked) {
                            if (cResult[34] !== isBlocked) {
                              if (!isBlocked) {
                                const string2 = tmp(tmp2[12]).intl.string;
                                class O {
                                  constructor() {
                                    obj = closure_0(closure_2[10]);
                                    obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                    trackCtaEventResult = obj.trackCtaEvent(obj1);
                                    obj3 = closure_1(closure_2[11]);
                                    unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                    tmp3 = closure_3(false);
                                    return;
                                  }
                                }
                              }
                              class O {
                                constructor() {
                                  obj = closure_0(closure_2[10]);
                                  obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                  trackCtaEventResult = obj.trackCtaEvent(obj1);
                                  obj3 = closure_1(closure_2[11]);
                                  unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                  tmp3 = closure_3(false);
                                  return;
                                }
                              }
                              cResult[34] = isBlocked;
                              cResult[35] = undefined;
                              let tmp35 = tmp36;
                            } else {
                              tmp35 = cResult[35];
                            }
                            class O {
                              constructor() {
                                obj = closure_0(closure_2[10]);
                                obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                trackCtaEventResult = obj.trackCtaEvent(obj1);
                                obj3 = closure_1(closure_2[11]);
                                unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                tmp3 = closure_3(false);
                                return;
                              }
                            }
                            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                              const tmp39 = jsx(tmp(tmp2[15]).DenyIcon, { color: "text-feedback-critical" });
                              class O {
                                constructor() {
                                  obj = closure_0(closure_2[10]);
                                  obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                  trackCtaEventResult = obj.trackCtaEvent(obj1);
                                  obj3 = closure_1(closure_2[11]);
                                  unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                  tmp3 = closure_3(false);
                                  return;
                                }
                              }
                              cResult[36] = tmp39;
                              let tmp37 = tmp39;
                            } else {
                              tmp37 = cResult[36];
                            }
                            if (cResult[37] === isBlocked) {
                              if (cResult[38] === onBlockPressed) {
                                if (cResult[39] === tmp32) {
                                  if (cResult[40] === tmp35) {
                                    let tmp40 = cResult[41];
                                  }
                                  if (cResult[42] === tmp30) {
                                    if (cResult[43] === tmp40) {
                                      let arr5 = cResult[44];
                                    }
                                    if (cResult[45] !== arr5) {
                                      let obj2 = { hasIcons: true, children: null };
                                      class O {
                                        constructor() {
                                          obj = closure_0(closure_2[10]);
                                          obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                          trackCtaEventResult = obj.trackCtaEvent(obj1);
                                          obj3 = closure_1(closure_2[11]);
                                          unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                          tmp3 = closure_3(false);
                                          return;
                                        }
                                      }
                                      obj2.children = arr5.map((item, index) => {
                                        const obj = { children: null };
                                        const merged = Object.assign(item);
                                        obj.children = jsx(warningId(senderId[17]), {});
                                        return < key={index}>{null}</>;
                                      });
                                      const tmp45 = <tmp44 hasIcons>{null}</tmp44>;
                                      cResult[45] = arr5;
                                      cResult[46] = tmp45;
                                    }
                                    class O {
                                      constructor() {
                                        obj = closure_0(closure_2[10]);
                                        obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                        trackCtaEventResult = obj.trackCtaEvent(obj1);
                                        obj3 = closure_1(closure_2[11]);
                                        unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                        tmp3 = closure_3(false);
                                        return;
                                      }
                                    }
                                  }
                                  class O {
                                    constructor() {
                                      obj = closure_0(closure_2[10]);
                                      obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                                      trackCtaEventResult = obj.trackCtaEvent(obj1);
                                      obj3 = closure_1(closure_2[11]);
                                      unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                      tmp3 = closure_3(false);
                                      return;
                                    }
                                  }
                                  tmp41[0] = tmp30;
                                  tmp41[1] = tmp40;
                                  cResult[42] = tmp30;
                                  cResult[43] = tmp40;
                                  cResult[44] = tmp41;
                                  arr5 = tmp41;
                                }
                              }
                            }
                            const obj4 = { title: cResult[33], description: tmp35, onClick: onBlockPressed, icon: tmp37, variant: "danger", disabled: isBlocked };
                            cResult[37] = isBlocked;
                            cResult[38] = onBlockPressed;
                            cResult[39] = cResult[33];
                            cResult[40] = tmp35;
                            cResult[41] = obj4;
                            tmp40 = obj4;
                          }
                        }
                        class O {
                          constructor() {
                            obj = closure_0(closure_2[10]);
                            obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                            trackCtaEventResult = obj.trackCtaEvent(obj1);
                            obj3 = closure_1(closure_2[11]);
                            unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                            tmp3 = closure_3(false);
                            return;
                          }
                        }
                        let t = tmp(tmp2[12]).t;
                        if (isBlocked) {
                          t = { username: null };
                          class O {
                            constructor() {
                              obj = closure_0(closure_2[10]);
                              obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                              trackCtaEventResult = obj.trackCtaEvent(obj1);
                              obj3 = closure_1(closure_2[11]);
                              unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                              tmp3 = closure_3(false);
                              return;
                            }
                          }
                          const formatToPlainStringResult = obj8.formatToPlainString(t.bluEjH, t);
                        } else {
                          { username: null }.username = tmp9;
                          class O {
                            constructor() {
                              obj = closure_0(closure_2[10]);
                              obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                              trackCtaEventResult = obj.trackCtaEvent(obj1);
                              obj3 = closure_1(closure_2[11]);
                              unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                              tmp3 = closure_3(false);
                              return;
                            }
                          }
                          const obj6 = { username: null };
                        }
                        cResult[31] = tmp9;
                        cResult[32] = isBlocked;
                        cResult[33] = formatToPlainStringResult;
                      }
                    }
                  }
                }
                class O {
                  constructor() {
                    obj = closure_0(closure_2[10]);
                    obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                    trackCtaEventResult = obj.trackCtaEvent(obj1);
                    obj3 = closure_1(closure_2[11]);
                    unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                    tmp3 = closure_3(false);
                    return;
                  }
                }
                tmp31[0] = tmp21;
                tmp31[1] = tmp24;
                tmp31[2] = tmp19;
                tmp31[3] = cResult[24];
                tmp31[4] = isBlocked;
                cResult[25] = isBlocked;
                cResult[26] = tmp21;
                cResult[27] = tmp24;
                cResult[28] = tmp19;
                cResult[29] = cResult[24];
                cResult[30] = tmp31;
                tmp30 = tmp31;
              }
            }
          }
          class O {
            constructor() {
              obj = closure_0(closure_2[10]);
              obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
              trackCtaEventResult = obj.trackCtaEvent(obj1);
              obj3 = closure_1(closure_2[11]);
              unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
              tmp3 = closure_3(false);
              return;
            }
          }
          let t1 = tmp(tmp2[12]).t;
          if (tmp18) {
            t1 = { username: null };
            class O {
              constructor() {
                obj = closure_0(closure_2[10]);
                obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                trackCtaEventResult = obj.trackCtaEvent(obj1);
                obj3 = closure_1(closure_2[11]);
                unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                tmp3 = closure_3(false);
                return;
              }
            }
            const formatToPlainStringResult1 = obj5.formatToPlainString(t1.ZLIKgJ, t1);
          } else {
            { username: null }.username = tmp9;
            class O {
              constructor() {
                obj = closure_0(closure_2[10]);
                obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
                trackCtaEventResult = obj.trackCtaEvent(obj1);
                obj3 = closure_1(closure_2[11]);
                unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                tmp3 = closure_3(false);
                return;
              }
            }
            const obj7 = { username: null };
          }
          cResult[18] = tmp9;
          cResult[19] = tmp18;
          cResult[20] = formatToPlainStringResult1;
        }
      }
      class O {
        constructor() {
          obj = closure_0(closure_2[10]);
          obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_UNIGNORE };
          trackCtaEventResult = obj.trackCtaEvent(obj1);
          obj3 = closure_1(closure_2[11]);
          unignoreUserResult = obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
          tmp3 = closure_3(false);
          return;
        }
      }
      cResult[14] = channelId;
      cResult[15] = senderId;
      cResult[16] = warningId;
      cResult[17] = O;
    }
  }
  class N {
    constructor() {
      obj = closure_0(closure_2[10]);
      obj1 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: closure_0(closure_2[10]).CtaEventTypes.USER_MODAL_IGNORE };
      trackCtaEventResult = obj.trackCtaEvent(obj1);
      obj3 = closure_1(closure_2[11]);
      ignoreUserResult = obj3.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
      tmp3 = closure_3(true);
      return;
    }
  }
  cResult[10] = channelId;
  cResult[11] = senderId;
  cResult[12] = warningId;
  cResult[13] = N;
  tmp19 = N;
  const tmp17 = _slicedToArray(noop.useState(stateFromStoresObject.isIgnored), 2);
}) : (function StrangerDangerMoreTipsModalActionItems(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let isBlocked;
  let items = [isBlocked];
  const items1 = [senderId];
  const stateFromStores = channelId(senderId[8]).useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
  let obj = channelId(senderId[8]);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = channelId(senderId[8]).useStateFromStoresObject(items3, () => ({ isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) }), items4);
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  const callback = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    obj.trackCtaEvent({ channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE });
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE };
    RelationshipActionCreatorsDefault.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  const callback1 = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    obj.trackCtaEvent({ channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE });
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
    RelationshipActionCreatorsDefault.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (first) {
      const obj2 = { username: memo };
      let formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj2);
      let tmp2 = memo;
    } else {
      const obj = { username: null };
      tmp2 = memo;
      obj.username = memo;
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    const obj3 = { title: formatToPlainStringResult, description: null, onClick: null, icon: null, disabled: null };
    let stringResult;
    if (!first) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.naWE6W);
    }
    obj3.description = stringResult;
    obj3.onClick = first ? callback1 : callback;
    if (first) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    obj3.icon = <EyeSlashIcon />;
    obj3.disabled = isBlocked;
    const items = [obj3, ];
    const intl3 = util.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = util.t;
    if (isBlocked) {
      const obj4 = { username: tmp2 };
      let formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj4);
    } else {
      const obj5 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj5);
    }
    const obj6 = { title: formatToPlainString2Result, description: null, onClick: null, icon: null, variant: "danger", disabled: null };
    let stringResult1;
    if (!isBlocked) {
      const intl4 = util.intl;
      stringResult1 = intl4.string(util.t.G08MKu);
    }
    obj6.description = stringResult1;
    obj6.onClick = onBlockPressed;
    obj6.icon = jsx(DenyIcon.DenyIcon, { color: "text-feedback-critical" });
    obj6.disabled = isBlocked;
    items[1] = obj6;
    return items;
  }, items7);
  let obj2 = channelId(senderId[8]);
  return jsx(channelId(senderId[16]).TableRowGroup, {
    hasIcons: true,
    children: memo1.map((item, index) => {
      const obj = { children: null };
      const merged = Object.assign(item);
      obj.children = closure_8(warningId(senderId[17]), {});
      return closure_8(stateFromStores.Fragment, obj, index);
    })
  });
});