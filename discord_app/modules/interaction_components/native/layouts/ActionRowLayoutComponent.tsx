// discord_app/modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: null };
      obj[0] = tmp(components);
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};