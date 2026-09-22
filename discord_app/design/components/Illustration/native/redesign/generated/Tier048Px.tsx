// discord_app/design/components/Illustration/native/redesign/generated/Tier048Px.tsx
import shared from "../../../../../shared.tsx";
import _mod8506 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8506.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13781__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13782__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13783__.js");
    },
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13781__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13782__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13783__.js");
    },
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13781__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13782__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13783__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
