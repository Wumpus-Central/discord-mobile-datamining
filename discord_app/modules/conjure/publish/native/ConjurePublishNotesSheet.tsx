// === Module 11862: ConjurePublishNotesSheet ===

// Module 11862 (ConjurePublishNotesSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5060 */;
import ConjureUtils from "ConjureUtils" /* 6951 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11345 */;
import ConjurePatchNotesChannel from "ConjurePatchNotesChannel" /* 11863 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4750 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4762 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(4750).GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = fn(5089).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ConjurePublishNotesSheet = "ConjurePublishNotesSheet";
const createStyles = fn(5096);
let closure_16 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, notesSection: null, actions: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.notesSection = { gap: nativeDefault.space.PX_4 };
  const obj3 = { gap: nativeDefault.space.PX_4 };
  obj.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default function ConjurePublishNotesSheet(projectName) {
  let projectId = projectName.projectId;
  const guildId = projectName.guildId;
  const applicationId = projectName.applicationId;
  const publishedRevision = projectName.publishedRevision;
  let first;
  c9 = undefined;
  c11 = undefined;
  c14 = undefined;
  c15 = undefined;
  closure_16 = undefined;
  let trimmed;
  c20 = undefined;
  let callback2;
  const tmp3 = closure_16(guildId(applicationId[12])({ includeKeyboardHeight: true }).insets.bottom);
  const items = [first];
  const stateFromStores = projectId(applicationId[13]).useStateFromStores(items, () => {
    found = GuildChannelStore.getChannels(guildId)[closure_8].filter((channel) => {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      let tmp2 = !isGuildVocalResult;
      if (!isGuildVocalResult) {
        tmp2 = !channel.isThread();
      }
      if (tmp2) {
        tmp2 = !channel.isForumLikeChannel();
      }
      return tmp2;
    });
    return found.map((channel) => channel.channel);
  });
  let obj = projectId(applicationId[13]);
  const items1 = [first];
  const items2 = [guildId, applicationId];
  const stateFromStores1 = projectId(applicationId[13]).useStateFromStores(items1, () => ConjureUtils.findConjureChannelId(guildId, applicationId), items2);
  let obj2 = projectId(applicationId[13]);
  const tmp6 = guildId(applicationId[15])();
  const diff = tmp6 - projectId(applicationId[16]).formatPlaySuffix(projectId(applicationId[16]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  let ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  const tmp9 = stateFromStores(stateFromStores1.useState(() => {
    const result = ConjurePatchNotesChannel.lastPatchNotesChannel(applicationId);
    projectId = result;
    let tmp2 = null;
    if (null != result) {
      tmp2 = null;
      if (stateFromStores.some((id) => id.id === result)) {
        tmp2 = result;
      }
    }
    return tmp2;
  }), 2);
  first = tmp9[0];
  closure_8 = tmp9[1];
  let obj3 = projectId(applicationId[16]);
  [str, c9] = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp12 = stateFromStores(stateFromStores1.useState(true), 2);
  closure_10 = tmp12[1];
  const tmp11 = stateFromStores(stateFromStores1.useState(""), 2);
  [tmp14, c11] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp15 = stateFromStores(stateFromStores1.useState(undefined), 2);
  const first1 = tmp15[0];
  closure_13 = tmp15[1];
  const tmp13 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp18, c14] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp17 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp20, c15] = stateFromStores(stateFromStores1.useState(false), 2);
  closure_16 = stateFromStores1.useRef(false);
  ref = stateFromStores1.useRef(null != first);
  const items3 = [stateFromStores1];
  const effect = stateFromStores1.useEffect(() => {
    let current = null == stateFromStores1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_8(stateFromStores1);
    }
  }, items3);
  const items4 = [projectId];
  const effect1 = stateFromStores1.useEffect(() => {
    c0 = false;
    const obj = projectId(applicationId[17]);
    projectId(applicationId[17]).draftPatchNotes(c0).then((source_sha) => {
      if (!c0) {
        closure_10(false);
        closure_13(source_sha.source_sha);
        if (true !== source_sha.ok) {
          c11(true);
        } else {
          let current = null == source_sha.notes;
          if (!current) {
            current = "" === source_sha.notes;
          }
          if (!current) {
            current = ref.current;
          }
          if (!current) {
            const notes = source_sha.notes;
            c9(notes.slice(0, ref.current));
          }
        }
      }
    }, () => {
      if (!c0) {
        closure_10(false);
        c11(true);
      }
    });
    return () => {
      c0 = true;
    };
  }, items4);
  let found = null;
  const callback = stateFromStores1.useCallback((arg0) => {
    closure_16.current = true;
    _undefined2(false);
    _undefined(arg0);
  }, []);
  if (null != first) {
    found = stateFromStores.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  trimmed = str.trim();
  let formatPlaySuffixResult = null;
  if (null != stateFromStores1) {
    let _HermesInternal = HermesInternal;
    formatPlaySuffixResult = tmp4(tmp2[16]).formatPlaySuffix("<#" + stateFromStores1 + ">");
    const tmp4Result = tmp4(tmp2[16]);
  }
  c20 = formatPlaySuffixResult;
  const items5 = [stateFromStores, guildId, found];
  const callback1 = obj4.useCallback(() => {
    const obj2 = { content: null, key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj4 = { title: null };
    const obj = ActionSheetActionCreators;
    const intl = util.intl;
    obj4.title = intl.string(_modDef3849.Gd63Fl);
    obj3.header = obj4;
    obj3.guild = GuildStore.getGuild(guildId);
    obj3.channels = stateFromStores;
    obj3.selectedChannel = found;
    obj3.onSelect = function onSelect(id) {
      ref.current = true;
      closure_1_8(id.id);
    };
    obj2.content = map1(ChannelPickerActionSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items5);
  callback2 = obj4.useCallback(() => {
    guildId(applicationId[18]).hideActionSheet(c15);
  }, []);
  const items6 = [found, trimmed, formatPlaySuffixResult, applicationId, projectId, publishedRevision, guildId, first1, callback2];
  const callback3 = obj4.useCallback(publishedRevision(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            projectId = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null != found) {
              if ("" !== trimmed) {
                _undefined(true);
                _undefined2(false);
                dependencyMap = 1;
                let combined = trimmed;
                if (null != c20) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + trimmed + tmp43;
                }
                const parsed = tmp3(7376).parse(found, combined);
                const tmp40Result = tmp3(7185);
                const obj5 = { location: constants.CONJURE_PATCH_NOTES };
                c3 = 2;
                c4 = 1;
                const obj6 = { value: tmp40Result.sendMessage(found.id, parsed, false, obj5), done: false };
                return obj6;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_129_15(true);
            closure_129_14(false);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            let ok;
            if (closure_128_0 != null) {
              ok = closure_128_0.ok;
            }
            if (false !== ok) {
              const result = projectId(11863).rememberPatchNotesChannel(closure_129_2, closure_129_18.id);
              let id;
              if (closure_128_0 != null) {
                const body = closure_128_0.body;
                if (body != null) {
                  id = body.id;
                }
              }
              closure_128_1 = id;
              if (null != closure_128_1) {
                const obj8 = { publishedRevision: closure_129_3, guildId: closure_129_1, channelId: closure_129_18.id, messageId: closure_128_1 };
                projectId(10751).recordPatchNotesSent(closure_129_0, obj8, closure_129_12);
                const obj = projectId(10751);
              }
              closure_129_21();
              dependencyMap = 0;
              const obj10 = projectId(11863);
            }
          }
          const _Error = Error;
          const error = new Error("send failed");
          throw error;
        }
        c4 = 3;
      } catch (tmp51) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp51;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items6);
  let obj5 = { startExpanded: true, header: null, children: null };
  let obj6 = { title: null };
  let intl = tmp4(tmp2[20]).intl;
  obj6.title = intl.formatToPlainString(guildId(applicationId[21]).lsYQII, { projectName: projectName.projectName });
  obj5.header = closure_13(projectId(applicationId[25]).BottomSheetTitleHeader, obj6);
  let obj7 = { style: tmp3.container, children: null };
  let tmp31Result = null;
  if (stateFromStores.length > 0) {
    let obj8 = { style: tmp3.notesSection, children: null };
    const obj9 = { label: null, placeholder: null, description: null, errorMessage: null, maxLength: null, value: null, onChange: null, disabled: null };
    const intl2 = tmp4(tmp2[20]).intl;
    obj9.label = intl2.string(tmp(tmp2[21]).r4du8k);
    const intl3 = tmp4(tmp2[20]).intl;
    const tmpResult = tmp(tmp2[21]);
    obj9.placeholder = intl3.string(tmp12[0] ? tmpResult.aYQksU : tmpResult["3hV1Gc"]);
    let stringResult;
    if (tmp14) {
      const intl4 = tmp4(tmp2[20]).intl;
      stringResult = intl4.string(tmp(tmp2[21])["Em8bo+"]);
    }
    obj9.description = stringResult;
    let stringResult1;
    if (tmp20) {
      const intl5 = tmp4(tmp2[20]).intl;
      stringResult1 = intl5.string(tmp(tmp2[21])["6oEjjD"]);
    }
    obj9.errorMessage = stringResult1;
    obj9.maxLength = diff;
    obj9.value = str;
    obj9.onChange = callback;
    obj9.disabled = tmp18;
    const items7 = [tmp30(tmp4(tmp2[26]).TextArea, obj9), ];
    const intl6 = tmp4(tmp2[20]).intl;
    if (null != found) {
      const _HermesInternal2 = HermesInternal;
      let combined = "#" + tmp4(tmp2[28]).computeChannelName(found, c11, closure_10);
      const tmp4Result2 = tmp4(tmp2[28]);
    } else {
      const intl7 = tmp4(tmp2[20]).intl;
      combined = intl7.string(tmp(tmp2[21])["7CvxMC"]);
    }
    let obj10 = { channel: combined, onPick: null };
    let fn = callback1;
    if (tmp18) {
      fn = () => {

      };
    }
    const obj11 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj10.onPick = fn;
    obj11.children = intl6.format(tmp(tmp2[21])["1lVhj/"], obj10);
    items7[1] = tmp30(tmp4(tmp2[27]).Text, obj11);
    obj8.children = items7;
    tmp31Result = tmp31(tmp32, obj8);
  }
  const items8 = [tmp31Result, ];
  const obj12 = { style: tmp3.actions, children: null };
  const obj13 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl8 = tmp4(tmp2[20]).intl;
  obj13.text = intl8.string(projectId(applicationId[20]).t["ETE/oC"]);
  obj13.onPress = callback2;
  const items9 = [closure_13(projectId(applicationId[29]).Button, obj13), ];
  const obj14 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp4(tmp2[20]).intl;
  obj14.text = intl9.string(guildId(applicationId[21])["69aIG4"]);
  obj14.loading = tmp18;
  obj14.disabled = "" === trimmed || trimmed.length > diff || null == found || tmp18;
  obj14.onPress = callback3;
  items9[1] = closure_13(projectId(applicationId[29]).Button, obj14);
  obj12.children = items9;
  items8[1] = c14(ref, obj12);
  obj7.children = items8;
  obj5.children = c14(ref, obj7);
  return closure_13(projectId(applicationId[24]).ActionSheet, obj5);
};
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";