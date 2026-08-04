import { set } from "isValueEqual";
import map from "map";
import { isRoleEqual } from "GuildRoleRecordTypeTag";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import handleFormInit from "handleFormInit";
import { GuildSettingsRoleEditSections } from "MAX_SUBCATEGORIES";
import ME from "ME";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import { Store } from "initialize";
import set from "GuildRoleRecordTypeTag";

let FormStates;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
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
  let c23 = false;
  let c24 = false;
  let c6;
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
    let GRADIENT = outer1_19.SOLID;
    let obj = id(length[9]);
    if (!tmp2) {
      obj = {};
      obj = { primary_color: null, secondary_color: null, tertiary_color: null };
      obj[0] = outer1_15;
      obj[tmp.SOLID] = obj;
      ({ primary_color: obj4[0], secondary_color: obj4[1] } = outer1_17);
      obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
      ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = outer1_18);
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
      const result = outer1_31.set(colors.id, obj4);
    } else if (null != colors.colors.tertiary_color) {
      GRADIENT = tmp.HOLOGRAPHIC;
    } else if (null != colors.colors.secondary_color) {
      GRADIENT = tmp.GRADIENT;
    }
  });
  let c27 = false;
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
  let map;
  const guild = store2.getProps().guild;
  if (null != guild) {
    if (guildId === guild.id) {
      if (CLOSED !== FormStates.SUBMITTING) {
        const items = [];
        HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
        guildId = items;
        const item = set.forEach((arg0) => {
          const guildId = arg0;
          const found = items1.find((id) => id.id === closure_0);
          let c1 = -1;
          if (null != guildId.find((id) => {
            if (id.id === closure_0) {
              let closure_1 = arg1;
              return true;
            }
          })) {
            if (null != found) {
              guildId[c1] = found;
            }
          }
          outer1_21.delete(arg0);
          if (0 === outer1_21.size) {
            const outer1_23 = false;
          }
        });
        const _Map = Map;
        map = new Map();
        const item1 = set.forEach((arg0) => {
          const value = outer1_31.get(arg0);
          if (null != value) {
            const result = map.set(arg0, value);
          }
        });
        map2.clear();
        const item2 = items.forEach((colors) => {
          let GRADIENT = outer1_19.SOLID;
          let obj = id(length[9]);
          if (!tmp2) {
            obj = {};
            obj = { primary_color: null, secondary_color: null, tertiary_color: null };
            obj[0] = outer1_15;
            obj[tmp.SOLID] = obj;
            ({ primary_color: obj4[0], secondary_color: obj4[1] } = outer1_17);
            obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = outer1_18);
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
            const result = outer1_31.set(colors.id, obj4);
          } else if (null != colors.colors.tertiary_color) {
            GRADIENT = tmp.HOLOGRAPHIC;
          } else if (null != colors.colors.secondary_color) {
            GRADIENT = tmp.GRADIENT;
          }
        });
        const item3 = map.forEach((arg0, arg1) => {
          const result = closure_31.set(arg1, arg0);
        });
        let c24 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
      }
    }
  }
  return false;
}
({ GuildSettingsSections: map1, FormStates } = ME);
({ DEFAULT_ROLE_COLOR: closure_15, GuildFeatures: closure_16 } = ME);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_17, HOLOGRAPHIC_ROLE_COLORS: closure_18 } = HOLOGRAPHIC_ROLE_COLORS);
let obj = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
let closure_20 = { [GuildSettingsRoleEditSections.DISPLAY]: ["name", "hoist", "mentionable", "color", "colors", "colorString", "colorStrings"], [GuildSettingsRoleEditSections.PERMISSIONS]: ["permissions"], [GuildSettingsRoleEditSections.MEMBERS]: [], [GuildSettingsRoleEditSections.VERIFICATIONS]: [] };
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
let closure_33 = require("applyOverwrites").debounce(() => {
  let c0 = false;
  if (c24) {
    if (null != user) {
      if (null != closure_25) {
        let obj = importDefault(11697);
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
      c24 = tmp9;
      if (result.length <= 0) {
        c0 = true;
      }
    }
    result = [];
  }
  const items = [...set];
  const item = items.forEach((arg0) => {
    let c0 = arg0;
    c0 = arg0;
    const found = outer1_25.find((id) => id.id === closure_0);
    if (outer1_9(found, outer1_26.find((id) => id.id === id))) {
      outer1_21.delete(arg0);
      if (0 === outer1_21.size) {
        const outer1_23 = false;
      }
      c0 = true;
    }
  });
  const items1 = [...set1];
  const item1 = items1.forEach((arg0) => {
    const value = outer1_30.get(arg0);
    if (obj.isEqual(value, outer1_29.get(arg0))) {
      outer1_28.delete(arg0);
      if (0 === outer1_28.size) {
        const outer1_27 = false;
      }
      let c0 = true;
    }
  });
  if (c0) {
    guildSettingsRolesStore.emitChange();
  }
}, 500);
class GuildSettingsRolesStore extends Store {
}
const prototype = GuildSettingsRolesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleFormInit, map, createGuildRoleRecordFromRust);
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
        let closure_0 = id;
        const found = closure_25.find((id) => id.id === closure_0);
        closure_0 = id;
        const found1 = closure_26.find((id) => id.id === id);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            const obj = { fields: null, role: null, original: null };
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
      const obj2 = importDefault(12);
      const pickResult = importDefault(12).pick(tmp.role, tmp.fields);
      tmp7 = !isRoleEqual(pickResult, importDefault(12).pick(tmp.original, tmp.fields));
      const obj3 = importDefault(12);
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
  set: undefined
});
Object.defineProperty(prototype, "hasSortChanges", {
  get: function hasSortChanges() {
    return c24;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRoleConfigurationChanges", {
  get: function hasRoleConfigurationChanges() {
    return c27;
  },
  set: undefined
});
Object.defineProperty(prototype, "guild", {
  get: function guild() {
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "editedRoleIds", {
  get: function editedRoleIds() {
    return Array.from(set);
  },
  set: undefined
});
Object.defineProperty(prototype, "editedRoleIdsForConfigurations", {
  get: function editedRoleIdsForConfigurations() {
    return set1;
  },
  set: undefined
});
Object.defineProperty(prototype, "roles", {
  get: function roles() {
    return closure_25;
  },
  set: undefined
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return CLOSED;
  },
  set: undefined
});
prototype["getSortDeltas"] = function getSortDeltas() {
  if (null != user) {
    if (null != closure_25) {
      let obj = importDefault(11697);
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
  let closure_0 = arg0;
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
      let closure_0 = arg0;
      return closure_25.find((id) => id.id === closure_0);
    });
    closure_25 = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
    let c24 = true;
    callback();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(allow) {
    let flag;
    let require;
    ({ flag, id: require } = allow);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const permissions = found.permissions;
      const obj3 = importAll(506);
      if (allow.allow) {
        let addResult = obj3.add(permissions, flag);
      } else {
        addResult = obj3.remove(permissions, flag);
      }
      let obj = { permissions: null };
      obj[0] = addResult;
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
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
      let obj = { permissions: null };
      obj[0] = id.permissions;
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
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
      let obj = { permissions: null };
      obj[0] = importAll(3918).NONE;
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
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
      let obj = { name: null };
      obj[0] = id.name;
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
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
      let obj = { description: null };
      obj[0] = id.description;
      const index = items.indexOf(found);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
        set.add(obj.id);
        callback();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function handleUpdateColor(arg0) {
    let color;
    let id;
    ({ id, color } = arg0);
    let int2hexResult = null;
    if (0 !== color) {
      let obj = id(688);
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
        const obj1 = { color: null, colorString: null, colors: null, colorStrings: null };
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
          let c23 = true;
          set.add(obj4.id);
          callback();
        }
        tmp26 = flag;
      }
      return tmp26;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function handleUpdateColors(arg0) {
    let colors;
    let currentStyle;
    let id;
    ({ id, colors, currentStyle } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const result = id(1938).extractColorStringsFromServerColors(colors);
      const value = map2.get(id);
      let tmp21 = null != value;
      if (tmp21) {
        value.styleColors[currentStyle] = colors;
        value.currentStyle = currentStyle;
        let obj = {};
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
          let c23 = true;
          set.add(obj.id);
          callback();
        }
        tmp21 = flag;
      }
      return tmp21;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function handleUpdateSettings(id) {
    let hoist;
    let mentionable;
    id = id.id;
    ({ hoist, mentionable } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      let obj = { hoist: null, mentionable: null };
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
        let c23 = true;
        set.add(obj.id);
        callback();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function handleUpdateRoleIcon(id) {
    let icon;
    let unicodeEmoji;
    id = id.id;
    ({ icon, unicodeEmoji } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp2 = null != found;
    if (tmp2) {
      let obj = { icon: null, unicodeEmoji: null };
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
        let c23 = true;
        set.add(obj.id);
        callback();
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES: function handleDiscardSectionChanges(id) {
    let fields;
    let original;
    let role;
    id = id.id;
    let tmp = null;
    if (null != dependencyMap[id.section]) {
      tmp = null;
      if (0 !== arr.length) {
        const found = items.find((id) => id.id === closure_0);
        const found1 = closure_26.find((id) => id.id === id);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            let obj = { fields: null, role: null, original: null };
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
      const pickResult = importDefault(12).pick(original, fields);
      const index = items.indexOf(role);
      if (index >= 0) {
        obj = {};
        const merged = Object.assign(role);
        const merged1 = Object.assign(pickResult);
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        items[index] = obj;
        let c23 = true;
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
          let GRADIENT = outer1_19.SOLID;
          let obj = id(length[9]);
          if (!tmp2) {
            obj = {};
            obj = { primary_color: null, secondary_color: null, tertiary_color: null };
            obj[0] = outer1_15;
            obj[tmp.SOLID] = obj;
            ({ primary_color: obj4[0], secondary_color: obj4[1] } = outer1_17);
            obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
            ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = outer1_18);
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
            const result = outer1_31.set(colors.id, obj4);
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
      let c27 = false;
    }
  },
  GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES: function handleCommitSectionChanges(id) {
    id = id.id;
    let obj;
    let tmp = null;
    if (null != dependencyMap[id.section]) {
      tmp = null;
      if (0 !== arr.length) {
        const found = closure_25.find((id) => id.id === closure_0);
        const found1 = closure_26.find((id) => id.id === id);
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
          let c23 = false;
        }
      }
    }
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleInsertRole(arg0) {
    let closure_5;
    let role;
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
          const obj = {};
          const merged = Object.assign(role);
          const merged1 = Object.assign(role);
          items1 = [];
          HermesBuiltin.arraySpread(items1, 0);
          items1[index] = obj;
          let c23 = true;
          set.add(obj.id);
          callback();
        }
      }
    }
  },
  GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function handleDuplicateSuccess(arg0) {
    let role;
    let roles;
    ({ role, roles } = arg0);
    const map = new Map(closure_25.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    let result = map.set(role.id, role);
    let id = map;
    let found1;
    let set1;
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
      const obj = {};
      const merged = Object.assign(arg0);
      obj.position = length - 1 - arg1;
      return obj;
    });
    const map1 = new Map(closure_26.map((id) => {
      const items = [id.id, id];
      return items;
    }));
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
      const obj = {};
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
      let GRADIENT = outer1_19.SOLID;
      let obj = id(length[9]);
      if (!tmp2) {
        obj = {};
        obj = { primary_color: null, secondary_color: null, tertiary_color: null };
        obj[0] = outer1_15;
        obj[tmp.SOLID] = obj;
        ({ primary_color: obj4[0], secondary_color: obj4[1] } = outer1_17);
        obj[tmp.GRADIENT] = { primary_color: null, secondary_color: null, tertiary_color: null };
        ({ primary_color: obj5[0], secondary_color: obj5[1], tertiary_color: obj5[2] } = outer1_18);
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
        const result = outer1_31.set(colors.id, obj4);
      } else if (null != colors.colors.tertiary_color) {
        GRADIENT = tmp.HOLOGRAPHIC;
      } else if (null != colors.colors.secondary_color) {
        GRADIENT = tmp.GRADIENT;
      }
    });
  },
  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function handleRoleStyleUpdate(arg0) {
    let currentStyle;
    let id;
    ({ id, currentStyle } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const value = map2.get(id);
      if (null == value) {
        return false;
      } else {
        let obj = { currentStyle: null, styleColors: null };
        obj[0] = currentStyle;
        obj[1] = value.styleColors;
        const result = obj3.set(id, obj);
        const result1 = id(1938).extractColorStringsFromServerColors(tmp19);
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
          let c23 = true;
          set.add(obj.id);
          callback();
        }
        return false;
      }
      obj3 = map2;
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchRoleConnectionConfigurations(arg0) {
    let require;
    let roleConnectionConfigurations;
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
          let c27 = false;
        }
        callback();
      }
      obj = map;
      obj2 = importDefault(12);
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(roleId) {
    roleId = roleId.roleId;
    const found = closure_25.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      let c27 = true;
      set1.add(found.id);
      const result = map1.set(found.id, roleId.roleConnectionConfigurations);
      callback();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    let c4 = null;
    const items = [];
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    set = new Set();
    let c23 = false;
    let c24 = false;
    let c27 = false;
    const CLOSED = FormStates.CLOSED;
  },
  GUILD_ROLE_CREATE: syncGuildChanges,
  GUILD_ROLE_UPDATE: syncGuildChanges,
  GUILD_ROLE_DELETE: function handleRoleDelete(roleId) {
    if (set1.has(roleId.roleId)) {
      map.delete(roleId.roleId);
      map1.delete(roleId.roleId);
      set1.delete(roleId.roleId);
      if (0 === set1.size) {
        let c27 = false;
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
        const set = new Set(items);
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
        const set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  }
};
const guildSettingsRolesStore = new GuildSettingsRolesStore(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default guildSettingsRolesStore;
export const RoleColorsStyle = obj;