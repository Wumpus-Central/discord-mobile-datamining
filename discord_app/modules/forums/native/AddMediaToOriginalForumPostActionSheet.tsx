// === Module 11174: _upload2 ===

// Module 11174 (_upload2)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import { DraftType } from "handleChanged" /* 4825 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "reinjectEphemerals" /* 4994 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function _upload2() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    let attachments = 0;
    c9 = 0;
    closure_7 = 0;
    const iter = (function*(arg0) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c5 = tmp4;
              c4 = tmp9;
              let callback;
              let callback2;
              dependencyMap = undefined;
              message = undefined;
              c4 = undefined;
              onResult = callback;
              ({ threadId: c0, attachments: closure_1, setIsUploading: closure_2, guild: message, analyticsLocations: c4 } = callback);
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              let store;
              c8 = 1;
              c9 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              onResult = c4;
              onResult = c5;
              onResult = callback2;
              onResult = dependencyMap;
              onResult = new.target;
              onResult = new.target;
              onResult = new callback2(7583)();
              onResult = onResult.on("start", () => {
                dependencyMap(true);
              });
              onResult = onResult.on("progress", (currentSize) => {
                let obj = _undefined(4876);
                const kestrelConfig = obj.getKestrelConfig({ location: "native.AddMediaToOriginalForumPostActionSheet" });
                const maxFileSizeResult = _undefined(4834).maxFileSize(message.id);
                const obj2 = _undefined(4834);
                const tmp3 = message;
                const effectiveKestrelLimit = _undefined(4876).getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
                if (currentSize.currentSize > effectiveKestrelLimit) {
                  _undefined2.cancel();
                  dependencyMap(false);
                  callback(4342).hideActionSheet();
                  obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null };
                  obj[0] = currentSize;
                  obj[1] = effectiveKestrelLimit;
                  obj[2] = maxFileSizeResult;
                  obj[3] = tmp3.id;
                  obj[4] = c4;
                  callback(8468)(obj);
                  const obj4 = callback(4342);
                }
              });
              onResult = onResult.on("error", () => {
                dependencyMap(false);
                callback(4342).hideActionSheet();
              });
              onResult = onResult.on("complete", () => {
                dependencyMap(false);
                callback(8466).clearAll(c0, ChannelMessage.ChannelMessage);
                const obj = callback(8466);
                callback(4342).hideActionSheet();
              });
              onResult = store;
              onResult = callback;
              const messages = store.getMessages(callback);
              onResult = callback2;
              onResult = dependencyMap;
              onResult = callback;
              attachments = messages.get(callback2(11).castChannelIdAsMessageId(callback));
              onResult = attachments;
              if (null != attachments) {
                attachments = attachments.attachments;
              } else {
                attachments = [];
              }
              c7 = 1;
              onResult.uploadFiles(closure_1_1);
              c8 = 4;
              c9 = 1;
              const obj24 = callback2(11);
            }
          } else if (2 === tmp9) {
            c7 = 0;
            closure_11 = c6;
            dependencyMap(false);
            let obj10 = closure_1_1(closure_1_2[15]);
            obj10.hideActionSheet();
            let obj11 = callback(closure_1_2[20]);
            let obj2 = { file: null, guildId: null, analyticsLocations: null, code: null, reason: null };
            obj2[0] = closure_11.file;
            obj2[1] = message.id;
            obj2[2] = c4;
            obj2[3] = closure_11.code;
            obj2[4] = closure_11.reason;
            const result = obj11.handleUploadMessageAttachmentsErrors(obj2);
            c9 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = undefined;
            return obj3;
          } else if (3 === tmp9) {
            c7 = 0;
            dependencyMap(false);
            let obj8 = closure_1_1(closure_1_2[15]);
            obj8.hideActionSheet();
            c9 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = undefined;
            return obj4;
          } else if (4 === tmp9) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              onResult = c4;
              c9 = arg1;
              callback2 = 0;
              onResult = c8;
              items = [];
              onResult = items;
              callback2 = HermesBuiltin.arraySpread(c8, 0);
              onResult = c9;
              onResult = c9.map((closure_0, closure_1) => _undefined(4830).getAttachmentPayload(closure_0, closure_1));
              dependencyMap = onResult;
              if (onResult == null) {
                dependencyMap = [];
              }
              callback2 = HermesBuiltin.arraySpread(dependencyMap, callback2);
              c7 = 2;
              obj5 = callback2(7512);
              c8 = 6;
              c9 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj5.unarchiveThreadIfNecessary(callback);
              return obj6;
            }
          } else {
            if (5 === tmp9) {
              c7 = 0;
              closure_12 = c6;
              dependencyMap(false);
              obj3 = callback2(4342);
              obj3.hideActionSheet();
              const tmp24 = new callback2(11175)(closure_12);
              store = tmp24;
              if (store.code === closure_11.EXPLICIT_CONTENT) {
                obj4 = callback2(7427);
                const result1 = obj4.sendExplicitMediaClydeError(callback, store.attachments, callback(5001).TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED);
              } else {
                onResult = c5;
                onResult = callback2;
                onResult = dependencyMap;
                const obj7 = { title: null, body: null };
                onResult = callback;
                onResult = dependencyMap;
                const intl = callback(1236).intl;
                onResult = callback;
                onResult = dependencyMap;
                obj7[0] = intl.string(callback(1236).t.B3vFdU);
                onResult = store;
                onResult = store.getAnyErrorMessage();
                message = onResult;
                if (onResult == null) {
                  message = store.message;
                }
                obj7[1] = message;
                callback2(4656).show(obj7);
                const obj21 = callback2(4656);
              }
              c9 = 3;
            } else if (6 === tmp9) {
              if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                c7 = 3;
                const HTTP = callback(530).HTTP;
                const obj9 = { url: null, body: null, rejectWithError: true };
                obj9[0] = closure_12.MESSAGE(callback, callback2(11).castChannelIdAsMessageId(callback));
                obj10 = { attachments: null };
                obj10[0] = c6;
                obj9[1] = obj10;
                c8 = 7;
                c9 = 1;
                obj11 = { value: null, done: false };
                obj11[0] = HTTP.patch(obj9);
                return obj11;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c7 = 0;
            }
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp80) {
          c6 = tmp80;
          if (tmp5 === c7) {
            c9 = tmp3;
            throw tmp80;
          } else if (tmp2 === tmp82) {
            c8 = onResult;
          } else if (onResult === tmp82) {
            c8 = tmp3;
          } else {
            c8 = tmp6;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: unpackModuleId, Endpoints: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: { paddingHorizontal: 16, paddingTop: 24 }, post: null, postContent: null, title: null, description: null, button: null, buttonMargin: null };
createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, marginBottom: 32, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 0, padding: 8 };
createCacheKey[3] = { textAlign: "center", marginBottom: 8 };
createCacheKey[4] = { textAlign: "center", marginBottom: 32 };
createCacheKey[5] = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { marginBottom: 10 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.sm };
let result = require("set").fileFinishedImporting("modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx");

