// discord_app/modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04809_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildEventModalConstants from "../GuildEventModalConstants.tsx";
import StageChannelUpsellCardStore from "../../StageChannelUpsellCardStore.tsx";
import AssetRegistryDefault2 from "../../../../../_runtime/09208_AssetRegistry.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const createChannelRecord = ChannelRecord.createChannelRecord;
let closure_7 = StageChannelUpsellCardStore.useStageChannelUpsellCardStore;
let closure_8 = GuildEventModalConstants.CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
let obj = {
  container: obj2,
  image: { marginBottom: 16 },
  closeContainer: { position: "absolute", top: 14, right: 14 },
  header: { lineHeight: 20, marginBottom: 4 },
  description: { textAlign: "center", marginBottom: 4 },
  button: { marginTop: 12, alignSelf: "stretch" },
};
obj2 = {
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 16,
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
};
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  let Button;
  let Icon;
  let closure_2;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj10;
  let obj3;
  let obj8;
  ({ guildId: require, onCreate: importDefault } = arg0);
  let tmp = closure_13();
  const tmp2 = _slicedToArray(closure_7(), 2);
  const tmp3 = tmp2[1];
  dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container, children: items };
    let obj2 = {
      onPress: tmp3,
      accessibilityRole: "button",
      style: tmp.closeContainer,
      children: closure_10(Icon, obj3),
    };
    const PressableOpacity = Pressables.PressableOpacity;
    obj3 = { source: AssetRegistryDefault };
    Icon = native.Icon;
    items = [closure_10(PressableOpacity, obj2), , , , ,];
    let obj4 = { source: AssetRegistryDefault2, style: tmp.image };
    items[1] = closure_10(closure_4, obj4);
    const obj5 = {
      style: tmp.header,
      variant: "text-md/bold",
      color: "mobile-text-heading-primary",
      children: intl.string(intl5.t.Sx8Ezi),
    };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items[2] = closure_10(Text, obj5);
    const obj6 = {
      style: tmp.description,
      variant: "text-sm/medium",
      color: "text-default",
      children: intl2.string(intl5.t.JUzPhm),
    };
    const Text2 = Text_Text.Text;
    intl2 = intl5.intl;
    items[3] = closure_10(Text2, obj6);
    const obj7 = {
      style: tmp.description,
      variant: "text-sm/medium",
      color: "text-default",
      children: intl3.format(intl5.t.Vh7rP7, obj8),
    };
    const Text3 = Text_Text.Text;
    intl3 = intl5.intl;
    obj8 = {
      suggestionsHook(children, arg1) {
        const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
        return closure_1_10(require("Text/Text").Text, obj, arg1);
      },
    };
    items[4] = closure_10(Text3, obj7);
    const obj9 = { style: tmp.button, children: closure_10(Button, obj10) };
    obj10 = {
      variant: "secondary",
      size: "md",
      text: intl4.string(intl5.t["X/3SyA"]),
      onPress() {
        let obj = ModalActionCreatorsDefault;
        obj.popWithKey(closure_8);
        const obj2 = ModalActionCreatorsDefault;
        const obj3 = {
          guildId: require,
          channelType: ChannelTypes.GUILD_STAGE_VOICE,
          onChannelCreated(id) {
            const obj = { id, type: constants.GUILD_STAGE_VOICE };
            const tmp = createChannelRecord(obj);
            if (null != tmp) {
              closure_1_1(tmp);
            }
          },
          onClose() {
            const obj = closure_1_1(closure_1_2[17]);
            obj.popWithKey(closure_1_12);
          },
        };
        obj2.pushLazy(asyncRequire(9209, dependencyMap.paths), obj3, CREATE_CHANNEL_MODAL_KEY);
        closure_2();
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet();
      },
    };
    Button = components_Button_Button.Button;
    intl4 = intl5.intl;
    items[5] = closure_10(closure_5, obj9);
    tmp4 = closure_11(closure_5, obj);
  }
  return tmp4;
}
