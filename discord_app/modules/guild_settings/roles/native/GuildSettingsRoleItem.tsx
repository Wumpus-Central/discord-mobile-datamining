// === Module 17442: ? ===

// Module 17442
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { DEFAULT_ROLE_COLOR_HEX } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c9 = "text-md/semibold";
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: null, label: null, sparkleIcon: null, dragHandlePressable: null, container: null, gradient: null, image: null };
obj = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
obj[1] = obj;
text_md_semibold = require("Text").TextStyleSheet["text-md/semibold"];
let num;
if (text_md_semibold != null) {
  num = text_md_semibold.lineHeight;
}
if (num == null) {
  num = 20;
}
createCacheKey = { lineHeight: num + 1 };
obj[2] = createCacheKey;
obj[3] = { tintColor: ThemesDefault.colors.ICON_MUTED };
obj[4] = { alignSelf: "stretch", justifyContent: "center" };
let obj2 = { tintColor: ThemesDefault.colors.ICON_MUTED };
obj[5] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[6] = {};
obj[7] = { tintColor: "white" };
let closure_10 = createCacheKey.createStyles(obj);
let obj3 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
let obj4 = {};
const memoResult = importAllResult.memo(function GuildSettingsRoleItem(guildId) {
  const tmp4 = callback3();
  const role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  let obj = role(onMoveUp[9]);
  obj = { guildId, roleId: role.id, size: 32 };
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
    let intl = tmp5(tmp2[11]).intl;
    obj[1] = intl.string(tmp5(tmp2[11]).t.Yl8E4h);
    items.push(obj);
  }
  if (null != onMoveDown) {
    obj1 = { name: "movedown", label: null };
    let intl2 = tmp5(tmp2[11]).intl;
    obj1[1] = intl2.string(tmp5(tmp2[11]).t["5PbXSy"]);
    items.push(obj1);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, delayLongPress: 100, activeOpacity: 0.8, hitSlop: null };
      let intl3 = tmp5(tmp2[11]).intl;
      const obj3 = { name: null };
      obj3[0] = role.name;
      obj2[1] = intl3.formatToPlainString(tmp5(tmp2[11]).t.Zazao2, obj3);
      let intl4 = tmp5(tmp2[11]).intl;
      obj2[2] = intl4.string(tmp5(tmp2[11]).t.BGMUFB);
      obj2[3] = items;
      obj2[4] = tmp11;
      obj2[7] = tmp(tmp2[6]).space.PX_4;
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
        const obj5 = { size: "xs", color: null };
        obj5[1] = tmp(tmp2[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
        obj4[0] = callback(tmp5(tmp2[16]).TrashIcon, obj5);
        const intl5 = tmp5(tmp2[11]).intl;
        const obj6 = { name: null };
        obj6[0] = role.name;
        obj4[1] = intl5.formatToPlainString(tmp5(tmp2[11]).t.FiMFTZ, obj6);
        obj4[4] = function handleDeleteRow() {
          let obj = closure_1_1(onMoveUp[10]);
          obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl = role(onMoveUp[11]).intl;
          obj = { name: name.name };
          obj[0] = intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj);
          const intl2 = role(onMoveUp[11]).intl;
          obj[1] = intl2.string(role(onMoveUp[11]).t.qALKny);
          const intl3 = role(onMoveUp[11]).intl;
          obj[2] = intl3.string(role(onMoveUp[11]).t.gm1Vej);
          const intl4 = role(onMoveUp[11]).intl;
          obj[3] = intl4.string(role(onMoveUp[11]).t.p89ACt);
          name = onMoveDown(function*() {
            if (c2 === 2) {
              c2 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    const callback = tmp2;
                    if (closure_1_5) {
                      c1 = 1;
                      c2 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = callback(closure_2_2[12]).putRoleConnectionsConfigurations(closure_1_4, closure_1_0.id, []);
                      return obj1;
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                obj1 = closure_2_1(closure_2_2[13]);
                obj1.deleteRole(closure_1_4, closure_1_0.id);
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp16) {
                c2 = tmp;
                throw tmp16;
              }
            }
          });
          obj[4] = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj[5] = closure_1_1(onMoveUp[14]).Colors.RED;
          obj.show(obj);
        };
        flag = false;
        flag2 = true;
        tmp17 = obj2;
        const tmp18 = callback(tmp5(tmp2[15]).IconButton, obj4);
      }
      tmp16 = role.managed && !tmp8;
    }
    if (null != roleIcon) {
      const obj7 = { onLongPress: null, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
      obj7[0] = onLongPress;
      let fn;
      if (!sorting) {
        fn = () => {
          if (closure_1 != null) {
            tmp(role);
          }
        };
      }
      obj7[1] = fn;
      if (sorting) {
        sorting = !flag2;
      }
      obj7[2] = sorting;
      obj7[3] = flag2;
      obj7[4] = tmp17;
      obj7[5] = tmp18;
      obj7[6] = flag;
      if (isEveryoneRole) {
        const obj8 = { style: null, children: null };
        obj8[0] = tmp4.everyone;
        obj8[1] = tmp31(tmp5(tmp2[23]).GroupIcon, {});
        let obj9 = obj8;
      } else {
        obj9 = { children: null };
        obj9[0] = roleIcon;
      }
      obj7[7] = callback(closure_5, obj9);
      const obj10 = { style: null, children: null };
      obj10[0] = tmp4.row;
      const obj11 = { lineClamp: 1, style: null, variant: null, color: "interactive-text-active", children: null };
      obj11[1] = tmp4.label;
      obj11[2] = c9;
      obj11[4] = role.name;
      const items3 = [callback(tmp5(tmp2[7]).Text, obj11), , ];
      const tags2 = role.tags;
      let prop;
      if (tags2 != null) {
        prop = tags2.subscription_listing_id;
      }
      let tmp31Result = null;
      if (null != prop) {
        const obj12 = { size: null, source: null, "aria-label": null, style: null };
        obj12[0] = tmp5(tmp2[24]).Icon.Sizes.REFRESH_SMALL_16;
        obj12[1] = tmp(tmp2[25]);
        const intl6 = tmp5(tmp2[11]).intl;
        obj12[2] = intl6.string(tmp5(tmp2[11]).t.a2Ak8b);
        obj12[3] = tmp4.sparkleIcon;
        tmp31Result = tmp31(tmp5(tmp2[24]).Icon, obj12);
      }
      items3[1] = tmp31Result;
      tmp31Result = null;
      if (locked) {
        tmp31Result = tmp31(tmp5(tmp2[26]).LockIcon, { size: "xxs", color: "icon-subtle" });
      }
      items3[2] = tmp31Result;
      obj10[1] = items3;
      obj7[8] = callback2(closure_5, obj10);
      const intl7 = tmp5(tmp2[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp5(tmp2[11]).t["72gF3G"]);
      } else {
        const obj13 = { count: null };
        const _HermesInternal = HermesInternal;
        obj13[0] = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp5(tmp2[11]).t.AWmdd9, obj13);
      }
      obj7[9] = stringResult;
      obj7[10] = isFirstRole;
      obj7[11] = isLastRole;
      return callback(tmp5(tmp2[22]).TableRow, obj7);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj14 = { size: 32, guildId: null, role: null };
        obj14[1] = guildId;
        obj14[2] = role;
        let tmp22Result = callback(tmp(tmp2[17]), obj14);
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj15 = { style: null, children: null };
              obj15[0] = tmp4.container;
              const obj16 = { colors: null, start: null, end: null, style: null };
              const items4 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items4.filter(tmp5(tmp2[19]).isNotNullish);
              obj16[0] = found.map((color) => role(onMoveUp[20]).int2hex(color));
              obj16[1] = { x: 0, y: 0 };
              obj16[2] = { x: 1, y: 0 };
              obj16[3] = tmp4.gradient;
              const items5 = [callback(tmp(tmp2[18]), obj16), ];
              const obj17 = { size: "md", style: null };
              obj17[1] = tmp4.image;
              items5[1] = callback(tmp5(tmp2[21]).ShieldUserIcon, obj17);
              obj15[1] = items5;
              tmp22Result = callback2(closure_5, obj15);
              const tmpResult = tmp(tmp2[18]);
            }
          }
        }
        const items6 = [tmp4.container, ];
        const obj18 = { style: null, children: null };
        const obj19 = { backgroundColor: null };
        obj19[0] = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
        items6[1] = obj19;
        obj18[0] = items6;
        const obj20 = { size: "md", style: null };
        obj20[1] = tmp4.image;
        obj18[1] = callback(tmp5(tmp2[21]).ShieldUserIcon, obj20);
        tmp22Result = tmp22(closure_5, obj18);
        const tmp23 = closure_5;
      }
    }
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
});
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default memoResult;