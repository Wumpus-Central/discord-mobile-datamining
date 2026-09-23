// discord_app/modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef7323 from "../../../../../_runtime/metro/07323__.js";
import _modDef9895 from "../../../../../_runtime/metro/09895__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const createChannelRecord = fn(2046).createChannelRecord;
let closure_7 = fn(9894).useStageChannelUpsellCardStore;
let closure_8 = fn(9863).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const createStyles = fn(4827);
let obj2 = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    padding: 16,
    margin: 16,
    borderRadius: nativeDefault.radii.sm,
  },
  image: { marginBottom: 16 },
  closeContainer: { position: "absolute", top: 14, right: 14 },
  header: { lineHeight: 20, marginBottom: 4 },
  description: { textAlign: "center", marginBottom: 4 },
  button: { marginTop: 12, alignSelf: "stretch" },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  ({ guildId: require, onCreate: importDefault } = arg0);
  let tmp = closure_13();
  const tmp2 = _slicedToArray(closure_7(), 2);
  dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer, children: null };
    let obj3 = { source: _modDef7323 };
    obj2.children = closure_10(native.Icon, obj3);
    const items = [closure_10(Pressables.PressableOpacity, obj2), , , , ,];
    const obj4 = { source: _modDef9895, style: tmp.image };
    items[1] = closure_10(closure_4, obj4);
    const obj5 = { style: tmp.header, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.Sx8Ezi);
    items[2] = closure_10(Text_Text.Text, obj5);
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.JUzPhm);
    items[3] = closure_10(Text_Text.Text, obj6);
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj8 = {
      suggestionsHook(children, arg1) {
        return closure_1_10(
          guildId(4823).Text,
          { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children },
          arg1,
        );
      },
    };
    obj7.children = intl3.format(util.t.Vh7rP7, obj8);
    items[4] = closure_10(Text_Text.Text, obj7);
    const obj9 = { style: tmp.button, children: null };
    const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["X/3SyA"]);
    obj10.onPress = function onPress() {
      ModalActionCreatorsDefault.popWithKey(closure_8);
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(9896, dependencyMap.paths),
        {
          guildId,
          channelType: ChannelTypes.GUILD_STAGE_VOICE,
          onChannelCreated(id) {
            const tmp = createChannelRecord({ id, type: constants.GUILD_STAGE_VOICE });
            if (null != tmp) {
              closure_1_1(tmp);
            }
            const obj = { id, type: constants.GUILD_STAGE_VOICE };
          },
          onClose() {
            closure_1_1(dependencyMap[17]).popWithKey(closure_1_12);
          },
        },
        CREATE_CHANNEL_MODAL_KEY,
      );
      dependencyMap();
      const obj3 = {
        guildId,
        channelType: ChannelTypes.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = createChannelRecord({ id, type: constants.GUILD_STAGE_VOICE });
          if (null != tmp) {
            closure_1_1(tmp);
          }
          const obj = { id, type: constants.GUILD_STAGE_VOICE };
        },
        onClose() {
          closure_1_1(dependencyMap[17]).popWithKey(closure_1_12);
        },
      };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj9.children = closure_10(components_Button_Button.Button, obj10);
    items[5] = closure_10(closure_5, obj9);
    obj.children = items;
    tmp4 = closure_11(closure_5, obj);
  }
  return tmp4;
}
