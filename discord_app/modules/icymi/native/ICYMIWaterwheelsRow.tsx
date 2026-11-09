// === Module 18945: ICYMIWaterwheelsRow ===

// Module 18945 (ICYMIWaterwheelsRow)
import WaterwheelsCard from "WaterwheelsCard" /* 18912 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 18946 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  const onAction = useWaterwheelsActions.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, { card: card.card, onAction });
};