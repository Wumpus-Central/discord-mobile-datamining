// discord_app/design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx
import shared from "../../../../../shared.tsx";
import _mod8349 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx",
);

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13466__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13467__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13468__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13466__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13467__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13468__.js");
    },
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13466__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13467__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13468__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
