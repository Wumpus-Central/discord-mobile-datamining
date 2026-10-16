// discord_app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let items = [
  fn(1412).DisplayNameFont.DEFAULT,
  fn(1412).DisplayNameFont.ZILLA_SLAB,
  fn(1412).DisplayNameFont.CHERRY_BOMB,
  fn(1412).DisplayNameFont.CHICLE,
  fn(1412).DisplayNameFont.MUSEO_MODERNO,
  fn(1412).DisplayNameFont.NEO_CASTEL,
  fn(1412).DisplayNameFont.PIXELIFY,
  fn(1412).DisplayNameFont.SINISTRE,
];
const items1 = [...fn(1410).FLYWHEEL_FONTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVisibleFontOrder() {
      return DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("font-order")
        ? items1
        : items;
    }
  : function useVisibleFontOrder() {
      isDisplayNameStylesFlywheelSettersEnabled =
        isDisplayNameStylesFlywheelSettersEnabled(15570).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
      items = [isDisplayNameStylesFlywheelSettersEnabled];
      return noop.useMemo(() => (isDisplayNameStylesFlywheelSettersEnabled ? items1 : items), items);
    };
