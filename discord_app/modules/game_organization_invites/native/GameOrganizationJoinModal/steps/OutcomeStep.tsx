// === Module 13162: OutcomeStep ===

// Module 13162 (OutcomeStep)
import transitionToGuild from "transitionToGuild" /* 7516 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;

require = fn;
const GameOrganizationInviteConstants = fn(11327);
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: closure_7, GameOrganizationLinkedGuildJoinStatus: closure_8 } = GameOrganizationInviteConstants);
const onPress = fn(13151).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let closure_12 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export function OutcomeStep(code) {
  ({ joinStatus, failureReason, guildJoinStatus, characterName } = code);
  let stateFromStores;
  dependencyMap = undefined;
  let flag;
  const tmp = closure_12();
  const tmp4 = stateFromStores(13153)(code.code);
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
  const tmp2ResultResult = stateFromStores(13154)({ displayNoun, lowercase: true });
  let str;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  if (stateFromStores) {
    let tmp18 = callback;
  } else {
    tmp18 = null;
  }
  let obj3 = { text: null, onPress: null };
  const intl = tmp6(1114).intl;
  obj3.text = intl.string(guildId(1114).t.cpT0Cq);
  obj3.onPress = onPress;
  let tmp19 = obj3;
  if (null != tmp18) {
    const obj4 = { text: null, onPress: null };
    const intl2 = tmp6(1114).intl;
    obj4.text = intl2.string(tmp2(2405).H1wMHV);
    obj4.onPress = tmp18;
    tmp19 = obj4;
  }
  if (joinStatus === constants2.JOINED) {
    const intl9 = tmp6(1114).intl;
    const obj5 = { noun: tmp2ResultResult };
    const formatToPlainStringResult = intl9.formatToPlainString(tmp2(2405)["w/spGp"], obj5);
    if (constants3.NEW_MEMBER !== guildJoinStatus) {
      if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
        if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
          const obj6 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl12 = tmp6(1114).intl;
          const obj7 = { noun: tmp2ResultResult, orgName: str };
          obj3 = intl12.formatToPlainString(tmp2(2405)["9K7Jdt"], obj7);
          obj6.subtitle = obj3;
          obj6.cta = tmp19;
          let obj8 = obj6;
        } else if (constants3.APPLICATION !== guildJoinStatus) {
          const FAILED = constants3.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl10 = tmp6(1114).intl;
          const obj9 = { noun: tmp2ResultResult, orgName: str };
          obj8.subtitle = intl10.formatToPlainString(tmp2(2405).Qo94hd, obj9);
          obj8.cta = obj3;
        }
        const obj10 = { title: formatToPlainStringResult, subtitle: null, cta: null };
        const intl11 = tmp6(1114).intl;
        const obj11 = { noun: tmp2ResultResult, orgName: str };
        obj10.subtitle = intl11.formatToPlainString(tmp2(2405).ODHuua, obj11);
        obj10.cta = obj3;
        obj8 = obj10;
      }
    }
    const obj12 = { title: formatToPlainStringResult, subtitle: null, cta: null };
    if (null != characterName) {
      const intl14 = tmp6(1114).intl;
      const obj13 = { noun: tmp2ResultResult, orgName: str, characterName };
      let formatToPlainStringResult1 = intl14.formatToPlainString(tmp2(2405).PLA9Om, obj13);
    } else {
      const intl13 = tmp6(1114).intl;
      const obj14 = { noun: tmp2ResultResult, orgName: str };
      formatToPlainStringResult1 = intl13.formatToPlainString(tmp2(2405).WF9Qgb, obj14);
    }
    obj12.subtitle = formatToPlainStringResult1;
    obj12.cta = tmp19;
  } else {
    if (constants.ALREADY_JOINED === failureReason) {
      const obj15 = { title: null, cta: null };
      const intl8 = tmp6(1114).intl;
      const obj16 = { noun: tmp2ResultResult };
      obj15.title = intl8.formatToPlainString(tmp2(2405)["1PMPYk"], obj16);
      obj15.cta = tmp19;
      let obj22 = obj15;
    } else if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
      const obj17 = { title: null, subtitle: null, cta: null };
      const intl6 = tmp6(1114).intl;
      const obj18 = { noun: tmp2ResultResult };
      obj17.title = intl6.formatToPlainString(tmp2(2405).vSlR1j, obj18);
      const intl7 = tmp6(1114).intl;
      const obj19 = { noun: tmp2ResultResult };
      obj17.subtitle = intl7.formatToPlainString(tmp2(2405).kvDHqp, obj19);
      obj17.cta = obj3;
      obj22 = obj17;
    } else if (constants.GUILD_FULL === failureReason) {
      const obj20 = { title: null, subtitle: null, cta: null };
      const intl4 = tmp6(1114).intl;
      const obj21 = { noun: tmp2ResultResult };
      obj20.title = intl4.formatToPlainString(tmp2(2405)["/7Gy4g"], obj21);
      const intl5 = tmp6(1114).intl;
      obj20.subtitle = intl5.string(tmp2(2405)["8TGo9L"]);
      obj20.cta = obj3;
      obj22 = obj20;
    } else {
      const OTHER = constants.OTHER;
      obj22 = { title: null, cta: null };
      const intl3 = tmp6(1114).intl;
      obj22.title = intl3.string(tmp2(2405).sXbaMb);
      obj22.cta = obj3;
    }
    ({ subtitle, cta } = obj22);
    const obj23 = { spacing: tmp2(575).space.PX_8, children: null };
    const obj24 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: obj22.title };
    const items3 = [closure_10(tmp6(5619).Text, obj24), ];
    let tmp26Result = null != subtitle;
    if (tmp26Result) {
      const obj25 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
      tmp26Result = closure_10(tmp6(5619).Text, obj25);
    }
    const obj26 = { children: null };
    const obj27 = { children: null };
    items3[1] = tmp26Result;
    obj23.children = items3;
    obj27.children = closure_11(tmp6(6022).Stack, obj23);
    const items4 = [closure_10(tmp6(7965).ModalContent, obj27), ];
    const obj28 = { children: null };
    const obj56 = { text: null, size: "lg", onPress: null, disabled: null };
    ({ text: obj29.text, onPress: obj29.onPress } = cta);
    obj56.disabled = tmp9;
    obj28.children = closure_10(tmp6(5629).Button, obj56);
    items4[1] = closure_10(tmp6(13158).ModalFooter, obj28);
    obj26.children = items4;
    return closure_11(tmp6(7964).ModalScreen, obj26);
  }
  const tmp2Result = stateFromStores(13154);
}