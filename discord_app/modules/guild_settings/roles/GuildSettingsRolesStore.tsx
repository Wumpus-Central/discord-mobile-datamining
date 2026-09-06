// discord_app/modules/guild_settings/roles/GuildSettingsRolesStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import PlainRecord from "../../../lib/PlainRecord.tsx";
import GuildRoleRecord from "../../../records/GuildRoleRecord.tsx";
import EnhancedRoleColorUtils from "../../premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import useHasEnhancedRoleColors from "../../premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import DragAndDropUtilsDefault from "../../../utils/DragAndDropUtils.tsx";
import GuildSettingsConstants from "../GuildSettingsConstants.tsx";
import GuildRoleConnectionsConfigurationStore from "../../connections/GuildRoleConnectionsConfigurationStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import EnhancedRoleColorConstants from "../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import apply from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

function handleSetSection(arg0) {
  if (null == closure_4) {
    if (tmp === constants.ROLES) {
      handleInit();
    }
  }
  return false;
}
function handleInit() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const guild = GuildSettingsStore.getProps().guild;
  c23 = false;
  c24 = false;
  c6 = undefined;
  set.clear();
  map2.clear();
  OPEN = FormStates.OPEN;
  if (null != guild) {
    items = [];
    HermesBuiltin.arraySpread(GuildRoleStore.getSortedRoles(guild.id), 0);
    let items1 = items;
  } else {
    items1 = [];
  }
  items2 = [...items1];
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const item = items2.forEach((colors) => {
    let GRADIENT = styleColors.SOLID;
    styleColors = useHasEnhancedRoleColors;
    if (!tmp2) {
      styleColors = {};
      styleColors = { primary_color, secondary_color: null, tertiary_color: null };
      styleColors[tmp.SOLID] = styleColors;
      ({ primary_color: obj4.primary_color, secondary_color: obj4.secondary_color } = closure_2_17);
      styleColors[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
      ({
        primary_color: obj5.primary_color,
        secondary_color: obj5.secondary_color,
        tertiary_color: obj5.tertiary_color,
      } = collapsedCategories);
      styleColors[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
      if (null != colors.colors) {
        primary_color = colors.colors.primary_color;
        if (primary_color == null) {
          primary_color = tmp4;
        }
        const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
        let secondary_color = colors.colors.secondary_color;
        if (secondary_color == null) {
          secondary_color = null;
        }
        obj3.secondary_color = secondary_color;
        let tertiary_color = colors.colors.tertiary_color;
        if (tertiary_color == null) {
          tertiary_color = null;
        }
        obj3.tertiary_color = tertiary_color;
        styleColors[GRADIENT] = obj3;
      }
      const obj4 = { currentStyle: GRADIENT, styleColors };
      const result = map2.set(colors.id, obj4);
    } else if (null != colors.colors.tertiary_color) {
      GRADIENT = tmp.HOLOGRAPHIC;
    } else if (null != colors.colors.secondary_color) {
      GRADIENT = tmp.GRADIENT;
    }
  });
  c27 = false;
  if (flag) {
    map1.clear();
    const item1 = map.forEach((item, index) => {
      items = [...item];
      const result = map1.set(index, items);
    });
  }
}
function syncGuildChanges(guildId) {
  guildId = guildId.guildId;
  items = undefined;
  map = undefined;
  const guild = GuildSettingsStore.getProps().guild;
  if (null != guild) {
    if (guildId === guild.id) {
      if (OPEN !== FormStates.SUBMITTING) {
        items = [];
        HermesBuiltin.arraySpread(GuildRoleStore.getSortedRoles(guild.id), 0);
        const item = set.forEach((item) => {
          closure_0 = item;
          const found = items.find((id) => id.id === closure_0);
          closure_1 = -1;
          if (
            null !=
            items.find((id, index) => {
              if (id.id === closure_0) {
                closure_1 = index;
                return true;
              }
            })
          ) {
            if (null != found) {
              items[closure_1] = found;
            }
          }
          set.delete(item);
          if (0 === set.size) {
            c23 = false;
          }
        });
        const _Map = Map;
        map = new Map();
        const item1 = set.forEach((item) => {
          value = map2.get(item);
          if (null != value) {
            const result = map.set(item, value);
          }
        });
        map2.clear();
        closure_129_0 = guildId;
        const item2 = items.forEach((colors) => {
          let GRADIENT = styleColors.SOLID;
          styleColors = useHasEnhancedRoleColors;
          if (!tmp2) {
            styleColors = {};
            styleColors = { primary_color, secondary_color: null, tertiary_color: null };
            styleColors[tmp.SOLID] = styleColors;
            ({ primary_color: obj4.primary_color, secondary_color: obj4.secondary_color } = closure_2_17);
            styleColors[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({
              primary_color: obj5.primary_color,
              secondary_color: obj5.secondary_color,
              tertiary_color: obj5.tertiary_color,
            } = collapsedCategories);
            styleColors[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
            if (null != colors.colors) {
              primary_color = colors.colors.primary_color;
              if (primary_color == null) {
                primary_color = tmp4;
              }
              const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
              let secondary_color = colors.colors.secondary_color;
              if (secondary_color == null) {
                secondary_color = null;
              }
              obj3.secondary_color = secondary_color;
              let tertiary_color = colors.colors.tertiary_color;
              if (tertiary_color == null) {
                tertiary_color = null;
              }
              obj3.tertiary_color = tertiary_color;
              styleColors[GRADIENT] = obj3;
            }
            const obj4 = { currentStyle: GRADIENT, styleColors };
            const result = map2.set(colors.id, obj4);
          } else if (null != colors.colors.tertiary_color) {
            GRADIENT = tmp.HOLOGRAPHIC;
          } else if (null != colors.colors.secondary_color) {
            GRADIENT = tmp.GRADIENT;
          }
        });
        const item3 = map.forEach((item, index) => {
          const result = map2.set(index, item);
        });
        c24 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
      }
    }
  }
  return false;
}
const isRoleEqual = GuildRoleRecord.isRoleEqual;
const GuildSettingsRoleEditSections = GuildSettingsConstants.GuildSettingsRoleEditSections;
({ GuildSettingsSections: map1, FormStates } = Constants);
({ DEFAULT_ROLE_COLOR: closure_15, GuildFeatures: closure_16 } = Constants);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_17, HOLOGRAPHIC_ROLE_COLORS: closure_18 } = EnhancedRoleColorConstants);
let RoleColorsStyle = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
const dependencyMap = {
  [GuildSettingsRoleEditSections.DISPLAY]: [
    "name",
    "hoist",
    "mentionable",
    "color",
    "colors",
    "colorString",
    "colorStrings",
  ],
  [GuildSettingsRoleEditSections.PERMISSIONS]: ["permissions"],
  [GuildSettingsRoleEditSections.MEMBERS]: [],
  [GuildSettingsRoleEditSections.VERIFICATIONS]: [],
};
new Set();
let OPEN = FormStates.CLOSED;
let c23 = false;
let c24 = false;
let items = [];
items = [];
let c27 = false;
let set = new Set();
let map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_33 = apply.debounce(() => {
  c0 = false;
  if (closure_24) {
    if (null != user) {
      if (null != items) {
        obj = {
          oldOrdering: GuildRoleStore.getSortedRoles(user.id),
          newOrdering: items,
          idGetter(id) {
            return id.id;
          },
          existingPositionGetter(position) {
            return position.position;
          },
          ascending: false,
        };
        let result = obj.calculatePositionDeltas(obj);
      }
      closure_24 = tmp9;
      if (result.length <= 0) {
        c0 = true;
      }
    }
    result = [];
  }
  items = [...set];
  const item = items.forEach((item) => {
    closure_0 = item;
    const found = items.find((id) => id.id === closure_0);
    if (
      isRoleEqual(
        found,
        items.find((id) => id.id === closure_0),
      )
    ) {
      set.delete(item);
      if (0 === set.size) {
        c23 = false;
      }
      c0 = true;
    }
  });
  const items1 = [...set];
  const item1 = items1.forEach((item) => {
    value = map1.get(item);
    if (obj.isEqual(value, map.get(item))) {
      set.delete(item);
      if (0 === set.size) {
        c27 = false;
      }
      c0 = true;
    }
  });
  if (c0) {
    guildSettingsRolesStore.emitChange();
  }
}, 500);
const Store = initializeDefault.Store;
class GuildSettingsRolesStore extends Store {}
const prototype = GuildSettingsRolesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildSettingsStore, GuildRoleConnectionsConfigurationStore, GuildRoleStore);
};
prototype["hasChanges"] = function hasChanges() {
  let tmp = c23;
  if (!c23) {
    tmp = c24;
  }
  if (!tmp) {
    tmp = c27;
  }
  return tmp;
};
prototype["hasSectionChanges"] = function hasSectionChanges(id, effectiveSection) {
  if (effectiveSection === GuildSettingsRoleEditSections.VERIFICATIONS) {
    return set.has(id);
  } else {
    let tmp = null;
    if (null != dependencyMap[effectiveSection]) {
      tmp = null;
      if (0 !== arr.length) {
        const found = items.find((id) => id.id === closure_0);
        closure_0 = id;
        const found1 = items.find((id) => id.id === closure_0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: arr, role: found, original: found1 };
            tmp6 = obj;
          }
        }
        tmp = tmp6;
      }
    }
    let tmp7 = null != tmp;
    if (tmp7) {
      const pickResult = apply.pick(tmp.role, tmp.fields);
      tmp7 = !isRoleEqual(pickResult, apply.pick(tmp.original, tmp.fields));
    }
    return tmp7;
  }
};
prototype["getRoleStyleData"] = function getRoleStyleData(id) {
  return map2.get(id);
};
Object.defineProperty(prototype, "errorMessage", {
  get: function errorMessage() {
    return message;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasSortChanges", {
  get: function hasSortChanges() {
    return c24;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasRoleConfigurationChanges", {
  get: function hasRoleConfigurationChanges() {
    return c27;
  },
  set: undefined,
});
Object.defineProperty(prototype, "guild", {
  get: function guild() {
    return closure_4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "editedRoleIds", {
  get: function editedRoleIds() {
    return Array.from(set);
  },
  set: undefined,
});
Object.defineProperty(prototype, "editedRoleIdsForConfigurations", {
  get: function editedRoleIdsForConfigurations() {
    return set;
  },
  set: undefined,
});
Object.defineProperty(prototype, "roles", {
  get: function roles() {
    return items;
  },
  set: undefined,
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return OPEN;
  },
  set: undefined,
});
prototype["getSortDeltas"] = function getSortDeltas() {
  if (null != user) {
    if (null != items) {
      obj = {
        oldOrdering: GuildRoleStore.getSortedRoles(user.id),
        newOrdering: items,
        idGetter(id) {
          return id.id;
        },
        existingPositionGetter(position) {
          return position.position;
        },
        ascending: false,
      };
      const result = obj.calculatePositionDeltas(obj);
    }
    return [];
  }
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getRole"] = function getRole(arg0) {
  closure_0 = arg0;
  return items.find((id) => id.id === closure_0);
};
prototype["getPermissionSearchQuery"] = function getPermissionSearchQuery() {
  return hasOwnProperty;
};
prototype["getEditedRoleConnectionConfigurationsMap"] = function getEditedRoleConnectionConfigurationsMap() {
  return map1;
};
GuildSettingsRolesStore.displayName = "GuildSettingsRolesStore";
RoleColorsStyle = {
  GUILD_SETTINGS_ROLES_INIT() {
    handleInit();
  },
  GUILD_SETTINGS_INIT: handleSetSection,
  GUILD_SETTINGS_SET_SECTION: handleSetSection,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function handleSortUpdate(roles) {
    roles = roles.roles;
    if (null != items) {
      if (roles.length !== items.length) {
        return false;
      }
    }
    const mapped = roles.map((item) => {
      closure_0 = item;
      return items.find((id) => id.id === closure_0);
    });
    items = mapped.filter(GlobalUtils.isNotNullish);
    c24 = true;
    closure_33();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(allow) {
    ({ flag, id: require } = allow);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const permissions = found.permissions;
      const obj3 = BigFlagUtilsAll;
      if (allow.allow) {
        let addResult = obj3.add(permissions, flag);
      } else {
        addResult = obj3.remove(permissions, flag);
      }
      obj = { permissions: addResult };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      return false;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function handleUpdatePermissionSet(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { permissions: id.permissions };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function handleClearRolePermissions(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { permissions: PermissionUtilsAll.NONE };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function handleUpdateName(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { name: id.name };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function handleUpdateDescription(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { description: id.description };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function handleUpdateColor(arg0) {
    ({ id, color } = arg0);
    let int2hexResult = null;
    if (0 !== color) {
      obj = utils_ColorUtils;
      int2hexResult = obj.int2hex(color);
    }
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      value = map2.get(id);
      let tmp26 = null != value;
      if (tmp26) {
        value.currentStyle = obj.SOLID;
        obj = { primary_color: color, secondary_color: null, tertiary_color: null };
        value.styleColors[obj.SOLID] = obj;
        obj = {};
        const merged = Object.assign(value);
        const result = map2.set(id, obj);
        const obj1 = { color, colorString: int2hexResult, colors: null, colorStrings: null };
        const obj2 = { primary_color: color, secondary_color: null, tertiary_color: null };
        obj1.colors = obj2;
        let tmp10 = null;
        if (null != int2hexResult) {
          const obj3 = { primaryColor: int2hexResult, secondaryColor: null, tertiaryColor: null };
          tmp10 = obj3;
        }
        obj1.colorStrings = tmp10;
        const index = items.indexOf(found);
        if (index >= 0) {
          const obj4 = {};
          const merged1 = Object.assign(found);
          const merged2 = Object.assign(obj1);
          items = [];
          HermesBuiltin.arraySpread(items, 0);
          items[index] = obj4;
          c23 = true;
          set.add(obj4.id);
          closure_33();
        }
        tmp26 = flag;
      }
      return tmp26;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function handleUpdateColors(arg0) {
    ({ id, colors, currentStyle } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(colors);
      value = map2.get(id);
      let tmp21 = null != value;
      if (tmp21) {
        value.styleColors[currentStyle] = colors;
        value.currentStyle = currentStyle;
        obj = {};
        const merged = Object.assign(value);
        const result1 = map2.set(id, obj);
        obj = { color: colors.primary_color, colors, colorString: result.primaryColor, colorStrings: result };
        const index = items.indexOf(found);
        if (index >= 0) {
          obj = {};
          const merged1 = Object.assign(found);
          const merged2 = Object.assign(obj);
          items = [];
          HermesBuiltin.arraySpread(items, 0);
          items[index] = obj;
          c23 = true;
          set.add(obj.id);
          closure_33();
        }
        tmp21 = flag;
      }
      return tmp21;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function handleUpdateSettings(id) {
    id = id.id;
    ({ hoist, mentionable } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { hoist, mentionable };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function handleUpdateRoleIcon(id) {
    id = id.id;
    ({ icon, unicodeEmoji } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { icon, unicodeEmoji };
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES: function handleDiscardSectionChanges(id) {
    id = id.id;
    let tmp = null;
    if (null != dependencyMap[id.section]) {
      tmp = null;
      if (0 !== arr.length) {
        const found = items.find((id) => id.id === closure_0);
        const found1 = items.find((id) => id.id === closure_0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: arr, role: found, original: found1 };
            tmp6 = obj;
          }
        }
        tmp = tmp6;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      ({ fields, role, original } = tmp);
      const pickResult = apply.pick(original, fields);
      const index = items.indexOf(role);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(role);
        const merged1 = Object.assign(pickResult);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        c23 = true;
        set.add(obj.id);
        closure_33();
      }
      let hasItem = fields.includes("color");
      if (!hasItem) {
        hasItem = fields.includes("colors");
      }
      if (hasItem) {
        id = undefined;
        if (user != null) {
          id = user.id;
        }
        const items1 = [original];
        const item = items1.forEach((colors) => {
          let GRADIENT = styleColors.SOLID;
          styleColors = useHasEnhancedRoleColors;
          if (!tmp2) {
            styleColors = {};
            styleColors = { primary_color, secondary_color: null, tertiary_color: null };
            styleColors[tmp.SOLID] = styleColors;
            ({ primary_color: obj4.primary_color, secondary_color: obj4.secondary_color } = closure_2_17);
            styleColors[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({
              primary_color: obj5.primary_color,
              secondary_color: obj5.secondary_color,
              tertiary_color: obj5.tertiary_color,
            } = collapsedCategories);
            styleColors[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
            if (null != colors.colors) {
              primary_color = colors.colors.primary_color;
              if (primary_color == null) {
                primary_color = tmp4;
              }
              const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
              let secondary_color = colors.colors.secondary_color;
              if (secondary_color == null) {
                secondary_color = null;
              }
              obj3.secondary_color = secondary_color;
              let tertiary_color = colors.colors.tertiary_color;
              if (tertiary_color == null) {
                tertiary_color = null;
              }
              obj3.tertiary_color = tertiary_color;
              styleColors[GRADIENT] = obj3;
            }
            const obj4 = { currentStyle: GRADIENT, styleColors };
            const result = map2.set(colors.id, obj4);
          } else if (null != colors.colors.tertiary_color) {
            GRADIENT = tmp.HOLOGRAPHIC;
          } else if (null != colors.colors.secondary_color) {
            GRADIENT = tmp.GRADIENT;
          }
        });
      }
    }
  },
  GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES: function handleDiscardConnectionsChanges(id) {
    id = id.id;
    value = map.get(id);
    if (null == value) {
      map1.delete(id);
    } else {
      items = [];
      HermesBuiltin.arraySpread(value, 0);
      const result = map1.set(id, items);
    }
    set.delete(id);
    if (0 === set.size) {
      c27 = false;
    }
  },
  GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES: function handleCommitSectionChanges(id) {
    id = id.id;
    obj = undefined;
    let tmp = null;
    if (null != dependencyMap[id.section]) {
      tmp = null;
      if (0 !== arr.length) {
        const found = items.find((id) => id.id === closure_0);
        const found1 = items.find((id) => id.id === closure_0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: arr, role: found, original: found1 };
            tmp6 = obj;
          }
        }
        tmp = tmp6;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      const role = tmp.role;
      obj = {};
      const merged = Object.assign(tmp.original);
      const merged1 = Object.assign(apply.pick(role, tmp.fields));
      items = items.map((id) => {
        let tmp = id;
        if (id.id === id) {
          tmp = obj;
        }
        return tmp;
      });
      if (isRoleEqual(role, obj)) {
        set.delete(id);
        if (0 === set.size) {
          c23 = false;
        }
      }
    }
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleInsertRole(arg0) {
    ({ role, searchQuery: closure_1_5 } = arg0);
    if (null != role) {
      const id = role.id;
      if (null == items.find((id) => id.id === closure_0)) {
        items = [];
        items[HermesBuiltin.arraySpread(items, 0)] = role;
        closure_33();
      } else {
        const index = items.indexOf(role);
        if (index >= 0) {
          obj = {};
          const merged = Object.assign(role);
          const merged1 = Object.assign(role);
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          items1[index] = obj;
          items = items1;
          c23 = true;
          set.add(obj.id);
          closure_33();
        }
      }
    }
  },
  GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function handleDuplicateSuccess(arg0) {
    ({ role, roles } = arg0);
    map = new Map(
      items.map((id) => {
        items = [id.id, id];
        return items;
      }),
    );
    let result = map.set(role.id, role);
    let id = map;
    let length;
    const mapped = roles.map((item) => id.get(item));
    const found = mapped.filter(id(length[10]).isNotNullish);
    new Set(roles);
    const item = map.forEach((item, index) => {
      if (!set1.has(index)) {
        found1.push(item);
      }
    });
    items = found.map((item, index) => {
      obj = {};
      const merged = Object.assign(item);
      obj.position = length - 1 - index;
      return obj;
    });
    map1 = new Map(
      items2.map((id) => {
        items = [id.id, id];
        return items;
      }),
    );
    const result1 = map1.set(role.id, role);
    id = map1;
    length = undefined;
    const mapped1 = roles.map((item) => id.get(item));
    const found1 = mapped1.filter(id(length[10]).isNotNullish);
    const set1 = new Set(roles);
    const item1 = map1.forEach((item, index) => {
      if (!set1.has(index)) {
        found1.push(item);
      }
    });
    length = found1.length;
    items2 = found1.map((item, index) => {
      obj = {};
      const merged = Object.assign(item);
      obj.position = length - 1 - index;
      return obj;
    });
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    items = [role];
    const item2 = items.forEach((colors) => {
      let GRADIENT = styleColors.SOLID;
      styleColors = useHasEnhancedRoleColors;
      if (!tmp2) {
        styleColors = {};
        styleColors = { primary_color, secondary_color: null, tertiary_color: null };
        styleColors[tmp.SOLID] = styleColors;
        ({ primary_color: obj4.primary_color, secondary_color: obj4.secondary_color } = closure_2_17);
        styleColors[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
        ({
          primary_color: obj5.primary_color,
          secondary_color: obj5.secondary_color,
          tertiary_color: obj5.tertiary_color,
        } = collapsedCategories);
        styleColors[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
        if (null != colors.colors) {
          primary_color = colors.colors.primary_color;
          if (primary_color == null) {
            primary_color = tmp4;
          }
          const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
          let secondary_color = colors.colors.secondary_color;
          if (secondary_color == null) {
            secondary_color = null;
          }
          obj3.secondary_color = secondary_color;
          let tertiary_color = colors.colors.tertiary_color;
          if (tertiary_color == null) {
            tertiary_color = null;
          }
          obj3.tertiary_color = tertiary_color;
          styleColors[GRADIENT] = obj3;
        }
        const obj4 = { currentStyle: GRADIENT, styleColors };
        const result = map2.set(colors.id, obj4);
      } else if (null != colors.colors.tertiary_color) {
        GRADIENT = tmp.HOLOGRAPHIC;
      } else if (null != colors.colors.secondary_color) {
        GRADIENT = tmp.GRADIENT;
      }
    });
  },
  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function handleRoleStyleUpdate(arg0) {
    ({ id, currentStyle } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      value = map2.get(id);
      if (null == value) {
        return false;
      } else {
        obj = { currentStyle, styleColors: value.styleColors };
        const result = obj3.set(id, obj);
        const result1 = EnhancedRoleColorUtils.extractColorStringsFromServerColors(tmp19);
        primary_color = tmp19.primary_color;
        obj = {
          color: primary_color,
          colors: value.styleColors[currentStyle],
          colorString: result1.primaryColor,
          colorStrings: result1,
        };
        const index = items.indexOf(found);
        if (index >= 0) {
          obj = {};
          const merged = Object.assign(found);
          const merged1 = Object.assign(obj);
          items = [];
          HermesBuiltin.arraySpread(items, 0);
          items[index] = obj;
          c23 = true;
          set.add(obj.id);
          closure_33();
        }
        return false;
      }
      obj3 = map2;
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchRoleConnectionConfigurations(arg0) {
    ({ roleConnectionConfigurations, roleId: require } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      value = map.get(found.id);
      if (obj2.isEqual(value, roleConnectionConfigurations)) {
        return false;
      } else {
        const result = map1.set(found.id, roleConnectionConfigurations);
        const result1 = obj.set(found.id, roleConnectionConfigurations);
        set.delete(found.id);
        if (0 === set.size) {
          c27 = false;
        }
        closure_33();
      }
      obj = map;
      obj2 = apply;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(
    roleId,
  ) {
    roleId = roleId.roleId;
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      c27 = true;
      set.add(found.id);
      const result = map1.set(found.id, roleId.roleConnectionConfigurations);
      closure_33();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    closure_4 = null;
    items = [];
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    set = new Set();
    c23 = false;
    c24 = false;
    c27 = false;
    OPEN = FormStates.CLOSED;
  },
  GUILD_ROLE_CREATE: syncGuildChanges,
  GUILD_ROLE_UPDATE: syncGuildChanges,
  GUILD_ROLE_DELETE: function handleRoleDelete(roleId) {
    if (set.has(roleId.roleId)) {
      map.delete(roleId.roleId);
      map1.delete(roleId.roleId);
      set.delete(roleId.roleId);
      if (0 === set.size) {
        c27 = false;
      }
    }
    return syncGuildChanges(roleId);
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function handleSubmitting() {
    OPEN = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function handleSaveFail(message) {
    OPEN = FormStates.OPEN;
    message = message.message;
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function handleSaveSuccess() {
    handleInit(false);
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        items = [];
        items[HermesBuiltin.arraySpread(user.features, 0)] = constants2.PIN_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        items = [];
        items[HermesBuiltin.arraySpread(user.features, 0)] = constants2.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
};
const guildSettingsRolesStore = new GuildSettingsRolesStore(DispatcherDefault, RoleColorsStyle);
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default guildSettingsRolesStore;
export { RoleColorsStyle };
