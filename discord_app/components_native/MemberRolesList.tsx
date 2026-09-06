// discord_app/components_native/MemberRolesList.tsx
import RolePillDefault from "common/RolePill.tsx";
import noop from "../../_runtime/metro/00019__.js";
import GuildRoleStore from "../stores/GuildRoleStore.tsx";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({
  wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MemberRolesList.tsx");

export default function MemberRolesList(userRoles) {
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  let obj = userRoles(504);
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  const tmp4 = <View />;
  let tmp2Result = tmp4;
  if (null != userRoles) {
    tmp2Result = tmp4;
    if (userRoles.length > 0) {
      const found = stateFromStores.filter((id) => userRoles.includes(id.id));
      const sorted = found.sort((tags, tags2) => {
        tags = tags.tags;
        let guild_connections;
        if (tags != null) {
          guild_connections = tags.guild_connections;
        }
        tags2 = tags2.tags;
        let guild_connections1;
        if (tags2 != null) {
          guild_connections1 = tags2.guild_connections;
        }
        if (null === guild_connections) {
          let num2 = 0;
          if (!tmp3) {
            num2 = 0;
            if (tmp4) {
              num2 = -1;
            }
          }
          let num = num2;
        } else {
          num = 1;
        }
        return num;
      });
      obj = { style: null, children: null };
      const items1 = [tmp.wrapper, userRoles.style];
      obj.style = items1;
      obj.children = sorted.map((role) => jsx(RolePillDefault, { role, guildId: guild.id }, role.id));
      tmp2Result = <View style={null}>{null}</View>;
    }
  }
  return tmp2Result;
}
