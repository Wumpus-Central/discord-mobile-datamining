// discord_app/modules/waterwheels/interest/native/InterestScrollHeader.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_6 = createStyles.createStyles({
  title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 },
  normal: { maxWidth: "100%" },
});
let closure_7 = {
  code: "(function InterestScrollHeaderTsx1(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader() {
  const sharedValue = _mod1652.useSharedValue(0);
  items = [sharedValue];
  return {
    scrollY: sharedValue,
    onScroll: noop.useCallback((nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.contentOffset.y), items),
  };
}
export function InterestCompactTitle(collapseOffset) {
  let num = collapseOffset.collapseOffset;
  ({ title, scrollY } = collapseOffset);
  if (num === undefined) {
    num = 160;
  }
  const tmp = closure_6();
  items = [closure_7, scrollY, num];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class InterestScrollHeaderTsx1 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      obj.opacity = Math.max(0, Math.min(1, (value - Math.max(0, closure_1 - 64)) / 64));
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 8899095355994;
  InterestScrollHeaderTsx1.__initData = tmp4;
  const obj2 = { style: tmp.title, collapsable: false, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(InterestScrollHeaderTsx1);
  const obj3 = {
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    style: null,
    children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }),
  };
  const items2 = [tmp.normal, animatedStyle];
  obj3.style = items2;
  obj2.children = jsx(_modDef1652.View, {
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    style: null,
    children: jsx(Text_Text.Text, { variant: "body-md/semibold", lineClamp: 1, children: title }),
  });
  return (
    <View style={tmp.title} collapsable={false}>
      {null}
    </View>
  );
}
