// discord_app/modules/guild_settings/roles/GuildSettingsRolesStore.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import fromStringAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import isValueEqual from "../../../lib/PlainRecord.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import GuildRoleRecordTypeTag from "../../../records/GuildRoleRecord.tsx";
import applyOverwritesAll from "../../../utils/PermissionUtils.tsx";
import calculatePositionDeltasDefault from "../../../utils/DragAndDropUtils.tsx";
import MAX_SUBCATEGORIES from "../GuildSettingsConstants.tsx";
import closure_8 from "../../connections/GuildRoleConnectionsConfigurationStore.tsx";
import closure_10 from "../../../stores/GuildRoleStore.tsx";
import closure_11 from "../GuildSettingsStore.tsx";
import ME from "../../../Constants.tsx";
import HOLOGRAPHIC_ROLE_COLORS from "../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import set from "../../../../_runtime/00002_set.js";

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
  const guild = store2.getProps().guild;
  c23 = false;
  c24 = false;
  c6 = undefined;
  set.clear();
  map2.clear();
  const OPEN = FormStates.OPEN;
  if (null != guild) {
    let items = [];
    HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const item = items2.forEach((colors) => {
    let GRADIENT = closure_1_19.SOLID;
    obj = id(length[9]);
    if (!tmp2) {
      obj = {};
      obj = { primary_color: null, secondary_color: null, tertiary_color: null };
      obj[0] = closure_1_15;
      obj[tmp.SOLID] = obj;
      ({ primary_color: obj4[0], secondary_color: obj4[1] } = closure_1_17);
      obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
      ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = closure_1_18);
      obj[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
      if (null != colors.colors) {
        let primary_color = colors.colors.primary_color;
        if (primary_color == null) {
          primary_color = tmp4;
        }
        const obj3 = { primary_color: null, secondary_color: null, tertiary_color: null };
        obj3[0] = primary_color;
        let secondary_color = colors.colors.secondary_color;
        if (secondary_color == null) {
          secondary_color = null;
        }
        obj3[1] = secondary_color;
        let tertiary_color = colors.colors.tertiary_color;
        if (tertiary_color == null) {
          tertiary_color = null;
        }
        obj3[2] = tertiary_color;
        obj[GRADIENT] = obj3;
      }
      const obj4 = { currentStyle: null, styleColors: null };
      obj4[0] = GRADIENT;
      obj4[1] = obj;
      const result = closure_1_31.set(colors.id, obj4);
    } else if (null != colors.colors.tertiary_color) {
      GRADIENT = tmp.HOLOGRAPHIC;
    } else if (null != colors.colors.secondary_color) {
      GRADIENT = tmp.GRADIENT;
    }
  });
  c27 = false;
  if (flag) {
    map1.clear();
    const item1 = map.forEach((arg0, arg1) => {
      const items = [...arg0];
      const result = closure_30.set(arg1, items);
    });
  }
}
function syncGuildChanges(guildId) {
  guildId = guildId.guildId;
  guildId = undefined;
  map = undefined;
  const guild = store2.getProps().guild;
  if (null != guild) {
    if (guildId === guild.id) {
      if (CLOSED !== FormStates.SUBMITTING) {
        const items = [];
        HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
        guildId = items;
        const item = set.forEach((arg0) => {
          guildId = arg0;
          const found = items1.find((id) => id.id === closure_0);
          c1 = -1;
          if (
            null !=
            guildId.find((id) => {
              if (id.id === closure_0) {
                closure_1 = arg1;
                return true;
              }
            })
          ) {
            if (null != found) {
              guildId[c1] = found;
            }
          }
          closure_1_21.delete(arg0);
          if (0 === closure_1_21.size) {
            c23 = false;
          }
        });
        const _Map = Map;
        map = new Map();
        const item1 = set.forEach((arg0) => {
          const value = closure_1_31.get(arg0);
          if (null != value) {
            const result = map.set(arg0, value);
          }
        });
        map2.clear();
        const item2 = items.forEach((colors) => {
          let GRADIENT = closure_1_19.SOLID;
          obj = id(length[9]);
          if (!tmp2) {
            obj = {};
            obj = { primary_color: null, secondary_color: null, tertiary_color: null };
            obj[0] = closure_1_15;
            obj[tmp.SOLID] = obj;
            ({ primary_color: obj4[0], secondary_color: obj4[1] } = closure_1_17);
            obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = closure_1_18);
            obj[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
            if (null != colors.colors) {
              let primary_color = colors.colors.primary_color;
              if (primary_color == null) {
                primary_color = tmp4;
              }
              const obj3 = { primary_color: null, secondary_color: null, tertiary_color: null };
              obj3[0] = primary_color;
              let secondary_color = colors.colors.secondary_color;
              if (secondary_color == null) {
                secondary_color = null;
              }
              obj3[1] = secondary_color;
              let tertiary_color = colors.colors.tertiary_color;
              if (tertiary_color == null) {
                tertiary_color = null;
              }
              obj3[2] = tertiary_color;
              obj[GRADIENT] = obj3;
            }
            const obj4 = { currentStyle: null, styleColors: null };
            obj4[0] = GRADIENT;
            obj4[1] = obj;
            const result = closure_1_31.set(colors.id, obj4);
          } else if (null != colors.colors.tertiary_color) {
            GRADIENT = tmp.HOLOGRAPHIC;
          } else if (null != colors.colors.secondary_color) {
            GRADIENT = tmp.GRADIENT;
          }
        });
        const item3 = map.forEach((arg0, arg1) => {
          const result = closure_31.set(arg1, arg0);
        });
        c24 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
      }
    }
  }
  return false;
}
let set = isValueEqual.set;
const isRoleEqual = GuildRoleRecordTypeTag.isRoleEqual;
const GuildSettingsRoleEditSections = MAX_SUBCATEGORIES.GuildSettingsRoleEditSections;
({ GuildSettingsSections: map1, FormStates } = ME);
({ DEFAULT_ROLE_COLOR: closure_15, GuildFeatures: closure_16 } = ME);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_17, HOLOGRAPHIC_ROLE_COLORS: closure_18 } = HOLOGRAPHIC_ROLE_COLORS);
let obj = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
let closure_20 = {
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
set = new Set();
let CLOSED = FormStates.CLOSED;
let c23 = false;
let c24 = false;
let closure_25 = [];
let closure_26 = [];
let c27 = false;
let set1 = new Set();
let map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_33 = applyDefault.debounce(() => {
  c0 = false;
  if (closure_24) {
    if (null != user) {
      if (null != closure_25) {
        obj = calculatePositionDeltasDefault;
        obj = { oldOrdering: null, newOrdering: null, idGetter: null, existingPositionGetter: null, ascending: false };
        obj[0] = store.getSortedRoles(user.id);
        obj[1] = closure_25;
        obj[2] = function idGetter(id) {
          return id.id;
        };
        obj[3] = function existingPositionGetter(position) {
          return position.position;
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
  const items = [...set];
  const item = items.forEach((arg0) => {
    c0 = arg0;
    c0 = arg0;
    const found = closure_1_25.find((id) => id.id === closure_0);
    if (
      closure_1_9(
        found,
        closure_1_26.find((id) => id.id === c0),
      )
    ) {
      closure_1_21.delete(arg0);
      if (0 === closure_1_21.size) {
        c23 = false;
      }
      c0 = true;
    }
  });
  const items1 = [...set1];
  const item1 = items1.forEach((arg0) => {
    const value = closure_1_30.get(arg0);
    if (obj.isEqual(value, closure_1_29.get(arg0))) {
      closure_1_28.delete(arg0);
      if (0 === closure_1_28.size) {
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
  this.waitFor(closure_11, closure_8, closure_10);
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
    return set1.has(id);
  } else {
    let tmp = null;
    if (null != dependencyMap[effectiveSection]) {
      tmp = null;
      if (0 !== arr.length) {
        closure_0 = id;
        const found = closure_25.find((id) => id.id === closure_0);
        closure_0 = id;
        const found1 = closure_26.find((id) => id.id === c0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: null, role: null, original: null };
            obj[0] = arr;
            obj[1] = found;
            obj[2] = found1;
            tmp6 = obj;
          }
        }
        tmp = tmp6;
      }
    }
    let tmp7 = null != tmp;
    if (tmp7) {
      const obj2 = applyDefault;
      const pickResult = applyDefault.pick(tmp.role, tmp.fields);
      tmp7 = !isRoleEqual(pickResult, applyDefault.pick(tmp.original, tmp.fields));
      const obj3 = applyDefault;
    }
    return tmp7;
  }
};
prototype["getRoleStyleData"] = function getRoleStyleData(id) {
  return map2.get(id);
};
Object.defineProperty(prototype, "errorMessage", {
  get: function errorMessage() {
    return closure_6;
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
    return set1;
  },
  set: undefined,
});
Object.defineProperty(prototype, "roles", {
  get: function roles() {
    return closure_25;
  },
  set: undefined,
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return CLOSED;
  },
  set: undefined,
});
prototype["getSortDeltas"] = function getSortDeltas() {
  if (null != user) {
    if (null != closure_25) {
      obj = calculatePositionDeltasDefault;
      obj = { oldOrdering: null, newOrdering: null, idGetter: null, existingPositionGetter: null, ascending: false };
      obj[0] = store.getSortedRoles(user.id);
      obj[1] = closure_25;
      obj[2] = function idGetter(id) {
        return id.id;
      };
      obj[3] = function existingPositionGetter(position) {
        return position.position;
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
  return closure_25.find((id) => id.id === closure_0);
};
prototype["getPermissionSearchQuery"] = function getPermissionSearchQuery() {
  return closure_5;
};
prototype["getEditedRoleConnectionConfigurationsMap"] = function getEditedRoleConnectionConfigurationsMap() {
  return map1;
};
GuildSettingsRolesStore.displayName = "GuildSettingsRolesStore";
obj = {
  GUILD_SETTINGS_ROLES_INIT() {
    handleInit();
  },
  GUILD_SETTINGS_INIT: handleSetSection,
  GUILD_SETTINGS_SET_SECTION: handleSetSection,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function handleSortUpdate(roles) {
    roles = roles.roles;
    if (null != closure_25) {
      if (roles.length !== closure_25.length) {
        return false;
      }
    }
    const mapped = roles.map((arg0) => {
      closure_0 = arg0;
      return closure_25.find((id) => id.id === closure_0);
    });
    closure_25 = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    c24 = true;
    callback();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(allow) {
    ({ flag, id: require } = allow);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const permissions = found.permissions;
      const obj3 = fromStringAll;
      if (allow.allow) {
        let addResult = obj3.add(permissions, flag);
      } else {
        addResult = obj3.remove(permissions, flag);
      }
      obj = { permissions: null };
      obj[0] = addResult;
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
        callback();
      }
      return false;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function handleUpdatePermissionSet(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      obj = { permissions: null };
      obj[0] = id.permissions;
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
        callback();
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
      obj = { permissions: null };
      obj[0] = applyOverwritesAll.NONE;
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
        callback();
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
      obj = { name: null };
      obj[0] = id.name;
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
        callback();
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
      obj = { description: null };
      obj[0] = id.description;
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
        callback();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function handleUpdateColor(arg0) {
    ({ id, color } = arg0);
    let int2hexResult = null;
    if (0 !== color) {
      obj = id(688);
      int2hexResult = obj.int2hex(color);
    }
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const value = map2.get(id);
      let tmp26 = null != value;
      if (tmp26) {
        value.currentStyle = obj.SOLID;
        obj = { primary_color: null, secondary_color: null, tertiary_color: null };
        obj[0] = color;
        value.styleColors[obj.SOLID] = obj;
        obj = {};
        const merged = Object.assign(value);
        const result = map2.set(id, obj);
        obj1 = { color: null, colorString: null, colors: null, colorStrings: null };
        obj1[0] = color;
        obj1[1] = int2hexResult;
        const obj2 = { primary_color: null, secondary_color: null, tertiary_color: null };
        obj2[0] = color;
        obj1[2] = obj2;
        let tmp10 = null;
        if (null != int2hexResult) {
          const obj3 = { primaryColor: null, secondaryColor: null, tertiaryColor: null };
          obj3[0] = int2hexResult;
          tmp10 = obj3;
        }
        obj1[3] = tmp10;
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
          callback();
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
      const result = id(1988).extractColorStringsFromServerColors(colors);
      const value = map2.get(id);
      let tmp21 = null != value;
      if (tmp21) {
        value.styleColors[currentStyle] = colors;
        value.currentStyle = currentStyle;
        obj = {};
        const merged = Object.assign(value);
        const result1 = map2.set(id, obj);
        obj = { color: null, colors: null, colorString: null, colorStrings: null };
        obj[0] = colors.primary_color;
        obj[1] = colors;
        obj[2] = result.primaryColor;
        obj[3] = result;
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
          callback();
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
      obj = { hoist: null, mentionable: null };
      obj[0] = hoist;
      obj[1] = mentionable;
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
        callback();
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
      obj = { icon: null, unicodeEmoji: null };
      obj[0] = icon;
      obj[1] = unicodeEmoji;
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
        callback();
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
        const found1 = closure_26.find((id) => id.id === c0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: null, role: null, original: null };
            obj[0] = arr;
            obj[1] = found;
            obj[2] = found1;
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
      const pickResult = applyDefault.pick(original, fields);
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
        callback();
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
          let GRADIENT = closure_1_19.SOLID;
          obj = id(length[9]);
          if (!tmp2) {
            obj = {};
            obj = { primary_color: null, secondary_color: null, tertiary_color: null };
            obj[0] = closure_1_15;
            obj[tmp.SOLID] = obj;
            ({ primary_color: obj4[0], secondary_color: obj4[1] } = closure_1_17);
            obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = closure_1_18);
            obj[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
            if (null != colors.colors) {
              let primary_color = colors.colors.primary_color;
              if (primary_color == null) {
                primary_color = tmp4;
              }
              const obj3 = { primary_color: null, secondary_color: null, tertiary_color: null };
              obj3[0] = primary_color;
              let secondary_color = colors.colors.secondary_color;
              if (secondary_color == null) {
                secondary_color = null;
              }
              obj3[1] = secondary_color;
              let tertiary_color = colors.colors.tertiary_color;
              if (tertiary_color == null) {
                tertiary_color = null;
              }
              obj3[2] = tertiary_color;
              obj[GRADIENT] = obj3;
            }
            const obj4 = { currentStyle: null, styleColors: null };
            obj4[0] = GRADIENT;
            obj4[1] = obj;
            const result = closure_1_31.set(colors.id, obj4);
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
    const value = map.get(id);
    if (null == value) {
      map1.delete(id);
    } else {
      const items = [];
      HermesBuiltin.arraySpread(value, 0);
      const result = map1.set(id, items);
    }
    set1.delete(id);
    if (0 === set1.size) {
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
        const found = closure_25.find((id) => id.id === closure_0);
        const found1 = closure_26.find((id) => id.id === c0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            obj = { fields: null, role: null, original: null };
            obj[0] = arr;
            obj[1] = found;
            obj[2] = found1;
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
      const merged1 = Object.assign(obj(12).pick(role, tmp.fields));
      closure_26 = closure_26.map((id) => {
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
    ({ role, searchQuery: closure_5 } = arg0);
    if (null != role) {
      const id = role.id;
      if (null == items1.find((id) => id.id === closure_0)) {
        const items = [];
        items[HermesBuiltin.arraySpread(items1, 0)] = role;
        items1 = items;
        callback();
      } else {
        const index = items1.indexOf(role);
        if (index >= 0) {
          obj = {};
          const merged = Object.assign(role);
          const merged1 = Object.assign(role);
          items1 = [];
          HermesBuiltin.arraySpread(items1, 0);
          items1[index] = obj;
          c23 = true;
          set.add(obj.id);
          callback();
        }
      }
    }
  },
  GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function handleDuplicateSuccess(arg0) {
    ({ role, roles } = arg0);
    map = new Map(
      closure_25.map((id) => {
        const items = [id.id, id];
        return items;
      }),
    );
    let result = map.set(role.id, role);
    let id = map;
    let found1;
    set1 = undefined;
    let length;
    const mapped = roles.map((arg0) => id.get(arg0));
    const found = mapped.filter(id(length[10]).isNotNullish);
    found1 = found;
    set1 = new Set(roles);
    const item = map.forEach((arg0, arg1) => {
      if (!set1.has(arg1)) {
        found1.push(arg0);
      }
    });
    length = found.length;
    closure_25 = found.map((arg0, arg1) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.position = length - 1 - arg1;
      return obj;
    });
    map1 = new Map(
      closure_26.map((id) => {
        const items = [id.id, id];
        return items;
      }),
    );
    const result1 = map1.set(role.id, role);
    id = map1;
    found1 = undefined;
    set1 = undefined;
    length = undefined;
    const mapped1 = roles.map((arg0) => id.get(arg0));
    found1 = mapped1.filter(id(length[10]).isNotNullish);
    set1 = new Set(roles);
    const item1 = map1.forEach((arg0, arg1) => {
      if (!set1.has(arg1)) {
        found1.push(arg0);
      }
    });
    length = found1.length;
    closure_26 = found1.map((arg0, arg1) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.position = length - 1 - arg1;
      return obj;
    });
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    let items = [role];
    const item2 = items.forEach((colors) => {
      let GRADIENT = closure_1_19.SOLID;
      obj = id(length[9]);
      if (!tmp2) {
        obj = {};
        obj = { primary_color: null, secondary_color: null, tertiary_color: null };
        obj[0] = closure_1_15;
        obj[tmp.SOLID] = obj;
        ({ primary_color: obj4[0], secondary_color: obj4[1] } = closure_1_17);
        obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
        ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = closure_1_18);
        obj[tmp.HOLOGRAPHIC] = { primary_color: null, secondary_color: null, tertiary_color: null };
        if (null != colors.colors) {
          let primary_color = colors.colors.primary_color;
          if (primary_color == null) {
            primary_color = tmp4;
          }
          const obj3 = { primary_color: null, secondary_color: null, tertiary_color: null };
          obj3[0] = primary_color;
          let secondary_color = colors.colors.secondary_color;
          if (secondary_color == null) {
            secondary_color = null;
          }
          obj3[1] = secondary_color;
          let tertiary_color = colors.colors.tertiary_color;
          if (tertiary_color == null) {
            tertiary_color = null;
          }
          obj3[2] = tertiary_color;
          obj[GRADIENT] = obj3;
        }
        const obj4 = { currentStyle: null, styleColors: null };
        obj4[0] = GRADIENT;
        obj4[1] = obj;
        const result = closure_1_31.set(colors.id, obj4);
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
      const value = map2.get(id);
      if (null == value) {
        return false;
      } else {
        obj = { currentStyle: null, styleColors: null };
        obj[0] = currentStyle;
        obj[1] = value.styleColors;
        const result = obj3.set(id, obj);
        const result1 = id(1988).extractColorStringsFromServerColors(tmp19);
        const primary_color = tmp19.primary_color;
        obj = { color: null, colors: null, colorString: null, colorStrings: null };
        obj[0] = primary_color;
        obj[1] = value.styleColors[currentStyle];
        obj[2] = result1.primaryColor;
        obj[3] = result1;
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
          callback();
        }
        return false;
      }
      obj3 = map2;
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchRoleConnectionConfigurations(arg0) {
    ({ roleConnectionConfigurations, roleId: require } = arg0);
    const found = closure_25.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const value = map.get(found.id);
      if (obj2.isEqual(value, roleConnectionConfigurations)) {
        return false;
      } else {
        const result = map1.set(found.id, roleConnectionConfigurations);
        const result1 = obj.set(found.id, roleConnectionConfigurations);
        set1.delete(found.id);
        if (0 === set1.size) {
          c27 = false;
        }
        callback();
      }
      obj = map;
      obj2 = applyDefault;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(
    roleId,
  ) {
    roleId = roleId.roleId;
    const found = closure_25.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      c27 = true;
      set1.add(found.id);
      const result = map1.set(found.id, roleId.roleConnectionConfigurations);
      callback();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    c4 = null;
    const items = [];
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    set = new Set();
    c23 = false;
    c24 = false;
    c27 = false;
    CLOSED = FormStates.CLOSED;
  },
  GUILD_ROLE_CREATE: syncGuildChanges,
  GUILD_ROLE_UPDATE: syncGuildChanges,
  GUILD_ROLE_DELETE: function handleRoleDelete(roleId) {
    if (set1.has(roleId.roleId)) {
      map.delete(roleId.roleId);
      map1.delete(roleId.roleId);
      set1.delete(roleId.roleId);
      if (0 === set1.size) {
        c27 = false;
      }
    }
    return syncGuildChanges(roleId);
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function handleSubmitting() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function handleSaveFail(message) {
    const OPEN = FormStates.OPEN;
    message = message.message;
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function handleSaveSuccess() {
    handleInit(false);
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
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
        const items = [];
        items[HermesBuiltin.arraySpread(user.features, 0)] = constants2.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
};
const guildSettingsRolesStore = new GuildSettingsRolesStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default guildSettingsRolesStore;
export const RoleColorsStyle = obj;