export default function AddMediaToOriginalForumPostActionSheet(threadId) {
  threadId = threadId.threadId;
  const attachments = threadId.attachments;
  const sendMessage = threadId.sendMessage;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let analyticsLocations;
  c8 = undefined;
  const tmp = callback5();
  [tmp3, c3] = callback(stateFromStores1.useState(false), 2);
  let obj = threadId(sendMessage[28]);
  const items = [analyticsLocations];
  const items1 = [threadId];
  stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(threadId), items1);
  obj1 = threadId(sendMessage[28]);
  const items2 = [closure_9];
  const items3 = [stateFromStores];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return closure_1_9.getGuild(guildId);
  }, items3);
  let obj2 = threadId(sendMessage[28]);
  const items4 = [closure_10];
  const items5 = [threadId];
  stateFromStores2 = obj2.useStateFromStores(items4, () => closure_1_10.getMessage(threadId, attachments(sendMessage[18]).castChannelIdAsMessageId(threadId)), items5);
  analyticsLocations = attachments(sendMessage[29])().analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked({ added: true });
          let obj = { threadId: null, attachments: null, setIsUploading: null, guild: null, analyticsLocations: null };
          obj[0] = threadId;
          obj[1] = attachments;
          obj[2] = c3;
          obj[3] = tmp2;
          obj[4] = analyticsLocations;
          (function _upload(arg0) {
            const self = this;
            const apply = closure_16.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(obj);
          const obj2 = threadId(sendMessage[30]);
        }
      }
    }
    obj = attachments(sendMessage[15]);
    obj.hideActionSheet();
  }, items6);
  const callback1 = stateFromStores1.useCallback(() => {
    const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked({ added: false });
    const obj = threadId(sendMessage[30]);
    attachments(sendMessage[15]).hideActionSheet();
    sendMessage();
  }, items7);
  const tmp2 = callback(stateFromStores1.useState(false), 2);
  [tmp12, c8] = callback(stateFromStores1.useState(null), 2);
  const items8 = [attachments];
  const effect = stateFromStores1.useEffect(() => {
    if (null != attachments[0]) {
      const fileInfo = threadId(sendMessage[31]).getFileInfo(tmp[0]);
      fileInfo.then((uri) => callback(uri.uri));
      const obj = threadId(sendMessage[31]);
    }
  }, items8);
  const first = attachments[0];
  let item;
  if (first != null) {
    item = first.item;
  }
  let tmp16;
  if (null != item) {
    if (null != tmp12) {
      obj = { src: null, width: null, height: null, spoiler: null, alt: null };
      obj[0] = tmp12;
      ({ width: obj4[1], height: obj4[2] } = item);
      obj[3] = attachments[0].spoiler;
      obj[4] = attachments[0].description;
      tmp16 = obj;
    }
  }
  obj = { startExpanded: true, children: null };
  obj1 = { style: tmp.container, children: null };
  obj2 = { pointerEvents: "none", style: tmp.post, children: callback3(tmp4(tmp5[33]).ForumPostListDisabled, obj3) };
  const items9 = [callback3(stateFromStores2, obj2), , , , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(tmp5[27]).intl;
  obj4[4] = intl.string(threadId(sendMessage[27]).t["+SZF6S"]);
  items9[1] = callback3(threadId(sendMessage[34]).Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp4(tmp5[27]).intl;
  obj5[3] = intl2.string(threadId(sendMessage[27]).t["0Ycgw5"]);
  items9[2] = callback3(threadId(sendMessage[34]).Text, obj5);
  const obj6 = { style: tmp.buttonMargin, children: null };
  const obj7 = { grow: true, variant: "primary", text: null, pillStyle: null, onPress: null, loading: null, disabled: null };
  const intl3 = tmp4(tmp5[27]).intl;
  obj7[2] = intl3.string(threadId(sendMessage[27]).t.d611xH);
  obj7[3] = tmp.button;
  obj7[4] = callback;
  obj7[5] = tmp3;
  obj7[6] = tmp3;
  obj6[1] = callback3(threadId(sendMessage[35]).BaseTextButton, obj7);
  items9[3] = callback3(stateFromStores2, obj6);
  const obj8 = { style: tmp.buttonMargin, children: null };
  const obj9 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl4 = tmp4(tmp5[27]).intl;
  obj9[2] = intl4.string(threadId(sendMessage[27]).t["8rKVHL"]);
  obj9[3] = tmp.button;
  obj9[4] = callback1;
  obj9[5] = tmp3;
  obj8[1] = callback3(threadId(sendMessage[35]).BaseTextButton, obj9);
  items9[4] = callback3(stateFromStores2, obj8);
  const obj10 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl5 = tmp4(tmp5[27]).intl;
  obj10[2] = intl5.string(threadId(sendMessage[27]).t["ETE/oC"]);
  obj10[3] = tmp.button;
  obj10[4] = function onPress() {
    return attachments(sendMessage[15]).hideActionSheet();
  };
  obj10[5] = tmp3;
  items9[5] = callback3(threadId(sendMessage[35]).BaseTextButton, obj10);
  obj1[1] = items9;
  obj[1] = callback4(stateFromStores2, obj1);
  return callback3(threadId(sendMessage[32]).BottomSheet, obj);
};