// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStageAudienceButton.tsx
import _modDef4209 from "../../../../stage_channels/StageChannel.messages.js";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import CircleWithCutoutDefault from "../../shared/CircleWithCutout.tsx";
import openStageAudienceSheetDefault from "../../../../stage_channels/native/openStageAudienceSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const BadgeConstants = fn(1189);
({ BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = BADGE_SIZE / 2;
const cutoutRadius = result + BADGE_PADDING;
const createStyles = fn(5243);
let closure_8 = createStyles.createStyles({
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  badge: { position: "absolute", zIndex: 1, top: 0, right: 0 },
});
const size = fn(2);
const result1 = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelStageAudienceButton.tsx",
);

export default function StageAudienceButton(props) {
  props = props.props;
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_8();
  const voicePanelButtonStyles = channelId(19931).useVoicePanelButtonStyles(props.wrapperSpecs);
  const obj = channelId(19931);
  const canModerateRequestToSpeak = channelId(6875).useCanModerateRequestToSpeak(channelId);
  const obj2 = channelId(6875);
  let num = 0;
  if (canModerateRequestToSpeak) {
    num = obj3.useStageParticipantsCount(
      channelId,
      channelId(6880).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY,
    );
  }
  const element = {
    onPress() {
      return openStageAudienceSheetDefault(channelId);
    },
    props,
    accessibilityLabel: null,
    children: null,
  };
  obj3 = channelId(6886);
  const intl = tmp4(1113).intl;
  if (num > 0) {
    const obj4 = { count: num };
    let formatToPlainStringResult = intl.formatToPlainString(_modDef4209.IQmRBE, obj4);
  } else {
    formatToPlainStringResult = intl.string(_modDef4209.Ds8IST);
  }
  element.accessibilityLabel = formatToPlainStringResult;
  items = [
    closure_4(CircleWithCutoutDefault, {
      fill: voicePanelButtonStyles.iconBg.backgroundColor,
      circleRadius: props.width / 2,
      cutoutRadius,
      enableCutout: num > 0,
      cutoutPositionInDegrees: 45,
      alignBadgeEdgeWithCircleEdge: true,
      badgeRadius,
      scaleToPixelDensity: true,
    }),
    ,
  ];
  const obj6 = { style: tmp3.iconContainer, children: null };
  const obj5 = {
    fill: voicePanelButtonStyles.iconBg.backgroundColor,
    circleRadius: props.width / 2,
    cutoutRadius,
    enableCutout: num > 0,
    cutoutPositionInDegrees: 45,
    alignBadgeEdgeWithCircleEdge: true,
    badgeRadius,
    scaleToPixelDensity: true,
  };
  const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
  obj6.children = closure_4(channelId(7372).GroupIcon, { color: voicePanelButtonStyles.iconFill.color });
  items[1] = closure_4(NativeViewDefault, obj6);
  const obj8 = { style: tmp3.badge, pointerEvents: "none", children: null };
  const obj7 = { color: voicePanelButtonStyles.iconFill.color };
  const tmpResult3 = NativeViewDefault;
  obj8.children = closure_4(channelId(1187).Badge, {
    value: num,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
  });
  items[2] = closure_4(NativeViewDefault, obj8);
  element.children = items;
  return closure_5(tmpResult, element);
}
