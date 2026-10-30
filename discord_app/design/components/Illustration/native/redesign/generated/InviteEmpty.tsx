// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8798 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod8798.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10807__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19754__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10806__.js");
    },
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10807__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19754__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10806__.js");
    },
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10807__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19754__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10806__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/10807__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19754__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10806__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
