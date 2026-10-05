// === Module 11612: AddMediaToOriginalForumPostActionSheet ===

// Module 11612 (AddMediaToOriginalForumPostActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import DraftStore from "DraftStore" /* 7031 */;
import tracking_Tracking from "tracking/Tracking" /* 7263 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import MessageStore from "MessageStore" /* 5110 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, c9, closure_6, setIsUploading, threadId;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
function _upload() {
  return obj(...arguments);
}
let obj = function _upload2() {
  obj = _asyncToGenerator(async function(arg0) {
    let MESSAGE;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let closure_5;
    let intl;
    let obj19;
    let obj20;
    let obj6;
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = false;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c7;
        try {
          let message;
          let analyticsLocations;
          let tmp;
          let items;
          let attachments;
          let closure_9;
          let anyErrorMessage;
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
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              message = undefined;
              analyticsLocations = undefined;
              ({ threadId: c0, attachments: c1, setIsUploading: c2, guild: c3, analyticsLocations: c4 } = closure_0);
              tmp = undefined;
              items = undefined;
              attachments = undefined;
              closure_9 = undefined;
              anyErrorMessage = undefined;
              c8 = 1;
              c9 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const self3 = this;
              let self2 = this;
              const tmp109 = new closure_133_1(closure_133_2[12])();
              tmp = tmp109;
              tmp.on("start", () => {
                closure_1_2(true);
              });
              tmp.on("progress", (currentSize) => {
                obj = closure_0(closure_2[13]);
                const maxFileSizeResult = obj.maxFileSize(id.id);
                const obj2 = closure_0(closure_2[14]);
                const effectiveUploadLimit = obj2.getEffectiveUploadLimit(maxFileSizeResult);
                if (currentSize.currentSize > effectiveUploadLimit) {
                  closure_1_5.cancel();
                  closure_1_2(false);
                  const obj3 = closure_1(closure_2[15]);
                  obj3.hideActionSheet();
                  const obj4 = { file: currentSize, maxSize: effectiveUploadLimit, baseMaxSize: maxFileSizeResult, guildId: id.id, analyticsLocations };
                  closure_1(closure_2[16])(obj4);
                }
              });
              tmp.on("error", () => {
                closure_1_2(false);
                obj = closure_1(closure_2[15]);
                obj.hideActionSheet();
              });
              tmp.on("complete", () => {
                closure_1_2(false);
                obj = closure_1(closure_2[17]);
                obj.clearAll(closure_1_0, ChannelMessage.ChannelMessage);
                const obj2 = closure_1(closure_2[15]);
                obj2.hideActionSheet();
              });
              const messages = closure_133_10.getMessages(c0);
              const get = messages.get;
              const obj23 = closure_133_1(closure_133_2[18]);
              attachments = get(obj23.castChannelIdAsMessageId(c0));
              if (null != attachments) {
                attachments = attachments.attachments;
              } else {
                attachments = [];
              }
              c7 = 1;
              c8 = 4;
              c9 = 1;
              const obj8 = { value: tmp.uploadFiles(c1), done: false };
              return obj8;
            }
          } else if (2 === c8) {
            c7 = 0;
            let closure_11 = closure_6;
            c2(false);
            const obj11 = closure_133_1(closure_133_2[15]);
            const hideActionSheetResult = obj11.hideActionSheet();
            const obj10 = { file: closure_11.file, guildId: message.id, analyticsLocations, code: closure_11.code, reason: closure_11.reason };
            const obj12 = closure_133_0(closure_133_2[20]);
            const result = obj12.handleUploadMessageAttachmentsErrors(obj10);
            c9 = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          } else if (3 === c8) {
            c7 = 0;
            c2(false);
            const obj9 = closure_133_1(closure_133_2[15]);
            obj9.hideActionSheet();
            c9 = 3;
            const obj14 = { value: undefined, done: true };
            return obj14;
          } else if (4 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_9 = value;
              items = [];
              let closure_1 = HermesBuiltin.arraySpread(items, attachments, 0);
              const mapped = closure_9.map((item, index) => {
                obj = closure_1_0(closure_1_2[19]);
                return obj.getAttachmentPayload(item, index);
              });
              let closure_2 = mapped;
              if (mapped == null) {
                closure_2 = [];
              }
              closure_1 = HermesBuiltin.arraySpread(items, closure_2, closure_1);
              c7 = 2;
              c8 = 6;
              c9 = 1;
              const obj16 = { value: obj6.unarchiveThreadIfNecessary(c0), done: false };
              obj6 = closure_133_1(closure_133_2[21]);
              return obj16;
            }
          } else {
            if (5 === c8) {
              c7 = 0;
              closure_12 = closure_6;
              c2(false);
              let obj4 = closure_133_1(closure_133_2[15]);
              obj4.hideActionSheet();
              const self = this;
              self2 = this;
              const tmp17 = new closure_133_1(closure_133_2[23])(closure_12);
              anyErrorMessage = tmp17;
              if (anyErrorMessage.code === closure_133_11.EXPLICIT_CONTENT) {
                const obj5 = closure_133_1(closure_133_2[24]);
                const result1 = obj5.sendExplicitMediaClydeError(c0, anyErrorMessage.attachments, closure_133_0(closure_133_2[25]).TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED);
              } else {
                const obj17 = { title: intl.string(closure_133_0(closure_133_2[27]).t.B3vFdU), body: message };
                const show = closure_133_1(closure_133_2[26]).show;
                const tmp93 = closure_133_1(closure_133_2[26]);
                intl = closure_133_0(closure_133_2[27]).intl;
                anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                message = anyErrorMessage;
                if (anyErrorMessage == null) {
                  message = anyErrorMessage.message;
                }
                show(obj17);
              }
            } else if (6 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj18 = { value, done: true };
                return obj18;
              } else {
                c7 = 3;
                const HTTP = closure_133_0(closure_133_2[22]).HTTP;
                const request = { url: MESSAGE(c0, obj20.castChannelIdAsMessageId(c0)), body: obj19, rejectWithError: true };
                const patch = HTTP.patch;
                MESSAGE = closure_133_12.MESSAGE;
                obj20 = closure_133_1(closure_133_2[18]);
                obj19 = { attachments: items };
                c8 = 7;
                c9 = 1;
                const obj21 = { value: patch(request), done: false };
                return obj21;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp72) {
          closure_6 = tmp72;
          if (0 === c7) {
            c9 = 3;
            throw tmp72;
          } else if (1 === c7) {
            c8 = 2;
          } else if (2 === c7) {
            c8 = 3;
          } else {
            c8 = 5;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
const DraftType = DraftStore.DraftType;
({ AbortCodes: unpackModuleId, Endpoints: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: { paddingHorizontal: 16, paddingTop: 24 }, post: obj2, postContent: { marginBottom: 0, padding: 8 }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 32 }, button: obj3, buttonMargin: { marginBottom: 10 } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, marginBottom: 32, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm };
let closure_15 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let _slicedToArray;
  let analyticsLocations;
  let first;
  let sendMessage;
  let stateFromStores1;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp8;
  let tmp9;
  const tmp = threadId;
  const tmp2 = sendMessage;
  obj = threadId(sendMessage[29]);
  const cResult = obj.c(71);
  threadId = threadId.threadId;
  const attachments = threadId.attachments;
  sendMessage = threadId.sendMessage;
  closure_15();
  const tmp5 = _slicedToArray(stateFromStores1.useState(false), 2);
  [r10021, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function u() {
      return ChannelStore.getChannel(threadId);
    };
    const items1 = [threadId];
    cResult[1] = threadId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(tmp2[30]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class B {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guildId = stateFromStores.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = B;
    cResult[7] = items3;
    tmp14 = items3;
  } else {
    class B {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guildId = stateFromStores.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult3 = tmp(tmp2[30]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp11, B, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guildId = stateFromStores.getGuildId();
        }
        return getGuild(guildId);
      }
    }
    const items4 = [MessageStore];
    cResult[8] = items4;
    tmp16 = items4;
  } else {
    class B {
      constructor() {
        let guildId;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guildId = stateFromStores.getGuildId();
        }
        return getGuild(guildId);
      }
    }
  }
  if (cResult[9] !== threadId) {
    class L {
      constructor() {
        const getMessage = MessageStore.getMessage;
        obj = SnowflakeUtilsDefault;
        return getMessage(threadId, obj.castChannelIdAsMessageId(threadId));
      }
    }
    const items5 = [threadId];
    cResult[9] = threadId;
    cResult[10] = L;
    cResult[11] = items5;
    tmp18 = items5;
  } else {
    class L {
      constructor() {
        const getMessage = MessageStore.getMessage;
        obj = SnowflakeUtilsDefault;
        return getMessage(threadId, obj.castChannelIdAsMessageId(threadId));
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult4 = tmp(tmp2[30]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp16, L, tmp18);
  analyticsLocations = attachments(tmp2[31])().analyticsLocations;
  if (cResult[12] === analyticsLocations) {
    class L {
      constructor() {
        const getMessage = MessageStore.getMessage;
        obj = SnowflakeUtilsDefault;
        return getMessage(threadId, obj.castChannelIdAsMessageId(threadId));
      }
    }
  }
  class D {
    constructor() {
      if (null != stateFromStores) {
        if (null != stateFromStores2) {
          if (null != stateFromStores1) {
            const obj2 = tracking_Tracking;
            const result = obj2.trackForumAddMediaToOriginalPostClicked({ added: true });
            const obj3 = { threadId, attachments, setIsUploading: _slicedToArray, guild: tmp2, analyticsLocations };
            _upload(obj3);
          }
        }
      }
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }
  cResult[12] = analyticsLocations;
  cResult[13] = attachments;
  cResult[14] = stateFromStores2;
  cResult[15] = stateFromStores1;
  cResult[16] = stateFromStores;
  cResult[17] = threadId;
  cResult[18] = D;
}) : ((threadId) => {
  let BaseTextButton;
  let BaseTextButton2;
  let c3;
  let c8;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items9;
  let obj12;
  let obj14;
  let obj6;
  let obj8;
  let tmp12;
  let tmp3;
  threadId = threadId.threadId;
  const attachments = threadId.attachments;
  const sendMessage = threadId.sendMessage;
  setIsUploading = undefined;
  let stateFromStores1;
  let analyticsLocations;
  c8 = undefined;
  const tmp = closure_15();
  const tmp2 = setIsUploading(stateFromStores1.useState(false), 2);
  [tmp3, c3] = tmp2;
  obj = threadId(sendMessage[30]);
  const items = [analyticsLocations];
  const items1 = [threadId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId), items1);
  let obj2 = threadId(sendMessage[30]);
  const items2 = [GuildStore];
  const items3 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return getGuild(guildId);
  }, items3);
  let obj3 = threadId(sendMessage[30]);
  const items4 = [MessageStore];
  const items5 = [threadId];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const getMessage = MessageStore.getMessage;
    obj = SnowflakeUtilsDefault;
    return getMessage(threadId, obj.castChannelIdAsMessageId(threadId));
  }, items5);
  analyticsLocations = attachments(sendMessage[31])().analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  const callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          const obj2 = tracking_Tracking;
          const result = obj2.trackForumAddMediaToOriginalPostClicked({ added: true });
          const obj3 = { threadId, attachments, setIsUploading, guild: tmp2, analyticsLocations };
          _upload(obj3);
        }
      }
    }
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items6);
  const callback1 = stateFromStores1.useCallback(() => {
    obj = tracking_Tracking;
    const result = obj.trackForumAddMediaToOriginalPostClicked({ added: false });
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
    sendMessage();
  }, items7);
  [tmp12, c8] = setIsUploading(stateFromStores1.useState(null), 2);
  const items8 = [attachments];
  setIsUploading(stateFromStores1.useState(null), 2);
  const effect = stateFromStores1.useEffect(() => {
    if (null != attachments[0]) {
      obj = utils_UploadUtils;
      const fileInfo = obj.getFileInfo(tmp[0]);
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
      size = { src: tmp12, width: null, height: null, spoiler: attachments[0].spoiler, alt: attachments[0].description };
      ({ width: obj4.width, height: obj4.height } = item);
      tmp16 = size;
    }
  }
  const obj5 = { startExpanded: true, children: closure_14(stateFromStores2, obj6) };
  obj6 = { style: tmp.container, children: items9 };
  const obj7 = { pointerEvents: "none", style: tmp.post, children: closure_13(threadId(sendMessage[34]).ForumPostListDisabled, obj8) };
  BottomSheet = tmp4(tmp5[37]).BottomSheet;
  obj8 = { threadId, localDeviceMedia: tmp16, style: tmp.postContent };
  items9 = [closure_13(stateFromStores2, obj7), , , , , ];
  const obj9 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(threadId(sendMessage[27]).t["+SZF6S"]) };
  const Text = tmp4(tmp5[35]).Text;
  intl = tmp4(tmp5[27]).intl;
  items9[1] = closure_13(Text, obj9);
  const obj10 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: intl2.string(threadId(sendMessage[27]).t["0Ycgw5"]) };
  const Text2 = tmp4(tmp5[35]).Text;
  intl2 = tmp4(tmp5[27]).intl;
  items9[2] = closure_13(Text2, obj10);
  const obj11 = { style: tmp.buttonMargin, children: closure_13(BaseTextButton, obj12) };
  obj12 = { grow: true, variant: "primary", text: intl3.string(threadId(sendMessage[27]).t.d611xH), pillStyle: tmp.button, onPress: callback, loading: tmp3, disabled: tmp3 };
  BaseTextButton = tmp4(tmp5[36]).BaseTextButton;
  intl3 = tmp4(tmp5[27]).intl;
  items9[3] = closure_13(stateFromStores2, obj11);
  const obj13 = { style: tmp.buttonMargin, children: closure_13(BaseTextButton2, obj14) };
  obj14 = { grow: true, variant: "secondary", text: intl4.string(threadId(sendMessage[27]).t["8rKVHL"]), pillStyle: tmp.button, onPress: callback1, disabled: tmp3 };
  BaseTextButton2 = tmp4(tmp5[36]).BaseTextButton;
  intl4 = tmp4(tmp5[27]).intl;
  items9[4] = closure_13(stateFromStores2, obj13);
  const obj15 = {
    grow: true,
    variant: "secondary",
    text: intl5.string(threadId(sendMessage[27]).t["ETE/oC"]),
    pillStyle: tmp.button,
    onPress() {
      obj = attachments(sendMessage[15]);
      return obj.hideActionSheet();
    },
    disabled: tmp3
  };
  const BaseTextButton3 = tmp4(tmp5[36]).BaseTextButton;
  intl5 = tmp4(tmp5[27]).intl;
  items9[5] = closure_13(BaseTextButton3, obj15);
  return closure_13(BottomSheet, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx");

export default tmp5;