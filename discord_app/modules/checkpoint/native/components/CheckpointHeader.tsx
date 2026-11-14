// discord_app/modules/checkpoint/native/components/CheckpointHeader.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import _modDef6406 from "../../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6407 from "../../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import VoiceNormalIcon2 from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import CheckpointActionCreators from "../../CheckpointActionCreators.tsx";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import CheckpointHeaderButtonDefault from "CheckpointHeaderButton.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

function handleClose() {
  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  ModalActionCreatorsDefault.pop();
}
const View = _mod17.View;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { nav: null, logo: null, headerActions: null };
let rect = {
  position: "absolute",
  top: 0,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  height: CHECKPOINT_NAV_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj.nav = rect;
let size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj.logo = size;
obj.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeader.tsx");

export default function CheckpointHeader(logoAnimatedUri) {
  logoAnimatedUri = logoAnimatedUri.logoAnimatedUri;
  if (logoAnimatedUri === undefined) {
    logoAnimatedUri = _modDef6406;
  }
  let logoStaticUri = logoAnimatedUri.logoStaticUri;
  if (logoStaticUri === undefined) {
    logoStaticUri = _modDef6407;
  }
  let color = logoAnimatedUri.color;
  if (color === undefined) {
    color = hasOwnProperty;
  }
  const tmp5 = closure_8();
  const rect = useSafeAreaInsetsDefault();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isMuted.isMuted);
  if (stateFromStores) {
    let VoiceNormalIcon = VoiceXIcon.VoiceXIcon;
  } else {
    VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  }
  const obj2 = { style: null, children: null };
  const items1 = [tmp5.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj2.style = items1;
  const items2 = [
    timestampProducer(CheckpointApngPlayerDefault, {
      animatedUri: logoAnimatedUri,
      staticUri: logoStaticUri,
      style: tmp5.logo,
    }),
  ];
  const obj4 = { style: tmp5.headerActions, children: null };
  const obj5 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const obj3 = { animatedUri: logoAnimatedUri, staticUri: logoStaticUri, style: tmp5.logo };
  obj5.onPress = CheckpointActionCreators.toggleMute;
  const intl = util.intl;
  const t = util.t;
  obj5.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj5.color = color;
  obj5.children = timestampProducer(VoiceNormalIcon, { color, size: "xs" });
  const items3 = [timestampProducer(CheckpointHeaderButtonDefault, obj5)];
  const obj6 = { onPress: handleClose, accessibilityLabel: null, color: null, children: null };
  const tmp6Result = CheckpointHeaderButtonDefault;
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj6.color = color;
  obj6.children = timestampProducer(XSmallIcon.XSmallIcon, { color, size: "xs" });
  items3[1] = timestampProducer(CheckpointHeaderButtonDefault, obj6);
  obj4.children = items3;
  items2[1] = metroImportDefault(View, obj4);
  obj2.children = items2;
  return metroImportDefault(View, obj2);
}
