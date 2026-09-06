// === Module 17622: GuildSettingsRoleItem ===

// Module 17622 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-md/semibold";
let createStyles = fn(4560);
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: null, label: null, sparkleIcon: null, dragHandlePressable: null, container: null, gradient: null, image: null };
obj = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
obj.everyone = obj;
let prop = fn(4556).TextStyleSheet["text-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
createStyles = { lineHeight: num + 1 };
obj.label = createStyles;
obj.sparkleIcon = { tintColor: nativeDefault.colors.ICON_MUTED };
obj.dragHandlePressable = { alignSelf: "stretch", justifyContent: "center" };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj.container = size;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_10 = createStyles.createStyles(obj);
let obj2 = { tintColor: nativeDefault.colors.ICON_MUTED };
let obj3 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default noop.memo(function GuildSettingsRoleItem(guildId) {
  const tmp4 = closure_10();
  const role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  role(onMoveUp[9]);
  let obj = { guildId, roleId: role.id, size: 32 };
  const roleIcon = obj.useRoleIcon(obj);
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  closure_5 = tmp8;
  const items = [];
  if (null != onMoveUp) {
    obj = { name: "moveup", label: null };
    let intl = tmp5(onMoveUp[11]).intl;
    obj.label = intl.string(tmp5(onMoveUp[11]).t.Yl8E4h);
    items.push(obj);
  }
  if (null != onMoveDown) {
    let obj1 = { name: "movedown", label: null };
    let intl2 = tmp5(onMoveUp[11]).intl;
    obj1.label = intl2.string(tmp5(onMoveUp[11]).t["5PbXSy"]);
    items.push(obj1);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, delayLongPress: 100, activeOpacity: 0.8, hitSlop: null };
      let intl3 = tmp5(onMoveUp[11]).intl;
      const obj3 = { name: role.name };
      obj2.accessibilityLabel = intl3.formatToPlainString(tmp5(onMoveUp[11]).t.Zazao2, obj3);
      let intl4 = tmp5(onMoveUp[11]).intl;
      obj2.accessibilityHint = intl4.string(tmp5(onMoveUp[11]).t.BGMUFB);
      obj2.accessibilityActions = items;
      obj2.onAccessibilityAction = tmp11;
      obj2.hitSlop = require("native").space.PX_4;
      const merged = Object.assign(sortHandlers);
      const items2 = [tmp4.dragHandlePressable, ];
      let style;
      if (sortHandlers != null) {
        style = sortHandlers.style;
      }
      items2[1] = style;
      obj2.style = items2;
      let flag = false;
      let flag2 = true;
      let tmp17 = obj2;
      if (!tmp16) {
        const obj4 = { icon: null, accessibilityLabel: null, size: "sm", variant: "destructive", onPress: null };
        const obj5 = { size: "xs", color: require("native").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj4.icon = closure_7(tmp5(onMoveUp[16]).TrashIcon, obj5);
        const intl5 = tmp5(onMoveUp[11]).intl;
        const obj6 = { name: role.name };
        obj4.accessibilityLabel = intl5.formatToPlainString(tmp5(onMoveUp[11]).t.FiMFTZ, obj6);
        obj4.onPress = function handleDeleteRow() {
          require("actions/AlertActionCreators");
          let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl = role(onMoveUp[11]).intl;
          obj = { name: name.name };
          obj.title = intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj);
          const intl2 = role(onMoveUp[11]).intl;
          obj.body = intl2.string(role(onMoveUp[11]).t.qALKny);
          const intl3 = role(onMoveUp[11]).intl;
          obj.cancelText = intl3.string(role(onMoveUp[11]).t.gm1Vej);
          const intl4 = role(onMoveUp[11]).intl;
          obj.confirmText = intl4.string(role(onMoveUp[11]).t.p89ACt);
          name = onMoveDown(function*() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
                return obj;
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
                    obj = { value, done: true };
                    return obj;
                  } else if (closure_1_5) {
                    c1 = 1;
                    c2 = 1;
                    let obj1 = { value: tmp2(11573).putRoleConnectionsConfigurations(guildId, tmp2.id, []), done: false };
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                obj1 = GuildActionCreatorsDefault;
                obj1.deleteRole(guildId, tmp2.id);
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp16) {
                c2 = tmp;
                throw tmp16;
              }
            }
          });
          obj.onConfirm = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj.confirmColor = require("common/Alert").Colors.RED;
          obj.show(obj);
        };
        flag = false;
        flag2 = true;
        tmp17 = obj2;
        const tmp18 = closure_7(tmp5(onMoveUp[15]).IconButton, obj4);
      }
      tmp16 = role.managed && !tmp8;
    }
    if (null != roleIcon) {
      const obj7 = { onLongPress, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
      let fn;
      if (!sorting) {
        fn = () => {
          if (importDefault != null) {
            tmp(role);
          }
        };
      }
      obj7.onPress = fn;
      if (sorting) {
        sorting = !flag2;
      }
      obj7.disabled = sorting;
      obj7.draggable = flag2;
      obj7.dragHandlePressableProps = tmp17;
      obj7.trailing = tmp18;
      obj7.arrow = flag;
      if (isEveryoneRole) {
        const obj8 = { style: tmp4.everyone, children: closure_7(tmp5(onMoveUp[23]).GroupIcon, {}) };
        let obj9 = obj8;
      } else {
        obj9 = { children: roleIcon };
      }
      obj7.icon = closure_7(closure_5, obj9);
      const obj10 = { style: tmp4.row, children: null };
      const obj11 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
      const items3 = [closure_7(tmp5(onMoveUp[7]).Text, obj11), , ];
      const tags2 = role.tags;
      let prop;
      if (tags2 != null) {
        prop = tags2.subscription_listing_id;
      }
      let tmp31Result = null;
      if (null != prop) {
        const obj12 = { size: tmp5(onMoveUp[24]).Icon.Sizes.REFRESH_SMALL_16, source: require("module_10302"), "aria-label": null, style: null };
        const intl6 = tmp5(onMoveUp[11]).intl;
        obj12["aria-label"] = intl6.string(tmp5(onMoveUp[11]).t.a2Ak8b);
        obj12.style = tmp4.sparkleIcon;
        tmp31Result = closure_7(tmp5(onMoveUp[24]).Icon, obj12);
      }
      items3[1] = tmp31Result;
      tmp31Result = null;
      if (locked) {
        tmp31Result = closure_7(tmp5(onMoveUp[26]).LockIcon, { size: "xxs", color: "icon-subtle" });
      }
      items3[2] = tmp31Result;
      obj10.children = items3;
      obj7.label = closure_8(closure_5, obj10);
      const intl7 = tmp5(onMoveUp[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp5(onMoveUp[11]).t["72gF3G"]);
      } else {
        const obj13 = { count: null };
        const _HermesInternal = HermesInternal;
        obj13.count = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp5(onMoveUp[11]).t.AWmdd9, obj13);
      }
      obj7.subLabel = stringResult;
      obj7.start = isFirstRole;
      obj7.end = isLastRole;
      return closure_7(tmp5(onMoveUp[22]).TableRow, obj7);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj14 = { size: 32, guildId, role };
        let tmp22Result = closure_7(require("VerifiedRoleIcon"), obj14);
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj15 = { style: tmp4.container, children: null };
              const obj16 = { colors: null, start: null, end: null, style: null };
              const items4 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items4.filter(tmp5(onMoveUp[19]).isNotNullish);
              obj16.colors = found.map((item) => role(onMoveUp[20]).int2hex(item));
              obj16.start = { x: 0, y: 0 };
              obj16.end = { x: 1, y: 0 };
              obj16.style = tmp4.gradient;
              const items5 = [closure_7(require("LinearGradient"), obj16), ];
              const obj17 = { size: "md", style: tmp4.image };
              items5[1] = closure_7(tmp5(onMoveUp[21]).ShieldUserIcon, obj17);
              obj15.children = items5;
              tmp22Result = closure_8(closure_5, obj15);
              const tmpResult = require("LinearGradient");
            }
          }
        }
        const items6 = [tmp4.container, ];
        const obj18 = { style: null, children: null };
        const obj19 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items6[1] = obj19;
        obj18.style = items6;
        const obj20 = { size: "md", style: tmp4.image };
        obj18.children = closure_7(tmp5(onMoveUp[21]).ShieldUserIcon, obj20);
        tmp22Result = closure_7(closure_5, obj18);
      }
    }
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
  tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
});