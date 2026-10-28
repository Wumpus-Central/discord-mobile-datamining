// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2403 from "../../../GameOrganizationInvitesUntranslated.messages.js";
import useResolvedGameOrganizationInviteDefault from "../../../useResolvedGameOrganizationInvite.tsx";
import getGameOrganizationDisplayNounDefault from "../../../getGameOrganizationDisplayNoun.tsx";
import GameOrganizationIconDefault from "../../GameOrganizationIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(12781).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let closure_6 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx",
);

export const ViewStep = ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewStep(code) {
      const cResult = navigation(576).c(60);
      const tmp4 = closure_6();
      const obj = navigation(576);
      navigation = navigation(1502).useNavigation();
      const tmp7 = useResolvedGameOrganizationInviteDefault(code.code);
      if (null == tmp7) {
        return null;
      } else {
        ({ displayNoun, organization, application } = tmp7);
        ({ memberCount, maxMembers } = organization);
        if (cResult[0] === displayNoun) {
          if (cResult[1] === organization.iconUrl) {
            if (cResult[2] === organization.name) {
              if (cResult[3] === tmp4.text) {
                if (cResult[18] === cResult[4]) {
                  if (cResult[19] === tmp14) {
                    if (cResult[20] === tmp15) {
                      if (cResult[21] === tmp16) {
                        let tmp35 = cResult[22];
                      }
                      if (cResult[23] === tmp10) {
                        if (cResult[24] === tmp17) {
                          if (cResult[25] === tmp18) {
                            if (cResult[26] === tmp19) {
                              if (cResult[27] === tmp35) {
                                let tmp38 = cResult[28];
                              }
                              if (cResult[29] !== application.iconUrl) {
                                const obj3 = {
                                  iconUrl: application.iconUrl,
                                  size: 16,
                                  borderRadius: nativeDefault.radii.xs,
                                };
                                const tmp44 = closure_4(GameOrganizationIconDefault, obj3);
                                cResult[29] = application.iconUrl;
                                cResult[30] = tmp44;
                                let tmp41 = tmp44;
                                const tmp6Result = GameOrganizationIconDefault;
                              } else {
                                tmp41 = cResult[30];
                              }
                              if (cResult[31] !== application.name) {
                                const obj4 = { variant: "heading-md/medium", children: application.name };
                                const tmp47 = closure_4(tmp(5270).Text, obj4);
                                cResult[31] = application.name;
                                cResult[32] = tmp47;
                                let tmp45 = tmp47;
                              } else {
                                tmp45 = cResult[32];
                              }
                              if (cResult[33] === tmp4.inlineStack) {
                                if (cResult[34] === tmp41) {
                                  if (cResult[35] === tmp45) {
                                    let tmp48 = cResult[36];
                                  }
                                  if (cResult[37] === maxMembers) {
                                    if (cResult[38] === memberCount) {
                                      if (cResult[39] === tmp8) {
                                        if (cResult[40] === tmp4.inlineStack) {
                                          let tmp51 = cResult[41];
                                        }
                                        if (cResult[42] === tmp48) {
                                          if (cResult[43] === tmp51) {
                                            let tmp55 = cResult[44];
                                          }
                                          if (cResult[45] === tmp11) {
                                            if (cResult[46] === tmp55) {
                                              if (cResult[47] === tmp20) {
                                                if (cResult[48] === tmp38) {
                                                  let tmp58 = cResult[49];
                                                }
                                                if (cResult[50] === tmp12) {
                                                  if (cResult[51] === tmp58) {
                                                    let tmp61 = cResult[52];
                                                  }
                                                  const _Symbol = Symbol;
                                                  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const intl3 = tmp(1125).intl;
                                                    const stringResult = intl3.string(tmp(1125).t["3PatSz"]);
                                                    cResult[53] = stringResult;
                                                    let tmp65 = stringResult;
                                                  } else {
                                                    tmp65 = cResult[53];
                                                  }
                                                  if (cResult[54] !== navigation) {
                                                    const obj5 = { children: null };
                                                    const obj6 = {
                                                      text: tmp65,
                                                      size: "lg",
                                                      onPress() {
                                                        return navigation.navigate(constants.ACCEPT);
                                                      },
                                                    };
                                                    obj5.children = closure_4(tmp(5280).Button, obj6);
                                                    const tmp69 = closure_4(tmp(12786).ModalFooter, obj5);
                                                    cResult[54] = navigation;
                                                    cResult[55] = tmp69;
                                                    let tmp67 = tmp69;
                                                  } else {
                                                    tmp67 = cResult[55];
                                                  }
                                                  if (cResult[56] === tmp13) {
                                                    if (cResult[57] === tmp61) {
                                                      if (cResult[58] === tmp67) {
                                                        let tmp70 = cResult[59];
                                                      }
                                                      return tmp70;
                                                    }
                                                  }
                                                  const obj7 = { children: null };
                                                  const items = [tmp61, tmp67];
                                                  obj7.children = items;
                                                  const tmp72 = closure_5(tmp13, obj7);
                                                  cResult[56] = tmp13;
                                                  cResult[57] = tmp61;
                                                  cResult[58] = tmp67;
                                                  cResult[59] = tmp72;
                                                  tmp70 = tmp72;
                                                }
                                                const obj8 = { children: tmp58 };
                                                const tmp63 = closure_4(tmp12, obj8);
                                                cResult[50] = tmp12;
                                                cResult[51] = tmp58;
                                                cResult[52] = tmp63;
                                                tmp61 = tmp63;
                                              }
                                            }
                                          }
                                          const obj9 = { spacing: tmp20, children: null };
                                          const items1 = [tmp38, tmp55];
                                          obj9.children = items1;
                                          const tmp60 = closure_5(tmp11, obj9);
                                          cResult[45] = tmp11;
                                          cResult[46] = tmp55;
                                          cResult[47] = tmp20;
                                          cResult[48] = tmp38;
                                          cResult[49] = tmp60;
                                          tmp58 = tmp60;
                                        }
                                        const obj10 = {
                                          direction: "horizontal",
                                          align: "center",
                                          justify: "center",
                                          spacing: nativeDefault.space.PX_16,
                                          children: null,
                                        };
                                        const items2 = [tmp48, tmp51];
                                        obj10.children = items2;
                                        const tmp57 = closure_5(tmp(6013).Stack, obj10);
                                        cResult[42] = tmp48;
                                        cResult[43] = tmp51;
                                        cResult[44] = tmp57;
                                        tmp55 = tmp57;
                                      }
                                    }
                                  }
                                  let tmp52 = tmp8;
                                  if (tmp8) {
                                    const obj11 = {
                                      spacing: nativeDefault.space.PX_4,
                                      direction: "horizontal",
                                      align: "center",
                                      style: tmp4.inlineStack,
                                      children: null,
                                    };
                                    const obj12 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
                                    const items3 = [closure_4(tmp(8597).GroupIcon, obj12)];
                                    const obj13 = { variant: "heading-md/medium", children: null };
                                    const intl2 = tmp(1125).intl;
                                    const obj14 = { count: memberCount, max: maxMembers };
                                    obj13.children = intl2.formatToPlainString(_modDef2403.VuENGl, obj14);
                                    items3[1] = closure_4(tmp(5270).Text, obj13);
                                    obj11.children = items3;
                                    tmp52 = closure_5(tmp(6013).Stack, obj11);
                                  }
                                  cResult[37] = maxMembers;
                                  cResult[38] = memberCount;
                                  cResult[39] = tmp8;
                                  cResult[40] = tmp4.inlineStack;
                                  cResult[41] = tmp52;
                                  tmp51 = tmp52;
                                }
                              }
                              const obj15 = {
                                spacing: nativeDefault.space.PX_4,
                                direction: "horizontal",
                                align: "center",
                                style: tmp4.inlineStack,
                                children: null,
                              };
                              const items4 = [tmp41, tmp45];
                              obj15.children = items4;
                              const tmp50 = closure_5(tmp(6013).Stack, obj15);
                              cResult[33] = tmp4.inlineStack;
                              cResult[34] = tmp41;
                              cResult[35] = tmp45;
                              cResult[36] = tmp50;
                              tmp48 = tmp50;
                            }
                          }
                        }
                      }
                      const obj16 = { spacing: tmp17, align: tmp18, children: null };
                      const items5 = [tmp19, tmp35];
                      obj16.children = items5;
                      const tmp40 = closure_5(tmp10, obj16);
                      cResult[23] = tmp10;
                      cResult[24] = tmp17;
                      cResult[25] = tmp18;
                      cResult[26] = tmp19;
                      cResult[27] = tmp35;
                      cResult[28] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
                const obj17 = { variant: cResult[9], style: cResult[10], children: cResult[11] };
                const tmp37 = closure_4(cResult[4], obj17);
                cResult[18] = cResult[4];
                cResult[19] = cResult[9];
                cResult[20] = cResult[10];
                cResult[21] = cResult[11];
                cResult[22] = tmp37;
                tmp35 = tmp37;
              }
            }
          }
        }
        const obj18 = { displayNoun, lowercase: true };
        let name = getGameOrganizationDisplayNounDefault(obj18);
        const ModalScreen = tmp(7935).ModalScreen;
        const ModalContent = tmp(7936).ModalContent;
        const Stack = tmp(6013).Stack;
        const PX_24 = nativeDefault.space.PX_24;
        const Stack2 = tmp(6013).Stack;
        const PX_16 = nativeDefault.space.PX_16;
        if (cResult[16] !== organization.iconUrl) {
          const obj19 = { iconUrl: organization.iconUrl, size: 64 };
          const tmp23 = closure_4(GameOrganizationIconDefault, obj19);
          cResult[16] = organization.iconUrl;
          cResult[17] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[17];
        }
        const Text = tmp(5270).Text;
        const text = tmp4.text;
        const intl = tmp(1125).intl;
        const obj20 = { noun: name, orgName: null };
        name = organization.name;
        obj20.orgName = name;
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2403.gptW7Y, obj20);
        cResult[0] = displayNoun;
        cResult[1] = organization.iconUrl;
        cResult[2] = organization.name;
        cResult[3] = tmp4.text;
        cResult[4] = Text;
        cResult[5] = Stack2;
        cResult[6] = Stack;
        cResult[7] = ModalContent;
        cResult[8] = ModalScreen;
        organization = "heading-xl/semibold";
        cResult[9] = "heading-xl/semibold";
        cResult[10] = text;
        cResult[11] = formatToPlainStringResult;
        cResult[12] = PX_16;
        displayNoun = "center";
        cResult[13] = "center";
        cResult[14] = tmp21;
        cResult[15] = PX_24;
      }
      const obj2 = navigation(1502);
    }
  : function ViewStep(code) {
      _require = undefined;
      const tmp = closure_6();
      _require = require("useNavigation").useNavigation();
      const tmp5 = useResolvedGameOrganizationInviteDefault(code.code);
      if (null == tmp5) {
        return null;
      } else {
        ({ organization, application } = tmp5);
        ({ memberCount, maxMembers } = organization);
        const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
        const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
        const obj4 = { spacing: nativeDefault.space.PX_16, align: "center", children: null };
        const obj5 = { iconUrl: organization.iconUrl, size: 64 };
        const items = [closure_4(GameOrganizationIconDefault, obj5)];
        const obj6 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
        const intl3 = tmp2(1125).intl;
        const obj7 = { noun: getGameOrganizationDisplayNounDefault(obj2), orgName: organization.name };
        obj6.children = intl3.formatToPlainString(_modDef2403.gptW7Y, obj7);
        items[1] = closure_4(tmp2(5270).Text, obj6);
        obj4.children = items;
        const items1 = [closure_5(tmp2(6013).Stack, obj4)];
        const obj8 = {
          direction: "horizontal",
          align: "center",
          justify: "center",
          spacing: nativeDefault.space.PX_16,
          children: null,
        };
        const obj9 = {
          spacing: nativeDefault.space.PX_4,
          direction: "horizontal",
          align: "center",
          style: tmp.inlineStack,
          children: null,
        };
        const obj10 = { iconUrl: application.iconUrl, size: 16, borderRadius: null };
        const tmp7 = getGameOrganizationDisplayNounDefault(obj2);
        obj10.borderRadius = nativeDefault.radii.xs;
        const items2 = [closure_4(GameOrganizationIconDefault, obj10)];
        const obj11 = { variant: "heading-md/medium", children: application.name };
        items2[1] = closure_4(tmp2(5270).Text, obj11);
        obj9.children = items2;
        const items3 = [closure_5(tmp2(6013).Stack, obj9)];
        let tmp8Result = null != memberCount && null != maxMembers;
        if (tmp8Result) {
          const obj12 = {
            spacing: nativeDefault.space.PX_4,
            direction: "horizontal",
            align: "center",
            style: tmp.inlineStack,
            children: null,
          };
          const obj13 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
          const items4 = [closure_4(tmp2(8597).GroupIcon, obj13)];
          const obj14 = { variant: "heading-md/medium", children: null };
          const intl = tmp2(1125).intl;
          const obj15 = { count: memberCount, max: maxMembers };
          obj14.children = intl.formatToPlainString(_modDef2403.VuENGl, obj15);
          items4[1] = closure_4(tmp2(5270).Text, obj14);
          obj12.children = items4;
          tmp8Result = closure_5(tmp2(6013).Stack, obj12);
        }
        const obj16 = { children: null };
        const obj17 = { children: null };
        items3[1] = tmp8Result;
        obj8.children = items3;
        items1[1] = closure_5(tmp2(6013).Stack, obj8);
        obj3.children = items1;
        obj17.children = closure_5(tmp2(6013).Stack, obj3);
        const items5 = [closure_4(tmp2(7936).ModalContent, obj17)];
        const obj18 = { children: null };
        const obj19 = { text: null, size: "lg", onPress: null };
        const intl2 = tmp2(1125).intl;
        obj19.text = intl2.string(tmp2(1125).t["3PatSz"]);
        obj19.onPress = function onPress() {
          return navigation.navigate(constants.ACCEPT);
        };
        obj18.children = closure_4(tmp2(5280).Button, obj19);
        items5[1] = closure_4(tmp2(12786).ModalFooter, obj18);
        obj16.children = items5;
        return closure_5(tmp2(7935).ModalScreen, obj16);
      }
      const obj = require("useNavigation");
    };
