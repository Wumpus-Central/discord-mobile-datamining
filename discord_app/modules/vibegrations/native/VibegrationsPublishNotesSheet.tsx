// discord_app/modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsUtils from "../lib/VibegrationsUtils.tsx";
import ChannelPickerActionSheetDefault from "../../channel/native/ChannelPickerActionSheet.tsx";
import VibegrationsPatchNotesChannel from "../lib/VibegrationsPatchNotesChannel.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
let closure_9 = fn(4497).GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = fn(4859).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const VibegrationsPublishNotesSheet = "VibegrationsPublishNotesSheet";
const createStyles = fn(4866);
let closure_17 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom },
    section: null,
    notesSection: null,
    statusRow: null,
    actions: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj3 = { gap: nativeDefault.space.PX_8 };
  obj.notesSection = { gap: nativeDefault.space.PX_4 };
  const obj4 = { gap: nativeDefault.space.PX_4 };
  obj.statusRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx");

export default function VibegrationsPublishNotesSheet(guildId) {
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
  c20 = undefined;
  let callback2;
  const tmp3 = ref(applicationId(publish[12])({ includeKeyboardHeight: true }).insets.bottom);
  const items = [c8];
  const stateFromStores = guildId(publish[13]).useStateFromStores(items, () => {
    found = GuildChannelStore.getChannels(guildId)[closure_9].filter((channel) => {
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
  let obj = guildId(publish[13]);
  const items1 = [c8];
  const items2 = [guildId, applicationId];
  const stateFromStores1 = guildId(publish[13]).useStateFromStores(
    items1,
    () => VibegrationsUtils.findVibegrationChannelId(guildId, applicationId),
    items2,
  );
  let obj2 = guildId(publish[13]);
  const tmp6 = applicationId(publish[15])();
  const diff = tmp6 - guildId(publish[16]).formatPlaySuffix(guildId(publish[16]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  let obj3 = guildId(publish[16]);
  [tmp10, c7] = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp9 = stateFromStores(stateFromStores1.useState("publishing"), 2);
  [tmp12, c8] = stateFromStores(stateFromStores1.useState(null), 2);
  const tmp13 = stateFromStores(
    stateFromStores1.useState(() => {
      const result = VibegrationsPatchNotesChannel.lastPatchNotesChannel(applicationId);
      guildId = result;
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
  closure_10 = tmp13[1];
  const tmp11 = stateFromStores(stateFromStores1.useState(null), 2);
  [str, c11] = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp16 = stateFromStores(stateFromStores1.useState(true), 2);
  closure_12 = tmp16[1];
  const tmp15 = stateFromStores(stateFromStores1.useState(""), 2);
  [tmp18, c13] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp17 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp20, c14] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp19 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp22, c15] = stateFromStores(stateFromStores1.useState(false), 2);
  closure_16 = stateFromStores1.useRef(false);
  ref = stateFromStores1.useRef(null != first);
  const items3 = [publish];
  const effect = stateFromStores1.useEffect(() => {
    c0 = false;
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
    let current = null == stateFromStores1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_10(stateFromStores1);
    }
  }, items4);
  const items5 = [initialDraft];
  const effect2 = stateFromStores1.useEffect(() => {
    c0 = false;
    initialDraft.then(
      (ok) => {
        if (!c0) {
          closure_12(false);
          if (true !== ok.ok) {
            c13(true);
          } else {
            let current = null == ok.notes;
            if (!current) {
              current = "" === ok.notes;
            }
            if (!current) {
              current = ref.current;
            }
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
    let _HermesInternal = HermesInternal;
    formatPlaySuffixResult = tmp4(tmp2[16]).formatPlaySuffix("<#" + stateFromStores1 + ">");
    const tmp4Result = tmp4(tmp2[16]);
  }
  c20 = formatPlaySuffixResult;
  const items6 = [stateFromStores, guildId, found];
  const callback1 = obj4.useCallback(() => {
    const obj2 = { content: null, key: "VibegrationsPatchNotesChannelSheet", stackingBehavior: "stack" };
    const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj4 = { title: null };
    const obj = ActionSheetActionCreators;
    const intl = util.intl;
    obj4.title = intl.string(_modDef3715.IcSdnu);
    obj3.header = obj4;
    obj3.guild = GuildStore.getGuild(guildId);
    obj3.channels = stateFromStores;
    obj3.selectedChannel = found;
    obj3.onSelect = function onSelect(id) {
      ref.current = true;
      closure_1_10(id.id);
    };
    obj2.content = closure_2_14(ChannelPickerActionSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items6);
  callback2 = obj4.useCallback(() => {
    applicationId(publish[17]).hideActionSheet(closure_16);
  }, []);
  const items7 = [found, trimmed, formatPlaySuffixResult, applicationId, callback2];
  const callback3 = obj4.useCallback(
    initialDraft(function* () {
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
          return { value: "HermesInternal", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guildId = tmp7;
              closure_128_0 = undefined;
              if (null != found) {
                if ("" !== trimmed) {
                  _undefined(true);
                  _undefined2(false);
                  dependencyMap = 1;
                  let combined = trimmed;
                  if (null != c20) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + trimmed + tmp34;
                  }
                  const parsed = tmp3(7290).parse(found, combined);
                  const tmp31Result = tmp3(7072);
                  const obj5 = { location: constants.VIBEGRATIONS_PATCH_NOTES };
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp31Result.sendMessage(found.id, parsed, false, obj5), done: false };
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
                const result = guildId(16448).rememberPatchNotesChannel(closure_129_1, closure_129_18.id);
                closure_129_21();
                dependencyMap = 0;
                const obj = guildId(16448);
              }
            }
            const _Error = Error;
            const error = new Error("send failed");
            throw error;
          }
          c4 = 3;
        } catch (tmp42) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp42;
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
  let intl = tmp4(tmp2[19]).intl;
  obj6.title = intl.formatToPlainString(applicationId(publish[20]).gOv8LL, { projectName });
  obj5.header = c14(guildId(publish[24]).BottomSheetTitleHeader, obj6);
  let obj7 = { style: tmp3.container, children: null };
  const obj8 = { style: tmp3.section, children: null };
  const obj9 = { variant: "heading-md/semibold", color: "text-default", children: null };
  const intl2 = tmp4(tmp2[19]).intl;
  obj9.children = intl2.string(applicationId(publish[20]).tqtMyS);
  const items8 = [c14(guildId(publish[25]).Text, obj9)];
  if ("publishing" === tmp10) {
    const obj10 = { style: tmp3.statusRow, children: null };
    const items9 = [tmp33(ref, { size: "small" })];
    const obj11 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl5 = tmp4(tmp2[19]).intl;
    const obj12 = { projectName };
    obj11.children = intl5.formatToPlainString(tmp(tmp2[20]).g5fncX, obj12);
    items9[1] = tmp33(tmp4(tmp2[25]).Text, obj11);
    obj10.children = items9;
    let tmp33Result = tmp34(tmp35, obj10);
  } else {
    if ("succeeded" === tmp10) {
      const obj13 = { variant: "text-md/medium", color: "text-feedback-positive", children: null };
      const intl4 = tmp4(tmp2[19]).intl;
      const obj14 = { projectName };
      obj13.children = intl4.formatToPlainString(tmp(tmp2[20]).CC69wK, obj14);
      let obj15 = obj13;
    } else {
      if (stringResult == null) {
        const intl3 = tmp4(tmp2[19]).intl;
        stringResult = intl3.string(tmp(tmp2[20]).fNP6Cd);
      }
      obj15 = { variant: "text-md/medium", color: "text-feedback-critical", children: stringResult };
    }
    tmp33Result = tmp33(tmp4(tmp2[25]).Text, obj15);
  }
  items8[1] = tmp33Result;
  obj8.children = items8;
  const items10 = [c15(c7, obj8), ,];
  let tmp34Result2 = null;
  if (stateFromStores.length > 0) {
    const obj16 = { style: tmp3.notesSection, children: null };
    const obj17 = {
      label: null,
      placeholder: null,
      description: null,
      errorMessage: null,
      maxLength: null,
      value: null,
      onChange: null,
      disabled: null,
    };
    const intl6 = tmp4(tmp2[19]).intl;
    obj17.label = intl6.string(tmp(tmp2[20]).oouynk);
    const intl7 = tmp4(tmp2[19]).intl;
    const tmpResult = tmp(tmp2[20]);
    obj17.placeholder = intl7.string(tmp16[0] ? tmpResult.VQhlkB : tmpResult.xkxDN1);
    let stringResult1;
    if (tmp18) {
      const intl8 = tmp4(tmp2[19]).intl;
      stringResult1 = intl8.string(tmp(tmp2[20]).PCST1n);
    }
    obj17.description = stringResult1;
    let stringResult2;
    if (tmp22) {
      const intl9 = tmp4(tmp2[19]).intl;
      stringResult2 = intl9.string(tmp(tmp2[20]).P6SoGm);
    }
    obj17.errorMessage = stringResult2;
    obj17.maxLength = diff;
    obj17.value = str;
    obj17.onChange = callback;
    obj17.disabled = tmp20;
    const items11 = [tmp33(tmp4(tmp2[26]).TextArea, obj17)];
    const intl10 = tmp4(tmp2[19]).intl;
    if (null != found) {
      const _HermesInternal2 = HermesInternal;
      let combined = "#" + tmp4(tmp2[27]).computeChannelName(found, closure_12, c11);
      const tmp4Result2 = tmp4(tmp2[27]);
    } else {
      const intl11 = tmp4(tmp2[19]).intl;
      combined = intl11.string(tmp(tmp2[20])["8qO519"]);
    }
    const obj18 = { channel: combined, onPick: null };
    let fn = callback1;
    if (tmp20) {
      fn = () => {};
    }
    const obj19 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj18.onPick = fn;
    obj19.children = intl10.format(tmp(tmp2[20]).unJ01l, obj18);
    items11[1] = tmp33(tmp4(tmp2[25]).Text, obj19);
    obj16.children = items11;
    tmp34Result2 = tmp34(tmp35, obj16);
  }
  items10[1] = tmp34Result2;
  const obj20 = { style: tmp3.actions, children: null };
  const intl12 = tmp4(tmp2[19]).intl;
  if ("failed" === tmp10) {
    let NmaE9T = tmp4(tmp2[19]).t.cpT0Cq;
  } else {
    NmaE9T = tmp(tmp2[20]).NmaE9T;
  }
  const tmp21 = stateFromStores(stateFromStores1.useState(false), 2);
  const items12 = [
    c14(guildId(publish[28]).Button, {
      variant: "tertiary",
      grow: true,
      text: intl12.string(NmaE9T),
      onPress: callback2,
    }),
  ];
  const obj22 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl13 = tmp4(tmp2[19]).intl;
  obj22.text = intl13.string(applicationId(publish[20]).dx7eQG);
  obj22.loading = tmp20;
  obj22.disabled = "succeeded" !== tmp10 || "" === trimmed || trimmed.length > diff || null == found || tmp20;
  obj22.onPress = callback3;
  items12[1] = c14(guildId(publish[28]).Button, obj22);
  obj20.children = items12;
  items10[2] = c15(c7, obj20);
  obj7.children = items10;
  obj5.children = c15(c7, obj7);
  return c14(guildId(publish[23]).ActionSheet, obj5);
}
export const VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY = "VibegrationsPublishNotesSheet";
