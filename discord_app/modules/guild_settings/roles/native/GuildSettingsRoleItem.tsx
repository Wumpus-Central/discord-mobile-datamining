// === Module 17170: ? ===

// Module 17170
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { DEFAULT_ROLE_COLOR_HEX } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c9 = "text-md/semibold";
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: null, label: null, sparkleIcon: null, container: null, gradient: null, image: null };
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
let obj2 = { tintColor: ThemesDefault.colors.ICON_MUTED };
obj[4] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[5] = {};
obj[6] = { tintColor: "white" };
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
      obj2[1] = intl3.string(tmp5(tmp2[11]).t["0dOFq+"]);
      let intl4 = tmp5(tmp2[11]).intl;
      obj2[2] = intl4.string(tmp5(tmp2[11]).t.BGMUFB);
      obj2[3] = items;
      obj2[4] = tmp11;
      obj2[7] = tmp(tmp2[6]).space.PX_4;
      const merged = Object.assign(sortHandlers);
      let flag = false;
      let flag2 = true;
      let tmp16 = obj2;
      if (!tmp15) {
        const obj3 = { icon: null, accessibilityLabel: null, size: "sm", variant: "destructive", onPress: null };
        const obj4 = { size: "xs", color: null };
        obj4[1] = tmp(tmp2[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
        obj3[0] = callback(tmp5(tmp2[16]).TrashIcon, obj4);
        const intl5 = tmp5(tmp2[11]).intl;
        const obj5 = { name: null };
        obj5[0] = role.name;
        obj3[1] = intl5.formatToPlainString(tmp5(tmp2[11]).t.FiMFTZ, obj5);
        obj3[4] = function handleDeleteRow() {
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
                return { value: "HermesInternal", done: "HermesInternal" };
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
                return { value: "HermesInternal", done: "HermesInternal" };
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
        tmp16 = obj2;
        const tmp17 = callback(tmp5(tmp2[15]).IconButton, obj3);
      }
      tmp15 = role.managed && !tmp8;
    }
    if (null != roleIcon) {
      const obj6 = { onLongPress: null, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
      obj6[0] = onLongPress;
      let fn;
      if (!sorting) {
        fn = () => {
          if (closure_1 != null) {
            tmp(role);
          }
        };
      }
      obj6[1] = fn;
      if (sorting) {
        sorting = !flag2;
      }
      obj6[2] = sorting;
      obj6[3] = flag2;
      obj6[4] = tmp16;
      obj6[5] = tmp17;
      obj6[6] = flag;
      if (isEveryoneRole) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp4.everyone;
        obj7[1] = tmp30(tmp5(tmp2[23]).GroupIcon, {});
        let obj8 = obj7;
      } else {
        obj8 = { children: null };
        obj8[0] = roleIcon;
      }
      obj6[7] = callback(closure_5, obj8);
      const obj9 = { style: null, children: null };
      obj9[0] = tmp4.row;
      const obj10 = { lineClamp: 1, style: null, variant: null, color: "interactive-text-active", children: null };
      obj10[1] = tmp4.label;
      obj10[2] = c9;
      obj10[4] = role.name;
      const items2 = [callback(tmp5(tmp2[7]).Text, obj10), , ];
      const tags2 = role.tags;
      let prop;
      if (tags2 != null) {
        prop = tags2.subscription_listing_id;
      }
      let tmp30Result = null;
      if (null != prop) {
        const obj11 = { size: null, source: null, "aria-label": null, style: null };
        obj11[0] = tmp5(tmp2[24]).Icon.Sizes.REFRESH_SMALL_16;
        obj11[1] = tmp(tmp2[25]);
        const intl6 = tmp5(tmp2[11]).intl;
        obj11[2] = intl6.string(tmp5(tmp2[11]).t.a2Ak8b);
        obj11[3] = tmp4.sparkleIcon;
        tmp30Result = tmp30(tmp5(tmp2[24]).Icon, obj11);
      }
      items2[1] = tmp30Result;
      tmp30Result = null;
      if (locked) {
        tmp30Result = tmp30(tmp5(tmp2[26]).LockIcon, { size: "xxs", color: "icon-subtle" });
      }
      items2[2] = tmp30Result;
      obj9[1] = items2;
      obj6[8] = callback2(closure_5, obj9);
      const intl7 = tmp5(tmp2[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp5(tmp2[11]).t["72gF3G"]);
      } else {
        const obj12 = { count: null };
        const _HermesInternal = HermesInternal;
        obj12[0] = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp5(tmp2[11]).t.AWmdd9, obj12);
      }
      obj6[9] = stringResult;
      obj6[10] = isFirstRole;
      obj6[11] = isLastRole;
      return callback(tmp5(tmp2[22]).TableRow, obj6);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj13 = { size: 32, guildId: null, role: null };
        obj13[1] = guildId;
        obj13[2] = role;
        let tmp21Result = callback(tmp(tmp2[17]), obj13);
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj14 = { style: null, children: null };
              obj14[0] = tmp4.container;
              const obj15 = { colors: null, start: null, end: null, style: null };
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items3.filter(tmp5(tmp2[19]).isNotNullish);
              obj15[0] = found.map((color) => role(onMoveUp[20]).int2hex(color));
              obj15[1] = { x: 0, y: 0 };
              obj15[2] = { x: 1, y: 0 };
              obj15[3] = tmp4.gradient;
              const items4 = [callback(tmp(tmp2[18]), obj15), ];
              const obj16 = { size: "md", style: null };
              obj16[1] = tmp4.image;
              items4[1] = callback(tmp5(tmp2[21]).ShieldUserIcon, obj16);
              obj14[1] = items4;
              tmp21Result = callback2(closure_5, obj14);
              const tmpResult = tmp(tmp2[18]);
            }
          }
        }
        const items5 = [tmp4.container, ];
        const obj17 = { style: null, children: null };
        const obj18 = { backgroundColor: null };
        obj18[0] = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
        items5[1] = obj18;
        obj17[0] = items5;
        const obj19 = { size: "md", style: null };
        obj19[1] = tmp4.image;
        obj17[1] = callback(tmp5(tmp2[21]).ShieldUserIcon, obj19);
        tmp21Result = tmp21(closure_5, obj17);
        const tmp22 = closure_5;
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