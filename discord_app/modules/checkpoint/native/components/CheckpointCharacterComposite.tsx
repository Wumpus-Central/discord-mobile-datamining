// === Module 12644: CheckpointCharacterComposite ===

// Module 12644 (CheckpointCharacterComposite)
import jsxProd from "jsxProd" /* 21 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_5 = createStyles.createStyles({ hidden: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterComposite.tsx");

export default function CheckpointCharacterComposite(images) {
  images = images.images;
  c0 = undefined;
  c1 = undefined;
  ({ urls, onLoad: c0, onError: c1 } = images);
  items = [absoluteFill.absoluteFill, ];
  let hidden = "ready" !== images.status;
  if (hidden) {
    hidden = closure_5().hidden;
  }
  items[1] = hidden;
  return <closure_3 style={items} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{urls.map((uri) => jsx(_undefined(_undefined2[3]), {
    source: { uri },
    style: absoluteFill.absoluteFill,
    fadeDuration: 0,
    onLoad() {
      return uri(closure_0);
    },
    onError() {
      return c1(closure_0);
    }
  }, uri))}</closure_3>;
};