// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06766_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import _modDef9747 from "../../../../../_runtime/metro/09747__.js";
import useScreenshareUtils from "../useScreenshareUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  image: { marginBottom: 12 },
  title: { textAlign: "center", marginBottom: 8 },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
};
let closure_8 = createStyles.createStyles(obj2);
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
  const obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }),
    children: null,
  };
  const obj2 = { style: null, children: null };
  const items2 = [tmp4.container, participant.containerStyle];
  obj2.style = items2;
  const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const items3 = [timestampProducer(hasOwnProperty, { source: _modDef9747, style: tmp4.image }), , ,];
  const obj4 = {
    style: tmp4.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t.gMOwov);
  items3[1] = timestampProducer(Text_Text.Text, obj4);
  const obj5 = {
    style: tmp4.description,
    variant: "text-sm/medium",
    color: "interactive-text-default",
    children: null,
  };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.dKeLGt);
  items3[2] = timestampProducer(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.CpkXwZ);
  obj6.onPress = useScreenshareUtils.stopScreenshare;
  items3[3] = timestampProducer(components_Button_Button.Button, obj6);
  obj2.children = items3;
  obj.children = React5(React4, obj2);
  return timestampProducer(LegacyBaseButton.GestureDetector, obj);
}
