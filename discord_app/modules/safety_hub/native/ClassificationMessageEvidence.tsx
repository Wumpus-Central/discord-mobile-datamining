// === Module 11516: ClassificationMessageEvidence ===

// Module 11516 (ClassificationMessageEvidence)
import Constants from "Constants" /* 1085 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import openMediaModal from "openMediaModal" /* 7944 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8125 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserStore_mod from "UserStore" /* 1377 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8126 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, width;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f108231 = (arg0, arg1) => {
  url = arg0;
  return size.getSize(url.url, (width, height) => {
    size = { width, height };
    return closure_0(size);
  }, arg1);
};
let react = react_mod;
({ View: hasOwnProperty, findNodeHandle: metroRequire, Image: metroImportDefault, ActivityIndicator: metroImportAll } = react_native);
let UserStore = UserStore_mod;
({ DEFAULT_MEDIA_MAX_WIDTH: closure_12, DEFAULT_MEDIA_MAX_HEIGHT: map1, VIDEO_PLACEHOLDER_WIDTH: closure_14, VIDEO_PLACEHOLDER_HEIGHT: closure_15, VIDEO_PLACEHOLDER_FILENAME: closure_16 } = SafetyHubConstants);
const MessageTypes = Constants.MessageTypes;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let c20 = "1";
let tmp5 = new RowGeneratorDefault();
const rowGenerator = tmp5;
let closure_22 = createStyles.createStyles({ dummyVideoAttachments: { width: 0, height: 0 } });
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function(flaggedContent) {
  let channelId;
  let closure_10;
  let closure_2;
  let closure_4;
  let first1;
  let first3;
  let id;
  let items5;
  let items6;
  let ref;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp5;
  let tmp6;
  let username;
  let obj = ref(576);
  const cResult = obj.c(52);
  flaggedContent = flaggedContent.flaggedContent;
  let tmp4 = closure_22();
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
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, E);
  let obj3 = react;
  ref = react.useRef(null);
  const tmp10 = first1;
  const tmp11 = first1(react.useState(null), 2);
  const reactTag = tmp11[0];
  dependencyMap = tmp11[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[2] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[2];
  }
  const tmp10Result = tmp10(obj3.useState(tmp13), 2);
  first1 = tmp10Result[0];
  react = tmp10Result[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = id;
    const items1 = [id];
    class G {
      constructor() {
        const obj = ref(closure_2[14]);
        return obj.isThemeLight(id.theme);
      }
    }
    cResult[3] = items1;
    cResult[4] = G;
    tmp17 = G;
    tmp16 = items1;
  } else {
    tmp16 = cResult[3];
    tmp17 = cResult[4];
  }
  const tmpResult4 = ref(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp16, tmp17);
  if (cResult[5] !== stateFromStores1) {
    const resolveAssetSource = first3.resolveAssetSource;
    class G {
      constructor() {
        const obj = ref(closure_2[14]);
        return obj.isThemeLight(id.theme);
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = tmp23;
    tmp20 = tmp23;
  } else {
    tmp20 = cResult[6];
  }
  const uri = tmp20;
  const first2 = flaggedContent[0];
  const tmp10Result2 = tmp10(obj3.useState(first2.attachments.length), 2);
  first3 = tmp10Result2[0];
  let closure_8 = tmp10Result2[1];
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SafetyHubStore];
    class J {
      constructor() {
        return username.getUsername();
      }
    }
    cResult[7] = items2;
    cResult[8] = J;
    tmp28 = J;
    tmp27 = items2;
  } else {
    tmp27 = cResult[7];
    tmp28 = cResult[8];
  }
  const tmpResult5 = ref(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp27, tmp28);
  id = first2.id;
  if (cResult[9] === first2.attachments) {
    if (cResult[10] === first1) {
      if (cResult[11] === tmp20) {
        tmp31 = cResult[12];
      }
      UserStore = tmp31;
      if (cResult[16] === first2.attachments) {
        if (cResult[17] === first1) {
          if (cResult[18] === id) {
            if (cResult[19] === tmp31) {
              let tmp34;
              let tmp36;
              let tmp40;
              let tmp39;
              if (cResult[20] === tmp20) {
                tmp34 = cResult[21];
              }
              if (cResult[22] !== reactTag) {
                function me(arg0) {
                  arg0.reactTag = reactTag;
                }
                cResult[22] = reactTag;
                class J {
                  constructor() {
                    return username.getUsername();
                  }
                }
                cResult[23] = me;
                tmp36 = me;
              } else {
                tmp36 = cResult[23];
              }
              if (cResult[24] !== first2.attachments) {
                function oe() {
                  const attachments = first2.attachments;
                  const found = attachments.filter((filename) => {
                    filename = filename.filename;
                    const obj = ref(closure_1_2[18]);
                    return obj.isImageFile(filename);
                  });
                  const mapped = found.map((item) => {
                    let closure_0 = item;
                    const promise = new Promise(f108231);
                    const nextPromise = promise.then((result) => {
                      id = result;
                      return closure_1_4((arg0) => {
                        const obj = {};
                        const merged = Object.assign(arg0);
                        obj[id.id] = id;
                        return obj;
                      });
                    });
                    return nextPromise.finally(() => closure_1_8((arg0) => arg0 - 1));
                  });
                }
                const items3 = [first2.attachments];
                class J {
                  constructor() {
                    return username.getUsername();
                  }
                }
                cResult[24] = first2.attachments;
                cResult[25] = oe;
                cResult[26] = items3;
              }
              class J {
                constructor() {
                  return username.getUsername();
                }
              }
              if (cResult[27] !== first3) {
                function de() {
                  if (0 === first3) {
                    closure_2(metroRequire(ref.current));
                  }
                }
                const items4 = [first3];
                class J {
                  constructor() {
                    return username.getUsername();
                  }
                }
                cResult[27] = first3;
                cResult[28] = de;
                cResult[29] = items4;
                tmp40 = items4;
                tmp39 = de;
              } else {
                tmp39 = cResult[28];
                tmp40 = cResult[29];
              }
              const effect = obj3.useEffect(tmp39, tmp40);
              let str = "";
              if ("" === first2.content) {
                if (0 === first2.attachments.length) {
                  return null;
                }
              }
              if (first3 > 0) {
                let tmp62;
                let tmp67;
                const _Symbol = Symbol;
                if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp65 = closure_18(closure_8, {});
                  class J {
                    constructor() {
                      return username.getUsername();
                    }
                  }
                  cResult[30] = tmp65;
                  tmp62 = tmp65;
                } else {
                  tmp62 = cResult[30];
                }
                class J {
                  constructor() {
                    return username.getUsername();
                  }
                }
                if (cResult[31] !== first2.attachments) {
                  let tmp68;
                  let tmp69;
                  const _Symbol2 = Symbol;
                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                    function pe(filename) {
                      filename = filename.filename;
                      const obj = ref(closure_2[18]);
                      return obj.isVideoFile(filename);
                    }
                    cResult[33] = pe;
                    class J {
                      constructor() {
                        return username.getUsername();
                      }
                    }
                  } else {
                    tmp68 = cResult[33];
                  }
                  class J {
                    constructor() {
                      return username.getUsername();
                    }
                  }
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    function we(uri, arg1) {
                      let closure_0 = uri;
                      let obj = {
                        source: { uri: uri.url },
                        onLoad(arg0) {
                          let closure_0 = arg0;
                          closure_1_4((arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            size = { width: closure_0.naturalSize.width, height: closure_0.naturalSize.height };
                            obj[closure_0.id] = size;
                            return obj;
                          });
                          closure_1_8((arg0) => arg0 - 1);
                        },
                        onError() {
                          return closure_1_8((arg0) => arg0 - 1);
                        }
                      };
                      return closure_1_18(first(closure_2[20]), obj, arg1);
                    }
                    cResult[34] = we;
                    class J {
                      constructor() {
                        return username.getUsername();
                      }
                    }
                  } else {
                    tmp69 = cResult[34];
                  }
                  let attachments = first2.attachments;
                  let found = attachments.filter(tmp68);
                  let mapped = found.map(tmp69);
                  cResult[31] = first2.attachments;
                  cResult[32] = mapped;
                  tmp67 = mapped;
                } else {
                  tmp67 = cResult[32];
                }
                if (cResult[35] === tmp4.dummyVideoAttachments) {
                  let tmp71;
                  if (cResult[36] === tmp67) {
                    tmp71 = cResult[37];
                  }
                  return tmp71;
                }
                let obj4 = { children: items5 };
                items5 = [tmp62, ];
                let obj5 = { style: tmp66, children: tmp67 };
                items5[1] = closure_18(uri, obj5);
                const tmp75 = closure_19(uri, obj4);
                cResult[35] = tmp4.dummyVideoAttachments;
                cResult[36] = tmp67;
                cResult[37] = tmp75;
                tmp71 = tmp75;
              } else {
                let tmp42;
                if (cResult[38] !== tmp34) {
                  const obj6 = { ref: null, onTapImage: tmp34, inverted: false };
                  class J {
                    constructor() {
                      return username.getUsername();
                    }
                  }
                  const tmp45 = closure_18(reactTag(11519), obj6);
                  cResult[38] = tmp34;
                  cResult[39] = tmp45;
                  tmp42 = tmp45;
                } else {
                  tmp42 = cResult[39];
                }
                if (cResult[40] === first2.content) {
                  if (cResult[41] === first2.id) {
                    if (cResult[42] === stateFromStores) {
                      if (cResult[43] === tmp31) {
                        let tmp46;
                        if (cResult[44] === stateFromStores2) {
                          tmp46 = cResult[45];
                        }
                        if (cResult[46] === tmp36) {
                          let tmp55;
                          if (cResult[47] === tmp46) {
                            tmp55 = cResult[48];
                          }
                          if (cResult[49] === tmp42) {
                            let tmp59;
                            if (cResult[50] === tmp55) {
                              tmp59 = cResult[51];
                            }
                            return tmp59;
                          }
                          class J {
                            constructor() {
                              return username.getUsername();
                            }
                          }
                          const obj7 = { children: items6 };
                          items6 = [tmp42, tmp55];
                          const tmp61 = closure_19(uri, obj7);
                          cResult[49] = tmp42;
                          cResult[50] = tmp55;
                          cResult[51] = tmp61;
                          tmp59 = tmp61;
                        }
                        class J {
                          constructor() {
                            return username.getUsername();
                          }
                        }
                        const obj9 = { rowGenerator, message: tmp46, modifyRow: tmp36, pointerEvents: "none" };
                        const tmp58 = closure_18(reactTag(8336), obj9);
                        cResult[46] = tmp36;
                        cResult[47] = tmp46;
                        cResult[48] = tmp58;
                        tmp55 = tmp58;
                      }
                    }
                  }
                }
                const tmpResult6 = ref(5118);
                class J {
                  constructor() {
                    return username.getUsername();
                  }
                }
                tmp48[0] = first2.id;
                const _Date = Date;
                const createMessageRecord = tmpResult6.createMessageRecord;
                const self = this;
                const self2 = this;
                const obj8 = reactTag(11);
                const date = new Date(obj8.extractTimestamp(first2.id));
                tmp48[1] = date.toUTCString();
                tmp48[2] = c20;
                tmp48[3] = MessageTypes.DEFAULT;
                let tmp53 = stateFromStores;
                if (stateFromStores == null) {
                  tmp53 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores2 };
                  const obj10 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores2 };
                }
                tmp48[4] = tmp53;
                tmp48[5] = first2.content;
                tmp48[6] = tmp31;
                const messageRecord = createMessageRecord(tmp48);
                cResult[40] = first2.content;
                cResult[41] = first2.id;
                cResult[42] = stateFromStores;
                cResult[43] = tmp31;
                cResult[44] = stateFromStores2;
                cResult[45] = messageRecord;
                tmp46 = messageRecord;
              }
            }
          }
        }
      }
      class J {
        constructor() {
          return username.getUsername();
        }
      }
      cResult[16] = first2.attachments;
      cResult[17] = first1;
      cResult[18] = id;
      cResult[19] = tmp31;
      cResult[20] = tmp20;
      cResult[21] = tmp35;
      tmp34 = tmp35;
    }
  }
  if (cResult[13] === first1) {
    let tmp32;
    if (cResult[14] === tmp20) {
      tmp32 = cResult[15];
    }
    const attachments1 = first2.attachments;
    const mapped1 = attachments1.map(tmp32);
    class J {
      constructor() {
        return username.getUsername();
      }
    }
    cResult[9] = first2.attachments;
    cResult[10] = first1;
    cResult[11] = tmp20;
    cResult[12] = mapped1;
    tmp31 = mapped1;
  }
  function ae(filename) {
    let obj2;
    let str;
    let tmp4;
    const obj = { filename: str, flags: obj2.getSpoilerFlagsForAttachment(filename), size: 0, proxy_url: filename.url };
    const merged = Object.assign(filename);
    str = filename.filename;
    if (str == null) {
      str = "";
    }
    obj2 = SafetyHubUtils;
    const obj3 = MediaFormatTesters;
    if (obj3.isImageFile(filename.filename)) {
      const obj4 = { width, height };
      const merged1 = Object.assign(obj);
      width = undefined;
      if (first1[filename.id] != null) {
        width = tmp16.width;
      }
      if (width == null) {
        width = closure_12;
      }
      height = undefined;
      if (first1[filename.id] != null) {
        height = tmp18.height;
      }
      if (height == null) {
        height = map1;
      }
      tmp4 = obj4;
    } else {
      tmp4 = obj;
      const tmp2Result = MediaFormatTesters;
      if (tmp2Result.isVideoFile(filename.filename)) {
        const obj5 = { width, height, proxy_url: uri.uri, filename };
        const merged2 = Object.assign(obj);
        tmp4 = obj5;
      }
    }
    return tmp4;
  }
  cResult[13] = first1;
  cResult[14] = tmp20;
  cResult[15] = ae;
  tmp32 = ae;
}) : (function(flaggedContent) {
  let assetSource;
  let channelId;
  let closure_2;
  let closure_4;
  let createMessageRecord;
  let date;
  let first1;
  let first3;
  let found;
  let id;
  let items8;
  let memo;
  let obj8;
  let ref;
  let tmp14;
  let tmp25Result;
  let tmp27;
  let username;
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = closure_22();
  let obj = ref(504);
  const items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => memo.getCurrentUser());
  let obj2 = react;
  ref = react.useRef(null);
  const tmp7 = first1(react.useState(null), 2);
  const reactTag = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(react.useState({}), 2);
  const tmp6 = first1;
  first1 = tmp9[0];
  react = tmp9[1];
  let obj3 = ref(504);
  const items1 = [id];
  const resolveAssetSource = first3.resolveAssetSource;
  const tmp12 = reactTag;
  if (obj3.useStateFromStores(items1, () => {
    const obj = ref(closure_2[14]);
    return obj.isThemeLight(id.theme);
  })) {
    assetSource = resolveAssetSource(tmp12(11517));
    tmp14 = tmp12;
  } else {
    assetSource = resolveAssetSource(tmp12(11518));
    tmp14 = tmp12;
  }
  const first2 = flaggedContent[0];
  const tmp6Result = tmp6(obj2.useState(first2.attachments.length), 2);
  first3 = tmp6Result[0];
  let closure_8 = tmp6Result[1];
  let tmp2Result = tmp2(504);
  const items2 = [SafetyHubStore];
  id = first2.id;
  const items3 = [first2.attachments, first1, assetSource];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => username.getUsername());
  memo = obj2.useMemo(() => {
    let uri;
    const attachments = first2.attachments;
    return attachments.map((filename) => {
      let obj2;
      let str;
      let tmp4;
      const obj = { filename: str, flags: obj2.getSpoilerFlagsForAttachment(filename), size: 0, proxy_url: filename.url };
      const merged = Object.assign(filename);
      str = filename.filename;
      if (str == null) {
        str = "";
      }
      obj2 = ref(closure_2[17]);
      const obj3 = ref(closure_2[18]);
      if (obj3.isImageFile(filename.filename)) {
        const obj4 = { width, height };
        const merged1 = Object.assign(obj);
        width = undefined;
        if (first1[filename.id] != null) {
          width = tmp16.width;
        }
        if (width == null) {
          width = closure_2_12;
        }
        height = undefined;
        if (first1[filename.id] != null) {
          height = tmp18.height;
        }
        if (height == null) {
          height = closure_2_13;
        }
        tmp4 = obj4;
      } else {
        tmp4 = obj;
        const tmp2Result = ref(closure_2[18]);
        if (tmp2Result.isVideoFile(filename.filename)) {
          const obj5 = { width, height, proxy_url: uri.uri, filename };
          const merged2 = Object.assign(obj);
          tmp4 = obj5;
        }
      }
      return tmp4;
    });
  }, items3);
  const items4 = [memo, first2.attachments, id, first1, assetSource];
  const items5 = [reactTag];
  const callback = obj2.useCallback((nativeEvent) => {
    let attachments;
    let index;
    let layout;
    let messageId;
    let uri;
    ({ index, layout } = nativeEvent.nativeEvent);
    const mapped = memo.map((uri, mediaIndex) => {
      let tmp5;
      let url;
      size = { uri: uri.url, videoURI: url, thumbnail: tmp5, mediaIndex, channelId, messageId, width, height, accessoryType: "attachment", attachmentId: uri.id };
      url = undefined;
      const obj2 = ref(closure_2[18]);
      if (obj2.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        url = uri.url;
      }
      tmp5 = undefined;
      const tmpResult = ref(closure_2[18]);
      if (tmpResult.isVideoFile(attachments.attachments[mediaIndex].filename)) {
        const size1 = { width, height, uri: uri.uri };
        tmp5 = size1;
      }
      width = undefined;
      if (first1[uri.id] != null) {
        width = tmp10.width;
      }
      if (width == null) {
        width = closure_2_12;
      }
      height = undefined;
      if (first1[uri.id] != null) {
        height = tmp12.height;
      }
      if (height == null) {
        height = closure_2_13;
      }
      return size;
    });
    const obj = openMediaModal;
    obj.openMediaModal({ initialIndex: index, initialSources: mapped, disableDownload: true, disableMediaOverlayButton: true, shareable: false, originViewOrOriginLayout: layout });
  }, items4);
  const items6 = [first2.attachments];
  const callback1 = obj2.useCallback((arg0) => {
    arg0.reactTag = reactTag;
  }, items5);
  const effect = obj2.useEffect(() => {
    const attachments = first2.attachments;
    const found = attachments.filter((filename) => {
      filename = filename.filename;
      const obj = ref(closure_1_2[18]);
      return obj.isImageFile(filename);
    });
    const mapped = found.map((item) => {
      let closure_0 = item;
      const promise = new Promise(f108231);
      const nextPromise = promise.then((result) => {
        id = result;
        return closure_1_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[id.id] = id;
          return obj;
        });
      });
      return nextPromise.finally(() => closure_1_8((arg0) => arg0 - 1));
    });
  }, items6);
  const items7 = [first3];
  const effect1 = obj2.useEffect(() => {
    if (0 === first3) {
      closure_2(metroRequire(ref.current));
    }
  }, items7);
  if ("" !== first2.content) {
    let obj10;
    if (first3 > 0) {
      let obj4 = { children: items8 };
      items8 = [closure_18(closure_8, {}), ];
      let obj5 = {
        style: tmp.dummyVideoAttachments,
        children: found.map((uri, index) => {
              let closure_0 = uri;
              let obj = {
                source: { uri: uri.url },
                onLoad(arg0) {
                  let closure_0 = arg0;
                  closure_1_4((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    size = { width: closure_0.naturalSize.width, height: closure_0.naturalSize.height };
                    obj[closure_0.id] = size;
                    return obj;
                  });
                  closure_1_8((arg0) => arg0 - 1);
                },
                onError() {
                  return closure_1_8((arg0) => arg0 - 1);
                }
              };
              return closure_1_18(first(closure_2[20]), obj, index);
            })
      };
      let attachments = first2.attachments;
      found = attachments.filter((filename) => {
        filename = filename.filename;
        const obj = ref(closure_2[18]);
        return obj.isVideoFile(filename);
      });
      items8[1] = closure_18(assetSource, obj5);
      obj10 = obj4;
    } else {
      const obj6 = { ref, onTapImage: callback, inverted: false };
      const items9 = [closure_18(tmp14(11519), obj6), ];
      const obj7 = { rowGenerator, message: createMessageRecord(obj8), modifyRow: callback1, pointerEvents: "none" };
      const tmp14Result = tmp14(8336);
      const _Date = Date;
      obj8 = { id: first2.id, timestamp: date.toUTCString(), channel_id, type: MessageTypes.DEFAULT, author: tmp27, content: first2.content, attachments: memo };
      createMessageRecord = tmp2(5118).createMessageRecord;
      ref(5118);
      const self = this;
      const self2 = this;
      const tmp14Result2 = tmp14(11);
      tmp27 = stateFromStores;
      date = new Date(tmp14Result2.extractTimestamp(first2.id));
      if (stateFromStores == null) {
        tmp27 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
        const obj9 = { id: "0", avatar: null, discriminator: "0000", username: stateFromStores1 };
      }
      obj10 = { children: items9 };
      items9[1] = closure_18(tmp14Result, obj7);
    }
    tmp25Result = closure_19(tmp26, obj10);
  } else {
    tmp25Result = null;
  }
  return tmp25Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationMessageEvidence.tsx");

export default tmp6;