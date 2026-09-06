// === Module 9592: useParticipantTileTapGesture ===

// Module 9592 (useParticipantTileTapGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = LegacyBaseButton.Gesture;
  const TapResult = Gesture.Tap();
  const Gesture2 = LegacyBaseButton.Gesture;
  const onStartResult = Gesture.Tap().onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const onStartResult1 = Gesture2.Tap().onStart(onDoubleTapStart);
  const Gesture3 = LegacyBaseButton.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
};