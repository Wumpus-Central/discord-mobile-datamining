// === Module 5328: fromServer ===

// Module 5328 (fromServer)
import toJSDefault from "toJS" /* 1931 */;

const require = fn;
toJSDefault;
const prototype = function CollectiblesStoreListingStylesRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ backgroundColors: tmp.backgroundColors, buttonColors: tmp.buttonColors, confettiColors: tmp.confettiColors } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ background_colors, button_colors, confetti_colors } = arg0);
  const mapped = background_colors.map((item, index) => {
    const tmp = callback2(5311);
    return tmp(callback(688).int2hex(item));
  });
  const mapped1 = button_colors.map((item, index) => {
    const tmp = callback2(5311);
    return tmp(callback(688).int2hex(item));
  });
  const mapped2 = confetti_colors.map((item, index) => {
    const tmp = callback2(5311);
    return tmp(callback(688).int2hex(item));
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
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default prototype;