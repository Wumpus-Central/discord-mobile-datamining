// discord_app/design/components/Illustration/native/redesign/generated/ChannelSetup.tsx
import shared from "../../../../../shared.tsx";
import _mod8361 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17881__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17882__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17883__.js");
    },
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17881__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17882__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17883__.js");
    },
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17881__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17882__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17883__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
