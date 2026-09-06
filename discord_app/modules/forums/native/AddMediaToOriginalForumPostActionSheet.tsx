// discord_app/modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";

require = fn;
let closure_16 = async function _upload2(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp4;
          const analyticsLocations = tmp9;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          ({
            threadId: closure_132_0,
            attachments: closure_132_1,
            setIsUploading: closure_132_2,
            guild: closure_132_3,
            analyticsLocations: closure_132_4,
          } = closure_0);
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const tmp119 = new closure_133_1(closure_133_2[12])();
          closure_132_5 = tmp119;
          closure_132_5.on("start", () => {
            dependencyMap(true);
          });
          closure_132_5.on("progress", (currentSize) => {
            let obj = closure_0(5179);
            const kestrelConfig = obj.getKestrelConfig({ location: "native.AddMediaToOriginalForumPostActionSheet" });
            const maxFileSizeResult = closure_0(5134).maxFileSize(id.id);
            const obj2 = closure_0(5134);
            const tmp3 = id;
            const effectiveKestrelLimit = closure_0(5179).getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
            if (currentSize.currentSize > effectiveKestrelLimit) {
              closure_1_5.cancel();
              dependencyMap(false);
              closure_1(4527).hideActionSheet();
              obj = {
                file: currentSize,
                maxSize: effectiveKestrelLimit,
                baseMaxSize: maxFileSizeResult,
                guildId: tmp3.id,
                analyticsLocations,
              };
              closure_1(9310)(obj);
              const obj4 = closure_1(4527);
            }
          });
          closure_132_5.on("error", () => {
            dependencyMap(false);
            closure_1(4527).hideActionSheet();
          });
          closure_132_5.on("complete", () => {
            dependencyMap(false);
            closure_1(9307).clearAll(closure_1_0, ChannelMessage.ChannelMessage);
            const obj = closure_1(9307);
            closure_1(4527).hideActionSheet();
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
        let obj10 = closure_133_1(closure_133_2[15]);
        obj10.hideActionSheet();
        let obj2 = {
          file: closure_132_11.file,
          guildId: closure_132_3.id,
          analyticsLocations: closure_132_4,
          code: closure_132_11.code,
          reason: closure_132_11.reason,
        };
        const result = closure_133_0(closure_133_2[20]).handleUploadMessageAttachmentsErrors(obj2);
        c9 = 3;
        let obj3 = { value: undefined, done: true };
        return obj3;
      } else if (3 === tmp9) {
        c7 = 0;
        closure_132_2(false);
        let obj8 = closure_133_1(closure_133_2[15]);
        obj8.hideActionSheet();
        c9 = 3;
        let obj4 = { value: undefined, done: true };
        return obj4;
      } else if (4 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_132_9 = value;
          closure_1 = 0;
          const items = [];
          closure_1 = HermesBuiltin.arraySpread(closure_132_8, 0);
          const mapped = closure_132_9.map((item, index) => closure_1_0(5129).getAttachmentPayload(item, index));
          dependencyMap = mapped;
          if (mapped == null) {
            dependencyMap = [];
          }
          closure_1 = HermesBuiltin.arraySpread(dependencyMap, closure_1);
          closure_132_6 = items;
          c7 = 2;
          obj5 = closure_133_1(closure_133_2[21]);
          c8 = 6;
          c9 = 1;
          const obj6 = { value: obj5.unarchiveThreadIfNecessary(closure_132_0), done: false };
          return obj6;
        }
      } else {
        if (5 === tmp9) {
          c7 = 0;
          closure_132_12 = closure_6;
          closure_132_2(false);
          obj3 = closure_133_1(closure_133_2[15]);
          obj3.hideActionSheet();
          const tmp24 = new closure_133_1(closure_133_2[23])(closure_132_12);
          closure_132_10 = tmp24;
          if (closure_132_10.code === closure_133_11.EXPLICIT_CONTENT) {
            obj4 = closure_133_1(closure_133_2[24]);
            const result1 = obj4.sendExplicitMediaClydeError(
              closure_132_0,
              closure_132_10.attachments,
              closure_133_0(closure_133_2[25]).TrackMediaRedactionContext
                .EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
            );
          } else {
            const obj7 = { title: null, body: null };
            const intl = closure_133_0(closure_133_2[27]).intl;
            obj7.title = intl.string(closure_133_0(closure_133_2[27]).t.B3vFdU);
            const anyErrorMessage = closure_132_10.getAnyErrorMessage();
            let message = anyErrorMessage;
            if (anyErrorMessage == null) {
              message = closure_132_10.message;
            }
            obj7.body = message;
            closure_133_1(closure_133_2[26]).show(obj7);
            const obj21 = closure_133_1(closure_133_2[26]);
          }
          c9 = 3;
        } else if (6 === tmp9) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj8 = { value, done: true };
            return obj8;
          } else {
            c7 = 3;
            const HTTP = closure_133_0(closure_133_2[22]).HTTP;
            const request = {
              url: closure_133_12.MESSAGE(
                closure_132_0,
                closure_133_1(closure_133_2[18]).castChannelIdAsMessageId(closure_132_0),
              ),
              body: null,
              rejectWithError: true,
            };
            const obj9 = { attachments: closure_132_6 };
            request.body = obj9;
            c8 = 7;
            c9 = 1;
            obj10 = { value: HTTP.patch(request), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c7 = 0;
        }
        c7 = 0;
        c9 = 3;
        obj = { value, done: true };
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
const DraftType = fn(4901).DraftType;
const Constants = fn(1074);
({ AbortCodes: closure_11, Endpoints: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: { paddingHorizontal: 16, paddingTop: 24 },
  post: null,
  postContent: null,
  title: null,
  description: null,
  button: null,
  buttonMargin: null,
};
createStyles = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  marginBottom: 32,
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
};
createStyles.post = createStyles;
createStyles.postContent = { marginBottom: 0, padding: 8 };
createStyles.title = { textAlign: "center", marginBottom: 8 };
createStyles.description = { textAlign: "center", marginBottom: 32 };
createStyles.button = { borderRadius: nativeDefault.radii.sm };
createStyles.buttonMargin = { marginBottom: 10 };
let closure_15 = createStyles.createStyles(createStyles);
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
  [tmp3, c3] = _slicedToArray(stateFromStores1.useState(false), 2);
  let obj = threadId(sendMessage[28]);
  const items = [analyticsLocations];
  const items1 = [threadId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId), items1);
  let obj1 = threadId(sendMessage[28]);
  const items2 = [GuildStore];
  const items3 = [stateFromStores];
  stateFromStores1 = obj1.useStateFromStores(
    items2,
    () => {
      let guildId;
      if (stateFromStores != null) {
        guildId = stateFromStores.getGuildId();
      }
      return GuildStore.getGuild(guildId);
    },
    items3,
  );
  let obj2 = threadId(sendMessage[28]);
  const items4 = [MessageStore];
  const items5 = [threadId];
  const stateFromStores2 = obj2.useStateFromStores(
    items4,
    () => MessageStore.getMessage(threadId, SnowflakeUtilsDefault.castChannelIdAsMessageId(threadId)),
    items5,
  );
  analyticsLocations = attachments(sendMessage[29])().analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  const callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          const result = tracking_Tracking.trackForumAddMediaToOriginalPostClicked({ added: true });
          let obj = { threadId, attachments, setIsUploading, guild: tmp2, analyticsLocations };
          (function _upload() {
            const self = this;
            const apply = closure_1_16.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(obj);
        }
      }
    }
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items6);
  const callback1 = stateFromStores1.useCallback(() => {
    const result = tracking_Tracking.trackForumAddMediaToOriginalPostClicked({ added: false });
    ActionSheetActionCreatorsDefault.hideActionSheet();
    sendMessage();
  }, items7);
  const tmp2 = _slicedToArray(stateFromStores1.useState(false), 2);
  [tmp12, c8] = _slicedToArray(stateFromStores1.useState(null), 2);
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
  obj = { startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { pointerEvents: "none", style: tmp.post, children: null };
  obj2 = { threadId, localDeviceMedia: tmp16, style: tmp.postContent };
  obj1.children = closure_13(threadId(sendMessage[33]).ForumPostListDisabled, obj2);
  const items9 = [closure_13(stateFromStores2, obj1), , , , ,];
  const obj3 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp4(tmp5[27]).intl;
  obj3.children = intl.string(threadId(sendMessage[27]).t["+SZF6S"]);
  items9[1] = closure_13(threadId(sendMessage[34]).Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp4(tmp5[27]).intl;
  obj4.children = intl2.string(threadId(sendMessage[27]).t["0Ycgw5"]);
  items9[2] = closure_13(threadId(sendMessage[34]).Text, obj4);
  const obj5 = { style: tmp.buttonMargin, children: null };
  const obj6 = {
    grow: true,
    variant: "primary",
    text: null,
    pillStyle: null,
    onPress: null,
    loading: null,
    disabled: null,
  };
  const intl3 = tmp4(tmp5[27]).intl;
  obj6.text = intl3.string(threadId(sendMessage[27]).t.d611xH);
  obj6.pillStyle = tmp.button;
  obj6.onPress = callback;
  obj6.loading = tmp3;
  obj6.disabled = tmp3;
  obj5.children = closure_13(threadId(sendMessage[35]).BaseTextButton, obj6);
  items9[3] = closure_13(stateFromStores2, obj5);
  const obj7 = { style: tmp.buttonMargin, children: null };
  const obj8 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl4 = tmp4(tmp5[27]).intl;
  obj8.text = intl4.string(threadId(sendMessage[27]).t["8rKVHL"]);
  obj8.pillStyle = tmp.button;
  obj8.onPress = callback1;
  obj8.disabled = tmp3;
  obj7.children = closure_13(threadId(sendMessage[35]).BaseTextButton, obj8);
  items9[4] = closure_13(stateFromStores2, obj7);
  const obj9 = { grow: true, variant: "secondary", text: null, pillStyle: null, onPress: null, disabled: null };
  const intl5 = tmp4(tmp5[27]).intl;
  obj9.text = intl5.string(threadId(sendMessage[27]).t["ETE/oC"]);
  obj9.pillStyle = tmp.button;
  obj9.onPress = function onPress() {
    return attachments(sendMessage[15]).hideActionSheet();
  };
  obj9.disabled = tmp3;
  items9[5] = closure_13(threadId(sendMessage[35]).BaseTextButton, obj9);
  obj.children = items9;
  obj.children = closure_14(stateFromStores2, obj);
  return closure_13(threadId(sendMessage[32]).BottomSheet, obj);
}
