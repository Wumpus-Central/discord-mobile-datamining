// discord_app/design/components/Illustration/native/redesign/generated/WumpTrash.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8952 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export function getWumpTrashSource(theme) {
  return _mod8952.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18305__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18306__.js");
    },
  });
}
export function useWumpTrashSource() {
  const obj = shared;
  return _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18305__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18306__.js");
    },
  });
}
export function WumpTrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18305__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18306__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/18305__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18306__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
