// discord_app/modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_9 } from "../../../stores/GuildChannelStore.tsx";
import closure_10 from "../../../stores/GuildStore.tsx";
import closure_11 from "../../../stores/RelationshipStore.tsx";
import closure_12 from "../../../stores/UserStore.tsx";
import { Routes } from "../../../Constants.tsx";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import closure_18 from "../../../../_runtime/00020_noop.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const VibegrationsPublishNotesSheet = "VibegrationsPublishNotesSheet";
const VibegrationsPatchNotesLastChannels = "VibegrationsPatchNotesLastChannels";
let closure_20 = createCacheKey.createStyles((paddingBottom) => {
  let obj = { container: null, section: null, notesSection: null, statusRow: null, actions: null };
  obj = { gap: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom };
  obj[0] = obj;
  obj = { gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { gap: ThemesDefault.space.PX_4 };
  obj1 = { gap: ThemesDefault.space.PX_4 };
  obj[3] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  const obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[4] = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx");

export default function VibegrationsPublishNotesSheet(guildId) {
  guildId = guildId.guildId;
  const applicationId = guildId.applicationId;
  ({ projectName, publish } = guildId);
  const initialDraft = guildId.initialDraft;
  let stateFromStores;
  let stateFromStores1;
  let ref;
  c7 = undefined;
  let first;
  closure_9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let callback;
  closure_16 = undefined;
  let found;
  let trimmed;
  let combined1;
  let callback2;
  const tmp3 = callback2(applicationId(publish[13])({ includeKeyboardHeight: true }).insets.bottom);
  let obj = guildId(publish[14]);
  const items = [first];
  stateFromStores = obj.useStateFromStores(items, () => {
    found = first.getChannels(guildId)[closure_9].filter((channel) => {
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
  obj1 = guildId(publish[14]);
  const items1 = [first];
  const items2 = [guildId, applicationId];
  stateFromStores1 = obj1.useStateFromStores(
    items1,
    () => guildId(publish[15]).findVibegrationChannelId(guildId, applicationId),
    items2,
  );
  let intl = guildId(publish[20]).intl;
  obj = { channel: trimmed };
  const diff =
    applicationId(publish[16])() - "\n\n" + intl.formatToPlainString(applicationId(publish[21]).bhoZhI, obj).length;
  let obj3 = stateFromStores1;
  ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  const tmp6 = applicationId(publish[16])();
  [tmp10, c7] = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp11 = stateFromStores(
    stateFromStores1.useState(() => {
      const Storage = guildId(publish[17]).Storage;
      const value = Storage.get(combined1);
      let tmp2;
      if (value != null) {
        tmp2 = value[closure_0];
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
  callback = stateFromStores1.useRef(false);
  closure_16 = stateFromStores1.useRef(null != first);
  const items3 = [publish];
  const effect = stateFromStores1.useEffect(() => {
    c0 = false;
    publish.then(
      () => {
        if (!c0) {
          closure_1_7("succeeded");
        }
      },
      () => {
        if (!c0) {
          closure_1_7("failed");
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
      callback(stateFromStores1);
    }
  }, items4);
  const items5 = [initialDraft];
  const effect2 = stateFromStores1.useEffect(() => {
    c0 = false;
    initialDraft.then(
      (ok) => {
        if (!c0) {
          closure_1_11(false);
          if (true !== ok.ok) {
            closure_1_12(true);
          } else {
            let current = null == ok.notes;
            if (!current) {
              current = "" === ok.notes;
            }
            if (!current) {
              current = closure_1_15.current;
            }
            if (!current) {
              const notes = ok.notes;
              closure_1_10(notes.slice(0, closure_1_6.current));
            }
          }
        }
      },
      () => {
        if (!c0) {
          closure_1_11(false);
          closure_1_12(true);
        }
      },
    );
    return () => {
      c0 = true;
    };
  }, items5);
  found = null;
  callback = stateFromStores1.useCallback((arg0) => {
    closure_15.current = true;
    _undefined3(false);
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
    obj = { channel: null };
    obj[0] = combined;
    const _HermesInternal2 = HermesInternal;
    combined1 = "\n\n" + intl2.formatToPlainString(tmp(tmp2[21]).bhoZhI, obj);
  }
  const items6 = [stateFromStores, guildId, found];
  const callback1 = obj3.useCallback(() => {
    let obj = guildId(publish[18]);
    obj = { content: null, key: "VibegrationsPatchNotesChannelSheet", stackingBehavior: "stack" };
    obj = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
    obj1 = { title: null };
    const intl = guildId(publish[20]).intl;
    obj1[0] = intl.string(applicationId(publish[21]).IcSdnu);
    obj[0] = obj1;
    obj[1] = _undefined.getGuild(guildId);
    obj[2] = stateFromStores;
    obj[3] = found;
    obj[4] = function onSelect(id) {
      closure_16.current = true;
      callback(id.id);
    };
    obj[0] = callback2(applicationId(publish[19]), obj);
    obj.showActionSheet(obj);
  }, items6);
  callback2 = obj3.useCallback(() => {
    applicationId(publish[18]).hideActionSheet(found);
  }, []);
  const items7 = [stateFromStores1, guildId, callback2];
  const callback3 = obj3.useCallback(() => {
    if (null == stateFromStores1) {
      let CHANNELResult = _undefined2.CHANNEL(guildId);
    } else {
      CHANNELResult = _undefined2.CHANNEL(guildId, tmp);
    }
    guildId(publish[22]).transitionTo(CHANNELResult);
    callback2();
  }, items7);
  const items8 = [found, trimmed, combined1, guildId, callback2];
  const callback4 = obj3.useCallback(
    initialDraft(function* () {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let ok = tmp7;
              ok = undefined;
              if (null != closure_1_17) {
                if ("" !== closure_1_18) {
                  closure_1_13(true);
                  closure_1_14(false);
                  dependencyMap = 1;
                  let obj2 = closure_1_1(7682);
                  let combined = tmp30;
                  if (null != closure_1_19) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + tmp30 + tmp38;
                  }
                  const parsed = obj2.parse(closure_1_17, combined);
                  const tmp35Result = closure_1_1(7456);
                  obj1 = { location: null };
                  obj1[0] = closure_1_14.VIBEGRATIONS_PATCH_NOTES;
                  c3 = 2;
                  c4 = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = tmp35Result.sendMessage(closure_1_17.id, parsed, false, obj1);
                  return obj2;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              callback2(true);
              callback(false);
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              ok = arg1;
              ok = undefined;
              if (ok != null) {
                ok = ok.ok;
              }
              if (false !== ok) {
                const Storage = closure_1_0(510).Storage;
                obj = {};
                const Storage2 = closure_1_0(510).Storage;
                const merged = Object.assign(Storage2.get(closure_1_19));
                obj[ok] = id.id;
                const result = Storage.set(closure_1_19, obj);
                callback3();
                dependencyMap = 0;
              }
            }
            const _Error = Error;
            error = new Error("send failed");
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
  obj2[0] = intl3.formatToPlainString(applicationId(publish[21]).gOv8LL, { projectName });
  obj1[1] = callback(guildId(publish[26]).BottomSheetTitleHeader, obj2);
  obj3 = { style: tmp3.container, children: null };
  const obj4 = { style: tmp3.section, children: null };
  const obj5 = { variant: "heading-md/semibold", color: "text-default", children: null };
  const intl4 = tmp4(tmp2[20]).intl;
  obj5[2] = intl4.string(applicationId(publish[21]).tqtMyS);
  const items9 = [callback(guildId(publish[27]).Text, obj5)];
  if ("publishing" === tmp10) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp3.statusRow;
    const items10 = [tmp32(ref, { size: "small" })];
    const obj7 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl8 = tmp4(tmp2[20]).intl;
    const obj8 = { projectName: null };
    obj8[0] = projectName;
    obj7[2] = intl8.formatToPlainString(tmp(tmp2[21]).g5fncX, obj8);
    items10[1] = tmp32(tmp4(tmp2[27]).Text, obj7);
    obj6[1] = items10;
    let tmp32Result = tmp33(tmp34, obj6);
  } else {
    if ("succeeded" === tmp10) {
      const obj9 = { variant: "text-md/medium", color: "text-feedback-positive", children: null };
      const intl6 = tmp4(tmp2[20]).intl;
      const obj10 = { projectName: null, link: null, onNavigate: null };
      obj10[0] = projectName;
      const intl7 = tmp4(tmp2[20]).intl;
      obj10[1] = intl7.string(tmp4(tmp2[20]).t.jVcuVY);
      obj10[2] = callback3;
      obj9[2] = intl6.format(tmp(tmp2[21]).MsXuP8, obj10);
      let obj11 = obj9;
    } else {
      obj11 = { variant: "text-md/medium", color: "text-feedback-critical", children: null };
      const intl5 = tmp4(tmp2[20]).intl;
      obj11[2] = intl5.string(tmp(tmp2[21]).fNP6Cd);
    }
    tmp32Result = tmp32(tmp4(tmp2[27]).Text, obj11);
  }
  items9[1] = tmp32Result;
  obj4[1] = items9;
  const items11 = [closure_16(c7, obj4), ,];
  let tmp33Result = null;
  if (stateFromStores.length > 0) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp3.notesSection;
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
    obj13[0] = intl9.string(tmp(tmp2[21]).oouynk);
    const intl10 = tmp4(tmp2[20]).intl;
    const tmpResult = tmp(tmp2[21]);
    obj13[1] = intl10.string(tmp14[0] ? tmpResult.VQhlkB : tmpResult.xkxDN1);
    let stringResult;
    if (tmp16) {
      const intl11 = tmp4(tmp2[20]).intl;
      stringResult = intl11.string(tmp(tmp2[21]).PCST1n);
    }
    obj13[2] = stringResult;
    let stringResult1;
    if (tmp20) {
      const intl12 = tmp4(tmp2[20]).intl;
      stringResult1 = intl12.string(tmp(tmp2[21]).P6SoGm);
    }
    obj13[3] = stringResult1;
    obj13[4] = diff;
    obj13[5] = str;
    obj13[6] = callback;
    obj13[7] = tmp18;
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
    const obj14 = { channel: null, onPick: null };
    obj14[0] = combined2;
    let fn = callback1;
    if (tmp18) {
      fn = () => {};
    }
    const obj15 = { variant: "text-md/medium", color: "text-subtle", children: null };
    obj14[1] = fn;
    obj15[2] = intl13.format(tmp(tmp2[21]).unJ01l, obj14);
    items12[1] = tmp32(tmp4(tmp2[27]).Text, obj15);
    obj12[1] = items12;
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
    callback(guildId(publish[30]).Button, {
      variant: "tertiary",
      grow: true,
      text: intl15.string(NmaE9T),
      onPress: callback2,
    }),
  ];
  const obj18 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl16 = tmp4(tmp2[20]).intl;
  obj18[2] = intl16.string(applicationId(publish[21]).dx7eQG);
  obj18[3] = tmp18;
  obj18[4] = "succeeded" !== tmp10 || "" === trimmed || trimmed.length > diff || null == found || tmp18;
  obj18[5] = callback4;
  items13[1] = callback(guildId(publish[30]).Button, obj18);
  obj16[1] = items13;
  items11[2] = closure_16(c7, obj16);
  obj3[1] = items11;
  obj1[2] = closure_16(c7, obj3);
  return callback(guildId(publish[25]).ActionSheet, obj1);
}
export const VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY = "VibegrationsPublishNotesSheet";
