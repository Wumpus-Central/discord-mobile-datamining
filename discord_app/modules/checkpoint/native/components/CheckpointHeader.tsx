// === Module 12511: CheckpointHeader ===

// Module 12511 (CheckpointHeader)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import _modDef5998 from "module_5998" /* 5998 */;
import _modDef5999 from "module_5999" /* 5999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 7034 */;
import XSmallIcon from "XSmallIcon" /* 7151 */;
import VoiceXIcon from "VoiceXIcon" /* 10981 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12500 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12512 */;
import CheckpointHeaderButtonDefault from "CheckpointHeaderButton" /* 12513 */;
import CheckpointStore from "CheckpointStore" /* 12128 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

function handleClose() {
  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  ModalActionCreatorsDefault.pop();
}
const View = _mod17.View;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { nav: null, logo: null, headerActions: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
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
    logoAnimatedUri = _modDef5998;
  }
  let logoStaticUri = logoAnimatedUri.logoStaticUri;
  if (logoStaticUri === undefined) {
    logoStaticUri = _modDef5999;
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
  const items2 = [timestampProducer(CheckpointApngPlayerDefault, { animatedUri: logoAnimatedUri, staticUri: logoStaticUri, style: tmp5.logo }), ];
  const obj4 = { style: tmp5.headerActions, children: null };
  const obj5 = { onPress: null, accessibilityLabel: null, color: null, children: null };
  const obj3 = { animatedUri: logoAnimatedUri, staticUri: logoStaticUri, style: tmp5.logo };
  obj5.onPress = CheckpointActionCreators.toggleMute;
  const intl = util.intl;
  const t = util.t;
  obj5.accessibilityLabel = intl.string(stateFromStores ? t.YqAjXy : t.w4m945);
  obj5.color = color;
  obj5.children = timestampProducer(VoiceNormalIcon, { color, size: "xs" });
  const items3 = [timestampProducer(CheckpointHeaderButtonDefault, obj5), ];
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
};