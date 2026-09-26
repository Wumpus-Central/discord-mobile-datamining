// discord_app/modules/video_calls/native/useParticipantTileTapGesture.tsx
import LegacyBaseButton from "../../../../_runtime/06073_LegacyBaseButton.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/video_calls/native/useParticipantTileTapGesture.tsx");

export default function useParticipantTileTapGesture(arg0) {
  ({ onSingleTapStart, onDoubleTapStart } = arg0);
  const Gesture = LegacyBaseButton.Gesture;
  const TapResult = Gesture.Tap();
  const runOnJSResult = Gesture.Tap().runOnJS(true);
  const Gesture2 = LegacyBaseButton.Gesture;
  const onStartResult = Gesture.Tap().runOnJS(true).onStart(onSingleTapStart);
  const TapResult1 = Gesture2.Tap();
  const runOnJSResult1 = Gesture2.Tap().runOnJS(true);
  const onStartResult1 = Gesture2.Tap().runOnJS(true).onStart(onDoubleTapStart);
  const Gesture3 = LegacyBaseButton.Gesture;
  return Gesture3.Exclusive(Gesture2.Tap().runOnJS(true).onStart(onDoubleTapStart).numberOfTaps(2), onStartResult);
}
