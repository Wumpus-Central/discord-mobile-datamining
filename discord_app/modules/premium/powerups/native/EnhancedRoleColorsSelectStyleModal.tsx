// === Module 16490: EnhancedRoleColorsSelectStyleModal ===

// Module 16490 (EnhancedRoleColorsSelectStyleModal)
import get_ActivityIndicator from "extractColorStringsFromServerColors";
import { RoleColorsStyle } from "handleSetSection";
import { HOLOGRAPHIC_ROLE_COLORS } from "HOLOGRAPHIC_ROLE_COLORS";
import { STYLE_CONFIGS } from "title";
import { ThemeTypes } from "sum";
import jsxProd from "messagesProxy";
import createCacheKey from "createCacheKey";

let c10;
let c3;
let c4;
let c9;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, stylesContainer: null, button: null, message: null, text: null, upsellContainer: null, upsellText: null, selected: null, disabled: null };
  obj = { marginHorizontal: importDefault(712).space.PX_12, marginBottom: importDefault(712).space.PX_32 };
  obj[0] = obj;
  obj = { display: "flex", flexDirection: "row", gap: importDefault(712).space.PX_8 };
  obj[1] = obj;
  obj[2] = { borderRadius: importDefault(712).radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  const obj1 = { borderRadius: importDefault(712).radii.sm, overflow: "hidden", height: 100, width: 100, flex: 1, backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOWEST, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
  obj[3] = { width: 400, flex: 1, marginStart: importDefault(712).space.PX_8, marginVertical: importDefault(712).space.PX_8, alignSelf: "flex-start" };
  if (arg0 === ThemeTypes.LIGHT) {
    let BACKGROUND_SURFACE_HIGH = tmp(712).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH = tmp(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj2 = { width: 400, flex: 1, marginStart: importDefault(712).space.PX_8, marginVertical: importDefault(712).space.PX_8, alignSelf: "flex-start" };
  const tmp3 = ThemeTypes;
  obj[4] = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: importDefault(712).space.PX_8 };
  if (arg0 === tmp3.LIGHT) {
    let BACKGROUND_SURFACE_HIGH2 = tmp(712).colors.BACKGROUND_BASE_LOW;
  } else {
    BACKGROUND_SURFACE_HIGH2 = tmp(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  const obj3 = { width: "100%", textAlign: "center", backgroundColor: BACKGROUND_SURFACE_HIGH, paddingVertical: importDefault(712).space.PX_8 };
  obj[5] = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: importDefault(712).space.PX_8, marginTop: importDefault(712).space.PX_16, borderRadius: importDefault(712).radii.sm };
  obj[6] = { textAlign: "center" };
  const obj4 = { backgroundColor: BACKGROUND_SURFACE_HIGH2, padding: importDefault(712).space.PX_8, marginTop: importDefault(712).space.PX_16, borderRadius: importDefault(712).radii.sm };
  obj[7] = { borderWidth: 1, borderColor: importDefault(712).colors.BACKGROUND_BRAND };
  obj[8] = { opacity: 0.5 };
  return obj;
});
let result = require("HOLOGRAPHIC_ROLE_COLORS").fileFinishedImporting("modules/premium/powerups/native/EnhancedRoleColorsSelectStyleModal.tsx");

export default function EnhancedRoleColorsSelectStyleModal(arg0) {
  let guildId;
  let importDefault;
  let require;
  let role;
  ({ roleStyle: require, onStyleChanged: importDefault } = arg0);
  let dependencyMap;
  let hasEnhancedRoleColorsForRole;
  let closure_4;
  let c5;
  ({ guildId, role } = arg0);
  const tmp3 = callback2(importDefault(4129)());
  dependencyMap = tmp3;
  let obj = require(4632) /* useHasEnhancedRoleColors */;
  hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guildId, role);
  let obj1 = require(16491) /* useGuildSettingsRoleExampleMessage */;
  let intl = require(1236) /* getSystemLocale */.intl;
  closure_4 = obj1.useGuildSettingsRoleExampleMessage(intl.string(require(1236) /* getSystemLocale */.t.Mi9Kbe));
  c5 = new importDefault(7718)();
  obj = { header: null, children: null };
  obj = { title: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["9wVJRB"]);
  obj[0] = callback(require(5246) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj1 = { style: tmp3.container, children: null };
  const tmp6 = new importDefault(7718)();
  let items = [
    callback(closure_4, {
      style: tmp3.stylesContainer,
      children: STYLE_CONFIGS.map((id) => {
        let closure_0 = id;
        let tmp = !hasEnhancedRoleColorsForRole;
        if (!hasEnhancedRoleColorsForRole) {
          tmp = id.id !== _undefined2.SOLID;
        }
        const items = [_undefined.button, , ];
        let selected = closure_0 === id.id;
        if (selected) {
          selected = tmp5.selected;
        }
        items[1] = selected;
        let disabled = tmp;
        if (tmp) {
          disabled = tmp5.disabled;
        }
        let obj = {
          style: items,
          disabled: tmp,
          onPress() {
            outer1_1(id.id);
            outer2_1(4161).hideActionSheet();
          },
          children: null
        };
        items[2] = disabled;
        obj = {
          style: tmp5.message,
          pointerEvents: "none",
          message: closure_4,
          rowGenerator: _undefined2,
          modifyRow(message) {
            message.message.roleColor = undefined;
            const result = outer2_0(1938).extractColorStringsFromServerColors(id.colors);
            const obj = outer2_0(1938);
            message.message.roleColors = outer2_0(7749).processColorStrings(result);
            message.message.shouldShowRoleOnName = true;
            message.message.avatarURL = outer2_1(16492);
          }
        };
        const items1 = [outer1_9(outer1_1(_undefined[16]), obj), ];
        obj = { style: tmp5.text, variant: "text-sm/normal", children: null };
        const intl = outer1_0(_undefined[11]).intl;
        obj[2] = intl.string(id.labelString);
        items1[1] = outer1_9(outer1_0(_undefined[20]).Text, obj);
        obj[3] = items1;
        return outer1_10(hasEnhancedRoleColorsForRole, obj, id.id);
      })
    }),

  ];
  let tmp8Result = !hasEnhancedRoleColorsForRole;
  if (!hasEnhancedRoleColorsForRole) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp3.upsellContainer;
    const obj4 = { style: null, variant: "text-sm/semibold", children: null };
    obj4[0] = tmp3.upsellText;
    const intl3 = tmp4(1236).intl;
    const obj5 = { magical: null };
    const obj6 = { gradientColors: null, variant: "text-sm/semibold", experimental_useNativeText: null, children: null };
    let items1 = [, , ];
    ({ primary_color: arr2[0], secondary_color: arr2[1], tertiary_color: arr2[2] } = HOLOGRAPHIC_ROLE_COLORS);
    obj6[0] = items1;
    obj6[2] = !tmp4(4057).isFabric();
    const intl4 = tmp4(1236).intl;
    obj6[3] = intl4.string(tmp(2257)["+/IHLl"]);
    obj5[0] = tmp7(tmp4(4189).Text, obj6);
    obj4[2] = intl3.format(tmp(2257).VpEDJc, obj5);
    const items2 = [tmp7(tmp4(4189).Text, obj4), ];
    const obj7 = { style: null, variant: "text-sm/normal", children: null };
    obj7[0] = tmp3.upsellText;
    const intl5 = tmp4(1236).intl;
    obj7[2] = intl5.string(tmp(2257).FJZeZF);
    items2[1] = tmp7(tmp4(4189).Text, obj7);
    obj3[1] = items2;
    tmp8Result = tmp8(tmp9, obj3);
    const tmp4Result = tmp4(4057);
  }
  items[1] = tmp8Result;
  obj1[1] = items;
  obj[1] = closure_10(closure_4, obj1);
  return callback(require(5247) /* Background */.BottomSheet, obj);
};