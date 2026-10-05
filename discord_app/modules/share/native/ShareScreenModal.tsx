// discord_app/modules/share/native/ShareScreenModal.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function onClose() {
  ModalActionCreatorsDefault.popWithKey(SHARE_SCREEN_MODAL_KEY);
}
const SHARE_SCREEN_MODAL_KEY = fn(13664).SHARE_SCREEN_MODAL_KEY;
const jsx = fn(21).jsx;
let closure_9 = new LoggerDefault("ShareScreenModal");
const ReactCompilerGating = fn(558);
const tmp2 = new LoggerDefault("ShareScreenModal");
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (shareId) => {
      const cResult = channelId(attachmentManifest[9]).c(20);
      ({ text, channelId } = shareId);
      shareId = shareId.shareId;
      attachmentManifest = shareId.attachmentManifest;
      let tmp4 = null;
      let obj = channelId(attachmentManifest[9]);
      const tmp5 = stateFromStores;
      [tmp7, asyncGeneratorStep] = stateFromStores(noop.useState(null), 2);
      if (cResult[0] === attachmentManifest) {
        if (cResult[1] === shareId) {
          let tmp8 = cResult[2];
          let tmp9 = cResult[3];
        }
        const effect = obj2.useEffect(tmp8, tmp9);
        let str = globalThis;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[4] = items;
          let tmp11 = items;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== channelId) {
          const fn2 = function v() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[5] = channelId;
          cResult[6] = fn2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[6];
        }
        stateFromStores = channelId(tmp2[11]).useStateFromStores(tmp11, tmp13);
        const tmpResult = channelId(tmp2[11]);
        noop = tmp5(obj2.useState(tmp4), 2)[1];
        if (cResult[7] === channelId) {
          if (cResult[8] === stateFromStores) {
            let tmp17 = cResult[9];
            let tmp18 = cResult[10];
          }
          const effect1 = obj2.useEffect(tmp17, tmp18);
          let tmp20 = stateFromStores;
          if (stateFromStores == tmp4) {
            tmp20 = tmp16;
          }
          if (cResult[11] === tmp7) {
            if (cResult[12] === channelId) {
              if (cResult[13] === tmp20) {
                if (cResult[14] === text) {
                  if (cResult[18] !== cResult[15]) {
                    let obj3 = { sharedContent: tmp21, onClose };
                    const tmp31 = jsx(shareId(tmp2[14]), { sharedContent: tmp21, onClose });
                    cResult[18] = tmp21;
                    cResult[19] = tmp31;
                    let tmp27 = tmp31;
                  } else {
                    tmp27 = cResult[19];
                  }
                  return tmp27;
                }
              }
            }
          }
          if (cResult[16] !== tmp7) {
            let items1 = tmp7;
            if (tmp7 == tmp4) {
              items1 = [];
            }
            cResult[16] = tmp7;
            cResult[17] = items1;
            let tmp22 = items1;
          } else {
            tmp22 = cResult[17];
          }
          let obj4 = { text, attachments: tmp22 };
          if (tmp4 == tmp20) {
            cResult[11] = tmp7;
            cResult[12] = channelId;
            cResult[13] = tmp20;
            cResult[14] = text;
            cResult[15] = obj4;
          } else if (tmp20.type !== channelId(tmp2[13]).ChannelTypes.DM) {
            obj4.targetChannelId = channelId;
          }
          let isArrayResult = tmp20;
          if (tmp20) {
            isArrayResult = "recipients" in tmp20;
          }
          if (isArrayResult) {
            const _Array = str.Array;
            str = tmp20.recipients;
            isArrayResult = _Array.isArray(str);
          }
          if (isArrayResult) {
            obj4.targetUserId = tmp20.recipients[0];
          } else {
            let tmp24 = tmp20;
            if (tmp20) {
              str = "recipient";
              tmp24 = "recipient" in tmp20;
            }
            if (tmp24) {
              str = "id";
              tmp24 = "id" in tmp20.recipient;
            }
            if (tmp24) {
              str = tmp20.recipient;
              tmp4 = str == tmp4;
              let id;
              if (!tmp4) {
                id = str.id;
              }
              obj4.targetUserId = id;
            }
          }
        }
        class R {
          constructor() {
            closure_0 = closure_3(async () => {
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp6 === 3) {
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
                      closure_1 = tmp3;
                      closure_0 = tmp7;
                      closure_128_0 = undefined;
                      closure_128_1 = undefined;
                      if (null != closure_0) {
                        if (null == c4) {
                          c3 = 1;
                          c4 = 2;
                          v3 = 1;
                          const obj5 = { value: shareId(attachmentManifest[12]).fetchChannel(tmp20), done: false };
                          return obj5;
                        }
                      }
                    }
                  } else {
                    if (1 === tmp7) {
                      c3 = 0;
                      closure_128_1 = closure_2;
                      logger.error("Error fetching channel:", closure_128_1);
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
                    const obj = { value, done: true };
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
            });
            tmp = (function fetchChannel() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            return;
          }
        }
        const items2 = [channelId, stateFromStores];
        cResult[7] = channelId;
        cResult[8] = stateFromStores;
        cResult[9] = R;
        cResult[10] = items2;
        tmp18 = items2;
        tmp17 = R;
        const tmp5Result = tmp5(obj2.useState(tmp4), 2);
      }
      const fn = function u() {
        closure_0 = asyncGeneratorStep(async () => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
                  closure_1 = tmp3;
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  if (undefined !== closure_1) {
                    if (undefined !== closure_2) {
                      let v0 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = {
                        value: shareId(attachmentManifest[10]).sharedAttachments(tmp30, tmp20),
                        done: false,
                      };
                      return obj5;
                    }
                  }
                }
              } else {
                if (1 === tmp7) {
                  v0 = 0;
                  closure_128_1 = closure_2;
                  logger.error("Error fetching attachments:", closure_128_1);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_0 = value;
                  v0(closure_128_0);
                  v0 = 0;
                }
                v0 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c5 = 3;
            } catch (tmp23) {
              closure_2 = tmp23;
              if (tmp4 === v0) {
                c5 = tmp2;
                throw tmp23;
              } else {
                c4 = tmp;
              }
            }
          }
        });
        (function fetchAttachments() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      };
      const items3 = [shareId, attachmentManifest];
      cResult[0] = attachmentManifest;
      cResult[1] = shareId;
      cResult[2] = fn;
      cResult[3] = items3;
      tmp9 = items3;
      tmp8 = fn;
      const tmp6 = stateFromStores(noop.useState(null), 2);
    }
  : (text) => {
      text = text.text;
      require = text;
      const channelId = text.channelId;
      const shareId = text.shareId;
      const attachmentManifest = text.attachmentManifest;
      let first;
      noop = undefined;
      let stateFromStores;
      const tmp = first(noop.useState(null), 2);
      first = tmp[0];
      noop = tmp[1];
      let items = [shareId, attachmentManifest];
      const effect = noop.useEffect(() => {
        closure_0 = async function _fetchAttachments2() {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
                  closure_1 = tmp3;
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  if (undefined !== closure_2) {
                    if (undefined !== c3) {
                      c3 = 1;
                      c4 = 2;
                      v3 = 1;
                      const obj5 = { value: channelId(shareId[10]).sharedAttachments(tmp20, tmp21), done: false };
                      return obj5;
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
                const obj = { value, done: true };
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
        closure_0 = async function _fetchChannel2() {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
                  closure_1 = tmp3;
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  if (null != closure_1) {
                    if (null == stateFromStores) {
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = { value: channelId(shareId[12]).fetchChannel(tmp20), done: false };
                      return obj5;
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
                const obj = { value, done: true };
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
      const memo = noop.useMemo(() => {
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
      return first1(channelId(shareId[14]), { sharedContent: memo, onClose });
    };
