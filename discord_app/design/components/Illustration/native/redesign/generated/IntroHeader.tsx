// discord_app/design/components/Illustration/native/redesign/generated/IntroHeader.tsx
import shared from "../../../../../shared.tsx";
import _mod8581 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18198__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18199__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18200__.js");
    },
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18198__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18199__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18200__.js");
    },
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18198__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18199__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18200__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
