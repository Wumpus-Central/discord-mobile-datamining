// === Module 19409: VoicePanelStageAudienceButton ===

// Module 19409 (VoicePanelStageAudienceButton)
import _modDef4322 from "module_4322" /* 4322 */;
import NativeViewDefault from "NativeView" /* 6929 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11634 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19391 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 19399 */;
import openStageAudienceSheetDefault from "openStageAudienceSheet" /* 19410 */;
import noop from "module_19" /* 19 */;

const require = fn;
const BadgeConstants = fn(1188);
({ BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = BADGE_SIZE / 2;
const cutoutRadius = result + BADGE_PADDING;
const createStyles = fn(4917);
let closure_8 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: { position: "absolute", zIndex: 1, top: 0, right: 0 } });
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStageAudienceButton.tsx");

export default function StageAudienceButton(props) {
  props = props.props;
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_8();
  const voicePanelButtonStyles = channelId(19390).useVoicePanelButtonStyles(props.wrapperSpecs);
  const obj = channelId(19390);
  const canModerateRequestToSpeak = channelId(6683).useCanModerateRequestToSpeak(channelId);
  const obj2 = channelId(6683);
  let num = 0;
  if (canModerateRequestToSpeak) {
    num = obj3.useStageParticipantsCount(channelId, channelId(6729).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  }
  const element = {
    onPress() {
      return openStageAudienceSheetDefault(channelId);
    },
    props,
    accessibilityLabel: null,
    children: null
  };
  obj3 = channelId(6735);
  const intl = tmp4(1112).intl;
  if (num > 0) {
    const obj4 = { count: num };
    let formatToPlainStringResult = intl.formatToPlainString(_modDef4322.IQmRBE, obj4);
  } else {
    formatToPlainStringResult = intl.string(_modDef4322.Ds8IST);
  }
  element.accessibilityLabel = formatToPlainStringResult;
  items = [closure_4(CircleWithCutoutDefault, { fill: voicePanelButtonStyles.iconBg.backgroundColor, circleRadius: props.width / 2, cutoutRadius, enableCutout: num > 0, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius, scaleToPixelDensity: true }), , ];
  const obj6 = { style: tmp3.iconContainer, children: null };
  const obj5 = { fill: voicePanelButtonStyles.iconBg.backgroundColor, circleRadius: props.width / 2, cutoutRadius, enableCutout: num > 0, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius, scaleToPixelDensity: true };
  const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
  obj6.children = closure_4(channelId(7029).GroupIcon, { color: voicePanelButtonStyles.iconFill.color });
  items[1] = closure_4(NativeViewDefault, obj6);
  const obj8 = { style: tmp3.badge, pointerEvents: "none", children: null };
  const obj7 = { color: voicePanelButtonStyles.iconFill.color };
  const tmpResult3 = NativeViewDefault;
  obj8.children = closure_4(channelId(1186).Badge, { value: num, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" });
  items[2] = closure_4(NativeViewDefault, obj8);
  element.children = items;
  return closure_5(tmpResult, element);
};