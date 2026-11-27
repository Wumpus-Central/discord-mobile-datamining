// discord_app/modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx
import _modDef2651 from "../GameOrganizationInvitesUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import useResolvedGameOrganizationInviteDefault from "../useResolvedGameOrganizationInvite.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(hasOwnProperty);
}
const GameOrganizationInviteConstants = fn(11925);
({ GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY: hasOwnProperty, GameOrganizationCantJoinReasons: closure_6 } =
  GameOrganizationInviteConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx",
);

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
    let str = tmp3.displayNoun;
    if (str == null) {
      str = "other";
    }
    if (reason === constants.NO_CHARACTERS) {
      let lXyJMS = _modDef2651.lXyJMS;
    } else {
      lXyJMS = _modDef2651["IIR/NZ"];
    }
    let obj2 = {
      header: jsx(tmp5(7507).BottomSheetTitleHeader, { title: null }),
      title: null,
      description: null,
      actions: null,
    };
    const intl = tmp5(1112).intl;
    const obj3 = { displayNoun: str };
    obj2.title = intl.formatToPlainString(_modDef2651.DinVUQ, obj3);
    const intl2 = tmp5(1112).intl;
    const obj4 = { displayNoun: str, guildName: tmp3.linkedGuild.name };
    obj2.description = intl2.formatToPlainString(lXyJMS, obj4);
    if (stateFromStores) {
      const obj5 = { text: null, size: "lg", onPress: null };
      const intl4 = tmp5(1112).intl;
      obj5.text = intl4.string(_modDef2651.H1wMHV);
      obj5.onPress = tmp7;
      let obj6 = obj5;
    } else {
      obj6 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl3 = tmp5(1112).intl;
      obj6.text = intl3.string(tmp5(1112).t.cpT0Cq);
      obj6.onPress = hideSheet;
    }
    obj2.actions = jsx(tmp5(5641).Button, obj6);
    return jsx(tmp5(10748).PromoSheet, {
      header: jsx(tmp5(7507).BottomSheetTitleHeader, { title: null }),
      title: null,
      description: null,
      actions: null,
    });
  }
  let obj = guildId(504);
}
