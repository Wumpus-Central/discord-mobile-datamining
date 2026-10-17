// === Module 8851: StageChannelUpsell ===

// Module 8851 (StageChannelUpsell)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import FastImageDefault from "FastImage" /* 5128 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import Text_Text from "Text/Text" /* 5187 */;
import components_Button_Button from "components/Button/Button" /* 5479 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import Pressables from "Pressables" /* 6462 */;
import _modDef7995 from "module_7995" /* 7995 */;
import _modDef8853 from "module_8853" /* 8853 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const createChannelRecord = fn(2072).createChannelRecord;
let closure_6 = fn(8852).useStageChannelUpsellCardStore;
let closure_7 = fn(8788).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = fn(1087).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const createStyles = fn(5191);
let obj2 = { container: { flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: nativeDefault.radii.sm }, image: { marginBottom: 16 }, closeContainer: { position: "absolute", top: 14, right: 14 }, header: { lineHeight: 20, marginBottom: 4 }, description: { textAlign: "center", marginBottom: 4 }, button: { marginTop: 12, alignSelf: "stretch" } };
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
    let obj3 = { source: _modDef7995 };
    obj2.children = closure_9(native.Icon, obj3);
    const items = [closure_9(Pressables.PressableOpacity, obj2), , , , , ];
    const obj4 = { source: _modDef8853, style: tmp.image };
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
          return closure_1_9(guildId(5187).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
        }
    };
    obj7.children = intl3.format(util.t.Vh7rP7, obj8);
    items[4] = closure_9(Text_Text.Text, obj7);
    const obj9 = { style: tmp.button, children: null };
    const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["X/3SyA"]);
    obj10.onPress = function handleCreateChannel() {
      ModalActionCreatorsDefault.popWithKey(closure_7);
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8854, dependencyMap.paths), {
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
        }
      }, CREATE_CHANNEL_MODAL_KEY);
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
        }
      };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj9.children = closure_9(components_Button_Button.Button, obj10);
    items[5] = closure_9(View, obj9);
    obj.children = items;
    tmp4 = closure_10(View, obj);
  }
  return tmp4;
};