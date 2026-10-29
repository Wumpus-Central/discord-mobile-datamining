// === Module 12474: useConjurePatchNotesComposer ===

// Module 12474 (useConjurePatchNotesComposer)
import ConjureUtils from "ConjureUtils" /* 7405 */;
import ConjurePatchNotesChannel from "ConjurePatchNotesChannel" /* 12475 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4935 */;

const require = globalThis.__r;

require = fn;
let closure_7 = fn(4935).GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = fn(5010).MessageSendLocation;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePatchNotesComposer.tsx");

export default function useConjurePatchNotesComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  let guildId = projectId.guildId;
  const applicationId = projectId.applicationId;
  let publishedRevision = projectId.publishedRevision;
  const applyDraft = projectId.applyDraft;
  c11 = undefined;
  c14 = undefined;
  let ref;
  c18 = undefined;
  const items = [ref];
  const items1 = [guildId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    found = GuildChannelStore.getChannels(guildId)[closure_7].filter((channel) => {
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
  }, items1);
  let obj = require("initialize");
  const tmp = _require;
  let tmp2 = applicationId;
  const items2 = [ref];
  const items3 = [guildId, applicationId];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => ConjureUtils.findConjureChannelId(guildId, applicationId), items3);
  let obj2 = require("initialize");
  const tmp4 = guildId(applicationId[7])();
  const diff = tmp4 - require("ConjurePatchNotesChannel").formatPlaySuffix(require("ConjurePatchNotesChannel").PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  ref = stateFromStores.useRef(diff);
  ref.current = diff;
  const ref1 = stateFromStores.useRef(applyDraft);
  ref1.current = applyDraft;
  const tmp8 = stateFromStoresArray(stateFromStores.useState(() => {
    const result = ConjurePatchNotesChannel.lastPatchNotesChannel(applicationId);
    closure_0 = result;
    let tmp2 = null;
    if (null != result) {
      tmp2 = null;
      if (stateFromStoresArray.some((id) => id.id === result)) {
        tmp2 = result;
      }
    }
    return tmp2;
  }), 2);
  const first = tmp8[0];
  closure_9 = tmp8[1];
  const tmp10 = stateFromStoresArray(stateFromStores.useState(true), 2);
  closure_10 = tmp10[1];
  let obj3 = require("ConjurePatchNotesChannel");
  let obj4 = stateFromStores;
  [tmp12, c11] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp13 = stateFromStoresArray(stateFromStores.useState(undefined), 2);
  const first1 = tmp13[0];
  closure_13 = tmp13[1];
  const tmp11 = stateFromStoresArray(stateFromStores.useState(false), 2);
  [tmp16, c14] = stateFromStoresArray(stateFromStores.useState(false), 2);
  closure_15 = stateFromStores.useRef(false);
  ref = stateFromStores.useRef(null != first);
  const items4 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_9(stateFromStores);
    }
  }, items4);
  const items5 = [projectId];
  const effect1 = stateFromStores.useEffect(() => {
    closure_1 = async function _loadDraft() {
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
          return { value: "IconComponent", done: "IconComponent" };
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
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: closure_2_0(applicationId[9]).draftPatchNotes(closure_0), done: false };
              return obj5;
            }
          } else if (1 === tmp7) {
            c2 = 0;
            if (closure_129_0.cancelled) {
              c4 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else {
              closure_1_10(false);
              closure_1_11(true);
              c4 = 3;
              const obj6 = { value: undefined, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            c2 = 0;
            if (closure_129_0.cancelled) {
              c4 = 3;
            } else {
              closure_1_10(false);
              closure_1_13(closure_128_0.source_sha);
              if (true === closure_128_0.ok) {
                let current = null == closure_128_0.notes;
                if (!current) {
                  current = "" === closure_128_0.notes;
                }
                if (!current) {
                  current = ref3.current;
                }
                if (!current) {
                  const notes = closure_128_0.notes;
                  ref2.current(notes.slice(0, ref.current));
                }
              }
            }
            closure_1_11(true);
          }
        } catch (tmp41) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp41;
          } else {
            c3 = tmp;
          }
        }
      }
    };
    closure_0 = { cancelled: false };
    (function loadDraft() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      closure_0.cancelled = true;
    };
  }, items5);
  const callback = stateFromStores.useCallback(() => {
    closure_15.current = true;
  }, []);
  let found = null;
  const callback1 = stateFromStores.useCallback((arg0) => {
    closure_16.current = true;
    closure_9(arg0);
  }, []);
  if (null != first) {
    found = stateFromStoresArray.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  let formatPlaySuffixResult = null;
  if (null != stateFromStores) {
    let _HermesInternal = HermesInternal;
    formatPlaySuffixResult = tmp(tmp2[8]).formatPlaySuffix("<#" + stateFromStores + ">");
    const tmpResult = tmp(tmp2[8]);
  }
  c18 = formatPlaySuffixResult;
  _require = publishedRevision(function*(arg0) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            guildId = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            if (null != user) {
              if ("" !== closure_0) {
                _undefined(true);
                publishedRevision = 1;
                let combined = closure_0;
                if (null != closure_1_18) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + closure_0 + tmp60;
                }
                const parsed = guildId(applicationId[10]).parse(user, combined);
                const tmp57Result = guildId(applicationId[11]);
                const obj4 = { location: first.CONJURE_PATCH_NOTES };
                c4 = 2;
                c5 = 1;
                const obj5 = { value: tmp57Result.sendMessage(user.id, parsed, false, obj4), done: false };
                return obj5;
              }
            }
            c5 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp7) {
          publishedRevision = 0;
          _undefined(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          publishedRevision = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_0 = value;
          let ok;
          if (closure_129_0 != null) {
            ok = closure_129_0.ok;
          }
          if (false === ok) {
            const _Error = Error;
            const error = new Error("send failed");
            throw error;
          } else {
            const result = closure_0(applicationId[8]).rememberPatchNotesChannel(closure_2, user.id);
            let id;
            if (closure_129_0 != null) {
              const body = closure_129_0.body;
              if (body != null) {
                id = body.id;
              }
            }
            closure_129_1 = id;
            if (null != closure_129_1) {
              const obj7 = { publishedRevision, guildId, channelId: user.id, messageId: closure_129_1 };
              closure_0(applicationId[9]).recordPatchNotesSent(closure_0, obj7, first1);
              const obj = closure_0(applicationId[9]);
            }
            publishedRevision = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        }
      } catch (tmp37) {
        if (tmp4 === publishedRevision) {
          c5 = tmp2;
          throw tmp37;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const items6 = [found, formatPlaySuffixResult, applicationId, projectId, publishedRevision, guildId, first1];
  const tmp15 = stateFromStoresArray(stateFromStores.useState(false), 2);
  return {
    channels: stateFromStoresArray,
    selectedChannel: found,
    pickChannel: callback1,
    maxNotesLength: diff,
    drafting: tmp10[0],
    draftFailed: tmp12,
    sending: tmp16,
    markEdited: callback,
    send: obj4.useCallback(function(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items6)
  };
};