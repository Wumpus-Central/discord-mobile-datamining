const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileRoleUtils.tsx");

export const sortRolesByVerification = function sortRolesByVerification(tags, tags2) {
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
  if (undefined === guild_connections) {
    if (tmp3) {
      let num2 = require(1939) /* compareGuildRoles */.compareGuildRoles(tags, tags2);
      const obj = require(1939) /* compareGuildRoles */;
    } else {
      num2 = -1;
    }
    let num = num2;
  } else {
    num = 1;
  }
  return num;
};