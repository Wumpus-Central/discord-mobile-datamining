// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8806 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod8806.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10035__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10036__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10037__.js");
    },
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10035__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10036__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10037__.js");
    },
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10035__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10036__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10037__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/10035__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10036__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10037__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
