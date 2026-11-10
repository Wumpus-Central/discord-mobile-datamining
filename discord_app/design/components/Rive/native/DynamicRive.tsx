// === Module 14069: DynamicRive ===

// Module 14069 (DynamicRive)
import BaseRive from "BaseRive" /* 5209 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 5262 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Rive/native/DynamicRive.tsx");

export function DynamicRive(artboard) {
  const src = artboard.src;
  const merged = Object.assign(artboard, Object.assign({ src: 0, artboard: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  obj.children = jsx(BaseRive.BaseRive, { src, artboard: artboard.artboard, artboardProperties: {}, artboardViewModelInstances: {} });
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { children: null }, src);
}