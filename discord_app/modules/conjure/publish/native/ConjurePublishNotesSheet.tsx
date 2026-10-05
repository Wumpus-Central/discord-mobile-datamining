// discord_app/modules/conjure/publish/native/ConjurePublishNotesSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl14 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import GuildChannelStore2 from "../../../../stores/GuildChannelStore.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MessageConstants from "../../../messages/MessageConstants.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import ChannelPickerActionSheetDefault from "../../../channel/native/ChannelPickerActionSheet.tsx";
import ConjurePatchNotesChannel from "../ConjurePatchNotesChannel.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildChannelStore = GuildChannelStore2;
let c3, c4, channel, closure_12;

let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
let closure_9 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const ConjurePublishNotesSheet_str = "ConjurePublishNotesSheet";
let closure_17 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom },
    section: { gap: nativeDefault.space.PX_8 },
    notesSection: { gap: nativeDefault.space.PX_4 },
    statusRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
    actions: { flexDirection: "row", gap: nativeDefault.space.PX_8 },
  };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default function ConjurePublishNotesSheet(guildId) {
  let BottomSheetTitleHeader;
  let N5NqKB;
  let _undefined;
  let _undefined2;
  let c11;
  let c13;
  let c14;
  let c15;
  let c7;
  let c8;
  let fn;
  let intl;
  let intl13;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items12;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let obj6;
  let obj7;
  let projectName;
  let publish;
  let str;
  let string;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp10;
  let tmp12;
  let tmp19;
  let tmp21;
  let tmp23;
  let tmp34Result;
  let tmpResult;
  guildId = guildId.guildId;
  const applicationId = guildId.applicationId;
  ({ projectName, publish } = guildId);
  const initialDraft = guildId.initialDraft;
  c7 = undefined;
  c8 = undefined;
  c11 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  let ref;
  let trimmed;
  let c20;
  let callback2;
  let tmp = applicationId;
  let tmp2 = publish;
  const tmp3 = ref(applicationId(publish[12])({ includeKeyboardHeight: true }).insets.bottom);
  const tmp4 = guildId;
  let obj = guildId(publish[13]);
  const items = [c8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const arr = GuildChannelStore.getChannels(guildId)[closure_9];
    found = arr.filter((channel) => {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
      return tmp2;
    });
    return found.map((channel) => channel.channel);
  });
  let obj2 = guildId(publish[13]);
  const items1 = [c8];
  const items2 = [guildId, applicationId];
  const stateFromStores1 = obj2.useStateFromStores(
    items1,
    () => {
      const obj = ConjureUtils;
      return obj.findConjureChannelId(guildId, applicationId);
    },
    items2,
  );
  const tmp6 = applicationId(publish[15])();
  let obj3 = guildId(publish[16]);
  const diff = tmp6 - obj3.formatPlaySuffix(guildId(publish[16]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  let obj4 = stateFromStores1;
  ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  [tmp10, c7] = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp9 = stateFromStores(stateFromStores1.useState("publishing"), 2);
  [tmp12, c8] = stateFromStores(stateFromStores1.useState(null), 2);
  const tmp11 = stateFromStores(stateFromStores1.useState(null), 2);
  const tmp13 = stateFromStores(
    stateFromStores1.useState(() => {
      const obj = ConjurePatchNotesChannel;
      const result = obj.lastPatchNotesChannel(applicationId);
      let tmp2 = null;
      if (null != result) {
        tmp2 = null;
        if (stateFromStores.some((id) => id.id === result)) {
          tmp2 = result;
        }
      }
      return tmp2;
    }),
    2,
  );
  const first = tmp13[0];
  let closure_10 = tmp13[1];
  [str, c11] = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp15 = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp16 = stateFromStores(stateFromStores1.useState(true), 2);
  closure_12 = tmp16[1];
  const first1 = tmp16[0];
  [tmp19, c13] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp18 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp21, c14] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp20 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp23, c15] = stateFromStores(stateFromStores1.useState(false), 2);
  stateFromStores(stateFromStores1.useState(false), 2);
  let closure_16 = stateFromStores1.useRef(false);
  ref = stateFromStores1.useRef(null != first);
  const items3 = [publish];
  const effect = stateFromStores1.useEffect(() => {
    let c0 = false;
    publish.then(
      () => {
        if (!c0) {
          c7("succeeded");
        }
      },
      (message) => {
        if (!c0) {
          c7("failed");
          const _Error = Error;
          message = null;
          if (message instanceof Error) {
            message = message.message;
          }
          c8(message);
        }
      },
    );
    return () => {
      c0 = true;
    };
  }, items3);
  const items4 = [stateFromStores1];
  const effect1 = stateFromStores1.useEffect(() => {
    const current = null == stateFromStores1 || ref.current;
    if (!current) {
      closure_10(stateFromStores1);
    }
  }, items4);
  const items5 = [initialDraft];
  const effect2 = stateFromStores1.useEffect(() => {
    let c0 = false;
    initialDraft.then(
      (ok) => {
        if (!c0) {
          closure_12(false);
          if (true !== ok.ok) {
            c13(true);
          } else {
            const current = null == ok.notes || "" === ok.notes || ref.current;
            if (!current) {
              const notes = ok.notes;
              c11(notes.slice(0, ref.current));
            }
          }
        }
      },
      () => {
        if (!c0) {
          closure_12(false);
          c13(true);
        }
      },
    );
    return () => {
      c0 = true;
    };
  }, items5);
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
    const tmp30 = globalThis;
    let _HermesInternal = HermesInternal;
    const tmp4Result = tmp4(tmp2[16]);
    formatPlaySuffixResult = tmp4Result.formatPlaySuffix("<#" + stateFromStores1 + ">");
  }
  c20 = formatPlaySuffixResult;
  const items6 = [stateFromStores, guildId, found];
  const callback1 = obj4.useCallback(() => {
    let intl;
    let obj2;
    let obj3;
    let tmp2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: authStore2(tmp2, obj2), key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    obj2 = {
      header: obj3,
      guild: GuildStore.getGuild(guildId),
      channels: stateFromStores,
      selectedChannel: found,
      onSelect(id) {
        ref.current = true;
        closure_1_10(id.id);
      },
    };
    obj3 = { title: intl.string(_modDef3723.Gd63Fl) };
    tmp2 = ChannelPickerActionSheetDefault;
    intl = intl14.intl;
    showActionSheet(obj);
  }, items6);
  callback2 = obj4.useCallback(() => {
    const obj = applicationId(publish[17]);
    obj.hideActionSheet(closure_16);
  }, []);
  const items7 = [found, trimmed, formatPlaySuffixResult, applicationId, callback2];
  const callback3 = obj4.useCallback(
    initialDraft(function* () {
      let c2;
      let closure_0;
      let closure_1;
      if (c4 === 2) {
        c4 = 3;
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
              guildId = undefined;
              if (null != found) {
                if ("" !== trimmed) {
                  _undefined(true);
                  _undefined2(false);
                  publish = 1;
                  let combined = trimmed;
                  const parse = tmp(publish[21]).parse;
                  const tmp28 = tmp(publish[21]);
                  if (null != c20) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + trimmed + tmp30;
                  }
                  const parsed = parse(found, combined);
                  const tmp26Result = tmp(publish[22]);
                  const obj4 = { location: constants.CONJURE_PATCH_NOTES };
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: tmp26Result.sendMessage(found.id, parsed, false, obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === c3) {
            publish = 0;
            closure_129_15(true);
            closure_129_14(false);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            publish = 0;
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            guildId = value;
            let ok;
            if (guildId != null) {
              ok = guildId.ok;
            }
            if (false === ok) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("send failed");
              throw error;
            } else {
              const obj = guildId(publish[16]);
              const result = obj.rememberPatchNotesChannel(closure_129_1, closure_129_18.id);
              closure_129_21();
              publish = 0;
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp38) {
          if (0 === publish) {
            c4 = 3;
            throw tmp38;
          } else {
            c3 = 1;
          }
        }
      }
    }),
    items7,
  );
  let obj5 = { startExpanded: true, header: c14(BottomSheetTitleHeader, obj6), children: c15(tmp36, obj7) };
  const ActionSheet = tmp4(tmp2[23]).ActionSheet;
  obj6 = { title: intl.formatToPlainString(tmp(tmp2[20]).NEPcoi, { projectName }) };
  BottomSheetTitleHeader = tmp4(tmp2[24]).BottomSheetTitleHeader;
  intl = tmp4(tmp2[19]).intl;
  obj7 = { style: tmp3.container, children: items10 };
  const obj8 = { style: tmp3.section, children: items8 };
  const obj9 = { variant: "heading-md/semibold", color: "text-default", children: intl2.string(tmp(tmp2[20]).xnpBTy) };
  const Text = tmp4(tmp2[25]).Text;
  intl2 = tmp4(tmp2[19]).intl;
  items8 = [c14(Text, obj9)];
  if ("publishing" === tmp10) {
    const tmp38 = ref;
    const obj10 = { style: tmp3.statusRow, children: items9 };
    items9 = [c14(ref, { size: "small" })];
    const obj11 = {
      variant: "text-md/medium",
      color: "text-subtle",
      children: intl5.formatToPlainString(tmp(tmp2[20])["3F4azs"], obj12),
    };
    const Text2 = tmp4(tmp2[25]).Text;
    intl5 = tmp4(tmp2[19]).intl;
    obj12 = { projectName };
    items9[1] = c14(Text2, obj11);
    tmp34Result = tmp35(tmp36, obj10);
  } else {
    let obj15;
    const Text4 = tmp4(tmp2[25]).Text;
    if ("succeeded" === tmp10) {
      const obj13 = {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: intl4.formatToPlainString(tmp(tmp2[20]).Enj2YA, obj14),
      };
      intl4 = tmp4(tmp2[19]).intl;
      obj15 = obj13;
      obj14 = { projectName };
    } else {
      if (stringResult == null) {
        const intl3 = tmp4(tmp2[19]).intl;
        stringResult = intl3.string(tmp(tmp2[20]).gMWZeG);
      }
      obj15 = { variant: "text-md/medium", color: "text-feedback-critical", children: stringResult };
    }
    tmp34Result = tmp34(Text4, obj15);
  }
  items8[1] = tmp34Result;
  items10 = [c15(tmp36, obj8), ,];
  let tmp35Result2 = null;
  if (stateFromStores.length > 0) {
    let combined;
    const obj16 = { style: tmp3.notesSection, children: items11 };
    const obj17 = {
      label: intl6.string(tmp(tmp2[20]).r4du8k),
      placeholder: string(first1 ? tmpResult.aYQksU : tmpResult["3hV1Gc"]),
      description: stringResult1,
      errorMessage: stringResult2,
      maxLength: diff,
      value: str,
      onChange: callback,
      disabled: tmp21,
    };
    const TextArea = tmp4(tmp2[26]).TextArea;
    intl6 = tmp4(tmp2[19]).intl;
    const intl7 = tmp4(tmp2[19]).intl;
    string = intl7.string;
    tmpResult = tmp(tmp2[20]);
    stringResult1 = undefined;
    if (tmp19) {
      const intl8 = tmp4(tmp2[19]).intl;
      stringResult1 = intl8.string(tmp(tmp2[20])["Em8bo+"]);
    }
    stringResult2 = undefined;
    if (tmp23) {
      const intl9 = tmp4(tmp2[19]).intl;
      stringResult2 = intl9.string(tmp(tmp2[20])["6oEjjD"]);
    }
    items11 = [c14(TextArea, obj17)];
    const Text3 = tmp4(tmp2[25]).Text;
    const intl10 = tmp4(tmp2[19]).intl;
    const format = intl10.format;
    const prop = tmp(tmp2[20])["1lVhj/"];
    if (null != found) {
      const _HermesInternal2 = HermesInternal;
      const tmp4Result2 = tmp4(tmp2[27]);
      combined = "#" + tmp4Result2.computeChannelName(found, closure_12, c11);
    } else {
      const intl11 = tmp4(tmp2[19]).intl;
      combined = intl11.string(tmp(tmp2[20])["7CvxMC"]);
    }
    const obj18 = { channel: combined, onPick: fn };
    fn = callback1;
    if (tmp21) {
      fn = () => {};
    }
    const obj19 = { variant: "text-md/medium", color: "text-subtle", children: format(prop, obj18) };
    items11[1] = c14(Text3, obj19);
    tmp35Result2 = tmp35(tmp36, obj16);
  }
  items10[1] = tmp35Result2;
  const obj20 = { style: tmp3.actions, children: items12 };
  const Button = tmp4(tmp2[28]).Button;
  const intl12 = tmp4(tmp2[19]).intl;
  const string2 = intl12.string;
  if ("failed" === tmp10) {
    N5NqKB = tmp4(tmp2[19]).t.cpT0Cq;
  } else {
    N5NqKB = tmp(tmp2[20]).N5NqKB;
  }
  items12 = [,];
  const obj21 = { variant: "tertiary", grow: true, text: string2(N5NqKB), onPress: callback2 };
  items12[0] = c14(Button, obj21);
  const obj22 = {
    variant: "primary",
    grow: true,
    text: intl13.string(tmp(tmp2[20])["69aIG4"]),
    loading: tmp21,
    disabled: "succeeded" !== tmp10 || "" === trimmed || trimmed.length > diff || null == found || tmp21,
    onPress: callback3,
  };
  const Button2 = tmp4(tmp2[28]).Button;
  intl13 = tmp4(tmp2[19]).intl;
  items12[1] = c14(Button2, obj22);
  items10[2] = c15(c7, obj20);
  return c14(ActionSheet, obj5);
}
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";
