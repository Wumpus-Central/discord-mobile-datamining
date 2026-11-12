// === Module 13981: useGameOrganizationJoinOutcome ===

// Module 13981 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 7168 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;

const require = globalThis.__r;

require = fn;
const GameOrganizationInviteConstants = fn(12274);
({ GameOrganizationInviteAcceptFailureReason: closure_6, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: closure_8 } = GameOrganizationInviteConstants);
const GameOrganizationJoinOutcomeCtaType = { GO_TO_SERVER: "GO_TO_SERVER", CLOSE: "CLOSE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationJoinOutcome.tsx");

export default function useGameOrganizationJoinOutcome(arg0, guildJoinStatus, action) {
  _require = action;
  let PLA9Om = guildId;
  let obj = stateFromStores;
  const tmp = guildId(stateFromStores[6])(arg0);
  guildId = undefined;
  if (tmp != null) {
    guildId = tmp.guildId;
  }
  let intl = _require;
  items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null != GuildStore.getGuild(tmp);
    }
    return tmp2;
  });
  const tmp4 = _slicedToArray(flag.useState(false), 2);
  _slicedToArray = tmp4[1];
  let tmp5 = null != guildJoinStatus;
  if (tmp5) {
    tmp5 = !stateFromStores;
  }
  if (tmp5) {
    tmp5 = !tmp4[0];
  }
  if (tmp5) {
    guildJoinStatus = guildJoinStatus.guildJoinStatus;
    flag = false;
    if (guildJoinStatus.joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          flag = false;
        }
      }
      flag = true;
    }
    tmp5 = flag;
  }
  flag = tmp5;
  const items1 = [tmp5];
  const effect = flag.useEffect(() => {
    if (flag) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_3(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  if (null == guildJoinStatus) {
    return null;
  } else {
    let displayNoun;
    if (tmp != null) {
      displayNoun = tmp.displayNoun;
    }
    if (displayNoun == null) {
      displayNoun = null;
    }
    const obj4 = { displayNoun, lowercase: true };
    const PLA9OmResultResult = PLA9Om(obj[8])(obj4);
    let str;
    if (tmp != null) {
      str = tmp.organization.name;
    }
    if (str == null) {
      str = "";
    }
    const character = guildJoinStatus.character;
    let name;
    if (character != null) {
      name = character.name;
    }
    if (name == null) {
      name = null;
    }
    if (stateFromStores) {
      let tmp13 = function handleGoToServer() {
        let tmp2 = null != guildId;
        if (tmp2) {
          tmp2 = stateFromStores;
        }
        if (tmp2) {
          action();
          transitionToGuild.transitionToGuild(guildId);
        }
      };
    } else {
      tmp13 = null;
    }
    ({ failureReason, guildJoinStatus: guildJoinStatus2 } = guildJoinStatus);
    let obj5 = { type: obj.CLOSE, text: null, action: null };
    const intl2 = intl(obj[4]).intl;
    obj5.text = intl2.string(intl(obj[4]).t.cpT0Cq);
    obj5.action = action;
    let tmp15 = obj5;
    if (null != tmp13) {
      const obj6 = { type: tmp14.GO_TO_SERVER, text: null, action: null };
      const intl3 = intl(obj[4]).intl;
      obj6.text = intl3.string(PLA9Om(obj[5]).H1wMHV);
      obj6.action = tmp13;
      tmp15 = obj6;
    }
    if (guildJoinStatus.joinStatus === constants2.JOINED) {
      const intl10 = intl(obj[4]).intl;
      const obj7 = { noun: PLA9OmResultResult };
      const formatToPlainStringResult = intl10.formatToPlainString(PLA9Om(obj[5])["w/spGp"], obj7);
      if (constants3.NEW_MEMBER !== guildJoinStatus2) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus2) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus2) {
            const obj8 = { title: formatToPlainStringResult, subtitle: null, cta: null };
            const intl13 = intl(obj[4]).intl;
            const obj9 = { noun: PLA9OmResultResult, orgName: str };
            obj5 = intl13.formatToPlainString(PLA9Om(obj[5])["9K7Jdt"], obj9);
            obj8.subtitle = obj5;
            obj8.cta = tmp15;
            let obj10 = obj8;
          } else if (constants3.APPLICATION !== guildJoinStatus2) {
            const FAILED = constants3.FAILED;
            obj10 = { title: formatToPlainStringResult, subtitle: null, cta: null };
            const intl11 = intl(obj[4]).intl;
            const obj11 = { noun: PLA9OmResultResult, orgName: str };
            obj10.subtitle = intl11.formatToPlainString(PLA9Om(obj[5]).Qo94hd, obj11);
            obj10.cta = obj5;
          }
          const obj12 = { title: formatToPlainStringResult, subtitle: null, cta: null };
          const intl12 = intl(obj[4]).intl;
          const obj13 = { noun: PLA9OmResultResult, orgName: str };
          obj12.subtitle = intl12.formatToPlainString(PLA9Om(obj[5]).ODHuua, obj13);
          obj12.cta = obj5;
          obj10 = obj12;
        }
      }
      const obj14 = { title: formatToPlainStringResult, subtitle: null, cta: null };
      if (null != name) {
        intl = intl(obj[4]).intl;
        PLA9Om = PLA9Om(obj[5]).PLA9Om;
        obj = { noun: PLA9OmResultResult, orgName: str, characterName: name };
        let formatToPlainStringResult1 = intl.formatToPlainString(PLA9Om, obj);
      } else {
        const intl14 = intl(obj[4]).intl;
        const obj15 = { noun: PLA9OmResultResult, orgName: str };
        formatToPlainStringResult1 = intl14.formatToPlainString(PLA9Om(obj[5]).WF9Qgb, obj15);
      }
      obj14.subtitle = formatToPlainStringResult1;
      obj14.cta = tmp15;
    } else {
      if (constants.ALREADY_JOINED === failureReason) {
        const obj16 = { title: null, cta: null };
        const intl9 = intl(obj[4]).intl;
        const obj17 = { noun: PLA9OmResultResult };
        obj16.title = intl9.formatToPlainString(PLA9Om(obj[5])["1PMPYk"], obj17);
        obj16.cta = tmp15;
        let obj21 = obj16;
      } else {
        if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
          const obj18 = { title: null, subtitle: null, cta: null };
          const intl7 = intl(obj[4]).intl;
          const obj19 = { noun: PLA9OmResultResult };
          obj18.title = intl7.formatToPlainString(PLA9Om(obj[5]).vSlR1j, obj19);
          const intl8 = intl(obj[4]).intl;
          const obj20 = { noun: PLA9OmResultResult };
          obj18.subtitle = intl8.formatToPlainString(PLA9Om(obj[5]).kvDHqp, obj20);
          obj18.cta = obj5;
          obj21 = obj18;
        } else if (constants.GUILD_FULL !== failureReason) {
          const OTHER = constants.OTHER;
          obj21 = { title: null, cta: null };
          const intl4 = intl(obj[4]).intl;
          obj21.title = intl4.string(PLA9Om(obj[5]).sXbaMb);
          obj21.cta = obj5;
        }
        const obj22 = { title: null, subtitle: null, cta: null };
        const intl5 = intl(obj[4]).intl;
        const obj23 = { noun: PLA9OmResultResult };
        obj22.title = intl5.formatToPlainString(PLA9Om(obj[5])["/7Gy4g"], obj23);
        const intl6 = intl(obj[4]).intl;
        obj22.subtitle = intl6.string(PLA9Om(obj[5])["8TGo9L"]);
        obj22.cta = obj5;
        obj21 = obj22;
      }
      const obj24 = {};
      const merged = Object.assign(obj21);
      obj24.isWaitingForGuild = tmp5;
    }
    const PLA9OmResult = PLA9Om(obj[8]);
    tmp14 = obj;
  }
  const obj2 = require("initialize");
};
export { GameOrganizationJoinOutcomeCtaType };