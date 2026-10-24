// === Module 12725: OutcomeStep ===

// Module 12725 (OutcomeStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import ModalScreen from "ModalScreen" /* 7900 */;
import ModalContent from "ModalContent" /* 7901 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12719 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12720 */;
import ModalFooter from "ModalFooter" /* 12722 */;
import noop from "module_19" /* 19 */;

require = fn;
function getOutcomeContent(joinStatus, failureReason, guildJoinStatus, noun, arg4) {
  noun = noun.noun;
  const obj = { text: null, onPress: null };
  ({ onClose, onGoToServer } = arg4);
  const intl = util.intl;
  obj.text = intl.string(_modDef2406.H1wMHV);
  obj.onPress = onGoToServer;
  const obj2 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t.cpT0Cq);
  obj2.onPress = onClose;
  if (joinStatus === constants2.JOINED) {
    ({ noun: noun2, orgName, accountName } = noun);
    const intl9 = util.intl;
    const obj3 = { noun: noun2 };
    const formatToPlainStringResult = intl9.formatToPlainString(_modDef2406["w/spGp"], obj3);
    if (constants3.NEW_MEMBER !== guildJoinStatus) {
      if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
        if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
          const obj4 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl12 = util.intl;
          const obj5 = { noun: noun2, orgName };
          obj4.subtitle = intl12.formatToPlainString(_modDef2406["9K7Jdt"], obj5);
          obj4.cta = obj;
          let obj8 = obj4;
        } else if (constants3.APPLICATION === guildJoinStatus) {
          const obj6 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl11 = util.intl;
          const obj7 = { noun: noun2, orgName };
          obj6.subtitle = intl11.formatToPlainString(_modDef2406.ODHuua, obj7);
          obj6.cta = obj2;
          obj8 = obj6;
        } else {
          const FAILED = constants3.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl10 = util.intl;
          const obj9 = { noun: noun2, orgName };
          obj8.subtitle = intl10.formatToPlainString(_modDef2406.Qo94hd, obj9);
          obj8.cta = obj2;
        }
      }
      return obj8;
    }
    const obj10 = { title: formatToPlainStringResult, subtitle: null, cta: null };
    const intl13 = util.intl;
    const obj11 = { noun: noun2, orgName, accountName };
    obj10.subtitle = intl13.formatToPlainString(_modDef2406.WF9Qgb, obj11);
    obj10.cta = obj;
    obj8 = obj10;
  } else if (constants.ALREADY_JOINED === failureReason) {
    const obj12 = { title: null, cta: null };
    const intl8 = util.intl;
    const obj13 = { noun };
    obj12.title = intl8.formatToPlainString(_modDef2406["1PMPYk"], obj13);
    obj12.cta = obj;
    return obj12;
  } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
    const obj14 = { title: null, subtitle: null, cta: null };
    const intl6 = util.intl;
    const obj15 = { noun };
    obj14.title = intl6.formatToPlainString(_modDef2406.vSlR1j, obj15);
    const intl7 = util.intl;
    const obj16 = { noun };
    obj14.subtitle = intl7.formatToPlainString(_modDef2406.kvDHqp, obj16);
    obj14.cta = obj2;
    return obj14;
  } else if (constants.GUILD_FULL === failureReason) {
    const obj17 = { title: null, subtitle: null, cta: null };
    const intl4 = util.intl;
    const obj18 = { noun };
    obj17.title = intl4.formatToPlainString(_modDef2406["/7Gy4g"], obj18);
    const intl5 = util.intl;
    obj17.subtitle = intl5.string(_modDef2406["8TGo9L"]);
    obj17.cta = obj2;
    return obj17;
  } else {
    const OTHER = constants.OTHER;
    const obj19 = { title: null, cta: null };
    const intl3 = util.intl;
    obj19.title = intl3.string(_modDef2406.sXbaMb);
    obj19.cta = obj2;
    return obj19;
  }
}
const GameOrganizationInviteConstants = fn(11026);
({ GameOrganizationInviteAcceptFailureReason: c3, GameOrganizationInviteAcceptStatus: closure_4, GameOrganizationLinkedGuildJoinStatus: hasOwnProperty } = GameOrganizationInviteConstants);
let closure_6 = fn(12717).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4971);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export const OutcomeStep = ReactCompilerGating.isReactCompilerEnabled() ? (function OutcomeStep(code) {
  const cResult = c.c(21);
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  const tmp4 = closure_9();
  const tmp6 = useResolvedGameOrganizationInviteDefault(code.code);
  if (cResult[0] === failureReason) {
    if (cResult[1] === guildJoinStatus) {
      let displayNoun;
      if (tmp6 != null) {
        displayNoun = tmp6.displayNoun;
      }
      if (cResult[2] === displayNoun) {
        let organization;
        if (tmp6 != null) {
          organization = tmp6.organization;
        }
        if (cResult[3] === organization) {
          if (cResult[4] === joinStatus) {
            let tmp10 = cResult[5];
          }
          ({ title, subtitle, cta } = tmp10);
          if (cResult[6] === tmp4.text) {
            if (cResult[7] === title) {
              let tmp17 = cResult[8];
            }
            if (cResult[9] === tmp4.text) {
              if (cResult[10] === subtitle) {
                let tmp20 = cResult[11];
              }
              if (cResult[12] === tmp17) {
                if (cResult[13] === tmp20) {
                  let tmp24 = cResult[14];
                }
                if (cResult[15] === cta.onPress) {
                  if (cResult[16] === cta.text) {
                    let tmp28 = cResult[17];
                  }
                  if (cResult[18] === tmp24) {
                    if (cResult[19] === tmp28) {
                      let tmp31 = cResult[20];
                    }
                    return tmp31;
                  }
                  const obj2 = { children: null };
                  const items = [tmp24, tmp28];
                  obj2.children = items;
                  const tmp33 = closure_1_8(ModalScreen.ModalScreen, obj2);
                  cResult[18] = tmp24;
                  cResult[19] = tmp28;
                  cResult[20] = tmp33;
                  tmp31 = tmp33;
                }
                const obj3 = { children: null };
                ({ text: obj9.text, onPress: obj9.onPress } = cta);
                obj3.children = React5(components_Button_Button.Button, { text: null, size: "lg", onPress: null });
                const tmp30 = React5(ModalFooter.ModalFooter, obj3);
                cResult[15] = cta.onPress;
                cResult[16] = cta.text;
                cResult[17] = tmp30;
                tmp28 = tmp30;
                const obj4 = { text: null, size: "lg", onPress: null };
              }
              const obj5 = { children: null };
              const obj6 = { spacing: nativeDefault.space.PX_8, children: null };
              const items1 = [tmp17, tmp20];
              obj6.children = items1;
              obj5.children = closure_1_8(Stack_Stack.Stack, obj6);
              const tmp27 = React5(ModalContent.ModalContent, obj5);
              cResult[12] = tmp17;
              cResult[13] = tmp20;
              cResult[14] = tmp27;
              tmp24 = tmp27;
            }
            let tmp22 = null != subtitle;
            if (tmp22) {
              const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp4.text, children: subtitle };
              tmp22 = React5(Text_Text.Text, obj7);
            }
            cResult[9] = tmp4.text;
            cResult[10] = subtitle;
            cResult[11] = tmp22;
            tmp20 = tmp22;
          }
          const obj8 = { variant: "heading-xl/semibold", style: tmp4.text, accessibilityRole: "header", children: title };
          const tmp19 = React5(Text_Text.Text, obj8);
          cResult[6] = tmp4.text;
          cResult[7] = title;
          cResult[8] = tmp19;
          tmp17 = tmp19;
        }
      }
    }
  }
  let displayNoun1;
  if (tmp6 != null) {
    displayNoun1 = tmp6.displayNoun;
  }
  if (displayNoun1 == null) {
    displayNoun1 = null;
  }
  const obj10 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: displayNoun1, lowercase: true }), orgName: null, accountName: "[Account/Username]" };
  let str;
  if (tmp6 != null) {
    str = tmp6.organization.name;
  }
  if (str == null) {
    str = "";
  }
  obj10.orgName = str;
  const tmp11Result = getOutcomeContent(joinStatus, failureReason, guildJoinStatus, obj10, { onClose: onGoToServer, onGoToServer });
  cResult[0] = failureReason;
  cResult[1] = guildJoinStatus;
  let displayNoun2;
  if (tmp6 != null) {
    displayNoun2 = tmp6.displayNoun;
  }
  cResult[2] = displayNoun2;
  let organization1;
  if (tmp6 != null) {
    organization1 = tmp6.organization;
  }
  cResult[3] = organization1;
  cResult[4] = joinStatus;
  cResult[5] = tmp11Result;
  tmp10 = tmp11Result;
  const obj19 = { onClose: onGoToServer, onGoToServer };
  const tmp5Result = getGameOrganizationDisplayNounDefault;
}) : (function OutcomeStep(code) {
  ({ joinStatus, failureReason, guildJoinStatus } = code);
  const tmp = closure_9();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code.code);
  let displayNoun;
  if (tmp4 != null) {
    displayNoun = tmp4.displayNoun;
  }
  if (displayNoun == null) {
    displayNoun = null;
  }
  const obj = { noun: getGameOrganizationDisplayNounDefault({ displayNoun, lowercase: true }), orgName: null, accountName: "[Account/Username]" };
  let str;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  obj.orgName = str;
  const tmp5Result = getOutcomeContent(joinStatus, failureReason, guildJoinStatus, obj, { onClose: onGoToServer, onGoToServer });
  ({ subtitle, cta } = tmp5Result);
  const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
  const items = [React5(Text_Text.Text, { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp5Result.title }), ];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp11Result = React5(Text_Text.Text, obj5);
  }
  const obj6 = { children: null };
  const obj2 = { onClose: onGoToServer, onGoToServer };
  const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp5Result.title };
  items[1] = tmp11Result;
  obj3.children = items;
  const items1 = [React5(ModalContent.ModalContent, { children: closure_1_8(Stack_Stack.Stack, obj3) }), ];
  const obj8 = { children: React5(components_Button_Button.Button, { text: cta.text, size: "lg", onPress: cta.onPress }) };
  items1[1] = React5(ModalFooter.ModalFooter, obj8);
  obj6.children = items1;
  return closure_1_8(ModalScreen.ModalScreen, obj6);
});