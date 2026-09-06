// discord_app/modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3547 from "../intl/VibegrationsUntranslated.messages.js";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsUtils from "../lib/VibegrationsUtils.tsx";
import ChannelPickerActionSheetDefault from "../../channel/native/ChannelPickerActionSheet.tsx";
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
let closure_9 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Routes = fn(1074).Routes;
const MessageSendLocation = fn(4553).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const VibegrationsPublishNotesSheet = "VibegrationsPublishNotesSheet";
let closure_18 = "<#" + "9".repeat(20) + ">";
const VibegrationsPatchNotesLastChannels = "VibegrationsPatchNotesLastChannels";
const createStyles = fn(4560);
let closure_20 = createStyles.createStyles((paddingBottom) => {
  let obj = { container: null, section: null, notesSection: null, statusRow: null, actions: null };
  obj = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.container = obj;
  obj = { gap: nativeDefault.space.PX_8 };
  obj.section = obj;
  obj.notesSection = { gap: nativeDefault.space.PX_4 };
  const obj1 = { gap: nativeDefault.space.PX_4 };
  obj.statusRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
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
  let first;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let trimmed;
  let combined1;
  let callback2;
  const tmp3 = callback2(applicationId(publish[13])({ includeKeyboardHeight: true }).insets.bottom);
  let obj = guildId(publish[14]);
  const items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj1 = guildId(publish[14]);
  const items1 = [first];
  const items2 = [guildId, applicationId];
  const stateFromStores1 = obj1.useStateFromStores(
    items1,
    () => VibegrationsUtils.findVibegrationChannelId(guildId, applicationId),
    items2,
  );
  let intl = guildId(publish[20]).intl;
  obj = { channel: trimmed };
  const diff =
    applicationId(publish[16])() - "\n\n" + intl.formatToPlainString(applicationId(publish[21]).bhoZhI, obj).length;
  let obj3 = stateFromStores1;
  let ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  const tmp6 = applicationId(publish[16])();
  [tmp10, c7] = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp11 = stateFromStores(
    stateFromStores1.useState(() => {
      const Storage = Storage3.Storage;
      value = Storage.get(VibegrationsPatchNotesLastChannels);
      let tmp2;
      if (value != null) {
        tmp2 = value[guildId];
      }
      closure_0 = tmp2;
      let tmp4 = null;
      if (null != tmp2) {
        tmp4 = null;
        if (stateFromStores.some((id) => id.id === closure_0)) {
          tmp4 = tmp2;
        }
      }
      return tmp4;
    }),
    2,
  );
  first = tmp11[0];
  closure_9 = tmp11[1];
  const tmp9 = stateFromStores(stateFromStores1.useState("publishing"), 2);
  [str, c10] = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp14 = stateFromStores(stateFromStores1.useState(true), 2);
  closure_11 = tmp14[1];
  const tmp13 = stateFromStores(stateFromStores1.useState(""), 2);
  [tmp16, c12] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp15 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp18, c13] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp17 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp20, c14] = stateFromStores(stateFromStores1.useState(false), 2);
  closure_15 = stateFromStores1.useRef(false);
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
      () => {
        if (!c0) {
          c7("failed");
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
      closure_9(stateFromStores1);
    }
  }, items4);
  const items5 = [initialDraft];
  const effect2 = stateFromStores1.useEffect(() => {
    c0 = false;
    initialDraft.then(
      (ok) => {
        if (!c0) {
          closure_11(false);
          if (true !== ok.ok) {
            c12(true);
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
              c10(notes.slice(0, ref.current));
            }
          }
        }
      },
      () => {
        if (!c0) {
          closure_11(false);
          c12(true);
        }
      },
    );
    return () => {
      c0 = true;
    };
  }, items5);
  let found = null;
  const callback = stateFromStores1.useCallback((arg0) => {
    closure_15.current = true;
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
  combined1 = null;
  if (null != stateFromStores1) {
    let _HermesInternal = HermesInternal;
    let combined = "<#" + stateFromStores1 + ">";
    const intl2 = tmp4(tmp2[20]).intl;
    obj = { channel: combined };
    const _HermesInternal2 = HermesInternal;
    combined1 = "\n\n" + intl2.formatToPlainString(tmp(tmp2[21]).bhoZhI, obj);
  }
  const items6 = [stateFromStores, guildId, found];
  const callback1 = obj3.useCallback(() => {
    let obj = { content: null, key: "VibegrationsPatchNotesChannelSheet", stackingBehavior: "stack" };
    obj = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    const obj1 = { title: null };
    const intl = util.intl;
    obj1.title = intl.string(_modDef3547.IcSdnu);
    obj.header = obj1;
    obj.guild = GuildStore.getGuild(guildId);
    obj.channels = stateFromStores;
    obj.selectedChannel = found;
    obj.onSelect = function onSelect(id) {
      ref.current = true;
      closure_1_9(id.id);
    };
    obj.content = __initData(ChannelPickerActionSheetDefault, obj);
    obj.showActionSheet(obj);
  }, items6);
  callback2 = obj3.useCallback(() => {
    applicationId(publish[18]).hideActionSheet(found);
  }, []);
  const items7 = [stateFromStores1, guildId, callback2];
  const callback3 = obj3.useCallback(() => {
    if (null == stateFromStores1) {
      let CHANNELResult = Routes.CHANNEL(guildId);
    } else {
      CHANNELResult = Routes.CHANNEL(guildId, tmp);
    }
    router_utils.transitionTo(CHANNELResult);
    callback2();
  }, items7);
  const items8 = [found, trimmed, combined1, guildId, callback2];
  const callback4 = obj3.useCallback(
    initialDraft(function* (arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              guildId = tmp7;
              closure_128_0 = undefined;
              if (null != found) {
                if ("" !== trimmed) {
                  _undefined(true);
                  _undefined2(false);
                  dependencyMap = 1;
                  let obj2 = tmp3(7682);
                  let combined = tmp30;
                  if (null != combined1) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + tmp30 + tmp38;
                  }
                  const parsed = obj2.parse(found, combined);
                  const tmp35Result = tmp3(7456);
                  const obj1 = { location: _undefined2.VIBEGRATIONS_PATCH_NOTES };
                  c3 = 2;
                  c4 = 1;
                  obj2 = { value: tmp35Result.sendMessage(found.id, parsed, false, obj1), done: false };
                  return obj2;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              closure_129_14(true);
              closure_129_13(false);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = value;
              let ok;
              if (closure_128_0 != null) {
                ok = closure_128_0.ok;
              }
              if (false !== ok) {
                const Storage = guildId(510).Storage;
                obj = {};
                const Storage2 = guildId(510).Storage;
                const merged = Object.assign(Storage2.get(closure_1_19));
                obj[closure_129_0] = closure_129_17.id;
                const result = Storage.set(closure_1_19, obj);
                closure_129_20();
                dependencyMap = 0;
              }
            }
            const _Error = Error;
            const error = new Error("send failed");
            throw error;
          }
          c4 = 3;
        } catch (tmp46) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp46;
          } else {
            c3 = tmp;
          }
        }
      }
    }),
    items8,
  );
  obj1 = { startExpanded: true, header: null, children: null };
  let obj2 = { title: null };
  const intl3 = tmp4(tmp2[20]).intl;
  obj2.title = intl3.formatToPlainString(applicationId(publish[21]).gOv8LL, { projectName });
  obj1.header = closure_15(guildId(publish[26]).BottomSheetTitleHeader, obj2);
  obj3 = { style: tmp3.container, children: null };
  const obj4 = { style: tmp3.section, children: null };
  const obj5 = { variant: "heading-md/semibold", color: "text-default", children: null };
  const intl4 = tmp4(tmp2[20]).intl;
  obj5.children = intl4.string(applicationId(publish[21]).tqtMyS);
  const items9 = [closure_15(guildId(publish[27]).Text, obj5)];
  if ("publishing" === tmp10) {
    const obj6 = { style: tmp3.statusRow, children: null };
    const items10 = [tmp32(ref, { size: "small" })];
    const obj7 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl8 = tmp4(tmp2[20]).intl;
    const obj8 = { projectName };
    obj7.children = intl8.formatToPlainString(tmp(tmp2[21]).g5fncX, obj8);
    items10[1] = tmp32(tmp4(tmp2[27]).Text, obj7);
    obj6.children = items10;
    let tmp32Result = tmp33(tmp34, obj6);
  } else {
    if ("succeeded" === tmp10) {
      const obj9 = { variant: "text-md/medium", color: "text-feedback-positive", children: null };
      const intl6 = tmp4(tmp2[20]).intl;
      const obj10 = { projectName, link: null, onNavigate: null };
      const intl7 = tmp4(tmp2[20]).intl;
      obj10.link = intl7.string(tmp4(tmp2[20]).t.jVcuVY);
      obj10.onNavigate = callback3;
      obj9.children = intl6.format(tmp(tmp2[21]).MsXuP8, obj10);
      let obj11 = obj9;
    } else {
      obj11 = { variant: "text-md/medium", color: "text-feedback-critical", children: null };
      const intl5 = tmp4(tmp2[20]).intl;
      obj11.children = intl5.string(tmp(tmp2[21]).fNP6Cd);
    }
    tmp32Result = tmp32(tmp4(tmp2[27]).Text, obj11);
  }
  items9[1] = tmp32Result;
  obj4.children = items9;
  const items11 = [ref(c7, obj4), ,];
  let tmp33Result = null;
  if (stateFromStores.length > 0) {
    const obj12 = { style: tmp3.notesSection, children: null };
    const obj13 = {
      label: null,
      placeholder: null,
      description: null,
      errorMessage: null,
      maxLength: null,
      value: null,
      onChange: null,
      isDisabled: null,
    };
    const intl9 = tmp4(tmp2[20]).intl;
    obj13.label = intl9.string(tmp(tmp2[21]).oouynk);
    const intl10 = tmp4(tmp2[20]).intl;
    const tmpResult = tmp(tmp2[21]);
    obj13.placeholder = intl10.string(tmp14[0] ? tmpResult.VQhlkB : tmpResult.xkxDN1);
    let stringResult;
    if (tmp16) {
      const intl11 = tmp4(tmp2[20]).intl;
      stringResult = intl11.string(tmp(tmp2[21]).PCST1n);
    }
    obj13.description = stringResult;
    let stringResult1;
    if (tmp20) {
      const intl12 = tmp4(tmp2[20]).intl;
      stringResult1 = intl12.string(tmp(tmp2[21]).P6SoGm);
    }
    obj13.errorMessage = stringResult1;
    obj13.maxLength = diff;
    obj13.value = str;
    obj13.onChange = callback;
    obj13.isDisabled = tmp18;
    const items12 = [tmp32(tmp4(tmp2[28]).TextArea, obj13)];
    const intl13 = tmp4(tmp2[20]).intl;
    if (null != found) {
      const _HermesInternal3 = HermesInternal;
      let combined2 = "#" + tmp4(tmp2[29]).computeChannelName(found, c12, closure_11);
      const tmp4Result = tmp4(tmp2[29]);
    } else {
      const intl14 = tmp4(tmp2[20]).intl;
      combined2 = intl14.string(tmp(tmp2[21])["8qO519"]);
    }
    const obj14 = { channel: combined2, onPick: null };
    let fn = callback1;
    if (tmp18) {
      fn = () => {};
    }
    const obj15 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj14.onPick = fn;
    obj15.children = intl13.format(tmp(tmp2[21]).unJ01l, obj14);
    items12[1] = tmp32(tmp4(tmp2[27]).Text, obj15);
    obj12.children = items12;
    tmp33Result = tmp33(tmp34, obj12);
  }
  items11[1] = tmp33Result;
  const obj16 = { style: tmp3.actions, children: null };
  const intl15 = tmp4(tmp2[20]).intl;
  if ("failed" === tmp10) {
    let NmaE9T = tmp4(tmp2[20]).t.cpT0Cq;
  } else {
    NmaE9T = tmp(tmp2[21]).NmaE9T;
  }
  const tmp19 = stateFromStores(stateFromStores1.useState(false), 2);
  const items13 = [
    closure_15(guildId(publish[30]).Button, {
      variant: "tertiary",
      grow: true,
      text: intl15.string(NmaE9T),
      onPress: callback2,
    }),
  ];
  const obj18 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl16 = tmp4(tmp2[20]).intl;
  obj18.text = intl16.string(applicationId(publish[21]).dx7eQG);
  obj18.loading = tmp18;
  obj18.disabled = "succeeded" !== tmp10 || "" === trimmed || trimmed.length > diff || null == found || tmp18;
  obj18.onPress = callback4;
  items13[1] = closure_15(guildId(publish[30]).Button, obj18);
  obj16.children = items13;
  items11[2] = ref(c7, obj16);
  obj3.children = items11;
  obj1.children = ref(c7, obj3);
  return closure_15(guildId(publish[25]).ActionSheet, obj1);
}
export const VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY = "VibegrationsPublishNotesSheet";
