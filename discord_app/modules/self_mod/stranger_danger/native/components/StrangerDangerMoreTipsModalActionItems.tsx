// === Module 9819: StrangerDangerMoreTipsModalActionItems ===

// Module 9819 (StrangerDangerMoreTipsModalActionItems)
import Fragment2 from "Fragment" /* 21 */;
import intl5 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6456 */;
import EyeIcon from "EyeIcon" /* 6458 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9786 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9798 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
let jsx = Fragment2.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let senderId;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp9;
  const tmp = channelId;
  let obj = channelId(senderId[7]);
  const cResult = obj.c(47);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(senderId[8]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    let obj3 = warningId(tmp2[9]);
    const name = obj3.getName(stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = name;
    tmp9 = name;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RelationshipStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== senderId) {
    const fn2 = function k() {
      const obj = { isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) };
      return obj;
    };
    const items3 = [senderId];
    cResult[7] = senderId;
    cResult[8] = fn2;
    cResult[9] = items3;
    tmp15 = items3;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult2 = tmp(senderId[8]);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp12, tmp14, tmp15);
  const isBlocked = stateFromStoresObject.isBlocked;
  const tmp17 = _slicedToArray(react.useState(stateFromStoresObject.isIgnored), 2);
  [tmp18, _slicedToArray] = tmp17;
  if (cResult[10] === channelId) {
    if (cResult[11] === senderId) {
      let tmp19;
      if (cResult[12] === warningId) {
        tmp19 = cResult[13];
      }
      if (cResult[14] === channelId) {
        if (cResult[15] === senderId) {
          if (cResult[18] === tmp9) {
            let tmp21;
            let tmp24;
            let tmp26;
            if (cResult[19] === tmp18) {
              tmp21 = cResult[20];
            }
            if (cResult[21] !== tmp18) {
              if (!tmp18) {
                const string = tmp(tmp2[12]).intl.string;
                class O {
                  constructor() {
                    const obj = SafetyWarningUtils;
                    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                    obj.trackCtaEvent(obj2);
                    const obj3 = RelationshipActionCreatorsDefault;
                    obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                    _slicedToArray(false);
                  }
                }
              }
              class O {
                constructor() {
                  const obj = SafetyWarningUtils;
                  const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                  obj.trackCtaEvent(obj2);
                  const obj3 = RelationshipActionCreatorsDefault;
                  obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                  _slicedToArray(false);
                }
              }
              cResult[21] = tmp18;
              cResult[22] = undefined;
              tmp24 = tmp25;
            } else {
              tmp24 = cResult[22];
            }
            class O {
              constructor() {
                const obj = SafetyWarningUtils;
                const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                obj.trackCtaEvent(obj2);
                const obj3 = RelationshipActionCreatorsDefault;
                obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                _slicedToArray(false);
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
                  const obj = SafetyWarningUtils;
                  const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                  obj.trackCtaEvent(obj2);
                  const obj3 = RelationshipActionCreatorsDefault;
                  obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                  _slicedToArray(false);
                }
              }
              cResult[23] = tmp18;
              cResult[24] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[24];
            }
            if (cResult[25] === isBlocked) {
              if (cResult[26] === tmp21) {
                if (cResult[27] === tmp24) {
                  if (cResult[28] === tmp19) {
                    let tmp29;
                    if (cResult[29] === tmp26) {
                      tmp29 = cResult[30];
                    }
                    if (cResult[31] === tmp9) {
                      let tmp30;
                      let tmp33;
                      let tmp35;
                      if (cResult[32] === isBlocked) {
                        tmp30 = cResult[33];
                      }
                      if (cResult[34] !== isBlocked) {
                        if (!isBlocked) {
                          const string2 = tmp(tmp2[12]).intl.string;
                          class O {
                            constructor() {
                              const obj = SafetyWarningUtils;
                              const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                              obj.trackCtaEvent(obj2);
                              const obj3 = RelationshipActionCreatorsDefault;
                              obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                              _slicedToArray(false);
                            }
                          }
                        }
                        class O {
                          constructor() {
                            const obj = SafetyWarningUtils;
                            const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                            obj.trackCtaEvent(obj2);
                            const obj3 = RelationshipActionCreatorsDefault;
                            obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                            _slicedToArray(false);
                          }
                        }
                        cResult[34] = isBlocked;
                        cResult[35] = undefined;
                        tmp33 = tmp34;
                      } else {
                        tmp33 = cResult[35];
                      }
                      class O {
                        constructor() {
                          const obj = SafetyWarningUtils;
                          const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                          obj.trackCtaEvent(obj2);
                          const obj3 = RelationshipActionCreatorsDefault;
                          obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                          _slicedToArray(false);
                        }
                      }
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp37 = jsx(tmp(senderId[15]).DenyIcon, { color: "text-feedback-critical" });
                        class O {
                          constructor() {
                            const obj = SafetyWarningUtils;
                            const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                            obj.trackCtaEvent(obj2);
                            const obj3 = RelationshipActionCreatorsDefault;
                            obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                            _slicedToArray(false);
                          }
                        }
                        cResult[36] = tmp37;
                        tmp35 = tmp37;
                      } else {
                        tmp35 = cResult[36];
                      }
                      if (cResult[37] === isBlocked) {
                        if (cResult[38] === onBlockPressed) {
                          if (cResult[39] === tmp30) {
                            let tmp38;
                            if (cResult[40] === tmp33) {
                              tmp38 = cResult[41];
                            }
                            if (cResult[42] === tmp29) {
                              let arr5;
                              if (cResult[43] === tmp38) {
                                arr5 = cResult[44];
                              }
                              if (cResult[45] !== arr5) {
                                class O {
                                  constructor() {
                                    const obj = SafetyWarningUtils;
                                    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                                    obj.trackCtaEvent(obj2);
                                    const obj3 = RelationshipActionCreatorsDefault;
                                    obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                    _slicedToArray(false);
                                  }
                                }
                                const tmp43 = <tmp42 hasIcons>{arr5.map((item, index) => {
                                  const Fragment = React.Fragment;
                                  warningId(senderId[17]);
                                  const merged = Object.assign(item);
                                  return < key={index}>{null}</>;
                                })}</tmp42>;
                                cResult[45] = arr5;
                                cResult[46] = tmp43;
                              }
                              class O {
                                constructor() {
                                  const obj = SafetyWarningUtils;
                                  const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                                  obj.trackCtaEvent(obj2);
                                  const obj3 = RelationshipActionCreatorsDefault;
                                  obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                  _slicedToArray(false);
                                }
                              }
                            }
                            class O {
                              constructor() {
                                const obj = SafetyWarningUtils;
                                const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                                obj.trackCtaEvent(obj2);
                                const obj3 = RelationshipActionCreatorsDefault;
                                obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                                _slicedToArray(false);
                              }
                            }
                            tmp39[0] = tmp29;
                            tmp39[1] = tmp38;
                            cResult[42] = tmp29;
                            cResult[43] = tmp38;
                            cResult[44] = tmp39;
                            arr5 = tmp39;
                          }
                        }
                      }
                      const obj4 = { title: tmp30, description: tmp33, onClick: onBlockPressed, icon: tmp35, variant: "danger", disabled: isBlocked };
                      cResult[37] = isBlocked;
                      cResult[38] = onBlockPressed;
                      cResult[39] = tmp30;
                      cResult[40] = tmp33;
                      cResult[41] = obj4;
                      tmp38 = obj4;
                    }
                    class O {
                      constructor() {
                        const obj = SafetyWarningUtils;
                        const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                        obj.trackCtaEvent(obj2);
                        const obj3 = RelationshipActionCreatorsDefault;
                        obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                        _slicedToArray(false);
                      }
                    }
                    const formatToPlainString2 = tmp31.formatToPlainString;
                    const t2 = tmp(tmp2[12]).t;
                    if (isBlocked) {
                      class O {
                        constructor() {
                          const obj = SafetyWarningUtils;
                          const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                          obj.trackCtaEvent(obj2);
                          const obj3 = RelationshipActionCreatorsDefault;
                          obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                          _slicedToArray(false);
                        }
                      }
                    } else {
                      class O {
                        constructor() {
                          const obj = SafetyWarningUtils;
                          const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                          obj.trackCtaEvent(obj2);
                          const obj3 = RelationshipActionCreatorsDefault;
                          obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                          _slicedToArray(false);
                        }
                      }
                    }
                    cResult[31] = tmp9;
                    cResult[32] = isBlocked;
                    cResult[33] = tmp32;
                    tmp30 = tmp32;
                  }
                }
              }
            }
            const obj7 = { title: tmp21, description: tmp24, onClick: tmp19, icon: tmp26, disabled: isBlocked };
            cResult[25] = isBlocked;
            cResult[26] = tmp21;
            cResult[27] = tmp24;
            cResult[28] = tmp19;
            cResult[29] = tmp26;
            cResult[30] = obj7;
            tmp29 = obj7;
          }
          class O {
            constructor() {
              const obj = SafetyWarningUtils;
              const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
              obj.trackCtaEvent(obj2);
              const obj3 = RelationshipActionCreatorsDefault;
              obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
              _slicedToArray(false);
            }
          }
          const formatToPlainString = tmp22.formatToPlainString;
          const t = tmp(tmp2[12]).t;
          if (tmp18) {
            class O {
              constructor() {
                const obj = SafetyWarningUtils;
                const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                obj.trackCtaEvent(obj2);
                const obj3 = RelationshipActionCreatorsDefault;
                obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                _slicedToArray(false);
              }
            }
          } else {
            class O {
              constructor() {
                const obj = SafetyWarningUtils;
                const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
                obj.trackCtaEvent(obj2);
                const obj3 = RelationshipActionCreatorsDefault;
                obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
                _slicedToArray(false);
              }
            }
          }
          cResult[18] = tmp9;
          cResult[19] = tmp18;
          cResult[20] = tmp23;
          tmp21 = tmp23;
        }
      }
      class O {
        constructor() {
          const obj = SafetyWarningUtils;
          const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
          obj.trackCtaEvent(obj2);
          const obj3 = RelationshipActionCreatorsDefault;
          obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
          _slicedToArray(false);
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
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE };
      obj.trackCtaEvent(obj2);
      const obj3 = RelationshipActionCreatorsDefault;
      obj3.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
      _slicedToArray(true);
    }
  }
  cResult[10] = channelId;
  cResult[11] = senderId;
  cResult[12] = warningId;
  cResult[13] = N;
  tmp19 = N;
}) : ((channelId) => {
  let closure_8;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let isBlocked;
  let obj = channelId(senderId[8]);
  let items = [isBlocked];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    const obj = UserUtilsDefault;
    return obj.getName(stateFromStores);
  }, items2);
  let obj2 = channelId(senderId[8]);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    const obj = { isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) };
    return obj;
  }, items4);
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  const callback = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE };
    obj.trackCtaEvent(obj2);
    const obj3 = RelationshipActionCreatorsDefault;
    obj3.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  const callback1 = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
    obj.trackCtaEvent(obj2);
    const obj3 = RelationshipActionCreatorsDefault;
    obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    let formatToPlainString2Result;
    let formatToPlainStringResult;
    let stringResult;
    let stringResult1;
    let tmp2;
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl5.t;
    if (first) {
      const obj2 = { username: memo };
      formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj2);
      tmp2 = memo;
    } else {
      tmp2 = memo;
      const obj = { username: memo };
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    const obj3 = { title: formatToPlainStringResult, description: stringResult, onClick: first ? callback1 : callback, icon: null, disabled: isBlocked };
    stringResult = undefined;
    if (!first) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.naWE6W);
    }
    if (first) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    const items = [obj3, ];
    const intl3 = intl5.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = intl5.t;
    if (isBlocked) {
      const obj4 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj4);
    } else {
      const obj5 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj5);
    }
    const obj6 = { title: formatToPlainString2Result, description: stringResult1, onClick: onBlockPressed, icon: null, variant: "danger", disabled: isBlocked };
    stringResult1 = undefined;
    if (!isBlocked) {
      const intl4 = intl5.intl;
      stringResult1 = intl4.string(intl5.t.G08MKu);
    }
    items[1] = obj6;
    return items;
  }, items7);
  const TableRowGroup = channelId(senderId[16]).TableRowGroup;
  return <TableRowGroup hasIcons>{memo1.map((item, index) => {
    let obj2;
    let tmp;
    const Fragment = stateFromStores.Fragment;
    const obj = { children: closure_8(tmp, obj2) };
    obj2 = {};
    tmp = warningId(senderId[17]);
    const merged = Object.assign(item);
    return closure_8(Fragment, obj, index);
  })}</TableRowGroup>;
});
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default tmp2;