// discord_common/js/packages/media-engine/native/RosterUpdate.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/RosterUpdate.tsx");

export function parseNativeRosterUpdate(parsed) {
  if (null != parsed) {
    if (typeof parsed === "object") {
      if ("changes" in parsed) {
        if ("memberIds" in parsed) {
          ({ changes, memberIds } = parsed);
          if (null == changes) {
            changes = {};
          }
          const obj2 = { changes, memberIds: null };
          const _Array = Array;
          let mapped = null;
          if (Array.isArray(memberIds)) {
            const _String = String;
            mapped = memberIds.map(String);
          }
          obj2.memberIds = mapped;
          return obj2;
        }
      }
      const obj = { changes: parsed, memberIds: null };
      return obj;
    }
  }
  return { changes: {}, memberIds: null };
}
export function toRosterUpdate(changes) {
  if (null != changes) {
    if (typeof changes === "object") {
      if ("changes" in changes) {
        if ("memberIds" in changes) {
          ({ changes, memberIds } = changes);
          if (null == changes) {
            changes = {};
          }
          const obj2 = { changes, memberIds: null };
          const _Array = Array;
          let mapped = null;
          if (Array.isArray(memberIds)) {
            const _String = String;
            mapped = memberIds.map(String);
          }
          obj2.memberIds = mapped;
          let obj = obj2;
        }
      }
      obj = { changes, memberIds: null };
    }
    return obj;
  }
  obj = { changes: {}, memberIds: null };
}
