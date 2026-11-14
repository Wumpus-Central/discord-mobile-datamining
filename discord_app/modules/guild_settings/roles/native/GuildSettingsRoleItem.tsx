// === Module 20568: GuildSettingsRoleItem ===

// Module 20568 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 575 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const DEFAULT_ROLE_COLOR_HEX = fn(1072).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let c9 = "body-md/semibold";
const createStyles = fn(5306);
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 }, label: null, sparkleIcon: null, container: null, gradient: null, image: null };
let prop = fn(5929).TextStyleSheet["body-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
obj.label = { lineHeight: num + 1 };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
let obj4 = { lineHeight: num + 1 };
obj.sparkleIcon = { tintColor: nativeDefault.colors.ICON_MUTED };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj.container = size;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_10 = createStyles.createStyles(obj);
let obj5 = { tintColor: nativeDefault.colors.ICON_MUTED };
let obj6 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default noop.memo(function GuildSettingsRoleItem(guildId) {
  const tmp4 = closure_10();
  const role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  const tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
  const roleIconProps = role(onMoveUp[9]).useRoleIconProps({ guildId, roleId: role.id, size: 32 });
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  closure_5 = tmp8;
  items = [];
  if (null != onMoveUp) {
    const obj3 = { name: "moveup", label: null };
    let intl = tmp5(onMoveUp[11]).intl;
    obj3.label = intl.string(tmp5(onMoveUp[11]).t.Yl8E4h);
    items.push(obj3);
  }
  if (null != onMoveDown) {
    let obj4 = { name: "movedown", label: null };
    let intl2 = tmp5(onMoveUp[11]).intl;
    obj4.label = intl2.string(tmp5(onMoveUp[11]).t["5PbXSy"]);
    items.push(obj4);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      let obj5 = { accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null };
      let intl3 = tmp5(onMoveUp[11]).intl;
      let obj6 = { name: role.name };
      obj5.accessibilityLabel = intl3.formatToPlainString(tmp5(onMoveUp[11]).t.Zazao2, obj6);
      let intl4 = tmp5(onMoveUp[11]).intl;
      obj5.accessibilityHint = intl4.string(tmp5(onMoveUp[11]).t.BGMUFB);
      obj5.accessibilityActions = items;
      obj5.onAccessibilityAction = tmp11;
      const merged = Object.assign(sortHandlers);
      let flag = false;
      let flag2 = true;
      let tmp16 = obj5;
      if (!tmp15) {
        const obj7 = { icon: null, accessibilityLabel: null, size: "sm", variant: "destructive", onPress: null };
        const obj8 = { size: "xs", color: require("native").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj7.icon = closure_7(tmp5(onMoveUp[16]).TrashIcon, obj8);
        const intl5 = tmp5(onMoveUp[11]).intl;
        const obj9 = { name: role.name };
        obj7.accessibilityLabel = intl5.formatToPlainString(tmp5(onMoveUp[11]).t.FiMFTZ, obj9);
        obj7.onPress = function handleDeleteRow() {
          const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl = role(onMoveUp[11]).intl;
          obj2.title = intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, { name: name.name });
          const intl2 = role(onMoveUp[11]).intl;
          obj2.body = intl2.string(role(onMoveUp[11]).t.qALKny);
          const intl3 = role(onMoveUp[11]).intl;
          obj2.cancelText = intl3.string(role(onMoveUp[11]).t.gm1Vej);
          const intl4 = role(onMoveUp[11]).intl;
          obj2.confirmText = intl4.string(role(onMoveUp[11]).t.p89ACt);
          name = onMoveDown(function*() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else if (closure_1_5) {
                    c1 = 1;
                    c2 = 1;
                    const obj6 = { value: tmp2(12492).putRoleConnectionsConfigurations(guildId, tmp2.id, []), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                GuildActionCreatorsDefault.deleteRole(guildId, tmp2.id);
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp16) {
                c2 = tmp;
                throw tmp16;
              }
            }
          });
          obj2.onConfirm = function onConfirm() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj2.confirmColor = require("common/Alert").Colors.RED;
          require("actions/AlertActionCreators").show(obj2);
        };
        flag = false;
        flag2 = true;
        tmp16 = obj5;
        const tmp17 = closure_7(tmp5(onMoveUp[15]).IconButton, obj7);
      }
      tmp15 = role.managed && !tmp8;
    }
    if (null != roleIconProps) {
      const obj10 = {};
      const merged1 = Object.assign(roleIconProps);
      let tmp20Result = closure_7(require("RoleIcon"), obj10);
      let tmp23 = closure_7;
      const tmpResult = require("RoleIcon");
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj11 = { size: 32, guildId, role };
        tmp20Result = closure_7(require("VerifiedRoleIcon"), obj11);
        tmp23 = closure_7;
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj12 = { style: tmp4.container, children: null };
              const obj13 = { colors: null, start: null, end: null, style: null };
              const items2 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items2.filter(tmp5(onMoveUp[20]).isNotNullish);
              obj13.colors = found.map((item) => role(onMoveUp[21]).int2hex(item));
              obj13.start = { x: 0, y: 0 };
              obj13.end = { x: 1, y: 0 };
              obj13.style = tmp4.gradient;
              const items3 = [closure_7(require("LinearGradient"), obj13), ];
              const obj14 = { size: "md", style: tmp4.image };
              items3[1] = closure_7(tmp5(onMoveUp[22]).ShieldUserIcon, obj14);
              obj12.children = items3;
              tmp20Result = closure_8(closure_5, obj12);
              tmp23 = closure_7;
              const tmpResult2 = require("LinearGradient");
            }
          }
        }
        const items4 = [tmp4.container, ];
        const obj15 = { style: null, children: null };
        const obj16 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items4[1] = obj16;
        obj15.style = items4;
        const obj17 = { size: "md", style: tmp4.image };
        obj15.children = closure_7(tmp5(onMoveUp[22]).ShieldUserIcon, obj17);
        tmp20Result = closure_7(closure_5, obj15);
        tmp23 = closure_7;
      }
    }
    const obj18 = { onLongPress, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
    let handlePress;
    if (!sorting) {
      handlePress = function handlePress() {
        if (importDefault != null) {
          tmp(role);
        }
      };
    }
    obj18.onPress = handlePress;
    if (sorting) {
      sorting = !flag2;
    }
    obj18.disabled = sorting;
    obj18.draggable = flag2;
    obj18.dragHandlePressableProps = tmp16;
    obj18.trailing = tmp17;
    obj18.arrow = flag;
    if (isEveryoneRole) {
      const obj19 = { style: tmp4.everyone, children: tmp23(tmp5(onMoveUp[24]).GroupIcon, {}) };
      let obj20 = obj19;
    } else {
      obj20 = { children: tmp20Result };
    }
    obj18.icon = tmp23(closure_5, obj20);
    const obj21 = { style: tmp4.row, children: null };
    const obj22 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
    const items5 = [tmp23(tmp5(onMoveUp[7]).Text, obj22), , ];
    const tags2 = role.tags;
    let prop;
    if (tags2 != null) {
      prop = tags2.subscription_listing_id;
    }
    let tmp23Result = null;
    if (null != prop) {
      const obj23 = { size: tmp5(onMoveUp[25]).Icon.Sizes.REFRESH_SMALL_16, source: require("module_11265"), "aria-label": null, style: null };
      const intl6 = tmp5(onMoveUp[11]).intl;
      obj23["aria-label"] = intl6.string(tmp5(onMoveUp[11]).t.a2Ak8b);
      obj23.style = tmp4.sparkleIcon;
      tmp23Result = tmp23(tmp5(onMoveUp[25]).Icon, obj23);
    }
    items5[1] = tmp23Result;
    let tmp23Result2 = null;
    if (locked) {
      tmp23Result2 = tmp23(tmp5(onMoveUp[27]).LockIcon, { size: "xxs", color: "icon-subtle" });
    }
    items5[2] = tmp23Result2;
    obj21.children = items5;
    obj18.label = closure_8(closure_5, obj21);
    const intl7 = tmp5(onMoveUp[11]).intl;
    if (isEveryoneRole) {
      let stringResult = intl7.string(tmp5(onMoveUp[11]).t["72gF3G"]);
    } else {
      const obj24 = { count: null };
      const _HermesInternal = HermesInternal;
      obj24.count = "" + numMembers;
      stringResult = intl7.formatToPlainString(tmp5(onMoveUp[11]).t.AWmdd9, obj24);
    }
    obj18.subLabel = stringResult;
    obj18.start = isFirstRole;
    obj18.end = isLastRole;
    return tmp23(tmp5(onMoveUp[23]).TableRow, obj18);
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
  let obj = role(onMoveUp[9]);
  let obj2 = { guildId, roleId: role.id, size: 32 };
});