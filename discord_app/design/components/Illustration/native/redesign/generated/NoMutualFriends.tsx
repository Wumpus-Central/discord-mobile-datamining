// discord_app/design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx
import shared from "../../../../../shared.tsx";
import _mod8349 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx",
);

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12741__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12742__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12743__.js");
    },
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12741__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12742__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12743__.js");
    },
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12741__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12742__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12743__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
