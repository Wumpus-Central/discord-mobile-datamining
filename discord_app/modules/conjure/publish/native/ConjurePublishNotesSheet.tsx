// === Module 12366: ConjurePublishNotesSheet ===

// Module 12366 (ConjurePublishNotesSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5593 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12184 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4845 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;

const useConjurePatchNotesComposerDefault = tmp4(12367);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjurePublishNotesSheet = "ConjurePublishNotesSheet";
const ConjurePatchNotesChannelSheet = "ConjurePatchNotesChannelSheet";
const createStyles = fn(4971);
let closure_14 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, notesSection: null, actions: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.notesSection = { gap: nativeDefault.space.PX_4 };
  const obj3 = { gap: nativeDefault.space.PX_4 };
  obj.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishNotesSheet(arg0) {
  const cResult = guildId(576).c(51);
  ({ projectId, guildId } = arg0);
  ({ applicationId, projectName, publishedRevision } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  closure_14(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
  let obj = guildId(576);
  [tmp7, tmp8] = selectedChannel(pickChannel.useState(""), 2);
  importDefault = tmp8;
  const tmp6 = selectedChannel(pickChannel.useState(""), 2);
  [r10044, dependencyMap] = selectedChannel(pickChannel.useState(false), 2);
  if (cResult[1] === applicationId) {
    if (cResult[2] === guildId) {
      if (cResult[3] === projectId) {
        if (cResult[4] === publishedRevision) {
          let tmp10 = cResult[5];
        }
        const tmp11 = useConjurePatchNotesComposerDefault(tmp10);
        const channels = tmp11.channels;
        selectedChannel = tmp11.selectedChannel;
        pickChannel = tmp11.pickChannel;
        ({ maxNotesLength, drafting, draftFailed, sending, markEdited } = tmp11);
        const send = tmp11.send;
        if (cResult[6] !== markEdited) {
          class F {
            constructor(arg0) {
              tmp = markEdited();
              tmp2 = closure_2(false);
              tmp3 = closure_1(arg0);
              return;
            }
          }
          cResult[6] = markEdited;
          cResult[7] = F;
        } else {
          class F {
            constructor(arg0) {
              tmp = markEdited();
              tmp2 = closure_2(false);
              tmp3 = closure_1(arg0);
              return;
            }
          }
        }
        if (cResult[8] !== tmp7) {
          class F {
            constructor(arg0) {
              tmp = markEdited();
              tmp2 = closure_2(false);
              tmp3 = closure_1(arg0);
              return;
            }
          }
          cResult[8] = tmp7;
          cResult[9] = tmp14;
        } else {
          class F {
            constructor(arg0) {
              tmp = markEdited();
              tmp2 = closure_2(false);
              tmp3 = closure_1(arg0);
              return;
            }
          }
        }
        RelationshipStore = tmp14;
        if (cResult[10] === channels) {
          class F {
            constructor(arg0) {
              tmp = markEdited();
              tmp2 = closure_2(false);
              tmp3 = closure_1(arg0);
              return;
            }
          }
        }
        const fn = function q() {
          const obj2 = { content: null, key: null, stackingBehavior: "stack" };
          const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
          const obj4 = { title: null };
          const obj = ActionSheetActionCreators;
          const intl = util.intl;
          obj4.title = intl.string(_modDef3830.Gd63Fl);
          obj3.header = obj4;
          obj3.guild = GuildStore.getGuild(guildId);
          obj3.channels = channels;
          obj3.selectedChannel = selectedChannel;
          obj3.onSelect = function onSelect(id) {
            return pickChannel(id.id);
          };
          obj2.content = v65535(ChannelPickerActionSheetDefault, obj3);
          obj2.key = ConjurePatchNotesChannelSheet;
          obj.showActionSheet(obj2);
        };
        cResult[10] = channels;
        cResult[11] = guildId;
        cResult[12] = pickChannel;
        cResult[13] = selectedChannel;
        cResult[14] = fn;
      }
    }
  }
  let obj3 = { projectId, guildId, applicationId, publishedRevision, applyDraft: tmp8 };
  cResult[1] = applicationId;
  cResult[2] = guildId;
  cResult[3] = projectId;
  cResult[4] = publishedRevision;
  cResult[5] = obj3;
  tmp10 = obj3;
  const tmp9 = selectedChannel(pickChannel.useState(false), 2);
}) : (function ConjurePublishNotesSheet(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let selectedChannel;
  let pickChannel;
  markEdited = undefined;
  ({ projectId, applicationId, projectName, publishedRevision } = guildId);
  const tmp3 = closure_14(useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom);
  [str, tmp5] = selectedChannel(pickChannel.useState(""), 2);
  importDefault = tmp5;
  const tmp4 = selectedChannel(pickChannel.useState(""), 2);
  [tmp7, c2] = selectedChannel(pickChannel.useState(false), 2);
  const tmp8 = useConjurePatchNotesComposerDefault({ projectId, guildId, applicationId, publishedRevision, applyDraft: tmp5 });
  const channels = tmp8.channels;
  selectedChannel = tmp8.selectedChannel;
  pickChannel = tmp8.pickChannel;
  ({ maxNotesLength, sending, markEdited } = tmp8);
  const send = tmp8.send;
  const items = [markEdited];
  ({ drafting, draftFailed } = tmp8);
  const callback = pickChannel.useCallback((arg0) => {
    markEdited();
    _undefined2(false);
    _undefined(arg0);
  }, items);
  const trimmed = str.trim();
  const items1 = [channels, guildId, pickChannel, selectedChannel];
  const callback1 = pickChannel.useCallback(() => {
    const obj2 = { content: null, key: null, stackingBehavior: "stack" };
    const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj4 = { title: null };
    const obj = ActionSheetActionCreators;
    const intl = util.intl;
    obj4.title = intl.string(_modDef3830.Gd63Fl);
    obj3.header = obj4;
    obj3.guild = GuildStore.getGuild(guildId);
    obj3.channels = channels;
    obj3.selectedChannel = selectedChannel;
    obj3.onSelect = function onSelect(id) {
      return pickChannel(id.id);
    };
    obj2.content = v65535(ChannelPickerActionSheetDefault, obj3);
    obj2.key = ConjurePatchNotesChannelSheet;
    obj.showActionSheet(obj2);
  }, items1);
  const callback2 = pickChannel.useCallback(() => {
    _undefined(_undefined2[14]).hideActionSheet(ConjurePublishNotesSheet);
  }, []);
  const items2 = [trimmed, callback2, send];
  const callback3 = pickChannel.useCallback(channels(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            v3(false);
            c1 = 1;
            v3 = 1;
            const obj4 = { value: send(trimmed), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_9();
          } else {
            closure_128_2(true);
          }
          v3 = 3;
        }
      } catch (tmp14) {
        v3 = tmp;
        throw tmp14;
      }
    }
  }), items2);
  let obj = { startExpanded: true, header: null, children: null };
  let obj2 = { title: null };
  let intl = guildId(1128).intl;
  obj2.title = intl.formatToPlainString(_modDef3830.lsYQII, { projectName });
  obj.header = closure_10(guildId(7248).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp3.container, children: null };
  let tmp15Result = null;
  if (channels.length > 0) {
    let obj4 = { style: tmp3.notesSection, children: null };
    const obj5 = { label: null, placeholder: null, description: null, errorMessage: null, maxLength: null, value: null, onChange: null, disabled: null };
    const intl2 = tmp14(1128).intl;
    obj5.label = intl2.string(tmp(3830).r4du8k);
    const intl3 = tmp14(1128).intl;
    const tmpResult = tmp(3830);
    obj5.placeholder = intl3.string(drafting ? tmpResult.aYQksU : tmpResult["3hV1Gc"]);
    let stringResult;
    if (draftFailed) {
      const intl4 = tmp14(1128).intl;
      stringResult = intl4.string(tmp(3830)["Em8bo+"]);
    }
    obj5.description = stringResult;
    let stringResult1;
    if (tmp7) {
      const intl5 = tmp14(1128).intl;
      stringResult1 = intl5.string(tmp(3830)["6oEjjD"]);
    }
    obj5.errorMessage = stringResult1;
    obj5.maxLength = maxNotesLength;
    obj5.value = str;
    obj5.onChange = callback;
    obj5.disabled = sending;
    const items3 = [closure_10(tmp14(7180).TextArea, obj5), ];
    const intl6 = tmp14(1128).intl;
    if (null != selectedChannel) {
      const _HermesInternal = HermesInternal;
      let combined = "#" + tmp14(5604).computeChannelName(selectedChannel, callback2, trimmed);
      const tmp14Result = tmp14(5604);
    } else {
      const intl7 = tmp14(1128).intl;
      combined = intl7.string(tmp(3830)["7CvxMC"]);
    }
    const obj6 = { channel: combined, onPick: null };
    let fn = callback1;
    if (sending) {
      fn = () => {

      };
    }
    const obj7 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj6.onPick = fn;
    obj7.children = intl6.format(tmp(3830)["1lVhj/"], obj6);
    items3[1] = closure_10(tmp14(5234).Text, obj7);
    obj4.children = items3;
    tmp15Result = closure_11(tmp16, obj4);
  }
  const items4 = [tmp15Result, ];
  const obj8 = { style: tmp3.actions, children: null };
  const obj9 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl8 = tmp14(1128).intl;
  obj9.text = intl8.string(guildId(1128).t["ETE/oC"]);
  obj9.onPress = callback2;
  const items5 = [closure_10(guildId(5244).Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp14(1128).intl;
  obj10.text = intl9.string(_modDef3830["69aIG4"]);
  obj10.loading = sending;
  obj10.disabled = "" === trimmed || trimmed.length > maxNotesLength || null == selectedChannel || sending;
  obj10.onPress = callback3;
  items5[1] = closure_10(guildId(5244).Button, obj10);
  obj8.children = items5;
  items4[1] = closure_11(markEdited, obj8);
  obj3.children = items4;
  obj.children = closure_11(markEdited, obj3);
  return closure_10(guildId(7298).ActionSheet, obj);
});
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";