// discord_app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04813_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestConstants from "../QuestConstants.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import QuestStore from "../QuestStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, quest, questId;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const REWARD_CODE_PLACEHOLDER = QuestConstants.REWARD_CODE_PLACEHOLDER;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  let obj3;
  const obj = {
    wrapper: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
    footer: obj3,
    claimingIndicator: { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 },
    codeCopyWrapperLoading: { opacity: 0.5 },
    redemptionInstructions: { marginBottom: 24 },
  };
  obj3 = { paddingBottom };
  ({ display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let claimCode;
      let fetchCode;
      let first;
      let hasError;
      let intl;
      let isClaimingReward;
      let isFetchingRewardCode;
      let items2;
      let items3;
      let items4;
      let obj13;
      let questContent;
      let questContentPosition;
      let rewardCode;
      let sourceQuestContent;
      let tier1;
      let tmp4Result;
      let tmp8;
      const tmp = quest;
      let obj = quest(hasError[8]);
      const cResult = obj.c(85);
      quest = quest.quest;
      ({ questContent, questContentPosition, sourceQuestContent } = quest);
      let tmp4 = rewardCode;
      const tmp5 = closure_10(rewardCode(hasError[9])().bottom);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== quest.id) {
        const fn = function h() {
          const obj = {
            rewardCode: QuestStore.getRewardCode(quest.id),
            isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
            isClaimingReward: QuestStore.isClaimingReward(quest.id),
          };
          return obj;
        };
        cResult[1] = quest.id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(hasError[10]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
      rewardCode = stateFromStoresObject.rewardCode;
      ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
      if (cResult[3] === isClaimingReward) {
        if (cResult[4] === isFetchingRewardCode) {
          if (cResult[5] === quest) {
            if (cResult[6] === questContent) {
              let tmp10;
              let tmp13;
              let tmp12;
              let tmp16;
              let rewardCodeQuestReward;
              if (cResult[7] === rewardCode) {
                tmp10 = cResult[8];
              }
              const tmpResult6 = tmp(hasError[11]);
              const claimOrFetchRewardCode = tmpResult6.useClaimOrFetchRewardCode(tmp10);
              ({ claimCode, fetchCode, hasError } = claimOrFetchRewardCode);
              if (cResult[9] !== hasError) {
                const fn2 = function b() {
                  let intl;
                  if (hasError) {
                    const obj = {
                      key: "CLAIM_QUEST_REWARD_ERROR",
                      content: intl.string(intl4.t.CKsXk3),
                      icon: AssetRegistryDefault,
                    };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl4.intl;
                    open(obj);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet();
                  }
                };
                const items1 = [hasError];
                cResult[9] = hasError;
                cResult[10] = fn2;
                cResult[11] = items1;
                tmp13 = items1;
                tmp12 = fn2;
              } else {
                tmp12 = cResult[10];
                tmp13 = cResult[11];
              }
              const effect = react.useEffect(tmp12, tmp13);
              if (cResult[12] !== quest) {
                let obj2 = { quest };
                const tmpResult7 = tmp(hasError[16]);
                const result = tmpResult7.isTieredRewardCodeQuest(obj2);
                cResult[12] = quest;
                cResult[13] = result;
                tmp16 = result;
              } else {
                tmp16 = cResult[13];
              }
              if (cResult[14] === tmp16) {
                if (cResult[15] === quest) {
                  let tmp21;
                  let tier;
                  const tmp18 = cResult[16];
                  if (rewardCode != null) {
                    tier = rewardCode.tier;
                  }
                  if (tmp18 === tier) {
                    tmp21 = cResult[17];
                  }
                  let redemptionLink;
                  if (tmp21 != null) {
                    redemptionLink = tmp21.redemptionLink;
                  }
                  let redemptionLink1;
                  if (null != redemptionLink) {
                    if ("" !== tmp21.redemptionLink) {
                      let code;
                      if (rewardCode != null) {
                        code = rewardCode.code;
                      }
                      if (null != code) {
                        if ("" !== rewardCode.code) {
                          if (cResult[18] === rewardCode.code) {
                            let tmp32;
                            if (cResult[19] === tmp21.redemptionLink) {
                              tmp32 = cResult[20];
                            }
                            redemptionLink1 = tmp32;
                          }
                          const _encodeURIComponent = encodeURIComponent;
                          const str2 = tmp21.redemptionLink;
                          const replaced = str2.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(rewardCode.code));
                          cResult[18] = rewardCode.code;
                          cResult[19] = tmp21.redemptionLink;
                          cResult[20] = replaced;
                          tmp32 = replaced;
                        }
                      }
                      redemptionLink1 = tmp21.redemptionLink;
                    }
                  }
                  if (cResult[21] === claimCode) {
                    if (cResult[22] === redemptionLink1) {
                      if (cResult[23] === fetchCode) {
                        if (cResult[24] === hasError) {
                          if (cResult[25] === quest) {
                            if (cResult[26] === questContent) {
                              if (cResult[27] === questContentPosition) {
                                let tmp35;
                                let tmp37;
                                let tmp48;
                                if (cResult[28] === sourceQuestContent) {
                                  tmp35 = cResult[29];
                                }
                                const tmpResult8 = tmp(hasError[11]);
                                const claimRewardCodePrimaryCtaClickHandler =
                                  tmpResult8.useClaimRewardCodePrimaryCtaClickHandler(tmp35);
                                if (cResult[30] !== rewardCode) {
                                  const fn3 = function j() {
                                    if (null != rewardCode) {
                                      let obj = ClipboardUtils;
                                      obj.copy(tmp.code, () => {
                                        let intl;
                                        let intl2;
                                        const obj = quest(hasError[18]);
                                        const designSystemsNotificationComponents =
                                          obj.getDesignSystemsNotificationComponents("QuestRewardCodeClaimBottomSheet");
                                        const tmp4 = rewardCode(hasError[12]);
                                        if (designSystemsNotificationComponents) {
                                          const openMana = tmp4.openMana;
                                          const obj2 = {
                                            text: intl2.string(quest(hasError[13]).t.MSaeTe),
                                            icon: quest(hasError[19]).CopyIcon,
                                          };
                                          intl2 = quest(hasError[13]).intl;
                                          openMana("TOAST_QUEST_REWARD_CODE_COPIED", obj2);
                                        } else {
                                          const open = tmp4.open;
                                          const obj3 = {
                                            key: "TOAST_QUEST_REWARD_CODE_COPIED",
                                            content: intl.string(quest(hasError[13]).t.MSaeTe),
                                            icon() {
                                              return closure_1_8(closure_1_0(closure_1_2[19]).CopyIcon, {});
                                            },
                                          };
                                          intl = quest(hasError[13]).intl;
                                          open(obj3);
                                        }
                                      });
                                    }
                                  };
                                  cResult[30] = rewardCode;
                                  cResult[31] = fn3;
                                  tmp37 = fn3;
                                } else {
                                  tmp37 = cResult[31];
                                }
                                if (cResult[32] === isClaimingReward) {
                                  if (cResult[33] === isFetchingRewardCode) {
                                    if (cResult[34] === quest) {
                                      if (cResult[35] === rewardCode) {
                                        if (cResult[36] === tmp5.redemptionInstructions) {
                                          let tmp38;
                                          let tmp39;
                                          let tmp40;
                                          let tmp41;
                                          let tmp42;
                                          let tmp43;
                                          let tmp44;
                                          let flag;
                                          let tmp59;
                                          if (cResult[37] === tmp5.wrapper) {
                                            tmp38 = cResult[38];
                                            tmp39 = cResult[39];
                                            tmp40 = cResult[40];
                                            tmp41 = cResult[41];
                                            tmp42 = cResult[42];
                                            tmp43 = cResult[43];
                                            tmp44 = cResult[44];
                                            flag = cResult[45];
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
                                          const tmp57 = cResult[47];
                                          if (rewardCode != null) {
                                            code3 = rewardCode.code;
                                          }
                                          if (tmp57 !== code3) {
                                            let code4;
                                            if (rewardCode != null) {
                                              code4 = rewardCode.code;
                                            }
                                            let tmp61 = null != code4;
                                            if (tmp61) {
                                              let obj3 = { IconComponent: tmp(hasError[19]).CopyIcon };
                                              const Icon = tmp(hasError[25]).TableRow.Icon;
                                              tmp61 = closure_8(Icon, obj3);
                                            }
                                            let code5;
                                            if (rewardCode != null) {
                                              code5 = rewardCode.code;
                                            }
                                            cResult[47] = code5;
                                            cResult[48] = tmp61;
                                            tmp59 = tmp61;
                                          } else {
                                            tmp59 = cResult[48];
                                          }
                                          let code6;
                                          if (rewardCode != null) {
                                            code6 = rewardCode.code;
                                          }
                                          let tmp65;
                                          if (null != code6) {
                                            tmp65 = tmp37;
                                          }
                                          if (cResult[49] === code2) {
                                            if (cResult[50] === tmp59) {
                                              let tmp66;
                                              if (cResult[51] === tmp65) {
                                                tmp66 = cResult[52];
                                              }
                                              if (cResult[53] === (null == code1 && tmp5.codeCopyWrapperLoading)) {
                                                let tmp69;
                                                if (cResult[54] === tmp66) {
                                                  tmp69 = cResult[55];
                                                }
                                                let code7;
                                                const tmp73 = cResult[56];
                                                if (rewardCode != null) {
                                                  code7 = rewardCode.code;
                                                }
                                                if (tmp73 === code7) {
                                                  let tmp75;
                                                  if (cResult[57] === tmp5.claimingIndicator) {
                                                    tmp75 = cResult[58];
                                                  }
                                                  if (cResult[59] === tmp69) {
                                                    let tmp81;
                                                    if (cResult[60] === tmp75) {
                                                      tmp81 = cResult[61];
                                                    }
                                                    if (cResult[62] === tmp38) {
                                                      if (cResult[63] === tmp42) {
                                                        let tmp85;
                                                        let tmp88;
                                                        if (cResult[64] === tmp81) {
                                                          tmp85 = cResult[65];
                                                        }
                                                        if (cResult[66] !== redemptionLink1) {
                                                          if (null != redemptionLink1) {
                                                            let stringResult;
                                                            if ("" !== redemptionLink1) {
                                                              const intl3 = tmp(hasError[13]).intl;
                                                              stringResult = intl3.string(
                                                                tmp(hasError[13]).t["+zx47d"],
                                                              );
                                                            }
                                                            cResult[66] = redemptionLink1;
                                                            cResult[67] = stringResult;
                                                            tmp88 = stringResult;
                                                          }
                                                          let intl2 = tmp(hasError[13]).intl;
                                                          stringResult = intl2.string(tmp(hasError[13]).t["23SS+z"]);
                                                        } else {
                                                          tmp88 = cResult[67];
                                                        }
                                                        if (cResult[68] === claimRewardCodePrimaryCtaClickHandler) {
                                                          if (cResult[69] === tmp41) {
                                                            let tmp90;
                                                            if (cResult[70] === tmp88) {
                                                              tmp90 = cResult[71];
                                                            }
                                                            if (cResult[72] === tmp5.footer) {
                                                              let tmp93;
                                                              if (cResult[73] === tmp90) {
                                                                tmp93 = cResult[74];
                                                              }
                                                              if (cResult[75] === tmp39) {
                                                                if (cResult[76] === tmp43) {
                                                                  if (cResult[77] === tmp85) {
                                                                    let tmp97;
                                                                    if (cResult[78] === tmp93) {
                                                                      tmp97 = cResult[79];
                                                                    }
                                                                    if (cResult[80] === tmp40) {
                                                                      if (cResult[81] === tmp44) {
                                                                        if (cResult[82] === flag) {
                                                                          let tmp100;
                                                                          if (cResult[83] === tmp97) {
                                                                            tmp100 = cResult[84];
                                                                          }
                                                                          return tmp100;
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj4 = {
                                                                      header: tmp44,
                                                                      startExpanded: flag,
                                                                      children: tmp97,
                                                                    };
                                                                    const tmp102 = closure_8(tmp40, obj4);
                                                                    cResult[80] = tmp40;
                                                                    cResult[81] = tmp44;
                                                                    cResult[82] = flag;
                                                                    cResult[83] = tmp97;
                                                                    cResult[84] = tmp102;
                                                                    tmp100 = tmp102;
                                                                  }
                                                                }
                                                              }
                                                              const obj5 = { style: tmp43, children: items2 };
                                                              items2 = [tmp85, tmp93];
                                                              const tmp99 = closure_9(tmp39, obj5);
                                                              cResult[75] = tmp39;
                                                              cResult[76] = tmp43;
                                                              cResult[77] = tmp85;
                                                              cResult[78] = tmp93;
                                                              cResult[79] = tmp99;
                                                              tmp97 = tmp99;
                                                            }
                                                            const obj6 = { style: tmp5.footer, children: tmp90 };
                                                            const tmp96 = closure_8(closure_5, obj6);
                                                            cResult[72] = tmp5.footer;
                                                            cResult[73] = tmp90;
                                                            cResult[74] = tmp96;
                                                            tmp93 = tmp96;
                                                          }
                                                        }
                                                        const obj7 = {
                                                          disabled: tmp41,
                                                          onPress: claimRewardCodePrimaryCtaClickHandler,
                                                          grow: true,
                                                          text: tmp88,
                                                        };
                                                        const tmp92 = closure_8(tmp(hasError[27]).Button, obj7);
                                                        cResult[68] = claimRewardCodePrimaryCtaClickHandler;
                                                        cResult[69] = tmp41;
                                                        cResult[70] = tmp88;
                                                        cResult[71] = tmp92;
                                                        tmp90 = tmp92;
                                                      }
                                                    }
                                                    const obj8 = { children: items3 };
                                                    items3 = [tmp42, tmp81];
                                                    const tmp87 = closure_9(tmp38, obj8);
                                                    cResult[62] = tmp38;
                                                    cResult[63] = tmp42;
                                                    cResult[64] = tmp81;
                                                    cResult[65] = tmp87;
                                                    tmp85 = tmp87;
                                                  }
                                                  const obj9 = { children: items4 };
                                                  items4 = [tmp69, tmp75];
                                                  const tmp84 = closure_9(closure_5, obj9);
                                                  cResult[59] = tmp69;
                                                  cResult[60] = tmp75;
                                                  cResult[61] = tmp84;
                                                  tmp81 = tmp84;
                                                }
                                                let code8;
                                                if (rewardCode != null) {
                                                  code8 = rewardCode.code;
                                                }
                                                let tmp77 = null == code8;
                                                if (tmp77) {
                                                  const obj10 = { style: tmp5.claimingIndicator, size: 24 };
                                                  tmp77 = closure_8(closure_4, obj10);
                                                }
                                                let code9;
                                                if (rewardCode != null) {
                                                  code9 = rewardCode.code;
                                                }
                                                cResult[56] = code9;
                                                cResult[57] = tmp5.claimingIndicator;
                                                cResult[58] = tmp77;
                                                tmp75 = tmp77;
                                              }
                                              const obj11 = {
                                                style: null == code1 && tmp5.codeCopyWrapperLoading,
                                                children: tmp66,
                                              };
                                              const tmp72 = closure_8(closure_5, obj11);
                                              cResult[53] = null == code1 && tmp5.codeCopyWrapperLoading;
                                              cResult[54] = tmp66;
                                              cResult[55] = tmp72;
                                              tmp69 = tmp72;
                                            }
                                          }
                                          const obj12 = {
                                            hasIcons: false,
                                            children: closure_8(tmp(hasError[25]).TableRow, obj13),
                                          };
                                          const TableRowGroup = tmp(hasError[26]).TableRowGroup;
                                          obj13 = { label: code2, trailing: tmp59, onPress: tmp65 };
                                          const tmp68 = closure_8(TableRowGroup, obj12);
                                          cResult[49] = code2;
                                          cResult[50] = tmp59;
                                          cResult[51] = tmp65;
                                          cResult[52] = tmp68;
                                          tmp66 = tmp68;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj14 = { quest, rewardCode };
                                const tmpResult9 = tmp(hasError[20]);
                                const rewardCodeRedemptionInstructions =
                                  tmpResult9.getRewardCodeRedemptionInstructions(obj14);
                                let tmp46 = isFetchingRewardCode || isClaimingReward;
                                if (!tmp46) {
                                  let code10;
                                  if (rewardCode != null) {
                                    code10 = rewardCode.code;
                                  }
                                  tmp46 = null == code10;
                                }
                                BottomSheet = tmp(hasError[21]).BottomSheet;
                                const _Symbol = Symbol;
                                if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj15 = { title: intl.string(tmp(hasError[13]).t.srzsU2) };
                                  const BottomSheetTitleHeader = tmp(hasError[22]).BottomSheetTitleHeader;
                                  intl = tmp(hasError[13]).intl;
                                  const tmp50 = closure_8(BottomSheetTitleHeader, obj15);
                                  cResult[46] = tmp50;
                                  tmp48 = tmp50;
                                } else {
                                  tmp48 = cResult[46];
                                }
                                const wrapper = tmp5.wrapper;
                                let tmp52 = null != rewardCode && null != rewardCodeRedemptionInstructions;
                                if (tmp52) {
                                  const obj16 = {
                                    style: tmp5.redemptionInstructions,
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: tmp4Result.parse(rewardCodeRedemptionInstructions, true, {
                                      allowLinks: true,
                                    }),
                                  };
                                  const Text = tmp(hasError[23]).Text;
                                  tmp4Result = tmp4(hasError[24]);
                                  tmp52 = closure_8(Text, obj16);
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
                                cResult[41] = tmp46;
                                cResult[42] = tmp52;
                                cResult[43] = wrapper;
                                cResult[44] = tmp48;
                                cResult[45] = true;
                                tmp42 = tmp52;
                                flag = true;
                                tmp44 = tmp48;
                                tmp43 = wrapper;
                                tmp41 = tmp46;
                                tmp40 = BottomSheet;
                                tmp39 = closure_5;
                                tmp38 = closure_5;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj17 = {
                    claimCode,
                    fetchCode,
                    hasError,
                    onDismiss: tmp4(hasError[15]).hideActionSheet,
                    quest,
                    questContent,
                    questContentPosition,
                    redemptionLink: redemptionLink1,
                    sourceQuestContent,
                  };
                  cResult[21] = claimCode;
                  cResult[22] = redemptionLink1;
                  cResult[23] = fetchCode;
                  cResult[24] = hasError;
                  cResult[25] = quest;
                  cResult[26] = questContent;
                  cResult[27] = questContentPosition;
                  cResult[28] = sourceQuestContent;
                  cResult[29] = obj17;
                  tmp35 = obj17;
                }
              }
              const getRewardCodeQuestReward = tmp(hasError[16]).getRewardCodeQuestReward;
              tmp(hasError[16]);
              if (tmp16) {
                const obj18 = { quest, idx: tier1 };
                tier1 = undefined;
                if (rewardCode != null) {
                  tier1 = rewardCode.tier;
                }
                rewardCodeQuestReward = getRewardCodeQuestReward(obj18);
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
              tmp21 = rewardCodeQuestReward;
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
    }
  : (quest) => {
      let BottomSheetTitleHeader;
      let TableRowGroup;
      let c3;
      let claimCode;
      let fetchCode;
      let intl;
      let isClaimingReward;
      let isFetchingRewardCode;
      let obj13;
      let obj7;
      let questContentPosition;
      let sourceQuestContent;
      let tmp16Result3;
      let tmp26;
      let tmpResult;
      quest = quest.quest;
      const questContent = quest.questContent;
      let rewardCode;
      let hasError;
      react = undefined;
      let memo;
      const tmp = rewardCode;
      ({ questContentPosition, sourceQuestContent } = quest);
      const tmp3 = closure_10(rewardCode(hasError[9])().bottom);
      let tmp4 = quest;
      let obj = quest(hasError[10]);
      const items = [QuestStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          rewardCode: QuestStore.getRewardCode(quest.id),
          isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id),
          isClaimingReward: QuestStore.isClaimingReward(quest.id),
        };
        return obj;
      });
      rewardCode = stateFromStoresObject.rewardCode;
      ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
      let obj2 = quest(hasError[11]);
      const claimOrFetchRewardCode = obj2.useClaimOrFetchRewardCode({
        isClaimingReward,
        isFetchingRewardCode,
        quest,
        questContent,
        rewardCode,
      });
      hasError = claimOrFetchRewardCode.hasError;
      let obj3 = react;
      const items1 = [hasError];
      ({ claimCode, fetchCode } = claimOrFetchRewardCode);
      const effect = react.useEffect(() => {
        let intl;
        if (hasError) {
          const obj = {
            key: "CLAIM_QUEST_REWARD_ERROR",
            content: intl.string(intl4.t.CKsXk3),
            icon: AssetRegistryDefault,
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl4.intl;
          open(obj);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
      }, items1);
      const obj4 = quest(hasError[16]);
      const result = obj4.isTieredRewardCodeQuest({ quest });
      react = result;
      const items2 = [result, quest];
      let tier;
      const useMemo = react.useMemo;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      items2[2] = tier;
      memo = useMemo(() => {
        let rewardCodeQuestReward;
        let tier;
        const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
        QuestRewardUtils;
        if (c3) {
          const obj2 = { quest, idx: tier };
          tier = undefined;
          if (rewardCode != null) {
            tier = rewardCode.tier;
          }
          rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
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
              let redemptionLink;
              if ("" !== rewardCode.code) {
                const _encodeURIComponent = encodeURIComponent;
                const str2 = memo.redemptionLink;
                redemptionLink = str2.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(rewardCode.code));
              }
              return redemptionLink;
            }
            redemptionLink = memo.redemptionLink;
          }
        }
      }, items3);
      const items4 = [rewardCode];
      const tmp4Result = tmp4(hasError[11]);
      const obj5 = {
        claimCode,
        fetchCode,
        hasError,
        onDismiss: tmp(hasError[15]).hideActionSheet,
        quest,
        questContent,
        questContentPosition,
        redemptionLink: memo1,
        sourceQuestContent,
      };
      const claimRewardCodePrimaryCtaClickHandler = tmp4Result.useClaimRewardCodePrimaryCtaClickHandler(obj5);
      const callback = obj3.useCallback(() => {
        if (null != rewardCode) {
          let obj = ClipboardUtils;
          obj.copy(tmp.code, () => {
            let intl;
            let intl2;
            const obj = quest(hasError[18]);
            const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents(
              "QuestRewardCodeClaimBottomSheet",
            );
            const tmp4 = rewardCode(hasError[12]);
            if (designSystemsNotificationComponents) {
              const openMana = tmp4.openMana;
              const obj2 = { text: intl2.string(quest(hasError[13]).t.MSaeTe), icon: quest(hasError[19]).CopyIcon };
              intl2 = quest(hasError[13]).intl;
              openMana("TOAST_QUEST_REWARD_CODE_COPIED", obj2);
            } else {
              const open = tmp4.open;
              const obj3 = {
                key: "TOAST_QUEST_REWARD_CODE_COPIED",
                content: intl.string(quest(hasError[13]).t.MSaeTe),
                icon() {
                  return closure_1_8(closure_1_0(closure_1_2[19]).CopyIcon, {});
                },
              };
              intl = quest(hasError[13]).intl;
              open(obj3);
            }
          });
        }
      }, items4);
      const tmp4Result2 = tmp4(hasError[20]);
      const rewardCodeRedemptionInstructions = tmp4Result2.getRewardCodeRedemptionInstructions({ quest, rewardCode });
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
      const obj6 = { header: closure_8(BottomSheetTitleHeader, obj7), startExpanded: true, children: null };
      BottomSheet = tmp4(tmp2[21]).BottomSheet;
      obj7 = { title: intl.string(tmp4(hasError[13]).t.srzsU2) };
      BottomSheetTitleHeader = tmp4(tmp2[22]).BottomSheetTitleHeader;
      intl = tmp4(tmp2[13]).intl;
      const obj8 = { style: tmp3.wrapper, children: null };
      let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
      if (tmp16Result) {
        const obj9 = {
          style: tmp3.redemptionInstructions,
          variant: "text-md/normal",
          color: "text-default",
          children: tmpResult.parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }),
        };
        const Text = tmp4(tmp2[23]).Text;
        tmpResult = tmp(hasError[24]);
        tmp16Result = closure_8(Text, obj9);
      }
      const items5 = [tmp16Result];
      let code1;
      if (rewardCode != null) {
        code1 = rewardCode.code;
      }
      const obj10 = { style: null == code1 && tmp3.codeCopyWrapperLoading, children: closure_8(TableRowGroup, obj13) };
      TableRowGroup = tmp4(tmp2[26]).TableRowGroup;
      let code2;
      const TableRow = tmp4(tmp2[25]).TableRow;
      if (rewardCode != null) {
        code2 = rewardCode.code;
      }
      let code3;
      const obj11 = { label: code2, trailing: tmp16Result3, onPress: tmp26 };
      if (rewardCode != null) {
        code3 = rewardCode.code;
      }
      tmp16Result3 = null != code3;
      if (tmp16Result3) {
        const obj12 = { IconComponent: tmp4(hasError[19]).CopyIcon };
        const Icon = tmp4(tmp2[25]).TableRow.Icon;
        tmp16Result3 = closure_8(Icon, obj12);
      }
      let code4;
      if (rewardCode != null) {
        code4 = rewardCode.code;
      }
      tmp26 = undefined;
      if (null != code4) {
        tmp26 = callback;
      }
      obj13 = { hasIcons: false, children: closure_8(TableRow, obj11) };
      const items6 = [closure_8(closure_5, obj10)];
      let code5;
      if (rewardCode != null) {
        code5 = rewardCode.code;
      }
      let tmp16Result4 = null == code5;
      if (tmp16Result4) {
        const obj14 = { style: tmp3.claimingIndicator, size: 24 };
        tmp16Result4 = closure_8(memo, obj14);
      }
      const obj15 = { children: items5 };
      items6[1] = tmp16Result4;
      items5[1] = closure_9(closure_5, { children: items6 });
      const items7 = [closure_9(closure_5, obj15)];
      const obj16 = { style: tmp3.footer, children: null };
      const obj17 = {
        disabled: isFetchingRewardCode,
        onPress: claimRewardCodePrimaryCtaClickHandler,
        grow: true,
        text: null,
      };
      if (null != memo1) {
        let stringResult;
        if ("" !== memo1) {
          const intl3 = tmp4(tmp2[13]).intl;
          stringResult = intl3.string(tmp4(tmp2[13]).t["+zx47d"]);
        }
        obj17.text = stringResult;
        obj16.children = closure_8(tmp30, obj17);
        items7[1] = closure_8(closure_5, obj16);
        obj8.children = items7;
        obj6.children = closure_9(closure_5, obj8);
        return closure_8(BottomSheet, obj6);
      }
      let intl2 = tmp4(tmp2[13]).intl;
      stringResult = intl2.string(tmp4(tmp2[13]).t["23SS+z"]);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let first;
      let questContentPosition;
      let tmp6;
      let tmp9;
      let obj = questId(questContentPosition[8]);
      const cResult = obj.c(14);
      questId = questId.questId;
      const questContent = questId.questContent;
      questContentPosition = questId.questContentPosition;
      const sourceQuestContent = questId.sourceQuestContent;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function n() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = questId(questContentPosition[10]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (null == stateFromStores) {
        const obj4 = questContent(questContentPosition[15]);
        obj4.hideActionSheet();
        tmp9 = null;
      } else {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === questContent) {
            if (cResult[5] === questContentPosition) {
              let tmp8;
              if (cResult[6] === sourceQuestContent) {
                tmp8 = cResult[7];
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
              const obj2 = {
                overrideVisibility: true,
                questOrQuests: stateFromStores,
                questContent,
                questContentPosition,
                sourceQuestContent,
                children: tmp8,
              };
              const tmp11 = closure_8(questId(questContentPosition[28]).QuestContentImpressionTrackerNative, obj2);
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
          const obj = { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent };
          return metroImportAll(closure_11, obj);
        };
        cResult[3] = stateFromStores;
        cResult[4] = questContent;
        cResult[5] = questContentPosition;
        cResult[6] = sourceQuestContent;
        cResult[7] = fn2;
        tmp8 = fn2;
      }
      return tmp9;
    }
  : (questContentPosition) => {
      let questContent;
      let tmp5;
      ({ questId: require, questContent } = questContentPosition);
      questContentPosition = questContentPosition.questContentPosition;
      const sourceQuestContent = questContentPosition.sourceQuestContent;
      let obj = require("get initialized");
      const items = [QuestStore];
      const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
      if (null == stateFromStores) {
        const obj3 = questContent(questContentPosition[15]);
        obj3.hideActionSheet();
        tmp5 = null;
      } else {
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent,
          questContentPosition,
          sourceQuestContent,
          children() {
            const obj = { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent };
            return metroImportAll(closure_11, obj);
          },
        };
        tmp5 = closure_8(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, obj2);
      }
      return tmp5;
    };
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default tmp4;
