// discord_app/design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx
import shared from "../../../../../shared.tsx";
import _mod8352 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx",
);

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13472__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13473__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13474__.js");
    },
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13472__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13473__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13474__.js");
    },
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13472__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13473__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13474__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
