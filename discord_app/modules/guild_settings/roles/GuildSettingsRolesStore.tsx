// discord_app/modules/guild_settings/roles/GuildSettingsRolesStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
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
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_24, items2, primary_color, user;

let FormStates;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
function idGetter(id) {
  return id.id;
}
function existingPositionGetter(position) {
  return position.position;
}
function handleSetSection(arg0) {
  if (null == user) {
    if (tmp === map1.ROLES) {
      handleInit();
    }
  }
  return false;
}
function handleInit() {
  let items1;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const guild = GuildSettingsStore.getProps().guild;
  c23 = false;
  c24 = false;
  let c6;
  set.clear();
  map2.clear();
  const OPEN = FormStates.OPEN;
  if (null != guild) {
    items = [];
    HermesBuiltin.arraySpread(items, GuildRoleStore.getSortedRoles(guild.id), 0);
    items1 = items;
  } else {
    items1 = [];
  }
  items2 = [...items1];
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const item = items2.forEach((colors) => {
    let obj;
    let obj3;
    let obj4;
    let obj5;
    let secondary_color;
    let tertiary_color;
    let GRADIENT = obj.SOLID;
    obj = useHasEnhancedRoleColors;
    let tmp3 = GRADIENT;
    const tmp2 = null != colors.colors && obj.getHasEnhancedRoleColorsForRole(id, colors);
    if (tmp2) {
      if (null != colors.colors.tertiary_color) {
        GRADIENT = tmp.HOLOGRAPHIC;
      } else if (null != colors.colors.secondary_color) {
        GRADIENT = tmp.GRADIENT;
      }
      tmp3 = GRADIENT;
    }
    const obj2 = { [obj.SOLID]: obj3, [obj.GRADIENT]: obj4, [obj.HOLOGRAPHIC]: obj5 };
    obj3 = { primary_color, secondary_color: null, tertiary_color: null };
    obj4 = { primary_color: closure_17.primary_color, secondary_color: closure_17.secondary_color, tertiary_color: null };
    obj5 = { primary_color: authStore4.primary_color, secondary_color: authStore4.secondary_color, tertiary_color: authStore4.tertiary_color };
    if (null != colors.colors) {
      primary_color = colors.colors.primary_color;
      if (primary_color == null) {
        primary_color = tmp4;
      }
      const obj6 = { primary_color, secondary_color, tertiary_color };
      secondary_color = colors.colors.secondary_color;
      if (secondary_color == null) {
        secondary_color = null;
      }
      tertiary_color = colors.colors.tertiary_color;
      if (tertiary_color == null) {
        tertiary_color = null;
      }
      obj2[tmp3] = obj6;
    }
    const result = map2.set(colors.id, { currentStyle: tmp3, styleColors: obj2 });
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
      if (CLOSED !== FormStates.SUBMITTING) {
        items = [];
        HermesBuiltin.arraySpread(items, GuildRoleStore.getSortedRoles(guild.id), 0);
        const item = set.forEach((item) => {
          let closure_0 = item;
          const found = items.find((id) => id.id === closure_0);
          let c1 = -1;
          if (null != items.find((id, index) => {
            if (id.id === closure_0) {
              c1 = index;
              return true;
            }
          })) {
            if (null != found) {
              items[c1] = found;
            }
          }
          set.delete(item);
          if (0 === set.size) {
            c23 = false;
          }
        });
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const item1 = set.forEach((item) => {
          const value = map2.get(item);
          if (null != value) {
            const result = map.set(item, value);
          }
        });
        map2.clear();
        const item2 = items.forEach((colors) => {
          let obj;
          let obj3;
          let obj4;
          let obj5;
          let secondary_color;
          let tertiary_color;
          let GRADIENT = obj.SOLID;
          obj = useHasEnhancedRoleColors;
          let tmp3 = GRADIENT;
          const tmp2 = null != colors.colors && obj.getHasEnhancedRoleColorsForRole(id, colors);
          if (tmp2) {
            if (null != colors.colors.tertiary_color) {
              GRADIENT = tmp.HOLOGRAPHIC;
            } else if (null != colors.colors.secondary_color) {
              GRADIENT = tmp.GRADIENT;
            }
            tmp3 = GRADIENT;
          }
          const obj2 = { [obj.SOLID]: obj3, [obj.GRADIENT]: obj4, [obj.HOLOGRAPHIC]: obj5 };
          obj3 = { primary_color, secondary_color: null, tertiary_color: null };
          obj4 = { primary_color: closure_17.primary_color, secondary_color: closure_17.secondary_color, tertiary_color: null };
          obj5 = { primary_color: authStore4.primary_color, secondary_color: authStore4.secondary_color, tertiary_color: authStore4.tertiary_color };
          if (null != colors.colors) {
            primary_color = colors.colors.primary_color;
            if (primary_color == null) {
              primary_color = tmp4;
            }
            const obj6 = { primary_color, secondary_color, tertiary_color };
            secondary_color = colors.colors.secondary_color;
            if (secondary_color == null) {
              secondary_color = null;
            }
            tertiary_color = colors.colors.tertiary_color;
            if (tertiary_color == null) {
              tertiary_color = null;
            }
            obj2[tmp3] = obj6;
          }
          const result = map2.set(colors.id, { currentStyle: tmp3, styleColors: obj2 });
        });
        const item3 = map.forEach((item, index) => {
          const result = map2.set(index, item);
        });
        const flag = false;
        c24 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
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
const RoleColorsStyle = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
let closure_20 = { [GuildSettingsRoleEditSections.DISPLAY]: ["name", "hoist", "mentionable", "color", "colors", "colorString", "colorStrings", "icon", "unicodeEmoji"], [GuildSettingsRoleEditSections.PERMISSIONS]: ["permissions"], [GuildSettingsRoleEditSections.MEMBERS]: [], [GuildSettingsRoleEditSections.VERIFICATIONS]: [] };
new Set();
let CLOSED = FormStates.CLOSED;
let c23 = false;
let c24 = false;
let items = [];
items = [];
let c27 = false;
let set1 = new Set();
let set = set1;
let map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_33 = module_12.debounce(() => {
  let c0 = false;
  const tmp = closure_24;
  if (tmp) {
    if (null != user) {
      let result;
      if (null != items) {
        const obj = { oldOrdering: GuildRoleStore.getSortedRoles(user.id), newOrdering: items, idGetter, existingPositionGetter, ascending: false };
        const calculatePositionDeltas = DragAndDropUtilsDefault.calculatePositionDeltas;
        DragAndDropUtilsDefault;
        result = calculatePositionDeltas(obj);
      }
      closure_24 = tmp11;
      if (result.length <= 0) {
        c0 = true;
      }
    }
    result = [];
  }
  items = [...set];
  const item = items.forEach((item) => {
    let closure_0 = item;
    const found = items.find((id) => id.id === closure_0);
    if (isRoleEqual(found, items.find((id) => id.id === closure_0))) {
      set.delete(item);
      if (0 === set.size) {
        c23 = false;
      }
      c0 = true;
    }
  });
  const items1 = [...set];
  const item1 = items1.forEach((item) => {
    const isEqual = module_12.isEqual;
    module_12;
    const value = map1.get(item);
    if (isEqual(value, map.get(item))) {
      set.delete(item);
      if (0 === set.size) {
        c27 = false;
      }
      c0 = true;
    }
  });
  const tmp14 = c0;
  if (tmp14) {
    guildSettingsRolesStore.emitChange();
  }
}, 500);
const Store = get_initializedDefault.Store;
class GuildSettingsRolesStore extends Store {
  initialize() {
    this.waitFor(GuildSettingsStore, GuildRoleConnectionsConfigurationStore, GuildRoleStore);
  }
  hasChanges() {
    return c23 || c24 || c27;
  }
  hasSectionChanges(id, effectiveSection) {
    if (effectiveSection === GuildSettingsRoleEditSections.VERIFICATIONS) {
      return set.has(id);
    } else {
      let tmp = null;
      if (null != closure_20[effectiveSection]) {
        tmp = null;
        if (0 !== closure_20[effectiveSection].length) {
          const found = items.find((id) => id.id === closure_0);
          let closure_0 = id;
          const found1 = items.find((id) => id.id === closure_0);
          let tmp6 = null;
          if (null != found) {
            tmp6 = null;
            if (null != found1) {
              tmp6 = { fields: closure_20[effectiveSection], role: found, original: found1 };
              const obj = { fields: closure_20[effectiveSection], role: found, original: found1 };
            }
          }
          tmp = tmp6;
        }
      }
      let tmp7 = null != tmp;
      if (tmp7) {
        const obj2 = module_12;
        const pickResult = obj2.pick(tmp.role, tmp.fields);
        const obj3 = module_12;
        tmp7 = !isRoleEqual(pickResult, obj3.pick(tmp.original, tmp.fields));
      }
      return tmp7;
    }
  }
  getRoleStyleData(id) {
    return map2.get(id);
  }
  getSortDeltas() {
    if (null != user) {
      if (null != items) {
        const obj = { oldOrdering: GuildRoleStore.getSortedRoles(user.id), newOrdering: items, idGetter, existingPositionGetter, ascending: false };
        const calculatePositionDeltas = DragAndDropUtilsDefault.calculatePositionDeltas;
        DragAndDropUtilsDefault;
        const result = calculatePositionDeltas(obj);
      }
      return [];
    }
  }
  showNotice() {
    return this.hasChanges();
  }
  getRole(arg0) {
    let closure_0 = arg0;
    return items.find((id) => id.id === closure_0);
  }
  getPermissionSearchQuery() {
    return hasOwnProperty;
  }
  getEditedRoleConnectionConfigurationsMap() {
    return map1;
  }
}
const prototype = GuildSettingsRolesStore.prototype;
Object.defineProperty(prototype, "errorMessage", {
  get: function errorMessage() {
    return message;
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
    return user;
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
    return set;
  },
  set: undefined
});
Object.defineProperty(prototype, "roles", {
  get: function roles() {
    return items;
  },
  set: undefined
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return CLOSED;
  },
  set: undefined
});
GuildSettingsRolesStore.displayName = "GuildSettingsRolesStore";
let obj2 = {
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
      let closure_0 = item;
      return items.find((id) => id.id === closure_0);
    });
    items = mapped.filter(GlobalUtils.isNotNullish);
    c24 = true;
    closure_33();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(allow) {
    let closure_129_0;
    let flag;
    ({ flag, id: closure_129_0 } = allow);
    allow = allow.allow;
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      let addResult;
      const permissions = found.permissions;
      const obj3 = BigFlagUtilsAll;
      if (allow) {
        addResult = obj3.add(permissions, flag);
      } else {
        addResult = obj3.remove(permissions, flag);
      }
      const obj = { permissions: addResult };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      return false;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function handleUpdatePermissionSet(id) {
    id = id.id;
    const permissions = id.permissions;
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { permissions };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function handleClearRolePermissions(id) {
    id = id.id;
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { permissions: PermissionUtilsAll.NONE };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function handleUpdateName(id) {
    id = id.id;
    const name = id.name;
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { name };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function handleUpdateDescription(id) {
    id = id.id;
    const description = id.description;
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { description };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function handleUpdateColor(arg0) {
    let color;
    let id;
    let obj;
    let obj5;
    let tmp11;
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
      const value = map2.get(id);
      let tmp27 = null != value;
      if (tmp27) {
        value.currentStyle = obj.SOLID;
        const obj2 = { primary_color: color, secondary_color: null, tertiary_color: null };
        value.styleColors[obj.SOLID] = obj2;
        const obj3 = {};
        const merged = Object.assign(value);
        const result = set(id, obj3);
        const obj4 = { color, colorString: int2hexResult, colors: obj5, colorStrings: tmp11 };
        tmp11 = null;
        obj5 = { primary_color: color, secondary_color: null, tertiary_color: null };
        if (null != int2hexResult) {
          tmp11 = { primaryColor: int2hexResult, secondaryColor: null, tertiaryColor: null };
          const obj6 = { primaryColor: int2hexResult, secondaryColor: null, tertiaryColor: null };
        }
        const index = items.indexOf(found);
        if (index >= 0) {
          const obj7 = {};
          const merged1 = Object.assign(found);
          const merged2 = Object.assign(obj4);
          items = [];
          HermesBuiltin.arraySpread(items, items, 0);
          items[index] = obj7;
          c23 = true;
          map2.set.add(obj7.id);
          closure_33();
        }
        tmp27 = flag;
      }
      return tmp27;
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
      const obj4 = EnhancedRoleColorUtils;
      const result = obj4.extractColorStringsFromServerColors(colors);
      const value = map2.get(id);
      let tmp22 = null != value;
      if (tmp22) {
        value.styleColors[currentStyle] = colors;
        value.currentStyle = currentStyle;
        const obj = {};
        const merged = Object.assign(value);
        const result1 = set(id, obj);
        const obj2 = { color: colors.primary_color, colors, colorString: result.primaryColor, colorStrings: result };
        const index = items.indexOf(found);
        if (index >= 0) {
          const obj3 = {};
          const merged1 = Object.assign(found);
          const merged2 = Object.assign(obj2);
          items = [];
          HermesBuiltin.arraySpread(items, items, 0);
          items[index] = obj3;
          c23 = true;
          map2.set.add(obj3.id);
          closure_33();
        }
        tmp22 = flag;
      }
      return tmp22;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function handleUpdateSettings(id) {
    let hoist;
    let mentionable;
    id = id.id;
    ({ hoist, mentionable } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { hoist, mentionable };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function handleUpdateRoleIcon(id) {
    let icon;
    let unicodeEmoji;
    id = id.id;
    ({ icon, unicodeEmoji } = id);
    const found = items.find((id) => id.id === closure_0);
    let tmp3 = null != found;
    if (tmp3) {
      const obj = { icon, unicodeEmoji };
      const index = items.indexOf(found);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(found);
        const merged1 = Object.assign(obj);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES: function handleDiscardSectionChanges(id) {
    let fields;
    let original;
    let role;
    id = id.id;
    let tmp2 = null;
    if (null != closure_20[id.section]) {
      tmp2 = null;
      if (0 !== closure_20[id.section].length) {
        const found = items.find((id) => id.id === closure_0);
        const found1 = items.find((id) => id.id === closure_0);
        let tmp7 = null;
        if (null != found) {
          tmp7 = null;
          if (null != found1) {
            tmp7 = { fields: closure_20[id.section], role: found, original: found1 };
            const obj = { fields: closure_20[id.section], role: found, original: found1 };
          }
        }
        tmp2 = tmp7;
      }
    }
    if (null == tmp2) {
      return false;
    } else {
      ({ fields, role, original } = tmp2);
      const obj3 = module_12;
      const pickResult = obj3.pick(original, fields);
      const index = items.indexOf(role);
      if (index >= 0) {
        const obj2 = {};
        const merged = Object.assign(role);
        const merged1 = Object.assign(pickResult);
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        items[index] = obj2;
        c23 = true;
        set.add(obj2.id);
        closure_33();
      }
      const hasItem = fields.includes("color") || fields.includes("colors");
      if (hasItem) {
        let id1;
        if (user != null) {
          id1 = user.id;
        }
        const items1 = [original];
        const item = items1.forEach((colors) => {
          let obj;
          let obj3;
          let obj4;
          let obj5;
          let secondary_color;
          let tertiary_color;
          let GRADIENT = obj.SOLID;
          obj = useHasEnhancedRoleColors;
          let tmp3 = GRADIENT;
          const tmp2 = null != colors.colors && obj.getHasEnhancedRoleColorsForRole(id, colors);
          if (tmp2) {
            if (null != colors.colors.tertiary_color) {
              GRADIENT = tmp.HOLOGRAPHIC;
            } else if (null != colors.colors.secondary_color) {
              GRADIENT = tmp.GRADIENT;
            }
            tmp3 = GRADIENT;
          }
          const obj2 = { [obj.SOLID]: obj3, [obj.GRADIENT]: obj4, [obj.HOLOGRAPHIC]: obj5 };
          obj3 = { primary_color, secondary_color: null, tertiary_color: null };
          obj4 = { primary_color: closure_17.primary_color, secondary_color: closure_17.secondary_color, tertiary_color: null };
          obj5 = { primary_color: authStore4.primary_color, secondary_color: authStore4.secondary_color, tertiary_color: authStore4.tertiary_color };
          if (null != colors.colors) {
            primary_color = colors.colors.primary_color;
            if (primary_color == null) {
              primary_color = tmp4;
            }
            const obj6 = { primary_color, secondary_color, tertiary_color };
            secondary_color = colors.colors.secondary_color;
            if (secondary_color == null) {
              secondary_color = null;
            }
            tertiary_color = colors.colors.tertiary_color;
            if (tertiary_color == null) {
              tertiary_color = null;
            }
            obj2[tmp3] = obj6;
          }
          const result = map2.set(colors.id, { currentStyle: tmp3, styleColors: obj2 });
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
      items = [];
      HermesBuiltin.arraySpread(items, value, 0);
      const result = set(id, items);
    }
    set.delete(id);
    if (0 === set.size) {
      c27 = false;
    }
  },
  GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES: function handleCommitSectionChanges(id) {
    id = id.id;
    let obj2;
    let tmp = null;
    if (null != closure_20[id.section]) {
      tmp = null;
      if (0 !== closure_20[id.section].length) {
        const found = items.find((id) => id.id === closure_0);
        const found1 = items.find((id) => id.id === closure_0);
        let tmp6 = null;
        if (null != found) {
          tmp6 = null;
          if (null != found1) {
            tmp6 = { fields: closure_20[id.section], role: found, original: found1 };
            const obj = { fields: closure_20[id.section], role: found, original: found1 };
          }
        }
        tmp = tmp6;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      const role = tmp.role;
      obj2 = {};
      const fields = tmp.fields;
      const merged = Object.assign(tmp.original);
      const obj3 = module_12;
      const merged1 = Object.assign(obj3.pick(role, fields));
      items = items.map((id) => {
        let tmp = id;
        if (id.id === id) {
          tmp = obj2;
        }
        return tmp;
      });
      if (isRoleEqual(role, obj2)) {
        set.delete(id);
        if (0 === set.size) {
          c23 = false;
        }
      }
    }
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleInsertRole(arg0) {
    let closure_1_5;
    let role;
    ({ role, searchQuery: closure_1_5 } = arg0);
    if (null != role) {
      const id = role.id;
      if (null == items.find((id) => id.id === closure_0)) {
        items = [];
        items[HermesBuiltin.arraySpread(items, items, 0)] = role;
        closure_33();
      } else {
        const index = items.indexOf(role);
        if (index >= 0) {
          const obj = {};
          const merged = Object.assign(role);
          const merged1 = Object.assign(role);
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items, 0);
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
    let closure_25;
    let closure_26;
    let id;
    let role;
    let roles;
    const f132309 = (item) => map1.get(item);
    const f132310 = (item, index) => {
      if (!set1.has(index)) {
        found1.push(item);
      }
    };
    const f132311 = (item, index) => {
      const obj = { position: length - 1 - index };
      const merged = Object.assign(item);
      return obj;
    };
    ({ role, roles } = arg0);
    map = new Map(items.map((id) => {
      items = [id.id, id];
      return items;
    }));
    let result = map.set(role.id, role);
    const mapped = roles.map(f132309);
    const found = mapped.filter(id(1375).isNotNullish);
    set = new Set(roles);
    const item = map.forEach(f132310);
    items = found.map(f132311);
    map1 = new Map(items2.map((id) => {
      items = [id.id, id];
      return items;
    }));
    const result1 = map1.set(role.id, role);
    const mapped1 = roles.map(f132309);
    const found1 = mapped1.filter(id(1375).isNotNullish);
    const set1 = new Set(roles);
    const item1 = map1.forEach(f132310);
    const length = found1.length;
    items2 = found1.map(f132311);
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    items = [role];
    const item2 = items.forEach((colors) => {
      let obj;
      let obj3;
      let obj4;
      let obj5;
      let secondary_color;
      let tertiary_color;
      let GRADIENT = obj.SOLID;
      obj = useHasEnhancedRoleColors;
      let tmp3 = GRADIENT;
      const tmp2 = null != colors.colors && obj.getHasEnhancedRoleColorsForRole(id, colors);
      if (tmp2) {
        if (null != colors.colors.tertiary_color) {
          GRADIENT = tmp.HOLOGRAPHIC;
        } else if (null != colors.colors.secondary_color) {
          GRADIENT = tmp.GRADIENT;
        }
        tmp3 = GRADIENT;
      }
      const obj2 = { [obj.SOLID]: obj3, [obj.GRADIENT]: obj4, [obj.HOLOGRAPHIC]: obj5 };
      obj3 = { primary_color, secondary_color: null, tertiary_color: null };
      obj4 = { primary_color: closure_17.primary_color, secondary_color: closure_17.secondary_color, tertiary_color: null };
      obj5 = { primary_color: authStore4.primary_color, secondary_color: authStore4.secondary_color, tertiary_color: authStore4.tertiary_color };
      if (null != colors.colors) {
        primary_color = colors.colors.primary_color;
        if (primary_color == null) {
          primary_color = tmp4;
        }
        const obj6 = { primary_color, secondary_color, tertiary_color };
        secondary_color = colors.colors.secondary_color;
        if (secondary_color == null) {
          secondary_color = null;
        }
        tertiary_color = colors.colors.tertiary_color;
        if (tertiary_color == null) {
          tertiary_color = null;
        }
        obj2[tmp3] = obj6;
      }
      const result = map2.set(colors.id, { currentStyle: tmp3, styleColors: obj2 });
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
        const obj2 = { currentStyle, styleColors: value.styleColors };
        const result = map2.set(id, obj2);
        const obj5 = EnhancedRoleColorUtils;
        const result1 = obj5.extractColorStringsFromServerColors(tmp20);
        primary_color = tmp20.primary_color;
        const obj = { color: primary_color, colors: value.styleColors[currentStyle], colorString: result1.primaryColor, colorStrings: result1 };
        const index = items.indexOf(found);
        if (index >= 0) {
          const obj4 = {};
          const merged = Object.assign(found);
          const merged1 = Object.assign(obj);
          items = [];
          HermesBuiltin.arraySpread(items, items, 0);
          items[index] = obj4;
          c23 = true;
          set.add(obj4.id);
          closure_33();
        }
        return false;
      }
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchRoleConnectionConfigurations(arg0) {
    let closure_129_0;
    let roleConnectionConfigurations;
    ({ roleConnectionConfigurations, roleId: closure_129_0 } = arg0);
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      const value = map.get(found.id);
      const obj2 = module_12;
      if (obj2.isEqual(value, roleConnectionConfigurations)) {
        return false;
      } else {
        const result = map1.set(found.id, roleConnectionConfigurations);
        const result1 = map.set(found.id, roleConnectionConfigurations);
        set.delete(found.id);
        if (0 === set.size) {
          c27 = false;
        }
        closure_33();
      }
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(roleId) {
    roleId = roleId.roleId;
    const roleConnectionConfigurations = roleId.roleConnectionConfigurations;
    const found = items.find((id) => id.id === closure_0);
    if (null == found) {
      return false;
    } else {
      c27 = true;
      set.add(found.id);
      const result = map1.set(found.id, roleConnectionConfigurations);
      closure_33();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    let closure_4 = null;
    items = [];
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    c23 = false;
    c24 = false;
    c27 = false;
    CLOSED = FormStates.CLOSED;
    set = new Set();
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
    CLOSED = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function handleSaveFail(message) {
    CLOSED = FormStates.OPEN;
    message = message.message;
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function handleSaveSuccess() {
    handleInit(false);
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != user) {
      if (tmp2 === user.id) {
        const _Set = Set;
        items = [];
        items[HermesBuiltin.arraySpread(items, user.features, 0)] = constants2.PIN_PERMISSION_MIGRATION_COMPLETE;
        const self = this;
        const self2 = this;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != user) {
      if (tmp2 === user.id) {
        const _Set = Set;
        items = [];
        items[HermesBuiltin.arraySpread(items, user.features, 0)] = constants2.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        const self = this;
        const self2 = this;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  }
};
const guildSettingsRolesStore = new GuildSettingsRolesStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default guildSettingsRolesStore;
export { RoleColorsStyle };