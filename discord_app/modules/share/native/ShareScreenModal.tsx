// === Module 13729: ShareScreenModal ===

// Module 13729 (ShareScreenModal)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import ShareScreenConstants from "ShareScreenConstants" /* 13680 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

function onClose() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(SHARE_SCREEN_MODAL_KEY);
}
let react = react_mod;
const SHARE_SCREEN_MODAL_KEY = ShareScreenConstants.SHARE_SCREEN_MODAL_KEY;
const jsx = Fragment.jsx;
let closure_9 = new LoggerDefault("ShareScreenModal");
const tmp2 = new LoggerDefault("ShareScreenModal");
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((shareId) => {
  let attachmentManifest;
  let channelId;
  let closure_5;
  let stateFromStores;
  let text;
  let tmp6;
  let obj = channelId(attachmentManifest[9]);
  const cResult = obj.c(20);
  ({ text, channelId } = shareId);
  shareId = shareId.shareId;
  attachmentManifest = shareId.attachmentManifest;
  let obj2 = react;
  const tmp4 = stateFromStores;
  [tmp6, _asyncToGenerator] = stateFromStores(react.useState(null), 2);
  const tmp5 = stateFromStores(react.useState(null), 2);
  if (cResult[0] === attachmentManifest) {
    let tmp7;
    let tmp8;
    let tmp11;
    let tmp13;
    if (cResult[1] === shareId) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = obj2.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ChannelStore];
      cResult[4] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== channelId) {
      const fn2 = function v() {
        return ChannelStore.getChannel(channelId);
      };
      cResult[5] = channelId;
      cResult[6] = fn2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[6];
    }
    const tmpResult = channelId(attachmentManifest[11]);
    stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13);
    react = tmp4(obj2.useState(null), 2)[1];
    tmp4(obj2.useState(null), 2);
    if (cResult[7] === channelId) {
      let tmp17;
      let tmp18;
      let tmp22;
      if (cResult[8] === stateFromStores) {
        tmp17 = cResult[9];
        tmp18 = cResult[10];
      }
      const effect1 = obj2.useEffect(tmp17, tmp18);
      let tmp20 = stateFromStores;
      if (stateFromStores == null) {
        tmp20 = tmp16;
      }
      if (cResult[11] === tmp6) {
        if (cResult[12] === channelId) {
          if (cResult[13] === tmp20) {
            let tmp21;
            let tmp26;
            if (cResult[14] === text) {
              tmp21 = cResult[15];
            }
            if (cResult[18] !== tmp21) {
              const tmp30 = jsx(shareId(attachmentManifest[14]), { sharedContent: tmp21, onClose });
              cResult[18] = tmp21;
              cResult[19] = tmp30;
              tmp26 = tmp30;
            } else {
              tmp26 = cResult[19];
            }
            return tmp26;
          }
        }
      }
      if (cResult[16] !== tmp6) {
        let items1 = tmp6;
        if (tmp6 == null) {
          items1 = [];
        }
        cResult[16] = tmp6;
        cResult[17] = items1;
        tmp22 = items1;
      } else {
        tmp22 = cResult[17];
      }
      let obj4 = { text, attachments: tmp22 };
      if (null != tmp20) {
        if (tmp20.type === channelId(attachmentManifest[13]).ChannelTypes.DM) {
          let isArray = tmp20;
          if (isArray) {
            isArray = "recipients" in tmp20;
          }
          if (isArray) {
            const _Array = Array;
            isArray = Array.isArray(tmp20.recipients);
          }
          if (isArray) {
            obj4.targetUserId = tmp20.recipients[0];
          } else {
            const tmp24 = tmp20 && "recipient" in tmp20 && "id" in tmp20.recipient;
            if (tmp24) {
              const recipient = tmp20.recipient;
              let id;
              if (recipient != null) {
                id = recipient.id;
              }
              obj4.targetUserId = id;
            }
          }
        } else {
          obj4.targetChannelId = channelId;
        }
      }
      cResult[11] = tmp6;
      cResult[12] = channelId;
      class R {
        constructor() {
          let logger;
          function fetchChannel() {
            return closure_0(...arguments);
          }
          let closure_0 = _asyncToGenerator(async () => {
            let obj2;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c3;
              try {
                let closure_1;
                v3 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_0 = undefined;
                    closure_1 = undefined;
                    if (null != closure_0) {
                      if (null == c4) {
                        c3 = 1;
                        c4 = 2;
                        v3 = 1;
                        const obj5 = { value: obj2.fetchChannel(tmp17), done: false };
                        obj2 = shareId(attachmentManifest[12]);
                        return obj5;
                      }
                    }
                  }
                } else if (1 === c4) {
                  c3 = 0;
                  closure_1 = closure_2;
                  logger.error("Error fetching channel:", closure_1);
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = value;
                  v3(closure_0);
                  c3 = 0;
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp21) {
                closure_2 = tmp21;
                if (0 === c3) {
                  v3 = 3;
                  throw tmp21;
                } else {
                  c4 = 1;
                }
              }
            }
          });
          const tmp = fetchChannel();
        }
      }
      cResult[13] = tmp20;
      cResult[14] = text;
      cResult[15] = obj4;
      tmp21 = obj4;
    }
    class R {
      constructor() {
        let logger;
        function fetchChannel() {
          return closure_0(...arguments);
        }
        let closure_0 = _asyncToGenerator(async () => {
          let obj2;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let closure_1;
              v3 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = undefined;
                  closure_1 = undefined;
                  if (null != closure_0) {
                    if (null == c4) {
                      c3 = 1;
                      c4 = 2;
                      v3 = 1;
                      const obj5 = { value: obj2.fetchChannel(tmp17), done: false };
                      obj2 = shareId(attachmentManifest[12]);
                      return obj5;
                    }
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                closure_1 = closure_2;
                logger.error("Error fetching channel:", closure_1);
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                v3(closure_0);
                c3 = 0;
              }
              v3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp21) {
              closure_2 = tmp21;
              if (0 === c3) {
                v3 = 3;
                throw tmp21;
              } else {
                c4 = 1;
              }
            }
          }
        });
        const tmp = fetchChannel();
      }
    }
    const items2 = [channelId, stateFromStores];
    cResult[7] = channelId;
    cResult[8] = stateFromStores;
    cResult[9] = R;
    cResult[10] = items2;
    tmp18 = items2;
    tmp17 = R;
  }
  const fn = function u() {
    let logger;
    function fetchAttachments() {
      return closure_0(...arguments);
    }
    let closure_0 = _asyncToGenerator(async () => {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          let closure_1;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              closure_1 = undefined;
              if (undefined !== closure_1) {
                if (undefined !== closure_2) {
                  v0 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj2.sharedAttachments(tmp26, tmp17), done: false };
                  obj2 = shareId(attachmentManifest[10]);
                  return obj5;
                }
              }
            }
          } else if (1 === c4) {
            v0 = 0;
            closure_1 = closure_2;
            logger.error("Error fetching attachments:", closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            v0(closure_0);
            v0 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp20) {
          closure_2 = tmp20;
          if (0 === v0) {
            c5 = 3;
            throw tmp20;
          } else {
            c4 = 1;
          }
        }
      }
    });
    const tmp = fetchAttachments();
  };
  const items3 = [shareId, attachmentManifest];
  cResult[0] = attachmentManifest;
  cResult[1] = shareId;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp8 = items3;
  tmp7 = fn;
}) : ((text) => {
  let closure_5;
  text = text.text;
  require = text;
  const channelId = text.channelId;
  const shareId = text.shareId;
  const attachmentManifest = text.attachmentManifest;
  let first;
  react = undefined;
  let stateFromStores;
  let obj = react;
  let tmp = first(react.useState(null), 2);
  first = tmp[0];
  react = tmp[1];
  let items = [shareId, attachmentManifest];
  const effect = react.useEffect(() => {
    function fetchAttachments() {
      return obj(...arguments);
    }
    let obj = function _fetchAttachments2() {
      let logger;
      obj = _asyncToGenerator(async () => {
        let obj2;
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_1;
            let closure_0;
            v3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                closure_0 = undefined;
                if (undefined !== closure_2) {
                  if (undefined !== c3) {
                    c3 = 1;
                    c4 = 2;
                    v3 = 1;
                    const obj5 = { value: obj2.sharedAttachments(tmp17, tmp18), done: false };
                    obj2 = channelId(shareId[10]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Error fetching attachments:", closure_1);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              v3(closure_0);
              c3 = 0;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp21) {
            closure_2 = tmp21;
            if (0 === c3) {
              v3 = 3;
              throw tmp21;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetchAttachments();
  }, items);
  let tmp4 = shareId;
  let obj2 = require("get initialized");
  const items1 = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp6 = first(react.useState(null), 2);
  let closure_7 = tmp6[1];
  const items2 = [channelId, stateFromStores];
  let first1 = tmp6[0];
  const effect1 = react.useEffect(() => {
    function fetchChannel() {
      return obj(...arguments);
    }
    let obj = function _fetchChannel2() {
      let logger;
      obj = _asyncToGenerator(async () => {
        let obj2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            let closure_1;
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                closure_0 = undefined;
                if (null != closure_1) {
                  if (null == closure_1_6) {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj2.fetchChannel(tmp17), done: false };
                    obj2 = channelId(shareId[12]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Error fetching channel:", closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_1_7(closure_0);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp21) {
            closure_2 = tmp21;
            if (0 === c3) {
              c5 = 3;
              throw tmp21;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetchChannel();
  }, items2);
  let tmp9 = stateFromStores;
  if (stateFromStores == null) {
    tmp9 = first1;
  }
  first1 = tmp9;
  const items3 = [text, first, channelId, tmp9];
  const memo = obj.useMemo(() => {
    let items;
    const obj = { text: require, attachments: items };
    items = first;
    if (first == null) {
      items = [];
    }
    if (null != first1) {
      if (first1.type !== ChannelTypes.ChannelTypes.DM) {
        obj.targetChannelId = channelId;
      } else {
        let isArray = first1 && "recipients" in first1;
        if (isArray) {
          const _Array = Array;
          isArray = Array.isArray(first1.recipients);
        }
        if (isArray) {
          obj.targetUserId = first1.recipients[0];
        } else {
          const tmp4 = first1 && "recipient" in first1 && "id" in first1.recipient;
          if (tmp4) {
            const recipient = first1.recipient;
            let id;
            if (recipient != null) {
              id = recipient.id;
            }
            obj.targetUserId = id;
          }
        }
      }
    }
    return obj;
  }, items3);
  let obj3 = { sharedContent: memo, onClose };
  return first1(channelId(tmp4[14]), obj3);
});
const result = size.fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default tmp3;