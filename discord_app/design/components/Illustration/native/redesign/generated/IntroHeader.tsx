// discord_app/design/components/Illustration/native/redesign/generated/IntroHeader.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17658__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17659__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17660__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17658__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17659__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17660__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17658__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17659__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17660__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
