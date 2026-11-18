// discord_app/design/components/Illustration/native/redesign/generated/Pending.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod7697 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19073__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19074__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19075__.js");
    },
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19073__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19074__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19075__.js");
    },
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19073__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19074__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19075__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/19073__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19074__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19075__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
