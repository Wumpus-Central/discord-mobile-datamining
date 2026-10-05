// === Module 9090: useParticipantTileTapGesture ===

// Module 9090 (useParticipantTileTapGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  let onDoubleTapStart;
  let onSingleTapStart;
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = LegacyBaseButton.Gesture;
  const TapResult = Gesture.Tap();
  const runOnJSResult = TapResult.runOnJS(true);
  const onStartResult = runOnJSResult.onStart(onSingleTapStart);
  const Gesture2 = LegacyBaseButton.Gesture;
  const TapResult1 = Gesture2.Tap();
  const runOnJSResult1 = TapResult1.runOnJS(true);
  const onStartResult1 = runOnJSResult1.onStart(onDoubleTapStart);
  const numberOfTapsResult = onStartResult1.numberOfTaps(2);
  const Gesture3 = LegacyBaseButton.Gesture;
  return Gesture3.Exclusive(numberOfTapsResult, onStartResult);
};