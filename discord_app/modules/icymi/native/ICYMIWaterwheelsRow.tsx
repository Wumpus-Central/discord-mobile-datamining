// === Module 18974: ICYMIWaterwheelsRow ===

// Module 18974 (ICYMIWaterwheelsRow)
import WaterwheelsCard from "WaterwheelsCard" /* 18941 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 18975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  const onAction = useWaterwheelsActions.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, { card: card.card, onAction });
};