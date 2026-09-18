// discord_app/design/components/Illustration/native/redesign/generated/Pending.tsx
import shared from "../../../../../shared.tsx";
import _mod8463 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17269__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17270__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17271__.js");
    },
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17269__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17270__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17271__.js");
    },
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17269__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17270__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17271__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
