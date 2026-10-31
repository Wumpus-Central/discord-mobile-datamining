// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";

const require = fn;
const View = fn(17).View;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  title: { textAlign: "center", marginBottom: 8 },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = noop.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = noop.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  const tmp5 = closure_9();
  const tmp4 = onSingleTap(onDoubleTap[7])({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const items2 = [ApplicationStreamingStore];
  const stateFromStores = participant(onDoubleTap[8]).useStateFromStores(items2, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const obj2 = { gesture: tmp4, children: null };
  const obj3 = { style: null, children: null };
  const items3 = [tmp5.container, participant.containerStyle];
  obj3.style = items3;
  const obj4 = {
    style: tmp5.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = participant(onDoubleTap[11]).intl;
  const string = intl.string;
  const t = participant(onDoubleTap[11]).t;
  if (stateFromStores) {
    let stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  obj4.children = stringResult;
  const items4 = [closure_7(participant(onDoubleTap[10]).Text, obj4), ,];
  const obj5 = {
    style: tmp5.description,
    variant: "text-sm/medium",
    color: "interactive-text-default",
    children: null,
  };
  const intl2 = tmp6(tmp3[11]).intl;
  const string2 = intl2.string;
  const t2 = tmp6(tmp3[11]).t;
  if (stateFromStores) {
    let string2Result = string2(t2.LV1NSN);
  } else {
    string2Result = string2(t2.dKeLGt);
  }
  obj5.children = string2Result;
  items4[1] = closure_7(participant(onDoubleTap[10]).Text, obj5);
  const obj6 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = tmp6(tmp3[11]).intl;
  obj6.text = intl3.string(participant(onDoubleTap[11]).t.CpkXwZ);
  obj6.onPress = participant(onDoubleTap[13]).stopScreenshare;
  items4[2] = closure_7(participant(onDoubleTap[12]).Button, obj6);
  obj3.children = items4;
  obj2.children = closure_8(View, obj3);
  return closure_7(participant(onDoubleTap[9]).GestureDetector, obj2);
}
