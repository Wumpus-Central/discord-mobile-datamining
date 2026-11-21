// === Module 12246: useGameOrganizationJoinOutcome ===

// Module 12246 (useGameOrganizationJoinOutcome)
import transitionToGuild from "transitionToGuild" /* 6835 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;

const require = globalThis.__r;

require = fn;
const GameOrganizationInviteConstants = fn(11896);
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
    let str;
    if (tmp3 != null) {
      str = tmp3.displayNoun;
    }
    if (str == null) {
      str = "other";
    }
    let str2;
    if (tmp3 != null) {
      str2 = tmp3.organization.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    let str3;
    if (tmp3 != null) {
      str3 = tmp3.linkedGuild.name;
    }
    if (str3 == null) {
      str3 = "";
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
      let tmp18 = function handleGoToServer() {
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
      tmp18 = null;
    }
    ({ failureReason, guildJoinStatus } = obj3);
    if (obj3.joinStatus === constants2.JOINED) {
      let obj4 = { type: obj.CLOSE, text: null, action: null };
      const intl9 = intl(formatToPlainStringResult2[4]).intl;
      obj4.text = intl9.string(intl(formatToPlainStringResult2[4]).t.i4jeWR);
      obj4.action = action;
      let tmp23 = obj4;
      if (null != tmp18) {
        const obj5 = { type: tmp22.GO_TO_SERVER, text: null, action: null };
        const intl10 = intl(formatToPlainStringResult2[4]).intl;
        obj5.text = intl10.string(v316Vsz(formatToPlainStringResult2[5]).H1wMHV);
        obj5.action = tmp18;
        tmp23 = obj5;
      }
      const obj6 = { key: "organization", status: obj2.SUCCESS, title: null, subtitle: null };
      const intl11 = intl(formatToPlainStringResult2[4]).intl;
      const obj7 = { orgName: str2, displayNoun: str };
      obj6.title = intl11.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).qJafqt, obj7);
      let formatToPlainStringResult = null;
      if (null != name) {
        const intl12 = intl(formatToPlainStringResult2[4]).intl;
        const obj8 = { characterName: name };
        formatToPlainStringResult = intl12.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).mvLVyz, obj8);
      }
      obj6.subtitle = formatToPlainStringResult;
      const obj9 = { title: null, rows: null, cta: null };
      const intl13 = intl(formatToPlainStringResult2[4]).intl;
      obj9.title = intl13.string(v316Vsz(formatToPlainStringResult2[5]).i3axsB);
      const items2 = [obj6, ];
      const intl14 = intl(formatToPlainStringResult2[4]).intl;
      const obj10 = { guildName: str3 };
      const formatToPlainStringResult1 = intl14.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).YoJwLe, obj10);
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          if (constants3.PENDING_VERIFICATION === guildJoinStatus) {
            let obj11 = { key: "server", status: tmp24.PENDING, title: formatToPlainStringResult1, subtitle: null };
            const intl16 = intl(formatToPlainStringResult2[4]).intl;
            obj11.subtitle = intl16.string(v316Vsz(formatToPlainStringResult2[5]).MgcCQT);
            let obj12 = obj11;
          } else if (constants3.APPLICATION === guildJoinStatus) {
            obj11 = { key: "server", status: tmp24.PENDING, title: formatToPlainStringResult1, subtitle: null };
            const intl15 = intl(formatToPlainStringResult2[4]).intl;
            obj11.subtitle = intl15.string(v316Vsz(formatToPlainStringResult2[5])["mZ/VKS"]);
            obj12 = obj11;
          } else {
            const FAILED = constants3.FAILED;
            obj12 = { key: "server", status: tmp24.ERROR, title: null, subtitle: null };
            const intl19 = intl(formatToPlainStringResult2[4]).intl;
            const obj13 = { guildName: str3 };
            obj12.title = intl19.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["4XMetY"], obj13);
            const intl20 = intl(formatToPlainStringResult2[4]).intl;
            const obj14 = { guildName: str3 };
            obj11 = intl20.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).FQoZBu, obj14);
            obj12.subtitle = obj11;
          }
        }
        items2[1] = obj12;
        obj9.rows = items2;
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
          obj4 = tmp23;
        }
        obj9.cta = obj4;
        let obj23 = obj9;
      }
      obj11 = { key: "server", status: obj2.SUCCESS, title: null, subtitle: null };
      const intl17 = intl(formatToPlainStringResult2[4]).intl;
      const obj15 = { guildName: str3 };
      obj11.title = intl17.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["Y2DU/l"], obj15);
      intl = intl(formatToPlainStringResult2[4]).intl;
      v316Vsz = v316Vsz(formatToPlainStringResult2[5])["316Vsz"];
      const obj16 = { displayNoun: str };
      formatToPlainStringResult2 = intl.formatToPlainString(v316Vsz, obj16);
      obj11.subtitle = formatToPlainStringResult2;
      obj12 = obj11;
      tmp22 = obj;
    } else {
      obj11 = { type: obj.CLOSE, text: null, action: null };
      const intl18 = intl(formatToPlainStringResult2[4]).intl;
      obj11.text = intl18.string(intl(formatToPlainStringResult2[4]).t.cpT0Cq);
      obj11.action = action;
      let tmp20 = obj11;
      if (null != tmp18) {
        const obj17 = { type: tmp32.GO_TO_SERVER, text: null, action: null };
        const intl2 = intl(formatToPlainStringResult2[4]).intl;
        obj17.text = intl2.string(v316Vsz(formatToPlainStringResult2[5]).H1wMHV);
        obj17.action = tmp18;
        tmp20 = obj17;
      }
      if (constants.ALREADY_JOINED === failureReason) {
        const obj18 = { title: null, cta: null };
        const intl8 = intl(formatToPlainStringResult2[4]).intl;
        const obj19 = { displayNoun: str };
        obj11 = intl8.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["1PMPYk"], obj19);
        obj18.title = obj11;
        obj18.cta = tmp20;
        obj23 = obj18;
      } else {
        if (constants.IN_ANOTHER_ORGANIZATION === failureReason) {
          const obj20 = { title: null, subtitle: null, cta: null };
          const intl6 = intl(formatToPlainStringResult2[4]).intl;
          const obj21 = { displayNoun: str };
          obj20.title = intl6.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).vSlR1j, obj21);
          const intl7 = intl(formatToPlainStringResult2[4]).intl;
          const obj22 = { displayNoun: str };
          obj20.subtitle = intl7.formatToPlainString(v316Vsz(formatToPlainStringResult2[5]).kvDHqp, obj22);
          obj20.cta = obj11;
          obj23 = obj20;
        } else if (constants.GUILD_FULL !== failureReason) {
          const OTHER = constants.OTHER;
          obj23 = { title: null, cta: null };
          const intl3 = intl(formatToPlainStringResult2[4]).intl;
          obj23.title = intl3.string(v316Vsz(formatToPlainStringResult2[5]).sXbaMb);
          obj23.cta = obj11;
        }
        const obj24 = { title: null, subtitle: null, cta: null };
        const intl4 = intl(formatToPlainStringResult2[4]).intl;
        const obj25 = { displayNoun: str };
        obj24.title = intl4.formatToPlainString(v316Vsz(formatToPlainStringResult2[5])["/7Gy4g"], obj25);
        const intl5 = intl(formatToPlainStringResult2[4]).intl;
        obj24.subtitle = intl5.string(v316Vsz(formatToPlainStringResult2[5])["8TGo9L"]);
        obj24.cta = obj11;
        obj23 = obj24;
      }
      tmp32 = obj;
    }
    const obj26 = {};
    const merged1 = Object.assign(obj23);
    obj26.isWaitingForGuild = tmp10;
  }
};
export { GameOrganizationJoinOutcomeCtaType };
export const GameOrganizationJoinOutcomeRowStatus = obj2;