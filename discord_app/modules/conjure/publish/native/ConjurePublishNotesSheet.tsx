// discord_app/modules/conjure/publish/native/ConjurePublishNotesSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import ConjurePatchNotesChannel from "../ConjurePatchNotesChannel.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_8 = fn(4807).GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = fn(5148).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ConjurePublishNotesSheet = "ConjurePublishNotesSheet";
const createStyles = fn(5154);
let closure_16 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom },
    notesSection: null,
    actions: null,
  };
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
  const items1 = [guildId];
  const stateFromStoresArray = projectId(applicationId[13]).useStateFromStoresArray(
    items,
    () => {
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
    },
    items1,
  );
  let obj = projectId(applicationId[13]);
  const items2 = [first];
  const items3 = [guildId, applicationId];
  const stateFromStores = projectId(applicationId[13]).useStateFromStores(
    items2,
    () => ConjureUtils.findConjureChannelId(guildId, applicationId),
    items3,
  );
  let obj2 = projectId(applicationId[13]);
  const tmp6 = guildId(applicationId[15])();
  const diff =
    tmp6 -
    projectId(applicationId[16]).formatPlaySuffix(projectId(applicationId[16]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  let ref = stateFromStores.useRef(diff);
  ref.current = diff;
  const tmp9 = stateFromStoresArray(
    stateFromStores.useState(() => {
      const result = ConjurePatchNotesChannel.lastPatchNotesChannel(applicationId);
      projectId = result;
      let tmp2 = null;
      if (null != result) {
        tmp2 = null;
        if (stateFromStoresArray.some((id) => id.id === result)) {
          tmp2 = result;
        }
      }
      return tmp2;
    }),
    2,
  );
  first = tmp9[0];
  closure_8 = tmp9[1];
  let obj3 = projectId(applicationId[16]);
  [str, c9] = stateFromStoresArray(stateFromStores.useState(""), 2);
  const tmp12 = stateFromStoresArray(stateFromStores.useState(true), 2);
  closure_10 = tmp12[1];
  const tmp11 = stateFromStoresArray(stateFromStores.useState(""), 2);
  [tmp14, c11] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp15 = stateFromStoresArray(stateFromStores.useState(undefined), 2);
  const first1 = tmp15[0];
  closure_13 = tmp15[1];
  const tmp13 = stateFromStoresArray(stateFromStores.useState(false), 2);
  [tmp18, c14] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp17 = stateFromStoresArray(stateFromStores.useState(false), 2);
  [tmp20, c15] = stateFromStoresArray(stateFromStores.useState(false), 2);
  closure_16 = stateFromStores.useRef(false);
  ref = stateFromStores.useRef(null != first);
  const items4 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_8(stateFromStores);
    }
  }, items4);
  const items5 = [projectId];
  const effect1 = stateFromStores.useEffect(() => {
    c0 = false;
    const obj = projectId(applicationId[17]);
    projectId(applicationId[17])
      .draftPatchNotes(c0)
      .then(
        (source_sha) => {
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
        },
        () => {
          if (!c0) {
            closure_10(false);
            c11(true);
          }
        },
      );
    return () => {
      c0 = true;
    };
  }, items5);
  let found = null;
  const callback = stateFromStores.useCallback((arg0) => {
    closure_16.current = true;
    _undefined2(false);
    _undefined(arg0);
  }, []);
  if (null != first) {
    found = stateFromStoresArray.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  trimmed = str.trim();
  let formatPlaySuffixResult = null;
  if (null != stateFromStores) {
    let _HermesInternal = HermesInternal;
    formatPlaySuffixResult = tmp4(tmp2[16]).formatPlaySuffix("<#" + stateFromStores + ">");
    const tmp4Result = tmp4(tmp2[16]);
  }
  c20 = formatPlaySuffixResult;
  const items6 = [stateFromStoresArray, guildId, found];
  const callback1 = obj4.useCallback(() => {
    const obj2 = { content: null, key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj4 = { title: null };
    const obj = ActionSheetActionCreators;
    const intl = util.intl;
    obj4.title = intl.string(_modDef3865.Gd63Fl);
    obj3.header = obj4;
    obj3.guild = GuildStore.getGuild(guildId);
    obj3.channels = stateFromStoresArray;
    obj3.selectedChannel = found;
    obj3.onSelect = function onSelect(id) {
      ref.current = true;
      closure_1_8(id.id);
    };
    obj2.content = map1(ChannelPickerActionSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items6);
  callback2 = obj4.useCallback(() => {
    guildId(applicationId[18]).hideActionSheet(c15);
  }, []);
  const items7 = [
    found,
    trimmed,
    formatPlaySuffixResult,
    applicationId,
    projectId,
    publishedRevision,
    guildId,
    first1,
    callback2,
  ];
  const callback3 = obj4.useCallback(
    publishedRevision(function* () {
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
                  const parsed = tmp3(7589).parse(found, combined);
                  const tmp40Result = tmp3(7399);
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
                const result = projectId(12118).rememberPatchNotesChannel(closure_129_2, closure_129_18.id);
                let id;
                if (closure_128_0 != null) {
                  const body = closure_128_0.body;
                  if (body != null) {
                    id = body.id;
                  }
                }
                closure_128_1 = id;
                if (null != closure_128_1) {
                  const obj8 = {
                    publishedRevision: closure_129_3,
                    guildId: closure_129_1,
                    channelId: closure_129_18.id,
                    messageId: closure_128_1,
                  };
                  projectId(10986).recordPatchNotesSent(closure_129_0, obj8, closure_129_12);
                  const obj = projectId(10986);
                }
                closure_129_21();
                dependencyMap = 0;
                const obj10 = projectId(12118);
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
    }),
    items7,
  );
  let obj5 = { startExpanded: true, header: null, children: null };
  let obj6 = { title: null };
  let intl = tmp4(tmp2[20]).intl;
  obj6.title = intl.formatToPlainString(guildId(applicationId[21]).lsYQII, { projectName: projectName.projectName });
  obj5.header = closure_13(projectId(applicationId[25]).BottomSheetTitleHeader, obj6);
  let obj7 = { style: tmp3.container, children: null };
  let tmp31Result = null;
  if (stateFromStoresArray.length > 0) {
    let obj8 = { style: tmp3.notesSection, children: null };
    const obj9 = {
      label: null,
      placeholder: null,
      description: null,
      errorMessage: null,
      maxLength: null,
      value: null,
      onChange: null,
      disabled: null,
    };
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
    const items8 = [tmp30(tmp4(tmp2[26]).TextArea, obj9)];
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
      fn = () => {};
    }
    const obj11 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj10.onPick = fn;
    obj11.children = intl6.format(tmp(tmp2[21])["1lVhj/"], obj10);
    items8[1] = tmp30(tmp4(tmp2[27]).Text, obj11);
    obj8.children = items8;
    tmp31Result = tmp31(tmp32, obj8);
  }
  const items9 = [tmp31Result];
  const obj12 = { style: tmp3.actions, children: null };
  const obj13 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl8 = tmp4(tmp2[20]).intl;
  obj13.text = intl8.string(projectId(applicationId[20]).t["ETE/oC"]);
  obj13.onPress = callback2;
  const items10 = [closure_13(projectId(applicationId[29]).Button, obj13)];
  const obj14 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp4(tmp2[20]).intl;
  obj14.text = intl9.string(guildId(applicationId[21])["69aIG4"]);
  obj14.loading = tmp18;
  obj14.disabled = "" === trimmed || trimmed.length > diff || null == found || tmp18;
  obj14.onPress = callback3;
  items10[1] = closure_13(projectId(applicationId[29]).Button, obj14);
  obj12.children = items10;
  items9[1] = c14(ref, obj12);
  obj7.children = items9;
  obj5.children = c14(ref, obj7);
  return closure_13(projectId(applicationId[24]).ActionSheet, obj5);
}
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";
