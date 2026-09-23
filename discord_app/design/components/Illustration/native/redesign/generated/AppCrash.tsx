// discord_app/design/components/Illustration/native/redesign/generated/AppCrash.tsx
import shared from "../../../../../shared.tsx";
import _mod8577 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10192__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10193__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10194__.js");
    },
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10192__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10193__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10194__.js");
    },
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10192__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10193__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10194__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
