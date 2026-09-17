// === Module 15810: CheckpointModal ===

// Module 15810 (CheckpointModal)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4350 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import _modDef7106 from "module_7106" /* 7106 */;
import HeaderActionButton from "HeaderActionButton" /* 7491 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15811 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 15817 */;
import _modDef15818 from "module_15818" /* 15818 */;
import CheckpointConstants from "CheckpointConstants" /* 4866 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4640 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ CHECKPOINT_PRIMARY, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { height: "100%" }, nav: null, logo: null, headerActions: null, closeButton: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.nav = rect;
obj.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.closeButton = { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, flexGrow: 0 };
let closure_7 = createStyles.createStyles(obj);
const imageStyle = { tintColor: CHECKPOINT_PRIMARY };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal() {
  const tmp = closure_7();
  const rect = useSafeAreaInsetsDefault();
  const obj = { theme: ThemeTypes.DARK, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(CheckpointWelcomeScreenDefault, {}), ];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj3.style = items1;
  const obj4 = { uri: _modDef15818, style: tmp.logo };
  const items2 = [hasOwnProperty(CheckpointApngPlayerDefault, obj4), ];
  const obj5 = { style: tmp.headerActions, children: null };
  const obj6 = { source: _modDef7106, onPress: ModalActionCreatorsDefault.pop, accessibilityLabel: null, imageStyle: null, style: null };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj6.imageStyle = imageStyle;
  obj6.style = tmp.closeButton;
  obj5.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj6);
  items2[1] = hasOwnProperty(View, obj5);
  obj3.children = items2;
  items[1] = timestampProducer(View, obj3);
  obj2.children = items;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(native.ThemeContextProvider, obj);
};