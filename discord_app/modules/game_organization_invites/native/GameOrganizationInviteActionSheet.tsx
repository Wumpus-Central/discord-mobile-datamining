// discord_app/modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import InstantInviteUtils from "../../../utils/InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../actions/InviteSuggestionsActionCreators.tsx";
import getGameOrganizationInviteSendStateKeyDefault from "../getGameOrganizationInviteSendStateKey.tsx";
import sendGameOrganizationInviteDefault from "../sendGameOrganizationInvite.tsx";
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../stores/InviteSuggestionsStore.tsx";

require = fn;
function isInvitableUserRow(type) {
  let tmp3 = type.type === InstantInviteUtils.RowTypes.FRIEND;
  if (!tmp3) {
    tmp3 = type.type === InstantInviteUtils.RowTypes.DM;
  }
  if (tmp3) {
    tmp3 = !type.item.bot;
  }
  return tmp3;
}
function Loading() {
  const children = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = children.push(closure_1_10(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return closure_1_10(View, { children });
}
const View = fn(17).View;
let closure_6 = fn(9180).useInstantInviteSendStates;
const NOOP_NULL = fn(1083).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx",
);

export default function GameOrganizationInviteActionSheet(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_5 = undefined;
  const tmp = closure_12();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.linkedGameOrganization;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = stateFromStores(11614)(stateFromStores);
  }
  dependencyMap = tmp5;
  const tmp7 = closure_6((arg0) => {
    let tmp2;
    if (null != closure_2) {
      tmp2 = arg0[tmp];
    }
    return tmp2;
  });
  _slicedToArray = tmp7;
  let obj = guildId(504);
  const items1 = [InviteSuggestionsStore];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(items1, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(isInvitableUserRow);
    return found.map((item) => item.item);
  });
  const tmp9 = _slicedToArray(noop.useState(true), 2);
  noop = tmp9[1];
  closure_5 = noop.useRef("");
  const callback = noop.useCallback((current) => {
    closure_5.current = current;
    const result = InviteSuggestionsActionCreators.searchInviteSuggestions(current);
  }, []);
  const effect = noop.useEffect(() => {
    const obj2 = { omitUserIds: null };
    let obj = InviteSuggestionsActionCreators;
    obj2.omitUserIds = new Set();
    const inviteSuggestions = obj.loadInviteSuggestions(obj2);
    const set = new Set();
    const nextPromise = inviteSuggestions.then(() => {
      if ("" !== ref.current) {
        const result = guildId(dependencyMap[14]).searchInviteSuggestions(tmp.current);
        const obj = guildId(dependencyMap[14]);
      }
    });
    inviteSuggestions
      .then(() => {
        if ("" !== ref.current) {
          const result = guildId(dependencyMap[14]).searchInviteSuggestions(tmp.current);
          const obj = guildId(dependencyMap[14]);
        }
      })
      .catch(NOOP_NULL)
      .finally(() => closure_1_4(false));
  }, []);
  const items2 = [tmp7];
  const items3 = [stateFromStores];
  const callback1 = noop.useCallback((arg0) => {
    let tmp2;
    if (closure_3 != null) {
      tmp2 = tmp[arg0];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items2);
  const callback2 = noop.useCallback((stateFromStores2) => {
    if (null != stateFromStores) {
      const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
      sendGameOrganizationInviteDefault(
        tmp6,
        stateFromStores,
        stateFromStores2,
        showGameOrganizationInviteErrorToastDefault,
      );
    }
  }, items3);
  const intl = tmp2(1114).intl;
  const stringResult = intl.string(stateFromStores(2405).nVMqjA);
  let obj2 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl2 = tmp2(1114).intl;
  obj2.dismissAccessibilityLabel = intl2.string(guildId(1114).t.cpT0Cq);
  const obj3 = { spacing: stateFromStores(575).space.PX_16, style: tmp.header, children: null };
  const obj4 = { spacing: stateFromStores(575).space.PX_4, children: null };
  const obj5 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: tmp.centeredText,
    children: null,
  };
  const intl3 = tmp2(1114).intl;
  obj5.children = intl3.formatToPlainString(stateFromStores(2405).EnTIIr, { noun: stringResult });
  const items4 = [closure_10(guildId(5619).Heading, obj5)];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
  const intl4 = tmp2(1114).intl;
  obj6.children = intl4.formatToPlainString(stateFromStores(2405).BBk7Qw, { noun: stringResult });
  items4[1] = closure_10(guildId(5619).Text, obj6);
  obj4.children = items4;
  const items5 = [closure_11(guildId(6022).Stack, obj4)];
  const obj7 = { size: "md", round: true, onChange: callback, placeholder: null };
  const intl5 = tmp2(1114).intl;
  obj7.placeholder = intl5.formatToPlainString(stateFromStores(2405).cRK6SQ, { noun: stringResult });
  items5[1] = closure_10(guildId(7212).SearchBar, obj7);
  obj3.children = items5;
  obj2.header = closure_11(guildId(6022).Stack, obj3);
  if (tmp9[0]) {
    let tmp16Result = closure_10(Loading, {});
  } else {
    const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp16Result = closure_10(stateFromStores(15747), obj8);
  }
  obj2.children = tmp16Result;
  return closure_10(guildId(7360).ActionSheet, obj2);
}
