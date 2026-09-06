// discord_app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
let items = [
  fn(1391).DisplayNameFont.DEFAULT,
  fn(1391).DisplayNameFont.ZILLA_SLAB,
  fn(1391).DisplayNameFont.CHERRY_BOMB,
  fn(1391).DisplayNameFont.CHICLE,
  fn(1391).DisplayNameFont.MUSEO_MODERNO,
  fn(1391).DisplayNameFont.NEO_CASTEL,
  fn(1391).DisplayNameFont.PIXELIFY,
  fn(1391).DisplayNameFont.SINISTRE,
];
const items1 = [...fn(1389).FLYWHEEL_FONTS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled =
    isDisplayNameStylesFlywheelSettersEnabled(9177).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => (isDisplayNameStylesFlywheelSettersEnabled ? items1 : items), items);
};
