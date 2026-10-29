// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const constants = fn(11122).GameOrganizationCharacterMode;
let closure_6 = fn(13000).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx",
);

export const ViewStep = ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewStep(code) {
      const cResult = navigation(selectedCharacterId[7]).c(82);
      code = code.code;
      const tmp4 = closure_9();
      let obj = navigation(selectedCharacterId[7]);
      navigation = navigation(selectedCharacterId[8]).useNavigation();
      const tmp7 = require("useResolvedGameOrganizationInvite")(code);
      let characterMode;
      if (tmp7 != null) {
        characterMode = tmp7.characterMode;
      }
      importDefault = tmp9;
      const obj2 = navigation(selectedCharacterId[8]);
      let tmp10 = null;
      if (characterMode === constants.MULTI) {
        tmp10 = code;
      }
      const gameOrganizationCharacterEligibilityFetch = navigation(
        selectedCharacterId[10],
      ).useGameOrganizationCharacterEligibilityFetch(tmp10);
      ({ data, error } = gameOrganizationCharacterEligibilityFetch);
      const tmpResult = navigation(selectedCharacterId[10]);
      selectedCharacterId = _slicedToArray(noop.useState(null), 2)[0];
      if (cResult[0] === data) {
        if (cResult[1] === selectedCharacterId) {
          let tmp15 = cResult[2];
        }
        _slicedToArray = tmp15;
        if (null == tmp7) {
          return null;
        } else {
          ({ displayNoun, organization, application } = tmp7);
          ({ memberCount, maxMembers } = organization);
          if (cResult[3] === displayNoun) {
            if (cResult[4] === organization.iconUrl) {
              if (cResult[5] === organization.name) {
                if (cResult[6] === tmp4.text) {
                  if (cResult[24] === cResult[7]) {
                    if (cResult[25] === tmp25) {
                      if (cResult[26] === tmp26) {
                        if (cResult[27] === tmp27) {
                          let tmp51 = cResult[28];
                        }
                        if (cResult[29] === tmp19) {
                          if (cResult[30] === tmp51) {
                            if (cResult[31] === tmp28) {
                              if (cResult[32] === tmp29) {
                                if (cResult[33] === tmp30) {
                                  let tmp54 = cResult[34];
                                }
                                if (cResult[35] !== application.iconUrl) {
                                  const obj3 = {
                                    iconUrl: application.iconUrl,
                                    size: 16,
                                    borderRadius: tmp6(tmp2[15]).radii.xs,
                                  };
                                  const tmp60 = closure_7(tmp6(tmp2[16]), obj3);
                                  cResult[35] = application.iconUrl;
                                  cResult[36] = tmp60;
                                  let tmp57 = tmp60;
                                  const tmp6Result = tmp6(tmp2[16]);
                                } else {
                                  tmp57 = cResult[36];
                                }
                                if (cResult[37] !== application.name) {
                                  const obj4 = { variant: "heading-md/medium", children: application.name };
                                  const tmp63 = closure_7(tmp(tmp2[17]).Text, obj4);
                                  cResult[37] = application.name;
                                  cResult[38] = tmp63;
                                  let tmp61 = tmp63;
                                } else {
                                  tmp61 = cResult[38];
                                }
                                if (cResult[39] === tmp4.inlineStack) {
                                  if (cResult[40] === tmp57) {
                                    if (cResult[41] === tmp61) {
                                      let tmp64 = cResult[42];
                                    }
                                    if (cResult[43] === maxMembers) {
                                      if (cResult[44] === memberCount) {
                                        if (cResult[45] === tmp17) {
                                          if (cResult[46] === tmp4.inlineStack) {
                                            let tmp67 = cResult[47];
                                          }
                                          if (cResult[48] === tmp64) {
                                            if (cResult[49] === tmp67) {
                                              let tmp71 = cResult[50];
                                            }
                                            if (cResult[51] === tmp20) {
                                              if (cResult[52] === tmp54) {
                                                if (cResult[53] === tmp71) {
                                                  if (cResult[54] === tmp31) {
                                                    let tmp74 = cResult[55];
                                                  }
                                                  if (cResult[56] === data) {
                                                    if (cResult[57] === error) {
                                                      if (cResult[58] === tmp9) {
                                                        if (cResult[59] === tmp24) {
                                                          if (cResult[60] === selectedCharacterId) {
                                                            let tmp77 = cResult[61];
                                                          }
                                                          if (cResult[62] === tmp21) {
                                                            if (cResult[63] === tmp74) {
                                                              if (cResult[64] === tmp77) {
                                                                if (cResult[65] === tmp32) {
                                                                  let tmp80 = cResult[66];
                                                                }
                                                                if (cResult[67] === tmp22) {
                                                                  if (cResult[68] === tmp80) {
                                                                    let tmp83 = cResult[69];
                                                                  }
                                                                  const _Symbol = Symbol;
                                                                  if (
                                                                    cResult[70] ===
                                                                    Symbol.for("react.memo_cache_sentinel")
                                                                  ) {
                                                                    const intl3 = tmp(tmp2[18]).intl;
                                                                    const stringResult = intl3.string(
                                                                      tmp(tmp2[18]).t["3PatSz"],
                                                                    );
                                                                    cResult[70] = stringResult;
                                                                    let tmp87 = stringResult;
                                                                  } else {
                                                                    tmp87 = cResult[70];
                                                                  }
                                                                  let tmp89 = tmp9;
                                                                  if (tmp9) {
                                                                    tmp89 = null == tmp15;
                                                                  }
                                                                  if (cResult[71] === tmp9) {
                                                                    if (cResult[72] === navigation) {
                                                                      if (cResult[73] === tmp15) {
                                                                        let tmp90 = cResult[74];
                                                                      }
                                                                      if (cResult[75] === tmp89) {
                                                                        if (cResult[76] === tmp90) {
                                                                          let tmp91 = cResult[77];
                                                                        }
                                                                        if (cResult[78] === tmp23) {
                                                                          if (cResult[79] === tmp83) {
                                                                            if (cResult[80] === tmp91) {
                                                                              let tmp94 = cResult[81];
                                                                            }
                                                                            return tmp94;
                                                                          }
                                                                        }
                                                                        const obj5 = { children: null };
                                                                        const items = [tmp83, tmp91];
                                                                        obj5.children = items;
                                                                        const tmp96 = closure_8(tmp23, obj5);
                                                                        cResult[78] = tmp23;
                                                                        cResult[79] = tmp83;
                                                                        cResult[80] = tmp91;
                                                                        cResult[81] = tmp96;
                                                                        tmp94 = tmp96;
                                                                      }
                                                                      const obj6 = { children: null };
                                                                      const obj7 = {
                                                                        text: tmp87,
                                                                        size: "lg",
                                                                        disabled: tmp89,
                                                                        onPress: tmp90,
                                                                      };
                                                                      obj6.children = closure_7(
                                                                        tmp(tmp2[23]).Button,
                                                                        obj7,
                                                                      );
                                                                      const tmp93 = closure_7(
                                                                        tmp(tmp2[22]).ModalFooter,
                                                                        obj6,
                                                                      );
                                                                      cResult[75] = tmp89;
                                                                      cResult[76] = tmp90;
                                                                      cResult[77] = tmp93;
                                                                      tmp91 = tmp93;
                                                                    }
                                                                  }
                                                                  function se() {
                                                                    let tmp2;
                                                                    if (closure_1) {
                                                                      if (null != closure_3) {
                                                                        const obj = { character: tmp3 };
                                                                        tmp2 = obj;
                                                                      }
                                                                    }
                                                                    return navigation.navigate(constants.ACCEPT, tmp2);
                                                                  }
                                                                  cResult[71] = tmp9;
                                                                  cResult[72] = navigation;
                                                                  cResult[73] = tmp15;
                                                                  cResult[74] = se;
                                                                  tmp90 = se;
                                                                }
                                                                const obj8 = { children: tmp80 };
                                                                const tmp85 = closure_7(tmp22, obj8);
                                                                cResult[67] = tmp22;
                                                                cResult[68] = tmp80;
                                                                cResult[69] = tmp85;
                                                                tmp83 = tmp85;
                                                              }
                                                            }
                                                          }
                                                          const obj9 = { spacing: tmp32, children: null };
                                                          const items1 = [tmp74, tmp77];
                                                          obj9.children = items1;
                                                          const tmp82 = closure_8(tmp21, obj9);
                                                          cResult[62] = tmp21;
                                                          cResult[63] = tmp74;
                                                          cResult[64] = tmp77;
                                                          cResult[65] = tmp32;
                                                          cResult[66] = tmp82;
                                                          tmp80 = tmp82;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let tmp78 = tmp9;
                                                  if (tmp9) {
                                                    const obj10 = {
                                                      characters: data,
                                                      hasError: null != error,
                                                      selectedCharacterId,
                                                      onSelect: tmp14,
                                                      noun: tmp24,
                                                    };
                                                    tmp78 = closure_7(tmp6(tmp2[21]), obj10);
                                                  }
                                                  cResult[56] = data;
                                                  cResult[57] = error;
                                                  cResult[58] = tmp9;
                                                  cResult[59] = tmp24;
                                                  cResult[60] = selectedCharacterId;
                                                  cResult[61] = tmp78;
                                                  tmp77 = tmp78;
                                                }
                                              }
                                            }
                                            const obj11 = { spacing: tmp31, children: null };
                                            const items2 = [tmp54, tmp71];
                                            obj11.children = items2;
                                            const tmp76 = closure_8(tmp20, obj11);
                                            cResult[51] = tmp20;
                                            cResult[52] = tmp54;
                                            cResult[53] = tmp71;
                                            cResult[54] = tmp31;
                                            cResult[55] = tmp76;
                                            tmp74 = tmp76;
                                          }
                                          const obj12 = {
                                            direction: "horizontal",
                                            align: "center",
                                            justify: "center",
                                            spacing: tmp6(tmp2[15]).space.PX_16,
                                            children: null,
                                          };
                                          const items3 = [tmp64, tmp67];
                                          obj12.children = items3;
                                          const tmp73 = closure_8(tmp(tmp2[14]).Stack, obj12);
                                          cResult[48] = tmp64;
                                          cResult[49] = tmp67;
                                          cResult[50] = tmp73;
                                          tmp71 = tmp73;
                                        }
                                      }
                                    }
                                    let tmp68 = tmp17;
                                    if (tmp17) {
                                      const obj13 = {
                                        spacing: tmp6(tmp2[15]).space.PX_4,
                                        direction: "horizontal",
                                        align: "center",
                                        style: tmp4.inlineStack,
                                        children: null,
                                      };
                                      const obj14 = { size: "xs", color: tmp6(tmp2[15]).colors.ICON_MUTED };
                                      const items4 = [closure_7(tmp(tmp2[20]).GroupIcon, obj14)];
                                      const obj15 = { variant: "heading-md/medium", children: null };
                                      const intl2 = tmp(tmp2[18]).intl;
                                      const obj16 = { count: memberCount, max: maxMembers };
                                      obj15.children = intl2.formatToPlainString(tmp6(tmp2[19]).VuENGl, obj16);
                                      items4[1] = closure_7(tmp(tmp2[17]).Text, obj15);
                                      obj13.children = items4;
                                      tmp68 = closure_8(tmp(tmp2[14]).Stack, obj13);
                                    }
                                    cResult[43] = maxMembers;
                                    cResult[44] = memberCount;
                                    cResult[45] = tmp17;
                                    cResult[46] = tmp4.inlineStack;
                                    cResult[47] = tmp68;
                                    tmp67 = tmp68;
                                  }
                                }
                                const obj17 = {
                                  spacing: tmp6(tmp2[15]).space.PX_4,
                                  direction: "horizontal",
                                  align: "center",
                                  style: tmp4.inlineStack,
                                  children: null,
                                };
                                const items5 = [tmp57, tmp61];
                                obj17.children = items5;
                                const tmp66 = closure_8(tmp(tmp2[14]).Stack, obj17);
                                cResult[39] = tmp4.inlineStack;
                                cResult[40] = tmp57;
                                cResult[41] = tmp61;
                                cResult[42] = tmp66;
                                tmp64 = tmp66;
                              }
                            }
                          }
                        }
                        const obj18 = { spacing: tmp28, align: tmp29, children: null };
                        const items6 = [tmp30, tmp51];
                        obj18.children = items6;
                        const tmp56 = closure_8(tmp19, obj18);
                        cResult[29] = tmp19;
                        cResult[30] = tmp51;
                        cResult[31] = tmp28;
                        cResult[32] = tmp29;
                        cResult[33] = tmp30;
                        cResult[34] = tmp56;
                        tmp54 = tmp56;
                      }
                    }
                  }
                  const obj19 = { variant: cResult[14], style: cResult[15], children: cResult[16] };
                  const tmp53 = closure_7(cResult[7], obj19);
                  cResult[24] = cResult[7];
                  cResult[25] = cResult[14];
                  cResult[26] = cResult[15];
                  cResult[27] = cResult[16];
                  cResult[28] = tmp53;
                  tmp51 = tmp53;
                }
              }
            }
          }
          const obj20 = { displayNoun, lowercase: true };
          const tmp33 = tmp6(tmp2[11])(obj20);
          const ModalScreen = tmp(tmp2[12]).ModalScreen;
          const ModalContent = tmp(tmp2[13]).ModalContent;
          const Stack = tmp(tmp2[14]).Stack;
          const PX_48 = tmp6(tmp2[15]).space.PX_48;
          const Stack2 = tmp(tmp2[14]).Stack;
          const PX_24 = tmp6(tmp2[15]).space.PX_24;
          const Stack3 = tmp(tmp2[14]).Stack;
          const PX_16 = tmp6(tmp2[15]).space.PX_16;
          if (cResult[22] !== organization.iconUrl) {
            const obj21 = { iconUrl: organization.iconUrl, size: 64 };
            const tmp36 = closure_7(tmp6(tmp2[16]), obj21);
            cResult[22] = organization.iconUrl;
            cResult[23] = tmp36;
            let tmp34 = tmp36;
          } else {
            tmp34 = cResult[23];
          }
          const Text = tmp(tmp2[17]).Text;
          const text = tmp4.text;
          const intl = tmp(tmp2[18]).intl;
          const obj22 = { noun: tmp33, orgName: organization.name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp6(tmp2[19]).gptW7Y, obj22);
          cResult[3] = displayNoun;
          cResult[4] = organization.iconUrl;
          cResult[5] = organization.name;
          cResult[6] = tmp4.text;
          cResult[7] = Text;
          cResult[8] = Stack3;
          cResult[9] = Stack2;
          cResult[10] = Stack;
          cResult[11] = ModalContent;
          cResult[12] = ModalScreen;
          cResult[13] = tmp33;
          organization = "heading-xl/semibold";
          cResult[14] = "heading-xl/semibold";
          cResult[15] = text;
          cResult[16] = formatToPlainStringResult;
          cResult[17] = PX_16;
          displayNoun = "center";
          cResult[18] = "center";
          cResult[19] = tmp34;
          cResult[20] = PX_24;
          cResult[21] = PX_48;
        }
      }
      let found;
      if (data != null) {
        found = data.find((id) => id.id === first);
      }
      cResult[0] = data;
      cResult[1] = selectedCharacterId;
      cResult[2] = found;
      tmp15 = found;
      const tmp12 = _slicedToArray(noop.useState(null), 2);
    }
  : function ViewStep(code) {
      code = code.code;
      _require = undefined;
      importDefault = undefined;
      let selectedCharacterId;
      let found;
      const tmp = closure_9();
      _require = require("useNavigation").useNavigation();
      const tmp5 = require("useResolvedGameOrganizationInvite")(code);
      let characterMode;
      if (tmp5 != null) {
        characterMode = tmp5.characterMode;
      }
      let tmp7 = characterMode === constants.MULTI;
      importDefault = tmp7;
      let obj = require("useNavigation");
      let tmp8 = null;
      if (tmp7) {
        tmp8 = code;
      }
      const gameOrganizationCharacterEligibilityFetch =
        require("useGameOrganizationCharacterEligibilityFetch").useGameOrganizationCharacterEligibilityFetch(tmp8);
      const data = gameOrganizationCharacterEligibilityFetch.data;
      const tmp10 = found(noop.useState(null), 2);
      selectedCharacterId = tmp10[0];
      found = undefined;
      if (data != null) {
        found = data.find((id) => id.id === first);
      }
      if (null == tmp5) {
        return null;
      } else {
        ({ organization, application } = tmp5);
        ({ memberCount, maxMembers } = organization);
        const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
        const tmp15 = tmp4(tmp3[11])(obj2);
        const obj3 = { spacing: tmp4(tmp3[15]).space.PX_48, children: null };
        const obj4 = { spacing: tmp4(tmp3[15]).space.PX_24, children: null };
        const obj5 = { spacing: tmp4(tmp3[15]).space.PX_16, align: "center", children: null };
        const obj6 = { iconUrl: organization.iconUrl, size: 64 };
        const items = [closure_7(tmp4(tmp3[16]), obj6)];
        const obj7 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
        const intl3 = tmp2(tmp3[18]).intl;
        const obj8 = { noun: tmp15, orgName: organization.name };
        obj7.children = intl3.formatToPlainString(tmp4(tmp3[19]).gptW7Y, obj8);
        items[1] = closure_7(tmp2(tmp3[17]).Text, obj7);
        obj5.children = items;
        const items1 = [closure_8(tmp2(tmp3[14]).Stack, obj5)];
        const obj9 = {
          direction: "horizontal",
          align: "center",
          justify: "center",
          spacing: tmp4(tmp3[15]).space.PX_16,
          children: null,
        };
        const obj10 = {
          spacing: tmp4(tmp3[15]).space.PX_4,
          direction: "horizontal",
          align: "center",
          style: tmp.inlineStack,
          children: null,
        };
        const obj11 = { iconUrl: application.iconUrl, size: 16, borderRadius: tmp4(tmp3[15]).radii.xs };
        const items2 = [closure_7(tmp4(tmp3[16]), obj11)];
        const obj12 = { variant: "heading-md/medium", children: application.name };
        items2[1] = closure_7(tmp2(tmp3[17]).Text, obj12);
        obj10.children = items2;
        const items3 = [closure_8(tmp2(tmp3[14]).Stack, obj10)];
        let tmp16Result = null != memberCount && null != maxMembers;
        if (tmp16Result) {
          const obj13 = {
            spacing: tmp4(tmp3[15]).space.PX_4,
            direction: "horizontal",
            align: "center",
            style: tmp.inlineStack,
            children: null,
          };
          const obj14 = { size: "xs", color: tmp4(tmp3[15]).colors.ICON_MUTED };
          const items4 = [closure_7(tmp2(tmp3[20]).GroupIcon, obj14)];
          const obj15 = { variant: "heading-md/medium", children: null };
          const intl = tmp2(tmp3[18]).intl;
          const obj16 = { count: memberCount, max: maxMembers };
          obj15.children = intl.formatToPlainString(tmp4(tmp3[19]).VuENGl, obj16);
          items4[1] = closure_7(tmp2(tmp3[17]).Text, obj15);
          obj13.children = items4;
          tmp16Result = closure_8(tmp2(tmp3[14]).Stack, obj13);
        }
        items3[1] = tmp16Result;
        obj9.children = items3;
        items1[1] = closure_8(tmp2(tmp3[14]).Stack, obj9);
        obj4.children = items1;
        const items5 = [closure_8(tmp2(tmp3[14]).Stack, obj4)];
        let tmp17Result = tmp7;
        if (tmp7) {
          const obj17 = {
            characters: data,
            hasError: null != gameOrganizationCharacterEligibilityFetch.error,
            selectedCharacterId,
            onSelect: tmp10[1],
            noun: tmp15,
          };
          tmp17Result = closure_7(tmp4(tmp3[21]), obj17);
        }
        const obj18 = { children: null };
        items5[1] = tmp17Result;
        obj3.children = items5;
        obj18.children = closure_8(tmp2(tmp3[14]).Stack, obj3);
        const items6 = [closure_7(tmp2(tmp3[13]).ModalContent, obj18)];
        const obj19 = { text: null, size: "lg", disabled: null, onPress: null };
        const intl2 = tmp2(tmp3[18]).intl;
        obj19.text = intl2.string(tmp2(tmp3[18]).t["3PatSz"]);
        if (tmp7) {
          tmp7 = null == found;
        }
        const obj20 = { children: null };
        const obj21 = { children: null };
        obj19.disabled = tmp7;
        obj19.onPress = function onPress() {
          let tmp2;
          if (closure_1) {
            if (null != found) {
              const obj = { character: tmp3 };
              tmp2 = obj;
            }
          }
          return navigation.navigate(constants.ACCEPT, tmp2);
        };
        obj21.children = closure_7(tmp2(tmp3[23]).Button, obj19);
        items6[1] = closure_7(tmp2(tmp3[22]).ModalFooter, obj21);
        obj20.children = items6;
        return closure_8(tmp2(tmp3[12]).ModalScreen, obj20);
      }
      const tmp2Result = require("useGameOrganizationCharacterEligibilityFetch");
    };
