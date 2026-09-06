// === Module 13899: ShareScreenModal ===

// Module 13899 (ShareScreenModal)
import LoggerDefault from "Logger" /* 3 */;
import ChannelTypes from "ChannelTypes" /* 1094 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function onClose() {
  ModalActionCreatorsDefault.popWithKey(SHARE_SCREEN_MODAL_KEY);
}
const SHARE_SCREEN_MODAL_KEY = fn(13851).SHARE_SCREEN_MODAL_KEY;
const jsx = fn(21).jsx;
let closure_9 = new LoggerDefault("ShareScreenModal");
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default function ShareScreenModal(text) {
  text = text.text;
  require = text;
  const channelId = text.channelId;
  const shareId = text.shareId;
  const attachmentManifest = text.attachmentManifest;
  let first;
  noop = undefined;
  let stateFromStores;
  let obj = noop;
  const tmp = first(noop.useState(null), 2);
  first = tmp[0];
  noop = tmp[1];
  let items = [shareId, attachmentManifest];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAttachments() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          v3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (undefined !== closure_2) {
                if (undefined !== c3) {
                  c3 = 1;
                  let obj1 = channelId(shareId[8]);
                  c4 = 2;
                  v3 = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.sharedAttachments(tmp20, tmp21);
                  return obj1;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              logger.error("Error fetching attachments:", closure_128_1);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              v3(closure_128_0);
              c3 = 0;
            }
            c3 = 0;
            v3 = 3;
            obj = { value, done: true };
            return obj;
          }
          v3 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            v3 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    !(function fetchAttachments() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp6 = first(noop.useState(null), 2);
  closure_7 = tmp6[1];
  const items2 = [channelId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    closure_0 = async function _fetchChannel() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (null != closure_1) {
                if (null == stateFromStores) {
                  c3 = 1;
                  let obj1 = channelId(shareId[10]);
                  c4 = 2;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.fetchChannel(tmp20);
                  return obj1;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              logger.error("Error fetching channel:", closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              closure_1_7(closure_128_0);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    !(function fetchChannel() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items2);
  let first1 = stateFromStores;
  if (stateFromStores == null) {
    first1 = tmp6[0];
  }
  const items3 = [text, first, channelId, first1];
  const memo = obj.useMemo(() => {
    const obj = { text, attachments: null };
    let items = first;
    if (first == null) {
      items = [];
    }
    obj.attachments = items;
    if (null != first1) {
      if (first1.type !== ChannelTypes.ChannelTypes.DM) {
        obj.targetChannelId = channelId;
      } else {
        let isArray = first1;
        if (first1) {
          isArray = "recipients" in first1;
        }
        if (isArray) {
          const _Array = Array;
          isArray = Array.isArray(first1.recipients);
        }
        if (isArray) {
          obj.targetUserId = first1.recipients[0];
        } else {
          let tmp4 = first1;
          if (first1) {
            tmp4 = "recipient" in first1;
          }
          if (tmp4) {
            tmp4 = "id" in first1.recipient;
          }
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
  obj = { sharedContent: memo, onClose };
  return first1(channelId(shareId[12]), obj);
};