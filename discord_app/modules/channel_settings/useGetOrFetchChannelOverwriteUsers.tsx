// discord_app/modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../../stores/GuildMemberStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_5];
  const items1 = [arg0];
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(
    items,
    () => closure_1_5.getMemberIds(closure_0),
    items1,
  );
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(
    React.useMemo(() => {
      if (null == callback2) {
        let items = [];
      } else {
        const _Object = Object;
        const values = Object.values(tmp2);
        const found = values.filter((type) => type.type === callback(closure_2[4]).PermissionOverwriteType.MEMBER);
        items = found.map((id) => id.id);
      }
      return callback2(stateFromStoresArray[6])(items, (arg0) => closure_2.includes(arg0));
    }, items2),
    2,
  );
  first = tmp2[0];
  React = tmp4;
  const items3 = [tmp2[1], arg0];
  const effect = React.useEffect(() => {
    let tmp2 = length.length > 0;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const membersById = callback2(stateFromStoresArray[7]).requestMembersById(closure_0, length, false);
      const obj = callback2(stateFromStoresArray[7]);
    }
  }, items3);
  let obj = _require(stateFromStoresArray[5]);
  const items4 = [closure_6];
  const items5 = [first];
  return _require(stateFromStoresArray[5]).useStateFromStoresArray(
    items4,
    () => {
      const mapped = first.map(closure_1_6.getUser);
      return mapped.filter(callback(stateFromStoresArray[8]).isNotNullish);
    },
    items5,
  );
}
