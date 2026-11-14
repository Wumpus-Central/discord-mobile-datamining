// === Module 10721: GuildPowerupsImage ===

// Module 10721 (GuildPowerupsImage)
import initialize from "initialize" /* 504 */;
import FastImageDefault from "FastImage" /* 6020 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(uri) {
  let flag = uri.isAnimated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_5();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: null, source: { uri: uri.imageUrl }, enableAnimation: null };
  const items1 = [tmp.image, uri.style];
  obj2.style = items1;
  if (flag) {
    flag = !stateFromStores;
  }
  obj2.enableAnimation = flag;
  return jsx(FastImageDefault, { style: null, source: { uri: uri.imageUrl }, enableAnimation: null });
};