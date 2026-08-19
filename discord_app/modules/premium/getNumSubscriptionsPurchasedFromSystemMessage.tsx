// === Module 8223: getNumSubscriptionsPurchasedFromSystemMessage ===

// Module 8223 (getNumSubscriptionsPurchasedFromSystemMessage)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

export default function getNumSubscriptionsPurchasedFromSystemMessage(content) {
  const NumberResult = Number(content.content);
  let num = 1;
  if (!isNaN(NumberResult)) {
    num = 1;
    if (0 !== NumberResult) {
      num = NumberResult;
    }
  }
  return num;
};