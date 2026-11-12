// discord_app/modules/conjure/voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4079 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import useConjureVoiceChannelPin from "../useConjureVoiceChannelPin.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function ConjureVoiceChannelPinForm(projectId) {
  channels = undefined;
  dependencyMap = undefined;
  const tmp = closure_10();
  const conjureVoiceChannelPinForm = channels(13536).useConjureVoiceChannelPinForm(projectId.projectId);
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
    channelIconWithGuild = tmp2(7968).getChannelIconWithGuild(selected, guild);
    const tmp2Result = tmp2(7968);
  }
  let obj2 = { variant: "body-sm/normal", color: "text-default", children: null };
  let intl = tmp2(1113).intl;
  obj2.children = intl.string(selected(4079)["1vVBAw"]);
  items = [closure_7(channels(5866).Text, obj2), , ,];
  if (channels.length > 0) {
    let obj3 = { hasIcons: null != channelIconWithGuild, children: null };
    if (null == selected) {
      const intl3 = tmp2(1113).intl;
      let stringResult = intl3.string(tmp11(4079)["9+dfPT"]);
    } else {
      stringResult = tmp2(5891).computeChannelName(selected, UserStore, RelationshipStore);
      const tmp2Result2 = tmp2(5891);
    }
    let obj4 = { label: stringResult, icon: null, arrow: true, disabled: null, onPress: null };
    let tmp10Result;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = closure_7(tmp2(7387).TableRowIcon, obj5);
    }
    obj4.icon = tmp10Result;
    obj4.disabled = pinning;
    obj4.onPress = function openPicker() {
      const obj2 = { content: null, key: "conjure-voice-channel-pin", stackingBehavior: "stack" };
      const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
      const obj4 = { title: null };
      const obj = ActionSheetActionCreators;
      const intl = util.intl;
      obj4.title = intl.string(_modDef4079.peOi1H);
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
    obj3.children = closure_7(tmp2(7379).TableRow, obj4);
    let tmp10Result4 = closure_7(tmp2(7680).TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(1113).intl;
    obj6.children = intl2.string(tmp11(4079).JVUsIY);
    tmp10Result4 = closure_7(tmp2(5866).Text, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp2(1113).intl;
    obj7.children = intl4.string(tmp11(4079).d7EeAm);
    tmp10Result5 = closure_7(tmp2(5866).Text, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
  const intl5 = tmp2(1113).intl;
  obj9.text = intl5.string(selected(4079).Iw0l8o);
  obj9.disabled = pinning;
  obj9.onPress = skip;
  const items1 = [closure_7(channels(5873).Button, obj9)];
  let tmp10Result6 = null;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
    const intl6 = tmp2(1113).intl;
    obj10.text = intl6.string(tmp11(4079).FYI3qr);
    obj10.disabled = null == selected;
    obj10.loading = pinning;
    obj10.onPress = pin;
    tmp10Result6 = closure_7(tmp2(5873).Button, obj10);
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
const createStyles = fn(5243);
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
  obj2.children = intl2.string(_modDef4079.UGAfl9);
  const tmp5 = metroImportDefault(Text_Text.Text, obj2);
  if (null != outcome) {
    const obj3 = { style: tmp.card, children: null };
    items = [tmp5];
    if ("pinned" === outcome.status) {
      intl = util.intl;
      gKe6Lw = _modDef4079.gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      let formatToPlainStringResult = intl.formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl3 = util.intl;
      formatToPlainStringResult = intl3.string(_modDef4079["+kpQ3v"]);
    }
    const obj5 = { variant: "body-sm/normal", color: "text-default", children: formatToPlainStringResult };
    tmp4Result = metroImportDefault(Text_Text.Text, obj5);
    items[1] = tmp4Result;
    obj3.children = items;
  } else {
    const obj6 = { style: tmp.card, children: null };
    const items1 = [tmp5];
    const obj7 = { projectId };
    items1[1] = metroImportDefault(ConjureVoiceChannelPinForm, obj7);
    obj6.children = items1;
    return React5(tmp7, obj6);
  }
}
