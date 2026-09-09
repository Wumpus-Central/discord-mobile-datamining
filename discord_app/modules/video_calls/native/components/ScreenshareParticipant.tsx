// === Module 10056: ScreenshareParticipant ===

// Module 10056 (ScreenshareParticipant)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import components_Button_Button from "components/Button/Button" /* 4989 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6669 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9624 */;
import _modDef9625 from "module_9625" /* 9625 */;
import useScreenshareUtils from "useScreenshareUtils" /* 9983 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4574);
let createStyles = { container: null, image: null, title: null, description: null };
createStyles = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.image = { marginBottom: 12 };
createStyles.title = { textAlign: "center", marginBottom: 8 };
createStyles.description = { lineHeight: 18, textAlign: "center", marginBottom: 16 };
let closure_8 = createStyles.createStyles(createStyles);
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
  const tmp4 = closure_8();
  let obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: null };
  obj = { style: null, children: null };
  const items2 = [tmp4.container, participant.containerStyle];
  obj.style = items2;
  obj = { source: _modDef9625, style: tmp4.image };
  const items3 = [timestampProducer(hasOwnProperty, obj), , , ];
  const obj1 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.gMOwov);
  items3[1] = timestampProducer(Text_Text.Text, obj1);
  const obj2 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.dKeLGt);
  items3[2] = timestampProducer(Text_Text.Text, obj2);
  const obj3 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.CpkXwZ);
  obj3.onPress = useScreenshareUtils.stopScreenshare;
  items3[3] = timestampProducer(components_Button_Button.Button, obj3);
  obj.children = items3;
  obj.children = React5(React4, obj);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
};