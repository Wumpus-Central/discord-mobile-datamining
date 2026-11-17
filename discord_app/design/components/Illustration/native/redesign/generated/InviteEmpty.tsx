// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8194 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export function getInviteEmptySource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15165__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20646__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15164__.js");
    },
  });
}
export function useInviteEmptySource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15165__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20646__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15164__.js");
    },
  });
}
export function InviteEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15165__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20646__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15164__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/15165__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/20646__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15164__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
