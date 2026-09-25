// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod7671 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10401__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17416__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10400__.js");
    },
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10401__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17416__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10400__.js");
    },
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10401__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17416__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10400__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
