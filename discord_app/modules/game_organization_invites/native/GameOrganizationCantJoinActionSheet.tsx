// === Module 13441: GameOrganizationCantJoinActionSheet ===

// Module 13441 (GameOrganizationCantJoinActionSheet)
import _modDef2530 from "module_2530" /* 2530 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import transitionToGuild from "transitionToGuild" /* 7594 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 13442 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13443 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(hasOwnProperty);
}
const GameOrganizationInviteConstants = fn(11504);
({ GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY: hasOwnProperty, GameOrganizationCantJoinReasons: closure_6 } = GameOrganizationInviteConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx");

export default function GameOrganizationCantJoinActionSheet(arg0) {
  ({ code, reason } = arg0);
  const tmp3 = useResolvedGameOrganizationInviteDefault(code);
  let guildId;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  items = [GuildStore];
  [][0] = guildId;
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null != GuildStore.getGuild(tmp);
    }
    return tmp2;
  });
  if (null == tmp3) {
    return null;
  } else {
    let obj2 = { displayNoun: tmp3.displayNoun, lowercase: true };
    const tmp11 = getGameOrganizationDisplayNounDefault(obj2);
    if (reason === constants.NO_CHARACTERS) {
      let lXyJMS = _modDef2530.lXyJMS;
    } else {
      lXyJMS = _modDef2530["IIR/NZ"];
    }
    const obj3 = { header: jsx(tmp5(7382).BottomSheetTitleHeader, { title: null }), title: null, description: null, actions: null };
    const intl = tmp5(1113).intl;
    const obj4 = { noun: tmp11 };
    obj3.title = intl.formatToPlainString(_modDef2530.DinVUQ, obj4);
    const intl2 = tmp5(1113).intl;
    const obj5 = { noun: tmp11, guildName: tmp3.linkedGuild.name };
    obj3.description = intl2.formatToPlainString(lXyJMS, obj5);
    if (stateFromStores) {
      const obj6 = { text: null, size: "lg", onPress: null };
      const intl4 = tmp5(1113).intl;
      obj6.text = intl4.string(_modDef2530.H1wMHV);
      obj6.onPress = tmp7;
      let obj7 = obj6;
    } else {
      obj7 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl3 = tmp5(1113).intl;
      obj7.text = intl3.string(tmp5(1113).t.cpT0Cq);
      obj7.onPress = hideSheet;
    }
    obj3.actions = jsx(tmp5(5758).Button, obj7);
    return jsx(tmp5(10956).PromoSheet, { header: jsx(tmp5(7382).BottomSheetTitleHeader, { title: null }), title: null, description: null, actions: null });
  }
  let obj = guildId(504);
};