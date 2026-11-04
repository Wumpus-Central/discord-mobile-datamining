// discord_app/design/components/Illustration/native/redesign/generated/BansEmpty.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8947 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/20105__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20106__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/20107__.js");
    },
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/20105__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20106__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/20107__.js");
    },
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/20105__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20106__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/20107__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/20105__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20106__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/20107__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
