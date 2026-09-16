// === Module 12140: AddMediaToOriginalForumPostActionSheet ===

// Module 12140 (AddMediaToOriginalForumPostActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5223 */;
import tracking_Tracking from "tracking/Tracking" /* 7881 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import MessageStore from "MessageStore" /* 4859 */;

require = fn;
let closure_16 = async function _upload2(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp4;
          const analyticsLocations = tmp9;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          ({ threadId: closure_132_0, attachments: closure_132_1, setIsUploading: closure_132_2, guild: closure_132_3, analyticsLocations: closure_132_4 } = closure_0);
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const tmp119 = new closure_133_1(closure_133_2[12])();
          closure_132_5 = tmp119;
          closure_132_5.on("start", () => {
            dependencyMap(true);
          });
          closure_132_5.on("progress", (currentSize) => {
            const kestrelConfig = closure_0(5265).getKestrelConfig({ location: "native.AddMediaToOriginalForumPostActionSheet" });
            const obj = closure_0(5265);
            const maxFileSizeResult = closure_0(5219).maxFileSize(id.id);
            const obj2 = closure_0(5219);
            const effectiveKestrelLimit = closure_0(5265).getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
            if (currentSize.currentSize > effectiveKestrelLimit) {
              closure_1_5.cancel();
              dependencyMap(false);
              closure_1(4605).hideActionSheet();
              const obj5 = { file: currentSize, maxSize: effectiveKestrelLimit, baseMaxSize: maxFileSizeResult, guildId: id.id, analyticsLocations };
              closure_1(9453)(obj5);
              const obj4 = closure_1(4605);
            }
            const obj3 = closure_0(5265);
          });
          closure_132_5.on("error", () => {
            dependencyMap(false);
            closure_1(4605).hideActionSheet();
          });
          closure_132_5.on("complete", () => {
            dependencyMap(false);
            closure_1(9450).clearAll(closure_1_0, ChannelMessage.ChannelMessage);
            const obj = closure_1(9450);
            closure_1(4605).hideActionSheet();
          });
          const messages = closure_133_10.getMessages(closure_132_0);
          closure_132_7 = messages.get(closure_133_1(closure_133_2[18]).castChannelIdAsMessageId(closure_132_0));
          if (null != closure_132_7) {
            let attachments = closure_132_7.attachments;
          } else {
            attachments = [];
          }
          closure_132_8 = attachments;
          c7 = 1;
          closure_132_5.uploadFiles(closure_132_1);
          c8 = 4;
          c9 = 1;
          const obj24 = closure_133_1(closure_133_2[18]);
        }
      } else if (2 === tmp9) {
        c7 = 0;
        closure_132_11 = closure_6;
        closure_132_2(false);
        closure_133_1(closure_133_2[15]).hideActionSheet();
        const obj11 = closure_133_1(closure_133_2[15]);
        const obj8 = { file: closure_132_11.file, guildId: closure_132_3.id, analyticsLocations: closure_132_4, code: closure_132_11.code, reason: closure_132_11.reason };
        const result = closure_133_0(closure_133_2[20]).handleUploadMessageAttachmentsErrors(obj8);
        c9 = 3;
        const obj10 = { value: undefined, done: true };
        return obj10;
      } else if (3 === tmp9) {
        c7 = 0;
        closure_132_2(false);
        closure_133_1(closure_133_2[15]).hideActionSheet();
        c9 = 3;
        const obj13 = { value: undefined, done: true };
        return obj13;
      } else if (4 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_132_9 = value;
          closure_1 = 0;
          const items = [];
          closure_1 = HermesBuiltin.arraySpread(closure_132_8, 0);
          const mapped = closure_132_9.map((item, index) => closure_1_0(5214).getAttachmentPayload(item, index));
          dependencyMap = mapped;
          if (mapped == null) {
            dependencyMap = [];
          }
          closure_1 = HermesBuiltin.arraySpread(dependencyMap, closure_1);
          closure_132_6 = items;
          c7 = 2;
          c8 = 6;
          c9 = 1;
          const obj15 = { value: closure_133_1(closure_133_2[21]).unarchiveThreadIfNecessary(closure_132_0), done: false };
          return obj15;
        }
      } else {
        if (5 === tmp9) {
          c7 = 0;
          closure_132_12 = closure_6;
          closure_132_2(false);
          closure_133_1(closure_133_2[15]).hideActionSheet();
          const tmp24 = new closure_133_1(closure_133_2[23])(closure_132_12);
          closure_132_10 = tmp24;
          if (closure_132_10.code === closure_133_11.EXPLICIT_CONTENT) {
            const result1 = closure_133_1(closure_133_2[24]).sendExplicitMediaClydeError(closure_132_0, closure_132_10.attachments, closure_133_0(closure_133_2[25]).TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED);
            let obj5 = closure_133_1(closure_133_2[24]);
          } else {
            const obj16 = { title: null, body: null };
            const intl = closure_133_0(closure_133_2[27]).intl;
            obj16.title = intl.string(closure_133_0(closure_133_2[27]).t.B3vFdU);
            const anyErrorMessage = closure_132_10.getAnyErrorMessage();
            let message = anyErrorMessage;
            if (anyErrorMessage == null) {
              message = closure_132_10.message;
            }
            obj16.body = message;
            closure_133_1(closure_133_2[26]).show(obj16);
            const obj21 = closure_133_1(closure_133_2[26]);
          }
          c9 = 3;
          let obj4 = closure_133_1(closure_133_2[15]);
        } else if (6 === tmp9) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            c7 = 3;
            const HTTP = closure_133_0(closure_133_2[22]).HTTP;
            const request = { url: closure_133_12.MESSAGE(closure_132_0, closure_133_1(closure_133_2[18]).castChannelIdAsMessageId(closure_132_0)), body: null, rejectWithError: true };
            const obj18 = { attachments: closure_132_6 };
            request.body = obj18;
            c8 = 7;
            c9 = 1;
            const obj20 = { value: HTTP.patch(request), done: false };
            return obj20;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c7 = 0;
        }
        c7 = 0;
        c9 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp80) {
      closure_6 = tmp80;
      if (tmp5 === c7) {
        c9 = tmp3;
        throw tmp80;
      } else if (tmp2 === tmp82) {
        c8 = tmp;
      } else if (tmp === tmp82) {
        c8 = tmp3;
      } else {
        c8 = tmp6;
      }
    }
  }
};
const View = fn(17).View;
const DraftType = fn(4979).DraftType;
const Constants = fn(1074);
({ AbortCodes: closure_11, Endpoints: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { paddingHorizontal: 16, paddingTop: 24 }, post: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, marginBottom: 32, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 }, postContent: { marginBottom: 0, padding: 8 }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 32 }, button: null, buttonMargin: null };
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, marginBottom: 32, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
obj2.button = { borderRadius: nativeDefault.radii.sm };
obj2.buttonMargin = { marginBottom: 10 };
let closure_15 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx");

