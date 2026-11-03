// discord_app/modules/icymi/native/ICYMIWaterwheelsRow.tsx
import WaterwheelsCard from "../../waterwheels/cards/native/WaterwheelsCard.tsx";
import useWaterwheelsActions from "../../waterwheels/actions/native/useWaterwheelsActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  const onAction = useWaterwheelsActions.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, { card: card.card, onAction });
}
