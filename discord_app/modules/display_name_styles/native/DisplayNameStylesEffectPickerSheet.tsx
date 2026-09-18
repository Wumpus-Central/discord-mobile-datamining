// === Module 15555: DisplayNameStylesEffectPickerSheet ===

// Module 15555 (DisplayNameStylesEffectPickerSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2870 from "module_2870" /* 2870 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import HapticUtils from "HapticUtils" /* 4690 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11146 */;
import types from "types" /* 11147 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 11149 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function EffectTile(arg0) {
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = closure_9();
  const intl = util.intl;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2870.OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  const obj = { onPress: onClick, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: { selected }, children: null };
  const items = [tmp.effectCard, ];
  const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effectId);
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  const obj2 = { style: items, children: null };
  items[1] = selected;
  const obj3 = { userId, userName: stringResult, effectDisplayType: null, pendingDisplayNameStyles: null, style: null, variant: "text-md/semibold" };
  const tmp2Result = useDisplayNameStylesEffectConfigs;
  obj3.effectDisplayType = types.EffectDisplayType.STATIC;
  obj3.pendingDisplayNameStyles = displayNameStylesEffectConfig.previewStyles;
  obj3.style = tmp.effectName;
  const items1 = [React5(UsernameWithEffectsDefault, obj3), ];
  if (showNewDot) {
    const obj4 = { style: tmp.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    showNewDot = React5(hasOwnProperty, obj4);
  }
  items1[1] = showNewDot;
  obj2.children = items1;
  obj.children = React6(hasOwnProperty, obj2);
  return React5(timestampProducer, obj, effectId);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { flex: 1 }, contentContainer: { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" }, gridContainer: { flexWrap: "wrap", width: 350 }, effectCard: null, effectCardSelected: null, effectName: null, tileNewDot: null };
let size = { width: 109, height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj2.effectCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
obj2.effectCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.effectName = { textAlign: "center" };
const size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
obj2.tileNewDot = size1;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  const tmp = closure_9();
  let obj = userId(8400);
  const visibleEffectOrder = userId(15549).useVisibleEffectOrder();
  let obj2 = userId(15549);
  const displayNameStylesNewEffects = userId(15550).useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  [first, closure_5] = first.useState(selectedEffectId);
  closure_6 = tmp7;
  closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    const obj4 = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
    const obj5 = { title: null, trailing: null };
    const intl = tmp2(1115).intl;
    obj5.title = intl.string(onSelectEffect(2870).RVtMxT);
    const obj6 = { text: null, onPress: null, variant: "primary", size: "sm" };
    const intl2 = tmp2(1115).intl;
    obj6.text = intl2.string(tmp2(1115).t.XqMe3N);
    obj6.onPress = tmp8;
    obj5.trailing = closure_7(tmp2(5144).Button, obj6);
    obj4.header = closure_7(onSelectEffect(15554), obj5);
    const obj7 = { style: tmp.container, children: null };
    const obj8 = { style: tmp.contentContainer, children: null };
    const obj9 = {
      direction: "horizontal",
      spacing: 8,
      style: tmp.gridContainer,
      children: visibleEffectOrder.map((effectId) => {
          userId = effectId;
          return closure_7(EffectTile, {
            userId,
            effectId,
            selected: effectId === first,
            showNewDot: _undefined.has(effectId),
            onClick() {
              closure_7(closure_0);
              if (set.has(closure_0)) {
                c3(closure_0);
              }
            }
          }, effectId);
        })
    };
    obj8.children = closure_7(tmp2(5142).Stack, obj9);
    obj7.children = closure_7(closure_5, obj8);
    obj4.children = closure_7(closure_5, obj7);
    tmp9 = closure_7(tmp2(7346).BottomSheet, obj4);
    const tmp12 = onSelectEffect(15554);
  }
  return tmp9;
};