export default function AddMediaToOriginalForumPostActionSheet(threadId) {
  threadId = threadId.threadId;
  const attachments = threadId.attachments;
  const sendMessage = threadId.sendMessage;
  _slicedToArray = undefined;
  let stateFromStores1;
  let analyticsLocations;
  c8 = undefined;
  const tmp = closure_15();
  [tmp3, c3] = stateFromStores1.useState(false);
  const tmp2 = _slicedToArray(stateFromStores1.useState(false), 2);
  const items = [analyticsLocations];
  const items1 = [threadId];
  const stateFromStores = threadId(sendMessage[28]).useStateFromStores(items, () => ChannelStore.getChannel(threadId), items1);
  let obj = threadId(sendMessage[28]);
  const items2 = [GuildStore];
  const items3 = [stateFromStores];
  stateFromStores1 = threadId(sendMessage[28]).useStateFromStores(items2, () => {
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  }, items3);
  let obj2 = threadId(sendMessage[28]);
  const items4 = [MessageStore];
  const items5 = [threadId];
  const stateFromStores2 = threadId(sendMessage[28]).useStateFromStores(items4, () => MessageStore.getMessage(threadId, SnowflakeUtilsDefault.castChannelIdAsMessageId(threadId)), items5);
  analyticsLocations = attachments(sendMessage[29])().analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  const callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          const result = tracking_Tracking.trackForumAddMediaToOriginalPostClicked({ added: true });
          const obj3 = { threadId, attachments, setIsUploading, guild: tmp2, analyticsLocations };
          (function _upload() {
            const self = this;
            const apply = closure_1_16.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(obj3);
        }
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items6);
  const callback1 = stateFromStores1.useCallback(() => {
    const result = tracking_Tracking.trackForumAddMediaToOriginalPostClicked({ added: false });
    ActionSheetActionCreatorsDefault.hideActionSheet();
    sendMessage();
  }, items7);
  let obj3 = threadId(sendMessage[28]);
  [tmp12, c8] = stateFromStores1.useState(null);
  const items8 = [attachments];
  const effect = stateFromStores1.useEffect(() => {
    if (null != attachments[0]) {
      const fileInfo = utils_UploadUtils.getFileInfo(tmp[0]);
      fileInfo.then((uri) => closure_1_8(uri.uri));
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
      const size = { src: tmp12, width: null, height: null, spoiler: null, alt: null };
      ({ width: obj4.width, height: obj4.height } = item);
      size.spoiler = attachments[0].spoiler;
      size.alt = attachments[0].description;
      tmp16 = size;
    }
  }
  const obj5 = { startExpanded: true, children: null };
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { pointerEvents: "none", style: tmp.post, children: closure_13(threadId(sendMessage[33]).ForumPostListDisabled, { threadId, localDeviceMedia: tmp16, style: tmp.postContent }) };
  const items9 = [closure_13(stateFromStores2, obj7), , , , , ];
  const obj9 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(tmp5[27]).intl;
  obj9.children = intl.string(threadId(sendMessage[27]).t["+SZF6S"]);
  items9[1] = closure_13(threadId(sendMessage[34]).Text, obj9);
  const obj10 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp4(tmp5[27]).intl;
  obj10.children = intl2.string(threadId(sendMessage[27]).t["0Ycgw5"]);
  items9[2] = closure_13(threadId(sendMessage[34]).Text, obj10);
  const obj11 = { style: tmp.buttonMargin, children: null };
  const obj12 = { grow: true, variant: "primary", text: null, pillStyle: null, onPress: null, loading: null, disabled: null };
  const intl3 = tmp4(tmp5[27]).intl;
  obj12.text = intl3.string(threadId(sendMessage[27]).t.d611xH);
  obj12.pillStyle = tmp.button;
  obj12.onPress = callback;
  obj12.loading = tmp3;
  obj12.disabled = tmp3;
  obj11.children = closure_13(threadId(sendMessage[35]).BaseTextButton, obj12);
  items9[3] = closure_13(stateFromStores2, obj11);
  const obj13 = { style: tmp.buttonMargin, children: null };
  const obj14 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl4 = tmp4(tmp5[27]).intl;
  obj14.text = intl4.string(threadId(sendMessage[27]).t["8rKVHL"]);
  obj14.pillStyle = tmp.button;
  obj14.onPress = callback1;
  obj14.disabled = tmp3;
  obj13.children = closure_13(threadId(sendMessage[35]).BaseTextButton, obj14);
  items9[4] = closure_13(stateFromStores2, obj13);
  const obj15 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl5 = tmp4(tmp5[27]).intl;
  obj15.text = intl5.string(threadId(sendMessage[27]).t["ETE/oC"]);
  obj15.pillStyle = tmp.button;
  obj15.onPress = function onPress() {
    return attachments(sendMessage[15]).hideActionSheet();
  };
  obj15.disabled = tmp3;
  items9[5] = closure_13(threadId(sendMessage[35]).BaseTextButton, obj15);
  obj6.children = items9;
  obj5.children = closure_14(stateFromStores2, obj6);
  return closure_13(threadId(sendMessage[32]).BottomSheet, obj5);
};