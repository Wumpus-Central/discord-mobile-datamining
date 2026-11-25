// === Module 18641: ConjureVoiceChannelPinCard ===

// Module 18641 (ConjureVoiceChannelPinCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5226 */;
import Text_Text from "Text/Text" /* 5603 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11715 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 18642 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
import RelationshipStore from "RelationshipStore" /* 4954 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
function ConjureVoiceChannelPinForm(projectId) {
  channels = undefined;
  dependencyMap = undefined;
  const tmp = closure_10();
  const conjureVoiceChannelPinForm = channels(18642).useConjureVoiceChannelPinForm(projectId.projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  const selected = conjureVoiceChannelPinForm.selected;
  ({ setPicked: c2, pinning } = conjureVoiceChannelPinForm);
  guild = undefined;
  ({ failed, pin, skip } = conjureVoiceChannelPinForm);
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    channelIconWithGuild = tmp2(7065).getChannelIconWithGuild(selected, guild);
    const tmp2Result = tmp2(7065);
  }
  let obj2 = { variant: "body-sm/normal", color: "text-default", children: null };
  let intl = tmp2(1112).intl;
  obj2.children = intl.string(selected(4244)["1vVBAw"]);
  items = [closure_7(channels(5603).Text, obj2), , , ];
  if (channels.length > 0) {
    let obj3 = { hasIcons: null != channelIconWithGuild, children: null };
    if (null == selected) {
      const intl3 = tmp2(1112).intl;
      let stringResult = intl3.string(tmp11(4244)["9+dfPT"]);
    } else {
      stringResult = tmp2(5628).computeChannelName(selected, UserStore, RelationshipStore);
      const tmp2Result2 = tmp2(5628);
    }
    let obj4 = { label: stringResult, icon: null, arrow: true, disabled: null, onPress: null };
    let tmp10Result;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = closure_7(tmp2(6124).TableRowIcon, obj5);
    }
    obj4.icon = tmp10Result;
    obj4.disabled = pinning;
    obj4.onPress = function openPicker() {
      const obj2 = { content: null, key: "conjure-voice-channel-pin", stackingBehavior: "stack" };
      const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
      const obj4 = { title: null };
      const obj = ActionSheetActionCreators;
      const intl = util.intl;
      obj4.title = intl.string(_modDef4244.peOi1H);
      obj3.header = obj4;
      obj3.guild = guild;
      obj3.channels = channels;
      obj3.selectedChannel = selected;
      obj3.onSelect = function onSelect(id) {
        return closure_1_2(id.id);
      };
      obj2.content = metroImportDefault(ChannelPickerActionSheetDefault, obj3);
      obj.showActionSheet(obj2);
    };
    obj3.children = closure_7(tmp2(6113).TableRow, obj4);
    let tmp10Result4 = closure_7(tmp2(6109).TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(1112).intl;
    obj6.children = intl2.string(tmp11(4244).JVUsIY);
    tmp10Result4 = closure_7(tmp2(5603).Text, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp2(1112).intl;
    obj7.children = intl4.string(tmp11(4244).d7EeAm);
    tmp10Result5 = closure_7(tmp2(5603).Text, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
  const intl5 = tmp2(1112).intl;
  obj9.text = intl5.string(selected(4244).Iw0l8o);
  obj9.disabled = pinning;
  obj9.onPress = skip;
  const items1 = [closure_7(channels(5610).Button, obj9), ];
  let tmp10Result6 = null;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
    const intl6 = tmp2(1112).intl;
    obj10.text = intl6.string(tmp11(4244).FYI3qr);
    obj10.disabled = null == selected;
    obj10.loading = pinning;
    obj10.onPress = pin;
    tmp10Result6 = closure_7(tmp2(5610).Button, obj10);
  }
  const obj11 = { children: null };
  items1[1] = tmp10Result6;
  obj8.children = items1;
  items[3] = closure_8(guild, obj8);
  obj11.children = items;
  return closure_8(closure_9, obj11);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5012);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, actions: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx");

export default function ConjureVoiceChannelPinCard(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_10();
  let intl = require;
  let tmp4Result = dependencyMap;
  const conjureVoiceChannelPinOutcome = useConjureVoiceChannelPin.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  const obj2 = { variant: "body-xs/semibold", color: "text-muted", children: null };
  const intl2 = util.intl;
  let gKe6Lw = importDefault;
  obj2.children = intl2.string(_modDef4244.UGAfl9);
  const tmp5 = metroImportDefault(Text_Text.Text, obj2);
  if (null != outcome) {
    const obj3 = { style: tmp.card, children: null };
    items = [tmp5, ];
    if ("pinned" === outcome.status) {
      intl = util.intl;
      gKe6Lw = _modDef4244.gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      let formatToPlainStringResult = intl.formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl3 = util.intl;
      formatToPlainStringResult = intl3.string(_modDef4244["+kpQ3v"]);
    }
    const obj5 = { variant: "body-sm/normal", color: "text-default", children: formatToPlainStringResult };
    tmp4Result = metroImportDefault(Text_Text.Text, obj5);
    items[1] = tmp4Result;
    obj3.children = items;
  } else {
    const obj6 = { style: tmp.card, children: null };
    const items1 = [tmp5, ];
    const obj7 = { projectId };
    items1[1] = metroImportDefault(ConjureVoiceChannelPinForm, obj7);
    obj6.children = items1;
    return React5(tmp7, obj6);
  }
};