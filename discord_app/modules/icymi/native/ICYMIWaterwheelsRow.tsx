// discord_app/modules/icymi/native/ICYMIWaterwheelsRow.tsx
import useWaterwheelsActions from "../../waterwheels/actions/native/useWaterwheelsActions.tsx";
import WaterwheelsCard from "../../waterwheels/cards/native/WaterwheelsCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    },
  });
}
