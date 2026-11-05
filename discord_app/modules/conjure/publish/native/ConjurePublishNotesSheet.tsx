// discord_app/modules/conjure/publish/native/ConjurePublishNotesSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3995 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import useConjurePatchNotesComposerDefault from "../useConjurePatchNotesComposer.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const ConjurePublishNotesSheet = "ConjurePublishNotesSheet";
const createStyles = fn(5143);
let obj2 = {
  container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  notesSection: null,
  actions: null,
};
let obj3 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.notesSection = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default function ConjurePublishNotesSheet(guildId) {
  guildId = guildId.guildId;
  let selectedChannel;
  let pickChannel;
  markEdited = undefined;
  ({ projectId, applicationId, projectName, publishedRevision } = guildId);
  const tmp = closure_13();
  [str, tmp3] = selectedChannel(pickChannel.useState(""), 2);
  importDefault = tmp3;
  const tmp4 = selectedChannel(pickChannel.useState(false), 2);
  dependencyMap = tmp4[1];
  const tmp7 = useConjurePatchNotesComposerDefault({
    projectId,
    guildId,
    applicationId,
    publishedRevision,
    applyDraft: tmp3,
  });
  const channels = tmp7.channels;
  selectedChannel = tmp7.selectedChannel;
  pickChannel = tmp7.pickChannel;
  ({ maxNotesLength, sending, markEdited } = tmp7);
  const send = tmp7.send;
  items = [markEdited];
  ({ drafting, draftFailed } = tmp7);
  const callback = pickChannel.useCallback((arg0) => {
    markEdited();
    dependencyMap(false);
    _undefined(arg0);
  }, items);
  const trimmed = str.trim();
  const items1 = [channels, guildId, pickChannel, selectedChannel];
  const callback1 = pickChannel.useCallback(() => {
    const obj2 = { content: null, key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj4 = { title: null };
    const obj = ActionSheetActionCreators;
    const intl = util.intl;
    obj4.title = intl.string(_modDef3995.Gd63Fl);
    obj3.header = obj4;
    obj3.guild = GuildStore.getGuild(guildId);
    obj3.channels = channels;
    obj3.selectedChannel = selectedChannel;
    obj3.onSelect = function onSelect(id) {
      return pickChannel(id.id);
    };
    obj2.content = closure_2_10(ChannelPickerActionSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items1);
  const callback2 = pickChannel.useCallback(() => {
    _undefined(5384).hideActionSheet(ConjurePublishNotesSheet);
  }, []);
  const items2 = [trimmed, callback2, send];
  const callback3 = pickChannel.useCallback(
    channels(function* () {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              v3(false);
              c1 = 1;
              c2 = 1;
              const obj4 = { value: send(trimmed), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              closure_128_9();
            } else {
              closure_128_2(true);
            }
            c2 = 3;
          }
        } catch (tmp14) {
          c2 = tmp;
          throw tmp14;
        }
      }
    }),
    items2,
  );
  let obj = { startExpanded: true, header: null, children: null };
  let obj2 = { title: null };
  let intl = guildId(1113).intl;
  obj2.title = intl.formatToPlainString(_modDef3995.lsYQII, { projectName });
  obj.header = closure_10(guildId(7460).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp.container, children: null };
  let tmp14Result = null;
  if (channels.length > 0) {
    let obj4 = { style: tmp.notesSection, children: null };
    const obj5 = {
      label: null,
      placeholder: null,
      description: null,
      errorMessage: null,
      maxLength: null,
      value: null,
      onChange: null,
      disabled: null,
    };
    const intl2 = tmp13(1113).intl;
    obj5.label = intl2.string(tmp5(3995).r4du8k);
    const intl3 = tmp13(1113).intl;
    const tmp5Result = tmp5(3995);
    obj5.placeholder = intl3.string(drafting ? tmp5Result.aYQksU : tmp5Result["3hV1Gc"]);
    let stringResult;
    if (draftFailed) {
      const intl4 = tmp13(1113).intl;
      stringResult = intl4.string(tmp5(3995)["Em8bo+"]);
    }
    obj5.description = stringResult;
    let stringResult1;
    if (tmp4[0]) {
      const intl5 = tmp13(1113).intl;
      stringResult1 = intl5.string(tmp5(3995)["6oEjjD"]);
    }
    obj5.errorMessage = stringResult1;
    obj5.maxLength = maxNotesLength;
    obj5.value = str;
    obj5.onChange = callback;
    obj5.disabled = sending;
    const items3 = [closure_10(tmp13(7392).TextArea, obj5)];
    const intl6 = tmp13(1113).intl;
    if (null != selectedChannel) {
      const _HermesInternal = HermesInternal;
      let combined = "#" + tmp13(5788).computeChannelName(selectedChannel, callback2, trimmed);
      const tmp13Result = tmp13(5788);
    } else {
      const intl7 = tmp13(1113).intl;
      combined = intl7.string(tmp5(3995)["7CvxMC"]);
    }
    const obj6 = { channel: combined, onPick: null };
    let fn = callback1;
    if (sending) {
      fn = () => {};
    }
    const obj7 = { variant: "body-md/medium", color: "text-subtle", children: null };
    obj6.onPick = fn;
    obj7.children = intl6.format(tmp5(3995)["1lVhj/"], obj6);
    items3[1] = closure_10(tmp13(5763).Text, obj7);
    obj4.children = items3;
    tmp14Result = closure_11(tmp15, obj4);
  }
  const items4 = [tmp14Result];
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl8 = tmp13(1113).intl;
  obj9.text = intl8.string(guildId(1113).t["ETE/oC"]);
  obj9.onPress = callback2;
  const items5 = [closure_10(guildId(5770).Button, obj9)];
  const obj10 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp13(1113).intl;
  obj10.text = intl9.string(_modDef3995["69aIG4"]);
  obj10.loading = sending;
  obj10.disabled = "" === trimmed || trimmed.length > maxNotesLength || null == selectedChannel || sending;
  obj10.onPress = callback3;
  items5[1] = closure_10(guildId(5770).Button, obj10);
  obj8.children = items5;
  items4[1] = closure_11(markEdited, obj8);
  obj3.children = items4;
  obj.children = closure_11(markEdited, obj3);
  return closure_10(guildId(7504).ActionSheet, obj);
}
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";
