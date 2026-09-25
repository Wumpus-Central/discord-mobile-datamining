// discord_app/design/components/Illustration/native/redesign/generated/NoMutualServers.tsx
import shared from "../../../../../shared.tsx";
import _mod7671 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/NoMutualServers.tsx",
);

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12084__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12085__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12086__.js");
    },
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12084__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12085__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12086__.js");
    },
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12084__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12085__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12086__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
