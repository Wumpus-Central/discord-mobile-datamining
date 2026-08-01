// === Module 1504: context ===

// Module 1504 (context)
import importAllResult from "noop";

let c0 = importAllResult;
let c1 = "Couldn't find a schedule context.";
let context = importAllResult.createContext({
  scheduleUpdate(arg0) {
    const error = new Error(c1);
    throw error;
  },
  flushUpdates() {
    const error = new Error(c1);
    throw error;
  }
});

export default function useScheduleUpdate(arg0) {
  context = importAllResult.useContext(context);
  context.scheduleUpdate(arg0);
  const effect = importAllResult.useEffect(context.flushUpdates);
};
export const ScheduleUpdateContext = context;