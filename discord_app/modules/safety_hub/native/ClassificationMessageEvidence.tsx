// discord_app/modules/safety_hub/native/ClassificationMessageEvidence.tsx
import setOptionsDefault from "../../messages/native/renderer/RowGenerator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import handleThemeChange from "../../user_settings/ThemeStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";
import SafetyHubView from "../SafetyHubConstants.tsx";
import { MessageTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ View: c5, findNodeHandle: closure_6, Image: error, ActivityIndicator: closure_8 } = get_ActivityIndicator);
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: map1, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = SafetyHubView);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = new setOptionsDefault();
let closure_21 = createCacheKey.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
let tmp5 = new setOptionsDefault();
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default function ClassificationEvidence(arg0) {
  let attachments = callback2();
  let obj = ref(589);
  const items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  obj1 = React;
  ref = React.useRef(null);
  const tmp6 = first1(React.useState(null), 2);
  const first = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(React.useState({}), 2);
  first1 = tmp8[0];
  React = tmp8[1];
  let obj2 = ref(589);
  const items1 = [id];
  const resolveAssetSource = first3.resolveAssetSource;
  if (obj2.useStateFromStores(items1, () => ref(1363).isThemeLight(id.theme))) {
    let assetSource = resolveAssetSource(tmp11(11071));
    let tmp13 = tmp11;
  } else {
    assetSource = resolveAssetSource(tmp11(11072));
    tmp13 = tmp11;
  }
  let first2 = arg0.flaggedContent[0];
  const tmp5Result = first1(obj1.useState(first2.attachments.length), 2);
  first3 = tmp5Result[0];
  closure_8 = tmp5Result[1];
  let tmpResult = tmp(589);
  const items2 = [closure_11];
  id = first2.id;
  const items3 = [first2.attachments, first1, assetSource];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => username.getUsername());
  memo = obj1.useMemo(() => {
    const attachments = first2.attachments;
    return attachments.map((item, index) => {
      let obj = {};
      const merged = Object.assign(item);
      let str = item.filename;
      if (str == null) {
        str = "";
      }
      obj.filename = str;
      obj.flags = ref(closure_1_2[15]).getSpoilerFlagsForAttachment(item);
      obj.size = 0;
      obj.proxy_url = item.url;
      const obj2 = ref(closure_1_2[15]);
      if (obj3.isImageFile(item.filename)) {
        obj = {};
        const merged1 = Object.assign(obj);
        let width;
        if (table[item.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = closure_1_12;
        }
        obj.width = width;
        let height;
        if (table[item.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = closure_1_13;
        }
        obj.height = height;
        let tmp4 = obj;
      } else {
        tmp4 = obj;
        if (tmp2Result.isVideoFile(item.filename)) {
          obj = {};
          const merged2 = Object.assign(obj);
          obj.width = closure_1_14;
          obj.height = closure_1_15;
          obj.proxy_url = uri.uri;
          obj.filename = closure_1_16;
          tmp4 = obj;
        }
        tmp2Result = ref(closure_1_2[16]);
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, first2.attachments, id, first1, assetSource];
  const items5 = [first];
  const callback = obj1.useCallback((nativeEvent) => {
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((item, index) => {
      let obj = { uri: item.url, videoURI: null, thumbnail: null, mediaIndex: null, channelId: "1", messageId: null, width: null, height: null, accessoryType: "attachment", attachmentId: null };
      let url;
      if (obj2.isVideoFile(attachments.attachments[index].filename)) {
        url = item.url;
      }
      obj[1] = url;
      obj2 = ref(closure_1_2[16]);
      let tmp5;
      if (tmpResult.isVideoFile(attachments.attachments[index].filename)) {
        obj = { width: null, height: null, uri: null };
        obj[0] = closure_1_14;
        obj[1] = closure_1_15;
        obj[2] = uri.uri;
        tmp5 = obj;
      }
      obj[2] = tmp5;
      obj[3] = index;
      obj[5] = closure_9;
      let width;
      if (table[item.id] != null) {
        width = tmp10.width;
      }
      if (width == null) {
        width = closure_1_12;
      }
      obj[6] = width;
      let height;
      if (table[item.id] != null) {
        height = tmp12.height;
      }
      if (height == null) {
        height = closure_1_13;
      }
      obj[7] = height;
      obj[9] = item.id;
      return obj;
    });
    ref(8992).openMediaModal({ initialIndex: index, initialSources: mapped, disableDownload: true, disableMediaOverlayButton: true, shareable: false, originViewOrOriginLayout: layout });
  }, items4);
  const items6 = [first2.attachments];
  const callback1 = obj1.useCallback((arg0) => {
    arg0.reactTag = first;
  }, items5);
  const effect = obj1.useEffect(() => {
    const attachments = first2.attachments;
    const found = attachments.filter((item, index) => callback(table[16]).isImageFile(item.filename));
    const mapped = found.map((item, index) => {
      closure_0 = item;
      const promise = new Promise((arg0, arg1) => {
        item = arg0;
        return closure_1_7.getSize(item.url, (width, height) => callback({ width, height }), arg1);
      });
      return new Promise((arg0, arg1) => {
        item = arg0;
        return closure_1_7.getSize(item.url, (width, height) => callback({ width, height }), arg1);
      }).then((result) => {
        closure_0 = result;
        return closure_1_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[id.id] = id;
          return obj;
        });
      }).finally(() => callback((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first3];
  const effect1 = obj1.useEffect(() => {
    if (0 === first3) {
      dependencyMap(first2(ref.current));
    }
  }, items7);
  if ("" === first2.content) {
    if (0 === first2.attachments.length) {
      return null;
    }
  }
  if (first3 > 0) {
    const items8 = [callback(closure_8, {}), ];
    obj = { style: null, children: null };
    obj[0] = attachments.dummyVideoAttachments;
    attachments = first2.attachments;
    first2 = attachments.filter((item, index) => ref(4811).isVideoFile(item.filename));
    obj[1] = first2.map((item, index) => {
      closure_0 = item;
      let obj = { uri: item.url };
      return closure_1_18(first(9019), obj, index);
    });
    items8[1] = callback(tmp24, obj);
    obj[0] = items8;
    let obj5 = obj;
  } else {
    obj1 = { ref: null, onTapImage: null, inverted: false };
    obj1[0] = ref;
    obj1[1] = callback;
    const items9 = [callback(tmp13(11073), obj1), ];
    obj2 = { rowGenerator: null, message: null, modifyRow: null };
    obj2[0] = closure_20;
    tmp13(10066);
    tmpResult = tmp(4803);
    const obj3 = { id: null, timestamp: null, channel_id: "1", type: null, author: null, content: null, attachments: null };
    obj3[0] = first2.id;
    const _Date = Date;
    const tmp13Result = tmp13(11);
    const date = new Date(tmp13Result.extractTimestamp(first2.id));
    obj3[1] = date.toUTCString();
    obj3[3] = MessageTypes.DEFAULT;
    let tmp25 = stateFromStores;
    if (stateFromStores == null) {
      const obj4 = { id: "0", avatar: null, discriminator: "0000", username: null };
      obj4[3] = stateFromStores1;
      tmp25 = obj4;
    }
    obj5 = { children: null };
    obj3[4] = tmp25;
    obj3[5] = first2.content;
    obj3[6] = memo;
    obj2[1] = tmpResult.createMessageRecord(obj3);
    obj2[2] = callback1;
    items9[1] = callback(tmp13Result, obj2);
    obj5[0] = items9;
  }
  callback(assetSource, obj5);
};