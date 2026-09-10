// discord_app/design/components/Illustration/native/redesign/generated/ChannelSetup.tsx
import shared from "../../../../../shared.tsx";
import _mod8296 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17765__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17766__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17767__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17765__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17766__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17767__.js");
    },
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17765__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17766__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17767__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
