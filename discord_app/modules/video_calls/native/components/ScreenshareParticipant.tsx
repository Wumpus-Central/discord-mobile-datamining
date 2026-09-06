// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import _modDef9593 from "../../../../../_runtime/metro/09593__.js";
import useScreenshareUtils from "../useScreenshareUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, image: null, title: null, description: null };
createStyles = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
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
  let obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }),
    children: null,
  };
  obj = { style: null, children: null };
  const items2 = [tmp4.container, participant.containerStyle];
  obj.style = items2;
  obj = { source: _modDef9593, style: tmp4.image };
  const items3 = [timestampProducer(hasOwnProperty, obj), , ,];
  const obj1 = {
    style: tmp4.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.gMOwov);
  items3[1] = timestampProducer(Text_Text.Text, obj1);
  const obj2 = {
    style: tmp4.description,
    variant: "text-sm/medium",
    color: "interactive-text-default",
    children: null,
  };
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
}
