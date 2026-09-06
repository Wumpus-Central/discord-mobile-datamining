// discord_app/modules/safety_hub/native/ClassificationMessageEvidence.tsx
import RowGeneratorDefault from "../../messages/native/renderer/RowGenerator.tsx";
import openMediaModal from "../../media_viewer/native/components/openMediaModal.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  findNodeHandle: metroRequire,
  Image: closure_7,
  ActivityIndicator: closure_8,
} = get_ActivityIndicator);
const SafetyHubConstants = fn(8419);
({
  DEFAULT_MEDIA_MAX_WIDTH: closure_12,
  DEFAULT_MEDIA_MAX_HEIGHT: map1,
  VIDEO_PLACEHOLDER_WIDTH: closure_14,
  VIDEO_PLACEHOLDER_HEIGHT: closure_15,
  VIDEO_PLACEHOLDER_FILENAME: closure_16,
} = SafetyHubConstants);
const MessageTypes = fn(1074).MessageTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(4560);
let closure_21 = createStyles.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default function ClassificationEvidence(arg0) {
  let attachments = closure_21();
  let obj = ref(504);
  const items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  let obj1 = noop;
  ref = noop.useRef(null);
  const tmp6 = first1(noop.useState(null), 2);
  const reactTag = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(noop.useState({}), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  let obj2 = ref(504);
  const items1 = [id];
  const resolveAssetSource = first3.resolveAssetSource;
  if (obj2.useStateFromStores(items1, () => ref(4411).isThemeLight(id.theme))) {
    let assetSource = resolveAssetSource(tmp11(11892));
    let tmp13 = tmp11;
  } else {
    assetSource = resolveAssetSource(tmp11(11893));
    tmp13 = tmp11;
  }
  let first2 = arg0.flaggedContent[0];
  const tmp5Result = first1(obj1.useState(first2.attachments.length), 2);
  first3 = tmp5Result[0];
  closure_8 = tmp5Result[1];
  let tmpResult = tmp(504);
  const items2 = [SafetyHubStore];
  id = first2.id;
  const items3 = [first2.attachments, first1, assetSource];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => username.getUsername());
  memo = obj1.useMemo(() => {
    const attachments = first2.attachments;
    return attachments.map((filename) => {
      let obj = {};
      const merged = Object.assign(filename);
      let str = filename.filename;
      if (str == null) {
        str = "";
      }
      obj.filename = str;
      obj.flags = ref(8418).getSpoilerFlagsForAttachment(filename);
      obj.size = 0;
      obj.proxy_url = filename.url;
      const obj2 = ref(8418);
      const tmp2 = ref;
      if (obj3.isImageFile(filename.filename)) {
        obj = {};
        const merged1 = Object.assign(obj);
        width = undefined;
        if (first1[filename.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = closure_2_12;
        }
        obj.width = width;
        height = undefined;
        if (first1[filename.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = closure_2_13;
        }
        obj.height = height;
        let tmp4 = obj;
      } else {
        tmp4 = obj;
        if (tmp2Result.isVideoFile(filename.filename)) {
          obj = {};
          const merged2 = Object.assign(obj);
          obj.width = width;
          obj.height = height;
          obj.proxy_url = uri.uri;
          obj.filename = filename;
          tmp4 = obj;
        }
        tmp2Result = tmp2(4710);
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, first2.attachments, id, first1, assetSource];
  const items5 = [reactTag];
  const callback = obj1.useCallback((nativeEvent) => {
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      const size = {
        uri: uri.url,
        videoURI: null,
        thumbnail: null,
        mediaIndex: null,
        channelId: "1",
        messageId: null,
        width: null,
        height: null,
        accessoryType: "attachment",
        attachmentId: null,
      };
      let url;
      if (obj2.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      size.videoURI = url;
      obj2 = ref(closure_2[16]);
      const tmp3 = attachments;
      let tmp5;
      if (tmpResult.isVideoFile(tmp3.attachments[mediaIndex].filename)) {
        const size1 = { width, height, uri: uri.uri };
        tmp5 = size1;
      }
      size.thumbnail = tmp5;
      size.mediaIndex = mediaIndex;
      size.messageId = messageId;
      width = undefined;
      if (first1[uri.id] != null) {
        width = tmp10.width;
      }
      if (width == null) {
        width = closure_2_12;
      }
      size.width = width;
      height = undefined;
      if (first1[uri.id] != null) {
        height = tmp12.height;
      }
      if (height == null) {
        height = closure_2_13;
      }
      size.height = height;
      size.attachmentId = uri.id;
      return size;
    });
    openMediaModal.openMediaModal({
      initialIndex: index,
      initialSources: mapped,
      disableDownload: true,
      disableMediaOverlayButton: true,
      shareable: false,
      originViewOrOriginLayout: layout,
    });
  }, items4);
  const items6 = [first2.attachments];
  const callback1 = obj1.useCallback((arg0) => {
    arg0.reactTag = reactTag;
  }, items5);
  const effect = obj1.useEffect(() => {
    const attachments = first2.attachments;
    const found = attachments.filter((filename) => ref(dependencyMap[16]).isImageFile(filename.filename));
    const mapped = found.map((item) => {
      const promise = new Promise((arg0, arg1) => {
        item = arg0;
        return size.getSize(
          item.url,
          (width, height) => {
            size = { width, height };
            return closure_0(size);
          },
          arg1,
        );
      });
      return new Promise((arg0, arg1) => {
        item = arg0;
        return size.getSize(
          item.url,
          (width, height) => {
            size = { width, height };
            return closure_0(size);
          },
          arg1,
        );
      })
        .then((result) => {
          id = result;
          return closure_1_4((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = id;
            return obj;
          });
        })
        .finally(() => closure_1_8((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first3];
  const effect1 = obj1.useEffect(() => {
    if (0 === first3) {
      dependencyMap(timestampProducer(ref.current));
    }
  }, items7);
  if ("" === first2.content) {
    if (0 === first2.attachments.length) {
      return null;
    }
  }
  if (first3 > 0) {
    obj = { children: null };
    const items8 = [closure_18(closure_8, {})];
    obj = { style: attachments.dummyVideoAttachments, children: null };
    attachments = first2.attachments;
    first2 = attachments.filter((filename) => ref(4710).isVideoFile(filename.filename));
    obj.children = first2.map((uri, index) => {
      closure_0 = uri;
      return closure_1_18(
        first(8308),
        {
          source: { uri: uri.url },
          onLoad(arg0) {
            closure_0 = arg0;
            closure_1_4((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              const size = { width: closure_0.naturalSize.width, height: closure_0.naturalSize.height };
              obj[closure_0.id] = size;
              return obj;
            });
            closure_1_8((arg0) => arg0 - 1);
          },
          onError() {
            return closure_1_8((arg0) => arg0 - 1);
          },
        },
        index,
      );
    });
    items8[1] = closure_18(tmp24, obj);
    obj.children = items8;
    let obj5 = obj;
  } else {
    obj1 = { ref, onTapImage: callback, inverted: false };
    const items9 = [closure_18(tmp13(11894), obj1)];
    obj2 = { rowGenerator, message: null, modifyRow: null, pointerEvents: "none" };
    tmp13(8652);
    tmpResult = tmp(4783);
    const obj3 = {
      id: first2.id,
      timestamp: null,
      channel_id: "1",
      type: null,
      author: null,
      content: null,
      attachments: null,
    };
    const _Date = Date;
    const tmp13Result = tmp13(11);
    const date = new Date(tmp13Result.extractTimestamp(first2.id));
    obj3.timestamp = date.toUTCString();
    obj3.type = MessageTypes.DEFAULT;
    let tmp25 = stateFromStores;
    if (stateFromStores == null) {
      const obj4 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
      tmp25 = obj4;
    }
    obj5 = { children: null };
    obj3.author = tmp25;
    obj3.content = first2.content;
    obj3.attachments = memo;
    obj2.message = tmpResult.createMessageRecord(obj3);
    obj2.modifyRow = callback1;
    items9[1] = closure_18(tmp13Result, obj2);
    obj5.children = items9;
  }
  closure_19(assetSource, obj5);
}
