// discord_app/modules/virtual_currency/native/OrbOnboardingPill.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class OrbOnboardingPill {
  constructor() {
    obj = { style: closure_5().container, children: null };
    items = [,];
    items[0] = jsx(closure_0(closure_1[3]).OrbsIcon, { size: "sm" });
    obj1 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    intl = closure_0(closure_1[5]).intl;
    obj1.children = intl.string(closure_0(closure_1[5]).t["9JpRfC"]);
    items[1] = jsx(closure_0(closure_1[4]).Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
OrbOnboardingPill.displayName = "OrbOnboardingPill";
const createStyles = fn(4638);
let obj2 = {
  container: {
    height: 36,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingVertical: nativeDefault.space.PX_4,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    flexShrink: 0,
    gap: 4,
  },
};
const hasOwnProperty = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };
