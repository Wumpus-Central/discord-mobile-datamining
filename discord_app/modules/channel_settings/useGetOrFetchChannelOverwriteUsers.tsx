// discord_app/modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import _modDef16827 from "../../../_runtime/metro/16827__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [GuildMemberStore];
  const items1 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => GuildMemberStore.getMemberIds(closure_0),
    items1,
  );
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(
    noop.useMemo(() => {
      if (null == closure_1) {
        let items = [];
      } else {
        const _Object = Object;
        const values = Object.values(tmp2);
        const found = values.filter(
          (type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER,
        );
        items = found.map((id) => id.id);
      }
      return _modDef16827(items, (arg0) => stateFromStoresArray.includes(arg0));
    }, items2),
    2,
  );
  first = tmp2[0];
  noop = tmp4;
  const items3 = [tmp2[1], arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = length.length > 0;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(closure_0, length, false);
    }
  }, items3);
  let obj = require("initialize");
  const items4 = [UserStore];
  const items5 = [first];
  return require("initialize").useStateFromStoresArray(
    items4,
    () => {
      const mapped = first.map(UserStore.getUser);
      return mapped.filter(GlobalUtils.isNotNullish);
    },
    items5,
  );
}
