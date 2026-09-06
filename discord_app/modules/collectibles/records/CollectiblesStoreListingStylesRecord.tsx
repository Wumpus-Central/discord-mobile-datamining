// === Module 7562: fromServer ===

// Module 7562 (fromServer)
import toJSDefault from "toJS" /* 1386 */;

const require = arg1;
toJSDefault;
let prototype;
prototype = function CollectiblesStoreListingStylesRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ backgroundColors: tmp.backgroundColors, buttonColors: tmp.buttonColors, confettiColors: tmp.confettiColors } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ background_colors, button_colors, confetti_colors } = arg0);
  const mapped = background_colors.map((color) => {
    const tmp = callback2(7552);
    return tmp(callback(1091).int2hex(color));
  });
  const mapped1 = button_colors.map((color) => {
    const tmp = callback2(7552);
    return tmp(callback(1091).int2hex(color));
  });
  const mapped2 = confetti_colors.map((color) => {
    const tmp = callback2(7552);
    return tmp(callback(1091).int2hex(color));
  });
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp5 = new prototype("Trying to call a non-function", confetti_colors, prototype, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp5.backgroundColors = mapped;
  tmp5.buttonColors = mapped1;
  tmp5.confettiColors = mapped2;
  return tmp5;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default prototype;