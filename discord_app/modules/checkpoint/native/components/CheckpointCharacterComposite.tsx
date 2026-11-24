// discord_app/modules/checkpoint/native/components/CheckpointCharacterComposite.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_5 = createStyles.createStyles({ hidden: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterComposite.tsx");

export default function CheckpointCharacterComposite(images) {
  images = images.images;
  c0 = undefined;
  c1 = undefined;
  ({ urls, onLoad: c0, onError: c1 } = images);
  items = [absoluteFill.absoluteFill];
  let hidden = "ready" !== images.status;
  if (hidden) {
    hidden = closure_5().hidden;
  }
  items[1] = hidden;
  return (
    <closure_3 style={items} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {urls.map((uri) =>
        jsx(
          _undefined(_undefined2[3]),
          {
            source: { uri },
            style: absoluteFill.absoluteFill,
            fadeDuration: 0,
            onLoad() {
              return uri(closure_0);
            },
            onError() {
              return c1(closure_0);
            },
          },
          uri,
        ),
      )}
    </closure_3>
  );
}
