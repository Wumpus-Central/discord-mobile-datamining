// === Module 9729: StageChannelUpsell ===

// Module 9729 (StageChannelUpsell)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef6992 from "module_6992" /* 6992 */;
import _modDef9731 from "module_9731" /* 9731 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const createChannelRecord = fn(1961).createChannelRecord;
let closure_7 = fn(9730).useStageChannelUpsellCardStore;
let closure_8 = fn(9699).CREATE_GUILD_EVENT_MODAL_KEY;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const CREATE_CHANNEL_MODAL_KEY = "CREATE_CHANNEL_MODAL_KEY";
fn(4560);
let createStyles = { container: null, image: null, closeContainer: null, header: null, description: null, button: null };
createStyles = { flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: nativeDefault.radii.sm };
createStyles.container = createStyles;
createStyles.image = { marginBottom: 16 };
createStyles.closeContainer = { position: "absolute", top: 14, right: 14 };
createStyles.header = { lineHeight: 20, marginBottom: 4 };
createStyles.description = { textAlign: "center", marginBottom: 4 };
createStyles.button = { marginTop: 12, alignSelf: "stretch" };
let closure_13 = createStyles.createStyles(createStyles);
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
    obj = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer, children: null };
    obj = { source: _modDef6992 };
    obj.children = closure_10(native.Icon, obj);
    const items = [closure_10(Pressables.PressableOpacity, obj), , , , , ];
    const obj1 = { source: _modDef9731, style: tmp.image };
    items[1] = closure_10(closure_4, obj1);
    let obj2 = { style: tmp.header, variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.Sx8Ezi);
    items[2] = closure_10(Text_Text.Text, obj2);
    const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.JUzPhm);
    items[3] = closure_10(Text_Text.Text, obj3);
    const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj5 = {
      suggestionsHook(children, arg1) {
          return closure_1_10(guildId(4556).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
        }
    };
    obj4.children = intl3.format(util.t.Vh7rP7, obj5);
    items[4] = closure_10(Text_Text.Text, obj4);
    const obj6 = { style: tmp.button, children: null };
    const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl4 = util.intl;
    obj7.text = intl4.string(util.t["X/3SyA"]);
    obj7.onPress = function onPress() {
      let obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_8);
      obj = {
        guildId,
        channelType: ChannelTypes.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = createChannelRecord({ id, type: constants.GUILD_STAGE_VOICE });
          if (null != tmp) {
            closure_1_1(tmp);
          }
        },
        onClose() {
          closure_1_1(dependencyMap[17]).popWithKey(closure_1_12);
        }
      };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9732, dependencyMap.paths), obj, CREATE_CHANNEL_MODAL_KEY);
      dependencyMap();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    obj6.children = closure_10(components_Button_Button.Button, obj7);
    items[5] = closure_10(closure_5, obj6);
    obj.children = items;
    tmp4 = closure_11(closure_5, obj);
  }
  return tmp4;
};