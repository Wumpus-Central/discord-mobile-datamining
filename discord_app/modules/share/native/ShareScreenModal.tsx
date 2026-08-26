// discord_app/modules/share/native/ShareScreenModal.tsx
import timestampDefault from "../../debug/Logger.tsx";
import _modDef4675 from "../../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../../stores/ChannelStore.tsx";
import { SHARE_SCREEN_MODAL_KEY } from "ShareScreenConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

let require = arg1;
function onClose() {
  _modDef4675.popWithKey(SHARE_SCREEN_MODAL_KEY);
}
let closure_9 = new timestampDefault("ShareScreenModal");
const tmp2 = new timestampDefault("ShareScreenModal");
const result = require("set").fileFinishedImporting("modules/share/native/ShareScreenModal.tsx");

export default function ShareScreenModal(text) {
  text = text.text;
  require = text;
  const channelId = text.channelId;
  const shareId = text.shareId;
  const attachmentManifest = text.attachmentManifest;
  let first;
  let React;
  let stateFromStores;
  closure_7 = undefined;
  let first1;
  let obj = React;
  let tmp = first(React.useState(null), 2);
  first = tmp[0];
  React = tmp[1];
  let items = [shareId, attachmentManifest];
  const effect = React.useEffect(() => {
    function _fetchAttachments() {
      const self = this;
      const tmp = attachmentManifest(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_0 = undefined;
                if (undefined !== closure_1_2) {
                  if (undefined !== c3) {
                    c3 = 1;
                    obj1 = closure_2_1(closure_2_2[8]);
                    c4 = 2;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.sharedAttachments(tmp20, tmp21);
                    return obj1;
                  }
                }
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                closure_1 = closure_2;
                closure_2_9.error("Error fetching attachments:", closure_1);
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                v0(closure_0);
                c3 = 0;
              }
              c3 = 0;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 3;
          } catch (tmp24) {
            closure_2 = tmp24;
            if (tmp4 === c3) {
              v0 = tmp2;
              throw tmp24;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function fetchAttachments() {
      const self = this;
      const apply = _fetchAttachments.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  const items1 = [stateFromStores];
  stateFromStores = require(shareId[9]).useStateFromStores(items1, () => stateFromStores.getChannel(channelId));
  const tmp6 = first(React.useState(null), 2);
  closure_7 = tmp6[1];
  const items2 = [channelId, stateFromStores];
  const effect1 = React.useEffect(() => {
    function _fetchChannel() {
      const self = this;
      const tmp = attachmentManifest(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_0 = undefined;
                if (null != closure_1_1) {
                  if (null == closure_1_6) {
                    c3 = 1;
                    obj1 = closure_2_1(closure_2_2[10]);
                    c4 = 2;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.fetchChannel(tmp20);
                    return obj1;
                  }
                }
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                closure_1 = closure_2;
                closure_2_9.error("Error fetching channel:", closure_1);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                closure_1_7(closure_0);
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function fetchChannel() {
      const self = this;
      const apply = _fetchChannel.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items2);
  first1 = stateFromStores;
  if (stateFromStores == null) {
    first1 = tmp6[0];
  }
  const items3 = [text, first, channelId, first1];
  const memo = obj.useMemo(() => {
    const obj = { text: closure_0, attachments: null };
    let items = first;
    if (first == null) {
      items = [];
    }
    obj[1] = items;
    if (null != first1) {
      if (tmp.type !== text(shareId[11]).ChannelTypes.DM) {
        obj.targetChannelId = channelId;
      } else {
        let isArray = tmp;
        if (tmp) {
          isArray = "recipients" in tmp;
        }
        if (isArray) {
          const _Array = Array;
          isArray = Array.isArray(tmp.recipients);
        }
        if (isArray) {
          obj.targetUserId = tmp.recipients[0];
        } else {
          let tmp4 = tmp;
          if (tmp) {
            tmp4 = "recipient" in tmp;
          }
          if (tmp4) {
            tmp4 = "id" in tmp.recipient;
          }
          if (tmp4) {
            const recipient = tmp.recipient;
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