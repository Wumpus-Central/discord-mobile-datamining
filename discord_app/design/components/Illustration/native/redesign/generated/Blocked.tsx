// discord_app/design/components/Illustration/native/redesign/generated/Blocked.tsx
import shared from "../../../../../shared.tsx";
import _mod8361 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14918__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14919__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14920__.js");
    },
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14918__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14919__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14920__.js");
    },
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14918__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14919__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14920__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
