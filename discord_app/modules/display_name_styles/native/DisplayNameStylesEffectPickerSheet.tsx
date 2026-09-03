// discord_app/modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/DisplayNameStyles.messages.js";
import AVERAGE_FONT_WIDTH_RATIODefault from "UsernameWithEffects.tsx";
import DisplayNameStyleColorPreset from "../types.tsx";
import DISPLAY_NAME_STYLES_EFFECT_NAMES from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function EffectTile(arg0) {
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  let OpWJ3f = DISPLAY_NAME_STYLES_EFFECT_NAMES.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = messagesProxyDefault.OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  let obj = {
    onPress: onClick,
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    accessibilityState: { selected },
    children: null,
  };
  const items = [tmp.effectCard];
  const displayNameStylesEffectConfig = DISPLAY_NAME_STYLES_EFFECT_NAMES.useDisplayNameStylesEffectConfig(effectId);
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  obj = { style: items, children: null };
  items[1] = selected;
  obj1 = {
    userId,
    userName: stringResult,
    effectDisplayType: null,
    pendingDisplayNameStyles: null,
    style: null,
    variant: "text-md/semibold",
  };
  const tmp2Result = DISPLAY_NAME_STYLES_EFFECT_NAMES;
  const tmp8 = closure_6;
  const tmp9 = closure_8;
  obj1[2] = DisplayNameStyleColorPreset.EffectDisplayType.STATIC;
  obj1[3] = displayNameStylesEffectConfig.previewStyles;
  obj1[4] = tmp.effectName;
  const items1 = [closure_7(AVERAGE_FONT_WIDTH_RATIODefault, obj1)];
  if (showNewDot) {
    const obj2 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj2[0] = tmp.tileNewDot;
    showNewDot = tmp7(tmp10, obj2);
  }
  items1[1] = showNewDot;
  obj[1] = items1;
  obj[4] = tmp9(closure_5, obj);
  return closure_7(tmp8, obj, effectId);
}
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  header: { paddingTop: 4 },
  headerTrailing: { justifyContent: "center", alignItems: "center" },
  container: { flex: 1 },
  contentContainer: null,
  gridContainer: null,
  effectCard: null,
  effectCardSelected: null,
  effectName: null,
  tileNewDot: null,
};
createCacheKey = { padding: ThemesDefault.space.PX_8, paddingLeft: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flexWrap: "wrap", width: 350 };
createCacheKey[5] = {
  width: 109,
  height: 80,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: ThemesDefault.radii.sm,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
let obj1 = {
  width: 109,
  height: 80,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: ThemesDefault.radii.sm,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
createCacheKey[6] = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[7] = { textAlign: "center" };
let obj2 = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = {
  position: "absolute",
  top: ThemesDefault.space.PX_8,
  right: ThemesDefault.space.PX_8,
  width: ThemesDefault.space.PX_8,
  height: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.space.PX_8 / 2,
  backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: ThemesDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = {
  position: "absolute",
  top: ThemesDefault.space.PX_8,
  right: ThemesDefault.space.PX_8,
  width: ThemesDefault.space.PX_8,
  height: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.space.PX_8 / 2,
  backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: ThemesDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
let result = require("set").fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx",
);

export default function DisplayNameStylesEffectPickerSheet(userId) {
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  let callback;
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  let callback2;
  let tmp = callback3();
  let obj = userId(8091);
  obj1 = userId(15178);
  const visibleEffectOrder = obj1.useVisibleEffectOrder();
  let obj2 = userId(15179);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  const tmp5 = callback(first.useState(selectedEffectId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  closure_6 = tmp7;
  callback2 = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    obj = { ref: null, header: null, children: null };
    obj[0] = obj.useBottomSheetRef().bottomSheetRef;
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { title: null, trailing: null };
    const intl = tmp2(1233).intl;
    obj1[0] = intl.string(onSelectEffect(2758).RVtMxT);
    obj2 = { style: null, children: null };
    obj2[0] = tmp.headerTrailing;
    const obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
    const intl2 = tmp2(1233).intl;
    obj3[0] = intl2.string(tmp2(1233).t.XqMe3N);
    obj3[1] = tmp8;
    obj2[1] = callback2(tmp2(4929).Button, obj3);
    obj1[1] = callback2(closure_5, obj2);
    obj[1] = callback2(tmp2(5630).BottomSheetTitleHeader, obj1);
    obj[1] = callback2(closure_5, obj);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.container;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.contentContainer;
    const obj6 = { direction: "horizontal", spacing: 8, style: null, children: null };
    obj6[2] = tmp.gridContainer;
    obj6[3] = visibleEffectOrder.map((effectId) => {
      closure_0 = effectId;
      return callback2(
        closure_1_10,
        {
          userId: closure_0,
          effectId,
          selected: effectId === first,
          showNewDot: _undefined.has(effectId),
          onClick() {
            closure_1_7(closure_0);
            if (closure_1_2.has(closure_0)) {
              closure_1_3(closure_0);
            }
          },
        },
        effectId,
      );
    });
    obj5[1] = callback2(tmp2(4927).Stack, obj6);
    obj4[1] = callback2(closure_5, obj5);
    obj[2] = callback2(closure_5, obj4);
    tmp9 = callback2(tmp2(5631).BottomSheet, obj);
  }
  return tmp9;
}
