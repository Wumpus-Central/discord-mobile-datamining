// === Module 11503: ClassificationMessageEvidence ===

// Module 11503 (ClassificationMessageEvidence)
import MediaFormatTesters from "MediaFormatTesters" /* 5040 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import openMediaModal from "openMediaModal" /* 7933 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8092 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserStore from "UserStore" /* 1377 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, findNodeHandle: metroRequire, Image: closure_7, ActivityIndicator: closure_8 } = get_ActivityIndicator);
const SafetyHubConstants = fn(8093);
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: map1, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = SafetyHubConstants);
const MessageTypes = fn(1085).MessageTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let c20 = "1";
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(4890);
let closure_22 = createStyles.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
const ReactCompilerGating = fn(558);
let tmp5 = new RowGeneratorDefault();
let size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = ref(576).c(52);
  closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class E {
      constructor() {
        return closure_10.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = ref(576);
  const stateFromStores = ref(504).useStateFromStores(tmp5, E);
  ref = noop.useRef(null);
  const tmp11 = first1(noop.useState(null), 2);
  const reactTag = tmp11[0];
  dependencyMap = tmp11[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[2] = obj2;
    let tmp13 = obj2;
  } else {
    tmp13 = cResult[2];
  }
  const tmp10Result = first1(noop.useState(tmp13), 2);
  first1 = tmp10Result[0];
  noop = tmp10Result[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [id];
    class G {
      constructor() {
        obj = closure_0(closure_2[14]);
        return obj.isThemeLight(id.theme);
      }
    }
    cResult[3] = items1;
    cResult[4] = G;
    let tmp17 = G;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[3];
    tmp17 = cResult[4];
  }
  const tmpResult = ref(504);
  const stateFromStores1 = ref(504).useStateFromStores(tmp16, tmp17);
  if (cResult[5] !== stateFromStores1) {
    const resolveAssetSource = first3.resolveAssetSource;
    class G {
      constructor() {
        obj = closure_0(closure_2[14]);
        return obj.isThemeLight(id.theme);
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = tmp23;
  } else {
    const uri = tmp20;
    const first2 = arg0.flaggedContent[0];
    class G {
      constructor() {
        obj = closure_0(closure_2[14]);
        return obj.isThemeLight(id.theme);
      }
    }
    const tmp10Result2 = tmp10(obj3.useState(first2.attachments.length), 2);
    first3 = tmp10Result2[0];
    closure_8 = tmp10Result2[1];
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [SafetyHubStore];
      class J {
        constructor() {
          return closure_1_11.getUsername();
        }
      }
      cResult[7] = items2;
      cResult[8] = J;
      let tmp29 = J;
      let tmp28 = items2;
    } else {
      tmp28 = cResult[7];
      tmp29 = cResult[8];
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp28, tmp29);
    id = first2.id;
    if (cResult[9] === first2.attachments) {
      if (cResult[10] === first1) {
        if (cResult[11] === tmp20) {
          UserStore = tmp32;
          if (cResult[16] === first2.attachments) {
            if (cResult[17] === first1) {
              if (cResult[18] === id) {
                if (cResult[19] === tmp32) {
                  if (cResult[20] === tmp20) {
                    let tmp36 = cResult[21];
                  }
                  if (cResult[22] !== reactTag) {
                    function me(arg0) {
                      arg0.reactTag = reactTag;
                    }
                    cResult[22] = reactTag;
                    class J {
                      constructor() {
                        return closure_1_11.getUsername();
                      }
                    }
                    cResult[23] = me;
                    let tmp38 = me;
                  } else {
                    tmp38 = cResult[23];
                  }
                  if (cResult[24] !== first2.attachments) {
                    function oe() {
                      attachments = attachments.attachments;
                      const found = attachments.filter((filename) => ref(dependencyMap[18]).isImageFile(filename.filename));
                      const mapped = found.map((item) => {
                        closure_0 = item;
                        const promise = new Promise((arg0, arg1) => {
                          item = arg0;
                          return size.getSize(item.url, (width, height) => {
                            size = { width, height };
                            return closure_0(size);
                          }, arg1);
                        });
                        return new Promise((arg0, arg1) => {
                          item = arg0;
                          return size.getSize(item.url, (width, height) => {
                            size = { width, height };
                            return closure_0(size);
                          }, arg1);
                        }).then((result) => {
                          id = result;
                          return closure_1_4((arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj[id.id] = id;
                            return obj;
                          });
                        }).finally(() => closure_1_8((arg0) => arg0 - 1));
                      });
                    }
                    const items3 = [first2.attachments];
                    class J {
                      constructor() {
                        return closure_1_11.getUsername();
                      }
                    }
                    cResult[24] = first2.attachments;
                    cResult[25] = oe;
                    cResult[26] = items3;
                  }
                  class J {
                    constructor() {
                      return closure_1_11.getUsername();
                    }
                  }
                  if (cResult[27] !== first3) {
                    function de() {
                      if (0 === first3) {
                        dependencyMap(timestampProducer(ref.current));
                      }
                    }
                    const items4 = [first3];
                    class J {
                      constructor() {
                        return closure_1_11.getUsername();
                      }
                    }
                    cResult[27] = first3;
                    cResult[28] = de;
                    cResult[29] = items4;
                    let tmp42 = items4;
                    let tmp41 = de;
                  } else {
                    tmp41 = cResult[28];
                    tmp42 = cResult[29];
                  }
                  const effect = obj3.useEffect(tmp41, tmp42);
                  if ("" === first2.content) {
                    if (0 === first2.attachments.length) {
                      return null;
                    }
                  }
                  if (first3 > 0) {
                    const _Symbol2 = Symbol;
                    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp68 = closure_18(closure_8, {});
                      class J {
                        constructor() {
                          return closure_1_11.getUsername();
                        }
                      }
                      cResult[30] = tmp68;
                    }
                    class J {
                      constructor() {
                        return closure_1_11.getUsername();
                      }
                    }
                  } else {
                    if (cResult[38] !== tmp36) {
                      let obj4 = { ref: null, onTapImage: null, inverted: false };
                      class J {
                        constructor() {
                          return closure_1_11.getUsername();
                        }
                      }
                      obj4.onTapImage = tmp36;
                      const tmp47 = closure_18(reactTag(11506), obj4);
                      cResult[38] = tmp36;
                      cResult[39] = tmp47;
                      let tmp44 = tmp47;
                    } else {
                      tmp44 = cResult[39];
                    }
                    if (cResult[40] === first2.content) {
                      if (cResult[41] === first2.id) {
                        if (cResult[42] === stateFromStores) {
                          if (cResult[43] === tmp32) {
                            if (cResult[44] === stateFromStores2) {
                              let tmp48 = cResult[45];
                            }
                            if (cResult[46] === tmp38) {
                              if (cResult[47] === tmp48) {
                                let tmp58 = cResult[48];
                              }
                              if (cResult[49] === tmp44) {
                                if (cResult[50] === tmp58) {
                                  let tmp62 = cResult[51];
                                }
                                return tmp62;
                              }
                              class J {
                                constructor() {
                                  return closure_1_11.getUsername();
                                }
                              }
                              let obj5 = { children: null };
                              const items5 = [tmp44, tmp58];
                              obj5.children = items5;
                              const tmp64 = closure_19(uri, obj5);
                              cResult[49] = tmp44;
                              cResult[50] = tmp58;
                              cResult[51] = tmp64;
                              tmp62 = tmp64;
                            }
                            class J {
                              constructor() {
                                return closure_1_11.getUsername();
                              }
                            }
                            const obj6 = { rowGenerator, message: tmp48, modifyRow: tmp38, pointerEvents: "none" };
                            const tmp61 = closure_18(reactTag(8303), obj6);
                            cResult[46] = tmp38;
                            cResult[47] = tmp48;
                            cResult[48] = tmp61;
                            tmp58 = tmp61;
                          }
                        }
                      }
                    }
                    class J {
                      constructor() {
                        return closure_1_11.getUsername();
                      }
                    }
                    tmp49[0] = first2.id;
                    const _Date = Date;
                    const tmpResult6 = tmp(5112);
                    const date = new Date(reactTag(11).extractTimestamp(first2.id));
                    tmp49[1] = date.toUTCString();
                    tmp49[2] = c20;
                    tmp49[3] = MessageTypes.DEFAULT;
                    let tmp56 = stateFromStores;
                    if (stateFromStores == null) {
                      const obj7 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores2 };
                      tmp56 = obj7;
                    }
                    tmp49[4] = tmp56;
                    tmp49[5] = first2.content;
                    tmp49[6] = tmp32;
                    const messageRecord = tmpResult6.createMessageRecord(tmp49);
                    cResult[40] = first2.content;
                    cResult[41] = first2.id;
                    cResult[42] = stateFromStores;
                    cResult[43] = tmp32;
                    cResult[44] = stateFromStores2;
                    cResult[45] = messageRecord;
                    tmp48 = messageRecord;
                    const obj9 = reactTag(11);
                  }
                }
              }
            }
          }
          class J {
            constructor() {
              return closure_1_11.getUsername();
            }
          }
          cResult[16] = first2.attachments;
          cResult[17] = first1;
          cResult[18] = id;
          cResult[19] = cResult[12];
          cResult[20] = tmp20;
          cResult[21] = tmp37;
          tmp36 = tmp37;
        }
      }
    }
    if (cResult[13] === first1) {
      if (cResult[14] === tmp20) {
        let tmp33 = cResult[15];
      }
      let attachments = first2.attachments;
      let mapped = attachments.map(tmp33);
      class J {
        constructor() {
          return closure_1_11.getUsername();
        }
      }
      cResult[9] = first2.attachments;
      cResult[10] = first1;
      cResult[11] = tmp20;
      cResult[12] = mapped;
    }
    function ae(filename) {
      const obj = {};
      const merged = Object.assign(filename);
      let str = filename.filename;
      if (str == null) {
        str = "";
      }
      obj.filename = str;
      obj.flags = SafetyHubUtils.getSpoilerFlagsForAttachment(filename);
      obj.size = 0;
      obj.proxy_url = filename.url;
      if (obj3.isImageFile(filename.filename)) {
        const obj4 = {};
        const merged1 = Object.assign(obj);
        width = undefined;
        if (first1[filename.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = __initData;
        }
        obj4.width = width;
        height = undefined;
        if (first1[filename.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = __initData2;
        }
        obj4.height = height;
        let tmp4 = obj4;
      } else {
        tmp4 = obj;
        if (tmp2Result.isVideoFile(filename.filename)) {
          const obj5 = {};
          const merged2 = Object.assign(obj);
          obj5.width = width;
          obj5.height = height;
          obj5.proxy_url = uri.uri;
          obj5.filename = filename;
          tmp4 = obj5;
        }
        tmp2Result = MediaFormatTesters;
      }
      return tmp4;
    }
    cResult[13] = first1;
    cResult[14] = cResult[6];
    cResult[15] = ae;
    tmp33 = ae;
    const tmpResult5 = tmp(504);
  }
  const tmpResult4 = ref(504);
}) : ((arg0) => {
  let attachments = closure_22();
  const items = [memo];
  const stateFromStores = ref(504).useStateFromStores(items, () => memo.getCurrentUser());
  ref = noop.useRef(null);
  const tmp6 = first1(noop.useState(null), 2);
  const reactTag = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(noop.useState({}), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  let obj = ref(504);
  let tmp5 = first1;
  const items1 = [id];
  const resolveAssetSource = first3.resolveAssetSource;
  if (obj3.useStateFromStores(items1, () => ref(4729).isThemeLight(id.theme))) {
    let assetSource = resolveAssetSource(tmp11(11504));
    let tmp13 = tmp11;
  } else {
    assetSource = resolveAssetSource(tmp11(11505));
    tmp13 = tmp11;
  }
  let first2 = arg0.flaggedContent[0];
  const tmp5Result = tmp5(noop.useState(first2.attachments.length), 2);
  first3 = tmp5Result[0];
  closure_8 = tmp5Result[1];
  obj3 = ref(504);
  const items2 = [SafetyHubStore];
  id = first2.id;
  const items3 = [first2.attachments, first1, assetSource];
  const stateFromStores1 = ref(504).useStateFromStores(items2, () => username.getUsername());
  memo = obj2.useMemo(() => {
    const attachments = first2.attachments;
    return attachments.map((filename) => {
      const obj = {};
      const merged = Object.assign(filename);
      let str = filename.filename;
      if (str == null) {
        str = "";
      }
      obj.filename = str;
      obj.flags = ref(8092).getSpoilerFlagsForAttachment(filename);
      obj.size = 0;
      obj.proxy_url = filename.url;
      const obj2 = ref(8092);
      if (obj3.isImageFile(filename.filename)) {
        const obj4 = {};
        const merged1 = Object.assign(obj);
        width = undefined;
        if (first1[filename.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = closure_2_12;
        }
        obj4.width = width;
        height = undefined;
        if (first1[filename.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = closure_2_13;
        }
        obj4.height = height;
        let tmp4 = obj4;
      } else {
        tmp4 = obj;
        if (tmp2Result.isVideoFile(filename.filename)) {
          const obj5 = {};
          const merged2 = Object.assign(obj);
          obj5.width = width;
          obj5.height = height;
          obj5.proxy_url = uri.uri;
          obj5.filename = filename;
          tmp4 = obj5;
        }
        tmp2Result = ref(5040);
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, first2.attachments, id, first1, assetSource];
  const items5 = [reactTag];
  const callback = obj2.useCallback((nativeEvent) => {
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      const size = { uri: uri.url, videoURI: null, thumbnail: null, mediaIndex: null, channelId: null, messageId: null, width: null, height: null, accessoryType: "attachment", attachmentId: null };
      let url;
      if (obj2.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      size.videoURI = url;
      obj2 = ref(dependencyMap[18]);
      let tmp5;
      if (tmpResult.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        const size1 = { width, height, uri: uri.uri };
        tmp5 = size1;
      }
      size.thumbnail = tmp5;
      size.mediaIndex = mediaIndex;
      size.channelId = channelId;
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
    openMediaModal.openMediaModal({ initialIndex: index, initialSources: mapped, disableDownload: true, disableMediaOverlayButton: true, shareable: false, originViewOrOriginLayout: layout });
  }, items4);
  const items6 = [first2.attachments];
  const callback1 = obj2.useCallback((arg0) => {
    arg0.reactTag = reactTag;
  }, items5);
  const effect = obj2.useEffect(() => {
    const attachments = first2.attachments;
    const found = attachments.filter((filename) => ref(dependencyMap[18]).isImageFile(filename.filename));
    const mapped = found.map((item) => {
      const promise = new Promise((arg0, arg1) => {
        item = arg0;
        return size.getSize(item.url, (width, height) => {
          size = { width, height };
          return closure_0(size);
        }, arg1);
      });
      return new Promise((arg0, arg1) => {
        item = arg0;
        return size.getSize(item.url, (width, height) => {
          size = { width, height };
          return closure_0(size);
        }, arg1);
      }).then((result) => {
        id = result;
        return closure_1_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[id.id] = id;
          return obj;
        });
      }).finally(() => closure_1_8((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first3];
  const effect1 = obj2.useEffect(() => {
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
    let obj4 = { children: null };
    const items8 = [closure_18(closure_8, {}), ];
    let obj5 = { style: attachments.dummyVideoAttachments, children: null };
    attachments = first2.attachments;
    first2 = attachments.filter((filename) => ref(5040).isVideoFile(filename.filename));
    obj5.children = first2.map((uri, index) => {
      closure_0 = uri;
      return closure_1_18(first(7984), {
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
        }
      }, index);
    });
    items8[1] = closure_18(tmp24, obj5);
    obj4.children = items8;
    let obj10 = obj4;
  } else {
    const obj6 = { ref, onTapImage: callback, inverted: false };
    const items9 = [closure_18(tmp13(11506), obj6), ];
    const obj7 = { rowGenerator, message: null, modifyRow: null, pointerEvents: "none" };
    const tmp13Result = tmp13(8303);
    const obj8 = { id: first2.id, timestamp: null, channel_id: null, type: null, author: null, content: null, attachments: null };
    const _Date = Date;
    const tmpResult2 = tmp(5112);
    const date = new Date(tmp13(11).extractTimestamp(first2.id));
    obj8.timestamp = date.toUTCString();
    obj8.channel_id = channel_id;
    obj8.type = MessageTypes.DEFAULT;
    let tmp25 = stateFromStores;
    if (stateFromStores == null) {
      const obj9 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
      tmp25 = obj9;
    }
    obj10 = { children: null };
    obj8.author = tmp25;
    obj8.content = first2.content;
    obj8.attachments = memo;
    obj7.message = tmpResult2.createMessageRecord(obj8);
    obj7.modifyRow = callback1;
    items9[1] = closure_18(tmp13Result, obj7);
    obj10.children = items9;
    const tmp13Result2 = tmp13(11);
  }
  closure_19(assetSource, obj10);
  const tmpResult = ref(504);
});