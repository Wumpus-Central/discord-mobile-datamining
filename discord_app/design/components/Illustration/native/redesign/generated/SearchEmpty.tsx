// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8463 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10560__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10561__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10562__.js");
    },
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10560__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10561__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10562__.js");
    },
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10560__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10561__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10562__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
