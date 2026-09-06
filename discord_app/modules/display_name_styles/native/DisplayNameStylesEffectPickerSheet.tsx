// === Module 15343: DisplayNameStylesEffectPickerSheet ===

// Module 15343 (DisplayNameStylesEffectPickerSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2786 from "module_2786" /* 2786 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10899 */;
import types from "types" /* 10900 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10902 */;
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
    OpWJ3f = _modDef2786.OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  let obj = { onPress: onClick, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: { selected }, children: null };
  const items = [tmp.effectCard, ];
  const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effectId);
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  obj = { style: items, children: null };
  items[1] = selected;
  const obj1 = { userId, userName: stringResult, effectDisplayType: null, pendingDisplayNameStyles: null, style: null, variant: "text-md/semibold" };
  const tmp2Result = useDisplayNameStylesEffectConfigs;
  const tmp8 = timestampProducer;
  const tmp9 = React6;
  obj1.effectDisplayType = types.EffectDisplayType.STATIC;
  obj1.pendingDisplayNameStyles = displayNameStylesEffectConfig.previewStyles;
  obj1.style = tmp.effectName;
  const items1 = [React5(UsernameWithEffectsDefault, obj1), ];
  if (showNewDot) {
    const obj2 = { style: tmp.tileNewDot, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    showNewDot = tmp7(tmp10, obj2);
  }
  items1[1] = showNewDot;
  obj.children = items1;
  obj.children = tmp9(hasOwnProperty, obj);
  return React5(tmp8, obj, effectId);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 }, contentContainer: null, gridContainer: null, effectCard: null, effectCardSelected: null, effectName: null, tileNewDot: null };
createStyles = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.contentContainer = createStyles;
createStyles.gridContainer = { flexWrap: "wrap", width: 350 };
let size = { width: 109, height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
createStyles.effectCard = size;
createStyles.effectCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
createStyles.effectName = { textAlign: "center" };
const size1 = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.space.PX_8 / 2, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, shadowRadius: nativeDefault.space.PX_4, shadowOpacity: 1, elevation: 4 };
createStyles.tileNewDot = size1;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let first;
  const tmp = closure_9();
  let obj = userId(8170);
  let obj1 = userId(15338);
  const visibleEffectOrder = obj1.useVisibleEffectOrder();
  let obj2 = userId(15339);
  const displayNameStylesNewEffects = obj2.useDisplayNameStylesNewEffects(visibleEffectOrder);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  const tmp5 = _slicedToArray(first.useState(selectedEffectId), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  closure_6 = tmp7;
  closure_7 = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    obj = { ref: null, header: null, children: null };
    obj.ref = obj.useBottomSheetRef().bottomSheetRef;
    obj = { style: tmp.header, children: null };
    obj1 = { title: null, trailing: null };
    const intl = tmp2(1114).intl;
    obj1.title = intl.string(onSelectEffect(2786).RVtMxT);
    obj2 = { style: tmp.headerTrailing, children: null };
    const obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
    const intl2 = tmp2(1114).intl;
    obj3.text = intl2.string(tmp2(1114).t.XqMe3N);
    obj3.onPress = tmp8;
    obj2.children = closure_7(tmp2(4975).Button, obj3);
    obj1.trailing = closure_7(closure_5, obj2);
    obj.children = closure_7(tmp2(7149).BottomSheetTitleHeader, obj1);
    obj.header = closure_7(closure_5, obj);
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.contentContainer, children: null };
    const obj6 = {
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
    obj5.children = closure_7(tmp2(4973).Stack, obj6);
    obj4.children = closure_7(closure_5, obj5);
    obj.children = closure_7(closure_5, obj4);
    tmp9 = closure_7(tmp2(7150).BottomSheet, obj);
  }
  return tmp9;
};