// discord_app/design/components/Illustration/native/redesign/generated/TopPattern.tsx
import shared from "../../../../../shared.tsx";
import _mod8296 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13596__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13597__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13598__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13596__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13597__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13598__.js");
    },
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13596__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13597__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13598__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
