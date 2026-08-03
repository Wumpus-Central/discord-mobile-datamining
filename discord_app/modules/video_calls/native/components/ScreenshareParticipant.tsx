import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, image: null, title: null, description: null };
createCacheKey = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 12 };
createCacheKey[2] = { textAlign: "center", marginBottom: 8 };
createCacheKey[3] = { lineHeight: 18, textAlign: "center", marginBottom: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = React.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = React.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  const tmp4 = createCacheKey();
  let obj = { gesture: onSingleTap(onDoubleTap[5])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: null };
  obj = { style: items2, children: null };
  items2 = [tmp4.container, participant.containerStyle];
  obj = { source: null, style: null };
  obj[0] = onSingleTap(onDoubleTap[7]);
  obj[1] = tmp4.image;
  const items3 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = participant(onDoubleTap[9]).intl;
  obj1[4] = intl.string(participant(onDoubleTap[9]).t.gMOwov);
  items3[1] = callback(participant(onDoubleTap[8]).Text, obj1);
  const obj2 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default", children: null };
  const intl2 = participant(onDoubleTap[9]).intl;
  obj2[3] = intl2.string(participant(onDoubleTap[9]).t.dKeLGt);
  items3[2] = callback(participant(onDoubleTap[8]).Text, obj2);
  const obj3 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = participant(onDoubleTap[9]).intl;
  obj3[1] = intl3.string(participant(onDoubleTap[9]).t.CpkXwZ);
  obj3[2] = participant(onDoubleTap[11]).stopScreenshare;
  items3[3] = callback(participant(onDoubleTap[10]).Button, obj3);
  obj[1] = items3;
  obj[1] = callback2(closure_4, obj);
  return callback(participant(onDoubleTap[6]).GestureDetector, obj);
};