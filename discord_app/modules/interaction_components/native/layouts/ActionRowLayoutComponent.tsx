// discord_app/modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: tmp(components) };
      tmp2 = <View>{tmp(components)}</View>;
    }
  }
  return tmp2;
}
