// === Module 12202: useGameOrganizationJoinOutcome ===

// Module 12202 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 6743 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4694 */;

const require = globalThis.__r;

require = fn;
const GameOrganizationInviteConstants = fn(11856);
({ GameOrganizationInviteAcceptFailureReason: closure_6, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: closure_8 } = GameOrganizationInviteConstants);
const GameOrganizationJoinOutcomeCtaType = { GO_TO_SERVER: "GO_TO_SERVER", CLOSE: "CLOSE" };
const obj2 = { SUCCESS: "SUCCESS", PENDING: "PENDING", ERROR: "ERROR" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationJoinOutcome.tsx");

export default function useGameOrganizationJoinOutcome(arg0, guildJoinStatus, action) {
  _require = action;
  let v316Vsz = guildId;
  let formatToPlainStringResult2 = stateFromStores;
  let flag;
  const tmp3 = guildId(stateFromStores[6])(arg0);
  guildId = undefined;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  let intl = _require;
  let obj = require("initialize");
  items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null != GuildStore.getGuild(tmp);
    }
    return tmp2;
  });
  const tmp6 = _slicedToArray(flag2.useState(false), 2);
  _slicedToArray = tmp6[1];
  let guildJoinStatus1;
  if (guildJoinStatus != null) {
    guildJoinStatus1 = guildJoinStatus.guildJoinStatus;
  }
  if (guildJoinStatus1 == null) {
    guildJoinStatus1 = null;
  }
  let ALREADY_MEMBER = guildJoinStatus1;
  if (stateFromStores) {
    if (null == guildJoinStatus1) {
      ALREADY_MEMBER = constants3.ALREADY_MEMBER;
    } else {
      ALREADY_MEMBER = guildJoinStatus1;
    }
  }
  let tmp10 = null != guildJoinStatus && !stateFromStores && !tmp6[0];
  if (tmp10) {
    flag2 = false;
    if (guildJoinStatus.joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== ALREADY_MEMBER) {
        if (constants3.ALREADY_MEMBER !== ALREADY_MEMBER) {
          flag2 = false;
        }
      }
      flag2 = true;
    }
    tmp10 = flag2;
  }
  flag2 = tmp10;
  const items1 = [tmp10];
  const effect = obj2.useEffect(() => {
    if (flag2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_3(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  if (null == guildJoinStatus) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(guildJoinStatus);
    obj3.guildJoinStatus = ALREADY_MEMBER;
    let displayNoun;
    if (tmp3 != null) {
      displayNoun = tmp3.displayNoun;
    }
    if (displayNoun == null) {
      displayNoun = null;
    }
    const obj4 = { displayNoun, lowercase: true };
    const tmpResultResult = v316Vsz(formatToPlainStringResult2[8])(obj4);
    let str;
    if (tmp3 != null) {
      str = tmp3.organization.name;
    }
    if (str == null) {
      str = "";
    }
    let str2;
    if (tmp3 != null) {
      str2 = tmp3.linkedGuild.name;
    }
    if (str2 == null) {
      str2 = "";
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
      let tmp21 = function handleGoToServer() {
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
      tmp21 = null;
    }
    ({ failureReason, guildJoinStatus } = obj3);
    if (obj3.joinStatus === constants2.JOINED) {
      let obj5 = { type: obj.CLOSE, text: null, action: null };
      const intl9 = intl(formatToPlainStringResult2[4]).intl;
      obj5.text = intl9.string(intl(formatToPlainStringResult2[4]).t.i4jeWR);
      obj5.action = action;
      let tmp26 = obj5;
      if (null != tmp21) {
        const obj6 = { type: tmp25.GO_TO_SERVER, text: null, action: null };
        const intl10 = intl(formatToPlainStringResult2[4]).intl;
        obj6.text = intl10.string(v316Vsz(formatToPlainStringResult2[5]).H1wMHV);
        obj6.action = tmp21;
        tmp26 = obj6;
      }
      const obj7 = { key: "organization", status: obj2.SUCCESS, title: null, subtitle: null };
      const intl11 = intl(formatToPlainStringResult2[4]).intl;
      const obj8 = { orgName: str, noun: tmpResultResult };
      obj7.title = intl11.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).qJafqt, obj8);
      let formatToPlainStringResult = null;
      if (null != name) {
        const intl12 = intl(formatToPlainStringResult2[4]).intl;
        const obj9 = { characterName: name };
        formatToPlainStringResult = intl12.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).mvLVyz, obj9);
      }
      obj7.subtitle = formatToPlainStringResult;
      const obj10 = { title: null, rows: null, cta: null };
      const intl13 = intl(formatToPlainStringResult2[4]).intl;
      obj10.title = intl13.string(v316Vsz(formatToPlainStringResult2[5]).i3axsB);
      const items2 = [obj7, ];
      const intl14 = intl(formatToPlainStringResult2[4]).intl;
      const obj11 = { guildName: str2 };
      const formatToPlainStringResult1 = intl14.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).YoJwLe, obj11);
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
            let obj12 = { key: "server", status: tmp27.PENDING, title: formatToPlainStringResult1, subtitle: null };
            const intl16 = intl(formatToPlainStringResult2[4]).intl;
            obj12.subtitle = intl16.string(v316Vsz(formatToPlainStringResult2[5]).MgcCQT);
            let obj13 = obj12;
          } else if (constants3.APPLICATION === guildJoinStatus) {
            obj12 = { key: "server", status: tmp27.PENDING, title: formatToPlainStringResult1, subtitle: null };
            const intl15 = intl(formatToPlainStringResult2[4]).intl;
            obj12.subtitle = intl15.string(v316Vsz(formatToPlainStringResult2[5])["mZ/VKS"]);
            obj13 = obj12;
          } else {
            const FAILED = constants3.FAILED;
            obj13 = { key: "server", status: tmp27.ERROR, title: null, subtitle: null };
            const intl19 = intl(formatToPlainStringResult2[4]).intl;
            const obj14 = { guildName: str2 };
            obj13.title = intl19.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["4XMetY"], obj14);
            const intl20 = intl(formatToPlainStringResult2[4]).intl;
            const obj15 = { guildName: str2 };
            obj12 = intl20.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).FQoZBu, obj15);
            obj13.subtitle = obj12;
          }
        }
        items2[1] = obj13;
        obj10.rows = items2;
        flag = false;
        if (constants2.JOINED === constants2.JOINED) {
          if (constants3.NEW_MEMBER !== guildJoinStatus) {
            if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
              flag = false;
            }
          }
          flag = true;
        }
        if (flag) {
          obj5 = tmp26;
        }
        obj10.cta = obj5;
        let obj24 = obj10;
      }
      obj12 = { key: "server", status: obj2.SUCCESS, title: null, subtitle: null };
      const intl17 = intl(formatToPlainStringResult2[4]).intl;
      const obj16 = { guildName: str2 };
      obj12.title = intl17.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["Y2DU/l"], obj16);
      intl = intl(formatToPlainStringResult2[4]).intl;
      v316Vsz = v316Vsz(formatToPlainStringResult2[5])["316Vsz"];
      const obj17 = { noun: tmpResultResult };
      formatToPlainStringResult2 = intl.formatToPlainString(v316Vsz, obj17);
      obj12.subtitle = formatToPlainStringResult2;
      obj13 = obj12;
      tmp25 = obj;
    } else {
      obj12 = { type: obj.CLOSE, text: null, action: null };
      const intl18 = intl(formatToPlainStringResult2[4]).intl;
      obj12.text = intl18.string(intl(formatToPlainStringResult2[4]).t.cpT0Cq);
      obj12.action = action;
      let tmp23 = obj12;
      if (null != tmp21) {
        const obj18 = { type: tmp35.GO_TO_SERVER, text: null, action: null };
        const intl2 = intl(formatToPlainStringResult2[4]).intl;
        obj18.text = intl2.string(v316Vsz(formatToPlainStringResult2[5]).H1wMHV);
        obj18.action = tmp21;
        tmp23 = obj18;
      }
      if (constants.ALREADY_JOINED === failureReason) {
        const obj19 = { title: null, cta: null };
        const intl8 = intl(formatToPlainStringResult2[4]).intl;
        const obj20 = { noun: tmpResultResult };
        obj12 = intl8.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["1PMPYk"], obj20);
        obj19.title = obj12;
        obj19.cta = tmp23;
        obj24 = obj19;
      } else {
        if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
          const obj21 = { title: null, subtitle: null, cta: null };
          const intl6 = intl(formatToPlainStringResult2[4]).intl;
          const obj22 = { noun: tmpResultResult };
          obj21.title = intl6.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).vSlR1j, obj22);
          const intl7 = intl(formatToPlainStringResult2[4]).intl;
          const obj23 = { noun: tmpResultResult };
          obj21.subtitle = intl7.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).kvDHqp, obj23);
          obj21.cta = obj12;
          obj24 = obj21;
        } else if (constants.GUILD_FULL !== failureReason) {
          const OTHER = constants.OTHER;
          obj24 = { title: null, cta: null };
          const intl3 = intl(formatToPlainStringResult2[4]).intl;
          obj24.title = intl3.string(v316Vsz(formatToPlainStringResult2[5]).sXbaMb);
          obj24.cta = obj12;
        }
        const obj25 = { title: null, subtitle: null, cta: null };
        const intl4 = intl(formatToPlainStringResult2[4]).intl;
        const obj26 = { noun: tmpResultResult };
        obj25.title = intl4.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["/7Gy4g"], obj26);
        const intl5 = intl(formatToPlainStringResult2[4]).intl;
        obj25.subtitle = intl5.string(v316Vsz(formatToPlainStringResult2[5])["8TGo9L"]);
        obj25.cta = obj12;
        obj24 = obj25;
      }
      tmp35 = obj;
    }
    const obj27 = {};
    const merged1 = Object.assign(obj24);
    obj27.isWaitingForGuild = tmp10;
    const v316VszResult = v316Vsz(formatToPlainStringResult2[8]);
  }
};
export { GameOrganizationJoinOutcomeCtaType };
export const GameOrganizationJoinOutcomeRowStatus = obj2;