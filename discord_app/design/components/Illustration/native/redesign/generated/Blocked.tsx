// discord_app/design/components/Illustration/native/redesign/generated/Blocked.tsx
import shared from "../../../../../shared.tsx";
import _mod7679 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14340__.js");
    },
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14340__.js");
    },
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14340__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
