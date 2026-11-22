// discord_app/design/components/Illustration/native/redesign/generated/TopPattern.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod7786 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export function getTopPatternSource(theme) {
  return _mod7786.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14126__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14127__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14128__.js");
    },
  });
}
export function useTopPatternSource() {
  const obj = shared;
  return _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14126__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14127__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14128__.js");
    },
  });
}
export function TopPattern(arg0) {
  const obj = shared;
  const illustrationSource = _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14126__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14127__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14128__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/14126__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14127__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14128__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
