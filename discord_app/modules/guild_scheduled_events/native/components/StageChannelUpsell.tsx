// === Module 9898: StageChannelUpsell ===

// Module 9898 (StageChannelUpsell)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import Pressables from "Pressables" /* 5427 */;
import _modDef7325 from "module_7325" /* 7325 */;
import _modDef9900 from "module_9900" /* 9900 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const createChannelRecord = fn(2048).createChannelRecord;
let closure_7 = fn(9899).useStageChannelUpsellCardStore;
let closure_8 = fn(9868).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
const createStyles = fn(4829);
let obj2 = { container: { flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: nativeDefault.radii.sm }, image: { marginBottom: 16 }, closeContainer: { position: "absolute", top: 14, right: 14 }, header: { lineHeight: 20, marginBottom: 4 }, description: { textAlign: "center", marginBottom: 4 }, button: { marginTop: 12, alignSelf: "stretch" } };
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
    let obj3 = { source: _modDef7325 };
    obj2.children = closure_10(native.Icon, obj3);
    const items = [closure_10(Pressables.PressableOpacity, obj2), , , , , ];
    const obj4 = { source: _modDef9900, style: tmp.image };
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
          return closure_1_10(guildId(4825).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
        }
    };
    obj7.children = intl3.format(util.t.Vh7rP7, obj8);
    items[4] = closure_10(Text_Text.Text, obj7);
    const obj9 = { style: tmp.button, children: null };
    const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = util.intl;
    obj10.text = intl4.string(util.t["X/3SyA"]);
    obj10.onPress = function onPress() {
      ModalActionCreatorsDefault.popWithKey(closure_8);
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9901, dependencyMap.paths), {
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
          closure_1_1(dependencyMap[17]).popWithKey(closure_1_12);
        }
      };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj9.children = closure_10(components_Button_Button.Button, obj10);
    items[5] = closure_10(closure_5, obj9);
    obj.children = items;
    tmp4 = closure_11(closure_5, obj);
  }
  return tmp4;
};