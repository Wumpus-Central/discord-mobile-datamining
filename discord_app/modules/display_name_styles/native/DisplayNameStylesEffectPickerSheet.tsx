// discord_app/modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import DisplayNameStyleColorPreset from "DisplayNameStyleColorPreset";
import get_ActivityIndicator from "DISPLAY_NAME_STYLES_EFFECT_NAMES";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { DISPLAY_NAME_STYLES_EFFECT_NAMES } from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import { messagesProxy } from "../intl/DisplayNameStyles.messages.js";
import { DisplayNameStyleColorPreset } from "../types.tsx";
import { AVERAGE_FONT_WIDTH_RATIO } from "UsernameWithEffects.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function EffectTile(arg0) {
  let effectId;
  let onClick;
  let selected;
  let showNewDot;
  let userId;
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = createCacheKey();
  const intl = getSystemLocale.intl;
  let OpWJ3f = DISPLAY_NAME_STYLES_EFFECT_NAMES.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = messagesProxy.OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  let obj = { onPress: onClick, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: { selected }, children: null };
  const items = [tmp.effectCard, ];
  const displayNameStylesEffectConfig = DISPLAY_NAME_STYLES_EFFECT_NAMES.useDisplayNameStylesEffectConfig(effectId);
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  obj = { style: items, children: null };
  items[1] = selected;
  const obj1 = { userId, userName: stringResult, effectDisplayType: null, pendingDisplayNameStyles: null, style: null, variant: "text-md/semibold" };
  const tmp2Result = DISPLAY_NAME_STYLES_EFFECT_NAMES;
  const tmp8 = closure_6;
  const tmp9 = closure_8;
  obj1[2] = DisplayNameStyleColorPreset.EffectDisplayType.STATIC;
  obj1[3] = displayNameStylesEffectConfig.previewStyles;
  obj1[4] = tmp.effectName;
  const items1 = [closure_7(AVERAGE_FONT_WIDTH_RATIO, obj1), ];
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
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 }, contentContainer: null, gridContainer: null, effectCard: null, effectCardSelected: null, effectName: null, tileNewDot: null };
createCacheKey = { padding: require("Themes").space.PX_8, paddingLeft: require("Themes").space.PX_16, alignItems: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flexWrap: "wrap", width: 350 };
createCacheKey[5] = { width: 109, height: 80, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
let obj1 = { width: 109, height: 80, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
createCacheKey[6] = { borderColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[7] = { textAlign: "center" };
let obj2 = { borderColor: require("Themes").colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, width: require("Themes").space.PX_8, height: require("Themes").space.PX_8, borderRadius: require("Themes").space.PX_8 / 2, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("Themes").space.PX_4, shadowOpacity: 1, elevation: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8, width: require("Themes").space.PX_8, height: require("Themes").space.PX_8, borderRadius: require("Themes").space.PX_8 / 2, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowColor: require("Themes").colors.BADGE_BACKGROUND_BRAND, shadowRadius: require("Themes").space.PX_4, shadowOpacity: 1, elevation: 4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  let c2;
  let c3;
  let onSelectEffect;
  let selectedEffectId;
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  let dependencyMap;
  let callback;
  let first;
  let closure_5;
  let c6;
  let callback2;
  let tmp = createCacheKey();
  let obj = userId(7470);
  let obj1 = userId(14653);
  const visibleEffectOrder = obj1.useVisibleEffectOrder();
  let obj2 = userId(14654);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  const tmp5 = callback(first.useState(selectedEffectId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  c6 = tmp7;
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
    const intl = tmp2(1236).intl;
    obj1[0] = intl.string(onSelectEffect(2661).RVtMxT);
    obj2 = { style: null, children: null };
    obj2[0] = tmp.headerTrailing;
    const obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
    const intl2 = tmp2(1236).intl;
    obj3[0] = intl2.string(tmp2(1236).t.XqMe3N);
    obj3[1] = tmp8;
    obj2[1] = callback2(tmp2(4777).Button, obj3);
    obj1[1] = callback2(closure_5, obj2);
    obj[1] = callback2(tmp2(5457).BottomSheetTitleHeader, obj1);
    obj[1] = callback2(closure_5, obj);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.container;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.contentContainer;
    const obj6 = { direction: "horizontal", spacing: 8, style: null, children: null };
    obj6[2] = tmp.gridContainer;
    obj6[3] = visibleEffectOrder.map((effectId) => {
      let closure_0 = effectId;
      return callback2(outer1_10, {
        userId: closure_0,
        effectId,
        selected: effectId === first,
        showNewDot: _undefined.has(effectId),
        onClick() {
          outer1_7(closure_0);
          if (outer1_2.has(closure_0)) {
            outer1_3(closure_0);
          }
        }
      }, effectId);
    });
    obj5[1] = callback2(tmp2(4775).Stack, obj6);
    obj4[1] = callback2(closure_5, obj5);
    obj[2] = callback2(closure_5, obj4);
    tmp9 = callback2(tmp2(5458).BottomSheet, obj);
  }
  return tmp9;
};