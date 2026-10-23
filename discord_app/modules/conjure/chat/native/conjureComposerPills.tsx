// === Module 12475: conjureComposerPills ===

// Module 12475 (conjureComposerPills)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import UserUtils from "UserUtils" /* 5023 */;
import _modDef11802 from "module_11802" /* 11802 */;
import ChatInputParser from "ChatInputParser" /* 12476 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 11799 */;

require = fn;
const Image = fn(17).Image;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/conjureComposerPills.tsx");

export const conjureFilePillIcon = function conjureFilePillIcon() {
  return Image.resolveAssetSource(_modDef11802).uri;
};
export const conjurePillText = function conjurePillText(current, name, combined) {
  combined = "\u2060" + name;
  let tmp2 = combined;
  if (current.has(combined)) {
    value = current.get(combined);
    let raw;
    if (value != null) {
      raw = value.raw;
    }
    let tmp7 = combined;
    tmp2 = combined;
    if (raw !== combined) {
      const _HermesInternal = HermesInternal;
      const combined1 = "\u2060" + tmp7;
      tmp2 = combined1;
      while (current.has(combined1)) {
        value2 = current.get(combined1);
        let raw1;
        if (value2 != null) {
          raw1 = value2.raw;
        }
        tmp7 = combined1;
        tmp2 = combined1;
        if (raw1 === combined) {
          break;
        }
      }
    }
  }
  return tmp2;
};
export const conjureUserPillLabel = function conjureUserPillLabel(id) {
  const user = UserStore.getUser(id);
  let name = id;
  if (null != user) {
    name = UserUtils.getName(user);
  }
  return "@" + name;
};
export const decodeConjurePills = function decodeConjurePills(draft) {
  const map = new Map();
  return {
    text: draft.replace(map(12328).CONJURE_ANY_MENTION, (raw, arg1, arg2) => {
      if (null != arg1) {
        const user = UserStore.getUser(arg1);
        let name = arg1;
        if (null != user) {
          name = UserUtils.getName(user);
        }
        const _HermesInternal = HermesInternal;
        let combined = "@" + name;
      } else {
        const attachment = ConjureStoredAttachmentStore.getAttachment(arg2);
        combined = undefined;
        if (attachment != null) {
          combined = attachment.name;
        }
        if (combined == null) {
          const intl = util.intl;
          combined = intl.string(_modDef3830.ff9Q4C);
        }
      }
      const combined1 = "\u2060" + combined;
      let tmp16 = combined1;
      if (map.has(combined1)) {
        value = map.get(combined1);
        raw = undefined;
        if (value != null) {
          raw = value.raw;
        }
        let tmp19 = combined1;
        tmp16 = combined1;
        if (raw !== raw) {
          const _HermesInternal2 = HermesInternal;
          const combined2 = "\u2060" + tmp19;
          tmp16 = combined2;
          while (map.has(combined2)) {
            value2 = map.get(combined2);
            let raw1;
            if (value2 != null) {
              raw1 = value2.raw;
            }
            tmp19 = combined2;
            tmp16 = combined2;
            if (raw1 === raw) {
              break;
            }
          }
        }
      }
      const obj3 = { raw, icon: null };
      let uri = null;
      if (null == arg1) {
        uri = Image.resolveAssetSource(_modDef11802).uri;
      }
      obj3.icon = uri;
      const result = map.set(tmp16, obj3);
      return tmp16;
    }),
    pills: map
  };
};
export const encodeConjurePills = function encodeConjurePills(chat, current) {
  const items = [...current.keys()];
  const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
  return sorted.reduce((acc, item) => {
    const parts = acc.split(item);
    value = current.get(item);
    let raw;
    if (value != null) {
      raw = value.raw;
    }
    if (raw == null) {
      raw = item;
    }
    return parts.join(raw);
  }, chat);
};
export const conjurePillNodes = function conjurePillNodes(arr, current, style) {
  const items = [];
  while (tmp !== undefined) {
    [first, tmp6] = tmp2;
    let arr2 = first;
    let index = arr.indexOf(first);
    let tmp8 = index;
    if (-1 !== index) {
      while ("\u2060" === arr[tmp8 - 1]) {
        let index1 = arr.indexOf(arr2, tmp8 + 1);
        tmp8 = index1;
        continue;
      }
      let obj2 = { type: ChatInputParser.ChatInputNodeType.USER_HIGHLIGHT, location: null, length: null, style: null, deleteNodeOnBackspace: true, editDisabled: true };
      obj2.location = tmp8;
      obj2.length = arr2.length;
      obj2.style = style;
      if (null != tmp6.icon) {
        let obj3 = { icon: null, iconSize: 16, iconCornerRadius: 4, iconSpacing: 4 };
        obj3.icon = tmp6.icon;
        let obj = obj3;
      } else {
        obj = {};
      }
      let merged = Object.assign(obj);
      obj2 = items.push(obj2);
    }
    continue;
  }
  return items;
};