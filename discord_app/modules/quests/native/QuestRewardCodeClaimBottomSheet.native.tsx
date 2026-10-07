// === Module 10965: QuestRewardCodeClaimBottomSheet ===

// Module 10965 (QuestRewardCodeClaimBottomSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import _modDef4813 from "module_4813" /* 4813 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10018 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7200 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const REWARD_CODE_PLACEHOLDER = fn(5630).REWARD_CODE_PLACEHOLDER;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  const obj = { wrapper: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, footer: { paddingBottom }, claimingIndicator: { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 }, codeCopyWrapperLoading: { opacity: 0.5 }, redemptionInstructions: { marginBottom: 24 } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = quest(hasError[8]).c(85);
  quest = quest.quest;
  ({ questContent, questContentPosition, sourceQuestContent } = quest);
  const tmp5 = closure_10(rewardCode(hasError[9])().bottom);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== quest.id) {
    const fn = function h() {
      return { rewardCode: QuestStore.getRewardCode(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) };
    };
    cResult[1] = quest.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = quest(hasError[8]);
  const stateFromStoresObject = quest(hasError[10]).useStateFromStoresObject(first, tmp8);
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  if (cResult[3] === isClaimingReward) {
    if (cResult[4] === isFetchingRewardCode) {
      if (cResult[5] === quest) {
        if (cResult[6] === questContent) {
          if (cResult[7] === rewardCode) {
            let tmp10 = cResult[8];
          }
          const claimOrFetchRewardCode = tmp(hasError[11]).useClaimOrFetchRewardCode(tmp10);
          ({ claimCode, fetchCode, hasError } = claimOrFetchRewardCode);
          if (cResult[9] !== hasError) {
            const fn2 = function b() {
              if (hasError) {
                const obj2 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
                const intl = util.intl;
                obj2.content = intl.string(util.t.CKsXk3);
                obj2.icon = _modDef4813;
                ToastActionCreatorsDefault.open(obj2);
                ActionSheetActionCreatorsDefault.hideActionSheet();
              }
            };
            const items1 = [hasError];
            cResult[9] = hasError;
            cResult[10] = fn2;
            cResult[11] = items1;
            let tmp13 = items1;
            let tmp12 = fn2;
          } else {
            tmp12 = cResult[10];
            tmp13 = cResult[11];
          }
          const effect = noop.useEffect(tmp12, tmp13);
          if (cResult[12] !== quest) {
            let obj2 = { quest };
            const result = tmp(hasError[16]).isTieredRewardCodeQuest(obj2);
            cResult[12] = quest;
            cResult[13] = result;
            let tmp16 = result;
            const tmpResult7 = tmp(hasError[16]);
          } else {
            tmp16 = cResult[13];
          }
          if (cResult[14] === tmp16) {
            if (cResult[15] === quest) {
              let tier;
              if (rewardCode != null) {
                tier = rewardCode.tier;
              }
              if (cResult[16] === tier) {
                let redemptionLink = cResult[17];
              }
              let redemptionLink1;
              if (redemptionLink != null) {
                redemptionLink1 = redemptionLink.redemptionLink;
              }
              let redemptionLink2;
              if (null != redemptionLink1) {
                if ("" !== redemptionLink.redemptionLink) {
                  let code;
                  if (rewardCode != null) {
                    code = rewardCode.code;
                  }
                  if (null != code) {
                    if ("" !== rewardCode.code) {
                      if (cResult[18] === rewardCode.code) {
                      }
                      const _encodeURIComponent = encodeURIComponent;
                      const replaced = redemptionLink.redemptionLink.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(rewardCode.code));
                      cResult[18] = rewardCode.code;
                      redemptionLink = redemptionLink.redemptionLink;
                      cResult[19] = redemptionLink;
                      cResult[20] = replaced;
                    }
                  }
                  redemptionLink2 = redemptionLink.redemptionLink;
                }
              }
              if (cResult[21] === claimCode) {
                if (cResult[22] === redemptionLink2) {
                  if (cResult[23] === fetchCode) {
                    if (cResult[24] === hasError) {
                      if (cResult[25] === quest) {
                        if (cResult[26] === questContent) {
                          if (cResult[27] === questContentPosition) {
                            if (cResult[28] === sourceQuestContent) {
                              let tmp34 = cResult[29];
                            }
                            const claimRewardCodePrimaryCtaClickHandler = tmp(hasError[11]).useClaimRewardCodePrimaryCtaClickHandler(tmp34);
                            if (cResult[30] !== rewardCode) {
                              const fn3 = function j() {
                                if (null != rewardCode) {
                                  ClipboardUtils.copy(tmp.code, () => {
                                    const designSystemsNotificationComponents = quest(4580).getDesignSystemsNotificationComponents("QuestRewardCodeClaimBottomSheet");
                                    const obj2 = rewardCode(4574);
                                    if (designSystemsNotificationComponents) {
                                      const obj3 = { text: null, icon: null };
                                      const intl2 = quest(1126).intl;
                                      obj3.text = intl2.string(quest(1126).t.MSaeTe);
                                      obj3.icon = quest(4849).CopyIcon;
                                      obj2.openMana("TOAST_QUEST_REWARD_CODE_COPIED", obj3);
                                    } else {
                                      const obj4 = { key: "TOAST_QUEST_REWARD_CODE_COPIED", content: null, icon: null };
                                      const intl = quest(1126).intl;
                                      obj4.content = intl.string(quest(1126).t.MSaeTe);
                                      obj4.icon = function icon() {
                                        return closure_1_8(closure_1_0(dependencyMap[19]).CopyIcon, {});
                                      };
                                      obj2.open(obj4);
                                    }
                                    const obj = quest(4580);
                                  });
                                }
                              };
                              cResult[30] = rewardCode;
                              cResult[31] = fn3;
                              let tmp36 = fn3;
                            } else {
                              tmp36 = cResult[31];
                            }
                            if (cResult[32] === isClaimingReward) {
                              if (cResult[33] === isFetchingRewardCode) {
                                if (cResult[34] === quest) {
                                  if (cResult[35] === rewardCode) {
                                    if (cResult[36] === tmp5.redemptionInstructions) {
                                      if (cResult[37] === tmp5.wrapper) {
                                        let tmp37 = cResult[38];
                                        let tmp38 = cResult[39];
                                        let tmp39 = cResult[40];
                                        let tmp40 = cResult[41];
                                        let tmp41 = cResult[42];
                                        let tmp42 = cResult[43];
                                        let tmp43 = cResult[44];
                                        let flag = cResult[45];
                                      }
                                      let code1;
                                      if (rewardCode != null) {
                                        code1 = rewardCode.code;
                                      }
                                      let code2;
                                      if (rewardCode != null) {
                                        code2 = rewardCode.code;
                                      }
                                      let code3;
                                      if (rewardCode != null) {
                                        code3 = rewardCode.code;
                                      }
                                      if (cResult[47] !== code3) {
                                        let code4;
                                        if (rewardCode != null) {
                                          code4 = rewardCode.code;
                                        }
                                        let tmp59 = null != code4;
                                        if (tmp59) {
                                          let obj3 = { IconComponent: tmp(hasError[19]).CopyIcon };
                                          tmp59 = closure_8(tmp(hasError[25]).TableRow.Icon, obj3);
                                        }
                                        let code5;
                                        if (rewardCode != null) {
                                          code5 = rewardCode.code;
                                        }
                                        cResult[47] = code5;
                                        cResult[48] = tmp59;
                                        let tmp57 = tmp59;
                                      } else {
                                        tmp57 = cResult[48];
                                      }
                                      let code6;
                                      if (rewardCode != null) {
                                        code6 = rewardCode.code;
                                      }
                                      let tmp63;
                                      if (null != code6) {
                                        tmp63 = tmp36;
                                      }
                                      if (cResult[49] === code2) {
                                        if (cResult[50] === tmp57) {
                                          if (cResult[51] === tmp63) {
                                            let tmp64 = cResult[52];
                                          }
                                          if (cResult[53] === tmp54) {
                                            if (cResult[54] === tmp64) {
                                              let tmp67 = cResult[55];
                                            }
                                            let code7;
                                            if (rewardCode != null) {
                                              code7 = rewardCode.code;
                                            }
                                            if (cResult[56] === code7) {
                                              if (cResult[57] === tmp5.claimingIndicator) {
                                                let tmp72 = cResult[58];
                                              }
                                              if (cResult[59] === tmp67) {
                                                if (cResult[60] === tmp72) {
                                                  let tmp78 = cResult[61];
                                                }
                                                if (cResult[62] === tmp37) {
                                                  if (cResult[63] === tmp41) {
                                                    if (cResult[64] === tmp78) {
                                                      let tmp82 = cResult[65];
                                                    }
                                                    if (cResult[66] !== redemptionLink2) {
                                                      if (null == redemptionLink2) {
                                                        let intl2 = tmp(hasError[13]).intl;
                                                        let stringResult = intl2.string(tmp(hasError[13]).t["23SS+z"]);
                                                        cResult[66] = redemptionLink2;
                                                        cResult[67] = stringResult;
                                                      }
                                                      const intl3 = tmp(hasError[13]).intl;
                                                      stringResult = intl3.string(tmp(hasError[13]).t["+zx47d"]);
                                                    } else {
                                                      if (cResult[68] === claimRewardCodePrimaryCtaClickHandler) {
                                                        if (cResult[69] === tmp40) {
                                                          if (cResult[70] === tmp85) {
                                                            let tmp88 = cResult[71];
                                                          }
                                                          if (cResult[72] === tmp5.footer) {
                                                            if (cResult[73] === tmp88) {
                                                              let tmp91 = cResult[74];
                                                            }
                                                            if (cResult[75] === tmp38) {
                                                              if (cResult[76] === tmp42) {
                                                                if (cResult[77] === tmp82) {
                                                                  if (cResult[78] === tmp91) {
                                                                    let tmp95 = cResult[79];
                                                                  }
                                                                  if (cResult[80] === tmp39) {
                                                                    if (cResult[81] === tmp43) {
                                                                      if (cResult[82] === flag) {
                                                                        if (cResult[83] === tmp95) {
                                                                          let tmp98 = cResult[84];
                                                                        }
                                                                        return tmp98;
                                                                      }
                                                                    }
                                                                  }
                                                                  let obj4 = { header: tmp43, startExpanded: flag, children: tmp95 };
                                                                  const tmp100 = closure_8(tmp39, obj4);
                                                                  cResult[80] = tmp39;
                                                                  cResult[81] = tmp43;
                                                                  cResult[82] = flag;
                                                                  cResult[83] = tmp95;
                                                                  cResult[84] = tmp100;
                                                                  tmp98 = tmp100;
                                                                }
                                                              }
                                                            }
                                                            const obj5 = { style: tmp42, children: null };
                                                            const items2 = [tmp82, tmp91];
                                                            obj5.children = items2;
                                                            const tmp97 = closure_9(tmp38, obj5);
                                                            cResult[75] = tmp38;
                                                            cResult[76] = tmp42;
                                                            cResult[77] = tmp82;
                                                            cResult[78] = tmp91;
                                                            cResult[79] = tmp97;
                                                            tmp95 = tmp97;
                                                          }
                                                          const obj6 = { style: tmp5.footer, children: tmp88 };
                                                          const tmp94 = closure_8(closure_5, obj6);
                                                          cResult[72] = tmp5.footer;
                                                          cResult[73] = tmp88;
                                                          cResult[74] = tmp94;
                                                          tmp91 = tmp94;
                                                        }
                                                      }
                                                      const obj7 = { disabled: tmp40, onPress: claimRewardCodePrimaryCtaClickHandler, grow: true, text: cResult[67] };
                                                      const tmp90 = closure_8(tmp(hasError[27]).Button, obj7);
                                                      cResult[68] = claimRewardCodePrimaryCtaClickHandler;
                                                      cResult[69] = tmp40;
                                                      cResult[70] = cResult[67];
                                                      cResult[71] = tmp90;
                                                      tmp88 = tmp90;
                                                    }
                                                  }
                                                }
                                                const obj8 = { children: null };
                                                const items3 = [tmp41, tmp78];
                                                obj8.children = items3;
                                                const tmp84 = closure_9(tmp37, obj8);
                                                cResult[62] = tmp37;
                                                cResult[63] = tmp41;
                                                cResult[64] = tmp78;
                                                cResult[65] = tmp84;
                                                tmp82 = tmp84;
                                              }
                                              const obj9 = { children: null };
                                              const items4 = [tmp67, tmp72];
                                              obj9.children = items4;
                                              const tmp81 = closure_9(closure_5, obj9);
                                              cResult[59] = tmp67;
                                              cResult[60] = tmp72;
                                              cResult[61] = tmp81;
                                              tmp78 = tmp81;
                                            }
                                            let code8;
                                            if (rewardCode != null) {
                                              code8 = rewardCode.code;
                                            }
                                            let tmp74 = null == code8;
                                            if (tmp74) {
                                              const obj10 = { style: tmp5.claimingIndicator, size: 24 };
                                              tmp74 = closure_8(closure_4, obj10);
                                            }
                                            let code9;
                                            if (rewardCode != null) {
                                              code9 = rewardCode.code;
                                            }
                                            cResult[56] = code9;
                                            cResult[57] = tmp5.claimingIndicator;
                                            cResult[58] = tmp74;
                                            tmp72 = tmp74;
                                          }
                                          const obj11 = { style: tmp54, children: tmp64 };
                                          const tmp70 = closure_8(closure_5, obj11);
                                          cResult[53] = tmp54;
                                          cResult[54] = tmp64;
                                          cResult[55] = tmp70;
                                          tmp67 = tmp70;
                                        }
                                      }
                                      const obj12 = { hasIcons: false, children: null };
                                      const obj13 = { label: code2, trailing: tmp57, onPress: tmp63 };
                                      obj12.children = closure_8(tmp(hasError[25]).TableRow, obj13);
                                      const tmp66 = closure_8(tmp(hasError[26]).TableRowGroup, obj12);
                                      cResult[49] = code2;
                                      cResult[50] = tmp57;
                                      cResult[51] = tmp63;
                                      cResult[52] = tmp66;
                                      tmp64 = tmp66;
                                    }
                                  }
                                }
                              }
                            }
                            const tmpResult8 = tmp(hasError[11]);
                            const obj14 = { quest, rewardCode };
                            const rewardCodeRedemptionInstructions = tmp(hasError[20]).getRewardCodeRedemptionInstructions(obj14);
                            let tmp45 = isFetchingRewardCode;
                            if (!isFetchingRewardCode) {
                              tmp45 = isClaimingReward;
                            }
                            if (!tmp45) {
                              let code10;
                              if (rewardCode != null) {
                                code10 = rewardCode.code;
                              }
                              tmp45 = null == code10;
                            }
                            BottomSheet = tmp(hasError[21]).BottomSheet;
                            const _Symbol = Symbol;
                            if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj15 = { title: null };
                              let intl = tmp(hasError[13]).intl;
                              obj15.title = intl.string(tmp(hasError[13]).t.srzsU2);
                              const tmp49 = closure_8(tmp(hasError[22]).BottomSheetTitleHeader, obj15);
                              cResult[46] = tmp49;
                              let tmp47 = tmp49;
                            } else {
                              tmp47 = cResult[46];
                            }
                            const wrapper = tmp5.wrapper;
                            let tmp51 = null != rewardCode && null != rewardCodeRedemptionInstructions;
                            if (tmp51) {
                              const obj16 = { style: tmp5.redemptionInstructions, variant: "text-md/normal", color: "text-default", children: tmp4(hasError[24]).parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }) };
                              tmp51 = closure_8(tmp(hasError[23]).Text, obj16);
                              const tmp4Result = tmp4(hasError[24]);
                            }
                            cResult[32] = isClaimingReward;
                            cResult[33] = isFetchingRewardCode;
                            cResult[34] = quest;
                            cResult[35] = rewardCode;
                            cResult[36] = tmp5.redemptionInstructions;
                            cResult[37] = tmp5.wrapper;
                            cResult[38] = closure_5;
                            cResult[39] = closure_5;
                            cResult[40] = BottomSheet;
                            cResult[41] = tmp45;
                            cResult[42] = tmp51;
                            cResult[43] = wrapper;
                            cResult[44] = tmp47;
                            cResult[45] = true;
                            tmp41 = tmp51;
                            flag = true;
                            tmp43 = tmp47;
                            tmp42 = wrapper;
                            tmp40 = tmp45;
                            tmp39 = BottomSheet;
                            tmp38 = closure_5;
                            tmp37 = closure_5;
                            const tmpResult9 = tmp(hasError[20]);
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj17 = { claimCode, fetchCode, hasError, onDismiss: tmp4(hasError[15]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: redemptionLink2, sourceQuestContent };
              cResult[21] = claimCode;
              cResult[22] = redemptionLink2;
              cResult[23] = fetchCode;
              cResult[24] = hasError;
              cResult[25] = quest;
              cResult[26] = questContent;
              cResult[27] = questContentPosition;
              cResult[28] = sourceQuestContent;
              cResult[29] = obj17;
              tmp34 = obj17;
            }
          }
          const tmpResult6 = tmp(hasError[11]);
          const getRewardCodeQuestReward = tmp(hasError[16]).getRewardCodeQuestReward;
          if (tmp16) {
            const obj18 = { quest, idx: null };
            let tier1;
            if (rewardCode != null) {
              tier1 = rewardCode.tier;
            }
            obj18.idx = tier1;
            let rewardCodeQuestReward = getRewardCodeQuestReward(obj18);
          } else {
            const obj19 = { quest, idx: 0 };
            rewardCodeQuestReward = getRewardCodeQuestReward(obj19);
          }
          cResult[14] = tmp16;
          cResult[15] = quest;
          let tier2;
          if (rewardCode != null) {
            tier2 = rewardCode.tier;
          }
          cResult[16] = tier2;
          cResult[17] = rewardCodeQuestReward;
          redemptionLink = rewardCodeQuestReward;
          const tmpResult10 = tmp(hasError[16]);
        }
      }
    }
  }
  const obj20 = { isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode };
  cResult[3] = isClaimingReward;
  cResult[4] = isFetchingRewardCode;
  cResult[5] = quest;
  cResult[6] = questContent;
  cResult[7] = rewardCode;
  cResult[8] = obj20;
  tmp10 = obj20;
  const tmpResult = quest(hasError[10]);
}) : ((quest) => {
  quest = quest.quest;
  const questContent = quest.questContent;
  let rewardCode;
  let hasError;
  noop = undefined;
  let memo;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp3 = closure_10(rewardCode(hasError[9])().bottom);
  const items = [QuestStore];
  const stateFromStoresObject = quest(hasError[10]).useStateFromStoresObject(items, () => ({ rewardCode: QuestStore.getRewardCode(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) }));
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj = quest(hasError[10]);
  const claimOrFetchRewardCode = quest(hasError[11]).useClaimOrFetchRewardCode({ isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode });
  hasError = claimOrFetchRewardCode.hasError;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = noop.useEffect(() => {
    if (hasError) {
      const obj2 = { key: "CLAIM_QUEST_REWARD_ERROR", content: null, icon: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.CKsXk3);
      obj2.icon = _modDef4813;
      ToastActionCreatorsDefault.open(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  let obj2 = quest(hasError[11]);
  const result = quest(hasError[16]).isTieredRewardCodeQuest({ quest });
  noop = result;
  const items2 = [result, quest, ];
  let tier;
  if (rewardCode != null) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = noop.useMemo(() => {
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    if (c3) {
      const obj2 = { quest, idx: null };
      let tier;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      obj2.idx = tier;
      let rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
    } else {
      const obj = { quest, idx: 0 };
      rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    }
    return rewardCodeQuestReward;
  }, items2);
  const items3 = [memo, rewardCode];
  const memo1 = obj3.useMemo(() => {
    let redemptionLink1;
    if (memo != null) {
      redemptionLink1 = memo.redemptionLink;
    }
    if (null != redemptionLink1) {
      if ("" !== memo.redemptionLink) {
        let code;
        if (rewardCode != null) {
          code = rewardCode.code;
        }
        if (null != code) {
          if ("" !== rewardCode.code) {
            const _encodeURIComponent = encodeURIComponent;
            let redemptionLink = memo.redemptionLink.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(rewardCode.code));
          }
          return redemptionLink;
        }
        redemptionLink = memo.redemptionLink;
      }
    }
  }, items3);
  let obj4 = quest(hasError[16]);
  const tmp4Result = quest(hasError[11]);
  const items4 = [rewardCode];
  const obj5 = { claimCode, fetchCode, hasError, onDismiss: rewardCode(hasError[15]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const callback = obj3.useCallback(() => {
    if (null != rewardCode) {
      ClipboardUtils.copy(tmp.code, () => {
        const designSystemsNotificationComponents = quest(4580).getDesignSystemsNotificationComponents("QuestRewardCodeClaimBottomSheet");
        const obj2 = rewardCode(4574);
        if (designSystemsNotificationComponents) {
          const obj3 = { text: null, icon: null };
          const intl2 = quest(1126).intl;
          obj3.text = intl2.string(quest(1126).t.MSaeTe);
          obj3.icon = quest(4849).CopyIcon;
          obj2.openMana("TOAST_QUEST_REWARD_CODE_COPIED", obj3);
        } else {
          const obj4 = { key: "TOAST_QUEST_REWARD_CODE_COPIED", content: null, icon: null };
          const intl = quest(1126).intl;
          obj4.content = intl.string(quest(1126).t.MSaeTe);
          obj4.icon = function icon() {
            return closure_1_8(closure_1_0(dependencyMap[19]).CopyIcon, {});
          };
          obj2.open(obj4);
        }
        const obj = quest(4580);
      });
    }
  }, items4);
  const claimRewardCodePrimaryCtaClickHandler = tmp4Result.useClaimRewardCodePrimaryCtaClickHandler({ claimCode, fetchCode, hasError, onDismiss: rewardCode(hasError[15]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent });
  const rewardCodeRedemptionInstructions = quest(hasError[20]).getRewardCodeRedemptionInstructions({ quest, rewardCode });
  if (!isFetchingRewardCode) {
    isFetchingRewardCode = isClaimingReward;
  }
  if (!isFetchingRewardCode) {
    let code;
    if (rewardCode != null) {
      code = rewardCode.code;
    }
    isFetchingRewardCode = null == code;
  }
  const obj6 = { header: null, startExpanded: true, children: null };
  const obj7 = { title: null };
  let intl = tmp4(tmp2[13]).intl;
  obj7.title = intl.string(quest(hasError[13]).t.srzsU2);
  obj6.header = closure_8(quest(hasError[22]).BottomSheetTitleHeader, obj7);
  const obj8 = { style: tmp3.wrapper, children: null };
  let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
  if (tmp16Result) {
    const obj9 = { style: tmp3.redemptionInstructions, variant: "text-md/normal", color: "text-default", children: tmp(tmp2[24]).parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }) };
    tmp16Result = closure_8(tmp4(tmp2[23]).Text, obj9);
    const tmpResult = tmp(tmp2[24]);
  }
  const items5 = [tmp16Result, ];
  let code1;
  if (rewardCode != null) {
    code1 = rewardCode.code;
  }
  const obj10 = { style: null == code1 && tmp3.codeCopyWrapperLoading, children: null };
  let code2;
  if (rewardCode != null) {
    code2 = rewardCode.code;
  }
  const obj11 = { label: code2, trailing: null, onPress: null };
  let code3;
  if (rewardCode != null) {
    code3 = rewardCode.code;
  }
  let tmp16Result3 = null != code3;
  if (tmp16Result3) {
    const obj12 = { IconComponent: tmp4(tmp2[19]).CopyIcon };
    tmp16Result3 = closure_8(tmp4(tmp2[25]).TableRow.Icon, obj12);
  }
  obj11.trailing = tmp16Result3;
  let code4;
  if (rewardCode != null) {
    code4 = rewardCode.code;
  }
  let tmp26;
  if (null != code4) {
    tmp26 = callback;
  }
  const tmp21 = null == code1 && tmp3.codeCopyWrapperLoading;
  const tmp4Result2 = quest(hasError[20]);
  obj11.onPress = tmp26;
  obj10.children = closure_8(quest(hasError[26]).TableRowGroup, { hasIcons: false, children: closure_8(quest(hasError[25]).TableRow, obj11) });
  const items6 = [closure_8(closure_5, obj10), ];
  let code5;
  if (rewardCode != null) {
    code5 = rewardCode.code;
  }
  let tmp16Result4 = null == code5;
  if (tmp16Result4) {
    const obj14 = { style: tmp3.claimingIndicator, size: 24 };
    tmp16Result4 = closure_8(memo, obj14);
  }
  const obj15 = { children: null };
  items6[1] = tmp16Result4;
  items5[1] = closure_9(closure_5, { children: items6 });
  obj15.children = items5;
  const items7 = [closure_9(closure_5, obj15), ];
  const obj16 = { style: tmp3.footer, children: null };
  const obj17 = { disabled: isFetchingRewardCode, onPress: claimRewardCodePrimaryCtaClickHandler, grow: true, text: null };
  if (null != memo1) {
    if ("" !== memo1) {
      const intl3 = tmp4(tmp2[13]).intl;
      let stringResult = intl3.string(tmp4(tmp2[13]).t["+zx47d"]);
    }
    obj17.text = stringResult;
    obj16.children = closure_8(tmp30, obj17);
    items7[1] = closure_8(closure_5, obj16);
    obj8.children = items7;
    obj6.children = closure_9(closure_5, obj8);
    return closure_8(tmp4(tmp2[21]).BottomSheet, obj6);
  }
  let intl2 = tmp4(tmp2[13]).intl;
  stringResult = intl2.string(tmp4(tmp2[13]).t["23SS+z"]);
  const obj13 = { hasIcons: false, children: closure_8(quest(hasError[25]).TableRow, obj11) };
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  const cResult = questId(questContentPosition[8]).c(14);
  questId = questId.questId;
  const questContent = questId.questContent;
  questContentPosition = questId.questContentPosition;
  const sourceQuestContent = questId.sourceQuestContent;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questId) {
    const fn = function n() {
      return QuestStore.getQuest(questId);
    };
    cResult[1] = questId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = questId(questContentPosition[8]);
  const stateFromStores = questId(questContentPosition[10]).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    questContent(tmp2[15]).hideActionSheet();
    let tmp9 = null;
    const obj4 = questContent(tmp2[15]);
  } else {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === questContent) {
        if (cResult[5] === questContentPosition) {
          if (cResult[6] === sourceQuestContent) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === questContent) {
              if (cResult[10] === questContentPosition) {
                if (cResult[11] === sourceQuestContent) {
                  if (cResult[12] === tmp8) {
                    tmp9 = cResult[13];
                  }
                }
              }
            }
          }
          const obj2 = { overrideVisibility: true, questOrQuests: stateFromStores, questContent, questContentPosition, sourceQuestContent, children: tmp8 };
          const tmp11 = closure_8(tmp(tmp2[28]).QuestContentImpressionTrackerNative, obj2);
          cResult[8] = stateFromStores;
          cResult[9] = questContent;
          cResult[10] = questContentPosition;
          cResult[11] = sourceQuestContent;
          cResult[12] = tmp8;
          cResult[13] = tmp11;
          tmp9 = tmp11;
        }
      }
    }
    const fn2 = function w() {
      return closure_2_8(closure_11, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
    };
    cResult[3] = stateFromStores;
    cResult[4] = questContent;
    cResult[5] = questContentPosition;
    cResult[6] = sourceQuestContent;
    cResult[7] = fn2;
    tmp8 = fn2;
  }
  return tmp9;
}) : ((questContentPosition) => {
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(require));
  if (null == stateFromStores) {
    questContent(tmp2[15]).hideActionSheet();
    let tmp5 = null;
    const obj3 = questContent(tmp2[15]);
  } else {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
          return closure_2_8(closure_11, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
        }
    };
    tmp5 = closure_8(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj2);
  }
  return tmp5;
});