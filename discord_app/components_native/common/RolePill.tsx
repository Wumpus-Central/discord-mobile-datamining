// === Module 9971: RolePill ===

// Module 9971 (RolePill)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ EMPTY_STRING_SNOWFLAKE_ID: c4, MAX_VISUAL_ROLE_LENGTH: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginRight: 4, marginBottom: 4, borderRadius: ThemesDefault.radii.xs };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 6, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { marginRight: 8, borderRadius: ThemesDefault.radii.sm, height: 12, width: 12, backgroundColor: ThemesDefault.colors.ICON_MUTED };
createCacheKey[3] = { marginRight: 8, borderRadius: ThemesDefault.radii.sm, height: 12, width: 12 };
createCacheKey[4] = { paddingRight: 4 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  role = role.role;
  ({ guildId, color } = role);
  const DeveloperMode = role(4066).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  role(7163);
  let obj = { guildId, roleId: role.id, size: 12 };
  const roleIcon = obj.useRoleIcon(obj);
  let name = role.name;
  let combined = name;
  if (role.name.length > closure_5) {
    name = role.name;
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, tmp5) + "...";
    name = combined;
  }
  if (color == null) {
    color = role.colorString;
  }
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  const tmp9 = callback();
  let disableInteraction = !setting;
  if (setting) {
    disableInteraction = role.disableInteraction;
  }
  obj = {
    disabled: disableInteraction,
    style: tmp9.container,
    onPress: function handlePress() {
      role(dependencyMap[8]).copy(role.id);
      const obj = role(dependencyMap[8]);
      role(dependencyMap[9]).roleIdCopied(combined);
    },
    accessible: false,
    children: null
  };
  obj1 = { style: tmp9.pill, children: null };
  if (undefined !== guild_connections) {
    const obj2 = { style: null, roleId: null, guildId: null, roleColor: null, size: 14, displayRoleIcon: false };
    obj2[0] = tmp9.verifiedContainer;
    obj2[1] = role.id;
    if (guildId == null) {
      guildId = closure_4;
    }
    obj2[2] = guildId;
    obj2[3] = color;
    let tmp10Result = callback(combined(7182), obj2);
    const tmp15 = combined(7182);
  } else {
    const items = [tmp9.bubble, ];
    if (null != color) {
      const obj3 = { backgroundColor: null };
      obj3[0] = color;
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const obj5 = { style: null };
    items[1] = obj4;
    obj5[0] = items;
    tmp10Result = callback(View, obj5);
  }
  const items1 = [tmp10Result, , ];
  tmp10Result = null;
  if (null != roleIcon) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp9.roleIcon;
    obj6[1] = roleIcon;
    tmp10Result = callback(View, obj6);
  }
  items1[1] = tmp10Result;
  items1[2] = callback(role(4734).Text, { variant: "text-xs/semibold", color: "interactive-text-active", children: name });
  obj1[1] = items1;
  obj[4] = callback2(View, obj1);
  return callback(role(5433).PressableHighlight, obj);
};