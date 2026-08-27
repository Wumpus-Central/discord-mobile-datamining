// === Module 11346: MemberRolesList ===

// Module 11346 (MemberRolesList)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 1985 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles({ wrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
const result = require("set").fileFinishedImporting("components_native/MemberRolesList.tsx");

export default function MemberRolesList(userRoles) {
  userRoles = userRoles.userRoles;
  const guild = userRoles.guild;
  let obj = userRoles(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getSortedRoles(guild.id));
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
      obj[0] = items1;
      obj[1] = sorted.map((id) => closure_1_5(guild(closure_1_2[6]), { role: id, guildId: guild.id }, id.id));
      tmp2Result = <View style={null}>{null}</View>;
    }
  }
  return tmp2Result;
};