// discord_app/modules/checkpoint/native/components/CheckpointModal.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import _modDef7106 from "../../../../../_runtime/metro/07106__.js";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import CheckpointWelcomeScreenDefault from "screens/CheckpointWelcomeScreen.tsx";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import _modDef15818 from "../../../../../discord_assets/assets/checkpoint/checkpoint-clyde.png.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ CHECKPOINT_PRIMARY, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { height: "100%" }, nav: null, logo: null, headerActions: null, closeButton: null };
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
obj.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.closeButton = {
  width: 32,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: CHECKPOINT_PRIMARY,
  flexGrow: 0,
};
let closure_7 = createStyles.createStyles(obj);
const imageStyle = { tintColor: CHECKPOINT_PRIMARY };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal() {
  const tmp = closure_7();
  const rect = useSafeAreaInsetsDefault();
  const obj = { theme: ThemeTypes.DARK, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(CheckpointWelcomeScreenDefault, {})];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj3.style = items1;
  const obj4 = { uri: _modDef15818, style: tmp.logo };
  const items2 = [hasOwnProperty(CheckpointApngPlayerDefault, obj4)];
  const obj5 = { style: tmp.headerActions, children: null };
  const obj6 = {
    source: _modDef7106,
    onPress: ModalActionCreatorsDefault.pop,
    accessibilityLabel: null,
    imageStyle: null,
    style: null,
  };
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
}
