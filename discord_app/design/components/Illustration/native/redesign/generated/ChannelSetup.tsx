// discord_app/design/components/Illustration/native/redesign/generated/ChannelSetup.tsx
import shared from "../../../../../shared.tsx";
import _mod8352 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17825__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17826__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17827__.js");
    },
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17825__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17826__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17827__.js");
    },
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17825__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17826__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17827__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
