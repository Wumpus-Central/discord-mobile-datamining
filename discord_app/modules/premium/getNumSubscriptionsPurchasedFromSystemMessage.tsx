// === Module 7922: getNumSubscriptionsPurchasedFromSystemMessage ===

// Module 7922 (getNumSubscriptionsPurchasedFromSystemMessage)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

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