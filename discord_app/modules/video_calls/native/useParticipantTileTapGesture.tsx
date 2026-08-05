import { Directions } from "../../../../_runtime/05368_Directions.js";
// discord_app/modules/video_calls/native/useParticipantTileTapGesture.tsx
const result = require("set").fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  let onDoubleTapStart;
  let onSingleTapStart;
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = Directions /* Directions */.Gesture;
  const TapResult = Gesture.Tap();
  const Gesture2 = Directions /* Directions */.Gesture;
  const onStartResult = Gesture.Tap().onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const onStartResult1 = Gesture2.Tap().onStart(onDoubleTapStart);
  const Gesture3 = Directions /* Directions */.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};