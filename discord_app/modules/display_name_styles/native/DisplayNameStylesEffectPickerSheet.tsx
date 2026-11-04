// discord_app/modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3059 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import useDisplayNameStylesEffectConfigs from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function EffectTile(arg0) {
  ({ effectId, selected, showNewDot } = arg0);
  ({ userId, onClick } = arg0);
  const tmp = closure_10();
  const intl = util.intl;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef3059.OpWJ3f;
  }
  const stringResult = intl.string(OpWJ3f);
  const obj = {
    onPress: onClick,
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    accessibilityState: { selected },
    children: null,
  };
  items = [tmp.effectCard];
  const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effectId);
  if (selected) {
    selected = tmp.effectCardSelected;
  }
  const obj2 = { style: items, children: null };
  items[1] = selected;
  const obj3 = {
    userId,
    userName: stringResult,
    effectDisplayType: null,
    pendingDisplayNameStyles: null,
    style: null,
    variant: "body-md/semibold",
  };
  const tmp2Result = useDisplayNameStylesEffectConfigs;
  obj3.effectDisplayType = types.EffectDisplayType.STATIC;
  obj3.pendingDisplayNameStyles = displayNameStylesEffectConfig.previewStyles;
  obj3.style = tmp.effectName;
  const items1 = [React5(UsernameWithEffectsDefault, obj3)];
  if (showNewDot) {
    const obj4 = {
      style: tmp.tileNewDot,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    showNewDot = React5(hasOwnProperty, obj4);
  }
  items1[1] = showNewDot;
  obj2.children = items1;
  obj.children = React6(hasOwnProperty, obj2);
  return React5(timestampProducer, obj, effectId);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6 } = get_ActivityIndicator);
let EFFECT_ORDER = fn(1403).EFFECT_ORDER;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  container: { flex: 1 },
  contentContainer: { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" },
  gridContainer: { flexWrap: "wrap", width: 350 },
  effectCard: null,
  effectCardSelected: null,
  effectName: null,
  tileNewDot: null,
};
let size = {
  width: 109,
  height: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj2.effectCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
obj2.effectCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.effectName = { textAlign: "center" };
const size1 = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.space.PX_8 / 2,
  backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
  shadowColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
  shadowRadius: nativeDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
obj2.tileNewDot = size1;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default function DisplayNameStylesEffectPickerSheet(userId) {
  userId = userId.userId;
  ({ selectedEffectId, onSelectEffect } = userId);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  EFFECT_ORDER = undefined;
  const tmp = closure_10();
  let obj = userId(8882);
  const displayNameStylesNewEffects = userId(17576).useDisplayNameStylesNewEffects(EFFECT_ORDER);
  ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
  [first, closure_5] = first.useState(selectedEffectId);
  closure_6 = tmp7;
  EFFECT_ORDER = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  items = [first !== selectedEffectId, first, onSelectEffect];
  let tmp9 = null;
  if (null != userId) {
    const obj3 = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
    const obj4 = { title: null, trailing: null };
    const intl = tmp2(1113).intl;
    obj4.title = intl.string(onSelectEffect(3059).RVtMxT);
    const obj5 = { text: null, onPress: null, variant: "primary", size: "sm" };
    const intl2 = tmp2(1113).intl;
    obj5.text = intl2.string(tmp2(1113).t.XqMe3N);
    obj5.onPress = tmp8;
    obj4.trailing = closure_8(tmp2(5768).Button, obj5);
    obj3.header = closure_8(onSelectEffect(17578), obj4);
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { style: tmp.contentContainer, children: null };
    const obj8 = {
      direction: "horizontal",
      spacing: 8,
      style: tmp.gridContainer,
      children: EFFECT_ORDER.map((effectId) => {
        userId = effectId;
        return closure_1_8(
          EffectTile,
          {
            userId,
            effectId,
            selected: effectId === first,
            showNewDot: _undefined.has(effectId),
            onClick() {
              closure_7(closure_0);
              if (set.has(closure_0)) {
                c3(closure_0);
              }
            },
          },
          effectId,
        );
      }),
    };
    obj7.children = closure_8(tmp2(6162).Stack, obj8);
    obj6.children = closure_8(closure_5, obj7);
    obj3.children = closure_8(closure_5, obj6);
    tmp9 = closure_8(tmp2(5396).BottomSheet, obj3);
    const tmp12 = onSelectEffect(17578);
  }
  return tmp9;
}
