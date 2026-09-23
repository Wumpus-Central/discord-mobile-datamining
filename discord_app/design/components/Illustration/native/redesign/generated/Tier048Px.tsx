// discord_app/design/components/Illustration/native/redesign/generated/Tier048Px.tsx
import shared from "../../../../../shared.tsx";
import _mod8577 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13866__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13867__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13868__.js");
    },
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13866__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13867__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13868__.js");
    },
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13866__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13867__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13868__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
