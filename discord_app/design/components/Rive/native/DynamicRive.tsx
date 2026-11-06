// discord_app/design/components/Rive/native/DynamicRive.tsx
import BaseRive from "../../../../../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx";
import RiveErrorBoundary from "../../../../../discord_common/js/packages/design/components/Rive/native/RiveErrorBoundary.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Rive/native/DynamicRive.tsx");

export function DynamicRive(artboard) {
  const src = artboard.src;
  const merged = Object.assign(artboard, Object.assign({ src: 0, artboard: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  obj.children = jsx(BaseRive.BaseRive, {
    src,
    artboard: artboard.artboard,
    artboardProperties: {},
    artboardViewModelInstances: {},
  });
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { children: null }, src);
}
