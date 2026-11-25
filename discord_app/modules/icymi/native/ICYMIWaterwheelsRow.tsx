// === Module 18308: ICYMIWaterwheelsRow ===

// Module 18308 (ICYMIWaterwheelsRow)
import useWaterwheelsActions from "useWaterwheelsActions" /* 17952 */;
import WaterwheelsCard from "WaterwheelsCard" /* 17957 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  closure_0 = useWaterwheelsActions.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, {
    card: card.card,
    onAction(arg0) {
      return closure_0(arg0);
    }
  });
};