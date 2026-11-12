// discord_app/modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx
import _modDef2549 from "../GameOrganizationInvitesUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import useResolvedGameOrganizationInviteDefault from "../useResolvedGameOrganizationInvite.tsx";
import getGameOrganizationDisplayNounDefault from "../getGameOrganizationDisplayNoun.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(hasOwnProperty);
}
const GameOrganizationInviteConstants = fn(12274);
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
    let obj2 = { displayNoun: tmp3.displayNoun, lowercase: true };
    const tmp11 = getGameOrganizationDisplayNounDefault(obj2);
    if (reason === constants.NO_CHARACTERS) {
      let lXyJMS = _modDef2549.lXyJMS;
    } else {
      lXyJMS = _modDef2549["IIR/NZ"];
    }
    const obj3 = {
      header: jsx(tmp5(7847).BottomSheetTitleHeader, { title: null }),
      title: null,
      description: null,
      actions: null,
    };
    const intl = tmp5(1113).intl;
    const obj4 = { noun: tmp11 };
    obj3.title = intl.formatToPlainString(_modDef2549.DinVUQ, obj4);
    const intl2 = tmp5(1113).intl;
    const obj5 = { noun: tmp11, guildName: tmp3.linkedGuild.name };
    obj3.description = intl2.formatToPlainString(lXyJMS, obj5);
    if (stateFromStores) {
      const obj6 = { text: null, size: "lg", onPress: null };
      const intl4 = tmp5(1113).intl;
      obj6.text = intl4.string(_modDef2549.H1wMHV);
      obj6.onPress = tmp7;
      let obj7 = obj6;
    } else {
      obj7 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl3 = tmp5(1113).intl;
      obj7.text = intl3.string(tmp5(1113).t.cpT0Cq);
      obj7.onPress = hideSheet;
    }
    obj3.actions = jsx(tmp5(5873).Button, obj7);
    return jsx(tmp5(10644).PromoSheet, {
      header: jsx(tmp5(7847).BottomSheetTitleHeader, { title: null }),
      title: null,
      description: null,
      actions: null,
    });
  }
  let obj = guildId(504);
}
