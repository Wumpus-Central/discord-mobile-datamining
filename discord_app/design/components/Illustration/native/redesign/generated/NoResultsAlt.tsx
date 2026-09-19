// discord_app/design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx
import shared from "../../../../../shared.tsx";
import _mod8501 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09848__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09849__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07294__.js");
    },
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09848__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09849__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07294__.js");
    },
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09848__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09849__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07294__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
