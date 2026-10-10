// discord_app/modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef7728 from "../../../../../_runtime/metro/07728__.js";
import _modDef8577 from "../../../../../_runtime/metro/08577__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const createChannelRecord = fn(2069).createChannelRecord;
let closure_6 = fn(8576).useStageChannelUpsellCardStore;
let closure_7 = fn(8514).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = fn(1085).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const createStyles = fn(5092);
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
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  ({ guildId: require, onCreate: importDefault } = arg0);
  let tmp = closure_12();
  const tmp2 = _slicedToArray(closure_6(), 2);
  dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer, children: null };
    let obj3 = { source: _modDef7728 };
    obj2.children = closure_9(native.Icon, obj3);
    const items = [closure_9(Pressables.PressableOpacity, obj2), , , , ,];
    const obj4 = { source: _modDef8577, style: tmp.image };
    items[1] = closure_9(FastImageDefault, obj4);
    const obj5 = { style: tmp.header, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.Sx8Ezi);
    items[2] = closure_9(Text_Text.Text, obj5);
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.JUzPhm);
    items[3] = closure_9(Text_Text.Text, obj6);
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj8 = {
      suggestionsHook(children, arg1) {
        return closure_1_9(
          guildId(5088).Text,
          { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children },
          arg1,
        );
      },
    };
    obj7.children = intl3.format(util.t.Vh7rP7, obj8);
    items[4] = closure_9(Text_Text.Text, obj7);
    const obj9 = { style: tmp.button, children: null };
    const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["X/3SyA"]);
    obj10.onPress = function handleCreateChannel() {
      ModalActionCreatorsDefault.popWithKey(closure_7);
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(8578, dependencyMap.paths),
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
            closure_1_1(dependencyMap[18]).popWithKey(closure_1_11);
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
          closure_1_1(dependencyMap[18]).popWithKey(closure_1_11);
        },
      };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj9.children = closure_9(components_Button_Button.Button, obj10);
    items[5] = closure_9(View, obj9);
    obj.children = items;
    tmp4 = closure_10(View, obj);
  }
  return tmp4;
}
