// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8502 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11215__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18084__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11214__.js");
    },
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11215__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18084__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11214__.js");
    },
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11215__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18084__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11214__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
